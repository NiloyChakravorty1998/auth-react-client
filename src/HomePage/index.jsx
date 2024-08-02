import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const HomePage = () => {
  return (
    <div className="container flex-grow flex justify-center">
      <div className="flex justify-between w-full">
        {/* LEFT */}
        <SignIn/>
        {/* RIGHT */}
        <SignUp/>
      </div>
    </div>
  );
};

export default HomePage;
