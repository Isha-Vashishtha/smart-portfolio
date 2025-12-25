import { useState, useEffect } from "react";
import API from "../services/api";

function AdminProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/projects");
        setProjects(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Projects</h2>

      {projects.length === 0 ? (
        <p>No projects yet</p>
      ) : (
        <ul>
          {projects.map((p) => (
            <li key={p._id}>{p.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminProjects;
