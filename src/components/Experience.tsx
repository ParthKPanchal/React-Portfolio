function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Software Developer",
      company: "Crayon Infotech",
      location: "Malad",
      duration: "Sept 2025 – April 2026",
      points: [
        "Developed responsive web interfaces using HTML, CSS, and JavaScript.",
        "Built reusable UI components and improved design consistency.",
        "Enhanced mobile responsiveness and cross-browser compatibility.",
        "Integrated frontend with backend systems and APIs.",
        "Optimized performance and reduced load times.",
      ],
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Ajay Infotech",
      location: "Virar",
      duration: "May 2025 – Aug 2025",
      points: [
        "Developed responsive websites using HTML, CSS, and JavaScript.",
        "Improved UI/UX and optimized frontend performance.",
        "Built dynamic UI components and handled form interactions.",
        "Implemented mobile-first design for cross-device compatibility.",
      ],
    },
    {
      id: 3,
      role: "Graphic Designer",
      company: "VSL Marine Technology Pvt. Ltd",
      location: "Goregaon",
      duration: "Aug 2023 – Apr 2025",
      points: [
        "Created interactive virtual tours and enhanced visual assets.",
        "Collaborated with developers to improve UI design.",
      ],
    },
    {
      id: 4,
      role: "Executive Sales Manager",
      company: "Dream Properties",
      location: "Vile Parle",
      duration: "Sept 2017 – Jan 2021",
      points: [
        "Managed client relationships and improved communication skills.",
        "Handled negotiations and sales processes effectively.",
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      
      <div className="">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-red-500 pl-4">
          Professional Experience
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-white/10 space-y-10">
          
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8">
              
              {/* Dot */}
              <span className="absolute left-[-6px] top-2 w-3 h-3 bg-red-500 rounded-full"></span>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:border-red-500/40 transition">
                
                <h3 className="text-xl font-semibold text-white">
                  {exp.role}
                </h3>

                <p className="text-gray-300 text-sm mb-1">
                  {exp.company} • {exp.location}
                </p>

                <p className="text-gray-400 text-xs mb-4">
                  {exp.duration}
                </p>

                <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                  {exp.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;