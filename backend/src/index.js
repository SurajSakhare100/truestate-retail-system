import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import salesRoutes from "./routes/salesRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/sales", salesRoutes);

app.get("/", (req, res) => {
  res.send("TruEstate Retail System Backend Running...");
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "truestate",
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

// connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
