import { useState } from "react";
import AddProjectForm from "./AddProjectForm";
import AdminProjects from "./AdminProjects";

function Dashboard() {
  const [editingProject, setEditingProject] = useState(null);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin";
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button onClick={logout} className="bg-red-600 px-4 py-2 rounded">
          Logout
        </button>
      </div>

      <AddProjectForm
        selectedProject={editingProject}
          onDone={() => {
            setEditingProject(null);
          }}

      />

      <AdminProjects onEdit={setEditingProject} />
    </div>
  );
}

export default Dashboard;
