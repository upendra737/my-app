"use client";
import { useRouter } from "next/navigation";

const subtopics = [
  {
    title: "Mental Health",
    icon: "🧠",
    description: "Psychiatric disorders, medications, therapeutic milieu and legal considerations",
    path: "/study/psychosocial/mental-health",
    badge: "High Yield",
    topics: ["Schizophrenia", "Bipolar Disorder", "Depression", "Anxiety Disorders"],
  },
  {
    title: "Therapeutic Communication",
    icon: "💬",
    description: "Therapeutic vs non-therapeutic techniques, nurse-patient relationship",
    path: "/study/psychosocial/therapeutic-communication",
    badge: "High Yield",
    topics: ["Active Listening", "Open-ended Questions", "Blocks to Communication", "Phases of Relationship"],
  },
  {
    title: "Crisis Intervention",
    icon: "🆘",
    description: "Crisis theory, types of crisis, suicide assessment and intervention",
    path: "/study/psychosocial/crisis-intervention",
    badge: "High Yield",
    topics: ["Crisis Theory", "Suicide Assessment", "SAD PERSONS", "De-escalation"],
  },
  {
    title: "Substance Abuse",
    icon: "💊",
    description: "Substance use disorders, withdrawal syndromes and treatment approaches",
    path: "/study/psychosocial/substance-abuse",
    badge: "Important",
    topics: ["Alcohol Withdrawal", "Opioid Withdrawal", "CAGE/AUDIT", "MAT"],
  },
  {
    title: "Abuse & Neglect",
    icon: "🛡️",
    description: "Recognition, mandatory reporting, domestic violence and elder abuse",
    path: "/study/psychosocial/abuse-neglect",
    badge: "Important",
    topics: ["Child Abuse", "Elder Abuse", "Domestic Violence", "Mandatory Reporting"],
  },
  {
    title: "Coping Mechanisms",
    icon: "🌿",
    description: "Defence mechanisms, stress responses and adaptive vs maladaptive coping",
    path: "/study/psychosocial/coping-mechanisms",
    badge: "Important",
    topics: ["Defence Mechanisms", "Grief (Kübler-Ross)", "Adaptive Coping", "Loss and Bereavement"],
  },
];

export default function PsychosocialPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors font-bold"
          >←</button>
          <div>
            <h1 className="font-black text-lg text-gray-900">🧠 Psychosocial Integrity</h1>
            <p className="text-xs text-gray-500">6-12% of NCLEX exam</p>
          </div>
          <div className="ml-auto bg-purple-50 border border-purple-200 rounded-xl px-3 py-1">
            <span className="text-purple-600 text-xs font-bold">6 Topics</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-6">
          <div className="flex gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="font-bold text-purple-700 mb-1">About This Section</p>
              <p className="text-purple-600 text-sm leading-relaxed">
                Psychosocial Integrity covers mental health, therapeutic communication,
                crisis intervention and coping. These topics appear across ALL areas of NCLEX —
                not just psychiatric questions. Therapeutic communication in particular
                appears in virtually every clinical scenario!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-gray-700">Exam Weight</span>
            <span className="text-purple-600 font-bold text-sm">6-12%</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-purple-500 rounded-full" style={{ width: "12%" }} />
          </div>
          <p className="text-gray-400 text-xs mt-2">Select a topic below to start studying</p>
        </div>

        <h2 className="font-black text-lg text-gray-800 mb-4">Choose a Topic 📚</h2>
        <div className="space-y-4">
          {subtopics.map((sub, i) => (
            <div
              key={i}
              onClick={() => router.push(sub.path)}
              className="bg-white border-2 border-gray-200 hover:border-purple-400 hover:bg-purple-50 rounded-2xl p-5 cursor-pointer transition-all hover:scale-[1.02] shadow-sm"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  {sub.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-black text-gray-900">{sub.title}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${sub.badge === "High Yield" ? "bg-red-100 text-red-600" : "bg-orange-100 text-orange-600"}`}>
                      {sub.badge}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{sub.description}</p>
                </div>
                <span className="text-gray-400 text-xl flex-shrink-0">→</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {sub.topics.map((t, j) => (
                  <span key={j} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-4">
          <div className="flex gap-3">
            <span className="text-2xl">⭐</span>
            <div>
              <p className="font-bold text-amber-700 mb-1">NCLEX Exam Tip</p>
              <p className="text-amber-600 text-sm leading-relaxed">
                Psychosocial questions test your ability to respond therapeutically.
                The BEST answer almost always acknowledges the patient's feelings FIRST
                before giving information or advice. When in doubt — reflect the emotion,
                then act!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}