import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://dksingh:satyam77@cluster0.1yipfw1.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}