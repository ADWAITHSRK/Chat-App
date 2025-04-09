import React, { useState } from "react";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { Upload, Button } from "antd";

const Login= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className=" px-6 py-3 w-[450px] h-[500px] bg-blue-200/40 shadow-2xl flex flex-col justify-center gap-1.5 rounded-md ">
        <h1 className="text-center text-gray-800 text-3xl mb-6">
          Create Account
        </h1>
       
        <div className="flex flex-col gap-2.5">
          <label htmlFor="email" className="text-bold">
            Email
          </label>
          <Input
            name="email"
            value={email}
            onClick={(e) => setEmail(e.target.value)}
            placeholder="Email..."
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="password" className="text-bold">
            password
          </label>
          <Input
            name="password"
            value={password}
            onClick={(e) => setPassword(e.target.value)}
            placeholder="Password..."
          />
        </div>
       
        <button className="w-full mt-3 bg-blue-400 p-1 rounded-md">
          Sign Up
        </button>
        <span className="text-center mt-1">Already Have an Account</span>
      </div>
    </div>
  );
};

export default Login;
