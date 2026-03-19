"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Fluid and Electrolyte Balance",
    icon: "💧",
    color: "blue",
    content: [
      "Fluid and electrolyte balance is fundamental to every body system — disturbances cause multi-organ dysfunction and death if uncorrected",
      "TOTAL BODY WATER (TBW): 60% of body weight in adult males, 50% in females (more adipose tissue — less water). Decreases with age",
      "FLUID COMPARTMENTS: Intracellular fluid (ICF — 40% body weight, 2/3 of TBW — inside cells), Extracellular fluid (ECF — 20% body weight, 1/3 of TBW — outside cells). ECF divided into: Intravascular (plasma — 5% BW), Interstitial (15% BW), Transcellular (CSF, pleural, peritoneal, synovial)",
      "OSMOLALITY: Concentration of solutes in a fluid. Normal serum osmolality 285-295 mOsm/kg. SODIUM is the primary determinant of extracellular osmolality. Calculated: 2×Na + glucose + urea (mmol/L)",
      "OSMOSIS: Water moves from LOW solute concentration to HIGH solute concentration across a semipermeable membrane. Water follows sodium — if sodium moves, water follows",
      "ONCOTIC PRESSURE: Osmotic pressure exerted by plasma proteins (mainly albumin) — holds water in the intravascular space. LOW albumin → water leaks into interstitium → oedema despite low intravascular volume (distributive oedema)",
      "STARLING FORCES: Balance of hydrostatic and oncotic pressures determines fluid movement across capillary walls. Fluid filters out at arterial end, returns at venous end + lymphatics",
      "NCLEX heavily tests: Hypo/hypernatraemia (sodium disorders), hypo/hyperkalaemia (potassium disorders — especially ECG changes), calcium and magnesium disorders, IV fluid types and indications",
    ],
  },
  {
    title: "IV Fluid Types — Crystalloids and Colloids",
    icon: "🧪",
    color: "blue",
    content: [
      "CRYSTALLOIDS: Solutions of water and electrolytes. Most common IV fluids. Distribute throughout ECF (intravascular + interstitial) — only 25% remains intravascular after 1 hour",
      "ISOTONIC CRYSTALLOIDS (osmolality ~280-310 mOsm/L — same as plasma): Do NOT shift fluid between compartments. Used for: volume replacement, maintenance, drug administration",
      "NORMAL SALINE (0.9% NaCl): Na 154 mEq/L, Cl 154 mEq/L. HYPERCHLORAEMIC METABOLIC ACIDOSIS risk with large volumes (excess chloride inhibits bicarbonate reabsorption). Use for: haemorrhage, hypotension, DKA (initial), hyponatraemia correction (hypertonic SIADH in euvolaemic state)",
      "LACTATED RINGER'S (Hartmann's/PlasmaLyte): More physiological composition — Na, K, Ca, Cl, lactate (PlasmaLyte uses acetate/gluconate). Preferred for: large volume resuscitation, trauma, burns, surgery. Contains potassium — avoid in hyperkalaemia",
      "5% DEXTROSE (D5W): Effectively HYPOTONIC — dextrose metabolised rapidly, leaving free water. Distributes throughout ALL body water compartments (not just ECF). Used for: free water replacement, hypernatraemia treatment, medication diluent, maintaining IV access. NOT for volume resuscitation",
      "HYPERTONIC SOLUTIONS: 3% NaCl, 7.5% NaCl — draws water from ICF to ECF. Used for: severe symptomatic hyponatraemia, cerebral oedema, traumatic brain injury. Central line preferred for concentrations >3%",
      "HYPOTONIC SOLUTIONS: 0.45% NaCl (half-normal saline) — provides free water. Used for: maintenance fluids, hyperosmolar states (HHS). AVOID in cerebral oedema or raised ICP",
      "COLLOIDS: Contain large molecules that remain in intravascular space longer (4-6 hours vs 1 hour for crystalloids). Examples: albumin, blood products, gelatin, dextran, HES (hetastarch)",
      "ALBUMIN 4-5%: Expensive but maintains oncotic pressure. Used for: hepatic cirrhosis with spontaneous bacterial peritonitis, large volume paracentesis, hypoalbuminaemia",
      "BLOOD PRODUCTS: Packed red cells (pRBC) — oxygen carrying capacity. Fresh frozen plasma (FFP) — clotting factors. Platelets — platelet count/function. Cryoprecipitate — fibrinogen, vWF, Factor VIII",
    ],
  },
  {
    title: "Hyponatraemia — Low Sodium",
    icon: "⬇️",
    color: "orange",
    content: [
      "HYPONATRAEMIA: Serum sodium <135 mEq/L. Most common electrolyte disorder in hospitalised patients. Mild 130-134, Moderate 125-129, Severe <125",
      "PATHOPHYSIOLOGY: Always represents excess water relative to sodium (dilutional) OR total body sodium depletion (depletional). ASSESS VOLUME STATUS to determine cause",
      "HYPOVOLAEMIC HYPONATRAEMIA (low Na, low volume): Total body water AND sodium both low, but sodium loss exceeds water loss. Causes: diarrhoea/vomiting, diuretics (especially thiazides — KEY NCLEX FACT), burns, Addison's disease, cerebral salt wasting. Urine Na: HIGH if renal losses (diuretics), LOW if extra-renal losses",
      "EUVOLAEMIC HYPONATRAEMIA (low Na, normal volume): Total body sodium normal, excess water. MOST COMMON CAUSE: SIADH. Other causes: hypothyroidism, Addison's, psychogenic polydipsia. Urine Na >40 mEq/L, urine osmolality HIGH",
      "HYPERVOLAEMIC HYPONATRAEMIA (low Na, HIGH volume — oedematous states): Both sodium and water increased but water more than sodium. Causes: heart failure, cirrhosis, nephrotic syndrome. Urine Na LOW (<20 mEq/L — kidneys conserving sodium)",
      "CLINICAL FEATURES by severity: Mild/moderate (headache, nausea, fatigue, confusion, muscle cramps), Severe (seizures, respiratory arrest, coma, brain herniation — from cerebral oedema)",
      "ACUTE vs CHRONIC: Acute hyponatraemia (develops <48 hours) — symptomatic at higher Na levels, more dangerous, can be corrected faster. Chronic (>48 hours or unknown onset) — brain adapts, less symptomatic but rapid correction causes OSMOTIC DEMYELINATION SYNDROME (ODS)",
      "OSMOTIC DEMYELINATION SYNDROME (ODS/Central Pontine Myelinolysis): Devastating neurological complication from too-rapid correction of CHRONIC hyponatraemia. Demyelination of pons → locked-in syndrome, paraplegia, pseudobulbar palsy, death. Onset 2-6 days after rapid correction",
      "CORRECTION RATE: Maximum 8-10 mEq/L in first 24 hours, 18 mEq/L in 48 hours for CHRONIC hyponatraemia. Acute symptomatic (seizures) — can correct 1-2 mEq/L/hour initially with 3% NaCl until symptoms resolve, then slow to safe rate",
    ],
  },
  {
    title: "Hyponatraemia — Treatment by Cause",
    icon: "💊",
    color: "orange",
    content: [
      "TREATMENT BASED ON VOLUME STATUS AND SEVERITY:",
      "HYPOVOLAEMIC HYPONATRAEMIA: IV Normal saline (0.9%) — restores volume, ADH decreases naturally, kidneys excrete free water → sodium rises. AVOID over-rapid correction (same ODS risk)",
      "EUVOLAEMIC HYPONATRAEMIA (SIADH): FLUID RESTRICTION (800-1000 mL/day) — first-line for mild-moderate. Treats the dilution without adding sodium. Demeclocycline (inhibits ADH action — old therapy). Vaptans (tolvaptan, conivaptan — V2 receptor antagonists, aquaretics — promote water excretion without sodium loss) for SIADH. Treat underlying cause",
      "HYPERVOLAEMIC HYPONATRAEMIA (heart failure, cirrhosis): FLUID RESTRICTION + treat underlying condition. Vaptans may help. Diuretics (careful — can worsen if over-diuresed). Sodium supplementation is NOT helpful — causes more fluid retention",
      "SEVERE SYMPTOMATIC HYPONATRAEMIA (seizures, coma, herniation): 3% HYPERTONIC SALINE — 100-150 mL bolus over 20 minutes. Target: raise sodium 4-6 mEq/L to stop symptoms. Then slow correction to safe rate. Requires ICU monitoring",
      "THIAZIDE-INDUCED HYPONATRAEMIA: Very common, especially elderly women. Thiazides block sodium reabsorption in distal tubule — sodium lost in urine while ADH is stimulated → water retained → dilutional hyponatraemia. Stop thiazide, replace sodium, replace volume",
      "NURSING MONITORING: Hourly sodium checks during active correction with hypertonic saline. Neurological assessment every 1-2 hours. Accurate fluid balance. Daily sodium monitoring once stable",
      "PATIENT EDUCATION for chronic SIADH: Fluid restriction rationale, salt tablets (if prescribed), tolvaptan self-monitoring, report worsening headache or confusion",
      "OVER-RAPID CORRECTION EMERGENCY: If sodium is rising too fast (>10 mEq/L in 24 hours) — administer DESMOPRESSIN (clamps ADH receptors, reduces free water excretion) to slow the rise. 5% dextrose or free water to replace free water and slow correction rate",
    ],
  },
  {
    title: "Hypernatraemia — High Sodium",
    icon: "⬆️",
    color: "red",
    content: [
      "HYPERNATRAEMIA: Serum sodium >145 mEq/L. Always represents excess sodium relative to water OR free water deficit. Clinically significant symptoms at Na >155-160 mEq/L",
      "CAUSES: FREE WATER LOSS (most common) — Diabetes Insipidus (central or nephrogenic — massive dilute urine), fever/diaphoresis, hyperventilation, insensible losses without replacement, osmotic diuresis (DKA, HHS). SODIUM GAIN (rare) — iatrogenic (excess hypertonic saline, sodium bicarbonate), hypertonic feeds, primary hyperaldosteronism, Cushing's",
      "HIGH-RISK GROUPS: Elderly (impaired thirst), neonates, unconscious patients, cognitively impaired — cannot access water independently",
      "CLINICAL FEATURES: Thirst (often absent in high-risk groups), lethargy, weakness, irritability, restlessness, fever, dry mucous membranes, decreased skin turgor. Severe: confusion, seizures, coma, intracerebral haemorrhage (brain shrinks → tearing of bridging veins)",
      "ASSESSMENT: Urine osmolality (HIGH in extrarenal water loss, LOW in DI — dilute urine despite hypernatraemia), urine output (high in DI, low in extrarenal losses), fluid status assessment",
      "TREATMENT: Replace FREE WATER deficit. Calculate free water deficit: FWD = TBW × [(Na/140) − 1]. Correct SLOWLY — maximum 10-12 mEq/L per 24 hours. Rapid correction causes CEREBRAL OEDEMA (brain adapted to hypertonicity by generating osmolytes — rapid dilution causes water to enter brain cells → oedema)",
      "FLUID CHOICE: ORAL water preferred if patient can drink. IV 5% DEXTROSE (free water) or 0.45% NaCl. Avoid isotonic saline (will not correct hypernatraemia) unless haemodynamically unstable (then correct instability first with isotonic saline)",
      "DIABETES INSIPIDUS treatment: Central DI — DESMOPRESSIN (intranasal, oral, SC, IV). Nephrogenic DI — treat cause, thiazide diuretics, low-sodium diet",
      "NURSING: Monitor serum sodium every 2-4 hours during correction, neurological assessment, strict fluid balance, accurate urine output measurement (DI patients need careful tracking)",
    ],
  },
  {
    title: "Hypokalaemia — Low Potassium",
    icon: "⬇️",
    color: "purple",
    content: [
      "HYPOKALAEMIA: Serum potassium <3.5 mEq/L. Mild 3.0-3.5, Moderate 2.5-3.0, Severe <2.5",
      "POTASSIUM DISTRIBUTION: 98% intracellular. Serum K+ reflects only 2% of total body potassium — serum level is a poor indicator of total body stores. Serum K 3.0 may represent significant total body deficit",
      "CAUSES: GI LOSSES (most common overall) — diarrhoea, vomiting, NG suction, laxative abuse, fistula. RENAL LOSSES — loop and thiazide diuretics (most common in hospitalised patients), hyperaldosteronism, Cushing's, amphotericin B, cisplatin, RTA. INADEQUATE INTAKE — rare as cause alone. CELLULAR SHIFT — alkalosis (H+ leaves cells exchanging with K+), insulin, beta-2 agonists (salbutamol), hypothermia",
      "CLINICAL FEATURES: Mild: fatigue, muscle weakness, constipation, cramps. Moderate: severe muscle weakness, ileus, polyuria (nephrogenic DI-like). Severe: PARALYSIS, respiratory muscle failure, rhabdomyolysis",
      "ECG CHANGES in sequence: U WAVES (prominent U wave after T wave — most characteristic of hypokalaemia), Flattened T waves, ST depression, Prolonged QU interval, Ventricular arrhythmias (PVCs, VT, VF)",
      "U WAVE: Positive deflection after T wave — best seen in V2-V4. Most characteristic ECG sign of hypokalaemia. Do NOT confuse with T wave",
      "HYPOKALAEMIA + DIGOXIN: LETHAL COMBINATION. Hypokalaemia dramatically increases digoxin toxicity — monitor potassium in all digoxin patients ALWAYS",
      "TREATMENT: MILD-MODERATE (K >2.5): Oral potassium chloride (KCl) preferred (IV not needed, safer). Increase dietary potassium (bananas, oranges, potatoes — but educate about risks in patients also on potassium-elevating medications). Address cause",
      "SEVERE or SYMPTOMATIC (K <2.5 or ECG changes): IV potassium replacement. MAXIMUM IV RATE: 10-20 mEq/hour via peripheral IV (faster rates cause phlebitis and pain). 40 mEq/hour maximum via central line with cardiac monitoring. NEVER PUSH IV POTASSIUM — causes fatal cardiac arrhythmia",
      "REPLACE MAGNESIUM: Hypomagnesaemia causes refractory hypokalaemia — potassium cannot be repleted without correcting magnesium first. ALWAYS check magnesium in hypokalaemia",
    ],
  },
  {
    title: "Hyperkalaemia — High Potassium",
    icon: "⬆️",
    color: "red",
    content: [
      "HYPERKALAEMIA: Serum potassium >5.5 mEq/L. Mild 5.5-6.0, Moderate 6.0-6.5, Severe >6.5. Life-threatening cardiac effects at >7.0",
      "CAUSES: RENAL FAILURE (most common — reduced K excretion), medications (ACE inhibitors, ARBs, potassium-sparing diuretics, NSAIDs, trimethoprim, heparin), CELLULAR RELEASE — acidosis (H+ moves into cells exchanging with K+), rhabdomyolysis, haemolysis, tumour lysis syndrome, massive blood transfusion, burns, DKA. PSEUDOHYPERKALAEMIA — haemolysed sample (always repeat)",
      "ECG CHANGES in sequence (know these cold): PEAKED TALL T WAVES (first sign — narrow, symmetric, tall) → Prolonged PR interval → Widened QRS → Flattened/absent P waves → Sine wave (QRS merges with T wave — pre-terminal) → VF/Asystole",
      "TREATMENT SEQUENCE (C-BIG-K-Drop — covered in renal section — reinforcing here):",
      "1. CALCIUM GLUCONATE 10mL of 10% IV over 2-3 min — MEMBRANE STABILISER. GIVE FIRST if ECG changes present. Does NOT lower K+. Protects cardiac membrane",
      "2. INSULIN 10 units IV + 50mL 50% DEXTROSE — shifts K+ into cells. Onset 15-30 min, duration 2-6 hours. Monitor glucose every 30 min (hypoglycaemia)",
      "3. SODIUM BICARBONATE 50-100 mmol IV — shifts K+ into cells (most effective in metabolic acidosis). Onset 30-60 min",
      "4. SALBUTAMOL nebulised 10-20mg — shifts K+ into cells via beta-2 stimulation. Onset 30 min. Adjunct",
      "5. RESONIUM (sodium polystyrene sulfonate) oral/enema — removes K+ from GI tract. SLOW (hours-days). Avoid in post-operative bowel",
      "6. DIALYSIS — definitive removal. Use when K severely elevated and refractory to medical treatment or in ESRD/AKI",
      "ACIDOSIS AND HYPERKALAEMIA: Acidosis shifts K+ OUT of cells → worsens hyperkalaemia. Treating acidosis shifts K+ back IN → lowers serum K+",
    ],
  },
  {
    title: "Calcium Disorders",
    icon: "🦴",
    color: "green",
    content: [
      "CALCIUM: Normal serum total calcium 2.2-2.6 mmol/L (8.8-10.4 mg/dL). Normal ionised calcium 1.1-1.4 mmol/L. 50% bound to albumin. CORRECT for albumin: Add 0.02 mmol/L to total calcium for every 1 g/L albumin below 40 g/L",
      "CALCIUM REGULATION: PTH (parathyroid hormone) — raises calcium (mobilises bone, increases renal reabsorption, increases Vitamin D activation). Calcitonin — lowers calcium. Vitamin D (calcitriol) — increases GI absorption",
      "HYPOCALCAEMIA: Serum calcium <2.2 mmol/L (or ionised <1.1). Causes: Hypoparathyroidism (post-thyroidectomy — most common surgical cause), vitamin D deficiency, hypomagnesaemia, renal failure, pancreatitis (calcium binds to fatty acids in saponification), massive blood transfusion (citrate chelates calcium), alkalosis (increases protein binding → reduces ionised calcium)",
      "HYPOCALCAEMIA CLINICAL FEATURES: NEUROMUSCULAR IRRITABILITY — Chvostek's sign (tap facial nerve in front of tragus → facial muscle twitch), Trousseau's sign (BP cuff inflated above systolic for 3 minutes → carpal spasm/main d'accoucheur — most specific), tetany, paraesthesia (perioral, fingertips), muscle cramps, laryngospasm (stridor, airway emergency), seizures. ECG: PROLONGED QT interval → Torsades de Pointes",
      "CHVOSTEK'S vs TROUSSEAU'S: Trousseau's is MORE SPECIFIC for hypocalcaemia. Chvostek's can be positive in 10% of normal people",
      "HYPOCALCAEMIA TREATMENT: Mild/asymptomatic — oral calcium supplements + Vitamin D. Symptomatic/severe — IV CALCIUM GLUCONATE (safer than calcium chloride peripherally — less tissue necrosis if extravasates) 10mL of 10% over 10 minutes, then infusion. Correct hypomagnesaemia (refractory hypocalcaemia until Mg corrected)",
      "HYPERCALCAEMIA: Serum calcium >2.6 mmol/L. Causes: PRIMARY HYPERPARATHYROIDISM (most common overall — adenoma), MALIGNANCY (most common in hospitalised patients — PTHrP, osteolytic metastases), vitamin D toxicity, sarcoidosis, thiazide diuretics, immobility, milk-alkali syndrome",
      "HYPERCALCAEMIA CLINICAL FEATURES — 'Bones, Stones, Groans, Moans and Psychic Overtones': Bones (bone pain, pathological fractures), Stones (renal calculi, nephrocalcinosis), Groans (nausea, vomiting, constipation, anorexia, pancreatitis), Moans (muscle weakness, hyporeflexia), Psychic (confusion, depression, psychosis, coma). ECG: SHORTENED QT interval",
      "HYPERCALCAEMIA TREATMENT: IV normal saline (1L/hour — hydration dilutes calcium, increases renal excretion — FIRST step). Loop diuretics (furosemide — after adequate hydration — promotes calciuresis — NOT thiazides which retain calcium). Bisphosphonates (pamidronate, zoledronic acid — osteoclast inhibitors, peak effect 48-72 hours — for malignancy-related). Calcitonin (rapid but short-lived). Corticosteroids (for sarcoidosis, lymphoma, vitamin D toxicity). Dialysis for severe/refractory",
    ],
  },
  {
    title: "Magnesium Disorders",
    icon: "⚡",
    color: "purple",
    content: [
      "MAGNESIUM: Normal serum magnesium 0.7-1.1 mmol/L (1.7-2.2 mEq/L). 50% in bone, 49% intracellular — serum level is a poor indicator of total body stores",
      "MAGNESIUM FUNCTIONS: Cofactor for 300+ enzymes, essential for Na/K-ATPase pump function (hence role in hypokalaemia), neuromuscular transmission, cardiac rhythm, protein synthesis, DNA replication",
      "HYPOMAGNESAEMIA: Serum Mg <0.7 mmol/L. CAUSES: GI losses (most common — diarrhoea, vomiting, malabsorption, short bowel, NG suction), renal losses (diuretics, aminoglycosides, alcohol, cisplatin, amphotericin B, PPIs long-term), inadequate intake (alcoholism, malnutrition), DKA treatment (insulin drives Mg into cells)",
      "HYPOMAGNESAEMIA CLINICAL FEATURES: Similar to hypocalcaemia and hypokalaemia (because hypoMg CAUSES both). Neuromuscular: tremor, weakness, hyperreflexia, Chvostek's/Trousseau's positive, tetany, seizures. Cardiac: arrhythmias (PVCs, AF, VT, Torsades de Pointes), prolonged QT",
      "HYPOMAGNESAEMIA → HYPOKALAEMIA AND HYPOCALCAEMIA: Magnesium is required for Na/K-ATPase (potassium transport) and PTH secretion (calcium regulation). Without magnesium, potassium leaks out of cells AND PTH cannot be secreted → both K+ and Ca2+ fall. REFRACTORY hypokalaemia and hypocalcaemia almost always indicate concurrent hypomagnesaemia — ALWAYS check Mg and replace it first",
      "HYPOMAGNESAEMIA TREATMENT: Mild/asymptomatic — oral magnesium supplements. Symptomatic or severe — IV magnesium sulfate (MgSO4) 2-4g IV over 15-30 minutes, then infusion. Monitor DTRs, BP and RR during IV Mg infusion (toxicity signs)",
      "HYPERMAGNESAEMIA: Serum Mg >1.1 mmol/L. CAUSES: Renal failure (cannot excrete Mg — most common), excessive Mg supplementation (IV Mg infusion, antacids, laxatives especially in renal failure), eclampsia treatment overshoot",
      "HYPERMAGNESAEMIA CLINICAL FEATURES: LOSS of deep tendon reflexes (DTRs — first clinical sign), nausea/vomiting, flushing, hypotension, bradycardia, respiratory depression (loss of DTRs → respiratory arrest), CARDIAC ARREST",
      "HYPERMAGNESAEMIA TREATMENT: Stop all Mg sources. IV CALCIUM GLUCONATE (antagonises Mg at cellular level — immediate but temporary). IV fluids (promotes Mg excretion). Dialysis for severe/refractory or in renal failure. Assisted ventilation if respiratory depression",
      "NCLEX PEARL: Deep tendon reflexes (DTRs) are the CLINICAL MONITOR for magnesium toxicity during IV infusion. ABSENT DTRs = STOP the infusion immediately — respiratory arrest imminent",
    ],
  },
  {
    title: "Phosphate Disorders",
    icon: "🔬",
    color: "green",
    content: [
      "PHOSPHATE: Normal serum phosphate 0.8-1.5 mmol/L (2.5-4.5 mg/dL). 85% in bone, 14% intracellular. Essential for: ATP energy production, 2,3-DPG (oxygen delivery), cell membrane structure, bone mineralisation",
      "PHOSPHATE-CALCIUM RELATIONSHIP: Inversely related. High phosphate → low calcium. Low phosphate → high calcium (often). PTH increases phosphate excretion (phosphaturic effect)",
      "HYPOPHOSPHATAEMIA: Serum phosphate <0.8 mmol/L. Causes: REFEEDING SYNDROME (most common in hospitalised — see below), malabsorption, vitamin D deficiency, hyperparathyroidism, DKA treatment (insulin drives PO4 into cells), antacid use (bind dietary phosphate), alcoholism, malnutrition",
      "REFEEDING SYNDROME: Critically important and commonly tested. When malnourished patients are rapidly re-fed (especially high carbohydrate), insulin is released → drives phosphate, potassium and magnesium into cells → severe hypophosphataemia (+ hypokalaemia + hypomagnesaemia). Can be FATAL. PREVENTION: Identify at-risk patients (malnutrition, chronic alcoholism, prolonged fasting, cancer cachexia), START FEEDING SLOWLY, monitor electrolytes closely, replace phosphate, K+ and Mg2+ proactively",
      "HYPOPHOSPHATAEMIA CLINICAL FEATURES: Mild — fatigue, muscle weakness, bone pain. Severe — haemolytic anaemia (RBCs need ATP), rhabdomyolysis, impaired leukocyte function (infection risk), RESPIRATORY MUSCLE WEAKNESS (may cause ventilator weaning failure), cardiac dysfunction, seizures, coma",
      "HYPOPHOSPHATAEMIA TREATMENT: Mild — oral phosphate supplements, dietary sources (dairy, meat, nuts). Moderate-severe — IV sodium or potassium phosphate (slowly — risk of hypocalcaemia from rapid correction)",
      "HYPERPHOSPHATAEMIA: Serum phosphate >1.5 mmol/L. CAUSES: Renal failure (most common — cannot excrete phosphate), hypoparathyroidism, vitamin D toxicity, tumour lysis syndrome, rhabdomyolysis, excessive phosphate intake",
      "HYPERPHOSPHATAEMIA COMPLICATIONS: HYPOCALCAEMIA (phosphate binds calcium → calcium-phosphate precipitation), metastatic calcification (calcium-phosphate deposits in soft tissues, vessels, kidneys), renal osteodystrophy (chronic in CKD)",
      "HYPERPHOSPHATAEMIA TREATMENT: Dietary phosphate restriction, PHOSPHATE BINDERS with meals (calcium carbonate, sevelamer, lanthanum), dialysis (in ESKD — some phosphate cleared per session but dietary restriction still required)",
    ],
  },
  {
    title: "Fluid Volume Deficit — Assessment and Management",
    icon: "📉",
    color: "orange",
    content: [
      "FLUID VOLUME DEFICIT (FVD/Hypovolaemia): Insufficient body fluid — can affect intravascular, interstitial or intracellular compartments",
      "CAUSES: EXTERNAL LOSSES — haemorrhage, vomiting, diarrhoea, diuretics, NG suction, wound drainage, burns (massive insensible losses), GI fistula. INTERNAL SHIFTS ('third-spacing') — peritonitis, pancreatitis, bowel obstruction, burns, ascites (fluid moves to interstitial/body cavities — still 'lost' from circulation)",
      "CLINICAL ASSESSMENT of FVD:",
      "Vital signs: Tachycardia (earliest sign), hypotension (later — orthostatic first), narrowed pulse pressure",
      "Skin: Decreased skin turgor (best assessed over sternum or clavicle — forehead in elderly), cool/clammy (vasoconstriction), pallor",
      "Mucous membranes: Dry, tacky (not reliable in mouth-breathers or elderly)",
      "Eyes: Sunken, reduced tearing",
      "Urine output: Oliguria (<0.5 mL/kg/hour), dark concentrated urine (SG >1.020, Na <20 mEq/L)",
      "CNS: Confusion, agitation, restlessness (cerebral hypoperfusion)",
      "Haematocrit: ELEVATED (haemoconcentration) — fewer water molecules per RBC",
      "HAEMORRHAGIC SHOCK CLASSIFICATION: Class I (<15% blood loss, HR <100, BP normal), Class II (15-30%, HR 100-120, mild hypotension), Class III (30-40%, HR 120-140, hypotension), Class IV (>40%, HR >140, severe hypotension, altered consciousness — imminent death)",
      "NURSING: Frequent vital signs, urine output hourly, IV access (large bore — 2 peripheral IVs for fluid resuscitation), fluid challenge, oxygen, position (modified Trendelenburg — legs elevated if no head injury), blood products if haemorrhagic shock",
    ],
  },
  {
    title: "Fluid Volume Excess — Assessment and Management",
    icon: "📈",
    color: "blue",
    content: [
      "FLUID VOLUME EXCESS (FVE/Hypervolaemia): Excess body fluid — most commonly reflects sodium and water retention",
      "CAUSES: Heart failure (reduced forward flow → RAAS activation → Na/water retention), cirrhosis (reduced albumin + portal hypertension + RAAS → ascites + oedema), renal failure (reduced excretion), nephrotic syndrome (low albumin → low oncotic pressure → oedema), excessive IV fluid administration, SIADH, corticosteroids (sodium retention), pregnancy",
      "CLINICAL ASSESSMENT of FVE:",
      "Oedema: PITTING oedema — dependent (ankles/feet in ambulatory patients, sacrum/scrotum in bed-bound), periorbital (morning — diurnal variation), anasarca (generalised severe oedema)",
      "Pulmonary: Crackles/crepitations (pulmonary oedema — fluid in alveoli), dyspnoea, orthopnoea, PND, decreased SpO2",
      "Cardiovascular: Elevated JVP/JVD (elevated CVP), S3 gallop (heart failure), hypertension",
      "Weight: WEIGHT GAIN (most sensitive indicator — 1kg ≈ 1L fluid). DAILY WEIGHT is the single best monitoring tool for fluid status in patients with heart failure/CKD",
      "Urine: Decreased output, concentrated (in heart failure/cirrhosis where kidneys trying to retain fluid)",
      "NURSING MANAGEMENT: Fluid restriction (as ordered — 1-2L/day for severe FVE), sodium restriction (<2g/day), daily weight (same time, same scale, same clothing — morning before breakfast after voiding), elevate HOB for respiratory comfort, elevate legs for peripheral oedema (if no respiratory compromise), diuretics as ordered, monitor electrolytes (especially K with diuretics), intake/output documentation",
      "THIRD SPACING: Fluid trapped in interstitium or body cavities (peritoneum, pleural space) — contributes to intravascular depletion DESPITE total body fluid excess. Patient may appear oedematous but have low intravascular volume. Cannot 'mobilise' third-spaced fluid — must replace intravascular volume AND treat underlying cause",
    ],
  },
];

const mnemonics = [
  {
    title: "Hypokalaemia ECG — U Waves",
    acronym: "UFK",
    breakdown: ["U waves (prominent after T wave — pathognomonic)", "Flattened T waves", "K is Low — these changes mean serious risk of VT/VF"],
    memory: "UFK — U waves appear when K is Low. U waves are the most CHARACTERISTIC ECG finding of hypokalaemia. Never confuse the U wave with a T wave!",
    color: "purple",
  },
  {
    title: "Hypercalcaemia — Bones, Stones, Groans, Moans",
    acronym: "BSGM",
    breakdown: ["Bones (pain, fractures)", "Stones (renal calculi)", "Groans (GI — nausea, vomiting, constipation, pancreatitis)", "Moans and Psychic Overtones (weakness, confusion, depression, psychosis)"],
    memory: "Bones, Stones, Groans, Moans — the classic hypercalcaemia tetrad. Shortened QT on ECG. IV saline is FIRST treatment!",
    color: "green",
  },
  {
    title: "Hyponatraemia — Correction Rate",
    acronym: "810",
    breakdown: ["8 mEq/L maximum rise in first 24 hours", "10 mEq/L absolute maximum in first 24 hours", "18 mEq/L maximum in first 48 hours"],
    memory: "8-10-18 — the correction rate limits for chronic hyponatraemia. Exceed these and you risk osmotic demyelination syndrome — a locked-in state worse than the hyponatraemia itself!",
    color: "orange",
  },
  {
    title: "Hypermagnesaemia Toxicity Signs",
    acronym: "RLRD",
    breakdown: ["Reflexes LOST (DTR absent — first clinical sign)", "Low BP (hypotension)", "Respiratory depression (stop infusion!)", "Dysrhythmias/cardiac arrest"],
    memory: "RLRD — Reflexes, Low BP, Respiratory, Dysrhythmias. CHECK DTRs before every Mg dose. Absent DTRs = STOP Mg IMMEDIATELY!",
    color: "red",
  },
  {
    title: "Refeeding Syndrome — At Risk Patients",
    acronym: "CAMP",
    breakdown: ["Cancer/cachexia", "Alcoholism (chronic)", "Malnutrition/prolonged fasting", "Post-operative (nothing by mouth for extended period)"],
    memory: "CAMP patients need slow refeeding. Monitor phosphate, potassium and magnesium closely. Start feeds at 50% target rate and build up over days!",
    color: "orange",
  },
];

const alerts = [
  { text: "NEVER PUSH IV POTASSIUM — IV potassium given as a bolus causes immediate fatal cardiac arrhythmia. Maximum peripheral rate is 10-20 mEq/hour. ALWAYS dilute!", severity: "high" },
  { text: "HYPONATRAEMIA correction: Maximum 8-10 mEq/L in 24 hours for CHRONIC hyponatraemia. Faster correction causes OSMOTIC DEMYELINATION SYNDROME — irreversible locked-in state!", severity: "high" },
  { text: "ABSENT DTRs during IV magnesium infusion = STOP IMMEDIATELY — respiratory arrest is imminent. Check DTRs before every dose or every 15-30 minutes during infusion!", severity: "high" },
  { text: "REFRACTORY hypokalaemia that does not respond to K+ replacement = check MAGNESIUM. Hypomagnesaemia MUST be corrected before potassium can be repleted!", severity: "high" },
  { text: "HYPOCALCAEMIA LARYNGOSPASM: Stridor + hypocalcaemia = airway emergency. Prepare for IV calcium gluconate AND airway management!", severity: "high" },
  { text: "REFEEDING SYNDROME: Starting high-calorie feeds in malnourished patients causes fatal hypophosphataemia + hypokalaemia + hypomagnesaemia. START SLOW — 50% target rate for first 2-3 days!", severity: "high" },
  { text: "HYPERCALCAEMIA treatment: IV NORMAL SALINE FIRST (1L/hour) to hydrate and promote renal calcium excretion. Loop diuretics ONLY after adequate hydration — NOT thiazides (thiazides RETAIN calcium)!", severity: "high" },
  { text: "PEAKED T WAVES = hyperkalaemia. U WAVES = hypokalaemia. Know these ECG changes cold — they appear on NCLEX and in every ICU!", severity: "medium" },
  { text: "CORRECTED CALCIUM: Always correct total calcium for albumin. Low albumin → low total calcium but NORMAL ionised calcium. Treating pseudohypocalcaemia with calcium is dangerous!", severity: "medium" },
  { text: "D5W (5% dextrose) is effectively hypotonic — it distributes to ALL body compartments. Do NOT use D5W for volume resuscitation — it will not stay in the intravascular space!", severity: "medium" },
  { text: "THIAZIDE DIURETICS cause HYPOKALAEMIA and HYPONATRAEMIA — but they RETAIN CALCIUM (hypercalcaemia). LOOP DIURETICS cause HYPOKALAEMIA and HYPOCALCAEMIA. Know the difference!", severity: "medium" },
  { text: "PHOSPHATE BINDERS must be taken WITH meals — not before, not after. They bind dietary phosphate in the gut during digestion. Timing is essential for effectiveness!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A patient is admitted with severe diarrhoea for 3 days and serum sodium of 128 mEq/L. Blood pressure is 88/56 and skin turgor is poor. Urine sodium is 8 mEq/L. Which type of hyponatraemia does this represent and what is the appropriate initial treatment?",
    options: [
      "Euvolaemic hyponatraemia (SIADH) — treat with fluid restriction 800mL/day",
      "Hypervolaemic hyponatraemia (heart failure) — treat with diuretics",
      "Hypovolaemic hyponatraemia — treat with IV isotonic normal saline to restore volume",
      "Hypovolaemic hyponatraemia — treat with 3% hypertonic saline to correct sodium directly",
    ],
    correct: 2,
    explanation: "HYPOVOLAEMIC HYPONATRAEMIA from GI losses. EVIDENCE: 3 days diarrhoea (GI Na loss), hypotension (BP 88/56 — volume depleted), poor skin turgor, urine Na 8 mEq/L (VERY LOW — kidneys maximally conserving sodium in response to hypovolaemia — extra-renal loss confirmed). TREATMENT: IV ISOTONIC NORMAL SALINE (0.9%) — the body's priority is haemodynamic restoration. As volume is restored, ADH is suppressed, kidneys excrete free water and sodium rises naturally. Fluid restriction is for SIADH (euvolaemic/hypervolaemic) — it would worsen this hypovolaemic patient. Hypertonic saline is reserved for SEVERE SYMPTOMATIC hyponatraemia (seizures, coma) and must be corrected slowly to avoid osmotic demyelination syndrome.",
    wrongExplanations: [
      "WRONG: SIADH presents with euvolaemia or mild hypervolaemia, concentrated urine and HIGH urine sodium (>40 mEq/L). This patient is hypovolaemic with urine Na 8 (sodium-conserving). Fluid restriction would worsen the haemodynamic instability.",
      "WRONG: Heart failure hypervolaemic hyponatraemia presents with oedema, elevated JVP and respiratory congestion — not hypotension and poor skin turgor. Diuretics in a hypotensive patient would worsen shock.",
      "",
      "WRONG: 3% hypertonic saline is for severe SYMPTOMATIC hyponatraemia (seizures, coma). This patient is hypovolaemic — the immediate priority is volume restoration with isotonic saline. Sodium will correct as volume is restored and ADH is suppressed.",
    ],
  },
  {
    level: "Knowledge",
    question: "A nurse is administering IV magnesium sulfate to a patient with eclampsia. Before each dose, the nurse assesses deep tendon reflexes (DTRs) and finds them absent (areflexia). Respiratory rate is 12 and SpO2 is 96%. What is the nurse's IMMEDIATE action?",
    options: [
      "Continue the infusion — absent DTRs are expected during therapeutic magnesium administration",
      "Slow the infusion rate by 50% and reassess in 30 minutes",
      "STOP the magnesium infusion immediately and notify the physician — absent DTRs indicate magnesium toxicity and respiratory arrest is imminent",
      "Increase the oxygen flow rate — the SpO2 of 96% needs to be improved before stopping the infusion",
    ],
    correct: 2,
    explanation: "ABSENT DEEP TENDON REFLEXES = MAGNESIUM TOXICITY = STOP THE INFUSION IMMEDIATELY. DTRs are the CLINICAL MONITOR for magnesium toxicity. The progression of hypermagnesaemia toxicity: LOST DTRs (first sign, around Mg 4-5 mEq/L) → Nausea/flushing → Hypotension → RESPIRATORY DEPRESSION AND ARREST (around Mg 5-6 mEq/L) → Cardiac arrest (>7-8 mEq/L). Absent DTRs are the WARNING before respiratory arrest — you have a brief window to act. ACTIONS: STOP Mg infusion immediately, notify physician urgently, prepare IV CALCIUM GLUCONATE (antidote — antagonises Mg at cellular level), prepare for assisted ventilation if RR drops further. RR 12 is already borderline — do not wait for respiratory depression before acting. SpO2 96% reflects current compensation — it will drop when respiratory muscles fail.",
    wrongExplanations: [
      "WRONG: Absent DTRs are NOT expected therapeutic findings — they indicate TOXICITY. Therapeutic levels are associated with reduced (but present) DTRs. Complete absence means toxic levels have been reached and respiratory arrest is imminent.",
      "WRONG: Slowing the infusion does not remove the existing toxic magnesium level from circulation. The infusion must be STOPPED, not merely slowed, when DTRs are absent.",
      "",
      "WRONG: Increasing oxygen addresses a symptom, not the life-threatening cause. The magnesium infusion must be stopped immediately. Oxygen supplementation is secondary to stopping the infusion.",
    ],
  },
  {
    level: "Application",
    question: "A 55-year-old man with metastatic lung cancer presents with nausea, confusion, constipation and weakness for 5 days. His serum calcium is 3.4 mmol/L (13.6 mg/dL) and albumin is normal. ECG shows a shortened QT interval. Which is the CORRECT treatment sequence?",
    options: [
      "Start bisphosphonate (pamidronate) immediately — malignancy-related hypercalcaemia requires immediate anti-osteoclast therapy",
      "IV normal saline aggressively (1-2L/hour) to restore volume and promote calciuresis — FIRST. Then furosemide AFTER adequate hydration. Then bisphosphonate (peak effect 48-72 hours)",
      "Administer furosemide 80mg IV immediately — loop diuretics promote renal calcium excretion",
      "Restrict oral fluid intake — excess fluid worsens dilutional hypercalcaemia",
    ],
    correct: 1,
    explanation: "HYPERCALCAEMIA OF MALIGNANCY treatment sequence: FIRST: IV NORMAL SALINE aggressively (1-2L/hour, targeting 200-300mL/hour urine output). Dehydration is almost universal in hypercalcaemia (calcium causes nephrogenic DI → polyuria → dehydration → worsens hypercalcaemia). Saline dilutes calcium and promotes renal excretion. SECOND: FUROSEMIDE — ONLY after adequate hydration (prevents hypervolaemia from saline, promotes calciuresis). CRITICALLY: Do NOT give furosemide before hydration — worsens dehydration and hypercalcaemia. THIRD: BISPHOSPHONATE (pamidronate 60-90mg IV or zoledronic acid 4mg IV over 15-30 minutes) — osteoclast inhibitor — peak effect takes 48-72 hours. FOURTH: Calcitonin (rapid but short-lived effect — useful while waiting for bisphosphonate). Fluid restriction is the exact opposite of correct management — dehydration worsens hypercalcaemia.",
    wrongExplanations: [
      "WRONG: Bisphosphonate is important but takes 48-72 hours for peak effect. It cannot address the acute hypercalcaemia and dehydration. IV saline MUST come first for immediate effect.",
      "",
      "WRONG: Furosemide BEFORE adequate hydration worsens dehydration and worsens hypercalcaemia. It must only be given AFTER achieving normovolaemia with saline. This is a critical treatment sequence point.",
      "WRONG: Fluid restriction is completely contraindicated — dehydration is a major contributor to hypercalcaemia by reducing renal calcium excretion. Aggressive IV hydration is the cornerstone of initial management.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a 68-year-old woman with heart failure and chronic hyponatraemia (sodium 128 mEq/L, baseline 129). She is started on 3% hypertonic saline. Twelve hours later, sodium is 138 mEq/L — a rise of 10 mEq/L in 12 hours. The patient appears more alert. What is the nurse's PRIORITY concern?",
    options: [
      "The correction is appropriate — sodium has risen to near-normal which is the goal",
      "The sodium has risen too rapidly — 10 mEq/L in 12 hours extrapolates to >20 mEq/L in 24 hours, exceeding the safe maximum. Notify physician immediately and consider desmopressin to slow correction",
      "Continue the hypertonic saline — the patient is improving neurologically so the rate is therapeutic",
      "Administer furosemide to prevent fluid overload from the hypertonic saline",
    ],
    correct: 1,
    explanation: "OVER-RAPID SODIUM CORRECTION is occurring. At 10 mEq/L in 12 hours, the projected 24-hour correction is >20 mEq/L — EXCEEDING the maximum safe rate of 8-10 mEq/L/24 hours for CHRONIC hyponatraemia (>48 hours duration). This patient has CHRONIC heart failure hyponatraemia — her brain has adapted. Correcting too fast risks OSMOTIC DEMYELINATION SYNDROME (ODS/central pontine myelinolysis). ODS symptoms appear 2-6 DAYS after the correction — the patient may appear better now but can develop locked-in syndrome, paraplegia and death within days. ACTIONS: STOP or REDUCE hypertonic saline, notify physician URGENTLY, consider DESMOPRESSIN (clamps ADH receptors, reduces free water excretion, slows sodium rise), consider free water administration (oral water or D5W) to lower the rate of correction. The neurological improvement does NOT mean the rate is safe — it means the hyponatraemia is being partially corrected.",
    wrongExplanations: [
      "WRONG: Near-normal sodium is NOT the goal in chronic hyponatraemia correction — SAFE RATE is the goal. Reaching normal sodium in 12 hours from chronic hyponatraemia is a correction rate disaster, not a success.",
      "",
      "WRONG: Neurological improvement does not validate an unsafe correction rate. ODS from over-rapid correction presents 2-6 DAYS LATER — by which point irreversible demyelination has occurred. The apparent improvement is misleading.",
      "WRONG: Furosemide does not address the unsafe correction rate. The problem is sodium rising too fast — furosemide would further concentrate the sodium (increases free water excretion) and potentially worsen the rapid correction.",
    ],
  },
  {
    level: "Application",
    question: "A patient is started on total parenteral nutrition (TPN) after 3 weeks of inadequate oral intake following oesophageal surgery. Day 2 of TPN, the nurse notes: Phosphate 0.38 mmol/L (normal 0.8-1.5), Potassium 2.8 mEq/L, Magnesium 0.52 mmol/L, Glucose 14.2 mmol/L and the patient reports severe muscle weakness. What is the nurse's MOST accurate assessment?",
    options: [
      "The patient has post-operative electrolyte disturbances that are expected and will self-resolve",
      "This is REFEEDING SYNDROME — rapid re-feeding after prolonged starvation causes intracellular shift of phosphate, potassium and magnesium. Notify physician urgently, prepare IV replacement of all three electrolytes and consider reducing TPN rate",
      "The patient has new-onset type 2 diabetes from the TPN glucose load — start insulin",
      "The low phosphate is from the TPN solution itself — switch to a different TPN formula",
    ],
    correct: 1,
    explanation: "REFEEDING SYNDROME — classic presentation. EVIDENCE: 3 weeks inadequate intake (malnourished — depleted intracellular electrolytes), rapid restart of high-calorie nutrition (TPN), Day 2 onset (typical timing), SEVERE HYPOPHOSPHATAEMIA (0.38 = severely low), concurrent hypokalaemia (2.8) and hypomagnesaemia (0.52) — the triad of refeeding, muscle weakness (from hypophosphataemia → impaired ATP). MECHANISM: Insulin released by carbohydrate intake (TPN glucose) → drives phosphate, potassium and magnesium INTO cells → severe intracellular electrolyte shift → serum levels plummet. MANAGEMENT: Notify physician urgently, IV phosphate replacement (IV sodium/potassium phosphate), IV potassium, IV magnesium, REDUCE TPN RATE to 50% and rebuild more gradually, monitor electrolytes every 6 hours. The hyperglycaemia (14.2) is from TPN glucose load and needs insulin but is NOT the primary concern — the electrolyte crisis is.",
    wrongExplanations: [
      "WRONG: These are NOT self-resolving expected electrolyte disturbances. Severe hypophosphataemia (0.38) with concurrent hypokalaemia and hypomagnesaemia is refeeding syndrome — a potentially fatal metabolic emergency requiring immediate intervention.",
      "",
      "WRONG: While insulin for hyperglycaemia may be needed, this does not explain the triple electrolyte crisis. The primary diagnosis is refeeding syndrome — TPN-induced carbohydrate load triggering insulin-mediated intracellular electrolyte shift.",
      "WRONG: The low phosphate is NOT from the TPN formula — TPN solutions typically contain phosphate. The depletion is from intracellular shift driven by insulin from carbohydrate load in a malnourished patient. Changing formula does not address the crisis.",
    ],
  },
  {
    level: "Advanced",
    question: "A 72-year-old woman with known hypothyroidism (non-compliant with levothyroxine) presents with sodium of 118 mEq/L, serum osmolality 242 mOsm/kg, urine osmolality 520 mOsm/kg, urine sodium 55 mEq/L. She is confused and her GCS is 12. She appears euvolaemic. The physician initiates 3% hypertonic saline at 30mL/hour. Over the next 4 hours, sodium has risen from 118 to 128 mEq/L (10 mEq/L in 4 hours). What is the nurse's MOST important action?",
    options: [
      "Continue 3% saline at 30 mL/hour — 10 mEq/L in 4 hours is within safe limits",
      "STOP the 3% saline infusion immediately and notify physician — 10 mEq/L in 4 hours extrapolates to 60 mEq/L in 24 hours. Administer desmopressin and consider free water to slow correction rate",
      "Increase the 3% saline rate — the patient remains confused and needs faster correction",
      "Start fluid restriction — the SIADH from hypothyroidism requires fluid restriction not hypertonic saline",
    ],
    correct: 1,
    explanation: "CRITICALLY OVER-RAPID CORRECTION. In 4 hours, sodium has risen 10 mEq/L. This extrapolates to 60 mEq/L in 24 hours — over 6 TIMES the maximum safe rate (8-10 mEq/L/24 hours). Even accounting for some slow-down, this trajectory will cause OSMOTIC DEMYELINATION SYNDROME. This patient has CHRONIC hyponatraemia (hypothyroid SIADH — has likely been developing for weeks due to non-compliance). Her brain has adapted — rapid correction is catastrophic. IMMEDIATE ACTIONS: STOP 3% saline IMMEDIATELY. Notify physician URGENTLY. DESMOPRESSIN 2-4 mcg IV or SC — clamps the V2 receptor, prevents free water excretion, allows sodium to be diluted back down slowly. 5% DEXTROSE (free water) infusion to dilute the sodium (100-250mL IV over 1-2 hours). Target: sodium rise no more than 8-10 mEq/L in 24 hours TOTAL — they've already used 10 mEq/L. Monitor sodium hourly during this manoeuvre. NOTE: Hypertonic saline was initially appropriate (GCS 12 = symptomatic) but the rate of response was far faster than expected — requires immediate dose-stopping.",
    wrongExplanations: [
      "WRONG: 10 mEq/L in 4 hours is NOT within safe limits when projected over 24 hours. The safe maximum is 8-10 mEq/L in 24 HOURS total — this patient has reached that limit in 4 hours alone. Continuing causes ODS.",
      "",
      "WRONG: Increasing 3% saline when sodium is already rising 6 times faster than safe would be catastrophic. The patient's confusion reflects the hyponatraemia — as sodium normalises at a safe rate, consciousness improves. Do NOT rush sodium correction.",
      "WRONG: Fluid restriction is appropriate for maintenance management of hypothyroid SIADH but is completely inadequate for ACUTE SYMPTOMATIC hyponatraemia with GCS 12. The initial decision to use hypertonic saline was correct — but the rate of response was too fast and must be stopped.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is reviewing morning electrolytes for a patient in the ICU on Day 4 following extensive abdominal surgery for bowel resection. The patient has had significant nasogastric losses (1.8L/day) and is on furosemide for mild fluid overload. Morning results: Na 141, K 2.6, Cl 88, HCO3 34, Mg 0.42 mmol/L, pH 7.55. The patient has muscle weakness and the ECG shows prominent U waves with ST depression. Which combination of electrolyte replacement and mechanism is MOST accurate?",
    options: [
      "Replace potassium only — K 2.6 explains all findings",
      "Replace potassium and magnesium simultaneously — hypomagnesaemia causes refractory hypokalaemia (Mg required for Na/K-ATPase). The metabolic alkalosis (pH 7.55, HCO3 34) from NG losses and furosemide further drives K+ into cells worsening the hypokalaemia",
      "Give sodium bicarbonate — the bicarbonate of 34 is too low and requires supplementation",
      "Treat the metabolic alkalosis with acetazolamide first before replacing electrolytes",
    ],
    correct: 1,
    explanation: "This patient has a COMPLEX METABOLIC SCENARIO requiring understanding of interdependencies: HYPOKALAEMIA (K 2.6) with ECG changes (U waves, ST depression) — dangerous, needs urgent replacement. HYPOMAGNESAEMIA (Mg 0.42 — severely low) — CRITICAL because magnesium is required for Na/K-ATPase function (potassium transport). Without magnesium replacement, potassium cannot be effectively repleted — it will continue to leak out of cells. METABOLIC ALKALOSIS (pH 7.55, HCO3 34, Cl 88 — hypochloraemic metabolic alkalosis from NG losses — HCl lost in gastric juice + furosemide). Alkalosis WORSENS hypokalaemia — H+ moves OUT of cells to compensate for alkalosis, K+ moves IN to maintain electrical neutrality → serum K drops further. MECHANISM: NG losses → HCl loss → metabolic alkalosis → K+ driven intracellularly + renal K wasting (alkalosis promotes kaliuresis). Furosemide → additional K wasting + contraction alkalosis. TREATMENT: Simultaneous IV KCl and IV MgSO4. Magnesium replacement first or concurrent is ESSENTIAL. Address alkalosis (correct volume, consider acetazolamide if severe). Sodium bicarbonate (Option C) is wrong — this patient ALREADY has excess bicarbonate (34) and alkalosis. More bicarbonate would be lethal.",
    wrongExplanations: [
      "WRONG: Replacing potassium alone without magnesium will result in refractory hypokalaemia — the potassium will not stay repleted. Hypomagnesaemia causes ongoing potassium wasting from cells and kidneys by impairing Na/K-ATPase.",
      "",
      "WRONG: Bicarbonate of 34 is ELEVATED not low — this patient has METABOLIC ALKALOSIS. Giving sodium bicarbonate to a patient with pH 7.55 and bicarbonate 34 would worsen the alkalosis and potentially be fatal.",
      "WRONG: While acetazolamide (carbonic anhydrase inhibitor) can treat metabolic alkalosis, this is not the immediate priority. The hypokalaemia with ECG changes (U waves) requires immediate electrolyte replacement. Acetazolamide is an adjunct consideration after stabilisation.",
    ],
  },
  {
    level: "Advanced",
    question: "A trauma nurse is receiving a 28-year-old male stabbing victim. He is pale, diaphoretic, confused and moaning. BP is 74/40, HR 148, RR 28, SpO2 89% on high-flow O2. He has two large-bore IVs in situ. Estimated blood loss at scene is 'significant.' The trauma team activates massive haemorrhage protocol (MHP). As the nurse, which action sequence is MOST appropriate?",
    options: [
      "Start 2L normal saline bolus immediately, then reassess before giving blood products",
      "Apply direct pressure to wounds, initiate massive transfusion protocol (pRBC:FFP:platelets in 1:1:1 ratio), prepare for emergent surgery, limit crystalloid to prevent haemodilution, tranexamic acid within 3 hours of injury",
      "Administer normal saline 500mL bolus, check coagulation studies and wait for results before giving FFP",
      "Give 1L normal saline and 1L colloid (albumin) — balanced resuscitation is preferred over blood products initially",
    ],
    correct: 1,
    explanation: "MASSIVE HAEMORRHAGIC SHOCK MANAGEMENT — current evidence-based practice (ATLS/EAST guidelines): This patient has CLASS IV HAEMORRHAGIC SHOCK: HR 148, BP 74/40, confused, SpO2 89%, diaphoretic — >40% blood volume loss estimated. HAEMOSTATIC RESUSCITATION is the standard of care: DAMAGE CONTROL RESUSCITATION uses blood products in balanced ratio (pRBC:FFP:Platelets = 1:1:1) to restore ALL components of blood lost — not just volume. LIMIT CRYSTALLOID: Large volume crystalloid causes haemodilution of clotting factors, hypothermia (stored crystalloid is cold), hyperchloraemic acidosis — worsens coagulopathy. Crystalloid is a bridge ONLY while blood products are prepared. TRANEXAMIC ACID (TXA): Give within 3 hours of injury (ideally within 1 hour) — inhibits fibrinolysis, reduces mortality in haemorrhagic shock (CRASH-2 trial). PERMISSIVE HYPOTENSION: Allow SBP 80-90 mmHg until surgical haemostasis — avoid aggressive BP correction which dislodges clot. DIRECT PRESSURE: Immediately controls ongoing external haemorrhage. Option A (2L saline first) is the old paradigm — dilutional coagulopathy from large crystalloid volumes worsens outcomes.",
    wrongExplanations: [
      "WRONG: Large-volume normal saline resuscitation in class IV haemorrhagic shock is the outdated approach. It causes dilutional coagulopathy (dilutes clotting factors), hypothermia and hyperchloraemic acidosis — worsening the 'lethal triad' of coagulopathy + hypothermia + acidosis. Blood products are required immediately.",
      "",
      "WRONG: Waiting for coagulation studies before giving FFP causes unacceptable delays in massive haemorrhage. The patient is dying from coagulopathic haemorrhagic shock — empirical 1:1:1 transfusion is initiated immediately. Lab results guide subsequent management, not initial activation.",
      "WRONG: Albumin colloid does not replace coagulation factors, RBCs or platelets. In haemorrhagic shock, the patient has lost ALL blood components — volume alone is insufficient and does not address coagulopathy. Blood products are essential.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a 55-year-old woman on Day 3 of ICU admission for septic shock from pneumonia. She has received 8L of normal saline over 72 hours. Morning assessment shows: generalised pitting oedema ++, SpO2 91% on FiO2 0.5 via HFNC, CVP 18 mmHg, creatinine risen from 82 to 240 μmol/L, serum sodium 148 mEq/L, serum chloride 118 mEq/L, pH 7.22, HCO3 16 mEq/L (base deficit -10). Calculate the anion gap and identify the acid-base disorder type and the likely IATROGENIC cause.",
    options: [
      "Anion gap = 14 mEq/L (normal). Metabolic acidosis from renal failure causing bicarbonate wasting",
      "Anion gap = 14 mEq/L (normal). HYPERCHLORAEMIC METABOLIC ACIDOSIS from large volume normal saline administration — the excess chloride from 8L of 0.9% NaCl inhibits bicarbonate reabsorption. This is iatrogenic saline-induced acidosis",
      "Anion gap = 22 mEq/L (elevated). High anion gap metabolic acidosis from lactic acidosis from sepsis",
      "Anion gap = 14 mEq/L (normal). Respiratory acidosis from the HFNC reducing respiratory drive",
    ],
    correct: 1,
    explanation: "ANION GAP = Na − (Cl + HCO3) = 148 − (118 + 16) = 148 − 134 = 14 mEq/L — NORMAL (8-12 mEq/L, normal with 14 being borderline/normal). NORMAL ANION GAP METABOLIC ACIDOSIS (NAGMA) + HYPERCHLORAEMIA = IATROGENIC SALINE-INDUCED ACIDOSIS. MECHANISM: Normal saline (0.9% NaCl) contains Na 154 mEq/L and Cl 154 mEq/L — SUPRAPHYSIOLOGICAL chloride (plasma Cl is 103 mEq/L). 8L of normal saline = massive chloride load. Excess chloride → inhibits bicarbonate reabsorption in proximal tubule (ATOT — strong ion theory) → bicarbonate wasted → metabolic acidosis without elevated anion gap (no unmeasured anions). The patient also has fluid overload (8L saline → oedema, elevated CVP), hypernatraemia (148 — from saline sodium load), AKI (creatinine 82→240 — from sepsis + aggressive saline resuscitation with hyperchloraemia worsening renal vasoconstriction). CLINICAL SIGNIFICANCE: Modern evidence shows balanced crystalloids (Plasmalyte, Lactated Ringer's) cause less AKI and less acidosis than normal saline in large volumes — SMART and SALT-ED trials. This patient should have been receiving balanced crystalloids. The normal anion gap distinguishes this from lactic acidosis (high AG).",
    wrongExplanations: [
      "WRONG: The anion gap is correctly calculated as 14 (not high). Renal failure does cause metabolic acidosis but usually HIGH ANION GAP (urate, sulfate, phosphate accumulation). The NORMAL anion gap with hyperchloraemia specifically indicates hyperchloraemic metabolic acidosis from saline.",
      "",
      "WRONG: If lactic acidosis from sepsis were dominant, the anion gap would be ELEVATED (lactate is an unmeasured anion). The normal anion gap and elevated chloride point specifically to saline-induced hyperchloraemic acidosis. Lactic acidosis may coexist but is not the primary mechanism here.",
      "WRONG: HFNC is a respiratory support device — it does not cause respiratory acidosis (it improves gas exchange). pH 7.22 with HCO3 16 and base deficit -10 is a PRIMARY METABOLIC ACIDOSIS with partial respiratory compensation (if PaCO2 is low, which would be expected with the patient compensating by hyperventilating).",
    ],
  },
];

const clinicalPearls = [
  "The most dangerous single action in electrolyte replacement is IV potassium push. It has killed patients. The word 'never' rarely appears in medicine, but it applies here: never administer potassium IV as a direct push or bolus. It causes immediate ventricular fibrillation. Every institution has a maximum infusion rate — know it, follow it, check it.",
  "Osmotic demyelination syndrome does not appear when you correct hyponatraemia — it appears 2-6 days later, when the patient goes home or to the ward and has a devastating locked-in syndrome or paraplegia. This delayed presentation is what makes over-rapid correction so treacherous. The harm is invisible at the time of the error. Correct chronic hyponatraemia at 8-10 mEq/L per 24 hours maximum, without exception.",
  "Refractory hypokalaemia that does not respond to potassium replacement almost always means hypomagnesaemia. Magnesium is required for the Na/K-ATPase pump that keeps potassium inside cells. Without it, potassium leaks out as fast as you replace it. Check magnesium in every hypokalaemic patient. Replace it first, or simultaneously — not as an afterthought.",
  "The DTR check before and during IV magnesium infusion is not a ritual — it is a life-saving clinical observation. Absent DTRs at magnesium 4-5 mEq/L precede respiratory arrest at magnesium 5-6 mEq/L by very little. The patient with eclampsia who arrests from magnesium toxicity in an unmonitored room is a preventable death.",
  "Normal saline is not normal — it contains 154 mEq/L of chloride, far above plasma's 103 mEq/L. Large volumes of normal saline cause hyperchloraemic metabolic acidosis, renal vasoconstriction and AKI. In patients requiring large-volume resuscitation, balanced crystalloids (Plasmalyte, Hartmann's) are metabolically superior. This distinction is increasingly NCLEX-tested and clinically important.",
  "Refeeding syndrome kills malnourished patients with the very thing that should save them — food. The crash in phosphate, potassium and magnesium after restarting feeding in a starved patient can cause respiratory failure, cardiac arrhythmias and death within days. Identify the at-risk patient before feeding, start at 50% of target calories, monitor electrolytes daily and replace proactively.",
  "The Chvostek and Trousseau signs are bedside tests for hypocalcaemia that every nurse should know. Chvostek (tap the facial nerve, watch for facial twitch) is sensitive but not specific — 10% of normal people have it. Trousseau (inflate BP cuff for 3 minutes above systolic, watch for carpal spasm) is more specific. In the patient who has just had a thyroidectomy, performing both of these signs before discharge is not optional — it is the safety check.",
];

export default function FluidElectrolytesPage() {
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
            <h1 className="font-black text-base text-gray-900">💧 Fluid & Electrolytes</h1>
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
                💧 Fluid and electrolytes is one of the highest yield NCLEX topics. Master sodium and potassium disorders, IV fluid types, calcium and magnesium disorders and refeeding syndrome!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most critical fluid and electrolyte safety points — these save lives and appear on NCLEX!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Fluid & Electrolytes!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review sodium correction rates, potassium ECG changes and magnesium toxicity." :
                        "Keep studying! Focus on hyponatraemia types, ECG changes, refeeding syndrome and correction rate limits."}
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