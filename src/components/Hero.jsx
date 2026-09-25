function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-950 flex items-center px-6 py-24"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-blue-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Aashi Singh
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
            MERN Stack Developer
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I build modern, responsive and user-friendly web applications
            using MongoDB, Express.js, React.js and Node.js.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 hover:bg-white hover:text-black text-white rounded-lg transition"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* Right Side - Code Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">

            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>

              <span className="text-gray-400 text-sm ml-2">
                developer.js
              </span>
            </div>

            <div className="p-6 font-mono text-sm leading-7 text-gray-300">
              <p>
                <span className="text-purple-400">const</span>{" "}
                developer = {"{"}
              </p>

              <p className="pl-4">
                name: <span className="text-green-400">"Aashi Singh"</span>,
              </p>

              <p className="pl-4">
                role: <span className="text-green-400">"MERN Developer"</span>,
              </p>

              <p className="pl-4">
                skills: [
              </p>

              <p className="pl-8 text-blue-400">
                "MongoDB",
              </p>

              <p className="pl-8 text-blue-400">
                "Express.js",
              </p>

              <p className="pl-8 text-blue-400">
                "React.js",
              </p>

              <p className="pl-8 text-blue-400">
                "Node.js"
              </p>

              <p className="pl-4">
                ],
              </p>

              <p className="pl-4">
                available: <span className="text-green-400">true</span>
              </p>

              <p>{"}"}</p>

              <p className="mt-4 text-gray-500">
                // Let's build something amazing!
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;