import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

const MONGO_URL = "mongodb+srv://antonio:antonio@cluster0.9ungab2.mongodb.net/"
// "mongodb+srv://antonio:antonio@cluster0.9ungab2.mongodb.net/"
 

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
mongoose.connection.on('error',(error:Error) => console.log(error));


app.use('/',router)