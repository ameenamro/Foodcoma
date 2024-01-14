import express  from "express";
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import { errorHandler } from "./middleware/errorHandling.js";
import imagerouter from "./routes/image.routes.js";

const server=express();
dotenv.config()

// midlleware
server.use(cors())
server.use(express.json());
server.use(errorHandler)

// routes 
server.use("/api/v1/foodcoma",imagerouter);


const PORT = process.env.PORT || 2000;

connectDB().then(()=>{
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });

})
