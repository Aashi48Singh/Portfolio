function Skills() {
  const skills = [
    {
      name: "HTML",
      description: "Semantic and structured web pages",
    },
    {
      name: "CSS",
      description: "Responsive and modern styling",
    },
    {
      name: "JavaScript",
      description: "Interactive web functionality",
    },
    {
      name: "React.js",
      description: "Modern component-based UI development",
    },
    {
      name: "Tailwind CSS",
      description: "Responsive utility-first styling",
    },
    {
      name: "Node.js",
      description: "Server-side JavaScript development",
    },
    {
      name: "Express.js",
      description: "Backend APIs and server development",
    },
    {
      name: "MongoDB",
      description: "Database management and data storage",
    },
    {
      name: "Git & GitHub",
      description: "Version control and project management",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gray-950 px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-lg mb-3">
            My Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {skill.name}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;