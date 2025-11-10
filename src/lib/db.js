import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};





// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     if (mongoose.connection.readyState === 1) {
//       console.log("MongoDB already connected");
//       return;
//     }
    
//     if (mongoose.connection.readyState === 0) {
//       const conn = await mongoose.connect(process.env.MONGO_URI);
//       console.log(`MongoDB connected: ${conn.connection.host}`);
//       return;
//     }
    
//     console.log("MongoDB connection state:", mongoose.connection.readyState);
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     throw error;
//   }
// };