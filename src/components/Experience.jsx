import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Club Member",
    company: "Robotics Club @ SASTRA",
    period: "2023 – Present",
    description:
      "Actively contributing to robotics workshops, automation projects, and collaborative tech events organized by the club.",
    tech: ["Arduino", "Raspberry Pi", "C++", "Teamwork"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-emerald-400 mb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
      >
        🧑‍💼 Experience
      </motion.h2>

      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="bg-black/40 border border-emerald-800 rounded-xl p-6 shadow-sm hover:shadow-emerald-500/20 transition"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-emerald-300">
              {exp.role}
              <span className="text-sm text-zinc-400 font-normal"> — {exp.company}</span>
            </h3>
            <p className="text-zinc-400 text-sm mb-2">{exp.period}</p>
            <p className="text-zinc-300 text-sm mb-3">{exp.description}</p>

            <div className="flex flex-wrap gap-2 text-xs">
              {exp.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-emerald-800/40 text-emerald-300 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
