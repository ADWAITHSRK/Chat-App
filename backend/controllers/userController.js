import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET_KEY || "qazwsxedcrfv", {
    expiresIn: "7d",
  });
};

export const register = async (req, res) => {
  try {
    const { fullName, email, password, gender } = req.body;
    if (!fullName || !email || !password || !gender) {
      return res.status(400).json({ message: "Some Thing is Missing" });
    }
    const cloudinaryUrls = req.body.cloudinaryUrls;
    if (cloudinaryUrls.length === 0) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    const imageUrls = cloudinaryUrls[0];
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: "user Allready Exist" });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    const new_User = new User({
      fullName: fullName,
      email: email,
      password: hashedpassword,
      gender: gender,
      profilePic: imageUrls,
    });

    await new_User.save();
    const token = generateToken(new_User._id.toString());
    res.cookie("auth_token", token);
    return res.status(201).json(new_User);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, gender } = req.body;
    if (!email || !password || !role) {
      res.status(400).json({ message: "Credentials Required" });
      return;
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(400).json({ message: "Invalid Credentials" });
      return;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid Credentials" });
      return;
    }
    const token = generateToken(user._id.toString());
    res.cookie("auth_token", token, { httpOnly: true });
    return res.status(201).json(token);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("auth_token");
  return res.status(200).json({ message: "Logout SuccesFully" });
};

export const getProfile = async (req, res) => {
  try {
    const _id = req._id; 
    const user = await User.findById(_id)
    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching profile:", error); // Log the error for debugging
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
