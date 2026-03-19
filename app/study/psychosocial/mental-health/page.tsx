"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Mental Health Nursing",
    icon: "🧠",
    color: "blue",
    content: [
      "Mental health nursing requires therapeutic use of self — the nurse's most powerful tool is the therapeutic relationship",
      "Mental illness affects 1 in 5 Australians annually — it is common, treatable and the nurse's response to it must be evidence-based and non-stigmatising",
      "KEY LEGAL CONCEPTS: Voluntary admission (patient consents), Involuntary admission (patient is detained under mental health legislation — risk to self or others, unable to care for self)",
      "LEAST RESTRICTIVE ENVIRONMENT: Legal and ethical principle — patients must receive care in the setting that provides the greatest freedom consistent with safety",
      "THERAPEUTIC MILIEU: The entire ward environment is therapeutic — safety, structure, norms, limits, balance of autonomy and support",
      "NCLEX heavily tests: Schizophrenia (positive/negative symptoms, antipsychotics), bipolar disorder (mania management), depression (suicide risk), anxiety disorders and pharmacology",
      "STIGMA: Nurses must model non-stigmatising language and attitudes — mental illness is a health condition, not a character flaw or weakness",
    ],
  },
  {
    title: "Schizophrenia — Positive and Negative Symptoms",
    icon: "🔮",
    color: "purple",
    content: [
      "POSITIVE symptoms (things ADDED to normal experience — excess or distortion of normal functions):",
      "Hallucinations: Sensory perceptions without external stimulus. Auditory are MOST COMMON in schizophrenia. Visual hallucinations suggest organic cause (delirium, substance use)",
      "Delusions: Fixed false beliefs not shared by culture. Types: persecutory (most common), grandiose, referential, somatic, erotomanic",
      "Disorganised thinking: Loose associations, tangentiality, word salad, clang associations (rhyming words with no meaning)",
      "Disorganised behaviour: Unpredictable agitation, catatonia, inappropriate affect",
      "NEGATIVE symptoms (things REMOVED from normal experience — diminishment of normal functions):",
      "Avolition: Inability to initiate and sustain goal-directed activities",
      "Alogia: Poverty of speech (brief, empty replies)",
      "Anhedonia: Inability to experience pleasure",
      "Flat affect: Reduced emotional expression",
      "Asociality: Social withdrawal",
      "NCLEX tip: Positive symptoms respond BETTER to antipsychotics. Negative symptoms are harder to treat and more disabling long-term",
    ],
  },
  {
    title: "Schizophrenia — Nursing Interventions",
    icon: "🩺",
    color: "purple",
    content: [
      "HALLUCINATIONS: Do NOT argue that they are not real ('I don't hear anything') — this damages trust. Do acknowledge the patient's experience ('I can see you're hearing something distressing')",
      "Respond to the FEELING behind the hallucination — 'That sounds frightening. Are you safe right now?'",
      "Do NOT play along or reinforce the hallucination ('Yes, I hear them too')",
      "Safety assessment: Are the voices commanding the patient to harm themselves or others? (command hallucinations are HIGH RISK)",
      "DELUSIONS: Do NOT argue with or attempt to logically disprove delusions — this increases distress and damages rapport",
      "Do NOT play along or reinforce delusional content",
      "Acknowledge the patient's feelings without confirming or denying the delusion: 'I can see this is very frightening for you'",
      "DISORGANISED COMMUNICATION: Use simple, clear, short sentences. Speak calmly and slowly. Focus on one topic at a time",
      "MEDICATION: Antipsychotics are the cornerstone of treatment. Adherence is the biggest challenge — oral medications can be refused, long-acting injectable antipsychotics improve adherence",
      "Insight is often poor in schizophrenia — patients may not believe they are ill, making voluntary treatment difficult",
    ],
  },
  {
    title: "Antipsychotic Medications — First and Second Generation",
    icon: "💊",
    color: "red",
    content: [
      "FIRST GENERATION (Typical) antipsychotics: Haloperidol (Haldol), Chlorpromazine, Fluphenazine. Effective for positive symptoms. HIGH risk of extrapyramidal side effects (EPS)",
      "EXTRAPYRAMIDAL SIDE EFFECTS (EPS) — high yield for NCLEX:",
      "AKATHISIA: Subjective restlessness, inability to sit still. Often mistaken for anxiety or agitation. Treatment: beta-blockers, benzodiazepines",
      "ACUTE DYSTONIA: Sudden sustained muscle contractions — torticollis (neck), oculogyric crisis (eyes rolling up). Appears within HOURS to days. Treatment: Benztropine (Cogentin) or diphenhydramine IM IMMEDIATELY",
      "PSEUDOPARKINSONISM: Tremor, rigidity, bradykinesia, shuffling gait. Treatment: Anticholinergics (benztropine)",
      "TARDIVE DYSKINESIA (TD): Late-onset involuntary repetitive movements — lip smacking, tongue protrusion, grimacing. Appears after MONTHS to YEARS of use. May be IRREVERSIBLE. No reliable treatment — prevention by using lowest effective dose",
      "SECOND GENERATION (Atypical) antipsychotics: Risperidone, Olanzapine, Quetiapine, Clozapine, Aripiprazole. Lower EPS risk. Effective for positive AND negative symptoms",
      "METABOLIC SYNDROME risk with atypicals: Weight gain, hyperglycaemia, dyslipidaemia — especially olanzapine and clozapine",
      "CLOZAPINE: Most effective antipsychotic for treatment-resistant schizophrenia. RISK OF AGRANULOCYTOSIS — mandatory weekly then biweekly WBC monitoring. Strict registration required",
      "NCLEX tip: Know ALL four EPS types — especially tardive dyskinesia (irreversible) and acute dystonia (emergency — give benztropine IM)",
    ],
  },
  {
    title: "Neuroleptic Malignant Syndrome (NMS) — Life-Threatening Emergency",
    icon: "🚨",
    color: "red",
    content: [
      "NMS is a rare but potentially FATAL reaction to antipsychotic medications",
      "Classic triad: FEVER (very high, often >40°C), MUSCLE RIGIDITY (lead pipe rigidity), ALTERED CONSCIOUSNESS",
      "Additional features: Autonomic instability (BP fluctuations, tachycardia, diaphoresis), elevated CK (muscle breakdown), elevated WBC, elevated creatinine",
      "Can occur with ANY antipsychotic but more common with high-potency first-generation agents (haloperidol)",
      "Onset: Usually within 2 weeks of starting or increasing antipsychotic",
      "MANAGEMENT: STOP the antipsychotic IMMEDIATELY, supportive care (cooling, hydration, monitoring), IV dantrolene (muscle relaxant), bromocriptine (dopamine agonist), ICU admission",
      "Mortality rate: 10-20% if untreated",
      "DIFFERENTIATE from serotonin syndrome: NMS = gradual onset, more rigidity, caused by antipsychotics. Serotonin syndrome = rapid onset, more tremor/clonus, caused by serotonergic drugs",
      "NCLEX tip: NMS triad = Fever + Rigidity + Altered mental status after antipsychotic. STOP the drug IMMEDIATELY",
    ],
  },
  {
    title: "Bipolar Disorder — Mania and Depression",
    icon: "⚡",
    color: "orange",
    content: [
      "BIPOLAR I: At least one MANIC episode (may include depressive episodes). Mania requires hospitalisation in severe cases",
      "BIPOLAR II: Hypomanic episodes (less severe than mania) + major depressive episodes. Never full mania",
      "MANIC EPISODE features (DIGFAST mnemonic): Distractibility, Irresponsibility/Impulsivity, Grandiosity, Flight of ideas, Activity increased, Sleep decreased, Talkativeness (pressured speech)",
      "Mania safety concerns: Impaired judgement leads to financial ruin, sexual indiscretions, dangerous behaviour. Patient often does not recognise the problem",
      "NURSING MANAGEMENT OF MANIA: Low-stimulation environment, simple clear instructions, set limits on disruptive behaviour, monitor nutrition (patient too busy/distracted to eat), monitor sleep, medication compliance",
      "PHARMACOTHERAPY for bipolar:",
      "LITHIUM: Gold standard mood stabiliser. NARROW THERAPEUTIC INDEX (0.6-1.2 mEq/L). Requires regular blood level monitoring. Signs of toxicity: nausea, tremor, confusion, ataxia. Toxicity risk with dehydration, NSAIDs, ACE inhibitors",
      "VALPROATE (Depakote): Mood stabiliser — monitor LFTs and CBC. Teratogenic (neural tube defects) — contraindicated in pregnancy",
      "LAMOTRIGINE: Effective for bipolar depression. Risk of STEVENS-JOHNSON SYNDROME (serious skin reaction) — slow titration required",
      "ATYPICAL ANTIPSYCHOTICS: Quetiapine, olanzapine — used for acute mania and maintenance",
      "NCLEX tip: Lithium toxicity signs and monitoring are heavily tested. Know the therapeutic range and what causes toxicity",
    ],
  },
  {
    title: "Lithium Toxicity — High Priority",
    icon: "⚠️",
    color: "red",
    content: [
      "THERAPEUTIC RANGE: 0.6-1.2 mEq/L (some sources say 0.8-1.2 for acute mania). TOXIC levels begin above 1.5 mEq/L",
      "EARLY TOXICITY (1.5-2.0 mEq/L): Fine hand tremor, nausea, vomiting, diarrhoea, polyuria, thirst, mild cognitive dulling",
      "MODERATE TOXICITY (2.0-2.5 mEq/L): Coarse tremor, confusion, drowsiness, ataxia, muscle twitching",
      "SEVERE TOXICITY (>2.5 mEq/L): Seizures, cardiac arrhythmias, coma, death",
      "FACTORS THAT INCREASE LITHIUM LEVELS (cause toxicity): Dehydration (most common), low sodium diet, NSAIDs (reduce renal clearance), ACE inhibitors/ARBs, thiazide diuretics, fever, vomiting, diarrhoea",
      "PATIENT TEACHING: Maintain adequate fluid intake (2-3L/day), maintain consistent sodium intake, avoid NSAIDs, report early signs of toxicity, never skip doses without consulting physician",
      "MONITORING: Serum lithium levels every 3-6 months when stable, renal function (lithium is renally excreted), thyroid function (lithium causes hypothyroidism long-term)",
      "MANAGEMENT OF TOXICITY: Stop lithium, IV fluids (sodium chloride to enhance excretion), haemodialysis for severe toxicity",
      "NCLEX tip: The most common cause of lithium toxicity is DEHYDRATION. Patients on lithium must be educated about adequate fluid intake — especially during hot weather, exercise, illness",
    ],
  },
  {
    title: "Major Depressive Disorder",
    icon: "😔",
    color: "blue",
    content: [
      "DSM-5 diagnosis: 5+ symptoms for ≥2 weeks, must include depressed mood OR anhedonia. SIG E CAPS mnemonic: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidality",
      "SUICIDE RISK: Every patient with depression must be assessed for suicidal ideation — ask directly. Prior attempt is the STRONGEST predictor of future attempt",
      "ANTIDEPRESSANTS — treatment takes 2-6 WEEKS for therapeutic effect. Do NOT stop abruptly",
      "SSRIs (first-line): Fluoxetine, sertraline, escitalopram. Side effects: nausea, insomnia, sexual dysfunction, SEROTONIN SYNDROME risk",
      "SNRIs: Venlafaxine, duloxetine. Side effects similar to SSRIs plus BP elevation",
      "TCAs: Amitriptyline, nortriptyline. Lethal in overdose — avoid in suicidal patients. Anticholinergic side effects",
      "MAOIs: Phenelzine, tranylcypromine. Multiple drug and food interactions. TYRAMINE RESTRICTION required (aged cheeses, cured meats, wine) — hypertensive crisis risk",
      "SEROTONIN SYNDROME: Caused by excess serotonergic activity. Triad: ALTERED MENTAL STATUS, AUTONOMIC INSTABILITY, NEUROMUSCULAR ABNORMALITIES (clonus, tremor, hyperreflexia). Treatment: stop serotonergic drug, cyproheptadine, benzodiazepines, cooling",
      "ECT (Electroconvulsive Therapy): Indicated for severe/refractory depression, psychotic depression, severe suicidality. Most effective treatment for severe depression. Memory loss is a common side effect",
      "NCLEX tip: Antidepressants take 2-6 weeks to work. The highest suicide risk period is the FIRST FEW WEEKS of treatment when energy improves before mood — monitor closely",
    ],
  },
  {
    title: "Anxiety Disorders",
    icon: "😰",
    color: "green",
    content: [
      "GENERALISED ANXIETY DISORDER (GAD): Excessive uncontrollable worry about multiple areas for ≥6 months. Physical symptoms: muscle tension, fatigue, sleep disturbance, irritability",
      "PANIC DISORDER: Recurrent unexpected panic attacks with persistent concern about future attacks. Symptoms: chest pain, palpitations, dyspnoea, dizziness, depersonalisation, fear of dying",
      "SOCIAL ANXIETY DISORDER: Marked fear of social situations with scrutiny by others. Avoidance of social settings",
      "SPECIFIC PHOBIA: Intense fear of specific objects/situations out of proportion to actual danger",
      "PTSD (Post-Traumatic Stress Disorder): Following trauma exposure — intrusion (flashbacks, nightmares), avoidance, negative cognitions, hyperarousal (hypervigilance, exaggerated startle response)",
      "OCD (Obsessive-Compulsive Disorder): Obsessions (intrusive thoughts) + compulsions (repetitive behaviours to reduce anxiety). Ego-dystonic (patient recognises thoughts as abnormal)",
      "PHARMACOTHERAPY: SSRIs are first-line for all anxiety disorders. Benzodiazepines for short-term acute anxiety — HIGH abuse potential, physical dependence, avoid long-term",
      "BUSPIRONE: Non-addictive anxiolytic for GAD — takes 2-4 weeks to work. No abuse potential, no sedation",
      "BETA-BLOCKERS: Propranolol for situational anxiety (performance anxiety) — reduces physical symptoms only",
      "PSYCHOLOGICAL TREATMENT: CBT is gold standard for all anxiety disorders. Exposure therapy for phobias and PTSD",
      "NCLEX tip: Benzodiazepines cause physical dependence — NEVER stop abruptly (seizure risk). Taper slowly",
    ],
  },
  {
    title: "Personality Disorders — Key Features",
    icon: "🎭",
    color: "orange",
    content: [
      "Personality disorders are enduring patterns of inner experience and behaviour deviating from cultural expectations — pervasive, inflexible, causing distress or impairment",
      "CLUSTER A (Odd/Eccentric): Paranoid PD (distrust), Schizoid PD (detachment, indifference to others), Schizotypal PD (magical thinking, odd behaviour)",
      "CLUSTER B (Dramatic/Emotional/Erratic): Antisocial PD (disregard for others' rights, lack of remorse), Borderline PD (emotional dysregulation, unstable relationships, identity disturbance, self-harm), Histrionic PD (attention-seeking), Narcissistic PD (grandiosity, lack of empathy)",
      "CLUSTER C (Anxious/Fearful): Avoidant PD (social inhibition, feelings of inadequacy), Dependent PD (excessive need to be taken care of), Obsessive-Compulsive PD",
      "BORDERLINE PERSONALITY DISORDER (BPD) — highest NCLEX yield in this category:",
      "Splitting: Seeing people/things as all good or all bad — alternating idealisation and devaluation of staff. Consistent, firm, non-punitive approach from ALL staff is essential",
      "Self-harm and suicidal behaviour: High risk — assess every visit. Distinguish between NSSI (non-suicidal self-injury as coping) and suicidal behaviour",
      "Dialectical Behaviour Therapy (DBT): Evidence-based treatment specifically for BPD — mindfulness, distress tolerance, emotion regulation, interpersonal effectiveness",
      "NURSING: Consistency, clear limits, non-punitive approach, team communication (prevent splitting), genuine therapeutic relationship",
    ],
  },
  {
    title: "Involuntary Hospitalisation and Patient Rights",
    icon: "⚖️",
    color: "blue",
    content: [
      "VOLUNTARY admission: Patient consents to hospitalisation. Retains full rights. Can request discharge at any time (though facility may initiate involuntary hold if safety concern)",
      "INVOLUNTARY admission: Patient is detained without consent under mental health legislation. Criteria: danger to self OR danger to others OR gravely disabled (unable to care for self due to mental illness)",
      "NURSE'S ROLE: Know local mental health legislation, ensure patient understands their rights, document thoroughly, provide dignified care regardless of admission status",
      "PATIENT RIGHTS in psychiatric setting: Right to humane treatment, right to communicate with family/attorney, right to refuse treatment (limits in involuntary settings), right to least restrictive environment, right to confidentiality",
      "SECLUSION and RESTRAINT: Used ONLY as last resort for safety. Requires physician order, time-limited, ongoing monitoring, documentation. NEVER as punishment",
      "DUTY TO WARN (Tarasoff principle): If a patient makes a specific, credible threat to an identifiable third party — the clinician has a DUTY to warn the intended victim AND notify law enforcement. Overrides usual confidentiality",
      "INFORMED CONSENT in psychiatry: Involuntary patients retain the right to refuse medication in most jurisdictions unless ordered by a tribunal or court",
      "NCLEX tip: Know the Tarasoff duty to warn — it overrides patient confidentiality when a specific credible threat is made against an identifiable person",
    ],
  },
];

const mnemonics = [
  {
    title: "Manic Episode Features",
    acronym: "DIGFAST",
    breakdown: ["Distractibility", "Irresponsibility", "Grandiosity", "Flight of ideas", "Activity increased", "Sleep decreased", "Talkativeness"],
    memory: "DIGFAST describes mania — Dig FAST to remember all 7 features of a manic episode!",
    color: "orange",
  },
  {
    title: "Depression Symptoms — SIG E CAPS",
    acronym: "SIGECAPS",
    breakdown: ["Sleep changes", "Interest lost (anhedonia)", "Guilt", "Energy decreased", "Concentration impaired", "Appetite changes", "Psychomotor changes", "Suicidality"],
    memory: "SIG E CAPS — prescribe Energy Capsules! 5 of 8 symptoms for ≥2 weeks = major depressive disorder!",
    color: "blue",
  },
  {
    title: "EPS Types — Antipsychotic Side Effects",
    acronym: "ADAPT",
    breakdown: ["Akathisia (restlessness)", "Dystonia (muscle spasms)", "Akinesia (slowed movement)", "Pseudoparkinsonism", "Tardive dyskinesia (late)"],
    memory: "ADAPT to antipsychotics carefully — know ALL extrapyramidal side effects especially tardive dyskinesia which is IRREVERSIBLE!",
    color: "red",
  },
  {
    title: "NMS Triad",
    acronym: "FRA",
    breakdown: ["Fever (very high)", "Rigidity (lead pipe)", "Altered consciousness"],
    memory: "FRA — Fever, Rigidity, Altered consciousness after antipsychotic = NMS EMERGENCY. Stop the drug immediately!",
    color: "red",
  },
];

const alerts = [
  { text: "TARDIVE DYSKINESIA may be IRREVERSIBLE — it develops after months/years of antipsychotic use. Prevention is key — use lowest effective dose!", severity: "high" },
  { text: "ACUTE DYSTONIA is an emergency — give benztropine (Cogentin) or diphenhydramine IM IMMEDIATELY. Torticollis and oculogyric crisis are acute dystonia!", severity: "high" },
  { text: "NMS: Fever + Rigidity + Altered consciousness after antipsychotic = STOP the drug IMMEDIATELY and arrange ICU care!", severity: "high" },
  { text: "LITHIUM toxic level >1.5 mEq/L. MOST COMMON CAUSE of toxicity = DEHYDRATION. Patients must maintain adequate fluid intake!", severity: "high" },
  { text: "CLOZAPINE requires mandatory WBC monitoring — AGRANULOCYTOSIS risk is life-threatening. Patient cannot receive clozapine without regular blood tests!", severity: "high" },
  { text: "Highest suicide risk with antidepressants = FIRST FEW WEEKS of treatment — energy improves before mood. Monitor closely during this period!", severity: "high" },
  { text: "MAOIs + tyramine-rich foods = HYPERTENSIVE CRISIS. Avoid: aged cheese, cured meats, red wine, fava beans, sauerkraut!", severity: "high" },
  { text: "Serotonin syndrome: Altered mental status + Autonomic instability + Neuromuscular abnormalities (clonus). Stop all serotonergic drugs immediately!", severity: "high" },
  { text: "Benzodiazepines: NEVER stop abruptly in dependent patients — withdrawal seizures can be FATAL. Always taper slowly!", severity: "high" },
  { text: "DUTY TO WARN (Tarasoff): Specific credible threat to identifiable person = notify victim AND law enforcement. Confidentiality is overridden!", severity: "medium" },
  { text: "Do NOT argue with hallucinations or delusions — acknowledge the patient's experience and the feelings behind it without confirming or denying content!", severity: "medium" },
  { text: "Borderline PD: Consistent, non-punitive approach from ALL staff prevents splitting. Team communication is essential!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A patient with schizophrenia tells a nurse 'The government has implanted a device in my brain to control my thoughts.' The nurse knows this is a delusion. Which response is MOST therapeutic?",
    options: [
      "'That's not possible — no one has put anything in your brain.'",
      "'I understand. Tell me more about the device.'",
      "'I can see this belief is causing you a lot of distress. Can you tell me how you've been feeling?'",
      "'Let's talk about something else — thinking about this isn't helpful.'",
    ],
    correct: 2,
    explanation: "The therapeutic approach to delusions is to acknowledge the FEELING without confirming or denying the delusional content. Option C acknowledges the patient's distress (empathetic) and redirects to the emotional experience rather than engaging with the delusional content. Do NOT argue (Option A) — this damages the therapeutic relationship and increases distress without changing the belief. Do NOT reinforce (Option B) — encouraging elaboration of delusional content deepens the delusion. Do NOT dismiss (Option D) — telling a patient not to think about a distressing belief is invalidating and non-therapeutic.",
    wrongExplanations: [
      "WRONG: Arguing against a delusion never changes the belief — delusions are fixed by definition. This damages trust and increases the patient's distress and defensiveness.",
      "WRONG: Asking for more details about the delusional content reinforces the belief and misses the therapeutic opportunity to address the underlying distress.",
      "",
      "WRONG: Dismissing the patient's experience as 'not helpful' invalidates their feelings and closes therapeutic communication. It does not address their distress.",
    ],
  },
  {
    level: "Knowledge",
    question: "A nurse is assessing a patient who has been taking haloperidol for 3 years. The patient is demonstrating repetitive lip smacking, tongue protrusion and grimacing that he cannot control. Which condition does the nurse suspect?",
    options: [
      "Akathisia — subjective restlessness from antipsychotic therapy",
      "Acute dystonia — sudden muscle contractions requiring immediate treatment",
      "Tardive dyskinesia — late-onset involuntary movements from long-term antipsychotic use",
      "Pseudoparkinsonism — tremor and rigidity from dopamine blockade",
    ],
    correct: 2,
    explanation: "TARDIVE DYSKINESIA (TD) presents with late-onset (tardive = late) involuntary repetitive movements — classically lip smacking, tongue protrusion, facial grimacing, choreiform limb movements. It appears after MONTHS TO YEARS of antipsychotic use (this patient has been on haloperidol for 3 years). TD may be IRREVERSIBLE even after stopping the medication. This distinguishes it from other EPS which are typically reversible. Management: reduce or switch antipsychotic to atypical, consider VMAT2 inhibitors (valbenazine, deutetrabenazine). Acute dystonia appears within hours to days — not years. Akathisia is subjective restlessness — not involuntary movements.",
    wrongExplanations: [
      "WRONG: Akathisia is SUBJECTIVE restlessness — the patient feels they cannot sit still and paces. It is NOT involuntary repetitive movements of the face/tongue.",
      "WRONG: Acute dystonia causes sudden sustained muscle contractions (torticollis, oculogyric crisis) — it appears within HOURS to days of starting or increasing antipsychotic, not after 3 years.",
      "",
      "WRONG: Pseudoparkinsonism mimics Parkinson's disease — tremor (pill-rolling), rigidity, bradykinesia, shuffling gait. It is NOT facial/tongue repetitive movements.",
    ],
  },
  {
    level: "Application",
    question: "A patient with bipolar disorder on lithium 900mg/day presents to the clinic complaining of nausea, vomiting, diarrhoea and a coarse hand tremor. His serum lithium level drawn this morning is 2.1 mEq/L. He mentions he had severe diarrhoea for 3 days last week and didn't drink much. What is the nurse's PRIORITY action?",
    options: [
      "Reassure the patient — nausea and tremor are common lithium side effects that will resolve",
      "Administer the next scheduled lithium dose with food to reduce gastrointestinal symptoms",
      "Hold lithium, notify the physician immediately, ensure IV access and prepare for possible hospitalisation",
      "Advise the patient to reduce lithium to 600mg/day and recheck levels in 1 week",
    ],
    correct: 2,
    explanation: "This patient has MODERATE LITHIUM TOXICITY — serum level 2.1 mEq/L (toxic threshold >1.5 mEq/L) with symptoms including coarse tremor (escalated from fine tremor of therapeutic levels), nausea, vomiting and confusion risk. The cause is dehydration from diarrhoea — the most common precipitant of lithium toxicity. PRIORITY actions: HOLD lithium immediately, NOTIFY physician urgently, establish IV access (IV normal saline to enhance renal lithium excretion), monitor cardiac and neurological status, prepare for possible hospitalisation for IV rehydration and monitoring. Administering the next dose (Option B) would worsen toxicity. Independent dose reduction (Option D) is outside nursing scope and inadequate — this requires urgent medical management.",
    wrongExplanations: [
      "WRONG: A lithium level of 2.1 mEq/L is TOXIC (>1.5 mEq/L = toxic). Coarse tremor at this level is a sign of moderate toxicity — NOT a routine side effect to reassure away.",
      "WRONG: Administering the next lithium dose when the patient is already toxic would dangerously increase the serum level further. The drug must be HELD.",
      "",
      "WRONG: Independently adjusting a patient's medication dose is outside nursing scope. This patient needs urgent medical assessment — not a nurse-directed dose reduction.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a patient admitted voluntarily for severe depression. On day 3 of treatment with sertraline, the patient appears more energetic and tells the nurse 'I feel a bit better today — I think things might be okay.' The nurse reviews the chart and notes the patient has a history of a serious suicide attempt 6 months ago. What is the nurse's PRIORITY concern?",
    options: [
      "The patient is improving — document the positive change and continue current plan",
      "The patient may be experiencing early antidepressant activation — this period carries INCREASED suicide risk as energy returns before mood fully improves",
      "The patient is ready for discharge — improvement on day 3 indicates good medication response",
      "The sertraline is working unusually quickly — notify the physician of potential serotonin syndrome",
      ],
    correct: 1,
    explanation: "This is a HIGH-RISK clinical situation. The FIRST FEW WEEKS of antidepressant treatment — particularly when psychomotor retardation (slowed movement, low energy) begins to lift — carry ELEVATED suicide risk. Energy returns before mood fully improves. A patient who previously lacked the energy to act on suicidal thoughts may now have just enough energy to attempt suicide while still feeling hopeless. Key risk factors here: PREVIOUS SERIOUS SUICIDE ATTEMPT (strongest predictor), early antidepressant initiation, apparent energy improvement. The nurse must: conduct a thorough suicide risk assessment NOW, increase monitoring, communicate concerns to the multidisciplinary team and do NOT reduce supervision based on apparent improvement alone.",
    wrongExplanations: [
      "WRONG: Simply documenting and continuing misses a critical safety window. Apparent improvement in the first week of antidepressants in a patient with prior serious attempt requires intensified, not relaxed, monitoring.",
      "",
      "WRONG: Day 3 of sertraline is far too early for full therapeutic response (takes 2-6 weeks). Early energy increase is a known risk period — NOT a discharge indicator.",
      "WRONG: Serotonin syndrome presents with altered mental status, autonomic instability and neuromuscular abnormalities (clonus, tremor) — not simply 'feeling a bit better.' This is antidepressant activation, not serotonin syndrome.",
    ],
  },
  {
    level: "Application",
    question: "A patient on an inpatient psychiatric unit with borderline personality disorder has been alternating between telling staff Nurse A is 'the only one who understands me' and that Nurse B is 'cruel and incompetent.' The patient has convinced two nurses to bend unit rules for her. The charge nurse calls a team meeting. What is the MOST important goal of this meeting?",
    options: [
      "Determine which nurse the patient trusts most and assign her as the primary nurse",
      "Establish consistent, unified limits and approach across ALL staff to prevent splitting",
      "Confront the patient about her manipulative behaviour and the consequences",
      "Restrict the patient's ward privileges until the splitting behaviour stops",
    ],
    correct: 1,
    explanation: "SPLITTING is the hallmark defence mechanism of borderline personality disorder — the patient unconsciously divides the world into all-good and all-bad. When staff respond differently to splitting (some bend rules, some do not), it reinforces the behaviour and fragments the therapeutic environment. The MOST IMPORTANT intervention is CONSISTENT, UNIFIED TEAM APPROACH: all staff maintain the same clear, firm and non-punitive limits. The team meeting achieves this by: reviewing current split behaviours, establishing consistent responses to rule-bending requests, ensuring all staff communicate any boundary violations to the team, and approaching the patient with consistent warmth and firmness. Confronting the patient as 'manipulative' (Option C) is stigmatising — splitting is an unconscious defence, not deliberate manipulation. Punishment (Option D) increases distress and self-harm risk.",
    wrongExplanations: [
      "WRONG: Assigning a single 'trusted' nurse reinforces splitting — the patient needs to experience that ALL staff can be trusted, not that one person is special and others are not.",
      "",
      "WRONG: Labelling the patient's behaviour as 'manipulative' and confronting it as such is stigmatising and damaging to the therapeutic relationship. Splitting is a defensive response to fear of abandonment — it requires consistent, non-punitive management.",
      "WRONG: Restricting privileges as punishment for splitting behaviour increases the patient's sense of abandonment and rejection — the core fear driving the behaviour. This approach worsens outcomes.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is working on a psychiatric unit. A patient with schizophrenia on clozapine tells the nurse he has been feeling tired and has had a sore throat and fever for 3 days. He did not report it sooner because 'I just thought it was a cold.' His last WBC count was 3 weeks ago (normal). What is the nurse's PRIORITY concern and action?",
    options: [
      "Assess for clozapine side effects — fever is common with antipsychotics and usually benign",
      "Immediately notify the physician, hold clozapine and arrange urgent FBC — sore throat and fever in a clozapine patient may indicate agranulocytosis",
      "Encourage oral fluids and rest — likely viral illness, repeat WBC at next scheduled monitoring",
      "Administer prescribed antipyretic and notify the physician at the next scheduled round",
    ],
    correct: 1,
    explanation: "CLOZAPINE-INDUCED AGRANULOCYTOSIS is a life-threatening emergency. Clozapine causes agranulocytosis (dangerously low neutrophils) in approximately 1-2% of patients — this is why mandatory weekly/biweekly WBC monitoring is required. Sore throat and fever are CLASSIC EARLY SIGNS of agranulocytosis — the patient's immune system cannot fight infection due to absent neutrophils. PRIORITY: HOLD clozapine IMMEDIATELY, notify physician URGENTLY, arrange STAT FBC with differential, prepare for possible antibiotic therapy and haematology review. If neutrophils are critically low — clozapine is permanently discontinued and the patient is registered in the clozapine non-rechallenge database. Every hour without action increases infection severity. This patient has been symptomatic for 3 days — time is critical.",
    wrongExplanations: [
      "WRONG: Fever in a clozapine patient is NOT dismissed as 'usually benign' — it is a RED FLAG for agranulocytosis until proven otherwise. This is a potentially life-threatening emergency.",
      "",
      "WRONG: Waiting for next scheduled monitoring (3 weeks away) when the patient has been symptomatic for 3 days could result in fatal infection. STAT FBC is required immediately.",
      "WRONG: Treating symptoms without addressing the possible agranulocytosis is dangerous. Administering antipyretics delays recognition of the underlying crisis. The physician must be notified urgently NOW, not at the next scheduled round.",
    ],
  },
  {
    level: "Advanced",
    question: "A patient with a history of bipolar I disorder was admitted 4 days ago in a manic state. He was started on lithium and quetiapine. Today his lithium level is 0.9 mEq/L. He is sleeping 6 hours per night (up from 2 hours), eating regular meals and his speech is less pressured. He is requesting discharge to 'get back to my business — I have deals to close.' He insists he is completely well. What is the nurse's MOST clinically significant concern?",
    options: [
      "Lithium level 0.9 mEq/L is subtherapeutic — increase the dose before discharge",
      "The patient is showing clinical improvement — support discharge planning with outpatient follow-up",
      "Insight is often impaired in bipolar disorder — the patient's eagerness to return to activities may reflect residual manic thinking and poor insight rather than genuine recovery",
      "Six hours of sleep indicates he is not yet stable — discharge requires 8 hours of sleep minimum",
    ],
    correct: 2,
    explanation: "INSIGHT IMPAIRMENT is a core feature of mania — patients frequently feel completely well (even superior) during or immediately following a manic episode, while objectively remaining symptomatic or at high relapse risk. Key concerns here: 'I have deals to close' suggests residual goal-directed impulsive behaviour consistent with hypomania/mania. Four days is a SHORT time to stabilise from full mania. The urgency to leave and pursue business is a yellow flag for ongoing manic cognition. The nurse should: document objective clinical observations, communicate concerns to the physician, assess for residual manic symptoms systematically (DIGFAST), explore the patient's understanding of his illness and relapse prevention plan, and advocate for appropriate length of stay. Lithium 0.9 mEq/L is WITHIN therapeutic range (0.6-1.2). Six hours of sleep is actually a significant improvement from 2 hours.",
    wrongExplanations: [
      "WRONG: 0.9 mEq/L is well within the therapeutic range (0.6-1.2 mEq/L). It does not need to be increased. Lithium levels are not a reason to delay discharge alone.",
      "WRONG: While improvement is occurring, the urgency to 'close deals' after 4 days of manic episode treatment is a red flag for residual manic thinking and impaired insight — not a sign of readiness for discharge.",
      "",
      "WRONG: There is no clinical guideline requiring exactly 8 hours of sleep before discharge. Six hours is a significant and meaningful improvement from the 2 hours during active mania. Sleep alone is not the discharge criterion.",
    ],
  },
  {
    level: "Advanced",
    question: "During an inpatient psychiatric group therapy session, a patient suddenly discloses that he has a specific plan to harm his former employer upon discharge — including the method, timing and location. He has the means available. The nurse is the only staff member present. What is the nurse's CORRECT sequence of actions?",
    options: [
      "Maintain confidentiality — what patients say in group therapy is confidential. Document the disclosure and discuss at the next team meeting",
      "Immediately end the group session safely, ensure the patient's safety on the unit, notify the treating physician and team, document the threat and initiate procedures to notify the intended victim and law enforcement",
      "Speak privately with the patient to assess whether the threat is serious before escalating",
      "Ask other group members to leave and conduct a one-to-one risk assessment with the patient",
    ],
    correct: 1,
    explanation: "This is a DUTY TO WARN situation (Tarasoff principle). When a patient makes a SPECIFIC, CREDIBLE THREAT against an IDENTIFIABLE PERSON with available MEANS — the clinician has a legal and ethical obligation to: break confidentiality, warn the intended victim, notify law enforcement AND notify the clinical team. This obligation OVERRIDES therapeutic confidentiality. The nurse's immediate actions: END the group safely and without alarming other patients, ensure the patient is contained safely on the unit, IMMEDIATELY notify the treating physician and team, document the exact words of the threat, and initiate the facility's duty-to-warn protocol (notifying the employer and police). Confidentiality does NOT apply to specific credible threats to identifiable persons. Assessing alone (Options C and D) without notifying the team first delays the mandatory reporting obligation.",
    wrongExplanations: [
      "WRONG: Confidentiality does NOT apply to specific credible threats to identifiable persons — this is one of the most established exceptions to therapeutic confidentiality (Tarasoff principle). Waiting until the next team meeting could allow the threat to be carried out.",
      "",
      "WRONG: The nurse should not handle this alone — the physician and team must be notified IMMEDIATELY. Solo private assessment delays the mandatory legal obligation and puts both the nurse and the intended victim at risk.",
      "WRONG: While private risk assessment is an appropriate clinical skill, the specific credible nature of this threat (method, timing, location, available means) triggers mandatory team notification and duty-to-warn BEFORE individual counselling. Asking others to leave creates a one-on-one situation without appropriate support.",
    ],
  },
  {
    level: "Advanced",
    question: "A 24-year-old patient with a diagnosis of schizophrenia has been admitted involuntarily. He is stable on haloperidol but tells the nurse he does not want to take the medication: 'It makes me feel like a zombie and I don't think I'm sick.' He asks the nurse 'Do I have to take this medication?' What is the MOST accurate and ethically appropriate response?",
    options: [
      "'Yes — you are on an involuntary order so you must take all medications prescribed'",
      "'No — you always have the right to refuse any medication regardless of your admission status'",
      "'Your right to refuse medication depends on the specific provisions of your involuntary order. In most jurisdictions, involuntary admission alone does not remove the right to refuse medication — a separate treatment order or tribunal decision may be required. I will discuss this with the team and advocate for your concerns to be heard'",
      "'The medication is helping you — you should continue taking it because it is in your best interest'",
    ],
    correct: 2,
    explanation: "This question tests knowledge of MENTAL HEALTH LAW and PATIENT RIGHTS. A critical distinction: INVOLUNTARY ADMISSION (detention) does NOT automatically equal the right to FORCE MEDICATION in most jurisdictions. Most modern mental health legislation separates the right to detain from the right to treat without consent. A SEPARATE TREATMENT ORDER (sometimes called a community treatment order, tribunal order or authorised treatment order) is typically required before medication can be administered over a patient's explicit refusal. The nurse must: provide accurate information about the legal situation, acknowledge the patient's experience of side effects (zombie feeling is real — may indicate a dose or medication change is warranted), advocate for the patient's concerns to be heard by the team and tribunal, and facilitate a review process. Option A overstates the effect of involuntary admission. Option B understates it in cases where a treatment order IS in place.",
    wrongExplanations: [
      "WRONG: Involuntary admission alone does NOT automatically authorise forced medication in most jurisdictions. A separate treatment order is typically required — the nurse must not misrepresent the patient's legal rights.",
      "WRONG: This overstates the patient's rights — in some cases where a treatment order is in place, medication CAN be administered over objection. The answer depends on the specific legal provisions applicable.",
      "",
      "WRONG: 'It's in your best interest' is paternalistic and dismisses the patient's legitimate concerns about side effects. This shuts down therapeutic communication and fails to address the legal question the patient asked.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse receives handover for a patient with major depressive disorder and chronic suicidal ideation. The outgoing nurse reports 'She always says she wants to die — it's just her baseline, she never acts on it.' The patient has been on the ward for 3 weeks. During the nurse's assessment, the patient says 'I've finally made my decision. I feel calm about it now.' She refuses to give more details. What is the nurse's MOST appropriate response?",
    options: [
      "Document 'patient at baseline chronic suicidal ideation' — the outgoing nurse confirmed this is her usual presentation",
      "The statement 'I've finally made my decision' and new calmness in a chronically depressed patient represent HIGH-RISK warning signs — conduct immediate safety assessment, remove means, notify physician urgently and initiate enhanced observations",
      "Encourage the patient to talk about her feelings — she may be processing a life decision unrelated to suicide",
      "Reassure the patient and schedule a social work review tomorrow morning",
    ],
    correct: 1,
    explanation: "This scenario tests the ability to recognise ACUTE HIGH-RISK WARNINGS within CHRONIC SUICIDAL IDEATION. Two critical RED FLAGS: 'I've finally made my decision' — suggesting a shift from passive ideation to a concrete decision (likely a plan), AND sudden CALMNESS in a chronically depressed patient — paradoxical calm often indicates the patient has resolved their ambivalence by deciding to act on suicidal intent (the distress is gone because the decision is made). Chronic suicidal ideation does NOT mean the current presentation is 'baseline.' The nurse must: conduct immediate comprehensive suicide risk assessment (Columbia C-SSRS), remove access to means on the unit, notify the physician urgently, initiate enhanced observations (continuous 1:1 if risk confirmed), document thoroughly and never accept a colleague's normalisation of a patient's suicidal statements as a reason to reduce vigilance.",
    wrongExplanations: [
      "WRONG: 'Baseline' chronic suicidal ideation does NOT mean every statement is equally low risk. 'I've finally made my decision' + new calmness represents an ACUTE CHANGE that requires immediate reassessment. This is a critical nursing error that leads to preventable deaths.",
      "",
      "WRONG: While empathetic exploration is appropriate, this statement in the context of chronic suicidal ideation and new calmness requires IMMEDIATE safety assessment first — not later therapeutic exploration.",
      "WRONG: Scheduling a social work review for tomorrow is completely inadequate for an acute high-risk presentation. This patient requires immediate physician notification and enhanced observations NOW.",
    ],
  },
];

const clinicalPearls = [
  "The most dangerous word in psychiatric nursing is 'baseline.' When a colleague says 'she always says that' or 'that's just his baseline,' that is often the moment before a tragedy. Chronic suicidal ideation still requires ongoing assessment — especially when there is ANY change in presentation.",
  "Clozapine is the most effective antipsychotic and the one requiring the most vigilance — a sore throat in a clozapine patient is a haematological emergency until proven otherwise. Every nurse caring for a clozapine patient must know the agranulocytosis protocol.",
  "Lithium's therapeutic window is the narrowest of any psychiatric medication. The most common cause of toxicity is dehydration — summer, exercise, fever, diarrhoea. Every lithium patient needs to know: drink more water, tell your doctor before starting NSAIDs, and know your early toxicity signs.",
  "Tardive dyskinesia haunts the patient long after the antipsychotic is stopped. This is the reason to always use the lowest effective antipsychotic dose and to monitor for abnormal movements at every visit. Document baseline movement patterns before starting medication.",
  "Splitting in borderline PD is not manipulation — it is a survival strategy that developed in response to unpredictable early caregiving. When a team responds with consistent, warm firmness, most patients can tolerate the anxiety of not splitting. Punitive responses make it worse.",
  "The Tarasoff duty to warn is not optional and not discretionary when the criteria are met. Specific threat + identifiable victim + available means = notify the intended victim and law enforcement regardless of the therapeutic relationship consequences.",
  "The first weeks of antidepressant treatment are the most dangerous for a severely depressed patient with suicidal ideation. The sequence is: energy returns first, mood follows. A patient who seemed too depleted to act now has the energy to carry out a plan they have held throughout their depression.",
];

export default function MentalHealthPage() {
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
            <h1 className="font-black text-base text-gray-900">🧠 Mental Health</h1>
            <p className="text-xs text-gray-500">Psychosocial Integrity • High Yield ⭐⭐⭐</p>
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
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-6">
              <p className="text-purple-700 text-sm leading-relaxed font-medium">
                🧠 Mental health is high yield on NCLEX. Master antipsychotic side effects, lithium toxicity, mood stabilisers and therapeutic communication with psychiatric patients!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most common NCLEX traps on Mental Health — study these carefully!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Mental Health!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review EPS types, lithium toxicity and therapeutic responses." :
                        "Keep studying! Focus on antipsychotic side effects, mood stabilisers and therapeutic communication."}
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