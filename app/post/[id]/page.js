import React from "react";
import Image from "next/image";

const Post = () => {
  return (
    <div className="mt-8 px-7 lg:px-44 justify-center items-center  ">
        <div className="flex flex-col space-y-3">
            <h1 className="font-semibold text-lg leading-6" >The Impact of Technology on the Workplace: How Technology is Changing</h1>
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
            <Image src="/assets/postimg.png" alt="Next.js Logo" 
            width={400} height={500}
            className="rounded-md w-full" />
            <p>Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.</p>
            <div className="">
                <button className="bg-indigo-600 mb-2 mr-2 text-white rounded-md p-1 text-2xs inline-block">
                Technology
                </button>
            </div>
        </div>
    </div>
  )
};

export default Post;
