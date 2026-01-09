import { useEffect, useState } from "react";
import API from "../services/api";

function AdminProjects({ onEdit }) {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async (id) => {
    if (!window.confirm("Delete project?")) return;
    await API.delete(`/projects/${id}`);
    fetchProjects();
  };

  const togglePublish = async (project) => {
    const newStatus =
      project.status === "published" ? "draft" : "published";

    await API.patch(`/projects/${project._id}/status`, {
      status: newStatus,
    });

    fetchProjects();
  };

  return (
    <ul className="space-y-4">
      {projects.map((p) => (
        <li
          key={p._id}
          className="bg-gray-800 p-4 rounded flex justify-between items-center"
        >
          <div>
            <p className="font-semibold">{p.title}</p>
            <span className="text-sm text-gray-400">
              {p.status}
            </span>
          </div>

          <div className="space-x-2">
            <button
              onClick={() => onEdit(p)}
              className="bg-yellow-500 px-3 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => togglePublish(p)}
              className="bg-purple-600 px-3 py-1 rounded"
            >
              {p.status === "published" ? "Unpublish" : "Publish"}
            </button>

            <button
              onClick={() => deleteProject(p._id)}
              className="bg-red-600 px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default AdminProjects;
