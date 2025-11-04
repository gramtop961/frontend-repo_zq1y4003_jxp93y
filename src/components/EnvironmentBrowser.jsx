import React, { useState } from 'react';
import { Compass, Wind, Zap } from 'lucide-react';

const ENVIRONMENTS = [
  {
    key: 'sprint',
    title: 'Sprinting',
    desc: 'Ultra-responsive energy return for explosive speed.',
    theme: 'from-emerald-400/20 via-cyan-400/10 to-indigo-400/20',
  },
  {
    key: 'trail',
    title: 'Trail Running',
    desc: 'Aggressive lugs and protective uppers for any terrain.',
    theme: 'from-orange-400/20 via-amber-400/10 to-lime-400/20',
  },
  {
    key: 'training',
    title: 'Training',
    desc: 'Balanced cushioning and stability for daily miles.',
    theme: 'from-fuchsia-400/20 via-purple-400/10 to-blue-400/20',
  },
  {
    key: 'lifestyle',
    title: 'Lifestyle',
    desc: 'All-day comfort with modern, city-ready style.',
    theme: 'from-sky-400/20 via-teal-400/10 to-emerald-400/20',
  },
];

const EnvironmentBrowser = () => {
  const [active, setActive] = useState('sprint');

  return (
    <section id="explore" className="relative w-full bg-black py-16 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-zinc-900" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <Compass className="h-5 w-5 text-emerald-400" />
          <h2 className="text-2xl font-semibold">Explore by Environment</h2>
        </div>

        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {ENVIRONMENTS.map((env) => (
            <button
              key={env.key}
              onClick={() => setActive(env.key)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                active === env.key
                  ? 'bg-emerald-500 text-black'
                  : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {env.title}
            </button>
          ))}
        </div>

        <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r ${
          ENVIRONMENTS.find((e) => e.key === active)?.theme
        } p-6`}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-3xl font-semibold">
                {ENVIRONMENTS.find((e) => e.key === active)?.title}
              </h3>
              <p className="mt-2 text-white/80">
                {ENVIRONMENTS.find((e) => e.key === active)?.desc}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                  <Wind className="h-4 w-4 text-cyan-300" />
                  <p className="mt-2 font-medium">Cushion</p>
                  <p className="text-white/70">Plush</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                  <Zap className="h-4 w-4 text-emerald-400" />
                  <p className="mt-2 font-medium">Energy</p>
                  <p className="text-white/70">High</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                  <Compass className="h-4 w-4 text-indigo-300" />
                  <p className="mt-2 font-medium">Grip</p>
                  <p className="text-white/70">Adaptive</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:brightness-95">
                  View Top Picks
                </button>
                <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white">
                  Enter Track Mode
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(16,185,129,0.25),transparent_40%)]" />
              <div className="relative grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl border border-white/10 bg-black/40 p-4"
                  >
                    <div className="h-full w-full rounded-lg bg-gradient-to-br from-white/10 to-white/0" />
                    <p className="mt-2 text-sm text-white/70">Featured Model {i}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentBrowser;
