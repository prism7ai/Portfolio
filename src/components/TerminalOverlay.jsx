import React, { useEffect, useState } from 'react';

const logs = [
  '🔧 Initializing developer toolkit...',
  '📡 Connecting to IoT gateway...',
  '🧠 AI inference engine loading...',
  '🖥️ Portfolio rendering modules...',
  '✅ Deployment complete. Welcome!',
];

export default function TerminalOverlay() {
  const [displayedLogs, setDisplayedLogs] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedLogs((prev) => [...prev, logs[i]]);
      i++;
      if (i === logs.length) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 left-4 w-full max-w-md p-4 bg-black/70 text-green-400 font-mono text-sm rounded-xl shadow-xl z-20 backdrop-blur border border-green-500/20">
      {displayedLogs.map((log, i) => (
        <div key={i} className="animate-pulse">{log}</div>
      ))}
    </div>
  );
}
