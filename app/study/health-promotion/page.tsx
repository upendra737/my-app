"use client";
import { useRouter } from "next/navigation";

const subtopics = [
  {
    title: "Maternal & Newborn",
    icon: "🤱",
    description: "Antepartum, intrapartum, postpartum and newborn assessment",
    path: "/study/health-promotion/maternal-newborn",
    badge: "High Yield",
    topics: ["Antepartum Care", "Stages of Labour", "BUBBLE-HE Assessment", "APGAR Score"],
  },
  {
    title: "Developmental Stages",
    icon: "👶",
    description: "Erikson, Piaget, growth milestones across the lifespan",
    path: "/study/health-promotion/developmental-stages",
    badge: "High Yield",
    topics: ["Erikson's Stages", "Piaget's Theory", "Growth Milestones", "Aging Adults"],
  },
  {
    title: "Health Screening",
    icon: "🔬",
    description: "Cancer screening, cardiovascular, diabetes and mental health screening",
    path: "/study/health-promotion/health-screening",
    badge: "Important",
    topics: ["Cancer Screening", "Cardiovascular", "Diabetes Screening", "STI Screening"],
  },
  {
    title: "Immunisation",
    icon: "💉",
    description: "Childhood and adult immunisation schedules, contraindications",
    path: "/study/health-promotion/immunisation",
    badge: "Important",
    topics: ["Childhood Schedule", "Adult Schedule", "Contraindications", "Live vs Killed Vaccines"],
  },
  {
    title: "Lifestyle Choices",
    icon: "🏃",
    description: "Smoking cessation, nutrition, exercise and substance use counselling",
    path: "/study/health-promotion/lifestyle-choices",
    badge: "Important",
    topics: ["Smoking Cessation", "Nutrition Counselling", "Exercise", "Stress Management"],
  },
];

export default function HealthPromotionPage() {
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
            <h1 className="font-black text-lg text-gray-900">💚 Health Promotion & Maintenance</h1>
            <p className="text-xs text-gray-500">6-12% of NCLEX exam</p>
          </div>
          <div className="ml-auto bg-green-50 border border-green-200 rounded-xl px-3 py-1">
            <span className="text-green-600 text-xs font-bold">5 Topics</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
          <div className="flex gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="font-bold text-green-700 mb-1">About This Section</p>
              <p className="text-green-600 text-sm leading-relaxed">
                Health Promotion & Maintenance makes up 6-12% of your NCLEX exam.
                Focus especially on maternal and newborn care and developmental stages
                as these appear most frequently!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-gray-700">Exam Weight</span>
            <span className="text-green-600 font-bold text-sm">6-12%</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full" style={{ width: "12%" }} />
          </div>
          <p className="text-gray-400 text-xs mt-2">Select a topic below to start studying</p>
        </div>

        <h2 className="font-black text-lg text-gray-800 mb-4">Choose a Topic 📚</h2>
        <div className="space-y-4">
          {subtopics.map((sub, i) => (
            <div
              key={i}
              onClick={() => router.push(sub.path)}
              className="bg-white border-2 border-gray-200 hover:border-green-400 hover:bg-green-50 rounded-2xl p-5 cursor-pointer transition-all hover:scale-[1.02] shadow-sm"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
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
                  <span key={j} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
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
                Health Promotion questions focus on TEACHING and PREVENTION.
                Think about what a nurse would EDUCATE the patient about,
                what SCREENING is recommended and what INTERVENTIONS
                promote health across the lifespan!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}