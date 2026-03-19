"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Health Screening",
    icon: "🔬",
    color: "blue",
    content: [
      "Health screening identifies disease or risk factors BEFORE symptoms appear — enabling early intervention and improved outcomes",
      "PRIMARY prevention: Prevents disease from occurring (immunisation, lifestyle modification, chemoprevention)",
      "SECONDARY prevention: Early detection of existing disease before symptoms (screening tests — mammogram, colonoscopy, Pap smear)",
      "TERTIARY prevention: Minimising disability from existing disease (cardiac rehabilitation, diabetes management programmes)",
      "Effective screening tests must be: sensitive (detects true positives), specific (avoids false positives), safe, acceptable to patients and cost-effective",
      "SENSITIVITY: Ability to correctly identify people WITH the disease. High sensitivity = few false negatives. Used for serious diseases where missing a case is dangerous",
      "SPECIFICITY: Ability to correctly identify people WITHOUT the disease. High specificity = few false positives. Used when false positives cause significant harm",
      "NCLEX heavily tests: Cancer screening guidelines, cardiovascular risk screening, diabetes screening, mental health screening and the nurse's role in health promotion",
    ],
  },
  {
    title: "Cancer Screening — Breast Cancer",
    icon: "🎗️",
    color: "pink",
    content: [
      "MAMMOGRAM (US Preventive Services Task Force 2024 guidelines): Every 2 years for women aged 40-74",
      "American Cancer Society: Annual mammogram recommended from age 45, option to start at 40",
      "HIGH RISK women (BRCA1/2 mutation, first-degree relative with BRCA, prior chest radiation 10-30 years): Annual mammogram AND MRI starting at age 30",
      "BRCA gene testing: Consider for women with strong family history — first-degree relative with breast or ovarian cancer under 50",
      "CLINICAL BREAST EXAMINATION: Every 1-3 years for women 20-39, annually for 40+",
      "BREAST SELF-EXAMINATION (BSE): No longer routinely recommended as a formal screening tool — but nurses teach breast awareness",
      "Risk factors for breast cancer: Age, female sex, BRCA1/2 mutation, family history, dense breast tissue, early menarche (<12), late menopause (>55), nulliparity, HRT use, alcohol use, obesity",
      "NCLEX tip: Know age recommendations AND high-risk modifications — both are tested",
    ],
  },
  {
    title: "Cancer Screening — Cervical Cancer",
    icon: "🔴",
    color: "red",
    content: [
      "PAP SMEAR (Cervical cytology): Begin at age 21 regardless of sexual activity onset",
      "Age 21-29: Pap smear every 3 years (cytology alone)",
      "Age 30-65: Pap smear every 3 years (cytology alone) OR every 5 years (co-test: Pap + HPV test)",
      "Age 65+: Discontinue if adequate prior screening and no high-risk history",
      "After hysterectomy (with cervix removal) for benign disease: Discontinue screening",
      "After hysterectomy (cervix retained or hysterectomy for CIN/cancer): Continue as appropriate",
      "HPV VACCINE (Gardasil): Routinely recommended at age 11-12 (can start age 9). Catch-up vaccination to age 26. Shared decision-making 27-45",
      "Risk factors for cervical cancer: HPV infection (most important), multiple sexual partners, early sexual debut, smoking, immunosuppression, non-compliance with screening",
      "NCLEX tip: The Pap smear starts at age 21 — NOT at sexual debut. This is a common wrong answer!",
    ],
  },
  {
    title: "Cancer Screening — Colorectal Cancer",
    icon: "🟤",
    color: "orange",
    content: [
      "Begin screening at age 45 for average-risk individuals (USPSTF 2021 update — previously age 50)",
      "COLONOSCOPY: Every 10 years — gold standard, allows biopsy and polypectomy simultaneously",
      "FLEXIBLE SIGMOIDOSCOPY: Every 5 years, or every 10 years with annual FIT",
      "STOOL-BASED TESTS: Annual high-sensitivity guaiac FOBT or FIT, or Cologuard (stool DNA) every 1-3 years",
      "CT COLONOGRAPHY (Virtual colonoscopy): Every 5 years",
      "HIGH RISK (personal/family history of colorectal cancer or polyps, IBD, Lynch syndrome, FAP): Start earlier and screen more frequently",
      "Family history in first-degree relative under 60: Begin colonoscopy at age 40 OR 10 years before the relative's diagnosis age (whichever is earlier)",
      "Positive stool-based test requires COLONOSCOPY follow-up — stool tests are NOT diagnostic",
      "Risk factors: Age, personal/family history, IBD (Crohn's/UC), high fat/low fibre diet, obesity, sedentary lifestyle, smoking, alcohol, red/processed meat consumption",
      "NCLEX tip: New guidelines start at age 45 — this changed from age 50 in 2021 and is a commonly tested update",
    ],
  },
  {
    title: "Cancer Screening — Lung Cancer",
    icon: "🫁",
    color: "blue",
    content: [
      "LOW-DOSE CT (LDCT) annual screening is recommended for HIGH RISK individuals only",
      "USPSTF criteria for lung cancer screening: Age 50-80, AND 20 pack-year smoking history, AND currently smoke OR quit within the past 15 years",
      "Pack-year calculation: Packs per day × years smoked (e.g., 1 pack/day × 20 years = 20 pack-years)",
      "Chest X-ray is NOT recommended for lung cancer screening — insufficient sensitivity",
      "Sputum cytology is NOT recommended for routine screening",
      "Shared decision-making conversation required before initiating LDCT screening",
      "Discontinue screening if: Patient has not smoked for 15 years, patient develops health problem that limits life expectancy, would not tolerate curative lung surgery",
      "Risk factors: Smoking (most important — 85% of lung cancers), radon exposure (second leading cause), asbestos, air pollution, family history, prior lung disease",
      "NCLEX tip: Lung cancer screening is specifically for HIGH-RISK (heavy current or recent smokers 50-80) — NOT all adults over 50",
    ],
  },
  {
    title: "Cancer Screening — Prostate Cancer",
    icon: "🔵",
    color: "blue",
    content: [
      "PSA (Prostate-Specific Antigen) test: SHARED DECISION-MAKING for men aged 55-69",
      "USPSTF recommends AGAINST routine PSA screening in men 70+ due to harms outweighing benefits",
      "High-risk groups (African American men, first-degree relative with prostate cancer under 65): Discuss screening starting at age 40-45",
      "PSA normal values: <4.0 ng/mL (age-adjusted norms exist). Elevated PSA requires further investigation",
      "PSA can be elevated by: BPH (benign prostatic hyperplasia), prostatitis, recent ejaculation, prostate biopsy, DRE, urinary catheterisation",
      "DRE (Digital Rectal Examination): Historically used but limited sensitivity — PSA is more sensitive",
      "Risk factors: Age (most significant), African American ethnicity, family history, BRCA2 mutation",
      "NCLEX tip: PSA screening is a SHARED DECISION — not a routine recommendation for all men. Understand the controversy around harms vs benefits",
    ],
  },
  {
    title: "Cardiovascular Risk Screening",
    icon: "❤️",
    color: "red",
    content: [
      "BLOOD PRESSURE screening: All adults at every healthcare visit. Stage 1 HTN = 130-139/80-89. Stage 2 HTN = ≥140/90",
      "LIPID PANEL (Cholesterol screening): All adults 20+ every 5 years. More frequently if abnormal or high risk",
      "High-risk individuals: Annual or more frequent screening — diabetes, hypertension, smoking, family history, obesity",
      "FRAMINGHAM RISK SCORE: Estimates 10-year cardiovascular risk — guides statin therapy decisions",
      "ABDOMINAL AORTIC ANEURYSM (AAA) screening: One-time ultrasound for men aged 65-75 who EVER smoked (≥100 cigarettes lifetime)",
      "ATRIAL FIBRILLATION: Screen with pulse palpation at all visits — irregular rhythm warrants ECG",
      "Metabolic syndrome criteria (3 of 5): Waist circumference >102cm men/>88cm women, triglycerides ≥150, HDL <40 men/<50 women, BP ≥130/85, fasting glucose ≥100",
      "ANKLE-BRACHIAL INDEX (ABI): Screen for peripheral arterial disease in patients 65+ or with symptoms",
      "Risk factors for CVD: Hypertension, hyperlipidaemia, diabetes, smoking, obesity, family history, age, male sex, sedentary lifestyle",
      "NCLEX tip: Know BP stages, who gets AAA screening and understand that lipid screening starts at age 20",
    ],
  },
  {
    title: "Diabetes Screening",
    icon: "🩸",
    color: "orange",
    content: [
      "USPSTF recommends screening for prediabetes/type 2 diabetes in adults aged 35-70 who are OVERWEIGHT or OBESE",
      "High-risk screening (any age): BMI ≥25 (≥23 in Asian Americans) + one or more risk factors",
      "Risk factors warranting earlier screening: Physical inactivity, first-degree relative with T2DM, high-risk ethnicity (African American, Hispanic, Asian American, Native American, Pacific Islander), history of gestational diabetes, PCOS, acanthosis nigricans, HDL <35, triglycerides >250, HbA1c ≥5.7% previously",
      "DIAGNOSTIC criteria for diabetes (any ONE of): Fasting glucose ≥126 mg/dL, 2-hour glucose ≥200 mg/dL during OGTT, HbA1c ≥6.5%, random glucose ≥200 with symptoms",
      "PREDIABETES criteria: Fasting glucose 100-125 mg/dL (IFG), OGTT 140-199 mg/dL (IGT), HbA1c 5.7-6.4%",
      "GESTATIONAL DIABETES screening: All pregnant women at 24-28 weeks (earlier if high risk)",
      "GESTATIONAL DIABETES diagnostic threshold: 1-hour glucose challenge test ≥140 mg/dL requires 3-hour OGTT for confirmation",
      "Women with gestational diabetes: Screen for T2DM 4-12 weeks postpartum and every 1-3 years thereafter",
      "NCLEX tip: Know ALL diagnostic criteria for diabetes — HbA1c ≥6.5% is as valid as fasting glucose ≥126. Confirm with repeat test unless symptomatic",
    ],
  },
  {
    title: "Mental Health Screening",
    icon: "🧠",
    color: "purple",
    content: [
      "DEPRESSION screening: USPSTF recommends screening ALL adults including pregnant and postpartum women",
      "PHQ-9 (Patient Health Questionnaire-9): Gold standard depression screening tool. Score 0-27. ≥10 = moderate depression, ≥15 = severe",
      "PHQ-2 (2-question): Quick initial screen — if positive, follow with PHQ-9",
      "EDINBURGH POSTNATAL DEPRESSION SCALE (EPDS): Specific screen for perinatal depression. Score ≥10 warrants further assessment",
      "ANXIETY screening: GAD-7 (Generalised Anxiety Disorder 7-item scale) — routinely recommended",
      "SUICIDE RISK: Columbia Suicide Severity Rating Scale (C-SSRS) — assess ideation, intent, plan, prior attempts",
      "COGNITIVE DECLINE screening: Mini-Mental State Examination (MMSE) or Montreal Cognitive Assessment (MoCA) for suspected dementia",
      "MINI-COG: 3-item recall + clock drawing — quick 3-minute cognitive screen for primary care",
      "ALCOHOL USE: AUDIT-C or CAGE questionnaire — screen all adults",
      "CAGE questions: C-ut down, A-nnoyed, G-uilty, E-ye opener. Two or more positive = likely alcohol use disorder",
      "SUBSTANCE USE: DAST-10 (Drug Abuse Screening Test) — screen all adults",
      "NCLEX tip: Know which screening tool is used for which condition — PHQ-9 for depression, GAD-7 for anxiety, CAGE for alcohol, MMSE for cognition",
    ],
  },
  {
    title: "Osteoporosis Screening",
    icon: "🦴",
    color: "blue",
    content: [
      "BONE DENSITY SCAN (DEXA scan): Recommended for all women aged 65+ and postmenopausal women under 65 with risk factors",
      "FRAX tool: Calculates 10-year fracture risk — determines who needs DEXA scan under 65",
      "Men: DEXA recommended at 70+ or younger with risk factors (long-term steroids, hypogonadism, prior fragility fracture)",
      "T-score interpretation: Normal ≥-1.0, Osteopenia -1.0 to -2.5, Osteoporosis ≤-2.5, Severe osteoporosis ≤-2.5 with fragility fracture",
      "Risk factors: Female sex, advancing age, Caucasian/Asian ethnicity, low body weight, family history, smoking, alcohol, low calcium/vitamin D, sedentary lifestyle, long-term steroid use, early menopause",
      "Prevention: Weight-bearing exercise, adequate calcium (1000-1200mg/day), vitamin D (600-800 IU/day), fall prevention, avoid smoking/alcohol",
      "NCLEX tip: DEXA for ALL women 65+ — no risk factors needed. Under 65 postmenopausal women need risk factors to qualify",
    ],
  },
  {
    title: "Sexually Transmitted Infection (STI) Screening",
    icon: "🔬",
    color: "green",
    content: [
      "CHLAMYDIA and GONORRHOEA: Annual screening for all sexually active women under 25. Women 25+ with risk factors. All MSM (men who have sex with men) annually",
      "HIV screening: USPSTF recommends at least ONCE for all adults 15-65. More frequently for high-risk (MSM, PWID, multiple partners, STI history)",
      "SYPHILIS: Screen all pregnant women at first prenatal visit. High-risk adults annually",
      "HEPATITIS C: One-time screening for all adults 18-79 (USPSTF 2020)",
      "HEPATITIS B: Screen all adults at least once. Screen pregnant women at first prenatal visit",
      "HERPES: Routine screening NOT recommended for asymptomatic low-risk adults",
      "HPV: Not routinely tested as a standalone screen in men. In women, tested as part of Pap co-test (30-65 years)",
      "Pregnancy screening: ALL pregnant women screened at first prenatal visit for HIV, syphilis, hepatitis B, gonorrhoea, chlamydia, rubella, varicella immunity, blood type/Rh factor",
      "NCLEX tip: Chlamydia screening for ALL sexually active women under 25 — no additional risk factors needed. HIV screening once for ALL adults 15-65",
    ],
  },
  {
    title: "Vision and Hearing Screening",
    icon: "👁️",
    color: "purple",
    content: [
      "VISION screening: All children at birth (red reflex test), age 3-5 (visual acuity), school entry and periodically throughout childhood",
      "Adults: Screen as part of routine care. Specific intervals vary — annual for diabetics (diabetic retinopathy risk)",
      "GLAUCOMA screening: Annual screening for: adults 65+, African Americans 40+, family history of glaucoma",
      "Red flag eye findings requiring immediate referral: Sudden vision loss, painful red eye, halos around lights (acute angle closure glaucoma), floaters with flashing lights (retinal detachment)",
      "HEARING screening: Universal newborn hearing screen before hospital discharge — mandatory in most countries",
      "School-age: Annual hearing screening",
      "Adults: Screen for hearing loss — especially 50+ and those with noise exposure history",
      "PRESBYCUSIS: Age-related high-frequency hearing loss — begins around age 40-50, accelerates with age",
      "Hearing aids: Only 20% of people who would benefit actually use them — stigma is a major barrier",
      "Nursing: Assess hearing before assuming patient non-compliance or confusion — hearing loss mimics cognitive decline",
    ],
  },
];

const mnemonics = [
  {
    title: "Cancer Screening Ages — Key Numbers",
    acronym: "SCREEN",
    breakdown: ["Starts at 21 (Pap)", "Colonoscopy from 45", "Review lipids from 20", "Every woman 40+ mammogram", "Every 2 years mammogram 40-74", "No screening post 65 (Pap if adequate prior)"],
    memory: "SCREEN your patients — know the START ages for each cancer screening to answer NCLEX correctly!",
    color: "red",
  },
  {
    title: "Diabetes Diagnostic Criteria",
    acronym: "FROG",
    breakdown: ["Fasting glucose ≥126", "Random glucose ≥200 with symptoms", "OGTT 2-hour ≥200", "Glycated HbA1c ≥6.5%"],
    memory: "FROG jumps into diagnosis — any ONE of these criteria confirms diabetes! Always confirm with repeat test.",
    color: "orange",
  },
  {
    title: "CAGE Alcohol Screening",
    acronym: "CAGE",
    breakdown: ["Cut down — felt need to cut down?", "Annoyed — annoyed by criticism?", "Guilty — felt guilty about drinking?", "Eye opener — first drink in morning?"],
    memory: "CAGE keeps alcohol problems in check — 2 or more YES answers = likely alcohol use disorder!",
    color: "purple",
  },
  {
    title: "AAA Screening Criteria",
    acronym: "MES",
    breakdown: ["Male sex", "Ever smoked (100+ cigarettes)", "Sixty-five to seventy-five years old"],
    memory: "MES — One-time ultrasound for MEN who EVER SMOKED aged 65-75. Just once. Just men. Just smokers.",
    color: "blue",
  },
];

const alerts = [
  { text: "Pap smear starts at age 21 — NOT at sexual debut! A 16-year-old who is sexually active does NOT need a Pap smear!", severity: "high" },
  { text: "Colorectal cancer screening now starts at age 45 — NOT 50! This changed in 2021 and is heavily tested on NCLEX!", severity: "high" },
  { text: "A positive stool-based test (FOBT/FIT/Cologuard) is NOT diagnostic — it ALWAYS requires follow-up colonoscopy!", severity: "high" },
  { text: "Lung cancer LDCT screening is for HIGH-RISK only — age 50-80 with 20+ pack-years who currently smoke or quit within 15 years!", severity: "high" },
  { text: "AAA ultrasound screening is ONE-TIME ONLY for men aged 65-75 who have EVER smoked — not repeated annually!", severity: "high" },
  { text: "HIV screening is recommended at least ONCE for ALL adults aged 15-65 — not just high-risk individuals!", severity: "high" },
  { text: "Hepatitis C screening recommended ONCE for ALL adults 18-79 regardless of risk factors — this is a 2020 update!", severity: "high" },
  { text: "PSA testing is SHARED DECISION-MAKING — NOT a routine recommendation. Understand benefits AND harms before recommending!", severity: "medium" },
  { text: "DEXA scan for ALL women 65+ — no risk factors needed. Under 65 postmenopausal women need risk factors to qualify!", severity: "medium" },
  { text: "Gestational diabetes screening at 24-28 weeks for ALL pregnant women — regardless of risk factors!", severity: "medium" },
  { text: "PHQ-9 score ≥10 = moderate depression. Know this threshold — NCLEX asks you to interpret screening scores!", severity: "medium" },
  { text: "Universal newborn hearing screen must occur BEFORE hospital discharge — this is mandatory, not optional!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "According to current USPSTF guidelines, at what age should cervical cancer screening (Pap smear) BEGIN for a woman who became sexually active at age 15?",
    options: [
      "Age 15 — when sexual activity began",
      "Age 18 — legal adulthood",
      "Age 21 — regardless of sexual activity onset",
      "Age 25 — current international guidelines",
    ],
    correct: 2,
    explanation: "Cervical cancer screening with Pap smear begins at age 21 REGARDLESS of when sexual activity began. This is one of the most frequently tested screening facts on NCLEX. The reason: HPV infection and cervical cell changes in adolescents almost always resolve spontaneously — early screening leads to unnecessary procedures, anxiety and potential harm without benefit. From age 21-29: Pap smear every 3 years (cytology alone). From 30-65: every 3 years (Pap alone) or every 5 years (co-test with HPV). A 15-year-old who is sexually active does NOT need a Pap smear.",
    wrongExplanations: [
      "WRONG: Sexual debut does NOT determine when Pap smears begin. Guidelines specifically state age 21 regardless of sexual activity onset — early screening in adolescents causes harm without benefit.",
      "WRONG: Age 18 is not a screening guideline threshold — age 21 is the starting point regardless of legal adulthood.",
      "",
      "WRONG: Some international guidelines have moved to 25 — but USPSTF (the standard for NCLEX) recommends starting at 21.",
    ],
  },
  {
    level: "Knowledge",
    question: "A 48-year-old man with no family history of colorectal cancer and no personal history of polyps asks about colorectal cancer screening. He has never been screened. What should the nurse recommend?",
    options: [
      "Begin screening at age 50 — he is too young for routine screening",
      "He should have started screening at age 45 — recommend colonoscopy or alternative screening now",
      "Annual faecal occult blood test only — colonoscopy is not needed until age 60",
      "No screening needed until he develops symptoms",
    ],
    correct: 1,
    explanation: "USPSTF updated colorectal cancer screening guidelines in 2021 — routine screening now begins at age 45 for average-risk individuals (changed from age 50). This man is 48 and has never been screened — he should have started at 45. He is overdue for screening. Options include: colonoscopy every 10 years (gold standard), annual FIT, annual high-sensitivity guaiac FOBT, CT colonography every 5 years or stool DNA test every 1-3 years. The specific test choice involves shared decision-making. Starting at 50 (Option A) is the OLD guideline.",
    wrongExplanations: [
      "WRONG: The guidelines changed in 2021 — screening now starts at 45, not 50. This is one of the most important recent guideline updates on NCLEX.",
      "",
      "WRONG: Annual FOBT alone is a valid option but colonoscopy is not reserved until age 60. Multiple screening modalities are available and all are appropriate starting at age 45.",
      "WRONG: Waiting for symptoms defeats the purpose of screening — colorectal cancer is highly treatable when caught early before symptoms develop.",
    ],
  },
  {
    level: "Application",
    question: "A 55-year-old woman presents for a well-woman visit. She completed menopause at age 52, her last Pap smear 3 years ago was normal (cytology only), she has no history of abnormal Pap smears or cervical cancer, and she has had the same sexual partner for 25 years. What cervical cancer screening should the nurse recommend?",
    options: [
      "She no longer needs Pap smears — menopause ends the need for cervical screening",
      "Annual Pap smear — postmenopausal women are at higher risk and need more frequent screening",
      "Pap smear now (due for her 3-year cytology), continue every 3 years until age 65",
      "Co-test (Pap + HPV) now — all women 30-65 should have co-testing every 5 years",
    ],
    correct: 2,
    explanation: "This woman is 55, had a normal Pap 3 years ago with cytology only — she is due for her next 3-year cytology Pap smear NOW. She should continue screening until age 65 (then discontinue if adequate prior screening). For women aged 30-65, the options are: cytology every 3 years OR co-test (Pap + HPV) every 5 years. Both are acceptable — she was on the 3-year cytology schedule, so a Pap smear now is correct. Menopause does NOT end the need for cervical screening. More frequent (annual) screening is not recommended for low-risk women.",
    wrongExplanations: [
      "WRONG: Menopause does NOT end cervical cancer screening. Screening continues until age 65 (if adequate prior screening history) regardless of menopausal status.",
      "WRONG: Annual Pap smears are NOT recommended for low-risk women — this leads to unnecessary procedures and anxiety. Every 3 years (cytology) or every 5 years (co-test) is appropriate.",
      "",
      "WRONG: Co-testing every 5 years is a valid alternative — but since she is already on the 3-year cytology schedule and is due now, continuing that schedule is the correct answer.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is reviewing results for a 58-year-old woman who underwent a routine annual FIT (faecal immunochemical test). The result is POSITIVE. The patient states she is relieved the test is 'just a stool test' and asks if she can wait until next year for her next FIT. What is the nurse's MOST appropriate response?",
    options: [
      "Reassure her — a positive FIT just means she needs to repeat the test next year as scheduled",
      "A positive FIT requires follow-up colonoscopy — a stool test is a screening tool, not a diagnostic test",
      "Advise her to increase dietary fibre and repeat the FIT in 6 months",
      "Order a CT colonography — it is less invasive than colonoscopy and sufficient for follow-up",
    ],
    correct: 1,
    explanation: "A POSITIVE stool-based test (FIT, FOBT or Cologuard) ALWAYS requires follow-up DIAGNOSTIC COLONOSCOPY — it is NOT a diagnosis and the patient cannot simply repeat the stool test next year. A positive FIT means blood was detected in the stool — the cause must be identified, which may include: colorectal polyps, colorectal cancer, angiodysplasia, haemorrhoids, or other lesions. Only colonoscopy can visualise and biopsy the source. Waiting and repeating the FIT (Option A) delays potentially critical diagnosis. Dietary changes (Option C) do not address the positive result. CT colonography (Option D) is a primary screening option but is NOT the standard follow-up for a positive stool test — colonoscopy is.",
    wrongExplanations: [
      "WRONG: A positive FIT CANNOT be repeated next year — it requires IMMEDIATE colonoscopy follow-up. Waiting delays potentially life-saving cancer diagnosis.",
      "",
      "WRONG: Dietary changes do not address a positive FIT result. The stool test detected blood — a colonoscopy is needed to identify the source regardless of diet.",
      "WRONG: CT colonography is a primary screening tool — it is NOT the standard of care for follow-up of a positive stool test. Colonoscopy is required because it can both diagnose AND treat (remove polyps) at the same time.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is conducting a health promotion visit for a 67-year-old man who smoked 1.5 packs per day for 30 years and quit 10 years ago. His BMI is 28, blood pressure is 134/82 mmHg and he has no symptoms. Which cancer screening test should the nurse specifically recommend for this patient?",
    options: [
      "No cancer screening — he quit smoking 10 years ago so lung cancer risk is minimal",
      "Annual low-dose CT scan for lung cancer screening",
      "Annual chest X-ray for lung cancer screening",
      "Sputum cytology every 6 months for lung cancer screening",
    ],
    correct: 1,
    explanation: "This patient meets ALL criteria for LUNG CANCER SCREENING with annual LDCT: Age 67 (within 50-80 range), 45 pack-years (1.5 packs × 30 years), quit within the past 15 years (quit 10 years ago). Annual LDCT is the ONLY recommended lung cancer screening modality — chest X-ray has been proven ineffective for lung cancer screening and is NOT recommended. Sputum cytology is also not recommended for screening. The fact that he quit 10 years ago is IRRELEVANT — he still qualifies because he quit within 15 years. He also has elevated BP (134/82 = Stage 1 hypertension) and his BMI suggests overweight — these should also be addressed.",
    wrongExplanations: [
      "WRONG: Quitting 10 years ago does NOT disqualify him — the criteria include quitting WITHIN the past 15 years. He still meets all three criteria for LDCT screening.",
      "",
      "WRONG: Chest X-ray has been studied extensively and proven INEFFECTIVE for lung cancer screening — it does not reduce lung cancer mortality. Annual LDCT is the only recommended modality.",
      "WRONG: Sputum cytology is NOT recommended for lung cancer screening — it has poor sensitivity and does not reduce lung cancer mortality.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse practitioner is reviewing PHQ-9 results for four patients seen in a primary care clinic today. Which patient's result requires the MOST URGENT response?\n\nPatient A: PHQ-9 score 8 — reports feeling down most days, low energy\nPatient B: PHQ-9 score 14 — persistent sadness, sleep disturbance, difficulty concentrating\nPatient C: PHQ-9 score 22 — severe depression symptoms + responds 'nearly every day' to Question 9: 'Thoughts that you would be better off dead or of hurting yourself'\nPatient D: PHQ-9 score 11 — moderate depression, has missed work twice this week",
    options: [
      "Patient B — score of 14 represents moderate-severe depression requiring urgent treatment",
      "Patient D — missing work indicates functional impairment requiring immediate intervention",
      "Patient C — PHQ-9 score of 22 with active suicidal ideation on Question 9 requires immediate safety assessment",
      "Patient A — mild depression is often undertreated and should be prioritised",
    ],
    correct: 2,
    explanation: "Patient C requires IMMEDIATE response — not because of the overall score (22 = severe) alone, but specifically because Question 9 (thoughts of death or self-harm) is answered 'nearly every day.' PHQ-9 Question 9 is a SUICIDE RISK INDICATOR — any positive response to this question regardless of total score requires immediate safety assessment using a validated suicide risk tool (Columbia-SSRS), safety planning, possible same-day psychiatric referral and patient safety evaluation. A PHQ-9 score interpretation: 0-4=minimal, 5-9=mild, 10-14=moderate, 15-19=moderately severe, 20-27=severe. However — the presence of suicidal ideation ALWAYS takes precedence over the total score number.",
    wrongExplanations: [
      "WRONG: Patient B has moderate-severe depression requiring urgent treatment — but does not have reported suicidal ideation. Patient C's safety risk takes priority.",
      "WRONG: Patient D has functional impairment (missed work) — an important clinical concern — but this does not represent the immediate safety emergency that active suicidal ideation does.",
      "",
      "WRONG: Patient A has mild depression requiring follow-up and monitoring — but this is the LOWEST priority among these four patients given Patient C's active suicidal ideation.",
    ],
  },
  {
    level: "Advanced",
    question: "A 32-year-old woman of Vietnamese descent presents for a routine health visit. Her BMI is 24 kg/m² (which she notes is 'normal'). She has no symptoms. Her mother has type 2 diabetes diagnosed at age 45 and her maternal grandmother had diabetes. She is physically inactive. Her fasting glucose 2 years ago was 102 mg/dL. Should she be screened for diabetes today?",
    options: [
      "No — she is 32, BMI 24 is normal, and the USPSTF guideline is 35-70 with overweight/obesity",
      "No — diabetes screening is only needed if symptomatic or if fasting glucose was ≥126 mg/dL previously",
      "Yes — she meets criteria for earlier screening due to high-risk ethnicity, family history and prior impaired fasting glucose",
      "Yes — all women over 30 should be screened for gestational diabetes regardless of pregnancy status",
    ],
    correct: 2,
    explanation: "Although the USPSTF guideline says 35-70 with overweight/obesity, the ADA (American Diabetes Association) guideline recommends earlier screening for individuals with risk factors regardless of age. This woman has MULTIPLE high-risk criteria: Asian American ethnicity (BMI cutoff for overweight is ≥23, not ≥25 — her BMI 24 IS overweight for her ethnicity), family history of T2DM in first-degree relative, physical inactivity AND prior impaired fasting glucose of 102 mg/dL (prediabetes range is 100-125). A prior fasting glucose of 102 mg/dL = PREDIABETES (IFG) — this ALONE warrants follow-up testing. She should be screened today with fasting glucose or HbA1c.",
    wrongExplanations: [
      "WRONG: The USPSTF guideline is a minimum standard — the ADA recommends screening with risk factors at any age. Additionally, BMI 24 IS overweight for Asian Americans (cutoff is 23). She also has prediabetes history.",
      "WRONG: A previous fasting glucose of 102 mg/dL IS prediabetes (IFG 100-125) — this absolutely warrants follow-up screening even without symptoms. Symptoms appear LATE in diabetes progression.",
      "",
      "WRONG: Gestational diabetes screening is specific to pregnancy (24-28 weeks). This question is about type 2 diabetes screening in a non-pregnant woman.",
    ],
  },
  {
    level: "Advanced",
    question: "A community health nurse is planning a health screening programme for a rural Aboriginal and Torres Strait Islander community in Australia. Compared to the general Australian population, this community has significantly higher rates of cardiovascular disease, type 2 diabetes, renal disease and certain cancers. Which modification to standard screening guidelines is MOST appropriate?",
    options: [
      "Apply standard Australian screening guidelines — evidence-based guidelines apply equally to all populations",
      "Begin cardiovascular, diabetes and renal screening significantly earlier (from age 18-25) and with increased frequency given the higher disease burden and earlier disease onset in this population",
      "Focus only on cancer screening — cardiovascular and diabetes screening should be managed by specialist services",
      "Implement screening only when patients present with symptoms — preventive screening is culturally inappropriate",
    ],
    correct: 1,
    explanation: "Population-specific risk factors require MODIFIED screening guidelines. Aboriginal and Torres Strait Islander Australians have significantly earlier onset and higher prevalence of cardiovascular disease, type 2 diabetes and renal disease — standard age-based guidelines (designed for the general population) would miss significant disease burden. Australian clinical guidelines specifically recommend earlier and more frequent screening for this population: fasting glucose/HbA1c from age 18, lipid panel, blood pressure monitoring, urine albumin:creatinine ratio for renal disease — all commencing much earlier than for the general population. Cultural safety in screening delivery is also essential — community-led and culturally appropriate screening programmes achieve higher participation rates. Option D (symptom-only screening) negates the entire purpose of preventive health screening.",
    wrongExplanations: [
      "WRONG: Standard guidelines are designed for general population averages — they do not account for populations with earlier disease onset and higher prevalence. Applying standard guidelines would result in late diagnosis and preventable deaths.",
      "",
      "WRONG: Cardiovascular and diabetes screening are CENTRAL to preventive health for this community — separating these to specialist services creates access barriers and is the opposite of community health best practice.",
      "WRONG: This approach completely abandons preventive health — symptom-based care alone leads to late-stage diagnosis. Culturally safe and community-led preventive screening is evidence-based and recommended.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is reviewing the following screening results for a 42-year-old man at a primary care visit:\n• BP: 142/88 mmHg (confirmed on repeat)\n• Fasting glucose: 118 mg/dL\n• Total cholesterol: 238 mg/dL, LDL 158 mg/dL, HDL 38 mg/dL\n• BMI: 31.4 kg/m²\n• Smokes 10 cigarettes/day\n• Father had MI at age 55\n\nThe nurse calculates his 10-year cardiovascular risk using the Framingham Risk Score as 18%. Which combination of findings represents the MOST significant immediate concern requiring PRIORITY intervention?",
    options: [
      "Elevated cholesterol — statin therapy is the most important intervention for this patient",
      "Prediabetes — lifestyle intervention can prevent progression to type 2 diabetes",
      "Hypertension combined with multiple cardiovascular risk factors — his 18% 10-year risk warrants urgent lifestyle and likely pharmacological intervention",
      "Obesity — weight loss will correct all other metabolic abnormalities",
    ],
    correct: 2,
    explanation: "This patient has METABOLIC SYNDROME plus multiple cardiovascular risk factors with an 18% 10-year cardiovascular risk — classified as HIGH risk (≥10% = high risk for statin initiation). The combination of HYPERTENSION (142/88 = Stage 2), prediabetes (fasting glucose 118 = IFG), dyslipidaemia (LDL 158, low HDL 38), obesity (BMI 31.4), smoking and family history represents CLUSTERED cardiovascular risk requiring urgent comprehensive intervention. An 18% 10-year risk means 18% chance of MI or stroke in the next 10 years — this is high. Priority interventions: antihypertensive therapy (Stage 2 HTN), high-intensity statin therapy (LDL 158 + high CVD risk), smoking cessation, structured weight loss programme, diabetes prevention programme. No single intervention is sufficient — the cluster of risk factors requires comprehensive management.",
    wrongExplanations: [
      "WRONG: Statin therapy is indicated — but it is one component of a comprehensive cardiovascular risk reduction plan. Hypertension and the overall risk cluster represent the broader urgent concern.",
      "WRONG: Diabetes prevention (lifestyle intervention) is important — but this patient's prediabetes is one of multiple concurrent urgent cardiovascular risks. His 18% 10-year CVD risk is the priority framing.",
      "",
      "WRONG: While obesity contributes to all metabolic abnormalities, weight loss alone takes months to years to achieve and does not address the immediate BP of 142/88 or high CVD risk. Pharmacological intervention is needed now alongside lifestyle changes.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse working in a women's health clinic sees a 38-year-old woman who has tested positive for BRCA1 gene mutation. She has no personal history of cancer. Her mother died of ovarian cancer at age 42 and her maternal aunt had breast cancer at age 36. She asks the nurse 'What does this mean for my screening?' What is the MOST accurate and comprehensive response?",
    options: [
      "Continue standard screening — gene mutations do not change screening guidelines until symptoms appear",
      "Begin annual mammogram now and add annual breast MRI — BRCA1 carriers follow high-risk screening protocols starting significantly earlier than the general population",
      "Genetic testing results only affect screening if you have already had cancer — preventive screening is the same for everyone",
      "Refer immediately for prophylactic mastectomy — this is the only effective intervention for BRCA1 carriers",
    ],
    correct: 1,
    explanation: "BRCA1 mutation carriers face a lifetime breast cancer risk of 55-72% and ovarian cancer risk of 44-46% — standard screening guidelines are completely inadequate for this level of risk. HIGH-RISK BRCA1 screening protocol includes: Annual mammogram AND annual breast MRI starting at age 30 (or 10 years before youngest affected relative — in this case aunt had cancer at 36, so screening could begin at 26). Annual pelvic ultrasound and CA-125 for ovarian cancer surveillance. Referral to a genetic counsellor and high-risk breast programme is essential. Discussions about risk-reducing options (prophylactic salpingo-oophorectomy, chemoprevention with tamoxifen/raloxifene) should occur in a multidisciplinary setting — the nurse's role is to explain the need for enhanced screening and facilitate specialist referral, not to recommend prophylactic surgery unilaterally.",
    wrongExplanations: [
      "WRONG: BRCA1 mutation fundamentally changes screening protocols — standard guidelines are designed for average-risk populations. A BRCA1 carrier has up to 72% lifetime breast cancer risk — standard mammogram starting at 40 is completely inadequate.",
      "",
      "WRONG: Genetic test results SIGNIFICANTLY affect screening recommendations — BRCA1 is one of the strongest known cancer risk factors and requires a completely modified screening approach.",
      "WRONG: Prophylactic mastectomy is a valid risk-reduction OPTION to discuss in a multidisciplinary setting — but it is a major surgical decision requiring extensive counselling and is not the nurse's role to recommend. Enhanced screening is the appropriate nursing response.",
    ],
  },
];

const clinicalPearls = [
  "The single most important screening fact to know for NCLEX: Pap smear starts at age 21 — NOT at sexual debut. A sexually active 16-year-old does NOT need cervical screening. This is wrong answer bait on virtually every NCLEX and NCLEX-style exam.",
  "Colorectal cancer screening changed to age 45 in 2021. Many nurses and even physicians still say 50. Know the current guideline — NCLEX will test the most current recommendations.",
  "A positive stool test is NOT a diagnosis — it is a reason for colonoscopy. Every positive FOBT, FIT or Cologuard requires follow-up colonoscopy. This is non-negotiable and is a patient safety issue.",
  "Hepatitis C now has a one-time universal screening recommendation for ALL adults 18-79. This changed in 2020 and is frequently tested. It is not just for high-risk individuals anymore.",
  "When a patient declines screening — document the discussion, the information provided, the patient's stated reasons and the plan for follow-up. Declining screening is a patient's right — the nurse's obligation is to ensure they are making an informed decision.",
  "HIV screening is for ALL adults 15-65 at least once — this is frequently tested on NCLEX. Many candidates think HIV screening is only for high-risk individuals — it is not.",
  "BRCA gene mutation changes everything about breast screening — annual mammogram PLUS annual MRI starting at 30 (or earlier based on family history). Standard guidelines are for average-risk women only.",
];

export default function HealthScreeningPage() {
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
    pink: "bg-pink-50 border-pink-200",
  };

  const iconBgMap: Record<string, string> = {
    blue: "bg-blue-100",
    green: "bg-green-100",
    red: "bg-red-100",
    purple: "bg-purple-100",
    orange: "bg-orange-100",
    pink: "bg-pink-100",
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
            <h1 className="font-black text-base text-gray-900">🔬 Health Screening</h1>
            <p className="text-xs text-gray-500">Health Promotion & Maintenance • Important ⭐⭐</p>
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
                🔬 Health screening guidelines are heavily tested on NCLEX. Know the START ages, INTERVALS and HIGH-RISK modifications for each cancer and disease screen!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most common NCLEX traps on Health Screening — study these carefully!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Health Screening!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review cancer screening ages and diabetes criteria." :
                        "Keep studying! Focus on Pap smear age 21, colonoscopy age 45 and diabetes diagnostic criteria."}
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