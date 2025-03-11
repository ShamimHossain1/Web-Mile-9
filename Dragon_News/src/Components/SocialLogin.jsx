import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div>

            <div className="">
                <h2 className="text-xl font-semibold mb-4">Login With</h2>
                <div className="space-y-2">
                 
                    <button className="w-full flex items-center justify-center space-x-2 border text-sky-500 rounded-md py-2 shadow-sm hover:bg-gray-100">
                        <FaGoogle />

                        <span>Login with Google</span>
                    </button>

                    <button className="w-full flex items-center justify-center space-x-2 border rounded-md py-2 shadow-sm hover:bg-gray-100">
                        <FaGithub />

                        <span>Login with Github</span>
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default SocialLogin;
