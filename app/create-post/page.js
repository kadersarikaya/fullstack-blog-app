"use client";
import React, {useState, useContext} from "react";
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";
import { ThemeContext } from "@/context/ThemeContext";
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
  const [content, setContent] = useState('')
  const { theme } = useContext(ThemeContext)
  return (
    <div className="px-8 py-4 ">
      <form className="flex flex-col space-y-4" >
        <input className={theme ==="dark" ? "border p-1 bg-[#1f2937]":"border p-1"} type="text" placeholder="Title" />
        <input 
        type="file" 
        placeholder="Image" 
        name="image"
        className="border p-1"
        />
        <ReactQuill 
        className="h-96"
        onChange={setContent}
        value={content} modules={modules} formats={formats} />
        <div className="">
          <button
          className="justify-start bg-indigo-600 mt-10 font-semibold text-indigo-50 rounded-md px-4 py-2 inline-block"
          type="submit">Create Post</button>
          </div>
      </form>
    </div>
  )
};

export default CreatePost;
