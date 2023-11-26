import mongoose, { Connection } from "mongoose";
const DB_NAME = `NextDashboard`;
const DB_URL: string = "mongodb://127.0.0.1:27017";
const MongodbURI = DB_URL + "/" + DB_NAME;
// mongodb://127.0.0.1:27017/NextDashboard
const connectToDatabase = async () => {
  try {
    await mongoose.connect(MongodbURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

connectToDatabase();

const db: Connection = mongoose.connection;

export default db;
