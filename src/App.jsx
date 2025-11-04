import React from 'react';
import Hero3D from './components/Hero3D';
import EnvironmentBrowser from './components/EnvironmentBrowser';
import FitAssistant from './components/FitAssistant';
import CoachChat from './components/CoachChat';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero3D />
      <EnvironmentBrowser />
      <FitAssistant />
      <CoachChat />

      <footer className="border-t border-white/10 bg-zinc-950 py-10 text-center text-white/60">
        <p>
          StrideLab — Where performance meets design. Earn Stride Points by exploring,
          training, and sharing your runs.
        </p>
      </footer>
    </div>
  );
}

export default App;
