import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">

        {/* Top Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-bold text-white"
          >
            Aashi Singh
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-gray-300">
            <a
              href="#home"
              className="hover:text-white transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-white transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-white transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-white transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-white transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <span className="text-2xl leading-none">
                ×
              </span>
            ) : (
              <span className="text-2xl leading-none">
                ☰
              </span>
            )}
          </button>

        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-2 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-2">

              <a
                href="#home"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
              >
                Contact
              </a>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;