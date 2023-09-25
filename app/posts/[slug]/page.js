import React from "react";
import Image from "next/image";
import Comments from "@/components/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Post = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <div className="mt-8 px-7 lg:px-32 justify-center items-center ">
        <div className="flex flex-col space-y-5">
            <h1 className="font-semibold text-3xl leading-6" >{data?.title}</h1>
            <div className="flex items-center">
               {data?.user?.image && (
                  <Image
                  src={data.user.image}
                  alt="Next.js Logo"
                  width={20}
                  height={20}
                  className="rounded-full"
                  />
                )}
                <p className="text-xs ml-3">{data?.user.name}</p>
                <p className="text-xs ml-4">Jan 1, 2021</p>
            </div>
            {data?.img && (
            <Image src={data.img} alt="Next.js Logo" 
            width={1000} height={800}
            className="rounded-md bg-cover bg-center" />
            )}
              <p className="text-lg leading-normal" dangerouslySetInnerHTML={{ __html: data?.desc }}/>
              <div className="">
                  <button className="bg-indigo-600 my-5 mr-2 text-white rounded-md p-1 text-xs inline-block">
                  {data?.catSlug}
                  </button>
              </div>
            <Comments postSlug={slug} />
        </div>
    </div>
  )
};

export default Post;

 