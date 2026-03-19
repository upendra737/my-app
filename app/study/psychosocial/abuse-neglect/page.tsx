"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Abuse and Neglect",
    icon: "🛡️",
    color: "blue",
    content: [
      "Abuse and neglect are public health emergencies — nurses are often the FIRST healthcare professionals to identify signs of abuse across all care settings",
      "TYPES of abuse: Physical, sexual, emotional/psychological, financial/economic, neglect (failure to provide basic needs), spiritual abuse",
      "Abuse occurs across ALL demographics — no age, gender, socioeconomic status, race, religion or education level provides immunity",
      "POWER IMBALANCE is the universal feature of abuse — perpetrators exploit a position of power, trust or dependency",
      "Nurses are MANDATED REPORTERS in all Australian states and territories for child abuse — legal obligation to report reasonable suspicion regardless of certainty",
      "TRAUMA-INFORMED CARE: All nursing interactions with abuse survivors must acknowledge the widespread impact of trauma, prioritise safety and avoid re-traumatisation",
      "NCLEX heavily tests: Recognition of abuse indicators, mandatory reporting obligations, nursing response, safety planning and therapeutic communication with survivors",
    ],
  },
  {
    title: "Child Abuse — Types and Recognition",
    icon: "👶",
    color: "red",
    content: [
      "PHYSICAL ABUSE: Intentional physical harm. Red flags: bruising in unusual locations (torso, back, buttocks, face, ears — NOT shins/knees which are normal childhood injury sites), patterned injuries (belt buckle, cigarette burns, hand prints), injuries inconsistent with developmental stage or explanation given",
      "BRUISING RED FLAGS: Bruising in non-ambulatory infants (babies who cannot walk should not have bruises), bilateral bruising, bruising in clusters, bruising with distinct patterns",
      "FRACTURES: Spiral fractures in non-ambulatory infants, multiple fractures in different stages of healing (classic abuse pattern), posterior rib fractures (require significant force — often from shaking), metaphyseal 'bucket handle' fractures",
      "SHAKEN BABY SYNDROME (Abusive Head Trauma): Retinal haemorrhages, subdural haematoma, brain injury WITHOUT external head trauma. Triad: subdural haematoma, retinal haemorrhage, encephalopathy",
      "SEXUAL ABUSE: Genital/anal trauma, STI in a child (highly suspicious — report all STIs in prepubertal children), inappropriate sexual knowledge or behaviour for developmental age, regression, sleep disturbance, avoidance of specific people",
      "EMOTIONAL/PSYCHOLOGICAL ABUSE: Persistent criticism, humiliation, threats, rejection, isolation. Effects: low self-esteem, anxiety, developmental delays, emotional dysregulation. Most difficult type to identify and prove",
      "NEGLECT (most common form of child maltreatment): Failure to provide food, clothing, shelter, medical care, education, supervision. Signs: poor hygiene, failure to thrive, dental caries, untreated medical conditions, unsupervised young children",
      "FACTITIOUS DISORDER IMPOSED ON ANOTHER (Munchausen by Proxy): Caregiver fabricates or induces illness in child to gain medical attention. Symptoms resolve when caregiver is absent — a key diagnostic feature",
    ],
  },
  {
    title: "Child Abuse — Nursing Response and Mandatory Reporting",
    icon: "📢",
    color: "red",
    content: [
      "MANDATORY REPORTING: In all Australian states/territories, nurses are legally required to report REASONABLE SUSPICION of child abuse or neglect — proof is NOT required",
      "'Reasonable suspicion' = information that leads a reasonable person to suspect abuse — based on observations, disclosures, inconsistencies. Do NOT need to confirm or investigate",
      "Report to: Child Protection Services (Australia: DOCS/DCP depending on state), police if immediate danger",
      "NURSE'S ROLE: Identify and report — NOT investigate. Do not conduct your own investigation, do not interrogate the child, do not confront the suspected abuser alone",
      "DOCUMENTATION: Objective, factual, direct quotes from child in quotation marks. Body diagrams to document injury locations. Photographs if facility policy permits and consent given",
      "WHEN CHILD DISCLOSES: Do NOT promise confidentiality — say 'I'm glad you told me. I need to make sure you are safe, which means I need to tell some people who can help.' Respond calmly without shock or disbelief. Ask open-ended questions — do NOT lead",
      "THE CHILD'S SAFETY IS PARAMOUNT: If immediate danger exists — the child must not be discharged to the suspected abuser before child protection services are notified",
      "IMMUNITY: Mandated reporters who report in good faith have legal immunity even if the report turns out to be unfounded. Failure to report has criminal consequences",
      "CULTURAL SENSITIVITY: Some cultural practices may appear like abuse to Western healthcare workers — consult with cultural liaisons but do NOT allow cultural relativism to prevent reporting genuine abuse",
    ],
  },
  {
    title: "Intimate Partner Violence (Domestic Violence)",
    icon: "💔",
    color: "purple",
    content: [
      "IPV (Intimate Partner Violence): Physical, sexual, emotional, psychological or financial abuse perpetrated by a current or former intimate partner",
      "PREVALENCE: 1 in 3 women and 1 in 9 men experience IPV in their lifetime. It is the leading cause of injury, hospitalisation and death for women aged 15-44 in Australia",
      "CYCLE OF VIOLENCE (Lenore Walker): Tension building → Acute explosion (incident) → Honeymoon/reconciliation → Calm → Tension building again. Cycles often escalate in severity over time",
      "WHY VICTIMS STAY: Financial dependence, fear of retaliation, children, love/attachment, isolation from support, threats to kill, immigration status, cultural/religious pressures, lack of housing. NEVER ask 'Why didn't they leave?'",
      "UNIVERSAL SCREENING: Screen ALL patients for IPV regardless of gender, age, presentation. Screening should be private, confidential, non-judgmental",
      "SAFE screening tool: Stress/safety, Afraid/abused, Friends/family, Emergency plan",
      "NURSING RESPONSE: Ensure privacy (abuser should NOT be present during assessment), express belief ('I believe you. What has happened to you is not your fault'), provide information about resources, respect autonomy ('I'm here to support whatever decision you make'), safety planning",
      "LETHALITY RISK: Highest at point of LEAVING — the most dangerous time for a victim is when they attempt to leave. Safety planning is critical",
      "MANDATORY REPORTING of IPV: In Australia, reporting adult IPV requires patient consent EXCEPT when children are at risk or patient is at imminent risk of serious harm. Unlike child abuse — adult IPV is generally NOT mandated without consent",
    ],
  },
  {
    title: "Elder Abuse",
    icon: "👴",
    color: "orange",
    content: [
      "Elder abuse: Any act causing harm to an older person (generally 65+) by someone they trust — family member, carer, friend, neighbour, healthcare provider",
      "PREVALENCE: Affects approximately 1 in 6 older adults globally — significantly underreported due to dependence, fear and cognitive impairment",
      "TYPES of elder abuse: Physical, sexual, emotional/psychological, financial/material, neglect (most common), spiritual, social/cultural",
      "FINANCIAL ABUSE: Most commonly reported type — theft, misuse of power of attorney, coercing changes to wills, withholding money, forging signatures. Signs: sudden changes in financial documents, unpaid bills despite adequate income, unusual bank withdrawals",
      "PHYSICAL ABUSE INDICATORS: Unexplained injuries, injuries inconsistent with explanation, bilateral injuries, injuries in various stages of healing, fear of carer, flinching, unexplained weight loss",
      "NEGLECT INDICATORS: Poor hygiene, pressure injuries, dehydration/malnutrition, untreated medical conditions, unsafe living conditions, isolation",
      "COGNITIVE IMPAIRMENT increases vulnerability: Patients with dementia are particularly vulnerable — cannot self-report, may not remember incidents, may be disbelieved",
      "MANDATORY REPORTING in Australia: Varies by state and setting. Residential aged care facilities — mandatory reporting of certain assaults and unlawful sexual contact (Aged Care Act). Community/home settings — varies by state",
      "ASSESSMENT TOOLS: Elder Abuse Suspicion Index (EASI), Vulnerability to Abuse Screening Scale (VASS)",
      "NURSING RESPONSE: Private assessment away from potential abuser, document objective findings, notify appropriate authorities, ensure safety, multidisciplinary approach",
    ],
  },
  {
    title: "Sexual Assault — Nursing Response",
    icon: "🔴",
    color: "red",
    content: [
      "Sexual assault is a medical emergency AND a crime — nursing response must address BOTH the medical and the forensic dimensions",
      "FIRST PRIORITY: Safety, trauma-informed care, patient autonomy. The patient has already had their autonomy violated — restore it at every step",
      "SEXUAL ASSAULT NURSE EXAMINER (SANE): Specially trained nurses who conduct forensic examinations. The gold standard for sexual assault care",
      "PATIENT RIGHTS: Right to decline any part of the examination, right to report or not report to police, right to forensic examination without reporting, right to have a support person present",
      "FORENSIC EVIDENCE COLLECTION: Time-sensitive — evidence collection within 72-120 hours (7 days for some newer kits). Document: history, physical examination findings, collect specimens per protocol. Chain of custody must be maintained",
      "DO NOT: Allow patient to shower, eat, drink, urinate or change clothes before evidence collection if possible (explain why). Do not clean wounds before photographing",
      "INJURIES: Document and photograph all injuries. Internal injuries may not be visible externally",
      "STI PROPHYLAXIS: Offer antibiotic prophylaxis for gonorrhoea, chlamydia and trichomonas. Hepatitis B vaccination if non-immune. HIV post-exposure prophylaxis (nPEP) within 72 hours if indicated",
      "EMERGENCY CONTRACEPTION: Offer levonorgestrel (Plan B) within 72 hours or copper IUD within 5 days",
      "TRAUMA-INFORMED COMMUNICATION: 'I believe you', 'This was not your fault', 'You are safe here', 'I will support whatever decision you make', 'You are in control'",
      "MANDATORY REPORTING: Sexual assault of children — mandatory. Sexual assault of adults — generally requires patient consent except in certain circumstances (imminent ongoing danger, court orders)",
    ],
  },
  {
    title: "Workplace Violence and Horizontal Violence",
    icon: "🏥",
    color: "orange",
    content: [
      "Healthcare workers experience some of the HIGHEST rates of workplace violence of any occupation",
      "TYPES of workplace violence: Type I (criminal intent — stranger), Type II (patient-on-staff), Type III (staff-on-staff/horizontal violence), Type IV (personal relationship)",
      "Type II (patient-on-staff) is MOST COMMON in healthcare — confused, intoxicated, psychiatric, pain patients",
      "HORIZONTAL VIOLENCE (lateral violence/bullying): Nurse-to-nurse aggression — verbal abuse, undermining, exclusion, intimidation, sabotage. Particularly harmful to new nurses",
      "ZERO TOLERANCE policy: Workplace violence of any type should not be accepted as 'part of the job'",
      "PREVENTION: Adequate staffing, environmental design (safe exits, no isolated areas), de-escalation training, visitor management, security staff",
      "AFTER A VIOLENT INCIDENT: Immediate safety and medical care, incident report, psychological debriefing, review of contributing factors, management follow-up",
      "NURSE'S RESPONSIBILITY: Report ALL incidents of violence — normalising violence perpetuates it and prevents system improvements",
      "DOCUMENTATION: Objective description of incident, injuries sustained, witnesses, interventions, de-escalation attempts",
      "LEGAL PROTECTION: Nurses who are victims of assault should know they have the right to press charges — assault by a patient is still assault",
    ],
  },
  {
    title: "Recognising Abuse — General Assessment Principles",
    icon: "🔍",
    color: "blue",
    content: [
      "UNIVERSAL SCREENING: Screen all patients for abuse regardless of demographics — abuse occurs across all populations",
      "PRIVACY: Conduct abuse screening in PRIVATE — NEVER with the suspected abuser present. Separate the patient from companions/family members using legitimate clinical reasons ('I need to examine you alone')",
      "INCONSISTENCIES: Key indicator of abuse — injury inconsistent with explanation, explanation changes, delay in seeking treatment, explanation inconsistent with child's developmental stage",
      "BEHAVIOURAL INDICATORS: Fear, anxiety, flinching when touched, startling easily, looking to companion before answering, flat affect, hypervigilance, avoidance of eye contact, unusual compliance ('just tell me what I need to do')",
      "PATTERN OF INJURIES: Multiple injuries in different stages of healing, bilateral injuries, defensive injuries (forearms), injuries in protected areas (back, buttocks, genitals, upper arms)",
      "COMPANION BEHAVIOUR: Insists on remaining in room, answers questions on patient's behalf, interrupts patient, watches patient closely, controls patient's speech",
      "INJURY-EXPLANATION MISMATCH: Injury type does not match mechanism described, injury severity does not match stated cause, location inconsistent with stated cause",
      "DELAYED PRESENTATION: Seeking care days after an injury — fear of reporting, keeping abuser's secret, coercive control",
      "DOCUMENT OBJECTIVELY: Describe what you see, measure and photograph injuries, record exact quotes, use body diagrams. Avoid interpretive language in clinical notes",
    ],
  },
  {
    title: "Safety Planning for Abuse Victims",
    icon: "🗺️",
    color: "green",
    content: [
      "Safety planning is a COLLABORATIVE process — not prescriptive. The goal is to reduce risk while respecting the victim's autonomy and timeline",
      "LETHALITY ASSESSMENT: Is the abuser becoming more violent? Has the abuser used weapons or threatened to use them? Does the abuser have access to firearms? Has the abuser threatened to kill the victim or themselves?",
      "DANGER ASSESSMENT (Jacquelyn Campbell): Validated tool for femicide risk in IPV relationships. Higher scores predict increased risk of homicide",
      "SAFETY PLAN ELEMENTS for IPV: Identify safe people to contact, keep copies of important documents (ID, birth certificates, financial records) accessible, pack emergency bag, code word with trusted person, route to leave quickly, memorise emergency numbers",
      "FOR CHILDREN: Safety plan includes who the child can tell, how to call for help, that abuse is never their fault",
      "FOR ELDERS: Safety plan addresses financial account monitoring, legal safeguards (power of attorney review), alternative care arrangements, community services",
      "LEAVING is the MOST DANGEROUS TIME — plan carefully. Abusers are most likely to escalate or commit homicide when victim attempts to leave",
      "RESOURCES: 1800RESPECT (1800 737 732) — 24/7 national domestic violence hotline. White Ribbon Australia. Local domestic violence services. Housing support. Legal aid",
      "NURSE'S ROLE: Provide information and resources without pressure. Never tell a victim what to do — support their decision-making. Document safety planning discussion",
    ],
  },
  {
    title: "Mandatory Reporting — Nurse's Legal Obligations",
    icon: "⚖️",
    color: "purple",
    content: [
      "MANDATORY REPORTING OBLIGATIONS vary by jurisdiction and population — nurses must know their specific state/territory requirements",
      "CHILD ABUSE: MANDATORY in all Australian states and territories. Report REASONABLE SUSPICION — not certainty. Report to Child Protection Services",
      "ELDER ABUSE in RESIDENTIAL AGED CARE: Mandatory reporting under the Aged Care Act for assaults and unlawful sexual contact. Report to aged care provider management, Aged Care Quality and Safety Commission, police (for assault)",
      "NOTIFIABLE DISEASES: Mandatory reporting to Public Health of specified communicable diseases (varies by state)",
      "GUNSHOT WOUNDS: Mandatory police notification in all Australian states",
      "IMPAIRED COLLEAGUES: Mandatory reporting to AHPRA (Australian Health Practitioner Regulation Agency) when a nurse believes a colleague poses a risk to public safety",
      "GOOD FAITH PROTECTION: Mandated reporters who report in good faith are legally protected even if the report is later unsubstantiated. Protection only applies to good faith reports — not malicious false reports",
      "FAILURE TO REPORT: Criminal offence for mandated reporters who fail to report. Can result in fines, professional sanctions and licence consequences",
      "CONFIDENTIALITY IS OVERRIDDEN by mandatory reporting obligations — patient confidentiality cannot prevent a mandatory report",
      "AFTER REPORTING: The nurse's role is complete — investigation is the responsibility of child protection/police. Continue to provide care and document all interactions",
    ],
  },
  {
    title: "Abuse in Healthcare Settings",
    icon: "🏥",
    color: "red",
    content: [
      "Healthcare providers can be perpetrators of abuse — a deeply uncomfortable but important reality in nursing practice",
      "PROFESSIONAL BOUNDARY VIOLATIONS: Sexual contact with patients, financial exploitation, emotional manipulation. ALWAYS reportable to AHPRA",
      "INSTITUTIONAL ABUSE: Systemic neglect or dehumanising practices within healthcare institutions — inadequate staffing leading to neglect, dehumanising routines, chemical restraint without clinical indication",
      "FORCED PROCEDURES: Performing procedures without consent, using excessive force during procedures, ignoring expressed pain",
      "RESTRAINT MISUSE: Applying restraints for staff convenience rather than patient safety. Chemical restraint (sedation to control behaviour) without clinical indication is abuse",
      "VULNERABLE PATIENTS AT RISK: Cognitively impaired, sedated, critically ill, unable to self-report — require additional vigilance from nursing staff",
      "NURSE'S OBLIGATION: Report witnessed abuse by colleagues or other healthcare providers. Silence is complicity. Report to facility management AND AHPRA if the provider is registered",
      "RETALIATION PROTECTION: Whistleblowing legislation protects nurses who report abuse in good faith from employer retaliation in most jurisdictions",
      "PREVENTION: Safe staffing ratios, trauma-informed culture, regular training, ethical leadership, culture of accountability",
    ],
  },
];

const mnemonics = [
  {
    title: "Child Abuse Physical Indicators — SUSPICIOUS BRUISING",
    acronym: "ABBCDE",
    breakdown: ["Any bruise in non-ambulatory infant", "Bilateral bruising", "Back/buttocks/torso bruising", "Clustered or patterned", "Developmental inconsistency", "Explanation doesn't match"],
    memory: "ABBCDE — if bruising meets any of these criteria in a child, report. You do not need proof — reasonable suspicion is enough!",
    color: "red",
  },
  {
    title: "Cycle of Violence",
    acronym: "TAHC",
    breakdown: ["Tension building", "Acute explosion (incident)", "Honeymoon/reconciliation", "Calm"],
    memory: "TAHC — The Abuse Happens Cyclically. Tension builds, explosion occurs, honeymoon phase follows, then calm before it starts again. Cycles escalate over time!",
    color: "purple",
  },
  {
    title: "SAFE Screening for IPV",
    acronym: "SAFE",
    breakdown: ["Stress/Safety (do you feel safe?)", "Afraid/Abused (are you afraid?)", "Friends/Family (do they know?)", "Emergency plan (do you have one?)"],
    memory: "SAFE — screen every patient privately. Ask directly and non-judgmentally. Document responses. Provide resources regardless of disclosure!",
    color: "orange",
  },
  {
    title: "Nursing Response to Abuse Disclosure",
    acronym: "BELIEF",
    breakdown: ["Believe the patient", "Express concern", "Listen carefully", "Inquire about safety", "Empowerment (respect autonomy)", "Follow-up/Resources"],
    memory: "BELIEF — your belief is the most therapeutic response to a disclosure. 'I believe you. This is not your fault. You are safe here.'",
    color: "green",
  },
];

const alerts = [
  { text: "MANDATORY REPORTING requires REASONABLE SUSPICION — not proof. Report child abuse even if you are not certain. Failure to report is a criminal offence!", severity: "high" },
  { text: "NEVER conduct your own investigation into suspected child abuse — report to child protection and let trained investigators take over. Interrogating a child can compromise the investigation!", severity: "high" },
  { text: "NEVER interview a child about suspected abuse with the suspected abuser present — always separate them using a clinical pretext!", severity: "high" },
  { text: "The MOST DANGEROUS time for an IPV victim is when they are LEAVING the relationship — safety planning for departure is critical!", severity: "high" },
  { text: "Sexual assault forensic evidence collection is TIME-SENSITIVE — within 72-120 hours. Do not allow patient to shower/eat/change before evidence collection if possible!", severity: "high" },
  { text: "NEVER promise confidentiality to a child who is about to disclose abuse — say 'I will do my best to help keep you safe' not 'I won't tell anyone'!", severity: "high" },
  { text: "Elder abuse with cognitive impairment: Patient may not be able to self-report. Observe interaction between patient and carer closely — fear, flinching and unusual compliance are red flags!", severity: "medium" },
  { text: "NEVER ask 'Why didn't you leave?' — this question implies victim responsibility. Ask 'What has been stopping you from leaving?' to understand barriers non-judgmentally!", severity: "medium" },
  { text: "Conduct ALL abuse screenings in PRIVATE — abusers routinely accompany victims to healthcare appointments to monitor and control their responses!", severity: "medium" },
  { text: "Bruising in a non-ambulatory infant (baby who cannot yet walk) is NEVER normal — any bruise in a pre-mobile infant requires mandatory report!", severity: "medium" },
  { text: "FACTITIOUS DISORDER IMPOSED ON ANOTHER: Symptoms resolve when caregiver is absent — this is the KEY diagnostic feature. Document presence/absence of symptoms relative to carer visits!", severity: "low" },
  { text: "Document abuse findings OBJECTIVELY — describe what you see, measure injuries, use direct quotes. Avoid interpretive language ('appears to be' or 'probably') in clinical notes!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A nurse is caring for an 18-month-old child admitted for a 'fall from the couch.' On examination, the nurse notes bruising on the child's back, buttocks and upper arms in various stages of healing, as well as a spiral fracture of the left humerus. The mother states the child 'just started walking and falls all the time.' What should the nurse do FIRST?",
    options: [
      "Accept the mother's explanation — toddlers do fall frequently when learning to walk",
      "Document the findings objectively and report reasonable suspicion of child abuse to child protective services",
      "Confront the mother about the inconsistency between the injuries and her explanation",
      "Wait for the attending physician to assess the child before taking any action",
    ],
    correct: 1,
    explanation: "This presentation has MULTIPLE red flags for physical child abuse: bruising on back, buttocks and upper arms (protected areas — not typical fall injury sites), multiple injuries in different stages of healing (indicating ongoing repeated abuse), spiral fracture of the humerus in a toddler (spiral fractures result from twisting force — inconsistent with a simple fall), and mother's explanation does not match the injury pattern. The nurse has REASONABLE SUSPICION and is a MANDATED REPORTER — the legal obligation is to report to child protective services IMMEDIATELY. The nurse does NOT need proof, does NOT need physician permission, does NOT confront the suspected abuser. Confronting (Option C) is dangerous and may compromise the investigation. Waiting (Option D) delays reporting and leaves the child at risk.",
    wrongExplanations: [
      "WRONG: The injury pattern is inconsistent with normal toddler falls. Spiral fractures, bruising in protected areas (back, buttocks) and multiple healing injuries are red flags for abuse — not normal childhood injuries.",
      "",
      "WRONG: Confronting the suspected abuser is NOT the nurse's role. This is dangerous (may escalate the situation), counterproductive (the abuser will deny it), and compromises the investigation. Report — do not investigate.",
      "WRONG: The nurse is an INDEPENDENT mandated reporter and does not need physician approval to report suspected child abuse. Waiting delays protection for the child who may be discharged before a physician review.",
    ],
  },
  {
    level: "Knowledge",
    question: "A nurse is using the SAFE screening tool to assess a 32-year-old woman for intimate partner violence during a routine health visit. The woman's partner has accompanied her and insists on remaining in the room. What is the nurse's MOST appropriate action?",
    options: [
      "Allow the partner to remain — the patient did not ask them to leave",
      "Ask the patient directly if she would like her partner to remain for the entire visit",
      "Use a legitimate clinical reason to ask the partner to wait outside — 'It is our policy to conduct a portion of every adult health visit privately'",
      "Proceed with screening with the partner present — the partner has a right to support their loved one",
    ],
    correct: 2,
    explanation: "IPV SCREENING MUST BE CONDUCTED IN PRIVATE — a fundamental, non-negotiable requirement. Abusers routinely accompany victims to healthcare appointments to monitor, control and prevent disclosure. Asking the patient if they want their partner to stay (Option B) puts the patient in an impossible position — they cannot safely say 'please leave' with the abuser present. The correct technique is to use a ROUTINE CLINICAL PRETEXT that applies to all patients: 'It is our policy to conduct a portion of the visit privately — I will need to speak with you alone briefly.' This removes the partner without singling out the relationship. The partner cannot object to hospital policy. The patient is then safe to disclose or not disclose in a private, controlled environment.",
    wrongExplanations: [
      "WRONG: Allowing the partner to remain makes IPV screening impossible — the patient cannot disclose abuse with the potential abuser present. This is a patient safety failure.",
      "WRONG: Asking the patient in front of the partner places her in danger — she cannot say 'please leave' without risking retaliation. A universal policy pretext is safer.",
      "",
      "WRONG: The partner does NOT have a right to be present during private clinical assessment. Their insistence on remaining is itself a warning sign of coercive control.",
    ],
  },
  {
    level: "Application",
    question: "A 7-year-old girl is brought to the emergency department by her mother with vaginal bleeding. The mother says 'She fell off her bike.' On examination, the nurse notes bruising of the labia, tears consistent with penetrating trauma and no genital abnormalities consistent with a bicycle injury. The child is quiet, avoids eye contact and clings to her mother. What is the nurse's PRIORITY action?",
    options: [
      "Accept the bicycle injury explanation — genital injuries can occur from straddle injuries",
      "Immediately separate the child from the mother, conduct a private age-appropriate assessment and report to child protective services and activate the SANE protocol",
      "Ask the child directly 'Did anyone touch your private parts?' in front of her mother",
      "Wait for the paediatrician to examine the child before taking any action",
    ],
    correct: 1,
    explanation: "This presentation is HIGHLY SUSPICIOUS for child sexual abuse: Vaginal/labial bruising with penetrating-type trauma in a 7-year-old, examination findings inconsistent with bicycle/straddle injury (straddle injuries cause labia majora bruising without penetrating trauma), behavioural indicators (quiet, avoidant, clingy — abnormal response to injury). PRIORITY actions: SEPARATE the child from the mother/potential perpetrator using a clinical pretext, conduct a private trauma-informed assessment (the mother could be the abuser or covering for the abuser — we do not know yet), REPORT to child protective services IMMEDIATELY, activate SANE (Sexual Assault Nurse Examiner) protocol for forensic examination and evidence collection. Do NOT ask leading questions in front of the parent (Option C) — this is not the nurse's investigative role and may contaminate the child's account.",
    wrongExplanations: [
      "WRONG: Penetrating vaginal trauma in a child is NOT consistent with straddle/bicycle injuries. Straddle injuries cause external bruising without penetrating trauma. This injury pattern requires mandatory reporting.",
      "",
      "WRONG: Asking the child about sexual touching in front of the mother is inappropriate — the mother could be the abuser or covering for one. It also leads the child and may contaminate forensic evidence. This is not the nurse's investigative role.",
      "WRONG: The nurse is an INDEPENDENT mandated reporter and does not require paediatrician assessment before reporting. Waiting delays the mandatory report and leaves the child potentially at risk.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for an 82-year-old woman with mild dementia who is brought to the clinic by her adult son. The nurse notices the patient is thin (5kg weight loss since last visit), has several pressure injuries on her sacrum and heels, and poor oral hygiene. She appears fearful when her son raises his voice. When alone with the nurse, the patient whispers 'He takes my money and never buys food.' The son states 'She forgets to eat — it's her dementia.' What is the nurse's MOST appropriate action?",
    options: [
      "Accept the son's explanation — weight loss and pressure injuries are common in elderly patients with dementia",
      "Document objective findings, report suspected elder abuse (financial and physical neglect) to the appropriate authority and arrange a multidisciplinary safety assessment",
      "Counsel the son about better nutrition and wound care and schedule a follow-up visit",
      "Ask the patient to repeat her statement in front of her son to confirm what was said",
    ],
    correct: 1,
    explanation: "This patient has multiple indicators of ELDER ABUSE — financial abuse AND neglect: Direct patient disclosure ('He takes my money and never buys food'), significant weight loss (5kg), multiple pressure injuries (neglect of basic care), poor oral hygiene, fear response to son's raised voice, and son's minimising explanation that attributes everything to dementia. Despite cognitive impairment, the patient has made a direct disclosure — cognitive impairment does not invalidate abuse reports. The nurse must: DOCUMENT all objective findings and the patient's direct quote (in quotation marks), REPORT to aged care authorities and/or police as appropriate, arrange multidisciplinary safety assessment (social work, aged care assessment team), ensure the patient is not discharged to an unsafe situation.",
    wrongExplanations: [
      "WRONG: Weight loss AND pressure injuries AND financial abuse disclosure AND fear response together constitute multiple indicators of elder abuse. Attributing all findings to dementia minimises and ignores the patient's direct disclosure.",
      "",
      "WRONG: Counselling the son without reporting ignores the patient's disclosure and leaves her in a potentially abusive situation. The son's behaviour (financial abuse, neglect) requires reporting — not education.",
      "WRONG: Asking the patient to repeat her disclosure in front of her son is extremely dangerous — it could precipitate retaliation against the patient and places her in immediate danger. The disclosure was made in confidence when alone.",
    ],
  },
  {
    level: "Application",
    question: "A 28-year-old woman presents to the emergency department with a fractured radius. She states she 'fell down the stairs.' The nurse notices she has old bruising on her upper arms and neck, she is wearing long sleeves on a hot day and she looks at the floor when answering questions. When the nurse asks if she feels safe at home, she says 'I'm fine — please just fix my arm.' What is the nurse's MOST therapeutic response?",
    options: [
      "Accept her response — the patient has denied abuse and the nurse must respect her autonomy",
      "'I can see you're in pain. I want you to know that I'm here if you need to talk, you are safe here, and I have some information I'd like to give you before you leave regardless of what you decide to do.'",
      "Tell her directly 'I think you're being abused and I'm going to call the police'",
      "Insist she disclose the real cause of her injury before treating her fracture",
    ],
    correct: 1,
    explanation: "This patient has multiple IPV indicators: injury inconsistent with mechanism (stair fall rarely causes bilateral upper arm bruising and neck bruising), old bruising suggesting ongoing abuse, behavioural indicators (long sleeves in hot weather — hiding bruises, floor-gazing — shame/fear), and minimising response. The therapeutic response respects AUTONOMY while ensuring she has information and knows help is available. Option B: acknowledges pain (validates), communicates safety ('you are safe here'), keeps the door open ('if you need to talk'), and commits to providing resources regardless of disclosure. Victims often cannot disclose on the first contact — planting the seed that help is available and non-judgmental is therapeutic. Calling police without consent (Option C) can be dangerous and removes her control. Withholding treatment (Option D) is unethical and coercive.",
    wrongExplanations: [
      "WRONG: Accepting the denial without providing any information or support misses a critical opportunity and leaves her without resources. IPV victims rarely disclose on first presentation — the nurse can still provide information and support.",
      "",
      "WRONG: Calling police without the patient's consent overrides her autonomy and can endanger her — an abuser who discovers police were called may retaliate. Adult IPV in Australia generally requires patient consent for police involvement (unlike child abuse).",
      "WRONG: Withholding pain management and fracture treatment as leverage to obtain disclosure is coercive, unethical and a violation of patient rights. Provide care unconditionally.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is conducting a newborn assessment on a 3-day-old infant. The nurse reviews the mother's antenatal history and notes she is 19 years old, single, had no antenatal care, there were bruises documented at her booking-in appointment (32 weeks — her only visit), and there are concerns noted about housing instability. The infant is healthy but during the assessment the mother says 'I don't know anything about babies. I don't even know why they gave this baby to me.' She appears tearful and overwhelmed. The nurse's colleague says 'Don't worry — lots of new mums feel this way.' What is the nurse's MOST comprehensive response?",
    options: [
      "Agree with the colleague — this is a normal new mother adjustment response",
      "Conduct a comprehensive psychosocial assessment including IPV screening, postnatal depression screening, social support assessment, housing and financial stability, and involve social work proactively",
      "Advise the mother that these feelings are normal and will pass with time",
      "Document concerns and wait to see if the situation improves before escalating",
    ],
    correct: 1,
    explanation: "This scenario has MULTIPLE cumulative risk factors for child maltreatment and maternal crisis: Young primipara (19), single, NO antenatal care (suggests social marginalisation or access barriers), prior documented bruising at booking appointment (IPV indicator), housing instability, expressed inability to cope ('don't know why they gave this baby to me') and tearfulness. While some adjustment is normal, this CLUSTER of risk factors requires PROACTIVE comprehensive assessment, NOT reassurance and monitoring. COMPREHENSIVE ACTION: IPV screening (private, using SAFE tool), postnatal depression screening (EPDS), assess social support network, housing and financial stability assessment, connect with social work, parenting support services (e.g., midwifery outreach, family nurse partnership programmes), community child health nursing follow-up. The colleague's dismissal is normalisation of a risk situation. The nurse must advocate for comprehensive assessment.",
    wrongExplanations: [
      "WRONG: The colleague's normalisation ignores multiple cumulative risk factors. While adjustment feelings are normal, the cluster of risk factors (age, isolation, no antenatal care, prior IPV indicators, housing instability) requires proactive assessment.",
      "",
      "WRONG: 'It will pass with time' is false reassurance that ignores documented risk factors and a vulnerable mother's distress. This is a therapeutic miss with potential child protection implications.",
      "WRONG: 'Wait and see' is inappropriate when multiple risk factors are already documented. Early proactive intervention prevents harm — reactive intervention after harm has occurred is too late.",
    ],
  },
  {
    level: "Advanced",
    question: "A 6-year-old boy is admitted for the third time in 8 months with different diagnoses — first a seizure, then an unusual metabolic finding, now recurrent vomiting. Each time, the mother provides a detailed medical history, appears knowledgeable and is constantly present at the bedside. She advocates aggressively for multiple tests. All investigations are normal. The ward nurses have noticed that the child's symptoms consistently improve when the mother is absent during nursing handover breaks but return when she is present. The child is pleasant, compliant and seems to enjoy hospital admission. What is the nurse's PRIORITY concern?",
    options: [
      "The child likely has an undiagnosed medical condition — advocate for more comprehensive investigation",
      "The mother has significant medical anxiety — refer her to psychological support",
      "The pattern is highly suspicious for Factitious Disorder Imposed on Another (Munchausen by Proxy) — document observations, notify the treating team and child protection immediately",
      "The child may have conversion disorder — refer to paediatric psychiatry",
    ],
    correct: 2,
    explanation: "This presentation has CLASSIC FEATURES of FACTITIOUS DISORDER IMPOSED ON ANOTHER (FDIA/Munchausen by Proxy): Multiple unexplained symptoms across multiple admissions, mother is highly knowledgeable and present (classic perpetrator profile), SYMPTOMS RESOLVE IN MOTHER'S ABSENCE AND RETURN ON HER RETURN (the most diagnostic feature — document meticulously), child appears well despite reported serious symptoms, normal investigations repeatedly, child's unusual comfort with hospitalisation (normalised experience). PRIORITY: Document the temporal pattern of symptoms relative to maternal presence with precise times, notify the treating team IMMEDIATELY, notify child protective services (this is child abuse — the child is being harmed to generate medical attention for the parent), the team will likely implement supervised observation (separating child and parent while documenting). DO NOT alert the mother — covert observation may be required. This form of abuse has significant mortality risk.",
    wrongExplanations: [
      "WRONG: Pursuing more investigations without considering FDIA perpetuates the abuse and exposes the child to unnecessary medical procedures (which is part of the harm in FDIA). The pattern — not investigation results — is the key diagnostic feature.",
      "WRONG: While maternal anxiety may coexist, the symptom pattern (resolution with absence, return with presence) is the defining feature of FDIA — not just anxiety. Medical anxiety does not cause symptoms to appear and disappear based on parental presence.",
      "",
      "WRONG: Conversion disorder is a child's condition not related to parental induced symptoms. The key indicator here — symptoms that appear when the mother is present and resolve when she is absent — is diagnostic of FDIA, not conversion disorder.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse discovers that her colleague — a male registered nurse with 15 years experience — has been entering a cognitively impaired female patient's room after midnight when the ward is quiet. The patient cannot reliably self-report due to advanced dementia. The nurse noticed the colleague leaving the room quickly when she approached, and the patient appears distressed and restless after his visits. The patient has a new unexplained bruise on her inner thigh. What is the nurse's CORRECT sequence of actions?",
    options: [
      "Speak to the colleague privately and give him an opportunity to explain before escalating",
      "Document specific objective observations with times and dates, immediately report to the nurse manager (or after-hours supervisor), notify AHPRA, ensure the patient has immediate safety assessment and do not allow the colleague unsupervised access to the patient",
      "Discuss with other nursing staff first to see if anyone else has noticed anything",
      "Wait for more evidence before reporting — a report without proof could destroy an innocent person's career",
    ],
    correct: 1,
    explanation: "This scenario involves SUSPECTED SEXUAL ABUSE OF A VULNERABLE PATIENT by a registered healthcare provider — a serious criminal matter and mandatory AHPRA notification situation. The nurse must act IMMEDIATELY: DOCUMENT specific objective observations (times, dates, colleague's behaviour, patient's distress, bruise location and appearance), REPORT to nurse manager/after-hours supervisor IMMEDIATELY — patient's safety is at risk NOW, ENSURE PATIENT SAFETY — the colleague must not have unsupervised access to this patient pending investigation, NOTIFY AHPRA (Australian Health Practitioner Regulation Agency) — registered practitioners who pose risk to the public must be reported, PRESERVE evidence — do not discuss widely, do not touch or clean the bruise area before medical examination. Private confrontation (Option A) risks alerting the colleague to destroy evidence. Group consensus (Option C) delays reporting while the patient remains at risk. 'Waiting for proof' (Option D) is not how mandatory reporting works — reasonable suspicion is the threshold, and a vulnerable patient's safety cannot wait for proof.",
    wrongExplanations: [
      "WRONG: Speaking privately first allows the colleague to prepare a cover story, potentially destroy evidence, and the patient remains at risk during the delay. Immediate reporting to management is required.",
      "",
      "WRONG: Seeking group consensus delays the report while a vulnerable patient may be at ongoing risk. Each nurse has an independent obligation to report. Group discussion may also contaminate the investigation.",
      "WRONG: The threshold for reporting is REASONABLE SUSPICION — not proof. A vulnerable dementia patient with unexplained inner thigh bruising and distress after midnight visits by a colleague is beyond reasonable suspicion. Waiting for proof while the patient is at risk is not acceptable.",
    ],
  },
  {
    level: "Advanced",
    question: "A community health nurse visits a 45-year-old woman who called the helpline saying she is afraid of her partner. When the nurse arrives, the partner answers the door and states 'My wife is fine — she was just having a bad day when she called. She doesn't want to see anyone.' The wife appears briefly in the hallway, makes eye contact with the nurse and quickly looks away. The partner refuses to leave them alone. What is the nurse's MOST appropriate action?",
    options: [
      "Accept the partner's statement — the patient has not requested help directly",
      "Leave and document the visit — the nurse cannot force entry into a home",
      "State clearly: 'I am required to speak with your wife directly as part of my professional obligation. If you prevent me from doing so I will need to call police for a welfare check.' Attempt to create a private moment with the patient",
      "Call police immediately — the partner is preventing access to the patient",
    ],
    correct: 2,
    explanation: "This is a SAFETY-CRITICAL situation — the nurse has been prevented from conducting a welfare assessment of a patient who proactively called for help. The appropriate response: Assert professional obligation to speak directly with the patient ('I am required to speak with your wife privately as part of my professional duty of care'). This removes the interaction from personal confrontation to professional obligation. If still denied access, escalate to police for a welfare check — this is a legitimate reason for police intervention. The brief eye contact and quick look-away from the wife communicates fear and a desire for help but inability to safely express it. Leaving (Option B) abandons a woman who called for help and may be in danger. Accepting the partner's statement (Option A) ignores that the patient herself called — her call IS her request for help. Calling police immediately (Option D) may be the next step but asserting the professional obligation to access the patient first is appropriate.",
    wrongExplanations: [
      "WRONG: The patient called the helpline — that IS her request for help. The partner is preventing access to an at-risk patient who has already made contact. Accepting the partner's statement ignores the patient's direct request.",
      "WRONG: Leaving abandons a woman who reached out for help. The nurse has a professional duty of care — document that access was denied and escalate appropriately, but do not simply leave without attempting to assert access.",
      "",
      "WRONG: Calling police immediately is a potential escalation that may increase immediate danger. Asserting the professional obligation first is the appropriate first step — escalating to police if the partner continues to refuse.",
    ],
  },
  {
    level: "Advanced",
    question: "A school nurse is approached by a 14-year-old girl who says 'I need to tell you something but you have to promise not to tell anyone.' Before the nurse can respond, the girl says 'My stepfather has been touching me in my bedroom at night for the past year. I don't want Mum to know because she'll hate me.' What is the MOST appropriate nursing response?",
    options: [
      "Promise confidentiality to encourage full disclosure — more information is needed before reporting",
      "'I can't promise that. What I can promise is that I will do everything I can to keep you safe, and that nothing that has happened is your fault. I need to tell someone who can help protect you — and I will be with you through that process.'",
      "Listen to the full disclosure first and then report — gathering complete information improves the report quality",
      "Encourage her to tell her mother directly — family support is important in these situations",
    ],
    correct: 1,
    explanation: "This response is correct for multiple reasons: NEVER promise confidentiality to a child about to disclose abuse — this is an impossible promise that the nurse CANNOT keep (mandatory reporting will break the promise and destroy trust). The correct response: Be honest that full confidentiality cannot be promised (before the disclosure if possible), reassure that whatever happens is NOT her fault, commit to safety ('I will do everything to keep you safe'), explain that someone who can help must be told AND that the nurse will support her through the process. This MAINTAINS TRUST while FULFILLING LEGAL OBLIGATIONS. The child's fear that her mother will 'hate her' is a common shame response to abuse — the nurse must address this ('nothing that happened is your fault'). Encouraging the child to tell her mother (Option D) is inappropriate — the mother may not be a safe person, and confronting the family without professional intervention first is dangerous.",
    wrongExplanations: [
      "WRONG: Promising confidentiality before an abuse disclosure is a promise the nurse cannot keep. When the mandatory report is made (as it must be), the broken promise destroys the therapeutic relationship and teaches the child that adults cannot be trusted.",
      "",
      "WRONG: Letting the full disclosure occur before mentioning mandatory reporting is not necessarily wrong — but the nurse should clarify that full confidentiality cannot be promised AS EARLY AS POSSIBLE. This option also doesn't address the response to the disclosure.",
      "WRONG: Encouraging the child to tell her mother without professional intervention is dangerous — the mother's response is unknown and unpredictable. This is not the correct first step. Professional intervention (child protective services) must be initiated first.",
    ],
  },
];

const clinicalPearls = [
  "The most dangerous question you can ask an abuse victim in front of their abuser is any question about safety. Abusers routinely accompany victims to healthcare appointments specifically to prevent disclosure. Separating the patient from their companion using a universal clinical policy is not just good practice — it is a safety intervention.",
  "Mandatory reporting is not optional, not discretionary and not subject to the patient's consent — for child abuse. The law places the obligation on the nurse regardless of what the patient or family wants. Reasonable suspicion is the threshold. You are not the investigator — your job is to report and let trained professionals investigate.",
  "When a child makes a spontaneous disclosure, your response in the first 30 seconds either opens or closes the door. 'I'm glad you told me. You were very brave. What happened to you is not your fault. I'm going to make sure you are safe.' Do NOT say 'Are you sure?' Do NOT say 'That sounds serious.' Do NOT show shock or disbelief.",
  "The cycle of violence explains why victims stay and return — not weakness, not stupidity, and not complicity. The honeymoon phase is real — the partner they fell in love with returns. The fear of leaving is rational — the statistics on femicide at point of departure are real. Never judge a victim for staying.",
  "Elder abuse is the most invisible form of family violence — the victim may be cognitively impaired, dependent, isolated and ashamed. A 90-year-old woman whose son takes her pension every month is experiencing financial abuse. She may not name it as abuse. Your job is to recognise it, document it and report it.",
  "Factitious Disorder Imposed on Another is child abuse. The child is being harmed — medically, psychologically and developmentally — to serve the parent's psychological needs. The harm is real even when the symptoms are fabricated. The mortality rate when undetected is significant. Document the temporal relationship between symptoms and parental presence obsessively.",
  "The nurse's belief is the most powerful therapeutic intervention in abuse care — more powerful than any resource or referral. 'I believe you. This is not your fault. You deserve to be safe.' These three sentences have changed lives and saved them.",
];

export default function AbuseNeglectPage() {
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
            <h1 className="font-black text-base text-gray-900">🛡️ Abuse & Neglect</h1>
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
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
              <p className="text-red-700 text-sm leading-relaxed font-medium">
                🛡️ Abuse and neglect recognition and reporting is tested throughout NCLEX. Master mandatory reporting obligations, abuse indicators and trauma-informed nursing responses!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most common NCLEX traps on Abuse & Neglect — study these carefully!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Abuse & Neglect!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review mandatory reporting and abuse indicators." :
                        "Keep studying! Focus on mandatory reporting thresholds, abuse red flags and nursing response."}
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