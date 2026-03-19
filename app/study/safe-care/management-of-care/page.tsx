"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "What is Delegation?",
    icon: "👥",
    color: "blue",
    content: [
      "Delegation is the transfer of RESPONSIBILITY for performing a specific nursing task to a competent individual — while the RN retains FULL ACCOUNTABILITY",
      "Delegation is a legal act governed by the Nurse Practice Act",
      "Critical distinction: RESPONSIBILITY can be transferred — ACCOUNTABILITY NEVER transfers",
      "The RN is ALWAYS accountable for delegated tasks — even after delegating",
      "Delegation is NOT abandonment — it is appropriate nursing practice",
      "Must match task complexity to staff competency level at all times",
    ],
  },
  {
    title: "The Delegation Hierarchy",
    icon: "📊",
    color: "purple",
    content: [
      "PHYSICIAN → REGISTERED NURSE (RN) → LPN/LVN → CNA/AIN",
      "RN can delegate to LPN/LVN and CNA/AIN",
      "LPN/LVN CANNOT delegate to CNA/AIN",
      "CNA/AIN CANNOT delegate to anyone",
      "Student nurses CANNOT delegate — they function at CNA level until competency is demonstrated",
      "Agency and float nurses — can only be delegated tasks within their verified competency",
    ],
  },
  {
    title: "The 5 Rights of Delegation",
    icon: "✅",
    color: "green",
    content: [
      "RIGHT TASK — Is this task appropriate to delegate by law and policy?",
      "RIGHT CIRCUMSTANCE — Is the patient stable? Is the setting safe and appropriate?",
      "RIGHT PERSON — Does this person have the education, training and competency?",
      "RIGHT DIRECTION — Were clear, specific, complete instructions given?",
      "RIGHT SUPERVISION — Is the RN monitoring outcomes and providing feedback?",
      "Memory trick: The Careful Person Delegates Safely — Task, Circumstance, Person, Direction, Supervision",
    ],
  },
  {
    title: "What CAN Be Delegated to CNA/AIN",
    icon: "✔️",
    color: "green",
    content: [
      "Vital signs on STABLE patients — temperature, BP, pulse, respirations, SpO2",
      "Basic hygiene care — bathing, grooming, oral care, hair care",
      "Ambulation and mobility of STABLE patients",
      "Repositioning and turning every 2 hours",
      "Intake and output (I&O) measurement and recording",
      "Feeding STABLE patients with NO swallowing difficulties",
      "Collecting routine specimens — urine, stool",
      "Making occupied and unoccupied beds",
      "Measuring height and weight",
      "Emptying urinary catheter drainage bags and recording output",
      "Range of motion exercises (passive ROM) as instructed",
    ],
  },
  {
    title: "What CANNOT Be Delegated — RN ONLY",
    icon: "❌",
    color: "red",
    content: [
      "ASSESSMENT — initial AND ongoing nursing assessment (ADPIE belongs to the RN!)",
      "DIAGNOSIS — identifying nursing diagnoses",
      "PLANNING — developing and updating the care plan",
      "EVALUATION — evaluating patient response to treatment",
      "Patient and family education and teaching",
      "Admission assessment and discharge assessment",
      "IV cannula insertion and IV medication administration",
      "Blood and blood product administration",
      "Care of ALL unstable patients",
      "Telephone and verbal orders from physicians",
      "Triage and prioritisation decisions",
      "Informed consent witnessing",
    ],
  },
  {
    title: "What LPN/LVN CAN Do",
    icon: "👩‍⚕️",
    color: "blue",
    content: [
      "Administer medications — oral, IM, subcutaneous, topical to STABLE patients",
      "Perform wound dressing changes (non-complex)",
      "Insert urinary catheters",
      "Monitor IV infusions already running (NOT initiate)",
      "Reinforce patient education (NOT initial teaching)",
      "Contribute to care plan updates (NOT independently develop)",
      "Perform focused assessments (NOT initial comprehensive assessment)",
      "Tracheostomy care on stable patients",
      "NG tube feedings on stable patients",
    ],
  },
  {
    title: "Interdisciplinary Team Roles",
    icon: "🏥",
    color: "purple",
    content: [
      "Social Worker — discharge planning, community resources, financial assistance, crisis intervention",
      "Physiotherapist — mobility, strength, rehabilitation, fall prevention",
      "Occupational Therapist — ADL training, adaptive equipment, home modification assessment",
      "Dietitian — nutritional assessment and therapeutic diet planning",
      "Pharmacist — medication review, drug interactions, patient education on medications",
      "Respiratory Therapist — airway management, oxygen therapy, ventilator management",
      "Speech Language Pathologist — swallowing assessment, communication disorders",
      "Case Manager — care coordination, utilisation review, discharge planning",
      "Chaplain — spiritual and emotional support, end of life care",
    ],
  },
  {
    title: "Case Management & DRGs",
    icon: "📋",
    color: "blue",
    content: [
      "Case management coordinates care across the healthcare team — right care, right time, right setting, right cost",
      "Case managers conduct utilisation review — is this level of care necessary?",
      "DRGs (Diagnosis Related Groups) — hospitals receive FIXED payment based on diagnosis, NOT length of stay",
      "If patient stays longer than DRG allows = hospital loses money — case managers manage length of stay",
      "Critical pathways — standardised evidence-based plans outlining expected interventions and timeline",
      "Variance = anything deviating from expected pathway — must be documented and reported",
      "NCLEX key: Cost containment matters — but patient safety ALWAYS comes first",
    ],
  },
  {
    title: "Quality Improvement & Incident Reports",
    icon: "📊",
    color: "orange",
    content: [
      "Incident reports — document any unexpected event (falls, medication errors, near misses)",
      "Incident reports are for QUALITY IMPROVEMENT — NOT punitive",
      "Do NOT document incident report in the patient chart — it is a separate document",
      "Report ALL incidents regardless of whether harm occurred — near misses are important!",
      "Sentinel events — unexpected death or serious injury requiring root cause analysis",
      "Root cause analysis — investigates WHY an error occurred to prevent recurrence",
      "Just culture — blame-free environment that encourages honest error reporting",
    ],
  },
  {
    title: "SBAR Communication",
    icon: "📢",
    color: "green",
    content: [
      "SBAR = Situation, Background, Assessment, Recommendation",
      "S — Situation: Patient name, age, location, what is happening RIGHT NOW",
      "B — Background: Diagnosis, relevant history, current medications, recent results",
      "A — Assessment: What you think is wrong, vital signs, clinical concerns",
      "R — Recommendation: What you need — orders, assessment, medication, transfer",
      "Use SBAR for ALL clinical communication — handover, physician calls, escalation",
      "Example: 'Mr Smith, Room 4, 67yo COPD, SpO2 dropped to 88%, RR 28, I think he is exacerbating, requesting urgent review and nebuliser order'",
    ],
  },
  {
    title: "Chain of Command & Escalation",
    icon: "🔺",
    color: "red",
    content: [
      "Step 1: Contact the physician again — clearly state concerns using SBAR",
      "Step 2: Contact the charge nurse — inform and seek support",
      "Step 3: Contact the nursing supervisor or nurse manager",
      "Step 4: Contact the Chief of Medicine or Medical Director",
      "Step 5: Document ALL communications, actions taken and responses received",
      "NEVER abandon the patient — always find coverage before escalating",
      "Document everything — if it is not documented, it did not happen",
    ],
  },
  {
    title: "Rapid Response Team (RRT)",
    icon: "🚨",
    color: "red",
    content: [
      "RRT is called when patient is DETERIORATING but has NOT yet arrested",
      "ANY nurse, patient or family member can call RRT — no physician order needed",
      "Early warning signs: RR >25, SpO2 <90%, acute change in mental status, systolic BP <90, HR >130 or <40",
      "Purpose: Prevent cardiac arrest through EARLY intervention",
      "NCLEX key: Call RRT BEFORE the patient arrests — do NOT wait!",
      "After calling RRT — stay with patient, keep airway open, prepare crash cart access",
    ],
  },
  {
    title: "Discharge Planning",
    icon: "🏠",
    color: "green",
    content: [
      "GOLDEN RULE: Discharge planning begins at ADMISSION — never at discharge!",
      "Assess: Physical function, cognitive ability, social support, financial resources, home environment, health literacy, cultural factors",
      "Levels of care: Acute → Rehabilitation → Skilled Nursing → Home Health → Independent Home",
      "Teach-back method: Ask patient to explain in THEIR OWN WORDS — NOT 'do you understand?'",
      "Community resources: Meals on Wheels, home health aide, adult day care, hospice, respite care, support groups",
      "Arrange referrals EARLY: Social work, physiotherapy, home health, community nursing",
      "Provide written instructions in plain language — confirm understanding before discharge",
    ],
  },
];

const mnemonics = [
  {
    title: "5 Rights of Delegation",
    acronym: "TCPDS",
    breakdown: ["Task", "Circumstance", "Person", "Direction", "Supervision"],
    memory: "The Careful Person Delegates Safely",
    color: "blue",
  },
  {
    title: "What RNs CANNOT Delegate",
    acronym: "ADPIE",
    breakdown: ["Assess", "Diagnose", "Plan", "Implement (complex)", "Evaluate"],
    memory: "The entire nursing PROCESS belongs to the RN!",
    color: "purple",
  },
  {
    title: "Clinical Handover",
    acronym: "SBAR",
    breakdown: ["Situation", "Background", "Assessment", "Recommendation"],
    memory: "Use SBAR for ALL clinical communications — physician calls, handover, escalation",
    color: "green",
  },
];

const alerts = [
  { text: "Delegation ≠ abandonment — delegating is appropriate, professional nursing practice", severity: "high" },
  { text: "RN ACCOUNTABILITY NEVER TRANSFERS — even after delegating, you remain legally responsible", severity: "high" },
  { text: "Assessment is ALWAYS the RN — if CNA reports a change, the RN must personally assess", severity: "high" },
  { text: "Unstable patients = RN ONLY — NEVER delegate care of an unstable or complex patient", severity: "high" },
  { text: "LPNs can medicate STABLE patients but CANNOT perform initial comprehensive assessment", severity: "medium" },
  { text: "Discharge planning starts at ADMISSION — this is one of the most tested NCLEX facts!", severity: "medium" },
  { text: "Incident reports are NEVER documented in the patient chart — separate quality document", severity: "medium" },
  { text: "Chain of command — NEVER skip steps — always escalate through proper channels", severity: "medium" },
  { text: "Teach-back ≠ asking 'do you understand?' — make the patient DEMONSTRATE or EXPLAIN", severity: "medium" },
  { text: "Float nurses — ONLY assign tasks within their VERIFIED competency for that unit", severity: "low" },
  { text: "Student nurses — RN is responsible for EVERYTHING they do — treat them like CNAs", severity: "low" },
  { text: "NEVER abandon a patient — even in unsafe situations, find coverage FIRST then escalate", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A registered nurse is preparing to delegate tasks for the shift. Which principle BEST describes the concept of delegation in nursing?",
    options: [
      "The RN transfers both responsibility and accountability to the delegate",
      "Delegation can only occur between nurses of equal qualification",
      "The RN transfers responsibility for a task while retaining full accountability",
      "Delegation eliminates the need for RN supervision of the delegated task",
    ],
    correct: 2,
    explanation: "Delegation transfers RESPONSIBILITY for performing a task — but the RN ALWAYS retains ACCOUNTABILITY. This is the most fundamental principle of delegation. The RN must supervise all delegated tasks and remains legally responsible for outcomes regardless of who performs the task.",
    wrongExplanations: [
      "WRONG: Accountability NEVER transfers in delegation. The RN remains legally accountable at all times.",
      "WRONG: RNs routinely delegate to CNAs and LPNs who have different qualifications.",
      "",
      "WRONG: Supervision is the 5th Right of Delegation — the RN must always monitor delegated tasks.",
    ],
  },
  {
    level: "Knowledge",
    question: "Which task falls within the scope of practice of a licensed practical nurse (LPN)?",
    options: [
      "Performing the initial comprehensive nursing assessment on a new admission",
      "Developing the nursing care plan independently",
      "Administering oral medications to a stable medical patient",
      "Providing initial discharge education about a new diabetes diagnosis",
    ],
    correct: 2,
    explanation: "LPNs can administer medications to STABLE patients — this is within their verified scope of practice. Initial assessment, independent care planning and initial patient education are RN-only responsibilities. LPNs can REINFORCE teaching but cannot initiate it. LPNs can CONTRIBUTE to care plans but cannot develop them independently.",
    wrongExplanations: [
      "WRONG: Initial comprehensive assessment is an RN-only responsibility — LPNs perform focused assessments only.",
      "WRONG: LPNs contribute to care plan updates but cannot independently develop care plans.",
      "",
      "WRONG: LPNs can reinforce existing teaching but cannot initiate or provide initial patient education.",
    ],
  },
  {
    level: "Application",
    question: "A nurse working on a medical-surgical unit has the following patients. A CNA is available to assist. Which patient's care is MOST appropriate to assign to the CNA?",
    options: [
      "A 78-year-old with new onset confusion following hip surgery",
      "A 45-year-old stable patient who needs assistance with morning hygiene",
      "A 62-year-old reporting sudden onset chest pain rated 7/10",
      "A 55-year-old whose blood pressure has dropped from 130/80 to 88/60",
    ],
    correct: 1,
    explanation: "Assisting a STABLE patient with morning hygiene is an appropriate CNA task — it is a routine ADL that does not require nursing judgment. The other three patients are UNSTABLE: new onset confusion indicates a neurological change requiring immediate RN assessment; chest pain requires urgent RN assessment and intervention; a significant BP drop (130/80 → 88/60) indicates hemodynamic instability. Unstable patients = RN ONLY.",
    wrongExplanations: [
      "WRONG: New onset confusion = neurological change = unstable patient = RN only. The RN must assess immediately.",
      "",
      "WRONG: Chest pain rated 7/10 is a potential cardiac emergency. This requires immediate RN assessment — never delegate.",
      "WRONG: BP dropping from 130/80 to 88/60 = hemodynamic instability = RN only. This could be shock.",
    ],
  },
  {
    level: "Application",
    question: "A nurse delegates vital sign measurement to a CNA. Thirty minutes later the CNA reports the patient's blood pressure is 78/50 mmHg. What should the nurse do FIRST?",
    options: [
      "Ask the CNA to remeasure the blood pressure in the other arm",
      "Call the attending physician to report the finding immediately",
      "Go immediately to assess the patient personally",
      "Review the patient's baseline blood pressure in the chart",
    ],
    correct: 2,
    explanation: "A blood pressure of 78/50 mmHg is critically low and indicates hemodynamic instability — this is a potential emergency. The nurse must ASSESS the patient IMMEDIATELY and personally — assessment cannot be delegated. While the physician will need to be notified, the RN must first gather complete assessment data to report. The RN needs to know: Is the patient conscious? Diaphoretic? What is the heart rate? What does the patient look like?",
    wrongExplanations: [
      "WRONG: Asking the CNA to remeasure wastes critical time when a patient may be in shock. The RN must assess now.",
      "WRONG: The physician needs to be called — but AFTER the RN personally assesses the patient to gather complete data.",
      "",
      "WRONG: Reviewing baseline is not the priority. The patient needs immediate RN assessment with BP of 78/50.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is preparing to discharge a patient and uses the teach-back method. Which action BEST demonstrates correct use of teach-back?",
    options: [
      "Asking the patient 'Do you have any questions about your medications?'",
      "Providing written discharge instructions and asking the patient to sign them",
      "Asking the patient 'Can you show me how you would take your insulin at home?'",
      "Telling the patient to call the doctor if they have any concerns after discharge",
    ],
    correct: 2,
    explanation: "Teach-back requires the patient to DEMONSTRATE or EXPLAIN the information in their own words — not simply confirm they understand. Asking a patient to show how they would administer insulin verifies actual understanding and skill. Simply asking 'do you have questions' or asking them to sign paperwork does NOT verify comprehension — patients often say 'yes I understand' even when they do not.",
    wrongExplanations: [
      "WRONG: 'Do you have any questions?' does NOT verify understanding. Patients say 'no' even when they don't understand.",
      "WRONG: Signing paperwork is a legal requirement — it does NOT verify the patient actually understood the content.",
      "",
      "WRONG: Telling patients to call the doctor is appropriate advice but is not a teach-back technique.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is working the night shift with four patients. At 0200, the following reports arrive simultaneously:\n• Patient A: CNA reports BP 88/52, HR 118, RR 24, Temp 38.9°C\n• Patient B: Patient calls reporting sudden onset severe headache 10/10 — 'worst headache of my life'\n• Patient C: IV pump alarming — antibiotic infusion complete\n• Patient D: Family member demanding to speak to the doctor about care plan\n\nIn which ORDER should the nurse respond?",
    options: [
      "Patient B → Patient A → Patient C → Patient D",
      "Patient A → Patient B → Patient C → Patient D",
      "Patient C → Patient B → Patient A → Patient D",
      "Patient D → Patient A → Patient B → Patient C",
    ],
    correct: 0,
    explanation: "Patient B FIRST — 'Worst headache of my life' with sudden onset at 10/10 is the CLASSIC presentation of subarachnoid haemorrhage — a life-threatening neurological emergency requiring immediate assessment and stroke team activation. Patient A SECOND — BP 88/52, HR 118, RR 24, Temp 38.9°C = classic signs of SEPTIC SHOCK — life-threatening but Patient B's presentation requires slightly faster response as subarachnoid haemorrhage can cause rapid herniation. Patient C THIRD — completed IV antibiotic needs replacing but is not immediately life-threatening. Patient D LAST — family communication is important but no patient is in immediate danger from this — ask the charge nurse to assist.",
    wrongExplanations: [
      "",
      "WRONG: While Patient A's vitals show septic shock, Patient B's 'worst headache of my life' = subarachnoid haemorrhage — this must be ruled out FIRST as it can cause rapid brain herniation and death.",
      "WRONG: Replacing an IV bag is NOT a priority when two patients may be in life-threatening situations.",
      "WRONG: Family communication NEVER takes priority over clinically unstable patients.",
    ],
  },
  {
    level: "Advanced",
    question: "A postpartum nurse is caring for a patient 6 hours after vaginal delivery. Blood pressure has risen from 118/74 at admission to 158/102. The patient reports a headache and visual disturbances. The nurse calls the obstetrician who says 'She's probably just tired — monitor her and call me if it gets worse.' What should the nurse do NEXT?",
    options: [
      "Follow the physician's orders and continue monitoring every 4 hours as routine",
      "Administer PRN pain medication for the headache and document findings in the chart",
      "Escalate to the charge nurse, increase monitoring frequency and document the physician's response",
      "Call the patient's family to inform them of the change in condition",
    ],
    correct: 2,
    explanation: "This patient shows CLASSIC signs of POSTPARTUM PREECLAMPSIA — rising BP (158/102), severe headache and visual disturbances (scotoma) are an obstetric emergency that can rapidly progress to ECLAMPSIA (seizures), stroke and death. The physician's dismissive response is clinically inadequate. The nurse MUST use the CHAIN OF COMMAND — escalate to charge nurse/nursing supervisor, continue close monitoring (every 15-30 minutes), ensure magnesium sulfate and antihypertensives are available, and document everything including the physician's exact response. The nurse has a professional and ethical duty to advocate for this patient.",
    wrongExplanations: [
      "WRONG: Monitoring every 4 hours is DANGEROUS — this patient needs urgent intervention, not routine monitoring. BP 158/102 + headache + visual changes = imminent eclampsia risk.",
      "WRONG: PRN pain medication does NOT address the underlying hypertensive emergency. Treating the symptom without the cause is unsafe.",
      "",
      "WRONG: Calling family is not the priority — patient safety comes first. Escalating through the chain of command is the correct action.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse manager reviews incident reports and notices three patients fell in the past two weeks. All falls occurred between 0200-0400, all involved elderly male patients, and all had received PRN sleeping medication within 2 hours of the fall. Which action should the nurse manager take FIRST?",
    options: [
      "Counsel each nurse involved in the falls individually about fall prevention",
      "Remove all PRN sleeping medications from the unit formulary immediately",
      "Conduct a root cause analysis to identify all contributing system factors",
      "Install additional bed alarms for all elderly male patients on the unit",
    ],
    correct: 2,
    explanation: "Three falls with a PATTERN (same time, same population, same preceding medication) require systematic investigation through ROOT CAUSE ANALYSIS before any intervention is implemented. Root cause analysis examines WHY falls occurred — looking at systems, processes, staffing, environment, medication protocols and human factors — not to assign blame but to prevent recurrence. Counselling individual nurses (Option A) assumes human error without evidence. Removing medications (Option B) is a major formulary decision requiring pharmacy, medical staff and administration input — not a unilateral nursing decision. Installing bed alarms (Option D) addresses one symptom without understanding the full picture — and may create a false sense of security.",
    wrongExplanations: [
      "WRONG: Counselling individual nurses assumes individual error. The pattern suggests a SYSTEM problem — not individual failure.",
      "WRONG: Removing medications is a drastic formulary change requiring multidisciplinary input. This cannot be done unilaterally by a nurse manager.",
      "",
      "WRONG: Bed alarms alone don't address the root cause. Why are patients falling at that time? Is it the medication? Staffing ratios? Lighting? All must be investigated first.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is preparing to discharge a 72-year-old patient with newly diagnosed heart failure who lives alone, has limited English proficiency and tells the nurse through an interpreter that she 'does not believe in taking too many tablets.' The nurse has 20 minutes before transport arrives. Which action should the nurse PRIORITISE?",
    options: [
      "Provide comprehensive written discharge instructions in English for the medical record",
      "Call the physician to request the patient's discharge be delayed for more thorough teaching",
      "Use a professional interpreter to explain the most critical medications, warning signs and when to call emergency services",
      "Ask the patient's daughter who is present to translate the discharge instructions",
    ],
    correct: 2,
    explanation: "With 20 minutes, a language barrier and medication reluctance — the nurse must PRIORITISE the most life-saving information: critical medications (diuretics, ACE inhibitors), warning signs of heart failure exacerbation (sudden weight gain >1kg/day, worsening dyspnoea, ankle swelling) and when to call emergency services. A PROFESSIONAL interpreter is REQUIRED — using family members (Option D) violates confidentiality standards and professional guidelines as family members may filter, omit or change information. English-only written materials (Option A) do not address the language barrier. While delaying discharge (Option B) may ultimately be the right outcome — the nurse should first do what IS achievable in the time available and document the teaching limitations.",
    wrongExplanations: [
      "WRONG: English-only materials are useless for a patient with limited English proficiency. This does NOT constitute appropriate discharge teaching.",
      "WRONG: Delaying discharge requires a physician order and may not be granted. The nurse should maximise the available time first.",
      "",
      "WRONG: Using family as interpreters is a professional standards violation. Family members may filter, change or omit critical medical information — use a professional interpreter always.",
    ],
  },
  {
    level: "Advanced",
    question: "A new graduate nurse is orienting on a medical-surgical ward. The preceptor asks the new nurse to independently assess and develop a care plan for a newly admitted post-operative patient while the preceptor attends a 30-minute mandatory meeting. The new nurse feels uncomfortable performing this independently. Which response is MOST appropriate?",
    options: [
      "Perform the assessment independently — this is an important learning opportunity",
      "Ask a CNA to collect the patient's vital signs and history while waiting for the preceptor to return",
      "Clearly communicate discomfort to the preceptor and request supervision or alternative support",
      "Call the charge nurse to take over the new admission until orientation is complete",
    ],
    correct: 2,
    explanation: "A new graduate nurse in orientation is NOT yet independently validated — the preceptor is responsible for supervising ALL actions. The new nurse has a PROFESSIONAL and ETHICAL responsibility to communicate honestly about current limitations rather than proceeding independently with unvalidated skills. This protects patient safety. Proceeding independently (Option A) is unsafe — the nurse has not yet demonstrated competency. Asking the CNA to collect history (Option B) is inappropriate — CNAs cannot perform assessments or collect nursing histories. Calling the charge nurse (Option D) is premature — the preceptor should be informed first. This scenario tests professional integrity: speaking up when you are not yet competent is not weakness — it is the ethical standard.",
    wrongExplanations: [
      "WRONG: Learning opportunities do NOT justify proceeding independently when competency has not been validated. Patient safety first.",
      "WRONG: CNAs cannot perform nursing assessments or collect patient histories. This exceeds their scope of practice.",
      "",
      "WRONG: Going directly to the charge nurse bypasses the preceptor. The preceptor should be the first point of contact.",
    ],
  },
];

const clinicalPearls = [
  "When in doubt — do NOT delegate. If uncertain whether something is safe to delegate, keep it yourself.",
  "Delegate the TASK, not the patient. You are assigning a specific task — you still own the patient's overall care.",
  "Check back ALWAYS after delegating. Did the CNA complete it? What was the result? Did anything change?",
  "Speak up about unsafe staffing at the START of shift — not after something has gone wrong.",
  "Document every escalation — who you spoke to, exactly what you said, what time, and what their response was.",
  "Involve families in discharge planning from day ONE — they are often the primary caregivers at home.",
  "The RN is the communication HUB — physician, allied health, patient and family all coordinate through you.",
];

export default function ManagementOfCarePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"notes" | "mnemonics" | "alerts" | "quiz" | "pearls">("notes");
  const [expandedNote, setExpandedNote] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [filter, setFilter] = useState<"All" | "Knowledge" | "Application" | "Advanced">("All");

  const filteredQuestions = filter === "All" ? quizQuestions : quizQuestions.filter(q => q.level === filter);

  function handleAnswer(index: number) {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === filteredQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  }

  function nextQuestion() {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizComplete(true);
    }
  }

  function resetQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizComplete(false);
  }

  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    red: "bg-red-50 border-red-200",
    purple: "bg-purple-50 border-purple-200",
    orange: "bg-orange-50 border-orange-200",
  };

  const iconBgMap: Record<string, string> = {
    blue: "bg-blue-100",
    green: "bg-green-100",
    red: "bg-red-100",
    purple: "bg-purple-100",
    orange: "bg-orange-100",
  };

  const levelColors: Record<string, string> = {
    Knowledge: "bg-green-100 text-green-700 border-green-200",
    Application: "bg-blue-100 text-blue-700 border-blue-200",
    Advanced: "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors font-bold"
          >
            ←
          </button>
          <div className="flex-1">
            <h1 className="font-black text-base text-gray-900">📋 Management of Care</h1>
            <p className="text-xs text-gray-500">Safe & Effective Care • High Yield ⭐⭐⭐</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl px-3 py-1">
            <span className="text-red-600 text-xs font-black">HIGH YIELD</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-3xl mx-auto px-4 pb-3">
          <div className="flex gap-1 overflow-x-auto">
            {[
              { id: "notes", label: "📝 Notes", },
              { id: "mnemonics", label: "🧠 Mnemonics" },
              { id: "alerts", label: "⚠️ Alerts" },
              { id: "quiz", label: "❓ Quiz" },
              { id: "pearls", label: "🌟 Pearls" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as typeof activeTab)}
                className={`px-3 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-all ${activeTab === t.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">

        {/* NOTES TAB */}
        {activeTab === "notes" && (
          <div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
              <p className="text-blue-700 text-sm leading-relaxed font-medium">
                🎯 Management of Care is the SINGLE HIGHEST YIELD topic on NCLEX. Expect 10-15% of your total exam to involve delegation, prioritisation and coordination of care. Master this section first!
              </p>
            </div>
            <div className="space-y-3">
              {notes.map((note, i) => (
                <div key={i} className={`border rounded-2xl overflow-hidden shadow-sm ${colorMap[note.color]}`}>
                  <div
                    className="flex items-center gap-3 p-4 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => setExpandedNote(expandedNote === i ? null : i)}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${iconBgMap[note.color]}`}>
                      {note.icon}
                    </div>
                    <p className="font-black text-gray-900 flex-1 text-sm">{note.title}</p>
                    <span className="text-gray-400 font-bold">{expandedNote === i ? "↑" : "↓"}</span>
                  </div>
                  {expandedNote === i && (
                    <div className="px-4 pb-4 border-t border-gray-200">
                      <div className="space-y-2 mt-3">
                        {note.content.map((point, j) => (
                          <div key={j} className="flex gap-2 items-start">
                            <span className="text-blue-500 flex-shrink-0 mt-1 font-bold">•</span>
                            <span className="text-sm text-gray-800 leading-relaxed">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={() => setActiveTab("quiz")}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-base transition-colors"
            >
              Ready to Test Yourself? → Start Quiz
            </button>
          </div>
        )}

        {/* MNEMONICS TAB */}
        {activeTab === "mnemonics" && (
          <div className="space-y-4">
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-2">
              <p className="text-purple-700 text-sm font-medium">🧠 These mnemonics appear repeatedly on NCLEX — memorise them until they are automatic!</p>
            </div>
            {mnemonics.map((m, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <p className="font-black text-gray-900 text-base mb-3">{m.title}</p>
                <div className="flex gap-2 mb-4">
                  {m.acronym.split("").map((letter, j) => (
                    <div key={j} className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg">
                        {letter}
                      </div>
                      <p className="text-xs text-gray-500 mt-1 text-center max-w-12 leading-tight">{m.breakdown[j]}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                  <p className="text-yellow-700 text-sm font-semibold">💡 {m.memory}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ALERTS TAB */}
        {activeTab === "alerts" && (
          <div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6">
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most common NCLEX traps and mistakes students make on Management of Care questions. Study these carefully!</p>
            </div>
            <div className="space-y-3">
              {alerts.map((alert, i) => (
                <div key={i} className={`rounded-2xl p-4 flex gap-3 border ${alert.severity === "high" ? "bg-red-50 border-red-200" : alert.severity === "medium" ? "bg-amber-50 border-amber-200" : "bg-blue-50 border-blue-200"}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-black text-xs mt-0.5 ${alert.severity === "high" ? "bg-red-500 text-white" : alert.severity === "medium" ? "bg-amber-500 text-white" : "bg-blue-500 text-white"}`}>
                    {alert.severity === "high" ? "!" : alert.severity === "medium" ? "!" : "i"}
                  </div>
                  <p className={`text-sm leading-relaxed font-medium ${alert.severity === "high" ? "text-red-700" : alert.severity === "medium" ? "text-amber-700" : "text-blue-700"}`}>
                    {alert.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* QUIZ TAB */}
        {activeTab === "quiz" && (
          <div>
            {/* Filter */}
            {!quizComplete && currentQuestion === 0 && selectedAnswer === null && (
              <div className="mb-6">
                <p className="font-bold text-gray-700 mb-3">Filter by difficulty:</p>
                <div className="flex gap-2 flex-wrap">
                  {(["All", "Knowledge", "Application", "Advanced"] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => { setFilter(f); resetQuiz(); }}
                      className={`px-4 py-2 rounded-xl font-bold text-sm border transition-all ${filter === f ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-200 hover:border-blue-400"}`}
                    >
                      {f} {f !== "All" && `(${quizQuestions.filter(q => q.level === f).length})`}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizComplete ? (
              <div className="text-center py-8">
                <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-6 shadow-sm">
                  <span className="text-6xl block mb-4">
                    {score / filteredQuestions.length >= 0.8 ? "🎉" : score / filteredQuestions.length >= 0.6 ? "👍" : "📚"}
                  </span>
                  <h3 className="text-4xl font-black mb-1">{score}<span className="text-2xl text-gray-400">/{filteredQuestions.length}</span></h3>
                  <p className="text-2xl font-bold text-gray-600 mb-2">{Math.round((score / filteredQuestions.length) * 100)}%</p>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden mb-4">
                    <div
                      className={`h-full rounded-full transition-all ${score / filteredQuestions.length >= 0.8 ? "bg-green-500" : score / filteredQuestions.length >= 0.6 ? "bg-blue-500" : "bg-orange-500"}`}
                      style={{ width: `${(score / filteredQuestions.length) * 100}%` }}
                    />
                  </div>
                  <p className="text-gray-600 text-sm">
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Management of Care!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review the notes on areas you missed." :
                        "Keep studying! Focus on the delegation rules and chain of command."}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button onClick={resetQuiz} className="flex-1 bg-blue-600 text-white py-3 rounded-2xl font-bold hover:bg-blue-700 transition-colors">
                    Try Again 🔄
                  </button>
                  <button onClick={() => setActiveTab("notes")} className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-2xl font-bold hover:bg-gray-200 transition-colors">
                    Review Notes 📝
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Progress */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {filteredQuestions.length}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full border font-bold ${levelColors[filteredQuestions[currentQuestion].level]}`}>
                      {filteredQuestions[currentQuestion].level}
                    </span>
                    <span className="text-sm font-bold text-blue-600">Score: {score}</span>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-5">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all"
                    style={{ width: `${(currentQuestion / filteredQuestions.length) * 100}%` }}
                  />
                </div>

                {/* Question */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-4 shadow-sm">
                  <p className="font-semibold text-gray-800 leading-relaxed whitespace-pre-line">
                    {filteredQuestions[currentQuestion].question}
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-4">
                  {filteredQuestions[currentQuestion].options.map((option, i) => (
                    <div
                      key={i}
                      onClick={() => handleAnswer(i)}
                      className={`p-4 rounded-2xl border-2 transition-all font-medium cursor-pointer ${selectedAnswer === null
                        ? "bg-white border-gray-200 hover:border-blue-400 hover:bg-blue-50 active:scale-[0.99]"
                        : i === filteredQuestions[currentQuestion].correct
                          ? "bg-green-50 border-green-400 text-green-800"
                          : selectedAnswer === i
                            ? "bg-red-50 border-red-400 text-red-800"
                            : "bg-gray-50 border-gray-200 text-gray-400 opacity-60"
                        }`}
                    >
                      <div className="flex gap-3 items-start">
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-sm flex-shrink-0 ${selectedAnswer === null ? "bg-gray-100 text-gray-600" : i === filteredQuestions[currentQuestion].correct ? "bg-green-500 text-white" : selectedAnswer === i ? "bg-red-500 text-white" : "bg-gray-200 text-gray-400"}`}>
                          {["A", "B", "C", "D"][i]}
                        </span>
                        <span className="text-sm leading-relaxed">{option}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Explanation — only shown after answer selected */}
                {selectedAnswer !== null && (
                  <div className={`rounded-2xl p-5 mb-4 border ${selectedAnswer === filteredQuestions[currentQuestion].correct ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                    <p className={`font-black mb-3 text-base ${selectedAnswer === filteredQuestions[currentQuestion].correct ? "text-green-700" : "text-red-700"}`}>
                      {selectedAnswer === filteredQuestions[currentQuestion].correct ? "✅ Correct!" : "❌ Incorrect"}
                    </p>
                    <p className="text-gray-800 text-sm leading-relaxed mb-3">
                      {filteredQuestions[currentQuestion].explanation}
                    </p>
                    {filteredQuestions[currentQuestion].wrongExplanations[selectedAnswer] && selectedAnswer !== filteredQuestions[currentQuestion].correct && (
                      <div className="bg-white rounded-xl p-3 border border-red-200">
                        <p className="text-red-600 text-xs font-semibold">Why your answer was wrong:</p>
                        <p className="text-red-700 text-sm mt-1">{filteredQuestions[currentQuestion].wrongExplanations[selectedAnswer]}</p>
                      </div>
                    )}
                  </div>
                )}

                {selectedAnswer !== null && (
                  <button
                    onClick={nextQuestion}
                    className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-base hover:bg-blue-700 transition-colors"
                  >
                    {currentQuestion < filteredQuestions.length - 1 ? "Next Question →" : "See My Results 🎉"}
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* CLINICAL PEARLS TAB */}
        {activeTab === "pearls" && (
          <div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6">
              <p className="text-yellow-700 text-sm font-medium">🌟 Clinical Pearls are insights experienced nurses know from practice — things textbooks rarely say clearly but NCLEX tests heavily!</p>
            </div>
            <div className="space-y-3">
              {clinicalPearls.map((pearl, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex gap-4 items-start">
                  <div className="w-8 h-8 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-yellow-600 text-sm">
                    {i + 1}
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed">{pearl}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setActiveTab("quiz")}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-base transition-colors"
            >
              Test Your Knowledge → Start Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}