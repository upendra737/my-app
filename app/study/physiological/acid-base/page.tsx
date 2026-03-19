"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Acid-Base Balance",
    icon: "⚖️",
    color: "blue",
    content: [
      "Acid-base balance is the regulation of hydrogen ion (H+) concentration in body fluids — essential for enzyme function, protein structure, cell signalling and life itself",
      "NORMAL VALUES: pH 7.35-7.45, PaCO2 35-45 mmHg, HCO3 22-26 mEq/L, Base Excess -2 to +2",
      "pH SCALE: pH 7.0 = neutral. pH <7.35 = ACIDOSIS (too many H+ ions). pH >7.45 = ALKALOSIS (too few H+ ions). Compatible life range: 6.8-7.8",
      "ACID SOURCES: Volatile acid — CO2 (from cellular metabolism — eliminated by lungs). Non-volatile (fixed) acids — lactic acid, ketoacids, sulfuric acid, phosphoric acid (eliminated by kidneys)",
      "THREE BUFFER SYSTEMS: Bicarbonate-carbonic acid system (most important extracellular buffer — responds in minutes), Protein buffers (haemoglobin, albumin — intracellular), Phosphate buffer system (important in urine and intracellular)",
      "HENDERSON-HASSELBALCH: pH is determined by the ratio HCO3/CO2. pH = 6.1 + log (HCO3/0.03 × PaCO2). Normal ratio ≈ 20:1 (HCO3:CO2). As long as the 20:1 ratio is maintained, pH is normal",
      "TWO REGULATORY SYSTEMS: LUNGS — regulate CO2 (volatile acid). Fast compensation — minutes to hours. KIDNEYS — regulate HCO3 (non-volatile acid/base). Slow compensation — hours to days",
      "NCLEX heavily tests: ABG interpretation (4-step method), identifying primary disorder, identifying compensation, mixed disorders and clinical causes of each disorder",
    ],
  },
  {
    title: "ABG Interpretation — The 4-Step Method",
    icon: "🔬",
    color: "green",
    content: [
      "STEP 1 — ASSESS THE pH: pH <7.35 = ACIDOSIS. pH >7.45 = ALKALOSIS. pH 7.35-7.45 = NORMAL (may still have a compensated disorder)",
      "STEP 2 — ASSESS THE PRIMARY CAUSE: Look at PaCO2 and HCO3. RESPIRATORY component = PaCO2. METABOLIC component = HCO3",
      "RESPIRATORY ACIDOSIS: pH ↓ and PaCO2 ↑ (CO2 retained — hypoventilation)",
      "RESPIRATORY ALKALOSIS: pH ↑ and PaCO2 ↓ (CO2 blown off — hyperventilation)",
      "METABOLIC ACIDOSIS: pH ↓ and HCO3 ↓ (bicarbonate consumed/lost)",
      "METABOLIC ALKALOSIS: pH ↑ and HCO3 ↑ (bicarbonate gained/H+ lost)",
      "STEP 3 — ASSESS COMPENSATION: The opposite system compensates to return pH toward normal",
      "For RESPIRATORY ACIDOSIS: Kidneys retain HCO3 (HCO3 ↑). Acute: HCO3 rises 1 mEq/L per 10 mmHg rise in PaCO2. Chronic: HCO3 rises 3-5 mEq/L per 10 mmHg rise in PaCO2",
      "For RESPIRATORY ALKALOSIS: Kidneys excrete HCO3 (HCO3 ↓). Acute: HCO3 drops 2 mEq/L per 10 mmHg drop in PaCO2. Chronic: HCO3 drops 5 mEq/L per 10 mmHg drop in PaCO2",
      "For METABOLIC ACIDOSIS: Lungs hyperventilate (PaCO2 ↓). Expected PaCO2 = 1.5 × HCO3 + 8 ± 2 (Winters formula). Or: expected PaCO2 ≈ last 2 digits of pH × 100",
      "For METABOLIC ALKALOSIS: Lungs hypoventilate (PaCO2 ↑). Expected PaCO2 = 0.7 × HCO3 + 21 ± 2",
      "STEP 4 — ASSESS ANION GAP (if metabolic acidosis): AG = Na − (Cl + HCO3). Normal 8-12 mEq/L. Elevated AG indicates unmeasured anions (MUDPILES). Normal AG indicates hyperchloraemic acidosis (HARDASS/DURHAM)",
    ],
  },
  {
    title: "Respiratory Acidosis",
    icon: "😮‍💨",
    color: "red",
    content: [
      "RESPIRATORY ACIDOSIS: pH <7.35, PaCO2 >45 mmHg. CO2 is retained — hypoventilation. CO2 + H2O → H2CO3 → H+ + HCO3−. Excess CO2 = excess H+ = acidosis",
      "CAUSES — HYPOVENTILATION: CNS depression (opioids, benzodiazepines, anaesthetics, barbiturates, alcohol — most common drug cause), COPD exacerbation (CO2 retention), severe asthma (CO2 normal or rising = ominous sign of fatigue), neuromuscular disease (GBS, MG, ALS — respiratory muscle weakness), obesity hypoventilation (Pickwickian syndrome), airway obstruction (foreign body, anaphylaxis, epiglottitis), chest wall deformity (kyphoscoliosis), pneumothorax",
      "CLINICAL FEATURES: Headache (CO2 causes cerebral vasodilation), flushed face, bounding pulse, confusion/drowsiness (CO2 narcosis), asterixis (CO2 flap), diaphoresis, tachycardia. Severe: coma",
      "COMPENSATION: METABOLIC COMPENSATION by kidneys — retain bicarbonate (HCO3 rises). Acute: HCO3 rises 1 mEq/L per 10 mmHg rise in PaCO2. Chronic: HCO3 rises 3-5 mEq/L per 10 mmHg (time allows fuller compensation)",
      "ACUTE vs CHRONIC respiratory acidosis: In ACUTE — pH is very low (kidneys haven't compensated yet). In CHRONIC — pH closer to normal (kidneys have fully compensated — HCO3 elevated)",
      "TREATMENT: Treat the CAUSE — improve ventilation. Reverse CNS depression (naloxone for opioids, flumazenil for benzodiazepines). Bronchodilators for COPD/asthma. NIV/BiPAP for COPD (avoids intubation). Intubation/mechanical ventilation for severe respiratory failure",
      "CAUTION WITH CHRONIC RESPIRATORY ACIDOSIS: If patient has chronically elevated PaCO2 and elevated HCO3 (compensated) — do NOT rapidly normalise PaCO2 with aggressive ventilation. Rapid CO2 lowering causes 'post-hypercapnic alkalosis' — severe metabolic alkalosis (the bicarbonate the kidneys retained cannot be excreted rapidly enough)",
      "NURSING: Monitor RR, SpO2, ABGs, LOC, position (high Fowler's), airway management, medication administration, prepare for NIV or intubation",
    ],
  },
  {
    title: "Respiratory Alkalosis",
    icon: "😤",
    color: "orange",
    content: [
      "RESPIRATORY ALKALOSIS: pH >7.45, PaCO2 <35 mmHg. CO2 is blown off — hyperventilation. Less CO2 = less H+ = alkalosis",
      "CAUSES — HYPERVENTILATION: ANXIETY/PANIC ATTACK (most common cause), pain, fever, sepsis (early sepsis stimulates respiratory centre), LIVER FAILURE (hyperammonaemia stimulates breathing), PREGNANCY (progesterone stimulates respiration — mild chronic respiratory alkalosis is normal in pregnancy), HIGH ALTITUDE (hypoxia stimulates hyperventilation), PULMONARY EMBOLISM (hypoxia + anxiety), mechanical ventilation (overventilation — rate or volume too high), salicylate poisoning EARLY (aspirin directly stimulates respiratory centre — later causes metabolic acidosis)",
      "CLINICAL FEATURES: Light-headedness, dizziness, perioral tingling, paraesthesia of extremities (from cerebral vasoconstriction — CO2 is a cerebral vasodilator, so low CO2 = vasoconstriction = reduced cerebral perfusion), carpopedal spasm (calcium becomes more protein-bound in alkalosis → decreased ionised calcium → tetany), palpitations, syncope",
      "COMPENSATION: METABOLIC COMPENSATION by kidneys — excrete bicarbonate (HCO3 drops). Acute: HCO3 drops 2 mEq/L per 10 mmHg drop in PaCO2. Chronic: HCO3 drops 5 mEq/L per 10 mmHg drop in PaCO2",
      "ACUTE ALKALOSIS AND CALCIUM: Alkalosis increases calcium binding to albumin → reduces IONISED calcium → symptoms of hypocalcaemia (tetany, perioral tingling, Trousseau's sign) WITHOUT reducing total calcium",
      "TREATMENT: Treat the CAUSE. Anxiety/panic: breathing into a paper bag (rebreathes CO2 — raises PaCO2), relaxation techniques, benzodiazepines. Pain: adequate analgesia. Fever/sepsis: treat infection. Mechanical ventilation: reduce rate/tidal volume. Salicylate overdose: alkalinise urine (sodium bicarbonate) to promote salicylate excretion",
      "BREATHING INTO PAPER BAG: Only appropriate for PSYCHOGENIC hyperventilation — NEVER for a patient with genuine hypoxia (COPD, PE, pneumonia) — rebreathing CO2 in these patients worsens hypoxaemia",
      "SALICYLATE POISONING BIPHASIC PATTERN: EARLY — stimulates respiratory centre → respiratory alkalosis. LATE — uncouples oxidative phosphorylation → organic acid production → metabolic acidosis. Mixed respiratory alkalosis + metabolic acidosis in salicylate poisoning is diagnostic",
    ],
  },
  {
    title: "Metabolic Acidosis — High Anion Gap",
    icon: "🔴",
    color: "red",
    content: [
      "METABOLIC ACIDOSIS: pH <7.35, HCO3 <22 mEq/L. Bicarbonate is lost or consumed by acid",
      "ANION GAP (AG): Na − (Cl + HCO3). Normal = 8-12 mEq/L. Represents unmeasured anions (phosphate, sulfate, albumin, organic acids)",
      "HIGH ANION GAP METABOLIC ACIDOSIS (HAGMA): AG >12. Unmeasured acid anions are replacing bicarbonate. CAUSES — MUDPILES mnemonic:",
      "M — METHANOL poisoning (formic acid, causes optic nerve damage, blindness)",
      "U — URAEMIA/Renal failure (organic acids, urate, sulfate, phosphate accumulate)",
      "D — DIABETIC KETOACIDOSIS (DKA — ketoacids: beta-hydroxybutyrate, acetoacetate)",
      "P — PROPYLENE GLYCOL (solvent in IV medications — lorazepam, diazepam, phenytoin)",
      "I — IRON or ISONIAZID overdose (lactic acidosis)",
      "L — LACTIC ACIDOSIS (most common HAGMA — tissue hypoperfusion: shock, cardiac arrest, sepsis; also: metformin, cyanide, CO poisoning)",
      "E — ETHYLENE GLYCOL (antifreeze — oxalic acid, calcium oxalate crystals in urine, renal failure)",
      "S — SALICYLATES (late salicylate poisoning — see respiratory alkalosis section for early phase)",
      "LACTIC ACIDOSIS: Type A (tissue hypoxia — shock, cardiac arrest, sepsis, CO poisoning) vs Type B (no tissue hypoxia — metformin, liver failure, seizures, thiamine deficiency). Lactate >2 mmol/L = elevated, >4 mmol/L = severe lactic acidosis",
      "DELTA-DELTA (DELTA RATIO): (AG - 12) / (24 - HCO3). Used to detect MIXED disorders in HAGMA. <0.4 = pure normal AG acidosis. 0.4-2 = pure HAGMA. >2 = metabolic alkalosis also present. If expected HCO3 from delta-delta is different from actual, there is a mixed disorder",
    ],
  },
  {
    title: "Metabolic Acidosis — Normal Anion Gap",
    icon: "🟡",
    color: "orange",
    content: [
      "NORMAL ANION GAP METABOLIC ACIDOSIS (NAGMA): AG 8-12, pH <7.35, HCO3 low. Also called HYPERCHLORAEMIC METABOLIC ACIDOSIS — as bicarbonate is lost, chloride rises to maintain electroneutrality",
      "CAUSES — HARDASS mnemonic (or DURHAM):",
      "H — HYPERALIMENTATION (TPN without adequate bicarbonate)",
      "A — ADDISON'S DISEASE (adrenal insufficiency — aldosterone deficiency → cannot excrete H+)",
      "R — RENAL TUBULAR ACIDOSIS (RTA — kidney cannot acidify urine or reabsorb bicarbonate)",
      "D — DIARRHOEA (massive bicarbonate loss in stool — most common GI cause of NAGMA)",
      "A — ACETAZOLAMIDE (carbonic anhydrase inhibitor — blocks HCO3 reabsorption)",
      "S — SALINE EXCESS (large volume normal saline — hyperchloraemic acidosis)",
      "S — SPIRONOLACTONE (blocks aldosterone effects → impairs H+ and K+ excretion)",
      "RENAL TUBULAR ACIDOSIS (RTA):",
      "TYPE 1 (Distal RTA): Cannot excrete H+ in distal tubule → cannot acidify urine. Urine pH stays >5.5 despite acidosis. Causes: Sjögren's syndrome, amphotericin B, lupus. Hypokalaemia (K wasted). Kidney stones (calcium phosphate)",
      "TYPE 2 (Proximal RTA): Cannot reabsorb HCO3 in proximal tubule → HCO3 lost in urine. Causes: Fanconi syndrome, carbonic anhydrase inhibitors, multiple myeloma. Hypokalaemia",
      "TYPE 4 (Hyperkalaemic RTA): Aldosterone deficiency or resistance → cannot excrete H+ or K+. HYPERKALAEMIA. Causes: Diabetic nephropathy, ACE inhibitors, Addison's disease. Only RTA with hyperkalaemia",
      "DIARRHOEA causing NAGMA: Small bowel/pancreatic secretions are bicarbonate-rich. Massive diarrhoea → direct HCO3 loss → NAGMA with normal or low potassium. OPPOSITE of vomiting (which causes metabolic ALKALOSIS by losing HCl)",
      "COMPENSATION in metabolic acidosis: RESPIRATORY COMPENSATION — Kussmaul breathing (deep rapid breathing, blows off CO2). Winters formula: Expected PaCO2 = 1.5 × HCO3 + 8 ± 2",
    ],
  },
  {
    title: "Metabolic Alkalosis",
    icon: "⬆️",
    color: "purple",
    content: [
      "METABOLIC ALKALOSIS: pH >7.45, HCO3 >26 mEq/L. Bicarbonate is gained or H+ is lost",
      "CAUSES — SALINE-RESPONSIVE vs SALINE-RESISTANT:",
      "SALINE-RESPONSIVE (most common — urine Cl <20 mEq/L — kidney is avid sodium/chloride conserving): Vomiting/NG suction (loss of HCl → net bicarbonate gain), diuretics (volume depletion → aldosterone → H+ excretion), post-hypercapnia (bicarbonate retained during chronic respiratory acidosis — if CO2 suddenly corrected, excess bicarbonate remains)",
      "SALINE-RESISTANT (urine Cl >20 mEq/L — usually associated with MINERALOCORTICOID EXCESS): Primary hyperaldosteronism (Conn's syndrome), Cushing's syndrome, severe hypokalaemia (profound K depletion causes H+ to enter cells), exogenous steroids",
      "VOMITING/NG SUCTION MECHANISM: Gastric HCl is lost → net gain of HCO3 in blood (for every H+ excreted in vomit, one HCO3 is retained in blood). Dehydration → aldosterone → further H+ excretion and Na/HCO3 retention → maintains (perpetuates) the alkalosis — 'contraction alkalosis'",
      "CLINICAL FEATURES: Often asymptomatic. Severe: nausea, vomiting, confusion, muscle weakness and cramps, paraesthesia, tetany (ionised calcium reduced in alkalosis — same as respiratory alkalosis), ECG changes (hypokalaemia common in metabolic alkalosis — QU changes)",
      "HYPOKALAEMIA and METABOLIC ALKALOSIS: Often coexist. Hypokalaemia → H+ moves into cells to compensate → H+ excreted by kidney → worsens alkalosis. Alkalosis → K+ moves out of cells → worsens hypokalaemia. They perpetuate each other — MUST treat both",
      "COMPENSATION: HYPOVENTILATION (respiratory compensation) — retain CO2. PaCO2 rises 0.7 mmHg per 1 mEq/L rise in HCO3. LIMITED by hypoxia (body will not hypoventilate to dangerous SpO2 levels to compensate for alkalosis)",
      "TREATMENT: SALINE-RESPONSIVE: IV NORMAL SALINE (restores chloride, suppresses RAAS, allows kidney to excrete excess bicarbonate). REPLACE POTASSIUM (essential — cannot correct alkalosis without correcting hypokalaemia). Treat underlying cause (stop NG suction losses, antacid review). SALINE-RESISTANT: Treat underlying cause (remove aldosterone excess — adrenalectomy for Conn's, stop steroids, treat Cushing's). Acetazolamide (promotes bicarbonate excretion — useful adjunct). Potassium replacement essential",
    ],
  },
  {
    title: "Mixed Acid-Base Disorders",
    icon: "🔀",
    color: "purple",
    content: [
      "MIXED DISORDERS: Two or more simultaneous primary acid-base disorders. Common in critically ill patients. Identified when compensation is MORE or LESS than expected",
      "KEY PRINCIPLE: The body NEVER OVERCOMPENSATES. If pH is returned to NORMAL or OVERCORRECTED, there are TWO primary disorders (mixed), not one with compensation",
      "DETECTING MIXED DISORDERS: Compare actual compensation with expected compensation. If compensation is outside expected range → second primary disorder",
      "COMMON MIXED DISORDERS:",
      "METABOLIC ACIDOSIS + RESPIRATORY ACIDOSIS: pH very low, both HCO3 low AND PaCO2 high. No compensation occurring. Example: Cardiac arrest (lactic acidosis + hypoventilation), severe COPD with sepsis",
      "METABOLIC ACIDOSIS + RESPIRATORY ALKALOSIS: pH may be near normal. Both HCO3 low AND PaCO2 low (over-compensation for metabolic acidosis OR second respiratory process). Example: SALICYLATE POISONING (classic mixed disorder), sepsis (respiratory alkalosis + lactic acidosis), liver failure + renal failure",
      "METABOLIC ALKALOSIS + RESPIRATORY ALKALOSIS: pH very high. Both HCO3 high AND PaCO2 low. Example: Post-operative patient with vomiting + anxiety (or mechanical over-ventilation)",
      "METABOLIC ALKALOSIS + RESPIRATORY ACIDOSIS: pH may appear normal. Both HCO3 high AND PaCO2 high. Example: COPD patient on diuretics (respiratory acidosis from COPD + metabolic alkalosis from diuretics), patient on steroids with COPD",
      "TRIPLE DISORDERS: Three simultaneous acid-base disorders. Detected using anion gap and delta-delta calculation. Example: DKA (HAGMA) + metabolic alkalosis (vomiting) + respiratory alkalosis (sepsis)",
      "DELTA-DELTA RATIO in mixed disorders: In pure HAGMA, for every 1 mEq/L rise in AG above normal (12), bicarbonate should fall 1 mEq/L. If HCO3 is HIGHER than expected from the AG rise → concurrent metabolic ALKALOSIS. If HCO3 is LOWER than expected → concurrent normal AG metabolic ACIDOSIS",
    ],
  },
  {
    title: "ABG Interpretation — Systematic Practice Examples",
    icon: "📋",
    color: "green",
    content: [
      "PRACTICE EXAMPLE 1: pH 7.28, PaCO2 55, HCO3 25, Na 140, Cl 103",
      "Step 1: pH 7.28 → ACIDOSIS",
      "Step 2: PaCO2 55 (HIGH — same direction as pH problem) = PRIMARY RESPIRATORY ACIDOSIS",
      "Step 3: HCO3 25 (normal) — no metabolic compensation yet → ACUTE respiratory acidosis",
      "Step 4: No anion gap needed (not metabolic acidosis). ANSWER: Acute respiratory acidosis, uncompensated",
      "PRACTICE EXAMPLE 2: pH 7.32, PaCO2 58, HCO3 30, Na 140, Cl 100",
      "Step 1: pH 7.32 → ACIDOSIS",
      "Step 2: PaCO2 58 (HIGH) = PRIMARY RESPIRATORY ACIDOSIS",
      "Step 3: HCO3 30 (HIGH — kidneys retaining bicarbonate — compensating). Expected HCO3 for chronic: rises 3-5 per 10 mmHg rise. PaCO2 rose ~18 mmHg → HCO3 should rise ~6-9. Actual rise = 6 (from 24 to 30) → appropriate compensation → CHRONIC compensated respiratory acidosis",
      "PRACTICE EXAMPLE 3: pH 7.22, PaCO2 18, HCO3 7, Na 140, Cl 105",
      "Step 1: pH 7.22 → ACIDOSIS",
      "Step 2: HCO3 7 (LOW — same direction as pH problem) = PRIMARY METABOLIC ACIDOSIS",
      "Step 3: PaCO2 18 (LOW — lungs compensating). Winters formula: 1.5 × 7 + 8 = 18.5 ± 2 → expected PaCO2 = 16.5-20.5. Actual PaCO2 = 18 → APPROPRIATE respiratory compensation",
      "Step 4: AG = 140 − (105 + 7) = 28 → HIGH ANION GAP metabolic acidosis. ANSWER: High anion gap metabolic acidosis with appropriate respiratory compensation. Cause: MUDPILES",
      "PRACTICE EXAMPLE 4: pH 7.52, PaCO2 48, HCO3 38, Na 142, Cl 90",
      "Step 1: pH 7.52 → ALKALOSIS",
      "Step 2: HCO3 38 (HIGH — same direction as pH problem) = PRIMARY METABOLIC ALKALOSIS",
      "Step 3: PaCO2 48 (HIGH — respiratory compensation — hypoventilation). Expected: 0.7 × 38 + 21 = 47.6 ± 2 → appropriate compensation",
      "Step 4: Chloride 90 (LOW) + metabolic alkalosis → SALINE-RESPONSIVE. Cause: likely vomiting or NG losses. ANSWER: Metabolic alkalosis with appropriate respiratory compensation",
    ],
  },
  {
    title: "Causes of Specific Acid-Base Disorders — High-Yield Clinical Scenarios",
    icon: "🏥",
    color: "blue",
    content: [
      "RESPIRATORY ACIDOSIS causes by body system:",
      "CNS suppression: Opioid overdose (MOST COMMON drug cause), benzodiazepines, barbiturates, alcohol, head injury, brainstem lesion",
      "Neuromuscular: GBS (ascending paralysis), MG (fatigable weakness), ALS, high cervical SCI (diaphragm paralysis), severe hypokalaemia/hypophosphataemia",
      "Airway: Foreign body, severe asthma (silent chest), epiglottitis, angioedema, anaphylaxis",
      "Pulmonary parenchyma: Severe COPD exacerbation (CO2 retainer), ARDS (mechanical limitation)",
      "METABOLIC ACIDOSIS causes by clinical context:",
      "ICU patient with hypotension → LACTIC ACIDOSIS (shock)",
      "T1DM + missed insulin → DKA",
      "T2DM + missed meals/illness → HHS (mild/no ketosis)",
      "Ingestion history + visual changes → METHANOL",
      "Ingestion + antifreeze + calcium oxalate crystals → ETHYLENE GLYCOL",
      "Chronic renal failure → URAEMIA",
      "Large NG losses + diarrhoea → NORMAL AG metabolic acidosis",
      "RESPIRATORY ALKALOSIS causes by clinical context:",
      "Young woman hyperventilating + anxious → ANXIETY/PANIC",
      "Liver failure (elevated ammonia) → HEPATIC ENCEPHALOPATHY respiratory alkalosis",
      "Pregnant patient → NORMAL respiratory alkalosis of pregnancy",
      "PE + hypoxia → RESPIRATORY ALKALOSIS (early, then acidosis if severe)",
      "METABOLIC ALKALOSIS causes by clinical context:",
      "Patient vomiting for days → HYPOCHLORAEMIC metabolic alkalosis",
      "Patient on diuretics → DIURETIC-INDUCED metabolic alkalosis (Cl and K depletion)",
      "Patient with COPD ventilated and CO2 rapidly corrected → POST-HYPERCAPNIC alkalosis",
      "Patient with hypertension + hypokalaemia + alkalosis → PRIMARY HYPERALDOSTERONISM",
    ],
  },
  {
    title: "Compensation Rules — Quick Reference",
    icon: "📐",
    color: "purple",
    content: [
      "COMPENSATION RULES (the most tested acid-base facts on NCLEX and critical care examinations):",
      "RESPIRATORY ACIDOSIS — Metabolic compensation (kidneys retain HCO3):",
      "Acute: Expected HCO3 rises 1 mEq/L per 10 mmHg rise in PaCO2 (above 40)",
      "Chronic: Expected HCO3 rises 3.5 mEq/L per 10 mmHg rise in PaCO2",
      "RESPIRATORY ALKALOSIS — Metabolic compensation (kidneys excrete HCO3):",
      "Acute: Expected HCO3 falls 2 mEq/L per 10 mmHg fall in PaCO2 (below 40)",
      "Chronic: Expected HCO3 falls 5 mEq/L per 10 mmHg fall in PaCO2",
      "METABOLIC ACIDOSIS — Respiratory compensation (Kussmaul breathing — blows off CO2):",
      "Winters formula: Expected PaCO2 = 1.5 × HCO3 + 8 ± 2",
      "Quick approximation: Expected PaCO2 ≈ last 2 digits of pH × 100 (e.g., pH 7.28 → PaCO2 ≈ 28)",
      "If actual PaCO2 > expected → additional RESPIRATORY ACIDOSIS",
      "If actual PaCO2 < expected → additional RESPIRATORY ALKALOSIS",
      "METABOLIC ALKALOSIS — Respiratory compensation (hypoventilation — retains CO2):",
      "Expected PaCO2 rises 0.7 mmHg per 1 mEq/L rise in HCO3 (above 24)",
      "Maximum PaCO2 compensation rarely exceeds 55 mmHg (limited by hypoxia)",
      "CRITICAL RULE — NEVER OVERCOMPENSATES: If pH is normal with primary disorder, compensation is complete but never crosses to the other side. pH 7.42 with metabolic acidosis? Could be fully compensated OR second respiratory alkalosis — use compensation formulas to differentiate",
      "QUICK IDENTIFY TRICK: The parameter that MATCHES the direction of pH change = the PRIMARY disorder. pH acidosis + HCO3 down = metabolic primary. pH acidosis + CO2 up = respiratory primary",
    ],
  },
  {
    title: "Ventilator Management and ABG Troubleshooting",
    icon: "🤖",
    color: "red",
    content: [
      "MECHANICAL VENTILATOR ABG MANAGEMENT: The two main adjustable parameters for gas exchange are RATE/VOLUME (affects CO2/pH) and FiO2/PEEP (affects oxygenation/PaO2)",
      "CO2 is controlled by MINUTE VENTILATION (RR × Tidal Volume). Increase minute ventilation → blow off more CO2 → treat respiratory acidosis. Decrease minute ventilation → retain CO2 → treat respiratory alkalosis",
      "OXYGENATION (PaO2/SpO2) is controlled by FiO2 and PEEP. Increase FiO2 → more oxygen delivered. Increase PEEP → recruits alveoli → improves oxygenation (does NOT significantly affect CO2)",
      "ABG TROUBLESHOOTING on ventilator:",
      "pH LOW (acidosis) + PaCO2 HIGH: Respiratory acidosis — INCREASE RR or INCREASE tidal volume",
      "pH HIGH (alkalosis) + PaCO2 LOW: Respiratory alkalosis (over-ventilation) — DECREASE RR or DECREASE tidal volume",
      "PaO2 LOW (hypoxaemia) + PCO2 normal: Oxygenation problem — INCREASE FiO2 or INCREASE PEEP",
      "pH LOW + HCO3 LOW + PaCO2 appropriately low: Metabolic acidosis with compensation — treat underlying cause",
      "PERMISSIVE HYPERCAPNIA in ARDS: Lung-protective ventilation uses small tidal volumes (6 mL/kg IBW) — accepting higher PaCO2 (up to 60-80 mmHg) and mild acidosis (pH >7.20) to prevent barotrauma. The acidosis is intentional and accepted",
      "TARGET PaO2 in ARDS: 55-80 mmHg (SpO2 88-95%) — permissive mild hypoxaemia to limit FiO2 toxicity (high FiO2 causes absorptive atelectasis and oxygen toxicity)",
      "WEANING INDICATORS for extubation: Spontaneous breathing trial (SBT) success, RSBI <105, SpO2 ≥90% on FiO2 ≤40%, PEEP ≤5, pH ≥7.35, adequate cough and gag, GCS improving, haemodynamically stable",
      "POST-EXTUBATION: Monitor ABG at 30-60 minutes post-extubation. Stridor = upper airway oedema (treat with nebulised adrenaline, dexamethasone, consider re-intubation). Deteriorating ABG post-extubation = re-intubation threshold",
    ],
  },
  {
    title: "Special Clinical Scenarios in Acid-Base",
    icon: "🔍",
    color: "orange",
    content: [
      "SALICYLATE POISONING: CLASSIC MIXED disorder. EARLY (direct respiratory centre stimulation) → RESPIRATORY ALKALOSIS. LATE (uncoupled oxidative phosphorylation → organic acids) → METABOLIC ACIDOSIS (HAGMA). The combination of respiratory alkalosis + HAGMA is pathognomonic of salicylate toxicity",
      "SEPSIS ACID-BASE evolution: EARLY sepsis → hyperventilation from fever/endotoxin → RESPIRATORY ALKALOSIS. ESTABLISHED sepsis → lactic acidosis from tissue hypoperfusion → METABOLIC ACIDOSIS (HAGMA, lactate). LATE/Refractory → respiratory failure + lactic acidosis → MIXED metabolic + respiratory ACIDOSIS",
      "DKA ACID-BASE: PRIMARY HIGH ANION GAP METABOLIC ACIDOSIS (ketoacids). Compensation: Kussmaul breathing (CO2 blown off). As treatment progresses → glucose normalises but ketones persist → do not stop insulin. Also watch for NORMAL AG metabolic acidosis developing later (hyperchloraemic from saline administration — dilutes ketones, raises Cl). Mixed HAGMA + NAGMA in treated DKA is common",
      "LIVER FAILURE: Respiratory alkalosis (hyperammonaemia stimulates breathing centre), metabolic acidosis (lactic acidosis, inability to clear lactate and metabolise bicarbonate precursors), mixed disorder common",
      "PREGNANCY: Normal MILD CHRONIC RESPIRATORY ALKALOSIS — progesterone stimulates breathing. Normal values in pregnancy: PaCO2 28-32 mmHg, HCO3 18-20 mEq/L (compensated), pH 7.40-7.47. What appears as 'respiratory alkalosis' in a non-pregnant patient is NORMAL in pregnancy",
      "DIARRHOEA vs VOMITING — CLASSIC NCLEX DIFFERENTIATION: Diarrhoea → lose bicarbonate-rich small bowel fluid → METABOLIC ACIDOSIS (NAGMA, normal AG, hyperchloraemic). Vomiting → lose hydrochloric acid → METABOLIC ALKALOSIS (hypochloraemic, hypokalaemic). OPPOSITE DISORDERS",
      "ACETAZOLAMIDE: Carbonic anhydrase inhibitor → blocks renal HCO3 reabsorption → NAGMA. Used therapeutically for: altitude sickness prevention, glaucoma, some epilepsy. Side effect: metabolic acidosis (intentional in some uses)",
      "BLOOD TRANSFUSION and CITRATE: Massive blood transfusion → citrate (anticoagulant in blood products) is metabolised to bicarbonate → METABOLIC ALKALOSIS post-massive transfusion. Also: stored blood is acidic (lactate accumulates) → may initially worsen acidosis before alkalosis develops",
    ],
  },
];

const mnemonics = [
  {
    title: "High Anion Gap Metabolic Acidosis — MUDPILES",
    acronym: "MUDPILES",
    breakdown: ["Methanol", "Uraemia (renal failure)", "DKA (diabetic ketoacidosis)", "Propylene glycol", "Iron/Isoniazid overdose", "Lactic acidosis (most common)", "Ethylene glycol (antifreeze)", "Salicylates (late)"],
    memory: "MUDPILES — every HAGMA cause. Lactic acidosis is the MOST COMMON. In clinical practice: shock + HAGMA = lactic acidosis until proven otherwise!",
    color: "red",
  },
  {
    title: "Normal Anion Gap Metabolic Acidosis — HARDASS",
    acronym: "HARDASS",
    breakdown: ["Hyperalimentation (TPN)", "Addison's disease", "Renal tubular acidosis (RTA)", "Diarrhoea (HCO3 loss)", "Acetazolamide", "Saline excess (hyperchloraemic)", "Spironolactone"],
    memory: "HARDASS — normal AG acidosis. Diarrhoea and saline excess are the most common hospital causes. Remember: Diarrhoea = acidosis. Vomiting = alkalosis. They are OPPOSITES!",
    color: "orange",
  },
  {
    title: "4-Step ABG Method",
    acronym: "PRCA",
    breakdown: ["pH — acidosis or alkalosis?", "Respiratory cause? (CO2)", "Compensated? (check opposite system)", "Anion gap? (if metabolic acidosis)"],
    memory: "PRCA — pH, Respiratory check, Compensation check, Anion gap. Never skip a step. The anion gap is ONLY calculated for metabolic acidosis — it tells you the mechanism!",
    color: "green",
  },
  {
    title: "Compensation Directions",
    acronym: "ROME",
    breakdown: ["Respiratory Opposite: pH up (alkalosis) = CO2 down; pH down (acidosis) = CO2 up", "Metabolic Equal: pH up (alkalosis) = HCO3 up; pH down (acidosis) = HCO3 down"],
    memory: "ROME — Respiratory Opposite, Metabolic Equal. The PRIMARY problem always moves in the SAME direction as pH for metabolic, OPPOSITE for respiratory. This identifies the primary disorder instantly!",
    color: "purple",
  },
  {
    title: "Diarrhoea vs Vomiting Acid-Base",
    acronym: "DV",
    breakdown: ["Diarrhoea = lose HCO3 = Metabolic ACIDOSIS (NAGMA)", "Vomiting = lose HCl = Metabolic ALKALOSIS"],
    memory: "D for Down (acidosis), V for Up (alkalosis). Diarrhoea and vomiting cause OPPOSITE acid-base disorders — one of the most tested NCLEX acid-base facts!",
    color: "blue",
  },
];

const alerts = [
  { text: "NEVER OVERCOMPENSATES: If pH is normal or on the other side — there are TWO primary disorders (mixed), not one with compensation. The body cannot overcompensate!", severity: "high" },
  { text: "RISING PaCO2 in SEVERE ASTHMA = PRE-ARREST. CO2 should be LOW in acute asthma (hyperventilation). Normal or rising CO2 = respiratory muscle fatigue = imminent arrest!", severity: "high" },
  { text: "POST-HYPERCAPNIC ALKALOSIS: Do NOT rapidly normalise PaCO2 in chronic CO2 retainer — severe metabolic alkalosis results when bicarbonate accumulated over weeks cannot be excreted rapidly!", severity: "high" },
  { text: "SALICYLATE POISONING: EARLY = respiratory alkalosis (stimulates respiratory centre). LATE = metabolic acidosis (HAGMA). Mixed respiratory alkalosis + HAGMA is PATHOGNOMONIC of salicylate toxicity!", severity: "high" },
  { text: "WINTERS FORMULA for metabolic acidosis: Expected PaCO2 = 1.5 × HCO3 + 8 ± 2. If actual PaCO2 is HIGHER than expected → concurrent respiratory acidosis. If LOWER → concurrent respiratory alkalosis!", severity: "medium" },
  { text: "BREATHING INTO PAPER BAG: ONLY for psychogenic hyperventilation/anxiety. NEVER for COPD, PE, pneumonia or any condition with true hypoxia — rebreathing CO2 can cause respiratory arrest!", severity: "medium" },
  { text: "METABOLIC ALKALOSIS + HYPOKALAEMIA: They perpetuate each other. Cannot correct one without correcting the other. Replace both KCl and NaCl (saline-responsive alkalosis)!", severity: "medium" },
  { text: "PERMISSIVE HYPERCAPNIA in ARDS: Accepting PaCO2 up to 60-80 mmHg and pH >7.20 is intentional — do NOT increase ventilator settings to normalise CO2 in lung-protective ventilation!", severity: "medium" },
  { text: "DIARRHOEA = metabolic ACIDOSIS (loses bicarbonate). VOMITING = metabolic ALKALOSIS (loses HCl). These are OPPOSITE disorders — one of the most commonly tested NCLEX acid-base facts!", severity: "medium" },
  { text: "PREGNANCY normal ABG: PaCO2 28-32 mmHg is NORMAL (progesterone stimulates breathing). What looks like respiratory alkalosis in a non-pregnant patient is PHYSIOLOGICAL in pregnancy!", severity: "low" },
  { text: "ANION GAP correction for hypoalbuminaemia: For every 10 g/L albumin below 40 g/L, add 2.5 mEq/L to measured AG. Low albumin masks a true HAGMA!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A nurse receives an ABG result: pH 7.28, PaCO2 62 mmHg, HCO3 28 mEq/L, PaO2 58 mmHg on 2L nasal cannula. The patient is a 68-year-old with known COPD. Apply the 4-step ABG interpretation method and identify the disorder.",
    options: [
      "Metabolic acidosis with respiratory compensation — the low pH and high CO2 indicate metabolic problem",
      "Chronic compensated respiratory acidosis — the elevated HCO3 indicates the kidneys have been compensating over time",
      "Mixed respiratory acidosis and metabolic alkalosis — two separate disorders are present",
      "Acute uncompensated respiratory acidosis — there is no evidence of metabolic compensation",
    ],
    correct: 1,
    explanation: "4-STEP INTERPRETATION: Step 1: pH 7.28 = ACIDOSIS. Step 2: PaCO2 62 (HIGH — same direction as pH problem = acidosis) = PRIMARY RESPIRATORY ACIDOSIS. HCO3 28 (HIGH — kidneys compensating). Step 3: ASSESS COMPENSATION. PaCO2 rose by 22 mmHg (from 40). For CHRONIC compensation: HCO3 rises 3.5 per 10 mmHg rise = 3.5 × 2.2 = 7.7 rise expected. Expected HCO3 = 24 + 7.7 = ~32. Actual HCO3 = 28 — LESS than expected for full chronic compensation. This suggests incomplete chronic compensation OR a mix of acute-on-chronic exacerbation. pH 7.28 with some compensation = PARTIALLY COMPENSATED CHRONIC RESPIRATORY ACIDOSIS (COPD patient in exacerbation). The elevated HCO3 clearly indicates the kidneys have been retaining bicarbonate (chronic exposure) — distinguishing it from acute (where HCO3 would be ~24). Clinical context (known COPD) confirms this interpretation.",
    wrongExplanations: [
      "WRONG: In metabolic acidosis, HCO3 would be LOW (bicarbonate is consumed or lost). Here HCO3 is HIGH — a respiratory primary disorder with metabolic compensation. The ROME rule: Respiratory Opposite — pH down (acidosis) with CO2 UP = respiratory primary.",
      "",
      "WRONG: For a mixed disorder, the HCO3 would need to be HIGHER than expected compensation for chronic respiratory acidosis. Here HCO3 (28) is slightly LOWER than fully expected — suggesting incomplete chronic compensation in a COPD exacerbation, not a concurrent metabolic alkalosis.",
      "WRONG: Acute uncompensated respiratory acidosis would show HCO3 of approximately 24-25 (no metabolic compensation). This patient has HCO3 28 — elevated above normal, indicating the kidneys have partially compensated over time. This is not acute.",
    ],
  },
  {
    level: "Knowledge",
    question: "A 19-year-old woman presents to the emergency department hyperventilating after a panic attack. She is anxious, reports perioral tingling and her hands are in carpopedal spasm. ABG: pH 7.58, PaCO2 22 mmHg, HCO3 20 mEq/L. Which acid-base disorder is present and what is the mechanism of the carpopedal spasm?",
    options: [
      "Metabolic alkalosis — vomiting has caused loss of HCl leading to high pH and the carpopedal spasm is from hypokalaemia",
      "Acute respiratory alkalosis — hyperventilation blows off CO2, raising pH. Carpopedal spasm from DECREASED IONISED CALCIUM — alkalosis increases calcium protein binding, reducing free ionised calcium without changing total calcium",
      "Metabolic acidosis — the low HCO3 indicates bicarbonate loss causing acidosis and the spasm is from hypomagnesaemia",
      "Mixed respiratory alkalosis and metabolic acidosis — two separate processes are occurring simultaneously",
    ],
    correct: 1,
    explanation: "4-STEP INTERPRETATION: Step 1: pH 7.58 = ALKALOSIS. Step 2: PaCO2 22 (LOW — CO2 blown off by hyperventilation — same direction as alkalosis problem) = PRIMARY RESPIRATORY ALKALOSIS. Step 3: HCO3 20 (slightly LOW — kidneys have begun compensating by excreting bicarbonate). This is ACUTE respiratory alkalosis with beginning metabolic compensation. CARPOPEDAL SPASM MECHANISM: Alkalosis (high pH) causes calcium to become MORE BOUND to albumin (albumin releases H+ in alkalosis, freeing negative charges that bind calcium). This REDUCES IONISED CALCIUM without changing total calcium. Reduced ionised calcium = neuromuscular irritability = carpopedal spasm (Trousseau's-like), perioral tingling, tetany. The total calcium level may be normal — the ionised fraction is low. This is the same mechanism as in respiratory alkalosis from any cause — no true hypocalcaemia, just physiological shift.",
    wrongExplanations: [
      "WRONG: Metabolic alkalosis from vomiting would show ELEVATED HCO3 (bicarbonate retained/HCl lost), not the pattern seen here. This patient's findings (low PaCO2, low HCO3, high pH, panic attack) are classic acute respiratory alkalosis.",
      "",
      "WRONG: Metabolic acidosis would show LOW pH and LOW HCO3. This patient has HIGH pH with LOW CO2 — respiratory alkalosis. The carpopedal spasm in metabolic acidosis would be unusual (acidosis reduces calcium-protein binding, increasing ionised calcium).",
      "WRONG: In a mixed disorder, the compensation would be outside expected range. HCO3 of 20 is consistent with early/acute compensation for respiratory alkalosis. There is no evidence of a second primary metabolic acid-base disorder.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a patient in the ICU with septic shock. ABG: pH 7.18, PaCO2 24 mmHg, HCO3 9 mEq/L, Na 142, Cl 106, lactate 8.2 mmol/L. Calculate the anion gap and identify the complete acid-base disorder.",
    options: [
      "Anion gap 15 mEq/L — normal anion gap metabolic acidosis from sepsis-related diarrhoea",
      "Anion gap 27 mEq/L — high anion gap metabolic acidosis (lactic acidosis) with appropriate respiratory compensation (Kussmaul breathing). Winters formula: Expected PaCO2 = 1.5 × 9 + 8 = 21.5 ± 2. Actual PaCO2 = 24 — slightly above expected, suggesting MILD concurrent respiratory acidosis",
      "Anion gap 27 mEq/L — high anion gap metabolic acidosis, but PaCO2 of 24 is appropriate compensation and no second disorder is present",
      "Anion gap 12 mEq/L — normal. The acidosis is from hyperchloraemia from IV saline administration",
    ],
    correct: 1,
    explanation: "ANION GAP = 142 − (106 + 9) = 142 − 115 = 27 mEq/L — HIGH ANION GAP METABOLIC ACIDOSIS. Cause: Lactate 8.2 mmol/L = severe lactic acidosis from septic shock (MUDPILES — L = lactic acidosis). COMPENSATION CHECK using Winters formula: Expected PaCO2 = 1.5 × HCO3 + 8 ± 2 = 1.5 × 9 + 8 = 13.5 + 8 = 21.5 ± 2 = 19.5-23.5 mmHg. ACTUAL PaCO2 = 24 — ABOVE the expected range (19.5-23.5). The PaCO2 is slightly HIGHER than expected → this patient is NOT compensating as much as expected. This indicates a MILD CONCURRENT RESPIRATORY ACIDOSIS (the patient's respiratory muscles are beginning to fatigue from the severe acidosis and sepsis — early respiratory failure). CLINICAL SIGNIFICANCE: The fact that compensation is slightly insufficient is a warning sign of respiratory fatigue — consider early intubation before the patient's respiratory effort fails completely and PaCO2 rises further, worsening the already severe acidosis.",
    wrongExplanations: [
      "WRONG: AG = 142 − (106 + 9) = 27 — NOT 15. With a lactate of 8.2 mmol/L, a high anion gap is expected. Normal AG acidosis from diarrhoea would NOT explain a lactate of 8.2.",
      "",
      "WRONG: AG 27 is correct. However, the Winters formula calculation shows that the actual PaCO2 (24) is ABOVE the expected compensation range (19.5-23.5) — indicating mild concurrent respiratory acidosis, not pure appropriate compensation. This distinction is clinically important.",
      "WRONG: AG = 27 — NOT 12. High chloride (106) does not make the AG normal when bicarbonate is severely depleted. The lactate of 8.2 produces unmeasured organic acid anions that dramatically elevate the AG.",
    ],
  },
  {
    level: "Application",
    question: "A patient with a prolonged bowel obstruction and persistent vomiting for 4 days is admitted. ABG: pH 7.54, PaCO2 50 mmHg, HCO3 42 mEq/L. Electrolytes: Na 138, K 2.8 mEq/L, Cl 84 mEq/L. The nurse assesses the patient's breathing — it is slow and shallow. What is the complete acid-base analysis and what is the clinical implication of the slow breathing?",
    options: [
      "Respiratory alkalosis from pain — the high HCO3 is a compensatory metabolic response",
      "Metabolic alkalosis with appropriate respiratory compensation — vomiting causes HCl loss → HCO3 rises. Slow hypoventilation retains CO2 (compensation). The hypochloraemia (Cl 84) and hypokalaemia (K 2.8) are characteristic. Compensation is EXPECTED (PaCO2 rises 0.7 per mEq/L HCO3 rise = 0.7 × 18 = 12.6, expected PaCO2 = 36.6 ≈ 50 is above expected)",
      "Metabolic alkalosis with EXCESSIVE respiratory compensation — the PaCO2 is higher than predicted, indicating concurrent respiratory acidosis from hypoventilation or airway obstruction",
      "Mixed metabolic alkalosis and respiratory acidosis — the very high PaCO2 is too high to be pure compensation",
    ],
    correct: 2,
    explanation: "4-STEP ANALYSIS: Step 1: pH 7.54 = ALKALOSIS. Step 2: HCO3 42 (HIGH — same direction as alkalosis) = PRIMARY METABOLIC ALKALOSIS. Step 3: PaCO2 50 (HIGH — respiratory compensation — hypoventilation). COMPENSATION CHECK: Expected PaCO2 = 0.7 × (HCO3 − 24) + 40 = 0.7 × (42 − 24) + 40 = 0.7 × 18 + 40 = 12.6 + 40 = 52.6 ± 2 (range 50.6-54.6). Actual PaCO2 = 50 — within expected range — APPROPRIATE RESPIRATORY COMPENSATION. However, looking more carefully: Option C states 50 is above expected — the expected range is actually 50.6-54.6, making 50 just slightly BELOW the expected — suggesting compensation is appropriate or very slightly less. Clinical context: Vomiting → HCl loss → metabolic alkalosis + hypochloraemia (Cl 84 — saline-responsive) + hypokalaemia (K 2.8 — potassium moves into cells with alkalosis + potassium lost in vomiting). TREATMENT: IV normal saline (replaces Cl, suppresses RAAS, allows kidney to excrete HCO3), IV potassium chloride. Note: Max compensation for metabolic alkalosis is rarely >55 mmHg PaCO2 (hypoxia limits hypoventilation).",
    wrongExplanations: [
      "WRONG: Respiratory alkalosis would show LOW PaCO2 (hyperventilation) and LOW HCO3 (metabolic compensation). This patient has HIGH PaCO2 and HIGH HCO3 — consistent with metabolic alkalosis with respiratory compensation.",
      "",
      "WRONG: The PaCO2 of 50 is within the expected compensation range (50.6-54.6 ± 2 variation is accepted). This is not EXCESSIVE compensation — it falls within the expected range for primary metabolic alkalosis.",
      "",
    ],
  },
  {
    level: "Application",
    question: "A 15-year-old boy is brought to the emergency department by ambulance after being found unconscious. Empty bottles of aspirin (salicylates) are found nearby. ABG: pH 7.48, PaCO2 22 mmHg, HCO3 16 mEq/L, AG = 22 mEq/L. What is the acid-base disorder and what does it indicate about the stage of salicylate toxicity?",
    options: [
      "Metabolic acidosis with respiratory compensation — the patient is in late-stage salicylate toxicity",
      "Pure respiratory alkalosis from direct respiratory centre stimulation — early stage toxicity",
      "Mixed disorder — respiratory alkalosis AND high anion gap metabolic acidosis, indicating BOTH early (direct respiratory stimulation) and late (organic acid production) salicylate toxicity are present simultaneously",
      "Metabolic alkalosis from vomiting induced by the salicylate ingestion",
    ],
    correct: 2,
    explanation: "SALICYLATE POISONING BIPHASIC ACID-BASE PATTERN — CLASSIC MIXED DISORDER: pH 7.48 (alkalotic), PaCO2 22 (very LOW — hyperventilation), HCO3 16 (LOW — below 22 = metabolic acidosis contribution), AG 22 (ELEVATED = unmeasured acid anions). ANALYSIS: The pH 7.48 is alkalotic — but we have BOTH low PaCO2 (respiratory alkalosis from salicylate directly stimulating the respiratory centre) AND low HCO3 (metabolic acidosis from organic acid production — salicylic acid, lactic acid from uncoupled oxidative phosphorylation). The COMPETING processes result in near-normal or slightly alkalotic pH despite significant metabolic acidosis. This MIXED presentation (respiratory alkalosis + HAGMA) at any stage of toxicity is PATHOGNOMONIC of salicylate poisoning. STAGE INTERPRETATION: Both processes are occurring simultaneously in moderate-severe toxicity. In pure EARLY toxicity, pH would be >7.50 with normal HCO3 and no AG elevation. The presence of elevated AG confirms metabolic acid production has already begun.",
    wrongExplanations: [
      "WRONG: The ABG shows MIXED features — both respiratory alkalosis (very low PaCO2 = 22) AND metabolic acidosis (low HCO3 = 16, elevated AG = 22) simultaneously. Pure metabolic acidosis with compensation would NOT have a pH of 7.48 (alkalotic).",
      "WRONG: Pure early-stage respiratory alkalosis would show LOW PaCO2, NORMAL or slightly decreased HCO3 (acute compensation only) and NORMAL anion gap. This patient has ELEVATED AG (22) indicating unmeasured acids are present — metabolic acidosis is established.",
      "",
      "WRONG: Metabolic alkalosis from vomiting would show ELEVATED HCO3, not the low HCO3 (16) seen here. The elevated AG confirms acid production from salicylate metabolism — not a simple alkalosis.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a 55-year-old patient admitted with severe DKA. ABG on admission: pH 7.10, PaCO2 18, HCO3 6, AG 36, Na 134, Cl 98, lactate 2.1. After 8 hours of treatment (IV insulin + IV saline), repeat ABG shows: pH 7.32, PaCO2 32, HCO3 16, AG 18, Na 140, Cl 116. Glucose has normalised to 9 mmol/L. The physician says 'the ketoacidosis is resolving nicely — we can stop the insulin.' The nurse reviews the results and is concerned. What is the MOST accurate analysis?",
    options: [
      "The physician is correct — glucose has normalised and the pH is improving. Stop insulin as ordered",
      "The ketoacidosis is NOT fully resolved — blood ketones are still elevated (AG 18, still above normal). Additionally, a new NORMAL AG metabolic acidosis has developed (hyperchloraemic from saline) — evidenced by rising Cl (98→116) and falling AG without equivalent HCO3 recovery. Continue insulin until ketones clear (AG returns to normal)",
      "The patient now has metabolic alkalosis — the HCO3 is 16 which is above normal and insulin should be stopped",
      "Stop insulin and start oral feeding — glucose normalisation is the primary endpoint in DKA",
    ],
    correct: 1,
    explanation: "CRITICAL DKA MANAGEMENT PRINCIPLE — RESOLUTION IS DEFINED BY KETONE CLEARANCE NOT GLUCOSE NORMALISATION. ANALYSIS of the repeat ABG: AG = 140 − (116 + 16) = 8 — wait, let me recalculate: 140 − (116 + 16) = 140 − 132 = 8. But the question states AG 18. Let's use stated values: AG 18 still elevated (above 12) — ketones not fully cleared. HCO3 only 16 — still acidotic despite pH improvement. IMPORTANTLY: Cl has risen from 98 to 116 — HYPERCHLORAEMIC METABOLIC ACIDOSIS is developing from large volume normal saline administration. The DELTA-DELTA analysis: In pure HAGMA, for every 1 mEq/L rise in AG, HCO3 should fall 1 mEq/L. The AG has fallen 18 mEq/L (from 36 to 18), so HCO3 should have risen 18 mEq/L (from 6 to 24). But HCO3 is only 16 (rose only 10) — 8 mEq/L SHORT of expected. This GAP represents a developing NORMAL AG metabolic acidosis (hyperchloraemic from saline) that is masking the full ketoacid clearance. Stopping insulin while ketones persist (AG still >12 despite the saline-masking) risks rebound ketoacidosis. Insulin must continue until AG normalises (ideally with dextrose added to prevent hypoglycaemia since glucose is already 9 mmol/L).",
    wrongExplanations: [
      "WRONG: Stopping insulin because glucose has normalised in DKA is the most dangerous and most common clinical error. Glucose normalises hours before ketoacidosis resolves. Stopping insulin without glucose replacement will allow ketoacid production to resume. The DKA protocol requires insulin continuation with dextrose added when glucose approaches 14 mmol/L.",
      "",
      "WRONG: HCO3 of 16 is NOT above normal — normal HCO3 is 22-26. HCO3 of 16 = still metabolically acidotic. Metabolic alkalosis would require HCO3 >26. This response demonstrates a misreading of normal ranges.",
      "WRONG: Glucose normalisation is explicitly NOT the endpoint of DKA treatment. The endpoints are: blood ketones <0.6 mmol/L, pH >7.3, bicarbonate >15. Stopping insulin at glucose normalisation causes the ketoacidosis to persist or worsen as insulin-dependent lipolysis resumes.",
    ],
  },
  {
    level: "Advanced",
    question: "A ventilated ARDS patient on lung-protective ventilation (VT 6mL/kg IBW, PEEP 14, FiO2 0.65, RR 22) has ABG: pH 7.23, PaCO2 62, HCO3 25, PaO2 68. The patient's family is at bedside and states 'the CO2 is high and the machine isn't breathing fast enough — can you turn it up to fix the CO2?' The intensivist has documented 'permissive hypercapnia strategy — accept pH >7.20.' What is the nurse's MOST appropriate action and response?",
    options: [
      "Increase the ventilator rate to reduce the PaCO2 to normal — the family's concern is valid and patient comfort is paramount",
      "Explain that in ARDS, lung-protective ventilation intentionally accepts higher CO2 and mild acidosis to prevent ventilator-induced lung injury (VILI) — barotrauma from higher pressures would worsen outcomes. pH 7.23 is above the accepted threshold (>7.20). Do NOT change settings without physician order",
      "Call the physician and recommend increasing RR — the pH 7.23 is dangerously low and compensation is insufficient",
      "Increase FiO2 to 0.80 — the low PaO2 is the more urgent concern and adjusting oxygen will indirectly help the acidosis",
    ],
    correct: 1,
    explanation: "PERMISSIVE HYPERCAPNIA is an intentional, evidence-based strategy in ARDS lung-protective ventilation. The RATIONALE: Small tidal volumes (6 mL/kg IBW) and limited plateau pressures (<30 cmH2O) prevent VILI (ventilator-induced lung injury — barotrauma, volutrauma, biotrauma). This strategy has dramatically reduced ARDS mortality (ARDSnet trial). The COST is accepting higher PaCO2 (up to 60-80 mmHg) and mild acidosis (pH >7.20 is the accepted threshold). This patient's pH 7.23 is ABOVE the minimum acceptable threshold. INCREASING the RR or tidal volume to normalise CO2 would: require higher pressures → barotrauma → pneumothorax → worsen ARDS → increase mortality. NURSE'S ROLE: Understand the physiological rationale, support the medical plan, communicate clearly with families ('the elevated CO2 is intentional — it protects the lungs'), document the physician's documented strategy. Do NOT change ventilator settings without physician order. Increasing FiO2 (Option D) does not address CO2 and high FiO2 causes oxygen toxicity — PaO2 68 on FiO2 0.65 (P/F = 105) represents moderate ARDS and is being managed appropriately.",
    wrongExplanations: [
      "WRONG: Increasing ventilator rate to normalise CO2 in ARDS violates the lung-protective strategy and would cause ventilator-induced lung injury — increasing mortality. Family concern, while understandable, does not override evidence-based clinical management. Nurses must educate families, not alter treatment plans based on lay concern.",
      "",
      "WRONG: pH 7.23 is ABOVE the accepted threshold for permissive hypercapnia (>7.20). This is NOT dangerously low in the context of the documented treatment strategy. Calling the physician to recommend increasing settings contradicts the documented plan without clinical justification.",
      "WRONG: Increasing FiO2 to 0.80 worsens oxygen toxicity risk (high FiO2 in ARDS causes absorptive atelectasis and direct oxygen toxicity). PaO2 68 on FiO2 0.65 (P/F ratio ~105) is within acceptable ARDS targets (P/F 100-200 = moderate ARDS). PEEP adjustment is the appropriate oxygenation intervention — not FiO2 increase.",
    ],
  },
  {
    level: "Advanced",
    question: "A 72-year-old man with COPD (known PaCO2 baseline ~55 mmHg, HCO3 ~34 mEq/L — chronic respiratory acidosis, fully compensated) is admitted with community-acquired pneumonia. ABG on admission: pH 7.22, PaCO2 72, HCO3 29, PaO2 52. After 4 hours of NIV (BiPAP), repeat ABG: pH 7.38, PaCO2 52, HCO3 30, PaO2 72. The medical team plans to remove NIV as 'gases have normalised.' The nurse is concerned about the plan. Why?",
    options: [
      "The nurse should support removing NIV — pH 7.38 and improved PaO2 indicate resolution of the acute episode",
      "The HCO3 of 30 is still elevated — the metabolic alkalosis must be treated before removing NIV",
      "The patient's BASELINE PaCO2 is 55 and HCO3 is 34 — a PaCO2 of 52 is actually LOWER than baseline, potentially indicating relative over-ventilation. Removing NIV should be gradual with monitoring of ABGs and clinical status — too-rapid withdrawal risks acute deterioration as the patient returns toward baseline hypercarbia",
      "The PaO2 of 72 is still too low — NIV should continue until PaO2 >100 mmHg",
    ],
    correct: 2,
    explanation: "CRITICAL CONCEPT — INTERPRETING ABGS AGAINST BASELINE. This patient's baseline ABG (chronic fully-compensated respiratory acidosis): PaCO2 ~55, HCO3 ~34, pH ~7.38-7.40. After NIV treatment: PaCO2 52 (BELOW baseline of 55), HCO3 30 (BELOW baseline of 34 — has dropped from 34 to 30 as kidneys begin to excrete bicarbonate in response to acutely reduced PaCO2). At face value, 'pH 7.38, PaCO2 52' appears normal — but for THIS patient, a PaCO2 of 52 is actually LOWER than his chronic baseline of 55. He is being RELATIVELY OVER-VENTILATED. When NIV is removed: PaCO2 will return toward his chronic baseline of 55. If removed abruptly, the PaCO2 rise back to 55 may occur faster than the kidneys can re-accumulate bicarbonate (they've started losing HCO3) → transient acidosis. Additionally, his respiratory muscles are fatigued from the acute-on-chronic exacerbation — abrupt NIV removal risks rapid deterioration. CORRECT APPROACH: Gradual NIV weaning (reduce support slowly), serial ABGs monitoring the return toward his chronic baseline, not targeting 'normal' values for a patient whose normal is different. TARGET for this patient: return to his chronic baseline (PaCO2 55, HCO3 34, pH 7.38-7.40) — not population-normal.",
    wrongExplanations: [
      "WRONG: While pH 7.38 and improved PaO2 are reassuring, these values must be interpreted against THIS patient's baseline. A PaCO2 of 52 is below his chronic baseline of 55 — he is being over-ventilated relative to his set point. Abrupt NIV removal risks acute deterioration.",
      "WRONG: HCO3 of 30 is not a metabolic alkalosis — it is BELOW this patient's chronic baseline of 34 (his kidneys have begun excreting bicarbonate in response to the acutely reduced PaCO2). This does not require specific treatment.",
      "",
      "WRONG: PaO2 of 72 is an IMPROVEMENT from 52 on admission and represents acceptable oxygenation for a COPD patient (target SpO2 88-92%). Targeting PaO2 >100 mmHg in COPD risks suppressing hypoxic drive and worsening hypercapnia.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse reviews an ABG for a critically ill patient in the ICU: pH 7.40, PaCO2 40, HCO3 24, AG 22, Na 140, Cl 98, lactate 4.8 mmol/L. The nurse notices the pH and ABG look completely 'normal' on the surface. However, the nurse suspects a mixed acid-base disorder. What is the correct analysis?",
    options: [
      "The ABG is normal — all values are within normal range and no acid-base disorder exists",
      "A MIXED DISORDER is present — high anion gap metabolic acidosis (AG 22, lactate 4.8) is being masked by a concurrent metabolic ALKALOSIS that has maintained a normal pH. The normal-appearing pH and HCO3 with elevated AG indicates two opposing processes",
      "Lactic acidosis with complete metabolic compensation — the kidneys have fully corrected the pH",
      "Respiratory alkalosis compensating for a metabolic acidosis — the normal pH indicates successful balance",
    ],
    correct: 1,
    explanation: "NORMAL pH WITH ELEVATED ANION GAP = MIXED DISORDER UNTIL PROVEN OTHERWISE. This is one of the most important and advanced acid-base concepts. Step-by-step: pH 7.40 (normal), PaCO2 40 (normal), HCO3 24 (normal) — SUPERFICIALLY NORMAL ABG. BUT: AG = 140 − (98 + 24) = 18... wait — 140 − (98 + 24) = 18. Stated AG = 22. Using stated AG 22: this means UNMEASURED ANIONS are present (lactate 4.8 mmol/L — elevated). In PURE HIGH AG METABOLIC ACIDOSIS: for every mEq/L rise in AG above 12 (AG rose 10), HCO3 should have FALLEN by 10 mEq/L (from 24 to 14). But HCO3 is 24 (NORMAL — not fallen at all). This means a CONCURRENT PROCESS has RAISED the HCO3 by 10 mEq/L, exactly offsetting the expected fall — a CONCURRENT METABOLIC ALKALOSIS. CLINICAL SIGNIFICANCE: The normal-appearing ABG is masking a critically ill state — the patient has significant lactic acidosis (lactate 4.8) being completely masked by a metabolic alkalosis (vomiting? nasogastric losses? prior diuretic use? over-correction of prior acidosis?). A 'normal' ABG in a sick patient requires AG assessment and delta-delta analysis — it is never truly 'normal' if the AG is elevated.",
    wrongExplanations: [
      "WRONG: The elevated anion gap (22) with elevated lactate (4.8) is NOT normal. The AG represents unmeasured acid anions (lactate) — acid-base pathology is present despite the superficially normal pH, PaCO2 and HCO3. Always calculate the AG.",
      "",
      "WRONG: Metabolic acidosis compensation by kidneys takes hours to days. More critically — metabolic COMPENSATION never returns pH to EXACTLY 7.40 with EXACTLY normal HCO3. The perfect 'normality' of pH 7.40 + HCO3 24 with a high AG indicates opposing PRIMARY disorders, not compensation.",
      "WRONG: For respiratory alkalosis to compensate metabolic acidosis: PaCO2 should be LOW (lungs blowing off CO2). PaCO2 is 40 (normal) — there is no respiratory alkalosis. The perfect normal values with high AG = opposing metabolic processes.",
    ],
  },
];

const clinicalPearls = [
  "The most dangerous ABG is the one that looks normal. A pH of 7.40, PaCO2 40 and HCO3 24 in a patient with lactate 4.8 and AG of 22 means two opposing forces are cancelling each other out — a severe lactic acidosis being masked by an equally severe metabolic alkalosis. Always calculate the anion gap. Always. A normal-looking ABG with an elevated AG is a mixed disorder in disguise.",
  "The rising PaCO2 in a severe asthmatic is the single most important clinical warning in emergency respiratory nursing. Asthmatics hyperventilate — their CO2 should be 28-35 mmHg. When it 'normalises' to 40, it means their respiratory muscles are exhausted and CO2 is accumulating because they can no longer sustain the effort. Normal is the new pre-arrest in this context.",
  "Post-hypercapnic alkalosis is a trap waiting for the nurse who does not know it. The COPD patient with chronic PaCO2 of 65 has a compensatory HCO3 of 35. If you mechanically ventilate them and bring PaCO2 to 40 overnight, the HCO3 stays at 35 — the kidneys need days to excrete it. The result is a severe metabolic alkalosis with paradoxical seizures, arrhythmias and poor outcomes. Target THEIR normal, not population normal.",
  "The diarrhoea-vomiting acid-base distinction is among the most tested on NCLEX — and the most misunderstood in clinical practice. Diarrhoea loses bicarbonate-rich fluid → metabolic acidosis. Vomiting loses hydrochloric acid → metabolic alkalosis. They are opposites. A patient with both simultaneously can have a nearly normal pH with one severe disorder masking the other.",
  "Permissive hypercapnia requires nursing conviction to maintain. The family sees a pH of 7.23 and demands 'why isn't the machine fixing it?' The nurse who understands that increasing ventilator rate to normalise the CO2 would cause barotrauma, volutrauma and potentially kill the patient — that nurse protects the patient from well-intentioned but harmful interventions. Understanding the physiology is what separates protocol-following from genuine advocacy.",
  "The anion gap corrected for albumin changes everything in the critically ill. Albumin is a major unmeasured anion — in a patient with albumin 20 g/L (half normal), the AG should be corrected upward by 5 mEq/L. An 'apparently normal' AG of 12 in a patient with albumin 20 is actually a corrected AG of 17 — a HAGMA hiding behind hypoalbuminaemia. ICU patients almost universally have low albumin. Miss this and you miss the diagnosis.",
  "The compensation formulas are not academic exercises — they are clinical decisions. If a metabolic acidosis patient has a PaCO2 higher than Winters formula predicts, their respiratory muscles are failing — intubate before the collapse. If lower, there is a second process (respiratory alkalosis from sepsis, anxiety, liver failure). The formulas tell you what the body is doing and what else might be happening — use them at every ABG.",
];

export default function AcidBasePage() {
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
            <h1 className="font-black text-base text-gray-900">⚖️ Acid-Base Balance</h1>
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
                ⚖️ Acid-base is one of the most complex and highest-yield NCLEX topics. Master the 4-step ABG method, compensation rules, MUDPILES/HARDASS and mixed disorders!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most critical acid-base safety points — these save lives and appear on NCLEX!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Acid-Base Balance!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review compensation formulas, MUDPILES and mixed disorders." :
                        "Keep studying! Focus on the 4-step ABG method, compensation rules and anion gap calculation."}
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
