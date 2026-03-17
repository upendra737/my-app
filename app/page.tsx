"use client";
import { useState, useEffect } from "react";

const reasons = [
  "Your smile lights up every room you walk into ✨",
  "The way you laugh makes everything better 😊",
  "Your kindness and caring heart melts me every day 💝",
  "You make ordinary moments feel magical 🌟",
  "Your strength and courage inspire me every single day 💪",
  "The way you make me feel at home wherever we are 🏡",
  "Your beautiful eyes that I could get lost in forever 👀",
  "How you always know exactly what to say 💬",
  "The way you care for everyone around you 🤗",
  "Simply because you are you — and that's everything 💕",
];

const timeline = [
  { date: "The Day We Met", icon: "🌟", title: "The Beginning", description: "The universe conspired to bring two souls together. That day changed everything forever." },
  { date: "Our First Date", icon: "🌹", title: "First Date", description: "Nervous smiles, butterflies, and a feeling that this was something truly special." },
  { date: "When I Knew", icon: "💡", title: "I Knew You Were The One", description: "There was a moment — quiet and perfect — when I knew my heart belonged to you." },
  { date: "Our Adventures", icon: "✈️", title: "Adventures Together", description: "Every journey is better with you by my side. You make every place feel like home." },
  { date: "Hard Times", icon: "🤝", title: "Through It All", description: "We faced storms together and came out stronger. That's when I knew this love was real." },
  { date: "Today & Forever", icon: "♾️", title: "Forever Yours", description: "Every day with you is a gift. I choose you today, tomorrow, and always." },
];

const floatingHearts = ["💕", "🌹", "💗", "✨", "💝", "🌸", "💖", "⭐"];

export default function Home() {
  const [currentSection, setCurrentSection] = useState<"intro" | "letter" | "reasons" | "timeline">("intro");
  const [revealedReasons, setRevealedReasons] = useState<number[]>([]);
  const [hearts, setHearts] = useState<{ id: number; x: number; emoji: string; duration: number; delay: number }[]>([]);
  const [letterVisible, setLetterVisible] = useState(false);
  const [timelineStep, setTimelineStep] = useState(0);
  const [petals, setPetals] = useState<{ id: number; x: number; duration: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      emoji: floatingHearts[Math.floor(Math.random() * floatingHearts.length)],
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 5,
    }));
    setHearts(newHearts);

    const newPetals = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 8,
      size: 10 + Math.random() * 16,
    }));
    setPetals(newPetals);
  }, []);

  useEffect(() => {
    if (currentSection === "letter") {
      setTimeout(() => setLetterVisible(true), 300);
    }
    if (currentSection === "timeline") {
      setTimelineStep(0);
      timeline.forEach((_, i) => {
        setTimeout(() => setTimelineStep(i + 1), i * 600);
      });
    }
  }, [currentSection]);

  function revealReason(index: number) {
    if (!revealedReasons.includes(index)) {
      setRevealedReasons([...revealedReasons, index]);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 text-gray-800 overflow-hidden relative">

      {/* Falling Petals */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="absolute text-pink-300 animate-bounce opacity-40"
            style={{
              left: `${petal.x}%`,
              fontSize: `${petal.size}px`,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
              top: `${Math.random() * 100}%`,
            }}
          >
            🌸
          </div>
        ))}
      </div>

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute animate-pulse opacity-30"
            style={{
              left: `${heart.x}%`,
              top: `${Math.random() * 100}%`,
              fontSize: "20px",
              animationDuration: `${heart.duration}s`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            {heart.emoji}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8">

        {/* INTRO SECTION */}
        {currentSection === "intro" && (
          <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <div className="mb-8 animate-pulse">
              <span className="text-8xl">🌹</span>
            </div>
            <p className="text-pink-400 text-lg tracking-widest uppercase mb-4 font-semibold">
              A special place made just for
            </p>
            <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-rose-400 mb-4">
              Niru
            </h1>
            <p className="text-pink-300 text-2xl mb-2">💕</p>
            <p className="text-gray-500 text-lg max-w-sm mb-12 leading-relaxed">
              A little corner of the internet dedicated entirely to you and how much you mean to me.
            </p>

            {/* ✅ UPDATED — Niru's Profile Photo */}
            <div className="w-48 h-48 rounded-full border-4 border-pink-300 shadow-xl overflow-hidden mb-12 relative">
              <img src="/Niru.JPG" alt="Niru" className="w-full h-full object-cover" />
              <div className="absolute -top-2 -right-2 text-2xl animate-bounce">💕</div>
              <div className="absolute -bottom-2 -left-2 text-2xl animate-bounce">🌹</div>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full max-w-sm mb-12">
              {[
                { icon: "💌", label: "Love Letter" },
                { icon: "💝", label: "Reasons" },
                { icon: "📖", label: "Our Story" },
              ].map(({ icon, label }) => (
                <div key={label} className="bg-white/60 backdrop-blur rounded-2xl p-3 text-center border border-pink-200">
                  <span className="text-3xl block mb-1">{icon}</span>
                  <span className="text-pink-500 text-xs font-semibold">{label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setCurrentSection("letter")}
              className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-pink-300 hover:scale-105 transition-all animate-pulse"
            >
              Open with Love 💕
            </button>
          </div>
        )}

        {/* LOVE LETTER SECTION */}
        {currentSection === "letter" && (
          <div className="min-h-screen flex flex-col items-center justify-center py-12">
            <button onClick={() => setCurrentSection("intro")} className="self-start text-pink-400 hover:text-pink-600 mb-6 transition-colors">
              ← Back
            </button>

            <div className="text-center mb-8">
              <span className="text-5xl">💌</span>
              <h2 className="text-3xl font-black text-rose-500 mt-2">A Letter For You</h2>
            </div>

            <div className={`bg-white/80 backdrop-blur border border-pink-200 rounded-3xl p-8 shadow-xl transition-all duration-1000 ${letterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="relative">
                <div className="absolute inset-0 flex flex-col gap-8 pt-8">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="border-b border-pink-100 w-full" />
                  ))}
                </div>

                <div className="relative z-10 font-serif">
                  <p className="text-pink-400 text-sm mb-6 text-right">To my dearest Niru 🌹</p>

                  <p className="text-gray-700 leading-9 mb-6 text-lg">
                    There are moments in life that you know will stay with you forever — and meeting you was one of them.
                    From the very first time I saw you, something inside me just <span className="text-rose-500 font-semibold">knew</span>.
                  </p>

                  <p className="text-gray-700 leading-9 mb-6 text-lg">
                    You came into my life and quietly made everything better. Better mornings, better days,
                    better versions of myself. You have this beautiful way of making even the smallest moments
                    feel like <span className="text-rose-500 font-semibold">magic</span>.
                  </p>

                  <p className="text-gray-700 leading-9 mb-6 text-lg">
                    I love the way you laugh. I love the way you care. I love how you don't even realise
                    how absolutely <span className="text-rose-500 font-semibold">extraordinary</span> you are.
                    But I see it, Niru — I see all of it, every single day.
                  </p>

                  <p className="text-gray-700 leading-9 mb-6 text-lg">
                    This little website is my way of telling you that you are loved — deeply, completely,
                    and without condition. You deserve the whole world, and I promise to spend every day
                    trying to give it to you. 💕
                  </p>

                  <p className="text-gray-700 leading-9 mb-8 text-lg">
                    So here it is — a tiny corner of the internet, made just for you.
                    Because you deserve to know how <span className="text-rose-500 font-semibold">incredibly loved</span> you are.
                  </p>

                  <p className="text-rose-500 font-bold text-right text-lg">Forever yours 🌹</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setCurrentSection("reasons")}
              className="mt-8 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all"
            >
              See Why I Love You 💝
            </button>
          </div>
        )}

        {/* REASONS SECTION */}
        {currentSection === "reasons" && (
          <div className="py-12">
            <button onClick={() => setCurrentSection("letter")} className="text-pink-400 hover:text-pink-600 mb-6 transition-colors block">
              ← Back
            </button>

            <div className="text-center mb-10">
              <span className="text-5xl block mb-3">💝</span>
              <h2 className="text-3xl font-black text-rose-500 mb-2">
                10 Reasons I Love You
              </h2>
              <p className="text-pink-400">Tap each card to reveal ✨</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  onClick={() => revealReason(i)}
                  className={`rounded-3xl p-4 cursor-pointer transition-all duration-500 hover:scale-105 min-h-28 flex items-center justify-center text-center border-2 ${
                    revealedReasons.includes(i)
                      ? "bg-gradient-to-br from-rose-100 to-pink-100 border-pink-300 shadow-lg"
                      : "bg-white/60 border-pink-200 hover:border-pink-400"
                  }`}
                >
                  {revealedReasons.includes(i) ? (
                    <div>
                      <p className="text-pink-400 font-black text-2xl mb-2">#{i + 1}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{reason}</p>
                    </div>
                  ) : (
                    <div>
                      <span className="text-4xl block mb-2">💕</span>
                      <p className="text-pink-300 text-sm">Tap to reveal</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {revealedReasons.length === reasons.length && (
              <div className="bg-gradient-to-r from-rose-400 to-pink-500 rounded-3xl p-6 text-center text-white mb-6 animate-pulse">
                <span className="text-4xl block mb-2">🎉</span>
                <p className="font-black text-xl">And so many more reasons, Niru!</p>
                <p className="opacity-80 mt-1">You are loved more than words can say 💕</p>
              </div>
            )}

            <div className="text-center">
              <p className="text-pink-400 mb-2">{revealedReasons.length}/{reasons.length} revealed</p>
              <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-rose-400 to-pink-500 rounded-full transition-all duration-500"
                  style={{ width: `${(revealedReasons.length / reasons.length) * 100}%` }}
                />
              </div>
            </div>

            <button
              onClick={() => setCurrentSection("timeline")}
              className="mt-8 w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all"
            >
              Our Love Story 📖
            </button>
          </div>
        )}

        {/* TIMELINE SECTION */}
        {currentSection === "timeline" && (
          <div className="py-12">
            <button onClick={() => setCurrentSection("reasons")} className="text-pink-400 hover:text-pink-600 mb-6 transition-colors block">
              ← Back
            </button>

            <div className="text-center mb-10">
              <span className="text-5xl block mb-3">📖</span>
              <h2 className="text-3xl font-black text-rose-500 mb-2">Our Story</h2>
              <p className="text-pink-400">A love story worth telling 🌹</p>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-300 to-pink-200" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className={`flex gap-6 transition-all duration-700 ${timelineStep > i ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-xl shadow-lg border-4 border-white">
                        {item.icon}
                      </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur border border-pink-200 rounded-3xl p-5 flex-1 shadow-sm">
                      <p className="text-pink-400 text-xs font-semibold uppercase tracking-wider mb-1">{item.date}</p>
                      <h3 className="font-black text-lg text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Message */}
            <div className="mt-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-3xl p-8 text-white text-center shadow-xl">
              <span className="text-6xl block mb-4">💍</span>
              <h3 className="text-2xl font-black mb-3">To Niru, With All My Love</h3>
              <p className="leading-relaxed opacity-90 mb-4">
                Every chapter of this story has been beautiful because of you.
                And I can't wait to write every chapter that comes next — together. 💕
              </p>
              <p className="font-bold text-lg">Always & Forever 🌹</p>
            </div>

            {/* ✅ UPDATED — Memory Photos */}
            <div className="mt-8">
              <h3 className="text-center font-bold text-rose-500 mb-4">Our Memories 📸</h3>
              <div className="grid grid-cols-3 gap-3">
                {["photo1.JPG", "photo2.JPG", "photo3.PNG",
                  "photo4.PNG", "photo5.PNG", "photo6.PNG"].map((photo, i) => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden border-2 border-pink-200 shadow-sm">
                    <img
                      src={`/${photo}`}
                      alt={`Memory ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setCurrentSection("intro")}
              className="mt-8 w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all"
            >
              Back to Start 🌹
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
