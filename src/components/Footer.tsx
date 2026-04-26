import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Logo from "../assets/Logo.png"
function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      
      <div className="px-6 md:px-10 max-w-7xl mx-auto py-10">
        
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* LEFT - BRAND */}
          <div>
            <Link className="relative group" to="/">
            <img
              src={Logo}
              alt="Parth.Dev Logo"
              className="h-16 object-contain mb-4"
            />
          </Link>
            <p className="text-gray-400 text-sm">
              Frontend Developer building modern, scalable, and user-friendly web applications.
            </p>
          </div>

          {/* CENTER - NAV LINKS */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-red-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-red-500 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT - SOCIAL */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-white">Connect</h4>
            
            <div className="flex gap-4">
              
              <a
                href="https://github.com/ParthKPanchal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-red-500 hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/parth-panchal-305353212/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-red-500 hover:text-white transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:panchalparth93@yahoo.in"
                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-red-500 hover:text-white transition"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Parth Panchal. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;