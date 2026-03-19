"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Lifestyle Choices in Health Promotion",
    icon: "🏃",
    color: "blue",
    content: [
      "Lifestyle modification is the cornerstone of primary prevention — modifiable risk factors account for the majority of chronic disease burden globally",
      "The nurse's role in lifestyle counselling: Assess current behaviours, identify readiness to change, provide evidence-based education, set realistic goals, facilitate referrals and follow up",
      "TRANSTHEORETICAL MODEL (Stages of Change): Precontemplation → Contemplation → Preparation → Action → Maintenance → Relapse",
      "Matching nursing intervention to the patient's STAGE OF CHANGE is essential — giving action-oriented advice to someone in precontemplation is ineffective and damages therapeutic rapport",
      "MOTIVATIONAL INTERVIEWING (MI): Evidence-based counselling approach — express empathy, develop discrepancy, roll with resistance, support self-efficacy. Collaboration not confrontation",
      "The 5 A's framework for health behaviour counselling: Ask, Advise, Assess (readiness), Assist, Arrange (follow-up)",
      "NCLEX tests: Smoking cessation strategies, nutritional counselling, exercise recommendations, alcohol guidance and weight management — including the nurse's communication approach",
    ],
  },
  {
    title: "Stages of Change — Transtheoretical Model",
    icon: "🔄",
    color: "purple",
    content: [
      "PRECONTEMPLATION: Patient has NO intention to change in the next 6 months. May be unaware or deny the problem. Nursing approach: Raise awareness non-judgmentally, provide information, plant seeds",
      "CONTEMPLATION: Patient is AWARE of the problem and thinking about changing in the next 6 months but not yet committed. Ambivalent. Nursing approach: Explore pros and cons, build motivation, express empathy",
      "PREPARATION: Patient intends to take action WITHIN THE NEXT 30 DAYS. May have already taken small steps. Nursing approach: Help develop an action plan, identify barriers, discuss strategies",
      "ACTION: Patient has made specific overt changes in the past 6 months. High risk of relapse. Nursing approach: Positive reinforcement, problem-solve barriers, prevent relapse",
      "MAINTENANCE: Patient has sustained behaviour change for MORE THAN 6 MONTHS. Working to prevent relapse. Nursing approach: Continued support, coping strategies, acknowledge success",
      "RELAPSE: Return to previous behaviour — a NORMAL part of the change process, not failure. Nursing approach: Non-judgmental, normalise relapse, re-engage in change process",
      "NCLEX tip: Match the intervention to the stage. Precontemplation = raise awareness. Preparation = action planning. Do NOT give advice to someone who has not expressed readiness",
    ],
  },
  {
    title: "Smoking Cessation — Most Important Lifestyle Intervention",
    icon: "🚭",
    color: "red",
    content: [
      "Smoking is the LEADING CAUSE OF PREVENTABLE DEATH globally — causes lung cancer, COPD, cardiovascular disease, stroke, multiple other cancers, peripheral vascular disease, erectile dysfunction",
      "Benefits of cessation: Within 20 minutes — BP and HR decrease. Within 12 hours — CO levels normalise. Within 2-12 weeks — circulation and lung function improve. Within 1 year — CVD risk halved. Within 15 years — CVD risk equals non-smoker",
      "The 5 A's for smoking cessation: Ask (screen every patient), Advise (clear strong advice to quit), Assess (readiness to quit), Assist (pharmacotherapy + behavioural support), Arrange (follow-up within 1 week)",
      "PHARMACOTHERAPY first-line options:",
      "VARENICLINE (Champix/Chantix): Most effective — partial nicotine receptor agonist. Start 1-2 weeks before quit date. Monitor for mood changes, suicidal ideation",
      "BUPROPION (Zyban/Wellbutrin): Second-line — atypical antidepressant. Start 1-2 weeks before quit date. Contraindicated in seizure disorders, eating disorders, MAOIs",
      "NICOTINE REPLACEMENT THERAPY (NRT): Patch, gum, lozenge, inhaler, nasal spray. Safe to combine with varenicline or bupropion. Safe in stable cardiovascular disease",
      "COMBINATION NRT: Long-acting patch + short-acting (gum/lozenge) is more effective than patch alone",
      "Behavioural support doubles the success rate of pharmacotherapy — refer to Quitline or cessation programme",
      "NCLEX tip: Varenicline is most effective pharmacotherapy. NRT is safe in cardiovascular disease. Never withhold cessation support — every patient who smokes should be offered help",
    ],
  },
  {
    title: "Nutrition and Dietary Counselling",
    icon: "🥗",
    color: "green",
    content: [
      "Healthy diet foundations: Plenty of fruits and vegetables (5+ serves/day), whole grains, lean proteins, healthy fats, limited processed foods, sugar and sodium",
      "MEDITERRANEAN DIET: Highest evidence base — fruits, vegetables, whole grains, legumes, nuts, olive oil, fish. Associated with reduced CVD, diabetes, dementia and certain cancers",
      "DASH DIET (Dietary Approaches to Stop Hypertension): Low sodium (<2300mg/day, ideally <1500mg/day), high potassium, magnesium and calcium. Reduces BP by 8-14 mmHg",
      "CALORIC BALANCE: Weight management requires energy balance. 1kg of fat ≈ 7700 calories. To lose 0.5kg/week = deficit of ~500 calories/day",
      "BMI categories: Underweight <18.5, Normal 18.5-24.9, Overweight 25-29.9, Obese ≥30, Morbid obesity ≥40",
      "WAIST CIRCUMFERENCE: Independent CVD risk factor. High risk: Men >102cm (>40 inches), Women >88cm (>35 inches)",
      "SODIUM restriction: Hypertension and heart failure — <2000-2400mg/day. Each 1000mg sodium reduction lowers systolic BP by 2-5 mmHg",
      "POTASSIUM: High potassium diet lowers BP. Caution in renal disease and with ACE inhibitors/ARBs — hyperkalaemia risk",
      "FIBRE: 25-38g/day recommended. Reduces cholesterol, improves glycaemic control, prevents constipation and colorectal cancer",
      "FOOD SECURITY: Assess ability to access healthy food — economic barriers, food deserts, cultural food preferences must all be considered in dietary counselling",
    ],
  },
  {
    title: "Special Dietary Considerations",
    icon: "🍎",
    color: "orange",
    content: [
      "DIABETES: Low glycaemic index foods, consistent carbohydrate distribution across meals, avoid sugary drinks. HbA1c target <7% for most. Carbohydrate counting is foundational",
      "HEART FAILURE: Sodium restriction <2000mg/day, fluid restriction 1.5-2L/day (if ordered), daily weight monitoring (report gain >1kg/day or >2kg in 48 hours)",
      "CHRONIC KIDNEY DISEASE (CKD): Restrict potassium, phosphorus, sodium and protein. Dietary restrictions vary by stage — involve dietitian for individualised plan",
      "COELIAC DISEASE: Strict gluten-free diet (no wheat, barley, rye) — lifelong adherence required. Cross-contamination is a serious risk",
      "WARFARIN (Coumadin) patients: Consistent Vitamin K intake — do NOT avoid, but maintain consistency. Sudden changes in green vegetables can alter INR significantly",
      "PREGNANCY nutrition: Folic acid 400-800mcg/day BEFORE conception and through first trimester (prevents neural tube defects). Iron, calcium and iodine needs increase. Avoid: raw fish/meat, unpasteurised dairy, high-mercury fish, alcohol, excess vitamin A",
      "BREASTFEEDING: Caloric needs increase by 500 calories/day. Continue folic acid and prenatal vitamins. Caffeine in moderation (<300mg/day). Most medications require review",
      "OLDER ADULTS: Reduced caloric needs but increased protein, calcium (1200mg/day), vitamin D (800-1000IU/day), vitamin B12 needs. Decreased appetite is common — screen for malnutrition",
      "EATING DISORDERS: Anorexia nervosa, bulimia nervosa, binge eating disorder — require specialist treatment. Screen using SCOFF questionnaire",
    ],
  },
  {
    title: "Physical Activity and Exercise",
    icon: "💪",
    color: "blue",
    content: [
      "AEROBIC EXERCISE recommendations (Adults): 150-300 minutes/week moderate intensity OR 75-150 minutes/week vigorous intensity OR equivalent combination",
      "MUSCLE STRENGTHENING: At least 2 days/week involving all major muscle groups",
      "Older adults 65+: Same aerobic recommendations plus balance training 3+ days/week (fall prevention) and flexibility exercises",
      "Children/Adolescents: 60 minutes/day moderate-to-vigorous activity, including muscle and bone strengthening 3 days/week",
      "MODERATE intensity: Can talk but not sing — brisk walking, light cycling, swimming, dancing (≈3-6 METs)",
      "VIGOROUS intensity: Cannot speak in full sentences — running, fast cycling, vigorous swimming (>6 METs)",
      "SEDENTARY BEHAVIOUR: Any waking behaviour in sitting/reclining position. Independently associated with CVD, diabetes and mortality even in otherwise active people. Break up sitting every 30 minutes",
      "BENEFITS of regular exercise: Reduces CVD risk 35%, type 2 diabetes 58%, certain cancers 20-50%, depression 30%, dementia 30%, all-cause mortality 30%",
      "CONTRAINDICATIONS: Unstable angina, uncontrolled hypertension (>180/110), uncontrolled arrhythmia, severe aortic stenosis, decompensated heart failure — clear these before recommending vigorous exercise",
      "PRE-EXERCISE SCREENING: Sedentary adults starting vigorous exercise should be screened for cardiovascular risk first — PAR-Q+ (Physical Activity Readiness Questionnaire)",
    ],
  },
  {
    title: "Alcohol Use — Assessment and Counselling",
    icon: "🍺",
    color: "orange",
    content: [
      "STANDARD DRINK (Australia): 10g pure alcohol. Standard drink (USA): 14g pure alcohol",
      "LOW-RISK drinking guidelines (Australia, NHMRC 2020): No more than 4 standard drinks on any ONE day, no more than 10 standard drinks per WEEK. Healthiest choice = not drinking",
      "HAZARDOUS DRINKING: Drinking pattern that increases risk of harm — above low-risk guidelines but not yet dependent",
      "HARMFUL DRINKING: Drinking causing actual physical or psychological harm",
      "ALCOHOL USE DISORDER (AUD): Diagnosed using DSM-5 criteria — 11 criteria, mild=2-3, moderate=4-5, severe=6+",
      "CAGE QUESTIONNAIRE: Cut down, Annoyed, Guilty, Eye-opener — 2+ positive responses = likely AUD",
      "AUDIT (Alcohol Use Disorders Identification Test): 10-question validated screen — more comprehensive than CAGE",
      "ALCOHOL WITHDRAWAL: Timeline — tremors start 6-24 hours, peaks 24-72 hours. SEIZURES: 24-48 hours. DELIRIUM TREMENS (DTs): 48-96 hours — confusion, hallucinations, autonomic instability. FATAL without treatment",
      "CIWA-Ar scale (Clinical Institute Withdrawal Assessment for Alcohol): Monitors withdrawal severity — used to guide benzodiazepine dosing. Score >8-10 requires pharmacological treatment",
      "WERNICKE'S ENCEPHALOPATHY: Thiamine deficiency in chronic alcohol use — confusion, ataxia, ophthalmoplegia. Give thiamine BEFORE glucose in alcohol-related presentations",
      "NCLEX tip: Give thiamine BEFORE glucose to prevent precipitating Wernicke's encephalopathy in malnourished alcohol-dependent patients",
    ],
  },
  {
    title: "Weight Management",
    icon: "⚖️",
    color: "purple",
    content: [
      "Obesity (BMI ≥30) is associated with: type 2 diabetes, CVD, hypertension, dyslipidaemia, sleep apnoea, osteoarthritis, GORD, certain cancers, depression, reduced life expectancy",
      "5-10% weight loss produces CLINICALLY SIGNIFICANT improvements in BP, lipids, blood glucose, sleep apnoea and joint pain",
      "TREATMENT HIERARCHY: Lifestyle modification (diet + exercise) → Pharmacotherapy → Bariatric surgery",
      "LIFESTYLE INTERVENTIONS: Caloric deficit 500-1000 calories/day, Mediterranean or DASH diet, 150-300 minutes/week moderate exercise, behavioural strategies (food diary, goal setting, cognitive restructuring)",
      "PHARMACOTHERAPY: Approved for BMI ≥30 OR ≥27 with comorbidities. Options include: orlistat (fat malabsorption), phentermine, GLP-1 agonists (semaglutide/liraglutide — most effective), naltrexone-bupropion",
      "GLP-1 AGONISTS (semaglutide/Ozempic/Wegovy): New class showing 15-20% weight loss in trials. Also used for diabetes management and cardiovascular risk reduction",
      "BARIATRIC SURGERY: For BMI ≥40 OR ≥35 with serious comorbidities, when other methods have failed. Options: Roux-en-Y gastric bypass, sleeve gastrectomy. Requires lifelong follow-up and nutritional supplementation",
      "BODY IMAGE and STIGMA: Weight stigma is harmful and pervasive in healthcare. Avoid judgmental language — use person-first language ('person with obesity' not 'obese person')",
      "NCLEX tip: 5-10% weight loss is the achievable, clinically significant target — not ideal body weight. Small losses produce big health improvements",
    ],
  },
  {
    title: "Stress Management",
    icon: "🧘",
    color: "blue",
    content: [
      "Chronic stress is a significant health risk — associated with CVD, hypertension, immune suppression, depression, anxiety, substance use and poor health behaviours",
      "PHYSIOLOGICAL stress response: HPA axis activation → cortisol release → increased blood glucose, BP, HR, immune suppression. Chronic activation = allostatic load",
      "EVIDENCE-BASED stress management strategies:",
      "MINDFULNESS-BASED STRESS REDUCTION (MBSR): 8-week programme. Strong evidence for anxiety, depression, pain, immune function",
      "PROGRESSIVE MUSCLE RELAXATION (PMR): Systematic tensing and releasing of muscle groups. Reduces anxiety, pain, insomnia",
      "DEEP BREATHING/DIAPHRAGMATIC BREATHING: Activates parasympathetic nervous system. 4-7-8 breathing technique",
      "COGNITIVE BEHAVIOURAL THERAPY (CBT): Gold standard for anxiety, depression and stress-related disorders",
      "PHYSICAL EXERCISE: Strong evidence for stress reduction, depression and anxiety — equivalent to medication for mild-moderate depression",
      "SOCIAL SUPPORT: Strong protective factor — isolated individuals have significantly higher morbidity and mortality",
      "SLEEP HYGIENE: 7-9 hours/night for adults. Poor sleep amplifies stress response and impairs coping",
      "Nursing role: Assess stressors, teach relaxation techniques, encourage physical activity, facilitate social connections, refer for mental health support when needed",
    ],
  },
  {
    title: "Sleep Health",
    icon: "😴",
    color: "purple",
    content: [
      "Sleep requirements: Neonates 14-17 hours, Infants 12-15 hours, Toddlers 11-14 hours, School age 9-11 hours, Teenagers 8-10 hours, Adults 7-9 hours, Older adults 7-8 hours",
      "Insufficient sleep is associated with: obesity, type 2 diabetes, CVD, hypertension, depression, impaired immunity, cognitive decline, accidents",
      "SLEEP HYGIENE education: Consistent sleep/wake times, cool dark quiet bedroom, avoid screens 1 hour before bed, avoid caffeine after 2pm, avoid alcohol (disrupts REM sleep), regular exercise (not late evening), relaxation routine before bed",
      "INSOMNIA: Difficulty initiating or maintaining sleep. FIRST-LINE treatment: CBT for Insomnia (CBT-I) — more effective and durable than medication long-term",
      "SLEEP MEDICATIONS: Short-term only. Benzodiazepines and Z-drugs (zolpidem) are POTENTIALLY ADDICTIVE and impair daytime function. Avoid in elderly (fall risk — Beers Criteria)",
      "OBSTRUCTIVE SLEEP APNOEA (OSA): Collapse of upper airway during sleep. Symptoms: loud snoring, apnoeic episodes, excessive daytime sleepiness, morning headache. Diagnosis: polysomnography (sleep study)",
      "OSA treatment: CPAP (continuous positive airway pressure) — gold standard. Weight loss for obese patients. Positional therapy (lateral sleep) for mild cases",
      "RESTLESS LEGS SYNDROME (RLS): Urge to move legs at rest/night. Associated with iron deficiency, pregnancy, CKD, peripheral neuropathy. Treatment: iron supplementation (if deficient), dopamine agonists",
      "Nursing: Ask about sleep at every visit — sleep disorders are vastly underdiagnosed. Simple sleep hygiene education can significantly improve quality of life",
    ],
  },
  {
    title: "Sexual Health and Safe Sex",
    icon: "🩺",
    color: "green",
    content: [
      "Sexual health is a component of overall health — nurses should assess sexual health in a non-judgmental, inclusive manner",
      "CONTRACEPTION counselling: Discuss all methods, efficacy rates, reversibility, non-contraceptive benefits and how to use correctly",
      "Most effective contraceptives: IUD and implant (>99% effective — set and forget). Less user-dependent = more effective in typical use",
      "BARRIER METHODS: Condoms are the ONLY contraceptive method that also protects against STIs",
      "EMERGENCY CONTRACEPTION: Levonorgestrel (Plan B) — most effective within 72 hours, up to 120 hours. Copper IUD — most effective emergency contraception, up to 5 days",
      "PREP (Pre-Exposure Prophylaxis for HIV): Daily tenofovir/emtricitabine for HIV-negative high-risk individuals — 99% effective when taken correctly. Offered to MSM, serodiscordant couples, PWID",
      "PELVIC INFLAMMATORY DISEASE (PID): Untreated chlamydia/gonorrhoea — risk of infertility, ectopic pregnancy, chronic pelvic pain. Treat all sexual partners",
      "HPV prevention: HPV vaccination (most effective), consistent condom use (partially protective), limiting sexual partners, regular Pap smears",
      "LGBTQ+ inclusive care: Use inclusive language, ask preferred pronouns, screen based on anatomy not gender identity, create a welcoming environment",
      "NCLEX tip: Sexual health assessment should be routine — normalise it by asking all patients. Condoms prevent STIs — no other contraceptive method does",
    ],
  },
];

const mnemonics = [
  {
    title: "Stages of Change",
    acronym: "PCPAMR",
    breakdown: ["Precontemplation", "Contemplation", "Preparation", "Action", "Maintenance", "Relapse"],
    memory: "People Can Possibly Act More Reliably — match nursing intervention to the patient's current stage!",
    color: "purple",
  },
  {
    title: "5 A's for Behaviour Counselling",
    acronym: "5A",
    breakdown: ["Ask", "Advise", "Assess (readiness)", "Assist", "Arrange (follow-up)"],
    memory: "5 A's — Ask about behaviour, Advise to change, Assess readiness, Assist with plan, Arrange follow-up. Use for smoking, alcohol, diet, exercise!",
    color: "blue",
  },
  {
    title: "Alcohol Withdrawal Timeline",
    acronym: "TSdDT",
    breakdown: ["Tremors (6-24hrs)", "Seizures (24-48hrs)", "Delirium Tremens (48-96hrs)"],
    memory: "The Shaking Drunk Takes time — Tremors first, Seizures second, Delirium Tremens last and most dangerous!",
    color: "orange",
  },
  {
    title: "Wernicke's Encephalopathy Triad",
    acronym: "CAO",
    breakdown: ["Confusion", "Ataxia", "Ophthalmoplegia"],
    memory: "CAO — Confusion, Ataxia, Ophthalmoplegia. Give THIAMINE before glucose in any malnourished alcohol-dependent patient!",
    color: "red",
  },
];

const alerts = [
  { text: "THIAMINE before GLUCOSE in alcohol-dependent patients — giving glucose first can precipitate Wernicke's encephalopathy and cause permanent brain damage!", severity: "high" },
  { text: "Alcohol withdrawal DELIRIUM TREMENS (48-96 hours) can be FATAL without treatment — benzodiazepines titrated by CIWA-Ar score are essential!", severity: "high" },
  { text: "Varenicline (Champix): Monitor for mood changes, depression and suicidal ideation — report to physician if these develop!", severity: "high" },
  { text: "Bupropion (Zyban) for smoking cessation is CONTRAINDICATED in seizure disorders and eating disorders — screen before prescribing!", severity: "high" },
  { text: "MATCH intervention to STAGE OF CHANGE — giving action-oriented advice to someone in precontemplation is ineffective and damages rapport!", severity: "medium" },
  { text: "Warfarin patients: Do NOT eliminate Vitamin K foods — maintain CONSISTENCY. Sudden changes in green vegetable intake destabilise INR!", severity: "medium" },
  { text: "Heart failure: Report weight gain >1kg/day or >2kg in 48 hours — this indicates fluid retention requiring intervention!", severity: "medium" },
  { text: "Exercise absolute contraindications include unstable angina, uncontrolled BP >180/110 — always screen before recommending vigorous exercise!", severity: "medium" },
  { text: "Benzodiazepines and Z-drugs (zolpidem) for sleep are ON the Beers Criteria — avoid in elderly patients due to fall and fracture risk!", severity: "medium" },
  { text: "OSA: CPAP compliance is the most common problem — educate patients that even 4 hours/night provides significant benefit!", severity: "low" },
  { text: "NRT (nicotine patches) is SAFE in stable cardiovascular disease — do not withhold NRT from cardiac patients who smoke!", severity: "low" },
  { text: "CBT-I (cognitive behavioural therapy for insomnia) is MORE EFFECTIVE than sleeping pills long-term — this is first-line treatment!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A nurse is using the Transtheoretical Model (Stages of Change) to assess a patient's readiness to quit smoking. The patient states 'I know smoking is bad for me but I'm not planning to quit anytime soon — I've smoked for 30 years and I actually enjoy it.' Which stage is this patient in?",
    options: [
      "Contemplation — the patient is aware of the problem",
      "Precontemplation — the patient has no intention to change in the foreseeable future",
      "Preparation — the patient is thinking about quitting",
      "Maintenance — the patient is managing their smoking behaviour",
    ],
    correct: 1,
    explanation: "This patient is in PRECONTEMPLATION — they have NO intention to change in the foreseeable future and may be minimising the problem ('I actually enjoy it'). They are aware smoking is harmful but are not motivated to quit. The appropriate nursing approach for precontemplation is to: raise awareness non-judgmentally, provide information without pressure, express concern while respecting autonomy, plant seeds for future change and keep the door open. Giving action-oriented cessation advice at this stage is ineffective and damages rapport.",
    wrongExplanations: [
      "WRONG: Contemplation means the patient is seriously thinking about changing in the NEXT 6 MONTHS but is ambivalent. This patient is NOT planning to quit 'anytime soon' — that is precontemplation, not contemplation.",
      "",
      "WRONG: Preparation means the patient intends to take action within the NEXT 30 DAYS and may have already taken small steps. This patient has no such intention.",
      "WRONG: Maintenance means the patient has already made and sustained a behaviour change for 6+ months. This patient is actively smoking and not attempting to change.",
    ],
  },
  {
    level: "Knowledge",
    question: "A patient who drinks alcohol heavily is brought to the emergency department confused and ataxic. The emergency physician orders an IV glucose infusion. The nurse notes the patient appears malnourished and chronic alcohol use is documented. What should the nurse do BEFORE administering the glucose?",
    options: [
      "Administer the glucose immediately — hypoglycaemia is the priority concern",
      "Administer thiamine (vitamin B1) IV before starting the glucose infusion",
      "Check a blood alcohol level before giving any IV fluids",
      "Administer naloxone first to rule out opioid involvement",
    ],
    correct: 1,
    explanation: "THIAMINE (Vitamin B1) must be given BEFORE glucose in any malnourished or alcohol-dependent patient. This is because chronic alcohol use depletes thiamine stores. Giving glucose to a thiamine-deficient patient causes the remaining thiamine to be consumed by glucose metabolism — precipitating or worsening WERNICKE'S ENCEPHALOPATHY (confusion, ataxia, ophthalmoplegia). If Wernicke's progresses to Korsakoff's syndrome (anterograde amnesia, confabulation), the damage is PERMANENT. The symptoms described (confusion + ataxia) are classic Wernicke's triad. Thiamine IV first — then glucose. This is a critical nursing safety priority.",
    wrongExplanations: [
      "WRONG: While hypoglycaemia is a concern, giving glucose first to a thiamine-depleted patient can cause or worsen Wernicke's encephalopathy — potentially causing permanent brain damage. Thiamine first is the safety priority.",
      "",
      "WRONG: Blood alcohol level is important clinical information but not the immediate priority when the patient shows signs of Wernicke's. Thiamine must be given before any glucose.",
      "WRONG: Naloxone reverses opioid toxicity — there is no indication for opioid overdose in this scenario. Thiamine before glucose is the immediate priority.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is counselling a 45-year-old man with hypertension and a BMI of 33 about dietary changes. He states he already eats 'pretty healthy' and only uses salt occasionally. His 24-hour dietary recall shows daily fast food, processed meats and limited fruits and vegetables. What is the MOST effective nursing approach?",
    options: [
      "Tell him directly that his diet is unhealthy and he needs to make significant changes immediately",
      "Accept his self-assessment — patients know their own diets best",
      "Use motivational interviewing — explore his perception, develop discrepancy between his health goals and current behaviour, and collaboratively identify small achievable changes",
      "Provide a strict meal plan and tell him to follow it exactly — structure improves compliance",
    ],
    correct: 2,
    explanation: "MOTIVATIONAL INTERVIEWING (MI) is the evidence-based approach for lifestyle behaviour change. This patient shows a significant discrepancy between his self-perception ('pretty healthy') and his actual diet — this discrepancy is the therapeutic lever. MI techniques: reflect his health goals, explore what healthy means to him, gently point out the gap between his goals and current behaviours ('You mentioned wanting to lower your BP — how do you think the current diet might be affecting that?'), collaborate on small achievable steps rather than imposing change. Direct confrontation (Option A) increases defensiveness and resistance. Accepting inaccurate self-assessment (Option B) is a missed opportunity. Imposing a strict meal plan (Option D) without buy-in rarely leads to lasting change.",
    wrongExplanations: [
      "WRONG: Direct confrontation triggers psychological reactance — patients become defensive and less likely to change. MI specifically avoids this approach.",
      "WRONG: Accepting an inaccurate self-assessment while the patient has hypertension and obesity is a missed health promotion opportunity. The nurse has a responsibility to provide accurate health information.",
      "",
      "WRONG: Imposing a rigid meal plan without the patient's input and buy-in has low adherence. Collaborative, patient-centred goal setting produces significantly better long-term outcomes.",
    ],
  },
  {
    level: "Application",
    question: "A 62-year-old woman with heart failure (EF 30%) and hypertension is being discharged home. Which dietary instruction is the MOST important for the nurse to emphasise?",
    options: [
      "Follow a high-protein diet to build cardiac muscle strength",
      "Weigh yourself daily in the morning before eating and after urinating — report weight gain >1kg/day or >2kg in 48 hours immediately",
      "Drink at least 8 glasses of water per day to stay hydrated and support kidney function",
      "Increase potassium intake with bananas and oranges to counteract diuretics",
    ],
    correct: 1,
    explanation: "Daily weight monitoring is the MOST important heart failure self-management strategy. Weight gain represents fluid retention — a sign of worsening heart failure that can prevent hospitalisation if caught early. The protocol: weigh every morning at the same time, before eating, after urinating, wearing similar clothing. Report weight gain >1kg/day (2.2 lbs) or >2kg in 48 hours (4.4 lbs) to the healthcare provider — this indicates fluid retention requiring medication adjustment. Additional instructions: sodium restriction <2000mg/day, fluid restriction if ordered (1.5-2L/day), recognise symptoms (dyspnoea, oedema, orthopnoea). Drinking 8 glasses of water may actually WORSEN heart failure by causing fluid overload. Self-directed potassium supplementation without medical supervision is dangerous.",
    wrongExplanations: [
      "WRONG: High-protein diet is not a standard heart failure recommendation and could worsen renal function. Sodium restriction is the key dietary priority.",
      "",
      "WRONG: 8 glasses of water per day may cause dangerous fluid overload in heart failure patients. Most heart failure patients have fluid restrictions (1.5-2L/day) — encouraging free fluid intake is harmful.",
      "WRONG: Self-directed potassium supplementation without checking potassium levels is dangerous — especially in patients on ACE inhibitors or potassium-sparing diuretics where hyperkalaemia is a real risk.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is providing smoking cessation counselling to a 55-year-old man with stable angina who smokes 20 cigarettes per day. He is interested in using nicotine replacement therapy (NRT) but is concerned it will be unsafe given his heart condition. What is the MOST accurate response?",
    options: [
      "NRT is contraindicated in cardiovascular disease — recommend bupropion instead",
      "NRT is safe for patients with stable cardiovascular disease — the cardiovascular risk of continuing to smoke far outweighs any risk from NRT",
      "NRT patches are contraindicated but nicotine gum is safe for cardiac patients",
      "No pharmacotherapy is safe for this patient — recommend cold turkey cessation only",
    ],
    correct: 1,
    explanation: "NRT is SAFE in stable cardiovascular disease — this is one of the most important and commonly misunderstood facts in smoking cessation. Continuing to smoke poses FAR greater cardiovascular risk than NRT. Smoking causes: coronary vasospasm, platelet aggregation, endothelial damage, CO-induced oxygen deprivation and arrhythmias. NRT delivers nicotine without the thousands of toxic combustion products. Clinical studies have confirmed NRT safety in patients with recent MI and unstable angina (though extra caution is used in the acute phase). The correct counselling: address his concern empathetically, correct the misconception, and support his readiness to quit with the most effective available treatment.",
    wrongExplanations: [
      "WRONG: NRT is NOT contraindicated in stable CVD. This misconception prevents many cardiac patients from receiving cessation support. Bupropion is an option but not because NRT is unsafe.",
      "",
      "WRONG: All forms of NRT (patch, gum, lozenge, inhaler) are safe in stable CVD — there is no distinction between delivery forms for cardiac safety.",
      "WRONG: Cold turkey cessation without pharmacotherapy has the lowest success rate (~5%). Withholding evidence-based pharmacotherapy from a willing patient is not appropriate care.",
    ],
  },
  {
    level: "Advanced",
    question: "A 38-year-old woman presents asking about weight loss. Her BMI is 37 kg/m² with type 2 diabetes (HbA1c 8.9%), hypertension and obstructive sleep apnoea. She has attempted multiple diets over 10 years with maximum sustained weight loss of 8kg before regaining. She asks about 'those new injection medications for weight loss' (referring to GLP-1 agonists). What is the nurse's MOST comprehensive and accurate response?",
    options: [
      "GLP-1 agonists are only for diabetes — they are not approved for weight loss",
      "Lifestyle modification should always be tried for at least 2 years before considering any medication",
      "GLP-1 agonists (semaglutide/liraglutide) are approved for obesity with comorbidities, can achieve 15-20% weight loss, improve glycaemic control and cardiovascular outcomes — she meets criteria and this is a legitimate evidence-based option to discuss with her physician",
      "Bariatric surgery is the only effective option given her history of repeated diet failures",
    ],
    correct: 2,
    explanation: "GLP-1 receptor agonists (semaglutide/Wegovy, liraglutide/Saxenda) are FDA/TGA-approved for CHRONIC WEIGHT MANAGEMENT in adults with BMI ≥30 OR ≥27 with at least one weight-related comorbidity. This patient has BMI 37 + type 2 diabetes + hypertension + OSA — she clearly meets criteria. Clinical trial data shows 15-20% body weight reduction with semaglutide — significantly more than previous medications. Additional benefits: HbA1c reduction, cardiovascular risk reduction (SUSTAIN-6, LEADER trials), potential improvement in OSA. She has tried lifestyle modification for 10 years — this is not a first attempt. The nurse should: validate her interest, provide accurate information, explain she likely meets criteria, and facilitate a physician discussion. GLP-1 agonists ARE approved for obesity (not just diabetes). The 2-year lifestyle modification requirement (Option B) is not a current guideline for someone with this level of obesity and comorbidities.",
    wrongExplanations: [
      "WRONG: GLP-1 agonists have DUAL approval — for type 2 diabetes (Ozempic/Victoza) AND for chronic weight management in obesity (Wegovy/Saxenda). Both indications are relevant here.",
      "WRONG: There is no guideline requirement for 2 years of lifestyle modification before pharmacotherapy. This patient has tried lifestyle changes for 10 years. Pharmacotherapy is appropriate and indicated now.",
      "",
      "WRONG: Bariatric surgery is a legitimate escalation option (BMI ≥35 with comorbidities) but it is NOT the only effective option. GLP-1 agonists offer substantial weight loss as a less invasive alternative.",
    ],
  },
  {
    level: "Advanced",
    question: "A 28-year-old man is admitted following his third alcohol-related hospitalisation. He is currently in active alcohol withdrawal (CIWA-Ar score 18). He tells the nurse 'I'm done with all this — I'm going to quit drinking cold turkey when I leave and never touch alcohol again.' What is the nurse's MOST appropriate response to his plan?",
    options: [
      "Support his motivation enthusiastically — his commitment to sobriety is the most important factor in recovery",
      "Acknowledge his motivation, explain that abrupt alcohol cessation without medical supervision can be life-threatening (seizures, DTs), and discuss medically supervised detox and ongoing treatment options",
      "Tell him cold turkey is the most effective method — medication-assisted treatment creates dependency",
      "Refer him directly to Alcoholics Anonymous — peer support is the gold standard for alcohol use disorder",
    ],
    correct: 1,
    explanation: "This question tests TWO critical knowledge areas: alcohol withdrawal severity AND therapeutic communication. His motivation is excellent — but his PLAN is MEDICALLY DANGEROUS. Abrupt cessation after heavy chronic alcohol use causes withdrawal seizures (24-48 hours) and potentially fatal delirium tremens (48-96 hours). A CIWA-Ar of 18 indicates moderate-severe active withdrawal requiring benzodiazepine treatment NOW. The nurse must: acknowledge and affirm his motivation (maintain therapeutic alliance), correct the dangerous misconception about cold turkey being safe, explain the medical risks of unsupervised cessation, and discuss medically supervised detoxification + evidence-based ongoing treatment (medication-assisted treatment with naltrexone or acamprosate, counselling, peer support). Enthusiasm without safety education (Option A) could contribute to his death. Cold turkey is NOT recommended and MAT does NOT create addiction (Option C). AA alone is insufficient for active withdrawal management.",
    wrongExplanations: [
      "WRONG: While his motivation is excellent, enthusiastically supporting a medically dangerous plan without education is a nursing safety failure. He needs accurate information about withdrawal risks.",
      "",
      "WRONG: Cold turkey cessation from heavy chronic alcohol use is MEDICALLY DANGEROUS — withdrawal seizures and delirium tremens can be fatal. Medication-assisted treatment does not create addiction in the way alcohol does.",
      "WRONG: AA and peer support are valuable components of recovery — but they do not address acute withdrawal management or the immediate medical safety concern. The immediate priority is supervised detoxification.",
    ],
  },
  {
    level: "Advanced",
    question: "A community health nurse is conducting home visits in a low-income neighbourhood. A 52-year-old woman has been diagnosed with hypertension and type 2 diabetes. The physician has advised a Mediterranean diet and 150 minutes of weekly exercise. During the home visit, the nurse observes: no car, nearest grocery store 8km away (bus service unreliable), limited cooking facilities (single burner, no oven), financial stress (food budget $50/week for family of 4) and the patient works two jobs with irregular hours. The nurse advises the patient to 'just follow the Mediterranean diet and take 30-minute walks.' What is WRONG with this approach?",
    options: [
      "Nothing — the nurse has correctly communicated the evidence-based recommendations",
      "The nurse should have added a third recommendation about stress management",
      "The advice fails to account for the social determinants of health — the patient faces structural barriers that make standard recommendations practically impossible. The nurse must address these barriers before or alongside medical advice",
      "The nurse should have referred the patient to a dietitian before giving any nutritional advice",
    ],
    correct: 2,
    explanation: "This question tests understanding of SOCIAL DETERMINANTS OF HEALTH and HEALTH EQUITY. The advice is clinically correct but CONTEXTUALLY INAPPROPRIATE and practically impossible for this patient. Social determinants: food insecurity (no reliable access to fresh produce), food desert (8km to nearest store, no transport), financial barriers ($50/week = severe food budget constraint), structural barriers (two jobs, irregular hours, limited cooking facilities). Giving standard dietary advice without addressing these barriers is ineffective and potentially harmful — it may increase guilt and shame when the patient cannot comply despite wanting to. The nurse must: assess barriers systematically, connect to community resources (food banks, community gardens, home delivery programmes), suggest culturally appropriate affordable alternatives, advocate for structural change, and collaborate with social work. Walking 30 minutes may also be unsafe (no footpaths, high crime area) — assess the walking environment.",
    wrongExplanations: [
      "WRONG: The nurse has NOT correctly communicated recommendations — she has ignored the social determinants that make these recommendations unachievable for this patient. Clinically correct advice given without context is not effective nursing practice.",
      "WRONG: While stress management is relevant, this option misses the fundamental problem — the entire approach ignores structural barriers to health. Adding a third recommendation to an already contextually inappropriate plan does not address the core issue.",
      "",
      "WRONG: Dietitian referral may be helpful — but it does not address the fundamental problem that this patient cannot access healthy food regardless of who advises her on diet. Social determinants must be assessed and addressed.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a 45-year-old man admitted with an exacerbation of COPD. He has smoked 40 cigarettes per day for 25 years and has been told by multiple doctors over 10 years to quit. He becomes angry when the nurse brings up smoking cessation: 'Every doctor tells me to quit — I know I have to quit. I've tried 6 times and always fail. There's no point talking about it.' What is the nurse's MOST therapeutic response?",
    options: [
      "Agree with the patient and avoid the topic — repeated discussion without success is demoralising",
      "Explain that he has clearly not tried hard enough and needs to commit more seriously this time",
      "Acknowledge his frustration and past efforts, reframe previous attempts as valuable learning experiences, explore what was most difficult and offer current most effective options (varenicline + behavioural support)",
      "Document 'patient refuses smoking cessation advice' and move on",
    ],
    correct: 2,
    explanation: "This patient is showing signs of DEMORALISATION from repeated relapse — a normal part of addiction recovery. The therapeutic response uses MOTIVATIONAL INTERVIEWING principles: EMPATHY ('Six attempts shows real commitment — quitting is genuinely hard'), REFRAME relapse ('Each attempt teaches something — you've never failed, you've always been working on it'), EXPLORE barriers ('What was hardest each time?'), OFFER HOPE and NEW OPTIONS ('Treatments have improved — have you tried varenicline? It's significantly more effective than willpower alone'). Avoiding the topic (Option A) abandons the nurse's professional responsibility — every hospitalisation is a TEACHABLE MOMENT and motivation is often highest during illness. Option B uses judgmental language ('not tried hard enough') that destroys therapeutic rapport. Documenting refusal without therapeutic engagement (Option D) is a missed opportunity — he did NOT refuse, he expressed frustration and hopelessness.",
    wrongExplanations: [
      "WRONG: Avoiding the topic during a COPD hospitalisation is a significant missed opportunity. Hospitalisation for smoking-related illness is one of the highest-motivation moments for cessation. The nurse must engage therapeutically.",
      "WRONG: Telling a patient they 'haven't tried hard enough' is judgmental, factually incorrect (nicotine dependence is a neurobiological condition, not a willpower deficiency) and destroys therapeutic rapport. This approach will close the conversation.",
      "",
      "WRONG: This patient expressed frustration — not refusal. Documenting refusal without therapeutic engagement is inaccurate documentation and abandons the nursing responsibility to provide cessation support during a teachable moment.",
    ],
  },
  {
    level: "Advanced",
    question: "A 70-year-old retired woman presents with her daughter who is concerned about her mother's declining physical and cognitive function. The patient has been increasingly sedentary since retirement, sleeps 10 hours but still feels tired, has lost 4kg in 3 months without trying and rarely leaves the house. She has no known medical conditions and takes no medications. She scores 24/30 on the MMSE. What is the nurse's MOST comprehensive assessment priority?",
    options: [
      "Screen for depression — the symptom cluster (withdrawal, weight loss, fatigue, hypersomnia) is consistent with late-life depression",
      "Refer for cognitive assessment — MMSE score of 24 indicates mild cognitive impairment",
      "Recommend increased physical activity — sedentary behaviour in older adults causes all of these symptoms",
      "Reassure the family — these changes are normal aging processes in a 70-year-old",
    ],
    correct: 0,
    explanation: "This patient's symptom cluster — social withdrawal, weight loss, excessive sleep but unrefreshing, fatigue, loss of interest in leaving the house — is a CLASSIC PRESENTATION OF LATE-LIFE DEPRESSION. Depression in older adults is frequently UNDERDIAGNOSED because: it presents atypically (fatigue and somatic complaints rather than sadness), it is mistakenly attributed to 'normal aging', cognitive symptoms overlap with dementia. Priority: Screen with GDS (Geriatric Depression Scale) or PHQ-9. MMSE of 24 is in the borderline/mild impairment range — BUT depression causes pseudodementia (reversible cognitive impairment that resolves with depression treatment). Weight loss + fatigue in an older adult also requires ruling out organic causes (malignancy, thyroid disease, anaemia) — physical examination and blood work are essential. These symptoms are NOT normal aging.",
    wrongExplanations: [
      "",
      "WRONG: MMSE 24 can represent mild cognitive impairment — but depression causes reversible pseudodementia. Treating depression may fully restore cognitive function. Depression screening takes priority before assuming organic cognitive decline.",
      "WRONG: Exercise is beneficial but prescribing exercise without addressing the underlying cause (likely depression) is addressing the symptom not the disease. A depressed patient has impaired motivation — treating depression may restore activity naturally.",
      "WRONG: Social withdrawal, 4kg unintentional weight loss, hypersomnia and fatigue are NOT normal aging. Normal aging involves gradual changes — not this cluster of symptoms over 3 months. This warrants immediate investigation.",
    ],
  },
];

const clinicalPearls = [
  "Thiamine before glucose — this rule saves lives and brains. Any malnourished patient, any alcohol-dependent patient, anyone with altered consciousness of unknown cause: thiamine IV before giving glucose. Wernicke's encephalopathy that progresses to Korsakoff's syndrome is irreversible.",
  "Relapse is not failure — it is a data point. When a patient relapses in smoking, alcohol or any health behaviour, the therapeutic response is curiosity not disappointment: 'What happened? What can we learn? What was different this time?' This keeps the door open for the next attempt.",
  "Social determinants of health are the nurse's clinical responsibility — not just the social worker's. When you give a patient dietary advice without assessing whether they can afford or access healthy food, you are setting them up to fail and potentially increasing their shame. Always ask about food security, transport, housing and financial barriers.",
  "Every hospitalisation for a smoking-related condition is a teachable moment of the highest order. Motivation is highest when patients are confronting the consequences of their behaviour. Do not avoid the smoking conversation in the coronary care unit or the respiratory ward — these are the most important places to have it.",
  "Depression in the elderly mimics dementia (pseudodementia) — and treating the depression often completely restores cognitive function. Before accepting a dementia diagnosis, ensure depression has been thoroughly excluded and treated.",
  "The most common reason patients do not follow lifestyle advice is not lack of motivation or knowledge — it is that the advice is incompatible with the reality of their lives. Assess barriers systematically. Advice that a patient cannot follow is not advice — it is performance.",
  "Exercise is equivalent to antidepressants for mild-to-moderate depression — and has no side effects except better physical health. When a patient asks about alternatives to medication for depression, exercise (150+ minutes/week vigorous aerobic) is a legitimate evidence-based first-line option.",
];

export default function LifestyleChoicesPage() {
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
            <h1 className="font-black text-base text-gray-900">🏃 Lifestyle Choices</h1>
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
            <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
              <p className="text-green-700 text-sm leading-relaxed font-medium">
                🏃 Lifestyle choices are tested throughout NCLEX — especially smoking cessation, stages of change and alcohol withdrawal. Master the evidence-based approaches!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most common NCLEX traps on Lifestyle Choices — study these carefully!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Lifestyle Choices!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review stages of change and alcohol withdrawal." :
                        "Keep studying! Focus on thiamine before glucose, stages of change and cessation pharmacotherapy."}
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
