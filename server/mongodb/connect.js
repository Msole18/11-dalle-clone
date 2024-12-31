import mongoose from "mongoose";

export const connectDB = (url) => {
  mongoose.set('strictQuery', true) 
  
  // Connect to MongoDB
  mongoose.connect(url)
    .then(() => console.log('MoggoDB connected'))
    .catch((err) => console.log(err))
}