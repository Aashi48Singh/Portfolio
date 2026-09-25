function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-xl font-bold text-white">
          Aashi Singh
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar