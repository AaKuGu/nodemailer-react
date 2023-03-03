import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [email, setEmail] = useState("");
  const inputRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    await axios.post(
      "https://nodemailer-server-topaz.vercel.app/api/register",
      { email }
    );

    toast("Email sent, Check your inbox ...!");
  };

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <div
      className="text-xl gap-16 flex flex-col md:px-5 px-2 py-5 rounded-lg w-[80%] md:w-[70%] xl:w-[70%] z-20"
      style={{ background: "blue" }}
    >
      <Toaster position="top-center" reverseOrder="false" />
      <div className="text-center md:text-3xl text-2xl font-">
        Receive an email from me
      </div>
      <form
        action=""
        onSubmit={sendEmail}
        className="flex flex-col items-center gap-5 text-white"
      >
        <div className="flex items-center justify-center  gap-1 md:gap-2 lg:gap-3 flex-col md:flex-row">
          <label
            htmlFor="email"
            className="font-mono w-[30%] text-base md:text-2xl text-center "
          >
            Email :{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-1 md:py-2 rounded-lg flex items-center w-full text-black outline-none border-none text-base md:text-lg"
            // className="border-none outline-none px-5 font-bold text-base md:text-2xl w-full  rounded-lg bg-white text-black   mb-10 md:mb-0 py-2"
            // style={{ color: "white" }}
            ref={inputRef}
          />
        </div>

        <button
          type="submit"
          className="md:px-5 md:py-2 hover:bg-red-900 rounded-lg md:text-2xl text-lg px-3 py-1"
          style={{ background: "purple" }}
          onClick={() => {
            toast("Sending...");
          }}
        >
          Receive
        </button>
      </form>
    </div>
  );
};

export default Home;
