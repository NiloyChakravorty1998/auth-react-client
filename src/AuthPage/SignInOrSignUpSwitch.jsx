import React from "react";

const SignInOrSignUpSwitch = (props) => {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold"> {props.title} </h1>
        <p className="text-sm ">{props.desc}</p>
        <button
          onClick={() => props.setNewUser(props.booleanState)}
          className="bg-white text-black px-14 py-3 mt-3 
          rounded-full font-semibold hover:bg-teal-400 hover:text-white">
          {props.buttonContent}
        </button>
      </div>
    </>
  );
};

export default SignInOrSignUpSwitch;
