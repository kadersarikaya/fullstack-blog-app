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
              className={`w-auto border border-gray-200 text-white ${hasPrev ? 'bg-red-400' : 'bg-red-300' // Devre dışı durumda gri rengi kullan
                  } rounded-md px-5 py-3 text-2xs inline-block my-12`}
          >
              Previous
          </button>
          <button 
            disabled={!hasNext}
            onClick={() => router.push(`?page=${page + 1}`)}
              className={`w-auto border border-gray-200 text-white ${hasNext ? 'bg-red-400' : 'bg-red-200' // Devre dışı durumda gri rengi kullan
                  } rounded-md px-5 py-3 text-2xs inline-block my-12`}
          >
              Next
          </button>
      </div>
  )
};

export default Pagination;
