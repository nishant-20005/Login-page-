import React, { useState } from "react";

function Loginpage() {
  const [Change, setChange] = useState("Login");
  return (
    <div class="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-900 ">
      <div class="p-10 bg-white rounded ">
        {/* header */}
        <div class="flex justify-center items-center mb-5 text-4xl font-semibolds flex-col">
          <div class="flex flex-col items-center">
            <h1 class="text-purple-500">{Change}</h1>
            <div class="bg-purple-600 h-1 w-18 mt-2 rounded-2xl"></div>
          </div>
        </div>
        {/* name  */}
        <div class="flex mt-5 w bg-gray-200 h-15 rounded">
          <div class="p-3 flex items-center ">
            <img src="src\assets\person.png" class="mr-2 h-5" alt="" />
            <input
              class="border-none outline-none"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        {/* email */}
        <div class="flex mt-5 w bg-gray-200 h-15 rounded">
          <div class="p-3 flex items-center ">
            <img src="src\assets\email.png" class="mr-2 h-5" alt="" />
            <input
              class="border-none outline-none"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        {/* password */}
        <div class="flex mt-5 bg-gray-200 h-15 rounded">
          <div class="p-3 flex items-center">
            <img src="src\assets\password.png" class="mr-2 h-5" alt="" />
            <input
              class="border-none outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="text-sm">
          Forggot password?{" "}
          <span class="text-blue-500 cursor-pointer">Click here!</span>
        </div>
        <div class="flex gap-20 mt-3 justify-center items-center">
          <div
            onClick={() => setChange("Sign Up")}
            class={` text-white py-2 px-5 rounded-4xl  cursor-pointer ${
              Change === "Sign Up" ? "bg-purple-700" : "bg-gray-300"
            } `}
          >
            Sign up
          </div>
          <div
            onClick={() => setChange("Login")}
            class={` text-white py-2 px-5 rounded-4xl cursor-pointer ${
              Change === "Login" ? "bg-purple-700 " : "bg-gray-300"
            }`}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
