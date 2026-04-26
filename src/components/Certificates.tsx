function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Full Stack (MERN) Web Development",
      issuer: "Internshala Trainings",
      duration: "Jul 2022 – Jul 2023",
      link: "#",
    },
    {
      id: 2,
      title: "Angular Development",
      issuer: "Internshala Trainings",
      duration: "Nov 2024 – Dec 2024",
      link: "#",
    },
    {
      id: 3,
      title: "WordPress Development",
      issuer: "Internshala Trainings",
      duration: "Dec 2025 – Jan 2026",
      link: "#",
    },
  ];

  return (
    <section className="bg-black text-white">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-red-500 pl-4">
          Licenses & Certifications
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-row-2 lg:grid-row-3 gap-8">
          
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:border-red-500/40 transition duration-300"
            >
              
              <h3 className="text-lg font-semibold mb-2 text-white">
                {cert.title}
              </h3>

              <p className="text-gray-300 text-sm mb-3">
                {cert.issuer}
              </p>

              <p className="text-gray-400 text-xs mb-4">
                {cert.duration}
              </p>

              {cert.link !== "#" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-red-400 hover:text-red-500 transition"
                >
                  View Certificate →
                </a>
              )}

            </div>
          ))}

        </div>
    </section>
  );
}

export default Certificates;