import React from "react";

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
            {data?.map((item) => (
                <button className="bg-indigo-600 mb-2 mr-2 text-white rounded-md p-1 text-2xs inline-block">
                    {item.title} 
                </button>
            ))}
        </>
    );
};

export default CategoryList;
