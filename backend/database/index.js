import mongoose from "mongoose";

const connectDB = async()=>{

    try{
        await mongoose.connect(`${process.env.MONGO_URI}/pinkbasket`)
        console.log("Mongo connected")
    }catch(error){
     console.log("Mongo Connection Failed",error)
     process.exit(1)
    }
}

export default connectDB