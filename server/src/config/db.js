import mongoose from "mongoose";

const db = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB connected")
    }catch(err){
        console.log("Error: "+err.message)
    }
}

export default db