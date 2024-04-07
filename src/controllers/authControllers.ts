import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel";
import validateEmail from "../utils/validateEmail";


export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User is already registered" });
    }
    if(!validateEmail(email)){
      return res.status(400).json({message:"Invalid Email"})
    }
    
    const hashingPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      username,
      email,
      password: hashingPassword,
    });
    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET || "secretKey"
    );
    res.status(201).json({ user: newUser, token });
  } catch (error) {
    console.error("Error when registered the user", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Unregistered user" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "secretKey"
    );
    res.status(200).json({ user, token });
  } catch (error) {
    console.error("Error authenticating the user", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

