import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const DB_URL = process.env.DB_URL;


export async function connect() {
    try {
      await mongoose.connect(DB_URL);
      console.log("Connected to mongodb");
    } catch (error) {
      console.log(error);
    }
  }
  