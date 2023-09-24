"use client"
import React from "react";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
    const router = useRouter();
  return (
      <div className="flex justify-between">
          <button 
              disabled={!hasPrev}
              onClick={() => router.push(`?page=${page - 1}`)}
          className="w-auto border border-gray-200 text-white bg-red-400 rounded-md px-5 py-3 text-2xs inline-block my-12">
              Previous
          </button>
          <button 
              disabled={!hasNext}
              onClick={() => router.push(`?page=${page + 1}`)}
          className="w-auto border border-gray-200 text-white bg-red-400 rounded-md px-5 py-3 text-2xs inline-block my-12">
              Next
          </button>
      </div>
  )
};

export default Pagination;
