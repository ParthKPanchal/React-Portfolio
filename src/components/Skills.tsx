function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind", "SCSS", "Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Node.js", "PHP"],
    },
    {
      category: "Database",
      items: ["MySQL", "MongoDB"],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "WordPress",
        "Elementor",
        "Figma",
        "Canva",
        "Terminal",
      ],
    },
    {
      category: "Other Skills",
      items: [
        "Responsive Design",
        "Cross-Browser Compatibility",
        "UI/UX Basics",
      ],
    },
  ];

  const coreSkills = ["React", "JavaScript", "TypeScript", "Node.js", "Responsive Design", "WordPress", "MySQL"];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-10">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-14 border-l-4 border-red-500 pl-4">
          Skills
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition duration-300 hover:border-red-500/40 hover:shadow-xl"
            >
              
              {/* Category */}
              <h3 className="text-lg font-semibold mb-5 text-white/90 tracking-wide">
                {skill.category}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => {
                  const isCore = coreSkills.includes(item);

                  return (
                    <span
                      key={i}
                      className={`text-sm px-3 py-1.5 rounded border transition-all duration-200 ${
                        isCore
                          ? "bg-red-500/10 text-red-400 border-red-500/30"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30"
                      }`}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;