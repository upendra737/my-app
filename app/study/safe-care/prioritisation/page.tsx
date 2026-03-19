"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "What is Clinical Prioritisation?",
    icon: "🎯",
    color: "blue",
    content: [
      "Prioritisation is the process of deciding which patient or which patient need requires attention FIRST based on urgency, severity and potential for harm",
      "NCLEX expects RNs to make safe, evidence-based prioritisation decisions under pressure with multiple competing demands",
      "Prioritisation is an RN-only responsibility — it cannot be delegated to LPNs or CNAs",
      "Wrong prioritisation decisions are one of the leading causes of preventable patient harm in nursing",
      "Key principle: Address the MOST life-threatening problem FIRST — always",
      "Always reassess after every intervention to determine if priorities have changed",
    ],
  },
  {
    title: "The ABC Framework — Primary Prioritisation Tool",
    icon: "🫁",
    color: "red",
    content: [
      "A — AIRWAY: Always the highest priority. No airway = no life. Examples: stridor, choking, anaphylaxis, foreign body obstruction, angioedema",
      "B — BREATHING: Second priority. Patient has airway but cannot breathe adequately. Examples: SpO2 <90%, RR >30 or <8, tension pneumothorax, severe asthma, pulmonary embolism",
      "C — CIRCULATION: Third priority. Patient breathing but has circulatory compromise. Examples: BP <90 systolic, HR >130 or <40, active haemorrhage, shock",
      "D — DISABILITY: Neurological status. GCS changes, new confusion, seizures, stroke symptoms",
      "E — EXPOSURE/EVERYTHING ELSE: All other concerns after life threats are addressed",
      "Critical rule: Move DOWN the alphabet only when the previous level is stabilised",
      "Exception: If ALL patients have airway problems — prioritise the MOST unstable airway",
    ],
  },
  {
    title: "Maslow's Hierarchy of Needs in Nursing",
    icon: "🔺",
    color: "purple",
    content: [
      "Level 1 — PHYSIOLOGICAL (highest priority): Airway, breathing, circulation, nutrition, hydration, elimination, sleep, temperature regulation",
      "Level 2 — SAFETY & SECURITY: Fall prevention, infection control, medication safety, environmental hazards, abuse protection",
      "Level 3 — LOVE & BELONGING: Social support, family visits, therapeutic relationships, community connection",
      "Level 4 — ESTEEM: Patient dignity, respect, autonomy, self-confidence, body image concerns",
      "Level 5 — SELF-ACTUALISATION (lowest priority): Personal growth, life purpose, spirituality, achieving potential",
      "NCLEX application: Always address physiological needs FIRST before psychosocial needs",
      "Exception: If a patient expresses suicidal ideation — safety (Level 2) becomes the immediate priority even over some physiological concerns",
    ],
  },
  {
    title: "Actual vs Potential Problems",
    icon: "⚖️",
    color: "blue",
    content: [
      "ACTUAL problems exist RIGHT NOW and require immediate attention",
      "POTENTIAL problems may occur in the future and require preventive intervention",
      "NCLEX rule: Always address ACTUAL problems before POTENTIAL ones",
      "Example: A patient in respiratory distress NOW (actual) takes priority over a patient at risk for pneumonia (potential)",
      "Example: Active bleeding (actual) takes priority over risk for infection (potential)",
      "However: Some potential problems are so high risk they become near-actual — e.g. a patient who stopped breathing 2 minutes ago",
      "Documentation tip: Use 'Risk for...' when documenting potential nursing diagnoses",
    ],
  },
  {
    title: "Acute vs Stable — How to Distinguish",
    icon: "📊",
    color: "red",
    content: [
      "STABLE: Vital signs within normal/expected range, condition as expected for their diagnosis, no new or worsening symptoms",
      "UNSTABLE: New symptoms, deteriorating vital signs, unexpected change from baseline, acute distress",
      "NCLEX key: ANY change from baseline = potentially unstable = requires RN assessment",
      "New onset confusion or agitation = ALWAYS unstable — this indicates neurological change",
      "Pain that is NEW, SUDDEN, SEVERE or DIFFERENT from usual = unstable until proven otherwise",
      "Post-operative patients: Any change in first 24 hours = requires immediate RN assessment",
      "Stable patients can wait — unstable patients CANNOT wait",
    ],
  },
  {
    title: "Triage Principles — Emergency & Mass Casualty",
    icon: "🏥",
    color: "orange",
    content: [
      "START Triage system (Simple Triage and Rapid Treatment) — used in mass casualty events",
      "RED (Immediate) — Life-threatening but SURVIVABLE with immediate intervention. RR >30 or <10, no radial pulse, altered mental status",
      "YELLOW (Delayed) — Serious injuries but can wait 30-60 minutes without threat to life. Stable vital signs, conscious",
      "GREEN (Minor) — Walking wounded. Minor injuries. Can wait hours. Treat last",
      "BLACK (Expectant/Deceased) — Not breathing after repositioning airway, or injuries incompatible with survival given available resources",
      "Critical NCLEX point: In mass casualty — BLACK tag means expectant — do NOT spend resources on non-survivable injuries",
      "Hospital triage: ESI (Emergency Severity Index) levels 1-5 — Level 1 immediate, Level 5 non-urgent",
    ],
  },
  {
    title: "Priority Setting with Multiple Patients",
    icon: "👥",
    color: "purple",
    content: [
      "Step 1: Identify ALL patients with life-threatening conditions first (ABC problems)",
      "Step 2: Identify unstable patients with potential for rapid deterioration",
      "Step 3: Identify patients with actual problems requiring timely intervention",
      "Step 4: Identify patients with potential problems and comfort needs",
      "Step 5: Delegate appropriate tasks to LPN and CNA for stable patients",
      "Always do a quick visual scan of ALL patients at the start of shift — look for obvious distress",
      "When two patients both have life-threatening problems — go to the MORE unstable one first and call for help simultaneously",
    ],
  },
  {
    title: "Early Warning Signs of Deterioration",
    icon: "⚠️",
    color: "red",
    content: [
      "Respiratory rate is the MOST sensitive early indicator of deterioration — check it carefully!",
      "RR >25 or <8 = significant concern requiring immediate assessment",
      "SpO2 <92% on room air = concerning, <90% = emergency",
      "Systolic BP <90 mmHg or drop >30 from baseline = hemodynamic instability",
      "HR >130 or <40 = cardiac emergency",
      "Urine output <30 mL/hour for 2+ hours = renal compromise or shock",
      "New confusion or agitation in previously alert patient = neurological change",
      "Fever >38.5°C with rigors in immunocompromised patient = sepsis until proven otherwise",
      "These signs = call Rapid Response Team (RRT) immediately",
    ],
  },
  {
    title: "Priority Frameworks for Specific Situations",
    icon: "📋",
    color: "green",
    content: [
      "POST-OPERATIVE patients: Airway, bleeding, pain, nausea, urine output — in that order",
      "CARDIAC patients: Chest pain, rhythm, BP, shortness of breath — treat as emergency until cardiac cause excluded",
      "OBSTETRIC patients: Foetal heart rate, maternal vital signs, bleeding, pain — foetal compromise = immediate priority",
      "PAEDIATRIC patients: Respiratory compromise deteriorates FASTER — act earlier and more aggressively",
      "ELDERLY patients: Baseline is often lower — use their USUAL baseline not standard norms for comparison",
      "MENTAL HEALTH patients: Safety first — suicidal ideation with plan = highest priority",
      "END OF LIFE patients: Comfort and dignity — pain and symptom management are the priority",
    ],
  },
  {
    title: "Communication During Prioritisation — SBAR",
    icon: "📢",
    color: "green",
    content: [
      "When reporting a deteriorating patient — use SBAR every time",
      "S — Situation: 'Mr Jones in Room 6 is in respiratory distress'",
      "B — Background: '67-year-old with COPD, admitted yesterday for exacerbation'",
      "A — Assessment: 'RR 32, SpO2 86% on 4L O2, accessory muscle use, very anxious'",
      "R — Recommendation: 'I need you to come and assess urgently — I think he needs BiPAP'",
      "Never say 'I think something is wrong' without specific data — give exact vital signs",
      "If physician does not respond appropriately — escalate through chain of command immediately",
      "Document exact time of call, physician response and your actions",
    ],
  },
];

const mnemonics = [
  {
    title: "Primary Survey — ABC",
    acronym: "ABCDE",
    breakdown: ["Airway", "Breathing", "Circulation", "Disability", "Exposure"],
    memory: "Always Be Careful Doing Exams — address in this order EVERY time!",
    color: "red",
  },
  {
    title: "Maslow's Hierarchy (Bottom to Top Priority)",
    acronym: "PSSEL",
    breakdown: ["Physiological", "Safety", "Social", "Esteem", "Love/Self-actualisation"],
    memory: "Please See Sally's Excellent Life — physiological ALWAYS first on NCLEX!",
    color: "purple",
  },
  {
    title: "Mass Casualty Triage Colors",
    acronym: "RYGB",
    breakdown: ["Red=Immediate", "Yellow=Delayed", "Green=Minor", "Black=Expectant"],
    memory: "Real Young Girls Bounce — Red first, Black last (or never in mass casualty)",
    color: "orange",
  },
  {
    title: "Early Warning Signs",
    acronym: "RUSTED",
    breakdown: ["Respiratory rate change", "Urine output low", "Systolic BP drop", "Tachycardia", "Mentation change", "Elevated temp with rigors"],
    memory: "A RUSTED patient needs urgent attention — these are your early warning signs!",
    color: "blue",
  },
];

const alerts = [
  { text: "Respiratory rate is the MOST sensitive early warning sign — count it for a full 60 seconds, never estimate!", severity: "high" },
  { text: "New onset confusion = ALWAYS unstable — NEVER delegate assessment of a confused patient to a CNA", severity: "high" },
  { text: "In mass casualty — BLACK tag = expectant. Do NOT spend resources on non-survivable injuries even if the patient is still alive", severity: "high" },
  { text: "Post-op patients: Any change in first 24 hours = immediate RN assessment — do NOT wait to see if it improves", severity: "high" },
  { text: "Sudden onset severe headache 10/10 = subarachnoid haemorrhage until proven otherwise — neurological emergency!", severity: "high" },
  { text: "Chest pain + diaphoresis + nausea = myocardial infarction until proven otherwise — always prioritise!", severity: "high" },
  { text: "NCLEX trap: Do NOT get distracted by the loudest patient — the quietest deteriorating patient is often most critical", severity: "medium" },
  { text: "Actual problems ALWAYS before potential problems — but high-risk potential problems require proactive assessment", severity: "medium" },
  { text: "Elderly patients often have ATYPICAL presentations — confusion may be the ONLY sign of MI, infection or hypoxia", severity: "medium" },
  { text: "Foetal heart rate decelerations in obstetric patients = immediate priority — both lives are at risk", severity: "medium" },
  { text: "Paediatric patients deteriorate FASTER than adults — act earlier, be more aggressive with interventions", severity: "medium" },
  { text: "Never leave an unstable patient to answer a call bell from a stable patient — ask someone else to check", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "According to the ABC prioritisation framework, which patient need should ALWAYS be addressed first?",
    options: [
      "Circulation — ensuring adequate blood pressure and heart rate",
      "Airway — ensuring a patent and protected airway",
      "Breathing — ensuring adequate respiratory rate and oxygen saturation",
      "Disability — ensuring normal neurological function",
    ],
    correct: 1,
    explanation: "AIRWAY is always the first priority in the ABC framework. Without a patent airway, breathing and circulation cannot occur. No matter what else is happening — if the airway is compromised, it must be addressed immediately. Even if a patient has cardiac arrest (circulation), establishing an airway is the first step of resuscitation.",
    wrongExplanations: [
      "WRONG: Circulation is the third priority — C in ABC. It is addressed after airway and breathing are secured.",
      "",
      "WRONG: Breathing is the second priority — B in ABC. While critical, it comes after ensuring a patent airway.",
      "WRONG: Disability (neurological) is D — the fourth priority. It is assessed after ABC is stabilised.",
    ],
  },
  {
    level: "Knowledge",
    question: "Using Maslow's Hierarchy of Needs, which nursing intervention should be prioritised FIRST?",
    options: [
      "Arranging a family visit for a lonely patient",
      "Encouraging a patient to discuss their feelings about their diagnosis",
      "Administering oxygen to a hypoxic patient with SpO2 of 88%",
      "Helping a patient identify personal strengths and coping resources",
    ],
    correct: 2,
    explanation: "Administering oxygen to a hypoxic patient addresses a PHYSIOLOGICAL need — the base of Maslow's hierarchy and always the highest nursing priority. SpO2 of 88% indicates dangerous hypoxia requiring immediate intervention. Family visits (belonging), discussing feelings (esteem/self-actualisation) and identifying coping resources (self-actualisation) are all higher-level needs addressed only after physiological stability.",
    wrongExplanations: [
      "WRONG: Family visits address Love & Belonging — Level 3 of Maslow's hierarchy. Physiological needs must be met first.",
      "WRONG: Discussing feelings addresses Esteem/Self-actualisation — higher levels of Maslow's. Physiological emergency takes priority.",
      "",
      "WRONG: Identifying coping resources is self-actualisation — the highest level, lowest priority when physiological needs are unmet.",
    ],
  },
  {
    level: "Application",
    question: "A nurse receives handover for four patients. Which patient should the nurse assess FIRST?",
    options: [
      "A 45-year-old with Type 2 diabetes requesting their morning insulin",
      "A 78-year-old post-hip replacement asking for pain medication rated 6/10",
      "A 62-year-old with COPD who has become acutely confused and agitated in the last hour",
      "A 55-year-old awaiting discharge who wants to discuss their home care plan",
    ],
    correct: 2,
    explanation: "New onset confusion and agitation in a COPD patient indicates a neurological change — this is ALWAYS an unstable situation requiring immediate RN assessment. In COPD patients, acute confusion often indicates worsening hypoxia, hypercapnia or the onset of respiratory failure. This is a potential life threat. The diabetic patient needs insulin but is not acutely unstable. The hip replacement patient has pain but it is rated 6/10 and expected post-operatively. The discharge patient is stable.",
    wrongExplanations: [
      "WRONG: Morning insulin is important but scheduled — the patient is stable and this can wait until the acute situation is addressed.",
      "WRONG: Post-operative pain rated 6/10 is expected and uncomfortable but not a life threat. Pain medication can wait briefly.",
      "",
      "WRONG: Discharge planning is important but the patient is stable — this is the lowest priority among these four patients.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for five patients. Which patient has an ACTUAL problem (rather than potential) that requires the most IMMEDIATE attention?",
    options: [
      "A post-operative patient at risk for deep vein thrombosis",
      "A diabetic patient with blood glucose of 2.6 mmol/L reporting shakiness and diaphoresis",
      "An immobile patient at risk for pressure injury development",
      "A patient with heart failure at risk for fluid volume excess",
    ],
    correct: 1,
    explanation: "Blood glucose of 2.6 mmol/L with symptoms (shakiness, diaphoresis) is an ACTUAL, ACTIVE hypoglycaemic emergency occurring right now — this is life-threatening if untreated. Brain cells begin dying within minutes without glucose. The other three options are all POTENTIAL problems (risk for DVT, risk for pressure injury, risk for fluid excess) — they are important to prevent but are not happening right now and do not represent immediate threats.",
    wrongExplanations: [
      "WRONG: DVT risk is a POTENTIAL problem — it may occur but is not happening now. Prophylactic measures should be taken but this is not the immediate priority.",
      "",
      "WRONG: Pressure injury risk is POTENTIAL — the patient is at risk but does not have an injury yet. Repositioning is important but not an emergency.",
      "WRONG: Risk for fluid excess is POTENTIAL — monitoring is needed but the patient does not currently have acute fluid excess.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is triaging patients in an emergency department. A mass casualty event has occurred. Which patient should receive a BLACK triage tag?",
    options: [
      "A 35-year-old with multiple rib fractures, RR of 28, conscious and alert",
      "A 50-year-old with a closed femur fracture and BP of 100/70",
      "A 25-year-old with 90% full-thickness burns over total body surface area, unresponsive",
      "A 40-year-old with a head laceration and mild confusion",
    ],
    correct: 2,
    explanation: "A 25-year-old with 90% full-thickness burns is non-survivable even with unlimited resources — this patient receives a BLACK (expectant) tag in mass casualty triage. In mass casualty, resources must be allocated to those who CAN survive with available intervention. The patient with rib fractures and RR 28 = RED (immediate). The femur fracture patient = YELLOW (delayed). The head laceration patient = YELLOW or GREEN depending on severity of confusion.",
    wrongExplanations: [
      "WRONG: Multiple rib fractures with RR 28 = RED (immediate). This patient is seriously injured but survivable with intervention.",
      "WRONG: Closed femur fracture with BP 100/70 = YELLOW (delayed). Serious but stable enough to wait.",
      "",
      "WRONG: Head laceration with mild confusion = YELLOW. Needs assessment but is ambulatory and responsive.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is working a night shift with six patients. At 0300, the following situations occur simultaneously:\n\n• Patient A: New graduate calls — Patient in Room 2 is 'not looking right'\n• Patient B: Call bell rings — Patient in Room 4 requesting pain medication for chronic back pain 5/10\n• Patient C: Monitor alarming — Patient in Room 6 showing new ST elevation on telemetry\n• Patient D: CNA reports — Patient in Room 8 has not urinated in 6 hours\n• Patient E: Family member crying at the nurses station requesting to speak with a nurse\n• Patient F: Patient in Room 10 requesting help to the bathroom\n\nIn which ORDER should the nurse respond?",
    options: [
      "C → A → D → F → B → E",
      "A → C → D → B → F → E",
      "C → A → D → B → F → E",
      "B → C → A → D → E → F",
    ],
    correct: 0,
    explanation: "C FIRST — New ST elevation = acute myocardial infarction until proven otherwise. This is an immediate life-threatening cardiac emergency. Call the physician and activate the cardiac protocol immediately. A SECOND — 'Not looking right' is a vague but concerning report. A patient who appears unwell to any observer requires immediate RN assessment — this could be a rapidly deteriorating patient. D THIRD — No urine output for 6 hours indicates possible renal compromise or urinary retention — serious but not immediately life-threatening. F FOURTH — Patient needing bathroom assistance — safety concern (fall risk) but not life-threatening. Ask CNA to assist. B FIFTH — Chronic back pain 5/10 is uncomfortable but stable — can wait briefly for PRN medication. E LAST — Family member is upset but no patient is in immediate danger from this — ask the charge nurse or social worker to assist.",
    wrongExplanations: [
      "",
      "WRONG: Responding to 'not looking right' before ST elevation is incorrect. ST elevation = confirmed cardiac emergency on monitor. Act on objective data first.",
      "WRONG: This order is close but places B (chronic pain) before F (bathroom) — a patient needing bathroom assistance has a fall safety risk that exceeds a chronic pain PRN request.",
      "WRONG: Pain medication for chronic back pain is never the first priority when cardiac and neurological emergencies are occurring simultaneously.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a 68-year-old male patient admitted with community-acquired pneumonia. During morning assessment the patient is found to be more confused than yesterday, his temperature is 39.2°C, blood pressure is 88/56 mmHg (was 128/78 yesterday), heart rate is 124 bpm and respiratory rate is 28 breaths/minute. The patient's SpO2 is 89% on 2L nasal cannula oxygen. What is the nurse's PRIORITY action?",
    options: [
      "Increase the oxygen flow rate to 4L and reassess in 30 minutes",
      "Collect blood cultures and administer the scheduled antibiotics",
      "Call a Rapid Response Team immediately and prepare for urgent transfer",
      "Notify the attending physician and document the vital sign changes",
    ],
    correct: 2,
    explanation: "This patient meets SEPTIC SHOCK criteria: known infection (pneumonia) + hypotension (88/56) + tachycardia (124) + tachypnea (28) + altered mental status + hypoxia (SpO2 89%). This is a MEDICAL EMERGENCY requiring IMMEDIATE Rapid Response Team activation. The 'Sepsis 6' must be initiated within 1 hour: high-flow O2, blood cultures, IV antibiotics, IV fluid bolus, lactate level, urine output monitoring. Increasing O2 alone (Option A) is grossly inadequate for septic shock. Collecting cultures first (Option B) wastes critical time. Notifying the physician (Option D) is appropriate but slower than calling RRT — and this patient needs immediate multi-disciplinary emergency response, not a phone call.",
    wrongExplanations: [
      "WRONG: Increasing O2 to 4L addresses hypoxia but does NOTHING for the septic shock. This patient needs immediate fluid resuscitation, cultures and antibiotics — not just more oxygen.",
      "WRONG: Blood cultures are part of the Sepsis 6 bundle — but collecting them before calling RRT wastes precious minutes. RRT activation first, then cultures as part of the bundle.",
      "",
      "WRONG: Notifying the physician is appropriate but this patient needs RRT — a full team response — not just a phone call. RRT brings critical care expertise to the bedside immediately.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is working on a medical-surgical unit. She is preparing medications for Patient A when a CNA runs in and says 'Patient B in Room 12 just had a seizure and stopped breathing.' At the same moment, the cardiac monitor alarm activates showing ventricular fibrillation for Patient C. What should the nurse do FIRST?",
    options: [
      "Finish preparing Patient A's medications to prevent a medication error",
      "Call for help immediately, go to Patient B who is not breathing, and direct another nurse to Patient C",
      "Go to Patient C who is in ventricular fibrillation as this is a more serious arrhythmia",
      "Call the physician for both patients before taking any action",
    ],
    correct: 1,
    explanation: "CALL FOR HELP FIRST — then go to Patient B who is confirmed NOT BREATHING. A non-breathing patient has an immediate airway and breathing emergency — the first two priorities of ABC. While VF (Patient C) is a cardiac arrest, Patient B's respiratory arrest will become cardiac arrest within 4 minutes without intervention. Critically — by calling for help immediately, another nurse/team can respond to Patient C's VF simultaneously. Never abandon one emergency for another without ensuring someone else responds. Finishing medications (Option A) during a life-threatening emergency is never appropriate. Going to the VF patient first (Option C) leaves an apnoeic patient unattended. Calling the physician first (Option D) wastes critical resuscitation time.",
    wrongExplanations: [
      "WRONG: NEVER continue medication preparation during a cardiac or respiratory arrest. Medications can wait — dead patients cannot.",
      "",
      "WRONG: While VF is life-threatening, the non-breathing patient (Patient B) will suffer irreversible brain damage within 4 minutes. Call for help so BOTH patients are addressed simultaneously.",
      "WRONG: Calling the physician FIRST during an active arrest wastes critical resuscitation time. Initiate CPR/BLS first — then call the physician and activate the code team.",
    ],
  },
  {
    level: "Advanced",
    question: "A charge nurse is assigning patients at the beginning of a shift. Which patient assignment is MOST appropriate for a new graduate nurse who has been working independently for 3 months?",
    options: [
      "A patient with diabetic ketoacidosis receiving an insulin infusion requiring hourly titration",
      "A patient with hypertensive crisis receiving IV labetalol with continuous blood pressure monitoring",
      "A stable patient with community-acquired pneumonia on oral antibiotics and supplemental oxygen",
      "A patient 2 hours post-cardiac catheterisation requiring neurovascular checks every 15 minutes",
    ],
    correct: 2,
    explanation: "A stable patient with community-acquired pneumonia on oral antibiotics is the MOST appropriate assignment for a new graduate nurse. This patient has predictable care needs, a stable condition and does not require complex titration, continuous haemodynamic monitoring or high-frequency assessment. DKA with insulin infusion (Option A) requires complex titration decisions and frequent reassessment — beyond new graduate independent scope. IV labetalol for hypertensive crisis (Option B) requires highly skilled haemodynamic monitoring and medication titration. Post-cardiac catheterisation (Option D) requires specialised neurovascular assessment and monitoring for serious complications (bleeding, arterial occlusion).",
    wrongExplanations: [
      "WRONG: DKA with insulin infusion requires complex hourly titration decisions — this exceeds safe independent practice for a 3-month new graduate.",
      "WRONG: IV labetalol for hypertensive crisis requires expert haemodynamic monitoring — too complex and high-risk for an independent new graduate.",
      "",
      "WRONG: Post-cardiac catheterisation requires specialised assessment skills and vigilance for serious vascular complications — not appropriate for a new graduate working independently.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is working in a community health setting. She has four home visits scheduled for today. Which patient should she visit FIRST?",
    options: [
      "An 80-year-old recently discharged after hip replacement who needs wound assessment and physiotherapy education",
      "A 45-year-old with well-controlled Type 2 diabetes for a routine HbA1c review and foot assessment",
      "A 72-year-old with heart failure whose family calls to say she has gained 3kg in 2 days and cannot lie flat",
      "A 60-year-old with hypertension for a medication compliance review and blood pressure check",
    ],
    correct: 2,
    explanation: "The 72-year-old heart failure patient with 3kg weight gain in 2 days and orthopnoea (cannot lie flat) is experiencing ACUTE DECOMPENSATED HEART FAILURE — a medical emergency. Weight gain >1kg/day indicates dangerous fluid retention. Orthopnoea (shortness of breath lying flat) indicates pulmonary oedema. This patient may need emergency hospital admission. The hip replacement patient needs wound care but is stable. The diabetic patient is well-controlled — routine visit. The hypertensive patient needs medication review — important but not acute. In community nursing — acute decompensation of a chronic condition always takes priority over routine reviews.",
    wrongExplanations: [
      "WRONG: Post-hip replacement wound assessment is important but this patient is stable — the visit can occur after the cardiac emergency is addressed.",
      "WRONG: Well-controlled diabetes with routine HbA1c review is the lowest priority — this is a scheduled chronic disease management visit with no acute concerns.",
      "",
      "WRONG: Medication compliance review for hypertension is important preventively but this patient has no acute symptoms — not the priority when another patient has acute decompensated heart failure.",
    ],
  },
];

const clinicalPearls = [
  "The QUIETEST patient on the ward is sometimes the SICKEST — the deteriorating septic patient becomes quiet and withdrawn before crashing. Do not be distracted by the loudest complaint.",
  "Respiratory rate is the most SENSITIVE early warning sign of deterioration — but it is the most commonly UNDERDOCUMENTED vital sign. Always count for a full 60 seconds.",
  "When two patients are BOTH critical — call for help FIRST, then go to the more unstable one. Never manage two emergencies alone.",
  "New confusion in an elderly patient is almost NEVER just 'sundowning' or 'their normal' — it is a medical problem until proven otherwise. Hypoxia, UTI, medication toxicity, stroke and MI can ALL present as confusion in the elderly.",
  "In NCLEX — when the question asks who to see FIRST, look for: new symptoms, acute changes, abnormal vital signs, and life-threatening conditions. Then use ABC → Maslow → Actual before Potential.",
  "Trust your gut — if something 'doesn't look right' about a patient, assess them. The nurse's clinical intuition (based on pattern recognition) is a valid and important prioritisation tool.",
  "After responding to an emergency — always go back and reassess your other patients. Emergencies can create lapses in care for other patients who may also deteriorate.",
];

export default function PrioritisationPage() {
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
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors font-bold"
          >
            ←
          </button>
          <div className="flex-1">
            <h1 className="font-black text-base text-gray-900">🎯 Prioritisation & Triage</h1>
            <p className="text-xs text-gray-500">Safe & Effective Care • High Yield ⭐⭐⭐</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl px-3 py-1">
            <span className="text-red-600 text-xs font-black">HIGH YIELD</span>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 pb-3">
          <div className="flex gap-1 overflow-x-auto">
            {[
              { id: "notes", label: "📝 Notes" },
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
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
              <p className="text-red-700 text-sm leading-relaxed font-medium">
                🎯 Prioritisation is tested in EVERY section of NCLEX. Master ABC, Maslow and Actual vs Potential — these three frameworks answer the majority of prioritisation questions!
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
                <div className="flex gap-2 mb-4 flex-wrap">
                  {m.acronym.split("").map((letter, j) => (
                    <div key={j} className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg">
                        {letter}
                      </div>
                      <p className="text-xs text-gray-500 mt-1 text-center max-w-16 leading-tight">{m.breakdown[j]}</p>
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most common NCLEX traps and clinical mistakes on Prioritisation questions. Study these carefully!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Prioritisation & Triage!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review the notes on areas you missed." :
                        "Keep studying! Focus on ABC, Maslow and Actual vs Potential frameworks."}
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

                <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-4 shadow-sm">
                  <p className="font-semibold text-gray-800 leading-relaxed whitespace-pre-line">
                    {filteredQuestions[currentQuestion].question}
                  </p>
                </div>

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