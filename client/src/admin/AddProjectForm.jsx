import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

function AddProjectForm({ selectedProject, onDone }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [live, setLive] = useState("");
  const [source, setSource] = useState("");
  const [status, setStatus] = useState("published");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!selectedProject) {
      setTitle("");
      setDescription("");
      setLive("");
      setSource("");
      setStatus("published");
      return;
    }

    setTitle(selectedProject.title);
    setDescription(selectedProject.description);
    setLive(selectedProject.live || "");
    setSource(selectedProject.source || "");
    setStatus(selectedProject.status);
  }, [selectedProject]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { title, description, live, source, status };
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
    } catch {
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

      <input className="input" value={title} onChange={(e)=>setTitle(e.target.value)} required />
      <textarea className="input" value={description} onChange={(e)=>setDescription(e.target.value)} required />

      <input className="input" placeholder="Live URL" value={live} onChange={(e)=>setLive(e.target.value)} />
      <input className="input" placeholder="Code URL" value={source} onChange={(e)=>setSource(e.target.value)} />

      <select className="input" value={status} onChange={(e)=>setStatus(e.target.value)}>
        <option value="published">Published</option>
        <option value="draft">Draft</option>
      </select>

      <button disabled={submitting} className="bg-blue-600 px-4 py-2 rounded">
        {submitting ? "Saving..." : selectedProject ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default AddProjectForm;
