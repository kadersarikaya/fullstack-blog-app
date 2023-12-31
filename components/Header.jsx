"use client"
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import React, {useState, useContext} from "react";
import { signOut, useSession } from "next-auth/react";

const Header = () => {

  const {theme, toggle} = useContext(ThemeContext)
  const { status } = useSession();

  
  return (
      <nav class="">
        <div className="flex justify-between px-5 py-3 items-center">
          <Link href="/">
            <button className="text-4xl font-mono font-bold">BLOGIFY.</button>
          </Link>
            <div className="flex items-center space-x-4">
                {/* dark mode */}
                <button className="p-2 mr-2 rounded-md shadow-sm" onClick={toggle}>
                  {theme === 'light' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                  )}
                </button>
                {/* create post  */}

              {status === "authenticated" ? (
                <>
                  <Link href="/create-post">
                    <button className="p-2 mr-2 rounded-md shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                    </button>
                  </Link>
                  <button onClick={signOut}>Logout</button>
                </>
              ) : (
                <Link href="/login">
                  <button className="mr-2 px-4 py-2 rounded-lg text-md text-white bg-indigo-500">Sign In</button>
                </Link>
              )}
            </div>
        </div>
      </nav>
    );
};


export default Header;
