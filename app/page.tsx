"use client";
import { useState } from "react";

type Tab = "home" | "registration" | "study" | "quiz" | "tips" | "resources";

const registrationSteps = [
  {
    step: 1,
    title: "Complete AHPRA Self-Check",
    duration: "1-2 weeks",
    cost: "Free",
    icon: "✅",
    description: "Visit the AHPRA IQNM Assessment Portal and complete the self-check to determine your eligibility stream.",
    details: [
      "Go to ahpra.gov.au and create an account",
      "Complete the Internationally Qualified Nurse & Midwife (IQNM) self-check",
      "You will be placed in Stream A, B, or C",
      "Most international nurses are placed in Stream B (OBA Pathway)",
      "Stream B requires NCLEX-RN + OSCE examinations",
    ],
    warning: "Stream C candidates must upgrade their qualifications before proceeding.",
  },
  {
    step: 2,
    title: "Pay AHPRA Assessment Fee",
    duration: "Immediate",
    cost: "AUD $410",
    icon: "💳",
    description: "Pay the non-refundable IQNM assessment fee to proceed with your application.",
    details: [
      "Fee is AUD $410 — non-refundable",
      "Payment is made through the AHPRA portal",
      "Unlocks access to orientation videos and quiz",
      "Complete 90-minute video orientation",
      "Pass the orientation quiz to proceed",
    ],
    warning: "This fee is non-refundable regardless of outcome.",
  },
  {
    step: 3,
    title: "Submit Portfolio Documents",
    duration: "4-8 weeks",
    cost: "Varies",
    icon: "📁",
    description: "Upload all required certified documents to your AHPRA portfolio.",
    details: [
      "Proof of identity (passport, birth certificate)",
      "Nursing qualification certificates",
      "Official academic transcripts",
      "Registration certificate from home country",
      "English language proficiency results (IELTS/OET/TOEFL)",
      "All non-English documents must be translated",
      "Documents must be certified and attested",
    ],
    warning: "Even small errors in documentation can delay your application by months!",
  },
  {
    step: 4,
    title: "English Language Proficiency",
    duration: "Ongoing",
    cost: "AUD $300-500",
    icon: "🗣️",
    description: "Demonstrate English proficiency through an approved test.",
    details: [
      "IELTS Academic: minimum 7.0 overall (no band below 7.0)",
      "OET: minimum Grade B in all four components",
      "TOEFL iBT: minimum score of 94",
      "PTE Academic: minimum score of 65",
      "Results must be less than 3 years old",
    ],
    warning: "OET is highly recommended as it is healthcare-specific and easier for nurses.",
  },
  {
    step: 5,
    title: "Receive ATT & Book NCLEX-RN",
    duration: "2-4 weeks after approval",
    cost: "USD $350-400",
    icon: "📋",
    description: "Receive your Authorisation to Test (ATT) from AHPRA and book your NCLEX-RN exam.",
    details: [
      "AHPRA sends ATT number via email",
      "ATT is valid for only 90 days — book immediately!",
      "Register at pearsonvue.com/nclex",
      "Choose a Pearson VUE test centre near you",
      "Exam can be taken at centres worldwide",
      "Available in major Australian cities",
    ],
    warning: "ATT is only valid for 90 days! Missing this deadline may close your dashboard.",
  },
  {
    step: 6,
    title: "Pass NCLEX-RN Exam",
    duration: "Up to 5 hours",
    cost: "Included above",
    icon: "📝",
    description: "Sit and pass the Next Generation NCLEX-RN (NGN) examination.",
    details: [
      "Computerised Adaptive Testing (CAT) format",
      "Minimum 85 questions, maximum 150 questions",
      "Up to 5 hours exam duration",
      "Tests clinical judgment and decision making",
      "Next Generation NCLEX (NGN) format since 2023",
      "Results typically available within 48 hours",
    ],
    warning: "International nurses have a 45-55% pass rate — thorough preparation is essential!",
  },
  {
    step: 7,
    title: "Pass OSCE Exam",
    duration: "1 day",
    cost: "AUD ~$4,000",
    icon: "🏥",
    description: "Complete the Objective Structured Clinical Examination (OSCE) in Australia.",
    details: [
      "Must travel to Australia for this exam",
      "Practical hands-on clinical skills assessment",
      "Multiple simulated clinical stations",
      "Interact with actor-patients",
      "Assessed on clinical skills and communication",
      "Conducted by ACER (Australian Council for Educational Research)",
    ],
    warning: "You must be physically present in Australia for the OSCE exam.",
  },
  {
    step: 8,
    title: "Apply for Final Registration",
    duration: "4-8 weeks",
    cost: "AUD ~$150",
    icon: "🎓",
    description: "Submit your final registration application to AHPRA to become a Registered Nurse in Australia.",
    details: [
      "Submit all passed exam results",
      "Provide police clearance check",
      "Confirm identity verification",
      "Pay final registration fee",
      "Receive registration number",
      "Can now legally practice as RN anywhere in Australia",
    ],
    warning: "Total process typically takes 9-12 months from start to finish.",
  },
];

const studyTopics = [
  {
    category: "Safe & Effective Care Environment",
    percentage: "17-23%",
    icon: "🛡️",
    color: "blue",
    topics: [
      "Management of Care — delegation, prioritisation, case management",
      "Safety & Infection Control — standard precautions, error prevention",
      "Accident & Error Prevention",
      "Emergency Response Planning",
      "Handling Hazardous Materials",
      "Safe Use of Equipment",
    ],
  },
  {
    category: "Health Promotion & Maintenance",
    percentage: "6-12%",
    icon: "💚",
    color: "green",
    topics: [
      "Ante/Intra/Postpartum and Newborn Care",
      "Developmental Stages & Transitions",
      "Health Screening",
      "High Risk Behaviours",
      "Lifestyle Choices",
      "Self-Care & Disease Prevention",
    ],
  },
  {
    category: "Psychosocial Integrity",
    percentage: "6-12%",
    icon: "🧠",
    color: "purple",
    topics: [
      "Abuse & Neglect",
      "Behavioural Interventions",
      "Chemical & Other Dependencies",
      "Coping Mechanisms",
      "Crisis Intervention",
      "Mental Health Concepts",
      "Therapeutic Communication",
    ],
  },
  {
    category: "Physiological Integrity",
    percentage: "38-62%",
    icon: "❤️",
    color: "red",
    topics: [
      "Basic Care & Comfort — hygiene, mobility, nutrition",
      "Pharmacological Therapies — medication administration, adverse effects",
      "Reduction of Risk Potential — lab values, diagnostic tests",
      "Physiological Adaptation — fluid/electrolytes, medical emergencies",
    ],
  },
];

const quizQuestions = [
  {
    id: 1,
    question: "A nurse is caring for a patient receiving IV fluids. The patient reports shortness of breath and the nurse notices jugular vein distension. What is the priority nursing action?",
    options: [
      "Increase the IV flow rate",
      "Slow or stop the IV infusion and notify the physician",
      "Elevate the patient's legs",
      "Administer oxygen at 2L per min",
    ],
    correct: 1,
    explanation: "These signs indicate fluid volume excess. The priority is to slow or stop the IV infusion immediately and notify the physician to prevent further complications like pulmonary edema.",
    category: "Physiological Integrity",
  },
  {
    id: 2,
    question: "A nurse is delegating tasks to a nursing assistant. Which task is MOST appropriate to delegate?",
    options: [
      "Assessing a newly admitted patient",
      "Administering oral medications",
      "Measuring and recording vital signs of a stable patient",
      "Teaching a patient about insulin injection",
    ],
    correct: 2,
    explanation: "Measuring vital signs on a stable patient is within the scope of practice for a nursing assistant. Assessment, medication administration, and patient teaching require a registered nurse.",
    category: "Safe & Effective Care",
  },
  {
    id: 3,
    question: "A patient with diabetes reports feeling shaky, sweaty, and confused. Blood glucose is 3.2 mmol/L. What is the FIRST action the nurse should take?",
    options: [
      "Call the physician immediately",
      "Give 15-20 grams of fast-acting carbohydrate",
      "Administer insulin as prescribed",
      "Recheck blood glucose in 1 hour",
    ],
    correct: 1,
    explanation: "The patient is experiencing hypoglycemia (BGL below 4.0 mmol/L). The immediate action is to give 15-20g of fast-acting carbohydrate using the Rule of 15. Insulin would worsen hypoglycemia.",
    category: "Physiological Integrity",
  },
  {
    id: 4,
    question: "A nurse finds that the physician ordered a dose that seems too high. What should the nurse do FIRST?",
    options: [
      "Administer the medication as ordered",
      "Refuse to give the medication",
      "Consult a drug reference and clarify with the prescriber",
      "Give half the ordered dose",
    ],
    correct: 2,
    explanation: "The nurse should verify unusual orders by consulting a drug reference and then clarifying with the prescribing physician before administering. Never alter doses without physician approval.",
    category: "Pharmacological Therapies",
  },
  {
    id: 5,
    question: "Which patient should the nurse assess FIRST after receiving handover?",
    options: [
      "A patient with stable vital signs requesting pain medication",
      "A post-op patient with respiratory rate of 28 and oxygen saturation of 91%",
      "A diabetic patient whose breakfast tray has arrived",
      "A patient asking to use the bathroom",
    ],
    correct: 1,
    explanation: "Using ABC prioritisation — the post-op patient with respiratory distress (RR 28, SpO2 91%) is the most critical and must be assessed first as respiratory compromise can rapidly become life-threatening.",
    category: "Safe & Effective Care",
  },
  {
    id: 6,
    question: "A nurse is caring for a patient with a potassium level of 6.2 mEq/L. Which finding requires IMMEDIATE intervention?",
    options: [
      "Muscle weakness in the legs",
      "Peaked T waves on ECG",
      "Increased urinary output",
      "Mild nausea",
    ],
    correct: 1,
    explanation: "Peaked T waves on ECG indicate hyperkalemia affecting cardiac conduction. This is a cardiac emergency requiring immediate intervention as it can lead to fatal arrhythmias.",
    category: "Physiological Integrity",
  },
  {
    id: 7,
    question: "A nurse receives orders for four patients. Which order should the nurse implement FIRST?",
    options: [
      "Administer a scheduled antibiotic for a patient with pneumonia",
      "Insert a urinary catheter for a patient before surgery in 3 hours",
      "Administer naloxone to a patient with a respiratory rate of 6",
      "Change a dressing on a post-operative wound",
    ],
    correct: 2,
    explanation: "A respiratory rate of 6 is life-threatening. Naloxone reverses opioid-induced respiratory depression. This is the most urgent situation using ABC prioritisation.",
    category: "Pharmacological Therapies",
  },
  {
    id: 8,
    question: "Which action by the nurse BEST demonstrates therapeutic communication?",
    options: [
      "Telling the patient everything will be okay",
      "Saying I understand exactly how you feel",
      "Asking the patient to tell you more about what they are feeling",
      "Changing the subject when the patient becomes upset",
    ],
    correct: 2,
    explanation: "Asking open-ended questions encourages the patient to express feelings and demonstrates active listening. False reassurance and claiming to understand are non-therapeutic responses.",
    category: "Psychosocial Integrity",
  },
];

const examTips = [
  {
    title: "Master Clinical Judgment",
    icon: "🧠",
    color: "blue",
    tips: [
      "NCLEX tests HOW you think, not just WHAT you know",
      "Use the nursing process: Assess, Diagnose, Plan, Implement, Evaluate",
      "Always assess BEFORE intervening",
      "Use ABC (Airway, Breathing, Circulation) for prioritisation",
      "Maslow's hierarchy helps with psychosocial questions",
    ],
  },
  {
    title: "Next Generation NCLEX (NGN) Tips",
    icon: "⚡",
    color: "purple",
    tips: [
      "NGN focuses on clinical judgment — not memorisation",
      "New question types: Extended drag & drop, matrix grids, bow-tie questions",
      "Practice case study style questions",
      "Focus on recognising cues and generating solutions",
      "Understand rationales — do not just memorise answers",
    ],
  },
  {
    title: "Prioritisation Strategies",
    icon: "🎯",
    color: "red",
    tips: [
      "Acute and unstable patients always before stable patients",
      "Actual problems before potential problems",
      "Life-threatening before non-life-threatening",
      "Use SBAR for communication questions",
      "Remember: Assess first, then intervene",
    ],
  },
  {
    title: "Pharmacology Tips",
    icon: "💊",
    color: "green",
    tips: [
      "Know the 5 Rights: Right patient, drug, dose, route, time",
      "Learn drug name endings (e.g., -olol = beta blocker)",
      "Focus on high-alert medications: insulin, heparin, warfarin",
      "Know common side effects and antidotes",
      "Always check allergies before administration",
    ],
  },
  {
    title: "Exam Day Strategies",
    icon: "📝",
    color: "orange",
    tips: [
      "Get 8 hours sleep the night before",
      "Arrive at Pearson VUE centre 30 mins early",
      "Bring valid photo ID — passport recommended",
      "Trust your first instinct on most questions",
      "Take breaks if feeling overwhelmed",
    ],
  },
  {
    title: "Study Schedule Tips",
    icon: "📅",
    color: "teal",
    tips: [
      "Study consistently — 2-4 hours daily is better than cramming",
      "Use UWorld, Kaplan, or Archer for practice questions",
      "Aim for 75% or above on practice tests",
      "Review rationales for both correct and incorrect answers",
      "Allow 3-6 months of dedicated preparation",
    ],
  },
];

const resources = [
  {
    category: "Official Websites",
    icon: "🌐",
    color: "blue",
    links: [
      { name: "AHPRA Official Website", url: "https://www.ahpra.gov.au", description: "Start your IQNM self-check here" },
      { name: "NCLEX Official Website", url: "https://www.nclex.com", description: "Register for NCLEX exam" },
      { name: "Pearson VUE NCLEX", url: "https://home.pearsonvue.com/nclex", description: "Book your exam centre" },
      { name: "NCSBN Official", url: "https://www.ncsbn.org", description: "NCLEX test plan and resources" },
    ],
  },
  {
    category: "Study Resources",
    icon: "📚",
    color: "green",
    links: [
      { name: "UWorld NCLEX", url: "https://www.uworld.com", description: "Best NCLEX question bank — highly recommended" },
      { name: "Kaplan NCLEX", url: "https://www.kaptest.com/nclex", description: "Comprehensive NCLEX prep course" },
      { name: "Archer Review", url: "https://archerreview.com", description: "Affordable NCLEX prep with high pass rates" },
      { name: "Mark Klimek Lectures", url: "https://www.youtube.com", description: "Free audio lectures — search on YouTube" },
    ],
  },
  {
    category: "Australian Nursing Bodies",
    icon: "🏥",
    color: "red",
    links: [
      { name: "NMBA Nursing Board", url: "https://www.nursingmidwiferyboard.gov.au", description: "Standards for Australian nursing practice" },
      { name: "ACER OSCE Information", url: "https://www.acer.org", description: "Information about the OSCE exam" },
      { name: "ANF Australian Nursing Federation", url: "https://anf.org.au", description: "Support for nurses in Australia" },
    ],
  },
  {
    category: "Community & Support",
    icon: "👥",
    color: "purple",
    links: [
      { name: "NCLEX Subreddit", url: "https://www.reddit.com/r/NCLEX", description: "Community tips and experiences" },
      { name: "AllNurses Forum", url: "https://allnurses.com", description: "Nursing community and NCLEX discussions" },
      { name: "Facebook NCLEX Australia Groups", url: "https://www.facebook.com", description: "Search NCLEX Australia groups on Facebook" },
    ],
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-200 text-blue-800",
  green: "bg-green-50 border-green-200 text-green-800",
  purple: "bg-purple-50 border-purple-200 text-purple-800",
  red: "bg-red-50 border-red-200 text-red-800",
  orange: "bg-orange-50 border-orange-200 text-orange-800",
  teal: "bg-teal-50 border-teal-200 text-teal-800",
};

const iconBgMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600",
  red: "bg-red-100 text-red-600",
  orange: "bg-orange-100 text-orange-600",
  teal: "bg-teal-100 text-teal-600",
};

export default function Home() {
  const [tab, setTab] = useState<Tab>("home");
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  function handleAnswer(index: number) {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  }

  function nextQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  }

  function resetQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
  }

  const tabs = [
    { id: "home" as Tab, label: "Home", icon: "🏠" },
    { id: "registration" as Tab, label: "Steps", icon: "📋" },
    { id: "study" as Tab, label: "Study", icon: "📚" },
    { id: "quiz" as Tab, label: "Quiz", icon: "❓" },
    { id: "tips" as Tab, label: "Tips", icon: "💡" },
    { id: "resources" as Tab, label: "Links", icon: "🔗" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">🏥</span>
            </div>
            <div>
              <h1 className="font-black text-xl text-gray-900">NCLEX Australia Guide</h1>
              <p className="text-xs text-gray-500">Your complete registration roadmap</p>
            </div>
            <div className="ml-auto bg-blue-50 border border-blue-200 rounded-xl px-3 py-1">
              <span className="text-blue-600 text-xs font-bold">2026 Updated</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-24">

        {/* HOME TAB */}
        {tab === "home" && (
          <div className="py-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white mb-6">
              <h2 className="text-3xl font-black mb-2">Your Path to Becoming an Australian RN 🇦🇺</h2>
              <p className="opacity-90 leading-relaxed mb-4">
                Everything you need to navigate the NCLEX registration process in Australia — from AHPRA self-check to your final registration as a Registered Nurse.
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/20 rounded-2xl p-3 text-center">
                  <p className="text-2xl font-black">8</p>
                  <p className="text-xs opacity-80">Steps</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-3 text-center">
                  <p className="text-2xl font-black">9-12</p>
                  <p className="text-xs opacity-80">Months</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-3 text-center">
                  <p className="text-2xl font-black">2</p>
                  <p className="text-xs opacity-80">Exams</p>
                </div>
              </div>
            </div>

            <h3 className="font-black text-lg mb-4">Quick Overview 📋</h3>
            <div className="space-y-3 mb-6">
              {[
                { icon: "1️⃣", title: "AHPRA Self-Check", desc: "Complete eligibility assessment — Free", color: "blue" },
                { icon: "2️⃣", title: "Pay & Submit Portfolio", desc: "AUD $410 + document submission", color: "green" },
                { icon: "3️⃣", title: "English Proficiency", desc: "IELTS 7.0 / OET Grade B minimum", color: "purple" },
                { icon: "4️⃣", title: "NCLEX-RN Exam", desc: "USD $350-400 — up to 150 questions", color: "red" },
                { icon: "5️⃣", title: "OSCE Exam", desc: "AUD ~$4,000 — must be in Australia", color: "orange" },
                { icon: "6️⃣", title: "Final Registration", desc: "Become a Registered Nurse! 🎓", color: "teal" },
              ].map((item) => (
                <div key={item.title} className={`flex items-center gap-4 p-4 rounded-2xl border ${colorMap[item.color]}`}>
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-sm opacity-70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-black text-lg mb-4">Total Cost Estimate 💰</h3>
            <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
              {[
                { item: "AHPRA Assessment Fee", cost: "AUD $410" },
                { item: "English Proficiency Test", cost: "AUD $300-500" },
                { item: "NCLEX-RN Exam Fee", cost: "USD $350-400" },
                { item: "OSCE Exam Fee", cost: "AUD ~$4,000" },
                { item: "Travel & Accommodation", cost: "Varies" },
                { item: "Final Registration", cost: "AUD ~$150" },
              ].map((row, i) => (
                <div key={i} className={`flex justify-between py-2 ${i > 0 ? "border-t border-gray-100" : ""}`}>
                  <span className="text-gray-600 text-sm">{row.item}</span>
                  <span className="font-bold text-sm">{row.cost}</span>
                </div>
              ))}
              <div className="border-t-2 border-gray-200 mt-2 pt-2 flex justify-between">
                <span className="font-black">Estimated Total</span>
                <span className="font-black text-blue-600">AUD $5,000-6,500+</span>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
              <div className="flex gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <p className="font-bold text-red-700 mb-1">Important 2026 Update</p>
                  <p className="text-red-600 text-sm leading-relaxed">
                    AHPRA has tightened deadlines in 2025-2026. Your ATT is now only valid for 90 days. Missing deadlines may close your dashboard and require restarting the process!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* REGISTRATION STEPS TAB */}
        {tab === "registration" && (
          <div className="py-6">
            <h2 className="font-black text-2xl mb-2">Registration Steps 📋</h2>
            <p className="text-gray-500 mb-6">Tap each step to see full details</p>
            <div className="space-y-4">
              {registrationSteps.map((step) => (
                <div key={step.step} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  <div
                    className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedStep(expandedStep === step.step ? null : step.step)}
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900">{step.title}</p>
                      <div className="flex gap-3 mt-1">
                        <span className="text-xs text-gray-500">⏱ {step.duration}</span>
                        <span className="text-xs text-blue-600 font-semibold">💰 {step.cost}</span>
                      </div>
                    </div>
                    <span className="text-gray-400 text-xl">{expandedStep === step.step ? "↑" : "↓"}</span>
                  </div>
                  {expandedStep === step.step && (
                    <div className="px-4 pb-4 border-t border-gray-100">
                      <p className="text-gray-600 mt-3 mb-3 leading-relaxed">{step.description}</p>
                      <div className="space-y-2 mb-3">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex gap-2 items-start">
                            <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                      {step.warning && (
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                          <p className="text-amber-700 text-sm font-semibold">⚠️ {step.warning}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STUDY MATERIALS TAB */}
        {tab === "study" && (
          <div className="py-6">
            <h2 className="font-black text-2xl mb-2">Study Materials 📚</h2>
            <p className="text-gray-500 mb-6">NCLEX-RN exam content breakdown</p>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
              <h3 className="font-bold mb-4">NCLEX-RN Content Areas</h3>
              {studyTopics.map((topic, i) => (
                <div key={i} className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold">{topic.icon} {topic.category}</span>
                    <span className="text-sm text-blue-600 font-bold">{topic.percentage}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: topic.percentage.split("-")[1] }} />
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-black text-lg mb-4">Detailed Topics</h3>
            <div className="space-y-4">
              {studyTopics.map((topic, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  <div
                    className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50"
                    onClick={() => setExpandedTopic(expandedTopic === i ? null : i)}
                  >
                    <span className="text-2xl">{topic.icon}</span>
                    <div className="flex-1">
                      <p className="font-bold">{topic.category}</p>
                      <p className="text-blue-600 text-sm font-semibold">{topic.percentage} of exam</p>
                    </div>
                    <span className="text-gray-400">{expandedTopic === i ? "↑" : "↓"}</span>
                  </div>
                  {expandedTopic === i && (
                    <div className="px-4 pb-4 border-t border-gray-100">
                      <div className="space-y-2 mt-3">
                        {topic.topics.map((t, j) => (
                          <div key={j} className="flex gap-2 items-start">
                            <span className="text-blue-500 flex-shrink-0 mt-0.5">•</span>
                            <span className="text-sm text-gray-700">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 bg-purple-50 border border-purple-200 rounded-2xl p-5">
              <h3 className="font-bold text-purple-700 mb-3">⚡ Next Generation NCLEX (NGN)</h3>
              <p className="text-purple-600 text-sm leading-relaxed mb-3">
                Since April 2023, NCLEX uses the Next Generation format focusing on clinical judgment rather than memorisation.
              </p>
              <div className="space-y-2">
                {[
                  "Extended drag & drop questions",
                  "Matrix and grid questions",
                  "Bow-tie clinical judgment questions",
                  "Case study based scenarios",
                  "Enhanced multiple response questions",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-purple-500">⚡</span>
                    <span className="text-sm text-purple-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* QUIZ TAB */}
        {tab === "quiz" && (
          <div className="py-6">
            <h2 className="font-black text-2xl mb-2">Practice Quiz ❓</h2>
            <p className="text-gray-500 mb-6">Test your NCLEX knowledge</p>

            {quizComplete ? (
              <div className="text-center">
                <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-6">
                  <span className="text-6xl block mb-4">
                    {score >= 6 ? "🎉" : score >= 4 ? "👍" : "📚"}
                  </span>
                  <h3 className="text-3xl font-black mb-2">{score}/{quizQuestions.length}</h3>
                  <p className="text-gray-500 mb-4">
                    {score >= 6 ? "Excellent work! You are NCLEX ready!" :
                      score >= 4 ? "Good job! Keep practising!" :
                        "Keep studying — you will get there!"}
                  </p>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden mb-4">
                    <div
                      className={`h-full rounded-full transition-all ${score >= 6 ? "bg-green-500" : score >= 4 ? "bg-blue-500" : "bg-orange-500"}`}
                      style={{ width: `${(score / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                  <p className="text-gray-400 text-sm">{Math.round((score / quizQuestions.length) * 100)}% correct</p>
                </div>
                <button
                  onClick={resetQuiz}
                  className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-colors"
                >
                  Try Again 🔄
                </button>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {quizQuestions.length}</span>
                  <span className="text-sm font-bold text-blue-600">Score: {score}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-6">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all"
                    style={{ width: `${(currentQuestion / quizQuestions.length) * 100}%` }}
                  />
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-4">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg mb-3 inline-block">
                    {quizQuestions[currentQuestion].category}
                  </span>
                  <p className="font-semibold text-gray-800 leading-relaxed mt-2">
                    {quizQuestions[currentQuestion].question}
                  </p>
                </div>

                <div className="space-y-3 mb-4">
                  {quizQuestions[currentQuestion].options.map((option, i) => (
                    <div
                      key={i}
                      onClick={() => handleAnswer(i)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all font-medium cursor-pointer ${selectedAnswer === null
                        ? "bg-white border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                        : i === quizQuestions[currentQuestion].correct
                          ? "bg-green-50 border-green-400 text-green-700"
                          : selectedAnswer === i
                            ? "bg-red-50 border-red-400 text-red-700"
                            : "bg-white border-gray-200 opacity-50"
                        }`}
                    >
                      <span className="font-bold mr-2">{["A", "B", "C", "D"][i]}.</span> {option}
                    </div>
                  ))}
                </div>

                {showExplanation && (
                  <div className={`rounded-2xl p-4 mb-4 ${selectedAnswer === quizQuestions[currentQuestion].correct ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
                    <p className={`font-bold mb-2 ${selectedAnswer === quizQuestions[currentQuestion].correct ? "text-green-700" : "text-red-700"}`}>
                      {selectedAnswer === quizQuestions[currentQuestion].correct ? "✅ Correct!" : "❌ Incorrect"}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {quizQuestions[currentQuestion].explanation}
                    </p>
                  </div>
                )}

                {selectedAnswer !== null && (
                  <button
                    onClick={nextQuestion}
                    className="w-full bg-blue-600 text-white py-3 rounded-2xl font-bold hover:bg-blue-700 transition-colors"
                  >
                    {currentQuestion < quizQuestions.length - 1 ? "Next Question →" : "See Results 🎉"}
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* TIPS TAB */}
        {tab === "tips" && (
          <div className="py-6">
            <h2 className="font-black text-2xl mb-2">Exam Tips & Strategies 💡</h2>
            <p className="text-gray-500 mb-6">Proven strategies to pass the NCLEX</p>
            <div className="space-y-4">
              {examTips.map((section, i) => (
                <div key={i} className={`rounded-2xl border p-5 ${colorMap[section.color]}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${iconBgMap[section.color]}`}>
                      {section.icon}
                    </div>
                    <h3 className="font-black text-lg">{section.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {section.tips.map((tip, j) => (
                      <div key={j} className="flex gap-2 items-start">
                        <span className="mt-0.5 flex-shrink-0">→</span>
                        <span className="text-sm leading-relaxed">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RESOURCES TAB */}
        {tab === "resources" && (
          <div className="py-6">
            <h2 className="font-black text-2xl mb-2">Useful Links & Resources 🔗</h2>
            <p className="text-gray-500 mb-6">Everything you need in one place</p>
            <div className="space-y-6">
              {resources.map((section, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{section.icon}</span>
                    <h3 className="font-black text-lg">{section.category}</h3>
                  </div>
                  <div className="space-y-3">
                    {section.links.map((link, j) => (
                      <div
                        key={j}
                        onClick={() => window.open(link.url, "_blank")}
                        className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-4 hover:border-blue-400 hover:bg-blue-50 transition-all group cursor-pointer"
                      >
                        <div>
                          <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{link.name}</p>
                          <p className="text-gray-500 text-sm">{link.description}</p>
                        </div>
                        <span className="text-gray-400 group-hover:text-blue-500 text-xl">→</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-gray-100 rounded-2xl p-4">
              <p className="text-gray-500 text-xs leading-relaxed">
                ⚠️ Disclaimer: This app is for informational purposes only. Always verify current requirements directly with AHPRA and NCSBN as regulations may change. Information is based on 2026 guidelines.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="max-w-3xl mx-auto px-2 py-2">
          <div className="flex justify-around">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${tab === t.id ? "text-blue-600 bg-blue-50" : "text-gray-400 hover:text-gray-600"}`}
              >
                <span className="text-xl">{t.icon}</span>
                <span className="text-xs font-semibold">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}