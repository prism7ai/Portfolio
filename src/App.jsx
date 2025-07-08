import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import BackgroundFX from './components/BackgroundFX';
import Experience from './components/Experience';
import { Toaster } from './components/ui/toaster';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="font-mono relative text-white min-h-screen overflow-x-hidden">
      <BackgroundFX />
      <div className="relative z-10 backdrop-blur-sm bg-black/70">
        <Navbar />
        <Toaster />

        {showScroll && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-4 right-4 z-50 bg-purple-700 hover:bg-purple-500 text-white px-4 py-2 rounded-full text-sm shadow-md animate-pulse transition"
          >
            ↑ Top
          </button>
        )}

        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />

        <footer className="p-6 text-center text-zinc-400 border-t border-zinc-800 backdrop-blur bg-gradient-to-r from-[#180020] via-[#0f0c1b] to-[#180020] shadow-inner space-y-2">
          <p>© 2025 Priyaranjan Ravi — Built from scratch with 💖 + ⚙️ + 🧠</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
            <a href="https://github.com/prism7ai" target="_blank" className="hover:text-fuchsia-400 transition">GitHub</a>
            <a href="https://linkedin.com/in/priyaranjan-r-31885127a" target="_blank" className="hover:text-fuchsia-400 transition">LinkedIn</a>
            <a href="https://leetcode.com/u/HoXyP2fbbE/" target="_blank" className="hover:text-fuchsia-400 transition">LeetCode</a>
            <a href="mailto:rpriyaranjan63@gmail.com" className="hover:text-fuchsia-400 transition">Email</a>
          </div>
          <p className="text-sm mt-2">Web Dev · IoT · Cybersecurity · Networking · React · Python</p>
          <p className="text-xs text-zinc-500">Certifications: Cisco CyberOps, Python for Everybody, Network Fundamentals</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
