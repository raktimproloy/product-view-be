import mongoose from "mongoose";

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL!, {

        })
    }catch(error){
        console.log("Error", error);
    }
    const connection = mongoose.connection;

    if(connection.readyState >= 1){
        console.log("Database connected");
        return
    }
    connection.on("error", () => console.log("Database connection failed"))
}

export default connectDB;