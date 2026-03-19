"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Gastrointestinal Nursing",
    icon: "🫃",
    color: "blue",
    content: [
      "The gastrointestinal (GI) system extends from the mouth to the anus — responsible for ingestion, digestion, absorption of nutrients and elimination of waste",
      "GI ASSESSMENT: Inspect (distension, scars, ostomies), Auscultate (bowel sounds — BEFORE percussion/palpation — auscultation first is the correct sequence in GI assessment), Percuss (tympany = gas, dullness = fluid/solid organ), Palpate (tenderness, guarding, rigidity, masses)",
      "NORMAL BOWEL SOUNDS: 5-35/minute. Hyperactive (high-pitched, frequent) = early bowel obstruction, diarrhoea, hunger. Hypoactive/absent = paralytic ileus, post-operative, peritonitis. Borborygmi = very loud, prolonged gurgling = hyperperistalsis",
      "GI PAIN PATTERNS: Visceral pain (dull, poorly localised, midline) vs Somatic pain (sharp, well-localised — peritoneal irritation). Referred pain: Right shoulder = liver/gallbladder (phrenic nerve). Left shoulder (Kehr's sign) = splenic rupture. Back pain = pancreas, aorta, kidneys",
      "PERITONITIS SIGNS: Rebound tenderness (pain worse on releasing pressure), guarding (voluntary), rigidity (involuntary — board-like abdomen), Blumberg's sign, absent bowel sounds. Patient lies still — movement worsens pain. SURGICAL EMERGENCY",
      "NASOGASTRIC TUBE (NGT) PLACEMENT VERIFICATION: GOLD STANDARD = CXR. pH of aspirate <5.5 (strongly suggests gastric placement). Auscultation of air 'whoosh' is UNRELIABLE and NOT recommended as sole verification. NEVER feed through an NGT until position confirmed",
      "NCLEX heavily tests: GI bleeding recognition and management, bowel obstruction vs ileus, liver failure complications, pancreatitis, inflammatory bowel disease and GI surgery complications",
    ],
  },
  {
    title: "Upper GI Bleeding",
    icon: "🩸",
    color: "red",
    content: [
      "UPPER GI BLEEDING (UGIB): Bleeding proximal to the ligament of Treitz (oesophagus, stomach, duodenum). Presents as HAEMATEMESIS (vomiting blood — bright red = active bleeding, coffee-ground = older blood) and/or MELAENA (black, tarry, foul-smelling stools — digested blood)",
      "CAUSES: Peptic ulcer disease (most common — 40-50%), oesophageal varices (2nd most common — highest mortality), Mallory-Weiss tear (mucosal tear at gastro-oesophageal junction from forceful vomiting), gastritis/erosions, Dieulafoy lesion (submucosal artery), angiodysplasia, gastric cancer",
      "ROCKALL SCORE: Predicts UGIB mortality. Factors: age, shock (HR, SBP), comorbidity, endoscopic diagnosis, stigmata of haemorrhage. Score 0-2 = low risk, ≥5 = high risk",
      "BLATCHFORD SCORE: Predicts need for intervention (transfusion, endoscopy, surgery). Uses: blood urea, haemoglobin, SBP, pulse, melaena, syncope, hepatic/cardiac disease. Score 0 = can be managed outpatient",
      "IMMEDIATE MANAGEMENT — ABCDE approach: Airway (protect — unconscious patient, active haematemesis). Two large-bore IV cannulae (14-16G). Fluid resuscitation (crystalloid initially). Bloods (FBC, coagulation, crossmatch). Urgent endoscopy (diagnosis + treatment)",
      "BLOOD TRANSFUSION: TARGET Hb 70-80 g/L (restrictive transfusion strategy — shown superior to liberal in UGIB — TRICC trial). Exception: Cardiovascular disease — target Hb 80-100",
      "PROTON PUMP INHIBITORS (PPIs): IV PPI (pantoprazole, esomeprazole) — reduces gastric acid, stabilises clot. Pre-endoscopy IV PPI reduces stigmata of haemorrhage. Post-endoscopy IV PPI 72 hours for high-risk lesions",
      "ENDOSCOPY: Within 24 hours (urgent if haemodynamically unstable — within 12 hours). Achieves haemostasis in 80-90% of cases. Methods: injection therapy (adrenaline), thermal coagulation, haemoclipping, band ligation (varices)",
      "NURSING: Nil by mouth, IV access, vital signs every 15-30 minutes, strict fluid balance, blood transfusion preparation, crossmatch, stool/vomit description documentation, prepare for endoscopy",
    ],
  },
  {
    title: "Oesophageal Varices",
    icon: "🩸",
    color: "red",
    content: [
      "OESOPHAGEAL VARICES: Dilated submucosal veins in the oesophagus from PORTAL HYPERTENSION — most commonly from liver cirrhosis. Present in 50% of cirrhotics. Variceal bleeding has 20-30% mortality per episode",
      "PORTAL HYPERTENSION: Portal pressure >10 mmHg (normal 5-8 mmHg). Causes: cirrhosis (most common), portal vein thrombosis, Budd-Chiari syndrome, schistosomiasis. Results in: varices, splenomegaly, ascites, hepatic encephalopathy",
      "VARICEAL BLEEDING PRESENTATION: Massive haematemesis (often large volume bright red blood), haemodynamic compromise (hypotension, tachycardia), melaena, may precipitate hepatic encephalopathy (blood = protein load)",
      "IMMEDIATE MANAGEMENT of active variceal bleeding:",
      "VASOACTIVE DRUGS (given IMMEDIATELY — before or simultaneously with endoscopy): Terlipressin (first-line in many countries — vasopressin analogue, reduces portal pressure), octreotide/somatostatin (reduces splanchnic blood flow). Give for 2-5 days",
      "ENDOSCOPIC BAND LIGATION (EBL): Treatment of choice for oesophageal varices. Bands placed on varices to obliterate them. SCLEROTHERAPY (injection of sclerosant into varices) — alternative",
      "ANTIBIOTICS: ALL patients with variceal bleeding receive antibiotics (ceftriaxone) — reduces infection risk (spontaneous bacterial peritonitis, pneumonia) AND reduces risk of early re-bleeding",
      "SENGSTAKEN-BLAKEMORE TUBE (Minnesota tube): Tamponade tube — gastric and oesophageal balloons inflated to physically compress varices. Used as BRIDGE to definitive treatment when endoscopy fails or unavailable. Risk of oesophageal necrosis/rupture. Patient must be intubated first",
      "TIPS (Transjugular Intrahepatic Portosystemic Shunt): Radiologically-placed shunt between portal and hepatic veins — decompresses portal system. Used for refractory variceal bleeding. Complication: worsens hepatic encephalopathy (portal blood bypasses liver)",
      "PRIMARY PREVENTION (prophylaxis): NON-SELECTIVE BETA-BLOCKERS (propranolol, carvedilol, nadolol) — reduce portal pressure. Target HR 55-60 or 25% reduction. Endoscopic band ligation (EBL) for moderate-large varices if beta-blockers not tolerated",
    ],
  },
  {
    title: "Lower GI Bleeding",
    icon: "🩸",
    color: "orange",
    content: [
      "LOWER GI BLEEDING (LGIB): Bleeding distal to the ligament of Treitz (small bowel — rare, colon — most common). Presents as HAEMATOCHEZIA (bright red blood per rectum or dark red blood mixed with stool)",
      "CAUSES: Diverticular disease (most common in adults >60 — usually painless, large volume, self-limiting 80%), colorectal polyps/cancer, angiodysplasia (arteriovenous malformations — especially in elderly, CKD, aortic stenosis), ischaemic colitis, inflammatory bowel disease (IBD), haemorrhoids (most common cause of rectal bleeding overall — bright red blood on toilet paper, surface of stool, drips after defecation — NOT mixed with stool), anal fissure",
      "BRIGHT RED BLOOD PER RECTUM: Most commonly from anorectal source (haemorrhoids, fissure). IMPORTANT: 10-15% of 'LGIB' is actually rapid UGIB — always exclude upper source in significant haematochezia",
      "HAEMORRHOIDS: Internal (above dentate line — painless bleeding, prolapse), External (below dentate line — painful, thrombosis risk). Conservative management: high-fibre diet, increased fluids, sitz baths, topical agents. Procedures: rubber band ligation, sclerotherapy, haemorrhoidectomy for severe",
      "ANAL FISSURE: Longitudinal tear in anal mucosa — usually at 6 o'clock (posterior midline). Intense pain with defecation, bright red blood on tissue. Often associated with constipation, passage of hard stool. Treatment: topical nitrates (GTN) or diltiazem cream (relax internal sphincter), stool softeners, increase fibre and water",
      "DIVERTICULAR DISEASE: DIVERTICULOSIS (pouches without inflammation — mostly asymptomatic). DIVERTICULITIS (inflamed diverticula — left lower quadrant pain, fever, change in bowel habit, elevated WCC, CRP). Complications: perforation, abscess, fistula, obstruction. CT abdomen is diagnostic. Treatment: antibiotics (IV in moderate-severe), surgery if complicated",
      "NURSING in LGIB: IV access, vital signs, fluid balance, blood transfusion if significant, stool description documentation (colour, consistency, amount, frequency), bowel sounds assessment, abdominal assessment, prepare for colonoscopy or CT angiography",
    ],
  },
  {
    title: "Bowel Obstruction vs Paralytic Ileus",
    icon: "🚨",
    color: "orange",
    content: [
      "MECHANICAL BOWEL OBSTRUCTION: Physical blockage of intestinal lumen. SMALL BOWEL OBSTRUCTION (SBO) most common cause: adhesions (post-surgical — most common overall), hernias (internal or external), malignancy, volvulus, intussusception (telescoping — children). LARGE BOWEL OBSTRUCTION (LBO): Colorectal cancer (most common), volvulus (sigmoid most common in adults, caecal), diverticular stricture, faecal impaction",
      "BOWEL OBSTRUCTION CLINICAL FEATURES: COLICKY abdominal pain (comes in waves — peristalsis against obstruction), vomiting (early and prominent in SBO, late in LBO), abdominal DISTENSION (more prominent in LBO), CONSTIPATION/OBSTIPATION (no flatus = complete obstruction), HIGH-PITCHED tinkling bowel sounds (early — 'ladder pattern' on plain AXR for SBO)",
      "CLOSED-LOOP OBSTRUCTION: Both ends of a loop blocked (e.g., sigmoid volvulus). Risk of rapid ischaemia and perforation. STRANGULATION: Compromised blood supply to obstructed bowel — signs: fever, severe constant pain, peritonism, shock, elevated WCC. SURGICAL EMERGENCY — ischaemia → necrosis → perforation → peritonitis",
      "IMAGING: Plain AXR (air-fluid levels, dilated loops — SBO: central dilated loops with valvulae conniventes; LBO: peripheral, haustral markings). CT ABDOMEN is gold standard (identifies cause, site, complications). Gastrograffin (water-soluble contrast) enema for LBO",
      "PARALYTIC ILEUS (Adynamic ileus): LOSS OF PERISTALSIS — NO mechanical obstruction. Bowel dysfunctions. CAUSES: Post-operative (most common — normal after major abdominal/retroperitoneal surgery), peritonitis, electrolyte imbalance (HYPOKALAEMIA most common — K essential for smooth muscle function), drugs (opioids, anticholinergics), intra-abdominal infection, trauma",
      "ILEUS vs OBSTRUCTION DISTINCTION: Ileus — generalised distension, absent/decreased bowel sounds, resolves without surgery. Obstruction — colicky pain, high-pitched bowel sounds (early), dilated loops proximal to blockage, may require surgery",
      "MANAGEMENT of obstruction: Nil by mouth, NGT decompression (reduces distension, vomiting risk), IV fluid resuscitation, electrolyte correction, analgesia. Surgery for: strangulation, complete obstruction not resolving, LBO. Conservative management (NGT + observation) for partial SBO from adhesions",
      "VOLVULUS SPECIFIC: SIGMOID volvulus — 'coffee bean' or 'omega loop' sign on AXR. Flexible sigmoidoscopy for decompression if not ischaemic. CAECAL volvulus — right iliac fossa distension, right-sided AXR dilation — usually requires surgery",
    ],
  },
  {
    title: "Liver Failure — Acute and Chronic",
    icon: "🫀",
    color: "orange",
    content: [
      "ACUTE LIVER FAILURE (ALF): Rapid onset hepatocellular dysfunction with coagulopathy (INR ≥1.5) and encephalopathy in a patient WITHOUT pre-existing liver disease. Formerly called 'fulminant hepatic failure'",
      "CAUSES of ALF: Paracetamol overdose (most common in developed countries — most treatable — N-acetylcysteine is antidote), Viral hepatitis (HAV, HBV, HEV in pregnancy), drug-induced liver injury (DILI), Wilson's disease (acute), Amanita phalloides (death cap mushroom), ischaemic hepatitis ('shock liver' — prolonged hypoperfusion), autoimmune hepatitis, Budd-Chiari syndrome",
      "PARACETAMOL HEPATOTOXICITY: Risk higher with: alcohol use, malnutrition (depleted glutathione), enzyme-inducing drugs (rifampicin, carbamazepine — increase NAPQI production). NOMOGRAM (Rumack-Matthew) used to determine treatment threshold. N-ACETYLCYSTEINE (NAC): antidote — replenishes glutathione, most effective within 8-10 hours but still beneficial up to 24-36 hours. Give IV NAC regardless of time if uncertainty about ingestion timing or if INR rising",
      "KING'S COLLEGE CRITERIA (KCC): Identifies ALF patients requiring URGENT LIVER TRANSPLANT LISTING. Paracetamol: pH <7.30 OR (PT >100s + creatinine >300 + grade III/IV encephalopathy). Non-paracetamol: PT >100s OR ≥3 of: age <10 or >40, jaundice >7 days before encephalopathy, bilirubin >300 μmol/L, PT >50s, non-A non-B hepatitis or drug reaction",
      "CHRONIC LIVER DISEASE (CLD)/CIRRHOSIS: Irreversible fibrosis replacing normal hepatic parenchyma. Causes: Alcohol (most common in developed world), NAFLD/NASH, viral hepatitis (HBV, HCV), autoimmune (PBC, PSC, AIH), haemochromatosis, Wilson's disease",
      "CHILD-PUGH SCORE (assess cirrhosis severity): 5 parameters — each scored 1-3: Ascites, Bilirubin, Albumin, PT/INR, Encephalopathy. Class A (5-6): compensated, good prognosis. Class B (7-9): significant functional compromise. Class C (10-15): decompensated — high mortality",
      "MELD SCORE (Model for End-Stage Liver Disease): 6.43 × ln(INR) + 9.57 × ln(creatinine) + 3.78 × ln(bilirubin) + 6.43. Used for liver transplant prioritisation. MELD >15 = transplant benefit outweighs risk. MELD >25 = very high 90-day mortality without transplant",
    ],
  },
  {
    title: "Liver Failure Complications — Ascites and SBP",
    icon: "💧",
    color: "orange",
    content: [
      "ASCITES: Accumulation of fluid in the peritoneal cavity. Most common complication of cirrhosis. Develops when portal hypertension + hypoalbuminaemia (low oncotic pressure) + RAAS activation (sodium/water retention) coexist",
      "SERUM-ASCITES ALBUMIN GRADIENT (SAAG): Serum albumin − Ascites albumin. SAAG ≥1.1 g/dL = PORTAL HYPERTENSION (cirrhosis, cardiac ascites, Budd-Chiari). SAAG <1.1 g/dL = NON-PORTAL HYPERTENSION cause (malignancy, TB, pancreatitis, nephrotic syndrome)",
      "ASCITES MANAGEMENT: Sodium restriction (<2g/day), diuretics (SPIRONOLACTONE first-line for cirrhotic ascites — aldosterone antagonist, starts at 100mg/day, titrate to 400mg; add FUROSEMIDE if inadequate response — typical ratio 100mg spiro: 40mg frusemide), daily weights, fluid restriction if Na <125",
      "LARGE VOLUME PARACENTESIS (LVP): Therapeutic — removes ascitic fluid (typically 4-6L per session). ALBUMIN infusion (6-8g per litre drained) is mandatory for drainage >5L — prevents paracentesis-induced circulatory dysfunction (PICD — splanchnic vasodilation → intravascular depletion → AKI, hepatorenal syndrome)",
      "SPONTANEOUS BACTERIAL PERITONITIS (SBP): Infection of ascitic fluid WITHOUT obvious intra-abdominal source — occurs in cirrhotic patients with portal hypertension. DIAGNOSTIC CRITERIA: Ascitic fluid PMN count ≥250 cells/μL. Most common organisms: E. coli, Klebsiella, Streptococcus. Culture ascites before antibiotics",
      "SBP TREATMENT: IV CEFOTAXIME or CEFTRIAXONE (first-line), 5-7 days. IV ALBUMIN (1.5 g/kg at diagnosis + 1 g/kg at day 3) — reduces AKI and mortality (SORT trial). Monitor renal function (SBP is a common precipitant of hepatorenal syndrome)",
      "SBP PROPHYLAXIS: Primary (no prior SBP but high risk — protein <15 g/L in ascites): norfloxacin or co-trimoxazole. Secondary (after first SBP): norfloxacin 400mg daily long-term (high recurrence risk without prophylaxis)",
      "HEPATORENAL SYNDROME (HRS): Functional renal failure in cirrhosis — intense renal vasoconstriction in response to splanchnic vasodilation. No intrinsic renal pathology — kidneys function normally in a healthy liver. TYPE 1 HRS (acute — rapid AKI within 2 weeks), TYPE 2 HRS (slower, associated with refractory ascites). Treatment: terlipressin + albumin (vasopressin analogue reduces splanchnic vasodilation). Liver transplantation is definitive",
    ],
  },
  {
    title: "Liver Failure Complications — Encephalopathy and Coagulopathy",
    icon: "🧠",
    color: "purple",
    content: [
      "HEPATIC ENCEPHALOPATHY (HE): Neuropsychiatric syndrome from liver failure — ammonia and other toxins accumulate. GRADING (West Haven Criteria):",
      "GRADE I: Subtle — mild confusion, impaired attention, altered sleep-wake cycle, mild asterixis",
      "GRADE II: Obvious — drowsiness, disorientation, inappropriate behaviour, obvious asterixis",
      "GRADE III: Stupor — somnolent but arousable, gross disorientation, asterixis present, incoherent speech",
      "GRADE IV: COMA — unconscious, may or may not respond to painful stimuli. Absent asterixis (cannot assess)",
      "ASTERIXIS (FLAPPING TREMOR): Involuntary jerking of outstretched hands from metabolic encephalopathy. Seen in: hepatic encephalopathy, uraemia, CO2 narcosis. Test: ask patient to dorsiflex wrists with arms extended — irregular flapping = positive",
      "PRECIPITANTS of HE (MUST identify and treat): INFECTION (most common — SBP, pneumonia, UTI), GI BLEEDING (blood = protein substrate for ammonia), CONSTIPATION (increased ammonia production/absorption time), MEDICATIONS (opioids, benzodiazepines, sedatives), ELECTROLYTE DISTURBANCE (hypokalaemia, hyponatraemia, dehydration), EXCESSIVE PROTEIN INTAKE",
      "HE TREATMENT: LACTULOSE (first-line) — acidifies colon, traps NH4+, promotes ammonia excretion via stool. Target 2-3 soft stools/day. RIFAXIMIN (non-absorbable antibiotic) — reduces ammonia-producing gut bacteria — used for recurrence prevention. DIETARY PROTEIN: Do NOT severely restrict — worsens malnutrition and paradoxically worsens HE. Moderate protein with BCAA supplementation",
      "COAGULOPATHY of liver disease: Liver cannot synthesise vitamin K-dependent clotting factors (II, VII, IX, X) and non-vitamin K factors (V, XI). INR elevated. THROMBOCYTOPENIA (splenomegaly causes platelet sequestration). PARADOX: Liver disease patients also have reduced anticoagulant protein C and S — 'rebalanced haemostasis' — often do NOT need prophylactic FFP for procedures unless severely coagulopathic",
      "VITAMIN K in liver disease: Give IM or IV vitamin K if obstructive jaundice — malabsorption of fat-soluble vitamins. Does NOT help if hepatocellular failure (cannot synthesise factors regardless of vitamin K availability)",
    ],
  },
  {
    title: "Acute Pancreatitis",
    icon: "🔥",
    color: "red",
    content: [
      "ACUTE PANCREATITIS: Acute inflammation of the pancreas from premature activation of pancreatic enzymes (auto-digestion). Ranges from mild (80%) to severe necrotising pancreatitis with multi-organ failure (20%)",
      "CAUSES — GET SMASHED mnemonic: Gallstones (most common — 40%), Ethanol/alcohol (second most common — 30%), Trauma, Steroids, Mumps (viral), Autoimmune, Scorpion sting, Hyperlipidaemia/Hypercalcaemia, ERCP (procedure-related), Drugs (azathioprine, thiazides, furosemide, valproate, ACE inhibitors)",
      "DIAGNOSIS (Revised Atlanta Criteria — 2 of 3): Typical abdominal pain (acute onset, severe, epigastric, radiating to back), Lipase >3× ULN (or amylase >3×), Characteristic CT findings",
      "CLINICAL FEATURES: Severe epigastric pain radiating to BACK ('boring through to the back'), onset often after large meal or alcohol, nausea and vomiting (not relieved by vomiting — unlike gastroenteritis), fever, tachycardia, abdominal tenderness and rigidity in severe cases",
      "CULLEN'S SIGN: Periumbilical bruising (retroperitoneal haemorrhage tracking). GREY TURNER'S SIGN: Flank bruising (haemorrhagic pancreatitis tracking along retroperitoneal planes). Both = HAEMORRHAGIC PANCREATITIS — poor prognosis",
      "SEVERITY SCORING: RANSON'S criteria (11 factors — 5 at admission, 6 at 48 hours). APACHE II score. BISAP score (5 factors: BUN >25, Impaired mental status, SIRS, Age >60, Pleural effusion). CTSI (CT Severity Index) using contrast CT",
      "MANAGEMENT: AGGRESSIVE IV FLUID RESUSCITATION — 250-500 mL/hour crystalloid (lactated Ringer's preferred over normal saline — reduces systemic inflammation). Pain management (opioids — IV morphine or hydromorphone). NUTRITION: Early enteral nutrition (within 24-48 hours) — NASOJEJUNAL or NASOGASTRIC route — superior to parenteral nutrition. Prevents bacterial translocation, reduces complications. NIL BY MOUTH only in initial resuscitation phase — restart oral/NG feeding as tolerated",
      "GALLSTONE PANCREATITIS: ERCP within 24-72 hours if cholangitis or persistent biliary obstruction. Cholecystectomy during same admission (index admission) or within 2 weeks if mild — prevents recurrence",
      "COMPLICATIONS: PANCREATIC NECROSIS (CT with IV contrast — non-enhancing areas = necrosis), INFECTED NECROSIS (fever, clinical deterioration after initial improvement — CT-guided FNA, IV antibiotics, often surgical/endoscopic debridement), PSEUDOCYST (fluid collection surrounded by fibrous wall — develops after 4+ weeks), WALLED-OFF NECROSIS (WON), SPLENIC VEIN THROMBOSIS",
    ],
  },
  {
    title: "Inflammatory Bowel Disease (IBD)",
    icon: "🔴",
    color: "purple",
    content: [
      "IBD encompasses CROHN'S DISEASE and ULCERATIVE COLITIS (UC) — chronic relapsing inflammatory conditions of the GI tract",
      "ULCERATIVE COLITIS (UC): Continuous mucosal inflammation from RECTUM extending PROXIMALLY. Limited to the colon. BLOODY DIARRHOEA is the cardinal symptom. Tenesmus (urgency and sense of incomplete evacuation), mucus per rectum, cramping abdominal pain (relieved by defecation), urgency",
      "UC COMPLICATIONS: Toxic megacolon (life-threatening — colonic diameter >6 cm on AXR, systemic toxicity — fever, tachycardia, hypotension — MEDICAL EMERGENCY — stop antidiarrhoeals, IV steroids, IV fluids, bowel rest, surgical consultation), primary sclerosing cholangitis (PSC — associated with UC), colorectal cancer (risk increases after 8-10 years of extensive UC — requires surveillance colonoscopy)",
      "CROHN'S DISEASE: Transmural (full-thickness) inflammation that can affect ANY part of GI tract from mouth to anus. SKIP LESIONS (patchy, discontinuous). Cobblestoning, fistulae (perianal most common — 30-40%), strictures, abscesses, intestinal obstruction",
      "CROHN'S CLINICAL FEATURES: Diarrhoea (NOT always bloody — right-sided Crohn's often NOT bloody), abdominal pain (right iliac fossa — terminal ileum most commonly involved), weight loss, malnutrition (malabsorption from small bowel disease), perianal disease (fissures, fistulae, skin tags), extraintestinal manifestations",
      "EXTRAINTESTINAL MANIFESTATIONS of IBD (affect both UC and Crohn's): JOINTS (arthralgia, ankylosing spondylitis, sacroiliitis), SKIN (erythema nodosum — tender nodules on shins, pyoderma gangrenosum — ulcerating skin lesions), EYES (uveitis, episcleritis), LIVER (primary sclerosing cholangitis — especially UC)",
      "IBD INVESTIGATIONS: Colonoscopy with biopsy (gold standard for UC and colonic Crohn's). CT enterography/MRI enterography (small bowel Crohn's). Faecal calprotectin (non-invasive marker of GI inflammation — differentiates IBD from IBS). CRP, ESR, FBC, albumin (disease activity markers)",
      "IBD TREATMENT: 5-AMINOSALICYLATES (mesalazine/sulfasalazine) — maintenance in UC. CORTICOSTEROIDS (budesonide, prednisolone, hydrocortisone IV) — acute flares. IMMUNOMODULATORS (azathioprine, 6-mercaptopurine, methotrexate) — maintenance. BIOLOGICS (infliximab, adalimumab — anti-TNF; vedolizumab — gut-specific; ustekinumab). SURGERY: Colectomy curative for UC (patient remains at risk without colon). Crohn's — surgery for complications but NOT curative (recurs at anastomosis)",
    ],
  },
  {
    title: "Peptic Ulcer Disease (PUD)",
    icon: "🔴",
    color: "orange",
    content: [
      "PEPTIC ULCER DISEASE: Disruption of the gastroduodenal mucosa from imbalance between aggressive factors (acid, pepsin, H. pylori) and defensive factors (mucus, bicarbonate, prostaglandins, blood flow)",
      "CAUSES: H. PYLORI infection (most common — 70-90% of duodenal ulcers, 60-70% of gastric ulcers), NSAID/aspirin use (second most common — inhibit COX-1 → reduced prostaglandin → reduced mucosal protection), Zollinger-Ellison syndrome (gastrin-secreting tumour — hypersecretion of acid), stress ulcers (Cushing's ulcer — CNS injury, Curling's ulcer — burns), smoking (impairs healing), alcohol",
      "DUODENAL ULCER: Pain 2-3 hours after meals ('hunger pain' — relieved by food), wakes patient at night, epigastric, more common in young men, H. pylori strongly associated",
      "GASTRIC ULCER: Pain WORSENED by food (unlike duodenal), weight loss (food avoidance due to pain), epigastric, may be malignant (always biopsy gastric ulcers), older patients",
      "H. PYLORI DIAGNOSIS: Urea breath test (preferred non-invasive — uses radiolabelled carbon urea — H. pylori urease cleaves it → radiolabelled CO2 in exhaled breath), stool antigen test, CLO test (rapid urease test on biopsy — endoscopy required), serology (IgG — cannot distinguish active from past infection). STOP PPIs 2 weeks before UBT/stool antigen (false negatives) and antibiotics 4 weeks before",
      "H. PYLORI ERADICATION — TRIPLE THERAPY (standard): PPI (twice daily) + Clarithromycin + Amoxicillin OR Metronidazole. 7-14 days. Eradication rate ~80-90%. QUADRUPLE THERAPY (for clarithromycin-resistant areas or treatment failure): PPI + bismuth + metronidazole + tetracycline",
      "CONFIRM ERADICATION: UBT or stool antigen test — at least 4 weeks after completing treatment (and 2 weeks after stopping PPI)",
      "NSAID-RELATED ULCERS: Switch to selective COX-2 inhibitor (lower GI risk — celecoxib) or gastroprotect with PPI if NSAID must be continued. HIGH-RISK patients: prior ulcer, age >65, anticoagulant use — prescribe PPI with NSAID routinely",
      "ZOLLINGER-ELLISON SYNDROME (ZES): Gastrinoma (usually in duodenum or pancreas) → massive gastric acid hypersecretion → multiple peptic ulcers (often distal/jejunal — atypical locations), diarrhoea (acid inactivates pancreatic enzymes), GORD. Diagnose: FASTING serum gastrin >1000 pg/mL (or >10× ULN) + secretin stimulation test. Treatment: high-dose PPI, surgical resection, octreotide for unresectable",
    ],
  },
  {
    title: "Hepatitis — Viral and Drug-Induced",
    icon: "🦠",
    color: "green",
    content: [
      "HEPATITIS A (HAV): Faecal-oral transmission. ACUTE only — does NOT cause chronic hepatitis or cirrhosis. Self-limiting (95% recover fully). Vaccine-preventable. Severe in elderly and those with pre-existing liver disease. No specific treatment — supportive",
      "HEPATITIS B (HBV): Blood, sexual contact, vertical (mother to child at birth). Can cause acute, CHRONIC hepatitis (5-10% adults, 90% neonates), cirrhosis, hepatocellular carcinoma. HBsAg (surface antigen) = current infection. HBsAb = immunity (vaccination or recovery). HBeAg = active replication (high infectivity). HBV DNA = viral load. TREATMENT: Tenofovir or entecavir (long-term suppression — not cure). Universal vaccination at birth",
      "HEPATITIS C (HCV): Blood-borne (IV drug use most common route in developed countries). Chronic infection in 80% of those infected — 20% develop cirrhosis over 20-30 years. LEADING CAUSE of liver transplantation in many countries. TREATMENT: Direct-acting antivirals (DAAs — sofosbuvir, ledipasvir, daclatasvir — combination regimens 8-12 weeks) — CURE RATES >95%. Screen all adults 18-79 years ONCE (CDC/WHO recommendation). NO VACCINE",
      "HEPATITIS E (HEV): Faecal-oral. ACUTE hepatitis — usually self-limiting. SEVERE in PREGNANCY (mortality 20-25% in third trimester — acute liver failure). Genotype 3 in developed countries — zoonotic, pigs. Chronic HEV in immunocompromised",
      "AUTOIMMUNE HEPATITIS (AIH): Immune-mediated hepatocellular inflammation — women predominate. ANA and anti-smooth muscle antibodies (SMA) positive. Elevated IgG. Liver biopsy shows interface hepatitis, rosette formation. Treatment: prednisolone + azathioprine",
      "PRIMARY BILIARY CHOLANGITIS (PBC): Autoimmune destruction of small intrahepatic bile ducts. Middle-aged women. AMA (anti-mitochondrial antibodies) positive in 95%. Fatigue, pruritus, cholestatic LFTs (elevated ALP, GGT). Treatment: UDCA (ursodeoxycholic acid)",
      "PRIMARY SCLEROSING CHOLANGITIS (PSC): Fibrosing inflammation of intra and extrahepatic bile ducts. Strongly associated with UC (70-80% of PSC patients have UC). Dominant strictures, cholangitis, cholangiocarcinoma risk (20×). ERCP for diagnosis/treatment. Liver transplant for decompensation. NO UDCA benefit (unlike PBC)",
      "DRUG-INDUCED LIVER INJURY (DILI): Idiosyncratic (immune-mediated — unpredictable) or dose-dependent. Common culprits: paracetamol (dose-dependent — most common cause of ALF), antibiotics (amoxicillin-clavulanate most common antibiotic), statins, antiepileptics (phenytoin, carbamazepine, valproate), isoniazid (TB treatment — monitor LFTs). RUCAM scale assesses causality. Treatment: stop offending drug",
    ],
  },
  {
    title: "Colorectal Cancer and GI Tumours",
    icon: "🔬",
    color: "purple",
    content: [
      "COLORECTAL CANCER (CRC): Third most common cancer worldwide. Adenocarcinoma in 95% of cases. The majority arise from adenomatous polyps (adenoma-carcinoma sequence over 5-15 years — this is the rationale for colonoscopic polypectomy and surveillance)",
      "RISK FACTORS: Age >50 (risk increases with age), personal/family history of CRC or adenomatous polyps, IBD (UC >Crohn's — risk after 8-10 years of extensive colitis), hereditary syndromes (FAP — familial adenomatous polyposis, Lynch syndrome/HNPCC), diet (high red meat, low fibre, obesity, alcohol, smoking)",
      "SYMPTOMS by location: RIGHT-SIDED CRC (ascending colon): Iron deficiency anaemia (occult blood loss), weight loss, vague right-sided abdominal pain, palpable mass — often presents late as right colon has large lumen. LEFT-SIDED CRC (descending/sigmoid): Change in bowel habit (alternating constipation and diarrhoea), rectal bleeding, pencil-thin stools, obstructive symptoms — often presents earlier",
      "SCREENING: Colonoscopy every 10 years from age 45-50 (standard risk). FOBT (faecal occult blood test) or FIT (faecal immunochemical test) — annually. Positive FIT/FOBT requires colonoscopy. Flexible sigmoidoscopy every 5 years",
      "DIAGNOSIS: Colonoscopy with biopsy (gold standard). CT staging (chest/abdomen/pelvis — for metastases). CEA level (monitoring — not diagnostic). MRI rectum for rectal cancer (local staging)",
      "STAGING: Duke's/TNM. 5-year survival: Stage I (localised) >90%, Stage II (regional) ~80%, Stage III (lymph node) ~65%, Stage IV (distant metastases) ~10-15%",
      "TREATMENT: Surgery (colonic resection — right or left hemicolectomy, anterior resection, abdominoperineal resection for low rectal cancer — permanent colostomy). ADJUVANT chemotherapy (FOLFOX, CAPOX — stage III and high-risk stage II). RADIOTHERAPY for rectal cancer (neo-adjuvant — shrinks tumour before surgery). METASTATIC disease: chemotherapy + bevacizumab (anti-VEGF), cetuximab/panitumumab (anti-EGFR — only if RAS wild-type)",
      "NURSING: Stoma care education (output monitoring, skin care, bag changes, diet advice, body image support), symptom management, chemotherapy nursing care, pain management, nutritional support",
    ],
  },
  {
    title: "GI Surgery Complications and Nursing Care",
    icon: "🏥",
    color: "blue",
    content: [
      "ANASTOMOTIC LEAK: Breakdown of surgical bowel join — most feared complication. Onset: typically day 3-7 post-operatively. Features: fever, tachycardia, abdominal pain (disproportionate to expected), peritonism, raised CRP (>200 suspicious), elevated WCC. Confirmed: CT with oral contrast or water-soluble enema. Management: IV antibiotics, nil by mouth, washout surgery or radiological drainage",
      "PARALYTIC ILEUS (post-operative): Expected after major abdominal surgery — usually resolves 3-5 days. NGT decompression if significant distension/vomiting. Early mobilisation and enteral feeding promote resolution. Treat underlying causes: hypokalaemia (MOST IMPORTANT — K essential for bowel motility), hypomagnesaemia, medications (opioids)",
      "STOMA CARE: Types: Colostomy (formed stool — usually left-sided, sigmoid), Ileostomy (liquid to semi-liquid stool — right-sided, typically post-colectomy for UC), Urostomy (urine — ileal conduit). Key monitoring: OUTPUT (ileostomy output >1500-2000 mL/day = HIGH OUTPUT — risk of dehydration and electrolyte disturbance — IV fluids, anti-motility agents), COLOUR (pink/red = healthy, pale = poor perfusion, dark/black = ischaemia = EMERGENCY)",
      "HIGH-OUTPUT ILEOSTOMY: Output >1500-2000 mL/day. Management: oral rehydration solutions (not plain water — worsens electrolyte loss), loperamide (anti-motility), codeine phosphate, restrict hyperosmolar fluids, dietary modification. Risk: severe dehydration, hyponatraemia, hypomagnesaemia, AKI",
      "FEEDING POST-GI SURGERY: Early enteral feeding (within 24-48 hours if no complications) — improves outcomes vs prolonged nil by mouth. Oral diet preferred over NGT when safe. Parenteral nutrition only when GI tract cannot be used (extended prolonged ileus, intestinal failure, short bowel syndrome)",
      "SHORT BOWEL SYNDROME: <200 cm functional small bowel remaining — unable to maintain adequate fluid and nutritional absorption. Causes: Crohn's disease (most common), mesenteric ischaemia, volvulus, multiple resections. Management: anti-motility agents, proton pump inhibitors, teduglutide (GLP-2 analogue — promotes intestinal adaptation), long-term home parenteral nutrition (HPN)",
      "DRAIN MANAGEMENT POST-GI SURGERY: Surgical drains monitor for anastomotic leak (bilious or enteric drain fluid = leak), haemorrhage (fresh blood), and facilitate collection drainage. Document drainage type, amount, colour and consistency. HIGH amylase in drain fluid post-pancreatic surgery = pancreatic fistula",
    ],
  },
];

const mnemonics = [
  {
    title: "Causes of Acute Pancreatitis — GET SMASHED",
    acronym: "GETSMASHED",
    breakdown: ["Gallstones (most common)", "Ethanol/alcohol (second)", "Trauma", "Steroids", "Mumps (viral)", "Autoimmune", "Scorpion sting", "Hyperlipidaemia/Hypercalcaemia", "ERCP (procedure)", "Drugs (azathioprine, thiazides)"],
    memory: "GET SMASHED — Gallstones and Ethanol cause 70% of acute pancreatitis. Severe pancreatitis: CULLEN'S (umbilical bruising) and GREY TURNER'S (flank bruising) = haemorrhagic = poor prognosis!",
    color: "red",
  },
  {
    title: "Hepatic Encephalopathy Grades",
    acronym: "GRAD",
    breakdown: ["Grade I: subtle confusion, sleep disturbance, mild asterixis", "Grade II: obvious drowsiness, disorientation, asterixis", "Grade III: stupor, arousable, gross disorientation", "Grade IV: coma, unresponsive"],
    memory: "GRAD — Grade I subtle, Grade II drowsy, Grade III stuporous, Grade IV coma. PRECIPITANTS: Infection (most common), GI bleed, Constipation, Meds (opioids/benzos), Electrolytes. Find and fix the precipitant!",
    color: "purple",
  },
  {
    title: "UC vs Crohn's Disease — Key Differences",
    acronym: "UCCBD",
    breakdown: ["UC: Continuous from RECTUM upward, COLON only, bloody diarrhoea, mucosal inflammation", "Crohn's: Anywhere MOUTH to ANUS, skip lesions, TRANSMURAL, fistulae, strictures, malabsorption"],
    memory: "UC starts at the bottom (rectum) and goes UP continuously — bloody. Crohn's goes ANYWHERE and is FULL THICKNESS — fistulae and strictures are Crohn's trademarks. Surgery CURES UC but NOT Crohn's!",
    color: "purple",
  },
  {
    title: "GI Bleeding — Upper vs Lower Presentation",
    acronym: "HAMB",
    breakdown: ["Haematemesis (vomiting blood) = UPPER GI (proximal to ligament of Treitz)", "Angiodysplasia/Melaena = dark tarry stools = UPPER GI (digested blood = black)", "Melaena = upper GI bleeding", "Bright red blood per rectum (BRBPR) = usually LOWER GI (but rapid UGIB can present as BRBPR — always exclude)"],
    memory: "HAMB — Haematemesis and Melaena = Upper GI. Bright red blood = usually lower. But 10-15% of bright red blood per rectum is from a RAPID upper GI bleed — always think about both!",
    color: "red",
  },
];

const alerts = [
  { text: "NGT PLACEMENT: NEVER feed through an NGT until position confirmed by CXR or pH <5.5. Auscultation ('whoosh' test) is UNRELIABLE — feeds into the lung from a misplaced NGT causes aspiration pneumonia and death!", severity: "high" },
  { text: "TOXIC MEGACOLON: Colon >6cm diameter + systemic toxicity (fever, tachycardia, hypotension) in IBD = STOP ALL ANTIDIARRHOEALS immediately — can worsen distension. IV steroids, bowel rest, urgent surgical review!", severity: "high" },
  { text: "VARICEAL BLEEDING: Give TERLIPRESSIN or OCTREOTIDE immediately (before endoscopy). Give ANTIBIOTICS (ceftriaxone) to ALL patients with variceal bleeding. Sengstaken-Blakemore tube requires INTUBATION first!", severity: "high" },
  { text: "PARACETAMOL OVERDOSE: Give N-ACETYLCYSTEINE — even if >10 hours since ingestion if rising INR or uncertainty about timing. Do NOT wait for LFTs to deteriorate — treat proactively!", severity: "high" },
  { text: "KING'S COLLEGE CRITERIA: pH <7.30 in paracetamol ALF = URGENT LIVER TRANSPLANT LISTING — notify transplant team immediately. This patient will likely die without transplantation!", severity: "high" },
  { text: "SBP DIAGNOSIS: Ascitic PMN ≥250 cells/μL = treat immediately with ceftriaxone + albumin. Give IV ALBUMIN with SBP treatment — reduces AKI and mortality (1.5 g/kg at diagnosis, 1g/kg at day 3)!", severity: "high" },
  { text: "LARGE VOLUME PARACENTESIS (>5L): MUST give albumin 6-8g per litre drained — prevents paracentesis-induced circulatory dysfunction (PICD) which causes AKI and hepatorenal syndrome!", severity: "high" },
  { text: "ANASTOMOTIC LEAK: Day 3-7 post-op fever + disproportionate abdominal pain + rising CRP = leak until proven otherwise. CT with contrast — do NOT delay!", severity: "high" },
  { text: "ILEOSTOMY OUTPUT >1500 mL/day = HIGH OUTPUT — risk of severe dehydration, hyponatraemia and AKI. Use oral rehydration solutions (NOT plain water), loperamide, dietary modification!", severity: "medium" },
  { text: "H. PYLORI TESTING: Stop PPIs 2 WEEKS before urea breath test or stool antigen test — PPIs suppress H. pylori and cause FALSE NEGATIVE results!", severity: "medium" },
  { text: "PANCREATITIS NUTRITION: Early enteral nutrition (within 24-48 hours) is SUPERIOR to parenteral nutrition AND to prolonged nil by mouth. NG feeding is as effective as nasojejunal in mild-moderate pancreatitis!", severity: "medium" },
  { text: "GREY TURNER'S SIGN (flank bruising) and CULLEN'S SIGN (umbilical bruising) in pancreatitis = HAEMORRHAGIC PANCREATITIS — indicates severe disease with poor prognosis!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A patient is admitted with haematemesis. On assessment: BP 88/56, HR 124, cool peripheries, Hb 72 g/L. The patient has known alcohol-related liver cirrhosis and takes propranolol. Which initial intervention is MOST important alongside IV fluid resuscitation?",
    options: [
      "Urgent blood transfusion to Hb >100 g/L — aggressive resuscitation is needed in variceal bleeding",
      "IV terlipressin or octreotide AND IV ceftriaxone — vasoactive drug to reduce portal pressure and antibiotics should be given immediately in suspected variceal bleeding, before endoscopy",
      "Urgent endoscopy within 30 minutes — endoscopic band ligation is the definitive treatment and should not be delayed",
      "IV PPI infusion (pantoprazole) — acid suppression is the priority to stabilise the clot",
    ],
    correct: 1,
    explanation: "In suspected OESOPHAGEAL VARICEAL BLEEDING (known cirrhosis + haematemesis + haemodynamic compromise): VASOACTIVE DRUG (terlipressin or octreotide/somatostatin) must be given IMMEDIATELY — even before endoscopy is available. These agents reduce splanchnic blood flow and portal pressure → reduce variceal bleeding → improve outcomes. ANTIBIOTICS (ceftriaxone) should be given to ALL patients with variceal bleeding — reduces infection complications AND reduces early re-bleeding risk (proven in multiple RCTs). BLOOD TRANSFUSION in variceal bleeding: RESTRICTIVE strategy (target Hb 70-80 g/L) — over-transfusion increases portal pressure and risk of re-bleeding (TRIGGER trial). Transfusing to Hb >100 is harmful in variceal bleeding. IV PPI is important for peptic ulcer bleeding but NOT the priority in variceal bleeding — terlipressin/octreotide is. Endoscopy should follow resuscitation (within 12-24 hours) but vasoactive drugs and antibiotics must start immediately.",
    wrongExplanations: [
      "WRONG: Restrictive transfusion strategy (target Hb 70-80 g/L) is SUPERIOR to liberal transfusion in variceal bleeding. Transfusing to Hb >100 worsens portal hypertension and increases rebleeding risk. The TRIGGER trial demonstrated clear harm from over-transfusion in cirrhotic bleeding.",
      "",
      "WRONG: Endoscopy within 12-24 hours is standard (earlier if unstable). However, vasoactive drugs and antibiotics must be started IMMEDIATELY — they buy time and improve the endoscopic field. Rushing to endoscopy in 30 minutes without first giving octreotide/terlipressin misses proven pre-endoscopic treatment.",
      "WRONG: IV PPI is the priority treatment for PEPTIC ULCER BLEEDING — not variceal bleeding. In variceal bleeding, vasoactive drug + antibiotics is the key pharmacological combination.",
    ],
  },
  {
    level: "Knowledge",
    question: "A nurse is caring for a patient who underwent sigmoid colectomy with end colostomy 2 days ago. On assessment, the nurse observes the stoma is dark purple-black in colour. The patient has minimal stoma output and reports no pain at the stoma site. What is the nurse's MOST appropriate action?",
    options: [
      "Document the finding and reassess in 4 hours — stoma discolouration is common in the early post-operative period",
      "Notify the surgeon IMMEDIATELY — dark purple-black stoma indicates stoma ISCHAEMIA, which is a surgical emergency requiring urgent assessment and likely revision",
      "Apply warm compresses to the stoma — this will improve blood flow and restore colour",
      "Encourage the patient to increase fluid intake — dehydration causes stoma discolouration",
    ],
    correct: 1,
    explanation: "STOMA COLOUR is the primary indicator of stoma viability and blood supply. NORMAL stoma: pink/red — resembles buccal mucosa. PALE stoma: reduced perfusion — concerning. DARK PURPLE/BLACK stoma: STOMA ISCHAEMIA — necrosis of stoma tissue from inadequate blood supply. This is a SURGICAL EMERGENCY. Causes: excessive tension on mesentery, tight fascial opening, vascular compromise from retraction of mesentery. ASSESSMENT: Use a torch to assess depth of ischaemia — superficial ischaemia (mucosa only) may be managed conservatively; deep ischaemia extending below the fascia requires emergency surgical revision. NOTIFY SURGEON IMMEDIATELY. Do not delay — ischaemic bowel progresses to full necrosis, perforation and peritonitis rapidly. Warm compresses and fluid intake do not address vascular compromise.",
    wrongExplanations: [
      "WRONG: Dark purple-black stoma is NOT a normal early post-operative finding. Pink/red is normal. Any significant colour change from pink to purple or black indicates compromised blood supply and is never appropriate to 'wait and see.'",
      "",
      "WRONG: Warm compresses cannot restore blood flow to ischaemic stoma tissue — the problem is mechanical (vascular compromise) not thermal. This delays necessary surgical assessment.",
      "WRONG: Dehydration does not cause stoma ischaemia. Dark purple-black colour indicates vascular compromise — a surgical problem requiring urgent assessment.",
    ],
  },
  {
    level: "Application",
    question: "A 52-year-old man with known cirrhosis (Child-Pugh B) is admitted with confusion, asterixis and abdominal discomfort. Ascitic tap shows PMN 320 cells/μL with 78% neutrophils. His creatinine is 108 μmol/L (baseline 75) and albumin is 26 g/L. Which combination of treatments is MOST evidence-based for this presentation?",
    options: [
      "Oral ciprofloxacin for 5 days — SBP can be treated with oral antibiotics in non-severe cases",
      "IV ceftriaxone 2g daily AND IV albumin 1.5 g/kg on day 1 and 1 g/kg on day 3 — evidence-based treatment for SBP that reduces AKI and mortality",
      "IV ceftriaxone alone — albumin is expensive and not evidence-based in SBP",
      "Large volume paracentesis first to relieve peritoneal infection, then IV antibiotics",
    ],
    correct: 1,
    explanation: "SPONTANEOUS BACTERIAL PERITONITIS (SBP) MANAGEMENT: Diagnosis confirmed (ascitic PMN ≥250 cells/μL). EVIDENCE-BASED TREATMENT COMBINATION: IV CEFTRIAXONE (third-generation cephalosporin) 2g daily for 5-7 days — first-line antibiotic covering gram-negative organisms (E. coli, Klebsiella) and gram-positive (Streptococcus). IV ALBUMIN: The SORT trial (Sortè et al.) demonstrated that albumin infusion with SBP antibiotics reduces AKI and mortality. Protocol: 1.5 g/kg at diagnosis (day 1) and 1 g/kg at day 3. Mechanism: prevents effective intravascular depletion and splanchnic vasodilation that triggers hepatorenal syndrome (HRS). This patient's rising creatinine (75→108) with SBP already suggests early HRS development — albumin is essential here. ORAL ANTIBIOTICS: Appropriate only for mild uncomplicated SBP — this patient has encephalopathy, rising creatinine and low albumin (complex presentation) requiring IV treatment. Paracentesis is NOT used as SBP treatment — it is diagnostic and therapeutic for ascites relief, not infection control.",
    wrongExplanations: [
      "WRONG: Oral antibiotics are appropriate only for uncomplicated mild SBP in outpatient management. This patient has encephalopathy, rising creatinine and is clinically compromised — IV antibiotics are required.",
      "",
      "WRONG: Albumin IS evidence-based in SBP (SORT trial — demonstrated clear reduction in AKI and mortality). Omitting albumin in SBP management leaves the patient at significantly higher risk of hepatorenal syndrome.",
      "WRONG: Paracentesis is NOT a treatment for SBP — it drains fluid but does not treat the infection in the remaining ascitic fluid or eliminate the bacteria. Antibiotics are the treatment. Paracentesis for symptom relief requires albumin replacement as a separate indication.",
    ],
  },
  {
    level: "Application",
    question: "A 68-year-old woman is 5 days post-anterior resection with primary anastomosis for sigmoid colon cancer. She develops fever (38.9°C), tachycardia (HR 116), and reports increasing lower abdominal pain described as 'worse than expected.' CRP has risen from 85 on day 3 to 285 today. She has not passed flatus or stool. WCC is 16.2 × 10⁹/L. What is the nurse's MOST urgent concern and action?",
    options: [
      "Post-operative ileus — encourage mobilisation and remove NGT if in situ",
      "Surgical site infection — change wound dressings and culture wound",
      "Anastomotic leak — notify surgeon urgently and prepare for CT abdomen with oral and IV contrast to assess anastomotic integrity",
      "Deep vein thrombosis — check for lower limb swelling and request duplex ultrasound",
    ],
    correct: 2,
    explanation: "ANASTOMOTIC LEAK — classic presentation on day 5 post-anterior resection. DIAGNOSTIC CRITERIA: Day 3-7 (classic timing — peak leak incidence), Fever (38.9°C), Tachycardia (116 — systemic response), DISPROPORTIONATE abdominal pain (more than expected for this stage), RISING CRP (85→285 — CRP >200 post-op is highly suspicious for anastomotic leak), Elevated WCC (16.2), No passage of flatus or stool (obstruction from local inflammation/peritonism). This is the most feared complication of colorectal surgery — if untreated, progression to faecal peritonitis, septic shock and death. IMMEDIATE ACTIONS: Notify surgeon URGENTLY, CT abdomen/pelvis with oral AND IV contrast (detects free air, extraluminal contrast, fluid collections, peritoneal contamination), IV antibiotics (broad-spectrum — piperacillin-tazobactam), nil by mouth, IV fluid resuscitation, prepare for likely return to theatre (surgical washout ± Hartmann's procedure — bring out colostomy). CRP >200 on day 3-5 post-colorectal surgery has been validated as a reliable early predictor of anastomotic leak.",
    wrongExplanations: [
      "WRONG: Post-operative ileus (day 5 is prolonged but possible) does NOT explain fever, tachycardia, rising CRP of 285 or disproportionate pain. Ileus is a mechanical issue — the systemic inflammatory response here points to a leak or serious infection.",
      "WRONG: Surgical site infection is possible but does not explain the magnitude of CRP rise (285), fever, tachycardia and severe abdominal pain — these features together in a post-colorectal surgery patient indicate intra-abdominal contamination (leak) not a simple wound infection.",
      "",
      "WRONG: DVT presents with leg symptoms and does not explain fever, abdominal pain, rising CRP and tachycardia in the context of recent colorectal surgery. The abdominal features clearly point to an intra-abdominal complication.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a 45-year-old man admitted with acute severe pancreatitis (BISAP score 3, CT showing 40% pancreatic necrosis). He is day 2 of admission, haemodynamically stable but in significant pain. The dietitian recommends early enteral nutrition. The patient refuses nasogastric feeding: 'My stomach is already hurting — putting more food in will make it worse. I should rest my pancreas.' How should the nurse respond?",
    options: [
      "Accept the patient's refusal — patient autonomy means the patient can decline nasogastric feeding",
      "Arrange total parenteral nutrition (TPN) instead — if the patient refuses NG feeding, TPN provides equivalent nutrition without distressing him",
      "Explain that early enteral nutrition (within 24-48 hours) is evidence-based and SUPERIOR to bowel rest + TPN in pancreatitis — it reduces infection, prevents bacterial translocation and improves outcomes. The gut being 'rested' actually worsens outcomes. Respectfully address his concerns and explain the evidence",
      "Wait for his pain to resolve before starting any nutrition — feeding during acute pancreatitis worsens enzyme secretion",
    ],
    correct: 2,
    explanation: "EARLY ENTERAL NUTRITION in acute pancreatitis is evidence-based and SUPERIOR to both prolonged nil-by-mouth and total parenteral nutrition (multiple RCTs and meta-analyses — PYTHON trial, systematic reviews). MECHANISM: The pancreas secretes enzymes in response to food, but during acute pancreatitis the ductal system is already inflamed — enzymes are already activated inappropriately. Enteral feeding does NOT significantly worsen pancreatitis. BENEFITS of early EN: Maintains gut mucosal barrier (prevents bacterial translocation — bacteria crossing from gut lumen into inflamed necrotic pancreatic tissue causes INFECTED NECROSIS — the most dangerous complication), reduces systemic inflammatory response, reduces hospital stay, reduces infections and complications compared to TPN. NASOGASTRIC feeding is as effective as NASOJEJUNAL in mild-moderate pancreatitis. The nurse should explain this clearly, address the patient's misconceptions respectfully, involve the dietitian and physician. Accepting refusal without education is not appropriate — the patient may change his decision with accurate information. If he still refuses after education, patient autonomy applies — but ensure informed refusal.",
    wrongExplanations: [
      "WRONG: While patient autonomy is fundamental, the nurse has an obligation to provide accurate evidence-based information before accepting refusal. The patient's refusal is based on a misconception that early feeding worsens pancreatitis — correcting this misconception is the nurse's therapeutic role.",
      "WRONG: TPN is associated with WORSE outcomes than enteral feeding in pancreatitis — higher infection rates, higher complications, no benefit over EN. TPN should only be used when the GI tract cannot be used at all (paralytic ileus, unable to tolerate NG feeding).",
      "",
      "WRONG: 'Waiting for pain to resolve' before feeding is the old approach that is now evidence-based to be INFERIOR. Delaying feeding allows gut mucosal atrophy, bacterial translocation and increased risk of infected necrosis. Current guidelines recommend starting within 24-48 hours.",
    ],
  },
  {
    level: "Advanced",
    question: "A 38-year-old woman is admitted with acute liver failure following paracetamol overdose 16 hours ago. She took 24g (48 × 500mg tablets). INR is now 4.8 (was 1.1 on admission 4 hours ago), creatinine 210 μmol/L (was 88), pH 7.28 (venous), she is confused (Grade II encephalopathy), ALT 8400 U/L. N-acetylcysteine infusion was commenced 3 hours ago. The nurse is reviewing her results. What is the MOST critical clinical decision that must be escalated immediately?",
    options: [
      "Increase the NAC infusion rate — the INR is still rising so NAC dose is insufficient",
      "This patient meets KING'S COLLEGE CRITERIA for emergency liver transplant listing — pH <7.30 is a single criterion that mandates urgent transplant referral. Notify the liver transplant team immediately alongside managing the acute deterioration",
      "The patient needs fresh frozen plasma to correct the INR — coagulopathy is the most urgent concern",
      "Arrange urgent haemodialysis — the AKI with creatinine 210 is the priority concern",
    ],
    correct: 1,
    explanation: "KING'S COLLEGE CRITERIA (KCC) — SINGLE CRITERION MET: pH <7.30 (actual pH 7.28) after resuscitation in paracetamol-induced ALF = IMMEDIATE LIVER TRANSPLANT LISTING required. The KCC are the validated prognostic tool for determining which ALF patients are unlikely to survive without transplantation. For paracetamol: SINGLE criterion = pH <7.30. OR ALL THREE of: PT >100 seconds (INR ~8) + creatinine >300 μmol/L + Grade III/IV encephalopathy. This patient has: pH 7.28 (criterion MET = IMMEDIATE ACTION), INR 4.8 (rising rapidly toward 8+), creatinine 210 (heading toward 300), Grade II encephalopathy (heading toward III-IV). NOTIFY TRANSPLANT TEAM URGENTLY — time from KCC meeting to transplant listing must be minimised. CONTINUE NAC (evidence of benefit even in late presentation, improving INR is a good prognostic sign — but she meets KCC regardless). FFP only if ACTIVE BLEEDING or pre-procedure — not for routine INR correction in ALF (may mask severity and interfere with prognostic assessment). AKI management is important (renal replacement therapy may be needed) but transplant listing is the priority decision.",
    wrongExplanations: [
      "WRONG: NAC dose is protocolised — increasing rate independently is not appropriate. More importantly, this misses the critical clinical decision — King's College Criteria are met (pH 7.28) and transplant listing must happen immediately.",
      "",
      "WRONG: FFP for coagulopathy of ALF is NOT recommended routinely — the INR in ALF reflects synthetic failure and should be used prognostically. FFP corrects the INR and masks severity, potentially delaying transplant listing at a critical time. Give only for active bleeding or procedures.",
      "WRONG: AKI is concerning and will likely require renal support — but this is secondary to the life-saving transplant listing decision. The transplant team must be notified NOW before the patient progresses beyond the transplant window.",
    ],
  },
  {
    level: "Advanced",
    question: "A 29-year-old woman with known Crohn's disease (terminal ileum and right colon involvement, on azathioprine and infliximab) presents with a 6-week history of increasing right lower quadrant pain, fever (38.4°C), 8kg weight loss and diarrhoea with no blood. CRP is 186 mg/L, WCC 14.8 × 10⁹/L, albumin 22 g/L, Hb 94 g/L. CT abdomen shows thickened terminal ileum with a 4cm pericolic collection adjacent to the caecum. Which statement about management is MOST accurate?",
    options: [
      "Increase infliximab dose immediately — the disease is flaring and biologic dose escalation is the standard response",
      "This patient has a COMPLICATION of Crohn's disease (pericolic abscess) — antibiotics and radiological drainage are required FIRST, then reassessment of disease activity and medication. Escalating immunosuppression in the setting of an abscess would worsen the infection and is contraindicated",
      "Urgent colectomy is required — this presentation indicates surgery is the only option for complicated Crohn's",
      "Start IV steroids immediately — the inflammation and malnutrition require aggressive anti-inflammatory treatment",
    ],
    correct: 1,
    explanation: "CROHN'S DISEASE COMPLICATED BY PERICOLIC ABSCESS — critical management concept. ABSCESS = INFECTION = CONTRAINDICATION TO ESCALATING IMMUNOSUPPRESSION. The fever, elevated WCC, CRP 186 and CT showing a 4cm pericolic collection indicate a septic complication — an ABSCESS has formed from transmural Crohn's inflammation. CORRECT MANAGEMENT SEQUENCE: ANTIBIOTICS immediately (broad-spectrum — metronidazole + cephalosporin or piperacillin-tazobactam — cover gram-negative rods and anaerobes), RADIOLOGICAL DRAINAGE (CT-guided percutaneous drainage of the 4cm collection — if accessible), HOLD/WITHHOLD biologics (infliximab, adalimumab) and consider holding azathioprine until infection controlled — immunosuppression in the setting of an undrained abscess leads to failure to contain infection, bacteraemia and potentially fatal sepsis. NUTRITIONAL SUPPORT (albumin 22 — severely malnourished — enteral or parenteral nutrition as tolerated), REASSESS DISEASE ACTIVITY after infection controlled, then cautiously restart/escalate medications. Surgery may be needed if drainage fails or if the anatomy is not amenable to percutaneous drainage. IV steroids in the setting of an undrained abscess = masking/worsening infection.",
    wrongExplanations: [
      "WRONG: Escalating infliximab dose when an abscess is present is dangerous and contraindicated. Anti-TNF therapy in uncontrolled sepsis/abscess leads to failure to contain the infection, septicaemia and death. Drain first, then reassess medications.",
      "",
      "WRONG: Surgery is not the immediate first choice when CT-guided drainage is possible. Many Crohn's abscesses can be managed with antibiotics + percutaneous drainage, with surgery reserved for cases not amenable to drainage or where drainage fails.",
      "WRONG: IV steroids are immunosuppressive — they would worsen an undrained abscess by impairing the patient's ability to contain the infection. Steroids are contraindicated until the infection is controlled.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is reviewing a patient on the hepatology ward with decompensated cirrhosis. Daily weights show: Day 1: 78kg, Day 2: 79.2kg, Day 3: 80.5kg, Day 4: 81.8kg. The patient's diuretic regimen is spironolactone 100mg + furosemide 40mg. He has 2+ peripheral oedema and moderate ascites. Serum sodium is 131 mEq/L, potassium is 3.2 mEq/L, creatinine is 132 μmol/L (baseline 85). Urine output is adequate. The nurse is concerned about the weight trend. What is the MOST accurate clinical assessment and appropriate nursing response?",
    options: [
      "The weight gain indicates the diuretics are not working — independently double the diuretic dose",
      "The weight gain (1.3 kg over 3 days) indicates inadequate diuresis, but the concurrent hyponatraemia (131), hypokalaemia (3.2) and rising creatinine (85→132) suggest the patient is developing diuretic-induced complications. Notify physician for dose review — diuretic escalation may cause renal failure. Also: potassium replacement is urgently needed (K 3.2 + patient on furosemide + risk of digoxin toxicity if on digoxin)",
      "The weight gain is acceptable — 1.3kg over 3 days is within the expected range for cirrhotic ascites",
      "Start a fluid restriction of 500mL/day — the hyponatraemia indicates excess free water",
    ],
    correct: 1,
    explanation: "COMPLEX CIRRHOTIC FLUID MANAGEMENT: This patient presents a diuretic management dilemma. WEIGHT GAIN (78→81.8 = +3.8 kg over 4 days) indicates inadequate diuresis — the diuretics are not achieving the target weight loss (~0.5 kg/day in cirrhosis). HOWEVER: Three simultaneous diuretic complications are developing: HYPONATRAEMIA (131 — dilutional from SIADH in cirrhosis + diuretic effect), HYPOKALAEMIA (3.2 — furosemide-induced potassium loss), AKI (creatinine 85→132 = 55% rise — pre-renal from over-diuresis OR hepatorenal syndrome from circulatory dysfunction). MANAGEMENT DILEMMA: The weight gain says increase diuretics. The electrolytes and creatinine say caution with diuretics. PHYSICIAN MUST REVIEW: Decision may be: hold furosemide (loop diuretic — more kaliuretic and natriuretic), continue or reduce spironolactone (potassium-sparing — better tolerated), IV potassium replacement (K 3.2 must be corrected), consider large volume paracentesis with albumin if tense ascites, reassess fluid status, renal function monitoring, possible hospitalisation for IV management. TARGET weight loss in cirrhosis with oedema: 0.5-1.0 kg/day (with peripheral oedema). Without oedema: 0.5 kg/day maximum — overshoot causes renal failure.",
    wrongExplanations: [
      "WRONG: Independently doubling diuretic doses is outside nursing scope AND potentially dangerous given the rising creatinine and hypokalaemia. Increasing diuretics with a creatinine rising 55% above baseline could precipitate overt hepatorenal syndrome.",
      "",
      "WRONG: 3.8 kg weight gain over 4 days is NOT acceptable in cirrhotic ascites management. Target is weight LOSS of 0.5 kg/day with oedema. 3.8 kg gain means the diuretics are completely ineffective at their current dose — but escalation requires physician review given the complicating electrolyte and renal findings.",
      "WRONG: Fluid restriction to 500 mL/day is excessively restrictive and inappropriate. Mild-moderate hyponatraemia in cirrhosis is managed with sodium restriction (not fluid restriction unless Na <125) and diuretic optimisation. 500 mL restriction would be poorly tolerated and potentially dangerous.",
    ],
  },
  {
    level: "Advanced",
    question: "A 72-year-old man presents with absolute constipation (no flatus or stool for 4 days), progressive abdominal distension and mild, poorly-localised abdominal pain. There is no vomiting. Vital signs: BP 122/76, HR 82, temperature 37.1°C. AXR shows massively dilated sigmoid colon with a 'coffee bean' shape occupying most of the abdomen. There is no free air under the diaphragm. What is the diagnosis and the initial management approach?",
    options: [
      "Large bowel obstruction from colorectal cancer — urgent laparotomy is required",
      "Paralytic ileus — insert NGT, IV fluids and encourage mobilisation",
      "Sigmoid volvulus — the 'coffee bean' sign on AXR is pathognomonic. Initial management is emergency flexible sigmoidoscopy/rigid sigmoidoscopy for non-operative decompression if the bowel is viable (no signs of ischaemia). If ischaemia/perforation: immediate surgery",
      "Faecal impaction — administer phosphate enema and manual disimpaction",
    ],
    correct: 2,
    explanation: "SIGMOID VOLVULUS — 'COFFEE BEAN' SIGN on AXR is PATHOGNOMONIC (also called 'omega loop' sign — the dilated sigmoid loop folds on itself, creating the characteristic large inverted U shape resembling a coffee bean). PATHOPHYSIOLOGY: The sigmoid colon twists on its mesenteric axis → closed loop obstruction → progressive distension → risk of ischaemia → perforation → peritonitis. PRESENTATION: Gradual onset absolute constipation, progressive massive abdominal distension (often extreme), little pain initially (closed loop distension is less painful than strangulation initially). MANAGEMENT: ASSESS VIABILITY — no peritonism, no fever, no haemodynamic compromise = viable sigmoid = non-operative decompression attempted FIRST. NON-OPERATIVE DECOMPRESSION: Flexible or rigid sigmoidoscopy — advance scope through the twisted point → pass a rectal tube beyond the obstruction → sigmoid untwists → massive gas and stool release → immediate decompression. SUCCESS RATE: 70-80%. ELECTIVE SURGERY: After successful decompression, elective sigmoid resection is planned (volvulus recurs in >60% without surgery). EMERGENCY SURGERY: If peritonism/ischaemia signs present, failed endoscopic decompression, or perforation.",
    wrongExplanations: [
      "WRONG: Colorectal cancer causes LBO but presents differently (progressive symptoms over weeks, weight loss, rectal bleeding, CT showing mass). The 'coffee bean' sign is specific to sigmoid volvulus — not cancer. Immediate laparotomy is not the first step if the bowel appears viable.",
      "WRONG: Paralytic ileus causes generalised dilated loops throughout the colon and small bowel — not the localised massive sigmoid coffee bean appearance. Ileus does not cause absolute constipation with no flatus in the same acute manner.",
      "",
      "WRONG: Faecal impaction causes constipation but not the dramatic massive coffee bean sigmoid dilation. Phosphate enema in sigmoid volvulus could increase intraluminal pressure and risk perforation — contraindicated.",
    ],
  },
];

const clinicalPearls = [
  "The most dangerous NGT assumption in nursing is that the 'whoosh' test confirms gastric placement. It does not. A misplaced NGT in the bronchus transmits sound just as convincingly. The gold standard is a chest X-ray or aspirate pH <5.5. Patients have died from feeds delivered into the pleural cavity through a misplaced NGT. Never feed until placement is confirmed.",
  "Variceal bleeding is not the same as peptic ulcer bleeding — and treating them the same way is a serious error. In variceal bleeding: terlipressin or octreotide must be given immediately (not after endoscopy), antibiotics are mandatory for all patients (not just if infected), and transfusion targets are RESTRICTIVE (Hb 70-80 g/L) because over-transfusion raises portal pressure and worsens rebleeding. These differences are consistently tested on NCLEX.",
  "King's College Criteria in paracetamol ALF — a single pH below 7.30 mandates urgent liver transplant referral. Not 'consider referral.' Not 'discuss with the team tomorrow.' Urgent, immediate referral. The window for liver transplantation in ALF is narrow and closing. The nurse who recognises this and escalates it appropriately has potentially saved a 38-year-old's life.",
  "The rising CRP after colorectal surgery is the anastomotic leak detector. CRP >200 mg/L on post-operative day 3-5 after anterior resection is a validated predictor of anastomotic leak. The patient may feel 'fine' or the symptoms may be subtle. The CRP is telling you what the patient is not saying. Act on it.",
  "Stoma ischaemia — dark purple to black stoma — is not a 'let's see how it looks tomorrow' situation. The same way you would not watch a limb become ischaemic, you should not watch a stoma. Notify immediately, assess the depth (superficial vs below fascia), and the surgeon decides the urgency. A pink, moist, glistening stoma is healthy. A dark, dry, shrinking stoma is dying.",
  "Early enteral nutrition in pancreatitis is one of the most important paradigm shifts in GI critical care. For decades we rested the pancreas with nil by mouth and TPN. The evidence clearly shows that early enteral nutrition (within 24-48 hours) reduces infection, prevents bacterial translocation, reduces hospital stay and reduces mortality — regardless of disease severity. The gut needs feeding to maintain its mucosal barrier. Rest the pancreas with nil by mouth and you rest the mucosal barrier — allowing bacteria to translate into the necrotic tissue and creating infected necrosis.",
  "In cirrhotic ascites management, the weight is the vital sign. Daily weight at the same time, same scale, same clothing before breakfast after voiding. Target weight loss: 0.5-1.0 kg/day with oedema present (the oedema acts as a buffer). Without oedema: maximum 0.5 kg/day. Faster than this and you are pulling fluid from the intravascular space faster than it can be replaced from ascites, precipitating renal failure. Slower than this and the ascites is not responding. Every cirrhotic patient's weight trend tells a story.",
];

export default function GastrointestinalPage() {
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
            <h1 className="font-black text-base text-gray-900">🫃 Gastrointestinal</h1>
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
                🫃 GI nursing is high yield on NCLEX. Master GI bleeding management, liver failure complications, pancreatitis, IBD and post-operative GI complications!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most critical GI safety points — these save lives and appear on NCLEX!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Gastrointestinal Nursing!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review variceal bleeding, liver failure complications and pancreatitis." :
                        "Keep studying! Focus on GI bleeding management, SBP treatment, King's College Criteria and stoma assessment."}
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
