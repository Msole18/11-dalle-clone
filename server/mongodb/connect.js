import mongoose from "mongoose";

export const connectDB = (url) => {
  mongoose.set('strictQuery', true) 
  
  // Connect to MongoDB
  mongoose
    .connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
      console.error('failed to connect with mongo')
      console.error(err)
    })
}