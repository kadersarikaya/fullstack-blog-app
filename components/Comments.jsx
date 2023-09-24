import React from "react";
import Image from "next/image";

const Comments = () => {
  return (
      <div className="my-10">
          <h2 className="font-semibold text-xl leading-6">Comments</h2>
          <div className="border-2 rounded-md border-gray-50 shadow-lg p-4 mt-4">
              <div className="flex items-center">
                  <Image
                      src="/assets/avatar.png"
                      alt="Next.js Logo"
                      width={20}
                      height={20}
                      className="rounded-full"
                  />
                  <p className="text-2xs ml-3">John Doe</p>
                  <p className="text-2xs ml-4">Jan 1, 2021</p>
              </div>
              <p className="mt-2 leading-6">The Impact of Technology on the Workplace: How Technology is Changing</p>

          </div>
          <input type="text" placeholder="Write a comment" className="border-2 rounded-md border-gray-200 shadow-md p-2 w-96" />
          <button className="bg-indigo-50 font-semibold text-indigo-700 rounded-md p-2 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
          </button>
          <div className="flex items-center mt-4 space-x-2">
              <Image
                  src="/assets/avatar.png"
                  alt="Next.js Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
              />
          </div>
      </div>
  )
};

export default Comments;
