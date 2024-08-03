import React from "react";
import Navbar from "./Navbar";
import AuthPage from "./AuthPage";

const App = () => {
  return (
    <div className="app h-screen flex flex-col">
      <Navbar />
      <AuthPage />
    </div>
  );
};

export default App;
