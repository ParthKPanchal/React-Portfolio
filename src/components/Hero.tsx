import HeroImg from "../assets/Hero-image.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="py-16 flex items-center px-6 md:px-10 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-red-500">Parth Panchal</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl">
            Frontend Developer building responsive, scalable and modern web
            applications using React and modern technologies.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/projects"
              className="inline-block bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-lg font-medium shadow-lg"
            >
              View Projects
            </Link>

            <a
              href="/Parth_Resume.pdf"
              download
              className="border border-white/20 hover:border-red-500 hover:text-red-500 transition px-6 py-3 rounded-lg font-medium backdrop-blur-md"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={HeroImg}
            alt="Parth Panchal"
            className="w-[500px] md:w-[500px] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
