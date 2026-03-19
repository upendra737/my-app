"use client";
import { useRouter } from "next/navigation";

const subtopics = [
  {
    title: "Management of Care",
    icon: "📋",
    description: "Delegation, case management, continuity of care",
    path: "/study/safe-care/management-of-care",
    badge: "High Yield",
    topics: ["Delegation", "5 Rights of Delegation", "Case Management", "Discharge Planning"],
  },
  {
    title: "Prioritisation & Triage",
    icon: "🎯",
    description: "ABC prioritisation, Maslow's hierarchy, triage principles",
    path: "/study/safe-care/prioritisation",
    badge: "High Yield",
    topics: ["ABC Priority", "Maslow's Hierarchy", "Acute vs Stable", "Triage"],
  },
  {
    title: "Infection Control",
    icon: "🦠",
    description: "Standard, contact, droplet and airborne precautions",
    path: "/study/safe-care/infection-control",
    badge: "High Yield",
    topics: ["Standard Precautions", "PPE", "Isolation Types", "Hand Hygiene"],
  },
  {
    title: "Legal & Ethical Practice",
    icon: "⚖️",
    description: "Informed consent, advance directives, patient rights",
    path: "/study/safe-care/legal-ethics",
    badge: "Important",
    topics: ["Informed Consent", "DNR", "HIPAA", "Negligence vs Malpractice"],
  },
  {
    title: "Error Prevention",
    icon: "🛡️",
    description: "Medication errors, falls prevention, restraint guidelines",
    path: "/study/safe-care/error-prevention",
    badge: "Important",
    topics: ["Medication Errors", "Falls Prevention", "Restraints", "Incident Reporting"],
  },
  {
    title: "Emergency Response",
    icon: "🚨",
    description: "Fire safety, code blue, disaster response, triage",
    path: "/study/safe-care/emergency-response",
    badge: "Important",
    topics: ["RACE & PASS", "Code Blue", "Mass Casualty", "Disaster Response"],
  },
];

export default function SafeCarePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors font-bold"
          >
            ←
          </button>
          <div>
            <h1 className="font-black text-lg text-gray-900">🛡️ Safe & Effective Care</h1>
            <p className="text-xs text-gray-500">17-23% of NCLEX exam</p>
          </div>
          <div className="ml-auto bg-blue-50 border border-blue-200 rounded-xl px-3 py-1">
            <span className="text-blue-600 text-xs font-bold">6 Topics</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
          <div className="flex gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="font-bold text-blue-700 mb-1">About This Section</p>
              <p className="text-blue-600 text-sm leading-relaxed">
                Safe & Effective Care Environment makes up 17-23% of your NCLEX exam.
                Focus especially on delegation, prioritisation and infection control
                as these appear very frequently!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-gray-700">Exam Weight</span>
            <span className="text-blue-600 font-bold text-sm">17-23%</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: "23%" }} />
          </div>
          <p className="text-gray-400 text-xs mt-2">Select a topic below to start studying</p>
        </div>

        <h2 className="font-black text-lg text-gray-800 mb-4">Choose a Topic 📚</h2>
        <div className="space-y-4">
          {subtopics.map((sub, i) => (
            <div
              key={i}
              onClick={() => router.push(sub.path)}
              className="bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 rounded-2xl p-5 cursor-pointer transition-all hover:scale-[1.02] shadow-sm"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
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
                  <span key={j} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
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
                When answering Safe Care questions — always think about what the RN should do FIRST.
                Assess before intervening, and remember that patient safety always comes before comfort!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}