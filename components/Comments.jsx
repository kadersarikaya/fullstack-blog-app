"use client";

import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
};

const Comments = ({ postSlug }) => {
    const { status } = useSession();
    const { data, mutate, isLoading } = useSWR(
        `http://localhost:3000/api/comments?postSlug=${postSlug}`,
        fetcher
    );

    const [desc, setDesc] = useState("");

    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ desc, postSlug }),
        });
        mutate();
        setDesc("");
        
    };
    return (
        <div className="my-10">
            <h2 className="font-semibold text-xl leading-6">Comments</h2>
            {isLoading
                ? "loading"
                : data?.map((item) => (
            <div className="border-2 rounded-md border-gray-50 shadow-lg p-4 mt-4">
                <div className="flex items-center">
                    {item?.user?.image && (
                    <Image
                        src={item.user.image}
                        alt="Next.js Logo"
                        width={20}
                        height={20}
                        className="rounded-full"
                    />
                    )}
                    <p className="text-2xs ml-3">{item.user.name}</p>
                    <p className="text-2xs ml-4">{item.createdAt
                        .slice(0, 10)
                    }</p>
                </div>
                <p className="mt-2 leading-6">{item.desc}</p>
            </div>
            ))}
            {status === "authenticated" ? (
            <div className="mt-5 items-center flex">
                <textarea onChange={(e) => setDesc(e.target.value)}
                className="border-2 rounded-md border-gray-50 shadow-lg p-4 mt-4 w-full" placeholder="Write a comment..."></textarea>
                <button onClick={handleSubmit}
                 className="bg-indigo-50 ml-3 font-semibold text-indigo-700 rounded-md p-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </button>
            </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
        </div> 
    )
};

export default Comments;
