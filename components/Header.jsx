"use client"
import React, {useState} from "react";

const Header = () => {
    const [isToggleProfile, setIsToggleProfile] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    
  return (
      <nav class="bg-white border-b-2 border-gray-100">
        <div className="flex justify-between px-5 py-3 items-center">
            <button className="text-2xl font-mono font-bold">BLOGIFY.</button>
            <div className="flex">
                {/* dark mode */}
                {/* profile */}
                <button className="p-2 mr-2 bg-gray-100 rounded-md shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </button>
                  <button className="mr-2">
                    <img src="https://avatars.githubusercontent.com/u/55942632?v=4" className="w-8 h-8 rounded-full" />
                  </button>
                {/* login */}
                <button className="mr-2 px-4 py-2 rounded-md border border-indigo-300 ">Login</button>
                  <button className="mr-2 px-4 py-2 rounded-md text-white bg-indigo-500">Sign Up</button>
            </div>
        </div>
      </nav>
    );
};


export default Header;
