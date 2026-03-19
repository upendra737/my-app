"use client";
import { useRouter } from "next/navigation";

const subtopics = [
  {
    title: "Pharmacology",
    icon: "💊",
    description: "Drug classes, mechanisms, side effects, nursing implications and high-alert medications",
    path: "/study/physiological/pharmacology",
    badge: "High Yield",
    topics: ["Cardiac Drugs", "Antibiotics", "Anticoagulants", "Psychotropics"],
  },
  {
    title: "Cardiovascular",
    icon: "❤️",
    description: "Heart failure, MI, arrhythmias, hypertension and vascular disorders",
    path: "/study/physiological/cardiovascular",
    badge: "High Yield",
    topics: ["Heart Failure", "Acute MI", "Arrhythmias", "Hypertension"],
  },
  {
    title: "Respiratory",
    icon: "🫁",
    description: "COPD, asthma, pneumonia, respiratory failure and mechanical ventilation",
    path: "/study/physiological/respiratory",
    badge: "High Yield",
    topics: ["COPD", "Asthma", "Pneumonia", "Respiratory Failure"],
  },
  {
    title: "Neurological",
    icon: "🧠",
    description: "Stroke, TBI, seizures, increased ICP and neurodegenerative disorders",
    path: "/study/physiological/neurological",
    badge: "High Yield",
    topics: ["Stroke", "Seizures", "Increased ICP", "Spinal Cord Injury"],
  },
  {
    title: "Endocrine",
    icon: "⚗️",
    description: "Diabetes, thyroid disorders, adrenal disorders and pituitary conditions",
    path: "/study/physiological/endocrine",
    badge: "High Yield",
    topics: ["Diabetes", "DKA/HHS", "Thyroid Disorders", "Adrenal Crisis"],
  },
  {
    title: "Renal",
    icon: "🫘",
    description: "AKI, CKD, dialysis, electrolyte disorders and urinary conditions",
    path: "/study/physiological/renal",
    badge: "High Yield",
    topics: ["AKI", "CKD", "Dialysis", "Urinary Tract"],
  },
  {
    title: "Fluid & Electrolytes",
    icon: "💧",
    description: "Fluid balance, sodium, potassium, calcium, magnesium and phosphate disorders",
    path: "/study/physiological/fluid-electrolytes",
    badge: "High Yield",
    topics: ["Hypo/Hypernatraemia", "Hypo/Hyperkalaemia", "Calcium", "Fluid Balance"],
  },
  {
    title: "Acid-Base Balance",
    icon: "⚖️",
    description: "Respiratory and metabolic acidosis and alkalosis with compensation",
    path: "/study/physiological/acid-base",
    badge: "High Yield",
    topics: ["Metabolic Acidosis", "Metabolic Alkalosis", "Respiratory Acidosis", "ABG Interpretation"],
  },
  {
    title: "Laboratory Values",
    icon: "🔬",
    description: "Normal ranges, critical values and nursing actions for key lab tests",
    path: "/study/physiological/lab-values",
    badge: "High Yield",
    topics: ["CBC", "BMP/CMP", "Coagulation", "Cardiac Markers"],
  },
  {
    title: "Gastrointestinal",
    icon: "🫃",
    description: "GI bleeding, bowel disorders, liver disease, pancreatitis and nutrition",
    path: "/study/physiological/gastrointestinal",
    badge: "Important",
    topics: ["GI Bleeding", "Liver Failure", "Pancreatitis", "Bowel Obstruction"],
  },
  {
    title: "Musculoskeletal",
    icon: "🦴",
    description: "Fractures, osteoporosis, arthritis, compartment syndrome and cast care",
    path: "/study/physiological/musculoskeletal",
    badge: "Important",
    topics: ["Fractures", "Compartment Syndrome", "Osteoporosis", "Joint Replacement"],
  },
  {
    title: "Pain Management",
    icon: "🩹",
    description: "Pain assessment, opioid management, non-pharmacological and PCA",
    path: "/study/physiological/pain-management",
    badge: "Important",
    topics: ["Pain Assessment", "Opioid Safety", "PCA", "Non-pharmacological"],
  },
  {
    title: "Perioperative Care",
    icon: "🏥",
    description: "Pre-op assessment, intraoperative care, post-op complications and recovery",
    path: "/study/physiological/perioperative",
    badge: "Important",
    topics: ["Pre-op Checklist", "Anaesthesia", "Post-op Complications", "Wound Care"],
  },
];

export default function PhysiologicalPage() {
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
            <h1 className="font-black text-lg text-gray-900">🩺 Physiological Integrity</h1>
            <p className="text-xs text-gray-500">38-62% of NCLEX exam — the largest section</p>
          </div>
          <div className="ml-auto bg-blue-50 border border-blue-200 rounded-xl px-3 py-1">
            <span className="text-blue-600 text-xs font-bold">13 Topics</span>
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
                Physiological Integrity is the LARGEST section of NCLEX — comprising 38-62% of the exam.
                It covers pharmacology, organ systems, fluid balance and perioperative care.
                Master the HIGH YIELD topics first: Pharmacology, Cardiovascular, Respiratory,
                Neurological and Endocrine!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-gray-700">Exam Weight</span>
            <span className="text-blue-600 font-bold text-sm">38-62%</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: "62%" }} />
          </div>
          <p className="text-gray-400 text-xs mt-2">This section has the most questions on your NCLEX exam</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
          <div className="flex gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <p className="font-bold text-red-700 mb-1">Priority Study Order</p>
              <p className="text-red-600 text-sm leading-relaxed">
                Start with: Pharmacology → Cardiovascular → Respiratory → Neurological → Endocrine → Fluid & Electrolytes → Acid-Base.
                These topics together account for the majority of physiological NCLEX questions!
              </p>
            </div>
          </div>
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
                Physiological questions require you to APPLY knowledge — not just recall it.
                Practice applying the nursing process: Assessment → Diagnosis → Planning → Implementation → Evaluation.
                Always identify the PRIORITY patient and PRIORITY action before answering!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}