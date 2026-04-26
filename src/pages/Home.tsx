import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Summary from "../components/Summary";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Summary />
      <div className="bg-black text-white px-0">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-0">
          {/* LEFT - EXPERIENCE (bigger) */}
          <div className="md:col-span-2">
            <Experience />
          </div>

          {/* RIGHT - EDUCATION + CERTIFICATES */}
          <div className="space-y-10">
            <Education />
            <Certificates />
          </div>
        </div>
      </div>
      {/* <Education /> */}
      <Skills />
      {/* <Certificates /> */}
      <Contact />
      <Footer />
    </div>
  );
}
export default Home;
