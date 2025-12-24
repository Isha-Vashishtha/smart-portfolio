import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Project({ title, description, live, source }) {
  return (
    <li className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-gray-400 text-sm mb-4">{description}</p>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
        <a
          href={live}
          target="_blank"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg text-sm"
        >
          <FaExternalLinkAlt /> Live
        </a>

        <a
          href={source}
          target="_blank"
          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg text-sm"
        >
          <FaGithub /> Code
        </a>
      </div>
    </li>
  );
}

export default Project;
