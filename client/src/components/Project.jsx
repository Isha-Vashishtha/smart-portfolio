const Project = ({ title, description, live, source }) => {
  return (
    <li className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6
                   hover:-translate-y-1 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-gray-400 text-sm mb-4">
        {description}
      </p>

      <div className="flex gap-4 text-sm">
        {live && (
          <a
            href={live}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Live
          </a>
        )}

        {source && (
          <a
            href={source}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Code
          </a>
        )}
      </div>
    </li>
  );
};

export default Project;
