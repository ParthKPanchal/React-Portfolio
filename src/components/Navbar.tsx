import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Logo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/100 backdrop-blur-md text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="px-6 md:px-10 max-w-7xl max-w-auto mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link className="relative group" to="/">
            <img
              src={Logo}
              alt="Parth.Dev Logo"
              className="h-12 object-contain"
            />
          </Link>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link className="relative group" to="/">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link className="relative group" to="/projects">
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link className="relative group" to="/contact">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <button
          className="md:hidden text-2xl transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 pb-4 text-sm">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
