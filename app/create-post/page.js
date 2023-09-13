"use client";
import React, {useState} from "react";
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";
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
  return (
    <div className="px-8 py-4">
      <form className="flex flex-col space-y-4" >
        <input className="border p-1" type="text" placeholder="Title" />
        <input 
        type="file" 
        placeholder="Image" 
        name="image"
        className="border p-1"
        />
        <ReactQuill 
        theme="snow"
        onChange={setContent}
        value={content} modules={modules} formats={formats} />
          <button
          className="justify-start bg-indigo-50 mt-2 font-semibold text-indigo-700 rounded-md px-4 py-2 text-2xs inline-block"
          type="submit">Create Post</button>
      </form>
    </div>
  )
};

export default CreatePost;
