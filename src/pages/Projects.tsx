import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "React Portfolio",
      description:
        "Developed a dynamic portfolio using React with reusable components and responsive UI.",
      tech: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
      live: "https://portfolio-parthkpanchals-projects.vercel.app",
      image: "/projects/react-portfolio.png",
    },
    {
      id: 2,
      title: "Gemlyte IT Solutions",
      description:
        "Built a responsive IT services website with dynamic forms and optimized UI performance.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      live: "https://gemlyte.ajayinfotech.in",
      image: "/projects/gemlyte.png",
    },
    {
      id: 3,
      title: "Ajay Infotech Website",
      description:
        "Created a business website with frontend UI and backend integration using PHP and MySQL.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      live: "https://ajayinfotech.in",
      image: "/projects/ajay.png",
    },
    {
      id: 4,
      title: "The Esthetic Clinics",
      description:
        "Developed dynamic pages using PHP and WordPress with Elementor, ensuring responsive UI.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
        "Bootstrap",
      ],
      live: "https://www.theestheticclinics.com/",
      image: "/projects/esthetic.png",
    },
    {
      id: 5,
      title: "Dhurin Website",
      description:
        "Enhanced UI components and optimized frontend performance for a live production website.",
      tech: ["HTML", "CSS", "JavaScript", "WordPress"],
      live: "https://dhurin.in/",
      image: "/projects/dhurin.png",
    },
    {
      id: 6,
      title: "Dr. K C Shah Clinic",
      description:
        "Customized WordPress website with Elementor and improved responsive layouts.",
      tech: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
      live: "https://drkcshah.com/",
      image: "/projects/kcshah.png",
    },
    {
      id: 7,
      title: "Lighten Up (Demo Project)",
      description:
        "Developed a demo business website showcasing reusable UI components and responsive design.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      live: "https://gemlyte.ajayinfotech.in/portfolio/Lighten-Up/index.php",
      image: "/projects/lightenup.png",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) => {
    const words = search.toLowerCase().trim().split(" ");

    return words.every(
      (word) =>
        project.title.toLowerCase().includes(word) ||
        project.description.toLowerCase().includes(word) ||
        project.tech.some((tech) => tech.toLowerCase().includes(word)),
    );
  });

  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen">
        <section className="py-16 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

            {/* Search */}
            <div className="mb-10 flex justify-center">
              <input
                type="text"
                placeholder="Search by project, tech..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-1/2 p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Link to={`/projects/${project.id}`} key={project.id}>
                  <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition duration-300 cursor-pointer">
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />

                    {/* Content */}
                    <div className="p-5">
                      <h2 className="text-lg font-semibold mb-2">
                        {project.title}
                      </h2>

                      <p className="text-gray-400 text-sm mb-3">
                        {project.description}
                      </p>

                      {/* Tech */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gray-800 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <span className="text-red-500 text-sm">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
