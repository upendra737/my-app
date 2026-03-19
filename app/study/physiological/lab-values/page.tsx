"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview — How to Use Laboratory Values",
    icon: "🔬",
    color: "blue",
    content: [
      "Laboratory values are objective clinical data — interpret ALWAYS in context of the whole patient, not in isolation",
      "CRITICAL VALUES: Results so abnormal they require IMMEDIATE physician notification regardless of time of day. Document: what was reported, to whom, at what time, and what orders were received",
      "REFERENCE RANGES vary by laboratory and population — NCLEX uses standardised ranges — memorise these",
      "PRE-ANALYTICAL ERRORS (most common cause of lab errors — occur before sample reaches lab): Haemolysis (most common — releases intracellular contents), wrong tube, insufficient volume, incorrect labelling, improper storage/transport, timing errors",
      "HAEMOLYSIS causes falsely ELEVATED: K+ (most critical — RBC K+ is 150 mEq/L — 30× extracellular), LDH, AST, Hb (in plasma). ALWAYS repeat a haemolysed K+ before treating",
      "FASTING REQUIREMENTS: Fasting glucose (≥8 hours), lipid panel triglycerides (12 hours), most other tests not significantly affected by food",
      "SPECIMEN TYPES: Venous blood (CBC, BMP, CMP, coagulation), Arterial (ABG), Urine (UA, culture, 24-hour), CSF (LP), Body fluids, Cultures",
      "NCLEX tests: Recognising critical values and nursing response, interpreting trends not just single values, understanding drug effects on labs, troubleshooting abnormal results and appropriate nursing actions",
    ],
  },
  {
    title: "Complete Blood Count (CBC) — Normal Values",
    icon: "🩸",
    color: "red",
    content: [
      "HAEMOGLOBIN (Hb): Males 130-175 g/L (13-17.5 g/dL), Females 120-160 g/L (12-16 g/dL). Critical low: <70 g/L (<7 g/dL)",
      "HAEMATOCRIT (Hct): Males 40-52%, Females 37-47%. Rule of thumb: Hct ≈ 3× Hb value (Hb 10 → Hct ~30%)",
      "MCV (Mean Corpuscular Volume): 80-100 fL. <80 = MICROCYTIC (iron deficiency, thalassaemia, sideroblastic). 80-100 = NORMOCYTIC (acute blood loss, haemolysis, renal failure, ACD). >100 = MACROCYTIC (B12/folate deficiency, alcohol, hypothyroidism, liver disease, drugs)",
      "RDW (Red Cell Distribution Width): 11.5-14.5%. HIGH = anisocytosis (variation in RBC size). Rises BEFORE MCV changes in iron and B12/folate deficiency — earliest indicator of developing deficiency",
      "WBC (leucocytes): 4.0-11.0 × 10⁹/L. Critical low: <2.0. Critical high: >30.0",
      "NEUTROPHILS: 1.8-7.5 × 10⁹/L (50-70%). Neutrophilia = bacterial infection, steroids, stress. Neutropenia <1.5 = viral, chemo, autoimmune. SEVERE neutropenia <0.5 = protective isolation required",
      "LYMPHOCYTES: 1.0-4.8 × 10⁹/L (20-40%). Lymphocytosis = viral (EBV, CMV, HIV). Lymphopenia = HIV/AIDS, steroids, chemo",
      "EOSINOPHILS: 0.04-0.44 × 10⁹/L (1-4%). Eosinophilia = allergies, asthma, parasites, Addison's disease, drug reactions",
      "PLATELETS: 150-400 × 10⁹/L. Critical low: <50 (bleeding risk — avoid invasive procedures). Spontaneous bleeding risk: <20. Critical high: >1000 (thrombosis risk)",
      "RETICULOCYTES: 0.5-2.0%. Elevated = bone marrow responding (blood loss, haemolysis). Low/normal in anaemia = inadequate marrow response (deficiency, renal failure, aplastic anaemia)",
    ],
  },
  {
    title: "Anaemia Classification — High Yield",
    icon: "🩸",
    color: "red",
    content: [
      "STEP 1 — MCV determines anaemia type: Microcytic (<80), Normocytic (80-100), Macrocytic (>100)",
      "MICROCYTIC ANAEMIA (MCV <80): Iron deficiency (most common worldwide), Thalassaemia, Anaemia of Chronic Disease (ACD — some cases), Sideroblastic anaemia",
      "IRON DEFICIENCY ANAEMIA: LOW Hb, LOW MCV, LOW ferritin (KEY — earliest marker, most specific), LOW serum iron, HIGH TIBC, LOW transferrin saturation (<20%). Causes: blood loss (menstruation, GI bleed), inadequate intake, malabsorption (coeliac, gastrectomy)",
      "ANAEMIA OF CHRONIC DISEASE (ACD): Low-normal Hb, Low-normal MCV, LOW serum iron, NORMAL or HIGH ferritin (KEY distinguisher from IDA), LOW TIBC, LOW transferrin saturation. Causes: infection, inflammation, malignancy, autoimmune, CKD",
      "THALASSAEMIA: Very low MCV out of proportion to Hb drop, NORMAL ferritin, NORMAL TIBC, target cells on film. Family history, Mediterranean/Asian/African background",
      "NORMOCYTIC ANAEMIA (MCV 80-100): Acute blood loss (before iron stores depleted), haemolytic anaemia, renal failure (low EPO — normocytic), ACD, aplastic anaemia, mixed deficiency (iron + B12 — cancels out MCV change)",
      "HAEMOLYTIC ANAEMIA pattern: Elevated LDH, elevated indirect bilirubin, elevated reticulocytes, LOW haptoglobin (haptoglobin binds free Hb — consumed in haemolysis), positive direct Coombs test (immune haemolysis)",
      "MACROCYTIC ANAEMIA (MCV >100): B12 deficiency (neurological features — subacute combined degeneration of spinal cord: posterior column + corticospinal tract — paraesthesia, weakness, ataxia, cognitive changes), Folate deficiency (no neurological features), Alcohol, Liver disease, Hypothyroidism, Drugs (methotrexate, hydroxyurea, AZT)",
      "B12 vs FOLATE distinction on film: Both show MEGALOBLASTIC changes (hypersegmented neutrophils >5 lobes, oval macrocytes). B12 = neurological features. Folate = no neurological features. Do NOT give folate alone if B12 deficient — may precipitate/worsen neurological damage",
    ],
  },
  {
    title: "Iron Studies, B12 and Folate — Complete Reference",
    icon: "⚗️",
    color: "orange",
    content: [
      "SERUM FERRITIN: Males 30-300 ng/mL, Females 15-200 ng/mL. MOST SENSITIVE early marker of iron deficiency — falls before MCV or Hb changes. Ferritin <12 = iron deficiency. Ferritin is an ACUTE PHASE REACTANT — elevated in inflammation, infection, malignancy (may mask true deficiency — can be normal or high in ACD even with iron deficiency)",
      "SERUM IRON: Males 11-30 μmol/L, Females 9-28 μmol/L. Diurnal variation (higher morning). Low in IDA and ACD. High in haemochromatosis, haemolysis",
      "TOTAL IRON BINDING CAPACITY (TIBC): 45-75 μmol/L. Reflects transferrin. HIGH TIBC = iron deficiency (liver upregulates transferrin to capture scarce iron). LOW TIBC = ACD, iron overload, malnutrition, liver disease",
      "TRANSFERRIN SATURATION: (Serum iron / TIBC) × 100. Normal 20-40%. <20% = iron deficiency. >50% = iron overload (haemochromatosis)",
      "VITAMIN B12: 200-900 pg/mL (148-664 pmol/L). Low in: pernicious anaemia (intrinsic factor deficiency — autoimmune gastric parietal cell destruction), strict veganism, gastrectomy, terminal ileum disease (Crohn's), metformin (reduces B12 absorption over years). Replaced with IM hydroxocobalamin or high-dose oral B12",
      "FOLATE (serum): 3-17 ng/mL. RBC folate (2-20 ng/mL) preferred — more stable, reflects long-term status. Low in: poor diet (alcoholism, elderly, poor intake), malabsorption, drugs (methotrexate, phenytoin, trimethoprim, sulfasalazine)",
      "PERNICIOUS ANAEMIA: Autoimmune destruction of gastric parietal cells → no intrinsic factor → cannot absorb B12 from gut. Detect with: intrinsic factor antibodies (specific), parietal cell antibodies (sensitive). Schilling test (historical)",
      "FOLIC ACID SUPPLEMENTATION: All women planning pregnancy — 400-500 mcg/day from 1 month before conception to 12 weeks gestation (reduces neural tube defects by 70%). High-dose folate (5mg) for women on antiepileptics, previous NTD, BMI >30, coeliac disease",
    ],
  },
  {
    title: "Basic and Comprehensive Metabolic Panel",
    icon: "⚗️",
    color: "orange",
    content: [
      "SODIUM (Na+): 135-145 mEq/L. Critical: <120 or >160",
      "POTASSIUM (K+): 3.5-5.0 mEq/L. Critical: <2.5 or >6.5. Most life-threatening electrolyte for cardiac function",
      "CHLORIDE (Cl-): 98-106 mEq/L. Follows sodium. Low in vomiting/metabolic alkalosis. High in diarrhoea/saline excess",
      "BICARBONATE (HCO3-): 22-26 mEq/L. Low = acidosis. High = alkalosis",
      "BUN/UREA: 7-20 mg/dL (2.5-7.1 mmol/L). Elevated in renal failure, dehydration, GI bleeding, high protein diet, steroids. Low in liver failure, malnutrition",
      "CREATININE: Males 62-106 μmol/L (0.7-1.2 mg/dL), Females 44-80 μmol/L (0.5-0.9 mg/dL). Lagging indicator — rises significantly only after >50% GFR loss",
      "BUN:CREATININE RATIO: Normal 10-20:1. >20:1 = pre-renal (dehydration, GI bleed). <10:1 = liver disease, malnutrition",
      "GLUCOSE — FASTING: Normal 3.9-5.5 mmol/L (70-99 mg/dL). Impaired fasting glucose (prediabetes): 5.6-6.9 mmol/L. Diabetes: ≥7.0 mmol/L. Critical low: <2.8 mmol/L (<50 mg/dL). Critical high: >27.7 mmol/L (>500 mg/dL)",
      "HbA1c CORRELATION TABLE: <42 mmol/mol (<6.0%) = Normal. 42-47 mmol/mol (6.0-6.4%) = Prediabetes. ≥48 mmol/mol (≥6.5%) = Diabetes. Target for most T2DM: <53 mmol/mol (<7.0%). Lenient target (elderly, comorbid): <64 mmol/mol (<8.0%). Strict target (young, pregnancy): <48 mmol/mol (<6.5%)",
      "eGFR: ≥90 normal, 60-89 mild decrease, 45-59 mild-moderate, 30-44 moderate-severe, 15-29 severe (G4 — prepare for RRT), <15 kidney failure",
      "CALCIUM total: 2.2-2.6 mmol/L (8.8-10.4 mg/dL). Critical: <1.75 or >3.5. Correct for albumin: Add 0.02 mmol/L per 1 g/L albumin below 40",
      "MAGNESIUM: 0.7-1.1 mmol/L (1.7-2.2 mEq/L). Critical: <0.5 or >2.5",
      "PHOSPHATE: 0.8-1.5 mmol/L (2.5-4.5 mg/dL). Low in refeeding syndrome, DKA treatment, malnutrition",
      "URIC ACID: Males 0.20-0.43 mmol/L (3.4-7.0 mg/dL), Females 0.14-0.36 mmol/L (2.4-6.0 mg/dL). Elevated in GOUT, renal failure, high purine diet, tumour lysis syndrome, diuretics (thiazides), alcohol. Target for gout treatment: <0.36 mmol/L (<6 mg/dL) on urate-lowering therapy",
      "AMMONIA: Normal 9-33 μmol/L (15-55 μg/dL). Elevated in HEPATIC ENCEPHALOPATHY (liver cannot detoxify ammonia from protein catabolism). Also elevated: GI bleeding (blood = protein substrate), renal failure, valproate toxicity, Reye syndrome. Clinical features: flapping tremor (asterixis), confusion, disorientation, drowsiness, coma (grades I-IV)",
    ],
  },
  {
    title: "Arterial Blood Gas (ABG) — Normal Values and Interpretation",
    icon: "💨",
    color: "blue",
    content: [
      "ABG NORMAL VALUES: pH 7.35-7.45, PaO2 80-100 mmHg, PaCO2 35-45 mmHg, HCO3 22-26 mEq/L, Base Excess -2 to +2, SpO2 95-100%",
      "CRITICAL ABG VALUES: pH <7.20 or >7.60 (emergency), PaO2 <60 mmHg (hypoxaemic respiratory failure), PaCO2 >50 with pH <7.35 (ventilatory failure)",
      "4-STEP ABG INTERPRETATION: Step 1: pH (acidosis <7.35 / alkalosis >7.45). Step 2: Primary cause (CO2↑ = respiratory acidosis, CO2↓ = respiratory alkalosis, HCO3↓ = metabolic acidosis, HCO3↑ = metabolic alkalosis). Step 3: Compensation (opposite system compensates — never overcorrects). Step 4: Anion gap if metabolic acidosis",
      "ANION GAP: Na − (Cl + HCO3). Normal 8-12 mEq/L. >12 = HAGMA (MUDPILES: Methanol, Uraemia, DKA, Propylene glycol, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates). Normal AG = NAGMA (HARDASS: Hyperalimentation, Addison's, RTA, Diarrhoea, Acetazolamide, Saline excess, Spironolactone)",
      "COMPENSATION RULES: Metabolic acidosis → Winters formula PaCO2 = 1.5 × HCO3 + 8 ± 2. Metabolic alkalosis → PaCO2 rises 0.7 per mEq/L HCO3 rise. Respiratory acidosis acute: HCO3 rises 1 per 10 mmHg CO2 rise. Respiratory acidosis chronic: HCO3 rises 3.5 per 10 mmHg CO2 rise. Respiratory alkalosis acute: HCO3 falls 2 per 10 mmHg CO2 drop. Respiratory alkalosis chronic: HCO3 falls 5 per 10 mmHg CO2 drop",
      "PaO2/FiO2 RATIO (P/F ratio): Normal >400. >300 = normal. 200-300 = mild ARDS. 100-200 = moderate ARDS. <100 = severe ARDS. P/F <300 on supplemental oxygen = respiratory failure threshold for many protocols",
      "OXYGEN DISSOCIATION CURVE SHIFTS: RIGHT SHIFT (reduced O2 affinity — releases more O2 to tissues): Increased CO2, increased H+ (acidosis), increased temperature, increased 2,3-DPG. LEFT SHIFT (increased O2 affinity — holds O2 — less released to tissues): Decreased CO2, decreased H+ (alkalosis), decreased temperature, decreased 2,3-DPG, CO poisoning, foetal Hb",
      "VENOUS BLOOD GAS (VBG): pH 7.32-7.42, PvCO2 41-51 mmHg, HvO2 35-40 mmHg, HCO3 22-26. Used as SUBSTITUTE for ABG for pH/HCO3 (well-correlated), NOT for oxygenation assessment",
    ],
  },
  {
    title: "Liver Function Tests (LFTs)",
    icon: "🫀",
    color: "orange",
    content: [
      "ALT (Alanine Aminotransferase): Males <45 U/L, Females <35 U/L. MOST SPECIFIC marker of hepatocellular damage. Elevated in: hepatitis (viral, autoimmune, drug-induced), fatty liver, liver ischaemia",
      "AST (Aspartate Aminotransferase): <40 U/L. Less liver-specific (also heart, muscle, RBCs). AST:ALT ratio >2:1 strongly suggests ALCOHOLIC liver disease. Elevated in: liver disease, MI, rhabdomyolysis, haemolysis",
      "ALP (Alkaline Phosphatase): 40-120 U/L. Elevated in: CHOLESTASIS (biliary obstruction — gallstones, cholangiocarcinoma, primary biliary cholangitis), bone disease (Paget's, metastases, healing fracture), pregnancy (placental ALP). Normal in isolated hepatocellular damage",
      "GGT (Gamma-Glutamyl Transferase): Males <65 U/L, Females <40 U/L. Sensitive marker of ALCOHOL use (elevated with moderate intake). Elevated by enzyme-inducing drugs (phenytoin, carbamazepine). Elevated ALP + elevated GGT = biliary/hepatic cause (not bone)",
      "BILIRUBIN total: <17 μmol/L (1 mg/dL). Jaundice visible at >34-51 μmol/L (>2-3 mg/dL)",
      "BILIRUBIN types: UNCONJUGATED (indirect) elevated in PREHEPATIC causes (haemolysis — excess production) or HEPATIC failure (cannot conjugate). CONJUGATED (direct) elevated in POSTHEPATIC causes (biliary obstruction — cannot excrete). BOTH elevated in hepatocellular disease",
      "ALBUMIN: 35-50 g/L. Synthesised ONLY by liver. BEST marker of CHRONIC liver function (half-life 20 days). Low in: chronic liver disease, malnutrition, nephrotic syndrome, protein-losing enteropathy, sepsis",
      "PROTHROMBIN TIME/INR: Best marker of ACUTE liver function (clotting factors half-life hours-days). Prolonged PT/elevated INR in acute liver failure = severe hepatocellular damage. Vitamin K injection: improves INR in obstructive jaundice (fat-soluble vitamin malabsorption) but NOT in hepatocellular failure",
      "AMYLASE: 25-125 U/L. Elevated in PANCREATITIS (>3× upper limit strongly suggests acute pancreatitis), parotitis, perforated bowel, ectopic pregnancy. Rises within 2-12 hours, normalises in 3-5 days",
      "LIPASE: 10-140 U/L. MORE SPECIFIC than amylase for PANCREATITIS. Stays elevated longer (7-14 days vs 3-5 for amylase). Preferred test for pancreatitis diagnosis. >3× upper limit = highly sensitive and specific for acute pancreatitis",
    ],
  },
  {
    title: "Coagulation Studies",
    icon: "🩸",
    color: "purple",
    content: [
      "PT (Prothrombin Time): 11-13 seconds. Tests EXTRINSIC and common pathways (Factors I, II, V, VII, X). Prolonged by: warfarin, vitamin K deficiency, liver disease, DIC",
      "INR: Normal 0.8-1.2. THERAPEUTIC: AF/DVT/PE on warfarin = 2.0-3.0. Mechanical heart valves = 2.5-3.5. Critical: >5 (major bleeding risk)",
      "aPTT (Activated Partial Thromboplastin Time): 25-35 seconds. Tests INTRINSIC and common pathways (Factors I, II, V, VIII, IX, X, XI, XII). Prolonged by: HEPARIN (UFH — therapeutic aPTT 60-100 seconds = 1.5-2.5× control), haemophilia A (Factor VIII deficiency), haemophilia B (Factor IX deficiency), von Willebrand disease, DIC, lupus anticoagulant",
      "D-DIMER: <0.5 mg/L FEU. Fibrin degradation product. HIGHLY SENSITIVE, NOT SPECIFIC for VTE. Elevated in: DVT/PE, DIC, recent surgery/trauma, MI, infection, pregnancy, malignancy, advancing age. NEGATIVE D-dimer + low pre-test probability = effectively RULES OUT PE/DVT",
      "FIBRINOGEN: 2.0-4.0 g/L. Low in: DIC (consumed), liver failure, thrombolysis. High in: inflammation (acute phase reactant), pregnancy",
      "DIC LAB PATTERN — diagnostic triad plus: LOW platelets (consumed), PROLONGED PT/aPTT (clotting factors consumed), LOW fibrinogen (consumed), ELEVATED D-dimer (fibrin breakdown), elevated LDH (tissue destruction). Paradox: simultaneous clotting AND bleeding",
      "ANTI-Xa LEVEL: Therapeutic LMWH: 0.5-1.0 IU/mL (peak 4h post-dose). Prophylactic: 0.2-0.5 IU/mL. Used in obesity, renal impairment, pregnancy where standard dosing unreliable",
      "THROMBOELASTOGRAPHY (TEG/ROTEM): Point-of-care viscoelastic test — assesses whole clot formation. Used in massive haemorrhage, cardiac surgery, trauma — guides targeted blood product therapy",
      "PLATELET FUNCTION: Bleeding time (prolonged in platelet dysfunction), PFA-100. Prolonged in: aspirin, NSAIDs, clopidogrel, ticagrelor, uraemia, von Willebrand disease, thrombocytopenia",
    ],
  },
  {
    title: "Cardiac Biomarkers",
    icon: "❤️",
    color: "red",
    content: [
      "TROPONIN I and T: Most sensitive and specific myocardial injury markers. Normal <0.04 ng/mL (varies by assay). Rise 3-6 hours after MI, peak 12-24 hours, normalise 7-10 days",
      "HIGH-SENSITIVITY TROPONIN (hsTnI, hsTnT): Detects micro-elevations within 1-3 hours. Enables rapid rule-in/rule-out protocols (0h/1h or 0h/2h). DELTA troponin (change over time) is critical — rise ≥20% or absolute rise ≥6 ng/L (assay-specific) = acute myocardial injury",
      "CAUSES OF ELEVATED TROPONIN (non-MI): Type 2 MI (demand ischaemia — tachycardia, hypotension, severe anaemia), PE (right heart strain), myocarditis, heart failure, sepsis (myocardial depression), stroke, CKD (impaired clearance), cardioversion, direct cardiac trauma",
      "CK-MB: <25 U/L or <5% total CK. Rises 4-6h, peaks 12-24h, NORMALISES 48-72h. Use: detect REINFARCTION (troponin stays elevated 7-10 days — CK-MB re-elevates if new MI occurs after initial normalisation)",
      "TOTAL CK: Males <200 U/L, Females <170 U/L. Markedly elevated (>10× normal) in RHABDOMYOLYSIS. Also elevated in MI, severe muscle trauma/exercise, statin myopathy, seizures",
      "RHABDOMYOLYSIS: CK >1000 U/L (often >10,000 in severe). Myoglobin precipitates in renal tubules → AKI. Treatment: AGGRESSIVE IV FLUID (target UO 200-300 mL/hour until CK falling and urine clears). Causes: crush injury, excessive exercise, seizures, statin toxicity, hyperthermia, alcohol",
      "BNP: <100 pg/mL normal, >400 = strongly suggests heart failure. NT-proBNP: age-stratified — >125 pg/mL (age <75), >450 pg/mL (age 75+) suggests HF. Elevated in: HF (most important), RV strain from PE, renal failure",
      "MYOGLOBIN: Rises earliest (1-3 hours) — not cardiac specific. Negative early myoglobin can help RULE OUT MI rapidly. NOT used for diagnosis alone",
      "LDH (Lactate Dehydrogenase): 125-220 U/L. Non-specific — elevated in: MI (historically used), haemolysis, liver disease, malignancy (especially lymphoma), pulmonary embolism, megaloblastic anaemia. LDH >5× normal in haemolysis. LDH markedly elevated in lymphoma",
    ],
  },
  {
    title: "Renal Function, Urinalysis and Urine Studies",
    icon: "🫘",
    color: "blue",
    content: [
      "URINE SPECIFIC GRAVITY (SG): 1.003-1.030. High SG >1.020 = concentrated (dehydration, SIADH, pre-renal AKI). Low SG 1.001-1.010 = dilute (overhydration, DI, established renal failure — fixed SG ~1.010)",
      "URINE OSMOLALITY: 50-1200 mOsm/kg (varies with hydration). Random: 300-900. Normal dilute: <100. Normal concentrated: >700. SIADH: inappropriately HIGH urine osmolality (>100-200) despite low serum osmolality. DI: inappropriately LOW (<300) despite high serum osmolality",
      "URINE SODIUM: Normal 20-40 mEq/L (varies with intake). In AKI: <20 mEq/L = PRE-RENAL (kidneys conserving Na). >40 mEq/L = INTRINSIC AKI (tubular damage — cannot conserve Na). In hyponatraemia: <20 = hypervolaemic (HF, cirrhosis, kidneys conserving Na). >40 = SIADH or hypovolaemic from renal losses",
      "FRACTIONAL EXCRETION OF SODIUM (FENa): (Urine Na × Plasma Cr) / (Plasma Na × Urine Cr) × 100. <1% = pre-renal (Na conservation). >2% = intrinsic AKI (tubular damage). Invalid with diuretics or CKD",
      "URINE CREATININE CLEARANCE: Estimated GFR from 24-hour urine. Normal males ~125 mL/min, females ~110 mL/min. Used when eGFR calculations unreliable (extremes of muscle mass, pregnancy)",
      "PROTEINURIA: Normal <150 mg/day. Microalbuminuria 30-300 mg/day = early diabetic nephropathy (ACR 3-30 mg/mmol). Macroalbuminuria >300 mg/day. NEPHROTIC RANGE >3.5 g/day",
      "URINE MICROSCOPY: Red cell casts = GLOMERULONEPHRITIS (pathognomonic). White cell casts = pyelonephritis or interstitial nephritis. Granular 'muddy brown' casts = ACUTE TUBULAR NECROSIS. Waxy broad casts = advanced CKD. Fatty casts = nephrotic syndrome",
      "MIDSTREAM CULTURE (MSU): Significant bacteriuria ≥10⁵ CFU/mL. Many guidelines use ≥10³ CFU/mL with symptoms. Always culture before treating symptomatic UTI when possible. Treat asymptomatic bacteriuria ONLY in pregnancy and before urological procedures",
      "24-HOUR URINE COLLECTIONS: Void and DISCARD first void at start — collect all subsequent urine — void at exactly 24 hours and INCLUDE in collection. Refrigerate during collection. Uses: protein quantification, creatinine clearance, metanephrines (phaeochromocytoma), cortisol (Cushing's), oxalate (kidney stones)",
    ],
  },
  {
    title: "Thyroid Function Tests",
    icon: "🦋",
    color: "green",
    content: [
      "TSH (Thyroid-Stimulating Hormone): 0.4-4.0 mIU/L. MOST SENSITIVE thyroid screening test — first to change. Elevated TSH = pituitary responding to low thyroid hormone. Suppressed TSH = pituitary suppressed by excess hormone",
      "FREE T4 (fT4): 10-23 pmol/L (0.8-1.8 ng/dL). Active precursor hormone",
      "FREE T3 (fT3): 3.5-6.5 pmol/L (0.2-0.4 ng/dL). Most metabolically active — T4 converted to T3 peripherally",
      "INTERPRETATION TABLE:",
      "TSH HIGH + fT4 LOW = PRIMARY HYPOTHYROIDISM (gland failing)",
      "TSH HIGH + fT4 NORMAL = SUBCLINICAL HYPOTHYROIDISM",
      "TSH LOW + fT4 HIGH = PRIMARY HYPERTHYROIDISM (Graves', toxic nodule)",
      "TSH LOW + fT4 NORMAL = SUBCLINICAL HYPERTHYROIDISM",
      "TSH LOW + fT4 LOW = SECONDARY HYPOTHYROIDISM (pituitary failure — low TSH cannot stimulate thyroid)",
      "TSH NORMAL + fT4 NORMAL = EUTHYROID",
      "MEDICATION EFFECTS: Amiodarone (37% iodine — causes hypo OR hyperthyroidism — monitor TFTs 6-monthly), Lithium (hypothyroidism — blocks hormone release), Steroids (suppress TSH — can cause false low TSH), Biotin supplements (INTERFERE WITH ASSAY — causes falsely LOW TSH and falsely HIGH T4 — stop 48-72 hours before testing)",
      "CORTISOL: Morning (8am): 140-690 nmol/L (5-25 μg/dL). Evening: <138 nmol/L. Loss of diurnal variation = Cushing's. SHORT SYNACTHEN TEST (cosyntropin stimulation): Cortisol must rise to >550 nmol/L at 30-60 minutes — failure = adrenal insufficiency. 24-hour urinary free cortisol: <280 nmol/day (if elevated = Cushing's)",
    ],
  },
  {
    title: "Inflammatory Markers and Infection Indicators",
    icon: "🔥",
    color: "orange",
    content: [
      "CRP (C-Reactive Protein): <5 mg/L. Acute phase reactant — produced by liver. Rises within 6-8 hours of inflammation, peaks 48-72 hours, normalises quickly after resolution. Bacterial infection: often >100 mg/L. Viral: usually <50 mg/L. High sensitivity CRP (hsCRP): <1 mg/L = low CV risk, 1-3 = intermediate, >3 = high cardiovascular risk",
      "ESR (Erythrocyte Sedimentation Rate): Males <15 mm/hr, Females <20 mm/hr (rises with age — Westergren method). Slow to rise (24-48 hours) and SLOW to normalise. Very high ESR (>100 mm/hr): TEMPORAL ARTERITIS/GCA (emergency — steroid before biopsy), MULTIPLE MYELOMA, polymyalgia rheumatica, infective endocarditis, TB. Low ESR: polycythaemia, sickle cell (hyperviscosity), CHF",
      "PROCALCITONIN (PCT): <0.5 ng/mL. Rises in BACTERIAL infection — NOT viral. More specific than CRP. PCT >10 ng/mL = severe bacterial sepsis/septic shock. Used to guide antibiotic duration (serial PCT — falling = treatment working, rising = failure). PCT does NOT rise in viral infections or autoimmune disease",
      "LACTATE: <2.0 mmol/L normal. 2-4 = elevated (organ dysfunction, tissue hypoperfusion). >4 = SEVERE lactic acidosis (high mortality). Sepsis-3 definition: lactate >2 + suspected infection + organ dysfunction. Serial lactate monitoring: lactate clearance ≥10% in 2 hours = treatment response. Type A lactate (hypoperfusion): shock, cardiac arrest, mesenteric ischaemia. Type B (no hypoperfusion): metformin, liver failure, seizures, thiamine deficiency, malignancy",
      "BLOOD CULTURES: Two sets (aerobic + anaerobic) from two different venepuncture sites before antibiotics. Fill adequately (8-10 mL each bottle). Incubate up to 5 days (longer for fungal/fastidious organisms). DO NOT delay antibiotics >1 hour for cultures in septic shock — draw simultaneously with first antibiotic preparation. Most common contaminant: coagulase-negative Staphylococcus (Staph epidermidis) — positive in ONE set = likely contaminant; positive in BOTH sets = more likely true bacteraemia",
      "HIV TESTING: 4th generation Ag/Ab combination assay (detects p24 antigen + HIV-1/2 antibodies). Window period 18-45 days. Confirmatory: HIV-1/2 differentiation immunoassay + viral load. CD4 count: Normal 500-1500 cells/μL. CD4 <200 = AIDS-defining. CD4 <50 = severe immunocompromise (highest OI risk)",
    ],
  },
  {
    title: "Lipid Panel and Cardiovascular Risk Markers",
    icon: "💙",
    color: "purple",
    content: [
      "TOTAL CHOLESTEROL: <5.0 mmol/L (<200 mg/dL) desirable. 5.0-6.2 = borderline. >6.2 = high. FASTING not required for total cholesterol but required for accurate triglycerides",
      "LDL CHOLESTEROL (Low-Density Lipoprotein — 'Bad' cholesterol): <3.0 mmol/L (<116 mg/dL) normal. TARGETS by risk: Low CV risk: <3.0 mmol/L. Moderate: <2.6 mmol/L. High risk (established CVD, DM with organ damage): <1.8 mmol/L. Very high risk (acute MI, recurrent CV events): <1.4 mmol/L. Primary target for statin therapy",
      "HDL CHOLESTEROL (High-Density Lipoprotein — 'Good' cholesterol): Males >1.0 mmol/L (>40 mg/dL). Females >1.2 mmol/L (>50 mg/dL). PROTECTIVE — higher is better. Low HDL = independent CV risk factor. Elevated by: exercise, alcohol (moderate), oestrogen. Reduced by: smoking, obesity, sedentary lifestyle, T2DM",
      "TRIGLYCERIDES (TG): <1.7 mmol/L (<150 mg/dL) normal. 1.7-5.6 = elevated. >5.6 = very high — risk of PANCREATITIS (especially >10 mmol/L). Elevated by: poor diet (refined carbs, alcohol), T2DM, hypothyroidism, CKD, beta-blockers, thiazides, pregnancy. Require 12-HOUR FASTING for accurate measurement",
      "NON-HDL CHOLESTEROL: Total cholesterol − HDL. Target: <3.8 mmol/L (low risk), <2.6 mmol/L (high risk). Better predictor than LDL when triglycerides are elevated",
      "LIPOPROTEIN(a) — Lp(a): <75 nmol/L (or <30 mg/dL). Elevated = independent cardiovascular risk factor — genetic, not modified by lifestyle. Important in patients with premature CVD or family history",
      "FRAMINGHAM RISK SCORE / AUSC-VD RISK CALCULATOR: Combines: age, sex, total cholesterol, HDL, systolic BP, smoking, DM status → 10-year CV event risk. Low <10%, Intermediate 10-20%, High >20%",
      "STATIN MONITORING: LFTs at baseline and if symptoms develop (routine monitoring not recommended unless symptomatic). CK if myopathy symptoms — stop statin if CK >10× ULN or myopathy confirmed. Rosuvastatin dose-reduce in CKD. Atorvastatin safest in CKD (not renally cleared)",
    ],
  },
  {
    title: "Tumour Markers",
    icon: "🔬",
    color: "purple",
    content: [
      "IMPORTANT CAVEAT: Tumour markers are NOT diagnostic alone — they are used for monitoring treatment response and recurrence detection, NOT screening (except AFP in cirrhosis and PSA with shared decision-making). Always interpret in clinical context",
      "PSA (Prostate-Specific Antigen): <4.0 ng/mL (age-adjusted: <2.5 in men <50, <4.0 in 50-70, <6.5 in men >70). Elevated in: prostate cancer, BPH (benign), prostatitis (infection), recent ejaculation, DRE/rectal procedures. PSA velocity (rapid rise) is more concerning than single elevated value. Shared decision-making for screening in men 50-69",
      "CEA (Carcinoembryonic Antigen): <2.5 ng/mL non-smokers, <5 ng/mL smokers. Primarily used for COLORECTAL CANCER monitoring (post-resection surveillance — rising CEA = recurrence). Also elevated in: breast, lung, pancreatic cancer, inflammatory bowel disease, smoking, liver disease",
      "CA-125: <35 U/mL. Used for OVARIAN CANCER monitoring and treatment response. NOT useful screening (low sensitivity and specificity). Also elevated in: endometriosis, fibroids, pelvic inflammatory disease, peritonitis, liver disease, pregnancy — very non-specific in premenopausal women",
      "AFP (Alpha-Fetoprotein): <10 ng/mL. Elevated in: HEPATOCELLULAR CARCINOMA (used for screening in cirrhosis — AFP >400 ng/mL + characteristic imaging = diagnostic), testicular germ cell tumours (non-seminoma), liver metastases, hepatitis, cirrhosis, pregnancy (normal elevation). Surveillance in cirrhosis: AFP + ultrasound every 6 months",
      "CA 19-9: <37 U/mL. Used for PANCREATIC CANCER monitoring (NOT diagnostic — only 70-80% sensitive). Also elevated in: cholangiocarcinoma, colorectal cancer, gastric cancer, biliary obstruction (even benign)",
      "CA 15-3: <30 U/mL. BREAST CANCER monitoring. Used to follow treatment response and detect recurrence. Not used for initial diagnosis or screening",
      "HCG (Human Chorionic Gonadotropin): <5 IU/L (non-pregnant). Normal in pregnancy (doubles every 48-72 hours in viable pregnancy). Elevated in: choriocarcinoma, testicular germ cell tumours, ectopic pregnancy. Used in gestational trophoblastic disease monitoring",
      "LDH: Elevated in lymphoma, leukaemia, testicular cancer — used as prognostic marker and to monitor treatment response in haematological malignancies",
    ],
  },
  {
    title: "CSF (Cerebrospinal Fluid) Normal Values",
    icon: "🧠",
    color: "blue",
    content: [
      "CSF APPEARANCE: Normal = CLEAR, COLOURLESS ('gin clear'). Turbid/cloudy = bacterial meningitis (leucocytes, bacteria). Xanthochromic (yellow) = subarachnoid haemorrhage (12 hours after onset — oxyhaemoglobin breakdown). Bloody = traumatic tap (blood clears with subsequent tubes) vs SAH (blood persists in all tubes)",
      "CSF PRESSURE: 70-180 mmH2O (lateral decubitus). Elevated in: raised ICP, meningitis, SAH. LP is CONTRAINDICATED if raised ICP suspected (herniation risk) — always CT head first if focal neurology, papilloedema, altered consciousness or seizure",
      "CSF WHITE CELLS: 0-5 lymphocytes/μL (normal). >5 = pleocytosis. BACTERIAL MENINGITIS: >1000 cells predominantly NEUTROPHILS. VIRAL MENINGITIS (aseptic): 10-500 cells predominantly LYMPHOCYTES. TB/FUNGAL MENINGITIS: 10-500 cells predominantly LYMPHOCYTES (may have some neutrophils early). NORMAL pressure CSF: <5 cells",
      "CSF PROTEIN: 0.15-0.45 g/L (15-45 mg/dL). ELEVATED in: bacterial meningitis (often >1 g/L), TB meningitis (often very high), Guillain-Barré syndrome (GBS — albuminocytologic dissociation: HIGH protein + NORMAL cell count), MS, malignancy, SAH",
      "CSF GLUCOSE: 2.2-3.9 mmol/L (40-70 mg/dL). CSF:serum glucose ratio normally >0.6 (60% of blood glucose). LOW CSF glucose (<2.2 or ratio <0.5): BACTERIAL MENINGITIS (bacteria consume glucose), TB meningitis, fungal meningitis. NORMAL CSF glucose: viral meningitis, GBS, SAH",
      "CSF COMPARISON TABLE:",
      "Normal: Clear, pressure 70-180, WBC 0-5 lymph, protein 0.15-0.45, glucose normal (ratio >0.6)",
      "Bacterial meningitis: Turbid, pressure HIGH, WBC >1000 neutrophils, protein HIGH (>1 g/L), glucose LOW (<2.2, ratio <0.5)",
      "Viral meningitis: Clear, pressure normal-mildly elevated, WBC 10-500 lymphocytes, protein normal-mildly elevated, glucose NORMAL",
      "TB meningitis: Clear/slightly turbid, pressure elevated, WBC 100-500 lymphocytes, protein HIGH, glucose LOW",
      "GBS: Clear, pressure normal, WBC NORMAL (0-5), protein HIGH (albuminocytologic dissociation), glucose normal",
      "SAH: Bloody/xanthochromic, pressure HIGH, WBC RBCs (after 12h xanthochromia), protein elevated, glucose normal",
    ],
  },
  {
    title: "Drug Levels and Therapeutic Monitoring",
    icon: "💊",
    color: "purple",
    content: [
      "DIGOXIN: Therapeutic 0.5-2.0 ng/mL. TOXIC >2.0. Sample timing: 6-8 hours AFTER last dose (earlier = falsely high during distribution). Toxicity worsened by: hypokalaemia (MOST IMPORTANT), hypomagnesaemia, hypothyroidism, renal failure, amiodarone, quinidine",
      "LITHIUM: Therapeutic 0.6-1.2 mEq/L (acute mania 1.0-1.5). TOXIC >1.5 mEq/L. Sample: TROUGH (12 hours after last dose). Toxicity precipitated by: dehydration/sodium depletion (MOST COMMON), NSAIDs, ACE inhibitors, thiazide diuretics. Signs: nausea → tremor → confusion → ataxia → seizures → cardiac arrhythmias",
      "PHENYTOIN: Total therapeutic 10-20 mg/L, Free (unbound) 1-2 mg/L (critical in hypoalbuminaemia, renal failure). NARROW therapeutic index. ZERO-ORDER KINETICS — small dose increases cause disproportionately large level increases. Toxicity: NYSTAGMUS (first sign), ataxia, diplopia, sedation",
      "VALPROATE: Therapeutic 50-100 mg/L. TROUGH level. Toxicity: hepatotoxicity (monitor LFTs — severe in children <2 years), thrombocytopenia, hyperammonaemia (encephalopathy), HIGHLY TERATOGENIC (neural tube defects — avoid in women of childbearing potential without effective contraception)",
      "CARBAMAZEPINE: Therapeutic 4-12 mg/L. Trough level. Induces CYP450 — reduces levels of warfarin, OCP, other antiepileptics. Hyponatraemia (SIADH). SJS risk (HLA-B*1502 allele — Southeast Asian populations — screen before use)",
      "VANCOMYCIN: Trough target 10-20 mg/L (conventional). AUC/MIC 400-600 mg·h/L (preferred modern monitoring). NEPHROTOXIC — daily creatinine. OTOTOXIC — avoid concurrent aminoglycosides. RED MAN SYNDROME (non-immune infusion reaction) — infuse over MINIMUM 60 minutes",
      "AMINOGLYCOSIDES (gentamicin, tobramycin, amikacin): PEAK (30 min post-infusion end — reflects efficacy). TROUGH (before next dose — reflects toxicity accumulation). NEPHROTOXIC + OTOTOXIC (irreversible). Extended interval dosing (OD dosing) — higher peak for killing, low trough to allow renal recovery",
      "CYCLOSPORIN/TACROLIMUS: Transplant immunosuppressants. NARROW therapeutic index. TROUGH levels (before dose). NEPHROTOXIC, neurotoxic. CYP3A4 INHIBITORS (azole antifungals, macrolide antibiotics, diltiazem, verapamil, grapefruit juice) INCREASE levels — toxicity risk. CYP3A4 INDUCERS (rifampicin, phenytoin, carbamazepine, St John's Wort) DECREASE levels — rejection risk",
      "METHOTREXATE: Monitor levels at 24h, 48h, 72h post-infusion (high-dose regimens). Leucovorin (folinic acid) rescue reduces toxicity — timing is CRITICAL. Toxicity: mucositis, myelosuppression, nephrotoxicity. Highly toxic in renal failure — reduce dose, increase leucovorin rescue",
    ],
  },
  {
    title: "Critical Values — Complete Reference",
    icon: "🚨",
    color: "red",
    content: [
      "CRITICAL VALUES require IMMEDIATE physician notification — document: value, to whom reported, time, and orders received",
      "SODIUM: Critical LOW <120 mEq/L (seizures, coma). Critical HIGH >160 mEq/L (cerebral haemorrhage, coma)",
      "POTASSIUM: Critical LOW <2.5 mEq/L (cardiac arrhythmias, respiratory muscle weakness — check ECG immediately). Critical HIGH >6.5 mEq/L (VF risk — peaked T waves → widened QRS → sine wave → VF)",
      "CALCIUM: Critical LOW <1.75 mmol/L (tetany, laryngospasm, seizures, cardiac arrhythmias — IV calcium gluconate). Critical HIGH >3.5 mmol/L (cardiac arrhythmias, coma)",
      "MAGNESIUM: Critical LOW <0.5 mmol/L (arrhythmias, tetany — IV magnesium sulfate). Critical HIGH >2.5 mmol/L (respiratory depression, cardiac arrest — IV calcium gluconate + stop Mg)",
      "GLUCOSE: Critical LOW <2.8 mmol/L (<50 mg/dL) — D50 25mL IV if unconscious. Critical HIGH >27.7 mmol/L (>500 mg/dL) — DKA/HHS emergency",
      "HAEMOGLOBIN: Critical LOW <70 g/L (<7 g/dL) — symptomatic anaemia, haemodynamic compromise, usually requires transfusion",
      "PLATELETS: Critical LOW <50 × 10⁹/L (avoid invasive procedures, high bleeding risk). Spontaneous haemorrhage risk <20 × 10⁹/L",
      "INR: Critical HIGH >5.0 (major bleeding risk). >3.0 in patient NOT on anticoagulation = serious coagulopathy",
      "TROPONIN: ANY elevation in context of chest pain/ischaemia symptoms = critical — immediate ECG and physician notification",
      "LACTATE: >4.0 mmol/L = critical — high mortality, septic shock probable — serial 2-hourly measurement, resuscitate aggressively",
      "pH: Critical LOW <7.20 (severe acidosis — emergency). Critical HIGH >7.60 (severe alkalosis)",
      "PaO2: <60 mmHg = hypoxaemic respiratory failure. Escalate oxygen immediately",
      "AMMONIA: >150 μmol/L with clinical signs of hepatic encephalopathy = critical — lactulose, rifaximin, protein restriction (moderate), identify precipitant",
      "LIPASE: >3× upper limit (>420 U/L) with abdominal pain = acute pancreatitis — urgent management, nil by mouth assessment, IV fluids, analgesia",
    ],
  },
];

const mnemonics = [
  {
    title: "Anaemia Types by MCV — MNA",
    acronym: "MNA",
    breakdown: ["Microcytic (<80): Iron, Thalassaemia, ACD (some)", "Normocytic (80-100): Acute loss, Haemolysis, Renal, ACD", "Macrocytic (>100): B12, Folate, Alcohol, Liver, Drugs"],
    memory: "MNA — Micro=Iron (FERRITIN is KEY), Normo=Acute/Renal, Macro=B12/Folate. Ferritin LOW = iron deficiency. Ferritin NORMAL-HIGH = ACD. B12 deficiency = neuro features. Folate = no neuro features!",
    color: "red",
  },
  {
    title: "High Anion Gap Metabolic Acidosis — MUDPILES",
    acronym: "MUDPILES",
    breakdown: ["Methanol", "Uraemia", "DKA", "Propylene glycol", "Isoniazid/Iron", "Lactic acidosis (MOST COMMON)", "Ethylene glycol", "Salicylates (late)"],
    memory: "MUDPILES — lactic acidosis is most common HAGMA. Shock + HAGMA = lactic acidosis until proven otherwise. Anion gap = Na − (Cl + HCO3). Normal 8-12. >12 = unmeasured anions present!",
    color: "red",
  },
  {
    title: "DIC Laboratory Pattern",
    acronym: "DIC",
    breakdown: ["D-dimer HIGH (fibrin degradation — clots AND lyses)", "Inversely — all coagulation LOW (PT/aPTT prolonged, fibrinogen low, platelets low)", "Consequence — simultaneous clotting AND bleeding (paradox)"],
    memory: "DIC: D-dimer UP, everything else DOWN. Treat the CAUSE — not just the coagulation. Never give platelets in DIC unless active bleeding — they fuel the fire!",
    color: "purple",
  },
  {
    title: "CSF Findings — Bacterial vs Viral Meningitis",
    acronym: "BVCG",
    breakdown: ["Bacterial: turbid, neutrophils >1000, protein HIGH, glucose LOW", "Viral: clear, lymphocytes 10-500, protein normal-mild, glucose NORMAL", "Colour: bacterial = cloudy, viral = clear", "GBS: clear, cells NORMAL, protein HIGH (albuminocytologic dissociation)"],
    memory: "BVCG — Bacterial is Bad (turbid, neutrophils, low glucose). Viral is Variable but milder. GBS is unusual — high protein with normal cells. The glucose distinguishes bacterial from viral!",
    color: "blue",
  },
  {
    title: "Tumour Markers — Which Cancer",
    acronym: "PCOLA",
    breakdown: ["PSA — Prostate", "CEA — Colorectal (and other GI)", "CA-125 — Ovarian", "LDH — Lymphoma/Haematological", "AFP — Hepatocellular carcinoma and testicular (non-seminoma)"],
    memory: "PCOLA — PSA=Prostate, CEA=Colon, CA-125=Ovarian, LDH=Lymphoma, AFP=HCC/testicular. Remember: tumour markers MONITOR — they do NOT diagnose alone!",
    color: "purple",
  },
];

const alerts = [
  { text: "HAEMOLYSED K+: ALWAYS repeat before treating — RBC K+ is 150 mEq/L. A haemolysed K+ of 6.8 with normal ECG is almost certainly an artefact. Treating it risks fatal hypokalaemia!", severity: "high" },
  { text: "CRITICAL VALUES must be reported IMMEDIATELY and DOCUMENTED — to whom, when, what value, and what orders were received. This is both a safety and legal requirement!", severity: "high" },
  { text: "LP is CONTRAINDICATED in raised ICP — always CT head FIRST if focal neurology, papilloedema, altered consciousness or new seizures. LP in raised ICP = cerebellar herniation!", severity: "high" },
  { text: "TROPONIN elevated does NOT always mean MI — PE, myocarditis, sepsis, CKD and HF all raise troponin. The DELTA (change over time) and clinical context determine the diagnosis!", severity: "high" },
  { text: "HIT: >50% platelet drop on days 5-10 of heparin + thrombosis = HIT. STOP ALL HEPARIN immediately (including flushes). NEVER give platelets — fuels thrombosis. Start argatroban or bivalirudin!", severity: "high" },
  { text: "DIC paradox: Patient clots AND bleeds simultaneously. Low platelets + low fibrinogen + elevated D-dimer + prolonged PT/aPTT = DIC. TREAT THE CAUSE first — fixing the coagulation alone does not work!", severity: "high" },
  { text: "FERRITIN is an acute phase reactant — elevated in inflammation even when iron stores are depleted. In an inflamed patient, normal ferritin does NOT rule out iron deficiency. Request CRP + iron studies together!", severity: "medium" },
  { text: "BIOTIN supplements interfere with thyroid function assays — causes falsely LOW TSH and falsely HIGH T4. Stop biotin 48-72 hours before TFT testing!", severity: "medium" },
  { text: "DIGOXIN level must be taken 6-8 hours AFTER last dose — earlier levels are falsely HIGH during distribution phase. Treating a distribution-phase level as toxicity = stopping a therapeutic drug!", severity: "medium" },
  { text: "B12 deficiency: NEVER give folate alone without correcting B12 deficiency — folate corrects the haematological picture but allows neurological damage (subacute combined degeneration) to PROGRESS!", severity: "medium" },
  { text: "CORRECTED CALCIUM for albumin: Add 0.02 mmol/L per 1 g/L albumin below 40. Patient with albumin 20 and calcium 2.0 → corrected calcium 2.44 = NORMAL. Treating pseudohypocalcaemia with IV calcium risks cardiac arrhythmia!", severity: "medium" },
  { text: "LIPASE is preferred over amylase for pancreatitis — more specific, stays elevated longer (7-14 days vs 3-5 days). A normal lipase effectively excludes acute pancreatitis!", severity: "low" },
  { text: "TUMOUR MARKERS are for monitoring — NOT diagnosis or screening (except AFP in cirrhosis + USS). Elevated CEA, PSA or CA-125 requires clinical correlation and imaging — not immediate treatment!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A nurse receives a potassium result of 6.9 mEq/L. The specimen is labelled 'haemolysed' in the lab report. The patient is alert, appears well, has no complaints, and the ECG shows normal sinus rhythm with normal T waves. What is the nurse's MOST appropriate immediate action?",
    options: [
      "Administer calcium gluconate IV immediately — K+ 6.9 is a critical value requiring emergency treatment",
      "Repeat the potassium sample using careful non-traumatic venepuncture — haemolysis releases intracellular potassium causing a falsely elevated result. The normal ECG does not support true hyperkalaemia",
      "Hold all potassium-containing IV fluids and restrict dietary potassium pending physician review",
      "Administer IV insulin 10 units with 50mL D50 — shift potassium into cells as an emergency measure",
    ],
    correct: 1,
    explanation: "HAEMOLYSED SPECIMENS are the most common cause of falsely elevated potassium. RBCs contain potassium at approximately 150 mEq/L — 30 times the extracellular concentration. When RBCs rupture during collection (traumatic venepuncture, small gauge needle, prolonged tourniquet, pneumatic tube transport, cold temperature), intracellular potassium leaks into the plasma sample creating a falsely elevated result. CRITICAL CLINICAL REASONING: The ECG is the bedside confirmatory tool for true hyperkalaemia. K+ 6.9 would almost certainly show peaked T waves and widened QRS. Normal ECG + haemolysed specimen = artefact until proven otherwise. CORRECT ACTION: Repeat immediately with careful technique. Treating a haemolysed K+ with calcium gluconate, insulin/dextrose or dietary restrictions risks causing genuine dangerous hypokalaemia in a patient whose potassium may be entirely normal.",
    wrongExplanations: [
      "WRONG: Treating a haemolysed sample as true hyperkalaemia without repeating it risks causing iatrogenic dangerous hypokalaemia. The ECG is normal — true K+ 6.9 would almost certainly show ECG changes. Never treat a haemolysed critical value without verification.",
      "",
      "WRONG: Potassium restriction based on an artefactual result risks dangerous hypokalaemia if the true potassium is normal. Always repeat the sample first.",
      "WRONG: Administering insulin and dextrose based on a haemolysed specimen causes potentially dangerous hypoglycaemia and hypokalaemia in a patient who may have a completely normal potassium. Confirm the result before treating.",
    ],
  },
  {
    level: "Knowledge",
    question: "A 28-year-old woman presents with fatigue and pallor. CBC shows Hb 79 g/L, MCV 65 fL, RDW 19.5%. Iron studies: Ferritin 4 ng/mL, Serum iron 4 μmol/L, TIBC 88 μmol/L. She has a 5-year history of heavy menstrual bleeding. Which statement about her ferritin result is MOST accurate?",
    options: [
      "Ferritin of 4 is mildly low — it is not the most sensitive indicator of iron deficiency and other markers should guide treatment",
      "Ferritin of 4 confirms severe iron depletion and is the EARLIEST and MOST SPECIFIC indicator of iron deficiency — it falls before MCV, haemoglobin or serum iron change. A ferritin this low with microcytic anaemia requires urgent iron replacement",
      "Ferritin may be falsely low in this patient due to acute inflammation — CRP should be checked before diagnosing iron deficiency",
      "Ferritin of 4 is consistent with anaemia of chronic disease from her chronic menstrual blood loss",
    ],
    correct: 1,
    explanation: "FERRITIN is the EARLIEST, MOST SENSITIVE and MOST SPECIFIC marker of iron depletion. It represents stored iron (as ferritin and haemosiderin in liver, spleen, bone marrow) and falls BEFORE serum iron decreases, BEFORE TIBC rises, BEFORE MCV drops and BEFORE haemoglobin falls. The sequence of iron depletion: 1) Ferritin falls (iron stores depleted), 2) Transferrin saturation falls, 3) MCV falls, 4) Hb falls (anaemia develops). This patient has ferritin 4 ng/mL — severely depleted iron stores — combined with microcytic anaemia (MCV 65), high TIBC (88 — liver upregulating transferrin), low serum iron and high RDW (variable RBC sizes from iron-depleted production). The cause is clear: heavy menstrual blood loss. Requires: oral iron supplementation, investigation for cause of menorrhagia. Option C (ferritin falsely low in inflammation) is incorrect — in inflammation, ferritin is FALSELY HIGH (acute phase reactant), not low.",
    wrongExplanations: [
      "WRONG: Ferritin IS the most sensitive indicator of iron deficiency — the first to change. A ferritin of 4 is severely depleted and represents the clearest evidence of iron deficiency available from laboratory testing.",
      "",
      "WRONG: In inflammation, ferritin is falsely ELEVATED (it is an acute phase reactant produced by the liver in inflammation). A falsely LOW ferritin does not occur. A ferritin of 4 represents genuinely depleted iron stores regardless of inflammatory status.",
      "WRONG: Anaemia of chronic disease has NORMAL or ELEVATED ferritin (and LOW TIBC). This patient has LOW ferritin (4) and HIGH TIBC (88) — the opposite pattern — confirming iron deficiency anaemia.",
    ],
  },
  {
    level: "Application",
    question: "A 45-year-old man is admitted with severe epigastric pain radiating to the back, nausea and vomiting after a weekend of heavy alcohol consumption. His amylase is 380 U/L (normal 25-125, 3× ULN = 375) and lipase is 1240 U/L (normal 10-140, 3× ULN = 420). Which statement about these results is MOST accurate for confirming the diagnosis?",
    options: [
      "The amylase result at 380 confirms acute pancreatitis — it exceeds the 3× upper limit threshold",
      "The lipase of 1240 U/L is the more reliable and preferred marker for acute pancreatitis — it is more specific, stays elevated longer (7-14 days), and exceeds the 3× threshold by 9 times. The amylase is borderline and less specific",
      "Both amylase and lipase must be elevated together to diagnose pancreatitis",
      "These levels are not sufficient to diagnose pancreatitis — CT scan is required first",
    ],
    correct: 1,
    explanation: "LIPASE is the PREFERRED marker for acute pancreatitis. Comparison: AMYLASE (380 U/L — just at the 3× threshold): Less specific (also elevated in parotitis, perforated ulcer, bowel obstruction, ectopic pregnancy, renal failure). Normalises in 3-5 DAYS. LIPASE (1240 U/L — 9× upper limit): MORE SPECIFIC for pancreatitis (pancreatic lipase is more pancreas-specific than amylase). Remains elevated for 7-14 DAYS — important if patient presents late. >3× upper limit = high sensitivity AND specificity for acute pancreatitis. Clinical diagnosis: CLASSIC PRESENTATION (epigastric pain radiating to back, nausea/vomiting, alcohol trigger) + LIPASE >3× ULN = DIAGNOSIS of acute pancreatitis confirmed without requiring CT scan. CT (contrast-enhanced) is reserved for: unclear diagnosis, assessing severity/complications (necrosis, pseudocyst), deteriorating patients.",
    wrongExplanations: [
      "WRONG: Amylase is the LESS preferred marker — less specific (elevated in many non-pancreatic conditions) and normalises quickly (3-5 days). Lipase is more specific and the preferred diagnostic marker.",
      "",
      "WRONG: Either elevated lipase >3× ULN OR amylase >3× ULN with clinical symptoms is sufficient for diagnosis. Both do not need to be elevated simultaneously — and lipase alone is the more reliable test.",
      "WRONG: Classic clinical presentation + lipase >3× ULN establishes the diagnosis of acute pancreatitis without requiring CT. CT is for severity assessment and complications — not routine diagnosis.",
    ],
  },
  {
    level: "Application",
    question: "A lumbar puncture is performed on a 24-year-old man with fever, severe headache and neck stiffness. CSF results: appearance turbid, opening pressure 280 mmH2O (normal 70-180), WBC 1840 cells/μL with 92% neutrophils, protein 2.8 g/L (normal 0.15-0.45), glucose 0.8 mmol/L (serum glucose 7.2 mmol/L — CSF:serum ratio 0.11, normal >0.6). Gram stain pending. What is the diagnosis and the nurse's MOST urgent action?",
    options: [
      "Viral meningitis — commence supportive treatment and repeat LP in 24 hours",
      "Bacterial meningitis — IV antibiotics must have been given BEFORE the LP results were available, otherwise give IV ceftriaxone IMMEDIATELY and call for urgent infectious diseases and neurology review",
      "Tuberculous meningitis — commence anti-TB therapy and notify public health",
      "Subarachnoid haemorrhage — the turbid CSF indicates blood products breaking down",
    ],
    correct: 1,
    explanation: "BACTERIAL MENINGITIS — diagnosis confirmed by classic CSF profile: Turbid appearance (neutrophils + bacteria), VERY HIGH WBC 1840 with 92% NEUTROPHILS (bacterial pattern — viral = lymphocytes 10-500), VERY HIGH PROTEIN 2.8 g/L (normal 0.15-0.45 — bacteria and inflammatory response), VERY LOW GLUCOSE 0.8 mmol/L (CSF:serum ratio 0.11 — normal >0.6 — bacteria consuming glucose), Elevated pressure 280 mmH2O. NURSING PRIORITY: IV antibiotics (ceftriaxone 2g IV 12-hourly) must NOT be delayed for Gram stain results — every hour of delay in bacterial meningitis dramatically worsens mortality and neurological outcomes. If LP was delayed for any reason and antibiotics not yet started — GIVE ANTIBIOTICS NOW. Also: IV dexamethasone (given WITH or BEFORE first antibiotic dose — reduces neurological complications), blood cultures (before antibiotics if not already), neurological observations, DROPLET PRECAUTIONS (meningococcal), notify public health (contact tracing for prophylaxis).",
    wrongExplanations: [
      "WRONG: Viral meningitis shows LYMPHOCYTES (not neutrophils), NORMAL glucose and only mildly elevated protein. This patient's turbid CSF, 92% neutrophils, glucose 0.8 and protein 2.8 are unequivocally bacterial. This patient requires immediate IV antibiotics.",
      "",
      "WRONG: TB meningitis shows lymphocytes (not neutrophils predominating), very high protein but glucose falls more slowly. Onset is subacute over weeks — not the acute presentation described. The neutrophilic pleocytosis rules against TB.",
      "WRONG: SAH CSF is BLOODY or XANTHOCHROMIC (yellow — oxyhaemoglobin breakdown) — not turbid with 1840 white cells and 92% neutrophils. SAH CSF glucose is normal. This pattern is unequivocally bacterial meningitis.",
    ],
  },
  {
    level: "Application",
    question: "A 72-year-old man with cirrhosis from alcohol-related liver disease presents with confusion and asterixis (flapping tremor). His daughter reports he ate a large protein meal last night. Labs show: ammonia 198 μmol/L (normal 9-33), bilirubin 88 μmol/L, INR 2.4, albumin 22 g/L, Na 128 mEq/L. Which nursing intervention is MOST directly targeted at the elevated ammonia?",
    options: [
      "IV albumin infusion — the low albumin is the primary driver of encephalopathy",
      "Sodium restriction and fluid restriction — the hyponatraemia is causing the confusion",
      "Lactulose administration — promotes ammonia excretion by acidifying the colon (traps NH4+), increasing stool frequency and reducing bacterial ammonia production. Also identify and treat the precipitant (large protein meal, infection, GI bleed, constipation, medications)",
      "IV dextrose infusion — hepatic encephalopathy is primarily from hypoglycaemia in liver failure",
    ],
    correct: 2,
    explanation: "HEPATIC ENCEPHALOPATHY management: Ammonia 198 (6× normal) is the primary neurotoxin driving confusion and asterixis in this patient. LACTULOSE (first-line treatment): Mechanism: acidifies colon (converts ammonia NH3 → ammonium NH4+ which cannot be absorbed), increases stool frequency (eliminates ammonia-producing bacteria and nitrogen load), alters gut flora. Target: 2-3 soft stools per day. RIFAXIMIN (second-line, adjunct): Non-absorbable antibiotic — reduces ammonia-producing gut bacteria. Used for recurrent/refractory hepatic encephalopathy. IDENTIFY THE PRECIPITANT (essential): Large protein meal (increased nitrogen substrate for ammonia production), infection (most common precipitant), GI bleeding (blood = protein = ammonia substrate), constipation (increased bacterial fermentation time), electrolyte disturbance, medications (benzodiazepines, opioids — increase sensitivity to ammonia). PROTEIN: Do NOT severely restrict protein — it worsens malnutrition and may paradoxically worsen encephalopathy. Moderate restriction only if severe encephalopathy.",
    wrongExplanations: [
      "WRONG: While albumin infusion has a role in cirrhosis (especially with spontaneous bacterial peritonitis), it does not directly reduce ammonia levels. The primary treatment for elevated ammonia encephalopathy is lactulose.",
      "WRONG: Hyponatraemia (128) contributes to confusion but lactulose directly targets the ammonia — the primary driver of asterixis and encephalopathy. Sodium restriction alone does not address the ammonia.",
      "",
      "WRONG: Hypoglycaemia can occur in liver failure (reduced gluconeogenesis) and should be checked and treated. However, the asterixis and very high ammonia (198) make hepatic encephalopathy the primary diagnosis — lactulose is the priority intervention.",
    ],
  },
  {
    level: "Advanced",
    question: "A post-operative day 8 patient (bowel resection with anastomosis) on unfractionated heparin 5000 units SC BD for VTE prophylaxis is found to have: platelet count 48 × 10⁹/L (admission 290 × 10⁹/L — 83% drop), new left leg pain and swelling (confirmed DVT on duplex ultrasound), INR 1.1, aPTT 32 seconds. The surgical team orders therapeutic IV heparin for DVT treatment. The nurse reviews the results and is gravely concerned. What is the MOST appropriate nursing response?",
    options: [
      "Administer the IV heparin as ordered — therapeutic anticoagulation is urgently needed for DVT",
      "Hold ALL heparin immediately and urgently notify the physician — this is HIGH PROBABILITY HEPARIN-INDUCED THROMBOCYTOPENIA (HIT). 4T score: >50% platelet drop (83%) + timing days 5-10 + new thrombosis = high probability. Administering more heparin will cause catastrophic thrombosis. Alternative anticoagulation (argatroban or bivalirudin) is required",
      "The platelet count of 48 is too low for therapeutic anticoagulation — request a platelet transfusion before starting heparin",
      "The thrombocytopenia is likely from post-operative haemodilution — the DVT should be treated with heparin as ordered",
    ],
    correct: 1,
    explanation: "HEPARIN-INDUCED THROMBOCYTOPENIA TYPE 2 (HIT) — life-threatening diagnosis. 4T SCORE CALCULATION: THROMBOCYTOPENIA >50% drop from baseline (290→48 = 83% drop = 2 points), TIMING days 5-10 (day 8 post-op = classic window = 2 points), THROMBOSIS (new confirmed DVT = 2 points), oTHer causes unlikely (2 points) = HIGH PROBABILITY HIT (8/8 points). MECHANISM: Heparin-PF4 antibodies activate platelets → PARADOXICAL THROMBOSIS despite thrombocytopenia — NOT a bleeding disorder. CRITICAL: Administering MORE heparin (IV therapeutic heparin) to a patient with HIT causes CATASTROPHIC EXTENSION and NEW THROMBI — stroke, massive PE, limb loss, death. IMMEDIATE ACTIONS: STOP ALL HEPARIN (including SC prophylaxis, IV flushes, heparin-coated catheters). ORDER HIT ANTIBODIES (anti-PF4/heparin ELISA ± serotonin release assay for confirmation). START ALTERNATIVE ANTICOAGULATION (direct thrombin inhibitor: argatroban IV — monitoring via aPTT, or bivalirudin). NEVER give platelet transfusion — provides substrate for thrombosis ('fuel for the fire'). The DVT STILL requires anticoagulation — just NOT with heparin.",
    wrongExplanations: [
      "WRONG: Administering IV heparin to a patient with high-probability HIT is potentially fatal. Heparin drives further platelet activation → catastrophic thrombosis extension. This is one of the most serious medication errors in hospital practice.",
      "",
      "WRONG: Platelet transfusion in HIT is absolutely contraindicated — it provides activated platelet substrate for antibody-mediated thrombosis and will worsen the hypercoagulable state. HIT does not cause bleeding — it causes thrombosis.",
      "WRONG: An 83% platelet drop (290→48) over 8 days of heparin exposure with simultaneous new thrombosis is NOT post-operative haemodilution. Haemodilution causes modest platelet drops and does not cause DVT. This pattern is diagnostic of HIT.",
    ],
  },
  {
    level: "Advanced",
    question: "A 55-year-old woman with known liver cirrhosis from NASH (non-alcoholic steatohepatitis) attends for her 6-monthly AFP surveillance ultrasound. AFP comes back at 420 ng/mL (normal <10 ng/mL). Last 6-month AFP was 12 ng/mL. Abdominal ultrasound shows a new 3.2 cm arterially enhancing lesion in the right lobe of the liver with washout appearance on portal phase. She is currently asymptomatic. What is the clinical interpretation of these results and what is the most important nursing action?",
    options: [
      "AFP of 420 could be elevated from the underlying cirrhosis — reassure the patient and repeat in 3 months",
      "The combination of AFP rise from 12 to 420 ng/mL AND characteristic imaging (arterial enhancement + washout) in a patient with cirrhosis meets non-invasive diagnostic criteria for HEPATOCELLULAR CARCINOMA (HCC). Notify physician urgently, prepare patient for multidisciplinary team review and urgent hepatology/oncology referral for staging and treatment planning",
      "AFP of 420 requires liver biopsy confirmation before any action is taken",
      "This is likely a benign haemangioma — AFP can be elevated with benign liver lesions in cirrhosis",
    ],
    correct: 1,
    explanation: "HEPATOCELLULAR CARCINOMA — non-invasive diagnosis met. According to AASLD/EASL guidelines for HCC surveillance in cirrhosis: AFP >400 ng/mL + characteristic imaging in a cirrhotic liver meets non-invasive diagnostic criteria for HCC WITHOUT requiring biopsy. CHARACTERISTIC IMAGING PATTERN: Arterial enhancement (HCC is hypervascular — fed by hepatic artery) + washout on portal/delayed phase = classic HCC enhancement pattern. This is pathognomonic in the setting of cirrhosis. ADDITIONAL EVIDENCE: AFP rise from 12 to 420 ng/mL (35× rise in 6 months — rapid rise is more concerning than a single value), 3.2 cm lesion (size >2 cm with characteristic pattern = diagnostic). AFP SURVEILLANCE in cirrhosis: AFP + ultrasound every 6 months — this surveillance programme has detected this cancer at a potentially treatable stage. NURSING ACTIONS: Notify physician urgently with all results, prepare patient for multidisciplinary HCC team referral (hepatology, oncology, radiology, surgery/transplant team), provide support and information, arrange staging investigations (CT chest/abdomen/pelvis ± bone scan for metastatic staging), discuss treatment options (surgical resection, ablation, TACE, transplant — dependent on stage and liver function). Biopsy is NOT required when non-invasive criteria are met — it risks tumour seeding.",
    wrongExplanations: [
      "WRONG: AFP of 420 combined with characteristic imaging in a cirrhotic liver meets diagnostic criteria for HCC. A 35× rise in AFP over 6 months with a new hypervascular lesion is not reassuring cirrhosis-related elevation — it requires urgent oncology review, not watchful waiting.",
      "",
      "WRONG: Liver biopsy is NOT required when non-invasive criteria are met (AFP >400 + characteristic imaging in cirrhosis). Biopsy risks tumour seeding and delayed treatment. AASLD guidelines specifically allow non-invasive diagnosis for HCC in this context.",
      "WRONG: Haemangiomas are common benign liver lesions, but they do NOT cause AFP of 420 ng/mL and do NOT show the arterial enhancement + washout pattern (haemangiomas show progressive peripheral nodular enhancement). This pattern is specific for HCC.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse reviews morning laboratory results for a 68-year-old man on the haematology ward undergoing induction chemotherapy for acute myeloid leukaemia (AML). Day 7 post-chemotherapy. Results: WBC 0.2 × 10⁹/L, Neutrophils 0.08 × 10⁹/L (absolute neutrophil count), Hb 72 g/L, Platelets 18 × 10⁹/L, Creatinine 145 μmol/L (baseline 88), Potassium 5.9 mEq/L, Uric acid 0.68 mmol/L (normal <0.43), LDH 1840 U/L (normal <250 U/L), Calcium 1.95 mmol/L (albumin 38 — corrected calcium 2.09), Phosphate 2.1 mmol/L (HIGH). Which combination of concerns requires the MOST urgent nursing attention?",
    options: [
      "Anaemia and thrombocytopenia — arrange transfusions for both immediately",
      "Tumour lysis syndrome (elevated K+, elevated uric acid, elevated LDH, elevated phosphate, borderline calcium) AND severe neutropenia (ANC 0.08 — profound infection risk) AND AKI (creatinine 145 from 88) — notify physician urgently about TLS and initiate/continue aggressive IV hydration, allopurinol/rasburicase, cardiac monitoring for hyperkalaemia and protective isolation",
      "The renal impairment is the most urgent concern — stop nephrotoxic medications and restrict potassium",
      "The thrombocytopenia of 18 is the most urgent concern — risk of spontaneous haemorrhage requires immediate platelet transfusion",
    ],
    correct: 1,
    explanation: "TUMOUR LYSIS SYNDROME (TLS) — life-threatening metabolic emergency. DIAGNOSIS: Cairo-Bishop criteria — two or more of: Uric acid ≥476 μmol/L (0.68 = elevated — check this meets criteria), K+ ≥6.0 or 25% rise (5.9 — borderline), Phosphate ≥1.45 mmol/L (2.1 = elevated), Calcium ≤1.75 mmol/L (corrected 2.09 — borderline). Elevated LDH (1840 = 7× ULN) confirms massive cell death. MECHANISM: Chemotherapy kills rapidly dividing AML cells → intracellular contents released → uric acid (purine breakdown), potassium (intracellular K+ released), phosphate (intracellular PO4 released), calcium falls (phosphate binds calcium) → AKI from urate/calcium phosphate precipitation in renal tubules. TRIPLE SIMULTANEOUS THREATS: 1) TLS (metabolic emergency — cardiac arrhythmias from K+, renal failure, seizures from hypocalcaemia), 2) Profound neutropenia (ANC 0.08 = agranulocytosis — any fever = neutropenic sepsis emergency requiring immediate IV broad-spectrum antibiotics — protective isolation NOW), 3) AKI (creatinine 145 from 88 — TLS-related — aggressive IV hydration is both prevention and treatment). MANAGEMENT: Aggressive IV hydration (200-300 mL/hour), allopurinol (prevents further uric acid production) or rasburicase (converts existing urate — superior in high TLS risk), cardiac monitoring (K+ 5.9 approaching critical), correct hypocalcaemia if symptomatic, dialysis if refractory.",
    wrongExplanations: [
      "WRONG: While transfusions may be needed (Hb 72, platelets 18), they are NOT the most urgent concern. TLS-induced metabolic disturbances (hyperkalaemia causing cardiac arrhythmias, worsening AKI) with concurrent profound neutropenia are immediately life-threatening. Address TLS and neutropenia first.",
      "",
      "WRONG: Renal impairment is part of the TLS syndrome and important — but the COMPLETE picture (metabolic emergency + profound neutropenia + AKI) requires comprehensive urgent management, not just stopping nephrotoxins.",
      "WRONG: Platelets 18 × 10⁹/L is a serious bleeding risk but is not the MOST urgent concern when TLS (K+ 5.9 rising, phosphate 2.1, uric acid elevated, LDH 1840) threatens immediate cardiac arrhythmias and when neutropenia (0.08) means any fever requires immediate antibiotics.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse reviewing morning results for five patients on a general medical ward must prioritise callbacks. Which patient requires the MOST URGENT physician notification?\n\nPatient A: Hb 85 g/L (stable decline over 3 weeks, known CKD)\nPatient B: INR 5.2 on warfarin for AF, no active bleeding, clinic review tomorrow\nPatient C: Sodium 121 mEq/L in a known SIADH patient — sodium was 124 two days ago and 127 four days ago — now declining despite fluid restriction\nPatient D: Troponin 0.08 ng/mL (previous 0.05 yesterday) in a patient with known heart failure and CKD — no chest pain, ECG unchanged\nPatient E: Potassium 2.6 mEq/L in a patient on furosemide and digoxin with the patient reporting palpitations and new nausea",
    options: [
      "Patient B — INR 5.2 is a critical value and warfarin must be held",
      "Patient D — troponin is rising and NSTEMI must be ruled out",
      "Patient E — hypokalaemia (K 2.6) in a patient on DIGOXIN reporting palpitations and nausea. Hypokalaemia dramatically increases digoxin toxicity. The combination of digoxin + K 2.6 + palpitations + nausea = possible digoxin toxicity causing life-threatening arrhythmias",
      "Patient C — declining sodium despite treatment is the most concerning trend",
    ],
    correct: 2,
    explanation: "PATIENT E requires the MOST URGENT attention. ANALYSIS: K+ 2.6 mEq/L (critical low threshold <2.5 is approaching), patient is on DIGOXIN, and reports PALPITATIONS and NAUSEA — the classic early symptoms of DIGOXIN TOXICITY. MECHANISM: Potassium and digoxin compete for the same Na/K-ATPase receptor. Hypokalaemia creates more receptor sites for digoxin → digoxin toxicity at serum levels that would otherwise be therapeutic → life-threatening ventricular arrhythmias (VT, VF). Nausea is an early symptom of digoxin toxicity. Palpitations suggest arrhythmia already occurring. IMMEDIATE ACTIONS: ECG NOW (looking for digoxin toxicity signs — VT, AV block, regularised AF, bidirectional VT), digoxin level, IV potassium replacement preparation, notify physician IMMEDIATELY. Patient B (INR 5.2) is concerning but no active bleeding — urgent but not immediately life-threatening. Patient C (declining sodium) needs urgent review but declining from 127 to 121 over 4 days is not an acute emergency. Patient D (troponin rise 0.05→0.08) — delta is small and in context of HF+CKD may represent chronic change — needs notification but less urgent than Patient E. Patient A (stable anaemia) — least urgent.",
    wrongExplanations: [
      "WRONG: INR 5.2 is concerning and requires physician notification but without active bleeding it is NOT immediately life-threatening. It should be called but is less urgent than Patient E who may be actively experiencing digoxin toxicity arrhythmias.",
      "WRONG: Troponin 0.05→0.08 is a small rise in a patient with known HF and CKD (both cause chronic troponin elevation and impaired clearance). Without chest pain or ECG changes, this needs notification but is not the most urgent. Patient E with probable digoxin toxicity and arrhythmia symptoms is more urgent.",
      "",
      "WRONG: Patient C's declining sodium (127→124→121 over 4 days) despite fluid restriction is concerning and needs urgent review — but the rate of decline is 3 mEq/L over 2 days, suggesting a treatable issue without immediate seizure risk. Patient E's combination of digoxin + hypokalaemia + active symptoms is more immediately life-threatening.",
    ],
  },
];

const clinicalPearls = [
  "The laboratory value most often treated incorrectly is a haemolysed potassium. Red blood cells contain potassium at 150 mEq/L — 30 times the extracellular concentration. Before treating any critically elevated K+, look at the haemolysis flag in the lab report and perform an ECG. If the ECG is normal, repeat the sample. Treating a haemolysed artefact with calcium gluconate and insulin/dextrose can cause genuine dangerous hypokalaemia.",
  "Ferritin is the first laboratory value to change in iron deficiency — before serum iron, before TIBC, before MCV and before haemoglobin. A patient with normal haemoglobin and ferritin of 8 ng/mL has iron deficiency without anaemia — a very treatable cause of fatigue, cognitive impairment and exercise intolerance. If the only abnormality is low ferritin and the patient is tired, treat the iron.",
  "The CSF glucose is what separates bacterial from viral meningitis in the critical moment. Bacterial meningitis consumes CSF glucose — the CSF:serum ratio falls below 0.5. Viral meningitis leaves glucose alone. A patient with turbid CSF, thousands of neutrophils and CSF glucose of 0.8 in a setting of serum glucose 7.2 has bacterial meningitis and needs IV ceftriaxone NOW — before the gram stain, before the culture, before the sensitivities.",
  "Tumour markers are for monitoring — not diagnosis and not screening. An elevated CEA, PSA or CA-125 requires clinical correlation, imaging and specialist review. Elevated PSA can mean prostate cancer, BPH, prostatitis or recent ejaculation. An isolated elevated CEA does not diagnose colorectal cancer. The marker is a signal to investigate further — not a diagnosis in itself.",
  "The delta troponin is more diagnostically important than the absolute troponin in most presentations. A troponin that rises 20% or more over 1-3 hours in a patient with chest pain meets NSTEMI criteria — regardless of whether either value exceeds the normal range cut-off. The pattern over time is the diagnosis, not a single number compared to a cut-off.",
  "HIT is the only condition where thrombocytopenia causes thrombosis rather than bleeding. A >50% platelet drop on days 5-10 of heparin + new clot = stop all heparin immediately, order HIT antibodies and start an alternative anticoagulant. The nurse who recognises this pattern before the next heparin dose is administered has potentially prevented a massive PE, stroke or limb loss.",
  "Lipase stays elevated for 7-14 days in pancreatitis — amylase normalises in 3-5 days. If a patient presents 5 days after onset of epigastric pain and amylase is normal, check lipase. It may still be significantly elevated and confirm the diagnosis. Amylase can be falsely reassuring in late presenters — lipase is the more reliable marker at any time point.",
];

export default function LabValuesPage() {
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
            <h1 className="font-black text-base text-gray-900">🔬 Laboratory Values</h1>
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
                🔬 This is the COMPLETE lab values guide — CBC, metabolic panel, ABG, LFTs, coagulation, cardiac markers, CSF, tumour markers, drug levels and all critical values!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most critical laboratory safety points — these save lives and appear on NCLEX!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Laboratory Values!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review critical values, HIT, DIC and TLS patterns." :
                        "Keep studying! Focus on haemolysis errors, iron studies, CSF interpretation, HIT and critical values."}
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