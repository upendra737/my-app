"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Maternal & Newborn Nursing",
    icon: "🤱",
    color: "blue",
    content: [
      "Maternal and newborn nursing encompasses care across the entire perinatal period: antepartum (before birth), intrapartum (during labour and birth) and postpartum (after birth)",
      "This is one of the HIGHEST YIELD areas for NCLEX — expect multiple questions on labour stages, complications, postpartum assessment and newborn care",
      "Key principle: The nurse must monitor BOTH mother AND baby simultaneously — two patients in one",
      "Normal pregnancy lasts 38-42 weeks — term is 37-42 weeks, preterm is before 37 weeks, post-term is after 42 weeks",
      "Naegele's Rule for calculating EDD: First day of last menstrual period + 7 days − 3 months + 1 year",
      "NCLEX heavily tests: Warning signs in pregnancy, stages of labour, foetal heart rate patterns, postpartum complications and newborn assessment",
      "Cultural sensitivity is essential — childbirth practices and beliefs vary significantly across cultures",
    ],
  },
  {
    title: "Antepartum Care — Normal vs Abnormal",
    icon: "🤰",
    color: "green",
    content: [
      "NORMAL antepartum findings: Morning sickness (1st trimester), breast tenderness, urinary frequency, fatigue, Braxton Hicks contractions (after 20 weeks), round ligament pain",
      "DANGER SIGNS in pregnancy — report IMMEDIATELY (COLDS mnemonic):",
      "C — Chills/fever (infection)",
      "O — Oedema — sudden severe facial/hand swelling (preeclampsia)",
      "L — Leaking fluid (premature rupture of membranes)",
      "D — Decreased foetal movement (foetal compromise)",
      "S — Severe headache, visual disturbances, epigastric pain (preeclampsia/eclampsia)",
      "Additional danger signs: Vaginal bleeding (placenta praevia, abruption), dysuria (UTI), severe vomiting beyond 1st trimester",
      "Routine antenatal monitoring: BP, weight, urine dipstick (protein, glucose), fundal height, foetal heart rate, oedema assessment",
      "Fundal height in cm ≈ weeks of gestation (after 20 weeks) — plus or minus 2cm is normal",
    ],
  },
  {
    title: "Preeclampsia & Eclampsia — High Priority",
    icon: "⚠️",
    color: "red",
    content: [
      "PREECLAMPSIA: BP ≥140/90 mmHg on two occasions, 4+ hours apart, after 20 weeks gestation WITH proteinuria OR end-organ damage",
      "SEVERE preeclampsia: BP ≥160/110 mmHg, severe proteinuria, headache, visual disturbances, epigastric pain, oliguria, thrombocytopenia",
      "ECLAMPSIA: Preeclampsia + new onset grand mal SEIZURE — obstetric emergency",
      "HELLP Syndrome: Haemolysis, Elevated Liver enzymes, Low Platelets — variant of severe preeclampsia",
      "Treatment: MAGNESIUM SULFATE for seizure prevention and treatment (not antihypertensive)",
      "Magnesium toxicity signs: Loss of deep tendon reflexes (FIRST sign), respiratory depression, cardiac arrest",
      "Antidote for magnesium toxicity: CALCIUM GLUCONATE — keep at bedside",
      "Antihypertensives used: Hydralazine, labetalol, nifedipine — target BP 140-150/90-100",
      "Delivery is the ONLY CURE for preeclampsia — timing depends on severity and gestational age",
      "Nursing: Monitor BP every 15-30 minutes, seizure precautions (padded side rails, dim lights, quiet), strict I&O, deep tendon reflexes hourly",
    ],
  },
  {
    title: "Stages of Labour",
    icon: "🏥",
    color: "purple",
    content: [
      "STAGE 1 — Cervical dilation: From onset of true labour to full dilation (10cm)",
      "Stage 1 — LATENT phase: 0-6cm dilation, mild irregular contractions, patient usually mobile and talkative",
      "Stage 1 — ACTIVE phase: 6-10cm dilation, contractions every 3-5 minutes lasting 45-60 seconds, increasing pain",
      "Stage 1 — TRANSITION: 8-10cm, most intense contractions, patient may feel urge to push",
      "STAGE 2 — Pushing: Full dilation to delivery of baby. Average 1-2 hours primip, 30 minutes multip",
      "STAGE 3 — Placenta delivery: From birth of baby to delivery of placenta. Should occur within 30 minutes",
      "STAGE 4 — Recovery: First 1-4 hours after delivery — highest risk for postpartum haemorrhage",
      "TRUE vs FALSE labour: True labour = regular contractions that increase in frequency/intensity, cervical dilation, not relieved by walking. False labour = irregular, no cervical change, relieved by activity change",
      "Rupture of membranes: Nitrazine paper turns BLUE (amniotic fluid is alkaline pH 7.0-7.5). Normal fluid is clear, no odour",
    ],
  },
  {
    title: "Foetal Heart Rate Monitoring",
    icon: "💗",
    color: "red",
    content: [
      "Normal foetal heart rate (FHR): 110-160 bpm",
      "REASSURING FHR patterns: Baseline 110-160, moderate variability (6-25 bpm), accelerations present (FHR rises 15 bpm for 15 seconds = reactive), no decelerations",
      "NON-REASSURING patterns requiring immediate intervention:",
      "EARLY decelerations: Gradual decrease mirroring contraction, caused by head compression — NORMAL, no intervention needed",
      "LATE decelerations: Gradual decrease starting AFTER peak of contraction, nadir after contraction peak — indicates UTEROPLACENTAL INSUFFICIENCY — emergency!",
      "VARIABLE decelerations: Abrupt decrease, V-shape, caused by cord compression — can be normal if mild and brief",
      "SEVERE variable or prolonged decelerations: May indicate cord prolapse — emergency",
      "Nursing response to non-reassuring FHR: LION — Left lateral position, Increase IV fluids, Oxygen 10L via face mask, Notify physician",
      "Bradycardia <110 for >10 minutes = foetal distress requiring immediate action",
      "Sinusoidal pattern: Smooth sine wave, no variability = severe foetal anaemia or hypoxia — emergency",
    ],
  },
  {
    title: "Labour Complications",
    icon: "🚨",
    color: "red",
    content: [
      "CORD PROLAPSE: Umbilical cord descends into vagina ahead of presenting part — OBSTETRIC EMERGENCY",
      "Cord prolapse management: Call for help, do NOT push cord back, manually elevate presenting part OFF cord with gloved hand, knee-chest or Trendelenburg position, prepare for emergency C-section",
      "PLACENTA PRAEVIA: Placenta implanted over or near cervical os. Presents with PAINLESS bright red vaginal bleeding",
      "Placenta praevia management: Do NOT perform vaginal examination, bedrest, monitor, C-section delivery",
      "PLACENTAL ABRUPTION: Premature separation of placenta. Presents with PAINFUL dark red vaginal bleeding, uterine rigidity, uterine tenderness",
      "Abruption is a medical emergency — foetal compromise, maternal haemorrhage risk",
      "SHOULDER DYSTOCIA: Anterior shoulder impacted behind pubic symphysis after head delivery — EMERGENCY",
      "Shoulder dystocia: McRoberts manoeuvre (hyperflex maternal thighs), suprapubic pressure, do NOT apply fundal pressure",
      "UTERINE RUPTURE: Severe abdominal pain, cessation of contractions, foetal distress, maternal shock — emergency C-section",
      "PRECIPITATE LABOUR: Labour lasting <3 hours — risk of maternal lacerations and neonatal injury",
    ],
  },
  {
    title: "Postpartum Assessment — BUBBLE-HE",
    icon: "🩺",
    color: "green",
    content: [
      "BUBBLE-HE is the systematic postpartum assessment framework used every shift:",
      "B — BREASTS: Firmness, tenderness, engorgement, nipple condition, breastfeeding latch and technique",
      "U — UTERUS: Fundal height (should descend 1cm/day), firmness (firm = contracted = good), midline position",
      "B — BLADDER: Voiding adequately (>150mL each void), bladder distension can displace uterus causing haemorrhage",
      "B — BOWEL: Bowel sounds, passing flatus, bowel movement (usually by day 2-3), constipation management",
      "L — LOCHIA: Rubra (red, days 1-3), Serosa (pink/brown, days 4-10), Alba (white/yellow, days 11+). Amount: scant to moderate is normal",
      "E — EPISIOTOMY/PERINEUM: REEDA — Redness, Oedema, Ecchymosis, Discharge, Approximation",
      "H — HOMAN'S SIGN / HOMANS: Calf pain on dorsiflexion — assess for DVT (now controversial but still tested on NCLEX)",
      "E — EMOTIONS: Baby blues vs postpartum depression vs postpartum psychosis",
      "Normal lochia never soaks more than one pad per hour — if it does, this is abnormal bleeding requiring immediate assessment",
    ],
  },
  {
    title: "Postpartum Complications",
    icon: "⚠️",
    color: "orange",
    content: [
      "POSTPARTUM HAEMORRHAGE (PPH): Blood loss >500mL vaginal birth or >1000mL C-section within 24 hours",
      "4 T's of PPH causes: TONE (uterine atony — most common 80%), TRAUMA (lacerations), TISSUE (retained placenta), THROMBIN (coagulopathy)",
      "Uterine atony management: Uterine massage, oxytocin, bimanual compression, methylergonovine, misoprostol",
      "ENDOMETRITIS: Uterine infection — fever >38°C after first 24 hours, uterine tenderness, foul-smelling lochia. Treatment: IV antibiotics",
      "POSTPARTUM DVT/PE: Calf pain, warmth, swelling — pregnancy is a hypercoagulable state. Risk peaks in first 6 weeks postpartum",
      "MASTITIS: Breast infection — unilateral redness, warmth, flu-like symptoms. Treatment: Continue breastfeeding, antibiotics, warm compresses",
      "POSTPARTUM DEPRESSION: Persistent sadness, inability to bond, sleep disturbance beyond 2 weeks. Affects 10-15% of mothers. Requires professional treatment",
      "POSTPARTUM PSYCHOSIS: Rare but serious — hallucinations, delusions, rapid mood changes, confusion. SAFETY EMERGENCY — mother and baby at risk",
      "Baby blues: Tearfulness, mood swings in first 3-5 days — normal hormonal response, resolves spontaneously",
    ],
  },
  {
    title: "Newborn Assessment — APGAR Score",
    icon: "👶",
    color: "blue",
    content: [
      "APGAR score assessed at 1 minute and 5 minutes after birth",
      "A — APPEARANCE (skin colour): 0=blue/pale all over, 1=blue extremities/pink body, 2=completely pink",
      "P — PULSE (heart rate): 0=absent, 1=<100 bpm, 2=≥100 bpm",
      "G — GRIMACE (reflex irritability): 0=no response, 1=grimace, 2=cry/cough/sneeze",
      "A — ACTIVITY (muscle tone): 0=limp, 1=some flexion, 2=active flexion/movement",
      "R — RESPIRATION: 0=absent, 1=slow/irregular, 2=strong cry",
      "Score interpretation: 7-10=normal, 4-6=moderate depression (stimulation/O2), 0-3=severe depression (resuscitation)",
      "APGAR is an assessment tool NOT a predictor of long-term outcomes",
      "Normal newborn vital signs: HR 120-160 bpm, RR 30-60 breaths/min, Temp 36.5-37.5°C, BP 60-80/40-50 mmHg",
      "Normal newborn weight: 2500-4000g (5.5-8.8 lbs). Weight loss of up to 10% in first week is normal",
    ],
  },
  {
    title: "Newborn Care and Assessment",
    icon: "🍼",
    color: "green",
    content: [
      "INITIAL newborn care: Dry and warm (prevent hypothermia), clear airway if needed, skin-to-skin contact, delayed cord clamping (1-3 minutes)",
      "VITAMIN K (phytonadione): Administered IM to all newborns at birth — prevents haemorrhagic disease of newborn",
      "ERYTHROMYCIN eye ointment: Administered to all newborns — prevents gonococcal/chlamydial ophthalmia neonatorum",
      "HEPATITIS B vaccine: First dose within 24 hours of birth",
      "Newborn screening: PKU (phenylketonuria), hypothyroidism, galactosaemia, hearing screen — done before discharge",
      "Meconium: First stool — should pass within 24-48 hours. Dark green/black, sticky",
      "Jaundice: Physiological jaundice appears after 24 hours, peaks days 3-5, resolves by day 14 — normal",
      "PATHOLOGICAL jaundice: Appears within FIRST 24 HOURS — requires immediate investigation (Rh incompatibility, ABO incompatibility, infection)",
      "Breastfeeding: Feed every 2-3 hours, 8-12 times per day. Adequate intake: 6+ wet nappies/day, regaining birth weight by 2 weeks",
      "Circumcision care: Petroleum gauze, bleeding >2 tbsp = abnormal, yellow exudate at days 2-3 = normal healing",
    ],
  },
  {
    title: "Breastfeeding and Lactation",
    icon: "🤱",
    color: "purple",
    content: [
      "Breast milk is the GOLD STANDARD for infant nutrition — WHO recommends exclusive breastfeeding for 6 months",
      "COLOSTRUM: First milk, produced days 1-3 — rich in antibodies (IgA), protein and nutrients. Yellow/thick",
      "Transitional milk: Days 4-14 — increases in volume, higher fat and lactose",
      "Mature milk: After 2 weeks — foremilk (watery, satisfies thirst), hindmilk (fat-rich, satisfies hunger)",
      "Proper latch: Baby's mouth covers areola not just nipple, lips flanged outward, chin touching breast, audible swallowing",
      "Signs of adequate intake: 6+ wet nappies/day after day 4, 3-4 stools/day, regaining birth weight by 2 weeks, satisfied after feeds",
      "Engorgement: Bilateral, warm, firm — management: frequent feeding, warm compresses before feeding, cold compresses after",
      "MASTITIS vs engorgement: Mastitis is UNILATERAL with flu-like symptoms and fever. Engorgement is bilateral and without fever",
      "Contraindications to breastfeeding: HIV (in developed countries), active untreated TB, certain medications (chemotherapy, radioactive agents), galactosaemia in infant",
      "Medications and breastfeeding: Always check — most medications are safe but some are contraindicated",
    ],
  },
];

const mnemonics = [
  {
    title: "Danger Signs in Pregnancy",
    acronym: "COLDS",
    breakdown: ["Chills/fever", "Oedema (sudden)", "Leaking fluid", "Decreased foetal movement", "Severe headache/visual changes"],
    memory: "COLDS in pregnancy = call immediately. Any of these signs requires urgent medical assessment!",
    color: "red",
  },
  {
    title: "APGAR Score",
    acronym: "APGAR",
    breakdown: ["Appearance", "Pulse", "Grimace", "Activity", "Respiration"],
    memory: "A Perfect Grey Afternoon Routine — assess at 1 minute and 5 minutes. Score 7-10 = normal!",
    color: "blue",
  },
  {
    title: "Postpartum Assessment",
    acronym: "BUBBLE-HE",
    breakdown: ["Breasts", "Uterus", "Bladder", "Bowel", "Lochia", "Episiotomy", "Homans/Homan's", "Emotions"],
    memory: "BUBBLE-HE — assess every single component every shift. Missing one can miss a life-threatening complication!",
    color: "green",
  },
  {
    title: "Causes of Postpartum Haemorrhage",
    acronym: "4Ts",
    breakdown: ["Tone (uterine atony)", "Trauma (lacerations)", "Tissue (retained placenta)", "Thrombin (coagulopathy)"],
    memory: "4 T's of PPH — Tone is the most common (80%). Always assess uterine firmness first!",
    color: "orange",
  },
  {
    title: "Non-Reassuring FHR Response",
    acronym: "LION",
    breakdown: ["Left lateral position", "Increase IV fluids", "Oxygen 10L face mask", "Notify physician"],
    memory: "The LION protects the baby — Left lateral, IV fluids, Oxygen, Notify. Do these in order!",
    color: "red",
  },
];

const alerts = [
  { text: "LATE decelerations = uteroplacental insufficiency = EMERGENCY. Apply LION immediately and notify physician!", severity: "high" },
  { text: "CORD PROLAPSE: Do NOT push the cord back. Manually elevate presenting part off cord and prepare for emergency C-section!", severity: "high" },
  { text: "PAINLESS bright red bleeding = placenta praevia. NEVER do a vaginal examination — could cause massive haemorrhage!", severity: "high" },
  { text: "Magnesium sulfate toxicity: Loss of deep tendon reflexes is the FIRST sign. Antidote is CALCIUM GLUCONATE — keep at bedside!", severity: "high" },
  { text: "Postpartum haemorrhage: Soaking more than one pad per hour = abnormal. Uterine atony is the most common cause (80%)!", severity: "high" },
  { text: "PATHOLOGICAL jaundice appears within FIRST 24 HOURS — this is an emergency. Physiological jaundice appears AFTER 24 hours!", severity: "high" },
  { text: "Postpartum psychosis is a SAFETY EMERGENCY — mother may harm herself or the baby. Immediate psychiatric intervention required!", severity: "high" },
  { text: "Shoulder dystocia: NEVER apply fundal pressure — it worsens impaction. Use McRoberts manoeuvre and suprapubic pressure!", severity: "medium" },
  { text: "Uterine fundus should be FIRM and MIDLINE — a boggy or displaced fundus indicates haemorrhage risk. Massage immediately!", severity: "medium" },
  { text: "Vitamin K is given to ALL newborns at birth — newborns have insufficient clotting factors and are at risk of haemorrhage!", severity: "medium" },
  { text: "Mastitis: Continue breastfeeding — stopping breastfeeding worsens mastitis by causing engorgement!", severity: "medium" },
  { text: "Baby blues resolve within 2 weeks — if symptoms persist beyond 2 weeks, assess for postpartum depression!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A nurse is assessing a newborn at 1 minute after birth. The newborn has a heart rate of 90 bpm, slow irregular respirations, some flexion of extremities, grimaces in response to stimulation and has blue extremities with a pink body. What is this newborn's APGAR score?",
    options: [
      "4",
      "5",
      "6",
      "7",
    ],
    correct: 1,
    explanation: "Calculate each component: Appearance (blue extremities, pink body) = 1. Pulse (90 bpm = <100) = 1. Grimace (grimaces) = 1. Activity (some flexion) = 1. Respiration (slow, irregular) = 1. Total = 5. A score of 4-6 indicates moderate depression requiring stimulation and supplemental oxygen. This newborn requires close monitoring and intervention.",
    wrongExplanations: [
      "WRONG: Score of 4 would require one more component scoring 0. Let's recheck: Appearance=1, Pulse=1, Grimace=1, Activity=1, Respiration=1. All five score 1 = total 5.",
      "",
      "WRONG: Score of 6 would require one component scoring 2. HR 90 = score 1 (not 2 — HR must be ≥100 for score 2). All components score 1.",
      "WRONG: Score of 7 would require two components scoring 2. This newborn has no components scoring 2 — all score 1.",
    ],
  },
  {
    level: "Knowledge",
    question: "A nurse is caring for a patient in active labour. The foetal monitor shows the foetal heart rate begins to decrease 30 seconds AFTER the peak of a uterine contraction and returns to baseline 20 seconds after the contraction ends. What does this pattern indicate?",
    options: [
      "Early decelerations — normal head compression, no intervention needed",
      "Variable decelerations — cord compression, change maternal position",
      "Late decelerations — uteroplacental insufficiency requiring immediate intervention",
      "Accelerations — reassuring foetal wellbeing",
    ],
    correct: 2,
    explanation: "LATE decelerations start AFTER the peak of the contraction and return to baseline after the contraction ends — the deceleration is 'late' in relation to the contraction. This indicates UTEROPLACENTAL INSUFFICIENCY — inadequate oxygen delivery to the foetus through the placenta. This is a NON-REASSURING pattern requiring IMMEDIATE nursing intervention: LION (Left lateral position, Increase IV fluids, Oxygen 10L/min, Notify physician). Persistent late decelerations may require emergency delivery.",
    wrongExplanations: [
      "WRONG: Early decelerations mirror the contraction — they begin and end WITH the contraction. They indicate head compression and are benign. This description is of late decelerations.",
      "WRONG: Variable decelerations are abrupt, V-shaped and variable in timing — they are not gradual and do not consistently follow the contraction peak.",
      "",
      "WRONG: Accelerations are an INCREASE in FHR above baseline — a reassuring sign. This description is clearly a deceleration pattern.",
    ],
  },
  {
    level: "Application",
    question: "A postpartum nurse assesses a patient 2 hours after vaginal delivery. The uterine fundus is firm, 2 fingerbreadths above the umbilicus and deviated to the right. Lochia is rubra, moderate. Vital signs are stable. What is the PRIORITY nursing intervention?",
    options: [
      "Document findings — fundal position 2 fingerbreadths above umbilicus is normal at 2 hours",
      "Perform uterine massage to prevent haemorrhage",
      "Assist the patient to void — a full bladder is displacing the uterus",
      "Notify the physician — fundal deviation indicates internal bleeding",
    ],
    correct: 2,
    explanation: "A uterine fundus deviated to the RIGHT indicates a FULL BLADDER displacing the uterus. The bladder lies anterior to the uterus — when full, it pushes the uterus upward and to the side. A displaced uterus cannot contract properly, increasing the risk of postpartum haemorrhage. The PRIORITY intervention is to assist the patient to void. If the patient cannot void, urinary catheterisation may be needed. After emptying the bladder, the fundus should return to midline. Fundal height 2 fingerbreadths ABOVE the umbilicus at 2 hours postpartum is also slightly elevated — reinforcing the likelihood of bladder distension.",
    wrongExplanations: [
      "WRONG: Fundal deviation is NOT normal — it indicates bladder distension and requires intervention. Simply documenting without acting is unsafe.",
      "WRONG: Uterine massage is indicated for a BOGGY (soft) uterus to stimulate contraction. This uterus is FIRM — massage is not the priority. Emptying the bladder is.",
      "",
      "WRONG: Fundal deviation to the right is most commonly caused by a full bladder — not internal bleeding. Internal bleeding would present with a boggy uterus, abnormal vital signs and increasing lochia.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a patient at 32 weeks gestation who presents with sudden severe headache, visual disturbances and blood pressure of 168/112 mmHg. Urinalysis shows 3+ proteinuria. The physician orders magnesium sulfate. What is the nurse's MOST important assessment while this patient is receiving magnesium sulfate?",
    options: [
      "Blood pressure every 15 minutes",
      "Foetal heart rate monitoring",
      "Deep tendon reflexes hourly and respiratory rate",
      "Urine output and protein levels",
    ],
    correct: 2,
    explanation: "DEEP TENDON REFLEXES and RESPIRATORY RATE are the most critical assessments during magnesium sulfate therapy because they are the earliest and most important indicators of magnesium TOXICITY. Loss of deep tendon reflexes (DTR) is the FIRST sign of toxicity — it occurs before respiratory depression. If DTRs are absent — STOP the infusion and notify the physician. Respiratory rate <12 indicates dangerous respiratory depression. Calcium gluconate (antidote) must be at the bedside. While BP, FHR and urine output are all monitored, DTR assessment is the most specific and critical monitoring parameter for magnesium toxicity prevention.",
    wrongExplanations: [
      "WRONG: BP monitoring is important in preeclampsia but is not the most critical parameter during magnesium infusion. DTR monitoring specifically detects magnesium toxicity.",
      "WRONG: FHR monitoring is important but does not detect magnesium toxicity. Magnesium can cross the placenta and cause neonatal depression — but DTR monitoring of the mother is the priority.",
      "",
      "WRONG: Urine output is monitored (magnesium is renally excreted — oliguria increases toxicity risk) but DTR assessment is the primary toxicity monitoring parameter.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is assessing a newborn 30 hours after birth. The infant appears jaundiced from head to mid-abdomen. Total bilirubin level is 14 mg/dL. What is the nurse's MOST appropriate action?",
    options: [
      "Reassure the parents — physiological jaundice appearing after 24 hours is normal and resolves spontaneously",
      "Notify the physician and prepare for phototherapy — bilirubin of 14 mg/dL at 30 hours requires treatment",
      "Increase breastfeeding frequency to enhance bilirubin excretion",
      "Document findings only — jaundice appearing after 24 hours is always benign",
    ],
    correct: 1,
    explanation: "While jaundice appearing AFTER 24 hours is physiological (normal), a bilirubin of 14 mg/dL at 30 hours of life is ABOVE the treatment threshold for a healthy term infant at this age. Phototherapy guidelines are age-specific (using hour-specific nomograms). At 30 hours, phototherapy is typically initiated at 12-15 mg/dL for low-risk infants and lower thresholds for high-risk infants. The nurse should notify the physician and prepare for phototherapy. Jaundice appearing within the FIRST 24 hours is pathological. Simply reassuring parents or only increasing feeding without physician notification and bilirubin monitoring is inadequate at this level.",
    wrongExplanations: [
      "WRONG: While the timing (after 24 hours) suggests physiological jaundice, the bilirubin LEVEL of 14 mg/dL at 30 hours exceeds treatment thresholds. Physiological timing does not mean no treatment is needed.",
      "",
      "WRONG: Increasing breastfeeding is appropriate to support bilirubin excretion but ALONE is insufficient when bilirubin is at treatment threshold. Physician notification and phototherapy are needed.",
      "WRONG: Physiological timing does not mean the level is safe. Bilirubin of 14 mg/dL at 30 hours requires treatment assessment — high bilirubin causes kernicterus (brain damage) regardless of timing.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a patient in active labour at 8cm dilation when the patient reports a sudden gush of fluid. On assessment, the nurse sees a loop of umbilical cord protruding from the vagina. What is the CORRECT sequence of nursing actions?",
    options: [
      "Call for help → Push the cord back into the vagina → Place patient in Trendelenburg → Notify the physician",
      "Call for help → Manually elevate the presenting part off the cord with a gloved hand → Place patient in knee-chest or Trendelenburg position → Maintain hand position → Prepare for emergency C-section",
      "Call for help → Apply moist sterile gauze to the cord → Administer oxygen → Notify physician → Prepare for C-section",
      "Call for help → Slow down the IV infusion → Place patient in left lateral position → Notify physician",
    ],
    correct: 1,
    explanation: "CORD PROLAPSE is a LIFE-THREATENING OBSTETRIC EMERGENCY — foetal death can occur within minutes from cord compression. The correct response: CALL FOR HELP immediately. Immediately INSERT a GLOVED HAND into the vagina and MANUALLY ELEVATE the presenting part OFF the cord — this is the most critical action and must be maintained continuously. Place patient in KNEE-CHEST position (or Trendelenburg/Sim's left lateral if knee-chest is not possible) — gravity helps reduce cord compression. NEVER push the cord back — this causes vasospasm and worsening compression. Maintain hand position without releasing until emergency C-section delivery. Apply moist warm saline gauze to any visible cord to prevent desiccation.",
    wrongExplanations: [
      "WRONG: NEVER push the cord back into the vagina — this causes vasospasm, further compression and worsening foetal compromise. Manual elevation of the presenting part is the correct action.",
      "",
      "WRONG: Applying moist gauze to the cord is appropriate as an ADDITIONAL measure — but it is NOT the first or most critical action. Manual elevation of the presenting part is the priority.",
      "WRONG: Left lateral position alone and slowing the IV are INSUFFICIENT for cord prolapse. Manual elevation of the presenting part is the immediately life-saving action.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a patient who delivered vaginally 45 minutes ago. The patient's blood pressure has dropped from 118/76 to 88/52, heart rate has increased from 78 to 118 bpm, and the uterine fundus is boggy and 4 fingerbreadths above the umbilicus. The patient reports feeling dizzy. Estimated blood loss is 650mL. What is the nurse's PRIORITY action?",
    options: [
      "Increase the IV fluid rate and reassess vital signs in 15 minutes",
      "Perform uterine massage, notify the physician, prepare oxytocin and prepare for urgent intervention",
      "Position the patient supine and apply oxygen via nasal cannula at 2L/min",
      "Obtain a type and crossmatch blood sample and wait for physician orders",
    ],
    correct: 1,
    explanation: "This patient has POSTPARTUM HAEMORRHAGE with haemodynamic instability (BP 88/52, HR 118, dizziness) and a BOGGY UTERUS — the hallmark of UTERINE ATONY, the most common cause of PPH. PRIORITY actions simultaneously: Perform vigorous UTERINE MASSAGE to stimulate contraction, NOTIFY the physician URGENTLY, prepare and administer OXYTOCIN IV (first-line uterotoonic), establish large-bore IV access and prepare for fluid resuscitation and possible blood products. Oxygen should be high-flow via face mask — NOT nasal cannula at 2L. Simply increasing IV fluids (Option A) addresses hypovolaemia but does nothing for the underlying uterine atony. Waiting for physician orders (Option D) when the patient is haemodynamically unstable wastes critical time.",
    wrongExplanations: [
      "WRONG: Increasing fluids alone does not address the underlying uterine atony causing the haemorrhage. The boggy uterus needs immediate massage and oxytocin.",
      "",
      "WRONG: Supine position is appropriate but oxygen should be HIGH-FLOW via face mask — not 2L nasal cannula — in haemodynamic compromise. This option also does nothing for the uterine atony.",
      "WRONG: Type and crossmatch is important — but waiting for physician orders when the patient is actively haemorrhaging with haemodynamic instability delays life-saving treatment.",
    ],
  },
  {
    level: "Advanced",
    question: "A 16-year-old primigravida at 38 weeks gestation arrives in triage reporting severe headache, right upper quadrant pain and 'seeing spots.' Her blood pressure is 174/116 mmHg and urine dipstick shows 4+ protein. Her platelet count is 82,000 and liver enzymes are elevated. What condition does this patient have and what is the PRIORITY nursing action?",
    options: [
      "Severe preeclampsia — administer antihypertensives and monitor closely",
      "HELLP syndrome — immediate physician notification, IV access, magnesium sulfate preparation and prepare for possible delivery",
      "Eclampsia — administer magnesium sulfate bolus immediately without a physician order",
      "Gestational hypertension — bedrest and repeat BP in 4 hours",
    ],
    correct: 1,
    explanation: "This patient has HELLP SYNDROME — Haemolysis (elevated liver enzymes suggest haemolysis), Elevated Liver enzymes (RUQ pain, elevated LFTs), Low Platelets (82,000 = thrombocytopenia). HELLP is a life-threatening variant of severe preeclampsia. Priority nursing actions: NOTIFY physician IMMEDIATELY, establish large-bore IV access, prepare MAGNESIUM SULFATE for seizure prophylaxis (requires physician order), prepare antihypertensives (target BP <160/110), obtain blood work (CBC, LFTs, coagulation studies, type and screen), monitor foetal wellbeing continuously, prepare for possible urgent delivery. HELLP can rapidly progress to DIC, liver rupture, eclampsia and maternal/foetal death. Option C (giving magnesium without an order) is incorrect — nursing cannot independently administer this medication.",
    wrongExplanations: [
      "WRONG: This patient has more than severe preeclampsia — the thrombocytopenia (82,000) and elevated liver enzymes in combination define HELLP syndrome, which has additional management requirements.",
      "",
      "WRONG: Magnesium sulfate requires a PHYSICIAN ORDER — nurses cannot administer it independently. While it will likely be ordered, the nurse cannot give it without an order.",
      "WRONG: Gestational hypertension does NOT involve proteinuria, thrombocytopenia or elevated liver enzymes. This patient has HELLP syndrome — a true obstetric emergency requiring immediate action.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is providing postpartum teaching to a first-time mother who is breastfeeding. On day 3 postpartum, the mother reports her breasts feel 'like rocks,' are extremely tender and she is having difficulty getting her baby to latch. Her temperature is 37.2°C and both breasts are equally affected. What is the MOST appropriate nursing intervention?",
    options: [
      "Advise the mother to stop breastfeeding temporarily to allow the breasts to rest",
      "Refer the mother to a physician — bilateral breast involvement indicates possible bilateral mastitis",
      "Explain this is normal engorgement, encourage frequent feeding, teach warm compresses before feeding and cold compresses after, and assist with latch technique",
      "Advise the mother to use formula supplementation to reduce breast stimulation",
    ],
    correct: 2,
    explanation: "This is classic BREAST ENGORGEMENT — bilateral, occurring on day 3 when mature milk 'comes in,' no fever (temp 37.2°C is normal), rock-hard tender breasts with poor latch. Management: frequent breastfeeding (8-12 times/day) is the MOST effective treatment, WARM compresses 20 minutes BEFORE feeding (softens areola, improves latch), COLD compresses/cabbage leaves AFTER feeding (reduce swelling/discomfort), gentle breast massage, if needed — express small amount before feeding to soften areola. MASTITIS presents with UNILATERAL involvement, flu-like symptoms AND fever >38°C — this patient has neither. Stopping breastfeeding (Option A) or adding formula (Option D) WORSENS engorgement by reducing stimulation and increasing milk stasis.",
    wrongExplanations: [
      "WRONG: Stopping breastfeeding WORSENS engorgement — milk continues to be produced without being removed, causing increased pressure, pain and risk of mastitis.",
      "WRONG: Bilateral involvement WITHOUT fever is ENGORGEMENT — not mastitis. Mastitis is unilateral with fever >38°C and flu-like symptoms. No physician referral is needed for normal engorgement.",
      "",
      "WRONG: Formula supplementation reduces breast stimulation, decreases milk supply, worsens engorgement and undermines breastfeeding success. This is not appropriate for engorgement.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is working in the neonatal nursery. A newborn delivered 20 hours ago is noted to have jaundice visible on the face, chest and abdomen. Total bilirubin is 18 mg/dL. The mother is Rh-negative and did not receive RhoGAM during pregnancy. The baby is Rh-positive. What is the MOST likely cause of this jaundice and what is the PRIORITY nursing action?",
    options: [
      "Physiological jaundice — reassure parents and encourage more frequent breastfeeding",
      "Pathological jaundice due to Rh incompatibility — notify physician immediately, prepare for phototherapy and possible exchange transfusion",
      "Breastfeeding jaundice — advise temporary cessation of breastfeeding for 24-48 hours",
      "Normal newborn jaundice — initiate phototherapy as per routine protocol",
    ],
    correct: 1,
    explanation: "This is PATHOLOGICAL JAUNDICE due to Rh INCOMPATIBILITY (isoimmunisation). Key indicators: Jaundice appearing within FIRST 24 HOURS (20 hours = pathological), mother Rh-negative without RhoGAM, baby Rh-positive, bilirubin of 18 mg/dL at 20 hours is dangerously high. The mother's anti-Rh antibodies crossed the placenta, are haemolysing the baby's Rh-positive red blood cells — causing rapid bilirubin rise. Priority: NOTIFY physician IMMEDIATELY, initiate PHOTOTHERAPY urgently, prepare for possible EXCHANGE TRANSFUSION (if bilirubin continues rising rapidly), monitor closely for kernicterus (brain damage from bilirubin deposition). Physiological jaundice (Option A) appears AFTER 24 hours — this appeared at 20 hours = pathological. Bilirubin of 18 at 20 hours requires urgent intervention, not reassurance.",
    wrongExplanations: [
      "WRONG: Physiological jaundice appears AFTER 24 hours. This jaundice appeared at 20 hours = PATHOLOGICAL. Additionally, bilirubin of 18 mg/dL with Rh incompatibility context is an emergency.",
      "",
      "WRONG: Breastfeeding jaundice typically appears after day 4-7, is mild and does not reach 18 mg/dL rapidly. The Rh incompatibility in this case explains the pathological jaundice.",
      "WRONG: This is NOT routine phototherapy — this is a pathological emergency requiring urgent physician notification and preparation for exchange transfusion if needed. Routine protocol is insufficient.",
    ],
  },
];

const clinicalPearls = [
  "Late decelerations never mean 'wait and see' — they mean act NOW. Every late deceleration is telling you the placenta is not delivering enough oxygen to the baby. LION every time, no exceptions.",
  "The most common cause of a displaced uterine fundus postpartum is a full bladder — always assist the patient to void before assuming something more serious is wrong.",
  "Magnesium sulfate is NOT an antihypertensive — it is given to PREVENT and TREAT seizures. Nurses commonly confuse its purpose. Always check DTRs — a patient with absent DTRs on magnesium is showing you toxicity.",
  "When a baby is jaundiced in the first 24 hours — this is NEVER normal. Pathological jaundice requires urgent investigation and treatment. The 24-hour rule is one of the most important facts in newborn nursing.",
  "Engorgement and mastitis are commonly confused. Bilateral + no fever = engorgement. Unilateral + fever + flu symptoms = mastitis. The treatments are different — engorgement: more feeding. Mastitis: more feeding PLUS antibiotics.",
  "Cord prolapse: Your hand in the vagina holding up the presenting part is the single most important intervention. Do not remove it until the baby is delivered by C-section — no matter how long that takes.",
  "Postpartum psychosis is one of the most dangerous psychiatric emergencies — mothers can harm their babies and themselves. If a new mother is expressing strange beliefs, hearing voices or has rapidly shifting moods — treat this as an emergency.",
];

export default function MaternalNewbornPage() {
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
    if (index === filteredQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
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
            <h1 className="font-black text-base text-gray-900">🤱 Maternal & Newborn</h1>
            <p className="text-xs text-gray-500">Health Promotion & Maintenance • High Yield ⭐⭐⭐</p>
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
            <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
              <p className="text-green-700 text-sm leading-relaxed font-medium">
                🤱 Maternal and newborn nursing is one of the highest yield areas on NCLEX. Master foetal heart rate patterns, postpartum assessment and newborn care — these appear on every exam!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most common NCLEX traps on Maternal & Newborn — study these carefully!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Maternal & Newborn!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review FHR patterns and postpartum assessment." :
                        "Keep studying! Focus on LION, BUBBLE-HE, APGAR and labour complications."}
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