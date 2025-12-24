import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero({ name, role }) {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-4">{name}</h1>
      <p className="text-xl text-gray-400 mb-6">{role}</p>

      <div className="flex justify-center gap-6 text-2xl">
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
          href="mailto:ishavashishtha862@email.com"
          className="hover:text-blue-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}

export default Hero;
