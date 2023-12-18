import React from "react";
import Skills from "./pages/Skills";
import PopUp from "./components/PopUp";
import TestingNav from "./pages/TestingNav";
import underDev from './assets/images/under.png'

function App() {
  return <div className="bg-gray-800 h-screen">
    {/* <TestingNav /> */}
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-white my-4 font-bold sm:text-3xl  md:text-4xl"> Site Under Development  </h1>

      <img src={underDev} alt="underdev" />
    </div>
    <Skills />
    {/* <PopUp /> */}
    {/* <div>
<div className=" w-12 h-12  bg-purple-600 flex justify-center items-center">
  <div className="  text-center w-4 h-4 rounded-full bg-white hover:animate-bounce">
    <p className="text-sm">h</p>
  </div>
</div>
    </div> */}
  </div>;
}

export default App;
