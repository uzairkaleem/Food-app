import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

async function connectTdb() {
  console.log("DB State (before):", mongoose.connection.readyState);

  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("DB State (after):", mongoose.connection.readyState);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Connection Error:", error);
  }
}

export default connectTdb;
