import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaNetworkWired,
  FaMicrochip,
  FaCodeBranch,
  FaWrench,
} from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const skills = [
  {
    icon: <FaLaptopCode className="text-teal-300 text-2xl" />,
    title: "Full-Stack Web Apps",
    desc: "Build responsive apps using React, Tailwind, Flask, and REST APIs.",
  },
  {
    icon: <FaMicrochip className="text-orange-300 text-2xl" />,
    title: "IoT & Embedded Systems",
    desc: "Work with Arduino, Raspberry Pi, MQTT, and real-time sensor data.",
  },
  {
    icon: <FaNetworkWired className="text-purple-300 text-2xl" />,
    title: "Networking & Cybersecurity",
    desc: "Explore network protocols, firewalls, and secure infrastructure.",
  },
  {
    icon: <FaWrench className="text-yellow-300 text-2xl" />,
    title: "Signal Analysis",
    desc: "Analyze electrical signals with NumPy, FFT, and Python tools.",
  },
  {
    icon: <FaCodeBranch className="text-cyan-300 text-2xl" />,
    title: "Linux & Performance",
    desc: "Tune systems, manage resources, and debug low-level issues.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-cyan-400 mb-8"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
      >
        👨‍💻 About Me
      </motion.h2>

      <motion.p
  className="text-lg text-zinc-300 max-w-3xl mx-auto text-center leading-relaxed mb-14"
  variants={fadeIn}
  initial="hidden"
  whileInView="visible"
  transition={{ duration: 0.8 }}
>
  I'm <span className="text-emerald-400 font-semibold">Priyaranjan Ravi</span>, a Computer Science student at <span className="text-yellow-300 font-semibold">SASTRA University</span> who loves building software that blends creativity and engineering. From full-stack web apps to IoT systems, I enjoy designing real-time dashboards, crafting responsive UIs, and developing intelligent backends. I'm also passionate about cybersecurity, signal analysis, and performance tuning — anything that makes systems smarter and faster.
</motion.p>


      <motion.h3
        className="text-2xl sm:text-3xl font-semibold text-center text-cyan-400 mb-8"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7 }}
      >
        💼 What I Do
      </motion.h3>

      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-zinc-300"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-white/5 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm shadow-md hover:shadow-cyan-500/30 transition-all"
          >
            <div className="mb-3">{skill.icon}</div>
            <h4 className="font-semibold text-lg mb-1 text-cyan-200">{skill.title}</h4>
            <p className="text-sm text-zinc-400">{skill.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
