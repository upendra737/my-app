"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Crisis Theory",
    icon: "🆘",
    color: "blue",
    content: [
      "A CRISIS is a temporary state of disequilibrium in which a person's usual coping mechanisms are insufficient to manage a perceived threat or overwhelming stressor",
      "Crises are TIME-LIMITED — typically resolve within 4-6 weeks, one way or another. The resolution may be adaptive (growth) or maladaptive (deterioration)",
      "KEY PRINCIPLE: A crisis is not the event itself — it is the PERSON'S PERCEPTION of the event relative to their available resources. The same event causes crisis in one person but not another",
      "BALANCING FACTORS (Aguilera): Three factors determine whether a crisis develops: 1) Realistic perception of the event, 2) Adequate situational support, 3) Adequate coping mechanisms. Deficiency in any factor → crisis",
      "Every crisis contains both DANGER (threat to stability) and OPPORTUNITY (potential for growth, resilience and learning)",
      "CRISIS INTERVENTION: Time-limited, focused, active intervention aimed at restoring pre-crisis functioning. Goal is NOT psychotherapy — it is stabilisation and return to baseline",
      "NCLEX heavily tests: Suicide risk assessment, crisis intervention steps, types of crisis, de-escalation of agitation and the nurse's priority actions",
    ],
  },
  {
    title: "Types of Crisis",
    icon: "📊",
    color: "purple",
    content: [
      "MATURATIONAL (Developmental) CRISIS: Expected life transitions that create stress — going to school, puberty, marriage, parenthood, retirement, death of spouse. Everyone faces these but not everyone develops a crisis response",
      "SITUATIONAL CRISIS: Unexpected, external events — job loss, divorce, diagnosis of serious illness, accident, natural disaster, death of a loved one. The event is the precipitant",
      "ADVENTITIOUS (Social/Community) CRISIS: Uncommon, unplanned, often mass events — natural disasters (earthquakes, floods), acts of terrorism, mass shootings, pandemics. Affects entire communities simultaneously",
      "PSYCHIATRIC EMERGENCY: Acute exacerbation of mental illness creating immediate danger — active psychosis with command hallucinations, acute suicidal intent with plan and means, acute homicidal ideation",
      "TRAUMATIC CRISIS: Event involves actual or threatened death, serious injury or sexual violence — war, assault, rape, torture, witnessing violence. Overlaps with PTSD development",
      "NURSE ASSESSMENT of crisis type guides intervention: Maturational → normalise and build coping. Situational → problem-solve and support. Adventitious → community resources and debriefing. Psychiatric → safety and stabilisation",
      "NCLEX tip: Situational crisis is most commonly tested — recognise the precipitating event and apply the 6-step crisis intervention model",
    ],
  },
  {
    title: "6-Step Crisis Intervention Model (Roberts)",
    icon: "🔢",
    color: "green",
    content: [
      "Step 1 — ASSESS LETHALITY AND SAFETY: Is the person safe RIGHT NOW? Is there immediate danger to self or others? This is ALWAYS the first step — safety supersedes all other assessment",
      "Step 2 — ESTABLISH RAPPORT AND RELATIONSHIP: Build therapeutic alliance rapidly. 'I'm here. I want to help you. Tell me what's happening.' Warmth, genuineness, presence",
      "Step 3 — IDENTIFY MAJOR PROBLEMS: What is the precipitating event? What happened in the past 24-48 hours? Focus on the HERE AND NOW — not history",
      "Step 4 — DEAL WITH FEELINGS AND PROVIDE SUPPORT: Actively listen, validate, reflect feelings. Allow expression of emotion. Do NOT rush to problem-solving before feelings are acknowledged",
      "Step 5 — EXPLORE ALTERNATIVES AND PROBLEM-SOLVE: What has the person tried? What resources are available? Generate options collaboratively — do NOT impose solutions",
      "Step 6 — DEVELOP AN ACTION PLAN AND FOLLOW-UP: Concrete, achievable, time-specific plan. Safety contract if suicidal ideation present. Clear follow-up arrangement. Give crisis line numbers",
      "MEMORY: SAFE — Safety first, Alliance building, Feelings before facts, Explore and plan",
      "IMPORTANT: These steps are sequential but fluid — a trained crisis worker moves back and forth between steps as the situation requires",
      "The NURSE as crisis interventionist: Calm, focused, authoritative (not authoritarian), present, problem-solving orientation",
    ],
  },
  {
    title: "Suicide Risk Assessment — Core Principles",
    icon: "💙",
    color: "red",
    content: [
      "Suicide is the SECOND leading cause of death in Australians aged 15-44. Nurses are often the first to assess risk",
      "ASK DIRECTLY: 'Are you thinking about suicide?' Direct questioning does NOT increase risk — it is the ONLY reliable way to assess. Asking gives permission to disclose",
      "RISK FACTORS vs PROTECTIVE FACTORS: Risk factors increase probability. Protective factors reduce it. Assessment must evaluate BOTH",
      "HIGH RISK factors: Previous attempt (strongest predictor), current plan, access to means, male sex, older age, social isolation, chronic pain/illness, recent major loss, substance use, hopelessness (stronger predictor than depression alone), recent psychiatric discharge",
      "PROTECTIVE FACTORS: Reasons for living, social support, religious/cultural beliefs against suicide, responsibility for children, therapeutic relationship, future orientation, problem-solving ability",
      "HOPELESSNESS: Beck's research shows hopelessness is a STRONGER predictor of suicidal behaviour than depression severity — always assess",
      "THE ATTEMPT-TO-COMPLETION RATIO: Women attempt more often; men die more often (more lethal methods). Both genders require equal assessment intensity",
      "CLINICAL JUDGEMENT: No risk assessment tool replaces clinical judgement. Tools inform — they do not replace the assessment",
      "CHRONIC vs ACUTE SUICIDAL IDEATION: Chronic ideation requires monitoring; ACUTE ideation with plan/intent requires IMMEDIATE action. Never normalise ANY suicidal statement",
    ],
  },
  {
    title: "SAD PERSONS Scale and Columbia C-SSRS",
    icon: "📋",
    color: "purple",
    content: [
      "SAD PERSONS scale: Mnemonic for suicide risk factors — widely taught, useful for systematic assessment",
      "S — Sex (male = higher completed suicide risk)",
      "A — Age (elderly and adolescents at higher risk)",
      "D — Depression (primary psychiatric risk factor)",
      "P — Previous attempt (STRONGEST single predictor)",
      "E — Ethanol/substance use (lowers inhibitions, impairs judgement)",
      "R — Rational thinking loss (psychosis, confusion, impaired reality testing)",
      "S — Social support lacking (isolation increases risk)",
      "O — Organised plan (specificity of method, time, place increases risk)",
      "N — No spouse/partner (isolation — no protective relationship)",
      "S — Sickness (chronic pain, terminal illness, debilitating conditions)",
      "COLUMBIA SUICIDE SEVERITY RATING SCALE (C-SSRS): Gold standard validated tool. Assesses: ideation type (passive wish to be dead → active ideation with plan and intent), ideation intensity, behaviour (past attempts, aborted attempts, preparatory behaviour)",
      "C-SSRS categories: Ideation Types 1-5 (1=wish to be dead, 5=active ideation with plan and intent and some intent to act). Behaviour (actual attempt, interrupted attempt, aborted attempt, preparatory acts)",
      "NCLEX tip: Know SAD PERSONS components and the principle that PREVIOUS ATTEMPT is the strongest single predictor of future attempt",
    ],
  },
  {
    title: "Suicide Risk Stratification and Nursing Response",
    icon: "🚦",
    color: "red",
    content: [
      "LOW RISK: Passive ideation ('I wish I were dead') without plan, intent or means. Protective factors present. Action: Therapeutic relationship, safety planning, increase support, follow-up",
      "MODERATE RISK: Active ideation without specific plan OR plan without intent. Some risk factors present, some protective factors. Action: Frequent assessment, notify physician, consider voluntary admission, remove access to means",
      "HIGH RISK: Active ideation WITH specific plan AND intent AND access to means. OR previous attempt with current ideation. Action: DO NOT LEAVE ALONE, notify physician IMMEDIATELY, initiate psychiatric evaluation, consider involuntary admission if refuses voluntary",
      "IMMINENT RISK (Psychiatric Emergency): Patient in immediate danger — actively attempting, has weapon, has taken overdose. Action: Call emergency services (000/911), DO NOT LEAVE, remove weapons if safe to do so, administer antidote if overdose",
      "ENVIRONMENTAL SAFETY: Remove ligature points, sharps, medications, belts, electrical cords. Search room and belongings. 1:1 observation for high-risk patients",
      "SAFETY PLAN (not safety contract): Collaboratively developed document listing: warning signs, internal coping strategies, people to contact, professional contacts and emergency numbers. Evidence-based — more effective than 'no-harm contracts'",
      "No-harm contracts: NOT recommended — create false sense of security, not evidence-based. Safety PLANNING (active collaborative process) replaces contracts",
      "DOCUMENTATION: Document exact words of suicidal statements in quotation marks, risk level, assessment findings, interventions, physician notification and patient response",
    ],
  },
  {
    title: "Crisis De-escalation — Verbal Techniques",
    icon: "🗣️",
    color: "orange",
    content: [
      "De-escalation is the FIRST intervention for an agitated or potentially violent patient — before any physical or chemical restraint",
      "NURSE SAFETY FIRST: Assess for weapons before approaching. Maintain safe distance (arm's length minimum). Position near exit. Have backup nearby but not crowding",
      "CALM PRESENCE: Speak slowly, clearly, in a low calm voice. Your own calm is contagious — regulated nervous system to regulated nervous system",
      "REDUCE STIMULI: Lower voices, reduce lighting, ask non-essential people to leave, reduce noise",
      "APPROACH: Non-threatening body language — open hands, slightly turned body (not squared-on confrontation), eye level (sit if safe), appropriate personal space",
      "VERBAL TECHNIQUES: Use patient's preferred name, acknowledge feelings ('I can see you're very upset'), validate ('It makes sense that you're angry given what happened'), offer choices (restores sense of control), avoid ultimatums and commands",
      "ACTIVE LISTENING: Reflect content and emotion, avoid interrupting, paraphrase to show understanding",
      "AVOID: Arguing, challenging, minimising, direct eye contact if culturally inappropriate, crowding, touching without permission",
      "LIMIT SETTING: Firm, clear, non-punitive. 'I need you to lower your voice. I want to help you but I need to feel safe to do that.'",
      "When to STOP de-escalation and call for help: Weapon present, patient escalating despite efforts, clear intent to harm staff, loss of rational communication",
    ],
  },
  {
    title: "Grief and Loss — Crisis of Bereavement",
    icon: "🕊️",
    color: "blue",
    content: [
      "Grief is a normal, universal response to loss — not a pathology. It can become a crisis when coping resources are overwhelmed",
      "KÜBLER-ROSS STAGES (1969): Denial, Anger, Bargaining, Depression, Acceptance — DABDA",
      "IMPORTANT: Stages are NOT linear, sequential or time-limited. People move back and forth between stages. Not everyone experiences all stages. The model describes common experiences — NOT a prescription",
      "DENIAL: Shock, disbelief, numbness — protective function. 'This can't be real.'",
      "ANGER: Directed at self, others, God, healthcare staff. 'Why did this happen? Who is responsible?' Do NOT take personally",
      "BARGAINING: 'What if...' 'If only...' attempts to undo or negotiate the loss. Often involves guilt",
      "DEPRESSION: Sadness, withdrawal, crying, despair. Normal response to loss — distinguish from clinical depression requiring treatment",
      "ACCEPTANCE: Coming to terms with the reality. NOT happiness — acknowledgement and adaptation",
      "COMPLICATED GRIEF (Prolonged Grief Disorder): Persistent, intense grief lasting >12 months (6 months in DSM-5) with functional impairment. Requires professional treatment",
      "ANTICIPATORY GRIEF: Grieving before an expected loss (terminal diagnosis) — normal and common. Family members may reach acceptance before the patient",
      "DISENFRANCHISED GRIEF: Grief not acknowledged by society — loss of a pet, miscarriage, estranged relationship, suicide loss. Validate — all loss deserves acknowledgement",
    ],
  },
  {
    title: "Post-Traumatic Stress Disorder (PTSD)",
    icon: "⚡",
    color: "purple",
    content: [
      "PTSD develops after exposure to actual or threatened death, serious injury or sexual violence — directly experienced, witnessed or heard about happening to a close person",
      "DSM-5 CRITERIA — four symptom clusters:",
      "INTRUSION: Flashbacks (reliving the trauma as if happening NOW), nightmares, intrusive memories, psychological/physiological distress on exposure to trauma cues",
      "AVOIDANCE: Avoiding trauma-related thoughts/feelings AND avoiding external reminders (places, people, activities, situations)",
      "NEGATIVE COGNITIONS/MOOD: Persistent negative beliefs ('I am bad, the world is dangerous'), distorted blame, persistent negative emotions, diminished interest, feeling detached, inability to experience positive emotions",
      "HYPERAROUSAL: Hypervigilance, exaggerated startle response, sleep disturbance, irritability/anger outbursts, concentration difficulties, reckless/self-destructive behaviour",
      "Duration: >1 month. Causes clinically significant distress or functional impairment",
      "NURSING APPROACH: Safety first (PTSD patients may misinterpret care as threat), establish trust slowly, avoid startling, explain all procedures, allow control, trauma-informed care",
      "TREATMENT: First-line = trauma-focused CBT (Prolonged Exposure, Cognitive Processing Therapy). EMDR (Eye Movement Desensitisation and Reprocessing). Pharmacotherapy: SSRIs (sertraline, paroxetine FDA approved)",
      "TRAUMA-INFORMED CARE: Recognise the widespread impact of trauma, integrate knowledge into practice, avoid re-traumatisation, focus on safety, trustworthiness, choice, collaboration and empowerment",
    ],
  },
  {
    title: "Community Crisis Resources and Intervention",
    icon: "🏘️",
    color: "green",
    content: [
      "CRISIS LINES: Lifeline Australia 13 11 14 (24/7), Suicide Call Back Service 1300 659 467, Beyond Blue 1300 22 4636, Kids Helpline 1800 55 1800",
      "MENTAL HEALTH CRISIS TEAMS (ACT/CATT): Mobile assessment and treatment teams — assessment in the community, alternatives to ED presentation",
      "EMERGENCY DEPARTMENTS: For psychiatric emergencies when community support is insufficient",
      "INPATIENT PSYCHIATRIC UNITS: For stabilisation when outpatient management is unsafe",
      "CRITICAL INCIDENT STRESS DEBRIEFING (CISD): Structured group process within 24-72 hours of a traumatic event — for first responders, healthcare workers, communities. Controversial evidence base — may be harmful if mandatory",
      "PSYCHOLOGICAL FIRST AID (PFA): Evidence-based framework for acute disaster response — safety, calming, connectedness, self-efficacy, hope. Does NOT involve forcing emotional disclosure",
      "RESILIENCE: The ability to recover from adversity. Nurses can strengthen resilience by: fostering connections, normalising distress, building problem-solving, encouraging self-care",
      "NURSE SELF-CARE in crisis work: Secondary traumatic stress and compassion fatigue are occupational hazards. Regular supervision, peer support, self-awareness and professional help-seeking are essential",
      "DOCUMENTATION in crisis: All assessments, risk level, interventions, safety plans, referrals and follow-up arrangements must be documented comprehensively",
    ],
  },
  {
    title: "Disaster Response and Mass Casualty Mental Health",
    icon: "🌪️",
    color: "orange",
    content: [
      "Disasters create COMMUNITY-WIDE crisis — affecting survivors, witnesses, first responders and the broader community simultaneously",
      "PHASES OF DISASTER RESPONSE (psychological):",
      "HEROIC PHASE: Immediate response — altruism, adrenaline, community solidarity. Psychological symptoms suppressed",
      "HONEYMOON PHASE: Days to weeks — optimism, community bonding, belief help is coming. 'We got through this together'",
      "DISILLUSIONMENT PHASE: Weeks to months — realisation of full losses, bureaucratic frustration, community conflict, depression, anxiety, PTSD emerge",
      "RECONSTRUCTION PHASE: Months to years — rebuilding, integration of experience, new normal",
      "MOST VULNERABLE POPULATIONS in disaster: Children (developmental impact), elderly (mobility limitations, loss of routine), those with pre-existing mental illness, first responders (cumulative trauma), those who lost family members",
      "NURSE'S ROLE in disaster mental health: Psychological First Aid (not formal therapy), triage for acute psychiatric symptoms, connect to resources, model calm and purposeful action, self-care",
      "ACUTE STRESS REACTION: Normal response in first 4 weeks after trauma — dissociation, intrusion, avoidance, arousal. Most people recover naturally without intervention",
      "WHEN TO REFER: Symptoms persisting beyond 4 weeks (consider PTSD), inability to function, active suicidal ideation, psychotic symptoms, severe substance use as coping",
    ],
  },
];

const mnemonics = [
  {
    title: "SAD PERSONS Suicide Risk Factors",
    acronym: "SADPERSONS",
    breakdown: ["Sex (male)", "Age (adolescent/elderly)", "Depression", "Previous attempt", "Ethanol/substances", "Rational thinking loss", "Social support lacking", "Organised plan", "No spouse/partner", "Sickness (chronic)"],
    memory: "SAD PERSONS — know all 10 risk factors. Previous attempt is the STRONGEST single predictor of future attempt!",
    color: "red",
  },
  {
    title: "Kübler-Ross Grief Stages",
    acronym: "DABDA",
    breakdown: ["Denial", "Anger", "Bargaining", "Depression", "Acceptance"],
    memory: "DABDA — Denial, Anger, Bargaining, Depression, Acceptance. NOT linear — people move back and forth between stages!",
    color: "blue",
  },
  {
    title: "Balancing Factors in Crisis (Aguilera)",
    acronym: "PCS",
    breakdown: ["Perception of event (realistic?)", "Coping mechanisms (adequate?)", "Situational support (available?)"],
    memory: "PCS — Perception, Coping, Support. Deficiency in ANY ONE of these three factors can tip a stressor into a full crisis!",
    color: "purple",
  },
  {
    title: "PTSD Symptom Clusters",
    icon: "IANA",
    acronym: "IANA",
    breakdown: ["Intrusion (flashbacks, nightmares)", "Avoidance (thoughts and external reminders)", "Negative cognitions/mood", "Arousal (hypervigilance, startle)"],
    memory: "I Am Not Alright — Intrusion, Avoidance, Negative mood, Arousal. All four clusters needed for PTSD diagnosis!",
    color: "purple",
  },
];

const alerts = [
  { text: "ASKING about suicide does NOT increase risk — it is the ONLY reliable way to assess. Ask directly: 'Are you thinking about suicide?'", severity: "high" },
  { text: "PREVIOUS SUICIDE ATTEMPT is the strongest single predictor of future attempt — always document and communicate prior attempts!", severity: "high" },
  { text: "HOPELESSNESS is a stronger predictor of suicidal behaviour than depression severity alone — always assess with 'How do you see your future?'", severity: "high" },
  { text: "HIGH RISK patient: NEVER leave alone. DO NOT LEAVE — stay with the patient and call for help while maintaining contact!", severity: "high" },
  { text: "Safety PLANNING replaces no-harm contracts — contracts are NOT evidence-based and create false security. Collaborative safety plans are!", severity: "high" },
  { text: "ACUTE vs CHRONIC suicidal ideation: A patient with chronic ideation who says 'I've finally made my decision' and appears calm = ACUTE HIGH RISK. Never normalise!", severity: "high" },
  { text: "DE-ESCALATION before restraint — verbal de-escalation is ALWAYS the first intervention for agitation. Physical and chemical restraint are last resorts!", severity: "medium" },
  { text: "Kübler-Ross stages are NOT linear or universal — patients do NOT have to experience all stages or in order. Never tell a patient what stage they 'should' be in!", severity: "medium" },
  { text: "COMPLICATED GRIEF lasting >12 months with functional impairment requires specialist treatment — it is not 'normal grief taking longer'!", severity: "medium" },
  { text: "DISENFRANCHISED GRIEF (pet loss, miscarriage, suicide loss) is real and valid — always acknowledge all losses regardless of how 'significant' they appear!", severity: "medium" },
  { text: "CRISIS INTERVENTION goal = restore PRE-CRISIS functioning — it is NOT psychotherapy or personality change. Time-limited and focused!", severity: "low" },
  { text: "TRAUMA-INFORMED CARE: Always explain procedures, offer choices, avoid startling — patients with trauma history may misinterpret care as threat!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "According to Aguilera's Crisis Theory, which three balancing factors determine whether a stressful event will result in a crisis?",
    options: [
      "Severity of the stressor, duration of the stressor and the person's age",
      "Realistic perception of the event, adequate coping mechanisms and adequate situational support",
      "Previous mental health history, social support and financial stability",
      "Intelligence, emotional maturity and physical health",
    ],
    correct: 1,
    explanation: "Aguilera identified THREE BALANCING FACTORS that determine whether a stressful event tips into a crisis: 1) REALISTIC PERCEPTION of the event — does the person see the situation accurately or is it distorted? 2) ADEQUATE COPING MECHANISMS — does the person have skills and strategies to manage stress? 3) ADEQUATE SITUATIONAL SUPPORT — are there people and resources available to help? Deficiency in ANY ONE of these three factors can cause a stressor to escalate into a full crisis, regardless of the stressor's severity. This is why the same event (e.g., job loss) causes crisis in one person but not another.",
    wrongExplanations: [
      "WRONG: Severity and duration of the stressor are external variables — Aguilera's model focuses on the person's internal resources and social supports that determine their response to ANY stressor.",
      "",
      "WRONG: These factors may be relevant context but are not Aguilera's three specific balancing factors. Previous mental health history, for example, may affect coping mechanisms but is not itself a balancing factor.",
      "WRONG: These personal characteristics are not Aguilera's balancing factors. The model specifically addresses perception, coping and support — not innate traits.",
    ],
  },
  {
    level: "Knowledge",
    question: "A nurse is assessing suicide risk using the SAD PERSONS scale. Which factor from this scale is considered the STRONGEST single predictor of future suicide attempt?",
    options: [
      "Depression — severity of depressive symptoms predicts lethality",
      "Organised plan — a specific, detailed plan indicates high intent",
      "Previous attempt — history of prior suicide attempt is the strongest predictor",
      "Social support lacking — isolation creates unrelenting hopelessness",
    ],
    correct: 2,
    explanation: "PREVIOUS SUICIDE ATTEMPT is the strongest single predictor of future attempt across all validated risk assessment research. Someone who has attempted suicide before has demonstrated both the intent and at least some means and capacity to act on suicidal thoughts. Statistics confirm: people with a prior attempt have approximately 30-40 times higher risk of completing suicide compared to the general population. While depression, organised plan and social isolation are all important risk factors, previous attempt consistently ranks as the most predictive single factor in clinical research and NCLEX content.",
    wrongExplanations: [
      "WRONG: Depression is a major risk factor but not the strongest predictor. Interestingly, HOPELESSNESS (not depression severity) is a stronger predictor than depression alone.",
      "WRONG: An organised, specific plan significantly raises risk and is an extremely important assessment finding — but it is not ranked as the single strongest predictor. Previous attempt remains the strongest.",
      "",
      "WRONG: Social isolation and lack of support are significant risk factors that remove protective buffering — but previous attempt remains the strongest single predictor of future suicidal behaviour.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is called to see a 35-year-old man who was just told his wife has asked for a divorce. He is crying, pacing and saying 'I don't know how I can go on without her.' The nurse sits with him. What should the nurse do FIRST according to the crisis intervention model?",
    options: [
      "Assess lethality — ask directly whether he is thinking about suicide or harming himself",
      "Establish rapport by sitting calmly and expressing genuine concern before any formal assessment",
      "Identify the precipitating event by asking 'When did you find out about the divorce?'",
      "Provide information about support services and counselling available",
    ],
    correct: 0,
    explanation: "According to Roberts' 6-Step Crisis Intervention Model, STEP 1 is ALWAYS to assess lethality and safety FIRST. The phrase 'I don't know how I can go on' is an ambiguous statement that could indicate suicidal ideation — this must be clarified before anything else. Ask directly: 'When you say you don't know how you can go on — are you thinking about suicide or harming yourself?' Safety assessment supersedes all other steps. Note: establishing rapport (Step 2) is the natural context in which Step 1 occurs — but the safety assessment question must not be delayed. In practice, both happen almost simultaneously, but SAFETY FIRST is the NCLEX answer.",
    wrongExplanations: [
      "",
      "WRONG: Establishing rapport is Step 2 and absolutely important — but it cannot delay the lethality assessment when a potentially suicidal statement has been made. Safety assessment is the non-negotiable first step.",
      "WRONG: Identifying the precipitating event is Step 3 — important, but not before lethality is assessed. The nurse already knows the precipitant (divorce) from the presentation.",
      "WRONG: Providing information about resources is Step 6 — the final step. Beginning there before any safety assessment or rapport building is completely out of sequence and potentially dangerous.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is assessing a 68-year-old widowed man admitted for a fall. During the assessment he says 'I've been thinking I would be better off dead. My wife died 3 months ago, I live alone and there's nothing left for me.' He scores 18/27 on the PHQ-9. He has no documented history of suicide attempts. What is the nurse's PRIORITY action?",
    options: [
      "Document the PHQ-9 score and refer to social work for loneliness and bereavement support",
      "Conduct a thorough suicide risk assessment including asking directly about plan, means and intent — then notify the physician and implement safety measures based on risk level",
      "Reassure the patient that grief after losing a spouse is normal and that feelings will improve with time",
      "Notify the patient's family of his suicidal statements so they can provide support",
    ],
    correct: 1,
    explanation: "This patient has multiple HIGH-RISK factors: expressed wish to be dead, male sex, older age (65+), recent bereavement (spouse), social isolation (lives alone), functional decline (fall) and significant depressive symptoms (PHQ-9 18 = moderately severe depression). The nurse must: ASK DIRECTLY about plan, means and intent ('Are you thinking about suicide? Do you have a plan? Do you have access to means?'), conduct thorough risk assessment, NOTIFY the physician immediately with full risk assessment findings, implement safety measures (secure environment, frequency of monitoring), document exact statements in quotation marks. Reassurance (Option C) dismisses the suicidal statement and is therapeutic negligence. Notifying family (Option D) without the patient's consent may violate confidentiality and must involve the physician's decision.",
    wrongExplanations: [
      "WRONG: Social work referral for bereavement is appropriate but it CANNOT be the priority when the patient has directly expressed a wish to be dead. Immediate safety assessment takes absolute priority.",
      "",
      "WRONG: 'Feelings will improve' when a patient expresses suicidal ideation is false reassurance that dismisses a safety concern. This is non-therapeutic and potentially negligent.",
      "WRONG: Notifying family without patient consent and without physician involvement may violate confidentiality. This is not the nurse's first independent action — physician notification and safety assessment come first.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is working in a psychiatric emergency department. A patient is pacing rapidly, shouting and hitting the wall. He has not been violent towards staff yet. What is the nurse's FIRST intervention?",
    options: [
      "Administer a PRN IM sedative immediately — aggressive behaviour requires rapid chemical sedation",
      "Call security to physically restrain the patient before escalation occurs",
      "Approach calmly with another staff member, reduce environmental stimuli and attempt verbal de-escalation",
      "Isolate the patient in a seclusion room for safety",
    ],
    correct: 2,
    explanation: "VERBAL DE-ESCALATION is ALWAYS the first intervention for an agitated patient who has not yet been violent — before any physical or chemical restraint. De-escalation approach: approach with calm, non-threatening body language (open hands, side-on not squared-on, at a safe distance), use the patient's name, acknowledge feelings ('I can see you're very upset'), validate ('Something must have happened to make you feel this way'), speak slowly in a low calm voice, reduce stimuli (ask others to leave, lower lights/noise), offer choices (restores sense of control). A second staff member provides backup and safety but should not crowd the patient. Chemical (Option A) and physical restraints (Option B) and seclusion (Option D) are all last-resort interventions used only when verbal de-escalation has failed AND there is immediate safety risk.",
    wrongExplanations: [
      "WRONG: Chemical sedation before attempting verbal de-escalation violates the principle of least restrictive intervention. Sedation is a significant medical intervention with risks and should only be used when de-escalation has failed.",
      "WRONG: Physical restraint before attempting verbal de-escalation violates patient rights and the least-restrictive principle. Physical restraint carries significant injury risks for both patient and staff.",
      "",
      "WRONG: Seclusion before attempting verbal de-escalation violates the least-restrictive principle and patient rights. Seclusion is a last resort, not a first response to pacing and shouting.",
    ],
  },
  {
    level: "Advanced",
    question: "A 28-year-old woman presents to the emergency department after a sexual assault that occurred 6 hours ago. She is calm, detached and states 'I feel numb — it doesn't feel real yet.' She declines a forensic examination and says 'I just want to go home.' Her friend is with her. What is the nurse's MOST appropriate response to her calm, detached presentation and request to leave?",
    options: [
      "The patient is calm and has support — document and facilitate safe discharge with crisis resources",
      "Insist she undergo the forensic examination — evidence collection is time-critical and she may regret not having it done",
      "Recognise her presentation as acute dissociation/shock (normal crisis response), gently ensure she has accurate information about her options (including forensic exam time sensitivity), provide trauma-informed care, and create safety without pressuring",
      "Refer to psychiatric services — calm, detached presentation after assault suggests abnormal psychological response",
    ],
    correct: 2,
    explanation: "This patient's CALM, NUMB, DETACHED presentation is a NORMAL ACUTE STRESS RESPONSE — dissociation and emotional numbing are common immediate reactions to traumatic events (Heroic/shock phase). This does NOT indicate she is 'fine' or that the event was minor. TRAUMA-INFORMED CARE principles: Safety (ensure she feels physically safe), Choice (respect her autonomy — she has the right to decline forensic exam), Collaboration (work WITH her, not FOR her), Empowerment (provide information so she can make informed decisions). Regarding forensic exam: she has the right to decline, but the nurse should ONCE provide accurate information about time-sensitivity of evidence collection WITHOUT pressure. She retains complete autonomy. Discharge with crisis resources, safety planning and clear follow-up is appropriate given her support. Psychiatric referral for NORMAL grief response is over-medicalisation.",
    wrongExplanations: [
      "WRONG: While discharge with resources may be the outcome, simply facilitating discharge without addressing her shock presentation, providing information about options and trauma-informed assessment misses essential care components.",
      "WRONG: Insisting on ANY procedure violates patient autonomy and re-traumatises the patient — coercing a sexual assault survivor into further bodily procedures causes direct harm. Provide information ONCE, then respect her decision.",
      "",
      "WRONG: Calm, numb detachment after acute trauma is NORMAL dissociation — not an abnormal psychological response requiring psychiatric referral. Pathologising a normal trauma response is harmful and incorrect.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is assigned to care for a patient with a history of multiple suicide attempts who was admitted 3 days ago. The patient has been cooperative and appears significantly improved. The treatment team plans to discharge tomorrow. During afternoon rounds the patient seems unusually calm and says 'I'm feeling much better. I finally feel at peace.' The primary nurse comments 'It's wonderful to see such improvement.' What is the MOST concerning clinical issue in this scenario?",
    options: [
      "The patient may be exaggerating improvement to achieve discharge",
      "Three days is insufficient time to stabilise suicidal ideation — discharge is premature",
      "'Feeling at peace' and sudden calmness in a patient with chronic suicidal ideation may indicate the patient has resolved ambivalence by making a decision to act — this requires immediate reassessment",
      "The primary nurse's positive reinforcement may have inadvertently discouraged the patient from disclosing remaining suicidal ideation",
    ],
    correct: 2,
    explanation: "PARADOXICAL CALM or TERMINAL CALM is a well-documented and dangerous clinical phenomenon in suicidology. When a chronically distressed, suicidal patient suddenly appears calm, peaceful or resolved, two possibilities exist: genuine therapeutic improvement OR the patient has made a final decision to act on suicidal intent — the distress resolves because the ambivalence is gone. 'Feeling at peace' in this context is a RED FLAG requiring IMMEDIATE reassessment: Ask directly about suicidal thoughts, assess for any changes in plan or intent, explore the source of the peace ('What has changed for you?'), review for preparatory behaviours (giving away possessions, saying goodbyes), reassess discharge readiness with the team. The primary nurse's 'wonderful improvement' response (Option D) is also a valid concern but the MOST CONCERNING clinical issue is the safety signal in the patient's presentation.",
    wrongExplanations: [
      "WRONG: While deception for discharge is possible, the more clinically urgent concern is the safety signal — sudden calmness and 'feeling at peace' in a chronically suicidal patient is a known warning sign that must be assessed immediately.",
      "WRONG: Length of admission is a factor in discharge decisions but is not the PRIMARY concern in this scenario — the immediate clinical concern is the patient's suspicious presentation.",
      "",
      "WRONG: Option D is a valid concern — positive reinforcement may discourage disclosure of residual ideation. However, the MORE IMMEDIATELY CONCERNING clinical issue is the paradoxical calm and 'feeling at peace' which is a direct safety signal.",
    ],
  },
  {
    level: "Advanced",
    question: "A hospital has experienced a tragic event — a patient died by suicide on the inpatient psychiatric unit. The unit staff are visibly distressed. Some nurses are crying, others appear numb and one nurse states 'I should have seen this coming — this is my fault.' The nurse manager is deciding how to respond. Which approach is MOST evidence-based?",
    options: [
      "Conduct a mandatory Critical Incident Stress Debriefing (CISD) session within 24 hours for all staff involved",
      "Provide immediate psychological first aid, offer voluntary peer support and professional counselling, conduct a non-punitive systems review and monitor staff over time",
      "Allow staff to process the event independently — mandatory group processing can be retraumatising",
      "Focus immediately on the systems review to identify what went wrong — staff processing can occur later",
    ],
    correct: 1,
    explanation: "This scenario tests knowledge of STAFF PSYCHOLOGICAL SUPPORT after a critical incident AND the EVIDENCE BASE for debriefing. Evidence-based approach: PSYCHOLOGICAL FIRST AID immediately (safety, calming, connectedness), VOLUNTARY (not mandatory) peer support and professional counselling, NON-PUNITIVE systems review (separate from emotional support — staff must feel safe to speak honestly), and MONITORING over time (acute stress responses are normal; watch for PTSD, complicated grief, burnout). The nurse's statement 'this is my fault' is a warning sign requiring individual follow-up. MANDATORY CISD (Option A) has mixed evidence — there is research showing mandatory group debriefing may INCREASE PTSD in some individuals. VOLUNTARY access to debriefing is appropriate; mandatory is not. Option C (process independently) under-responds. Option D (systems review first) prioritises investigation over human wellbeing — staff need emotional support BEFORE systems analysis.",
    wrongExplanations: [
      "WRONG: MANDATORY CISD has mixed evidence and some research suggests it can increase distress in vulnerable individuals. The key is VOLUNTARY access to support — not mandated group processing.",
      "",
      "WRONG: Allowing independent processing without offering support is under-responding to a significant traumatic event. Individual processing capacity varies widely — structured voluntary support should be offered.",
      "WRONG: Conducting a systems review before addressing staff emotional needs sends the message that accountability takes priority over wellbeing — this damages psychological safety and honesty in the review process itself.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is providing crisis support to a 16-year-old who has been self-harming by cutting her forearms for 6 months. She tells the nurse 'I'm not trying to kill myself — cutting is the only thing that makes the pain stop. It helps me feel real.' Her wounds are superficial and she denies suicidal ideation. Her parents want to know exactly what she said. What is the nurse's MOST appropriate approach?",
    options: [
      "Disclose everything to the parents — minors cannot maintain confidentiality from parents when self-harm is involved",
      "Maintain complete confidentiality — the adolescent has the right to privacy for self-harm disclosures",
      "Conduct comprehensive risk assessment distinguishing NSSI from suicidal behaviour, respect the adolescent's confidentiality within appropriate safety limits, involve parents with the adolescent's understanding, and facilitate referral to a specialist in adolescent mental health",
      "Admit the patient immediately — any self-harm in an adolescent is a psychiatric emergency requiring hospitalisation",
    ],
    correct: 2,
    explanation: "This scenario involves multiple complex issues: NSSI (Non-Suicidal Self-Injury) vs suicidal behaviour, adolescent confidentiality and parental rights, and appropriate level of care. NSSI assessment: This patient's self-harm appears to be NSSI (no suicidal intent, functional purpose — emotion regulation and dissociation relief). NSSI and suicidal behaviour are distinct but NSSI is a significant risk factor for future suicidal behaviour — thorough risk assessment is essential. CONFIDENTIALITY: Adolescents are entitled to appropriate confidentiality but not absolute confidentiality when safety is at risk. The nurse should: explain what information must be shared with parents (for safety) and what can remain confidential, involve the adolescent in the process — not disclose against her will without safety justification. LEVEL OF CARE: Superficial NSSI with no suicidal intent does not automatically require inpatient admission — outpatient specialist care (DBT has strong evidence for NSSI in adolescents) is appropriate. Immediate hospitalisation (Option D) for all adolescent self-harm pathologises and over-medicalises a complex behaviour.",
    wrongExplanations: [
      "WRONG: Disclosing everything to parents without the adolescent's involvement violates trust and therapeutic rapport — critical for engaging a young person in treatment. Safety-relevant information may need to be shared, but this is done collaboratively, not unilaterally.",
      "WRONG: Complete confidentiality is not appropriate when self-harm is active and ongoing. The adolescent's safety requires appropriate parental involvement and specialist referral — the question is HOW, not WHETHER, to involve parents.",
      "",
      "WRONG: Hospitalisation is not automatically indicated for NSSI without suicidal intent. Inpatient admission for non-suicidal NSSI can actually increase risk by exposing adolescents to more severely ill peers and disrupting normal development. Outpatient specialist care (DBT) is first-line.",
    ],
  },
  {
    level: "Advanced",
    question: "A community health nurse is conducting a home visit 8 weeks after a major bushfire that destroyed a rural town. She visits a 55-year-old man who lost his home and his neighbour in the fire. He describes sleeping 2-3 hours/night, seeing the fire every time he closes his eyes, refusing to drive past the destroyed area, feeling emotionally numb and being on edge 'like something terrible is about to happen again.' His wife reports he 'snapped at the kids for the first time ever' last week. What is the MOST accurate clinical assessment?",
    options: [
      "Normal grief response to significant loss — reassure and monitor",
      "Acute Stress Disorder — symptoms within 4 weeks. This presentation at 8 weeks suggests PTSD",
      "Adjustment disorder — expected response to a major life stressor",
      "Major depressive disorder — sleep disturbance, numbing and irritability indicate depression",
    ],
    correct: 1,
    explanation: "This patient presents with a FULL PTSD SYMPTOM PROFILE at 8 WEEKS post-trauma: INTRUSION (seeing the fire when closing eyes = flashbacks/intrusive images), AVOIDANCE (refusing to drive past the area = behavioural avoidance), NEGATIVE MOOD (emotional numbing = emotional numbing/inability to experience positive emotion), HYPERAROUSAL (2-3 hours sleep = sleep disturbance, hypervigilance — 'something terrible about to happen', irritability/anger outbursts). All four DSM-5 symptom clusters are present, duration is >1 month (8 weeks), and there is clear functional impairment (sleep, relationships). This is PTSD — not normal grief (which does not involve flashbacks and hyperarousal), not acute stress disorder (which resolves within 4 weeks by definition), and not primarily depression (though depression commonly co-occurs). Requires referral to trauma-focused therapy (Prolonged Exposure or CPT) and possible pharmacotherapy.",
    wrongExplanations: [
      "WRONG: Normal grief does not include flashbacks, hypervigilance, avoidance behaviours and hyperarousal. These symptoms indicate trauma response — PTSD — not bereavement.",
      "",
      "WRONG: Acute Stress Disorder is diagnosed when symptoms occur within 3 days to 4 weeks of the trauma. Beyond 4 weeks, the diagnosis shifts to PTSD (if full criteria met) or adjustment disorder (if subthreshold).",
      "WRONG: While depression commonly co-occurs with PTSD, the presence of flashbacks (intrusion), avoidance and hypervigilance is specifically characteristic of PTSD — not depression alone. The primary diagnosis here is PTSD.",
    ],
  },
];

const clinicalPearls = [
  "The most dangerous assumption in crisis nursing is that a calm patient is a safe patient. Paradoxical calm — the sudden peaceful resolution of distress in a chronically suicidal patient — is one of the most reliable warning signs that a patient has made a decision to act. Always explore the source of sudden peace.",
  "Ask directly about suicide. Every time. The research is unambiguous: asking about suicide does not plant the idea, does not increase risk, and is the only way to reliably identify people in danger. Nurses who avoid asking because they are afraid of 'putting the idea in the patient's head' are practicing by fear, not evidence.",
  "Hopelessness is the most dangerous cognition in suicidal patients — more predictive than depression severity. The question 'How do you see your future?' takes 5 seconds and reveals more than a 20-item depression scale. A patient who cannot imagine a future is at higher risk than a severely depressed patient who can.",
  "De-escalation is a skill — not a personality trait. The nurse who can walk into a room with an escalating, agitated patient and bring the temperature down with their presence, their voice and their words is practicing an evidence-based clinical skill. It can be taught, practised and refined.",
  "NSSI (non-suicidal self-injury) and suicidal behaviour are different — but NSSI is a significant risk factor for eventual suicidal behaviour. Never minimise NSSI. Never tell a patient who self-harms that they are 'just attention-seeking.' They are communicating pain in the only language that works for them right now.",
  "Safety planning works. No-harm contracts do not. The difference is that safety planning is a collaborative, active process that builds the patient's own skills and connections — it is done WITH the patient, not TO the patient. A signed piece of paper does not save lives; a genuine plan does.",
  "The nurse's own emotional response to crisis work is clinical data. When a suicidal patient makes you feel responsible, hopeless or desperate — that is information about the patient's interpersonal experience of the world. Take that to supervision. Do not carry it home alone.",
];

export default function CrisisInterventionPage() {
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
            <h1 className="font-black text-base text-gray-900">🆘 Crisis Intervention</h1>
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
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
              <p className="text-red-700 text-sm leading-relaxed font-medium">
                🆘 Crisis intervention and suicide risk assessment are high yield on NCLEX. Master SAD PERSONS, the 6-step model, de-escalation and grief stages!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most common NCLEX traps on Crisis Intervention — study these carefully!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Crisis Intervention!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review SAD PERSONS and the 6-step crisis model." :
                        "Keep studying! Focus on suicide risk assessment, de-escalation and crisis intervention steps."}
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