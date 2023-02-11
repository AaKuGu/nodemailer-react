import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [email, setEmail] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8000/api/register", { email });
    toast("Email sent, Check your inbox ...!");
    console.log(res);
  };
  return (
    <div
      className="text-xl gap-16 flex flex-col px-5 py-5 rounded-lg w-[50%] z-20"
      style={{ background: "blue" }}
    >
      <Toaster position="top-center" reverseOrder="false" />
      <div className="text-center text-3xl">Receive an email from me !...</div>
      <form
        action=""
        onSubmit={sendEmail}
        className="flex flex-col items-center gap-5"
      >
        <div className="flex justify-center gap-5 text-3xl">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="border-none outline-none px-5 font-bold text-lg min-w-[200px] max-w-[300px] rounded-lg "
            style={{ color: "black" }}
          />
        </div>

        <button
          type="submit"
          className="px-5 py-2 hover:bg-red-900 rounded-lg w-[130px] text-2xl"
          style={{ background: "purple" }}
          onClick={() => toast("Sending...")}
        >
          Receive
        </button>
      </form>
    </div>
  );
};

export default Home;
