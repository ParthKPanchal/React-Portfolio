function Education() {
  const education = [
    {
      id: 1,
      degree: "B.Sc. in Information Technology",
      college: "Sheth L.U.J & Sir M.V. College, Mumbai",
      duration: "2019 – 2023",
      score: "CGPA: 7.0",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      
      <div className="">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-red-500 pl-4">
          Education
        </h2>

        {/* Timeline / Cards */}
        <div className="space-y-6">
          
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:border-red-500/40 transition"
            >
              
              <h3 className="text-xl font-semibold text-white mb-1">
                {edu.degree}
              </h3>

              <p className="text-gray-300 mb-2">
                {edu.college}
              </p>

              <p className="text-sm text-gray-400">
                {edu.duration} • {edu.score}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Education;