function About() {
  return (
    <section
      id="about"
      className="bg-gray-900 px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-lg mb-3">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-5">
              I'm Aashi Singh
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-5">
              I am a passionate MERN Stack Developer interested in
              building modern, responsive and user-friendly web
              applications.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              I enjoy working with React.js, Node.js, Express.js and
              MongoDB to create full-stack applications. I focus on
              writing clean code, learning new technologies and
              continuously improving my development skills.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-gray-950 border border-gray-700 rounded-2xl p-6">
              <h4 className="text-blue-400 text-2xl font-bold mb-2">
                MERN
              </h4>

              <p className="text-gray-400">
                Full-Stack Development
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-700 rounded-2xl p-6">
              <h4 className="text-blue-400 text-2xl font-bold mb-2">
                React
              </h4>

              <p className="text-gray-400">
                Modern UI Development
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-700 rounded-2xl p-6">
              <h4 className="text-blue-400 text-2xl font-bold mb-2">
                Node.js
              </h4>

              <p className="text-gray-400">
                Backend Development
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-700 rounded-2xl p-6">
              <h4 className="text-blue-400 text-2xl font-bold mb-2">
                MongoDB
              </h4>

              <p className="text-gray-400">
                Database Management
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;