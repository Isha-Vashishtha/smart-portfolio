import { useState } from "react";
import Hero from "./components/Hero";
import Project from "./components/Project";
import ContactForm from "./components/ContactForm";
import projects from "./data/projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-slate-950 text-white">
      
      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <Hero name="Isha" role="Frontend Developer" />
      </section>

      {/* ================= COUNTER (UTILITY) ================= */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="inline-block bg-gray-800/50 rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-3">
            Counter: {count}
          </h2>

          <div className="flex gap-3">
            <button
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm"
            >
              Increase
            </button>

            <button
              onClick={() => setCount(count - 1)}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm"
            >
              Decrease
            </button>
          </div>
        </div>
      </section>

      {/* ================= DIVIDER ================= */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>

      {/* ================= PROJECTS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </ul>
      </section>

      {/* ================= DIVIDER ================= */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>

      {/* ================= CONTACT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left text */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-400 max-w-md">
              Have a project in mind or want to collaborate?  
              Feel free to reach out — I usually respond within 24 hours.
            </p>
          </div>

          {/* Right form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default App;
