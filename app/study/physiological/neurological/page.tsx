"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Neurological Nursing",
    icon: "🧠",
    color: "blue",
    content: [
      "Neurological assessment is the foundation of neuro nursing — detecting subtle changes early prevents catastrophic outcomes",
      "THE BRAIN: 1400g organ consuming 20% of cardiac output. Requires constant glucose and oxygen — irreversible neuronal death begins within 4-6 minutes of ischaemia",
      "MONROE-KELLIE DOCTRINE: The skull is a rigid, fixed-volume compartment containing brain tissue (80%), cerebrospinal fluid (10%) and blood (10%). Increase in any component must be compensated by decrease in another — when compensation fails, ICP rises",
      "NORMAL ICP: 5-15 mmHg (adults). Sustained ICP >20 mmHg = pathological and requires treatment",
      "CEREBRAL PERFUSION PRESSURE (CPP) = MAP − ICP. Normal CPP 60-70 mmHg. CPP <50 mmHg = ischaemia. CPP <40 mmHg = incompatible with survival",
      "CEREBRAL AUTOREGULATION: The brain maintains constant CBF over MAP range 50-150 mmHg through arterial constriction/dilation. Autoregulation may be impaired after TBI, stroke or SAH — making the brain pressure-passive",
      "NCLEX heavily tests: Stroke recognition (FAST) and tPA eligibility, increased ICP assessment and management, seizure classification and nursing care, spinal cord injury, Glasgow Coma Scale and neurological assessment",
      "NEUROLOGICAL NURSING PRIORITY: Any acute change in neurological status = deterioration until proven otherwise. Assess immediately, notify physician, document precisely",
    ],
  },
  {
    title: "Neurological Assessment — GCS and Beyond",
    icon: "🩺",
    color: "green",
    content: [
      "GLASGOW COMA SCALE (GCS): Standardised assessment of level of consciousness. Total score 3-15",
      "EYE OPENING (E): 4=Spontaneous, 3=To voice, 2=To pain, 1=None",
      "VERBAL RESPONSE (V): 5=Oriented, 4=Confused, 3=Inappropriate words, 2=Incomprehensible sounds, 1=None",
      "MOTOR RESPONSE (M): 6=Obeys commands, 5=Localises pain, 4=Withdrawal, 3=Abnormal flexion (decorticate), 2=Abnormal extension (decerebrate), 1=None",
      "GCS interpretation: 13-15=Mild TBI, 9-12=Moderate TBI, ≤8=Severe TBI (intubate — 'GCS ≤8, intubate'). Minimum possible score = 3 (not 0)",
      "DECORTICATE POSTURING (abnormal flexion): Arms flexed, wrists flexed, legs extended. Indicates cortical/subcortical damage — hemispheric lesion above brainstem",
      "DECEREBRATE POSTURING (abnormal extension): Arms extended and internally rotated, legs extended, feet plantarflexed. Indicates brainstem damage — worse prognosis than decorticate",
      "PUPILLARY ASSESSMENT: Size (normal 2-5mm, equal), Reactivity (brisk, sluggish, fixed), Symmetry. FIXED DILATED PUPIL (blown pupil) = ipsilateral herniation compressing CN III (oculomotor nerve) — neurosurgical emergency",
      "VITAL SIGN CHANGES in elevated ICP: CUSHING'S TRIAD — Hypertension (widened pulse pressure), Bradycardia, Irregular/slow respirations. LATE sign of severely elevated ICP/herniation",
      "NEUROLOGICAL ASSESSMENT frequency: Every 15-30 minutes in acute setting, then hourly, then every 2-4 hours as stable. Document EXACT findings — not 'neurologically stable'",
    ],
  },
  {
    title: "Increased Intracranial Pressure (ICP)",
    icon: "🚨",
    color: "red",
    content: [
      "ICP >20 mmHg for >5 minutes = treat. ICP >40 mmHg = life-threatening herniation risk",
      "CAUSES of elevated ICP: Cerebral oedema (cytotoxic — ischaemia/TBI; vasogenic — tumour/abscess/contusion), space-occupying lesions (haematoma, tumour, abscess), hydrocephalus (CSF obstruction), venous sinus thrombosis, hyponatraemia (SIADH)",
      "EARLY ICP SIGNS: Headache (worse in morning — CO2 accumulates lying flat), nausea/vomiting (projectile, not preceded by nausea — direct CN X compression), papilloedema (disc oedema on fundoscopy — NOT visible acutely), personality/behaviour changes, subtle cognitive changes",
      "LATE ICP SIGNS (impending herniation): Decreasing LOC (most sensitive sign of deterioration), ipsilateral fixed dilated pupil (CN III compression), contralateral hemiparesis (corticospinal tract compression), Cushing's triad (hypertension + bradycardia + irregular respirations)",
      "HERNIATION SYNDROMES: Uncal (temporal lobe herniates through tentorium — ipsilateral CN III palsy + contralateral hemiplegia), Central (transtentorial — bilateral signs), Tonsillar (cerebellar tonsils herniate through foramen magnum — fatal — brainstem compression)",
      "ICP MONITORING: External ventricular drain (EVD/ventriculostomy) — measures ICP AND can drain CSF to treat elevated ICP. Intraparenchymal monitor (Licox, Camino). Subdural/epidural monitors",
      "EVD NURSING: Maintain transducer at level of foramen of Monro (outer canthus of eye/tragus of ear), strict aseptic technique, monitor drainage amount and characteristics (normal CSF = clear, colourless), document waveforms, clamp per protocol before repositioning",
      "LUMBAR PUNCTURE: CONTRAINDICATED if ICP elevated — risk of cerebellar tonsillar herniation ('coning'). Always perform CT head first if elevated ICP suspected",
    ],
  },
  {
    title: "ICP — Nursing Management",
    icon: "🛡️",
    color: "red",
    content: [
      "POSITIONING: HOB 30° — reduces venous pooling in head, promotes venous drainage, reduces ICP. Head and neck in neutral alignment — jugular vein compression increases ICP",
      "AVOID ICP-ELEVATING ACTIVITIES: Clustering care, Valsalva manoeuvre (constipation — use stool softeners), suctioning (pre-oxygenate, limit suction time to <15 seconds), coughing, isometric exercises, hip flexion >90°",
      "OSMOTIC THERAPY: MANNITOL 20% — IV bolus 0.25-1.5 g/kg. Osmotic agent — draws water from brain tissue into vasculature. Works in minutes. Monitor serum osmolality (target <320 mOsm/L), electrolytes, urine output. Foley catheter mandatory",
      "HYPERTONIC SALINE (3%, 7.5%, 23.4%): Alternative/adjunct to mannitol. Draws water from brain tissue, maintains intravascular volume. Central line required for concentrations >3%. Monitor sodium levels",
      "SEDATION AND ANALGESIA: Reduces metabolic demand, prevents agitation-induced ICP spikes. Propofol (short-acting, allows neurological assessment), fentanyl (analgesia), midazolam. Monitor for propofol infusion syndrome (prolonged high-dose)",
      "HYPERVENTILATION: Reduces PaCO2 → cerebral vasoconstriction → reduced CBF → reduces ICP. Target PaCO2 35-40 mmHg (normal). Aggressive hyperventilation (PaCO2 <30) only as TEMPORISING measure for impending herniation — causes cerebral ischaemia if prolonged",
      "TEMPERATURE CONTROL: Fever dramatically increases cerebral metabolic rate and worsens secondary injury. Target normothermia aggressively. Targeted Temperature Management (TTM/therapeutic hypothermia) for cardiac arrest and some severe TBI",
      "GLUCOSE CONTROL: Hyperglycaemia worsens neurological outcomes. Target glucose 6-10 mmol/L. Hypoglycaemia equally dangerous — provides no substrate for the brain",
      "SURGICAL OPTIONS: EVD placement (drains CSF), craniectomy (decompressive — removes skull segment to allow brain expansion), haematoma evacuation",
    ],
  },
  {
    title: "Stroke — Ischaemic Stroke Recognition and tPA",
    icon: "⚡",
    color: "red",
    content: [
      "STROKE: Sudden loss of neurological function due to interruption of blood supply to the brain. 87% ischaemic (thrombotic or embolic), 13% haemorrhagic",
      "FAST recognition: Face drooping (asymmetrical smile), Arm weakness (one arm drifts down), Speech difficulty (slurred, garbled, absent), Time to call emergency services",
      "EXTENDED FAST: BE-FAST — Balance loss, Eyes (sudden vision change), Face, Arm, Speech, Time",
      "COMMON STROKE SYMPTOMS: Sudden unilateral weakness/numbness (face, arm, leg), sudden speech difficulty (aphasia — inability to speak/understand, dysarthria — slurred speech), sudden visual disturbance (monocular blindness — amaurosis fugax, hemianopia), sudden severe headache 'worst of life' (haemorrhagic), sudden ataxia/dizziness (posterior circulation)",
      "HAEMORRHAGIC vs ISCHAEMIC STROKE: Cannot be distinguished clinically with certainty — CT HEAD REQUIRED. Haemorrhagic more likely with: sudden severe headache, rapid progression, high BP, patient on anticoagulants, history of hypertension",
      "CT HEAD: Non-contrast CT — rapidly rules out haemorrhage (bright white = blood). Ischaemic changes may not be visible for hours on CT. CT Angiography (CTA) — identifies large vessel occlusion (LVO) for endovascular treatment",
      "IV tPA (ALTEPLASE) ELIGIBILITY for ischaemic stroke:",
      "INCLUSION: Ischaemic stroke with measurable deficit, onset within 4.5 hours (or last known well), CT showing no haemorrhage",
      "EXCLUSIONS (key): Active haemorrhage/coagulopathy, INR >1.7, DOAC use <48 hours, prior stroke/TBI within 3 months, intracranial neoplasm/AVM, BP >185/110 (must be treated to <185/110 BEFORE tPA), blood glucose <2.8 or >22.2 mmol/L, platelet count <100,000",
      "DOOR-TO-NEEDLE TIME: Target <60 minutes from hospital arrival to tPA administration — every minute counts",
    ],
  },
  {
    title: "Stroke — Post-tPA Care and Nursing Management",
    icon: "🏥",
    color: "red",
    content: [
      "POST-tPA MONITORING: Neurological assessment every 15 minutes during infusion, every 30 minutes for 6 hours, then hourly for 16 hours. BP monitoring every 15 minutes for 2 hours, then every 30 minutes for 6 hours, then hourly",
      "BP TARGET post-tPA: Maintain <180/105 for 24 hours. Elevated BP post-tPA dramatically increases haemorrhagic transformation risk",
      "SIGNS OF HAEMORRHAGIC TRANSFORMATION post-tPA: Sudden neurological deterioration, severe headache, new vomiting, sudden hypertension. ACTION: STOP tPA infusion immediately, STAT CT head, notify physician, prepare FFP/cryoprecipitate",
      "NO ANTICOAGULANTS or ANTIPLATELETS for 24 hours post-tPA — risk of haemorrhagic transformation",
      "ENDOVASCULAR THROMBECTOMY (EVT/mechanical thrombectomy): For large vessel occlusion (LVO) — superior to tPA alone for LVO. Window extended to 24 hours in selected patients with favourable imaging (perfusion mismatch). Post-procedure: monitor access site, antiplatelet therapy, neurological monitoring",
      "HAEMORRHAGIC STROKE MANAGEMENT: Blood pressure control (reduce to <160/90 — avoid excessive reduction which worsens ischaemia), reversal of anticoagulation (FFP, PCC for warfarin; idarucizumab for dabigatran; andexanet alfa for Factor Xa inhibitors), neurosurgical consultation, ICP management if elevated",
      "SUBARACHNOID HAEMORRHAGE (SAH): 'Worst headache of life' — thunderclap onset, often with LOC, meningism (neck stiffness, photophobia). Aneurysmal SAH. CT head (bright subarachnoid spaces) → LP if CT negative (xanthochromia — yellow CSF)",
      "SAH COMPLICATIONS: RE-BLEEDING (highest risk first 24 hours — most lethal complication — KEEP BP LOW and ANEURYSM SECURED URGENTLY), VASOSPASM (days 4-14 — causes delayed cerebral ischaemia — TRIPLE H therapy: Hypertension, Haemodilution, Hypervolaemia, or nimodipine), HYDROCEPHALUS (EVD required)",
      "NIMODIPINE: Calcium channel blocker — given to ALL SAH patients for 21 days to reduce vasospasm and improve outcomes. ORAL route only — IV nimodipine is NOT used (causes severe hypotension)",
    ],
  },
  {
    title: "Seizures — Classification and Nursing Care",
    icon: "⚡",
    color: "purple",
    content: [
      "SEIZURE: Abnormal, excessive synchronous neuronal discharge causing transient symptoms",
      "CLASSIFICATION (ILAE 2017):",
      "FOCAL ONSET (previously 'partial'): Begins in one hemisphere. Focal aware (previously simple partial — consciousness preserved), Focal impaired awareness (previously complex partial — consciousness impaired)",
      "GENERALISED ONSET: Both hemispheres simultaneously. Tonic-clonic (grand mal — most recognised), absence (petit mal — brief staring, 3 Hz spike-wave, child), myoclonic, atonic (drop attacks), tonic, clonic",
      "UNKNOWN ONSET: Cannot determine focal vs generalised",
      "TONIC-CLONIC SEIZURE PHASES: Aura (warning — focal onset) → Tonic phase (muscle rigidity, apnoea, cyanosis — 10-20 seconds) → Clonic phase (rhythmic jerking — 1-3 minutes) → Postictal phase (confusion, drowsiness, headache, Todd's paralysis — transient focal weakness)",
      "ABSENCE SEIZURE: Brief (5-30 second) staring spells with loss of awareness. No postictal phase. May have subtle movements (eye blinking, lip smacking). Often mistaken for daydreaming. Triggered by hyperventilation",
      "STATUS EPILEPTICUS: Continuous seizure activity ≥5 minutes OR recurrent seizures without regaining consciousness between episodes. NEUROLOGICAL EMERGENCY",
      "NURSING during active seizure: TIME the seizure, PROTECT from injury (pad bed rails, remove hazards), DO NOT RESTRAIN, DO NOT put anything in mouth (tongue cannot be swallowed — airway adjuncts only), POSITION lateral (recovery position) after convulsions end, OXYGEN, monitor SpO2, document all characteristics",
      "POST-ICTAL CARE: Lateral positioning, airway assessment, oxygen, reorientation, protect from falls, assess for Todd's paralysis, monitor vital signs, document duration and characteristics precisely",
    ],
  },
  {
    title: "Status Epilepticus — Emergency Management",
    icon: "🚨",
    color: "red",
    content: [
      "STATUS EPILEPTICUS (SE): ≥5 minutes of continuous seizure activity OR ≥2 seizures without return of consciousness between them. TIME IS BRAIN",
      "TREATMENT TIMELINE (Neurocritical Care Society Guidelines):",
      "0-5 MINUTES: Stabilise — ABC, oxygen, IV/IO access, blood glucose (treat if hypoglycaemic — D50 50mL IV, or glucagon 1mg IM), thiamine 100mg IV before glucose if alcoholism suspected",
      "5-20 MINUTES (FIRST-LINE): BENZODIAZEPINES — Most effective first-line. Lorazepam (Ativan) 0.1 mg/kg IV (max 4mg/dose) — PREFERRED IV option. Diazepam 0.15 mg/kg IV or 0.2 mg/kg rectal. Midazolam 10mg IM — PREFERRED if no IV access (buccal or intranasal in community)",
      "20-40 MINUTES (SECOND-LINE): If seizure continues after TWO benzodiazepine doses: Phenytoin/Fosphenytoin 20 mg/kg IV (fosphenytoin preferred — faster, less irritant, can give faster), OR Valproate sodium 40 mg/kg IV, OR Levetiracetam 60 mg/kg IV. All reasonable second-line options",
      "40-60 MINUTES (THIRD-LINE/REFRACTORY SE): Anaesthetic agents — Propofol infusion, Midazolam infusion, Thiopentone/Pentobarbital. REQUIRES INTUBATION AND ICU",
      "CONCURRENT ACTIONS: Identify and treat CAUSE (hypoglycaemia, hyponatraemia, hypocalcaemia, infection, drug toxicity, hypoxia, non-compliance with antiepileptics), continuous EEG monitoring in refractory SE, CT head after stabilisation",
      "NURSING PRIORITIES: Airway protection throughout, oxygen, IV access, medication preparation and administration (lorazepam must be refrigerated — check expiry), timing of each drug, continuous monitoring, documentation",
      "PSEUDO-STATUS: Non-epileptic attack disorder (NEAD/psychogenic non-epileptic seizures/PNES) — seizure-like events without electrical correlate. Do NOT respond to antiepileptics. EEG during event is diagnostic. Managed by psychology/psychiatry",
    ],
  },
  {
    title: "Traumatic Brain Injury (TBI)",
    icon: "🤕",
    color: "orange",
    content: [
      "TBI: External force to the head causing brain dysfunction. Leading cause of death and disability in those under 45",
      "CLASSIFICATION: Mild TBI (GCS 13-15, loss of consciousness <30 min, PTA <24 hours — concussion), Moderate (GCS 9-12), Severe (GCS ≤8)",
      "PRIMARY INJURY: Direct mechanical injury at moment of impact — cannot be reversed. Contusion, laceration, diffuse axonal injury (DAI — from rotational forces), haemorrhage",
      "SECONDARY INJURY: Cascade of events following primary injury — cerebral oedema, raised ICP, ischaemia, hypoxia, hyperglycaemia, hyperpyrexia, hypotension. THESE ARE PREVENTABLE AND TREATABLE",
      "EPIDURAL HAEMATOMA (EDH): Blood between skull and dura — usually from middle meningeal artery (temporal fracture). LUCID INTERVAL classic — brief LOC, then lucid period, then rapid deterioration as haematoma expands. Biconvex (lens-shaped) on CT. SURGICAL EMERGENCY",
      "SUBDURAL HAEMATOMA (SDH): Blood between dura and arachnoid. Acute (high-velocity — torn bridging veins), Subacute (3-21 days), Chronic (elderly, alcoholics, on anticoagulants — minor trauma, weeks to months). Crescent-shaped on CT. May be conservative or surgical",
      "INTRACEREBRAL HAEMORRHAGE (ICH): Blood within brain parenchyma. Hypertension most common cause. Lobar (often tumour, AVM, amyloid) vs deep (hypertension, basal ganglia, thalamus)",
      "DIFFUSE AXONAL INJURY (DAI): Widespread axonal disruption from rotational forces. CT often relatively normal but patient severely injured. Poor prognosis in severe form. No specific treatment",
      "SECONDARY INJURY PREVENTION (ABC of TBI): Avoid hypoxia (SpO2 ≥94%), avoid hypotension (SBP ≥110 mmHg — TARGET is ≥110, not 90 — lower threshold worsens outcomes), avoid fever, avoid hypoglycaemia, control ICP, avoid hyponatraemia",
    ],
  },
  {
    title: "Spinal Cord Injury (SCI)",
    icon: "🦴",
    color: "purple",
    content: [
      "SCI: Trauma to the spinal cord causing motor, sensory and/or autonomic dysfunction. ~50% cervical, ~35% thoracic, ~15% lumbar",
      "COMPLETE SCI: Total loss of motor and sensory function BELOW the level of injury (American Spinal Injury Association/ASIA Grade A)",
      "INCOMPLETE SCI: Partial preservation of motor and/or sensory function below injury level. ASIA Grades B-D. Better prognosis than complete",
      "LEVEL OF INJURY determines functional outcomes: C1-C3 (diaphragmatic paralysis — ventilator dependent), C4 (may preserve some diaphragm function), C5 (shoulder/elbow flexion), C6 (wrist extension), C7 (triceps, finger extension), T1-T6 (upper extremity function preserved, thoracic impairment), T7-T12 (partial trunk control), L1-L5 (varying lower extremity), S1-S5 (bladder/bowel/sexual function)",
      "NEUROGENIC SHOCK: In cervical/high thoracic SCI — loss of sympathetic tone → vasodilation + bradycardia + hypotension. Classic triad: hypotension, bradycardia and warm dry skin (vasodilated). Treatment: IV fluids + vasopressors (noradrenaline preferred) + atropine for bradycardia. Target MAP ≥85 mmHg for 7 days",
      "SPINAL SHOCK: Immediate total flaccid paralysis and areflexia below injury level (not the same as neurogenic shock). Lasts days to weeks. Return of bulbocavernosus reflex marks end of spinal shock",
      "AUTONOMIC DYSREFLEXIA (AD): LIFE-THREATENING COMPLICATION in SCI at or above T6. Sudden massive sympathetic discharge triggered by noxious stimulus below injury level",
      "AD PRESENTATION: Sudden severe pounding headache, severe hypertension (SBP >150-200 mmHg), bradycardia (reflex), profuse sweating and flushing ABOVE injury, pallor and goose bumps BELOW injury",
      "AD MANAGEMENT: SIT PATIENT UP (lower BP by orthostasis — FIRST action), IDENTIFY AND REMOVE THE TRIGGER (most common: distended bladder — check/replace catheter, faecal impaction — disimpact with anaesthetic gel, tight clothing, pressure injury, ingrown toenail), antihypertensives if not resolved (GTN sublingual, nifedipine)",
      "COMMON AD TRIGGERS: Bladder distension (most common — kinked catheter, blocked catheter, full bladder), bowel distension/faecal impaction, pressure injury, ingrown toenail, tight clothing, sexual activity, menstrual cramps",
    ],
  },
  {
    title: "Neurodegenerative Disorders",
    icon: "🧬",
    color: "blue",
    content: [
      "PARKINSON'S DISEASE: Progressive dopaminergic neuron loss in substantia nigra. Cardinal features: TRAP — Tremor (resting, pill-rolling, 4-6 Hz, improves with movement), Rigidity (cogwheel, lead pipe), Akinesia/Bradykinesia (slowness of movement), Postural instability (late sign — falls risk)",
      "PARKINSON'S NURSING: Fall prevention (festinating gait, postural instability), medication timing is CRITICAL (never miss or delay levodopa doses — 'off' episodes cause immobility and aspiration risk), aspiration precautions (dysphagia common), constipation management, voice amplifier for hypophonia, speech therapy",
      "LEVODOPA/CARBIDOPA (Sinemet): Standard Parkinson's treatment. Give 30-60 minutes before meals on empty stomach (food reduces absorption). Wearing off phenomenon — effect wanes before next dose. On-off fluctuations. Dyskinesias (involuntary movements) with long-term use",
      "MULTIPLE SCLEROSIS (MS): Autoimmune demyelination of CNS. Relapsing-remitting (most common), Primary progressive, Secondary progressive. Symptoms: optic neuritis, sensory disturbances, weakness, spasticity, fatigue (overwhelming — 'MS fatigue'), bladder dysfunction, cognitive changes",
      "MS NURSING: Avoid heat (Uhthoff's phenomenon — heat worsens symptoms), fall prevention, bladder management (intermittent catheterisation, anticholinergics), fatigue management, depression screening, disease-modifying therapy adherence",
      "AMYOTROPHIC LATERAL SCLEROSIS (ALS/Motor Neurone Disease): Progressive degeneration of upper and lower motor neurones. Weakness, muscle atrophy, fasciculations, eventually respiratory failure. Bulbar involvement — dysphagia, dysarthria. No curative treatment — riluzole slows progression slightly",
      "MYASTHENIA GRAVIS (MG): Autoimmune destruction of acetylcholine receptors at NMJ. Fatigable weakness — worse with activity, improves with rest. Ptosis, diplopia (first symptoms), dysphagia, facial weakness, proximal limb weakness. MYASTHENIC CRISIS: acute severe weakness including respiratory muscles — ICU/ventilation",
      "MG TREATMENT: Pyridostigmine (Mestinon — AChE inhibitor, improves NMJ transmission), immunosuppression (prednisolone, azathioprine), plasma exchange, IVIG, thymectomy",
    ],
  },
  {
    title: "Meningitis and Encephalitis",
    icon: "🦠",
    color: "red",
    content: [
      "MENINGITIS: Inflammation of the meninges (membranes surrounding brain and spinal cord). Bacterial (most serious), viral (most common), fungal (HIV/immunocompromised)",
      "CLASSIC TRIAD of bacterial meningitis: Fever, Neck stiffness (nuchal rigidity), Altered mental status/Photophobia. All three present in only 40-50% — SUSPECT meningitis with any two",
      "MENINGISM SIGNS: Kernig's sign (pain/resistance to knee extension with hip flexed at 90°), Brudzinski's sign (passive neck flexion causes involuntary hip flexion)",
      "MENINGOCOCCAL MENINGITIS: Most feared — Neisseria meningitidis. Non-blanching petechial/purpuric rash = SEPTICAEMIA — can cause DIC and fulminant multi-organ failure within hours",
      "NON-BLANCHING RASH: Press a glass against the skin — if rash does NOT fade = purpuric/petechial rash = meningococcal septicaemia = EMERGENCY. Give IV benzylpenicillin IMMEDIATELY — even before hospital if in community",
      "ISOLATION: Droplet precautions for meningococcal meningitis until 24 hours of effective antibiotics. Notify public health — contacts require prophylaxis (rifampicin, ciprofloxacin)",
      "TREATMENT: Blood cultures THEN immediate IV antibiotics (do NOT delay for LP if clinically unstable). Ceftriaxone first-line. Dexamethasone concurrent with or before first antibiotic dose — reduces inflammation and neurological complications (hearing loss) in bacterial meningitis",
      "LP TIMING: Perform after CT if: focal neurological signs, papilloedema, GCS <13, new seizure, immunocompromised — to exclude raised ICP (herniation risk). Do NOT delay antibiotics for LP",
      "ENCEPHALITIS: Inflammation of brain parenchyma. HSV encephalitis (most common treatable cause) — temporal lobe involvement, EEG abnormalities, CSF pleocytosis. TREATMENT: Acyclovir 10 mg/kg IV 8-hourly — start IMMEDIATELY if HSV encephalitis suspected. Never delay acyclovir waiting for confirmation — the consequences of untreated HSV encephalitis are devastating",
    ],
  },
  {
    title: "Guillain-Barré Syndrome (GBS)",
    icon: "⚡",
    color: "orange",
    content: [
      "GBS: Acute immune-mediated polyneuropathy — ascending demyelinating paralysis typically following infection (Campylobacter jejuni most common, also CMV, EBV, influenza, COVID-19, Zika virus)",
      "PATHOPHYSIOLOGY: Molecular mimicry — antibodies against infectious agent cross-react with gangliosides in peripheral myelin → demyelination → ascending flaccid paralysis",
      "CLINICAL PRESENTATION: Ascending weakness (starts in legs, progresses upward), areflexia (absent reflexes — distinguishes from stroke), sensory symptoms (tingling, paraesthesia), autonomic dysfunction, peak deficit at 2-4 weeks",
      "RESPIRATORY MONITORING is the CRITICAL NURSING PRIORITY: GBS can paralyse respiratory muscles — respiratory failure is the leading cause of death. Monitor: vital capacity (VC) — intubate if VC <20 mL/kg or declining, FVC <1L, inability to count to 20 in one breath (20/30 rule)",
      "20/30 RULE for GBS respiratory monitoring: VC <20 mL/kg, FVC <30% predicted, MIP less negative than -30 cmH2O — any of these thresholds = consider elective intubation",
      "AUTONOMIC INSTABILITY in GBS: BP fluctuations (hypertension AND hypotension), arrhythmias, ileus, urinary retention — continuous cardiac monitoring mandatory. Treat hypertension cautiously — hypotension follows easily",
      "TREATMENT: IVIG (IV immunoglobulin) 2 g/kg over 5 days — most common treatment. Plasma exchange (plasmapheresis) — equally effective. STEROIDS DO NOT HELP in GBS — this is a key NCLEX fact",
      "NURSING CARE: Respiratory monitoring (most critical), pain management (neuropathic pain common — gabapentin, opioids), pressure injury prevention (immobile patients), DVT prophylaxis, bowel and bladder management, psychosocial support (locked-in experience), communication aids",
      "PROGNOSIS: 85% recover to walk independently. Recovery can take months. Residual fatigue and sensory symptoms common. Mortality ~5% (mainly from respiratory failure, infection, autonomic instability)",
    ],
  },
];

const mnemonics = [
  {
    title: "Glasgow Coma Scale",
    acronym: "EMV",
    breakdown: ["Eyes (1-4): Spontaneous/Voice/Pain/None", "Motor (1-6): Obeys/Localises/Withdraws/Flexion/Extension/None", "Verbal (1-5): Oriented/Confused/Inappropriate/Sounds/None"],
    memory: "EMV — Eyes Motor Verbal. GCS ≤8 = intubate! Minimum score = 3 (not zero). Motor response is the MOST prognostically important component!",
    color: "green",
  },
  {
    title: "Cushing's Triad — Late ICP Sign",
    acronym: "HBR",
    breakdown: ["Hypertension (widened pulse pressure)", "Bradycardia", "Respiratory changes (slow, irregular)"],
    memory: "HBR — Hypertension, Bradycardia, Respiratory changes = Cushing's Triad = late sign of herniation. If you see this triad — act immediately, herniation is imminent!",
    color: "red",
  },
  {
    title: "Stroke Recognition — BE-FAST",
    acronym: "BEFAST",
    breakdown: ["Balance loss", "Eyes (vision change)", "Face drooping", "Arm weakness", "Speech difficulty", "Time to call 000/911"],
    memory: "BE-FAST — Balance, Eyes, Face, Arm, Speech, Time. Time is brain — 1.9 million neurons die every minute of untreated stroke!",
    color: "red",
  },
  {
    title: "Status Epilepticus Treatment Timeline",
    acronym: "BAT",
    breakdown: ["Benzodiazepines (0-20 min — first line)", "Antiepileptics (20-40 min — phenytoin/valproate/levetiracetam)", "Thiopentone/Propofol/Anaesthesia (40+ min — refractory)"],
    memory: "BAT — Benzo, Anti-epileptic, Then anaesthesia. Time each intervention — 'Time is brain' applies to status epilepticus too!",
    color: "purple",
  },
  {
    title: "Autonomic Dysreflexia — First Action",
    acronym: "SUF",
    breakdown: ["Sit patient UP (first action — orthostatic BP drop)", "Undo tight clothing/check catheter/check bowel (find trigger)", "Fix the trigger and give antihypertensives if needed"],
    memory: "SUF — Sit Up First! Then find and fix the trigger (usually blocked bladder). Autonomic dysreflexia is a hypertensive emergency in SCI above T6!",
    color: "orange",
  },
];

const alerts = [
  { text: "FIXED DILATED PUPIL (blown pupil) = ipsilateral uncal herniation compressing CN III = NEUROSURGICAL EMERGENCY. Notify immediately — irreversible brain damage occurs within minutes!", severity: "high" },
  { text: "CUSHING'S TRIAD (hypertension + bradycardia + irregular respirations) = LATE sign of severely elevated ICP and impending herniation. This is a pre-death finding!", severity: "high" },
  { text: "GCS ≤8 = INTUBATE. 'GCS 8, intubate' is the standard clinical threshold — inability to protect airway leads to aspiration and secondary brain injury!", severity: "high" },
  { text: "LUMBAR PUNCTURE is CONTRAINDICATED in elevated ICP — risk of cerebellar tonsillar herniation ('coning'). Always perform CT head FIRST if elevated ICP is suspected!", severity: "high" },
  { text: "STATUS EPILEPTICUS: Seizure >5 minutes = give benzodiazepine NOW. Time is brain — every minute of SE causes irreversible neuronal death!", severity: "high" },
  { text: "AUTONOMIC DYSREFLEXIA: SIT THE PATIENT UP FIRST — orthostatic effect reduces BP immediately. Then find and remove the trigger (usually blocked catheter)!", severity: "high" },
  { text: "NEUROGENIC SHOCK (SCI): Bradycardia + hypotension + warm skin (NOT cold as in haemorrhagic shock). Target MAP ≥85 mmHg for 7 days — use vasopressors!", severity: "high" },
  { text: "MENINGOCOCCAL RASH: Non-blanching petechial/purpuric rash = give benzylpenicillin IMMEDIATELY — even before hospital if in community. Minutes matter!", severity: "high" },
  { text: "GBS: Steroids do NOT help and may worsen GBS. Treatment is IVIG or plasmapheresis. This is a high-yield NCLEX fact!", severity: "high" },
  { text: "POST-tPA: NO anticoagulants or antiplatelets for 24 hours. Monitor BP every 15 minutes — target <180/105. Any neurological deterioration = stop tPA, STAT CT!", severity: "high" },
  { text: "DECORTICATE (flexion) is LESS severe than DECEREBRATE (extension). Decorticate = cortical damage. Decerebrate = brainstem damage = worse prognosis!", severity: "medium" },
  { text: "EVD (External Ventricular Drain): Transducer at LEVEL of foramen of Monro (outer canthus of eye). Incorrect levelling gives false ICP readings!", severity: "medium" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A nurse is assessing a patient with a traumatic brain injury. The patient opens eyes only to painful stimulation, makes incomprehensible sounds and demonstrates abnormal EXTENSION of all extremities to painful stimuli. What is this patient's Glasgow Coma Scale score and what does the motor response indicate?",
    options: [
      "GCS 6 — decorticate posturing indicating cortical damage with relatively better prognosis",
      "GCS 5 — decerebrate posturing indicating brainstem damage with poor prognosis",
      "GCS 6 — decerebrate posturing (abnormal extension) indicating brainstem damage with poor prognosis",
      "GCS 7 — the patient is in a vegetative state",
    ],
    correct: 2,
    explanation: "GCS CALCULATION: Eyes open to pain = E2. Incomprehensible sounds = V2. Abnormal extension (decerebrate) = M2. Total = E2 + V2 + M2 = GCS 6. DECEREBRATE POSTURING (abnormal extension — M2): Arms extended and internally rotated, wrists flexed, legs extended, feet plantarflexed. Indicates damage at the level of the BRAINSTEM (midbrain/upper pons) — a worse prognosis than decorticate posturing. DECORTICATE POSTURING (abnormal flexion — M3): Arms flexed, wrists flexed, legs extended. Indicates cortical/subcortical damage above the brainstem — relatively better prognosis. Memory: DeCortiCate = Cortex damaged (arms Curl toward Cortex). DecerebRate = bRainstem damaged (arms extend aRate away).",
    wrongExplanations: [
      "WRONG: GCS 6 is calculated correctly but the motor response described (EXTENSION) is DECEREBRATE, not decorticate. Decorticate = flexion. The distinction is critical — decerebrate indicates brainstem damage and carries a worse prognosis.",
      "WRONG: GCS 5 would require one lower component score. E2 + V2 + M2 = 6, not 5. Recalculate: eyes to pain=2, incomprehensible sounds=2, abnormal extension=2, total=6.",
      "",
      "WRONG: GCS 7 would require higher component scores than described. Vegetative state is a clinical diagnosis not directly equivalent to a GCS score. The correct GCS is 6.",
    ],
  },
  {
    level: "Knowledge",
    question: "A patient with a C5 complete spinal cord injury suddenly develops a severe pounding headache, blood pressure of 198/110 mmHg, bradycardia of 52 bpm, profuse diaphoresis above the neck and pallor below the neck. The urinary catheter bag is empty despite 4 hours since last emptied. What is the nurse's FIRST priority action?",
    options: [
      "Administer IV antihypertensive medication immediately — BP of 198/110 is a hypertensive emergency requiring urgent pharmacological treatment",
      "Notify the physician of the hypertensive emergency — this situation requires medical management",
      "Sit the patient upright immediately and check/replace the urinary catheter — this is autonomic dysreflexia likely triggered by bladder distension",
      "Perform a 12-lead ECG — the bradycardia must be investigated before treating the hypertension",
    ],
    correct: 2,
    explanation: "This is AUTONOMIC DYSREFLEXIA (AD) — a life-threatening syndrome in SCI at or above T6. Classic presentation: sudden severe headache, severe hypertension, bradycardia (reflex), diaphoresis/flushing ABOVE injury, pallor/piloerection BELOW injury. The empty catheter bag after 4 hours strongly suggests BLADDER DISTENSION — the most common trigger. FIRST ACTION: SIT THE PATIENT UPRIGHT immediately — orthostatic effect from sitting up reduces BP by 10-40 mmHg without medication. This is THE FIRST action. THEN: Check catheter (kinked? blocked?), irrigate or replace catheter to relieve bladder distension — this removes the trigger. If BP remains elevated after trigger removal — then antihypertensive therapy (sublingual GTN, nifedipine). Calling the physician and ECG are appropriate but NOT the first action — sitting up and relieving the trigger must happen immediately.",
    wrongExplanations: [
      "WRONG: Antihypertensives are not the FIRST action. Sitting up immediately and removing the trigger (bladder distension) must happen first — this may resolve the AD without medication. Giving antihypertensives first without removing the trigger is incomplete management.",
      "WRONG: Physician notification is important but must occur SIMULTANEOUSLY with the nursing interventions (sit up, check catheter). Notifying the physician before taking immediate action wastes critical time in a condition that can cause stroke within minutes.",
      "",
      "WRONG: ECG is not the priority when the patient has a known SCI and classic AD presentation with a likely trigger (empty catheter). The bradycardia in AD is a REFLEX response to hypertension — treat the hypertension by removing the trigger, and bradycardia will resolve.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is monitoring a patient who received IV tPA 90 minutes ago for an acute ischaemic stroke. The patient was improving, but the nurse now notices the patient has a sudden severe headache, blood pressure has increased from 152/88 to 198/114 and the patient is vomiting. The patient's right-sided weakness has worsened. What is the nurse's IMMEDIATE priority action?",
    options: [
      "Increase the tPA infusion rate — the worsening weakness suggests the clot has not fully dissolved",
      "Stop the tPA infusion immediately, perform an urgent neurological assessment, notify the physician urgently and prepare for stat CT head — these are signs of haemorrhagic transformation",
      "Administer IV antihypertensive medication — the hypertension is causing the neurological deterioration",
      "Position the patient flat and administer IV fluids — the symptoms suggest hypotension-induced ischaemia",
    ],
    correct: 1,
    explanation: "This patient shows classic signs of HAEMORRHAGIC TRANSFORMATION post-tPA: Sudden severe headache (blood in subarachnoid/intracerebral space), sudden hypertension (Cushing's response to rising ICP), vomiting (ICP), neurological DETERIORATION (worsening weakness — expanding haematoma). IMMEDIATE ACTIONS: STOP the tPA infusion IMMEDIATELY — do not delay. Perform detailed neurological assessment (GCS, pupils, motor function). Notify physician URGENTLY. Arrange STAT CT head (non-contrast — will show haemorrhage as bright white). Prepare for reversal of thrombolysis: cryoprecipitate (replace fibrinogen), FFP, platelet transfusion if needed, neurosurgical consultation. Blood pressure management per neurosurgical guidance. This is a life-threatening complication occurring in approximately 6% of tPA-treated patients.",
    wrongExplanations: [
      "WRONG: Increasing tPA infusion would cause catastrophic worsening of intracranial haemorrhage. Neurological deterioration post-tPA is haemorrhagic transformation until proven otherwise — STOP the infusion immediately.",
      "",
      "WRONG: While hypertension management may be needed, administering antihypertensives WITHOUT first stopping the tPA and getting a CT head misses the priority — the tPA must be stopped immediately as the first action.",
      "WRONG: Position flat and IV fluids is the opposite of what is needed — the patient has signs of elevated ICP (headache, vomiting, deterioration). HOB elevation and CT head are the priorities, not flat positioning and fluids.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a 28-year-old patient with Guillain-Barré Syndrome who was admitted 5 days ago with ascending weakness. This morning, the patient's forced vital capacity (FVC) has decreased from 2.8L to 1.2L over 6 hours and the patient reports increasing difficulty breathing. Oxygen saturation is 94% on room air. What is the nurse's MOST urgent priority?",
    options: [
      "Apply supplemental oxygen via nasal cannula and reassess in 1 hour — SpO2 94% is adequate",
      "Position the patient in high Fowler's and encourage deep breathing exercises to improve FVC",
      "Notify the physician urgently regarding the declining FVC — this patient may require elective intubation before respiratory arrest occurs. Prepare for potential intubation",
      "Administer IVIG — this will treat the underlying GBS and improve the FVC",
    ],
    correct: 2,
    explanation: "This patient is approaching the THRESHOLD FOR INTUBATION in GBS. The 20/30 rule: intubation is considered when FVC <20 mL/kg or FVC <30% predicted. In a 70kg adult, 20 mL/kg = 1.4L. This patient's FVC of 1.2L is BELOW this threshold. Additionally, the RATE of decline is alarming — dropping from 2.8L to 1.2L in 6 hours. SpO2 94% may appear reassuring but is a late sign — by the time SpO2 drops significantly in GBS, the patient is in severe respiratory failure. The principle in GBS is ELECTIVE intubation before respiratory arrest — intubating a haemodynamically unstable patient in arrest is significantly more dangerous. Notify physician urgently, prepare intubation equipment, continuous monitoring. IVIG takes days to show effect — it does not acutely improve respiratory muscle function in the short term.",
    wrongExplanations: [
      "WRONG: SpO2 94% is dangerously misleading in GBS. Oxygen saturation is maintained until very late — by then, intubation in emergency is far more dangerous than elective intubation now. The FVC trajectory is the critical measure.",
      "WRONG: Deep breathing exercises will not reverse GBS-related respiratory muscle paralysis and may exhaust the patient. The FVC decline indicates progressive muscle weakness — deep breathing is not a treatment.",
      "",
      "WRONG: IVIG is the correct treatment for GBS but it takes 3-5 days to have effect. It does not acutely prevent impending respiratory failure. The immediate priority is airway protection.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a patient with confirmed bacterial meningitis caused by Neisseria meningitidis. Which combination of interventions is MOST appropriate for this patient?",
    options: [
      "Contact precautions, IV vancomycin, avoid dexamethasone in adults",
      "Airborne precautions, IV penicillin, oral dexamethasone",
      "Droplet precautions for 24 hours of effective antibiotics, IV ceftriaxone, IV dexamethasone concurrent with or before first antibiotic dose, notify public health",
      "Standard precautions only, IV meropenem, dexamethasone after 48 hours of antibiotics",
    ],
    correct: 2,
    explanation: "Meningococcal meningitis management: ISOLATION — DROPLET PRECAUTIONS (large droplets — not airborne, not contact). Continue for first 24 hours of effective antibiotic therapy. ANTIBIOTICS — Ceftriaxone is first-line for bacterial meningitis. Benzylpenicillin if meningococcal confirmed. DEXAMETHASONE — IV, given WITH or BEFORE the first antibiotic dose (reduces CSF inflammation that damages hearing and neurological outcomes). Evidence strongest for Streptococcus pneumoniae meningitis but given empirically to all bacterial meningitis. Delay reduces benefit. CONTACT TRACING AND PROPHYLAXIS — notify public health immediately, close contacts require chemoprophylaxis (rifampicin, ciprofloxacin or ceftriaxone). Airborne precautions are for TB/measles/varicella — NOT meningococcal. Contact precautions alone are insufficient.",
    wrongExplanations: [
      "WRONG: Contact precautions alone are insufficient. Meningococcal meningitis requires DROPLET precautions. Dexamethasone is recommended in adults — avoiding it increases risk of neurological complications.",
      "WRONG: Airborne precautions are for TB, measles and varicella — not for meningococcal meningitis which requires DROPLET precautions. Oral dexamethasone is less effective than IV.",
      "",
      "WRONG: Standard precautions alone do not include the droplet precautions required. Dexamethasone must be given WITH or BEFORE the first antibiotic dose — waiting 48 hours significantly reduces its benefit.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a 45-year-old patient admitted with a severe traumatic brain injury (GCS 7) following a motor vehicle accident. ICP monitoring shows ICP 28 mmHg (normal <20). MAP is 82 mmHg. The physician orders mannitol 100g IV. Before administering the mannitol, the nurse reviews labs: serum osmolality 328 mOsm/L, sodium 148 mEq/L, BUN 32, creatinine 1.8. What is the nurse's PRIORITY concern before administering mannitol?",
    options: [
      "Administer mannitol as ordered — ICP of 28 requires urgent treatment and the physician has assessed the risks",
      "Serum osmolality of 328 mOsm/L EXCEEDS the safe ceiling for mannitol administration (>320 mOsm/L). Withhold mannitol and notify physician urgently — administering mannitol above this threshold increases risk of acute renal failure and paradoxical ICP elevation",
      "The sodium of 148 is mildly elevated but the mannitol is more urgently needed — administer and monitor",
      "Calculate CPP first — CPP = MAP − ICP = 82 − 28 = 54 mmHg, which is borderline. Administer mannitol to lower ICP and improve CPP",
    ],
    correct: 1,
    explanation: "MANNITOL SAFE CEILING: Serum osmolality should be maintained BELOW 320 mOsm/L before administering mannitol. This patient's osmolality is 328 mOsm/L — ABOVE the safe threshold. Continuing to administer mannitol in a hyperosmolar patient causes: acute tubular necrosis (renal failure — the concentrated hyperosmolar state damages renal tubules), paradoxical ICP ELEVATION (when osmolality exceeds the brain's capacity to respond, water may move INTO rather than OUT of brain cells), and worsening hypernatraemia. The CPP is also concerning (54 mmHg — marginal, as normal CPP is 60-70 mmHg) — this is important context but does NOT justify administering mannitol above the safe osmolality threshold. Alternative ICP-lowering strategies should be discussed with the physician: hypertonic saline (does not have the same osmolality ceiling concern), EVD drainage, sedation optimisation, positioning.",
    wrongExplanations: [
      "WRONG: The physician orders mannitol but the nurse has identified a critical contraindication — serum osmolality >320 mOsm/L. The nurse's professional obligation is to withhold and notify, not blindly administer. Physician orders do not override patient safety.",
      "",
      "WRONG: Sodium 148 is part of the hyperosmolar picture — but the critical contraindication is the SERUM OSMOLALITY of 328 mOsm/L exceeding the 320 threshold. Simply noting mild hypernatraemia misses the key safety issue.",
      "WRONG: CPP of 54 mmHg is indeed marginal and does need attention — but this does not justify administering mannitol above the safe osmolality ceiling. The physician needs to be notified of the osmolality and an alternative treatment plan made.",
    ],
  },
  {
    level: "Advanced",
    question: "A 67-year-old woman presents to the emergency department with sudden onset left-sided weakness, facial drooping, slurred speech and confusion that began 3 hours ago. BP is 192/108. CT head shows no haemorrhage. Troponin is mildly elevated at 0.08 ng/mL (normal <0.04). ECG shows new atrial fibrillation. Blood glucose is 18.2 mmol/L. INR is 1.1. Platelets are 188,000. The stroke team is considering IV tPA. Which finding represents the MOST significant concern for tPA administration?",
    options: [
      "BP of 192/108 — hypertension above 185/110 is an absolute contraindication to tPA",
      "Mildly elevated troponin — cardiac injury contraindicates thrombolysis",
      "Blood glucose of 18.2 mmol/L — this EXCEEDS the tPA exclusion threshold of >22.2 mmol/L — this is not a contraindication at this level",
      "BP of 192/108 requires treatment — once BP is reduced to <185/110, tPA can proceed. The troponin and AF are not contraindications. The glucose of 18.2 is below the exclusion threshold of 22.2 mmol/L and should be managed but does not preclude tPA",
    ],
    correct: 3,
    explanation: "This complex scenario requires systematic analysis of each potential contraindication: BP 192/108: SBP >185 or DBP >110 = relative contraindication requiring treatment before tPA. This BP CAN be treated (IV labetalol, nicardipine) to <185/110 to allow tPA — it is NOT an absolute barrier. Troponin elevation: Mild troponin elevation in stroke is common (Takotsubo, demand ischaemia, cardiac embolism) and is NOT a tPA contraindication. AF: Confirms cardioembolic stroke — actually SUPPORTS the diagnosis but is not a contraindication. Glucose 18.2 mmol/L: The exclusion threshold is GLUCOSE >22.2 mmol/L — this patient at 18.2 is BELOW the exclusion. Hyperglycaemia worsens outcomes but does not preclude tPA at this level. INR 1.1 and platelets 188,000 — both acceptable. CONCLUSION: The most significant concern is the BP (treatable), but once BP is controlled to <185/110, all other factors are acceptable. The nurse must understand which thresholds are absolute and which are modifiable.",
    wrongExplanations: [
      "WRONG: BP >185/110 is a relative, TREATABLE contraindication — not absolute. Treat the BP with IV labetalol or nicardipine to <185/110, then proceed with tPA. Understanding this distinction is critical.",
      "WRONG: Mild troponin elevation is NOT a contraindication to tPA for ischaemic stroke. It is common in stroke patients (demand ischaemia, cardiac embolism, Takotsubo cardiomyopathy) and does not preclude treatment.",
      "WRONG: Glucose 18.2 mmol/L is below the exclusion threshold of >22.2 mmol/L and does not contraindicate tPA. It should be managed to optimise outcomes but is not a barrier to tPA at this level.",
      "",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a patient with a severe subarachnoid haemorrhage from a ruptured aneurysm on day 8 of admission. The aneurysm was secured by coiling on day 1. This morning, the patient, who was conversing yesterday, is now confused, has new right-sided weakness and GCS has dropped from 14 to 10. BP is 118/72 and temperature is 37.4°C. CT angiography shows no re-bleeding. What is the MOST likely complication and the MOST appropriate nursing action?",
    options: [
      "Hydrocephalus — prepare for emergency EVD insertion",
      "Re-bleeding — prepare for emergency angiography and re-coiling",
      "Cerebral vasospasm causing delayed cerebral ischaemia — notify physician urgently, review nimodipine administration, prepare for induced hypertension (vasopressor therapy) and consider urgent CT perfusion/angiography",
      "Meningitis from the haemorrhage — obtain blood cultures and prepare to start antibiotics",
    ],
    correct: 2,
    explanation: "CEREBRAL VASOSPASM is the most likely diagnosis. KEY EVIDENCE: Day 8 post-SAH (vasospasm occurs days 4-14, peaks days 7-10), new neurological deterioration (confusion, new focal deficit — right-sided weakness), CT angiography shows NO re-bleeding (ruling out re-bleed), BP is 118/72 (relatively low — perfusion-dependent brain cannot autoregulate). CEREBRAL VASOSPASM → DELAYED CEREBRAL ISCHAEMIA (DCI): Blood in the subarachnoid space triggers vasospasm of cerebral arteries → reduced cerebral blood flow → ischaemia → infarction. MANAGEMENT: Verify nimodipine administration (60mg oral every 4 hours — must not be missed — reduces vasospasm-related morbidity). Notify physician URGENTLY. Prepare for INDUCED HYPERTENSION (vasopressors — noradrenaline — to drive blood through vasospastic vessels — former triple H therapy, now primarily induced hypertension). CT perfusion or DSA angiography to confirm vasospasm. Endovascular treatment: intra-arterial verapamil or balloon angioplasty for severe vasospasm. Avoid hypotension absolutely.",
    wrongExplanations: [
      "WRONG: Hydrocephalus is a complication of SAH (CSF drainage impairment) but typically presents earlier and with different features. CT showed no re-bleeding — if hydrocephalus were present, it would show dilated ventricles. Vasospasm is more consistent with day 8 and new focal deficit.",
      "WRONG: CT angiography has already excluded re-bleeding — this is stated in the question. Re-bleeding occurs predominantly in the first 24 hours (highest risk) and was prevented by securing the aneurysm on day 1.",
      "",
      "WRONG: Meningitis is possible after SAH (blood is irritating and the blood-brain barrier is disrupted) but does not explain the new focal deficit (right-sided weakness). Infectious meningitis would present with fever, meningism and more gradual deterioration. Day 8 focal deficit post-SAH is vasospasm until proven otherwise.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a 52-year-old patient who is day 3 post-craniotomy for a right-sided glioblastoma multiforme. The patient had normal neurological findings post-operatively. At 2am, the charge nurse notifies the primary nurse that the patient's wife called saying her husband 'seems confused and keeps saying his left arm is weak.' The on-call physician says 'I reviewed the notes, he was fine at 10pm, it's probably pain medications, reassess in the morning.' What is the nurse's MOST appropriate response?",
    options: [
      "Follow the physician's instructions — the physician has reviewed the notes and made a clinical assessment",
      "Reassess the patient now, conduct a full neurological assessment, document findings, and if any new neurological deficit is confirmed, escalate to the physician again with specific findings — a new post-craniotomy neurological deterioration at any hour is a neurosurgical emergency",
      "Call the family to get more information before waking the patient — it may just be confusion from sleep",
      "Administer PRN analgesia as the physician suggested and document 'patient reassessed, pain controlled'",
    ],
    correct: 1,
    explanation: "NEW NEUROLOGICAL DETERIORATION in a post-craniotomy patient at ANY TIME is a potential neurosurgical emergency. This is not negotiable, regardless of time of day or physician dismissal. Causes of post-craniotomy deterioration include: intracerebral haemorrhage (most urgent), cerebral oedema, seizure (post-ictal weakness/Todd's paralysis), air embolism, meningitis. The nurse's professional and legal obligation: ASSESS THE PATIENT NOW (full GCS, pupils, motor function, speech, orientation). If new neurological deficit confirmed → RE-ESCALATE to physician with SPECIFIC OBJECTIVE FINDINGS: 'The patient has left arm power 2/5 compared to 5/5 documented at 10pm, GCS has decreased from 15 to 12, left-sided facial droop is new.' This is clear, escalation-worthy information. If still dismissed → escalate through chain of command (charge nurse, senior doctor, RRT). Documenting 'pain controlled' without assessment is fraudulent documentation.",
    wrongExplanations: [
      "WRONG: Following the physician's instructions without independent patient assessment is below the standard of nursing care. The nurse has an independent professional duty to assess and advocate for the patient. A physician's phone assessment cannot replace bedside neurological assessment.",
      "",
      "WRONG: Calling the family before assessing the patient delays the neurological assessment. The family report of new confusion and left arm weakness is concerning and requires immediate patient assessment — not further information gathering.",
      "WRONG: Documenting 'pain controlled' without conducting a neurological assessment is fraudulent documentation and a patient safety failure. The physician suggested a cause (pain medications) — the nurse must assess whether this is accurate before accepting it.",
    ],
  },
  {
    level: "Advanced",
    question: "A patient is admitted with new-onset generalised tonic-clonic seizures. The seizure has now lasted 8 minutes despite receiving lorazepam 4mg IV 6 minutes ago. The second lorazepam dose (4mg IV) was given 2 minutes ago. The seizure continues. The patient is intubated. What is the MOST appropriate NEXT intervention according to status epilepticus management guidelines?",
    options: [
      "Give a third dose of lorazepam — more benzodiazepine will eventually stop the seizure",
      "Administer a second-line antiepileptic agent — fosphenytoin 20 mg PE/kg IV, OR valproate sodium 40 mg/kg IV, OR levetiracetam 60 mg/kg IV",
      "Initiate propofol infusion — third-line anaesthetic therapy is indicated",
      "Wait 20 minutes for the second lorazepam dose to fully take effect before escalating",
    ],
    correct: 1,
    explanation: "STATUS EPILEPTICUS TREATMENT ALGORITHM: 0-20 minutes: Two doses of benzodiazepines (THIS HAS OCCURRED — lorazepam 4mg x2). The second dose was given 2 minutes ago — it has had time to act. The seizure continues despite TWO benzodiazepine doses = benzodiazepine-refractory SE. NEXT STEP: Second-line antiepileptic agent (20-40 minute window): All three are reasonable evidence-based options: FOSPHENYTOIN 20 mg phenytoin equivalent (PE)/kg IV (preferred over phenytoin — fewer adverse effects, can give faster), OR VALPROATE 40 mg/kg IV (cannot use in women of childbearing age without pregnancy exclusion, liver disease), OR LEVETIRACETAM 60 mg/kg IV (safest in pregnancy, no drug interactions, no monitoring required). DO NOT give a third benzodiazepine dose — two doses are the standard. Propofol (third-line) is not yet indicated — second-line must be tried first. Waiting 20 minutes in ongoing convulsive SE is dangerous — act now.",
    wrongExplanations: [
      "WRONG: A third benzodiazepine dose is not recommended — the evidence and guidelines specify TWO doses before moving to second-line agents. Additional benzodiazepines increase respiratory depression risk without meaningfully improving seizure termination rate.",
      "",
      "WRONG: Propofol infusion is THIRD-LINE therapy for REFRACTORY status epilepticus (when second-line agents have also failed). It is not the next step after failed benzodiazepines. Second-line antiepileptics must be tried first.",
      "WRONG: Waiting 20 minutes in ongoing convulsive status epilepticus causes irreversible neuronal injury. Each minute of SE increases neuronal death and makes subsequent treatment less effective. Act immediately with second-line agents.",
    ],
  },
];

const clinicalPearls = [
  "The most dangerous neurological normalisation in clinical nursing is 'he was confused last night — it's probably just sundowning.' New confusion in a post-operative patient, in a patient on anticoagulants, in a patient with hypertension, in ANY patient who just had a procedure near the brain — is a neurological emergency until proven otherwise. Assess now. Document precisely. Escalate if anything changes.",
  "Decorticate posturing (arms curling inward, toward the cortex) is bad. Decerebrate posturing (arms extending outward, away from everything) is worse. Knowing this distinction tells you where in the brain the damage is — cortex vs brainstem. The direction matters clinically and on NCLEX.",
  "In subarachnoid haemorrhage, the two most lethal complications are separated by time: re-bleeding peaks in the first 24 hours (prevent by securing the aneurysm urgently), and vasospasm peaks on days 7-10 (prevent with nimodipine and induced hypertension). Missing either window costs lives.",
  "The silent presentation of status epilepticus: after a convulsive seizure, if a patient fails to return to normal consciousness within 30-60 minutes — non-convulsive status epilepticus (NCSE) must be considered. The brain can seize electrically without visible convulsions. EEG is the only diagnostic tool. Failing to recognise NCSE leads to prolonged brain injury.",
  "In GBS, SpO2 is a dangerously late warning sign of respiratory failure. By the time SpO2 drops, the patient is in extremis. The FVC is your warning system — measure it frequently, know the thresholds (FVC <20 mL/kg or FVC <1.5L are common thresholds for elective intubation consideration). Elective intubation in a stable patient is infinitely safer than emergency intubation in a collapsed one.",
  "The first action in autonomic dysreflexia is sitting the patient up — not giving antihypertensives. This is the single most tested NCLEX fact about autonomic dysreflexia. Orthostatic hypotension is the fastest way to reduce BP without medication. Then find the trigger. Then give drugs if needed. In that order.",
  "Post-craniotomy patients who deteriorate at 2am need a neurological assessment at 2am — not a reassessment in the morning. The brain does not respect business hours. A nurse who defers neurological assessment of a post-craniotomy patient because it is night is not a safe nurse. Haematoma, oedema and herniation do not wait for the morning ward round.",
];

export default function NeurologicalPage() {
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
            <h1 className="font-black text-base text-gray-900">🧠 Neurological</h1>
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
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-6">
              <p className="text-purple-700 text-sm leading-relaxed font-medium">
                🧠 Neurological nursing is high yield on NCLEX. Master GCS scoring, ICP management, stroke recognition, seizure nursing and spinal cord injury complications!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most critical neurological safety points — these save lives and appear on NCLEX!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Neurological Nursing!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review GCS, ICP management and stroke care." :
                        "Keep studying! Focus on GCS scoring, autonomic dysreflexia, status epilepticus and stroke management."}
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