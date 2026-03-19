"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Emergency Response in Nursing",
    icon: "🚨",
    color: "blue",
    content: [
      "Emergency response is the nurse's ability to recognise, respond to and manage acute emergencies safely and effectively",
      "Nurses are often the FIRST to recognise and respond to emergencies — clinical vigilance saves lives",
      "Emergency response requires: Knowledge of emergency protocols, clear communication, calm leadership and swift decisive action",
      "Every nurse must know their facility's emergency codes, response procedures and their individual role",
      "NCLEX tests: Fire safety (RACE/PASS), code blue response, mass casualty triage, disaster management and hazardous material exposure",
      "Preparation is key — nurses who have rehearsed emergency responses perform significantly better under pressure",
      "The goal of emergency response: Preserve life, prevent further injury, restore function and ensure safety of patients, staff and visitors",
    ],
  },
  {
    title: "Fire Safety — RACE and PASS",
    icon: "🔥",
    color: "red",
    content: [
      "RACE — the correct sequence for fire response in a healthcare facility:",
      "R — RESCUE: Remove patients in IMMEDIATE danger — prioritise those closest to the fire first",
      "A — ALARM: Activate the nearest fire alarm pull station AND call the emergency number (000 in Australia, 911 in USA)",
      "C — CONTAIN: Close ALL doors and windows to prevent fire and smoke spread — do NOT prop doors open",
      "E — EXTINGUISH/EVACUATE: Attempt to extinguish only if safe to do so — if not possible, evacuate the area",
      "PASS — how to use a fire extinguisher:",
      "P — PULL the pin from the handle",
      "A — AIM the nozzle at the BASE of the fire — not the flames",
      "S — SQUEEZE the handle to discharge",
      "S — SWEEP from side to side across the base of the fire",
      "NEVER use water on electrical fires or grease fires — use CO2 or dry chemical extinguisher",
      "Horizontal evacuation first — move patients to the next fire compartment on the same floor before vertical evacuation",
    ],
  },
  {
    title: "Fire Safety — Evacuation Priorities",
    icon: "🚪",
    color: "orange",
    content: [
      "Evacuation priority order in healthcare: Ambulatory patients first (can walk), then non-ambulatory (wheelchair), then bedridden (bed/stretcher)",
      "HORIZONTAL evacuation: Move patients to the next fire-safe compartment on the same floor — always before vertical",
      "VERTICAL evacuation: Use stairs ONLY — NEVER use elevators during a fire (elevator shafts act as chimneys)",
      "Patients on life support: Requires team decision — some patients cannot safely be moved and must be defended in place",
      "Staff responsibilities: Know your unit's fire evacuation plan, fire exit locations, fire extinguisher locations, assembly points",
      "Oxygen: Turn off portable oxygen tanks in the fire area — oxygen accelerates fire spread dramatically",
      "Document: Account for ALL patients and staff at the assembly point — report any missing persons immediately",
      "Smoke inhalation: Stay LOW to the ground where air is cleaner — most fire deaths are from smoke inhalation not burns",
      "Closed doors: A closed door can withstand fire for 30+ minutes — keeping doors closed saves lives",
    ],
  },
  {
    title: "Code Blue — Cardiac/Respiratory Arrest Response",
    icon: "💙",
    color: "blue",
    content: [
      "Code Blue is activated when a patient is found unresponsive, not breathing or without a pulse",
      "IMMEDIATE response sequence:",
      "1. CHECK for responsiveness — tap shoulders, shout 'Are you okay?'",
      "2. CALL for help — activate the code (pull cord, press button, call emergency number)",
      "3. CHECK for breathing and pulse SIMULTANEOUSLY — no more than 10 seconds",
      "4. BEGIN CPR if no pulse — 30 compressions to 2 breaths ratio",
      "5. ATTACH defibrillator/AED as soon as available",
      "6. Continue CPR until code team arrives",
      "Quality CPR: Rate 100-120/min, depth 5-6cm adults, allow full chest recoil, minimise interruptions",
      "AED: Turn on, follow voice prompts, CLEAR before shock delivery — ensure no one is touching patient",
      "Roles during code: Team leader (physician), CPR provider, airway manager, medication nurse, recorder, runner",
      "After code: Complete documentation, debrief with team, support staff involved, restock crash cart",
    ],
  },
  {
    title: "Emergency Codes — Know Your Facility Codes",
    icon: "📻",
    color: "purple",
    content: [
      "Emergency codes vary by facility — know YOUR facility's specific codes",
      "Common standardised codes (Australia/USA):",
      "CODE BLUE: Cardiac/respiratory arrest — medical emergency",
      "CODE RED: Fire",
      "CODE ORANGE: Hazardous material spill/exposure",
      "CODE PURPLE: Bomb threat",
      "CODE BLACK: Personal threat/armed person",
      "CODE YELLOW: Internal emergency (power failure, infrastructure)",
      "CODE BROWN: External emergency/disaster (mass casualty)",
      "CODE WHITE: Paediatric emergency",
      "CODE PINK: Infant/child abduction",
      "CODE GREY: Combative person/security threat",
      "Plain language codes: Many facilities now using plain language ('Medical Emergency Room 4' instead of codes) to reduce confusion",
      "NCLEX tip: Know the response to Code Blue and Code Red most thoroughly — these are most frequently tested",
    ],
  },
  {
    title: "Mass Casualty Incidents (MCI) — Disaster Triage",
    icon: "🏥",
    color: "red",
    content: [
      "Mass Casualty Incident: An event that overwhelms available healthcare resources — the goal shifts from individual best care to greatest good for greatest number",
      "START Triage (Simple Triage and Rapid Treatment) — used in prehospital/initial triage:",
      "Step 1: Direct all walking wounded to GREEN area — they are GREEN (minor)",
      "Step 2: Assess remaining patients — open airway if not breathing",
      "Step 3: If breathing after repositioning: Tag RED (immediate) if RR >30 or absent radial pulse or altered mental status",
      "Step 4: If RR 10-29, radial pulse present, follows commands: Tag YELLOW (delayed)",
      "Step 5: If not breathing after airway repositioning: Tag BLACK (expectant/deceased)",
      "RED (Immediate): Life-threatening but survivable — treat within 60 minutes",
      "YELLOW (Delayed): Serious but can wait 2-4 hours without death",
      "GREEN (Minor): Walking wounded — minor injuries, treat last",
      "BLACK (Expectant): Non-survivable injuries OR deceased — withhold aggressive treatment",
      "CRITICAL: In MCI — a patient who would normally receive maximum treatment may be tagged BLACK to preserve resources for survivable patients",
    ],
  },
  {
    title: "Disaster Preparedness — Internal vs External",
    icon: "🌪️",
    color: "orange",
    content: [
      "INTERNAL disasters affect the facility itself: Fire, power failure, structural damage, hazardous spill, IT failure",
      "EXTERNAL disasters originate outside but send patients to the facility: Earthquakes, floods, mass casualty events, pandemic",
      "Hospital Incident Command System (HICS): Structured emergency management system with clear roles and chain of command",
      "Surge capacity: Hospital's ability to expand services beyond normal capacity — cancelling elective procedures, discharging stable patients, opening additional areas",
      "Nurse's role in disaster: Follow hospital emergency plan, report to assigned station, maintain communication with charge nurse, document all actions",
      "Personal preparedness: Know your facility's emergency plan, participate in drills, know your role and backup role",
      "Special populations in disasters: Elderly, neonates, ICU patients, psychiatric patients, dialysis patients require special planning",
      "Communication in disasters: Normal communication may fail — know backup systems (runners, radios, overhead PA)",
      "Resource allocation: In genuine disaster — standard triage and treatment protocols may be suspended — follow crisis standards of care",
    ],
  },
  {
    title: "Hazardous Material (HAZMAT) Exposure",
    icon: "☣️",
    color: "purple",
    content: [
      "HAZMAT incidents involve exposure to dangerous chemicals, biological agents, radiation or nuclear materials",
      "HAZMAT response categories: Chemical, Biological, Radiological, Nuclear, Explosive (CBRNE)",
      "FIRST PRIORITY in HAZMAT: Remove patient from source and DECONTAMINATE before bringing into the facility",
      "Decontamination: Remove ALL clothing (removes 80% of contamination), flush with copious water for 15-20 minutes",
      "Personal protection: Do NOT enter a HAZMAT zone without appropriate level PPE — call HAZMAT team",
      "PPE levels: Level A (fully encapsulated), Level B (high-level respiratory), Level C (air-purifying respirator), Level D (standard work clothes)",
      "Contaminated patients: Must be decontaminated OUTSIDE before entering the ED — contaminated patients inside spread contamination",
      "Chemical exposure signs: SLUDGE/DUMBELS mnemonic for organophosphate poisoning — Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis",
      "Radiation exposure: Radiation itself does not make the patient radioactive (unless contaminated with radioactive material) — treat life threats first",
      "Documentation: Record ALL exposed patients, symptoms, decontamination performed and treatment given",
    ],
  },
  {
    title: "Bioterrorism Agents — Category A",
    icon: "🦠",
    color: "red",
    content: [
      "Category A bioterrorism agents: Highest priority — easily disseminated, high mortality, cause public panic",
      "ANTHRAX (Bacillus anthracis): Cutaneous (black eschar), inhalation (most deadly), GI forms. Treatment: Ciprofloxacin or doxycycline",
      "SMALLPOX (Variola): Eliminated globally but potential bioterrorism agent. Highly contagious — airborne + contact precautions. Report IMMEDIATELY",
      "PLAGUE (Yersinia pestis): Bubonic (swollen lymph nodes), pneumonic (highly contagious, airborne spread). Treatment: Streptomycin",
      "BOTULISM (Clostridium botulinum): Descending paralysis, no fever, cranial nerve palsies. Treatment: Antitoxin, supportive care",
      "TULAREMIA: 'Rabbit fever' — fever, ulcer at infection site, pneumonia. Treatment: Streptomycin or gentamicin",
      "Viral haemorrhagic fevers (Ebola, Marburg): Contact + airborne precautions, full PPE",
      "Key nursing action for ANY suspected bioterrorism: Report to public health IMMEDIATELY, isolate patient, notify infection control",
      "NCLEX tip: Know anthrax and smallpox most thoroughly — these appear most frequently on NCLEX",
    ],
  },
  {
    title: "Responding to Combative or Violent Patients",
    icon: "🛑",
    color: "orange",
    content: [
      "De-escalation is ALWAYS the first approach — physical restraint is the last resort",
      "De-escalation techniques: Calm non-threatening voice, maintain safe distance (arm's length), avoid direct prolonged eye contact, remove stimuli, meet basic needs",
      "Safety positioning: Stand to the side of the doorway — never corner yourself in a room with a violent patient",
      "Escape route: Always be aware of the nearest exit — never position yourself where the patient blocks the only exit",
      "Call for help EARLY — before situation escalates, not after violence has occurred",
      "Code Grey/Black: Activate security for violent or armed individuals — nursing staff should NOT attempt to disarm armed individuals",
      "Weapons: If patient has a weapon — do NOT try to take it. Evacuate area, activate code, wait for security/police",
      "Post-incident: All staff involved in a violent incident should receive debriefing and psychological support",
      "Documentation: Objective description of behaviour, de-escalation attempts, interventions, injuries",
      "Legal considerations: Reasonable force may be used for self-defence — document thoroughly if physical intervention was necessary",
    ],
  },
  {
    title: "Rapid Response Team (RRT) — Early Intervention",
    icon: "🏃",
    color: "green",
    content: [
      "RRT (Rapid Response Team) or Medical Emergency Team (MET): Brought to the bedside when a patient deteriorates BEFORE cardiac arrest",
      "Purpose: Intervene early to PREVENT cardiac arrest — studies show RRT reduces unexpected cardiac arrests by up to 50%",
      "Who can call RRT: ANY nurse, physician, allied health staff, patient or family member — NO physician order required",
      "Early warning triggers (call RRT when ANY present): RR <8 or >28, SpO2 <90% on O2, systolic BP <90 mmHg, HR <40 or >130, urine output <50mL/2 hours, acute change in mental status, any acute deterioration that concerns you",
      "NEVER hesitate to call RRT — it is always better to call and not need it than to need it and not call",
      "After calling RRT: Stay with the patient, ensure airway is open, have chart ready, prepare to give SBAR report",
      "RRT composition: Critical care nurse, intensivist or registrar, respiratory therapist — varies by facility",
      "After RRT: Document time called, team members, interventions, patient response and plan",
      "Failure-to-rescue: The nurse's failure to recognise deterioration and call for help in time is one of the most common causes of preventable in-hospital death",
    ],
  },
];

const mnemonics = [
  {
    title: "Fire Response Sequence",
    acronym: "RACE",
    breakdown: ["Rescue", "Alarm", "Contain", "Extinguish/Evacuate"],
    memory: "Run A Careful Evacuation — Rescue first, Alarm second, Contain third, Extinguish/Evacuate last!",
    color: "red",
  },
  {
    title: "Fire Extinguisher Use",
    acronym: "PASS",
    breakdown: ["Pull pin", "Aim base", "Squeeze", "Sweep"],
    memory: "People Always Squeeze Sideways — Pull pin, Aim at BASE of fire, Squeeze handle, Sweep side to side!",
    color: "orange",
  },
  {
    title: "Mass Casualty Triage Colors",
    acronym: "RYGB",
    breakdown: ["Red=Immediate", "Yellow=Delayed", "Green=Minor", "Black=Expectant"],
    memory: "Real Young Girls Bounce — Red first, Yellow second, Green third, Black last (expectant)!",
    color: "purple",
  },
  {
    title: "Organophosphate Poisoning Signs",
    acronym: "SLUDGE",
    breakdown: ["Salivation", "Lacrimation", "Urination", "Defecation", "GI distress", "Emesis"],
    memory: "SLUDGE flows when organophosphates (nerve agents, pesticides) cause cholinergic crisis!",
    color: "green",
  },
  {
    title: "Early Warning Signs — Call RRT",
    acronym: "RUSTED",
    breakdown: ["Respiratory rate change", "Urine output low", "Systolic BP drop", "Tachycardia/brady", "Mentation change", "Deterioration concerns you"],
    memory: "A RUSTED patient needs the Rapid Response Team — any ONE of these signs warrants a call!",
    color: "blue",
  },
];

const alerts = [
  { text: "RACE order is critical — Rescue FIRST, then Alarm. Never activate alarm before removing patients from immediate danger!", severity: "high" },
  { text: "NEVER use elevators during a fire evacuation — elevator shafts act as chimneys and trap occupants in smoke and fire!", severity: "high" },
  { text: "In mass casualty — BLACK tag means EXPECTANT. Do NOT spend resources on non-survivable injuries even if the patient is still alive!", severity: "high" },
  { text: "Decontaminate HAZMAT patients OUTSIDE before they enter the facility — bringing a contaminated patient inside contaminates the entire department!", severity: "high" },
  { text: "Code Blue: Quality CPR is the single most important intervention — rate 100-120/min, depth 5-6cm, full recoil, minimal interruptions!", severity: "high" },
  { text: "ANY nurse, patient or family member can call RRT — NO physician order is needed. Never hesitate to call!", severity: "medium" },
  { text: "During a violent patient situation — NEVER position yourself where the patient blocks your only exit. Always have an escape route!", severity: "medium" },
  { text: "Aim fire extinguisher at the BASE of the fire — not the flames. Aiming at flames is ineffective!", severity: "medium" },
  { text: "Horizontal evacuation before vertical — move patients to the next compartment on the SAME floor before using stairs!", severity: "medium" },
  { text: "Suspected smallpox or bioterrorism agent: Report to public health IMMEDIATELY — this is a mandatory report!", severity: "medium" },
  { text: "Respiratory rate is the FIRST vital sign to change in deterioration — count it for a full 60 seconds, never estimate!", severity: "low" },
  { text: "After ANY emergency event — debrief with the team. Debriefing improves future performance and supports staff wellbeing!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A nurse smells smoke coming from a patient's room. In which order should the nurse respond according to the RACE protocol?",
    options: [
      "Activate the fire alarm → Remove patients → Close doors → Extinguish",
      "Remove patients in immediate danger → Activate the alarm → Close doors → Extinguish or evacuate",
      "Call the fire department → Remove patients → Activate alarm → Evacuate",
      "Close doors → Remove patients → Activate alarm → Extinguish",
    ],
    correct: 1,
    explanation: "RACE stands for Rescue → Alarm → Contain → Extinguish/Evacuate — in that exact order. RESCUE (remove patients in immediate danger) comes FIRST because the immediate threat to human life takes priority over activating the alarm. After moving patients to safety, ACTIVATE the alarm. Then CONTAIN the fire by closing all doors and windows. Finally EXTINGUISH if safe, or EVACUATE if not. The sequence is designed to protect lives first, then prevent fire spread.",
    wrongExplanations: [
      "WRONG: Activating the alarm before rescuing patients in immediate danger is incorrect. Human rescue is the FIRST priority — then activate the alarm.",
      "",
      "WRONG: Calling the fire department is important but the RACE protocol prioritises removing people from danger FIRST. The alarm activation notifies emergency services.",
      "WRONG: Closing doors (Contain) is the THIRD step in RACE — it comes AFTER Rescue and Alarm, not before.",
    ],
  },
  {
    level: "Knowledge",
    question: "During a mass casualty incident, a nurse is triaging patients using the START triage system. A patient is breathing at a rate of 36 breaths per minute, has no radial pulse and is unresponsive to commands. Which triage tag should this patient receive?",
    options: [
      "GREEN — minor injuries, can wait",
      "YELLOW — delayed, serious but stable",
      "RED — immediate, life-threatening but survivable",
      "BLACK — expectant, non-survivable",
    ],
    correct: 2,
    explanation: "This patient meets RED (Immediate) criteria in START triage. RED criteria include ANY of: respiratory rate >30 or <10, absent radial pulse, or altered mental status (cannot follow simple commands). This patient has ALL THREE red criteria — RR 36 (>30), no radial pulse and unresponsive. RED means life-threatening but SURVIVABLE with immediate intervention — this patient needs immediate treatment within 60 minutes. BLACK is reserved for patients who are NOT breathing even after airway repositioning or who have clearly non-survivable injuries.",
    wrongExplanations: [
      "WRONG: GREEN is for walking wounded with minor injuries who can wait hours. This patient has life-threatening vital sign abnormalities.",
      "WRONG: YELLOW is for serious but stable patients with RR 10-29, present radial pulse and ability to follow commands. This patient meets RED criteria.",
      "",
      "WRONG: BLACK is for patients not breathing after airway repositioning or with clearly non-survivable injuries. This patient IS breathing (RR 36) — they are RED, not BLACK.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is working in the emergency department when a patient arrives having been exposed to an unknown chemical substance at an industrial site. The patient is confused, has miotic pupils, excessive salivation, lacrimation and urinary incontinence. What is the nurse's PRIORITY action?",
    options: [
      "Bring the patient inside immediately and begin treatment for chemical exposure",
      "Ensure the patient is decontaminated outside the facility before bringing them into the department",
      "Administer atropine immediately — this is a cholinergic crisis",
      "Place the patient in a negative pressure room and apply airborne precautions",
    ],
    correct: 1,
    explanation: "The FIRST priority with a HAZMAT/chemical exposure patient is DECONTAMINATION OUTSIDE the facility BEFORE entry. This patient's symptoms (miosis, salivation, lacrimation, urinary incontinence — SLUDGE signs) indicate organophosphate/nerve agent poisoning — a cholinergic crisis. Bringing a contaminated patient inside would contaminate the entire emergency department, staff and other patients. Decontaminate outside: remove ALL clothing (removes 80% of contamination), flush with copious water for 15-20 minutes. Only after decontamination should the patient enter the facility for treatment including atropine.",
    wrongExplanations: [
      "WRONG: Bringing a contaminated patient inside contaminates the entire department. Decontamination MUST occur outside first — this is the priority.",
      "",
      "WRONG: Atropine is the correct antidote for organophosphate poisoning but it is administered AFTER decontamination — not before the patient has been decontaminated.",
      "WRONG: Negative pressure rooms are for airborne infectious diseases — not chemical contamination. Chemical exposure requires decontamination, not isolation.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a patient when the patient suddenly becomes unresponsive. The nurse checks for responsiveness, activates the code and checks for pulse. No pulse is detected. A defibrillator is available. What should the nurse do FIRST?",
    options: [
      "Attach the defibrillator and analyse the rhythm before starting CPR",
      "Begin CPR immediately with 30 compressions before attaching the defibrillator",
      "Wait for the code team to arrive before initiating any intervention",
      "Administer epinephrine 1mg IV immediately",
    ],
    correct: 1,
    explanation: "BEGIN CPR IMMEDIATELY with high-quality chest compressions — rate 100-120/min, depth 5-6cm, full chest recoil, minimal interruptions. CPR should be started within 10 seconds of confirming no pulse. The defibrillator should be attached AS SOON AS POSSIBLE — but CPR must not be delayed to set up equipment. For every 1 minute without CPR, survival decreases by 7-10%. Modern guidelines emphasise 'push hard and fast' with minimal interruptions. The code team, once they arrive, will continue CPR while analysing rhythm. Epinephrine is administered by the team during the code — not by the first responder before the team arrives.",
    wrongExplanations: [
      "WRONG: Attaching the defibrillator BEFORE starting CPR delays chest compressions. Start CPR immediately and attach the defibrillator without stopping compressions.",
      "",
      "WRONG: Waiting for the code team before any intervention means the patient receives no CPR — survival drops dramatically with each minute of delay. Start CPR immediately.",
      "WRONG: Epinephrine is a code team medication requiring IV access and physician direction. The first nurse on scene starts CPR — epinephrine comes later in the ACLS algorithm.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is assessing a post-operative patient 8 hours after abdominal surgery. The patient's respiratory rate has increased from 16 to 26 per minute over the past 2 hours, blood pressure has dropped from 122/78 to 96/62 and the patient appears increasingly restless and confused. What is the nurse's MOST appropriate action?",
    options: [
      "Increase the rate of IV fluids and reassess in 30 minutes",
      "Notify the surgeon and document the vital sign changes in the patient chart",
      "Activate the Rapid Response Team immediately",
      "Administer a PRN analgesic — the patient may be in pain causing the vital sign changes",
    ],
    correct: 2,
    explanation: "This patient is showing MULTIPLE early warning signs of deterioration — rising RR (16→26), falling BP (122/78→96/62), new confusion and restlessness. These signs are consistent with early septic shock, haemorrhage or another post-operative emergency. The RAPID RESPONSE TEAM must be activated IMMEDIATELY — this patient needs multi-disciplinary emergency assessment at the bedside NOW. Increasing fluids (Option A) may be needed but cannot substitute for urgent medical assessment. Notifying the surgeon by phone (Option B) is appropriate but RRT brings critical care to the bedside faster. Administering analgesia (Option D) when the patient may be haemorrhaging would be potentially fatal — pain is not the priority diagnosis here.",
    wrongExplanations: [
      "WRONG: Increasing fluids and waiting 30 minutes in the face of multiple deterioration signs wastes critical time. This patient needs urgent assessment — not watchful waiting.",
      "WRONG: Notifying the surgeon is appropriate — but RRT activation brings a critical care team to the bedside immediately. Both should occur but RRT activation is the priority.",
      "",
      "WRONG: Administering analgesia when the patient may be haemorrhaging or septic masks critical symptoms and delays life-saving treatment. Pain is not the priority assessment here.",
    ],
  },
  {
    level: "Advanced",
    question: "A hospital is implementing a mass casualty plan following a major earthquake. 47 patients arrive at the emergency department within 30 minutes. The emergency department normally serves 20 patients. The following patients arrive simultaneously:\n\n• Patient A: 8-year-old, multiple lacerations, alert, walking independently\n• Patient B: 45-year-old, crushing chest injury, RR 6, radial pulse absent, unresponsive\n• Patient C: 32-year-old, open femur fracture, bleeding controlled, RR 18, radial pulse present, alert\n• Patient D: 67-year-old, not breathing after airway repositioning attempted\n\nAssign the correct triage tags:",
    options: [
      "A=Yellow, B=Red, C=Yellow, D=Black",
      "A=Green, B=Black, C=Yellow, D=Black",
      "A=Green, B=Red, C=Yellow, D=Black",
      "A=Yellow, B=Black, C=Red, D=Black",
    ],
    correct: 1,
    explanation: "Patient A (GREEN): 8-year-old, walking, alert, multiple lacerations = GREEN (minor). Walking wounded are directed to GREEN immediately. Patient B (BLACK): RR 6 (<10), absent radial pulse, unresponsive = meets BLACK criteria in START — these are non-survivable parameters given available resources during MCI. Without radial pulse AND RR <10 AND unresponsive — resources would be consumed with minimal chance of survival. Patient C (YELLOW): RR 18 (10-29), radial pulse present, alert = YELLOW (delayed). Serious injury but vital signs indicate stability for 2-4 hours. Patient D (BLACK): Not breathing after airway repositioning = BLACK. No breathing after repositioning attempt = no further resuscitation in mass casualty triage. In NORMAL circumstances Patient B and D would receive maximum intervention — in MCI the resource limitation changes the calculus.",
    wrongExplanations: [
      "WRONG: Patient A should be GREEN not Yellow — all walking wounded are immediately GREEN in START triage. Patient B has parameters suggesting BLACK not Red given all three RED criteria are absent radial pulse + RR <10 + unresponsive.",
      "",
      "WRONG: Patient A is correctly GREEN. However Patient B with RR 6, absent radial pulse AND unresponsive meets BLACK criteria — in MCI resource allocation this patient is expectant, not RED.",
      "WRONG: Patient A is correctly GREEN. Patient C with controlled bleeding, RR 18 and alert is YELLOW not RED. Patient B should be BLACK — all three critical parameters are abnormal.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is working in a community health centre when a patient arrives reporting that they received a suspicious letter containing white powder. The patient has opened the letter and some powder has settled on their clothing and hands. The nurse suspects potential anthrax exposure. What is the CORRECT sequence of actions?",
    options: [
      "Isolate the patient in a negative pressure room and administer prophylactic ciprofloxacin immediately",
      "Instruct the patient not to shake the letter, isolate them in a designated area, call emergency services and public health, begin decontamination with soap and water without brushing, and notify all potentially exposed persons",
      "Place the letter in a plastic bag, bring it to the laboratory for testing, then decide on further action",
      "Evacuate the entire health centre and wait for HAZMAT team before taking any further action",
    ],
    correct: 1,
    explanation: "Suspected ANTHRAX exposure requires a specific coordinated response: Do NOT shake or further disturb the substance. ISOLATE the patient and any other exposed persons in a designated area — prevent spread. CALL emergency services (000/911) AND public health authorities IMMEDIATELY — anthrax is a notifiable condition and bioterrorism event. Begin DECONTAMINATION with soap and water — gently wash hands and exposed skin WITHOUT brushing (brushing aerosolises spores). Document ALL potentially exposed persons. Await guidance from public health and HAZMAT. A negative pressure room (Option A) is for respiratory isolation — not the priority here. Handling the letter further (Option C) aerosolises spores and increases exposure. Complete evacuation (Option D) without decontaminating exposed persons spreads contamination.",
    wrongExplanations: [
      "WRONG: Negative pressure isolation is for airborne infectious diseases. For anthrax exposure the priority is decontamination and public health notification — not respiratory isolation. Ciprofloxacin prophylaxis is given after public health assessment, not immediately by the nurse.",
      "",
      "WRONG: Handling or moving the letter further aerosolises spores and increases the risk of exposure. Leave it where it is and call emergency services.",
      "WRONG: Evacuating without decontaminating exposed persons spreads anthrax spores throughout the building and community. Decontaminate exposed persons first, isolate, then coordinate with emergency services.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is the first to arrive at a cardiac arrest. After starting CPR, the code team arrives with the following members: attending physician, critical care nurse, respiratory therapist, two medical students and a pharmacy student. The nurse who initiated CPR has been doing compressions for 3 minutes. What is the MOST important action the nurse should take at this moment?",
    options: [
      "Continue compressions — the first nurse should maintain their role throughout the code",
      "Step aside immediately as the attending physician has arrived and is now in charge",
      "Communicate clearly using closed-loop communication: announce patient status, current CPR duration, last rhythm check and hand off compressions to allow a fresh provider to continue",
      "Stop CPR to give the team time to organise themselves and attach monitoring equipment",
    ],
    correct: 2,
    explanation: "Effective code management requires STRUCTURED COMMUNICATION and team coordination. The correct action is CLOSED-LOOP COMMUNICATION: announce current patient status ('No pulse confirmed, CPR started 3 minutes ago, rhythm not yet checked'), hand off compressions to a fresh provider (compression quality degrades after 2 minutes — switch every 2 minutes), assist with attaching monitoring equipment and take on a designated role (medication nurse, recorder). Continuing compressions alone (Option A) ignores compression fatigue — quality decreases significantly after 2 minutes. Stepping aside passively (Option B) creates a gap in CPR. Stopping CPR to organise (Option D) interrupts life-saving intervention and decreases survival.",
    wrongExplanations: [
      "WRONG: Compression quality degrades significantly after 2 minutes — providers should rotate every 2 minutes for maximum effectiveness. Continuing alone is not optimal.",
      "WRONG: Passively stepping aside creates an uncoordinated handover. The nurse should actively communicate patient status and current interventions to the team.",
      "",
      "WRONG: NEVER stop CPR to organise the team. Monitoring equipment and team organisation happen AROUND ongoing CPR — never instead of it. Every interruption in compressions reduces survival.",
    ],
  },
  {
    level: "Advanced",
    question: "A hospital is experiencing a prolonged power outage following a major storm. The backup generator has failed after 2 hours. The ICU has 12 ventilated patients. The operating theatre has one patient on bypass mid-surgery. The neonatal ICU has 8 premature infants on warming units and monitoring. The nurse manager must prioritise the allocation of the facility's single remaining portable generator. To which area should it be allocated FIRST?",
    options: [
      "The ICU — it has the most patients and all are on life support",
      "The operating theatre — the patient on bypass will die without power in minutes",
      "The neonatal ICU — premature infants are the most vulnerable population",
      "The emergency department — it serves the most people",
    ],
    correct: 1,
    explanation: "The patient on cardiac bypass in the operating theatre faces IMMEDIATE, CERTAIN DEATH within MINUTES without power — the bypass machine will stop and the patient's heart and lungs are externally supported. This is the most time-critical, immediately life-threatening situation. ICU ventilated patients can be manually bagged by staff for a period — not indefinitely, but for longer than bypass can be maintained manually. Neonatal patients can be wrapped and manually monitored temporarily. Emergency department patients are not currently on life support. Triage principles apply to resource allocation: most immediately life-threatening need gets the resource first. Once the bypass patient is stabilised (surgery completed, patient off bypass), the generator can be relocated.",
    wrongExplanations: [
      "WRONG: ICU patients on ventilators can be manually ventilated (bagged) by staff — this is not sustainable long-term but buys time. The bypass patient has NO manual alternative.",
      "",
      "WRONG: Premature infants are extremely vulnerable but can be wrapped in blankets and manually monitored for a period. The bypass patient has no manual alternative and will die within minutes.",
      "WRONG: The emergency department serves ambulatory and less acute patients — none are currently on life support equivalent to cardiac bypass.",
    ],
  },
  {
    level: "Advanced",
    question: "Following a mass shooting event, 23 patients arrive at a regional hospital over 40 minutes. The hospital activates its mass casualty protocol. A nurse is assigned as the triage officer. Among the arrivals is a police officer who was shot while responding to the incident, a hospital administrator who demands their injured family member be treated first, a local politician who arrives by private vehicle, and a gunshot victim who is a suspected perpetrator of the shooting. In what order should these patients be triaged and treated?",
    options: [
      "The politician first — their safety is a public priority",
      "The police officer first — they were injured in the line of duty",
      "Triage ALL patients based solely on clinical severity and survivability — treating all identically regardless of identity or circumstances",
      "The administrator's family member first — the administrator has authority in the facility",
    ],
    correct: 2,
    explanation: "Mass casualty triage is based SOLELY on clinical severity and survivability — IDENTITY, OCCUPATION, SOCIAL STATUS, FAMILY CONNECTIONS and even CRIMINAL HISTORY are ALL IRRELEVANT to triage decisions. The suspected perpetrator of a shooting receives the same clinical triage as any other patient — this is both the ethical and legal standard. The police officer, politician and administrator's family member all receive triage based on their clinical presentation. Justice (equal treatment) is a core nursing ethical principle. In a mass casualty event, allowing preferential treatment based on social status or pressure would constitute a fundamental violation of triage ethics and could result in preventable deaths among lower-profile patients with more critical injuries.",
    wrongExplanations: [
      "WRONG: Social or political status is NEVER a factor in clinical triage. A politician with minor injuries is GREEN — a critically injured unknown person is RED. Identity is irrelevant.",
      "WRONG: Occupation — including law enforcement — does not change triage priority. Clinical severity determines triage category, not the patient's job.",
      "",
      "WRONG: Institutional authority has ABSOLUTELY NO bearing on clinical triage. An administrator demanding preferential treatment for family must be firmly redirected — triage is based on clinical need only.",
    ],
  },
];

const clinicalPearls = [
  "The most important emergency skill is EARLY RECOGNITION — emergencies that are caught early are far more survivable than those caught late. Develop the habit of noticing subtle changes in patient condition before they become crises.",
  "In a real fire, smoke kills more people than flames. Stay low, close doors and always feel a door with the back of your hand before opening it — if it is hot, do not open it.",
  "Mass casualty triage feels wrong — tagging a living person BLACK feels like abandonment. Remember: in MCI you are not abandoning them, you are making the agonising but necessary decision to preserve resources for those who can survive. This requires moral courage.",
  "The code blue response that saves the most lives is not the dramatic TV version — it is quiet, organised teamwork with continuous high-quality CPR and minimal interruptions. Chaos during codes kills patients.",
  "Never hesitate to call the Rapid Response Team. The fear of looking foolish for calling RRT for a patient who turns out to be fine is far less than the professional and personal cost of not calling when you should have.",
  "Bioterrorism awareness: Any unusual cluster of patients with the same unexplained illness — especially respiratory illness — should raise your index of suspicion. Early reporting to public health is the single most important action.",
  "Your own safety in emergencies matters — a nurse who is incapacitated cannot help anyone. In HAZMAT situations, violent situations or structural emergencies, protect yourself appropriately before helping others.",
];

export default function EmergencyResponsePage() {
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
          >←</button>
          <div className="flex-1">
            <h1 className="font-black text-base text-gray-900">🚨 Emergency Response</h1>
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
              <button key={t.id} onClick={() => setActiveTab(t.id as typeof activeTab)}
                className={`px-3 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-all ${activeTab === t.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>
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
                🚨 Emergency response knowledge saves lives. Master RACE, PASS, Code Blue, mass casualty triage and RRT — these appear on NCLEX and in real clinical practice!
              </p>
            </div>
            <div className="space-y-3">
              {notes.map((note, i) => (
                <div key={i} className={`border rounded-2xl overflow-hidden shadow-sm ${colorMap[note.color]}`}>
                  <div className="flex items-center gap-3 p-4 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => setExpandedNote(expandedNote === i ? null : i)}>
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
            <button onClick={() => setActiveTab("quiz")}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-base transition-colors">
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
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg">{letter}</div>
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most common NCLEX traps on Emergency Response — study these carefully!</p>
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
                    <button key={f} onClick={() => { setFilter(f); resetQuiz(); }}
                      className={`px-4 py-2 rounded-xl font-bold text-sm border transition-all ${filter === f ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-200 hover:border-blue-400"}`}>
                      {f} {f !== "All" && `(${quizQuestions.filter(q => q.level === f).length})`}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizComplete ? (
              <div className="text-center py-8">
                <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-6 shadow-sm">
                  <span className="text-6xl block mb-4">{score / filteredQuestions.length >= 0.8 ? "🎉" : score / filteredQuestions.length >= 0.6 ? "👍" : "📚"}</span>
                  <h3 className="text-4xl font-black mb-1">{score}<span className="text-2xl text-gray-400">/{filteredQuestions.length}</span></h3>
                  <p className="text-2xl font-bold text-gray-600 mb-2">{Math.round((score / filteredQuestions.length) * 100)}%</p>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden mb-4">
                    <div className={`h-full rounded-full transition-all ${score / filteredQuestions.length >= 0.8 ? "bg-green-500" : score / filteredQuestions.length >= 0.6 ? "bg-blue-500" : "bg-orange-500"}`}
                      style={{ width: `${(score / filteredQuestions.length) * 100}%` }} />
                  </div>
                  <p className="text-gray-600 text-sm">
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Emergency Response!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review RACE, mass casualty triage and RRT." :
                        "Keep studying! Focus on RACE, Code Blue response and mass casualty triage systems."}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button onClick={resetQuiz} className="flex-1 bg-blue-600 text-white py-3 rounded-2xl font-bold hover:bg-blue-700 transition-colors">Try Again 🔄</button>
                  <button onClick={() => setActiveTab("notes")} className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-2xl font-bold hover:bg-gray-200 transition-colors">Review Notes 📝</button>
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
                  <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${(currentQuestion / filteredQuestions.length) * 100}%` }} />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-4 shadow-sm">
                  <p className="font-semibold text-gray-800 leading-relaxed whitespace-pre-line">{filteredQuestions[currentQuestion].question}</p>
                </div>
                <div className="space-y-3 mb-4">
                  {filteredQuestions[currentQuestion].options.map((option, i) => (
                    <div key={i} onClick={() => handleAnswer(i)}
                      className={`p-4 rounded-2xl border-2 transition-all font-medium cursor-pointer ${selectedAnswer === null
                        ? "bg-white border-gray-200 hover:border-blue-400 hover:bg-blue-50 active:scale-[0.99]"
                        : i === filteredQuestions[currentQuestion].correct
                          ? "bg-green-50 border-green-400 text-green-800"
                          : selectedAnswer === i
                            ? "bg-red-50 border-red-400 text-red-800"
                            : "bg-gray-50 border-gray-200 text-gray-400 opacity-60"
                        }`}>
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
                    <p className="text-gray-800 text-sm leading-relaxed mb-3">{filteredQuestions[currentQuestion].explanation}</p>
                    {filteredQuestions[currentQuestion].wrongExplanations[selectedAnswer] && selectedAnswer !== filteredQuestions[currentQuestion].correct && (
                      <div className="bg-white rounded-xl p-3 border border-red-200">
                        <p className="text-red-600 text-xs font-semibold">Why your answer was wrong:</p>
                        <p className="text-red-700 text-sm mt-1">{filteredQuestions[currentQuestion].wrongExplanations[selectedAnswer]}</p>
                      </div>
                    )}
                  </div>
                )}
                {selectedAnswer !== null && (
                  <button onClick={nextQuestion}
                    className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-base hover:bg-blue-700 transition-colors">
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
                  <div className="w-8 h-8 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-yellow-600 text-sm">{i + 1}</div>
                  <p className="text-gray-800 text-sm leading-relaxed">{pearl}</p>
                </div>
              ))}
            </div>
            <button onClick={() => setActiveTab("quiz")}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-base transition-colors">
              Test Your Knowledge → Start Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
