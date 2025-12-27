import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

function AddProjectForm({ selectedProject, onDone }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [codeUrl, setCodeUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!selectedProject) {
      setTitle("");
      setDescription("");
      setLiveUrl("");
      setCodeUrl("");
      return;
    }

    setTitle(selectedProject.title ?? "");
    setDescription(selectedProject.description ?? "");
    setLiveUrl(selectedProject.liveUrl ?? "");
    setCodeUrl(selectedProject.codeUrl ?? "");
  }, [selectedProject]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      description,
      liveUrl,
      codeUrl,
    };

    setSubmitting(true);

try {
  if (selectedProject && selectedProject._id) {
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
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded mb-6">
      <h3 className="font-semibold mb-4">
        {selectedProject ? "Edit Project" : "Add Project"}
      </h3>

      <input
        className="w-full mb-2 p-2 bg-gray-700 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        className="w-full mb-2 p-2 bg-gray-700 rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        className="w-full mb-2 p-2 bg-gray-700 rounded"
        placeholder="Live URL"
        value={liveUrl}
        onChange={(e) => setLiveUrl(e.target.value)}
      />

      <input
        className="w-full mb-2 p-2 bg-gray-700 rounded"
        placeholder="Code URL"
        value={codeUrl}
        
        onChange={(e) => setCodeUrl(e.target.value)}
      />
       <select
  className="w-full mb-2 p-2 bg-gray-700 rounded"
  value={selectedProject?.status || "published"}
  onChange={(e) =>
    setStatus(e.target.value)
  }
>
  <option value="published">Published</option>
  <option value="draft">Draft</option>
</select>

      <button
  disabled={submitting}
  className={`px-4 py-2 rounded ${
    submitting
      ? "bg-gray-500 cursor-not-allowed"
      : "bg-blue-600"
  }`}
>
  {submitting
    ? "Saving..."
    : selectedProject
    ? "Update"
    : "Add"}
</button>

    </form>
  );
}

export default AddProjectForm;
