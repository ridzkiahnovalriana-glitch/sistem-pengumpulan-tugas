import React from 'react';
import { Cpu, HardDrive, Binary, Code2, Terminal, Layers, Sparkles, Server } from 'lucide-react';

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Radial Glow Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse-glow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-950/30 rounded-full blur-[140px] animate-pulse-glow"></div>

      {/* Floating Lucide Icon Particles */}
      <div className="absolute top-[12%] left-[8%] text-blue-400/10 animate-float-slow">
        <Cpu size={48} />
      </div>
      <div className="absolute top-[25%] right-[10%] text-white/10 animate-float-fast" style={{ animationDelay: '1s' }}>
        <HardDrive size={56} />
      </div>
      <div className="absolute top-[60%] left-[5%] text-slate-400/10 animate-float-slow" style={{ animationDelay: '2.5s' }}>
        <Binary size={40} />
      </div>
      <div className="absolute top-[75%] right-[15%] text-blue-300/10 animate-float-fast" style={{ animationDelay: '3s' }}>
        <Code2 size={52} />
      </div>
      <div className="absolute top-[45%] left-[88%] text-white/10 animate-float-slow" style={{ animationDelay: '1.8s' }}>
        <Terminal size={44} />
      </div>
      <div className="absolute top-[85%] left-[45%] text-indigo-400/10 animate-float-fast" style={{ animationDelay: '4s' }}>
        <Layers size={48} />
      </div>
      <div className="absolute top-[18%] left-[50%] text-white/5 animate-float-slow" style={{ animationDelay: '0.5s' }}>
        <Server size={36} />
      </div>
      <div className="absolute bottom-[20%] left-[25%] text-blue-500/10 animate-float-fast" style={{ animationDelay: '2s' }}>
        <Sparkles size={32} />
      </div>
    </div>
  );
}