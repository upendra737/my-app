"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Cardiovascular Nursing",
    icon: "❤️",
    color: "red",
    content: [
      "Cardiovascular disease is the leading cause of death globally — nurses must master assessment, monitoring and intervention for cardiac emergencies",
      "CARDIAC OUTPUT (CO) = Heart Rate (HR) × Stroke Volume (SV). Normal CO = 4-8 L/min",
      "STROKE VOLUME is determined by: Preload (volume filling the ventricle), Afterload (resistance the heart pumps against), Contractility (force of contraction)",
      "PRELOAD: Volume of blood returning to the heart (venous return). Increased in fluid overload. Decreased in dehydration, haemorrhage",
      "AFTERLOAD: Resistance the ventricle must overcome to eject blood. Increased in hypertension, aortic stenosis. Decreased by vasodilators",
      "FRANK-STARLING LAW: The more the ventricle fills (preload), the greater the force of contraction — up to a point. Beyond optimal stretch, contractility decreases (in heart failure)",
      "NCLEX heavily tests: Heart failure classification and management, acute MI recognition and intervention, arrhythmia recognition and treatment, hypertensive emergency and vascular conditions",
      "Cardiovascular nursing priority: AIRWAY-BREATHING-CIRCULATION (ABC) always, then specific cardiac assessment and intervention",
    ],
  },
  {
    title: "Heart Failure — Classification and Pathophysiology",
    icon: "💙",
    color: "blue",
    content: [
      "HEART FAILURE (HF): The heart cannot pump sufficient blood to meet the body's metabolic needs, or can only do so at elevated filling pressures",
      "SYSTOLIC HF (HFrEF — Heart Failure with Reduced Ejection Fraction): Impaired contractility — EF <40%. Most common. Causes: CAD, MI, cardiomyopathy, hypertension",
      "DIASTOLIC HF (HFpEF — Heart Failure with Preserved Ejection Fraction): Impaired relaxation/filling — EF ≥50%. Stiff ventricle. Causes: Hypertension (most common), diabetes, obesity, aging",
      "LEFT HEART FAILURE (LHF): Pulmonary congestion — blood backs up into the lungs. Symptoms: Dyspnoea on exertion, orthopnoea (dyspnoea lying flat), paroxysmal nocturnal dyspnoea (PND — awakened from sleep with SOB), crackles, S3 gallop",
      "RIGHT HEART FAILURE (RHF): Systemic venous congestion — blood backs up into the body. Symptoms: Peripheral oedema (dependent — ankles, sacrum), jugular venous distension (JVD), hepatomegaly, ascites, weight gain",
      "Most common cause of RHF is LHF — left-sided failure → pulmonary hypertension → right ventricular strain → RHF",
      "NYHA Classification: Class I (no symptoms with ordinary activity), Class II (slight limitation — symptoms with moderate exertion), Class III (marked limitation — symptoms with minimal exertion), Class IV (symptoms at rest — unable to carry on any activity)",
      "NEUROHORMONAL ACTIVATION in HF: SNS activation (tachycardia, vasoconstriction), RAAS activation (sodium/water retention, vasoconstriction), ADH release — initially compensatory, ultimately worsens HF",
    ],
  },
  {
    title: "Heart Failure — Assessment and Diagnosis",
    icon: "🩺",
    color: "blue",
    content: [
      "CLINICAL PRESENTATION: Dyspnoea (most common symptom), fatigue, oedema, orthopnoea, PND, reduced exercise tolerance, weight gain",
      "PHYSICAL EXAMINATION: S3 gallop (pathognomonic of HF — 'Ken-tuck-y' sound), S4 (stiff ventricle), crackles/crepitations, JVD, peripheral oedema, displaced PMI (enlarged heart)",
      "VITAL SIGNS in HF: Tachycardia (compensatory), hypotension (in severe/decompensated), elevated BP (may be precipitant), low SpO2",
      "BNP (B-type Natriuretic Peptide): Released by ventricles in response to volume overload. >100 pg/mL suggests HF. >400 pg/mL = strong indicator. Used for diagnosis and monitoring treatment response",
      "NT-proBNP: More sensitive — thresholds vary by age. Used in same context as BNP",
      "ECHOCARDIOGRAM: Gold standard for HF diagnosis — measures ejection fraction, wall motion, valve function, chamber size",
      "CHEST X-RAY in HF: Cardiomegaly (cardiothoracic ratio >0.5), pulmonary vascular redistribution, Kerley B lines (interstitial oedema), perihilar 'bat wing' pattern, pleural effusions",
      "ECG in HF: May show LVH, ST changes, arrhythmias — not diagnostic for HF but identifies precipitating causes",
      "DAILY WEIGHT: Most sensitive indicator of fluid status change. Report weight gain >1 kg/day or >2 kg in 48 hours to physician",
    ],
  },
  {
    title: "Heart Failure — Medical and Nursing Management",
    icon: "💊",
    color: "purple",
    content: [
      "ACUTE DECOMPENSATED HF (ADHF) — LMNOP mnemonic: Lasix (furosemide), Morphine (vasodilation, reduces anxiety — use cautiously), Nitrates (vasodilation, reduce preload), Oxygen, Position (high Fowler's — 45-90°)",
      "POSITION: High Fowler's (sitting upright) — gravity reduces venous return to heart, reduces preload, relieves dyspnoea. Most important immediate nursing intervention",
      "OXYGEN: Titrate to maintain SpO2 ≥94%. High-flow O2 via NRB if severely hypoxic. NIV (CPAP/BiPAP) for respiratory failure — reduces work of breathing, improves oxygenation",
      "FUROSEMIDE (Lasix): IV in acute HF — rapid diuresis. Monitor urine output (Foley catheter), electrolytes (hypokalaemia), BP (hypotension), creatinine (renal function)",
      "NITRATES: GTN (nitroglycerin) — IV, sublingual, topical. Venodilator (reduces preload). Contraindicated if systolic BP <90 mmHg or with phosphodiesterase inhibitors (sildenafil — severe hypotension)",
      "CHRONIC HF PHARMACOTHERAPY (evidence-based, reduces mortality):",
      "ACE inhibitors or ARBs — reduce afterload, reduce RAAS activation",
      "Beta-blockers (carvedilol, metoprolol succinate, bisoprolol) — reduce HR, reduce SNS activation",
      "Aldosterone antagonists (spironolactone, eplerenone) — reduce fibrosis, additional diuresis",
      "SGLT-2 inhibitors (empagliflozin, dapagliflozin) — new evidence for mortality benefit in HFrEF",
      "PATIENT EDUCATION: Daily weights, sodium restriction <2g/day, fluid restriction if ordered (1.5-2L/day), medication adherence, when to seek help (weight gain, increased dyspnoea, ankle swelling)",
    ],
  },
  {
    title: "Acute Myocardial Infarction — Recognition",
    icon: "🚨",
    color: "red",
    content: [
      "ACUTE MI: Prolonged myocardial ischaemia causing irreversible myocardial cell death — 'time is muscle'",
      "STEMI (ST-Elevation MI): Complete occlusion of coronary artery — ST elevation in ≥2 contiguous leads >1mm (limb) or >2mm (precordial). Requires EMERGENCY reperfusion",
      "NSTEMI (Non-ST Elevation MI): Partial occlusion — no ST elevation, but elevated troponin. ST depression or T-wave inversion may be present",
      "UNSTABLE ANGINA: Similar to NSTEMI clinically but NO troponin elevation — demand/supply mismatch without necrosis",
      "CLASSIC MI PRESENTATION: Crushing/squeezing substernal chest pain/pressure radiating to left arm, jaw, shoulder, back. Diaphoresis, nausea, vomiting, dyspnoea, pallor, sense of impending doom",
      "ATYPICAL PRESENTATION (especially women, elderly, diabetics): Fatigue, dyspnoea, jaw/neck/arm pain, epigastric pain, nausea without chest pain — 'silent MI' or atypical symptoms. Do NOT dismiss",
      "CARDIAC BIOMARKERS:",
      "TROPONIN I and T: Most sensitive and specific for myocardial injury. Rises 3-6 hours after MI, peaks 12-24 hours, returns to normal in 7-10 days. HIGH SENSITIVITY TROPONIN can detect injury earlier (1-2 hours)",
      "CK-MB: Rises 4-6 hours, peaks 12-24 hours, normalises 48-72 hours. Less specific than troponin (also elevated in skeletal muscle injury)",
      "Myoglobin: Rises 1-3 hours (earliest), normalises 24 hours. Not cardiac specific — useful to rule OUT MI if normal",
    ],
  },
  {
    title: "Acute MI — Emergency Management (MONA)",
    icon: "🏥",
    color: "red",
    content: [
      "TIME IS MUSCLE — door-to-balloon time <90 minutes for STEMI is the gold standard",
      "MONA mnemonic (initial management):",
      "M — MORPHINE: IV for pain relief — reduces catecholamine release, anxiolytic, vasodilates. Use cautiously in NSTEMI (associated with worse outcomes in some studies)",
      "O — OXYGEN: Only if SpO2 <94% — routine oxygen in uncomplicated MI with normal SpO2 may worsen outcomes (oxygen toxicity, vasoconstriction)",
      "N — NITRATES: Sublingual GTN — pain relief, vasodilation. Contraindicated: SBP <90, right ventricular MI (suspect if inferior STEMI — need right-sided ECG), phosphodiesterase inhibitors",
      "A — ASPIRIN: 300mg loading dose IMMEDIATELY (chewed, not swallowed whole — faster absorption). Antiplatelet — inhibits COX-1 mediated thromboxane A2",
      "Additional immediate management: 12-lead ECG within 10 minutes, IV access (large bore), cardiac monitoring, bloods (troponin, FBC, coagulation, UE, glucose, lipids), CHEST X-RAY",
      "DUAL ANTIPLATELET THERAPY (DAPT): Aspirin PLUS P2Y12 inhibitor (clopidogrel, ticagrelor, prasugrel) — essential for ACS management",
      "REPERFUSION for STEMI: PRIMARY PCI (percutaneous coronary intervention) is preferred if door-to-balloon <90 minutes. FIBRINOLYSIS (tPA, tenecteplase) if PCI not available within 120 minutes",
      "ANTICOAGULATION: Heparin (UFH or LMWH) — prevents clot extension and re-thrombosis",
      "RIGHT VENTRICULAR MI: Presents with inferior STEMI (II, III, aVF) + hypotension + JVD + clear lungs. FLUIDS are priority — NOT diuretics or nitrates (these reduce preload and cause catastrophic hypotension in RV MI)",
    ],
  },
  {
    title: "Post-MI Complications",
    icon: "⚠️",
    color: "orange",
    content: [
      "ARRHYTHMIAS: Most common complication in first 24-48 hours. VF is the leading cause of early MI death. Continuous cardiac monitoring essential",
      "HEART FAILURE: Pump failure post-MI — particularly with large anterior MI. Cardiogenic shock (SBP <90, cool clammy skin, poor urine output) = medical emergency",
      "PERICARDITIS (Dressler syndrome): Autoimmune inflammatory response 2-6 weeks post-MI. Presents: pleuritic chest pain (better sitting forward), friction rub, fever. Treatment: NSAIDs, colchicine",
      "PAPILLARY MUSCLE RUPTURE: Causes acute severe mitral regurgitation — sudden haemodynamic deterioration, new harsh systolic murmur, pulmonary oedema. Requires emergency surgery",
      "VENTRICULAR SEPTAL DEFECT (VSD): Post-MI septal rupture — new harsh pansystolic murmur, sudden deterioration, step up in O2 saturation from RA to RV. Requires surgery",
      "VENTRICULAR ANEURYSM: Persistent ST elevation weeks after MI, dyskinetic wall motion on echo. Risk of mural thrombus — anticoagulate",
      "REINFARCTION: Recurrent chest pain, new ECG changes, re-elevation of troponin after initial fall. Urgent angiography",
      "NURSING POST-MI: Bed rest initially, gradual activity progression, continuous monitoring, pain assessment, anxiety management, medication education (DAPT, statin, ACEi, beta-blocker), smoking cessation, cardiac rehabilitation referral",
    ],
  },
  {
    title: "Cardiac Arrhythmias — Recognition and Management",
    icon: "📊",
    color: "purple",
    content: [
      "NORMAL SINUS RHYTHM: Rate 60-100 bpm, regular, P wave before each QRS, PR interval 0.12-0.20 sec, QRS <0.12 sec",
      "SINUS TACHYCARDIA: Rate >100, regular, normal P waves — caused by fever, pain, anxiety, hypovolaemia, anaemia. Treat the CAUSE not the rate",
      "SINUS BRADYCARDIA: Rate <60, regular, normal P waves — normal in athletes, causes: vagal tone, inferior MI, hypothyroidism, drugs (beta-blockers, digoxin, CCBs). Treat only if symptomatic (hypotension, syncope). Atropine 0.5mg IV first-line",
      "ATRIAL FIBRILLATION (AF): Irregularly irregular rhythm, no distinct P waves (fibrillatory baseline), rate 110-160 (uncontrolled). Risk: Thromboembolism — stroke risk requires anticoagulation. Management: Rate control (beta-blockers, digoxin, diltiazem) vs rhythm control (cardioversion, antiarrhythmics)",
      "ATRIAL FLUTTER: Sawtooth P waves (flutter waves) at 300 bpm, typically 2:1, 3:1 or 4:1 conduction ratio — ventricular rate 75-150. Treatment similar to AF",
      "VENTRICULAR TACHYCARDIA (VT): Wide complex (QRS >0.12), regular, rate >100 (usually 150-250). May be pulsed (haemodynamically stable — IV amiodarone) or pulseless (treat as VF — CPR + defibrillation)",
      "VENTRICULAR FIBRILLATION (VF): Chaotic, no organised waveform, no cardiac output — CARDIAC ARREST. IMMEDIATE CPR and DEFIBRILLATION. No pulse = CPR first, defibrillate as soon as AED/defibrillator available",
      "HEART BLOCKS: 1st degree (prolonged PR >0.20) — benign. 2nd degree Mobitz I/Wenckebach (progressively lengthening PR, then dropped QRS) — usually benign. 2nd degree Mobitz II (fixed PR, then dropped QRS) — risk of complete block. 3rd degree/Complete (no relationship between P waves and QRS) — pacemaker required",
      "PULSELESS ELECTRICAL ACTIVITY (PEA): Organised electrical activity on monitor but NO pulse — treat REVERSIBLE CAUSES (4Hs and 4Ts): Hypoxia, Hypovolaemia, Hypothermia, Hypo/Hyperkalaemia, Tension pneumothorax, Tamponade, Toxins, Thrombosis",
    ],
  },
  {
    title: "Hypertension — Classification and Crisis",
    icon: "🩺",
    color: "orange",
    content: [
      "BLOOD PRESSURE CLASSIFICATION (AHA 2017): Normal <120/80. Elevated 120-129/<80. Stage 1 HTN 130-139/80-89. Stage 2 HTN ≥140/90. Hypertensive Crisis ≥180/120",
      "HYPERTENSIVE URGENCY: BP ≥180/120 WITHOUT acute end-organ damage. Oral medications, gradual reduction over 24-48 hours",
      "HYPERTENSIVE EMERGENCY: BP ≥180/120 WITH acute end-organ damage — neurological (hypertensive encephalopathy, stroke, haemorrhage), cardiac (MI, acute HF, aortic dissection), renal (AKI), ophthalmological (papilloedema, haemorrhages)",
      "HYPERTENSIVE EMERGENCY MANAGEMENT: IV medications (labetalol, nicardipine, hydralazine, sodium nitroprusside), ICU admission, continuous arterial line monitoring",
      "GOAL OF BP REDUCTION in emergency: Reduce MAP by no more than 25% in the first hour — too rapid a reduction causes cerebral, coronary or renal ischaemia",
      "SODIUM NITROPRUSSIDE: Most potent IV antihypertensive. Arterial and venous dilator. CYANIDE TOXICITY risk with prolonged use (>48-72 hours) or renal failure — monitor thiocyanate levels, use sodium thiosulfate",
      "AORTIC DISSECTION: Tearing/ripping chest pain radiating to back, BP differential between arms >20 mmHg, widened mediastinum on CXR. TYPE A (ascending) = surgery. TYPE B (descending) = medical management. Goal: SBP <120 mmHg immediately using beta-blockers FIRST (reduce HR and dp/dt) then vasodilators",
      "SECONDARY HYPERTENSION causes: Renal artery stenosis, primary hyperaldosteronism, phaeochromocytoma (episodic hypertension, headache, palpitations, diaphoresis — 'spells'), coarctation of aorta, sleep apnoea, thyroid disease",
    ],
  },
  {
    title: "Peripheral Vascular Disease",
    icon: "🦵",
    color: "blue",
    content: [
      "PERIPHERAL ARTERIAL DISEASE (PAD): Atherosclerotic occlusion of peripheral arteries — most commonly lower limbs",
      "PAD SYMPTOMS: Intermittent claudication (reproducible calf/buttock pain with walking that relieves with rest), rest pain (severe — indicates critical ischaemia), non-healing ulcers, gangrene",
      "PAD ASSESSMENT: Ankle-Brachial Index (ABI) — ratio of ankle to brachial systolic pressure. Normal >1.0, Mild PAD 0.7-0.9, Moderate 0.5-0.7, Severe <0.5, Critical ischaemia <0.4",
      "6 P's of ACUTE ARTERIAL OCCLUSION: Pain (sudden severe), Pallor, Pulselessness, Paraesthesia (numbness — indicates nerve ischaemia), Paralysis (late sign — muscle ischaemia), Poikilothermia (coolness)",
      "ACUTE ARTERIAL OCCLUSION: Surgical emergency — embolectomy or thrombolysis within 4-6 hours before irreversible ischaemia. Anticoagulate immediately with heparin",
      "DEEP VEIN THROMBOSIS (DVT): Venous thrombosis — usually lower limb (calf, popliteal, femoral, iliac). Risk factors: Virchow's triad — stasis, hypercoagulability, endothelial damage",
      "DVT SYMPTOMS: Unilateral calf swelling, warmth, redness, tenderness, Homan's sign (calf pain on dorsiflexion — unreliable test). Wells Score + D-dimer to assess probability",
      "DVT TREATMENT: Anticoagulation (LMWH or DOACs first-line), elevation of limb, compression stockings. NEVER massage a suspected DVT (risk of embolisation)",
      "PULMONARY EMBOLISM (PE): DVT embolises to pulmonary vasculature — sudden dyspnoea, pleuritic chest pain, tachycardia, haemoptysis, hypoxia, right heart strain. Massive PE = cardiovascular collapse. Treatment: Anticoagulation, thrombolysis for massive PE with haemodynamic compromise",
    ],
  },
  {
    title: "Cardiac Monitoring and Interpretation",
    icon: "📈",
    color: "green",
    content: [
      "ECG INTERPRETATION approach: Rate → Rhythm → P waves → PR interval → QRS complex → ST segment → T waves → QT interval",
      "RATE calculation: Regular rhythm — 300 ÷ number of large squares between R waves. Or: 1500 ÷ number of small squares between R waves",
      "QT INTERVAL: Represents ventricular depolarisation and repolarisation. Normal <440ms men, <460ms women. PROLONGED QT = risk of Torsades de Pointes (polymorphic VT) → VF → sudden cardiac death",
      "CAUSES of QT prolongation: Medications (macrolides, fluoroquinolones, antipsychotics, ondansetron, amiodarone, sotalol), electrolyte abnormalities (hypokalaemia, hypomagnesaemia, hypocalcaemia), congenital long QT syndrome, hypothyroidism",
      "ST SEGMENT changes: ST ELEVATION = STEMI (current injury) OR pericarditis (diffuse saddle-shaped, no reciprocal changes) OR Prinzmetal angina. ST DEPRESSION = NSTEMI, subendocardial ischaemia, digoxin effect",
      "TELEMETRY NURSING: Recognise life-threatening rhythms (VF, VT, complete heart block), respond rapidly, document rhythm strips with patient assessment",
      "HAEMODYNAMIC MONITORING: CVP (central venous pressure) — reflects right heart preload. PCWP (pulmonary capillary wedge pressure) — reflects left heart preload. Arterial line — continuous BP, frequent ABGs",
      "DEFIBRILLATION vs CARDIOVERSION: Defibrillation = unsynchronised, for VF/pulseless VT. Cardioversion = synchronised to QRS (avoids R-on-T), for AF, flutter, stable VT. Nurse's role: ensure safety ('all clear'), note energy settings, monitor post-procedure rhythm and haemodynamic status",
    ],
  },
  {
    title: "Cardiac Surgery and Procedures",
    icon: "🏥",
    color: "purple",
    content: [
      "CORONARY ARTERY BYPASS GRAFTING (CABG): Surgical revascularisation using conduits (saphenous vein, internal mammary artery). On-pump (cardiopulmonary bypass) or off-pump",
      "POST-CABG COMPLICATIONS: Bleeding (monitor chest tube drainage — >200mL/hr = concerning), cardiac tamponade (Beck's triad: hypotension, muffled heart sounds, JVD), arrhythmias (especially AF — most common post-cardiac surgery), sternal wound infection, neurological complications (stroke, cognitive changes from bypass)",
      "CARDIAC TAMPONADE: Fluid accumulation in pericardial sac compresses heart → ↓CO. Beck's triad: JVD, muffled heart sounds, hypotension. Pulsus paradoxus (SBP drop >10 mmHg on inspiration). Treatment: Urgent pericardiocentesis",
      "PERCUTANEOUS CORONARY INTERVENTION (PCI): Balloon angioplasty ± stent placement. Post-procedure: Monitor arterial access site (radial or femoral) for haematoma/bleeding, check pulses distal to access site, maintain bed rest if femoral, hydration post-contrast",
      "PACEMAKERS: Temporary (transcutaneous, transvenous) or permanent. Failure to capture (no QRS after spike), failure to sense (fires when should not), failure to pace (no pacemaker spikes when expected). Avoid MRI (unless MRI-safe device). Avoid strong electromagnetic fields",
      "IMPLANTABLE CARDIOVERTER DEFIBRILLATOR (ICD): Detects and treats VT/VF with antitachycardia pacing or shock. Patient education: Avoid certain activities (heavy lifting initially), carry device ID card, know what to do if shocked, avoid strong magnets",
      "VALVE REPLACEMENT: Mechanical (lifelong warfarin — INR 2.5-3.5) vs biological/tissue (no anticoagulation long-term but shorter lifespan — 10-20 years)",
    ],
  },
];

const mnemonics = [
  {
    title: "Acute HF Management",
    acronym: "LMNOP",
    breakdown: ["Lasix (furosemide)", "Morphine (cautious)", "Nitrates (vasodilation)", "Oxygen", "Position (high Fowler's)"],
    memory: "LMNOP for acute decompensated heart failure — Position upright is the FIRST and most important immediate nursing intervention!",
    color: "blue",
  },
  {
    title: "Acute MI Initial Management",
    acronym: "MONA",
    breakdown: ["Morphine (pain relief)", "Oxygen (if SpO2 <94%)", "Nitrates (vasodilation)", "Aspirin (300mg chewed)"],
    memory: "MONA greets every MI patient — Aspirin is the MOST important (chewed for fastest absorption). Oxygen ONLY if SpO2 <94%!",
    color: "red",
  },
  {
    title: "Acute Arterial Occlusion — 6 P's",
    acronym: "6Ps",
    breakdown: ["Pain (sudden severe)", "Pallor", "Pulselessness", "Paraesthesia (numbness)", "Paralysis (late)", "Poikilothermia (coolness)"],
    memory: "6 P's = acute limb ischaemia emergency! Paraesthesia and Paralysis indicate neural and muscle ischaemia — irreversible if not treated within 6 hours!",
    color: "purple",
  },
  {
    title: "Cardiac Tamponade — Beck's Triad",
    acronym: "MHJ",
    breakdown: ["Muffled heart sounds", "Hypotension", "JVD (jugular venous distension)"],
    memory: "MHJ — Muffled, Hypotension, JVD = Cardiac Tamponade. Pericardiocentesis is the emergency treatment!",
    color: "red",
  },
  {
    title: "PEA Reversible Causes",
    acronym: "4H4T",
    breakdown: ["Hypoxia", "Hypovolaemia", "Hypothermia", "Hypo/Hyperkalaemia", "Tension pneumothorax", "Tamponade", "Toxins", "Thrombosis (PE/MI)"],
    memory: "4H4T — when you see PEA on the monitor with no pulse, search for these 8 reversible causes immediately!",
    color: "orange",
  },
];

const alerts = [
  { text: "RIGHT VENTRICULAR MI: Give IV FLUIDS — not diuretics or nitrates! Nitrates/diuretics reduce preload and cause catastrophic hypotension in RV MI!", severity: "high" },
  { text: "STEMI: Door-to-balloon time <90 minutes is the standard. Every minute of delay = more dead myocardium. Time is muscle!", severity: "high" },
  { text: "AORTIC DISSECTION: Give beta-blocker FIRST to reduce HR and dp/dt, THEN vasodilator. Giving a vasodilator without beta-blocker increases aortic shear forces!", severity: "high" },
  { text: "HYPERTENSIVE EMERGENCY: Reduce MAP by NO MORE than 25% in the first hour — too rapid reduction causes cerebral/coronary/renal ischaemia!", severity: "high" },
  { text: "CARDIAC TAMPONADE = Beck's Triad: Muffled heart sounds + Hypotension + JVD. Requires urgent pericardiocentesis — NOT diuretics or fluids alone!", severity: "high" },
  { text: "DIGOXIN + HYPOKALAEMIA = TOXICITY. Loop diuretics cause hypokalaemia which DRAMATICALLY increases digoxin toxicity risk. Monitor both together!", severity: "high" },
  { text: "DVT: NEVER massage a suspected DVT — risk of dislodging the clot causing pulmonary embolism!", severity: "high" },
  { text: "NITRATES are CONTRAINDICATED in: SBP <90 mmHg, RV infarction (inferior STEMI), within 24-48 hours of phosphodiesterase inhibitors (sildenafil/Viagra — fatal hypotension)!", severity: "high" },
  { text: "AF cardioversion: Anticoagulate for ≥3 weeks BEFORE elective cardioversion (AF >48 hours) OR perform TOE to exclude left atrial thrombus — cardioversion can dislodge clot causing stroke!", severity: "medium" },
  { text: "ASPIRIN for MI: Give 300mg CHEWED (not swallowed whole) — chewing significantly increases absorption speed. Faster absorption = faster platelet inhibition!", severity: "medium" },
  { text: "POST-PCI care: Monitor access site (radial or femoral) for haematoma. Check distal pulses. If femoral — maintain straight leg position per protocol!", severity: "medium" },
  { text: "S3 gallop is pathognomonic of heart failure — 'Ken-tuck-y' sound in early diastole. S4 indicates a stiff, non-compliant ventricle (hypertension, LVH)!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A nurse is caring for a patient admitted with acute decompensated heart failure. The patient is sitting upright in bed, markedly dyspnoeic with SpO2 88% on room air. Bilateral crackles are audible throughout both lung fields. What is the nurse's FIRST priority intervention?",
    options: [
      "Administer IV furosemide as ordered to reduce fluid overload",
      "Apply oxygen via non-rebreather mask and position patient in high Fowler's position",
      "Obtain a stat chest X-ray to confirm pulmonary oedema",
      "Insert a urinary catheter to accurately monitor urine output",
    ],
    correct: 1,
    explanation: "The IMMEDIATE priorities for acute decompensated HF with hypoxia are oxygen and positioning. SpO2 of 88% indicates significant hypoxia requiring IMMEDIATE oxygen supplementation via non-rebreather mask (10-15L/min). HIGH FOWLER'S position (sitting upright 45-90°) reduces venous return to the heart (reduces preload), allows the diaphragm to descend, and reduces dyspnoea immediately — this is the single most important immediate nursing intervention. While IV furosemide is essential treatment, it takes 15-30 minutes to produce diuresis. Oxygen and positioning provide immediate physiological benefit. Chest X-ray and catheter insertion are important but secondary to immediate respiratory support.",
    wrongExplanations: [
      "WRONG: IV furosemide is essential but does not provide immediate relief — diuresis takes 15-30 minutes. Oxygen and positioning must be addressed first for the hypoxic patient.",
      "",
      "WRONG: Chest X-ray confirms the diagnosis but is not the first priority when the patient is hypoxic. Treat the patient, then confirm diagnosis.",
      "WRONG: Urinary catheter is important for monitoring diuresis but is not the first priority in a hypoxic patient. Oxygenation and positioning take priority.",
    ],
  },
  {
    level: "Knowledge",
    question: "A nurse is monitoring a patient following a large anterior STEMI. The ECG shows a wide complex tachycardia at 180 bpm that appears regular. The patient is conscious, blood pressure is 88/54 mmHg and states 'I feel like I'm going to pass out.' What is the MOST appropriate immediate action?",
    options: [
      "Administer IV amiodarone 150mg over 10 minutes — first-line for stable VT",
      "Perform synchronised electrical cardioversion immediately — haemodynamically unstable VT",
      "Obtain a 12-lead ECG to confirm the rhythm before treating",
      "Administer IV adenosine 6mg — may differentiate SVT with aberrancy from VT",
    ],
    correct: 1,
    explanation: "This patient has HAEMODYNAMICALLY UNSTABLE VENTRICULAR TACHYCARDIA — wide complex tachycardia + BP 88/54 (hypotension) + near-syncope. Per ACLS guidelines: unstable VT (with a pulse but haemodynamically compromised) requires IMMEDIATE SYNCHRONISED CARDIOVERSION. Synchronisation ensures the shock is delivered on the QRS complex (not on the T wave — which would cause R-on-T and precipitate VF). Call for help, sedate if possible (etomidate, midazolam), cardiovert at 100-200J biphasic. Amiodarone is appropriate for STABLE VT — this patient is unstable. Adenosine is used for narrow complex tachycardias (SVT) — wide complex tachycardia should be treated as VT until proven otherwise.",
    wrongExplanations: [
      "WRONG: IV amiodarone is for STABLE VT (haemodynamically stable patient). This patient is unstable (BP 88/54, near-syncope) — immediate cardioversion is required, not drug therapy.",
      "",
      "WRONG: A 12-lead ECG is valuable but must not delay treatment in a haemodynamically unstable patient. Treat first in an emergency — the clinical picture (wide complex, unstable) is sufficient to act.",
      "WRONG: Adenosine is contraindicated in wide complex tachycardia of unknown origin — if it IS VT, adenosine will not terminate it and can cause deterioration. Treat wide complex tachycardia with haemodynamic instability as VT.",
    ],
  },
  {
    level: "Application",
    question: "A 68-year-old male patient with a history of hypertension presents with sudden onset severe tearing chest pain radiating to his back between the shoulder blades. His blood pressure is 178/96 in the right arm and 140/82 in the left arm. He is diaphoretic and the chest X-ray shows a widened mediastinum. The physician suspects aortic dissection. Which intervention should the nurse prepare for FIRST?",
    options: [
      "Prepare for thrombolysis — aortic dissection requires immediate fibrinolytic therapy",
      "Administer IV labetalol to reduce heart rate and blood pressure — beta-blockade is the priority in aortic dissection",
      "Prepare the patient for urgent PCI — coronary artery involvement must be excluded",
      "Administer IV nitroprusside immediately to achieve rapid blood pressure reduction",
    ],
    correct: 1,
    explanation: "AORTIC DISSECTION management priority: BETA-BLOCKER FIRST to reduce heart rate AND the rate of rise of arterial pressure (dp/dt — the shear force causing propagation of the dissection). Target HR <60 bpm. IV labetalol (combined alpha and beta blocker) is ideal. THEN add vasodilator if BP remains elevated. The sequence is critical: giving a vasodilator WITHOUT beta-blockade causes reflex tachycardia which INCREASES dp/dt and worsens dissection propagation. Thrombolysis (Option A) is ABSOLUTELY CONTRAINDICATED in aortic dissection — it would cause catastrophic haemorrhage. Nitroprusside (Option D) is a vasodilator — can be added AFTER beta-blockade, not first. Type A dissection (ascending) requires emergency surgery; Type B (descending) is managed medically.",
    wrongExplanations: [
      "WRONG: Thrombolysis is absolutely CONTRAINDICATED in aortic dissection — it would cause massive haemorrhage into the aortic wall and surrounding structures. This is one of the most dangerous errors in emergency medicine.",
      "",
      "WRONG: PCI is for coronary artery occlusion — not aortic dissection. While dissection can involve coronary ostia, the immediate priority is BP and HR control, not PCI.",
      "WRONG: Nitroprusside (vasodilator) should NOT be given first in aortic dissection — it causes reflex tachycardia which increases dp/dt and propagates the dissection. Beta-blocker MUST be given first.",
    ],
  },
  {
    level: "Application",
    question: "A patient with newly diagnosed atrial fibrillation has a ventricular rate of 142 bpm and is haemodynamically stable (BP 118/76). The physician plans to cardiovert the patient to sinus rhythm. The nurse reviews the medical record and notes the AF onset is unknown — the patient cannot recall when symptoms started. What is the nurse's MOST important concern before cardioversion proceeds?",
    options: [
      "The patient's potassium level — hypokalaemia increases cardioversion failure risk",
      "Cardioversion in AF of unknown duration (potentially >48 hours) carries a risk of dislodging left atrial thrombus causing stroke — anticoagulation for ≥3 weeks or TOE to exclude thrombus is required before elective cardioversion",
      "The patient's consent for the procedure and understanding of the risks",
      "Whether the patient has taken digoxin recently — digoxin toxicity increases cardioversion risk",
    ],
    correct: 1,
    explanation: "This is a CRITICAL PATIENT SAFETY ISSUE. AF of unknown duration (or >48 hours) is associated with LEFT ATRIAL THROMBUS formation — particularly in the left atrial appendage. Electrical cardioversion restores sinus rhythm, which causes the left atrium to contract more effectively — this can DISLODGE a pre-existing thrombus, causing STROKE or systemic embolism. GUIDELINES require: EITHER therapeutic anticoagulation for ≥3 weeks before elective cardioversion, OR a TOE (transoesophageal echocardiogram) to exclude left atrial thrombus before proceeding. The nurse must communicate this concern to the physician before proceeding. If the patient were haemodynamically unstable, the risk-benefit calculation changes (cardiovert immediately despite the risk).",
    wrongExplanations: [
      "WRONG: Potassium level is important for cardioversion success but is not the priority safety concern in this scenario. The stroke risk from undiscovered atrial thrombus is the most critical issue.",
      "",
      "WRONG: Informed consent is essential but secondary to identifying a potentially fatal procedural risk. The nurse must communicate the safety concern about thrombus risk to the physician first.",
      "WRONG: Digoxin and cardioversion is a concern (toxicity increases risk of post-cardioversion arrhythmia) but is not the PRIMARY critical safety concern in this scenario. The stroke risk from thrombus is the priority.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a patient admitted with an inferior STEMI. After primary PCI, the patient develops hypotension (BP 82/50), elevated JVD, clear lungs and bradycardia (HR 48). The right-sided ECG shows ST elevation in V4R. Which intervention is MOST appropriate?",
    options: [
      "Administer IV furosemide — the elevated JVD indicates fluid overload",
      "Administer sublingual nitroglycerin — chest pain should be treated with nitrates",
      "Administer IV fluids (normal saline bolus) and atropine for the bradycardia — right ventricular MI requires volume loading, not diuretics or nitrates",
      "Position in high Fowler's and start IV dobutamine — this is cardiogenic shock",
    ],
    correct: 2,
    explanation: "This patient has RIGHT VENTRICULAR INFARCTION — the classic presentation: inferior STEMI + hypotension + elevated JVD + CLEAR LUNGS (no pulmonary oedema) + ST elevation in V4R (right-sided lead). PATHOPHYSIOLOGY: The right ventricle cannot pump blood forward effectively — it becomes dilated. The RV is PRELOAD-DEPENDENT — it needs adequate filling pressure (volume) to generate output. MANAGEMENT: IV FLUIDS (normal saline bolus 250-500mL) to optimise RV preload is the priority. Bradycardia from inferior MI (vagal) → atropine 0.5mg. AVOID: Diuretics (reduce preload → catastrophic hypotension), nitrates (venodilators → reduce preload → hypotension), morphine (vasodilation → reduced preload). Dobutamine may be needed if volume unresponsive but fluids come first.",
    wrongExplanations: [
      "WRONG: Furosemide REDUCES preload — in RV MI, the RV is preload-dependent and needs VOLUME, not diuresis. Furosemide in RV MI causes catastrophic hypotension.",
      "WRONG: Nitroglycerin is CONTRAINDICATED in RV MI — it causes venodilation, reduces preload and causes severe hypotension. This is one of the most dangerous errors in RV MI management.",
      "",
      "WRONG: High Fowler's position reduces venous return (preload) — contraindicated in RV MI. The patient needs to be kept supine or in Trendelenburg to maximise venous return to the preload-dependent RV.",
    ],
  },
  {
    level: "Advanced",
    question: "A 72-year-old woman with a history of hypertension, diabetes and atrial fibrillation on warfarin (INR 2.4) presents with sudden onset left-sided weakness, facial droop and slurred speech of 90 minutes duration. CT head shows no haemorrhage. Her BP is 184/102. The stroke team is discussing IV tPA. Her current medications include warfarin, metformin and lisinopril. What is the MOST critical factor the nurse should communicate to the stroke team regarding tPA eligibility?",
    options: [
      "Her age (72) — elderly patients have higher tPA complication rates",
      "Her BP of 184/102 — this is too high for tPA and must be reduced first",
      "Her INR of 2.4 — this EXCEEDS the tPA contraindication threshold of >1.7 for warfarin use",
      "Her diabetes — hyperglycaemia worsens stroke outcomes and must be corrected before tPA",
    ],
    correct: 2,
    explanation: "INR of 2.4 EXCEEDS the absolute contraindication threshold for IV tPA. Current guidelines state that patients on warfarin with INR >1.7 have an ABSOLUTE CONTRAINDICATION to IV tPA — the bleeding risk (particularly intracranial haemorrhage) is unacceptably high. This is the most critical information the nurse must communicate. BP of 184/102 while elevated is NOT an absolute contraindication (the threshold for non-treated hypertension is SBP >185 or DBP >110 — this BP is just at the threshold and can be carefully lowered to allow tPA if clinically appropriate). Age is not a contraindication. Diabetes/hyperglycaemia affects outcomes but is not a tPA contraindication. The nurse's timely communication of the INR 2.4 could prevent a potentially fatal intracranial haemorrhage.",
    wrongExplanations: [
      "WRONG: Age is not a contraindication to IV tPA in acute ischaemic stroke. The risk-benefit analysis is considered but age alone does not exclude tPA.",
      "WRONG: BP 184/102 is very close to the threshold (SBP >185 or DBP >110 = contraindication) but is NOT above the absolute threshold. Careful BP reduction to just below 185/110 may allow tPA. The INR of 2.4 is the absolute contraindication.",
      "",
      "WRONG: Hyperglycaemia affects stroke outcomes and should be managed, but it is not an absolute contraindication to tPA. The anticoagulation status (INR 2.4) is the critical contraindication.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a 58-year-old man who is day 2 post-CABG. He suddenly becomes hypotensive (BP 74/50), tachycardic (HR 122), has muffled heart sounds on auscultation, elevated JVD and the chest tube drainage has abruptly STOPPED after draining 200mL/hr for the past 2 hours. What is the MOST likely complication and PRIORITY nursing action?",
    options: [
      "Haemorrhage — increase IV fluid rate and prepare for blood transfusion",
      "Cardiac tamponade from clotted chest tube — notify the surgeon urgently, attempt to milk/strip the chest tube per order, prepare for emergency pericardiocentesis or surgical re-exploration",
      "Right ventricular failure — administer IV fluids and dobutamine",
      "Pulmonary embolism — administer anticoagulation and prepare for CT pulmonary angiography",
    ],
    correct: 1,
    explanation: "This is CARDIAC TAMPONADE caused by a clotted chest tube post-CABG — a potentially fatal emergency. Evidence: Beck's Triad (hypotension + muffled heart sounds + JVD), ABRUPT CESSATION of chest tube drainage after high output (blood clotting in the tube = blood accumulating in the pericardial sac instead of draining = tamponade). Post-CABG tamponade is a surgical emergency. PRIORITY ACTIONS: Notify surgeon IMMEDIATELY, attempt to gently milk/strip the chest tube (to dislodge the clot and restore drainage — only per institutional protocol and surgical order), prepare for emergency pericardiocentesis or return to operating theatre for surgical re-exploration. Fluid resuscitation may temporise (increase preload against the compressed heart) but definitive treatment is drainage. This is different from haemorrhage (which would continue high chest tube drainage, not stop) or PE (which presents with hypoxia and pleuritic pain).",
    wrongExplanations: [
      "WRONG: Haemorrhage would present with CONTINUED or increasing chest tube drainage — not abrupt cessation. The combination of cessation of drainage + Beck's triad = tamponade from clotted tube.",
      "",
      "WRONG: RV failure post-CABG is possible but would not present with muffled heart sounds and abrupt cessation of chest drainage. The clinical picture clearly points to tamponade.",
      "WRONG: PE is possible post-surgery but presents with hypoxia, tachycardia and pleuritic chest pain — not the combination of muffled heart sounds, JVD and abrupt cessation of chest tube drainage.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a 65-year-old woman with chronic heart failure (EF 25%) who presents with acute decompensation. Current medications include furosemide 80mg daily, lisinopril 10mg daily, carvedilol 12.5mg twice daily, spironolactone 25mg daily and digoxin 0.125mg daily. Morning labs: Na 128 mEq/L, K 3.2 mEq/L, Creatinine 2.1 mg/dL (baseline 1.4), BNP 1840 pg/mL, digoxin level 2.1 ng/mL. BP 96/58, HR 52, RR 24, SpO2 90%. Which combination of nursing actions is MOST appropriate as the priority?",
    options: [
      "Administer all scheduled medications including digoxin and carvedilol — chronic HF medications must not be interrupted",
      "Hold digoxin (level 2.1 = toxic, bradycardia HR 52), hold carvedilol (bradycardia, hypotension), hold lisinopril (AKI, hypotension), position high Fowler's, apply oxygen, notify physician urgently and prepare for IV diuresis",
      "Give IV furosemide immediately — the BNP of 1840 and clinical decompensation require urgent diuresis",
      "Administer oral potassium supplementation first — hypokalaemia must be corrected before any other intervention",
    ],
    correct: 1,
    explanation: "This critically ill patient requires multiple simultaneous priority decisions: HOLD DIGOXIN — level 2.1 ng/mL is TOXIC (therapeutic 0.5-2.0), bradycardia HR 52 is consistent with toxicity. HOLD CARVEDILOL — beta-blocker in the setting of acute decompensation, bradycardia (HR 52) and hypotension (BP 96/58) is dangerous — can worsen haemodynamics. HOLD LISINOPRIL — ACE inhibitor in AKI (creatinine 2.1 from baseline 1.4) and hypotension creates further renal and haemodynamic risk. POSITION high Fowler's for dyspnoea. OXYGEN for SpO2 90%. NOTIFY PHYSICIAN URGENTLY — toxic digoxin level, bradycardia, hypotension, hyponatraemia, AKI and acute decompensation are all present simultaneously and require urgent medical management including: IV access, continuous monitoring, IV diuresis (but physician must decide dose given AKI and hypotension), possible digoxin immune Fab. The hypokalaemia (3.2) will actually worsen digoxin toxicity and needs addressing — but IV rather than oral potassium will be needed in this acutely ill patient.",
    wrongExplanations: [
      "WRONG: Administering all scheduled medications including a toxic dose of digoxin and a beta-blocker to a bradycardic, hypotensive patient is dangerous. Chronic medications must be reviewed and held when they are causing or worsening acute deterioration.",
      "",
      "WRONG: IV furosemide may be needed but in the context of BP 96/58 and AKI, it requires physician assessment first. Giving furosemide to a hypotensive patient can worsen haemodynamics. This is not the first priority — the toxic digoxin and bradycardia are.",
      "WRONG: Oral potassium is too slow and insufficient for this acutely ill patient. While correcting hypokalaemia is important (especially given the digoxin toxicity), IV potassium is needed and requires physician order. It is not the first priority action — safety (holding the toxic digoxin and beta-blocker) and notification come first.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is performing ECG monitoring on a patient receiving IV amiodarone for atrial fibrillation. The nurse notices the QTc interval has progressively increased from 420ms to 560ms over the past 6 hours. The patient is asymptomatic. What is the nurse's MOST appropriate action?",
    options: [
      "Continue monitoring — QTc prolongation with amiodarone is expected and not clinically significant",
      "Notify the physician immediately — QTc of 560ms represents dangerous QT prolongation that significantly increases risk of Torsades de Pointes (TdP) and VF",
      "Administer IV magnesium sulfate independently — this is the treatment for QT prolongation",
      "Increase the amiodarone infusion rate — a faster rate will cardiovert the AF and the QT will normalise",
    ],
    correct: 1,
    explanation: "QTc of 560ms represents DANGEROUS QT PROLONGATION. Normal QTc: <440ms (men), <460ms (women). A QTc >500ms dramatically increases the risk of TORSADES DE POINTES (TdP) — a polymorphic ventricular tachycardia that can degenerate to VF and sudden cardiac death. Amiodarone is a class III antiarrhythmic that PROLONGS the QT interval — monitoring QTc during amiodarone therapy is essential. At 560ms the risk of TdP is significantly elevated. The nurse must: NOTIFY the physician IMMEDIATELY about the QTc of 560ms, likely actions include: slowing or stopping the amiodarone infusion, checking and correcting electrolytes (hypokalaemia, hypomagnesaemia accelerate TdP risk), continuous telemetry monitoring. IV magnesium is the treatment for TdP — but the nurse should not administer it independently without a physician order in this non-emergency context.",
    wrongExplanations: [
      "WRONG: QTc of 560ms is NOT 'expected' — while amiodarone does prolong QT, a QTc of 560ms is dangerously prolonged and represents an acute safety concern requiring physician notification, not passive monitoring.",
      "",
      "WRONG: IV magnesium may be indicated but should not be administered independently without a physician order in a stable patient. Physician notification is the correct first action.",
      "WRONG: Increasing the amiodarone infusion rate would worsen QT prolongation and dramatically increase the risk of TdP. This is the opposite of the correct action.",
    ],
  },
  {
    level: "Advanced",
    question: "A 55-year-old man develops sudden severe dyspnoea 5 days after a large anterior MI. On examination: RR 32, SpO2 85%, BP 88/54, HR 128, new loud harsh holosystolic murmur at the left sternal border, bilateral crackles and marked JVD. He has not had any fever. Which complication is MOST likely and what is the PRIORITY nursing action?",
    options: [
      "Pulmonary embolism — anticoagulate with IV heparin and prepare for CT-PA",
      "Post-MI pericarditis (Dressler syndrome) — administer NSAIDs and corticosteroids",
      "Ventricular septal rupture — notify physician urgently, prepare for haemodynamic support (vasopressors, intra-aortic balloon pump), urgent cardiothoracic surgery consultation",
      "Acute mitral regurgitation from papillary muscle rupture — same urgent management as VSD",
    ],
    correct: 2,
    explanation: "The NEW HARSH HOLOSYSTOLIC MURMUR at the LEFT STERNAL BORDER in the context of acute anterior MI + haemodynamic collapse (BP 88/54) + pulmonary oedema + JVD is CLASSIC for VENTRICULAR SEPTAL RUPTURE (VSR). The VSD creates a left-to-right shunt: oxygenated blood recirculates from LV through the defect to RV → causes volume overload of both ventricles, pulmonary hypertension and right heart failure (JVD) and reduced systemic output (shock). The murmur of VSD is at the left sternal border (over the septum). PAPILLARY MUSCLE RUPTURE causing acute MR is also possible (same emergency level) — its murmur is at the apex radiating to the axilla. Both are surgical emergencies. PRIORITY: Notify physician and cardiothoracic surgeon URGENTLY, prepare vasopressors (maintain perfusion without increasing afterload — vasodilators are preferred if BP allows), prepare for intra-aortic balloon pump (reduces afterload, improves coronary perfusion), urgent surgical repair is definitive treatment.",
    wrongExplanations: [
      "WRONG: PE presents with pleuritic chest pain, hypoxia and tachycardia — but not with a new harsh systolic murmur. The murmur is the key differentiating feature pointing to a mechanical complication of MI.",
      "WRONG: Dressler syndrome (post-MI pericarditis) presents with pleuritic chest pain, fever and a friction rub — not a holosystolic murmur and cardiogenic shock. Timing (2-6 weeks post-MI) also differs.",
      "",
      "WRONG: Both VSD and papillary muscle rupture are correct diagnoses to consider — but VSD is more likely given the murmur location (left sternal border vs apex for MR). The management is similar for both: urgent surgical repair. This option is partially correct but VSD with its specific murmur location is the most likely answer.",
    ],
  },
];

const clinicalPearls = [
  "The most important thing to know about right ventricular MI: fluids save lives, diuretics and nitrates kill. Every inferior STEMI should prompt you to get right-sided ECG leads (V4R) and ask the question — is the RV involved? If yes, flip your entire management strategy — volume in, vasodilators out.",
  "QT prolongation is a silent killer. It has no symptoms until it kills. Many drugs prolong the QT — amiodarone, sotalol, haloperidol, ondansetron, azithromycin, fluoroquinolones. Combinations are synergistic. Hypokalaemia and hypomagnesaemia accelerate TdP. Monitor the QTc in every patient on QT-prolonging drugs.",
  "The cessation of chest tube drainage post-cardiac surgery is not reassuring — it should be alarming. Blood accumulating in the pericardial space instead of draining through the tube = tamponade. Know Beck's triad cold and act immediately when chest tube output abruptly stops after being high.",
  "Atrial fibrillation cardioversion and the unknown onset: stroke is the consequence of cardioverting AF with a left atrial thrombus. If you do not know when the AF started — anticoagulate for 3 weeks or get a TOE first. This is not bureaucracy — it is preventing iatrogenic stroke.",
  "BNP tells you how sick the heart failure is — it does not tell you why it decompensated. Always look for the PRECIPITANT: non-compliance with medications or diet (most common), infection (pneumonia, UTI), arrhythmia (new AF), MI, anaemia, thyroid disease. Treating the precipitant is as important as treating the decompensation.",
  "The early morning is the most dangerous time for cardiac events — catecholamine surge, platelet aggregability peaks, BP rises. Patients with unstable angina, recent MI and known severe coronary disease need their cardiac medications administered on time. A missed morning beta-blocker in an unstable patient can trigger an event.",
  "In cardiogenic shock — dopamine and noradrenaline maintain blood pressure but increase afterload and myocardial oxygen demand. Dobutamine increases contractility but can cause hypotension. The intra-aortic balloon pump (IABP) does both: inflates in diastole (increases diastolic perfusion pressure, improves coronary flow) and deflates in systole (reduces afterload). Understanding this logic is what separates nurses who understand from nurses who just follow orders.",
];

export default function CardiovascularPage() {
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
    if (index === filteredQuestions[currentQuestion].correct) setScore(score + 1);
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
          <button onClick={() => router.back()}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors font-bold">←</button>
          <div className="flex-1">
            <h1 className="font-black text-base text-gray-900">❤️ Cardiovascular</h1>
            <p className="text-xs text-gray-500">Physiological Integrity • High Yield ⭐⭐⭐</p>
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
                ❤️ Cardiovascular is one of the highest yield topics on NCLEX. Master heart failure management, acute MI response, arrhythmia recognition and hypertensive emergencies!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most critical cardiovascular safety points — these save lives and appear on NCLEX!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Cardiovascular Nursing!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review RV MI management, arrhythmia treatment and HF medications." :
                        "Keep studying! Focus on heart failure management, acute MI response and arrhythmia recognition."}
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
                  <div className="h-full bg-blue-500 rounded-full transition-all"
                    style={{ width: `${(currentQuestion / filteredQuestions.length) * 100}%` }} />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-4 shadow-sm">
                  <p className="font-semibold text-gray-800 leading-relaxed whitespace-pre-line">
                    {filteredQuestions[currentQuestion].question}
                  </p>
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