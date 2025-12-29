import { useEffect, useState } from "react";
import API from "../services/api";

function PublicProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/projects");
        setProjects(
  res.data.filter((p) => p.status === "published")
);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p className="text-gray-400">Loading projects...</p>;
  }

  if (projects.length === 0) {
    return <p className="text-gray-400">No projects available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project._id}
          className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            {project.title}
          </h3>

          <p className="text-gray-400 mb-4">
            {project.description}
          </p>

          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Live
              </a>
            )}

            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Code
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PublicProjects;
