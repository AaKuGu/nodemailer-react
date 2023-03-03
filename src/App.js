import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <div
      className="h-screen w-full text-white font-bold md:text-5xl text-3xl"
      style={{ background: "url('/bg.png')", backgroundSize: "contain" }}
    >
      <div className="DarkBG absolute w-full h-full  opacity-90 top-0 left-0 bg-white z-10 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-20 w-[70%]  h-[500px] z-20 absolute border-2  border-gray-500 rounded-lg "
        style={{boxShadow:"2px 2px 5px 5px skyBlue"}}
        >

          <Header />
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
