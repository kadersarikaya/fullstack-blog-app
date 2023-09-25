import React from "react";
import Link from "next/link";
import Image from 'next/image'

const Card = ({ key, item }) => {
    console.log(item)
  return (
    <Link href={`/posts/${item.slug}`}>
    <div key={key} className="flex border-2 mb-10 cursor-pointer rounded-md hover:border-gray-200 duration-100 border-gray-50 shadow-lg p-4">
        {item?.img && (
            <Image
                src={item?.img}
                alt="Next.js Logo"
                width={200}
                height={200}
                className="rounded-md "
            />
        )}
        <div className="ml-2">
            <button className="bg-indigo-50 mt-2 font-semibold text-indigo-700 rounded-md p-1 text-xs inline-block">
                    {item.catSlug}
            </button>
                <p className="mt-2 font-semibold text-lg leading-6">{item.title}</p>
            <div className="mt-3">
                <div className="flex flex-col space-y-1">
                    <p className="text-xs">{item.createdAt.substring(0, 10)} </p>
                    <div className="flex pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-2xs ml-1">
                            {item.views}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Link>
  )
};

export default Card;
