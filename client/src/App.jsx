import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";

import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import ProtectedRoute from "./admin/ProtectedRoute";
import PublicProjects from "./components/PublicProjects";
import { Toaster } from "react-hot-toast";

function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="max-w-6xl mx-auto px-6 pt-20 pb-12"
      >
        <Hero name="Isha" role="Frontend Developer" />
      </section>

      {/* PROJECTS (CMS DRIVEN) */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <PublicProjects />
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-16"
      >
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
    <>
      <Toaster position="top-right" />

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
    </>
  );
}


export default App;
