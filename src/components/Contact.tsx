import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
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
    <section className="py-20 px-6 md:px-10 bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let’s Work Together 🚀
          </h2>

          <p className="text-gray-300 text-lg">
            Have a project in mind or just want to connect? I’m always open to
            discussing new opportunities, collaborations, or ideas.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              <span>panchalparth93@yahoo.in</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-red-500" />
              <span>+91 73035 13231</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Vile Parle East, Mumbai, India</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6 shadow-2xl"
        >
          <h3 className="text-xl font-semibold mb-2">Send a Message</h3>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-red-500"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-red-500"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-red-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 transition py-3 rounded-lg font-semibold shadow-lg"
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
    </section>
  );
}

export default Contact;
