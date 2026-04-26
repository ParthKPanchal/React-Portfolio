import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactImage from "../assets/Contact-image.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        "service_2b6n9ol",
        "template_t9m0s1e",
        {
          ...formData,
          time: new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        },
        "QR5G05X3huiffXCyV",
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <>
      <Navbar />
      <section className="py-24 px-6 md:px-10 bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE - IMAGE WITH GLOW */}
          <div className="flex justify-center relative">
            {/* Glow */}
            <div className="absolute w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>

            <img
              src={ContactImage}
              alt="Parth"
              className="relative w-full md:w-90 rounded-2xl border border-white/10 shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>

          {/* RIGHT SIDE - CONTENT + FORM */}
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Let’s Work Together 🚀
              </h2>

              <p className="text-gray-400 text-lg">
                Have a project in mind or just want to connect? I’m always open
                to discussing new opportunities, collaborations, or ideas.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-row-1 sm:grid-row-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:border-red-500/40 transition">
                <FaEnvelope className="text-red-500" />
                <span className="text-sm">Email: panchalparth93@yahoo.in</span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:border-red-500/40 transition">
                <FaPhone className="text-red-500" />
                <span className="text-sm">Call: +91 73035 13231</span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:border-red-500/40 transition">
                <FaMapMarkerAlt className="text-red-500" />
                <span className="text-sm">Mumbai: Vile Parle East, Mumbai, India</span>
              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-5 shadow-2xl"
            >
              <h3 className="text-xl font-semibold">Send a Message</h3>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition"
                required
              />

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 transition py-3 rounded-lg font-semibold shadow-lg hover:shadow-red-500/30"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {/* STATUS */}
              {status === "success" && (
                <p className="text-green-400 text-sm">
                  ✅ Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  ❌ Something went wrong. Try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
