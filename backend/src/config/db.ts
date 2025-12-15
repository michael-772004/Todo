import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const connectDb = async () : Promise<void>=>{
    const mongodbUrl : string  = process.env.MONGODB_URL || "";
    try{
        await mongoose.connect(mongodbUrl);
        console.log("Database is connected");
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

export default connectDb;