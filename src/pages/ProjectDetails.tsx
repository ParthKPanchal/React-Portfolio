import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProjectDetails() {
  const { id } = useParams();

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
        "WordPress",
        "Elementor",
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
      tech: ["HTML", "CSS", "JavaScript"],
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

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Project not found
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen">
        <section className="py-16 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <h2 className="text-3xl font-bold mb-6 text-center">
              {project.title}
            </h2>

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg mb-8 shadow-lg"
            />

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed text-center">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 px-3 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Button */}
            <div className="text-center">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 px-6 py-3 rounded font-semibold hover:bg-red-600 transition"
              >
                Visit Live Site →
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ProjectDetails;
