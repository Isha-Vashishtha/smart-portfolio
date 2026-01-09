import express from "express";
import Project from "../models/Project.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

router.post("/", authMiddleware, async (req, res) => {
  const project = await Project.create(req.body);
  res.json(project);
});

router.put("/:id", authMiddleware, async (req, res) => {
  const updated = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

router.delete("/:id", authMiddleware, async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});
// GET published projects (public)
router.patch("/:id/status", authMiddleware, async (req, res) => {
  const { status } = req.body;
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );
  res.json(project);
});

export default router;