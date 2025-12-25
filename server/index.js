import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import projectRoutes from "./routes/projectRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";


dotenv.config();

const app = express(); // ✅ app FIRST

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/admin", adminRoutes);


// Test route (optional but helpful)
app.get("/", (req, res) => {
  res.send("API running");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
