"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Pharmacology for NCLEX",
    icon: "💊",
    color: "blue",
    content: [
      "Pharmacology questions appear throughout ALL sections of NCLEX — not just in a dedicated pharmacology section",
      "NCLEX tests: Mechanisms of action, expected therapeutic effects, adverse effects, contraindications, drug interactions, nursing responsibilities and patient education",
      "PHARMACOKINETICS (what the body does to the drug): Absorption, Distribution, Metabolism, Excretion (ADME)",
      "PHARMACODYNAMICS (what the drug does to the body): Mechanism of action, receptor binding, therapeutic and adverse effects",
      "HALF-LIFE: Time for plasma concentration to decrease by 50%. 4-5 half-lives = drug reaches steady state AND drug is essentially eliminated",
      "THERAPEUTIC INDEX: Ratio of toxic dose to therapeutic dose. NARROW therapeutic index drugs require careful monitoring: digoxin, lithium, warfarin, phenytoin, aminoglycosides, vancomycin, theophylline",
      "RENAL and HEPATIC function: Most drugs eliminated renally or hepatically — impairment requires dose adjustment. Elderly patients have reduced renal and hepatic function — higher toxicity risk",
      "The FIVE RIGHTS (minimum): Right patient, right drug, right dose, right route, right time. Extended rights include: right documentation, right reason, right response, right education, right to refuse",
    ],
  },
  {
    title: "Cardiac Glycosides — Digoxin",
    icon: "❤️",
    color: "red",
    content: [
      "DIGOXIN (Lanoxin): Cardiac glycoside — used for heart failure (increases contractility) and atrial fibrillation/flutter (slows ventricular rate)",
      "MECHANISM: Inhibits Na/K-ATPase pump → increases intracellular calcium → positive inotropy (increased contractility). Also increases vagal tone → slows AV conduction (negative chronotropy)",
      "THERAPEUTIC RANGE: 0.5-2.0 ng/mL. Toxic range: >2.0 ng/mL. NARROW THERAPEUTIC INDEX — small changes in dose cause significant changes in effect",
      "ASSESSMENT BEFORE ADMINISTRATION: Check apical pulse for full 60 seconds. HOLD if pulse <60 bpm (adults) or per specific order. Check most recent digoxin level and potassium level",
      "HYPOKALAEMIA INCREASES DIGOXIN TOXICITY: Potassium and digoxin compete for the same receptor — low potassium = more receptor sites for digoxin = toxicity at lower levels",
      "DIGOXIN TOXICITY SIGNS: Early — nausea, vomiting, anorexia, bradycardia, visual disturbances (yellow-green halos, blurred vision). Life-threatening — heart block, ventricular arrhythmias",
      "DIGOXIN TOXICITY TREATMENT: Stop digoxin, correct hypokalaemia (if present), cardiac monitoring, Digoxin Immune Fab (Digibind/DigiFab) for severe toxicity — binds and inactivates digoxin",
      "DRUG INTERACTIONS: Amiodarone, quinidine, verapamil, diltiazem all INCREASE digoxin levels. Antacids, cholestyramine decrease absorption",
      "PATIENT EDUCATION: Take pulse before each dose (withhold and call if <60), report nausea/visual changes, maintain consistent potassium intake, regular blood level monitoring",
    ],
  },
  {
    title: "Antihypertensives — Major Classes",
    icon: "🩸",
    color: "purple",
    content: [
      "ACE INHIBITORS (-pril): Captopril, lisinopril, enalapril, ramipril. Block ACE → reduce angiotensin II → vasodilation + aldosterone reduction → lower BP + reduce preload/afterload",
      "ACE INHIBITOR side effects: DRY COUGH (most common — angioedema of cough receptors, 10-15%), ANGIOEDEMA (life-threatening — face, lips, tongue, throat — stop immediately, give epinephrine), hyperkalaemia, first-dose hypotension, teratogenic",
      "ARBs (-sartan): Losartan, valsartan, irbesartan. Block angiotensin II receptor. Similar benefits to ACEi WITHOUT the cough. Same hyperkalaemia and teratogenic risks",
      "BETA-BLOCKERS (-olol): Metoprolol, atenolol, carvedilol, propranolol. Block beta-adrenergic receptors → reduce HR, contractility and renin release",
      "Beta-blocker contraindications: Acute decompensated asthma/COPD (bronchospasm), heart block >1st degree, cardiogenic shock, severe bradycardia. NEVER stop abruptly — rebound hypertension and tachycardia",
      "Beta-blocker MASKS hypoglycaemia symptoms (tachycardia) — important in diabetic patients. Monitor glucose carefully",
      "CALCIUM CHANNEL BLOCKERS (CCBs): Dihydropyridines (amlodipine, nifedipine) = peripheral vasodilation, minimal cardiac effect. Non-dihydropyridines (diltiazem, verapamil) = AV node slowing + vasodilation",
      "DIURETICS: Thiazides (hydrochlorothiazide) — first-line HTN, hypokalaemia, hyperuricaemia. Loop diuretics (furosemide) — powerful diuresis, hypokalaemia, ototoxicity. Potassium-sparing (spironolactone) — hyperkalaemia risk",
      "ALPHA-1 BLOCKERS (prazosin, doxazosin): First-dose orthostatic hypotension — give first dose at bedtime! Used for hypertension and BPH",
    ],
  },
  {
    title: "Anticoagulants — Heparin, Warfarin and DOACs",
    icon: "🩸",
    color: "red",
    content: [
      "HEPARIN (unfractionated): Activates antithrombin III → inactivates thrombin and Factor Xa. IV or SC route. Monitor: aPTT (therapeutic 60-100 seconds, or 1.5-2.5x control). Antidote: PROTAMINE SULFATE",
      "LMWH (Low Molecular Weight Heparin): Enoxaparin (Clexane), dalteparin. More predictable response than unfractionated heparin. Monitor: Anti-Xa levels (not routine aPTT). Antidote: Protamine sulfate (partial reversal only)",
      "WARFARIN (Coumadin): Vitamin K antagonist — inhibits synthesis of clotting factors II, VII, IX, X. Oral. Monitor: INR (target 2-3 for most indications, 2.5-3.5 for mechanical heart valves). Antidote: VITAMIN K (slow reversal) or FFP (rapid reversal)",
      "Warfarin interactions: MANY — antibiotics (alter gut flora, reduce Vitamin K), NSAIDs, aspirin, many foods. CONSISTENT Vitamin K intake is key — do NOT eliminate, maintain consistency",
      "DOACs (Direct Oral Anticoagulants): Rivaroxaban (Xarelto), apixaban (Eliquis), dabigatran (Pradaxa), edoxaban. Predictable effect, no routine monitoring needed. Antidotes: Idarucizumab for dabigatran (Praxbind), andexanet alfa for Factor Xa inhibitors",
      "HEPARIN-INDUCED THROMBOCYTOPENIA (HIT): Paradoxical THROMBOSIS (not bleeding) with platelet drop >50% from baseline. Stop ALL heparin immediately (including flushes). Switch to direct thrombin inhibitor (argatroban, bivalirudin). NEVER give platelets",
      "BLEEDING PRECAUTIONS for all anticoagulants: Soft toothbrush, electric razor, avoid IM injections, avoid NSAIDs, apply pressure longer after venipuncture, report any unusual bleeding or bruising",
      "NCLEX tip: Know which monitor for each — aPTT for heparin, INR for warfarin, anti-Xa for LMWH, NO routine monitoring for DOACs",
    ],
  },
  {
    title: "Diuretics — Comprehensive Review",
    icon: "💧",
    color: "blue",
    content: [
      "LOOP DIURETICS (furosemide/Lasix, bumetanide, torsemide): Act at Loop of Henle — most potent. Block Na/K/2Cl cotransporter",
      "Loop diuretic uses: Heart failure, pulmonary oedema, hypertension, hypercalcaemia, renal failure",
      "Loop diuretic side effects: Hypokalaemia (MOST COMMON — give potassium supplements), hyponatraemia, dehydration, orthostatic hypotension, OTOTOXICITY (especially IV rapid infusion — tinnitus, hearing loss — do not give IV push faster than 20mg/min), hyperuricaemia (gout risk)",
      "THIAZIDE DIURETICS (hydrochlorothiazide HCTZ, chlorthalidone): Act at distal convoluted tubule. Block NaCl cotransporter. Less potent than loop diuretics",
      "Thiazide side effects: Hypokalaemia, hyponatraemia, hyperglycaemia (worsen diabetes), hyperuricaemia, hyperlipidaemia, HYPERCALCAEMIA (thiazides RETAIN calcium — opposite to loop diuretics which EXCRETE calcium)",
      "POTASSIUM-SPARING DIURETICS: Spironolactone (aldosterone antagonist), amiloride, triamterene. Block sodium reabsorption in collecting duct without potassium excretion",
      "Potassium-sparing side effects: HYPERKALAEMIA — avoid potassium supplements and potassium-rich foods. Spironolactone also causes gynaecomastia (anti-androgen effect)",
      "CARBONIC ANHYDRASE INHIBITORS (acetazolamide): Used for glaucoma, altitude sickness, some epilepsy. Causes metabolic acidosis (HCO3 wasted in urine)",
      "NURSING: Weigh daily, monitor electrolytes, orthostatic BP, urine output, oedema assessment. Administer morning to prevent nocturia",
    ],
  },
  {
    title: "Antibiotics — Major Classes and Key Facts",
    icon: "🦠",
    color: "green",
    content: [
      "PENICILLINS (amoxicillin, ampicillin, piperacillin-tazobactam): Beta-lactam — inhibit cell wall synthesis. Broad spectrum. Allergy in 5-10% of population. Cross-reactivity with cephalosporins (1-2% in penicillin-allergic patients)",
      "CEPHALOSPORINS (cephalexin, cefazolin, ceftriaxone, cefepime): Beta-lactam — inhibit cell wall synthesis. Generations (1st-5th) with increasing gram-negative coverage. Disulfiram-like reaction with alcohol (some)",
      "AMINOGLYCOSIDES (gentamicin, tobramycin, amikacin): Inhibit 30S ribosome. NEPHROTOXIC and OTOTOXIC. Narrow therapeutic index — monitor peaks and troughs. Avoid in renal failure. Synergistic with beta-lactams",
      "VANCOMYCIN: Glycopeptide — inhibit cell wall synthesis. Used for MRSA and other resistant gram-positive organisms. NEPHROTOXIC — monitor creatinine and vancomycin troughs. RED MAN SYNDROME (not allergy) — flushing, rash, hypotension from rapid infusion. Infuse over minimum 60 minutes",
      "FLUOROQUINOLONES (ciprofloxacin, levofloxacin, moxifloxacin): Inhibit DNA gyrase. Broad spectrum. TENDON RUPTURE risk (especially Achilles, in elderly and with corticosteroids). QT prolongation. Avoid in children (cartilage damage) and pregnancy",
      "MACROLIDES (azithromycin, clarithromycin, erythromycin): Inhibit 50S ribosome. QT prolongation. Drug interactions (CYP450 inhibitors — increase levels of warfarin, statins, digoxin)",
      "METRONIDAZOLE (Flagyl): Active against anaerobes and protozoa. DISULFIRAM-LIKE REACTION with alcohol (nausea, vomiting, flushing) — avoid alcohol during treatment AND 48-72 hours after. C. difficile treatment (oral)",
      "TETRACYCLINES (doxycycline, minocycline): Inhibit 30S ribosome. AVOID in pregnancy (fetal bone/tooth damage) and children <8 years. Take with water, remain upright 30 minutes (oesophageal irritation). Photosensitivity — sun protection",
      "ANTIBIOTIC STEWARDSHIP: Use narrowest spectrum effective antibiotic, complete full course, culture before starting when possible, monitor for adverse effects and resistance",
    ],
  },
  {
    title: "Antidiabetic Medications",
    icon: "💉",
    color: "orange",
    content: [
      "INSULIN types — onset, peak, duration:",
      "Rapid-acting (lispro/Humalog, aspart/NovoLog, glulisine/Apidra): Onset 15 min, Peak 1-2 hr, Duration 3-5 hr. Give immediately BEFORE meals",
      "Short-acting Regular (Humulin R, Novolin R): Onset 30-60 min, Peak 2-4 hr, Duration 5-8 hr. Give 30 minutes BEFORE meals. Only insulin safe for IV",
      "Intermediate (NPH/Humulin N): Onset 2-4 hr, Peak 4-12 hr, Duration 12-18 hr. Cloudy — mix by rolling. Hypoglycaemia risk at peak",
      "Long-acting (glargine/Lantus, detemir/Levemir, degludec/Tresiba): Onset 1-2 hr, No peak (glargine/degludec), Duration 20-24+ hr. Give at same time each day. DO NOT mix with other insulins. Clear",
      "INSULIN MIXING ORDER: 'Clear before Cloudy' — draw up regular (clear) before NPH (cloudy). Contamination of regular insulin with NPH changes its onset/peak",
      "HYPOGLYCAEMIA (BGL <4 mmol/L / <70 mg/dL): Signs — shakiness, diaphoresis, tachycardia, confusion, pallor. Treatment (15-15 rule): Give 15g fast-acting carbohydrate, recheck in 15 minutes, repeat if still low. Unconscious: IV dextrose or IM/SC glucagon",
      "METFORMIN: First-line oral agent for T2DM. Reduces hepatic glucose production. HOLD for 48 hours before and after iodinated contrast (lactic acidosis risk). Hold if eGFR <30. Common GI side effects — take with food. Does NOT cause hypoglycaemia alone",
      "SULFONYLUREAS (glipizide, glibenclamide, glimepiride): Stimulate insulin release. Can cause HYPOGLYCAEMIA — especially in elderly and with skipped meals. Weight gain",
      "GLP-1 AGONISTS (semaglutide, liraglutide, dulaglutide): Incretin mimetics — stimulate insulin, suppress glucagon, slow gastric emptying, reduce appetite. Injectable. Significant weight loss. GI side effects (nausea, vomiting). Pancreatitis risk — hold if abdominal pain",
      "SGLT-2 INHIBITORS (empagliflozin, dapagliflozin, canagliflozin): Block glucose reabsorption in kidneys → glucosuria. Cardiovascular and renal benefits. Risk: UTI, genital mycotic infections, DKA (even with near-normal glucose — euglycaemic DKA), Fournier's gangrene. Hold perioperatively",
    ],
  },
  {
    title: "Pain Medications — Opioids and Non-Opioids",
    icon: "🩹",
    color: "purple",
    content: [
      "NON-OPIOID ANALGESICS — first line for mild-moderate pain:",
      "PARACETAMOL (acetaminophen): Maximum dose 4g/day (less in liver disease, alcohol use — 2g/day). HEPATOTOXIC in overdose. Antidote: N-acetylcysteine (NAC). No anti-inflammatory effect",
      "NSAIDs (ibuprofen, naproxen, diclofenac, indomethacin, ketorolac): Anti-inflammatory, analgesic, antipyretic. Inhibit COX enzymes → reduce prostaglandins. Side effects: GI ulceration (take with food, PPIs), renal impairment (avoid in renal disease), platelet inhibition (bleeding risk), cardiovascular risk, avoid in pregnancy (especially third trimester — close ductus arteriosus)",
      "OPIOID ANALGESICS: Bind to mu, kappa, delta receptors. Potent analgesia for moderate-severe pain",
      "Morphine: Standard opioid reference. Active metabolite (morphine-6-glucuronide) accumulates in renal failure. IV, IM, SC, oral, epidural",
      "Fentanyl: 100x more potent than morphine. Patch for chronic pain (change every 72 hours). IV for acute/procedural pain. Rapid onset, short duration IV",
      "Oxycodone: Oral. Oxycontin = extended release (do NOT crush — releases full dose immediately). Percocet = oxycodone + paracetamol",
      "Hydromorphone (Dilaudid): 5-7x more potent than morphine. IV, SC, oral",
      "Codeine: Prodrug → converted to morphine by CYP2D6. Poor metabolisers get no effect; ultra-rapid metabolisers get toxicity. Avoid in children <12",
      "OPIOID SIDE EFFECTS: Respiratory depression (most dangerous), constipation (ALWAYS add bowel regimen — tolerance does NOT develop to constipation), nausea/vomiting, sedation, urinary retention, pruritus, miosis",
      "NALOXONE (Narcan): Opioid antagonist — reverses respiratory depression. Duration shorter than opioids — repeat doses may be needed. Titrate carefully — precipitates withdrawal and severe pain",
    ],
  },
  {
    title: "Antiepileptics and Neurological Drugs",
    icon: "🧠",
    color: "purple",
    content: [
      "PHENYTOIN (Dilantin): Sodium channel blocker — used for partial and generalised tonic-clonic seizures. NARROW THERAPEUTIC INDEX (10-20 mcg/mL). Zero-order kinetics — small dose increases cause large concentration increases",
      "Phenytoin toxicity: NYSTAGMUS (first sign), ataxia, diplopia, sedation, cognitive impairment. Chronic: GINGIVAL HYPERPLASIA (teach good dental hygiene), hirsutism, peripheral neuropathy, osteoporosis",
      "Phenytoin: IV — give in normal saline ONLY (precipitates in dextrose). Maximum IV rate 50mg/min (hypotension and cardiac arrhythmia risk). Monitor ECG during IV administration",
      "VALPROATE (sodium valproate/valproic acid/Epilim): Broad spectrum — absence, tonic-clonic, myoclonic, bipolar disorder. HIGHLY TERATOGENIC — neural tube defects, cognitive impairment. Hepatotoxic — monitor LFTs. Monitor levels (50-100 mcg/mL)",
      "LEVETIRACETAM (Keppra): Broad spectrum, safe in pregnancy (relatively), fewer drug interactions. Psychiatric side effects — irritability, aggression, depression",
      "CARBAMAZEPINE (Tegretol): Sodium channel blocker — partial seizures, trigeminal neuralgia, bipolar disorder. INDUCES CYP450 — reduces levels of many drugs including oral contraceptives, warfarin. SJS risk. Monitor CBC (aplastic anaemia)",
      "LAMOTRIGINE (Lamictal): Broad spectrum. STEVENS-JOHNSON SYNDROME risk — slow titration required. Reduces plasma levels of oral contraceptives",
      "BENZODIAZEPINES for acute seizures: Lorazepam (Ativan) IV = first-line for status epilepticus. Diazepam (Valium) rectal/IV. Fast acting, short duration for acute use",
      "MAGNESIUM SULFATE: First-line for eclampsia seizure prevention and treatment — NOT an antiepileptic for other seizure types",
    ],
  },
  {
    title: "Corticosteroids",
    icon: "⚗️",
    color: "orange",
    content: [
      "CORTICOSTEROIDS: Prednisone, prednisolone, methylprednisolone, dexamethasone, hydrocortisone, budesonide, beclomethasone",
      "USES: Inflammation, autoimmune conditions, allergic reactions, organ transplant, adrenal insufficiency, COPD exacerbations, asthma, cerebral oedema (dexamethasone), nausea in chemotherapy, foetal lung maturity (antenatal betamethasone)",
      "MAJOR SIDE EFFECTS (mnemonic CUSHINGOID):",
      "C — Cataracts/Cushing syndrome features",
      "U — Ulcers (peptic ulcers) — take with food or PPI",
      "S — Susceptibility to infection (immunosuppression)",
      "H — Hyperglycaemia (monitor blood glucose — may precipitate or worsen diabetes)",
      "I — Increased BP (sodium and water retention)",
      "N — Necrosis (avascular necrosis of femoral head)",
      "G — Growth retardation (children)",
      "O — Osteoporosis (long-term use — calcium and Vitamin D supplementation)",
      "I — Increased weight/appetite",
      "D — Depression/mood changes, Delayed wound healing",
      "NEVER stop corticosteroids abruptly after prolonged use — adrenal suppression causes adrenal crisis (hypotension, hypoglycaemia, shock). Taper gradually",
      "PATIENT EDUCATION: Take with food, report signs of infection (may be masked by steroids), carry medical alert, do not stop suddenly, monitor blood glucose",
    ],
  },
  {
    title: "Psychiatric Medications — Key Nursing Points",
    icon: "🔵",
    color: "blue",
    content: [
      "ANTIDEPRESSANTS — SSRIs (fluoxetine, sertraline, escitalopram): Most common side effects — nausea, insomnia, sexual dysfunction. 2-6 WEEKS for therapeutic effect. Do NOT stop abruptly (discontinuation syndrome)",
      "SEROTONIN SYNDROME: Excess serotonin — triad of altered mental status + autonomic instability + neuromuscular abnormalities (clonus, hyperreflexia). Can occur with SSRI + MAOI, SSRI + tramadol, SSRI + linezolid. Treatment: Stop offending drug, cyproheptadine",
      "MAOIs (phenelzine, tranylcypromine): Many drug and food interactions. TYRAMINE RESTRICTION (aged cheese, cured meats, red wine, fava beans). Hypertensive crisis if combined with sympathomimetics or tyramine-rich foods",
      "LITHIUM: Therapeutic range 0.6-1.2 mEq/L. Monitor: serum levels, renal function, thyroid function. Toxicity: nausea → tremor → confusion → ataxia → seizures → cardiac arrhythmia. Dehydration, NSAIDs, ACE inhibitors increase toxicity. NEVER restrict salt",
      "TYPICAL ANTIPSYCHOTICS (haloperidol, chlorpromazine): High EPS risk — akathisia, acute dystonia, pseudoparkinsonism, tardive dyskinesia. Neuroleptic Malignant Syndrome (NMS) — fever, rigidity, altered consciousness",
      "ATYPICAL ANTIPSYCHOTICS (olanzapine, quetiapine, risperidone, clozapine): Lower EPS, metabolic syndrome risk (weight gain, hyperglycaemia, dyslipidaemia). Clozapine — most effective but risk of AGRANULOCYTOSIS — mandatory WBC monitoring",
      "BENZODIAZEPINES (diazepam, lorazepam, alprazolam, clonazepam): Physical dependence — NEVER stop abruptly (seizure risk). CNS depression — respiratory depression with opioids or alcohol. Flumazenil antidote (short-acting). Beers Criteria — avoid in elderly",
      "ANTICHOLINERGIC EFFECTS (many psychiatric medications): Dry mouth, constipation, urinary retention, blurred vision, tachycardia, confusion. Especially dangerous in elderly (delirium, falls, urinary retention)",
    ],
  },
  {
    title: "Thyroid Medications",
    icon: "🦋",
    color: "green",
    content: [
      "LEVOTHYROXINE (Synthroid, T4): Synthetic thyroid hormone for hypothyroidism. Take on EMPTY STOMACH 30-60 minutes before breakfast (food and many medications reduce absorption)",
      "Levothyroxine interactions: Calcium, iron, antacids reduce absorption (separate by 4 hours). Warfarin effect enhanced. Digoxin levels reduced",
      "Signs of OVER-REPLACEMENT (hyperthyroidism): Tachycardia, weight loss, heat intolerance, tremor, anxiety, palpitations. Adjust dose",
      "PROPYLTHIOURACIL (PTU) and METHIMAZOLE: Antithyroid drugs for hyperthyroidism/Graves' disease. Block thyroid hormone synthesis. PTU preferred in pregnancy (first trimester) and thyroid storm — also blocks peripheral conversion of T4→T3",
      "Antithyroid drug side effects: Agranulocytosis (most serious — monitor for sore throat, fever — check WBC and STOP drug), rash, hepatotoxicity (PTU)",
      "POTASSIUM IODIDE (SSKI, Lugol's solution): Used before thyroid surgery and in thyroid storm. Blocks release of thyroid hormone. Take through straw (stains teeth). Dilute in water or juice",
      "RADIOACTIVE IODINE (I-131): Destroys thyroid tissue for hyperthyroidism or thyroid cancer. Radiation precautions post-treatment. Avoid close contact with pregnant women and children. May need levothyroxine post-treatment",
      "THYROID STORM emergency medications: Propylthiouracil (first), potassium iodide (after PTU), beta-blockers (propranolol — control HR), corticosteroids (reduce T4→T3 conversion), cooling, IV fluids",
    ],
  },
];

const mnemonics = [
  {
    title: "Digoxin Toxicity Signs",
    acronym: "HNABV",
    breakdown: ["Hypokalaemia increases toxicity", "Nausea/vomiting (early)", "Anorexia (early)", "Bradycardia", "Visual disturbances (yellow-green halos)"],
    memory: "Have Nausea? Anorexia? Bradycardia? Vision changes? = Digoxin toxicity! Hold dose and check potassium — hypokalaemia is the trigger!",
    color: "red",
  },
  {
    title: "Anticoagulant Monitoring",
    acronym: "HAW",
    breakdown: ["Heparin → aPTT (60-100 sec)", "Anticoagulant → Anti-Xa (LMWH)", "Warfarin → INR (2-3)"],
    memory: "HAW — Heparin=aPTT, Anti-Xa=LMWH, Warfarin=INR. DOACs need NO routine monitoring. Know this cold for NCLEX!",
    color: "red",
  },
  {
    title: "Corticosteroid Side Effects",
    acronym: "CUSHINGOID",
    breakdown: ["Cataracts", "Ulcers (peptic)", "Susceptibility to infection", "Hyperglycaemia", "Increased BP", "Necrosis (avascular)", "Growth retardation", "Osteoporosis", "Increased weight", "Depression/Delayed healing"],
    memory: "CUSHINGOID — long-term steroid use creates a Cushingoid patient. Never stop steroids abruptly after prolonged use — adrenal crisis!",
    color: "orange",
  },
  {
    title: "Insulin Types — Clear Before Cloudy",
    acronym: "CBC",
    breakdown: ["Clear = Regular and Long-acting (glargine)", "Before", "Cloudy = NPH (intermediate)"],
    memory: "Clear Before Cloudy when mixing insulins. Regular insulin (clear) drawn first to prevent contamination of the regular vial with NPH!",
    color: "blue",
  },
];

const alerts = [
  { text: "DIGOXIN: Check apical pulse for 60 seconds — HOLD if <60 bpm. Check potassium — hypokalaemia dramatically increases toxicity risk!", severity: "high" },
  { text: "ACE INHIBITOR ANGIOEDEMA: Swelling of face, lips, tongue or throat = STOP immediately, give epinephrine, emergency airway management — can be fatal!", severity: "high" },
  { text: "HEPARIN-INDUCED THROMBOCYTOPENIA (HIT): Platelet drop + THROMBOSIS (not bleeding). STOP ALL heparin — including flushes. NEVER give platelets — worsens thrombosis!", severity: "high" },
  { text: "WARFARIN: Antidote is Vitamin K — NOT protamine (that is for heparin). For warfarin: Vitamin K (slow) or FFP (rapid). For heparin: Protamine sulfate!", severity: "high" },
  { text: "METFORMIN: HOLD 48 hours before and after iodinated contrast — lactic acidosis risk. Also hold if eGFR <30!", severity: "high" },
  { text: "PHENYTOIN IV: Give in NORMAL SALINE ONLY — precipitates in dextrose. Maximum rate 50mg/min — faster causes hypotension and cardiac arrest!", severity: "high" },
  { text: "CORTICOSTEROIDS: NEVER stop abruptly after prolonged use — adrenal crisis (hypotension, shock, death). Always taper gradually!", severity: "high" },
  { text: "CLOZAPINE: Mandatory WBC monitoring for AGRANULOCYTOSIS. Sore throat + fever in a clozapine patient = check WBC immediately and HOLD drug!", severity: "high" },
  { text: "BETA-BLOCKERS: NEVER stop abruptly — rebound hypertension, tachycardia and MI risk. Also MASKS hypoglycaemia symptoms in diabetic patients!", severity: "high" },
  { text: "OPIOIDS: Constipation ALWAYS requires a bowel regimen — tolerance does NOT develop to constipation unlike other opioid side effects!", severity: "medium" },
  { text: "FLUOROQUINOLONES: TENDON RUPTURE risk especially in elderly and with concurrent corticosteroid use. Warn patients about Achilles tendon pain!", severity: "medium" },
  { text: "LEVOTHYROXINE: Take on EMPTY STOMACH 30-60 minutes before breakfast. Calcium and iron supplements reduce absorption — separate by 4 hours!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A nurse is preparing to administer digoxin 0.125mg orally to a patient with heart failure. The patient's apical pulse is 54 bpm. The most recent serum potassium is 3.1 mEq/L and the digoxin level drawn this morning is 1.8 ng/mL. What should the nurse do?",
    options: [
      "Administer the digoxin — the level is within therapeutic range",
      "Hold the digoxin, notify the physician and document findings — bradycardia and hypokalaemia increase toxicity risk",
      "Administer the digoxin with orange juice to raise the potassium level",
      "Halve the dose and administer — the pulse is slightly below normal but close enough",
    ],
    correct: 1,
    explanation: "Multiple concerning findings require HOLDING the digoxin and notifying the physician: Apical pulse of 54 bpm (hold if <60 bpm per standard protocol), potassium of 3.1 mEq/L (hypokalaemia — potassium competes with digoxin at the Na/K-ATPase receptor — low potassium means MORE receptor sites for digoxin = toxicity at therapeutic or even sub-therapeutic levels), and digoxin level 1.8 ng/mL (within range but at the higher end). The combination of bradycardia + hypokalaemia + high-normal digoxin level = significant toxicity risk. The physician must be notified to address the hypokalaemia and determine whether digoxin should be withheld. Administering in this situation could precipitate life-threatening arrhythmia.",
    wrongExplanations: [
      "WRONG: Although the digoxin level is within therapeutic range (0.5-2.0), the combination of a pulse <60 AND hypokalaemia (3.1 mEq/L) makes administration dangerous. Therapeutic range assumes normal potassium.",
      "",
      "WRONG: Orange juice does not contain enough potassium to meaningfully raise serum potassium levels — this is dangerously inadequate treatment. IV potassium replacement is needed and must be ordered by the physician.",
      "WRONG: Nurses do not independently adjust medication doses. Halving the dose and administering without physician notification is outside nursing scope of practice.",
    ],
  },
  {
    level: "Knowledge",
    question: "A patient who has been taking warfarin (INR target 2-3) for atrial fibrillation is admitted with acute haemorrhage and a current INR of 8.2. The physician orders immediate reversal of anticoagulation. Which agent should be prepared?",
    options: [
      "Protamine sulfate — the antidote for all anticoagulants",
      "Vitamin K and/or Fresh Frozen Plasma (FFP)",
      "Naloxone — reverses all overdose situations",
      "Digoxin immune Fab — reverses cardiac medication toxicity",
    ],
    correct: 1,
    explanation: "For WARFARIN reversal: Vitamin K (phytonadione) — promotes synthesis of clotting factors II, VII, IX, X. IV vitamin K produces more rapid reversal than oral but takes 6-12 hours. For IMMEDIATE reversal in life-threatening haemorrhage — FRESH FROZEN PLASMA (FFP) or 4-factor prothrombin complex concentrate (4F-PCC/Beriplex) provides immediate clotting factors. The distinction: Vitamin K = slow (hours), FFP/4F-PCC = immediate. PROTAMINE SULFATE is the antidote for HEPARIN — not warfarin. This is a critical distinction tested on NCLEX. Naloxone reverses opioids. Digoxin immune Fab reverses digoxin toxicity.",
    wrongExplanations: [
      "WRONG: Protamine sulfate reverses HEPARIN (unfractionated) — not warfarin. This is one of the most commonly confused antidote pairs on NCLEX. Warfarin antidotes are Vitamin K and/or FFP.",
      "",
      "WRONG: Naloxone reverses opioid toxicity only. It has no effect on anticoagulants or clotting factor deficiency.",
      "WRONG: Digoxin immune Fab (Digibind) reverses digoxin toxicity — a cardiac glycoside. It has no effect on anticoagulation or clotting.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a patient with type 2 diabetes who is scheduled for a CT scan with IV contrast tomorrow morning. The patient currently takes metformin 1000mg twice daily, lisinopril 10mg daily and atorvastatin 40mg at night. Which medication requires specific action before the contrast procedure?",
    options: [
      "Lisinopril — ACE inhibitors interact with iodinated contrast causing acute kidney injury",
      "Atorvastatin — statins should be held before contrast procedures",
      "Metformin — must be held 48 hours before iodinated contrast to prevent lactic acidosis",
      "All three medications should be held — contrast procedures require a medication-free period",
    ],
    correct: 2,
    explanation: "METFORMIN must be HELD 48 hours BEFORE and 48 hours AFTER iodinated contrast administration. The risk: Iodinated contrast can cause acute kidney injury (contrast nephropathy). If renal function is acutely impaired, metformin accumulates because it is renally excreted, increasing the risk of LACTIC ACIDOSIS — a rare but potentially fatal complication. Metformin should be withheld before the procedure, held until renal function is confirmed normal post-procedure (typically 48 hours), then restarted. Lisinopril and atorvastatin do not require specific modification for contrast procedures. The nurse should notify the physician and the radiology department about the metformin hold order.",
    wrongExplanations: [
      "WRONG: While ACE inhibitors can affect renal function, they do not specifically interact with iodinated contrast to cause the specific risk of lactic acidosis. Lisinopril does not require routine holding for contrast.",
      "",
      "WRONG: Statins do not have a specific interaction with iodinated contrast that requires routine holding. Atorvastatin can be continued.",
      "WRONG: Only metformin requires specific action related to iodinated contrast. Holding all three medications is unnecessary and potentially harmful (missing antihypertensive and lipid-lowering doses).",
    ],
  },
  {
    level: "Application",
    question: "A patient with a history of seizures is receiving phenytoin (Dilantin) 300mg daily. The nurse prepares to administer an IV dose of phenytoin as the patient cannot take oral medications. Which action is MOST important?",
    options: [
      "Dilute the phenytoin in D5W (5% dextrose) for IV administration",
      "Administer the phenytoin rapidly IV push to ensure therapeutic levels are achieved quickly",
      "Dilute in normal saline only and administer no faster than 50mg/min with continuous cardiac monitoring",
      "Mix phenytoin with the patient's current IV medication to save time",
    ],
    correct: 2,
    explanation: "IV PHENYTOIN has two critical administration requirements: It must be diluted in NORMAL SALINE ONLY — phenytoin precipitates in dextrose-containing solutions (D5W, D5NS). The maximum infusion rate is 50mg/min — faster administration causes SEVERE HYPOTENSION and CARDIAC ARRHYTHMIAS (including complete heart block and ventricular fibrillation). ECG monitoring is mandatory during IV administration. Also: phenytoin is incompatible with most other medications — administer in a dedicated IV line, flushed with normal saline before and after. The filter should be used if available to catch any precipitate.",
    wrongExplanations: [
      "WRONG: D5W causes phenytoin to precipitate — it crystallises in the tubing. Normal saline is the ONLY compatible diluent. This is a critical medication administration safety point.",
      "WRONG: Rapid IV push of phenytoin causes severe hypotension and potentially fatal cardiac arrhythmias. The maximum rate is 50mg/min — this is strictly enforced.",
      "",
      "WRONG: Phenytoin is incompatible with most other IV medications. It must be administered through a dedicated line, never piggy-backed with other medications.",
    ],
  },
  {
    level: "Application",
    question: "A patient who has been taking prednisone 40mg daily for 3 months for rheumatoid arthritis tells the nurse she wants to stop taking the medication because she has gained 8kg and her face looks 'puffy.' She says 'I just won't take it anymore starting today.' What is the nurse's PRIORITY response?",
    options: [
      "Support her decision — body image concerns are valid and she has the right to stop medications",
      "Tell her the weight gain and facial changes are normal and will resolve — encourage her to continue",
      "Explain that abruptly stopping prednisone after 3 months of daily use can cause adrenal crisis — a life-threatening emergency. Advise her to contact her physician to arrange a gradual taper",
      "Switch her to a lower dose independently to reduce side effects while maintaining coverage",
    ],
    correct: 2,
    explanation: "ADRENAL SUPPRESSION is the critical safety concern here. Prolonged exogenous corticosteroid use (>3 weeks) suppresses the hypothalamic-pituitary-adrenal (HPA) axis — the body stops producing its own cortisol. Abrupt discontinuation causes ADRENAL CRISIS: severe hypotension, hypoglycaemia, electrolyte imbalance, shock and potentially death. The patient's body cannot produce adequate cortisol in response to stress without time to recover HPA axis function. The nurse must: explain the serious risk clearly, strongly advise against abrupt discontinuation, instruct her to call her physician immediately to arrange a GRADUAL TAPER. Her side effect concerns (weight gain, moon face — Cushingoid features) are valid and should be acknowledged — but safety comes first.",
    wrongExplanations: [
      "WRONG: While autonomy is important, supporting a decision that carries life-threatening risk without providing essential safety information is nursing negligence. The nurse must provide the information about adrenal crisis before the patient makes this decision.",
      "WRONG: Simply encouraging continuation without addressing the safety concern of abrupt withdrawal or offering to help manage side effects is an inadequate therapeutic response. The physician needs to be involved.",
      "",
      "WRONG: Nurses cannot independently adjust medication doses. The patient needs physician involvement — the nurse's role is to provide education and facilitate communication with the prescriber.",
    ],
  },
  {
    level: "Advanced",
    question: "A 68-year-old patient with atrial fibrillation on warfarin (usual INR 2.3) presents with new onset right-sided weakness and aphasia of 45 minutes duration. CT head shows no haemorrhage. The stroke team is considering IV tPA (alteplase). The current INR is 1.6. Which statement about this clinical scenario is MOST accurate?",
    options: [
      "tPA is absolutely contraindicated because the patient is on warfarin",
      "The INR of 1.6 is below the threshold of 1.7 — tPA may be considered based on full risk-benefit assessment by the stroke team",
      "Give IV vitamin K first to normalise the INR before giving tPA",
      "Dabigatran reversal with idarucizumab must be given first since this patient is on anticoagulation",
    ],
    correct: 1,
    explanation: "This is a complex advanced clinical scenario. IV tPA (alteplase) for acute ischaemic stroke: Absolute contraindication is CURRENT anticoagulant use with INR >1.7 (for warfarin) or therapeutic DOAC levels. This patient's INR is 1.6 — BELOW the 1.7 threshold — meaning tPA may be considered after full risk-benefit assessment by the stroke team. The 4.5-hour treatment window applies and the patient is within 45 minutes. The nurse's role: communicate the current INR to the stroke team immediately, prepare for potential tPA administration, establish large-bore IV access, monitor neurological status closely. Giving vitamin K (Option C) before tPA would take too long — tPA cannot wait 6-12 hours for vitamin K effect when the treatment window is 4.5 hours. The patient is on warfarin, NOT dabigatran — idarucizumab is irrelevant here.",
    wrongExplanations: [
      "WRONG: The absolute contraindication for warfarin and tPA is INR >1.7. An INR of 1.6 is BELOW this threshold — tPA may be considered. 'Patient is on warfarin' alone is not an absolute contraindication if the INR is below threshold.",
      "",
      "WRONG: Vitamin K takes 6-12 hours to lower the INR — the stroke treatment window is 4.5 hours from symptom onset. Giving vitamin K before tPA is not feasible and would likely cause the patient to miss the treatment window entirely.",
      "WRONG: This patient is on warfarin — not dabigatran. Idarucizumab (Praxbind) is the reversal agent for dabigatran only. Applying the wrong reversal agent shows confusion between anticoagulant classes.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a patient with heart failure who is on furosemide 80mg IV twice daily, spironolactone 25mg daily, lisinopril 10mg daily and digoxin 0.125mg daily. Morning lab results show: Sodium 138 mEq/L, Potassium 5.8 mEq/L, Creatinine 2.4 mg/dL (baseline 1.2), BUN 48 mg/dL. Digoxin level: 2.4 ng/mL. Which is the nurse's MOST urgent concern and action?",
    options: [
      "The elevated creatinine indicates AKI — hold furosemide and notify the physician",
      "The digoxin level is toxic at 2.4 ng/mL — this is the most urgent concern. Hold digoxin, notify physician urgently and monitor for arrhythmias. The hyperkalaemia and renal failure compound the toxicity risk",
      "The hyperkalaemia (5.8) is most dangerous — give calcium gluconate immediately to stabilise cardiac membranes",
      "All abnormal labs should be reported simultaneously — no single value is more urgent",
    ],
    correct: 1,
    explanation: "This patient has MULTIPLE interacting problems but DIGOXIN TOXICITY is the most urgent: Level 2.4 ng/mL = TOXIC (therapeutic 0.5-2.0). Compounding factors that increase toxicity severity: HYPERKALAEMIA (K+ 5.8 — normally low potassium worsens digoxin toxicity, but high potassium with renal failure suggests impaired digoxin excretion) and ACUTE RENAL FAILURE (creatinine doubled from 1.2 to 2.4 — digoxin is renally eliminated, AKI causes accumulation). The combination creates a perfect toxicity storm. PRIORITY: Hold digoxin IMMEDIATELY, notify physician URGENTLY, continuous cardiac monitoring (life-threatening arrhythmias), prepare for possible Digoxin Immune Fab administration. Also address: hold lisinopril and spironolactone (contributing to hyperkalaemia and AKI), assess fluid status, monitor cardiac rhythm continuously.",
    wrongExplanations: [
      "WRONG: AKI is present and important — but it is contributing to digoxin toxicity rather than being the primary urgent concern. Holding furosemide without addressing the toxic digoxin level misses the priority.",
      "",
      "WRONG: Calcium gluconate is given for HYPERKALAEMIA with ECG changes causing cardiac instability — not for digoxin toxicity. In fact, calcium can worsen digoxin toxicity by potentiating its cardiac effects ('stone heart'). This is a dangerous response.",
      "WRONG: Simultaneous reporting misses the clinical hierarchy — the toxic digoxin level with AKI and hyperkalaemia represents an immediately life-threatening situation requiring urgent prioritisation, not simultaneous equal reporting.",
    ],
  },
  {
    level: "Advanced",
    question: "A patient with type 1 diabetes is admitted for a urinary tract infection. Her usual insulin regimen is: glargine 20 units at bedtime and lispro 6-8 units with each meal using a sliding scale. She is NPO for a procedure scheduled for 8am. Her fasting blood glucose is 14.2 mmol/L (256 mg/dL). She has not received her bedtime glargine last night because the nurse thought 'she's NPO so she shouldn't get insulin.' What are the TWO most important nursing actions now?",
    options: [
      "Hold all insulin until she is eating again — NPO patients should not receive insulin",
      "Administer her glargine now and notify the physician about the missed dose, elevated glucose and current NPO status — type 1 diabetics ALWAYS need basal insulin regardless of NPO status",
      "Administer a large dose of lispro to correct the elevated glucose before the procedure",
      "Cancel the procedure until glucose is normal — hyperglycaemia is a contraindication to all procedures",
    ],
    correct: 1,
    explanation: "CRITICAL CONCEPT: Type 1 diabetics ALWAYS need basal insulin — even when NPO. The previous nurse made a dangerous error. Without basal insulin, type 1 patients have ZERO insulin and will develop DIABETIC KETOACIDOSIS — they do not have any endogenous insulin production. The basal insulin (glargine) maintains baseline glucose control and prevents ketone production — it is not meal-related. ACTIONS: Notify the physician of the missed glargine, elevated glucose (14.2 mmol/L) and NPO status — physician will order the glargine and likely an IV insulin infusion protocol for perioperative management. Monitor for DKA (ketones, anion gap). Do NOT administer rapid-acting lispro without eating — hypoglycaemia risk. Glucose of 14.2 may delay but does not automatically cancel a procedure — physician decides. The nurse who withheld the basal insulin made a dangerous error based on misunderstanding.",
    wrongExplanations: [
      "WRONG: This is the error that caused the problem. NPO does NOT mean hold ALL insulin in type 1 diabetes. Basal insulin is always required in T1DM regardless of food intake. Holding all insulin in T1DM causes DKA.",
      "",
      "WRONG: Administering rapid-acting lispro when the patient is NPO risks hypoglycaemia — rapid-acting insulin requires carbohydrate intake. This is not the correct management.",
      "WRONG: Moderate hyperglycaemia alone does not automatically cancel procedures. The physician makes this decision. The nurse's priority is notification and glucose management — not cancelling the procedure independently.",
    ],
  },
  {
    level: "Advanced",
    question: "A patient prescribed ceftriaxone for pneumonia reports a penicillin allergy — 'I get a rash when I take penicillin.' The physician says 'Cephalosporins and penicillins have very low cross-reactivity — proceed with the ceftriaxone.' The nurse is concerned. What is the MOST appropriate nursing action?",
    options: [
      "Refuse to administer the ceftriaxone — penicillin allergy is an absolute contraindication to all cephalosporins",
      "Administer the ceftriaxone without further assessment — the physician has made the clinical decision",
      "Clarify the nature of the allergic reaction (rash vs anaphylaxis), document the discussion, ensure anaphylaxis kit is immediately available, administer with close monitoring for the first 30 minutes and document thoroughly",
      "Substitute azithromycin instead — macrolides are completely unrelated to beta-lactams",
      ],
    correct: 2,
    explanation: "This is a nuanced clinical situation requiring nursing judgement. The facts: Cross-reactivity between penicillins and cephalosporins is approximately 1-2% in truly penicillin-allergic patients (lower for 3rd/4th generation cephalosporins like ceftriaxone). The NATURE of the reaction matters critically: a mild rash suggests a non-IgE-mediated reaction with lower cross-reactivity risk; anaphylaxis (IgE-mediated) represents higher risk. The physician's assessment is clinically defensible. Nursing actions: CLARIFY the allergy type and document it precisely ('rash' vs 'anaphylaxis'), DOCUMENT the physician's clinical decision and reasoning, ensure ANAPHYLAXIS kit (epinephrine, diphenhydramine, corticosteroid) is immediately available at the bedside, ADMINISTER with close monitoring (first 30 minutes particularly), document the administration and patient response. This is NOT an absolute contraindication — it is a risk-benefit clinical decision.",
    wrongExplanations: [
      "WRONG: Penicillin allergy is NOT an absolute contraindication to all cephalosporins. Cross-reactivity is low (1-2%) and the nature of the prior reaction is critical. Refusing to give a prescribed medication without further assessment is inappropriate.",
      "WRONG: Simply administering without clarifying the allergy nature, documenting the discussion and ensuring emergency preparedness fails the nursing standard of care. The nurse has a responsibility to ensure safety measures are in place.",
      "",
      "WRONG: Independently substituting medications is outside nursing scope. While macrolides are structurally unrelated to beta-lactams, the nurse cannot independently change the antibiotic — this requires physician order. The prescribed ceftriaxone with appropriate precautions is the correct approach.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a 75-year-old woman who underwent total hip replacement yesterday. She is prescribed enoxaparin (Clexane) 40mg SC daily for VTE prophylaxis, oxycodone 5mg PRN 4-hourly for pain, paracetamol 1g 6-hourly scheduled, and ondansetron 4mg PRN for nausea. Her morning creatinine is 1.9 mg/dL with eGFR 28 mL/min. She is on the call bell every 45 minutes and her pain scores have been 7-8/10. On assessment she is confused (unusual for her per family), her RR is 10, SpO2 is 93% on room air and she is difficult to rouse. What is the nurse's MOST important concern and PRIORITY action?",
    options: [
      "She is in pain — administer the PRN oxycodone 5mg as ordered",
      "She has opioid-induced respiratory depression — withhold opioids, administer supplemental oxygen, assess further and prepare naloxone. Her renal impairment (eGFR 28) increases opioid accumulation",
      "Her low SpO2 is from atelectasis — encourage deep breathing and incentive spirometry",
      "She is confused due to post-operative delirium — reorient and implement delirium precautions",
    ],
    correct: 1,
    explanation: "This patient has OPIOID-INDUCED RESPIRATORY DEPRESSION: RR 10 (severely reduced), SpO2 93% (hypoxic), difficult to rouse (sedated), confusion (new — likely from CO2 retention/hypoxia). The CRITICAL CONTEXT: eGFR 28 = severe renal impairment. Oxycodone's active metabolites accumulate in renal failure causing prolonged and enhanced CNS and respiratory depression. Despite pain scores of 7-8 (patient may be too sedated to accurately assess pain), administering MORE opioid could be FATAL — her RR is already 10 and she is difficult to rouse. PRIORITY ACTIONS: Do NOT give opioid — this will worsen respiratory depression. Apply supplemental oxygen. Stimulate patient (sternal rub). Have naloxone drawn up and ready. Notify physician URGENTLY. Frequent vital signs monitoring. The frequent pain call bells combined with sedation suggests she has received adequate or excessive opioid with accumulation in renal failure. Request medication review — alternative analgesia (paracetamol alone, nerve block, adjuvants) should be considered.",
    wrongExplanations: [
      "WRONG: Administering opioid to a patient with RR 10, SpO2 93% and difficult to rouse is potentially fatal. The vital signs indicate opioid toxicity — more opioid is contraindicated regardless of pain scores reported.",
      "",
      "WRONG: While atelectasis causes hypoxia, the COMBINATION of RR 10, SpO2 93%, difficult to rouse, confusion in the context of PRN opioid use and renal impairment = opioid toxicity. Atelectasis alone does not cause difficult arousability.",
      "WRONG: Post-operative delirium is possible but does not explain RR 10 and SpO2 93%. The respiratory findings must be addressed first — opioid toxicity is the priority diagnosis to exclude.",
    ],
  },
];

const clinicalPearls = [
  "The most important pharmacology principle for NCLEX: narrow therapeutic index drugs (digoxin, lithium, warfarin, phenytoin, aminoglycosides, vancomycin) require regular monitoring of drug levels AND the parameters that affect toxicity (renal function for digoxin and aminoglycosides, INR for warfarin, potassium for digoxin). Know the monitoring parameter for each.",
  "Renal impairment changes everything. In an elderly patient or anyone with elevated creatinine — every renally-excreted drug with a narrow therapeutic index is a toxicity waiting to happen. Digoxin, metformin, methotrexate, aminoglycosides, lithium, gabapentin — all accumulate in renal failure. Always check renal function before accepting a drug dose as appropriate.",
  "The antidote question is one of the most tested NCLEX pharmacology questions. The pairs you must know: Heparin = Protamine sulfate. Warfarin = Vitamin K (slow)/FFP (fast). Opioids = Naloxone. Benzodiazepines = Flumazenil. Paracetamol = N-acetylcysteine. Digoxin = Digoxin Immune Fab. Dabigatran = Idarucizumab.",
  "NPO does not mean hold all insulin in type 1 diabetes — this is a dangerous and common nursing error. Basal insulin (glargine) continues in type 1 DM regardless of oral intake. Stopping it causes DKA. Rapid-acting insulin is adjusted based on meals and blood glucose — but basal insulin is non-negotiable.",
  "Beta-blockers mask the adrenergic symptoms of hypoglycaemia (tachycardia, tremor, palpitations) — the only symptom preserved is diaphoresis. Diabetic patients on beta-blockers must monitor glucose more frequently because they lose their most reliable warning signal.",
  "The cough from ACE inhibitors and the angioedema from ACE inhibitors are both caused by bradykinin accumulation — but they are vastly different in severity. The cough is annoying; the angioedema can be fatal. A patient with an ACE inhibitor tongue/lip swelling needs epinephrine and emergency airway management — not an antihistamine alone.",
  "When a patient on corticosteroids for months says they want to stop — your single most important teaching point is: not abruptly. The adrenal glands have atrophied from disuse. Abrupt withdrawal causes adrenal crisis — hypotension, hypoglycaemia, electrolyte disaster. The dose must be tapered over weeks to months depending on duration of therapy.",
];

export default function PharmacologyPage() {
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
            <h1 className="font-black text-base text-gray-900">💊 Pharmacology</h1>
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
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
              <p className="text-blue-700 text-sm leading-relaxed font-medium">
                💊 Pharmacology appears in EVERY section of NCLEX. Master drug monitoring, antidotes, contraindications and patient education — these are guaranteed exam topics!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most critical pharmacology safety points — these appear on NCLEX and cause real patient harm!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Pharmacology!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review antidotes, monitoring parameters and drug interactions." :
                        "Keep studying! Focus on digoxin, anticoagulants, antidotes and insulin types."}
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