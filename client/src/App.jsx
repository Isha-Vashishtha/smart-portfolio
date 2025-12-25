import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import ContactForm from "./components/ContactForm";
import API from "./services/api";

import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import ProtectedRoute from "./admin/ProtectedRoute";

import { useEffect, useState } from "react";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await API.get("/projects");
      setProjects(res.data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <section id="home" className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <Hero name="Isha" role="Frontend Developer" />
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        {loading ? (
          <p className="text-gray-400">Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className="text-gray-400">No projects yet.</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Project key={project._id} {...project} />
            ))}
          </ul>
        )}
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-400">
              Want to work together or have an idea? Reach out.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
