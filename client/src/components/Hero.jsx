import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero({ name, role }) {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
        Hi, I’m <span className="text-blue-500">{name}</span>
      </h1>

      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        {role} specializing in building modern, responsive, and scalable
        web applications using React and Tailwind CSS.
      </p>

      <div className="flex justify-center gap-6 text-2xl pt-4">
        <a
          href="https://github.com/Isha-Vashishtha"
          target="_blank"
          className="hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/isha-vashishtha-890a48288/"
          target="_blank"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:ishavashishtha862@gmail.com"
          className="hover:text-blue-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}

export default Hero;
