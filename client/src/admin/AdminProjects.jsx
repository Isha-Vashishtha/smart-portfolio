import { useState, useEffect } from "react";
import API from "../services/api";

function AdminProjects() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  const deleteProject = async (id) => {
    if (!confirm("Delete this project?")) return;

    await API.delete(`/projects/${id}`);
    fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Projects</h2>

      {projects.length === 0 ? (
        <p>No projects yet</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((p) => (
            <li
              key={p._id}
              className="bg-gray-800 p-4 rounded flex justify-between"
            >
              <span>{p.title}</span>
              <button
                onClick={() => deleteProject(p._id)}
                className="bg-red-600 px-3 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminProjects;
