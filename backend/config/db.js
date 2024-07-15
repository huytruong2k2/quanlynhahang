import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://boxtrolls0502:Huytruong0502%40@cluster0.lbdksli.mongodb.net/food-del').then(()=>console.log("DB connected"));
}