import { useEffect, useState } from "react";
import API from "../services/api";

function AdminProjects({ onEdit }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    } finally {
      setLoading(false);
    }
  };

  // Delete project
  const deleteProject = async (id) => {
    const confirmDelete = window.confirm("Delete this project?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/projects/${id}`);
      fetchProjects(); // refresh list
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Delete failed");
    }
  };

  // Run once on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return <p className="text-gray-400">Loading projects...</p>;
  }

  if (projects.length === 0) {
    return <p className="text-gray-400">No projects yet</p>;
  }

  return (
    <ul className="space-y-3">
      {projects.map((project) => (
        <li
          key={project._id}
          className="bg-gray-800 p-4 rounded flex justify-between items-center"
        >
          <div>
            <h4 className="font-semibold">{project.title}</h4>
            {project.isPublished === false && (
              <span className="text-xs text-yellow-400">Draft</span>
            )}
          </div>

          <div className="space-x-2">
            <button
              onClick={() => onEdit(project)}
              className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-black"
            >
              Edit
            </button>

            <button
              onClick={() => deleteProject(project._id)}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
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
