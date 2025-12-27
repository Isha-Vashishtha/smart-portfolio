import { useState } from "react";
import API from "../services/api";

function AddProjectForm({ onProjectAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [codeUrl, setCodeUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/projects", {
        title,
        description,
        liveUrl,
        codeUrl,
      });

      setTitle("");
      setDescription("");
      setLiveUrl("");
      setCodeUrl("");

      onProjectAdded();
    } catch (err) {
      alert("Failed to add project");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg mb-8"
    >
      <h3 className="text-lg font-semibold mb-4">Add New Project</h3>

      <input
        className="w-full mb-3 p-2 rounded bg-gray-700"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        className="w-full mb-3 p-2 rounded bg-gray-700"
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        className="w-full mb-3 p-2 rounded bg-gray-700"
        placeholder="Live URL"
        value={liveUrl}
        onChange={(e) => setLiveUrl(e.target.value)}
      />

      <input
        className="w-full mb-3 p-2 rounded bg-gray-700"
        placeholder="Code URL"
        value={codeUrl}
        onChange={(e) => setCodeUrl(e.target.value)}
      />

      <button className="bg-blue-600 px-4 py-2 rounded">
        Add Project
      </button>
    </form>
  );
}

export default AddProjectForm;
