import React from "react";
import Image from "next/image";

const Post = () => {
  return (
    <div className="mt-8 px-7 lg:px-32 justify-center items-center ">
        <div className="flex flex-col space-y-3">
            <h1 className="font-semibold text-2xl leading-6" >The Impact of Technology on the Workplace: How Technology is Changing</h1>
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
            width={1000} height={800}
            className="rounded-md bg-cover bg-center" />
            <p>Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.</p>
            <div className="">
                <button className="bg-indigo-600 mb-2 mr-2 text-white rounded-md p-1 text-2xs inline-block">
                Technology
                </button>
            </div>
            <div className="">
                <h1 className="text-lg font-semibold py-4">Comments</h1>
                <div className="flex flex-col space-y-3 ">
                    <div className="flex space-x-2">
                        <Image
                        src="/assets/avatar.png"
                        alt="Next.js Logo"
                        width={20}
                        height={20}
                        className="rounded-full"
                        />
                        <p className="text-sm">John Doe</p>
                        <p className="text-sm">Jan 1, 2021</p>
                    </div>
                    <p className="text-sm">Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.</p>
                </div> 
                <div className="flex py-5 items-center">
                    <input type="text" placeholder="Write a comment" className="text-black border bg-none rounded-md p-2 w-1/3" />
                    <button className="bg-indigo-600 mb-2 mr-2 text-white rounded-md p-2 inline-block ml-2">
                    Post
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Post;