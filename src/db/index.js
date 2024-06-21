import mongoose from "mongoose";
import { DB_Name } from "../constants.js";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

const connectDB = async () =>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`\n MONGODB CONNECTED!!!!!!DB HOST:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGO ERROR",error);
        process.exit(1)
    }
}

export default connectDB