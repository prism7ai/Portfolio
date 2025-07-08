import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Deepak Raj",
    role: "CTO, Innovatek",
    quote:
      "Priyaranjan's real-time dashboard blew us away. His IoT and software synergy is on another level.",
  },
  {
    name: "Madhav Narayanan",
    role: "Mentor @ SASTRA",
    quote:
      "His speed, clarity, and ability to connect hardware with frontend logic is rare. He’s going places.",
  },
  {
    name: "S. Kumar",
    role: "Faculty, Dept. of CSE",
    quote:
      "Among the sharpest in class — brilliant with both logic and presentation. Proud of his growth.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function Testimonials() {
  return (
    <section className="bg-zinc-900 py-24 px-6 sm:px-16 text-white text-center">
      <motion.h2
        className="text-4xl font-bold mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        💬 Testimonials
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            className="bg-zinc-800/60 backdrop-blur-md p-6 rounded-xl border border-zinc-700 shadow-md hover:shadow-xl transition-all text-left"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}
          >
            <p className="italic text-gray-300">“{item.quote}”</p>
            <div className="mt-4 text-sm text-gray-400">
              — <span className="text-blue-400 font-medium">{item.name}</span>, {item.role}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
