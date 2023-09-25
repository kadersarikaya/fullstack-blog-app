import Link from "next/link";
import React from "react";

const predefinedColors = ["bg-red-200", "bg-orange-200", "bg-yellow-200", "bg-slate-200", "bg-purple-200", "bg-gray-200"];

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};

const CategoryList = async () => {
    const data = await getData();
    return (
        <>
            {data?.map((item, index) => (
                <Link href={`/blog?cat=${item.slug}`}
                    key={item._id}
                >
                    <button
                        className={`mb-2 mr-2 text-slate-500 rounded-md py-1 px-2 text-sm inline-block ${predefinedColors[index % predefinedColors.length]}`}
                        >
                        {item.title}
                    </button>
                </Link>
            ))}
        </>
    );
};

export default CategoryList;
