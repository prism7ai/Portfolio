import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa6";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const certs = [
  {
    title: "Cisco's Technology Networking Ecosystem",
    provider: "Shaastra, IIT Madras",
    link: "https://www.linkedin.com/in/priyaranjan-r-31885127a/details/certifications/", // update with real URL
  },
  {
    title: "IoT using RaspberryPi",
    provider: "Technex, IIT (BHU) Varanasi",
    link: "https://www.linkedin.com/in/priyaranjan-r-31885127a/details/certifications/", // update with real URL
  },
  {
    title: "Cybersecurity for Everyone",
    provider: "University of Maryland",
    link: "https://www.coursera.org/account/accomplishments/verify/RJ55GQ7ER3N2?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course", // update with real URL
  },
  {
    title: "Master Program in Full Stack",
    provider: "FITA Academy",
    link: "https://www.linkedin.com/in/priyaranjan-r-31885127a/details/certifications/", // update with real URL
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-emerald-400 mb-12"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
      >
        🎓 Certifications
      </motion.h2>

      <motion.div
        className="grid sm:grid-cols-2 gap-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
      >
        {certs.map((cert, i) => (
          <div
            key={i}
            className="bg-white/5 border border-emerald-600/30 rounded-lg p-5 backdrop-blur-md shadow-md hover:shadow-emerald-400/30 transition-all"
          >
            <h3 className="text-xl font-semibold text-emerald-300 flex items-center gap-2">
              <FaCertificate /> {cert.title}
            </h3>
            <p className="text-sm text-zinc-300 mt-1">{cert.provider}</p>
            <a
              href={cert.link}
              target="_blank"
              className="inline-block mt-3 text-emerald-400 hover:underline text-sm"
            >
              View Credential →
            </a>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
