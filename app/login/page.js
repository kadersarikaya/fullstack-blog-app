import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center mt-10">
        <div className="border-2 rounded-md border-gray-50 shadow-lg bg-white p-4">
            <div className="flex justify-center items-center">
                <h1 className="text-2xl font-semibold">Login</h1>
            </div>
            <div className="mt-4">
                <div className="flex justify-center items-center">
                    <input type="text" placeholder="Username" className="border-2 rounded-md border-gray-200 shadow-md p-2 w-80" />
                </div>
                <div className="flex justify-center items-center mt-4">
                    <input type="password" placeholder="Password" className="border-2 rounded-md border-gray-200 shadow-md p-2 w-80" />
                </div>
                <div className="flex justify-center items-center mt-4">
                    <button className="bg-indigo-50 font-semibold text-indigo-700 rounded-md p-2 text-2xs inline-block w-80">
                        Login
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Login;
