"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Substance Use Disorders",
    icon: "💊",
    color: "blue",
    content: [
      "Substance Use Disorder (SUD) is a chronic, relapsing brain disease characterised by compulsive substance seeking and use despite harmful consequences",
      "SUD is NOT a moral failing or lack of willpower — it involves neurobiological changes in reward, motivation, memory and impulse control circuits",
      "DSM-5 diagnosis: 2+ of 11 criteria in 12 months. Mild=2-3, Moderate=4-5, Severe=6+",
      "DSM-5 criteria include: Taking more than intended, unsuccessful efforts to cut down, time spent obtaining/using/recovering, craving, failure to fulfil obligations, continued use despite interpersonal problems, giving up activities, use in hazardous situations, continued use despite physical/psychological harm, tolerance, withdrawal",
      "TOLERANCE: Need for increasing amounts to achieve the same effect",
      "DEPENDENCE: Physical and/or psychological reliance on a substance — withdrawal occurs with cessation",
      "INTOXICATION: Reversible substance-specific syndrome due to recent ingestion",
      "NCLEX heavily tests: Alcohol withdrawal timeline and management, opioid withdrawal and reversal, CNS depressant withdrawal dangers and medication-assisted treatment",
      "NURSING ATTITUDE: Non-judgmental, therapeutic approach is essential. Shame and stigma are barriers to treatment — nurses must model dignity and respect",
    ],
  },
  {
    title: "Alcohol Use Disorder — Assessment",
    icon: "🍺",
    color: "orange",
    content: [
      "Alcohol is the most commonly used and most clinically dangerous substance in terms of withdrawal severity",
      "CAGE QUESTIONNAIRE: Cut down, Annoyed, Guilty, Eye-opener. Score ≥2 = probable alcohol use disorder. Quick 4-question screen",
      "AUDIT (Alcohol Use Disorders Identification Test): 10-question validated comprehensive screen. Score 8+ = hazardous drinking. More detailed than CAGE",
      "AUDIT-C: 3-question abbreviated version of AUDIT — useful for primary care screening",
      "MAST (Michigan Alcohol Screening Test): 25-question screen for chronic alcohol problems",
      "Signs of alcohol intoxication: Disinhibition, slurred speech, ataxia, impaired coordination, emotional lability, nystagmus, blood alcohol level (BAL) correlates with impairment",
      "BAL thresholds: Legal limit typically 0.05-0.08 g/dL. Respiratory depression risk >0.30 g/dL. Death possible >0.40 g/dL",
      "Chronic alcohol effects: Liver disease (fatty liver → hepatitis → cirrhosis), pancreatitis, peripheral neuropathy, cardiomyopathy, immune suppression, cognitive impairment, thiamine deficiency (Wernicke-Korsakoff syndrome)",
      "FETAL ALCOHOL SPECTRUM DISORDER (FASD): NO safe level of alcohol in pregnancy — leading preventable cause of intellectual disability",
    ],
  },
  {
    title: "Alcohol Withdrawal — Timeline and Management",
    icon: "⚠️",
    color: "red",
    content: [
      "Alcohol withdrawal can be FATAL — one of the few substance withdrawals that is life-threatening (along with benzodiazepines/barbiturates)",
      "MECHANISM: Chronic alcohol use upregulates excitatory (NMDA) receptors and downregulates inhibitory (GABA) receptors. Abrupt cessation = CNS hyperexcitability",
      "WITHDRAWAL TIMELINE:",
      "6-24 HOURS: Minor withdrawal — tremors, diaphoresis, anxiety, tachycardia, hypertension, nausea, vomiting, insomnia",
      "24-48 HOURS: SEIZURES — grand mal seizures. Peak risk. Risk greatest in patients with prior withdrawal seizures",
      "24-72 HOURS: ALCOHOLIC HALLUCINOSIS — visual, auditory or tactile hallucinations WITH intact orientation (patient knows they are hallucinating)",
      "48-96 HOURS: DELIRIUM TREMENS (DTs) — life-threatening. Severe autonomic instability (hyperthermia, hypertension, tachycardia), confusion, disorientation, vivid terrifying hallucinations. Mortality 5-15% untreated",
      "CIWA-Ar (Clinical Institute Withdrawal Assessment for Alcohol — Revised): 10-item validated scale. Monitors withdrawal severity. Score ≥8-10 = pharmacological treatment required",
      "TREATMENT: Benzodiazepines are the GOLD STANDARD — diazepam, lorazepam, chlordiazepoxide (treat/prevent seizures and DTs)",
      "THIAMINE (Vitamin B1) BEFORE glucose: Give thiamine IV/IM BEFORE any glucose to prevent Wernicke's encephalopathy",
      "Supportive care: IV fluids, electrolyte replacement (hypomagnesaemia, hypokalaemia common), quiet environment, frequent monitoring, fall precautions, seizure precautions",
    ],
  },
  {
    title: "Wernicke's Encephalopathy and Korsakoff Syndrome",
    icon: "🧠",
    color: "red",
    content: [
      "WERNICKE'S ENCEPHALOPATHY: Acute, life-threatening neurological emergency caused by THIAMINE (Vitamin B1) DEFICIENCY — common in chronic alcohol use",
      "CLASSIC TRIAD (only 10-15% present with all three): Confusion/altered consciousness, Ataxia (unsteady gait), Ophthalmoplegia (eye movement abnormalities — nystagmus, lateral gaze palsy)",
      "Treatment: IV THIAMINE IMMEDIATELY — 200-500mg IV three times daily. Response to thiamine is diagnostic",
      "CRITICAL RULE: Give thiamine BEFORE glucose in any malnourished or alcohol-dependent patient. Glucose infusion in a thiamine-deficient patient depletes remaining thiamine → precipitates or worsens Wernicke's",
      "KORSAKOFF SYNDROME: Chronic irreversible neuropsychological sequel of untreated or inadequately treated Wernicke's",
      "Korsakoff features: ANTEROGRADE AMNESIA (inability to form new memories), RETROGRADE AMNESIA (loss of old memories), CONFABULATION (unconscious fabrication to fill memory gaps — patient believes their confabulations)",
      "Confabulation: Patient fills memory gaps with plausible but false information — NOT deliberate lying. They genuinely believe what they are saying",
      "Korsakoff syndrome is largely IRREVERSIBLE — prevention through early thiamine treatment is essential",
      "NCLEX tip: Confabulation = unconscious fabrication to fill memory gaps. Nursing response: do NOT argue with confabulations — they are not conscious lies. Provide calm reorientation",
    ],
  },
  {
    title: "Opioid Use Disorder",
    icon: "💉",
    color: "purple",
    content: [
      "Opioids include: heroin (illicit), morphine, oxycodone, hydrocodone, fentanyl, tramadol, methadone, buprenorphine",
      "MECHANISM: Bind to mu, kappa and delta opioid receptors — produce analgesia, euphoria, sedation, respiratory depression",
      "OPIOID INTOXICATION: Euphoria, drowsiness, slurred speech, pinpoint pupils (MIOSIS), decreased RR, decreased BP, constipation, decreased LOC",
      "OPIOID OVERDOSE TRIAD: Pinpoint pupils (miosis), respiratory depression (RR <12 or absent), altered consciousness — LIFE-THREATENING EMERGENCY",
      "OVERDOSE TREATMENT: NALOXONE (Narcan) — opioid receptor antagonist. IM/IV/IN. Works within 2-5 minutes. Duration 30-90 minutes — may need repeated doses as opioid outlasts naloxone. Monitor for re-narcotisation",
      "OPIOID WITHDRAWAL: Uncomfortable but NOT life-threatening (opposite of alcohol withdrawal). Onset depends on opioid half-life",
      "Short-acting opioids (heroin, morphine): Withdrawal begins 8-24 hours after last dose, peaks 36-72 hours, resolves 5-7 days",
      "Long-acting opioids (methadone): Withdrawal begins 36-48 hours, peaks 72-96 hours, may last 2-3 weeks",
      "OPIOID WITHDRAWAL SYMPTOMS (COWS — Clinical Opiate Withdrawal Scale): Anxiety, restlessness, lacrimation, rhinorrhoea, yawning, piloerection (goosebumps), diaphoresis, mydriasis (dilated pupils — OPPOSITE of intoxication), muscle aches, GI symptoms (nausea, vomiting, diarrhoea), elevated vital signs",
      "Memory: Opioid intoxication = pupils CONSTRICT (miosis). Opioid withdrawal = pupils DILATE (mydriasis)",
    ],
  },
  {
    title: "Medication-Assisted Treatment (MAT) for Opioid Use Disorder",
    icon: "💊",
    color: "green",
    content: [
      "MAT combines FDA/TGA-approved medications with counselling and behavioural therapies — GOLD STANDARD for opioid use disorder",
      "METHADONE: Full opioid agonist. Long-acting (24-36 hours). Prevents withdrawal and cravings. Given daily at licensed opioid treatment programmes (OTPs). Effective at reducing heroin use, criminal behaviour and HIV transmission. Risk: QT prolongation, sedation, requires supervised dispensing",
      "BUPRENORPHINE (Suboxone — with naloxone, Subutex — without): Partial opioid agonist. Ceiling effect reduces overdose risk. Can be prescribed in office-based settings (more accessible). Sublingual administration. Naloxone added to deter injection misuse",
      "NALTREXONE (Vivitrol): Opioid antagonist — blocks all opioid effects. No misuse potential. Monthly injection (IM) improves adherence. Requires 7-10 days opioid-free before initiation (precipitates withdrawal if given too early). Best for motivated patients post-detox",
      "MAT MYTHS to address: 'Just replacing one addiction with another' (FALSE — MAT treats a brain disease with evidence-based medicine, same as treating diabetes with insulin), 'People on MAT are not in real recovery' (FALSE — recovery is defined by improved functioning and quality of life, not by the medications used)",
      "Nurse's role: Non-judgmental support for MAT, medication education, monitoring for adherence and side effects, coordinating with treatment team",
      "NCLEX tip: Naltrexone requires opioid-free period before initiation — giving naltrexone to an opioid-dependent patient precipitates IMMEDIATE severe withdrawal",
    ],
  },
  {
    title: "CNS Depressants — Benzodiazepines and Barbiturates",
    icon: "😴",
    color: "orange",
    content: [
      "CNS depressants (benzodiazepines, barbiturates, Z-drugs) work on GABA receptors — same mechanism as alcohol",
      "WITHDRAWAL from CNS depressants is POTENTIALLY FATAL — same mechanism as alcohol withdrawal (CNS hyperexcitability)",
      "NEVER abruptly stop benzodiazepines in physically dependent patients — withdrawal seizures can be fatal",
      "BENZODIAZEPINE INTOXICATION: Sedation, slurred speech, ataxia, impaired coordination, anterograde amnesia. Respiratory depression risk increased with alcohol combination",
      "BENZODIAZEPINE OVERDOSE: Rarely fatal alone — but combination with alcohol or opioids dramatically increases mortality. Antidote: FLUMAZENIL (reverses benzodiazepine effect but short-acting — monitor for re-sedation)",
      "BENZODIAZEPINE WITHDRAWAL timeline: Short-acting (lorazepam, oxazepam) — symptoms begin 24-48 hours. Long-acting (diazepam, clonazepam) — symptoms begin 5-7 days. Seizures and DTs can occur with both",
      "TREATMENT of benzodiazepine withdrawal: Taper the current benzodiazepine OR substitute long-acting benzodiazepine (diazepam) and taper slowly over weeks to months",
      "BARBITURATE withdrawal: Similar to alcohol — extremely dangerous. Seizures and cardiovascular collapse. Require intensive monitoring and gradual taper",
      "Polysubstance use: Combining CNS depressants (alcohol + benzodiazepines + opioids) has synergistic respiratory depression — most common cause of overdose death",
    ],
  },
  {
    title: "Stimulant Use Disorders — Cocaine and Amphetamines",
    icon: "⚡",
    color: "red",
    content: [
      "Stimulants increase release of dopamine, norepinephrine and serotonin — producing euphoria, increased energy, decreased appetite",
      "COCAINE: Blocks reuptake of dopamine — intense short-lived euphoria (15-30 minutes for snorted). Crack cocaine smoked — effect begins in seconds, more intense",
      "COCAINE INTOXICATION: Euphoria, agitation, mydriasis (dilated pupils), tachycardia, hypertension, diaphoresis, fever, decreased appetite. Severe: chest pain (cocaine-induced MI), stroke, seizures, arrhythmias",
      "COCAINE OVERDOSE: No specific antidote. Supportive care — benzodiazepines for agitation/seizures, cooling for hyperthermia, treat cardiac complications",
      "IMPORTANT: Do NOT give beta-blockers for cocaine-induced chest pain/hypertension — unopposed alpha-adrenergic activity causes coronary vasoconstriction. Use benzodiazepines and nitrates instead",
      "COCAINE WITHDRAWAL ('Crash'): Not life-threatening. Intense fatigue, depression, hypersomnia, increased appetite, powerful cravings. Most dangerous feature is severe depression with suicidal ideation",
      "METHAMPHETAMINE: More potent and longer-lasting than cocaine. Causes severe dental decay ('meth mouth'), skin picking, paranoia, psychosis (may persist after cessation)",
      "STIMULANT PSYCHOSIS: Paranoid psychosis clinically indistinguishable from schizophrenia during acute intoxication. Usually resolves with abstinence",
      "TREATMENT: No FDA-approved pharmacotherapy. Cognitive behavioural therapy and contingency management are evidence-based psychosocial treatments",
    ],
  },
  {
    title: "Cannabis, Hallucinogens and Inhalants",
    icon: "🌿",
    color: "green",
    content: [
      "CANNABIS: Most widely used illicit substance globally. THC acts on CB1/CB2 cannabinoid receptors. Effects: relaxation, altered perception, increased appetite, impaired memory and concentration",
      "CANNABIS INTOXICATION: Euphoria, relaxation, conjunctival injection (red eyes), increased appetite ('munchies'), dry mouth, tachycardia, impaired memory, anxiety/paranoia in susceptible individuals",
      "CANNABIS USE DISORDER: Can develop — characterised by tolerance, withdrawal (irritability, anxiety, sleep disturbance, decreased appetite), continued use despite consequences",
      "CANNABIS WITHDRAWAL: Mild, not life-threatening — irritability, anxiety, sleep disturbance, decreased appetite, restlessness. Onset 1-2 days after cessation, peaks 2-3 days, resolves within 2 weeks",
      "Cannabis and PSYCHOSIS: Heavy use, especially high-potency products, associated with increased risk of psychosis and schizophrenia — particularly in genetically susceptible adolescents",
      "HALLUCINOGENS (LSD, psilocybin, mescaline, PCP): Produce perceptual distortions, visual hallucinations, altered sense of time and self. Generally not physically addictive",
      "PCP (Phencyclidine): NMDA antagonist. Unique features: horizontal and vertical nystagmus, hypertension, tachycardia, unpredictable violence, dissociation, amnesia. Manage in low-stimulation environment",
      "INHALANTS: Huffing volatile substances — paint thinner, aerosols, glue. Rapid onset, brief euphoria. SUDDEN SNIFFING DEATH — cardiac arrhythmia from sensitisation. Brain damage, renal toxicity with chronic use",
      "NURSING CARE for hallucinogen intoxication: Low-stimulation environment, reality orientation, calm reassurance ('talking down'), avoid physical restraint if possible, benzodiazepines for severe agitation",
    ],
  },
  {
    title: "Nicotine Use Disorder",
    icon: "🚬",
    color: "orange",
    content: [
      "Nicotine is highly addictive — acts on nicotinic acetylcholine receptors in the mesolimbic reward pathway",
      "Nicotine USE DISORDER is one of the most common and most deadly substance use disorders — responsible for ~8 million deaths globally per year",
      "NICOTINE WITHDRAWAL: Irritability, anxiety, difficulty concentrating, increased appetite, weight gain, depressed mood, insomnia, intense cravings. Onset within 24 hours of cessation",
      "PHARMACOTHERAPY (review from Lifestyle Choices section): Varenicline (most effective), bupropion, NRT (patch, gum, lozenge, inhaler, nasal spray). Combination NRT is more effective than single agent",
      "VARENICLINE (Champix): Partial nicotinic receptor agonist — reduces cravings AND reduces pleasure if smoking occurs. Start 1-2 weeks before quit date. Monitor for mood changes and suicidal ideation",
      "ELECTRONIC CIGARETTES (e-cigarettes/vaping): NOT FDA-approved cessation tools. Evidence insufficient. EVALI (e-cigarette vaping-associated lung injury) — serious pulmonary condition. Particularly dangerous in adolescents (nicotine exposure during brain development)",
      "PASSIVE SMOKING (second-hand smoke): Causes cardiovascular disease, lung cancer and respiratory disease in non-smokers. Particularly harmful to children (ear infections, asthma, SIDS risk)",
      "THIRD-HAND SMOKE: Residual tobacco toxins on surfaces, clothing, furniture — can be absorbed by skin and ingestion. Risk to infants and young children",
      "SMOKING IN PREGNANCY: Causes preterm birth, low birth weight, placental abruption, stillbirth, SIDS. Cessation at any point in pregnancy benefits the baby",
    ],
  },
  {
    title: "Nursing Care for Substance Use Disorders",
    icon: "🩺",
    color: "blue",
    content: [
      "THERAPEUTIC APPROACH: Non-judgmental, compassionate, trauma-informed. Addiction is a brain disease — not a character flaw. Stigmatising language causes harm and creates barriers to care",
      "LANGUAGE MATTERS: Use person-first language ('person with alcohol use disorder' not 'alcoholic'). Avoid: 'addict,' 'junkie,' 'drug seeker,' 'frequent flyer.' These labels affect quality of care",
      "PAIN MANAGEMENT in patients with OUD: Do NOT withhold pain management because patient has an opioid use disorder — undertreated pain is harmful and unethical. Collaborate with the addiction medicine and pain team",
      "SCREENING: Universal screening using validated tools (CAGE, AUDIT, DAST-10) — substance use is underdiagnosed because clinicians don't ask",
      "BRIEF INTERVENTION (SBIRT — Screening, Brief Intervention, Referral to Treatment): Evidence-based framework for primary care. Screen → if positive, provide brief motivational intervention → refer to specialist treatment",
      "HARM REDUCTION: Strategies to reduce substance-related harm without requiring abstinence — needle exchange programmes, naloxone distribution, safe supply, drug checking services. Evidence-based public health approach",
      "FAMILY AND SOCIAL SYSTEMS: Substance use affects the whole family. Codependency, enabling behaviours, family therapy and Al-Anon/Nar-Anon support for family members",
      "CO-OCCURRING DISORDERS (Dual Diagnosis): Substance use frequently co-occurs with mental illness (depression, anxiety, PTSD, bipolar). Both must be treated simultaneously — treating one without the other leads to relapse",
      "RELAPSE: A normal part of recovery — NOT failure. Average person with SUD makes 8-10 attempts to quit before sustained recovery. Relapse is a signal to reassess treatment, not to give up",
    ],
  },
];

const mnemonics = [
  {
    title: "Alcohol Withdrawal Timeline",
    acronym: "TSHD",
    breakdown: ["Tremors/minor (6-24hrs)", "Seizures (24-48hrs)", "Hallucinosis (24-72hrs)", "Delirium Tremens (48-96hrs)"],
    memory: "The Shaking Human Dies — Tremors, Seizures, Hallucinosis, Delirium Tremens in that order. DTs are the most dangerous!",
    color: "red",
  },
  {
    title: "Opioid Intoxication vs Withdrawal — Pupils",
    acronym: "ICon IWith",
    breakdown: ["Intoxication = Constricted (miosis)", "Withdrawal = Dilated (mydriasis)"],
    memory: "I CONTRACT when high (pupils constrict in intoxication). I EXPAND when withdrawing (pupils dilate in withdrawal). Opposite directions!",
    color: "purple",
  },
  {
    title: "Wernicke's Triad",
    acronym: "CAO",
    breakdown: ["Confusion", "Ataxia (unsteady gait)", "Ophthalmoplegia (eye movement problems)"],
    memory: "CAO — Confusion, Ataxia, Ophthalmoplegia. Give THIAMINE before glucose — always. Korsakoff is irreversible if missed!",
    color: "red",
  },
  {
    title: "CAGE Screening Tool",
    acronym: "CAGE",
    breakdown: ["Cut down (felt need to?)", "Annoyed (by criticism?)", "Guilty (about drinking?)", "Eye-opener (morning drink?)"],
    memory: "CAGE — 2 or more YES answers = probable alcohol use disorder. Quick 4-question screen for any clinical setting!",
    color: "orange",
  },
];

const alerts = [
  { text: "Alcohol withdrawal DELIRIUM TREMENS (48-96 hours) can be FATAL — benzodiazepines are the gold standard treatment. Never discharge an at-risk patient without withdrawal management!", severity: "high" },
  { text: "THIAMINE BEFORE GLUCOSE — always in malnourished or alcohol-dependent patients. Glucose before thiamine precipitates Wernicke's encephalopathy and permanent brain damage!", severity: "high" },
  { text: "NEVER abruptly stop benzodiazepines in physically dependent patients — benzodiazepine and barbiturate withdrawal can cause fatal seizures just like alcohol withdrawal!", severity: "high" },
  { text: "NALTREXONE requires 7-10 days opioid-free before initiation — giving it to an opioid-dependent patient precipitates IMMEDIATE severe withdrawal!", severity: "high" },
  { text: "OPIOID OVERDOSE TRIAD: Pinpoint pupils + respiratory depression + altered consciousness = NALOXONE immediately. Duration of naloxone is shorter than most opioids — monitor for re-narcotisation!", severity: "high" },
  { text: "Do NOT give BETA-BLOCKERS for cocaine-induced chest pain — unopposed alpha-adrenergic activity causes coronary vasoconstriction and worsens ischaemia. Use benzodiazepines and nitrates!", severity: "high" },
  { text: "KORSAKOFF SYNDROME is largely IRREVERSIBLE — only PREVENTION through early thiamine treatment works. Confabulation is NOT lying — it is unconscious fabrication to fill memory gaps!", severity: "high" },
  { text: "DUAL DIAGNOSIS: Treating substance use alone without addressing co-occurring mental illness leads to relapse. Both conditions must be treated simultaneously!", severity: "medium" },
  { text: "Pain management in patients with OUD: Do NOT withhold analgesia — undertreated pain is harmful and unethical. Collaborate with pain and addiction medicine teams!", severity: "medium" },
  { text: "Opioid withdrawal is uncomfortable but NOT life-threatening. Alcohol and benzodiazepine withdrawal CAN be fatal. Know the difference — they require very different urgency levels!", severity: "medium" },
  { text: "Language matters: Use 'person with alcohol use disorder' not 'alcoholic.' Stigmatising language affects the quality of care patients receive!", severity: "low" },
  { text: "RELAPSE is a normal part of recovery — not failure. Average person makes 8-10 attempts before sustained recovery. Respond with compassion, not disappointment!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A nurse is admitting a patient with a history of heavy alcohol use who stopped drinking 36 hours ago. The patient is trembling, diaphoretic and reports 'I keep seeing spiders on the wall even though I know they're not real.' His blood pressure is 158/96 and heart rate is 108. Which stage of alcohol withdrawal does this presentation MOST likely represent?",
    options: [
      "Minor withdrawal — tremors and autonomic symptoms only",
      "Alcoholic hallucinosis — hallucinations with intact orientation",
      "Delirium tremens — life-threatening autonomic instability with confusion",
      "Wernicke's encephalopathy — thiamine deficiency presenting with hallucinations",
    ],
    correct: 1,
    explanation: "This patient is experiencing ALCOHOLIC HALLUCINOSIS — the distinguishing feature is that the patient is HAVING HALLUCINATIONS (visual — spiders on the wall) BUT KNOWS THEY ARE NOT REAL ('even though I know they're not real'). This intact orientation and reality testing distinguishes hallucinosis from delirium tremens. Alcoholic hallucinosis typically occurs 24-72 hours after cessation, concurrent with or following the tremor phase. Delirium tremens (48-96 hours) involves CONFUSION and DISORIENTATION — the patient would not know the spiders aren't real. Wernicke's presents with the CAO triad (confusion, ataxia, ophthalmoplegia) — not isolated hallucinations with intact orientation.",
    wrongExplanations: [
      "WRONG: Minor withdrawal (6-24 hours) includes tremors, diaphoresis and autonomic symptoms but NOT hallucinations. This patient has visual hallucinations at 36 hours — beyond the minor withdrawal phase.",
      "",
      "WRONG: Delirium tremens involves profound CONFUSION and DISORIENTATION — the patient would NOT know the spiders aren't real. The preserved insight ('I know they're not real') rules out DTs.",
      "WRONG: Wernicke's encephalopathy presents with confusion, ataxia and ophthalmoplegia (eye movement problems) — the classic CAO triad. Isolated visual hallucinations with intact orientation is not the Wernicke's presentation.",
    ],
  },
  {
    level: "Knowledge",
    question: "A 28-year-old man is brought to the emergency department by ambulance after being found unresponsive. His breathing is slow (6 breaths per minute) and his pupils are pinpoint (miotic). His friend states he used 'something' at a party. What is the nurse's FIRST action?",
    options: [
      "Establish IV access and draw blood for toxicology",
      "Administer naloxone (Narcan) via IM or intranasal route immediately",
      "Apply oxygen via face mask and monitor SpO2",
      "Call the physician and await orders before administering any medication",
    ],
    correct: 1,
    explanation: "This patient presents with the OPIOID OVERDOSE TRIAD: pinpoint pupils (miosis), respiratory depression (RR 6), and altered consciousness (unresponsive). This is a life-threatening emergency requiring IMMEDIATE NALOXONE administration. Naloxone is an opioid receptor antagonist — it reverses respiratory depression, sedation and miosis within 2-5 minutes. Intranasal or IM routes are appropriate for rapid administration without IV access. While oxygen (Option C) is also important, airway and ventilation take priority and naloxone addresses the underlying cause of the respiratory depression. Waiting for physician orders (Option D) in active respiratory depression could result in death or brain damage. IV access (Option A) is important but not the FIRST action.",
    wrongExplanations: [
      "WRONG: IV access is important but takes time. Naloxone can be given IM or intranasally without IV access — and in active respiratory depression from opioid overdose, naloxone is the priority first action.",
      "",
      "WRONG: Supplemental oxygen is appropriate but treats the symptom (hypoxia) not the cause (opioid-induced respiratory depression). Naloxone addresses the underlying mechanism and is the priority.",
      "WRONG: Waiting for physician orders in a patient in respiratory arrest from opioid overdose is dangerous and potentially fatal. Naloxone administration in opioid overdose is within nursing scope as emergency treatment.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is admitting a patient with alcohol use disorder who reports his last drink was 8 hours ago. He drank approximately 750mL of spirits daily for the past 2 years. CIWA-Ar score is 14. He is trembling, anxious and reports mild sweating. The physician orders lorazepam 2mg IV PRN CIWA-Ar score ≥8. Which additional nursing priority should be implemented BEFORE the IV line is used for any other purpose?",
    options: [
      "Administer the lorazepam as ordered — this is the priority intervention for withdrawal",
      "Administer IV thiamine 100mg BEFORE any glucose-containing IV fluids",
      "Obtain vital signs every 4 hours — this is standard monitoring for withdrawal",
      "Contact social work for discharge planning — alcohol treatment referral is the priority",
    ],
    correct: 1,
    explanation: "THIAMINE (Vitamin B1) must be administered BEFORE any glucose-containing IV fluids in alcohol-dependent patients. Chronic alcohol use depletes thiamine stores. If glucose is administered before thiamine in a thiamine-deficient patient, the remaining thiamine is consumed by glucose metabolism, precipitating or worsening Wernicke's encephalopathy (confusion, ataxia, ophthalmoplegia) which can progress to irreversible Korsakoff syndrome. Standard protocol: thiamine IV FIRST, then IV fluids (which may contain glucose), then continue withdrawal management. The lorazepam is also indicated (CIWA-Ar 14 = pharmacological treatment required) but thiamine before ANY glucose-containing fluid is the priority nursing action that is commonly overlooked.",
    wrongExplanations: [
      "WRONG: Lorazepam is indicated and important — but thiamine before glucose is a CRITICAL safety priority that must be implemented first to prevent permanent neurological damage. Both are needed but in correct sequence.",
      "",
      "WRONG: Vital signs every 4 hours is inadequate for a CIWA-Ar score of 14 — this patient requires more frequent monitoring (every 1-2 hours). Additionally, the thiamine priority must be addressed.",
      "WRONG: Social work referral is appropriate eventually — but this is not the immediate priority when the patient is in active alcohol withdrawal with risk of Wernicke's encephalopathy.",
    ],
  },
  {
    level: "Application",
    question: "A patient with opioid use disorder on methadone maintenance therapy is admitted for an appendectomy. Post-operatively he reports severe pain (9/10) and asks for pain medication. The surgical resident says 'He's on methadone — that should be covering his pain. We can't give him more opioids.' What is the nurse's MOST appropriate response?",
    options: [
      "Agree with the resident — methadone provides adequate pain coverage for surgical patients",
      "Advocate for the patient: methadone treats opioid use disorder and prevents withdrawal but does NOT provide adequate post-operative analgesia. This patient requires appropriate pain management",
      "Contact the patient's methadone clinic and ask them to increase the methadone dose",
      "Administer non-opioid analgesia only — opioids should be avoided in patients with OUD",
    ],
    correct: 1,
    explanation: "This is a CRITICAL ADVOCACY and patient safety situation. Methadone for OUD maintenance: prevents withdrawal, reduces cravings, blocks the euphoric effects of illicit opioids — it does NOT provide adequate analgesia for acute surgical pain. Patients on methadone maintenance often have OPIOID TOLERANCE — they may require HIGHER than standard doses of analgesics to achieve pain control. Withholding pain management from a patient with OUD is: ethically indefensible, a violation of patient rights, and represents healthcare discrimination. The nurse must advocate for evidence-based pain management, which may include continuing methadone (to prevent withdrawal) PLUS additional short-acting opioid analgesia for acute pain, ideally with addiction medicine consultation. Undertreated post-operative pain is associated with increased risk of relapse.",
    wrongExplanations: [
      "WRONG: Methadone for OUD does NOT provide surgical pain coverage — this is a dangerous misconception. Methadone prevents withdrawal and craving — it is dosed for those purposes, not for analgesia.",
      "",
      "WRONG: Contacting the methadone clinic to increase the dose is not appropriate — methadone doses are adjusted for OUD management, not acute surgical pain. Acute pain requires separate pain management.",
      "WRONG: Non-opioid analgesia alone is unlikely to be adequate for post-operative abdominal pain (appendectomy). Withholding opioids solely because of OUD diagnosis is discriminatory and unethical — undertreated pain is harmful.",
    ],
  },
  {
    level: "Application",
    question: "A 40-year-old woman is being discharged after a week of inpatient treatment for alcohol use disorder. She has successfully completed medical detox and is motivated for recovery. She asks 'Can I just have a few drinks on special occasions — like birthdays and Christmas?' What is the nurse's MOST therapeutic and clinically accurate response?",
    options: [
      "'Absolutely not — one drink will lead you straight back to where you were.'",
      "'That depends on your willpower — some people can manage controlled drinking after treatment.'",
      "'That's a really common question. Research shows that for most people with alcohol use disorder, controlled drinking is not achievable — the neurobiological changes in addiction make it extremely difficult. Total abstinence gives you the best chance of sustained recovery. Let's talk about strategies for social situations.'",
      "'That's your decision to make — I'm not here to judge.'",
    ],
    correct: 2,
    explanation: "Option C is therapeutic because it: acknowledges the question without shaming (validating that it's common), provides accurate evidence-based clinical information (controlled drinking is not achievable for most people with AUD due to neurobiological changes in the reward and impulse control circuits), supports the treatment goal of abstinence with clinical rationale, and redirects to practical coping strategies. Option A is prescriptive and potentially inaccurate ('straight back' implies immediate relapse). Option B implies willpower is the determining factor — this is the 'addiction as moral failing' model that is factually incorrect and potentially harmful. Option D abdicates nursing responsibility to provide health education — the patient asked for clinical guidance.",
    wrongExplanations: [
      "WRONG: While abstinence is the recommended goal, the response 'one drink will lead you straight back' is prescriptive and shame-based. Some people do relapse on one drink — but the message should be evidence-based and respectful.",
      "WRONG: Framing controlled drinking as a 'willpower' question perpetuates the harmful myth that addiction is a moral or willpower failing — contradicting the neuroscience of addiction. This is clinically inaccurate and potentially harmful.",
      "",
      "WRONG: While respecting autonomy is important, 'I'm not here to judge' when asked a direct clinical question abdicates the nurse's professional responsibility to provide accurate health education. This is not neutrality — it is evasion.",
    ],
  },
  {
    level: "Advanced",
    question: "A 52-year-old man is admitted to the medical ward after a fall. During assessment the nurse notices: spider naevi on his chest, palmar erythema, jaundice, abdominal distension (ascites), bilateral leg oedema and asterixis (flapping tremor of the hands when arms are extended). His family reports he has been confused and 'not himself' for 3 days. He cannot state the date or where he is. What is the MOST likely diagnosis and what is the nurse's PRIORITY action?",
    options: [
      "Alcohol withdrawal delirium — administer benzodiazepines immediately",
      "Hepatic encephalopathy from alcohol-related liver cirrhosis — restrict protein, administer lactulose and notify physician urgently",
      "Wernicke's encephalopathy — administer IV thiamine immediately",
      "Delirium tremens — initiate CIWA-Ar monitoring and give benzodiazepines",
    ],
    correct: 1,
    explanation: "This patient has classic ALCOHOL-RELATED LIVER CIRRHOSIS with HEPATIC ENCEPHALOPATHY. Evidence: Spider naevi (dilated skin capillaries — sign of chronic liver disease), palmar erythema, jaundice (elevated bilirubin), ascites (portal hypertension), bilateral oedema (low albumin), asterixis (flapping tremor — hallmark of hepatic encephalopathy), confusion and disorientation (3 days). HEPATIC ENCEPHALOPATHY occurs when the cirrhotic liver cannot clear ammonia and other toxins — accumulation causes neurological dysfunction. MANAGEMENT: Lactulose (traps ammonia in gut as ammonium ion and accelerates excretion), rifaximin (non-absorbed antibiotic reducing gut bacteria producing ammonia), dietary protein guidance (not severe restriction — adequate protein is needed), treat precipitating causes (infection, GI bleed, dehydration, constipation, electrolyte disturbance). This is distinct from alcohol WITHDRAWAL (patient has had chronic liver disease for years, not acute cessation symptoms) and Wernicke's (which presents with the CAO triad — ataxia and ophthalmoplegia are not described here).",
    wrongExplanations: [
      "WRONG: Alcohol withdrawal delirium (DTs) occurs 48-96 hours after CESSATION of alcohol — and requires a history of recent heavy use stopping abruptly. This patient's signs (spider naevi, cirrhosis, ascites) point to chronic liver disease with hepatic encephalopathy, not withdrawal.",
      "",
      "WRONG: Wernicke's encephalopathy presents with the classic TRIAD of confusion, ATAXIA and OPHTHALMOPLEGIA — the patient here does not have ataxia or eye movement abnormalities documented. The full picture (ascites, jaundice, spider naevi) points to hepatic encephalopathy.",
      "WRONG: DTs require recent alcohol cessation history. This patient's presentation is dominated by signs of chronic liver failure — portal hypertension, coagulopathy indicators and hepatic encephalopathy — not acute autonomic instability from withdrawal.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is working in a community health setting and sees a 19-year-old man who uses heroin daily. He tells the nurse 'I know I need help but I can't afford rehab and I won't go to a methadone clinic because my parents will find out. I know I'll overdose eventually — I nearly did last week. Can you just give me some clean needles so I don't get HIV at least?' What is the nurse's MOST appropriate response that is BOTH evidence-based AND respects the patient's autonomy?",
    options: [
      "Refuse needle exchange — providing clean needles enables drug use and is contrary to nursing ethics",
      "Insist he enter a detoxification programme before any other assistance can be provided",
      "Provide clean needles, naloxone kit with training, AUDIT/DAST-10 screening, provide information about buprenorphine (accessible, confidential, office-based), address the near-overdose urgently and maintain the therapeutic relationship without coercion",
      "Contact his parents — a near-overdose represents imminent danger requiring family notification despite confidentiality",
    ],
    correct: 2,
    explanation: "This question tests HARM REDUCTION principles — an evidence-based public health approach that reduces the health consequences of drug use without requiring abstinence as a precondition for receiving care. HARM REDUCTION is endorsed by major public health bodies globally and is NOT 'enabling' — it is evidence-based medicine. The correct comprehensive approach: Needle/syringe exchange (reduces HIV, hepatitis C, bacterial infections — evidence-based, does NOT increase drug use), Naloxone kit with training (he nearly overdosed — this could save his life), Screening assessment, Information about buprenorphine (more accessible than methadone — can be prescribed by trained GPs, does not require daily clinic attendance, confidential — addresses his specific barrier), Therapeutic alliance (keep him engaged, non-coercively, without preconditions). Refusing (Option A) is not evidence-based and harmful. Coercing treatment entry (Option B) is not evidence-based and damages rapport. Contacting parents (Option D) without consent would destroy the therapeutic relationship and drive him away from care.",
    wrongExplanations: [
      "WRONG: Needle exchange programmes have strong evidence — they reduce HIV and hepatitis C transmission without increasing drug use. Refusing is not evidence-based and leaves the patient at greater risk.",
      "WRONG: Requiring detoxification before any other assistance violates harm reduction principles and patient autonomy. This approach drives people away from care. Meeting people where they are is the evidence-based approach.",
      "",
      "WRONG: A near-overdose does not automatically trigger parental notification — the patient is 19 (adult), this is not an imminent acute suicide situation, and contacting family without consent would likely end the therapeutic relationship and increase risk by driving him away from care.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a 45-year-old woman admitted with pneumonia. During history taking the patient discloses she drinks 'a glass of wine at night' but hospital pharmacy review shows she was recently prescribed diazepam, and her vital signs show tachycardia (HR 108) and blood pressure 148/92. On day 2 the patient becomes agitated, is seeing 'people in the room who aren't there' and is confused about where she is. Her temperature is 38.8°C. CIWA-Ar score is 22. What is the MOST likely explanation and the MOST appropriate nursing priority?",
    options: [
      "Hospital-acquired infection — treat the fever with antipyretics and blood cultures",
      "Severe alcohol and/or benzodiazepine withdrawal with delirium — initiate urgent withdrawal management protocol, administer benzodiazepines per CIWA-Ar score and notify physician immediately",
      "Delirium from pneumonia and fever — treat the underlying infection",
      "Adverse reaction to IV antibiotics — discontinue current antibiotic infusion",
    ],
    correct: 1,
    explanation: "This patient is in SEVERE WITHDRAWAL (CIWA-Ar 22 = severe, threshold for pharmacological treatment is 8-10). Key evidence: 'A glass of wine at night' is likely a significant underreport (minimisation is extremely common in alcohol history-taking), recent diazepam prescription (CNS depressant — withdrawal from both alcohol AND benzodiazepines is now occurring), on day 2 of admission (consistent with alcohol withdrawal timeline — hallucinosis/DT range), visual hallucinations WITH confusion and disorientation (DTs), elevated HR and BP (autonomic hyperactivity), fever. PRIORITY: Administer benzodiazepines per CIWA-Ar score IMMEDIATELY (score 22 = urgent treatment required), notify physician, IV fluids and electrolytes, thiamine, continuous monitoring, seizure precautions, safety measures. Pneumonia may be contributing to fever but the neurological presentation (visual hallucinations, confusion, tachycardia on day 2) is classic DTs requiring URGENT treatment — delay risks fatal outcome.",
    wrongExplanations: [
      "WRONG: While infection is present and contributing to fever, the neurological presentation (hallucinations, confusion, tachycardia) on day 2 with CIWA-Ar 22 is classic DTs — a life-threatening emergency requiring immediate benzodiazepine treatment, not just antipyretics.",
      "",
      "WRONG: Pneumonia delirium is possible but does not explain the CIWA-Ar of 22 or the hallucinations and autonomic instability occurring specifically on day 2 — the classic DT timeframe. The withdrawal diagnosis takes priority and is immediately treatable.",
      "WRONG: Antibiotic reaction does not cause the constellation of autonomic hyperactivity, visual hallucinations with disorientation and fever occurring specifically on day 2 in a patient with alcohol and benzodiazepine history.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is working in a medical ward and discovers that a colleague — a senior nurse — has been diverting fentanyl from patient-controlled analgesia (PCA) pumps and replacing it with saline. Multiple patients have reported inadequate pain control. The nurse has observed the colleague appearing sedated and uncoordinated during shifts. What is the nurse's MOST appropriate sequence of actions?",
    options: [
      "Speak privately to the colleague first — they may have a reasonable explanation and public reporting could end their career",
      "Document specific objective observations and report to the nurse manager and pharmacy immediately, ensuring the affected patients are assessed and receive adequate analgesia",
      "Report directly to the nursing board — the colleague should be deregistered immediately",
      "Discuss with other nurses on the unit to determine if others have also noticed before reporting",
    ],
    correct: 1,
    explanation: "This scenario involves opioid DIVERSION (a criminal act), PATIENT HARM (patients in pain from saline substitution — inadequate analgesia) and IMPAIRED PRACTICE (sedated, uncoordinated colleague — likely intoxicated on diverted fentanyl). This is an IMMEDIATE PATIENT SAFETY EMERGENCY requiring immediate action: DOCUMENT objective observations (dates, times, specific behaviours, patient reports), REPORT to nurse manager AND pharmacy immediately (both need to know), ENSURE AFFECTED PATIENTS are assessed for inadequate analgesia and treated — their pain is the immediate patient safety concern. The pharmacy needs to audit PCAs, secure controlled substances and notify authorities. Private conversation first (Option A) risks alerting the colleague, allowing destruction of evidence and continuing patient harm during delay. Individual nursing boards (Option C) are appropriate for serious persistent misconduct but internal reporting must occur first. Group consensus (Option D) delays action while patients remain in pain.",
    wrongExplanations: [
      "WRONG: Speaking privately first while patients are in pain from saline substitution is an unacceptable delay. This is an active patient harm situation requiring immediate report to management and pharmacy — not a private conversation.",
      "",
      "WRONG: Direct nursing board reporting bypasses the internal escalation process. The manager and pharmacy must be notified first — they have authority to suspend the nurse, secure medications and audit PCAs. The nursing board may be notified subsequently through appropriate channels.",
      "WRONG: Seeking group consensus before reporting delays the report while patients continue to receive saline instead of fentanyl. The individual nurse's professional obligation to report is immediate and does not require group agreement.",
    ],
  },
  {
    level: "Advanced",
    question: "A 32-year-old woman on buprenorphine/naloxone (Suboxone) maintenance therapy for opioid use disorder is admitted for an elective laparoscopic cholecystectomy. The anaesthetist wants to stop the Suboxone 3 days pre-operatively to 'avoid opioid complications' during surgery. The patient is distressed and tells the nurse 'If I stop Suboxone I'll go into withdrawal and I know I'll use heroin to cope.' What is the nurse's MOST appropriate action?",
    options: [
      "Support the anaesthetist's plan — anaesthetic safety takes priority over MAT concerns",
      "Advise the patient to stop Suboxone as instructed — withdrawal is temporary and manageable",
      "Advocate for the patient by facilitating a multidisciplinary discussion (anaesthetics, addiction medicine, surgery) — current evidence supports continuing buprenorphine through perioperative period in most cases, and abrupt cessation carries high relapse risk",
      "Suggest the patient secretly continue Suboxone without telling the anaesthetist",
    ],
    correct: 2,
    explanation: "This question tests knowledge of PERIOPERATIVE BUPRENORPHINE MANAGEMENT and nursing advocacy. Current evidence and guidelines from addiction medicine bodies increasingly support CONTINUING buprenorphine through the perioperative period rather than stopping — for several reasons: Abrupt cessation precipitates withdrawal and dramatically increases relapse risk (as the patient correctly identifies), buprenorphine's partial agonism can be managed by experienced anaesthetists using appropriate dosing strategies, stopping MAT perioperatively has been associated with relapse and overdose death. The nurse's role: ADVOCATE — communicate the patient's concern to the team, request addiction medicine consultation, facilitate a multidisciplinary discussion before surgery. This is nursing advocacy in action — working within the system to ensure evidence-based, patient-centred care. The nurse should NOT secretly advise the patient to continue against medical orders (Option D) but SHOULD advocate loudly through appropriate channels.",
    wrongExplanations: [
      "WRONG: Simply supporting the anaesthetist's plan without advocacy ignores the patient's legitimate clinical concern and the current evidence base. Nursing advocacy requires raising concerns through appropriate channels.",
      "WRONG: Advising the patient to stop as instructed without exploring the evidence or advocating for review abandons the patient. The patient's concern is clinically valid — stopping buprenorphine abruptly does precipitate withdrawal and relapse.",
      "",
      "WRONG: Advising the patient to secretly continue medication against medical orders could cause drug interactions and surgical complications — and puts both patient and nurse in a dangerous position. Advocacy through proper channels is the correct approach.",
    ],
  },
];

const clinicalPearls = [
  "The most dangerous handover statement in substance use nursing is 'He's a drug seeker — just wants opioids.' A patient in opioid withdrawal, a patient with undertreated pain, and a patient diverting medications all behave differently. Assessment before assumption. The label 'drug seeker' has contributed to patients dying of undertreated pain and missed diagnoses.",
  "Thiamine before glucose — every time, without exception, in any malnourished or alcohol-dependent patient. This single intervention prevents permanent, irreversible neurological damage. The cost of thiamine is negligible. The cost of missed Wernicke's is catastrophic.",
  "Alcohol withdrawal and benzodiazepine withdrawal can kill. Opioid withdrawal makes people feel like they're dying but very rarely actually does. This distinction is critical — a heroin user in withdrawal needs comfort care and MAT. A patient stopping alcohol or benzos after years of heavy use needs urgent medical management.",
  "MAT (methadone, buprenorphine, naltrexone) is the most effective treatment we have for opioid use disorder — more effective than abstinence-only approaches, detox alone or 12-step programmes alone. Nurses who understand the neuroscience of addiction do not say patients on MAT are 'not really in recovery.'",
  "Harm reduction saves lives without requiring abstinence as a precondition for care. Needle exchange, naloxone distribution and safe supply programmes have decades of evidence. The moral objection to harm reduction — that it 'enables' drug use — is not supported by evidence. Meeting people where they are keeps them alive long enough to choose recovery.",
  "Confabulation in Korsakoff syndrome is not lying — the patient genuinely believes what they are saying and fills memory gaps unconsciously. Arguing about the accuracy of confabulated stories distresses the patient without therapeutic benefit. Reality orientation is gentle and consistent — not confrontational.",
  "Pain management in patients with substance use disorders is a patient rights issue. Withholding analgesia from a patient with OUD because 'they'll get high' is discrimination. Undertreated pain is associated with increased stress, anxiety and relapse risk — the opposite of the intended effect of withholding medication.",
];

export default function SubstanceAbusePage() {
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
            <h1 className="font-black text-base text-gray-900">💊 Substance Abuse</h1>
            <p className="text-xs text-gray-500">Psychosocial Integrity • Important ⭐⭐</p>
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
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 mb-6">
              <p className="text-orange-700 text-sm leading-relaxed font-medium">
                💊 Substance abuse is tested throughout NCLEX. Master alcohol withdrawal timeline, opioid overdose reversal, MAT options and harm reduction principles!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most common NCLEX traps on Substance Abuse — study these carefully!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Substance Abuse!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review alcohol withdrawal timeline and opioid reversal." :
                        "Keep studying! Focus on thiamine before glucose, withdrawal timelines and naloxone."}
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