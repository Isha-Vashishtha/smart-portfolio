import { useState } from "react";
import AddProjectForm from "./AddProjectForm";
import AdminProjects from "./AdminProjects";

function Dashboard() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleDone = () => {
    setSelectedProject(null);       // 🔥 reset edit mode
    setRefreshKey((k) => k + 1);    // 🔥 force refetch
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <AddProjectForm
        selectedProject={selectedProject}
        onDone={handleDone}
      />

      <AdminProjects
        key={refreshKey}
        onEdit={(project) => setSelectedProject(project)}
      />
    </div>
  );
}

export default Dashboard;
