import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const CardList = async ({page, cat}) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  
  return (
    <div className="flex flex-col mt-6 w-1/2">
      <h2 className="text-2xl font-bold my-8">Latest Posts</h2>
      {posts?.map((item) => (
        <Card item={item} key={item._id} />
      ))}
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
};

export default CardList;
