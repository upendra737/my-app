"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Respiratory Nursing",
    icon: "🫁",
    color: "blue",
    content: [
      "The respiratory system is responsible for gas exchange — delivering oxygen to tissues and removing carbon dioxide. Failure is rapidly life-threatening",
      "NORMAL VALUES: RR 12-20 breaths/min, SpO2 95-100%, PaO2 80-100 mmHg, PaCO2 35-45 mmHg, pH 7.35-7.45",
      "HYPOXIA vs HYPOXAEMIA: Hypoxaemia = low oxygen in blood (PaO2 <60 mmHg, SpO2 <90%). Hypoxia = inadequate oxygen delivery to tissues. Hypoxaemia causes hypoxia but other mechanisms exist",
      "HYPERCAPNIA: Elevated PaCO2 (>45 mmHg) — indicates hypoventilation. Signs: confusion, headache, flushed face, bounding pulse, asterixis (flapping tremor)",
      "WORK OF BREATHING: Increased WOB signs — use of accessory muscles (sternocleidomastoid, scalenes), nasal flaring, intercostal/subcostal retractions, tripod positioning, inability to speak in full sentences",
      "RESPIRATORY FAILURE: Type 1 (Hypoxaemic) — PaO2 <60 mmHg, normal or low PaCO2. Mechanism: V/Q mismatch, shunt, diffusion impairment. Type 2 (Hypercapnic/Ventilatory) — PaO2 <60 mmHg AND PaCO2 >50 mmHg. Mechanism: pump failure, airway obstruction",
      "NCLEX heavily tests: COPD management, asthma emergencies, pneumonia, respiratory failure, mechanical ventilation complications and oxygen delivery systems",
      "PRIORITY ASSESSMENT: Airway → Breathing → Circulation. A patient with respiratory distress is ALWAYS the priority patient",
    ],
  },
  {
    title: "Oxygen Delivery Systems — Rates and FiO2",
    icon: "💨",
    color: "blue",
    content: [
      "LOW-FLOW SYSTEMS (FiO2 varies with breathing pattern):",
      "NASAL CANNULA: 1-6 L/min. FiO2 approximately 24-44%. Each litre adds ~4% FiO2. Simple, comfortable, allows eating and talking. Used for mild hypoxia",
      "SIMPLE FACE MASK: 5-10 L/min. FiO2 approximately 35-50%. Minimum 5L/min to prevent CO2 rebreathing. Used for moderate hypoxia",
      "PARTIAL REBREATHER MASK (with reservoir bag): 6-10 L/min. FiO2 approximately 40-70%. Reservoir bag provides additional O2. Keep bag inflated at all times",
      "NON-REBREATHER MASK (NRB): 10-15 L/min. FiO2 approximately 60-80% (highest achievable without intubation via face mask). One-way valves prevent room air entrainment and CO2 rebreathing. Used for severe hypoxia",
      "HIGH-FLOW SYSTEMS (FiO2 consistent regardless of breathing pattern):",
      "VENTURI MASK: Delivers precise, fixed FiO2 (24%, 28%, 31%, 35%, 40%, 60%) using colour-coded adaptors. PREFERRED for COPD patients where precise FiO2 control is critical to avoid hypercapnia",
      "HIGH-FLOW NASAL CANNULA (HFNC): 20-60 L/min, FiO2 21-100%, heated and humidified. Provides PEEP effect, washout of anatomical dead space, reduces WOB. Used for moderate-severe hypoxaemic respiratory failure. Comfortable — allows eating, talking",
      "NON-INVASIVE VENTILATION (NIV): CPAP (one pressure level) — used for OSA, cardiogenic pulmonary oedema. BiPAP (IPAP and EPAP) — used for COPD exacerbation, NMD, Type 2 respiratory failure",
      "NCLEX tip: NRB mask delivers the highest FiO2 of non-intubated delivery systems. Venturi mask is preferred for COPD — precise O2 delivery prevents hypercapnic drive suppression",
    ],
  },
  {
    title: "COPD — Pathophysiology and Assessment",
    icon: "🚬",
    color: "orange",
    content: [
      "COPD: Chronic Obstructive Pulmonary Disease — progressive, largely irreversible airflow obstruction. Umbrella term for emphysema and chronic bronchitis",
      "CHRONIC BRONCHITIS: Productive cough for ≥3 months in ≥2 consecutive years. Excess mucus production, airway inflammation, mucus plugging. 'Blue bloater' — cyanosis, obesity, oedema, hypercarbia",
      "EMPHYSEMA: Destruction of alveolar walls → loss of elastic recoil → air trapping, hyperinflation. 'Pink puffer' — pursed-lip breathing, barrel chest, thin, uses accessory muscles, maintains oxygenation by WOB",
      "PATHOPHYSIOLOGY: Cigarette smoke (90% of cases) → airway inflammation → mucus hypersecretion → airway destruction → air trapping → V/Q mismatch → hypoxaemia + hypercapnia",
      "BARREL CHEST: Anteroposterior diameter equal to lateral diameter — from chronic hyperinflation and air trapping",
      "PURSED-LIP BREATHING: Patient-initiated technique — increases positive end-expiratory pressure in airways, prevents collapse, slows expiratory flow, reduces air trapping",
      "TRIPOD POSITION: Leaning forward with arms on knees/table — fixes the shoulder girdle, allows accessory muscle use, optimises diaphragm function",
      "HYPOXIC DRIVE THEORY (partially outdated but still NCLEX relevant): Patients with chronic hypercapnia may rely on hypoxia as their ventilatory stimulus. TARGET SpO2 88-92% in COPD — avoid high-flow oxygen that suppresses this drive. Current evidence: permissive lower SpO2 targets prevent hyperoxygenation-induced hypercapnia",
      "FEV1/FVC ratio <0.70 post-bronchodilator confirms obstructive pattern. GOLD staging based on FEV1 % predicted: GOLD 1 (mild) ≥80%, GOLD 2 (moderate) 50-79%, GOLD 3 (severe) 30-49%, GOLD 4 (very severe) <30%",
    ],
  },
  {
    title: "COPD — Acute Exacerbation Management",
    icon: "🚨",
    color: "red",
    content: [
      "AECOPD (Acute Exacerbation of COPD): Acute worsening of respiratory symptoms beyond normal day-to-day variation requiring change in medication",
      "TRIGGERS: Most common — respiratory infections (viral 50-70%, bacterial — H. influenzae, S. pneumoniae, M. catarrhalis), air pollution, non-compliance with medications",
      "PRESENTATION: Increased dyspnoea, increased sputum production/purulence, cough, wheeze, hypoxaemia, hypercapnia, altered consciousness (severe)",
      "OXYGEN TARGET: SpO2 88-92% — use Venturi mask to deliver precise FiO2 (28% or 31%). AVOID high-flow oxygen — can suppress hypoxic ventilatory drive, worsen hypercapnia and cause respiratory acidosis",
      "BRONCHODILATORS: SABA (salbutamol/albuterol) via nebuliser — first-line bronchodilation. SAMA (ipratropium) via nebuliser — additive to SABA in exacerbations. Can combine in one nebuliser (Duoneb/Combivent)",
      "CORTICOSTEROIDS: Prednisolone 40mg oral or methylprednisolone 40mg IV for 5 days — reduces inflammation, speeds recovery, reduces treatment failure",
      "ANTIBIOTICS: If two or more cardinal symptoms (increased dyspnoea, increased sputum, purulent sputum) — amoxicillin, doxycycline or azithromycin based on local resistance patterns",
      "NIV (Non-Invasive Ventilation/BiPAP): Indicated for pH <7.35 and PaCO2 >45 mmHg despite initial therapy. Reduces WOB, improves gas exchange, avoids intubation in many patients",
      "INDICATIONS for intubation/mechanical ventilation: Failure of NIV, severe hypoxaemia refractory to treatment, respiratory arrest, haemodynamic instability, unconsciousness, inability to protect airway",
      "NURSING: Positioning (high Fowler's/tripod), medication administration, airway clearance (suctioning, physiotherapy), frequent reassessment, ABG monitoring, BiPAP mask fit",
    ],
  },
  {
    title: "Asthma — Pathophysiology and Classification",
    icon: "🌬️",
    color: "green",
    content: [
      "ASTHMA: Chronic inflammatory airway disease characterised by variable, reversible airflow obstruction, airway hyperresponsiveness and airway inflammation",
      "PATHOPHYSIOLOGY: Allergen/trigger exposure → mast cell degranulation → histamine, leukotrienes, cytokines → bronchospasm (EARLY phase — 15-30 min) + airway inflammation and oedema (LATE phase — 4-8 hours) + mucus hypersecretion",
      "TRIGGERS: Allergens (dust mites, pollen, animals), respiratory infections (most common trigger for exacerbations), exercise, cold air, irritants (smoke, pollution, strong odours), NSAIDs/aspirin (ASA-exacerbated respiratory disease), beta-blockers (contraindicated in asthma), emotional stress, GORD",
      "SYMPTOM TRIAD: Wheeze, cough (especially nocturnal/early morning), chest tightness",
      "PHYSICAL FINDINGS in acute attack: Expiratory wheeze, prolonged expiration, use of accessory muscles, tachycardia, pulsus paradoxus (SBP drop >10 mmHg on inspiration — indicates severe obstruction)",
      "PEAK EXPIRATORY FLOW RATE (PEFR): Objective measure of airflow obstruction. Personal best is reference. <80% personal best = yellow zone (increase treatment). <50% = red zone (emergency treatment)",
      "CLASSIFICATION (GINA): Intermittent (symptoms <2 days/week), Mild persistent (symptoms >2 days/week but not daily), Moderate persistent (daily symptoms), Severe persistent (continual symptoms)",
      "STEP THERAPY: Step 1 (SABA PRN) → Step 2 (low-dose ICS) → Step 3 (low-dose ICS + LABA) → Step 4 (medium-high ICS + LABA) → Step 5 (add-on biologic/OCS)",
    ],
  },
  {
    title: "Asthma — Acute Severe Attack and Status Asthmaticus",
    icon: "🚨",
    color: "red",
    content: [
      "ACUTE SEVERE ASTHMA: Unable to speak in full sentences, PEFR <50% personal best, SpO2 <92%, RR >25, HR >110",
      "LIFE-THREATENING FEATURES: SpO2 <92%, PaO2 <60 mmHg, PaCO2 normal or raised (exhaustion — CO2 should be low in asthma from hyperventilation; normal/raised = impending respiratory failure), silent chest (no wheeze — no air movement at all), bradycardia, altered consciousness, exhaustion",
      "SILENT CHEST is the most ominous sign — it means so little air is moving that wheeze cannot be generated. Imminent respiratory arrest",
      "STATUS ASTHMATICUS: Severe asthma not responding to standard bronchodilator therapy — medical emergency",
      "EMERGENCY MANAGEMENT:",
      "Oxygen: Target SpO2 94-98% (unlike COPD — give adequate oxygen)",
      "SABA: Salbutamol 5mg nebulised back-to-back (every 15-20 minutes initially), or IV salbutamol if nebuliser ineffective",
      "IPRATROPIUM: 0.5mg nebulised — adds to bronchodilation in severe attacks",
      "SYSTEMIC CORTICOSTEROIDS: Prednisolone 40-50mg oral or hydrocortisone 200mg IV — reduces late-phase inflammation. Takes 4-6 hours to achieve effect",
      "IV MAGNESIUM SULFATE: 2g over 20 minutes — causes bronchial smooth muscle relaxation. Used for severe/life-threatening asthma not responding to initial treatment",
      "HELIOX: Helium-oxygen mixture — reduces resistance in turbulent airflow. Used as bridge to other treatments",
      "INTUBATION: Last resort — extremely difficult in severe asthma, high ventilator pressures required, risk of barotrauma and air trapping. If required — allow prolonged expiratory time, permissive hypercapnia strategy",
      "NCLEX tip: A normal PaCO2 in a severe asthma attack is a RED FLAG — CO2 should be LOW (hyperventilation). Normal or elevated CO2 = exhaustion = impending respiratory failure",
    ],
  },
  {
    title: "Pneumonia — Assessment and Management",
    icon: "🦠",
    color: "purple",
    content: [
      "PNEUMONIA: Infection of the pulmonary parenchyma causing inflammation, consolidation and impaired gas exchange",
      "CLASSIFICATION: Community-acquired (CAP), Hospital-acquired (HAP — onset ≥48 hours post-admission), Ventilator-associated (VAP — onset ≥48 hours post-intubation), Aspiration pneumonia",
      "COMMON ORGANISMS: CAP — Streptococcus pneumoniae (most common, 'typical'), Mycoplasma pneumoniae (atypical — young adults, walking pneumonia), Legionella (Legionnaire's disease — elderly, immunocompromised, air conditioning, water systems), viral (influenza, COVID-19, RSV)",
      "HAP/VAP organisms: Gram-negative rods (Pseudomonas, Klebsiella, E. coli), Staphylococcus aureus (including MRSA)",
      "CLINICAL PRESENTATION: Fever, productive cough (purulent sputum), pleuritic chest pain, dyspnoea, crackles/bronchial breath sounds on auscultation, dullness to percussion over consolidation",
      "ATYPICAL PNEUMONIA (Mycoplasma, Legionella, Chlamydia): Gradual onset, dry cough, headache, malaise, extrapulmonary features (diarrhoea, confusion in Legionella), patchy infiltrates on CXR",
      "INVESTIGATIONS: CXR (lobar consolidation — typical; patchy/bilateral — atypical/viral), sputum culture (before antibiotics), blood cultures (bacteraemia), FBC (elevated WCC), CRP/ESR, U&E (renal function), ABG (respiratory failure assessment), urine antigen (Legionella, Pneumococcal)",
      "SEVERITY SCORING — CURB-65: Confusion, Urea >7 mmol/L, RR ≥30, BP systolic <90 or diastolic ≤60, age ≥65. Score 0-1 = outpatient, 2 = hospital, ≥3 = consider ICU",
      "ASPIRATION PNEUMONIA: Right lower lobe most commonly affected (right main bronchus is shorter and more vertical). Anaerobic organisms. Risk factors: altered consciousness, dysphagia, GORD, nasogastric tube",
    ],
  },
  {
    title: "Pneumonia — Nursing Care and Treatment",
    icon: "🩺",
    color: "purple",
    content: [
      "ANTIBIOTICS: CAP — amoxicillin ± clarithromycin (or doxycycline for atypicals). Severe CAP — IV beta-lactam + macrolide, or fluoroquinolone alone. HAP — broad-spectrum (piperacillin-tazobactam, cefepime, meropenem) ± MRSA coverage (vancomycin, linezolid)",
      "OXYGEN: Target SpO2 ≥94%. Progress from low to high-flow as needed. Monitor response to treatment",
      "POSITIONING: Semi-recumbent (30-45°) — reduces aspiration risk, improves diaphragm function, optimises V/Q matching",
      "AIRWAY CLEARANCE: Encourage deep breathing and coughing, incentive spirometry (10 breaths/hour minimum), chest physiotherapy, adequate hydration to thin secretions, suctioning if unable to clear",
      "FEVER MANAGEMENT: Antipyretics (paracetamol), cooling measures, adequate hydration (fever increases insensible losses). Do NOT give aspirin to children (Reye syndrome risk)",
      "HYDRATION: IV fluids if oral intake poor or dehydrated. Adequate hydration maintains mucociliary clearance",
      "VAP PREVENTION BUNDLE: HOB elevation 30-45°, oral care every 2-4 hours with chlorhexidine, daily sedation vacation and spontaneous breathing trial, subglottic suction, peptic ulcer prophylaxis, DVT prophylaxis, hand hygiene",
      "MONITORING: Vital signs (temperature trends, RR, SpO2, BP), WCC trend, CRP, sputum character, response to antibiotics (improvement in 48-72 hours), chest auscultation",
      "PATIENT EDUCATION: Medication completion, smoking cessation, follow-up CXR in 6-8 weeks (to confirm resolution and exclude underlying malignancy), influenza and pneumococcal vaccination",
      "COMPLICATIONS: Empyema (infected pleural effusion — requires drainage), lung abscess, respiratory failure, bacteraemia/sepsis, ARDS",
    ],
  },
  {
    title: "Pleural Effusion and Pneumothorax",
    icon: "🫁",
    color: "orange",
    content: [
      "PLEURAL EFFUSION: Abnormal accumulation of fluid in the pleural space. Transudative (heart failure, cirrhosis, hypoalbuminaemia — protein-poor) vs Exudative (infection, malignancy, pulmonary embolism — protein-rich). Light's Criteria used to differentiate",
      "PLEURAL EFFUSION SYMPTOMS: Dyspnoea, pleuritic chest pain, dullness to percussion, reduced breath sounds, reduced tactile fremitus over the effusion",
      "THORACENTESIS: Needle aspiration of pleural fluid for diagnosis and/or treatment. Complications: pneumothorax (most common), haemothorax, re-expansion pulmonary oedema (large volume drainage), infection",
      "PNEUMOTHORAX: Air in the pleural space — lung collapses. Spontaneous (young thin males, tall — primary; underlying lung disease — secondary), traumatic, iatrogenic (post-procedure)",
      "PNEUMOTHORAX PRESENTATION: Sudden onset pleuritic chest pain, dyspnoea, decreased/absent breath sounds unilaterally, hyperresonance to percussion, tracheal deviation (TENSION only)",
      "TENSION PNEUMOTHORAX: Life-threatening — air enters pleural space but cannot escape (one-way valve mechanism). Mediastinum shifts to OPPOSITE side → compresses contralateral lung and great vessels → haemodynamic collapse",
      "TENSION PNEUMOTHORAX SIGNS: Severe dyspnoea, hypotension, tachycardia, absent breath sounds (ipsilateral), TRACHEAL DEVIATION (AWAY from affected side — contralateral), JVD, hypoxia",
      "TENSION PNEUMOTHORAX TREATMENT: IMMEDIATE NEEDLE DECOMPRESSION — 14-16G cannula, 2nd intercostal space, midclavicular line (BEFORE chest X-ray). Life-saving. Follow with chest tube insertion",
      "CHEST TUBE MANAGEMENT: Ensure system is patent, drainage is connected and sealed, water-seal chamber fluctuates with breathing (tidalling — normal), monitor drainage amount and character, keep below chest level, do NOT clamp routinely",
    ],
  },
  {
    title: "Chest Tubes — Management and Troubleshooting",
    icon: "🔧",
    color: "blue",
    content: [
      "CHEST TUBE (intercostal drain): Removes air, blood or fluid from the pleural space to restore normal negative pressure",
      "WATER SEAL CHAMBER: Allows air to exit but not enter. Continuous bubbling = air leak (from patient or system). Intermittent bubbling = normal (air being evacuated). No bubbling = lung expanded OR tube kinked/obstructed",
      "TIDALLING: Fluid in the water-seal chamber rises with inspiration and falls with expiration — indicates system is patent and responding to pleural pressure changes. Cessation of tidalling may indicate: lung fully expanded OR obstruction",
      "SUCTION: Applied per physician order. Gentle continuous bubbling in suction chamber = correct suction. More vigorous bubbling does NOT = more suction — adjust suction control",
      "DRAINAGE: Measure and document every 1-4 hours. Report: >200 mL/hr (haemothorax, surgical bleeding), sudden increase in bloody drainage, cessation of drainage in context of unresolved effusion/pneumothorax",
      "CLAMPING: Do NOT routinely clamp chest tubes — traps air/fluid, risk of tension pneumothorax. Only clamp briefly when changing bottles or if tube accidentally disconnected (reconnect immediately)",
      "ACCIDENTAL DISCONNECTION: Immediately place distal end of tube in water (sterile water) — creates emergency water seal. Reconnect as soon as possible. Do NOT leave open to air",
      "ACCIDENTAL REMOVAL: Cover with petroleum gauze (Vaseline gauze) dressing — creates occlusive seal. If patient deteriorates acutely: may need to unseal dressing on expiration to prevent tension pneumothorax",
      "REMOVAL: When drainage <100-150 mL/24 hours, no air leak, lung fully expanded on CXR. Remove on expiration or Valsalva — minimises air entry. Apply occlusive dressing immediately",
      "PATIENT EDUCATION: Do not lie on tube, do not lift drainage system above chest, report sudden pain or difficulty breathing, encourage deep breathing and coughing",
    ],
  },
  {
    title: "Mechanical Ventilation — Principles and Management",
    icon: "🤖",
    color: "red",
    content: [
      "INDICATIONS for mechanical ventilation: Apnoea, severe hypoxaemia (PaO2 <60 on high FiO2), severe hypercapnia with acidosis (pH <7.25), inability to protect airway, excessive WOB causing fatigue",
      "MODES: Volume-controlled (VC-AC, VCV) — delivers set tidal volume. Pressure-controlled (PC-AC, PCV) — delivers set inspiratory pressure. SIMV — delivers set breaths but allows spontaneous breaths between. PSV (pressure support) — patient-triggered, pressure-assisted",
      "KEY VENTILATOR SETTINGS: Tidal Volume (VT) — 6-8 mL/kg ideal body weight (lung-protective). RR — 12-20/min. FiO2 — titrate to SpO2/PaO2. PEEP — positive end-expiratory pressure (prevents alveolar collapse, improves oxygenation)",
      "PEEP: Keeps alveoli open at end of expiration. Increases FRC, improves oxygenation, reduces shunt. Excessive PEEP: barotrauma, reduced cardiac output, tension pneumothorax",
      "LUNG-PROTECTIVE VENTILATION STRATEGY (ARDSnet protocol): Tidal volume 6 mL/kg IBW, plateau pressure <30 cmH2O, titrated PEEP, permissive hypercapnia (accept higher CO2 to avoid barotrauma)",
      "VENTILATOR ALARMS:",
      "HIGH PRESSURE ALARM: Obstruction (secretions, biting tube, kinking), bronchospasm, pneumothorax, patient fighting the ventilator. Action: Assess patient, suction, check circuit",
      "LOW PRESSURE/VOLUME ALARM: Disconnection, cuff leak, circuit leak. Action: Check all connections, assess cuff pressure (20-30 cmH2O)",
      "APNOEA ALARM: Patient not triggering breaths. Action: Assess patient, may need to adjust sensitivity or increase backup rate",
      "VENTILATOR-ASSOCIATED PNEUMONIA (VAP) BUNDLE: HOB 30-45°, oral care with chlorhexidine, daily SAT and SBT (sedation and spontaneous breathing trials), subglottic suctioning, hand hygiene",
      "WEANING CRITERIA: SpO2 >90% on FiO2 ≤0.4, PEEP ≤5 cmH2O, RR <30, haemodynamically stable, able to initiate breaths, adequate cough, follows commands. RSBI (Rapid Shallow Breathing Index) = RR/VT — <105 predicts successful extubation",
    ],
  },
  {
    title: "ARDS — Acute Respiratory Distress Syndrome",
    icon: "🚨",
    color: "red",
    content: [
      "ARDS: Life-threatening inflammatory lung injury characterised by diffuse alveolar damage, severe hypoxaemia and bilateral pulmonary infiltrates NOT explained by cardiac failure",
      "BERLIN DEFINITION (2012): Acute onset within 1 week, bilateral opacities on CXR/CT not explained by effusion/collapse/nodules, not explained by cardiac failure (PCWP <18 or echo exclusion), PaO2/FiO2 ratio: Mild (200-300), Moderate (100-200), Severe (<100)",
      "PaO2/FiO2 RATIO (P/F ratio): Ratio of arterial oxygen to fraction of inspired oxygen. Normal >400. Mild ARDS 201-300. Moderate ARDS 101-200. Severe ARDS ≤100",
      "CAUSES: Direct (pneumonia, aspiration, inhalation injury, pulmonary contusion) and Indirect (sepsis — most common cause, trauma, pancreatitis, massive transfusion, burns)",
      "PATHOPHYSIOLOGY: Inflammatory trigger → endothelial and epithelial injury → increased vascular permeability → protein-rich fluid floods alveoli → surfactant loss → diffuse alveolar collapse → severe V/Q mismatch → refractory hypoxaemia",
      "MECHANICAL VENTILATION in ARDS: Lung-protective strategy — VT 6 mL/kg IBW, Plateau pressure <30 cmH2O, high PEEP titration, permissive hypercapnia",
      "PRONE POSITIONING: Improves oxygenation in moderate-severe ARDS. Redistributes perfusion to better-ventilated dorsal lung regions. Proning for 16+ hours/day improves mortality in severe ARDS (P/F <150). Nursing: dedicated team, careful management of lines/tubes, pressure injury prevention, ETT position",
      "NEUROMUSCULAR BLOCKADE: Cisatracurium for 48 hours in severe ARDS — reduces patient-ventilator dyssynchrony, reduces inflammatory response. Requires deep sedation and monitoring",
      "NO PHARMACOLOGICAL TREATMENT has proven mortality benefit in ARDS — treatment is supportive (lung-protective ventilation, treating underlying cause, fluid management, prevention of complications)",
      "MORTALITY: Severe ARDS — 40-45% despite modern management. Survivors often have long-term pulmonary and psychological sequelae",
    ],
  },
  {
    title: "Pulmonary Embolism",
    icon: "⚡",
    color: "red",
    content: [
      "PULMONARY EMBOLISM (PE): Occlusion of pulmonary arterial vasculature — most commonly from DVT (deep vein thrombosis). Life-threatening emergency",
      "VIRCHOW'S TRIAD (risk factors): STASIS (immobility, HF, long-haul travel), HYPERCOAGULABILITY (cancer, pregnancy, OCP, thrombophilia, post-surgery), ENDOTHELIAL DAMAGE (trauma, surgery, indwelling catheters)",
      "CLINICAL PRESENTATION: Sudden onset dyspnoea (most common), pleuritic chest pain, tachycardia (most common sign), haemoptysis, syncope, hypoxia, tachypnoea",
      "MASSIVE PE: Haemodynamic instability (SBP <90 or MAP <65) — right heart strain/failure, cardiac arrest. Medical emergency",
      "ECG in PE: Sinus tachycardia (most common), S1Q3T3 pattern (S wave lead I, Q wave lead III, T-wave inversion lead III — classic but not sensitive), new right bundle branch block, right heart strain pattern",
      "DIAGNOSIS: CT Pulmonary Angiography (CTPA) — gold standard. V/Q scan if contrast contraindicated. D-dimer — highly sensitive but NOT specific. Negative D-dimer rules out PE in LOW-PRETEST probability. Wells Score determines pretest probability",
      "WELLS SCORE simplified: ≤4 = PE unlikely (D-dimer to rule out), >4 = PE likely (CTPA to diagnose)",
      "TREATMENT: ANTICOAGULATION — DOACs (rivaroxaban, apixaban — first-line for haemodynamically stable PE), LMWH bridge to warfarin, UFH for massive PE. THROMBOLYSIS — for massive PE with haemodynamic instability (SBP <90) — alteplase 100mg over 2 hours. SURGICAL EMBOLECTOMY — when thrombolysis contraindicated",
      "NURSING: Position of comfort, oxygen, cardiac monitoring, IV access, frequent haemodynamic assessment, anticoagulation administration, fall precautions (anticoagulation), monitor for haemodynamic deterioration",
      "PREVENTION: Early mobilisation, compression stockings, LMWH/UFH prophylaxis, IVC filter (if anticoagulation contraindicated), adequate hydration",
    ],
  },
  {
    title: "Tuberculosis — Nursing Care and Infection Control",
    icon: "🦠",
    color: "purple",
    content: [
      "TUBERCULOSIS (TB): Infection with Mycobacterium tuberculosis — primarily respiratory. Globally significant — affects 10 million people annually",
      "TRANSMISSION: AIRBORNE — droplet nuclei <5 microns remain suspended for hours. Requires AIRBORNE PRECAUTIONS — N95 respirator (fit-tested), negative pressure room, door kept CLOSED",
      "PRIMARY vs LATENT vs ACTIVE TB: Primary (initial infection — often asymptomatic, granuloma formation). Latent (bacteria dormant, non-infectious, normal CXR, positive TST/IGRA). Active (reactivation — infectious, symptomatic)",
      "SYMPTOMS of active pulmonary TB: Chronic productive cough (>3 weeks), haemoptysis, night sweats, fever, weight loss, fatigue — the CLASSIC CONSTITUTIONAL SYMPTOMS",
      "DIAGNOSIS: Sputum smear (acid-fast bacilli — AFB), sputum culture (gold standard but takes 6-8 weeks), TST (tuberculin skin test/Mantoux), IGRA (QuantiFERON — less affected by BCG vaccination), CXR (upper lobe cavitation, calcification)",
      "TREATMENT: First-line RIPE regimen: Rifampicin + Isoniazid + Pyrazinamide + Ethambutol for 2 months, then Rifampicin + Isoniazid for 4 months (6 months total for pulmonary TB)",
      "DRUG SIDE EFFECTS: Rifampicin — orange/red urine, saliva, tears (warn patient — harmless), hepatotoxicity, drug interactions (CYP450 inducer). Isoniazid — peripheral neuropathy (give pyridoxine/Vitamin B6 concurrently), hepatotoxicity. Pyrazinamide — hepatotoxicity, hyperuricaemia. Ethambutol — optic neuritis (red-green colour vision testing before and during treatment)",
      "DIRECTLY OBSERVED THERAPY (DOT): Patient takes medications under direct supervision of healthcare worker — ensures adherence, prevents resistance",
      "MDR-TB and XDR-TB: Multi-drug resistant (resistant to rifampicin and isoniazid) and Extensively drug-resistant TB — require prolonged treatment with second-line agents. Major global health emergency",
      "NCLEX tip: TB requires AIRBORNE precautions (N95), negative pressure room with door CLOSED. Three consecutive NEGATIVE sputum smears required before removing airborne precautions",
    ],
  },
];

const mnemonics = [
  {
    title: "COPD Oxygen Target — 88-92%",
    acronym: "COPD",
    breakdown: ["Controlled oxygen (Venturi mask)", "Only 88-92% SpO2 target", "Prevent hypercapnic drive suppression", "Don't over-oxygenate"],
    memory: "COPD patients need CONTROLLED oxygen — Venturi mask, target 88-92%. Too much oxygen suppresses hypoxic ventilatory drive and causes hypercapnia!",
    color: "orange",
  },
  {
    title: "Pneumonia Severity — CURB-65",
    acronym: "CURB65",
    breakdown: ["Confusion", "Urea >7 mmol/L", "Respiratory rate ≥30", "Blood pressure systolic <90 or diastolic ≤60", "65 years or older"],
    memory: "CURB-65 — 0-1=home, 2=hospital, ≥3=consider ICU. Score ≥3 means this patient is seriously ill!",
    color: "purple",
  },
  {
    title: "Tension Pneumothorax Signs",
    acronym: "DATT",
    breakdown: ["Deviated trachea (AWAY from affected side)", "Absent breath sounds (ipsilateral)", "Tension (high pressure)", "Treat IMMEDIATELY — needle decompression"],
    memory: "DATT — Deviated trachea, Absent breath sounds, Treat immediately! Trachea deviates AWAY from the pneumothorax. No time for X-ray — needle decompress!",
    color: "red",
  },
  {
    title: "ARDS Berlin Definition — P/F Ratio",
    acronym: "MMS",
    breakdown: ["Mild ARDS: P/F 201-300", "Moderate ARDS: P/F 101-200", "Severe ARDS: P/F ≤100"],
    memory: "MMS — Mild, Moderate, Severe. P/F ratio is your ARDS severity metre. Normal P/F >400. In ARDS it falls — the lower the P/F, the sicker the patient!",
    color: "red",
  },
  {
    title: "TB Treatment — RIPE",
    acronym: "RIPE",
    breakdown: ["Rifampicin (6 months)", "Isoniazid (6 months)", "Pyrazinamide (first 2 months)", "Ethambutol (first 2 months)"],
    memory: "RIPE for 2 months, then RI for 4 months = 6 months total. Give Vitamin B6 with Isoniazid to prevent peripheral neuropathy!",
    color: "purple",
  },
];

const alerts = [
  { text: "SILENT CHEST in asthma = most ominous sign — no wheeze means NO air movement. Imminent respiratory arrest. Treat as life-threatening emergency immediately!", severity: "high" },
  { text: "TENSION PNEUMOTHORAX: Tracheal deviation AWAY from affected side, absent breath sounds, JVD, hypotension = IMMEDIATE needle decompression (2nd ICS, MCL). Do NOT wait for X-ray!", severity: "high" },
  { text: "COPD: Target SpO2 88-92% with Venturi mask. High-flow oxygen suppresses hypoxic drive and causes dangerous hypercapnia!", severity: "high" },
  { text: "Normal PaCO2 in severe asthma = RED FLAG. CO2 should be LOW (hyperventilation). Normal or elevated CO2 = respiratory muscle fatigue = impending arrest!", severity: "high" },
  { text: "CHEST TUBE: DO NOT CLAMP routinely — traps air and can cause tension pneumothorax. Only clamp briefly when changing system!", severity: "high" },
  { text: "TB requires AIRBORNE PRECAUTIONS — N95 respirator (fit-tested), NEGATIVE PRESSURE ROOM, door CLOSED at all times. NOT droplet precautions!", severity: "high" },
  { text: "ACCIDENTAL CHEST TUBE REMOVAL: Cover immediately with petroleum gauze — occlusive seal. If patient deteriorates: lift one edge of dressing on expiration to prevent tension pneumothorax!", severity: "high" },
  { text: "PRONE POSITIONING in ARDS: Requires a dedicated team, careful management of all lines and tubes, ETT position check, and pressure injury prevention for face and bony prominences!", severity: "medium" },
  { text: "MASSIVE PE with haemodynamic collapse: Thrombolysis (alteplase 100mg IV over 2 hours) is indicated. Standard anticoagulation alone is insufficient in haemodynamically unstable massive PE!", severity: "medium" },
  { text: "ISONIAZID causes peripheral neuropathy — ALWAYS give pyridoxine (Vitamin B6) concurrently. Ethambutol causes optic neuritis — check colour vision before and during treatment!", severity: "medium" },
  { text: "VAP prevention: HOB 30-45° at ALL times for ventilated patients. Oral care with chlorhexidine every 2-4 hours. Daily sedation vacation and spontaneous breathing trial!", severity: "medium" },
  { text: "VENTURI MASK delivers PRECISE FiO2 regardless of breathing pattern — preferred for COPD. Each colour-coded adaptor delivers a specific FiO2 (blue=24%, white=28%, etc.)!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A nurse is caring for a patient with COPD who is experiencing an acute exacerbation. The patient's SpO2 is 84% on room air. Which oxygen delivery method and target SpO2 should the nurse use?",
    options: [
      "Non-rebreather mask at 15L/min — target SpO2 >98% to ensure adequate oxygenation",
      "Venturi mask at 28% FiO2 — target SpO2 88-92% to maintain hypoxic ventilatory drive",
      "Nasal cannula at 6L/min — target SpO2 >95% to correct hypoxaemia",
      "High-flow nasal cannula at 40L/min — provides humidified oxygen without risk of hypercapnia",
    ],
    correct: 1,
    explanation: "For COPD exacerbation: Use a VENTURI MASK delivering precise, controlled FiO2 (start with 28% — blue adaptor). Target SpO2 88-92%. Patients with chronic hypercapnia may have blunted central chemoreceptor response to CO2 and may depend partially on hypoxic drive (peripheral chemoreceptors sensing low PaO2) to maintain ventilation. Administering high-flow oxygen can: suppress the hypoxic drive, cause ventilation-perfusion (V/Q) redistribution worsening dead space, worsen hypercapnia and cause respiratory acidosis. The Venturi mask is preferred because it delivers a consistent, precise FiO2 regardless of the patient's breathing pattern — critical in COPD. Target 88-92% NOT 95%+ as in non-COPD patients.",
    wrongExplanations: [
      "WRONG: Non-rebreather mask at 15L/min with target >98% would deliver excessively high FiO2, suppress hypoxic ventilatory drive and likely cause dangerous hypercapnia and respiratory acidosis in a COPD patient with chronic CO2 retention.",
      "",
      "WRONG: Nasal cannula at 6L/min delivers an unpredictable FiO2 that varies with the patient's breathing pattern (tidal volume, RR) — it does not provide the precise oxygen delivery required in COPD management. Target >95% is also incorrect for COPD.",
      "WRONG: HFNC is a valid option in some COPD exacerbations but the statement that it carries 'no risk of hypercapnia' is incorrect — HFNC can also deliver high FiO2 that suppresses hypoxic drive. Venturi mask with precise FiO2 is the most controlled option.",
    ],
  },
  {
    level: "Knowledge",
    question: "A nurse is assessing a patient with asthma who is having an acute attack. The patient cannot speak in full sentences, has a respiratory rate of 32 breaths/min and the chest is silent on auscultation with no wheeze audible. What does the absence of wheeze (silent chest) indicate?",
    options: [
      "The patient's bronchospasm is resolving — less turbulent airflow means less wheeze",
      "The patient is improving — the airways have opened with treatment",
      "The silent chest is the most ominous finding — it indicates so little air is moving that wheeze cannot be generated. Imminent respiratory arrest",
      "Wheeze is only audible in mild asthma — severe asthma typically presents without wheeze",
    ],
    correct: 2,
    explanation: "SILENT CHEST in asthma is the MOST OMINOUS clinical finding — it indicates the patient is in IMMINENT RESPIRATORY ARREST. Wheeze requires turbulent airflow — in severe asthma, if the airways are so severely obstructed that virtually no air can move in or out, there is insufficient airflow to generate wheeze. The loss of wheeze in the context of severe respiratory distress (unable to speak, RR 32, accessory muscle use) is a pre-arrest sign indicating respiratory muscle fatigue and imminent collapse — NOT improvement. This patient requires immediate emergency treatment: high-flow oxygen, back-to-back nebulised salbutamol, IV corticosteroids, IV magnesium sulfate, preparation for intubation.",
    wrongExplanations: [
      "WRONG: In the context of severe respiratory distress with inability to speak and RR 32, a silent chest indicates minimal air movement — NOT resolving bronchospasm. Bronchospasm resolution would be associated with clinical improvement, not deterioration.",
      "WRONG: The clinical context clearly indicates deterioration — cannot speak in full sentences, RR 32. Improvement would involve reduced work of breathing, ability to speak and improved SpO2.",
      "",
      "WRONG: This is factually incorrect. Wheeze in asthma becomes louder as obstruction worsens initially, then disappears entirely when obstruction is so severe that almost no air moves. Silent chest = severe/critical, not mild.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a mechanically ventilated patient with ARDS. The high-pressure alarm activates. The patient has copious secretions visible in the ETT and is biting the tube. SpO2 has dropped from 96% to 88% over the past 5 minutes. Which is the correct sequence of nursing actions?",
    options: [
      "Immediately call the physician — ventilator alarms require physician assessment before nursing intervention",
      "Manually ventilate with bag-valve mask, suction the ETT, administer a bite block if the patient is biting the tube, reassess after each intervention and notify the physician",
      "Increase the FiO2 to 100% and the RR on the ventilator — this will address the hypoxia while the cause is investigated",
      "Silence the alarm and continue monitoring — high-pressure alarms are common in mechanically ventilated patients",
    ],
    correct: 1,
    explanation: "VENTILATOR HIGH PRESSURE ALARM requires immediate systematic nursing assessment and intervention — NOT waiting for the physician. The causes in this patient are clearly identified: secretions (visible in ETT) and biting the tube — both causing increased resistance (high pressure) and reduced ventilation (SpO2 drop). Correct response: DISCONNECT patient from ventilator and MANUALLY VENTILATE with BVM (immediately ensures the patient receives ventilation while troubleshooting), SUCTION the ETT (clear secretions causing obstruction), INSERT BITE BLOCK/ORAL AIRWAY (prevents biting), RECONNECT to ventilator if problem resolved, ASSESS response (SpO2, chest rise, breath sounds). Notify physician. Increasing FiO2 and RR without addressing the mechanical cause (secretions, biting) treats the symptom not the cause. Silencing alarms without action is dangerous.",
    wrongExplanations: [
      "WRONG: Ventilator alarms require IMMEDIATE nursing assessment and intervention — not waiting for physician. The nurse has clear actionable causes identified and must respond immediately. Delay can cause hypoxic brain injury.",
      "",
      "WRONG: Increasing FiO2 and RR does not address the mechanical causes (secretions blocking the ETT, patient biting tube). The ventilator may not be able to deliver the set volume if the tube is obstructed — increasing settings without clearing the obstruction is ineffective.",
      "WRONG: Silencing alarms without investigation and intervention is never acceptable. A high-pressure alarm with SpO2 drop represents a patient safety emergency.",
    ],
  },
  {
    level: "Application",
    question: "A patient returns from a bronchoscopy procedure. Two hours later, the nurse assesses him and finds sudden onset severe dyspnoea, SpO2 86%, absent breath sounds on the LEFT side, hyperresonance to percussion on the left, trachea deviated to the RIGHT, blood pressure 82/54 and HR 128. What is the nurse's PRIORITY action?",
    options: [
      "Order a stat chest X-ray to confirm the diagnosis before any intervention",
      "Administer high-flow oxygen via non-rebreather mask and notify the physician to review",
      "Prepare for immediate needle decompression — this is tension pneumothorax. Assist physician with 14-16G needle at 2nd intercostal space, midclavicular line on the LEFT",
      "Position the patient in high Fowler's and administer bronchodilators — this presentation is consistent with bronchospasm",
    ],
    correct: 2,
    explanation: "This patient has TENSION PNEUMOTHORAX — a life-threatening emergency requiring IMMEDIATE needle decompression WITHOUT waiting for chest X-ray. Evidence: Post-bronchoscopy (iatrogenic pneumothorax risk), absent LEFT breath sounds, hyperresonance LEFT, tracheal deviation to the RIGHT (AWAY from the affected side), haemodynamic compromise (BP 82/54, HR 128). TENSION PNEUMOTHORAX is a clinical diagnosis — haemodynamic instability MANDATES immediate intervention. The physician performs (or in some jurisdictions an advanced practice nurse): 14-16G cannula, 2nd intercostal space, midclavicular line on the LEFT (affected side). Air rushes out → pressure relieved → haemodynamics improve. Then insert chest tube. Waiting for X-ray in a haemodynamically compromised patient with clinical tension pneumothorax wastes critical time and the patient may arrest.",
    wrongExplanations: [
      "WRONG: Chest X-ray confirmation is NOT indicated in a haemodynamically unstable patient with clinical signs of tension pneumothorax. Every minute of delay increases mortality. Treat clinically, confirm radiologically later.",
      "WRONG: Oxygen and physician notification alone are insufficient. The haemodynamic compromise (BP 82/54) in tension pneumothorax requires immediate needle decompression — physician notification must be simultaneous with preparation for the procedure.",
      "",
      "WRONG: Tracheal deviation, absent breath sounds and hyperresonance are incompatible with bronchospasm. Bronchospasm causes bilateral wheeze with equal, though reduced, breath sounds — not unilateral absence and tracheal deviation.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a patient with community-acquired pneumonia who is deteriorating despite 48 hours of IV antibiotics. The patient is 72 years old, confused (new), RR 32/min, BP 88/60 and SpO2 88% on 6L/min via nasal cannula. CURB-65 score is 4. What is the nurse's PRIORITY action?",
    options: [
      "Increase the oxygen flow rate to 10L/min via simple face mask and reassess in 30 minutes",
      "Notify the physician urgently, apply non-rebreather mask, prepare for escalation of care (HDU/ICU transfer) and reassess antibiotic coverage — this patient has sepsis from pneumonia with signs of organ dysfunction",
      "Collect a repeat blood culture and sputum sample — antibiotic failure requires new cultures before changing treatment",
      "Administer IV saline bolus — the hypotension is the primary concern",
    ],
    correct: 1,
    explanation: "This patient has SEPSIS secondary to pneumonia with signs of ORGAN DYSFUNCTION: new confusion (neurological), RR 32 (respiratory), BP 88/60 (haemodynamic), SpO2 88% (oxygenation failure). CURB-65 of 4 = severe pneumonia requiring ICU consideration. The SEPSIS-3 definition: life-threatening organ dysfunction from dysregulated host response to infection — this patient qualifies. PRIORITY: Notify physician URGENTLY (immediate escalation), apply non-rebreather mask (highest FiO2 non-invasive), prepare for HDU/ICU transfer (will need closer monitoring and potentially ventilatory support), review antibiotic coverage (treatment failure requires broadening spectrum — physician decision), IV fluid resuscitation (30 mL/kg normal saline for sepsis), blood cultures (ideally before antibiotics change — but do not delay treatment for cultures in haemodynamic compromise). The combination of all these actions must occur rapidly and simultaneously.",
    wrongExplanations: [
      "WRONG: Increasing oxygen to simple face mask is inadequate for SpO2 88% with RR 32. Non-rebreather mask (NRB) delivers higher FiO2. More critically, 30-minute reassessment delay in a septic patient with haemodynamic compromise is too long.",
      "",
      "WRONG: While new cultures are appropriate, waiting for cultures before initiating other actions delays critical interventions. Antibiotic changes in sepsis should not be delayed for culture results — empirical broadening while awaiting results is appropriate.",
      "WRONG: IV fluids are part of sepsis management but the physician must be notified first for orders. The nurse cannot independently administer an IV fluid bolus without an order. Also, fluid alone is insufficient — the multifaceted approach is needed.",
    ],
  },
  {
    level: "Advanced",
    question: "A 45-year-old woman is admitted with severe ARDS from aspiration pneumonia (P/F ratio 78). She is intubated and ventilated with VT 6 mL/kg IBW, PEEP 14 cmH2O, FiO2 0.80, RR 22. SpO2 remains at 84% despite these settings. ABG: pH 7.28, PaCO2 52, PaO2 42, HCO3 24. The intensivist decides to initiate prone positioning. As the nurse, which statement about prone positioning is MOST accurate?",
    options: [
      "Prone positioning should only be used for 2-4 hours then the patient must be supine — prolonged proning causes irreversible pressure injuries",
      "Prone positioning improves oxygenation by recruiting dorsal lung regions, redistributing perfusion and reducing ventral atelectasis — sessions should be 16+ hours to achieve mortality benefit in severe ARDS",
      "Prone positioning is contraindicated in this patient because she has a low pH — acidosis causes increased risk of arrhythmia during turning",
      "Prone positioning improves CO2 clearance primarily and is used for hypercapnic respiratory failure rather than hypoxaemic failure",
    ],
    correct: 1,
    explanation: "PRONE POSITIONING in severe ARDS (P/F <150): The PROSEVA trial demonstrated a 16% absolute mortality reduction when prone sessions lasted ≥16 hours/day. MECHANISM: Dorsal lung regions (which are compressed and atelectatic in supine ARDS patients) become gravity-dependent in prone position → perfusion shifts to now-better-ventilated dorsal regions → improved V/Q matching → improved oxygenation. Also: reduces pleural pressure gradient between ventral and dorsal regions, reduces lung overdistension, reduces ventral atelectasis. NURSING IMPLICATIONS: Dedicated team (minimum 5-6 people), careful management of ETT, all IV lines and drains, prevention of facial/bony prominence pressure injuries, eye care (conjunctival oedema), monitor haemodynamics during turn, document ETT position before and after. Sessions ≥16 hours maximise benefit. The P/F of 78 and severe acidosis (pH 7.28) make this a clear indication — not a contraindication.",
    wrongExplanations: [
      "WRONG: 2-4 hours of proning is insufficient — evidence requires ≥16 hours/day for mortality benefit. Pressure injury prevention involves proper padding and repositioning within prone — it does not require returning to supine after 2-4 hours.",
      "",
      "WRONG: Low pH (acidosis) is not a contraindication to prone positioning — it is actually a reason TO prone, as improving oxygenation and ventilation improves acid-base status. Arrhythmia risk during turning is managed by adequate preparation, not avoidance.",
      "WRONG: Prone positioning primarily improves OXYGENATION (hypoxaemic failure) — not CO2 clearance. It is used in hypoxaemic ARDS, not primarily for hypercapnia. The mechanism is V/Q redistribution improving oxygenation.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a 58-year-old male patient who is on day 4 of mechanical ventilation for COPD exacerbation. The intensivist orders a spontaneous awakening trial (SAT) followed by a spontaneous breathing trial (SBT). During the SAT, sedation is stopped. After 30 minutes, the patient is alert, following commands and not agitated. The SBT begins on pressure support 5/PEEP 5. After 45 minutes, the nurse notes: RR 34, SpO2 90%, BP 158/96 (baseline 130/80), patient appears anxious and is using accessory muscles. What should the nurse do?",
    options: [
      "Continue the SBT for the full 2 hours — some patients take time to adjust to reduced ventilatory support",
      "Immediately return the patient to previous ventilator settings — the SBT has failed. Document findings and discuss with the team for tomorrow's attempt",
      "Administer IV sedation to reduce anxiety and retry the SBT in 30 minutes",
      "Extubate the patient — the SAT was successful and the SBT has been running for 45 minutes which is adequate",
    ],
    correct: 1,
    explanation: "This SBT has FAILED and must be stopped. SBT FAILURE CRITERIA (any of): RR >35 (this patient has RR 34 — approaching threshold), SpO2 <90% (this patient has SpO2 90% — at threshold), HR >140 or <60, BP >180 systolic (158 is elevated but below threshold — however the trend matters), use of accessory muscles, agitation, diaphoresis, paradoxical breathing. The patient shows: RR 34 (borderline), SpO2 90% (borderline), elevated BP, accessory muscle use and anxiety — collectively indicating respiratory distress and SBT failure. Return to previous settings immediately to prevent muscle fatigue. Document all findings. The team should reassess contributing factors (secretion burden, fluid status, degree of underlying COPD) and retry after 24 hours. Attempting extubation (Option D) is dangerous — the SBT must be completed successfully before extubation is considered.",
    wrongExplanations: [
      "WRONG: Continuing the SBT when the patient shows clear signs of respiratory distress risks respiratory muscle fatigue, haemodynamic decompensation and potentially respiratory arrest. SBT failure criteria are present — stop and return to previous settings.",
      "",
      "WRONG: Administering sedation to get through the SBT defeats the entire purpose — the SBT assesses whether the patient can breathe WITHOUT ventilatory support. Sedating and retrying is not a valid approach.",
      "WRONG: A failed SBT is a contraindication to extubation. Extubating a patient who cannot maintain oxygenation and is in respiratory distress during an SBT will result in post-extubation respiratory failure requiring re-intubation.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse receives handover for a patient with a left-sided pneumothorax who has a chest tube connected to a water-seal drainage system. On assessment, the nurse notices continuous vigorous bubbling in the water-seal chamber. The patient's SpO2 is 92%, RR 22 and the patient reports mild dyspnoea. What is the MOST accurate interpretation and appropriate response?",
    options: [
      "Continuous bubbling in the water-seal chamber is normal — it indicates the system is functioning correctly",
      "Continuous bubbling indicates a persistent air leak — assess for the source (patient vs system) by systematically checking connections. Notify the physician of the persistent air leak",
      "Clamp the chest tube immediately — continuous bubbling means too much suction is being applied",
      "Remove the chest tube — continuous bubbling indicates the pneumothorax has resolved",
    ],
    correct: 1,
    explanation: "CONTINUOUS BUBBLING in the water-seal chamber indicates a PERSISTENT AIR LEAK — either from the patient's lung (bronchopleural fistula, incomplete lung re-expansion) or from the system (loose connections, cracked chamber). INTERMITTENT bubbling is normal (air being evacuated). CONTINUOUS bubbling requires systematic assessment: Check all connections from patient to drainage unit (tighten any loose connections), check for cracks in the tubing or chamber, if bubbling stops when you briefly occlude the tube at the chest wall = system leak. If bubbling continues when occluded = patient's lung is the source of the air leak. Notify the physician — persistent air leak may indicate: residual pneumothorax, bronchopleural fistula, or need for suction adjustment. Do NOT clamp — this would trap air in the pleural space. The patient's mild symptoms and SpO2 92% are concerning but stable — close monitoring and physician notification are appropriate.",
    wrongExplanations: [
      "WRONG: CONTINUOUS bubbling in the water-seal is NOT normal — INTERMITTENT bubbling is normal. Continuous bubbling indicates an ongoing air leak that requires investigation.",
      "",
      "WRONG: Clamping the chest tube when there is a persistent air leak would trap air in the pleural space and could cause or worsen a pneumothorax — potentially causing tension pneumothorax. Never routinely clamp.",
      "WRONG: Continuous bubbling indicates AIR IS STILL LEAKING into the pleural space or system — the pneumothorax has NOT resolved. Removing the tube with an active air leak would cause air to re-accumulate rapidly.",
    ],
  },
  {
    level: "Advanced",
    question: "A 32-year-old male patient with no prior medical history presents with a 3-week history of productive cough with haemoptysis, 8kg weight loss, night sweats and fever. He recently immigrated from a country with high TB prevalence. On arrival to the emergency department, he is coughing heavily and the triage nurse places him in the general waiting area. What is the nurse's MOST urgent action regarding infection control?",
    options: [
      "Place the patient in a standard isolation room with contact precautions — the primary concern is direct contact transmission",
      "Place a surgical mask on the patient, immediately remove him from the waiting area to a negative pressure airborne infection isolation room, and don a fit-tested N95 respirator before entering the room",
      "Notify public health — tuberculosis is a notifiable disease and authorities must be informed before any isolation measures",
      "Maintain droplet precautions — TB is spread by large respiratory droplets that travel less than 1 metre",
    ],
    correct: 1,
    explanation: "This patient's presentation is HIGHLY suspicious for active pulmonary TB — classic symptoms (productive cough >3 weeks, haemoptysis, weight loss, night sweats, fever) + epidemiological risk (recent immigration from high-prevalence country). AIRBORNE PRECAUTIONS are required IMMEDIATELY: Place a SURGICAL MASK on the patient (patients with suspected TB wear surgical masks to reduce droplet nuclei generation), IMMEDIATELY REMOVE from the waiting area to a NEGATIVE PRESSURE AIRBORNE INFECTION ISOLATION ROOM (door closed at all times, ≥6-12 air exchanges/hour, air exhausted outside or HEPA filtered), all healthcare workers entering the room must wear a FIT-TESTED N95 RESPIRATOR (not surgical mask — TB droplet nuclei are <5 microns, penetrate surgical masks). This is critical — the patient has been in the general waiting area coughing, potentially exposing many other patients. Notify public health is important but is secondary to immediate infection control. TB is NOT spread by large droplets (droplet precautions are insufficient) — it is spread by true airborne transmission via tiny droplet nuclei.",
    wrongExplanations: [
      "WRONG: Contact precautions address direct contact and fomite transmission — TB is spread by the AIRBORNE route (tiny droplet nuclei <5 microns remaining suspended in air). Contact precautions are completely inadequate.",
      "",
      "WRONG: Public health notification is mandatory but NOT the most URGENT action. Immediate isolation to protect other patients and staff from airborne transmission takes absolute priority over administrative notification.",
      "WRONG: TB is NOT spread by large respiratory droplets — it is AIRBORNE transmission via tiny droplet nuclei that remain suspended for hours. Droplet precautions (surgical mask, 1-metre distance) are completely insufficient for TB.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a patient on day 3 of mechanical ventilation who develops a sudden fever (39.2°C), purulent endotracheal secretions and a new right lower lobe infiltrate on chest X-ray. The patient was previously afebrile. WCC is 18.2 × 10⁹/L. The physician diagnoses VAP (ventilator-associated pneumonia). The nurse reviews the previous 72 hours of nursing documentation. Which finding in the nursing care record is MOST directly associated with the development of this complication?",
    options: [
      "The patient received 3 units of packed red blood cells on day 1 — blood transfusions are a risk factor for VAP",
      "Documentation shows HOB was maintained at 15° rather than the required 30-45° throughout the patient's admission, and oral care was documented as performed once daily rather than every 2-4 hours",
      "The patient was on proton pump inhibitor therapy — gastric acid suppression increases bacterial colonisation",
      "The patient had a nasogastric tube in situ — enteral nutrition increases VAP risk",
    ],
    correct: 1,
    explanation: "The VAP PREVENTION BUNDLE is the most evidence-based intervention for preventing VAP, and failure to implement it is DIRECTLY associated with VAP development. The two most critical failures identified: HOB AT 15° (should be 30-45°): Semi-recumbent positioning prevents microaspiration of oropharyngeal secretions into the lower airway. At 15°, gravity favours secretion pooling above the cuff and aspiration into the lungs — directly causing VAP. ORAL CARE ONCE DAILY (should be every 2-4 hours with chlorhexidine): Mechanical removal of dental plaque and oral biofilm reduces the bacterial load that can be aspirated. Once daily is inadequate — bacteria repopulate rapidly. While PPI therapy and NG tubes are VAP risk factors (Options C and D), they are prescribed interventions that the nurse cannot independently modify. The HOB and oral care represent nursing care failures directly within the nurse's control and directly violating the VAP prevention bundle.",
    wrongExplanations: [
      "WRONG: Blood transfusion is an immune modulator and associated with increased infection risk — but it is a clinical intervention prescribed for a specific indication. It is not a nursing care failure directly associated with VAP prevention.",
      "",
      "WRONG: PPI therapy is a prescribed medication and a known VAP risk factor — but the risk is considered acceptable given the benefit (stress ulcer prevention). It represents a prescriber decision, not a nursing care failure.",
      "WRONG: NG tubes are a risk factor for aspiration (bypasses upper airway defences) but are prescribed for nutritional support. The nursing failures (HOB position and oral care) are MORE directly associated with the VAP development because they are within the nurse's scope to implement correctly.",
    ],
  },
];

const clinicalPearls = [
  "The most dangerous word in respiratory assessment is 'wheeze' — specifically its ABSENCE. A wheezing asthmatic is moving air. A silent asthmatic is not. The progression from loud wheeze to diminished wheeze to silent chest is a progression from severe to critical to pre-arrest. Always ask: compared to before, is there more or less wheeze?",
  "In COPD, the target SpO2 is 88-92% — not 95%+. This is not a mistake or a lesser standard of care. It is evidence-based precision. Giving a COPD patient with chronic CO2 retention a non-rebreather mask is not more helpful — it is potentially fatal. The Venturi mask and specific saturation targets exist for this exact reason.",
  "The water-seal chamber of a chest drain system tells you more than any X-ray about what is happening in the pleural space in real time. Tidalling = the lung is not yet fully expanded and the tube is patent. No tidalling = full expansion (good) or obstruction (check). Continuous bubbling = air leak present. These are real-time data that nurses must interpret at the bedside.",
  "Tension pneumothorax is one of the few diagnoses in medicine where you must treat before you can confirm. A haemodynamically unstable patient with absent unilateral breath sounds and tracheal deviation needs a needle in the 2nd intercostal space now — not after a chest X-ray. Every minute of delay reduces survival.",
  "A normal PaCO2 in a severe asthma attack is a pre-arrest finding masquerading as a stable one. Asthmatics hyperventilate — their CO2 should be low (28-35 mmHg in acute attack). When it 'normalises' to 40 mmHg, it means the respiratory muscles are failing and CO2 is accumulating because they can no longer generate sufficient ventilation. Normal is abnormal here.",
  "VAP prevention is entirely a nursing responsibility. The HOB angle, the oral care frequency, the daily sedation vacation — these are nursing interventions that prevent a potentially fatal healthcare-associated infection. When VAP develops, the nursing documentation from the preceding days tells the story of what was or was not done.",
  "Prone positioning for severe ARDS is counterintuitive — we are taught to position patients in ways that seem comfortable and accessible. But placing a critically ill intubated patient face-down for 16 hours is one of the highest-impact interventions in critical care, with a 16% absolute mortality reduction. Understanding the physiology (dorsal recruitment, V/Q redistribution) helps nurses execute this intervention with conviction and precision.",
];

export default function RespiratoryPage() {
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
            <h1 className="font-black text-base text-gray-900">🫁 Respiratory</h1>
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
                🫁 Respiratory nursing is high yield on NCLEX. Master COPD vs asthma management, oxygen delivery systems, mechanical ventilation and respiratory emergencies!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most critical respiratory safety points — these appear on NCLEX and save lives in practice!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Respiratory Nursing!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review COPD management, asthma emergencies and mechanical ventilation." :
                        "Keep studying! Focus on oxygen delivery, tension pneumothorax, ARDS and TB precautions."}
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