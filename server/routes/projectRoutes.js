import express from "express";
import Project from "../models/Project.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.post("/", authMiddleware, async (req, res) => {
  const project = await Project.create(req.body);
  res.json(project);
});

router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});
// GET published projects (public)
router.get("/public", async (req, res) => {
  const projects = await Project.find({ published: true }).sort({
    createdAt: -1,
  });
  res.json(projects);
});

export default router;
