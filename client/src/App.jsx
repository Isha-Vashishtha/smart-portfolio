import { useState } from "react";
import Hero from "./components/Hero";
import Project from "./components/Project";
import ContactForm from "./components/ContactForm";
import projects from "./data/projects";

function App() {
  const [count, setCount] = useState(0);

//   const projects = [
//   {
//     title: "Portfolio Website",
//     description: "Personal portfolio built with React and Tailwind CSS.",
//     live: "https://example.com",
//     source: "https://github.com/yourusername/portfolio",
//   },
//   {
//     title: "Blog App",
//     description: "Full-stack blog app with admin panel and authentication.",
//     live: "https://example.com",
//     source: "https://github.com/yourusername/blog-app",
//   },
//   {
//     title: "Admin Dashboard",
//     description: "Dashboard with charts, users, and role management.",
//     live: "https://example.com",
//     source: "https://github.com/yourusername/admin-dashboard",
//   },
// ];


  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 animate-fadeIn">
        <Hero name="Isha" role="Frontend Developer" />
      </section>

      {/* Counter Section */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-4">
          Counter: {count}
        </h2>

        <div className="flex gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
          >
            Increase
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
          >
            Decrease
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

   <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {projects.map((project) => (
    <Project key={project.id} {...project} />
  ))}
</ul>

      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
