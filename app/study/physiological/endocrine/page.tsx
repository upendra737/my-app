"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Endocrine Nursing",
    icon: "⚗️",
    color: "blue",
    content: [
      "The endocrine system regulates metabolism, growth, reproduction, fluid balance and stress response through hormones — chemical messengers released into the bloodstream",
      "KEY ENDOCRINE GLANDS: Hypothalamus (master controller), pituitary (master gland), thyroid, parathyroids (4 small glands), adrenals (2 glands — cortex + medulla), pancreas (islets of Langerhans), gonads, pineal",
      "FEEDBACK LOOPS: Most endocrine regulation uses negative feedback — rising hormone levels suppress further release. Disruption of feedback causes hyper- or hypo-secretion states",
      "HORMONE TYPES: Steroid hormones (lipid-soluble — cross cell membrane, act on nuclear receptors — slow onset, prolonged effect), Peptide hormones (water-soluble — bind surface receptors — faster onset), Amine hormones (thyroid hormones, catecholamines)",
      "ENDOCRINE vs EXOCRINE: Endocrine glands release hormones directly into bloodstream (no duct). Exocrine glands release secretions through ducts (sweat, salivary, pancreatic enzymes)",
      "NCLEX heavily tests: Diabetes mellitus (type 1, type 2, DKA, HHS), thyroid disorders (hypothyroidism, hyperthyroidism, thyroid storm), adrenal disorders (Addison's, Cushing's, phaeochromocytoma), SIADH and diabetes insipidus",
      "ENDOCRINE EMERGENCIES: DKA, HHS, myxoedema coma, thyroid storm, adrenal crisis, phaeochromocytoma crisis — all life-threatening, all require rapid recognition and intervention",
    ],
  },
  {
    title: "Diabetes Mellitus — Type 1 vs Type 2",
    icon: "🩸",
    color: "red",
    content: [
      "TYPE 1 DIABETES MELLITUS (T1DM): Autoimmune destruction of pancreatic beta cells → absolute insulin deficiency. Onset typically childhood/adolescence but can occur at any age. Lean body habitus. Always requires insulin",
      "T1DM PATHOPHYSIOLOGY: Without insulin, cells cannot uptake glucose → hyperglycaemia. Fat breakdown → free fatty acids → ketone production → DKA. Protein catabolism → weight loss, fatigue",
      "TYPE 2 DIABETES MELLITUS (T2DM): Insulin resistance + progressive beta cell failure → relative insulin deficiency. Strong association with obesity, physical inactivity, family history, age >45. Most common form (90-95%)",
      "T2DM PROGRESSION: Initially insulin resistance compensated by increased insulin secretion → over years, beta cell exhaustion → relative insulin deficiency → hyperglycaemia",
      "DIAGNOSTIC CRITERIA for diabetes (ANY ONE of four):",
      "Fasting plasma glucose ≥7.0 mmol/L (126 mg/dL) after ≥8 hours fasting",
      "2-hour glucose ≥11.1 mmol/L (200 mg/dL) during OGTT",
      "HbA1c ≥48 mmol/mol (6.5%)",
      "Random glucose ≥11.1 mmol/L (200 mg/dL) with classic hyperglycaemic symptoms",
      "PREDIABETES: Fasting glucose 6.1-6.9 mmol/L (IFG), OGTT 7.8-11.0 mmol/L (IGT), HbA1c 39-47 mmol/mol (5.7-6.4%)",
      "HbA1c: Reflects average blood glucose over previous 2-3 months (lifespan of RBCs). Target <53 mmol/mol (<7%) for most. Less stringent targets for elderly or those with hypoglycaemia unawareness",
      "COMPLICATIONS: Microvascular (retinopathy — leading cause of blindness, nephropathy — leading cause of ESKD, neuropathy — leading cause of non-traumatic lower limb amputation), Macrovascular (CAD, stroke, PVD)",
    ],
  },
  {
    title: "Diabetic Ketoacidosis (DKA)",
    icon: "🚨",
    color: "red",
    content: [
      "DKA: Life-threatening complication of DIABETES (primarily T1DM, but T2DM and SGLT-2 inhibitor use can cause euglycaemic DKA) characterised by hyperglycaemia, ketoacidosis and dehydration",
      "PATHOPHYSIOLOGY: Absolute or relative insulin deficiency + excess counter-regulatory hormones (glucagon, cortisol, adrenaline) → unrestrained gluconeogenesis + lipolysis → hyperglycaemia + ketonaemia → osmotic diuresis → profound dehydration + electrolyte loss → acidosis",
      "DKA DIAGNOSTIC TRIAD: Hyperglycaemia (BGL usually >11 mmol/L, but euglycaemic DKA with SGLT-2 inhibitors), Ketonaemia/Ketonuria (ketones >3 mmol/L or 2+ urine ketones), Metabolic acidosis (pH <7.30, bicarbonate <15 mmol/L)",
      "DKA CLINICAL FEATURES: Polyuria, polydipsia, nausea/vomiting, abdominal pain, weakness, Kussmaul breathing (deep, rapid, laboured — compensatory respiratory alkalosis), fruity/acetone breath, dehydration (sunken eyes, dry mucous membranes, poor skin turgor, tachycardia, hypotension)",
      "PRECIPITANTS of DKA (the 6 I's): Infection (most common), Insulin omission/inadequate dose, Infarction (MI, stroke), Intoxication (alcohol, cocaine), Inflammation (pancreatitis), Iatrogenic (steroids, SGLT-2 inhibitors)",
      "DKA MANAGEMENT — IVIT: IV fluids, Insulin, potassium (K+), Treat the cause",
      "IV FLUIDS: Normal saline (0.9%) 1L over first hour, then 1L over 2 hours, then 1L over 4 hours — guided by haemodynamic status and electrolytes. SWITCH to 0.45% NaCl when glucose approaches 14 mmol/L. ADD 5% dextrose when glucose <14 mmol/L to prevent hypoglycaemia while continuing insulin",
      "INSULIN: Fixed rate IV insulin infusion (FRIII) — 0.1 units/kg/hour. DO NOT use insulin bolus/push. DO NOT start insulin until potassium >3.5 mEq/L (risk of fatal hypokalaemia). Target glucose reduction 2-3 mmol/L/hour",
      "POTASSIUM: Serum K+ falls as insulin drives K+ into cells. MONITOR hourly. Replace potassium in all IV bags (unless K+ >5.5). Avoid hypoKALAEMIA — most common cause of DKA-related death",
      "BICARBONATE: Only consider if pH <6.9 — controversial. Bicarbonate shifts oxygen dissociation curve, worsens hypokalaemia. Generally NOT given",
    ],
  },
  {
    title: "DKA — Monitoring and Resolution",
    icon: "📊",
    color: "red",
    content: [
      "DKA MONITORING: Hourly blood glucose, hourly fluid balance, 2-hourly electrolytes (Na, K, bicarbonate), 2-hourly venous blood gas (pH, bicarbonate), ketones 2-4 hourly (blood ketone preferred over urine — reflects current state more accurately)",
      "RESOLUTION CRITERIA (ALL THREE must be met): Blood ketones <0.6 mmol/L (or urine ketones negative/trace), venous pH >7.3, bicarbonate >15 mmol/L. NOT glucose — glucose normalises before acidosis resolves",
      "TRANSITION to subcutaneous insulin: Continue IV insulin infusion for 30-60 minutes AFTER first subcutaneous insulin dose to prevent rebound ketoacidosis",
      "CEREBRAL OEDEMA: Rare but devastating complication — primarily in children. Risk factors: overly rapid fluid replacement, hypotonic fluids, rapid glucose lowering. Symptoms: headache, deteriorating consciousness, bradycardia, rising BP, papilloedema. Treatment: IV mannitol 0.5-1 g/kg or hypertonic saline. FATAL if untreated",
      "HYPOPHOSPHATAEMIA in DKA: Phosphate also moves intracellularly with insulin. Severe hypophosphataemia → haemolysis, respiratory muscle weakness, cardiac dysfunction. Replace phosphate if severely low (<0.32 mmol/L) or symptomatic",
      "THROMBOSIS RISK in DKA: Severe dehydration + hypercoagulable state + immobility → DVT/PE risk. Consider prophylactic LMWH",
      "NURSING PRIORITIES: Strict fluid balance (Foley catheter mandatory), hourly vital signs and BGL, frequent electrolytes, insulin infusion management, patient education (what caused the DKA, sick day rules, NEVER omit insulin when sick), communication with physician for electrolyte abnormalities",
      "SICK DAY RULES patient education: Never omit insulin when sick (even if not eating). Monitor BGL 4-hourly. Check ketones. Increase fluid intake. Contact healthcare team early",
    ],
  },
  {
    title: "Hyperosmolar Hyperglycaemic State (HHS)",
    icon: "🚨",
    color: "orange",
    content: [
      "HHS: Life-threatening complication of T2DM. Previously called HONK (Hyperosmolar Non-Ketotic) or HHNK",
      "HHS vs DKA KEY DIFFERENCES: HHS occurs in T2DM (residual insulin prevents lipolysis/ketogenesis), much more severe hyperglycaemia (BGL often >33-55 mmol/L), more severe dehydration (profound osmotic diuresis over days-weeks), minimal or absent ketoacidosis (pH usually >7.3, ketones absent or mild), higher mortality (15-20% vs 1-5% for DKA), slower onset (days to weeks), more neurological features (confusion, seizures, coma from hyperosmolality)",
      "HHS DIAGNOSTIC CRITERIA: Glucose >33 mmol/L (600 mg/dL), Osmolality >320 mOsm/kg, Minimal ketones (blood ketones <3 mmol/L), pH >7.3, bicarbonate >15 mmol/L",
      "CALCULATED SERUM OSMOLALITY: 2 × (Na + K) + glucose + urea (mmol/L). Normal 285-295 mOsm/kg. HHS typically >320",
      "HHS MANAGEMENT: MORE GRADUAL than DKA — do NOT correct too rapidly (risk of cerebral oedema, osmotic demyelination syndrome). Target reduction in osmolality: 3-8 mOsm/kg/hour",
      "FLUID REPLACEMENT in HHS: 0.9% NaCl initially to restore circulation. Calculate free water deficit. SLOWER replacement than DKA — over 48-72 hours. When glucose approaches 14-17 mmol/L, switch to 5% dextrose",
      "INSULIN in HHS: LOW DOSE — 0.05 units/kg/hour (vs 0.1 in DKA). Often delayed until fluid resuscitation has begun (fluids alone lower glucose significantly in HHS). DO NOT push glucose down rapidly — risk of cerebral oedema",
      "THROMBOSIS RISK in HHS: VERY HIGH — hyperviscosity from extreme dehydration + immobility + age. LMWH prophylaxis strongly recommended",
      "NURSING: Neurological assessment, fluid balance (Foley mandatory), electrolyte monitoring, gradual normalisation, identify precipitant (infection most common), prevent complications",
    ],
  },
  {
    title: "Hypoglycaemia — Recognition and Treatment",
    icon: "⬇️",
    color: "orange",
    content: [
      "HYPOGLYCAEMIA: Blood glucose <4.0 mmol/L (<72 mg/dL). Serious in all patients — the brain requires glucose as its primary energy source",
      "CAUSES: Excessive insulin or antidiabetic medication, skipped or delayed meals, increased exercise without adjustment, alcohol (suppresses hepatic glycogenesis), renal or hepatic failure (impaired gluconeogenesis), insulin-secreting tumour (insulinoma)",
      "ADRENERGIC SYMPTOMS (activation of sympathetic nervous system — early): Shakiness/tremor, diaphoresis (most reliable sign), tachycardia, palpitations, pallor, anxiety, hunger",
      "NEUROGLYCOPENIC SYMPTOMS (brain glucose deprivation — later, more serious): Confusion, difficulty concentrating, slurred speech, visual disturbances, headache, behavioural changes, seizures, loss of consciousness",
      "HYPOGLYCAEMIA UNAWARENESS: Loss of adrenergic warning symptoms (usually from autonomic neuropathy or recurrent hypoglycaemia). Patient may go from normal to unconscious without warning — EXTREMELY DANGEROUS",
      "BETA-BLOCKERS MASK HYPOGLYCAEMIA: Suppress adrenergic symptoms (tachycardia, tremor, palpitations). Diaphoresis is PRESERVED (cholinergic — not blocked). Diabetic patients on beta-blockers must monitor glucose more frequently",
      "15-15 RULE (conscious patient, able to swallow): Give 15g fast-acting carbohydrate (4 glucose tablets, 150mL fruit juice, 3 teaspoons sugar, 6 jelly beans), recheck glucose in 15 minutes, repeat if still <4 mmol/L. Then eat a snack with complex carbohydrate and protein",
      "UNCONSCIOUS PATIENT: IV DEXTROSE 50% (D50) 25-50mL (12.5-25g glucose) IV — FASTEST. OR Glucagon 1mg IM/SC — stimulates hepatic glycogen breakdown (delayed effect, fails in malnourished/alcohol patients who have depleted glycogen). Roll patient to lateral position after glucagon administration (vomiting risk)",
      "POST-HYPOGLYCAEMIA: Monitor for 30-60 minutes, investigate cause, document, consider medication adjustment. Severe hypoglycaemia requiring third-party assistance = serious adverse event requiring physician review",
    ],
  },
  {
    title: "Hypothyroidism",
    icon: "🦋",
    color: "blue",
    content: [
      "HYPOTHYROIDISM: Insufficient thyroid hormone production → slowing of metabolism. Primary (thyroid gland failure — most common) or Secondary (pituitary TSH deficiency) or Tertiary (hypothalamic TRH deficiency)",
      "MOST COMMON CAUSE: Hashimoto's thyroiditis (autoimmune) in developed countries. Iodine deficiency globally. Post-radioactive iodine treatment, post-thyroidectomy, medications (amiodarone, lithium)",
      "CLINICAL FEATURES — Remember 'everything SLOWS DOWN': Weight gain, fatigue/lethargy, cold intolerance, dry skin and hair, hair loss, constipation, bradycardia, hypotension, hoarse voice (myxoedema), goitre (may be present), depression, cognitive slowing ('myxoedema madness'), menstrual irregularity (menorrhagia), elevated cholesterol, delayed deep tendon reflexes",
      "MYXOEDEMA: Non-pitting oedema due to accumulation of glycosaminoglycans in subcutaneous tissue — puffy face, especially periorbital, pretibial oedema. Indicator of severe hypothyroidism",
      "LABORATORY FINDINGS: TSH ELEVATED (primary hypothyroidism — pituitary makes more TSH to stimulate failing thyroid). Free T4 LOW. Free T3 LOW. Total cholesterol ELEVATED. Anaemia (normocytic), hyponatraemia (SIADH from hypothyroidism), elevated CK",
      "TSH is the BEST screening test: TSH elevated in primary hypothyroidism. TSH low or normal in secondary/tertiary hypothyroidism",
      "TREATMENT: LEVOTHYROXINE (T4) — start at low dose (especially elderly and cardiac patients — rapid thyroid replacement can precipitate angina or MI). Titrate based on TSH every 6-8 weeks. Take on EMPTY STOMACH 30-60 minutes before breakfast. Monitor TSH every 6-12 months when stable",
      "PATIENT EDUCATION: Take medication consistently — same time each day, empty stomach. Separate from calcium, iron, antacids by 4 hours. Report symptoms of over-replacement (palpitations, weight loss, heat intolerance, anxiety). Regular follow-up for TSH monitoring",
    ],
  },
  {
    title: "Myxoedema Coma — Hypothyroid Emergency",
    icon: "🚨",
    color: "red",
    content: [
      "MYXOEDEMA COMA: Life-threatening decompensation of severe hypothyroidism. Mortality 20-50% despite treatment",
      "PRECIPITANTS: Infection (most common), surgery, trauma, cold exposure, sedating medications (opioids, anaesthetics, benzodiazepines), stopping thyroid medication, MI",
      "CLINICAL FEATURES: HYPOTHERMIA (temperature may be 30-34°C — hypothermia in the absence of known exposure = thyroid emergency until proven otherwise), altered consciousness/coma, respiratory failure (hypercapnia from reduced respiratory drive), bradycardia, hypotension, hyponatraemia, hypoglycaemia, absent or very slow reflexes, non-pitting oedema",
      "DIAGNOSIS: Clinical diagnosis. TSH markedly elevated, free T4 very low. ABG (hypercapnia, hypoxia). BGL (hypoglycaemia). Electrolytes (hyponatraemia). Cortisol (exclude coexisting adrenal insufficiency — common in myxoedema coma)",
      "EMERGENCY MANAGEMENT:",
      "AIRWAY: Intubation often required — hypercapnia and reduced consciousness compromise airway",
      "THYROID HORMONE REPLACEMENT: IV levothyroxine 200-400 mcg loading dose, then 50-100 mcg daily. Some clinicians add T3 (liothyronine) for faster action",
      "CORTICOSTEROIDS FIRST: Give hydrocortisone 100mg IV 8-hourly BEFORE or WITH thyroid hormone — because adrenal insufficiency often coexists. Rapid thyroid replacement without steroid cover can precipitate adrenal crisis",
      "ACTIVE WARMING: Passive external warming (blankets, warm environment). Avoid active external warming (causes vasodilation and hypotension). Active internal warming (warm IV fluids, warm humidified oxygen)",
      "GLUCOSE: Treat hypoglycaemia with IV dextrose",
      "NURSING: ICU-level monitoring, temperature monitoring, careful warming, haemodynamic monitoring, avoidance of sedating medications, medication administration",
    ],
  },
  {
    title: "Hyperthyroidism and Thyroid Storm",
    icon: "🔥",
    color: "orange",
    content: [
      "HYPERTHYROIDISM: Excess thyroid hormone → acceleration of metabolism. Causes: Graves' disease (most common — autoimmune, TSH receptor antibodies stimulate thyroid — diffuse goitre, exophthalmos, pretibial myxoedema), toxic multinodular goitre, toxic adenoma, thyroiditis, excess iodine (amiodarone)",
      "CLINICAL FEATURES — 'everything SPEEDS UP': Weight loss despite increased appetite, heat intolerance, diaphoresis, tachycardia, palpitations (AF common), hypertension, increased bowel frequency, tremor (fine, resting), anxiety/irritability, insomnia, goitre, warm moist skin, exophthalmos (Graves'), pretibial myxoedema (Graves'), oligomenorrhoea",
      "GRAVES' DISEASE specific features: Exophthalmos (proptosis — autoimmune orbital infiltration), diffuse goitre, pretibial myxoedema (skin thickening over shins)",
      "LABORATORY FINDINGS: TSH SUPPRESSED (most sensitive indicator — even before T4 rises). Free T4 ELEVATED. Free T3 elevated. RAI uptake diffusely increased (Graves'), focal (adenoma)",
      "TREATMENT OPTIONS: Antithyroid drugs (PTU or methimazole/carbimazole — block synthesis), beta-blockers (propranolol — control symptoms — HR, tremor, anxiety — does NOT affect thyroid hormone production but blocks effects), radioactive iodine (I-131 — destroys thyroid tissue — first-line in many countries), thyroidectomy",
      "THYROID STORM: Life-threatening exacerbation of hyperthyroidism — mortality 10-20%. Precipitants: infection, surgery, radioactive iodine treatment, contrast dye, trauma, childbirth",
      "THYROID STORM FEATURES: FEVER (>38.5°C — often very high), TACHYCARDIA (often >140 — AF common), GI symptoms (nausea, vomiting, diarrhoea), CNS changes (agitation, psychosis, confusion, coma), cardiac failure",
      "THYROID STORM MANAGEMENT (SBPB mnemonic): PTU/methimazole (Synthesis blocked first), Betaine/beta-blockers (propranolol — control symptoms), Potassium iodide/Lugol's iodine (AFTER antithyroid drugs — blocks hormone RELEASE), corticosteroids (Betamethasone/hydrocortisone — blocks T4→T3 conversion, treats relative adrenal insufficiency), treat precipitant",
      "CRITICAL RULE: Give antithyroid drugs (PTU) BEFORE potassium iodide — iodide given alone temporarily stimulates hormone release (Jod-Basedow effect). PTU blocks synthesis first, then iodide blocks release",
    ],
  },
  {
    title: "Adrenal Disorders — Addison's Disease",
    icon: "⚗️",
    color: "purple",
    content: [
      "ADRENAL CORTEX produces: Glucocorticoids (cortisol — stress response, metabolism), Mineralocorticoids (aldosterone — sodium/water retention, potassium excretion), Sex steroids (androgens)",
      "ADDISON'S DISEASE (Primary Adrenal Insufficiency): Destruction of adrenal cortex → deficiency of ALL adrenocortical hormones (cortisol + aldosterone + androgens). Most common cause in developed countries: autoimmune. Worldwide: tuberculosis",
      "CLINICAL FEATURES of Addison's: HYPERPIGMENTATION (pathognomonic of PRIMARY adrenal insufficiency — excess ACTH/MSH from pituitary stimulation causes skin and mucous membrane pigmentation — buccal mucosa, scars, skin creases, palmar creases), fatigue, weakness, weight loss, nausea/vomiting, hypotension (orthostatic), salt craving (aldosterone deficiency → hyponatraemia), hyperkalaemia, hypoglycaemia, hyponatraemia",
      "LABORATORY: ACTH ELEVATED, cortisol LOW, hyponatraemia, hyperkalaemia, hypoglycaemia, eosinophilia, lymphocytosis. SHORT SYNACTHEN TEST (SST/cosyntropin stimulation test) — gold standard diagnosis: give synthetic ACTH, measure cortisol at 30 and 60 minutes. Failure to rise >550 nmol/L = adrenal insufficiency",
      "TREATMENT: Hydrocortisone (replaces cortisol — usually 15-20mg/day in divided doses, take in morning and afternoon), Fludrocortisone (replaces aldosterone — 50-150 mcg/day)",
      "SICK DAY RULES (DOUBLE OR TRIPLE the dose): Illness/fever/surgery/trauma → DOUBLE oral hydrocortisone dose for mild illness, TRIPLE for severe. Cannot take oral → give IM hydrocortisone. Failure to increase dose during illness → ADRENAL CRISIS",
      "MEDIC ALERT BRACELET: Essential for all Addison's patients — emergency services must know to give hydrocortisone",
      "HYPERPIGMENTATION is the KEY distinguishing feature between primary (Addison's) and secondary adrenal insufficiency. Secondary (pituitary failure) has LOW ACTH — no hyperpigmentation. Primary has HIGH ACTH → hyperpigmentation",
    ],
  },
  {
    title: "Addisonian Crisis — Adrenal Emergency",
    icon: "🚨",
    color: "red",
    content: [
      "ADRENAL CRISIS (Addisonian crisis): Life-threatening acute adrenal insufficiency — medical emergency. Mortality very high without immediate treatment",
      "PRECIPITANTS: Physiological stress (infection, surgery, trauma, illness) in undiagnosed Addison's or known Addison's without dose adjustment. ABRUPT WITHDRAWAL of long-term corticosteroid therapy (secondary adrenal suppression). Bilateral adrenal haemorrhage (anticoagulants, Waterhouse-Friderichsen syndrome from meningococcal septicaemia)",
      "CLINICAL FEATURES: PROFOUND HYPOTENSION (cardiovascular collapse, shock unresponsive to vasopressors), FEVER, SEVERE ABDOMINAL PAIN (can mimic acute abdomen), nausea/vomiting/diarrhoea, severe weakness, confusion/altered consciousness, hypoglycaemia, hyponatraemia, hyperkalaemia",
      "SUSPECT adrenal crisis in: Any patient with unexplained haemodynamic collapse despite fluid resuscitation + fever + electrolyte abnormalities (hyponatraemia + hyperkalaemia) + history of steroid use or adrenal disease",
      "EMERGENCY MANAGEMENT (do not wait for cortisol results to treat):",
      "HYDROCORTISONE 100mg IV IMMEDIATELY (or IM if no IV access) — then 50-100mg IV every 6-8 hours",
      "IV FLUIDS: Normal saline 1L rapidly (restores volume and provides sodium). Glucose-containing fluids for hypoglycaemia",
      "BLOOD GLUCOSE: Monitor and treat hypoglycaemia",
      "IDENTIFY AND TREAT PRECIPITANT: Most commonly infection — start antibiotics if sepsis suspected",
      "MONITOR: BP, HR, glucose, electrolytes, urine output. Do NOT use vasopressors alone — steroids are the definitive treatment. Vasopressors may be needed as bridge but will not work without cortisol replacement",
      "AFTER STABILISATION: Investigate for precipitant, transition to oral hydrocortisone, education about sick day rules and emergency injection kit",
    ],
  },
  {
    title: "Cushing's Syndrome",
    icon: "⚖️",
    color: "orange",
    content: [
      "CUSHING'S SYNDROME: Excess glucocorticoid exposure. Most common cause: EXOGENOUS (iatrogenic) — long-term corticosteroid use. Endogenous causes: Cushing's disease (pituitary ACTH-secreting adenoma — most common endogenous), ectopic ACTH (small cell lung cancer), adrenal adenoma/carcinoma",
      "CLINICAL FEATURES — mnemonic CUSHINGOID: Central obesity with peripheral wasting (buffalo hump, moon face, truncal obesity, thin limbs), Urinary frequency/Ulcers (peptic), Skin changes (purple striae, thinning skin, easy bruising, poor wound healing), Hyperglycaemia, Increased BP (fluid retention), Neuropsychiatric (depression, psychosis), Gonadal dysfunction (menstrual irregularity, impotence), Osteoporosis/Opportunistic infections, Immunosuppression, Depression",
      "PURPLE STRIAE: Wide (>1cm), violaceous (purple-red) stretch marks on abdomen, thighs, breasts — highly specific for Cushing's. Normal striae are pink/silver",
      "LABORATORY FINDINGS: Elevated urinary free cortisol (24-hour urine), elevated serum cortisol (loss of diurnal variation), elevated ACTH (Cushing's disease, ectopic) or suppressed ACTH (adrenal adenoma, exogenous steroids). Hyperglycaemia, hypokalaemia, hypertension, neutrophilia, lymphopaenia",
      "DIAGNOSTIC TESTS: 24-hour urinary free cortisol (screening), midnight salivary cortisol, overnight 1mg dexamethasone suppression test (normal = cortisol suppressed to <50 nmol/L). Failure to suppress = Cushing's",
      "TREATMENT: Exogenous — taper steroids. Pituitary adenoma — transsphenoidal surgery. Adrenal tumour — adrenalectomy. Ectopic ACTH — treat primary tumour. Medical (metyrapone, ketoconazole) — inhibit cortisol synthesis as bridge to surgery",
      "NURSING CARE: Fall prevention (muscle wasting, osteoporosis), infection prevention and monitoring (immunosuppression), blood glucose monitoring, BP control, skin care (fragile skin, poor wound healing), psychological support (body image changes, mood), medication education",
    ],
  },
  {
    title: "Phaeochromocytoma",
    icon: "⚡",
    color: "red",
    content: [
      "PHAEOCHROMOCYTOMA: Catecholamine-secreting tumour of the adrenal medulla (90%) or extra-adrenal chromaffin tissue (paraganglioma). Rare but potentially fatal if undiagnosed",
      "CATECHOLAMINES RELEASED: Adrenaline (epinephrine) and noradrenaline (norepinephrine) — massive sympathetic surge",
      "CLASSIC PRESENTATION — PAROXYSMAL SPELLS: Episodes of severe hypertension + headache + palpitations + diaphoresis ('the five P's' — Pressure, Pounding headache, Palpitations, Perspiration, Pallor). Spells can be triggered by surgery, anaesthesia, certain medications, physical exertion, changes in body position",
      "SUSTAINED vs PAROXYSMAL HYPERTENSION: 50% have sustained hypertension, 50% have paroxysmal. Paroxysmal episodic spells are highly characteristic",
      "DIAGNOSIS: 24-hour urine metanephrines/catecholamines (most sensitive screening test). Plasma free metanephrines (highly sensitive — preferred in some centres). CT/MRI adrenals to localise. MIBG scan for extra-adrenal disease",
      "MEDICATIONS TO AVOID: Beta-blockers (unopposed alpha stimulation causes severe hypertension — NEVER give beta-blocker alone in phaeochromocytoma), antidopaminergic drugs (metoclopramide, droperidol — can precipitate hypertensive crisis), opioid morphine (stimulates catecholamine release)",
      "TREATMENT: Surgical adrenalectomy (curative). Pre-operative preparation: ALPHA-BLOCKER FIRST (phenoxybenzamine or doxazosin for 10-14 days — blocks vasoconstriction → allows volume expansion). BETA-BLOCKER ADDED AFTER ADEQUATE ALPHA BLOCKADE (to control HR — never first)",
      "HYPERTENSIVE CRISIS from phaeochromocytoma: IV phentolamine (alpha blocker) or sodium nitroprusside. Avoid beta-blockers alone",
      "INTRAOPERATIVE RISK: Manipulation of tumour releases massive catecholamine surge → severe hypertension → cardiac arrhythmias. Anaesthesia team must be prepared. ICU post-op",
      "10% RULE (classic but outdated): 10% malignant, 10% bilateral, 10% extra-adrenal, 10% in children, 10% familial (MEN2A, MEN2B, VHL, NF1, SDH mutations)",
    ],
  },
  {
    title: "SIADH and Diabetes Insipidus",
    icon: "💧",
    color: "blue",
    content: [
      "ADH (Antidiuretic Hormone/Vasopressin): Released from posterior pituitary in response to hyperosmolality or hypovolaemia → increases water reabsorption in collecting ducts → concentrates urine, retains water",
      "SIADH (Syndrome of Inappropriate ADH secretion): Excess ADH → excess water retention → DILUTIONAL HYPONATRAEMIA. Urine is CONCENTRATED despite low serum sodium (paradox — the kidneys cannot excrete free water)",
      "SIADH CAUSES: CNS disorders (stroke, TBI, tumour, meningitis, SAH), pulmonary causes (pneumonia, TB, small cell lung cancer — ectopic ADH), medications (SSRIs, TCAs, carbamazepine, oxcarbazepine, cyclophosphamide, NSAIDs, PPIs), surgery/pain/nausea, hypothyroidism, adrenal insufficiency",
      "SIADH DIAGNOSTIC CRITERIA: Hyponatraemia (Na <135), serum osmolality LOW (<275), urine osmolality HIGH (>100 — inappropriately concentrated), urine sodium HIGH (>40 mEq/L — kidneys still excreting sodium), normal or elevated volume status, NORMAL renal/thyroid/adrenal function",
      "SIADH TREATMENT: FLUID RESTRICTION (800-1000 mL/day) — most common. Hypertonic saline (3% NaCl) for severe symptomatic hyponatraemia. Tolvaptan (vasopressin receptor antagonist — aquaretic) for chronic SIADH. Treat underlying cause",
      "DIABETES INSIPIDUS (DI): Insufficient ADH (Central DI — pituitary/hypothalamic damage) OR renal resistance to ADH (Nephrogenic DI — lithium, hypercalcaemia, renal disease). Result: MASSIVE DILUTE URINE PRODUCTION",
      "DI FEATURES: Polyuria (3-20+ L/day), polydipsia, dilute urine (specific gravity <1.005, osmolality <300 mOsm/kg), serum sodium HIGH (hypernatraemia) if patient cannot keep up with losses, serum osmolality HIGH",
      "DI TREATMENT: Central DI — DESMOPRESSIN (synthetic ADH — intranasal, oral, IV/SC). Nephrogenic DI — treat cause, thiazide diuretics (paradoxically reduce urine output), NSAIDs, low sodium diet",
      "WATER DEPRIVATION TEST: Differentiates SIADH, DI and psychogenic polydipsia — supervised water restriction then desmopressin administration",
    ],
  },
];

const mnemonics = [
  {
    title: "DKA vs HHS — Key Differences",
    acronym: "DKA HHS",
    breakdown: ["DKA: T1DM, glucose 11-33, KETONES present, pH <7.3, rapid onset, younger", "HHS: T2DM, glucose >33, NO ketones, pH >7.3, gradual onset, elderly"],
    memory: "DKA = Definitely Ketones Acidic. HHS = Hugely High Sugar. The KETONES distinguish them — and BOTH are life-threatening with different management priorities!",
    color: "red",
  },
  {
    title: "Addison's vs Cushing's",
    acronym: "ADDCUSH",
    breakdown: ["Addison's: hypOtension, hypOnatraemia, hypErkalemia, hypOpigmentation... WAIT — hyperPIGMENTATION!", "Cushing's: hyperTENSION, hyperGLYCAEMIA, hyperNATRAEMIA, purple STRIAE"],
    memory: "ADDISON'S = everything LOW except pigmentation (HIGH ACTH → hyperpigmentation). CUSHING'S = everything HIGH (cortisol excess). The pigmentation in Addison's is the diagnostic CLUE!",
    color: "purple",
  },
  {
    title: "Thyroid Storm Treatment — SBPB",
    acronym: "SBPB",
    breakdown: ["Synthesis blocked (PTU/methimazole FIRST)", "Beta-blocker (propranolol — control symptoms)", "Potassium iodide (AFTER PTU — blocks release)", "Betamethasone/steroids (blocks T4→T3 conversion)"],
    memory: "SBPB — Synthesis first, Beta-blocker, Potassium iodide second, Betamethasone. PTU MUST come before iodide — iodide alone causes Jod-Basedow (more hormone release)!",
    color: "orange",
  },
  {
    title: "Autonomic Dysreflexia vs Neurogenic Shock",
    acronym: "ADNS",
    breakdown: ["AD: HYPERtension + bradycardia, SCI ≥T6, sit up + remove trigger", "NS: HYPOtension + bradycardia, SCI cervical/high thoracic, fluids + vasopressors"],
    memory: "AD = Autonomous DANGER (hypertensive). NS = Nobody Shock (hypotensive). Both have bradycardia but OPPOSITE BP! Know which needs fluid and which needs sitting up!",
    color: "red",
  },
];

const alerts = [
  { text: "DKA: DO NOT start insulin until potassium >3.5 mEq/L — insulin drives K+ into cells and can cause fatal hypokalaemia. Potassium first!", severity: "high" },
  { text: "DKA RESOLUTION: Resolved when KETONES clear (pH >7.3, bicarbonate >15) — NOT when glucose normalises. Continue insulin infusion until ketoacidosis resolves!", severity: "high" },
  { text: "MYXOEDEMA COMA: Give HYDROCORTISONE before or with thyroid hormone — adrenal insufficiency coexists. Thyroid hormone without steroids precipitates adrenal crisis!", severity: "high" },
  { text: "THYROID STORM: Give PTU BEFORE potassium iodide — iodide alone stimulates hormone release (Jod-Basedow). Block synthesis FIRST, then block release!", severity: "high" },
  { text: "ADRENAL CRISIS: Give hydrocortisone 100mg IV IMMEDIATELY — do not wait for cortisol results. This is a time-critical emergency where treatment delay = death!", severity: "high" },
  { text: "PHAEOCHROMOCYTOMA: NEVER give beta-blocker ALONE — unopposed alpha stimulation causes catastrophic hypertensive crisis. Alpha blocker MUST be given first!", severity: "high" },
  { text: "HHS: Correct SLOWLY over 48-72 hours — rapid correction causes cerebral oedema and osmotic demyelination syndrome. Target osmolality reduction 3-8 mOsm/kg/hour!", severity: "high" },
  { text: "ADDISON'S: Hyperpigmentation is the KEY feature of PRIMARY adrenal insufficiency (high ACTH). NO hyperpigmentation in secondary adrenal insufficiency (low ACTH)!", severity: "medium" },
  { text: "SIADH: Urine sodium is HIGH (>40 mEq/L) and urine is CONCENTRATED despite LOW serum sodium — this paradox is the diagnostic clue!", severity: "medium" },
  { text: "DIABETES INSIPIDUS: Urine is DILUTE (SG <1.005) and MASSIVE volumes (3-20L/day) despite HIGH serum sodium. Give desmopressin for central DI!", severity: "medium" },
  { text: "CUSHING'S purple STRIAE are WIDE (>1cm) and VIOLACEOUS (purple-red) — distinguishes them from normal pink/silver stretch marks!", severity: "medium" },
  { text: "SICK DAY RULES for Addison's: DOUBLE the hydrocortisone dose for mild illness, TRIPLE for severe. NEVER skip doses when sick — adrenal crisis risk!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A patient with type 1 diabetes presents to the emergency department with blood glucose 28 mmol/L, blood ketones 4.2 mmol/L, venous pH 7.22 and bicarbonate 12 mmol/L. Serum potassium is 3.0 mEq/L. The physician orders an IV insulin infusion to begin immediately. What is the nurse's MOST important concern before starting the insulin infusion?",
    options: [
      "Begin insulin immediately — hyperglycaemia is the priority and potassium can be monitored",
      "The potassium of 3.0 mEq/L is below the safe threshold — insulin must NOT be started until potassium is replaced to >3.5 mEq/L. Begin IV potassium replacement first",
      "Confirm blood glucose with a laboratory sample before starting insulin — bedside glucometers are inaccurate at high levels",
      "Administer IV bicarbonate first to correct the acidosis before starting insulin",
    ],
    correct: 1,
    explanation: "POTASSIUM MANAGEMENT in DKA is critical and potentially life-saving. Serum potassium of 3.0 mEq/L is BELOW the safe threshold (>3.5 mEq/L) for insulin initiation. Insulin activates the Na/K-ATPase pump, driving potassium from extracellular to intracellular compartments. In a patient already hypokalaemic (K 3.0), insulin will cause the serum potassium to drop further — potentially to life-threatening levels causing fatal cardiac arrhythmias (VT/VF). IV potassium replacement must begin FIRST and the potassium must reach ≥3.5 mEq/L before insulin is started. This is one of the highest-priority DKA nursing safety points. Bicarbonate is generally not indicated unless pH <6.9 and is not the immediate priority here.",
    wrongExplanations: [
      "WRONG: Starting insulin immediately with a potassium of 3.0 mEq/L is dangerous. Insulin will drive potassium further down, potentially causing fatal cardiac arrhythmias. Potassium MUST be repleted to >3.5 before insulin.",
      "",
      "WRONG: Laboratory confirmation is reasonable for very high BGLs but is not the MOST IMPORTANT concern. The hypokalaemia with a potassium of 3.0 represents an immediate life-threatening contraindication to insulin initiation.",
      "WRONG: IV bicarbonate is generally NOT recommended in DKA unless pH <6.9. At pH 7.22, bicarbonate is not indicated and carries risks (worsened hypokalaemia, CSF acidosis, osmotic shift). Not the priority here.",
    ],
  },
  {
    level: "Knowledge",
    question: "A nurse is assessing a 58-year-old woman with known Addison's disease who is admitted with pneumonia. She takes hydrocortisone 15mg in the morning and 5mg in the afternoon. She is febrile (38.9°C) and appears unwell. Her blood pressure is 88/56 and she is confused. Serum sodium is 128 mEq/L and potassium is 5.8 mEq/L. What is the nurse's MOST urgent priority?",
    options: [
      "Administer IV antibiotics immediately — the pneumonia is causing her haemodynamic instability",
      "Notify the physician urgently — this patient is in adrenal crisis. Prepare IV hydrocortisone 100mg for immediate administration and initiate IV fluid resuscitation with normal saline",
      "Administer her usual oral hydrocortisone dose — she missed her afternoon dose",
      "Give IV sodium chloride to correct the hyponatraemia before treating the infection",
    ],
    correct: 1,
    explanation: "This patient has ADRENAL CRISIS precipitated by the physiological stress of pneumonia without adequate steroid dose escalation. EVIDENCE: Addison's disease (known diagnosis) + physiological stress (pneumonia, fever) + haemodynamic collapse (BP 88/56) + confusion + hyponatraemia (128) + hyperkalaemia (5.8) — the classic electrolyte pattern of adrenal insufficiency (cortisol deficiency → aldosterone deficiency → cannot retain sodium or excrete potassium). IMMEDIATE ACTION: IV hydrocortisone 100mg IMMEDIATELY (adrenal crisis treatment — this is the definitive treatment, not a supportive measure), IV normal saline (restores volume and provides sodium), treat pneumonia (antibiotics after blood cultures). The oral dose is completely inadequate in adrenal crisis — the patient cannot absorb oral medications reliably when in shock and oral doses cannot achieve the emergency replacement needed.",
    wrongExplanations: [
      "WRONG: While antibiotics are needed, administering antibiotics without addressing the adrenal crisis leaves the definitive treatment unaddressed. The cardiovascular collapse in adrenal crisis will NOT respond to antibiotics or vasopressors alone — cortisol replacement is essential.",
      "",
      "WRONG: Oral hydrocortisone is completely inadequate in adrenal crisis. The patient has cardiovascular collapse, may have impaired GI absorption, and the dose is insufficient. IV hydrocortisone 100mg is required immediately.",
      "WRONG: IV saline is part of management but is secondary to the immediate need for IV hydrocortisone. Treating hyponatraemia without addressing cortisol deficiency does not correct the underlying cause of the electrolyte abnormality.",
    ],
  },
  {
    level: "Application",
    question: "A 45-year-old man presents with a 2-week history of episodic severe headaches, palpitations, profuse sweating and pallor. His blood pressure during an episode measured by his GP was 210/118 mmHg, then normalised between episodes. He has been started on atenolol (a beta-blocker) by his GP for 'hypertension.' The patient presents to the emergency department in severe hypertensive crisis (BP 234/132) and the nurse notes he took his atenolol this morning. What is the MOST significant concern with the current management?",
    options: [
      "The atenolol dose is too low — a higher dose is needed to control the hypertension",
      "Beta-blocker alone in suspected phaeochromocytoma is DANGEROUS — unopposed alpha-adrenergic stimulation from the catecholamine surge causes severe vasoconstriction and worsening hypertension. Alpha-blocker must be added first",
      "The patient needs immediate coronary angiography — this BP causes coronary ischaemia",
      "Atenolol is the correct first-line treatment — it should be continued and augmented with calcium channel blocker",
    ],
    correct: 1,
    explanation: "The clinical picture is PHAEOCHROMOCYTOMA: Episodic severe hypertension + headache + palpitations + diaphoresis + pallor = the classic paroxysmal presentation. The CRITICAL DANGER: Beta-blocker (atenolol) alone in phaeochromocytoma causes UNOPPOSED ALPHA STIMULATION. Catecholamines (adrenaline/noradrenaline) act on both alpha and beta receptors. Beta-blockade blocks beta receptors (vasodilatory in peripheral vessels, cardiac) leaving alpha receptors unopposed → alpha stimulation → severe peripheral vasoconstriction → worsening hypertension. This can cause catastrophic hypertensive crisis, stroke and cardiac failure. The worsening BP (234/132) on atenolol is consistent with this mechanism. CORRECT MANAGEMENT: ALPHA BLOCKER FIRST (phenoxybenzamine or phentolamine — blocks vasoconstriction, allows volume expansion). THEN beta-blocker can be added to control HR. This sequence is non-negotiable in phaeochromocytoma.",
    wrongExplanations: [
      "WRONG: A higher beta-blocker dose would worsen unopposed alpha stimulation and make the hypertensive crisis worse, not better. Beta-blocker alone is contraindicated in phaeochromocytoma.",
      "",
      "WRONG: Coronary angiography is not the immediate priority. The cause of the hypertensive crisis (phaeochromocytoma + unopposed alpha stimulation from beta-blocker) must be addressed with an alpha blocker.",
      "WRONG: Atenolol is NOT the correct first-line treatment for phaeochromocytoma — alpha-blocker is first. Adding a calcium channel blocker to a beta-blocker while the alpha receptors are unopposed does not solve the fundamental problem.",
    ],
  },
  {
    level: "Application",
    question: "A 72-year-old woman with type 2 diabetes on metformin and glipizide presents with blood glucose of 48 mmol/L, serum osmolality of 345 mOsm/kg, pH 7.38, bicarbonate 23 mmol/L and NO ketones. She has been confused for 3 days and has been drinking more than usual. Her family reports she stopped eating 4 days ago after developing a UTI. What is the nurse's PRIORITY concern regarding fluid replacement?",
    options: [
      "Administer 0.9% normal saline 1L over 1 hour then reassess — same as DKA management",
      "This patient has HHS — correct fluids slowly over 48-72 hours. Rapid correction risks cerebral oedema and osmotic demyelination syndrome. Calculate free water deficit and replace gradually",
      "Administer hypotonic 0.45% saline immediately to address the hyperosmolality",
      "Begin immediate high-dose insulin infusion — the glucose of 48 requires urgent reduction",
    ],
    correct: 1,
    explanation: "This patient has HYPEROSMOLAR HYPERGLYCAEMIC STATE (HHS) — no ketones, pH 7.38 (normal), glucose 48 mmol/L, osmolality 345 mOsm/kg. The KEY PRINCIPLE of HHS management: CORRECT SLOWLY over 48-72 hours. The extreme hyperosmolality has caused the brain to adapt (generating osmolytes to maintain intracellular volume). Rapid correction of osmolality causes water to shift rapidly into brain cells → cerebral oedema → brain herniation. Additionally, rapid sodium normalisation risks osmotic demyelination syndrome (central pontine myelinolysis). Target osmolality reduction: 3-8 mOsm/kg/hour. Start with isotonic saline (0.9%) initially for circulatory resuscitation, then guided by electrolytes. Insulin at lower doses than DKA (0.05 units/kg/hour) — and often delayed until fluids have begun as fluids alone lower glucose significantly in HHS.",
    wrongExplanations: [
      "WRONG: HHS requires SLOWER fluid replacement than DKA. The same aggressive DKA protocol applied to HHS risks cerebral oedema from rapid osmolality correction. HHS patients are older, more fragile and have more severe dehydration over a longer period.",
      "",
      "WRONG: Hypotonic 0.45% saline may be appropriate in later stages but should not be the immediate first fluid — isotonic saline for initial resuscitation is preferred to avoid too-rapid tonicity change. Jumping straight to hypotonic fluid risks over-rapid correction.",
      "WRONG: High-dose insulin infusion in HHS risks hypoglycaemia and rapid glucose reduction without adequate fluid replacement first. In HHS, fluids often lower glucose significantly — insulin at low dose (0.05 units/kg/hour) and often only after fluid resuscitation is started.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a patient who underwent transsphenoidal pituitary surgery 8 hours ago for a prolactinoma. The nurse notes the patient has had urine output of 650mL/hour for the past 2 hours (total 1300mL). Urine is very pale, almost clear. Serum sodium is 148 mEq/L and serum osmolality is 302 mOsm/kg. What is the nurse's MOST likely assessment and appropriate action?",
    options: [
      "The patient is well-hydrated — encourage continued oral fluid intake",
      "The patient has post-operative Syndrome of Inappropriate ADH (SIADH) — restrict fluids to 1L/day",
      "The patient likely has Central Diabetes Insipidus from surgical disruption of the posterior pituitary or stalk — notify physician urgently, monitor electrolytes hourly, prepare desmopressin",
      "The patient has stress hyperglycaemia — check blood glucose and administer insulin",
    ],
    correct: 2,
    explanation: "This is CENTRAL DIABETES INSIPIDUS — a recognised complication of pituitary surgery from disruption of the ADH-producing cells or stalk. EVIDENCE: Massive urine output (650 mL/hour = polyuria), very dilute urine (pale/almost clear), hypernatraemia (Na 148 — sodium rising as free water is lost in urine without ADH to retain it), elevated serum osmolality (302 — hypersmolar from water loss). In DI: the kidneys produce massive amounts of very dilute urine because ADH is absent — water cannot be reabsorbed. This causes hypernatraemia and hypersmolality as free water is lost. MANAGEMENT: Notify physician urgently, hourly electrolytes (sodium rising rapidly), urine specific gravity (will be <1.005), DESMOPRESSIN (synthetic ADH) — IV/SC/intranasal, IV fluid replacement to compensate losses (may need significant volume). SIADH is the opposite — concentrated urine, hyponatraemia, fluid restriction. This patient's findings are the opposite.",
    wrongExplanations: [
      "WRONG: 650 mL/hour is NOT normal hydration. This is massive polyuria. A urine output of 650 mL/hour (nearly 16L/day) represents a serious pathological process requiring immediate investigation and treatment.",
      "WRONG: SIADH presents with CONCENTRATED urine, LOW urine output (or normal), HYPONATRAEMIA and LOW serum osmolality. This patient has the exact opposite: dilute urine, massive output, HYPERnatraemia and HIGH serum osmolality = Diabetes Insipidus.",
      "",
      "WRONG: Stress hyperglycaemia does not cause massive polyuria with very dilute urine and hypernatraemia. Hyperglycaemia causes osmotic diuresis but the urine would be glucose-containing and not as severely dilute. Check glucose as part of assessment but DI is the primary diagnosis.",
    ],
  },
  {
    level: "Advanced",
    question: "A 38-year-old woman with type 1 diabetes presents to the ED confused with blood glucose 22 mmol/L, blood ketones 5.8 mmol/L, pH 7.15, bicarbonate 8 mmol/L, sodium 132 mEq/L, potassium 5.2 mEq/L, chloride 98 mEq/L. She is breathing rapidly at 32 breaths/min. Calculate the anion gap and explain its significance in this presentation.",
    options: [
      "Anion gap = 26 mEq/L — elevated (normal 8-12). Indicates high anion gap metabolic acidosis from ketone accumulation. The elevated potassium suggests insulin has NOT been given yet",
      "Anion gap = 18 mEq/L — normal. The acidosis is from hyperchloraemia from saline treatment",
      "Anion gap cannot be calculated without phosphate and albumin levels",
      "Anion gap = 26 mEq/L — but this is normal for DKA and does not require specific intervention",
    ],
    correct: 0,
    explanation: "ANION GAP CALCULATION: Na − (Cl + HCO3) = 132 − (98 + 8) = 132 − 106 = 26 mEq/L. Normal anion gap = 8-12 mEq/L. This patient has a WIDE/HIGH ANION GAP METABOLIC ACIDOSIS (pH 7.15, HCO3 8, AG 26). The elevated anion gap represents UNMEASURED ANIONS — in DKA, these are KETONES (beta-hydroxybutyrate and acetoacetate). Blood ketones of 5.8 mmol/L confirms severe ketoacidosis. CLINICAL SIGNIFICANCE: The potassium of 5.2 mEq/L appears safe, BUT this is PSEUDOHYPERKALEMIA — insulin deficiency + acidosis shift potassium OUT of cells. As insulin is given and acidosis corrects, potassium will move INTO cells and serum potassium will DROP precipitously. Monitor potassium very closely once insulin is started — this patient will likely become hypokalaemic. The bicarbonate of 8 indicates severe acidosis requiring close monitoring of resolution. The rapid breathing (RR 32) is Kussmaul respiration — compensatory respiratory alkalosis to partially correct the metabolic acidosis.",
    wrongExplanations: [
      "",
      "WRONG: Anion gap = Na − (Cl + HCO3) = 132 − (98 + 8) = 26 — NOT 18. An anion gap of 18 would suggest less severe ketoacidosis than is actually present. Recalculate carefully.",
      "WRONG: Albumin correction may be needed for chronic disease but the basic anion gap can be calculated from the available values. Na, Cl and HCO3 are all provided — anion gap = 132 − (98 + 8) = 26.",
      "WRONG: Anion gap of 26 is significantly ELEVATED (normal 8-12 mEq/L) — this represents severe high anion gap metabolic acidosis requiring urgent treatment. Describing it as 'normal for DKA' minimises a critical finding.",
    ],
  },
  {
    level: "Advanced",
    question: "A 55-year-old patient with small cell lung cancer is admitted for chemotherapy. On day 3, the nurse notices the patient is confused, with serum sodium of 121 mEq/L (was 138 three days ago). Urine sodium is 62 mEq/L, urine osmolality is 480 mOsm/kg and serum osmolality is 258 mOsm/kg. The patient appears euvolaemic. The physician orders 3% hypertonic saline. What is the nurse's MOST important consideration when administering hypertonic saline?",
    options: [
      "Administer hypertonic saline as fast as possible — sodium of 121 is life-threatening and requires urgent correction",
      "Administer 3% hypertonic saline via a central or large bore peripheral IV. Correct sodium NO FASTER than 8-10 mEq/L in 24 hours and 18 mEq/L in 48 hours to prevent osmotic demyelination syndrome (ODS/central pontine myelinolysis)",
      "Oral sodium supplementation is safer than IV hypertonic saline — give sodium tablets first",
      "Administer 3% saline plus furosemide — the combination corrects sodium faster and is safer",
    ],
    correct: 1,
    explanation: "This patient has SIADH from small cell lung cancer (ectopic ADH secretion is classic with SCLC). Diagnostic evidence: Hyponatraemia (121), low serum osmolality (258 — dilutional), high urine osmolality (480 — inappropriately concentrated), high urine sodium (62 — kidneys excreting sodium), euvolaemic state. SODIUM CORRECTION RATE is the critical safety concern: Correcting chronic hyponatraemia TOO RAPIDLY causes OSMOTIC DEMYELINATION SYNDROME (ODS) — previously central pontine myelinolysis. The brain adapts to chronic hyponatraemia by losing osmolytes. Rapid correction causes osmotic shifts — myelin sheaths in the pons are destroyed → locked-in syndrome, paraplegia, death. MAXIMUM CORRECTION RATE: 8-10 mEq/L in first 24 hours, 18 mEq/L in 48 hours. 3% saline must be administered carefully — hourly sodium monitoring, calculate correction rate, be prepared to stop/slow if rate too fast. Central line preferred for concentrated solutions. Symptoms of ODS: dysarthria, dysphagia, quadriplegia, locked-in syndrome, coma — may appear 2-6 days after correction.",
    wrongExplanations: [
      "WRONG: Rapid correction of chronic hyponatraemia causes osmotic demyelination syndrome — a potentially fatal and irreversible neurological complication. The rate of correction is as important as the total correction. Maximum 8-10 mEq/L/24 hours.",
      "",
      "WRONG: Oral sodium supplementation cannot achieve the correction rate needed for symptomatic hyponatraemia (Na 121, confused). IV 3% saline is required, but with careful rate control.",
      "WRONG: Furosemide plus hypertonic saline is used for hypervolaemic hyponatraemia (e.g., heart failure). This patient is euvolaemic — furosemide would cause further sodium loss and is not indicated.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a 62-year-old man on long-term prednisolone 20mg daily for rheumatoid arthritis who presents for an elective total knee replacement. Pre-operatively, his cortisol level is 68 nmol/L (normal 138-690 nmol/L at 8am). The anaesthetist is planning to use the patient's 'usual dose' of prednisolone on the day of surgery. The nurse reviews this plan. What is the MOST important concern?",
    options: [
      "The plan is correct — usual dose should be continued on the day of surgery",
      "The surgery should be cancelled — the low cortisol indicates the patient is unfit for elective surgery",
      "The patient has HPA axis suppression from long-term steroids (cortisol 68 = severely suppressed). On the day of surgery and post-operatively, this patient requires a STRESS DOSE of corticosteroids (hydrocortisone 50-100mg IV at induction then 25-50mg IV every 8 hours) — not just usual dose. Failure to provide stress dosing may cause perioperative adrenal crisis",
      "The prednisolone should be stopped 24 hours before surgery to allow cortisol levels to rise naturally",
    ],
    correct: 2,
    explanation: "This patient has HPA AXIS SUPPRESSION from long-term prednisolone — cortisol 68 nmol/L is severely suppressed (normal morning cortisol 138-690 nmol/L). The physiological stress of major surgery (anaesthesia + surgical trauma) normally triggers a dramatic cortisol surge (5-10 times normal output). This patient CANNOT mount this response — their HPA axis is suppressed. PERIOPERATIVE STRESS DOSING is required: Hydrocortisone 50-100mg IV at induction of anaesthesia, then 25-50mg IV every 8 hours for 24-48 hours post-operatively, tapering back to usual dose as the patient recovers. Failure to provide stress dosing can cause PERIOPERATIVE ADRENAL CRISIS: refractory hypotension, cardiovascular collapse, hypoglycaemia intraoperatively — potentially fatal. Continuing 'usual dose' prednisolone is inadequate for the stress of surgery. Stopping steroids pre-operatively (Option D) would be dangerous — the patient needs MORE steroids, not fewer, during surgical stress.",
    wrongExplanations: [
      "WRONG: Usual prednisolone dose is completely inadequate for the cortisol demand of major surgery. The patient needs 5-10 times normal output during surgical stress — their suppressed HPA cannot provide this. Stress dosing is mandatory.",
      "WRONG: The low cortisol is an expected finding in HPA suppression from long-term steroids — it does not by itself mandate cancellation, but it mandates proper perioperative stress dosing before proceeding.",
      "",
      "WRONG: Stopping steroids before surgery would be dangerous — the patient's adrenal glands cannot respond to the sudden steroid withdrawal combined with surgical stress. More steroids are needed, not fewer.",
    ],
  },
  {
    level: "Advanced",
    question: "A 28-year-old woman is admitted in thyroid storm following delivery of twins at 36 weeks gestation. Temperature is 40.2°C, HR 168 bpm with atrial fibrillation, BP 162/98, she is agitated and vomiting. She was not previously known to have thyroid disease. TSH is undetectable and free T4 is markedly elevated. The neonatal team asks about breastfeeding. The endocrinologist prescribes propylthiouracil (PTU), propranolol, hydrocortisone and Lugol's iodine. In what ORDER should these medications be administered and what is the breastfeeding consideration?",
    options: [
      "Give Lugol's iodine first as it is the most potent and acts fastest. Breastfeeding is contraindicated with all thyroid medications",
      "Give PTU first, then propranolol, then hydrocortisone, then Lugol's iodine (at least 1 hour after PTU). Breastfeeding: PTU is preferred over methimazole in breastfeeding mothers as it is less concentrated in breast milk",
      "Give propranolol first to control the tachycardia and AF, then the other medications",
      "Give all medications simultaneously — thyroid storm requires immediate comprehensive treatment without delay for ordering",
    ],
    correct: 1,
    explanation: "THYROID STORM TREATMENT ORDER is critical: PTU FIRST — blocks new thyroid hormone SYNTHESIS (takes 1-2 hours to act). PROPRANOLOL — controls tachycardia, palpitations, tremor, blocks peripheral T4→T3 conversion. HYDROCORTISONE — blocks T4→T3 conversion, treats relative adrenal insufficiency in hyperthyroidism. LUGOL'S IODINE — at LEAST 1 HOUR after PTU — blocks thyroid hormone RELEASE (Wolff-Chaikoff effect). If given BEFORE PTU, iodide load temporarily STIMULATES hormone synthesis (Jod-Basedow effect) making thyroid storm worse. BREASTFEEDING: PTU (propylthiouracil) is preferred over methimazole/carbimazole in breastfeeding because PTU is 99% protein-bound and does not concentrate significantly in breast milk. Methimazole concentrates in breast milk at higher levels. PTU is compatible with breastfeeding at standard doses with infant thyroid monitoring. This is a clinically important and commonly tested distinction.",
    wrongExplanations: [
      "WRONG: Lugol's iodine must NEVER be given first in thyroid storm — iodide before antithyroid drugs causes Jod-Basedow effect (temporary stimulation of hormone release), worsening the storm. PTU blocks synthesis first, THEN iodide blocks release. Breastfeeding is not automatically contraindicated — PTU is specifically compatible.",
      "",
      "WRONG: Propranolol first for tachycardia makes clinical sense but the SEQUENCE priority in thyroid storm is antithyroid drug (PTU) first. Propranolol does not address the source of excess hormone. PTU is the foundational first treatment.",
      "WRONG: While all medications are needed urgently, the ORDER matters because iodide given before PTU worsens the storm (Jod-Basedow). The sequence PTU → propranolol → hydrocortisone → iodide (1 hour after PTU) is clinically established.",
    ],
  },
  {
    level: "Advanced",
    question: "A 19-year-old man with type 1 diabetes presents to the emergency department brought by friends following a party. He is unconscious, GCS 8. His blood glucose on arrival is 1.8 mmol/L (32 mg/dL). Friends report he drank 'a lot of alcohol' but did not eat. He received his usual insulin dose before the party. The nurse prepares to administer IV dextrose. A friend states 'He took his glargine (long-acting insulin) before the party 8 hours ago and also had some insulin for drinks.' What additional consideration is MOST important in managing this patient's hypoglycaemia?",
    options: [
      "Administer D50 25mL IV, recheck in 15 minutes, discharge when glucose normalises",
      "The duration of hypoglycaemia risk is prolonged — long-acting insulin (glargine) is still active, alcohol suppresses gluconeogenesis and inhibits counter-regulatory response. After initial glucose correction, monitor for minimum 4-6 hours with continuous glucose monitoring and carbohydrate supplementation",
      "Administer glucagon 1mg IM — it is safer than IV dextrose in an unconscious patient",
      "The patient needs immediate CT head — hypoglycaemia of this severity causes brain damage",
    ],
    correct: 1,
    explanation: "This patient has HYPOGLYCAEMIA with MULTIPLE PROLONGING FACTORS requiring extended monitoring: ALCOHOL: Suppresses hepatic gluconeogenesis (the liver cannot make new glucose when metabolising alcohol), blunts counter-regulatory hormone response (glucagon and adrenaline are less effective), impairs awareness of hypoglycaemic symptoms. LONG-ACTING INSULIN (GLARGINE): Has a duration of action of 18-24+ hours — it continues to work for many more hours. After treating the acute hypoglycaemia, the insulin keeps driving glucose down. RAPID-ACTING INSULIN for 'drinks': Also contributes to ongoing glucose lowering. COMBINED EFFECT: After IV dextrose corrects the immediate hypoglycaemia, these ongoing factors mean the patient is at high risk for recurrent hypoglycaemia over the next 4-8 hours. Management: IV dextrose (D50 or D10 infusion), CONTINUOUS GLUCOSE INFUSION (D10 at 100-150 mL/hour), monitoring every 15-30 minutes initially, observe for minimum 4-6 hours, thiamine before glucose (alcohol-related concern), neurology assessment. GLUCAGON is INEFFECTIVE when alcohol has depleted hepatic glycogen — IV dextrose is the correct treatment in alcohol-related hypoglycaemia.",
    wrongExplanations: [
      "WRONG: Discharging when glucose normalises is dangerous — the ongoing effects of long-acting insulin and alcohol-suppressed gluconeogenesis mean the patient will become hypoglycaemic again after the dextrose bolus. Extended monitoring with glucose infusion is required.",
      "",
      "WRONG: Glucagon is INEFFECTIVE in alcohol-related hypoglycaemia — alcohol depletes hepatic glycogen stores that glucagon would normally mobilise. In this setting, IV dextrose is the only reliable treatment.",
      "WRONG: While prolonged severe hypoglycaemia can cause brain damage, immediate CT head is not the priority. Correcting hypoglycaemia is the first action — glucose correction will resolve the neurological impairment if hypoglycaemia is the cause. CT can be performed after glucose normalises if neurological status does not improve.",
    ],
  },
];

const clinicalPearls = [
  "The most dangerous moment in DKA management is not at presentation — it is 4-8 hours into treatment when glucose is falling, the insulin infusion continues and the potassium plummets. Monitor potassium hourly. Replace it aggressively. A DKA patient who arrests from hypokalaemia has been failed by their nurse.",
  "DKA resolution is defined by KETONE clearance (pH >7.3, bicarbonate >15, ketones <0.6) — NOT glucose normalisation. The most common DKA management error is stopping the insulin infusion when glucose normalises but ketoacidosis persists. The insulin must continue (with dextrose added to the IVF) until the ketones clear.",
  "Hyperpigmentation is Addison's disease until proven otherwise. A patient with fatigue, weight loss, hypotension and dark skin — check the buccal mucosa, palmar creases and surgical scars. The darkening of areas not exposed to sun is pathognomonic of elevated ACTH/MSH. Missing Addison's disease in a physiological stress situation can be lethal.",
  "Thyroid storm has a kill order: PTU before iodide — always. The Jod-Basedow effect from giving iodide first is clinical malpractice. Block synthesis first with PTU, wait an hour, then block release with iodide. Know this sequence cold.",
  "In SIADH, the urine is inappropriately concentrated despite hyponatraemia — the kidneys are holding onto water they should be excreting. The correction of hyponatraemia requires the same caution as any other: no more than 8-10 mEq/L in 24 hours. Central pontine myelinolysis from over-rapid correction causes a locked-in syndrome more devastating than the hyponatraemia itself.",
  "Phaeochromocytoma is rare but its surgical management is where lives are saved or lost — and it starts with nursing care. Never give a beta-blocker alone to a patient with suspected phaeochromocytoma. The one time this error is made is the one time the patient may die intraoperatively from a catecholamine surge with no alpha blockade.",
  "The perioperative adrenal crisis is almost entirely preventable with proper stress dosing. Every nurse who administers a patient's 'usual dose' of corticosteroid on the morning of major surgery without checking whether stress dosing has been ordered should ask: can this patient's adrenal glands mount the cortisol response needed for surgery? If they cannot, hydrocortisone is the difference between a routine operation and a cardiovascular collapse on the table.",
];

export default function EndocrinePage() {
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
            <h1 className="font-black text-base text-gray-900">⚗️ Endocrine</h1>
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
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 mb-6">
              <p className="text-orange-700 text-sm leading-relaxed font-medium">
                ⚗️ Endocrine is high yield on NCLEX. Master DKA vs HHS management, thyroid storm treatment order, adrenal crisis and the critical differences between endocrine emergencies!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most critical endocrine safety points — these save lives and appear on NCLEX!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Endocrine Nursing!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review DKA management, thyroid storm and adrenal crisis." :
                        "Keep studying! Focus on DKA vs HHS, potassium in DKA, thyroid storm order and adrenal crisis."}
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