import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    liveUrl: { type: String },
    codeUrl: { type: String },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },
  },
  { timestamps: true }
);
export default mongoose.model("Project", projectSchema);
