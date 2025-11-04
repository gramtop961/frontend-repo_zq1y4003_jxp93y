import React, { useState } from 'react';
import { MessageSquare, Send, Sparkles, Info } from 'lucide-react';

const seedConversation = [
  { role: 'assistant', text: 'Hi! I\'m your Stride Coach. Tell me your goal: speed, distance, or recovery?' },
];

function getBotReply(input) {
  const text = input.toLowerCase();
  if (text.includes('trail')) {
    return 'For trails, prioritize grip and protection. Consider TerraGrip X with reinforced toe and sticky outsole.';
  }
  if (text.includes('sprint') || text.includes('speed')) {
    return 'Chasing speed? Velocity Pro offers snappy energy return and a lightweight upper ideal for intervals.';
  }
  if (text.includes('recovery') || text.includes('easy')) {
    return 'Recovery days love plush cushioning. AeroFlow Trainer with soft midsole keeps impact low.';
  }
  if (text.includes('compare')) {
    return 'Comparison: Velocity Pro (weight: 210g, energy: high) vs AeroFlow Trainer (weight: 255g, cushioning: plush).';
  }
  return 'Great! Keep consistent, progress gradually, and I\'ll tailor picks as you share more preferences.';
}

const CoachChat = () => {
  const [messages, setMessages] = useState(seedConversation);
  const [input, setInput] = useState('');

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg = { role: 'user', text: trimmed };
    const botMsg = { role: 'assistant', text: getBotReply(trimmed) };
    setMessages((m) => [...m, userMsg, botMsg]);
    setInput('');
  };

  return (
    <section className="w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center gap-3">
          <MessageSquare className="h-5 w-5 text-emerald-400" />
          <h2 className="text-2xl font-semibold">AI Performance Coach</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-4 md:col-span-2">
            <div className="h-72 overflow-y-auto rounded-lg border border-white/10 bg-black p-4">
              {messages.map((m, i) => (
                <div key={i} className={`mb-3 flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                      m.role === 'user'
                        ? 'bg-emerald-500 text-black'
                        : 'bg-white/10 text-white backdrop-blur'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Ask about shoes, training plans, or comparisons..."
                className="flex-1 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white outline-none"
              />
              <button onClick={send} className="rounded-xl bg-emerald-500 p-3 text-black hover:brightness-95">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-cyan-300" />
              <h3 className="font-medium">Quick Tips</h3>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2"><Info className="mt-0.5 h-4 w-4 text-emerald-400" /> Rotate pairs to extend lifespan.</li>
              <li className="flex items-start gap-2"><Info className="mt-0.5 h-4 w-4 text-cyan-400" /> Match outsole to terrain for efficient traction.</li>
              <li className="flex items-start gap-2"><Info className="mt-0.5 h-4 w-4 text-indigo-400" /> Replace shoes every 300–500 miles.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachChat;
