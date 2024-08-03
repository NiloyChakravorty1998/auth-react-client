import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SignUp = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-4/5 p-8 space-y-2">
        <h1 className="text-4xl font-bold">Welcome </h1>
        <p>Sign up using social networks</p>
        <div className="flex space-x-3">
          <FaGithub className="text-3xl" />
          <FaLinkedin className="text-3xl text-blue-700" />
        </div>
        <p className="font-medium text-slate-600"> OR </p>
        <hr />
        <div>
          <div className="mb-5 flex flex-col space-y-3">
            <input
              placeholder="First name"
              autoComplete="off"
              type="First name"
              className="px-2 justify-center items-center focus:border-white focus:outline-slate-200
                w-80 h-8  border-b-2 border-b-slate-300  rounded-md  placeholder:text-sm text-black"
            />
            <input
              placeholder="Last name"
              autoComplete="off"
              type="Last name"
              className="px-2 justify-center items-center focus:border-white focus:outline-slate-200
                w-80 h-8 border-b-2 rounded-md border-b-slate-300 placeholder:text-sm text-black"
            />
            <input
              placeholder="Username"
              autoComplete="off"
              type="username"
              className="px-2 justify-center items-center focus:border-white focus:outline-slate-200
                w-80 h-8 border-b-2 border-b-slate-300   rounded-md placeholder:text-sm text-black"
            />
            <input
              required
              placeholder="Email"
              autoComplete="off"
              type="email"
              className="px-2 justify-center items-center focus:border-white focus:outline-slate-200
                w-80 h-8 border-b-2 border-b-slate-300  rounded-md placeholder:text-sm text-black"
            />
            <input
              required
              placeholder="Password"
              autoComplete="off"
              type="password"
              className="px-2 justify-center items-center focus:border-white focus:outline-slate-200
                w-80 h-8 border-b-2 border-b-slate-300   rounded-md placeholder:text-sm text-slate-700"
            />
            <center>
              <button
                className="w-40 h-10 justify-center items-center
               bg-teal-600 text-white hover:bg-cyan-800 rounded-full"
              >
                Sign up
              </button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
