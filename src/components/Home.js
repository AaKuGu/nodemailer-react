import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [email, setEmail] = useState("");
  const [ress, setRess] = useState();
  const inputRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const res = await axios.get(
      "https://nodemailer-server-topaz.vercel.app/api/get"
    );

    setRess("Hii");
    console.log("res", res);
    toast("Email sent, Check your inbox ...!");
  };

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <div
      className="text-xl gap-16 flex flex-col px-5 py-5 rounded-lg w-[80%] md:w-[70%] xl:w-[70%] z-20"
      style={{ background: "blue" }}
    >
      <Toaster position="top-center" reverseOrder="false" />
      <div className="text-center md:text-3xl text-2xl font-">
        Receive an email from me
      </div>
      <form
        action=""
        onSubmit={sendEmail}
        className="flex flex-col items-center gap-5"
      >
        <div className="flex justify-center md:gap-0 gap-5 md:text-3xl text-xl flex-col md:flex-row items-center">
          <label htmlFor="email" className="font-mono">
            Email :{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="border-none outline-none px-5 font-bold text-base md:text-2xl w-[200px]  rounded-lg bg-gray-700 md:bg-transparent mb-10 md:mb-0 py-2"
            style={{ color: "white" }}
            ref={inputRef}
          />
        </div>

        <button
          type="submit"
          className="md:px-5 md:py-2 hover:bg-red-900 rounded-lg md:text-2xl text-lg px-3 py-1"
          style={{ background: "purple" }}
          onClick={() => toast("Sending...")}
        >
          Receive
        </button>
      </form>
      <div>{ress}</div>
    </div>
  );
};

export default Home;
