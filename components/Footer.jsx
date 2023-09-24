import React from "react";
import Image from "next/image";
const Footer = () => {
  return(
    <div className="flex mt-8 px-7 lg:px-32 justify-between py-5">
      <div className="flex flex-col space-y-4 w-1/3">
        <div className="">
          <Image/>      
          <button className="text-2xl font-mono font-bold">BLOGIFY.</button>
        </div>
        <p className="text-sm ">Lorem ipsum dolor sit amet
         consectetur adipisicing elit. Quisquam, voluptatum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
         </p>

      </div>
      <div className="flex space-x-8">
        <div className="">
          <p className="font-semibold"> Links</p>
          <ul className="space-y-2">
            <li className="text-sm">Home</li>
            <li className="text-sm">About</li>
            <li className="text-sm">Contact</li>
            <li className="text-sm">Blog</li>
          </ul>
        </div>
        <div className="">
          <p className="font-semibold">Tags</p>
          <ul className="space-y-2">
            <li className="text-sm">Travel</li>
            <li className="text-sm">Style</li>
            <li className="text-sm">Fashing</li>
            <li className="text-sm">Coding</li>
          </ul>
        </div>
        <div className="">
          <p className="font-semibold">Social</p>
          <ul className="space-y-2">
            <li className="text-sm">Facebook</li>
            <li className="text-sm">Instagram</li>
            <li className="text-sm">Youtube</li>
            <li className="text-sm">TikTok</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-1/3">
        <p className="font-semibold">Subscribe</p>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        <div className="flex space-x-2">
          <input type="text" placeholder="Enter your email" className="border-2 border-gray-200 rounded-md px-2 py-1 text-sm focus:outline-none focus:border-indigo-500"/>
          <button className="bg-indigo-500 text-white px-2 py-1 rounded-md text-sm">Subscribe</button>
        </div>
      </div>
    </div>
  )
};

export default Footer;
