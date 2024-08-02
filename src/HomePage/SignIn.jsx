import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SignIn = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center w-4/5 p-8 space-y-2">
          <h1 className="text-4xl font-bold">Login to Your Account</h1>
          <p>Login using social networks</p>
          <div className="flex space-x-3">
            <FaGithub className="text-3xl" />
            <FaLinkedin className="text-3xl text-blue-700" />
          </div>
          <p className="font-medium text-slate-600"> OR </p>
          <hr />
          <div>
            <div className="mb-5 flex flex-col space-y-3">
              <input
                placeholder="Email"
                autoComplete="off"
                type="email"
                className="px-2 justify-center items-center 
                w-80 h-8 rounded-xl field placeholder:text-sm text-black"
              />
              <input
                placeholder="Password"
                autoComplete="off"
                type="password"
                className="px-2 justify-center items-center 
                w-80 h-8 rounded-xl field placeholder:text-sm text-slate-700"
              />
              <center>
                <button
                  className="w-40 h-10 justify-center items-center
               bg-teal-600 text-white hover:bg-cyan-800 rounded-full"
                >
                  Sign in
                </button>
              </center>
            </div>
          </div>
        </div>
    </>
  )
}

export default SignIn