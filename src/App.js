import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <div
      className="h-screen w-full text-white font-bold md:text-5xl text-3xl"
      style={{ background: "url('/bg.png')", backgroundSize: "contain" }}
    >
      <div className="DarkBG absolute w-full h-full  opacity-80 top-0 left-0 bg-black z-10">
        <div className="flex flex-col items-center justify-center gap-20 w-full h-full z-20 absolute">
          <Header />
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
