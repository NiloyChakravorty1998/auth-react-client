import React from 'react'

const SignUp = () => {
  return (
    <>
    <div
          className="flex flex-col items-center justify-center w-2/5 p-8 bg-gradient-to-r
          to-cyan-800 from-teal-600 text-white space-y-4"
        >
          <h1 className="text-4xl font-bold">New Here?</h1>
          <p className="text-sm">
            Sign up and discover a great amount of new opportunities!
          </p>
          <button className="bg-white text-black px-14 py-3 rounded-full font-semibold hover:bg-teal-400 hover:text-white">
            Sign Up
          </button>
        </div>
    </>
  )
}

export default SignUp