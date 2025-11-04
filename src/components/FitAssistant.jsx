import React, { useMemo, useState } from 'react';
import { Gauge, Activity, Sparkles } from 'lucide-react';

const FitAssistant = () => {
  const [form, setForm] = useState({ gait: 'neutral', arch: 'medium', sport: 'training' });

  const rec = useMemo(() => {
    // Simple rule-based mock recommendations
    const base = { cushion: 60, stability: 60, grip: 60 };
    if (form.gait === 'overpronation') base.stability += 25;
    if (form.gait === 'supination') base.cushion += 15;
    if (form.arch === 'high') base.cushion += 10;
    if (form.arch === 'low') base.stability += 10;
    if (form.sport === 'trail') base.grip += 25;
    if (form.sport === 'sprint') base.cushion -= 10;

    const model = (() => {
      if (form.sport === 'trail') return 'TerraGrip X';
      if (form.sport === 'sprint') return 'Velocity Pro';
      if (form.gait === 'overpronation') return 'Stability Core';
      return 'AeroFlow Trainer';
    })();

    const bundle = form.sport === 'trail' ? ['Grip Socks', 'Hydration Belt'] : ['Cushion Socks', 'Insoles'];

    return { ...base, model, bundle };
  }, [form]);

  return (
    <section id="fit" className="relative w-full bg-zinc-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <Gauge className="h-5 w-5 text-emerald-400" />
          <h2 className="text-2xl font-semibold">Interactive Shoe Fitting</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
            <h3 className="text-lg font-medium">Your Stride Profile</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm text-white/70">Gait</span>
                <select
                  value={form.gait}
                  onChange={(e) => setForm({ ...form, gait: e.target.value })}
                  className="rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-white focus:outline-none"
                >
                  <option value="neutral">Neutral</option>
                  <option value="overpronation">Overpronation</option>
                  <option value="supination">Supination</option>
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm text-white/70">Arch Type</span>
                <select
                  value={form.arch}
                  onChange={(e) => setForm({ ...form, arch: e.target.value })}
                  className="rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-white focus:outline-none"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-sm text-white/70">Preferred Sport</span>
                <select
                  value={form.sport}
                  onChange={(e) => setForm({ ...form, sport: e.target.value })}
                  className="rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-white focus:outline-none"
                >
                  <option value="training">Training</option>
                  <option value="sprint">Sprinting</option>
                  <option value="trail">Trail</option>
                  <option value="lifestyle">Lifestyle</option>
                </select>
              </label>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-400" />
                <p className="text-sm text-white/80">Recommended Model</p>
              </div>
              <p className="mt-1 text-2xl font-semibold">{rec.model}</p>
              <p className="mt-1 text-sm text-white/70">Suggested bundle: {rec.bundle.join(', ')}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
            <h3 className="text-lg font-medium">Stride Support Visualization</h3>
            <p className="mt-1 text-sm text-white/70">Real-time estimate based on your inputs.</p>

            <div className="mt-6 space-y-4">
              {[
                { key: 'cushion', label: 'Cushioning', color: 'bg-cyan-400' },
                { key: 'stability', label: 'Stability', color: 'bg-emerald-400' },
                { key: 'grip', label: 'Grip', color: 'bg-indigo-400' },
              ].map((m) => (
                <div key={m.key}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-white/80">{m.label}</span>
                    <span className="text-white/70">{rec[m.key]}%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full ${m.color}`}
                      style={{ width: `${Math.min(100, Math.max(0, rec[m.key]))}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-white/10 bg-zinc-900 p-4">
                <Activity className="h-4 w-4 text-emerald-400" />
                <p className="mt-2 font-medium">Gait: <span className="text-white/70 capitalize">{form.gait}</span></p>
              </div>
              <div className="rounded-lg border border-white/10 bg-zinc-900 p-4">
                <Activity className="h-4 w-4 text-cyan-400" />
                <p className="mt-2 font-medium">Arch: <span className="text-white/70 capitalize">{form.arch}</span></p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-emerald-500 px-6 py-2 text-sm font-medium text-black shadow-lg shadow-emerald-500/30 hover:brightness-95">
                Add to Cart
              </button>
              <button className="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-white">
                Try AR On-Foot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitAssistant;
