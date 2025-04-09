import React, { useState } from "react";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { Upload, Button } from "antd";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className=" px-6 py-3 w-[450px] h-[500px] bg-gray-100/100 shadow-2xl flex flex-col justify-center gap-1.5 rounded-md ">
        <h1 className="text-center text-gray-800 text-3xl mb-6">
          Create Account
        </h1>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="name" className="text-bold">
            Name
          </label>
          <Input
            name="name"
            value={name}
            onClick={(e) => setName(e.target.value)}
            placeholder="Name..."
          />
        </div>
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
        <div className="flex flex-col gap-2.5">
          <label htmlFor="image" className="tex-bold">
            Profile Picture
          </label>
          <input
            type="file"
            name="image"
            value={image}
            accept="image/*"
            onChange={(e) => {
              if (e.target.files[0]) {
                setImage(e.target.files[0]);
              }
            }}
            className="border rounded-md p-2"
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

export default Register;
