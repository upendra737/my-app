"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Error Prevention in Nursing",
    icon: "🛡️",
    color: "blue",
    content: [
      "Patient safety and error prevention is a core nursing responsibility — preventable errors cause significant patient harm worldwide",
      "The Institute of Medicine (IOM) report 'To Err is Human' estimated up to 98,000 Americans die annually from preventable medical errors",
      "Errors are rarely caused by a single individual — most result from SYSTEM FAILURES, inadequate processes and poor communication",
      "Just culture: Focus on FIXING SYSTEMS rather than blaming individuals — punishment-based approaches actually INCREASE errors by discouraging reporting",
      "Near misses are as important to report as actual errors — they reveal system vulnerabilities before harm occurs",
      "NCLEX heavily tests medication errors, falls prevention, restraint use, safe patient identification and incident reporting",
      "The nurse's role: Prevent errors through vigilance, report errors honestly and advocate for system improvements",
    ],
  },
  {
    title: "Medication Error Prevention — The Rights of Medication Administration",
    icon: "💊",
    color: "red",
    content: [
      "The TRADITIONAL 5 Rights: Right PATIENT, Right DRUG, Right DOSE, Right ROUTE, Right TIME",
      "The EXPANDED 10 Rights (modern standard): + Right Documentation, Right Reason, Right Response, Right to Refuse, Right Education",
      "RIGHT PATIENT: Use TWO patient identifiers — name AND date of birth (or MRN). Never use room number alone",
      "RIGHT DRUG: Read the medication label THREE times — when taking from storage, when preparing, when administering",
      "RIGHT DOSE: Calculate independently, double-check high-alert medications with another nurse",
      "RIGHT ROUTE: IV medications given IM or oral medications given IV can be fatal — verify the route",
      "RIGHT TIME: Some medications are time-critical (insulin, antibiotics for sepsis, thrombolytics) — late administration can cause serious harm",
      "RIGHT DOCUMENTATION: Document IMMEDIATELY after administration — never in advance or long after",
      "RIGHT REASON: Understand WHY the patient is receiving the medication — hold if the indication has changed",
      "RIGHT TO REFUSE: The patient has the right to refuse any medication — document the refusal and notify the physician",
    ],
  },
  {
    title: "High-Alert Medications — Greatest Risk of Harm",
    icon: "⚠️",
    color: "red",
    content: [
      "High-alert medications require DOUBLE-CHECK by two independent nurses before administration",
      "INSULIN: Most common cause of medication errors in hospitals. Always verify type, dose and timing. Never abbreviate 'units' as 'U' — can be misread as '0'",
      "HEPARIN: Weight-based dosing, requires frequent monitoring. Antidote: PROTAMINE SULFATE",
      "WARFARIN: Many drug and food interactions. Monitor INR. Antidote: VITAMIN K (phytonadione)",
      "OPIOIDS: Risk of respiratory depression. Monitor RR, sedation level, SpO2. Antidote: NALOXONE (Narcan)",
      "CONCENTRATED ELECTROLYTES: Potassium chloride concentrate MUST NOT be available on general wards — causes fatal arrhythmias if given IV push",
      "CHEMOTHERAPY: Cytotoxic drugs — special handling, PPE required, double-check dosing",
      "ANTICOAGULANTS: All types (heparin, warfarin, DOACs) — risk of life-threatening bleeding",
      "NEUROMUSCULAR BLOCKING AGENTS: Must be stored separately — cause respiratory arrest if given inadvertently",
      "HYPERTONIC SALINE (>0.9%): Requires ICU-level monitoring — can cause central pontine myelinolysis if given too rapidly",
    ],
  },
  {
    title: "Medication Error Types and Causes",
    icon: "📊",
    color: "purple",
    content: [
      "PRESCRIBING ERRORS: Wrong drug, wrong dose, wrong route ordered — unclear abbreviations, decimal point errors",
      "TRANSCRIPTION ERRORS: Errors made when copying or entering orders — illegible handwriting, misread orders",
      "DISPENSING ERRORS: Pharmacy dispenses wrong drug or dose — look-alike/sound-alike drug confusion",
      "ADMINISTRATION ERRORS: Nurse gives wrong drug, dose, route or time — most preventable category",
      "MONITORING ERRORS: Failure to monitor for adverse effects after administration",
      "LOOK-ALIKE/SOUND-ALIKE (LASA) drugs: Examples — hydroxyzine/hydralazine, metformin/metronidazole, Celebrex/Celexa. Store separately, use TALL MAN lettering",
      "Factors contributing to errors: Fatigue, interruptions during medication preparation, poor lighting, illegible handwriting, verbal orders, distractions",
      "Never prepare medications for multiple patients at once — prepare one patient at a time",
      "NEVER leave prepared medications unattended — could be taken by another patient or contaminated",
    ],
  },
  {
    title: "Falls Prevention — Assessment and Interventions",
    icon: "🚶",
    color: "orange",
    content: [
      "Falls are the MOST COMMON adverse event in hospitalised patients — they are largely preventable",
      "MORSE FALL SCALE: Assesses fall risk — history of falls, secondary diagnosis, ambulatory aid, IV/heparin lock, gait, mental status",
      "HIGH RISK patients: Elderly (65+), post-operative, confused, on sedatives/opioids/antihypertensives/diuretics, history of falls, impaired mobility",
      "Universal fall precautions for ALL patients: Call bell within reach, bed in lowest position, bed brakes locked, non-slip footwear, adequate lighting",
      "HIGH RISK additional interventions: Yellow armband/signage, bed alarm activated, hourly rounding, bedside commode, non-slip socks, medication review",
      "NEVER leave a high-fall-risk patient alone in the bathroom — keep the door unlocked, stay nearby",
      "After a FALL: Stay with patient, call for help, assess for injury (head, spine, hip), vital signs, neurological assessment, notify physician, complete incident report, notify family",
      "Post-fall reassessment: The patient's fall risk increases AFTER a fall — reassess and intensify precautions",
      "Environmental factors: Wet floors, poor lighting, cluttered hallways, inadequate bed height — these are modifiable risk factors",
    ],
  },
  {
    title: "Restraint Use — Guidelines and Nursing Responsibilities",
    icon: "🔒",
    color: "purple",
    content: [
      "Restraints should be used as a LAST RESORT only — after all alternatives have been tried and failed",
      "Types of restraints: PHYSICAL (wrist, vest, mitten, full leather), CHEMICAL (sedating medications used to control behaviour)",
      "Legal requirements: Requires a PHYSICIAN ORDER — restraints cannot be applied based on nursing decision alone in most settings",
      "Time-limited orders: Restraint orders must be renewed regularly (every 24 hours in most facilities)",
      "ALTERNATIVES to try FIRST: Therapeutic communication, family presence, redirection, distraction, music, repositioning, meeting comfort needs (pain, toileting, hunger)",
      "Assessment during restraint use: Check every 30 minutes minimum — circulation, skin integrity, ROM, hydration, elimination needs",
      "NEVER restrain to: Punish a patient, make nursing care easier, substitute for adequate staffing",
      "Restraint complications: Aspiration, pressure injuries, circulatory compromise, muscle weakness, psychological distress, increased agitation — increased mortality",
      "PSYCHIATRIC restraints: Additional legal requirements — time limits, continuous monitoring, documentation of de-escalation attempts",
      "Document: Reason for restraint, alternatives tried, type used, patient response, assessment findings, physician notification",
    ],
  },
  {
    title: "Patient Identification — Preventing Wrong-Patient Errors",
    icon: "🪪",
    color: "green",
    content: [
      "Wrong-patient errors are sentinel events — they can be fatal and are 100% preventable",
      "Use TWO patient identifiers EVERY TIME before: Medications, procedures, blood products, specimen collection, treatments",
      "Acceptable identifiers: Full name AND date of birth, OR full name AND medical record number",
      "NEVER acceptable as sole identifier: Room number, bed number, verbal confirmation alone",
      "Check the patient's WRISTBAND — do not rely on asking the patient their name (confused patients may agree to any name)",
      "Barcode medication administration (BCMA): Scan the patient's wristband AND the medication — significantly reduces wrong-patient and wrong-drug errors",
      "Identical names: If two patients have similar names — use additional identifiers, add alerts to both charts, separate room assignments if possible",
      "Specimen labelling: Label specimens at the BEDSIDE before leaving the room — never label in the corridor or at the nurses station",
      "Blood products: Require bedside verification by TWO nurses — name, DOB, blood type, unit number, expiry date",
    ],
  },
  {
    title: "Suicide Risk Assessment and Precautions",
    icon: "💙",
    color: "blue",
    content: [
      "Suicide risk assessment is required for all patients presenting with mental health concerns, self-harm history or expressed ideation",
      "SAD PERSONS scale: Sex (male), Age (elderly or adolescent), Depression, Previous attempt, Ethanol/substance use, Rational thinking loss, Social support lacking, Organised plan, No spouse/partner, Sickness (chronic illness)",
      "Ask DIRECTLY about suicidal thoughts — asking does NOT increase the risk and is the only reliable way to assess",
      "Levels of suicidal ideation: Passive (wish to be dead), Active without plan, Active with plan, Active with intent and means",
      "HIGH RISK indicators: Specific plan, access to means, previous attempt (strongest predictor), final acts (giving away possessions, saying goodbye)",
      "Environmental safety: Remove or secure all sharps, medications, ligature points, electrical cords, belts, glasses — conduct room search",
      "1:1 observation: High-risk patients require continuous one-to-one observation — line-of-sight at all times, including bathroom",
      "Therapeutic approach: Calm, non-judgmental, genuine interest — do NOT promise confidentiality regarding safety concerns",
      "Safety plan: Develop collaboratively — warning signs, coping strategies, support contacts, emergency numbers",
      "Never leave a patient alone after expressing suicidal ideation — safety first, therapeutic relationship second",
    ],
  },
  {
    title: "Incident Reporting — Purpose and Process",
    icon: "📋",
    color: "orange",
    content: [
      "Incident reports (also called occurrence reports or variance reports) document any unexpected event that could or did affect patient safety",
      "PURPOSE: Quality improvement, identifying patterns, preventing recurrence — NOT to assign blame or punish",
      "What to report: Falls, medication errors, near misses, equipment failures, wrong-site procedures, patient complaints, visitor injuries, anything unexpected",
      "CRITICAL RULE: Never document 'incident report filed' in the patient's chart — this creates legal risk by linking the two documents",
      "Document in patient chart: Clinical facts — what happened, patient's condition, nursing assessment, physician notification, interventions taken",
      "Document in incident report: Complete objective description of the event, circumstances, witnesses, immediate actions",
      "Timeline: Complete incident report as soon as possible after the event — while details are fresh",
      "Near miss reporting: Equally important as actual error reporting — near misses reveal system vulnerabilities",
      "Peer protection: Incident reports are generally protected from legal discovery in many jurisdictions — they exist to improve quality",
      "Failure to report: A nurse who fails to report a known error may face greater disciplinary action than the nurse who made the error",
    ],
  },
  {
    title: "Safe Environment — Additional Safety Measures",
    icon: "🏥",
    color: "green",
    content: [
      "FIRE SAFETY — RACE: Rescue patients in immediate danger, Alarm (activate), Contain the fire (close doors), Extinguish/Evacuate",
      "FIRE EXTINGUISHER — PASS: Pull the pin, Aim at base of fire, Squeeze the handle, Sweep side to side",
      "OXYGEN safety: No smoking within 3 metres of oxygen, no petroleum-based products near oxygen delivery, secure cylinders",
      "LATEX ALLERGY: Assess all patients — high risk: healthcare workers, patients with spina bifida, patients with multiple surgeries, those with banana/avocado/kiwi allergy (cross-reactive)",
      "ELECTRICAL safety: Check equipment before use, never use damaged cords, do not overload power boards, ground all equipment",
      "RADIATION safety: Distance, shielding, time — minimize exposure. Pregnant nurses should not care for patients with unsealed radioactive implants",
      "ELOPEMENT prevention: Wander-guard systems for cognitively impaired patients, secure exits, frequent checks",
      "SHARPS safety: Never recap two-handed, use safety-engineered devices, dispose immediately in sharps container, never overfill containers",
      "HAZARDOUS materials: Know your facility's SDS (Safety Data Sheets), appropriate PPE, spill procedures",
    ],
  },
];

const mnemonics = [
  {
    title: "10 Rights of Medication Administration",
    acronym: "PDDRTTEDRE",
    breakdown: ["Patient", "Drug", "Dose", "Route", "Time", "Documentation", "Education", "Reason", "Response", "Refuse"],
    memory: "Please Don't Delay — Remember To Document Every Right Response — know all 10 rights for NCLEX!",
    color: "red",
  },
  {
    title: "Falls Post-Event Response",
    acronym: "CAINS",
    breakdown: ["Call for help", "Assess for injury", "Inform physician", "Notify family", "complete incident report & Stay"],
    memory: "CAINS — after a fall, always follow this sequence without skipping steps!",
    color: "orange",
  },
  {
    title: "Fire Safety — RACE",
    acronym: "RACE",
    breakdown: ["Rescue", "Alarm", "Contain", "Extinguish/Evacuate"],
    memory: "Run A Careful Evacuation — Rescue people first, Alarm second, Contain third, Extinguish/Evacuate last!",
    color: "red",
  },
  {
    title: "Fire Extinguisher — PASS",
    acronym: "PASS",
    breakdown: ["Pull pin", "Aim at base", "Squeeze handle", "Sweep side to side"],
    memory: "People Always Squeeze Sideways — Pull, Aim at BASE not flames, Squeeze, Sweep!",
    color: "orange",
  },
];

const alerts = [
  { text: "NEVER document 'incident report filed' in the patient's chart — this links the two documents and creates serious legal risk!", severity: "high" },
  { text: "High-alert medications (insulin, heparin, concentrated KCl) require INDEPENDENT DOUBLE-CHECK by two nurses before administration!", severity: "high" },
  { text: "NEVER abbreviate 'units' as 'U' when writing insulin orders — 'U' can be misread as '0' causing a 10-fold overdose!", severity: "high" },
  { text: "Concentrated potassium chloride must NEVER be stored on general wards — IV KCl given undiluted causes immediate fatal cardiac arrest!", severity: "high" },
  { text: "Use TWO patient identifiers EVERY TIME — name AND DOB or MRN. Room number alone is NEVER acceptable!", severity: "high" },
  { text: "Restraints require a PHYSICIAN ORDER — nurses cannot independently apply restraints without an order in most settings!", severity: "high" },
  { text: "After a patient fall — STAY with the patient, assess for injury BEFORE moving them — never move a patient who may have a spinal injury!", severity: "medium" },
  { text: "Near miss reporting is as important as actual error reporting — near misses reveal the same system failures!", severity: "medium" },
  { text: "Never prepare medications for multiple patients simultaneously — one patient at a time to prevent wrong-patient medication errors!", severity: "medium" },
  { text: "Suicide risk: Asking directly about suicidal ideation does NOT increase risk — it is the ONLY reliable way to assess!", severity: "medium" },
  { text: "Restraint alternatives must be tried FIRST — document all alternatives attempted before applying any restraint!", severity: "medium" },
  { text: "Label specimens at the BEDSIDE before leaving the room — never label in the corridor or nurses station!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A nurse is preparing to administer medications. According to the traditional rights of medication administration, which action should the nurse perform to verify the RIGHT PATIENT?",
    options: [
      "Ask the patient what room they are in",
      "Check the patient's name on the door",
      "Check the patient's wristband using two identifiers — name and date of birth",
      "Ask the patient to state their first name only",
    ],
    correct: 2,
    explanation: "The RIGHT PATIENT requires TWO independent patient identifiers — the patient's full name AND date of birth (or medical record number). Checking the wristband is essential — never rely solely on verbal confirmation as confused patients may respond to any name. Room number and door signage are NEVER acceptable patient identifiers as patients may be moved without records being updated. Two identifiers must be verified before every medication administration, procedure, blood product administration and specimen collection.",
    wrongExplanations: [
      "WRONG: Room number is NEVER an acceptable patient identifier — patients can be moved to different rooms without immediate record updates.",
      "WRONG: Door signage is not a reliable patient identifier — it may be outdated or refer to a previous patient.",
      "",
      "WRONG: First name only is insufficient — there may be multiple patients with the same first name. Two full identifiers are required.",
    ],
  },
  {
    level: "Knowledge",
    question: "A nurse is preparing to apply wrist restraints to an agitated post-operative patient who is at risk of pulling out their IV line. Which action should the nurse take FIRST?",
    options: [
      "Apply the restraints immediately to prevent the patient from removing the IV",
      "Obtain a physician order for restraints",
      "Try alternative interventions first — therapeutic communication, repositioning, family presence",
      "Ask the charge nurse to apply the restraints",
    ],
    correct: 2,
    explanation: "Restraints are a LAST RESORT — alternative interventions must be tried FIRST before applying any restraint. Alternatives include: therapeutic communication and redirection, meeting comfort needs (pain, positioning, toileting), family presence at bedside, distraction (music, TV), adjusting the environment, addressing the underlying cause of agitation. Even if a physician order is obtained, alternatives should be attempted first. Applying restraints before trying alternatives is not only ethically inappropriate but may increase agitation and cause complications.",
    wrongExplanations: [
      "WRONG: Applying restraints immediately without trying alternatives first violates patient rights and is ethically and legally inappropriate. Restraints are LAST resort.",
      "WRONG: While a physician order is required, it should not be the FIRST action — alternatives must be tried before seeking the order.",
      "",
      "WRONG: The charge nurse cannot apply restraints without an order either — and alternatives must be tried first regardless of who applies them.",
    ],
  },
  {
    level: "Application",
    question: "A nurse administers 500mg of metronidazole instead of the ordered 250mg. The patient does not experience any adverse effects. What should the nurse do?",
    options: [
      "Monitor the patient closely — since there were no adverse effects, reporting is not necessary",
      "Document the correct dose in the chart to avoid drawing attention to the error",
      "Report the error to the physician, document accurately in the patient chart and complete an incident report",
      "Only complete an incident report — do not document in the patient chart to protect yourself legally",
    ],
    correct: 2,
    explanation: "ALL medication errors must be reported and documented accurately regardless of whether harm occurred. The nurse must: ASSESS the patient for adverse effects, NOTIFY the physician of the error (dose given, time, patient's current status), DOCUMENT accurately in the patient chart (what was ordered, what was given, patient assessment, physician notification), and COMPLETE AN INCIDENT REPORT for quality improvement. Falsifying documentation (Option B) is fraud — a criminal offence and grounds for licence revocation. Incident reports do NOT replace chart documentation — both are required. No adverse effects now does not mean harm cannot develop later.",
    wrongExplanations: [
      "WRONG: ALL medication errors must be reported regardless of patient outcome. Absence of immediate adverse effects does not mean the error was harmless or that reporting is optional.",
      "WRONG: Documenting the wrong dose constitutes FRAUD — this is a criminal offence and grounds for immediate licence revocation. Always document accurately.",
      "",
      "WRONG: The incident report does NOT replace documentation in the patient chart — both are required. The chart documents clinical facts; the incident report documents the quality event.",
    ],
  },
  {
    level: "Application",
    question: "A nurse enters a patient's room and finds the patient on the floor. The patient states they were trying to get to the bathroom and fell. What is the nurse's PRIORITY action?",
    options: [
      "Help the patient back into bed immediately",
      "Call the patient's family to inform them of the fall",
      "Assess the patient for injuries before moving them",
      "Complete the incident report while another nurse stays with the patient",
    ],
    correct: 2,
    explanation: "After a patient fall — ASSESS FOR INJURIES BEFORE MOVING the patient. This is the priority because moving a patient with an undetected spinal injury or fracture can cause catastrophic permanent harm. Assess: level of consciousness, neurological status, head/neck/spine pain, hip/leg pain, limb deformity, vital signs. Call for help to assist. Only after assessment determines it is safe to move should the patient be assisted. Completing the incident report (Option D) is important but not the immediate priority — patient safety and assessment come first.",
    wrongExplanations: [
      "WRONG: Moving the patient before assessment could cause serious harm — a spinal injury or hip fracture must be ruled out first. Never move a fallen patient before assessing.",
      "WRONG: Notifying family is important but not the immediate priority — patient safety and injury assessment come first.",
      "",
      "WRONG: The incident report is important but it is NOT the immediate priority — completing it while another nurse stays with the patient could be appropriate later, but injury assessment comes first.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a patient who is receiving a heparin infusion. The patient asks what the medication is for. After explaining, the patient says 'I don't want that medication anymore — please stop it.' The patient is alert and oriented. What should the nurse do FIRST?",
    options: [
      "Continue the infusion — stopping heparin could be life-threatening",
      "Stop the infusion — the patient has the right to refuse treatment",
      "Explain the risks of stopping the medication and then notify the physician of the patient's decision",
      "Ask the family to convince the patient to continue the medication",
    ],
    correct: 2,
    explanation: "When a patient refuses treatment — the nurse should FIRST explain the risks and implications of refusing (education), then NOTIFY the physician and DOCUMENT the refusal. While the competent patient has the absolute right to refuse any treatment, the nurse's responsibility is to ensure the patient has complete information to make an informed decision. After thorough education, if the patient still refuses — respect the decision, stop the medication, notify the physician immediately, document everything including the education provided and the patient's stated reasons. Do not pressure the patient or involve family to override their decision.",
    wrongExplanations: [
      "WRONG: Continuing medication against a competent patient's explicit refusal constitutes BATTERY — a criminal act regardless of clinical intent.",
      "WRONG: Stopping immediately without education fails the duty to inform — the patient must understand the risks before the nurse acts on the refusal.",
      "",
      "WRONG: Involving family to override a competent patient's decision is ethically inappropriate and undermines patient autonomy.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is working a 12-hour night shift and is preparing medications for six patients at 0200. She is interrupted three times during preparation. When she attempts to administer a medication, she realises she cannot clearly recall which medications she has already prepared for which patient. What is the MOST appropriate action?",
    options: [
      "Administer the medications she is most confident about and document carefully",
      "Ask a colleague to verify which medications have been prepared for which patient",
      "Discard all prepared medications, start the preparation process again from the beginning and implement interruption prevention strategies",
      "Administer based on the medication administration record — she probably prepared them correctly",
    ],
    correct: 2,
    explanation: "When there is ANY uncertainty about medication preparation — DISCARD ALL PREPARED MEDICATIONS and start again. This is the only safe option. Medication errors are the leading cause of preventable patient harm, and uncertainty about preparation cannot be resolved by memory, colleague verification or the MAR alone. Additionally, this situation represents a SYSTEM PROBLEM — multiple interruptions during medication preparation is a known and significant error risk factor. The nurse should implement interruption prevention strategies (medication preparation zones, do-not-disturb vests, closed doors) and report the system issue through appropriate channels. Patient safety always overrides the inconvenience of restarting preparation.",
    wrongExplanations: [
      "WRONG: Administering medications when uncertain about preparation risks giving the wrong medication, wrong dose or wrong patient — potentially fatal. Confidence is not a safety measure.",
      "WRONG: A colleague cannot reliably verify what medications were prepared without being present during preparation — this creates false assurance without actual safety.",
      "",
      "WRONG: The MAR shows what should be given — it cannot confirm what was actually prepared and placed in which cup or syringe. Relying on the MAR while uncertain about preparation is unsafe.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse manager reviews the unit's fall data and discovers that 80% of falls on the unit occur between 0600-0800 (morning care time) and involve patients who have received sedating medications the previous evening. Which system-level intervention would be MOST effective in reducing falls?",
    options: [
      "Counsel the nursing staff about individual responsibility for preventing falls during morning care",
      "Implement a structured fall prevention bundle: medication review at 1600, enhanced assistance protocols during morning care, and targeted hourly rounding for high-risk patients",
      "Install additional CCTV cameras in patient rooms to monitor fall risk during morning care",
      "Require all patients to remain in bed until 0900 to avoid the high-risk period",
    ],
    correct: 1,
    explanation: "The data reveals a SYSTEM PATTERN — falls cluster at a specific time involving patients with sedating medication the previous evening. The most effective intervention addresses this pattern systemically through a BUNDLE approach: medication review at 1600 (before evening sedating medications are administered) allows pharmacist/physician review of fall risk medications; enhanced assistance protocols during morning care addresses the high-risk 0600-0800 window with increased staffing or structured assistance; targeted hourly rounding for high-risk patients during this window provides proactive fall prevention. Bundles consistently outperform single interventions. Counselling staff (Option A) blames individuals for a system problem. CCTV (Option C) monitors but does not prevent. Restricting all patients to bed (Option D) is clinically inappropriate and violates patient autonomy.",
    wrongExplanations: [
      "WRONG: Counselling individual staff treats a SYSTEM problem as an individual failure — this approach does not address the medication timing pattern or the morning care workload issue.",
      "",
      "WRONG: CCTV monitors falls AFTER they occur — it does not prevent them. Surveillance without intervention does not improve patient safety.",
      "WRONG: Restricting all patients to bed is clinically inappropriate — immobility causes deconditioning, pressure injuries and DVT, and violates patient autonomy. The intervention must target high-risk patients specifically.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse administers IV vancomycin too rapidly. Within minutes, the patient develops flushing, erythema and pruritus from the neck upward — a classic presentation of Red Man Syndrome. The patient's blood pressure is 102/68 (baseline 128/78) and heart rate is 108. What is the nurse's PRIORITY response?",
    options: [
      "Document the reaction and continue the infusion at the same rate — Red Man Syndrome is not life-threatening",
      "Stop the infusion immediately, assess the patient, notify the physician and prepare to administer diphenhydramine",
      "Slow the infusion rate and administer diphenhydramine without stopping",
      "Administer epinephrine immediately — this may be anaphylaxis",
    ],
    correct: 1,
    explanation: "Red Man Syndrome is a rate-related adverse reaction to vancomycin caused by too-rapid infusion — NOT a true allergic reaction. Management: STOP the infusion immediately, conduct full assessment (vital signs, airway, breathing), notify the physician, administer diphenhydramine (Benadryl) as ordered, and restart the infusion at a SLOWER rate (typically over 90-120 minutes minimum) after symptoms resolve. The blood pressure drop and tachycardia indicate the reaction has haemodynamic significance requiring physician assessment. While Red Man Syndrome is distinct from anaphylaxis, significant haemodynamic compromise requires urgent intervention. Epinephrine (Option D) is indicated for TRUE anaphylaxis — anaphylaxis presents with urticaria, angioedema, bronchospasm and severe hypotension, not simply flushing from vancomycin.",
    wrongExplanations: [
      "WRONG: Continuing the infusion at the same rate that caused the reaction will worsen Red Man Syndrome and can cause dangerous haemodynamic compromise. Stop immediately.",
      "",
      "WRONG: Slowing without stopping is insufficient when the patient has already developed haemodynamic changes (BP drop, tachycardia). Stop completely, assess, treat, then consider restarting at a much slower rate.",
      "WRONG: Red Man Syndrome is NOT anaphylaxis — epinephrine is not indicated. Epinephrine is for true IgE-mediated anaphylaxis with bronchospasm and severe haemodynamic collapse. Diphenhydramine is the appropriate treatment for Red Man Syndrome.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse discovers that a colleague has been consistently administering morphine to patients and signing it out in the medication record but patients are frequently reporting inadequate pain control. The nurse suspects the colleague may be diverting opioids for personal use. What is the MOST appropriate action?",
    options: [
      "Confront the colleague directly and give them an opportunity to explain before reporting",
      "Ignore the concern — the nurse cannot be certain without direct evidence",
      "Document specific objective observations and report concerns to the nurse manager and/or pharmacy immediately",
      "Ask patients directly whether they received their pain medication",
    ],
    correct: 2,
    explanation: "Suspected opioid diversion is a PATIENT SAFETY EMERGENCY and a mandatory reporting situation. The nurse must document SPECIFIC OBJECTIVE OBSERVATIONS — dates, times, which patients, their pain scores after documented morphine administration, any other observations — and report immediately to the nurse manager and pharmacy. Do NOT confront the colleague first — this may allow destruction of evidence, create danger and delay investigation. Opioid diversion means patients are receiving inadequate pain management (a patient rights violation) and a colleague is potentially impaired (patient safety risk). Pharmacy and management will conduct a formal investigation including controlled substance auditing. Ignoring the concern (Option B) makes the observing nurse potentially liable for the ongoing patient harm.",
    wrongExplanations: [
      "WRONG: Confronting the colleague before reporting may alert them to destroy evidence, could create a dangerous situation and delays the investigation. Report first through proper channels.",
      "WRONG: Ignoring suspected opioid diversion while patients receive inadequate pain management makes the observing nurse complicit in ongoing patient harm. Professional obligation requires reporting.",
      "",
      "WRONG: Asking patients directly about medication receipt is inappropriate — it puts patients in a difficult position, could alert the colleague and is not the correct investigative approach. Report to management and let them investigate.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is preparing to administer a blood transfusion to a patient. After completing the required two-nurse verification at the bedside, the nurse hangs the blood and returns 15 minutes later to find the patient has developed fever (38.8°C, up from 37.1°C), rigors and back pain. Vital signs: BP 88/56 (was 124/78), HR 118, RR 22. What is the nurse's IMMEDIATE priority action?",
    options: [
      "Slow the transfusion rate and administer an antipyretic",
      "Stop the transfusion immediately, keep the IV line open with normal saline, stay with the patient and call for immediate help",
      "Complete the transfusion quickly — the patient needs the blood urgently",
      "Administer diphenhydramine and continue the transfusion at a slower rate",
    ],
    correct: 1,
    explanation: "This patient is experiencing an ACUTE HAEMOLYTIC TRANSFUSION REACTION — the most DEADLY transfusion complication. Fever, rigors, back/flank pain and HAEMODYNAMIC COLLAPSE (BP 88/56 from 124/78) within minutes of starting blood = STOP THE TRANSFUSION IMMEDIATELY. The priority sequence: STOP transfusion, MAINTAIN IV access with new normal saline tubing (do not use the blood tubing), STAY with the patient, CALL for immediate help and notify physician, return the blood bag and tubing to the blood bank for analysis, collect blood and urine samples for haemolysis testing, DOCUMENT everything with exact times. Haemolytic reactions occur when incompatible blood is transfused — the patient's immune system destroys the donated RBCs causing haemoglobinaemia, haemoglobinuria and potentially fatal DIC and renal failure.",
    wrongExplanations: [
      "WRONG: Slowing and continuing an acute haemolytic reaction exposes the patient to more incompatible blood — every drop of incompatible blood increases the severity of the reaction. Stop IMMEDIATELY.",
      "",
      "WRONG: Continuing the transfusion during a haemolytic reaction can be FATAL. The urgency of the patient's need for blood does not override the immediate life threat of an incompatible transfusion.",
      "WRONG: Diphenhydramine treats allergic/febrile reactions — not haemolytic reactions. This patient has haemodynamic collapse indicating a haemolytic reaction. Stop the blood immediately.",
    ],
  },
];

const clinicalPearls = [
  "The most dangerous time for medication errors is during handover, at shift change and during interruptions. Protect your medication preparation time fiercely — use a 'do not disturb' system and never prepare medications while having a conversation.",
  "The patients most at risk for falls are often those who insist they do not need help — the independent, previously active patient who is now post-operative, sedated or unwell. Their perception of their own ability has not caught up with their current physical state.",
  "When you make a medication error — report it immediately. The cover-up is always worse than the error. Courts and nursing boards consistently treat honest early reporting far more leniently than discovered falsification.",
  "Concentrated potassium chloride should never be on a general ward. If you ever see it there, remove it and report immediately — this is a stored sentinel event waiting to happen.",
  "Near misses are golden opportunities. A near miss means the system almost failed — but you caught it. Reporting near misses is one of the most valuable contributions a nurse can make to patient safety culture.",
  "The sickest patients are often on the most medications with the highest potential for interactions and errors. The cognitive load of managing a complex medication regime for an unstable patient is where errors happen — slow down, double-check everything.",
  "Restraints can kill. Vest restraints have caused patient deaths by strangulation. The decision to restrain should be treated as seriously as a decision to administer a high-alert medication — document, monitor and remove as soon as possible.",
];

export default function ErrorPreventionPage() {
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
            <h1 className="font-black text-base text-gray-900">🛡️ Error Prevention</h1>
            <p className="text-xs text-gray-500">Safe & Effective Care • Important ⭐⭐</p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl px-3 py-1">
            <span className="text-orange-600 text-xs font-black">IMPORTANT</span>
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

        {activeTab === "notes" && (
          <div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
              <p className="text-red-700 text-sm leading-relaxed font-medium">
                🛡️ Error prevention is tested throughout ALL sections of NCLEX. Master medication rights, falls prevention, restraint guidelines and incident reporting — these appear in every exam!
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

        {activeTab === "alerts" && (
          <div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6">
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most common NCLEX traps on Error Prevention — students consistently lose marks on these!</p>
            </div>
            <div className="space-y-3">
              {alerts.map((alert, i) => (
                <div key={i} className={`rounded-2xl p-4 flex gap-3 border ${alert.severity === "high" ? "bg-red-50 border-red-200" : alert.severity === "medium" ? "bg-amber-50 border-amber-200" : "bg-blue-50 border-blue-200"}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-black text-xs mt-0.5 ${alert.severity === "high" ? "bg-red-500 text-white" : alert.severity === "medium" ? "bg-amber-500 text-white" : "bg-blue-500 text-white"}`}>
                    {alert.severity === "low" ? "i" : "!"}
                  </div>
                  <p className={`text-sm leading-relaxed font-medium ${alert.severity === "high" ? "text-red-700" : alert.severity === "medium" ? "text-amber-700" : "text-blue-700"}`}>
                    {alert.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Error Prevention!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review medication rights, falls and incident reporting." :
                        "Keep studying! Focus on high-alert medications, falls prevention and restraint guidelines."}
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

        {activeTab === "pearls" && (
          <div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6">
              <p className="text-yellow-700 text-sm font-medium">🌟 Clinical Pearls — insights experienced nurses know that textbooks rarely say clearly!</p>
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