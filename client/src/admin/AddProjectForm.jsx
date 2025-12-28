import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

function AddProjectForm({ selectedProject, onDone }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [codeUrl, setCodeUrl] = useState("");
  const [status, setStatus] = useState("published");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!selectedProject) {
      setTitle("");
      setDescription("");
      setLiveUrl("");
      setCodeUrl("");
      setStatus("published");
      return;
    }

    setTitle(selectedProject.title || "");
    setDescription(selectedProject.description || "");
    setLiveUrl(selectedProject.liveUrl || "");
    setCodeUrl(selectedProject.codeUrl || "");
    setStatus(selectedProject.status || "published");
  }, [selectedProject]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      description,
      liveUrl,
      codeUrl,
      status,
    };

    setSubmitting(true);

    try {
      if (selectedProject?._id) {
        await API.put(`/projects/${selectedProject._id}`, payload);
        toast.success("Project updated");
      } else {
        await API.post("/projects", payload);
        toast.success("Project added");
      }
      onDone();
    } catch (err) {
      toast.error("Action failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg mb-6 space-y-4"
    >
      <h3 className="text-lg font-semibold">
        {selectedProject ? "Edit Project" : "Add Project"}
      </h3>

      <input
        className="w-full p-3 bg-gray-700 rounded"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        className="w-full p-3 bg-gray-700 rounded min-h-[120px]"
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        className="w-full p-3 bg-gray-700 rounded"
        placeholder="Live URL"
        value={liveUrl}
        onChange={(e) => setLiveUrl(e.target.value)}
      />

      <input
        className="w-full p-3 bg-gray-700 rounded"
        placeholder="Code URL"
        value={codeUrl}
        onChange={(e) => setCodeUrl(e.target.value)}
      />

      <select
        className="w-full p-3 bg-gray-700 rounded"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="published">Published</option>
        <option value="draft">Draft</option>
      </select>

      <button
        disabled={submitting}
        className={`w-full py-2 rounded font-semibold ${
          submitting
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {submitting
          ? "Saving..."
          : selectedProject
          ? "Update Project"
          : "Add Project"}
      </button>
    </form>
  );
}

export default AddProjectForm;
