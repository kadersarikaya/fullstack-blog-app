"use client";
import React, {useState, useEffect} from "react";
import 'react-quill/dist/quill.snow.css';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean'],
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
  ]



const CreatePost = () => {
  const { status } = useSession();
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

   useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

   if (status === "loading") {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div class="w-16 h-16 border-t-4  border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

   const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };


  return (
    <div className="py-4 mt-8 px-7 lg:px-32">
      <form className="flex flex-col space-y-4" >
        <input 
        onChange={(e) => setTitle(e.target.value)}
        className="text-black p-1 border" type="text" placeholder="Title" />
        <input 
        onChange={(e) => setFile(e.target.files[0])}
        type="file" 
        placeholder="Image" 
        name="image"
        className="border p-1"
        />
        <select className="border p-1 text-black" onChange={(e) => setCatSlug(e.target.value)}>
          <option value="react">react</option>
          <option value="backend">backend</option>
          <option value="mobile">mobile</option>
          <option value="frontend">frontend</option>
          <option value="economics">economics</option>
          <option value="data science">data science</option>
        </select>
        <ReactQuill 
        placeholder="Write something amazing..."
        className="h-96"
        onChange={setValue}
        value={value} modules={modules} formats={formats} />
        <div className="">
          <button
          onClick={handleSubmit}
          className="justify-start bg-indigo-600 mt-10 font-semibold text-indigo-50 rounded-md px-4 py-2 inline-block"
          type="submit">Create Post</button>
          </div>
      </form>
    </div>
  )
};

export default CreatePost;
