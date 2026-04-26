function Summary() {
  return (
    <section className="px-6 md:px-10 py-20 bg-black text-white">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE - TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I'm a frontend developer based in India, passionate about building
            interfaces that are functional, accessible, and genuinely enjoyable
            to use. I believe great software starts with empathy for the end user.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I have hands-on experience with{" "}
            <span className="text-white">React, JavaScript, PHP, and MySQL</span>, 
            and have worked on real-world client projects focusing on performance,
            responsiveness, and UI/UX improvements.
          </p>

          <p className="text-gray-400 text-sm">
            <span className="text-purple-400">Currently learning:</span> React Advanced Concepts & Performance Optimization
          </p>
        </div>

        {/* RIGHT SIDE - CARDS */}
        <div className="space-y-6">
          
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:border-red-500/40 transition">
            <div className="w-10 h-10 flex items-center justify-center bg-purple-500/10 rounded-lg text-purple-400">
              💻
            </div>
            <div>
              <h3 className="font-semibold">1 Years</h3>
              <p className="text-sm text-gray-400">Building web applications</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:border-red-500/40 transition">
            <div className="w-10 h-10 flex items-center justify-center bg-purple-500/10 rounded-lg text-purple-400">
              ⚡
            </div>
            <div>
              <h3 className="font-semibold">7 Projects</h3>
              <p className="text-sm text-gray-400">Built & deployed</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:border-red-500/40 transition">
            <div className="w-10 h-10 flex items-center justify-center bg-purple-500/10 rounded-lg text-purple-400">
              🎯
            </div>
            <div>
              <h3 className="font-semibold">UI Focused</h3>
              <p className="text-sm text-gray-400">Clean & responsive design</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Summary;