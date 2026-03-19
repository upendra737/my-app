"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Renal Nursing",
    icon: "🫘",
    color: "blue",
    content: [
      "The kidneys are the master regulators of fluid, electrolyte and acid-base balance — filtering 180 litres of blood daily, producing 1-2 litres of urine",
      "KEY RENAL FUNCTIONS: Filtration (GFR — glomerular filtration rate), Reabsorption, Secretion, Excretion, Hormone production (erythropoietin, renin, activated vitamin D/calcitriol), Acid-base regulation",
      "NORMAL GFR: 90-120 mL/min/1.73m². Estimated GFR (eGFR) calculated from creatinine, age, sex and race (CKD-EPI or MDRD formula)",
      "CREATININE: Waste product of muscle metabolism — entirely filtered by glomerulus. Rises when GFR falls. Doubles when GFR halves. LAGGING INDICATOR — creatinine rises only after significant GFR loss",
      "URINE OUTPUT: Normal minimum 0.5 mL/kg/hour (adults). Oliguria: <400 mL/24 hours or <0.5 mL/kg/hour. Anuria: <100 mL/24 hours. Polyuria: >3 L/24 hours",
      "BLOOD UREA NITROGEN (BUN/Urea): Waste product of protein catabolism — rises in renal failure AND in dehydration (increased urea reabsorption). BUN:Creatinine ratio >20:1 suggests pre-renal cause",
      "NCLEX heavily tests: AKI recognition and staging, CKD complications and management, dialysis principles and nursing care, electrolyte disorders from renal failure and urinary tract conditions",
      "RENAL NURSING PRIORITY: Fluid balance, electrolyte monitoring (especially potassium — hyperkalaemia is the most life-threatening complication of renal failure), medication dose adjustment in renal impairment",
    ],
  },
  {
    title: "Acute Kidney Injury (AKI) — Classification",
    icon: "🚨",
    color: "red",
    content: [
      "AKI (Acute Kidney Injury): Sudden decrease in kidney function occurring over hours to days. Previously called 'acute renal failure'",
      "KDIGO STAGING of AKI:",
      "STAGE 1: Creatinine rise ≥26.5 μmol/L (0.3 mg/dL) within 48 hours OR 1.5-1.9× baseline within 7 days OR UO <0.5 mL/kg/hour for 6-12 hours",
      "STAGE 2: Creatinine rise 2.0-2.9× baseline OR UO <0.5 mL/kg/hour for ≥12 hours",
      "STAGE 3: Creatinine rise ≥3.0× baseline OR creatinine ≥354 μmol/L (4 mg/dL) OR UO <0.3 mL/kg/hour for ≥24 hours OR anuria ≥12 hours OR need for RRT",
      "PRE-RENAL AKI: Decreased renal perfusion — HYPOVOLAEMIA (haemorrhage, dehydration, vomiting, diarrhoea), REDUCED CARDIAC OUTPUT (heart failure, cardiogenic shock, hepatorenal syndrome), RENAL ARTERY STENOSIS/OCCLUSION. URINE: concentrated (SG >1.020), Na LOW (<20 mEq/L), BUN:Cr ratio >20:1, FENa <1%",
      "INTRINSIC (INTRARENAL) AKI: Damage within the kidney — ATN (Acute Tubular Necrosis — from ischaemia or nephrotoxins — most common), glomerulonephritis, interstitial nephritis, vasculitis. URINE: Na HIGH (>40 mEq/L), muddy brown granular casts (ATN), FENa >2%",
      "POST-RENAL AKI: Obstruction to urine outflow — BPH (most common in men), kidney stones, tumours, retroperitoneal fibrosis, bilateral ureteric obstruction. FIRST STEP: Bladder scan/catheterisation to rule out obstruction before aggressive fluid resuscitation",
      "FRACTIONAL EXCRETION of SODIUM (FENa): (Urine Na × Plasma Cr) / (Plasma Na × Urine Cr) × 100. FENa <1% = pre-renal (kidneys conserving sodium). FENa >2% = intrinsic (tubular damage — cannot conserve sodium). Invalid in CKD, diuretic use",
    ],
  },
  {
    title: "AKI — Clinical Features and Complications",
    icon: "⚠️",
    color: "red",
    content: [
      "CLINICAL FEATURES of AKI: Oliguria/anuria (may be non-oliguric), fluid overload (oedema, pulmonary oedema, hypertension), electrolyte abnormalities, uraemic symptoms (see below), metabolic acidosis",
      "URAEMIA: Accumulation of urea and other nitrogenous waste products causing systemic toxicity. Features: URAEMIC ENCEPHALOPATHY (confusion, asterixis/flapping tremor, seizures, coma), URAEMIC PERICARDITIS (pleuritic chest pain, friction rub — risk of cardiac tamponade — URGENT DIALYSIS indication), URAEMIC PRURITUS (itching from urate crystal deposition in skin), nausea/vomiting, anorexia, metallic taste",
      "HYPERKALAEMIA: Most life-threatening acute complication. Potassium cannot be excreted → K rises. ECG changes: PEAKED T waves (earliest ECG sign), widened QRS, flattened P waves, sine wave pattern, VF/asystole",
      "METABOLIC ACIDOSIS: Kidneys cannot excrete H+ ions → metabolic acidosis. Compensatory hyperventilation (Kussmaul breathing). Acidosis shifts potassium out of cells — worsening hyperkalaemia",
      "FLUID OVERLOAD: Oliguria + continued IV fluids → pulmonary oedema, hypertension, peripheral oedema. Strict fluid balance monitoring ESSENTIAL",
      "ANAEMIA: Reduced erythropoietin production (mainly CKD, but acute reduction in AKI). Normocytic normochromic anaemia",
      "INDICATIONS FOR EMERGENCY DIALYSIS in AKI (AEIOU mnemonic): Acidosis (severe metabolic — pH <7.1), Electrolytes (severe hyperkalaemia refractory to medical treatment), Intoxication (dialysable toxins — lithium, aspirin, methanol, ethylene glycol, theophylline), Overload (severe pulmonary oedema refractory to diuretics), Uraemia (uraemic encephalopathy, pericarditis, bleeding)",
      "RECOVERY PHASE: Polyuric phase (tubules recovering — urine output increases markedly, risk of dehydration and electrolyte loss). Monitor fluid status carefully during diuretic phase",
    ],
  },
  {
    title: "AKI — Nursing Management",
    icon: "🩺",
    color: "orange",
    content: [
      "FLUID BALANCE: HOURLY urine output monitoring (Foley catheter mandatory in critically ill AKI patients). Daily weight (most sensitive indicator of fluid status change in AKI). Strict intake/output documentation",
      "IDENTIFY AND TREAT THE CAUSE: Pre-renal → IV fluid resuscitation (crystalloid — normal saline or balanced solutions). Post-renal → catheter insertion, urology referral. Intrinsic → treat specific cause (stop nephrotoxins, treat sepsis)",
      "NEPHROTOXIN AVOIDANCE: Stop ALL nephrotoxic medications — NSAIDs (prostaglandin-dependent renal perfusion), ACE inhibitors/ARBs (reduce GFR in renovascular disease), aminoglycosides, vancomycin (monitor levels), IV contrast agents, calcineurin inhibitors (tacrolimus, ciclosporin)",
      "POTASSIUM MANAGEMENT: Monitor ECG for hyperkalaemia. Hold all potassium supplements and potassium-sparing medications. Dietary potassium restriction. EMERGENCY treatment of hyperkalaemia (see electrolytes section)",
      "MEDICATION REVIEW: Renally-cleared medications require DOSE ADJUSTMENT or AVOIDANCE in AKI. Critical drugs: digoxin, metformin (stop in AKI), methotrexate, lithium, gabapentin, enoxaparin (avoid or reduce dose), aminoglycosides (monitor levels), opioids (active metabolite accumulation)",
      "NUTRITION: Adequate protein (1.0-1.5 g/kg/day — do NOT severely restrict protein in AKI) to prevent catabolism. Caloric support. Dietitian involvement. Enteral preferred over parenteral",
      "INFECTION PREVENTION: AKI patients are immunocompromised. Meticulous line care (central venous catheters), catheter care, early removal of unnecessary lines and catheters",
      "RENAL REPLACEMENT THERAPY (RRT) PREPARATION: Explain procedure to patient and family. Vascular access (haemodialysis — AV fistula/graft or temporary vas cath, haemofilter for CRRT). Monitor anticoagulation",
      "PATIENT EDUCATION: Cause of AKI, expected recovery (if pre-renal/post-renal), medication changes, follow-up for renal function monitoring, preventing recurrence",
    ],
  },
  {
    title: "Chronic Kidney Disease (CKD) — Classification and Pathophysiology",
    icon: "📊",
    color: "purple",
    content: [
      "CKD: Abnormalities of kidney structure or function present for ≥3 months with implications for health. Defined by eGFR and/or markers of kidney damage",
      "CKD STAGING (KDIGO 2012 — by eGFR mL/min/1.73m²):",
      "G1: eGFR ≥90 (normal or high) — with markers of kidney damage",
      "G2: eGFR 60-89 (mildly decreased)",
      "G3a: eGFR 45-59 (mild-moderately decreased)",
      "G3b: eGFR 30-44 (moderate-severely decreased)",
      "G4: eGFR 15-29 (severely decreased) — prepare for RRT",
      "G5: eGFR <15 — kidney failure (dialysis or transplant)",
      "ALBUMINURIA STAGING: A1 (<30 mg/g normal-mildly increased), A2 (30-300 moderately increased — microalbuminuria), A3 (>300 severely increased — macroalbuminuria/proteinuria). Combined GFR + albuminuria staging predicts prognosis",
      "MOST COMMON CAUSES of CKD: Diabetic nephropathy (most common in developed world — 40%), Hypertension/hypertensive nephrosclerosis (second most common), Glomerulonephritis, Polycystic kidney disease (PKD — genetic), Reflux nephropathy, Obstructive uropathy",
      "PROGRESSION: CKD is progressive — rate varies. Modifiable risk factors for progression: Hypertension, proteinuria, hyperglycaemia, smoking, obesity, nephrotoxins, recurrent UTIs, urinary obstruction",
      "DIABETIC NEPHROPATHY STAGES: Hyperfiltration (increased GFR early) → microalbuminuria → macroalbuminuria → declining GFR → ESKD",
    ],
  },
  {
    title: "CKD — Systemic Complications",
    icon: "🔴",
    color: "red",
    content: [
      "CARDIOVASCULAR DISEASE: Leading cause of death in CKD. Accelerated atherosclerosis, left ventricular hypertrophy, heart failure, arrhythmias. CKD is an independent major cardiovascular risk factor",
      "ANAEMIA of CKD: Normocytic normochromic anaemia from REDUCED ERYTHROPOIETIN (EPO) production. Also: iron deficiency, folate/B12 deficiency, shortened RBC lifespan, uraemic inhibition of erythropoiesis. Target Hb 100-120 g/L. Treated with: ERYTHROPOIESIS-STIMULATING AGENTS (ESA — EPO, darbepoetin) + IV IRON (oral absorption poor in CKD)",
      "RENAL OSTEODYSTROPHY (CKD-MBD): Phosphate retention → low calcium → secondary hyperparathyroidism → bone resorption → osteoporosis/osteitis fibrosa cystica. Reduced kidney activation of Vitamin D (1-alpha-hydroxylase in kidney) → reduced calcium absorption → worsens hypocalcaemia",
      "CKD-MBD MANAGEMENT: Dietary phosphate restriction, PHOSPHATE BINDERS (calcium carbonate, sevelamer, lanthanum — taken WITH MEALS to bind dietary phosphate before absorption), CALCITRIOL (active Vitamin D) or alfacalcidol supplementation, CALCIMIMETICS (cinacalcet — reduces PTH secretion)",
      "HYPERKALAEMIA: Reduced potassium excretion → hyperkalaemia. Dietary restriction (avoid bananas, oranges, potatoes, tomatoes, salt substitutes). ACE inhibitors and potassium-sparing diuretics worsen hyperkalaemia — use cautiously",
      "HYPERTENSION in CKD: Both cause and consequence of CKD. Target BP <130/80. ACE inhibitors or ARBs preferred (reduce proteinuria and slow CKD progression — even with modest rise in creatinine/potassium initially). Loop diuretics for fluid overload",
      "METABOLIC ACIDOSIS: Reduced H+ excretion + reduced bicarbonate regeneration. Oral sodium bicarbonate supplementation. Target bicarbonate >22 mEq/L",
      "URAEMIC BLEEDING: Platelet dysfunction from uraemic toxins → prolonged bleeding time. DDAVP (desmopressin) acutely improves platelet function. Dialysis improves platelet function",
      "PRURITUS: Very common, distressing symptom. Mechanisms: calcium-phosphate deposition, histamine, uraemic toxins. Management: dialysis adequacy, phosphate control, antihistamines, gabapentin, UV therapy",
    ],
  },
  {
    title: "CKD — Nursing Management and Patient Education",
    icon: "🩺",
    color: "purple",
    content: [
      "DIETARY MANAGEMENT (the 'Four P's of CKD diet'): Potassium restriction (avoid high-K foods — bananas, oranges, potatoes, tomatoes, dried fruits, chocolate), Phosphate restriction (avoid processed foods, dairy, cola drinks, nuts — take phosphate binders WITH meals), Protein restriction (moderate — 0.6-0.8 g/kg/day in non-dialysis CKD to reduce uraemic load; dialysis patients need MORE protein 1.2-1.5 g/kg), Fluid restriction (varies by stage and urine output)",
      "SODIUM RESTRICTION: <2g/day — reduces fluid retention and BP",
      "MEDICATION MANAGEMENT: Avoid NSAIDs (reduce GFR, worsen CKD), metformin (hold if eGFR <30), careful use of ACE inhibitors/ARBs (monitor K and creatinine), dose-adjust all renally-cleared drugs",
      "VASCULAR ACCESS PROTECTION: NEVER use the dominant arm of a patient with CKD for blood draws, IV lines or BP measurement — protect veins for future AV fistula creation. Educate patient to protect veins",
      "BLOOD PRESSURE MONITORING: Home BP monitoring, target <130/80, medication adherence",
      "ANAEMIA MANAGEMENT: ESA administration (SC injection — observe for hypertension, stroke risk), IV iron monitoring (vital signs during infusion — risk of allergic reaction), haemoglobin monitoring",
      "DIABETES MANAGEMENT in CKD: Tight glucose control (HbA1c target personalised — avoid hypoglycaemia which is more dangerous in CKD), medication review (metformin contraindicated in eGFR <30, insulin doses often need reduction as GFR falls)",
      "PREPARATION FOR RRT: Discussion of options (haemodialysis, peritoneal dialysis, transplantation) early (eGFR 15-20). AV fistula creation 3-6 months before needed. Peritoneal catheter 2-4 weeks before needed. Living donor evaluation. Psychological preparation",
      "ADVANCE CARE PLANNING: Discuss prognosis, goals of care, dialysis vs conservative management (some elderly/frail patients may choose conservative management without dialysis)",
    ],
  },
  {
    title: "Dialysis — Haemodialysis",
    icon: "🔄",
    color: "blue",
    content: [
      "HAEMODIALYSIS (HD): Blood is pumped from the patient through a semipermeable dialyser (artificial kidney) where waste products and excess fluid are removed by DIFFUSION and ULTRAFILTRATION against a dialysate solution, then returned to patient",
      "PRINCIPLES: DIFFUSION — solutes move from high to low concentration (blood to dialysate): urea, creatinine, potassium, phosphate removed. ULTRAFILTRATION — hydrostatic pressure removes excess fluid (interdialytic weight gain removed)",
      "DIALYSATE: Contains: sodium, potassium (adjusted), calcium, magnesium, bicarbonate (corrects acidosis), glucose. Designed to pull waste products from blood and replace missing components",
      "ACCESS TYPES: AV FISTULA (preferred — surgically created arteriovenous anastomosis — requires 3-6 months to mature — feels like a thrill/buzz on palpation — most durable), AV GRAFT (synthetic graft — mature faster but higher infection/thrombosis rates), TUNNELLED CENTRAL VENOUS CATHETER (immediate access but highest infection risk — temporary)",
      "AV FISTULA ASSESSMENT: Assess THRILL (palpate — buzzing sensation) and BRUIT (auscultate — swishing sound) at every assessment. ABSENT THRILL/BRUIT = FISTULA THROMBOSIS — emergency vascular surgery referral",
      "HD SCHEDULE: Typically 3× per week, 3-5 hours per session. More intensive regimens (nocturnal, daily) provide better outcomes but less common",
      "COMPLICATIONS of HD: HYPOTENSION (most common complication — rapid fluid removal, vasodilation — position flat, reduce UF rate, IV fluid bolus), MUSCLE CRAMPS (rapid fluid/electrolyte shifts), DISEQUILIBRIUM SYNDROME (cerebral oedema from rapid urea lowering — headache, nausea, confusion, seizures — more common with first treatments), ACCESS INFECTION (tunnelled catheter infections → bacteraemia/septicaemia), CLOTTED ACCESS",
      "ANTICOAGULATION during HD: Heparin (most common — bolus at start, then infusion). Regional citrate anticoagulation (when heparin contraindicated). Heparin-free runs for patients with bleeding risk",
      "NURSING CARE: Assess access site before and after HD, vital signs monitoring throughout, weight before and after (fluid removal calculation), medication timing (hold drugs until after HD if they are dialysable), symptom management",
    ],
  },
  {
    title: "Dialysis — Peritoneal Dialysis and CRRT",
    icon: "🔄",
    color: "blue",
    content: [
      "PERITONEAL DIALYSIS (PD): Uses the patient's own PERITONEUM as the dialysis membrane. Dialysate is instilled into the peritoneal cavity via a catheter → dwell time (diffusion and ultrafiltration occur) → drained and replaced",
      "PD ADVANTAGES: Home-based, gentler (continuous), no vascular access, no anticoagulation, better preservation of residual renal function, independence",
      "PD TYPES: CAPD (Continuous Ambulatory PD — 4 manual exchanges per day, 4-6 hours dwell each), APD/CCPD (Automated PD — machine performs exchanges overnight, more common)",
      "PD CATHETER: Tenckhoff catheter — surgically placed, tunnelled, inserted 2-4 weeks before starting PD. EXIT SITE CARE: Daily cleaning with antiseptic, keep dry, observe for infection (redness, swelling, discharge, pain)",
      "PERITONITIS (most serious PD complication): Infection of the peritoneal cavity. Signs: CLOUDY EFFLUENT (most reliable early sign), abdominal pain, fever, nausea. DIAGNOSE: Effluent cell count (WCC >100 with >50% neutrophils). TREAT: Intraperitoneal antibiotics (vancomycin + gentamicin or cefazolin + ceftazidime empirically). May require catheter removal for refractory peritonitis",
      "PD ADEQUACY: Kt/V urea (target ≥1.7/week for CAPD). Peritoneal equilibration test (PET) assesses membrane transport characteristics",
      "CONTINUOUS RENAL REPLACEMENT THERAPY (CRRT): Used in critically ill patients (ICU) who cannot tolerate intermittent HD haemodynamically. Slow, continuous process — gentler on BP",
      "CRRT TYPES: CVVH (haemofiltration — convection), CVVHD (haemodialysis — diffusion), CVVHDF (both). Runs 24 hours/day",
      "CRRT NURSING: Hourly fluid balance calculations (mandatory — replacement fluid in, effluent out), anticoagulation management (citrate or heparin), circuit troubleshooting (clotting — air detector alarms — pressure alarms), temperature regulation (patients lose heat through circuit — warm replacement fluids, warming blankets), medication dosing (adjust for CRRT clearance — many drugs cleared by CRRT)",
    ],
  },
  {
    title: "Hyperkalaemia — Emergency Management",
    icon: "🚨",
    color: "red",
    content: [
      "HYPERKALAEMIA: Serum potassium >5.5 mEq/L. Life-threatening — cardiac arrhythmia and arrest",
      "CAUSES: AKI/CKD (most common), medications (ACE inhibitors, ARBs, spironolactone, potassium-sparing diuretics, trimethoprim, NSAIDs, digoxin toxicity), metabolic acidosis, tissue destruction (rhabdomyolysis, haemolysis, burns, tumour lysis), pseudohyperkalaemia (haemolysed sample)",
      "ECG CHANGES in sequence: PEAKED TALL T WAVES (earliest — most sensitive) → Prolonged PR interval → Widened QRS → Flattened P waves → Sine wave pattern → VF/asystole",
      "EMERGENCY TREATMENT of hyperkalaemia (C-BIG-K-Drop mnemonic):",
      "C — CALCIUM GLUCONATE (10mL of 10% IV over 2-3 minutes): MEMBRANE STABILISER — protects the heart. FIRST and MOST URGENT action when ECG changes present. Does NOT lower potassium — protects cardiac membrane while other treatments work. Duration: 30-60 minutes. Repeat if ECG changes persist",
      "B — BICARBONATE (sodium bicarbonate 50-100 mmol IV): Shifts K+ into cells. More effective if metabolic acidosis present",
      "I — INSULIN + GLUCOSE (10 units soluble insulin + 50mL 50% dextrose IV): Shifts K+ into cells via Na/K-ATPase stimulation. Effect: 30-60 minutes duration. Monitor glucose every 30 minutes (hypoglycaemia risk)",
      "G — GLUCOSE (as above — given with insulin to prevent hypoglycaemia)",
      "K — KAYEXALATE/RESONIUM (sodium or calcium polystyrene sulfonate): Ion exchange resin — removes K+ from body via GI tract (oral or enema). SLOW action (hours). Avoid in post-operative patients (intestinal necrosis risk)",
      "Drop — DIALYSIS: DEFINITIVE treatment — removes potassium from body. When refractory to medical treatment or in severe renal failure",
      "SALBUTAMOL (nebulised): Beta-2 agonist — activates Na/K-ATPase, shifts K+ into cells. Rapid action. Adjunct therapy",
      "NCLEX tip: CALCIUM GLUCONATE is FIRST when ECG changes are present — it is NOT used to lower potassium, only to protect the heart. Think: Calcium first, then shift K+ in (insulin/glucose, bicarbonate, salbutamol), then remove K+ (resonium, dialysis)",
    ],
  },
  {
    title: "Urinary Tract Infections (UTI)",
    icon: "🦠",
    color: "green",
    content: [
      "UTI: Infection of the urinary tract — can affect bladder (cystitis), urethra (urethritis), kidneys (pyelonephritis) or prostate (prostatitis)",
      "MOST COMMON ORGANISM: E. coli (80% of uncomplicated UTIs — travels from bowel to urethra — shorter in women → higher UTI incidence)",
      "UNCOMPLICATED CYSTITIS SYMPTOMS: Dysuria (painful urination — most common), frequency, urgency, suprapubic discomfort, haematuria. NO fever, no flank pain",
      "PYELONEPHRITIS (upper UTI): Systemic features — FEVER (≥38°C), FLANK PAIN (costovertebral angle tenderness — CVA tenderness), nausea/vomiting, rigors, PLUS cystitis symptoms. Can lead to urosepsis",
      "CATHETER-ASSOCIATED UTI (CAUTI): Most common healthcare-associated infection. Risk increases 3-10% per day of catheterisation. PREVENTION BUNDLE: Insert only when necessary, use sterile technique, maintain closed drainage system, keep catheter bag below bladder level, maintain meatal care, remove catheter ASAP",
      "ASYMPTOMATIC BACTERIURIA: Positive urine culture WITHOUT symptoms. Do NOT treat (except: pregnancy, before urological procedures). Over-treatment drives antibiotic resistance",
      "DIAGNOSIS: Urinalysis (pyuria — WBC >10/HPF, nitrites — from E.coli converting nitrates, blood, protein, leucocyte esterase), urine culture (gold standard — identifies organism and sensitivities before antibiotics if possible)",
      "TREATMENT: Uncomplicated cystitis — trimethoprim, nitrofurantoin, fosfomycin (3-7 days). Pyelonephritis — ciprofloxacin or co-amoxiclav (7-14 days, sometimes IV initially). Complicated/severe — IV antibiotics (piperacillin-tazobactam, meropenem), urology review",
      "NURSING: Encourage fluid intake (2-3L/day to dilute urine and flush bacteria), cranberry juice (conflicting evidence), proper perineal hygiene (front to back), catheter care, monitor for signs of urosepsis (fever, tachycardia, hypotension, rigors)",
      "UROSEPSIS: UTI progressing to systemic infection → sepsis → septic shock. Elderly may present atypically with confusion, falls or functional decline as only sign. TREAT AGGRESSIVELY: Blood cultures, antibiotics within 1 hour, IV fluids, ICU if shock",
    ],
  },
  {
    title: "Renal Calculi (Kidney Stones)",
    icon: "💎",
    color: "orange",
    content: [
      "RENAL CALCULI: Crystallisation of minerals in the renal collecting system. Affects 12% of population. Recurrence rate 50% at 10 years",
      "STONE TYPES: Calcium oxalate (most common — 75%), Uric acid (gout, high protein diet — radiolucent on plain X-ray), Struvite/Magnesium ammonium phosphate (infection stones — UTI with urea-splitting organisms — Proteus, Klebsiella — form staghorn calculi), Cystine (rare — genetic disorder)",
      "CLASSIC PRESENTATION: RENAL COLIC — severe, sudden onset, COLICKY (comes in waves), flank pain radiating to groin/genitalia ('loin to groin'), nausea/vomiting, haematuria (visible or microscopic), patient CANNOT get comfortable (writhes in pain — distinguishes from peritonitis where patient lies still)",
      "DIAGNOSIS: CT KUB (non-contrast) — gold standard — detects all stone types. Plain X-ray KUB — detects calcium stones (radiopaque), misses uric acid stones (radiolucent). Ultrasound — useful in pregnancy, detects obstruction/hydronephrosis. Urinalysis — haematuria, crystalluria",
      "PAIN MANAGEMENT: NSAIDs (diclofenac) — first-line for renal colic analgesia. Opioids for severe pain. IV fluids (controversial — does not speed passage but maintains hydration)",
      "SPONTANEOUS PASSAGE: <4mm — 90% pass spontaneously. 4-6mm — 50%. >6mm — unlikely to pass without intervention. MEDICAL EXPULSIVE THERAPY: Alpha-blockers (tamsulosin) — relax ureteric smooth muscle, facilitate stone passage",
      "INTERVENTIONS: ESWL (Extracorporeal Shock Wave Lithotripsy — sound waves fragment stone), Ureteroscopy (endoscopic stone retrieval/laser lithotripsy), Percutaneous nephrolithotomy (PCNL — percutaneous access for large stones)",
      "NURSING: Strain all urine (to catch stone for analysis), encourage high fluid intake (2.5-3L/day — dilutes urine, prevents crystallisation), pain management, antiemetics, monitor for complications (ureteric colic, obstruction, hydronephrosis, infected obstructed kidney — EMERGENCY)",
      "INFECTED OBSTRUCTED KIDNEY: Pyelonephritis + ureteric obstruction from stone = EMERGENCY (urosepsis + obstruction). Requires urgent drainage (nephrostomy or ureteric stenting) AND IV antibiotics. Can be fatal within hours without drainage",
    ],
  },
  {
    title: "Benign Prostatic Hyperplasia (BPH) and Urinary Retention",
    icon: "🔵",
    color: "blue",
    content: [
      "BPH: Non-malignant enlargement of the prostate gland causing lower urinary tract symptoms (LUTS). Affects >50% of men >60, >90% of men >85",
      "LOWER URINARY TRACT SYMPTOMS (LUTS): OBSTRUCTIVE (hesitancy, poor stream, straining, terminal dribbling, incomplete emptying) and IRRITATIVE/STORAGE (frequency, urgency, nocturia, urgency incontinence)",
      "ACUTE URINARY RETENTION (AUR): Sudden inability to void — painful, distended bladder, urgent catheterisation required. Precipitants: anticholinergics, opioids, alpha-agonists (cold/flu medications), constipation, anaesthesia, alcohol",
      "CHRONIC URINARY RETENTION: Painless large residual volume (can be >500mL) — patient may not realise. Risk of UTI, hydronephrosis, renal failure from back pressure",
      "CATHETERISATION for urinary retention: Insert urethral catheter. For AUR with large volume (>1L) — drain slowly (500-600mL initially, then clamp 30 minutes, then continue drainage) to prevent POST-OBSTRUCTIVE DIURESIS and haemorrhage from rapid decompression",
      "POST-OBSTRUCTIVE DIURESIS: Massive polyuria following relief of chronic urinary obstruction — kidneys release retained fluid and solutes. Can cause severe dehydration and electrolyte imbalance. MONITOR: Hourly urine output, vital signs, electrolytes. Replace 50-75% of urinary losses with IV fluid if >200 mL/hour",
      "BPH MEDICATIONS: Alpha-1 blockers (tamsulosin, alfuzosin, doxazosin) — relax prostate and urethral smooth muscle → improve flow (rapid effect). 5-alpha reductase inhibitors (finasteride, dutasteride) — shrink prostate (3-6 months effect, reduce cancer risk). Side effects: alpha-blockers → orthostatic hypotension (first-dose effect — advise sitting for first dose)",
      "SURGICAL TREATMENT: TURP (transurethral resection of prostate) — gold standard. TURP SYNDROME (now rare with bipolar TURP): absorption of hypotonic irrigating fluid → dilutional hyponatraemia → confusion, seizures, pulmonary oedema. Treated with hypertonic saline, diuretics",
      "PROSTATE SPECIFIC ANTIGEN (PSA): Elevated in BPH AND prostate cancer. Not a specific cancer marker. Shared decision-making for PSA screening (age 50-69, or 40-45 with risk factors)",
    ],
  },
];

const mnemonics = [
  {
    title: "AKI AEIOU Indications for Emergency Dialysis",
    acronym: "AEIOU",
    breakdown: ["Acidosis (severe metabolic — pH <7.1)", "Electrolytes (severe refractory hyperkalaemia)", "Intoxication (dialysable toxins — lithium, aspirin, methanol)", "Overload (pulmonary oedema refractory to diuretics)", "Uraemia (encephalopathy, pericarditis, bleeding)"],
    memory: "AEIOU — the five emergency dialysis indications. If you see any of these, urgent RRT is indicated regardless of creatinine level!",
    color: "red",
  },
  {
    title: "Hyperkalaemia Treatment — C-BIG-K-Drop",
    acronym: "CBIGKD",
    breakdown: ["Calcium gluconate (membrane stabilise — FIRST if ECG changes)", "Bicarbonate (shifts K+ into cells)", "Insulin + Glucose (shifts K+ into cells)", "Glucose (with insulin — prevents hypoglycaemia)", "Kayexalate/Resonium (removes K+ from body)", "Dialysis (definitive removal)"],
    memory: "C-BIG-K-Drop — Calcium protects the heart FIRST, then shift K+ in (Bicarb, Insulin/Glucose), then remove K+ (Kayexalate, Dialysis)!",
    color: "red",
  },
  {
    title: "Pre-Renal vs Intrinsic AKI",
    acronym: "PRE INT",
    breakdown: ["Pre-renal: urine Na LOW (<20), SG HIGH (>1.020), FENa <1%, BUN:Cr >20:1", "Intrinsic: urine Na HIGH (>40), SG LOW (<1.010), FENa >2%, muddy brown casts"],
    memory: "PRE-renal kidneys CONSERVE sodium (low urine Na). INTrinsic kidneys CANNOT conserve (high urine Na — tubules damaged). Pre-renal wants water back. Intrinsic has lost the ability!",
    color: "orange",
  },
  {
    title: "CKD Dietary Restrictions",
    acronym: "4Ps",
    breakdown: ["Potassium restriction", "Phosphate restriction (+ take binders WITH meals)", "Protein moderation (reduce in CKD, increase in dialysis)", "Fluid restriction (if oliguric)"],
    memory: "4 P's of CKD diet — Potassium, Phosphate, Protein, fluid (Pure water). Phosphate binders MUST be taken WITH meals to bind dietary phosphate before absorption!",
    color: "purple",
  },
];

const alerts = [
  { text: "HYPERKALAEMIA with ECG changes: Give CALCIUM GLUCONATE FIRST — it does NOT lower potassium, it PROTECTS the cardiac membrane. Then shift K+ in, then remove K+!", severity: "high" },
  { text: "PEAKED T WAVES on ECG in a renal patient = HYPERKALAEMIA until proven otherwise. Treat immediately — progression to VF can occur within minutes!", severity: "high" },
  { text: "AV FISTULA: NEVER take blood pressure, draw blood or insert IV in the fistula arm! Assess thrill and bruit at every assessment — absent = thrombosis = emergency!", severity: "high" },
  { text: "PERITONEAL DIALYSIS PERITONITIS: CLOUDY effluent is the KEY EARLY SIGN. Send effluent for cell count and culture. Intraperitoneal antibiotics — do NOT delay!", severity: "high" },
  { text: "POST-OBSTRUCTIVE DIURESIS: After catheterising a chronically obstructed patient — monitor urine output hourly. >200 mL/hour = replace 50-75% with IV fluid to prevent haemodynamic collapse!", severity: "high" },
  { text: "INFECTED OBSTRUCTED KIDNEY (stone + pyelonephritis): EMERGENCY — urgent nephrostomy/stenting AND IV antibiotics. Can be fatal within hours. Do NOT rely on antibiotics alone!", severity: "high" },
  { text: "METFORMIN in AKI: HOLD immediately — lactic acidosis risk. Also hold 48 hours before and after IV contrast. NEVER give metformin if eGFR <30!", severity: "high" },
  { text: "CKD DIET: Phosphate binders MUST be taken WITH meals (not before, not after) — they bind dietary phosphate in the GI tract during digestion to prevent absorption!", severity: "medium" },
  { text: "URAEMIC PERICARDITIS: Pleuritic chest pain + friction rub in renal failure patient = URGENT DIALYSIS indication. Risk of cardiac tamponade if untreated!", severity: "medium" },
  { text: "HAEMODIALYSIS DISEQUILIBRIUM SYNDROME: First HD sessions — headache, nausea, confusion. Prevent with shorter initial sessions, slower urea clearance. Can cause seizures in severe cases!", severity: "medium" },
  { text: "ASYMPTOMATIC BACTERIURIA: Do NOT treat unless pregnant or pre-urological procedure. Over-treatment drives antibiotic resistance. The urinalysis is positive but the patient has NO symptoms!", severity: "medium" },
  { text: "VEIN PROTECTION in pre-dialysis CKD: Never use the dominant arm for IV access or blood draws — protect veins for future AV fistula creation. Educate patient and all staff!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A nurse is caring for a patient with acute kidney injury secondary to dehydration. Laboratory results show: Urine sodium 12 mEq/L, urine specific gravity 1.028, BUN 68 mg/dL, creatinine 1.8 mg/dL (BUN:creatinine ratio = 37:1), serum osmolality 310 mOsm/kg. What type of AKI does this presentation indicate and what is the appropriate initial treatment?",
    options: [
      "Intrinsic (intrarenal) AKI — administer furosemide to increase urine output",
      "Post-renal AKI — insert urinary catheter to relieve obstruction",
      "Pre-renal AKI — administer IV fluid resuscitation with normal saline or balanced crystalloid",
      "Intrinsic AKI from ATN — avoid fluids as they will worsen tubular damage",
    ],
    correct: 2,
    explanation: "This is PRE-RENAL AKI — the kidneys are under-perfused but structurally intact, conserving sodium and water maximally. EVIDENCE: Urine sodium 12 mEq/L (LOW — kidney conserving Na), urine SG 1.028 (HIGH — concentrated urine), BUN:Creatinine ratio 37:1 (>20:1 indicates pre-renal — urea is reabsorbed along with water, disproportionately elevating BUN relative to creatinine). TREATMENT: IV FLUID RESUSCITATION with isotonic crystalloid (normal saline or balanced solution — Hartmann's/Plasmalyte). The kidneys are not damaged — they are responding normally to low perfusion. Restore perfusion → restore GFR → creatinine normalises. Furosemide is not indicated and would worsen pre-renal AKI by further reducing circulating volume. Catheterisation is for post-renal (obstructive) AKI.",
    wrongExplanations: [
      "WRONG: Furosemide is contraindicated in pre-renal AKI — it causes further volume depletion, worsening the already reduced renal perfusion. Urine output may temporarily increase but at the cost of worsening ischaemia.",
      "WRONG: The clinical and laboratory picture (concentrated urine, Na conservation, elevated BUN:Cr ratio) indicates pre-renal aetiology — not obstruction. Post-renal would present with dilute urine after initial oliguria, and catheterisation/imaging would be the diagnostic step.",
      "",
      "WRONG: The urine findings (concentrated, Na-conserving) are characteristic of pre-renal AKI, NOT ATN (intrinsic). ATN would show dilute urine (SG ~1.010), high urine Na (>40) and muddy brown granular casts. Fluids are the treatment for pre-renal AKI.",
    ],
  },
  {
    level: "Knowledge",
    question: "A patient on haemodialysis for ESKD has a left forearm AV fistula. During the nursing assessment, the nurse palpates the fistula and feels no thrill and auscultates no bruit. The patient reports the arm 'feels different' and appears mildly swollen. What is the nurse's PRIORITY action?",
    options: [
      "Reassess in 1 hour — thrill and bruit can be intermittently absent",
      "Apply a warm compress to the fistula arm — this may restore blood flow",
      "Notify the physician/vascular access nurse immediately — absent thrill and bruit indicates fistula thrombosis requiring urgent vascular intervention",
      "Elevate the arm above heart level and continue monitoring — swelling is normal post-dialysis",
    ],
    correct: 2,
    explanation: "ABSENT THRILL AND BRUIT in an AV fistula = FISTULA THROMBOSIS — a vascular emergency. The thrill (palpable buzz from turbulent flow) and bruit (auscultated swishing sound) are signs of patent, flowing fistula. Their ABSENCE indicates blood flow has stopped — the fistula has clotted. AV fistula thrombosis requires URGENT intervention within hours to restore patency: surgical thrombectomy or percutaneous thrombolysis. Beyond 24-48 hours, salvage becomes much more difficult and the patient may permanently lose their primary access, requiring a less desirable catheter and repeat surgery. NOTIFY IMMEDIATELY — this is a time-critical vascular emergency. Warm compress and reassessment in an hour wastes critical time.",
    wrongExplanations: [
      "WRONG: Thrill and bruit are NOT intermittently absent in a patent fistula. Absence is abnormal and indicates thrombosis. One-hour delay in a thrombosed fistula significantly reduces salvage success.",
      "WRONG: Warm compress will not restore blood flow to a thrombosed fistula. The clot must be mechanically removed (thrombectomy) or lysed (thrombolysis). Warm compress delays urgent intervention.",
      "",
      "WRONG: Post-dialysis swelling can occur but the absence of thrill and bruit is not normal and is not caused by post-dialysis swelling. The combination strongly indicates thrombosis requiring emergency intervention.",
    ],
  },
  {
    level: "Application",
    question: "A patient with ESKD on peritoneal dialysis presents to the clinic reporting abdominal pain, nausea and cloudy peritoneal effluent for the past 12 hours. Temperature is 38.1°C. The peritoneal effluent sent for analysis shows WBC 280 cells/mm³ with 75% neutrophils. What is the diagnosis and what is the nurse's PRIORITY action?",
    options: [
      "Normal post-dialysis findings — cloudy effluent can be normal after rapid exchanges",
      "Peritoneal dialysis peritonitis — obtain effluent cultures, notify physician and prepare intraperitoneal antibiotics immediately",
      "The patient has a UTI causing peritoneal irritation — obtain urine culture and start oral antibiotics",
      "The PD catheter is malfunctioning — flush with normal saline and reposition the patient",
    ],
    correct: 1,
    explanation: "This patient has PERITONEAL DIALYSIS PERITONITIS — a serious complication that can cause catheter loss, peritoneal membrane failure and death if untreated. DIAGNOSTIC CRITERIA: Cloudy effluent (most reliable early sign) + abdominal pain + effluent WBC >100 cells/mm³ with >50% neutrophils + fever. This patient meets all criteria. IMMEDIATE ACTIONS: Obtain EFFLUENT CULTURES (gram stain and culture — before antibiotics if possible but do NOT delay antibiotics), notify physician, prepare INTRAPERITONEAL ANTIBIOTICS (vancomycin + gentamicin, or cefazolin + ceftazidime based on local protocol — given directly into the PD fluid). Oral antibiotics are NOT adequate for PD peritonitis. Continued PD with antibiotic exchanges continues to clear the abdomen. Catheter removal may be needed for refractory or fungal peritonitis.",
    wrongExplanations: [
      "WRONG: Cloudy effluent with >100 WBC/mm³ predominantly neutrophils is NEVER normal. This is peritonitis by definition. Dismissing it delays treatment of a serious infection.",
      "",
      "WRONG: UTI does not cause peritoneal effluent turbidity or peritoneal WBC elevation. The source of infection is the peritoneal cavity, and intraperitoneal antibiotics are required, not oral.",
      "WRONG: The catheter may be functioning adequately — the cloudy effluent is not from a mechanical malfunction. Flushing does not treat peritonitis. The infection is in the peritoneal cavity and requires antibiotic treatment.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a 78-year-old man with CKD stage 4 (eGFR 22). His morning medications include: aspirin 100mg, lisinopril 10mg, atorvastatin 40mg, metoprolol 50mg, amlodipine 5mg, omeprazole 20mg, calcium carbonate 1g (with meals), and metformin 1000mg twice daily. Which medication requires URGENT review and likely discontinuation?",
    options: [
      "Aspirin — aspirin causes renal vasoconstriction and worsens CKD",
      "Metformin — contraindicated when eGFR <30 mL/min due to risk of potentially fatal lactic acidosis",
      "Lisinopril — ACE inhibitors are contraindicated in CKD stage 4",
      "Atorvastatin — statins cause myopathy which is worsened by renal impairment",
    ],
    correct: 1,
    explanation: "METFORMIN is the critical concern. CURRENT GUIDELINES: Metformin should be held/stopped when eGFR <30 mL/min (some guidelines say hold at <45 with caution). This patient's eGFR is 22 — WELL BELOW the safe threshold. Rationale: Metformin is renally excreted. In renal impairment, metformin accumulates → blocks mitochondrial respiratory chain → LACTIC ACIDOSIS — a rare but potentially fatal complication with mortality ~50%. Lisinopril (ACE inhibitor) at eGFR 22 requires monitoring (potassium and creatinine) but is NOT absolutely contraindicated — it reduces proteinuria and slows CKD progression. A modest creatinine rise (≤30%) is acceptable. Aspirin at low dose (100mg) is generally acceptable in CKD. Atorvastatin — statins are generally safe in CKD (rosuvastatin dose reduction needed; atorvastatin does not require adjustment in CKD).",
    wrongExplanations: [
      "WRONG: Low-dose aspirin (100mg) is generally acceptable in CKD for cardiovascular protection. While NSAIDs (ibuprofen, naproxen) are harmful in CKD, low-dose aspirin does not cause the same degree of renal vasoconstriction.",
      "",
      "WRONG: Lisinopril (ACE inhibitor) is actually RECOMMENDED in CKD — it reduces proteinuria and slows progression. It is not contraindicated at eGFR 22, though monitoring of potassium and creatinine is essential.",
      "WRONG: Atorvastatin is safe in CKD without dose adjustment (unlike rosuvastatin which needs reduction at severe CKD). Statin-related myopathy risk is low at standard doses.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is monitoring a patient with ESKD on haemodialysis who is experiencing hypotension during the dialysis session (BP has dropped from 132/84 to 82/52). The patient reports feeling dizzy and nauseated. Heart rate is 108. The patient has 800mL of fluid still to be removed according to the dialysis prescription. What is the nurse's IMMEDIATE priority action?",
    options: [
      "Continue ultrafiltration at the same rate — the target fluid removal must be completed to prevent pulmonary oedema",
      "Place the patient in Trendelenburg position, reduce or stop ultrafiltration, administer a normal saline bolus (100-200mL) per facility protocol and notify the physician",
      "Administer IV frusemide — the hypotension indicates cardiac failure with fluid overload",
      "Terminate the dialysis session immediately and send the patient home — hypotension during dialysis is dangerous and dialysis must stop",
    ],
    correct: 1,
    explanation: "INTRADIALYTIC HYPOTENSION (IDH) is the most common complication of haemodialysis. MANAGEMENT: POSITION — Trendelenburg (feet up, head down) — increases venous return to heart. REDUCE or STOP ultrafiltration — the hypotension is from too rapid fluid removal. NORMAL SALINE BOLUS — 100-200mL IV rapidly to restore intravascular volume per facility protocol. NOTIFY physician. IDH occurs when fluid is removed faster than the plasma refilling rate from tissues. Most cases can be managed without terminating the session — reducing UF rate and bolus of saline usually corrects BP and dialysis can continue at a lower UF rate. Furosemide is inappropriate — dialysis patients have little/no urine output and furosemide would further vasodilate without fluid removal benefit. Terminating dialysis without completing the session leaves the patient at risk of fluid overload between sessions.",
    wrongExplanations: [
      "WRONG: Continuing ultrafiltration at the same rate with BP of 82/52 will worsen haemodynamic compromise and risk cardiac arrest. Fluid removal must be reduced or stopped immediately.",
      "",
      "WRONG: Furosemide in ESKD patients is largely ineffective (no renal function to respond to diuretics) and causes vasodilation — worsening hypotension. The problem is intravascular volume depletion from too-rapid ultrafiltration.",
      "WRONG: Terminating dialysis prematurely is a last resort. IDH usually responds to position change, reduced UF rate and saline bolus — the session can often continue at a lower rate after stabilisation.",
    ],
  },
  {
    level: "Advanced",
    question: "A 65-year-old man with known CKD stage 3b (eGFR 38) is admitted with AKI following 3 days of ibuprofen for back pain. His serum potassium is 6.8 mEq/L. ECG shows peaked T waves with widened QRS complexes. Creatinine has risen from baseline 180 to 420 μmol/L. He has no urine output for 8 hours. Blood gas: pH 7.18, HCO3 12, PaCO2 28 (compensatory). What is the correct SEQUENCE of immediate interventions?",
    options: [
      "Start IV fluid resuscitation first, then address the potassium once urine output is established",
      "IV calcium gluconate immediately (membrane stabilisation) → IV insulin 10 units + 50mL 50% dextrose → IV sodium bicarbonate → nebulised salbutamol → urgent nephrology review for emergency dialysis",
      "Perform a 12-lead ECG to confirm hyperkalaemia before treating",
      "Administer IV furosemide 80mg to restore urine output and excrete potassium",
    ],
    correct: 1,
    explanation: "This patient has LIFE-THREATENING HYPERKALAEMIA (K 6.8) with CARDIAC TOXICITY (peaked T waves + widened QRS — at immediate risk of VF/asystole) in the context of severe AKI (creatinine 420, anuric 8 hours) with severe metabolic acidosis (pH 7.18). CORRECT SEQUENCE: 1) CALCIUM GLUCONATE 10mL of 10% IV over 2-3 minutes IMMEDIATELY — cardiac membrane stabilisation. FIRST action when ECG changes present. 2) INSULIN 10 units + 50mL D50 IV — shifts K+ into cells within 30 minutes. 3) SODIUM BICARBONATE — corrects acidosis, shifts K+ into cells (more effective with acidosis present). 4) NEBULISED SALBUTAMOL 10-20mg — additional K+ shift. 5) URGENT NEPHROLOGY for dialysis — definitive K+ removal (resonium too slow in emergency). Also: stop ibuprofen immediately, IV fluids if pre-renal component, continuous cardiac monitoring. IV fluids first (Option A) is wrong when the patient has life-threatening ECG changes — cardiac membrane stabilisation is the immediate priority.",
    wrongExplanations: [
      "WRONG: IV fluids are important but CANNOT take priority when the patient has active ECG changes from hyperkalaemia (widened QRS). Calcium gluconate must be given IMMEDIATELY to protect the cardiac membrane. Patients can die from hyperkalaemia-induced VF in seconds.",
      "",
      "WRONG: A 12-lead ECG is already described as showing peaked T waves and widened QRS — this IS the confirmation. Waiting for another ECG while these changes are present delays life-saving treatment. In clinical practice: treat based on current ECG, do not delay for repeat.",
      "WRONG: Furosemide requires renal tubular function to work. This patient is anuric with severe AKI — furosemide will have minimal/no effect on urine output or potassium excretion. It is not appropriate here.",
    ],
  },
  {
    level: "Advanced",
    question: "A 45-year-old woman with polycystic kidney disease (PKD) is CKD stage 4 (eGFR 18). She is being assessed for renal replacement therapy options. She is a teacher, active, well-supported at home with her husband. Her haemoglobin is 88 g/L. She asks 'What are my options and which is best for me?' How should the nurse approach this conversation?",
    options: [
      "Recommend haemodialysis — it is the most common form of dialysis and therefore the best option",
      "Recommend kidney transplantation only — it is the superior option with best quality of life and survival",
      "Provide unbiased education about all three options (haemodialysis, peritoneal dialysis, kidney transplantation including living donor), explore her values, lifestyle and priorities, and involve the multidisciplinary team in shared decision-making",
      "Defer the conversation to the nephrologist — RRT decision-making is outside nursing scope",
    ],
    correct: 2,
    explanation: "SHARED DECISION-MAKING is the standard of care for RRT choice. The nurse's role: Provide UNBIASED EDUCATION about all options: HAEMODIALYSIS (3× weekly in-centre, can be home HD — requires vascular access), PERITONEAL DIALYSIS (daily home-based, independent, flexible — good for active lifestyle, work — requires peritoneal catheter), KIDNEY TRANSPLANTATION (best long-term outcomes and quality of life — living donor preferred for waitlist avoidance, deceased donor also available). For THIS patient specifically: Active teacher, well-supported at home — PERITONEAL DIALYSIS may be particularly suitable (maintains lifestyle, can work, home-based). LIVING DONOR transplantation (husband as potential donor) should be explored early — preserves pre-emptive transplant opportunity (before dialysis needed). Anaemia (Hb 88) needs ESA and iron therapy. The nurse plays a central role in education — deferring entirely to the nephrologist misses a key nursing opportunity.",
    wrongExplanations: [
      "WRONG: Recommending one modality over another without exploring the patient's individual circumstances, values and lifestyle is not shared decision-making. Haemodialysis is not automatically 'best' — the optimal modality is patient-specific.",
      "WRONG: While transplantation provides the best outcomes, not all patients are candidates, donors may not be available immediately and some patients may prefer dialysis. Recommending only transplantation without discussing all options is not complete education.",
      "",
      "WRONG: RRT education is absolutely within nursing scope — nurses are integral to the multidisciplinary team providing education about CKD and RRT options. Deferring entirely to the nephrologist misses the nursing therapeutic and educational opportunity.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a post-operative patient (Day 1 following open repair of a 7cm abdominal aortic aneurysm). The patient is oliguric (UO 10 mL/hour for the past 3 hours). Creatinine has risen from pre-operative 95 to 280 μmol/L. BP is 88/56, CVP is 2 mmHg (low). Urine sodium is 8 mEq/L. The patient received 6 units of packed red cells and 4L crystalloid intraoperatively. Which is the MOST appropriate immediate nursing action and clinical reasoning?",
    options: [
      "Administer IV furosemide 40mg — the oliguria needs to be converted to adequate urine output",
      "The clinical picture suggests PRE-RENAL AKI from hypovolaemia (low BP, low CVP, urine Na 8 mEq/L indicating Na-conservation). Notify surgeon urgently, initiate IV fluid bolus and prepare for vasopressor support — ongoing haemorrhage must be excluded",
      "This is expected post-operative oliguria — monitor for 24 hours before intervening",
      "The patient has ATN from intraoperative ischaemia — diuretics and fluid restriction are appropriate",
    ],
    correct: 1,
    explanation: "CLINICAL REASONING: This post-AAA repair patient has PRE-RENAL AKI from haemodynamic compromise. EVIDENCE: Oliguria (10 mL/hour), rising creatinine, hypotension (BP 88/56), LOW CVP (2 mmHg = hypovolaemic), urine sodium 8 mEq/L (VERY LOW = kidneys maximally conserving sodium = pre-renal). CRITICAL CONCERN: Post-AAA repair oliguria with hypotension and low CVP must ALWAYS raise the concern of ONGOING HAEMORRHAGE or AORTIC GRAFT COMPLICATION until proven otherwise. This patient received massive intraoperative transfusion but is now hypotensive — active bleeding or vascular complication (graft thrombosis, renal artery involvement) must be excluded IMMEDIATELY. ACTIONS: Notify surgeon URGENTLY, IV fluid bolus (500mL crystalloid rapidly), vasopressor if haemodynamically unstable, prepare for urgent return to theatre or angiography if suspected bleeding. Furosemide is absolutely CONTRAINDICATED in pre-renal AKI with hypotension — it worsens volume depletion and will precipitate worse renal ischaemia and potentially ATN.",
    wrongExplanations: [
      "WRONG: Furosemide in a hypotensive, hypovolaemic post-operative patient with pre-renal AKI is contraindicated and dangerous. It further depletes intravascular volume, worsens ischaemia and can convert pre-renal AKI to irreversible ATN.",
      "",
      "WRONG: Post-operative oliguria with hypotension in a post-AAA repair patient is NOT expected and requires urgent assessment. AAA repair carries specific risks (renal artery involvement, aortic occlusion, haemorrhage) that make post-operative oliguria an emergency.",
      "WRONG: The urine findings (Na 8 mEq/L = pre-renal) do NOT support ATN. ATN would show high urine Na (>40) and lower specific gravity. This is pre-renal AKI from haemodynamic compromise requiring fluid resuscitation, not fluid restriction.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is reviewing morning laboratory results for four patients on a renal ward. Which patient requires the MOST URGENT nursing intervention?\n\nPatient A: CKD stage 5 — K+ 5.8, creatinine stable, Hb 95, no symptoms\nPatient B: AKI on CKD — K+ 7.2, ECG showing sine wave pattern, anuric\nPatient C: Post-renal AKI from BPH — K+ 4.8, urine output 350mL/hour after catheterisation (post-obstructive diuresis)\nPatient D: Haemodialysis patient — K+ 5.2, missed last dialysis session due to fistula thrombosis",
    options: [
      "Patient A — CKD stage 5 patients are at highest risk and K+ 5.8 requires immediate treatment",
      "Patient C — urine output of 350mL/hour after catheterisation is life-threatening post-obstructive diuresis",
      "Patient B — K+ 7.2 with SINE WAVE on ECG = imminent VF/asystole. This is the most immediately life-threatening situation",
      "Patient D — missed dialysis with hyperkalaemia in a dialysis patient requires urgent intervention",
    ],
    correct: 2,
    explanation: "Patient B requires IMMEDIATE life-saving intervention. ANALYSIS: Patient B has K+ 7.2 mEq/L with a SINE WAVE PATTERN on ECG — this represents the pre-terminal ECG pattern in severe hyperkalaemia, immediately preceding VF and asystole. This patient is minutes from cardiac arrest. IMMEDIATE ACTIONS: Calcium gluconate IV IMMEDIATELY (membrane stabilisation), insulin/dextrose, sodium bicarbonate, continuous cardiac monitoring, emergency dialysis preparation. Patient C (post-obstructive diuresis — 350 mL/hour) is also serious and requires IV fluid replacement and electrolyte monitoring — but the immediate cardiac arrest risk in Patient B takes absolute priority. Patient A (K 5.8, no symptoms, stable) — serious but not immediately life-threatening. Patient D (K 5.2, missed dialysis) — significant but K 5.2 without ECG changes is less immediately dangerous than sine wave VF risk in Patient B. Prioritisation: life-threatening cardiac rhythm first.",
    wrongExplanations: [
      "WRONG: CKD stage 5 with K+ 5.8 and no symptoms is a serious finding requiring monitoring and dietary counselling but does NOT have the same immediate urgency as sine wave hyperkalaemia with imminent cardiac arrest.",
      "WRONG: Post-obstructive diuresis at 350 mL/hour is serious (dehydration, electrolyte imbalance risk) and requires IV fluid replacement — but the patient is not in imminent cardiac arrest. Patient B's sine wave is immediately life-threatening.",
      "",
      "WRONG: Patient D with K+ 5.2 and missed dialysis needs urgent arrangement of urgent dialysis — but K+ 5.2 without ECG changes is not the MOST immediately life-threatening situation compared to Patient B's sine wave pattern at K 7.2.",
    ],
  },
  {
    level: "Advanced",
    question: "A 52-year-old woman presents with flank pain, fever of 39.2°C, rigors and vomiting. CT KUB shows a 9mm calculus in the left ureter with proximal hydroureteronephrosis. Urine microscopy shows WBC 180/mm³ and bacteria. Blood cultures are taken. BP is 96/58 and heart rate is 122. Lactate is 3.8 mmol/L. What is the nurse's MOST comprehensive and accurate understanding of this clinical situation?",
    options: [
      "This is renal colic — administer NSAIDs for pain and encourage oral hydration",
      "This is pyelonephritis — IV antibiotics and IV fluids will resolve this condition",
      "This patient has an INFECTED OBSTRUCTED KIDNEY — a urological emergency. Antibiotics alone will not control the infection because the obstruction prevents drainage. URGENT urology consultation for nephrostomy or ureteric stenting is required simultaneously with IV antibiotics, IV fluid resuscitation and sepsis management",
      "The stone will pass spontaneously with alpha-blocker therapy — commence tamsulosin and antibiotics",
    ],
    correct: 2,
    explanation: "INFECTED OBSTRUCTED KIDNEY is a LIFE-THREATENING UROLOGICAL EMERGENCY. This patient meets SEPSIS criteria (infection + organ dysfunction: HR 122, BP 96/58, lactate 3.8 = septic shock threshold). The critical concept: OBSTRUCTION prevents infected urine from draining — antibiotics cannot penetrate the obstructed system adequately, and infected urine under pressure spreads bacteria systemically. The patient will NOT respond to antibiotics alone — and will likely deteriorate to multi-organ failure and death without urgent DRAINAGE. DUAL SIMULTANEOUS TREATMENT: 1) URGENT UROLOGY: Nephrostomy (percutaneous drainage of the obstructed kidney) or ureteric stenting (endoscopic relief of obstruction). Urgency measured in hours — not days. 2) SEPSIS MANAGEMENT: IV broad-spectrum antibiotics (piperacillin-tazobactam or meropenem) within 1 hour, IV fluid resuscitation (30 mL/kg crystalloid), vasopressors if needed, ICU if deteriorating, lactate clearance monitoring. NSAIDs for pain and oral hydration (Option A) completely miss the septic shock and obstructed kidney. Antibiotics alone (Option B) are necessary but insufficient. Tamsulosin for a 9mm stone in septic shock (Option D) is completely inappropriate — this stone will not pass spontaneously and the patient needs urgent drainage.",
    wrongExplanations: [
      "WRONG: NSAIDs are contraindicated in septic shock and renal impairment. This patient is in septic shock from an infected obstructed kidney — this is not routine renal colic and does not respond to analgesia and hydration alone.",
      "WRONG: Antibiotics are necessary but completely INSUFFICIENT for infected obstructed kidney. The infected urine cannot drain through the obstruction — antibiotics cannot penetrate the obstructed system. Without drainage, the patient will die despite antibiotics.",
      "",
      "WRONG: A 9mm stone in a septic patient is NOT a candidate for alpha-blocker medical expulsive therapy — it is unlikely to pass spontaneously (>6mm), and waiting for spontaneous passage in the context of septic shock from an infected obstructed kidney is fatal negligence.",
    ],
  },
];

const clinicalPearls = [
  "The most important renal nursing concept: pre-renal AKI and intrinsic AKI are managed OPPOSITELY. Pre-renal (kidneys are fine but underperfused) needs volume — give fluid aggressively. Intrinsic AKI (kidneys are damaged) needs careful fluid management — too much fluid causes pulmonary oedema. The urine sodium, specific gravity and clinical picture differentiate them.",
  "Calcium gluconate is the first treatment for hyperkalaemia with ECG changes — but it does not lower potassium. It buys time by protecting the cardiac membrane while other treatments shift potassium into cells. This distinction is critical: if you give only calcium gluconate and nothing else, the potassium stays high and the protection wears off in 30-60 minutes.",
  "An infected obstructed kidney (stone + infection + obstruction) is a urological emergency that kills faster than almost any other urological condition. Antibiotics cannot penetrate an obstructed collecting system. The patient will deteriorate to multi-organ failure and death without drainage — urgently. Every hour without nephrostomy or stenting in this situation increases mortality.",
  "The AV fistula is the patient's lifeline — treat it accordingly. Never use the fistula arm for blood draws, IV access or blood pressure measurement. Assess thrill and bruit at every assessment — not once per shift, every assessment. An absent thrill caught at 6am can be repaired. One caught at 6pm after 12 hours of no one checking cannot.",
  "Post-obstructive diuresis after relieving chronic urinary retention is a genuine emergency masquerading as a success. The patient who suddenly produces 500mL/hour of urine after catheterisation is at risk of severe dehydration and electrolyte imbalance. Monitor hourly output, electrolytes every 4-6 hours and replace 50-75% of losses if output exceeds 200mL/hour.",
  "In CKD, phosphate binders must be taken WITH meals — not before, not after. They work by binding dietary phosphate in the GI tract during digestion. A patient who takes their calcium carbonate with their morning glass of water two hours before breakfast is getting no phosphate-binding benefit at all. This teaching point is tested on NCLEX and matters clinically.",
  "The peritoneal dialysis effluent is a window into the peritoneal cavity — look at it every exchange. Cloudy effluent is peritonitis until proven otherwise. A patient who reports their drain bag 'looks a bit different' or 'cloudier than usual' deserves immediate cell count and culture. Peritonitis treated early (within hours of first cloudy bag) responds well. Peritonitis treated days later may result in catheter loss and permanent PD abandonment.",
];

export default function RenalPage() {
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
            <h1 className="font-black text-base text-gray-900">🫘 Renal</h1>
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
                🫘 Renal nursing is high yield on NCLEX. Master AKI classification, hyperkalaemia emergency management, dialysis complications and CKD management!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most critical renal safety points — these save lives and appear on NCLEX!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Renal Nursing!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review AKI classification, hyperkalaemia management and dialysis complications." :
                        "Keep studying! Focus on pre-renal vs intrinsic AKI, hyperkalaemia treatment sequence and dialysis access care."}
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
