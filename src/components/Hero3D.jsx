import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Trophy, Star } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradients for depth - don't block interaction with Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
          <Rocket className="h-4 w-4 text-emerald-400" />
          <span className="text-sm text-white/80">Introducing StrideLab — Run the future</span>
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
          Feel Fast. Shop Smart.
          <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Your Personal Performance Lab</span>
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Interactive fitting, AI coaching, and a gamified store experience — engineered for runners and athletes.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#fit" className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-black shadow-lg shadow-emerald-500/30 transition hover:brightness-95">
            Start Your Fit
          </a>
          <a href="#explore" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20">
            Explore Tracks
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 text-left w-full">
          <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-400" />
              <p className="text-sm text-white/70">Earn Stride Points</p>
            </div>
            <p className="mt-2 text-lg font-semibold">Complete challenges and unlock rewards</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-cyan-300" />
              <p className="text-sm text-white/70">AI Performance Coach</p>
            </div>
            <p className="mt-2 text-lg font-semibold">Get personalized training and gear tips</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur">
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-emerald-400" />
              <p className="text-sm text-white/70">Smart Checkout</p>
            </div>
            <p className="mt-2 text-lg font-semibold">One-tap bundles for your next PR</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
