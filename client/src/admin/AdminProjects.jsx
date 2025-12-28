import { useEffect, useState } from "react";
import API from "../services/api";

function AdminProjects({ onEdit }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const deleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    await API.delete(`/projects/${id}`);
    fetchProjects();
  };

  const togglePublish = async (id, published) => {
  await API.put(`/projects/${id}`, { published });
  fetchProjects();
};

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) return <p className="text-gray-400">Loading projects...</p>;
  if (projects.length === 0)
    return <p className="text-gray-400">No projects yet</p>;

  return (
    <ul className="space-y-3">
      {projects.map((project) => (
        <li
          key={project._id}
          className="bg-gray-800 p-4 rounded flex justify-between items-center"
        >
          <div>
            <h4 className="font-semibold">{project.title}</h4>
            <span className="text-xs text-yellow-400">
              {project.status}
            </span>
          </div>

          <div className="space-x-2">
            <button
              onClick={() => onEdit(project)}
              className="bg-yellow-500 px-3 py-1 rounded text-black"
            >
              Edit
            </button>

            <span className="text-sm text-gray-400">
  {p.published ? "Published" : "Draft"}
</span>

<button
  onClick={() => togglePublish(p._id, !p.published)}
  className="bg-indigo-600 px-3 py-1 rounded"
>
  {p.published ? "Unpublish" : "Publish"}
</button>


            <button
              onClick={() => deleteProject(project._id)}
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
