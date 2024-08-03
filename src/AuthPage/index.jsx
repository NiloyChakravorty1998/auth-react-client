import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignInOrSignUpSwitch from "./SignInOrSignUpSwitch";

const AuthPage = () => {
  const [newUser, setNewUser] = useState(false);
  console.log(newUser);

  return (
    <div className="container flex-grow flex justify-center">
      <div className="flex justify-between w-full">
        {/* LEFT */}
        {!newUser ? <SignIn /> : <SignUp />}
        {/* RIGHT */}
        <div
          className="flex flex-col items-center justify-center w-2/5 p-8 bg-gradient-to-r
          to-cyan-800 from-teal-600 text-white"
        >
          {!newUser ? (
            <SignInOrSignUpSwitch
              setNewUser={setNewUser}
              booleanState={true}
              title="New Here?"
              buttonContent="Sign up"
              desc="Sign up and discover a great amount of new opportunities!"
            />
          ) : (
            <SignInOrSignUpSwitch
              setNewUser={setNewUser}
              booleanState={false}
              title="Already an user ?"
              buttonContent="Sign in"
              desc="Sign in and discover a great amount of new opportunities!"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
