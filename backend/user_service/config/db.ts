import mongoose from "mongoose";

export default async function connectDB(): Promise<undefined> {
  const mongoURI: string = String(process.env.MONGO_URI);
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDb connection failed', err);
    process.exit(1);
  }
}