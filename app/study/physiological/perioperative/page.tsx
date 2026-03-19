"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Perioperative Nursing",
    icon: "🏥",
    color: "blue",
    content: [
      "Perioperative nursing encompasses three phases: PRE-OPERATIVE (assessment, preparation, education), INTRAOPERATIVE (during surgery — scrub, scout/circulating, anaesthesia nursing), POST-OPERATIVE (recovery, ward care, discharge)",
      "THE SURGICAL TEAM: Surgeon, assistant surgeon, anaesthetist, scrub nurse (sterile field — instruments), scout/circulating nurse (outside sterile field — documentation, supplies, communication), anaesthetic nurse/technician, recovery nurse",
      "SURGICAL RISK ASSESSMENT: Patient factors (age, comorbidities, medication, nutritional status, smoking, alcohol), Surgical factors (urgency, magnitude, type — elective vs emergency, laparoscopic vs open), Anaesthetic factors",
      "ASA PHYSICAL STATUS CLASSIFICATION: ASA I (healthy, no systemic disease), ASA II (mild systemic disease — well-controlled DM, HTN), ASA III (severe systemic disease — poorly controlled DM, COPD, morbid obesity, active hepatitis, alcohol dependence), ASA IV (severe systemic disease — constant threat to life — recent MI <3 months, CVA, cardiac failure, sepsis, ESKD), ASA V (moribund — not expected to survive without operation), ASA VI (brain-dead for organ donation). E = emergency surgery suffix",
      "ENHANCED RECOVERY AFTER SURGERY (ERAS): Evidence-based multimodal pathway to reduce surgical stress response, complications and length of stay. Key elements: patient education, optimised preoperative nutrition, reduced fasting times, multimodal analgesia, early mobilisation, early oral intake, goal-directed fluid therapy",
      "WRONG SITE SURGERY PREVENTION: SURGICAL SAFETY CHECKLIST (WHO) — Sign In (before anaesthesia), Time Out (before incision — universal PAUSE), Sign Out (before leaving theatre). Site marking by surgeon before theatre. Never proceed without completing the checklist",
      "NCLEX heavily tests: Pre-operative assessment and preparation, informed consent, post-operative complications (ABCDE assessment), wound care, drain management, fluid balance and recovery nursing",
    ],
  },
  {
    title: "Pre-Operative Assessment",
    icon: "📋",
    color: "blue",
    content: [
      "PRE-OPERATIVE ASSESSMENT GOALS: Identify and optimise risk factors, obtain informed consent, educate the patient, ensure correct preparation, screen for undiagnosed conditions",
      "HISTORY: Cardiovascular (angina, MI, heart failure, hypertension, pacemaker/ICD), Respiratory (COPD, asthma, sleep apnoea — OSA — extremely important for anaesthetic planning), Haematological (bleeding disorders, DVT/PE history, anticoagulant use), Endocrine (diabetes — glucose management perioperatively, thyroid disease), Renal/Hepatic (drug dosing, coagulopathy), Previous anaesthesia (adverse reactions, malignant hyperthermia, difficult airway, PONV)",
      "MEDICATION REVIEW — CONTINUE vs HOLD: CONTINUE: Antihypertensives (most — except ACE inhibitors/ARBs on day of surgery — hypotension risk), beta-blockers (NEVER stop abruptly), cardiac medications (digoxin, antiarrhythmics), anti-epileptics, thyroid medications, corticosteroids (may need stress dosing increase). HOLD: METFORMIN (48 hours before if contrast or major surgery — lactic acidosis), ANTICOAGULANTS (warfarin 5 days, DOACs 24-48 hours before major surgery), NSAIDS (5-7 days before — bleeding risk), ORAL CONTRACEPTIVE (4 weeks before major surgery — VTE risk), MONOAMINE OXIDASE INHIBITORS (MAOIs — 2 weeks before — drug interactions)",
      "ACE INHIBITORS/ARBs: HOLD on morning of surgery — associated with refractory intraoperative hypotension (vasoplegic syndrome). Restart when haemodynamically stable post-operatively",
      "DIABETES PERIOPERATIVE MANAGEMENT: Check HbA1c — poor control increases infection, wound healing and mortality. TYPE 1: NEVER omit basal insulin (glargine) — reduce to 75-80% of normal dose night before. Short-acting insulin adjusted with food. TARGET glucose 6-10 mmol/L. TYPE 2 oral agents: omit metformin, sulfonylureas on day of surgery. INSULIN-REQUIRING T2DM: Reduce basal insulin by 20-25%",
      "INVESTIGATIONS: Tailored to patient risk and surgical magnitude. FBC (anaemia — correct before elective surgery), U&E (electrolyte disturbance), coagulation (anticoagulated patients, liver disease), group and save/crossmatch (blood loss risk), ECG (cardiac risk), CXR (respiratory disease, cardiac failure), ECHO (if suspected cardiac disease), spirometry (major resection), pregnancy test (all women of childbearing age — mandatory for elective surgery)",
      "ALLERGIES: Document clearly — latex (latex-free environment mandatory), medications (antibiotics — distinguish true allergy from intolerance), iodine/contrast, chlorhexidine (anaphylaxis risk during surgery — used in skin preparation and catheter lines)",
    ],
  },
  {
    title: "Fasting Guidelines and Bowel Preparation",
    icon: "🍽️",
    color: "orange",
    content: [
      "FASTING GUIDELINES (ERAS/modern anaesthetic guidelines — replaces traditional 'midnight NBM'): Goal: prevent pulmonary aspiration while minimising dehydration and metabolic stress",
      "SOLID FOOD: 6 hours before anaesthesia (some guidelines 8 hours for fatty meals)",
      "BREAST MILK: 4 hours before anaesthesia (infants)",
      "CLEAR FLUIDS (water, black tea/coffee, clear juice without pulp, sports drinks — NOT alcohol): 2 HOURS before anaesthesia — current evidence and most guidelines allow clear fluids until 2 hours pre-operatively",
      "CARBOHYDRATE LOADING: Pre-operative carbohydrate drinks (12.5% maltodextrin) 2-3 hours before surgery — reduces insulin resistance, preserves muscle mass, reduces nausea/vomiting. Part of ERAS protocol",
      "TRADITIONAL vs MODERN FASTING: Traditional 'NBM from midnight' is outdated and excessive — causes dehydration, hypoglycaemia, discomfort and is not evidence-based. Modern guidelines are 6/4/2 (solid/breast milk/clear fluids)",
      "MEDICATION WITH SMALL SIP OF WATER: Most medications should be taken on the morning of surgery with a small sip of water (30mL) — this is NOT a violation of fasting rules",
      "RAPID SEQUENCE INDUCTION (RSI) indications: Patients at HIGH RISK of aspiration — delayed gastric emptying (diabetics, opioid users, pregnancy, GI obstruction, acute abdomen, morbid obesity), GORD, emergency surgery. Modified RSI or awake intubation may be used",
      "BOWEL PREPARATION: No longer routine for all colorectal surgery (mechanical bowel prep increases electrolyte disturbance and dehydration without improving outcomes — ERAS trials). Currently used selectively: rectal surgery, left-sided colonic resection, and when intraoperative colonoscopy planned. Oral antibiotics may replace mechanical bowel prep in some protocols",
    ],
  },
  {
    title: "Informed Consent",
    icon: "✍️",
    color: "purple",
    content: [
      "INFORMED CONSENT: A process (not just a signature) — ensures the patient understands the proposed procedure, alternatives, benefits, risks and has the right to refuse",
      "ELEMENTS of valid informed consent: DISCLOSURE (surgeon explains procedure, risks, benefits, alternatives), COMPREHENSION (patient understands — assessed by teach-back), VOLUNTARINESS (no coercion or undue pressure), CAPACITY (patient has decision-making capacity), DOCUMENTATION (consent form + discussion documented in notes)",
      "WHO OBTAINS CONSENT: The physician/surgeon performing the procedure obtains consent — NOT the nurse. The NURSE'S ROLE: Witness the signature (confirms patient signed voluntarily, was not coerced — does NOT confirm understanding of the procedure), ensure consent is documented before proceeding, notify the surgeon if the patient has questions or doubts",
      "DECISION-MAKING CAPACITY: Patient must be able to: UNDERSTAND information, RETAIN it, WEIGH benefits and risks, COMMUNICATE decision. Capacity is DECISION-SPECIFIC (can have capacity for simple decisions but not complex ones), can FLUCTUATE (may have capacity at some times but not others), is assessed clinically (not by formal psychiatric evaluation in most situations)",
      "NURSE DISCOVERS PATIENT HAS QUESTIONS: If a patient expresses doubt, confusion or asks questions about the procedure after consent is signed → NOTIFY the surgeon BEFORE proceeding. Do NOT reassure the patient that the surgeon explained it — the surgeon must address the questions",
      "EMERGENCY EXCEPTION: If patient is unconscious, incapacitated and immediate treatment is required to preserve life or prevent serious harm, consent may be implied — treatment proceeds in the patient's best interests",
      "SUBSTITUTE DECISION MAKER (SDM)/NEXT OF KIN: When patient lacks capacity — SDM makes decisions based on patient's previously expressed wishes (substituted judgement standard) or patient's best interests. Priority order varies by jurisdiction: spouse/partner, adult children, parents, siblings",
      "MINORS: Parental/guardian consent required for those under the age of majority. MATURE MINOR DOCTRINE: Some jurisdictions recognise that a minor who demonstrates capacity can consent to their own treatment. Emergency treatment always proceeds regardless of consent availability",
      "JEHOVAH'S WITNESSES: Competent adult JW's refusal of blood products must be respected — even if refusal results in death. Pre-operatively: document clearly, explore bloodless surgery options, confirm wishes in writing. Children of JW parents: courts can authorise blood transfusions for minors against parents' wishes if life-threatening",
    ],
  },
  {
    title: "Anaesthesia Types and Nursing Implications",
    icon: "💉",
    color: "purple",
    content: [
      "GENERAL ANAESTHESIA (GA): Loss of consciousness, analgesia, muscle relaxation and amnesia. Administered by: IV induction (propofol most common) + volatile agent maintenance (sevoflurane, desflurane, isoflurane) or total intravenous anaesthesia (TIVA — propofol infusion). Requires: airway management (ETT, laryngeal mask airway/LMA)",
      "ENDOTRACHEAL INTUBATION (ETT): Gold standard airway for: aspiration risk, prolonged surgery, abdominal/thoracic surgery, prone positioning, mechanical ventilation required. Cuff inflated in trachea. Requires neuromuscular blockade (succinylcholine, rocuronium) for insertion",
      "LARYNGEAL MASK AIRWAY (LMA): Sits in pharynx, no tracheal intubation. Used for: shorter procedures, lower aspiration risk patients. Less invasive, faster insertion",
      "SPINAL/EPIDURAL ANAESTHESIA: See Pain Management section for detail. Post-spinal nursing: frequent BP monitoring (hypotension — vasodilation from sympathetic block), assess lower limb sensation/movement recovery, urinary retention (catheterise if unable to void), post-dural puncture headache (PDPH) — postural severe headache",
      "LOCAL ANAESTHESIA: Infiltration of surgical site. Most procedures. Nurse: monitor for local anaesthetic systemic toxicity (LAST) — see Pain Management",
      "MALIGNANT HYPERTHERMIA (MH): LIFE-THREATENING pharmacogenetic disorder. Triggered by: volatile anaesthetic agents (halothane, sevoflurane, desflurane, isoflurane) AND succinylcholine (suxamethonium). MECHANISM: Uncontrolled calcium release from sarcoplasmic reticulum → sustained skeletal muscle contraction → hypermetabolism → massively elevated body temperature",
      "MH CLINICAL FEATURES: Unexpected rise in end-tidal CO2 (EARLIEST sign — most sensitive), muscle rigidity (especially masseter — jaw rigidity after succinylcholine = warning sign), tachycardia, hyperthermia (fever may be late), mottling, hypoxia, metabolic and respiratory acidosis, rhabdomyolysis",
      "MH TREATMENT: DANTROLENE — SPECIFIC ANTIDOTE (inhibits calcium release from SR). Dose: 2.5 mg/kg IV rapidly, repeat every 5-10 minutes to 10 mg/kg. Stop triggering agents immediately. 100% oxygen. Active cooling. Correct acidosis, hyperkalaemia. Cardiac monitoring. ICU admission",
      "MH SUSCEPTIBILITY: Autosomal dominant in most cases (RYR1 mutation). Family history of MH or unexplained anaesthetic death = MH susceptibility screening. Safe agents: propofol, nitrous oxide, ketamine, opioids, benzodiazepines, non-depolarising muscle relaxants (rocuronium, vecuronium — NOT succinylcholine)",
    ],
  },
  {
    title: "Intraoperative Nursing — Scrub and Scout",
    icon: "🔧",
    color: "blue",
    content: [
      "SCRUB NURSE (INSTRUMENT NURSE): Works WITHIN the sterile field. Responsibilities: maintain sterility of the surgical field, set up and organise sterile instruments, pass instruments to surgeon, count instruments/swabs/sharps, maintain awareness of what is on the field at all times",
      "SCOUT NURSE (CIRCULATING NURSE): Works OUTSIDE the sterile field. Responsibilities: patient positioning, documentation, supplying sterile items to the scrub nurse, specimen management, communication with other team members, medication administration (from outside sterile field), count documentation, managing theatre environment",
      "SURGICAL COUNT: Mandatory count of ALL instruments, swabs, sharps at: START of surgery, BEFORE closing a body cavity, BEFORE skin closure, CLOSING count. Any discrepancy = STOP CLOSURE until item is located. X-ray if item not found. Document count result",
      "STERILE TECHNIQUE: Scrubbed personnel wear sterile gown and gloves. Sterile field established on scrub trolley. Only sterile items enter sterile field. Contamination recognition: sterile field is contaminated if: any breach, falls below table level, become wet through (moisture carries bacteria — 'strike-through'), sterility questioned",
      "SPECIMEN MANAGEMENT: ALL specimens must be correctly labelled (patient name, DOB, MRN, site of specimen, surgeon, date/time), placed in correct container (formalin for histology, fresh/dry for cytology/microbiology), documentation in operative notes. Mislabelled specimens = serious incident",
      "PATIENT POSITIONING: Supine (most common), Lithotomy (pelvic/perineal surgery — nerve injury risk: common peroneal nerve — leg positioned carefully), Prone (spinal/posterior surgery — eye protection, padding for genitals/breasts, airway management critical), Lateral decubitus, Trendelenburg (head-down — respiratory compromise, increased ICP), Reverse Trendelenburg (head-up — aspiration prevention, haemorrhage to head)",
      "DIATHERMY/ELECTROSURGERY: Uses high-frequency electrical current to cut or coagulate tissue. MONOPOLAR: Current passes through patient to dispersive pad (diathermy pad) — placed on hairless, well-perfused skin avoiding bony prominences and metal implants. BIPOLAR: Current passes only between the two tines of the forceps — safer near nerves, brain, spine. RISKS: Burns (if diathermy pad contact poor, patient touching metal), interference with pacemakers/ICDs",
    ],
  },
  {
    title: "Post-Operative Immediate Recovery (PACU)",
    icon: "🔄",
    color: "red",
    content: [
      "PACU (Post-Anaesthetic Care Unit / Recovery Room): Immediate post-operative care until patient meets discharge criteria. Nurse-to-patient ratio: 1:1 initially, then 1:2",
      "ALDRETE SCORE (Post-Anaesthetic Recovery Score): Assesses readiness to leave PACU. Five parameters scored 0-2: ACTIVITY (move limbs), RESPIRATION (breathe deeply and cough), CIRCULATION (BP within 20% of pre-op), CONSCIOUSNESS (fully awake), OXYGEN SATURATION (SpO2 >92% on room air or with O2 support). Score ≥9 = discharge from PACU. Modified Aldrete includes pain and nausea/vomiting",
      "IMMEDIATE RECOVERY ASSESSMENT — ABCDE: Airway (patent — recovery position), Breathing (rate, depth, SpO2, oxygen therapy), Circulation (HR, BP, cap refill, wound/drain bleeding), Disability (GCS, pupils, motor block if regional), Exposure (temperature, skin colour, wound, catheter)",
      "RECOVERY POSITION: Unconscious/obtunded patients placed in LEFT LATERAL RECOVERY POSITION — prevents aspiration if vomiting, maintains airway. Exception: spinal surgery patients — may need to remain supine",
      "COMMON IMMEDIATE POST-OPERATIVE COMPLICATIONS:",
      "AIRWAY OBSTRUCTION: Tongue fall (unconscious patient), laryngospasm (partial — crowing stridor; complete — silent, no movement), bronchospasm. Treatment: airway positioning, jaw thrust, oral/nasopharyngeal airway, suction, oxygen, suxamethonium for laryngospasm if severe",
      "LARYNGOSPASM: Reflex closure of vocal cords — common after LMA removal, light anaesthesia, secretions. PARTIAL: crowing inspiratory noise. COMPLETE: silent, no chest movement. TREATMENT: 100% O2 + CPAP, jaw thrust, stimulation. If no response: LOW-DOSE suxamethonium (succinylcholine) 0.1-0.5 mg/kg",
      "HYPOTHERMIA: Body temperature <36°C post-operatively. Causes: cold theatre environment, IV fluids, exposed surgical field, vasodilation from anaesthesia. Consequences: shivering (increases O2 demand significantly), coagulopathy, delayed drug metabolism, wound infection risk, cardiac arrhythmias. Treatment: forced air warming blanket (Bair Hugger), warm IV fluids, warm environment",
      "POST-OPERATIVE NAUSEA AND VOMITING (PONV): Extremely common (30% of all surgical patients, 70-80% in high-risk groups). Risk factors (Apfel Score): female sex, non-smoker, history of PONV or motion sickness, opioid use post-operatively. Prevention: TIVA (propofol-based — lower PONV than volatile agents), avoid N2O, dexamethasone (prophylaxis), ondansetron. Treatment: ondansetron, metoclopramide, cyclizine, droperidol",
    ],
  },
  {
    title: "Post-Operative Complications — Respiratory",
    icon: "🫁",
    color: "red",
    content: [
      "RESPIRATORY COMPLICATIONS: Leading cause of post-operative mortality. Highest risk: thoracic and upper abdominal surgery (splinting — pain inhibits deep breathing), elderly, obese, smokers, pre-existing lung disease, prolonged surgery",
      "ATELECTASIS: Collapse of alveoli — MOST COMMON post-operative pulmonary complication. Causes: retained secretions (pain inhibits coughing), hypoventilation (shallow breathing), prolonged supine position. Features: dull breath sounds at bases, low-grade fever (classically day 1-2 post-op), reduced SpO2",
      "TREATMENT of atelectasis: DEEP BREATHING EXERCISES (10 times per hour while awake), INCENTIVE SPIROMETRY (visual feedback device — encourages maximum inhalation), EARLY MOBILISATION (upright position — improves diaphragm function, encourages deep breathing), adequate analgesia (enables coughing), chest physiotherapy, nebulised bronchodilators if bronchospasm",
      "PNEUMONIA: Post-operative pneumonia — usually develops day 2-5. Signs: fever, productive cough, crackles, consolidation on CXR, elevated WCC. Treatment: sputum culture + antibiotics, physiotherapy, hydration, oxygen",
      "ASPIRATION PNEUMONITIS vs ASPIRATION PNEUMONIA: PNEUMONITIS — chemical injury from gastric acid aspiration (non-infective initially — sterile content). PNEUMONIA — bacterial infection from aspiration of colonised oropharyngeal/gastric contents. Treatment: oxygen, supportive (pneumonitis), antibiotics (pneumonia)",
      "PULMONARY EMBOLISM (PE): Post-operative PE — highest risk: orthopaedic (hip, knee replacement), pelvic, abdominal surgery with long procedure time. Days 3-14 post-op typically. Features: sudden dyspnoea, pleuritic chest pain, tachycardia, hypoxia, haemoptysis. Prophylaxis: LMWH, TED stockings, IPC devices, early mobilisation",
      "OBSTRUCTIVE SLEEP APNOEA (OSA) POST-OPERATIVELY: HIGH RISK group. Opioids and sedatives worsen apnoea episodes. CPAP must be available and used post-operatively for known OSA patients. Continuous SpO2 monitoring. Position: head-up (30-45°), avoid supine. STOP-BANG screening tool: Snoring, Tired, Observed apnoea, blood Pressure, BMI, Age >50, Neck circumference >40cm, Gender (male). Score ≥3 = high risk",
    ],
  },
  {
    title: "Post-Operative Complications — Cardiovascular and Neurological",
    icon: "❤️",
    color: "orange",
    content: [
      "HYPOTENSION post-operatively — CAUSES (use the 4 H's framework): HYPOVOLAEMIA (most common — blood loss, third-spacing, fluid shifts, inadequate replacement), HEART (cardiac — MI, arrhythmia, cardiac failure), HYPOXIA (hypoxia → myocardial depression), HEAT (temperature — hypothermia → decreased cardiac output). Also: neuraxial block (spinal/epidural), sepsis, anaphylaxis",
      "HYPOVOLAEMIC HYPOTENSION: Most common cause. Assessment: tachycardia (early), BP drop (later), low urine output, increasing drain output, wound bleeding. Treatment: fluid challenge (250-500mL crystalloid), blood if significant haemorrhage, identify source",
      "POST-OPERATIVE MI: Typically silent (masked by post-operative analgesia and sedation). Occurs days 1-3 most commonly. Risk factors: pre-existing CAD, prolonged hypotension, hypoxia, tachycardia (myocardial demand > supply). Any post-operative troponin rise with ECG changes must be investigated urgently",
      "CARDIAC ARRHYTHMIAS post-operatively: AF (most common post-cardiac and major abdominal surgery — POAF), SVT, bradycardia. Causes: electrolyte disturbance (hypokalaemia, hypomagnesaemia), hypoxia, pain/anxiety, hypothermia, direct cardiac manipulation, catecholamine surge",
      "DELIRIUM POST-OPERATIVELY: Acute confusion state — most common in elderly post-operative patients (20-50% of elderly). Characterised by: acute onset, fluctuating course, inattention (inability to focus), disorganised thinking, altered consciousness. Risk factors: age >65, pre-existing dementia, hearing/vision impairment, polypharmacy, alcohol use, sleep deprivation, immobility, pain",
      "DELIRIUM PREVENTION (HELP protocol principles): Orientation (clock, calendar, familiar faces), Adequate sleep (avoid night-time disturbances), Early mobilisation (physiotherapy day 1), Adequate analgesia (untreated pain causes delirium), Sensory aids (glasses, hearing aids), Avoid deliriogenic medications (anticholinergics, benzodiazepines, sedating antihistamines), Hydration, Bowel/bladder management",
      "POST-OPERATIVE STROKE: Rare but devastating. Risk factors: atrial fibrillation, carotid disease, aortic manipulation (cardiac surgery), paradoxical embolism, hypoperfusion. New focal neurological deficit post-operatively = urgent CT head + neurology review",
      "PERIPHERAL NERVE INJURIES: From prolonged positioning, stretching, compression, tourniquet. Common: ULNAR NERVE (elbow compression), COMMON PERONEAL NERVE (lithotomy position — foot drop), BRACHIAL PLEXUS (arm board positioning). Prevention: careful positioning and padding, avoid hyperextension, regular pressure relief",
    ],
  },
  {
    title: "Post-Operative Complications — Wound, Fluid and GI",
    icon: "🩹",
    color: "green",
    content: [
      "WOUND HEALING PHASES: Haemostasis (immediate — vasoconstriction, clot formation), Inflammatory (1-4 days — phagocytosis, redness, swelling, warmth — NORMAL), Proliferative (4 days-3 weeks — collagen synthesis, granulation tissue, wound contraction), Remodelling (3 weeks-2 years — scar maturation, increased tensile strength)",
      "WOUND ASSESSMENT: WOUND BED (granulating = pink/red, epithelialising = pale pink, sloughy = yellow, necrotic = black), WOUND EDGES (attached/undermining), SURROUNDING SKIN (erythema, induration, maceration), EXUDATE (amount, type — serous, serosanguinous, haemoserous, purulent), ODOUR, DIMENSIONS (length × width × depth)",
      "SURGICAL SITE INFECTION (SSI): Signs: REDSS — Redness (beyond 1cm from wound edge), Oedema (swelling), Discharge (purulent), Separation (wound dehiscence), Systemic signs (fever, elevated WCC). Superficial SSI (skin/subcutaneous tissue), Deep SSI (fascia/muscle), Organ/Space SSI",
      "SSI PROPHYLAXIS: Pre-operative antibiotics (given 30-60 minutes BEFORE incision — not when incision made, not after). Choice based on surgical site organisms. Single dose adequate for most procedures. Re-dose if surgery >2× antibiotic half-life or >1500mL blood loss",
      "WOUND DEHISCENCE: Disruption of wound layers. Superficial (skin only — dress and manage conservatively) vs WOUND DEHISCENCE WITH EVISCERATION (bowel protrudes through wound — EMERGENCY — cover with moist saline gauze, do NOT attempt to replace bowel, keep patient supine, nil by mouth, urgent surgical review)",
      "HAEMATOMA/SEROMA: Haematoma (blood accumulation in wound — often requires evacuation if large), Seroma (fluid accumulation — usually resolves spontaneously, may need aspiration). Both: present as swelling, discomfort",
      "FLUID BALANCE POST-OPERATIVELY: INSENSIBLE LOSSES: Respiration, sweating (~800mL/day). THIRD SPACING: Fluid shifts into interstitial space from surgical trauma — peaks 24-48 hours post-op, then mobilises ('third space remobilisation' — Day 2-4, diuresis occurs — do NOT give more diuretics unless in genuine fluid overload). MONITORING: Hourly urine output (target 0.5 mL/kg/hour), daily weight, strict intake/output, electrolytes",
      "GI POST-OPERATIVE COMPLICATIONS: Nausea/vomiting (PONV — see PACU section), PARALYTIC ILEUS (expected 1-3 days after abdominal surgery, longer with prolonged surgery or peritonitis), CONSTIPATION (opioids, immobility — prescribe laxatives), ANASTOMOTIC LEAK (see GI section), GASTROPARESIS (delayed gastric emptying — especially in diabetics)",
    ],
  },
  {
    title: "Drain Management",
    icon: "🔧",
    color: "blue",
    content: [
      "SURGICAL DRAINS: Remove fluid, blood, air, bile or intestinal contents from a wound or body cavity to prevent accumulation and allow monitoring of post-operative complications",
      "DRAIN TYPES: PASSIVE DRAINS (drain by capillary action and gravity): Corrugated drain, Robinson drain (Penrose). ACTIVE DRAINS (suction-assisted): CLOSED SUCTION (Redivac/Blake/Jackson-Pratt — vacuum drain bottle). SUMP DRAINS (double-lumen — suction + air vent — for high output cavities)",
      "CLOSED SUCTION DRAIN (Redivac): Most common post-surgical drain. Maintains negative pressure to draw fluid from surgical site. Nursing: measure and document output every 4-8 hours (or per orders), keep drain below the level of the surgical site (gravity-assisted drainage), maintain negative pressure (bottle should remain compressed — if expanded = full or air leak), EMPTY when 2/3 full or at regular intervals",
      "DRAIN OUTPUT MONITORING: Document: volume, colour, character. ALERT if: Fresh blood (>200 mL/hour after first 2 hours — surgical bleeding), Bile (biliary surgery — bile leak), Amylase-rich fluid (pancreatic surgery — pancreatic fistula), Intestinal content (anastomotic leak), Sudden decrease in output (blockage — kinked tube, clot — assess for accumulation), Sudden increase in output (new bleeding or leak)",
      "T-TUBE DRAINS (biliary surgery — post-cholecystectomy/choledochotomy): Drains bile. Output: 300-500 mL/day decreasing. Patient education: bile-coloured drainage is expected. T-tube cholangiogram performed before removal (assess duct patency). Clamping trial before removal (clamp tube — if patient tolerates without pain/fever/jaundice = bile flowing normally = safe to remove)",
      "CHEST DRAINS: See Respiratory section (water-seal chambers, tidalling, suction)",
      "DRAIN REMOVAL: Based on: decreasing output (<50-100 mL/24 hours for most drains, check surgeon orders), absence of concerning output (bile, intestinal content, blood), clinical assessment. Technique: remove on expiration or Valsalva (for chest drains), apply occlusive dressing immediately",
      "DRAIN SITE CARE: Clean with normal saline, observe for: infection signs (redness, purulent discharge), accidental removal (secure firmly, educate patient), skin breakdown at site. Patient education: do not pull or disconnect, report sudden increase in drainage, report signs of infection at site",
    ],
  },
  {
    title: "Venous Thromboembolism (VTE) Prophylaxis",
    icon: "🩸",
    color: "purple",
    content: [
      "VTE (DVT + PE) is the most COMMON PREVENTABLE cause of hospital death. All surgical patients must have VTE risk assessment on admission and prophylaxis prescribed",
      "CAPRINI RISK ASSESSMENT: Most widely used surgical VTE risk tool. Considers: age, BMI, prior VTE history, cancer, surgery type and duration, immobility, clotting disorders, hormone therapy. Score determines prophylaxis level",
      "MECHANICAL PROPHYLAXIS: GRADUATED COMPRESSION STOCKINGS (TED stockings — anti-embolic stockings): Measure and fit correctly, remove for skin inspection at least daily, contraindicated in: peripheral arterial disease, severe peripheral oedema, skin conditions, post-arterial bypass. INTERMITTENT PNEUMATIC COMPRESSION (IPC — sequential compression device): inflates and deflates rhythmically — activates fibrinolytic system, prevents venous stasis. More effective than TED stockings. Apply as soon as patient in theatre (or pre-operative)",
      "PHARMACOLOGICAL PROPHYLAXIS: LOW MOLECULAR WEIGHT HEPARIN (LMWH): Enoxaparin 40mg SC daily (standard dose — adjusted in obesity and renal failure). Start timing: 12 hours before or after surgery (timing depends on anaesthetic — avoid epidural/spinal if recent LMWH). Duration: 7-14 days general surgery, 35 days hip/pelvis, 14 days knee. UNFRACTIONATED HEPARIN (UFH): 5000 units SC 8-12 hourly — used in severe CKD where LMWH accumulates. FONDAPARINUX: Factor Xa inhibitor — used post-hip/knee replacement. DOACs (rivaroxaban, apixaban) — post-joint replacement in some protocols",
      "CONTRAINDICATIONS to pharmacological VTE prophylaxis: Active bleeding, intracranial surgery (relative), spinal surgery within 12 hours, coagulopathy. Use mechanical prophylaxis alone until safe to start pharmacological",
      "EARLY MOBILISATION: Single most important non-pharmacological VTE prevention measure. Physiotherapy referral day 1 post-op. Sit out of bed, ambulate in corridor, avoid prolonged sitting without leg elevation or IPC",
      "DVT DIAGNOSIS: Compression ultrasound (gold standard for DVT). D-dimer + Wells score for pre-test probability",
      "POST-OPERATIVE DVT MANAGEMENT: Therapeutic anticoagulation (LMWH or DOACs first-line), elevation, analgesia. Duration depends on trigger and clot location",
    ],
  },
  {
    title: "Post-Operative Assessment — NEWS2 and Deterioration Recognition",
    icon: "📊",
    color: "red",
    content: [
      "NEWS2 (National Early Warning Score 2): Standardised scoring system for detecting clinical deterioration. Aggregates physiological parameters into a score that triggers escalation",
      "NEWS2 PARAMETERS and scoring: Respiration rate, SpO2, supplemental oxygen use, systolic blood pressure, heart rate, level of consciousness (ACVPU: Alert, Confusion, Voice, Pain, Unresponsive), temperature. Each parameter scored 0-3. Total score determines response",
      "NEWS2 TRIGGER THRESHOLDS: Score 1-4 (low) → increased monitoring frequency. Score 5-6 OR any single parameter score 3 (medium) → urgent review by clinician competent in acute illness assessment. Score ≥7 (high) → EMERGENCY response — immediate assessment by clinical team, consider ICU/HDU",
      "ACVPU CONSCIOUSNESS SCALE: Alert (normal), Confusion (NEW confusion = score 3 — high alarm), Voice (responds to voice), Pain (responds to pain only), Unresponsive. NEW CONFUSION is the same weight as other extreme values",
      "EARLY WARNING SIGNS of deterioration: CHANGES from baseline are more significant than single abnormal values. SUBTLE SIGNS: Nursing instinct ('something's not right'), patient anxiety or distress, patient reporting feeling unwell, increasing analgesia requirements without explanation",
      "RAPID RESPONSE TEAM (RRT)/MEDICAL EMERGENCY TEAM (MET): Criteria for calling vary by institution — typically NEWS2 ≥5 or 7, specific vital sign thresholds, or nursing concern. Call early — earlier intervention prevents ICU admission and cardiac arrest",
      "SBAR FOR ESCALATION: Situation (what is the problem), Background (relevant history, current management), Assessment (what you think is happening), Recommendation (what you want the physician to do). Include: vital signs, NEWS2 score, interventions already taken",
      "CARDIAC ARREST PREVENTION: Most in-hospital cardiac arrests are preceded by hours of physiological deterioration and missed early warning signs. Appropriate and timely escalation is the most important intervention. 'Call for help before it becomes a cardiac arrest'",
    ],
  },
  {
    title: "Discharge Planning and Patient Education",
    icon: "🏠",
    color: "green",
    content: [
      "DISCHARGE PLANNING: Should begin at PRE-ADMISSION assessment — not on the day of discharge. Multidisciplinary: nursing, medical, physiotherapy, occupational therapy, social work, pharmacy, community services",
      "DISCHARGE CRITERIA (clinical): Vital signs stable, pain controlled with oral analgesia, tolerating oral fluids/diet, mobilising safely (or appropriate mobility aids arranged), wound stable (no active bleeding, no signs of infection), urinary function restored, care needs met (social support, home environment suitable)",
      "DISCHARGE CRITERIA (social): Responsible adult at home for first 24 hours (after GA or sedation), transport arranged (cannot drive after GA/sedation — typically 24-48 hours, longer for major surgery), appropriate home environment, community nursing if wound care required, follow-up appointment booked",
      "TEACH-BACK METHOD: The gold standard for verifying patient understanding. Nurse: 'I've explained a lot today — can you tell me in your own words what to watch for after you get home?' Patient repeating information identifies gaps in understanding before discharge",
      "DISCHARGE MEDICATION EDUCATION: What each medication is for, dosing and timing, what to do if a dose is missed, side effects to expect and report, duration of treatment, interaction with alcohol/other medications, safe storage",
      "WOUND CARE EDUCATION: Keep wound clean and dry (duration varies by wound type and location), how to recognise infection (redness spreading, increasing warmth, pus, fever), when to seek medical attention, how to care for wound at home, when sutures/clips are removed (typically 7-10 days for most wounds, 10-14 days for high-tension areas)",
      "ACTIVITY RESTRICTIONS: Driving (after GA: generally 24-48 hours for minor surgery, 4-6 weeks after major abdominal/pelvic surgery, 6 weeks after cardiac surgery, until safe to perform emergency stop), return to work (varies widely), lifting restrictions (typically no lifting >5kg for 6 weeks after laparotomy), sexual activity (typically 4-6 weeks after abdominal surgery), showering/bathing (when wound sealed — usually 48-72 hours for simple wounds)",
      "RED FLAG SYMPTOMS — instruct patient to seek IMMEDIATE medical attention: Increasing pain not controlled by analgesia, fever >38°C, increasing wound redness/swelling/discharge/smell, swollen or painful calf (DVT), sudden chest pain or shortness of breath (PE), collapse or syncope, inability to keep fluids down, prolonged absence of bowel/bladder function",
    ],
  },
];

const mnemonics = [
  {
    title: "WHO Surgical Safety Checklist",
    acronym: "STS",
    breakdown: ["Sign In (before anaesthesia — confirm patient, site, procedure, allergies, anaesthetic concerns)", "Time Out (before incision — PAUSE — team confirms patient, procedure, site, antibiotics, critical steps, imaging)", "Sign Out (before leaving theatre — instrument count confirmed, specimen labelled, any concerns for recovery)"],
    memory: "STS — Sign In, Time Out (most critical), Sign Out. The TIME OUT is when the team STOPS everything and verbally confirms the right patient, right site, right procedure. This is the universal pause that prevents wrong-site surgery!",
    color: "blue",
  },
  {
    title: "Malignant Hyperthermia — Early Signs",
    acronym: "HEAT",
    breakdown: ["Hypercarbia (rising end-tidal CO2 — EARLIEST sign)", "End-tidal CO2 unexplained rise", "Acidosis (metabolic + respiratory)", "Temperature rise (hyperpyrexia — may be late)"],
    memory: "HEAT — Hypercarbia is the EARLIEST sign of MH (before fever!). DANTROLENE is the specific antidote — must be immediately available in ALL theatres. Stop triggering agents IMMEDIATELY!",
    color: "red",
  },
  {
    title: "Post-Operative Complications — ABCDE",
    acronym: "ABCDE",
    breakdown: ["Airway (obstruction, laryngospasm)", "Breathing (atelectasis, pneumonia, PE, bronchospasm)", "Circulation (hypotension, arrhythmia, MI, haemorrhage)", "Disability (delirium, nerve injury, stroke)", "Exposure (wound, temperature, drains, urine output)"],
    memory: "ABCDE — assess EVERY post-operative patient systematically in this order. Never jump ahead to specific concerns before completing ABC. The most common post-operative emergency is airway/respiratory!",
    color: "red",
  },
  {
    title: "Aldrete Score — PACU Discharge",
    acronym: "ARCCO",
    breakdown: ["Activity (move 4 limbs = 2, 2 limbs = 1, none = 0)", "Respiration (deep breathe = 2, dyspnoea = 1, apnoea = 0)", "Circulation (BP within 20% = 2, 20-50% = 1, >50% deviation = 0)", "Consciousness (fully awake = 2, arousable = 1, unresponsive = 0)", "Oxygenation (SpO2 >92% room air = 2, with O2 = 1, <90% = 0)"],
    memory: "ARCCO — Activity, Respiration, Circulation, Consciousness, Oxygenation. Score ≥9 = safe to discharge from PACU. Maximum score = 10!",
    color: "green",
  },
];

const alerts = [
  { text: "MALIGNANT HYPERTHERMIA: UNEXPLAINED rising end-tidal CO2 + muscle rigidity during GA = MH until proven otherwise. DANTROLENE 2.5 mg/kg IV immediately. Stop triggering agents NOW — every minute delay increases mortality!", severity: "high" },
  { text: "WRONG SITE SURGERY: If ANY team member has a concern during the TIME OUT — the operation STOPS until resolved. Any nurse has the right and obligation to halt the procedure. Speak up even as the most junior person in the room!", severity: "high" },
  { text: "WOUND EVISCERATION: Bowel through a wound = COVER WITH MOIST SALINE GAUZE — do NOT attempt to push bowel back. Patient supine, nil by mouth, urgent surgery. This is a life-threatening emergency!", severity: "high" },
  { text: "INFORMED CONSENT: The SURGEON obtains consent — NOT the nurse. If a patient has questions or doubts about their surgery AFTER signing — STOP and notify the surgeon BEFORE proceeding. Do NOT try to answer surgical questions!", severity: "high" },
  { text: "ANTIBIOTIC PROPHYLAXIS: Give 30-60 minutes BEFORE skin incision — not when cutting, not after. Antibiotics given after the incision provide NO protective benefit against SSI!", severity: "high" },
  { text: "METFORMIN: HOLD 48 hours before major surgery or contrast administration — lactic acidosis risk. Also hold if AKI develops post-operatively. Confirm metformin status in EVERY diabetic pre-operative patient!", severity: "high" },
  { text: "POST-DURAL PUNCTURE HEADACHE (PDPH): Severe POSTURAL headache (worse sitting/standing, better lying flat) after spinal anaesthesia = PDPH. Treatment: bed rest, caffeine, analgesia. Severe/refractory: EPIDURAL BLOOD PATCH (gold standard treatment)!", severity: "medium" },
  { text: "OSA PATIENTS POST-OPERATIVELY: Continuous SpO2 monitoring, CPAP if known OSA patient, head-up positioning, minimal sedatives. Opioids + OSA + supine position = highest risk for nocturnal respiratory events!", severity: "high" },
  { text: "THIRD SPACE REMOBILISATION (Day 2-4 post-op): Fluid shifts back into intravascular space from interstitium — patient diureses naturally. Do NOT give more diuretics unless truly fluid overloaded. Monitor for fluid overload in cardiac/renal patients!", severity: "medium" },
  { text: "LATEX ALLERGY: Entire theatre must be LATEX-FREE for latex-allergic patients — including gloves, drains, IV ports, catheters. Anaphylaxis from intraoperative latex exposure can be fatal. Document latex allergy prominently!", severity: "high" },
  { text: "PRE-OPERATIVE ANTIBIOTICS in PENICILLIN ALLERGY: Cross-reactivity between penicillins and cephalosporins is low (~1-2%). Clarify type of reaction (rash vs anaphylaxis) and discuss with anaesthetist and surgeon. Alternative antibiotics available!", severity: "medium" },
  { text: "DRAIN REMOVAL: Never remove a drain without a surgeon's order. Drains are placed for specific reasons — premature removal can lead to abscess formation, haematoma, or missed leaks!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A patient is scheduled for an elective total knee replacement under spinal anaesthesia. During the pre-operative assessment, the nurse notes she takes warfarin for atrial fibrillation. Her INR today is 2.4. The surgery is scheduled for tomorrow morning. Which action is MOST appropriate?",
    options: [
      "Proceed with surgery — the spinal anaesthetic does not require the same anticoagulation precautions as epidural",
      "Notify the anaesthetist and surgeon immediately — warfarin must be held 5 days before surgery. An INR of 2.4 on the day before surgery indicates insufficient hold time. Surgery should be postponed or bridging therapy/vitamin K must be considered",
      "Administer vitamin K 10mg orally tonight — this will normalise the INR by morning",
      "The INR of 2.4 is within the therapeutic range — it is safe to proceed with spinal anaesthesia",
    ],
    correct: 1,
    explanation: "WARFARIN PERIOPERATIVE MANAGEMENT: Standard protocol requires stopping warfarin 5 DAYS before elective surgery to allow INR to fall below 1.5 (safe for neuraxial anaesthesia and most surgical procedures). An INR of 2.4 the day before surgery indicates warfarin was NOT held for adequate time (5 days of stopped warfarin would be needed). NEURAXIAL ANAESTHESIA AND COAGULATION: Spinal and epidural anaesthesia in a coagulopathic patient carries risk of EPIDURAL/SPINAL HAEMATOMA — catastrophic cord compression. INR should be ≤1.2 before neuraxial block. An INR of 2.4 is completely incompatible with safe spinal anaesthesia. ACTIONS: Notify surgeon and anaesthetist urgently (surgery cannot proceed tomorrow safely), consider: postponing surgery until INR normalises, oral vitamin K (2-5mg — NOT 10mg which over-reverses and makes future warfarin dosing difficult), consider whether LMWH bridging is appropriate for this patient's AF stroke risk. Vitamin K 10mg would cause over-reversal making the patient sub-therapeutic on warfarin for days when restarted.",
    wrongExplanations: [
      "WRONG: Neuraxial (spinal and epidural) anaesthesia requires the SAME anticoagulation precautions — both access the epidural space with needles. Spinal haematoma after neuraxial anaesthesia in an anticoagulated patient causes catastrophic permanent paralysis.",
      "",
      "WRONG: Vitamin K 10mg is too high a dose for elective reversal — it causes complete warfarin reversal that lasts 1-2 weeks, making therapeutic re-anticoagulation very difficult. Also 10mg IV or oral does not reliably lower INR to <1.2 within 12 hours. 2-5mg oral is more appropriate.",
      "WRONG: INR 2.4 within therapeutic range for AF does NOT mean it is safe for spinal anaesthesia. The requirement for neuraxial anaesthesia is INR ≤1.2 — this patient's INR is nearly double the safe threshold.",
    ],
  },
  {
    level: "Knowledge",
    question: "During a Time Out procedure before a right nephrectomy, the scrub nurse counts the instruments and notes all are accounted for. The surgeon asks for the scalpel. The circulating nurse notices the surgical consent form says 'left nephrectomy.' What should the nurse do?",
    options: [
      "Pass the consent form to the surgeon and remain quiet — the surgeon knows which kidney to remove",
      "Whisper to the scrub nurse to quietly check the imaging and proceed if the imaging confirms the right side",
      "Immediately and clearly call out 'STOP — there is a discrepancy between the consent form (left nephrectomy) and the planned procedure (right nephrectomy) — we need to clarify before proceeding.' The Time Out must resolve all discrepancies before incision",
      "Check the operating list — the list supersedes the consent form in determining the correct side",
    ],
    correct: 2,
    explanation: "WRONG SITE SURGERY PREVENTION: The Time Out exists specifically to catch these discrepancies before they cause irreversible harm. A discrepancy between the CONSENT FORM ('left nephrectomy') and the INTENDED PROCEDURE ('right nephrectomy') is an absolute STOP. ANY team member — including the most junior nurse — has both the RIGHT and the OBLIGATION to call a halt. This is one of the most important concepts in surgical safety. ACTIONS: Speak up clearly and immediately, state the discrepancy explicitly, the team must pause and resolve: review original documentation, imaging, consent discussion records, involve the patient if possible (wake from anaesthesia if necessary for clarification of a truly ambiguous situation). The operating list, consent form, imaging, site marking and the patient's own statements must ALL agree before proceeding. The surgeon's confidence does NOT override the discrepancy — human error is real and wrong-site surgery is one of the most catastrophic near-miss events in healthcare. The WHO Surgical Safety Checklist exists precisely to prevent this.",
    wrongExplanations: [
      "WRONG: Passing the form quietly relies on the surgeon noticing the discrepancy themselves. The nurse has a professional and ethical obligation to SPEAK UP LOUDLY AND CLEARLY — not silently hand over a document and hope someone catches it.",
      "WRONG: Quietly checking imaging without stopping the procedure allows time pressure to override safety. The procedure MUST STOP before incision until ALL documentation agrees. 'Quietly' checking is inappropriate — the whole team needs to resolve this openly.",
      "",
      "WRONG: No single document supersedes another in determining the correct surgical site. The consent form, operating list, imaging, site marking and patient confirmation must ALL be consistent. A discrepancy between ANY of them is a reason to STOP — not to decide which document 'wins.'",
    ],
  },
  {
    level: "Application",
    question: "A 58-year-old man is 8 hours post-elective laparoscopic cholecystectomy. His vital signs are: BP 94/58 (pre-operative 132/78), HR 116, RR 22, SpO2 94% on 4L nasal cannula, temperature 37.2°C. He is confused and his abdomen is more distended than immediately post-operatively. His drain output has increased from 20mL (blood-stained) to 180mL (dark blood) in the last hour. NEWS2 score calculation indicates a score of 9. What is the nurse's MOST appropriate immediate response?",
    options: [
      "Administer a 500mL IV fluid bolus and reassess in 30 minutes — hypovolaemia is the most likely cause",
      "Activate the Rapid Response Team/Medical Emergency Team IMMEDIATELY — NEWS2 score of 9 indicates a HIGH-RISK emergency. Multiple signs of haemodynamic compromise with evidence of ongoing haemorrhage (180mL dark blood from drain). Prepare for immediate surgical review and possible return to theatre",
      "Increase oxygen to non-rebreather mask and recheck vital signs in 15 minutes",
      "Contact the on-call surgeon by phone to discuss the patient — this can be managed with a medication review and increased monitoring",
    ],
    correct: 1,
    explanation: "NEWS2 SCORE 9 = HIGH EMERGENCY RESPONSE REQUIRED — IMMEDIATE action. CLINICAL ANALYSIS: BP 94/58 (28% drop from baseline), HR 116, RR 22, SpO2 94%, confusion (NEW — ACVPU 'C' = score 3 alone triggers urgent review), drain output 180mL dark blood/hour (>150mL/hour suggests SURGICAL HAEMORRHAGE requiring operative intervention). This patient has POST-LAPAROSCOPIC CHOLECYSTECTOMY HAEMORRHAGE — a surgical emergency. IMMEDIATE ACTIONS: Activate RRT/MET NOW (NEWS2 9), simultaneously: large-bore IV access (if not in situ), IV fluid resuscitation (crystalloid/colloid/blood products per haematology), high-flow oxygen (NRB), blood tests (FBC, coagulation, crossmatch URGENTLY), prepare for emergency return to theatre, notify surgeon URGENTLY. A phone call to discuss is completely inadequate for a NEWS2 9 patient with haemodynamic compromise and evidence of surgical haemorrhage. This patient needs theatre within minutes, not hours.",
    wrongExplanations: [
      "WRONG: IV fluid bolus alone without activating emergency response delays the definitive treatment (return to theatre for haemostasis). The drain output of 180mL/hour indicates ongoing surgical bleeding that IV fluids cannot correct. The RRT must be activated immediately.",
      "",
      "WRONG: Increasing oxygen and waiting 15 minutes allows potentially fatal haemorrhage to continue unchecked. A NEWS2 of 9 requires IMMEDIATE emergency response — not reassessment in 15 minutes.",
      "WRONG: A phone call to discuss is completely inadequate for NEWS2 9 with active haemorrhage. This patient requires IMMEDIATE in-person emergency assessment and likely emergency return to theatre. The RRT/MET call triggers an in-person rapid response.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is discharging a 45-year-old woman following a laparoscopic appendicectomy. The nurse provides written and verbal discharge instructions. Using the teach-back method, the nurse asks 'Can you tell me in your own words what symptoms would make you come back to the hospital?' The patient responds 'If I have increasing pain, feel sick, have a temperature or the wound looks red or leaks.' She then asks 'Can I drive myself to my follow-up appointment tomorrow?' What is the nurse's response?",
    options: [
      "Yes, for a short drive the day after laparoscopic surgery it should be fine",
      "No — following general anaesthesia, patients should NOT drive for a minimum of 24-48 hours (for minor surgery), and this patient is only 1 day post-GA. Also verify the patient has a responsible adult at home tonight as per discharge criteria. Document the teach-back assessment",
      "Ask the surgeon — driving restrictions are not within the nurse's scope to advise on",
      "If she feels well and is not taking opioids, driving is probably safe",
    ],
    correct: 1,
    explanation: "POST-GA DRIVING RESTRICTION is a mandatory patient safety instruction that is clearly within nursing scope to advise on. REASON: General anaesthesia and sedative medications impair judgement, reaction time and psychomotor function for 24-48 hours (some evidence suggests longer). Most road safety authorities and anaesthetic guidelines state: NO DRIVING for 24-48 hours after GA as an absolute minimum (minor procedures), longer for major surgery. ALSO: No driving while taking opioid or sedating medications. The patient is 1 day post-GA and must NOT drive — even for a short trip, even if she feels well, even if she is not taking opioids. TEACH-BACK ASSESSMENT: The patient demonstrated excellent understanding of warning signs — this should be documented (the patient 'was able to correctly identify red flag symptoms using their own words' — this is the gold standard evidence of comprehension, not simply that she was given information). DISCHARGE CRITERIA check: she also needs confirmation of a responsible adult at home tonight — this is standard post-GA discharge criteria.",
    wrongExplanations: [
      "WRONG: There is no safe post-GA driving window that is 'just for a short drive.' The impairment from GA is not dose-dependent on the length of the drive — reaction times and judgement remain impaired for 24-48 hours regardless. This is also a legal issue in most jurisdictions.",
      "",
      "WRONG: Discharge instructions including activity restrictions are absolutely within nursing scope. The nurse does not need the surgeon to advise on standard post-anaesthetic driving restrictions — these are evidence-based guidelines that every discharge nurse should know and communicate.",
      "WRONG: 'Feeling well' and not taking opioids does not negate the neurological effects of general anaesthesia. The metabolism of anaesthetic agents continues for 24-48 hours. Self-assessment of fitness to drive is unreliable after GA.",
    ],
  },
  {
    level: "Application",
    question: "A patient is 2 days post-open bowel resection. The nurse assesses the wound during routine care and notices the wound edges have separated in the lower 3cm, with what appears to be pink bowel visible through the defect. The patient reports 'my wound felt like it popped when I coughed.' What is the nurse's IMMEDIATE priority action?",
    options: [
      "Apply a dry dressing and elevate the head of the bed — wound dehiscence is a common post-operative complication",
      "Attempt to gently push the visible bowel back into the wound — replacing bowel reduces the infection risk",
      "Cover the wound with MOIST saline gauze immediately, keep the patient supine, make patient nil by mouth, apply supplemental oxygen and notify the surgeon URGENTLY — this is wound dehiscence with evisceration, a surgical emergency",
      "Apply a wound closure strip (Steri-Strip) to re-approximate the wound edges and notify the surgical registrar in the morning",
    ],
    correct: 2,
    explanation: "WOUND EVISCERATION — SURGICAL EMERGENCY. IDENTIFICATION: Bowel visible through wound defect = evisceration (not simple dehiscence). IMMEDIATE NURSING ACTIONS in strict sequence: COVER the exposed bowel with MOIST saline gauze (not dry — exposed bowel desiccates rapidly → cell death → bowel necrosis → sepsis). Do NOT attempt to push bowel back — this introduces infection and can cause ischaemia, perforation or vascular injury. PATIENT SUPINE — minimises further evisceration through intra-abdominal pressure. NIL BY MOUTH — surgery imminent. SUPPLEMENTAL OXYGEN — physiological support. NOTIFY SURGEON URGENTLY — emergency theatre required. This patient requires: return to theatre (fascial closure), IV antibiotics, fluid resuscitation, wound care. Apply supplemental oxygen, IV access (in situ or insert), vital signs, emotional support ('this can be fixed — I am getting help immediately'). Dry dressing causes bowel surface desiccation. Steri-Strips are completely inadequate for evisceration.",
    wrongExplanations: [
      "WRONG: Wound evisceration is NOT a 'common complication managed with dressing changes.' It is a surgical emergency requiring immediate return to theatre. Applying dry dressings causes bowel desiccation and cell death.",
      "WRONG: Never attempt to replace eviscerated bowel. This introduces infection into the peritoneal cavity, risks vascular compromise to the bowel loop, and can cause further injury. Moist cover and immediate surgical notification are the correct actions.",
      "",
      "WRONG: Steri-Strips are for superficial skin closure of minor wounds. Eviscerated bowel cannot be managed with wound closure strips. This is a full-thickness abdominal wound failure requiring surgical repair in theatre.",
    ],
  },
  {
    level: "Advanced",
    question: "During an elective laparoscopic colectomy under general anaesthesia, the anaesthetist reports that the end-tidal CO2 has risen unexpectedly from 38 to 58 mmHg over the last 15 minutes despite unchanged ventilator settings. The heart rate has risen from 72 to 128 bpm. The temperature probe now reads 38.9°C and the anaesthetist notices the patient's masseter muscles appear very rigid. The surgeon reports the muscle is 'unusually hard.' What is the circulating nurse's MOST important immediate action?",
    options: [
      "Increase the ventilator rate to blow off the CO2 — the hypercarbia is the most urgent problem",
      "Notify the surgeon to complete the surgery as quickly as possible — minimising anaesthetic time reduces the risk",
      "Recognise MALIGNANT HYPERTHERMIA — immediately call for help, retrieve DANTROLENE from storage (every theatre must have ≥36 vials available), prepare dantrolene for mixing (each vial mixed with 60mL sterile water — physically demanding), assist anaesthetist in stopping triggering agents, high-flow 100% oxygen and active cooling measures",
      "Administer IV paracetamol for the fever — post-operative hyperpyrexia is common in laparoscopic surgery from CO2 insufflation",
    ],
    correct: 2,
    explanation: "MALIGNANT HYPERTHERMIA — classic intraoperative emergency presentation. DIAGNOSTIC FEATURES ALL PRESENT: Unexplained RISING END-TIDAL CO2 (EARLIEST and MOST SENSITIVE sign — CO2 production increases massively from hypermetabolic skeletal muscle), TACHYCARDIA (sympathetic activation from hypermetabolic state), HYPERTHERMIA (temperature rising — may develop more slowly), MUSCLE RIGIDITY (masseter rigidity after succinylcholine = classic warning sign; generalised rigidity following volatile agent), surgery is LA-COLECTOMY under GA with volatile agent. NURSE'S ROLE IS CRITICAL IN MH: CALL FOR HELP immediately (MH is all-hands-on-deck). RETRIEVE DANTROLENE — stored in every theatre as a legal requirement (ANZCA, ADA). Dantrolene preparation is labour-intensive (each vial: 20mg dantrolene + 60mL sterile water = must shake to dissolve — requires multiple staff). Initial dose 2.5 mg/kg = average 70kg patient = 175mg = ~9 vials minimum — with immediate repeat doses up to 10 mg/kg. ANAESTHETIST actions: stop volatile agents, stop succinylcholine, switch to TIVA (propofol), 100% O2, active cooling. Without dantrolene, MH is > 70% fatal. With dantrolene, mortality < 5%.",
    wrongExplanations: [
      "WRONG: Increasing the ventilator rate treats the symptom (CO2) but does not stop the crisis. The hypermetabolism is generating CO2 faster than can be removed by ventilation changes alone. DANTROLENE is the only treatment that stops the underlying cascade.",
      "WRONG: Completing surgery quickly does not address MH. The volatile anaesthetic agent driving the crisis must be stopped immediately and the patient must receive dantrolene. Continuing surgery prolongs exposure to the triggering agent.",
      "",
      "WRONG: CO2 from laparoscopic insufflation causes MILD elevations in end-tidal CO2 — not a 20 mmHg rise with tachycardia and rising temperature with muscle rigidity. Paracetamol for fever completely misses the diagnosis and delays life-saving dantrolene.",
    ],
  },
  {
    level: "Advanced",
    question: "A 78-year-old woman with hypertension, type 2 diabetes and atrial fibrillation (on rivaroxaban) is admitted for elective right hip replacement. Pre-operative assessment reveals: HbA1c 84 mmol/mol (9.8%), eGFR 28 mL/min, BMI 38, moderate OSA (CPAP at home), previous PONV after cholecystectomy, and she is anxious. The anaesthetist asks the nurse to assist with pre-operative risk stratification and planning. Which combination of pre-operative concerns is MOST important to communicate to the anaesthetic team?",
    options: [
      "Her anxiety and BMI — these are the primary concerns for anaesthetic planning",
      "RIVAROXABAN timing (must be held minimum 24-48 hours for major surgery — check last dose and eGFR for extended hold time in renal impairment), POOR GLYCAEMIC CONTROL (HbA1c 84 — target perioperative glucose 6-10 mmol/L — infection, wound healing and mortality risk), OSA (CPAP must be available post-operatively — continuous monitoring, head-up positioning), HIGH PONV RISK (Apfel score ≥3 — TIVA may be preferred, prophylactic antiemetics), RENAL IMPAIRMENT (eGFR 28 — dose adjustments for all renally-cleared drugs)",
      "Her age and atrial fibrillation — these carry the highest cardiac risk",
      "Her BMI and hypertension — these are the primary modifiable risk factors",
    ],
    correct: 1,
    explanation: "MULTI-SYSTEM PRE-OPERATIVE RISK — COMPREHENSIVE ANALYSIS: RIVAROXABAN: Must be held before surgery. Standard: 24 hours before minor/moderate, 48 hours before major. With eGFR 28 (severe renal impairment), rivaroxaban clearance is significantly reduced — may require LONGER hold time (48-72+ hours). Check last dose timing, calculate hold period with renal pharmacist. POOR GLYCAEMIC CONTROL (HbA1c 84): Associated with: 2-3× higher SSI rate, impaired wound healing, cardiovascular complications, prolonged hospital stay. Perioperative target: 6-10 mmol/L. May benefit from pre-operative endocrinology review if elective surgery timing allows. Metformin must be held (eGFR 28 = already contraindicated). OSA: CRITICAL for post-operative management. This patient uses home CPAP — device must come with her. Post-operatively: CPAP in recovery and on the ward, continuous SpO2 monitoring, head-up positioning, minimise sedatives and opioids. HIGH PONV RISK (Apfel 3-4: female + non-smoker + previous PONV + expected opioid use): TIVA preferred (propofol-based — reduces PONV vs volatile agents), dexamethasone, ondansetron, avoid N2O. RENAL IMPAIRMENT (eGFR 28): Multiple drug dose adjustments required — consult pharmacist. Contrast agents avoided if possible. All these concerns require explicit discussion with anaesthetic team in pre-operative planning.",
    wrongExplanations: [
      "WRONG: Anxiety and BMI are concerns but not the most clinically critical pre-operative issues compared to: anticoagulation timing/reversal, metabolic control, OSA management, PONV risk and renal function — all of which directly affect intraoperative and immediate post-operative patient safety.",
      "",
      "WRONG: Age and AF are important (cardiac risk, stroke risk) but the MOST IMMEDIATELY ACTIONABLE and safety-critical concerns are: the rivaroxaban hold time with renal impairment (must be specifically calculated), the glycaemic control (HbA1c 84 may prompt delay/optimisation), the OSA management plan and the PONV prevention strategy.",
      "WRONG: BMI and hypertension are chronic conditions with less immediately actionable perioperative implications than rivaroxaban timing, glycaemic control and OSA. Hypertension management should be continued (except ACE inhibitors/ARBs on the morning of surgery).",
    ],
  },
  {
    level: "Advanced",
    question: "On post-operative day 3 following an open Whipple procedure (pancreaticoduodenectomy), a nurse is reviewing the patient's drain output. The surgical drain (positioned near the pancreatic anastomosis) has produced 450mL of pale yellow fluid over the past 24 hours. Drain fluid amylase sent at day 1 was normal (65 U/L). Today's drain fluid amylase is 4,800 U/L (serum amylase 85 U/L). The patient has a low-grade fever (37.8°C) and mild abdominal discomfort. Which is the nurse's MOST accurate clinical assessment and action?",
    options: [
      "The drain output is expected after major abdominal surgery — document and continue monitoring",
      "This presentation is consistent with a PANCREATIC FISTULA/POST-PANCREATECTOMY PANCREATIC FISTULA — drain fluid amylase >3× upper limit of normal on day 3 or beyond is diagnostic. Notify the surgeon urgently. Management typically involves: maintaining the drain in situ (do NOT remove — provides controlled drainage), NPO or low-fat enteral nutrition to reduce pancreatic stimulation, octreotide may be prescribed to reduce pancreatic secretion",
      "The patient has a surgical site infection — culture the drain fluid and start antibiotics",
      "The high drain amylase indicates the drain has migrated into the small bowel — remove and replace",
    ],
    correct: 1,
    explanation: "POST-PANCREATECTOMY PANCREATIC FISTULA (POPF) — diagnostic criteria met. ISGPF (International Study Group on Pancreatic Fistula) DEFINITION: Drain fluid amylase >3× the upper limit of serum amylase on or after post-operative day 3, associated with a clinically relevant condition. This patient: Drain amylase 4,800 U/L (serum amylase 85 U/L — 56× the serum level — massively elevated), Day 3 (meets the day 3 criterion), Low-grade fever and abdominal discomfort (Grade B POPF — mild clinical impact). MECHANISM: The pancreatic anastomosis (pancreaticojejunostomy — the most technically demanding and failure-prone anastomosis in abdominal surgery) has a small leak → pancreatic juice leaks into peritoneal space → drain captures it → high amylase in drain fluid. MANAGEMENT: KEEP DRAIN IN SITU (provides controlled drainage — removing it would allow pancreatic juice to accumulate → abscess/peritonitis → Grade C POPF), Notify surgeon, Consider: nil by mouth or low-fat diet/enteral feeds (reduces pancreatic stimulation), Octreotide (somatostatin analogue — reduces pancreatic secretion — used in many centres for POPF), Monitor for complications (delayed gastric emptying — common with POPF, abscess formation, haemorrhage from pseudoaneurysm — catastrophic late complication requiring IR)",
    wrongExplanations: [
      "WRONG: Drain amylase 4,800 with serum amylase 85 is NOT expected post-operative variation. The diagnostic criterion for pancreatic fistula is specifically drain amylase >3× serum amylase — this patient has 56× serum amylase in drain fluid. This is a significant complication requiring active management.",
      "",
      "WRONG: While infection can develop as a secondary complication, the primary pathology here is PANCREATIC FISTULA — recognised by the dramatically elevated drain amylase. Culture the drain fluid but the primary action is notifying the surgeon about the fistula, not empirical antibiotic initiation.",
      "WRONG: Drain migration into bowel would produce intestinal content (faecal material, gas) — not pale yellow fluid with very high amylase. Pancreatic juice is pale yellow/straw-coloured with very high amylase. Removing and replacing a drain when a pancreatic fistula is present would be dangerous.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is doing the pre-operative checklist for a patient scheduled for emergency appendicectomy under general anaesthesia. The patient, a 19-year-old woman, becomes distressed and states 'I don't want the surgery anymore — I'm scared. I didn't really understand what I was agreeing to when I signed.' The anaesthetist says 'We've explained everything, she's just anxious — give her some midazolam and we'll proceed.' The nurse is concerned. What is the nurse's MOST appropriate response?",
    options: [
      "Administer the midazolam as ordered — the anaesthetist has made a clinical decision and the nurse should follow the order",
      "Express concern directly to the anaesthetist and surgeon: A patient who is expressing that she did not understand what she consented to, and is withdrawing consent, cannot have her objection overridden by administering sedation. Administering midazolam to sedate a patient who is attempting to withdraw consent and then proceeding with surgery would constitute ASSAULT. The surgical team must re-explain the procedure and address her concerns before proceeding, or delay surgery while capacity is formally assessed",
      "Ask the patient to sign another consent form — this will re-establish valid consent before surgery",
      "Provide reassurance to the patient that the surgery is safe and explain that her anxiety is normal — then proceed",
    ],
    correct: 1,
    explanation: "CONSENT WITHDRAWAL — CRITICAL ETHICAL AND LEGAL ISSUE. A COMPETENT PATIENT HAS THE ABSOLUTE RIGHT TO WITHDRAW CONSENT AT ANY POINT — even on the table before the first incision, even in an emergency (unless truly unconscious and life is immediately at risk). This patient is saying two things: 'I didn't understand what I was agreeing to' (original consent may be invalid — comprehension is a requirement of valid consent) AND 'I don't want the surgery' (she is withdrawing whatever consent was obtained). ADMINISTERING MIDAZOLAM TO SEDATE A PATIENT WHO IS ATTEMPTING TO WITHDRAW CONSENT AND THEN PROCEEDING WITH SURGERY WOULD CONSTITUTE CRIMINAL ASSAULT AND BATTERY — regardless of the medical team's belief that the surgery is indicated. THIS IS NOT A CLINICAL DECISION — IT IS A LEGAL AND ETHICAL LINE. THE NURSE'S ROLE: EXPRESS CONCERN CLEARLY — 'I cannot administer sedation to a patient who is expressing that she doesn't understand the consent and wants to withdraw it — we need to address this before proceeding.' The surgical team must: explain the procedure again, address her concerns, ensure comprehension, re-obtain valid consent. If she is in immediate life-threatening danger and truly cannot consent, that is a different scenario — but a patient with appendicitis who is conscious and communicating is not yet in that situation. Document everything.",
    wrongExplanations: [
      "WRONG: Following an order to sedate a patient who is withdrawing consent is following an order to commit assault. Professional and legal obligations supersede the instruction to give medication in this scenario. A nurse is legally and professionally accountable for their own actions.",
      "WRONG: Signing a consent form again does not establish valid consent if the patient does not understand the procedure and is expressing withdrawal. Valid consent requires comprehension — a signature alone under duress or without understanding is meaningless.",
      "WRONG: Reassuring the patient and proceeding ignores the patient's explicit statement that she did not understand what she consented to and does not want the surgery. Reassurance followed by proceeding without addressing her stated lack of comprehension violates the consent requirement.",
    ],
  },
];

const clinicalPearls = [
  "The most dangerous moment in perioperative nursing is the one where everyone is too busy, too confident or too pressured to stop. The WHO Surgical Safety Checklist Time Out exists to create a mandatory pause. When a nurse sees a discrepancy between a consent form and the operating list — at any career stage — they have not only the right but the professional obligation to call 'STOP.' A wrong-site surgery that happened because a junior nurse saw the discrepancy and said nothing is a tragedy that belongs to that nurse as much as the surgeon.",
  "Malignant hyperthermia is the emergency where preparation determines survival. The end-tidal CO2 rising unexpectedly is the first warning — not the fever (that comes later, sometimes much later). Every theatre nurse must know where the dantrolene is stored and be prepared to begin mixing vials immediately. Each vial requires 60mL of sterile water and vigorous shaking to dissolve — when you need 9+ vials in 3 minutes, you need more than one pair of hands. Dantrolene preparation drills save lives.",
  "Wound evisceration has two components that nurses routinely get wrong. The first is not recognising it — 'the wound burst' should trigger immediate assessment for bowel visibility. The second is the instinct to push the bowel back — which introduces contamination and can cause perforation. Moist saline gauze, patient supine, nil by mouth, immediate surgical notification. In that order. Every time.",
  "The post-operative patient who is 'just confused' deserves the same urgency as any deteriorating patient. NEW CONFUSION in a post-operative patient represents ACVPU score 'C' — the same score as responding only to voice. Post-operative delirium is the most common neurological complication in elderly patients after surgery and is independently associated with prolonged hospital stay, long-term cognitive decline and death. The delirium prevention bundle — orientation, sleep, mobilisation, sensory aids, adequate analgesia, hydration — is nursing. This is your intervention, not a medical one.",
  "The patient who withdraws consent on the operating table — even for an emergency procedure, even if the team believes surgery is necessary — cannot have their refusal overridden by sedation. A nurse who administers midazolam to sedate a patient who is attempting to withdraw consent and facilitate surgery proceeding is participating in assault. Professional obligation does not end at following orders. Document everything. Express concern clearly. If the procedure proceeds despite your documented concern, you have fulfilled your professional duty. If you administered the sedation in silence, you have not.",
  "Post-operative third-space remobilisation is one of the most misunderstood fluid physiology concepts in clinical practice. Surgical trauma causes massive fluid shifts from the intravascular space into the interstitium (third spacing). This peaks at 24-48 hours and then reverses over days 2-4 as the inflammatory response settles. The patient who is puffy and slightly oliguric on day 1 may be producing 2L of urine per hour on day 3 — this is NORMAL and protective, not a complication requiring diuretics. Giving diuretics during third-space mobilisation in a patient who is already volume-redistributing causes AKI. Understand the physiology.",
  "The discharge teach-back is the only reliable way to know that a patient actually understands their discharge instructions — not that they received them, not that they nodded, not that they have a printed sheet. Ask them to tell you in their own words what symptoms would bring them back, what their medications are for, and what activities they cannot do. A patient who can accurately describe their post-operative red flags in their own words is a patient who will know to call for help when they need to. A patient who received a printed sheet but cannot explain its content will not.",
];

export default function PerioperativePage() {
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
            <h1 className="font-black text-base text-gray-900">🏥 Perioperative Care</h1>
            <p className="text-xs text-gray-500">Physiological Integrity • Important ⭐⭐</p>
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
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
              <p className="text-blue-700 text-sm leading-relaxed font-medium">
                🏥 Perioperative nursing is tested throughout NCLEX. Master pre-operative assessment, informed consent, intraoperative safety, post-operative complications and discharge planning!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most critical perioperative safety points — these save lives and appear on NCLEX!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "🏆 EXCELLENT! You have completed the ENTIRE Physiological Integrity section!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review malignant hyperthermia, consent withdrawal and perioperative complications." :
                        "Keep studying! Focus on surgical safety checklist, informed consent, MH recognition and post-operative assessment."}
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
            <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
              <span className="text-4xl block mb-3">🏆</span>
              <p className="font-black text-green-800 text-lg mb-2">Physiological Integrity COMPLETE!</p>
              <p className="text-green-700 text-sm">You have finished all 13 Physiological Integrity topics — the largest section of NCLEX. Outstanding work mate!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
