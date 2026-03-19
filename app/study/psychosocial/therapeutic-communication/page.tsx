"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Therapeutic Communication",
    icon: "💬",
    color: "blue",
    content: [
      "Therapeutic communication is the MOST tested psychosocial skill on NCLEX — it appears in virtually every clinical area, not just psychiatry",
      "Definition: A purposeful, goal-directed form of communication used by nurses to promote the patient's wellbeing, self-understanding and ability to cope",
      "The nurse's THERAPEUTIC USE OF SELF: Deliberate use of one's personality, insights, perceptions and judgements to establish a therapeutic relationship — the nurse IS the tool",
      "Key elements: Empathy (not sympathy), genuineness, unconditional positive regard, active listening, non-judgmental attitude",
      "EMPATHY vs SYMPATHY: Empathy = understanding the patient's experience from their perspective ('I can hear how frightening this is'). Sympathy = sharing the feeling ('That must be so hard') — therapeutic communication uses empathy",
      "Non-verbal communication: 55% of communication is body language — eye contact (culturally appropriate), open posture, lean forward, nodding, facial expression congruent with content",
      "NCLEX tip: When asked what to say to a patient — the BEST answer almost always acknowledges feelings FIRST, before giving information, advice or reassurance",
    ],
  },
  {
    title: "Therapeutic Communication Techniques",
    icon: "✅",
    color: "green",
    content: [
      "ACTIVE LISTENING: Full attention, non-verbal engagement, without interruption. 'I am here and fully present with you'",
      "OPEN-ENDED QUESTIONS: Encourage elaboration and expression. 'Tell me more about that.' 'What has that been like for you?' 'How are you feeling about this?'",
      "BROAD OPENINGS: Invite the patient to direct the conversation. 'What would you like to talk about today?' 'Where would you like to begin?'",
      "RESTATING/PARAPHRASING: Repeat key words or rephrase to show understanding and encourage continuation. Patient: 'I can't sleep and I'm not eating.' Nurse: 'You're having trouble sleeping and eating.'",
      "REFLECTING: Mirror the emotional content back to the patient. 'It sounds like you're feeling overwhelmed.' 'You seem anxious about this.'",
      "CLARIFYING: Seek understanding of unclear statements. 'I'm not sure I understand — can you tell me more about that?' 'What do you mean when you say...?'",
      "FOCUSING: Help patient stay on topic. 'You mentioned feeling scared — let's stay with that for a moment.'",
      "SUMMARISING: Condense key points at the end of interaction. 'Let me make sure I understood what you shared today...'",
      "USING SILENCE: Deliberate pause allowing patient to think, feel and continue at their own pace. One of the most powerful tools — resist the urge to fill silence",
      "OFFERING SELF: Making the nurse's presence available. 'I'll sit with you for a while.' 'I'm here if you want to talk.'",
      "VALIDATION: Acknowledge the patient's feelings as understandable. 'It makes sense that you would feel that way given everything you've been through.'",
    ],
  },
  {
    title: "Non-Therapeutic Communication Techniques — Block to Avoid",
    icon: "🚫",
    color: "red",
    content: [
      "GIVING FALSE REASSURANCE: 'Everything will be okay.' 'Don't worry.' 'I'm sure it will work out.' — Dismisses concerns, destroys trust when outcomes are bad, closes conversation",
      "GIVING UNSOLICITED ADVICE: 'You should...' 'If I were you...' 'The best thing would be...' — Takes away patient autonomy, communicates judgment",
      "MINIMISING/BELITTLING: 'Everyone goes through hard times.' 'You have so much to be grateful for.' 'Others have it worse.' — Invalidates the patient's experience",
      "CHANGING THE SUBJECT: Moving to a different topic when patient expresses something difficult — avoids therapeutic work, communicates discomfort",
      "CLOSED QUESTIONS: Questions answered with yes/no — 'Are you feeling better?' 'Did you sleep?' Limits expression",
      "WHY QUESTIONS: 'Why did you do that?' 'Why didn't you take your medication?' — Implies judgment and criticism, puts patient on defensive",
      "AGREEING/DISAGREEING: 'You're absolutely right.' 'No, that's not true.' — Shuts down exploration, imposes nurse's values",
      "STEREOTYPING/GENERALISING: 'All patients with depression feel that way.' — Fails to see the individual",
      "EXCESSIVE QUESTIONING: Asking multiple questions at once — overwhelming, feels like interrogation",
      "DEFENDING: 'The doctor is very experienced.' 'This hospital provides excellent care.' — Shuts down patient's concerns, communicates loyalty to institution over patient",
      "INTERPRETING/ANALYSING: 'I think the real reason you...' — Imposes the nurse's interpretation rather than exploring the patient's meaning",
      "APPROVAL/DISAPPROVAL: 'That's wonderful!' 'I'm so disappointed in your choice.' — Makes patient dependent on nurse's evaluation rather than their own judgement",
    ],
  },
  {
    title: "The Nurse-Patient Therapeutic Relationship — Peplau's Phases",
    icon: "🤝",
    color: "purple",
    content: [
      "Hildegard Peplau developed the interpersonal theory of nursing — the nurse-patient relationship is the foundation of psychiatric nursing",
      "PHASE 1 — ORIENTATION: Nurse and patient meet, establish rapport, define roles, identify problems and set goals. Patient seeking help, nurse offering assistance. Anxiety is often highest here",
      "PHASE 2 — WORKING (IDENTIFICATION & EXPLOITATION): The active therapeutic work occurs here. Patient identifies with the nurse, explores problems, develops skills, uses available services. Nurse provides empathy, facilitates problem-solving",
      "PHASE 3 — TERMINATION (RESOLUTION): Goals have been achieved or patient is being discharged/transferred. Review of progress, celebration of growth, plan for continued care. May trigger feelings of loss or abandonment — especially significant for patients with attachment difficulties",
      "NURSE ROLES across phases: Stranger → Resource person → Teacher → Leader → Surrogate → Counsellor",
      "THERAPEUTIC BOUNDARIES: The therapeutic relationship exists exclusively for the patient's benefit. Any relationship that meets the nurse's needs is a boundary violation",
      "Boundary violations: Social media connection, accepting gifts of value, self-disclosure beyond therapeutic purpose, romantic attraction, financial transactions",
      "COUNTERTRANSFERENCE: Nurse's emotional reaction to the patient based on the nurse's own history. Must be recognised and managed through supervision — not enacted in the therapeutic relationship",
      "TRANSFERENCE: Patient projects feelings from past relationships onto the nurse ('You remind me of my mother'). Acknowledge without reinforcing or denying",
    ],
  },
  {
    title: "Communication with Special Populations",
    icon: "🌍",
    color: "orange",
    content: [
      "CONFUSED/DELIRIOUS patients: Use simple, short sentences. One instruction at a time. Calm reassuring tone. Reorientation (person, place, time) — gentle, not confrontational. Use patient's name. Reduce environmental stimuli",
      "PATIENTS WITH DEMENTIA: Speak slowly and clearly. Use patient's name. Maintain eye contact at same level. Use simple familiar words. Avoid arguing about reality — use therapeutic fibbing for distress ('Your husband is coming later') if it reduces suffering without harm",
      "PATIENTS WITH HEARING IMPAIRMENT: Face the patient directly, adequate lighting, speak clearly without shouting, use written communication, ensure hearing aids are in place, use interpreter if needed",
      "PATIENTS WITH APHASIA (post-stroke): Allow extra time, use yes/no questions, picture boards, writing. Do NOT pretend to understand when you don't — this erodes trust",
      "PATIENTS EXPERIENCING PSYCHOSIS: Calm, clear, non-threatening tone. Simple language. Do not argue with hallucinations or delusions. Focus on reality and immediate environment. Avoid touching without warning",
      "PATIENTS IN CRISIS: Calm, slow speech. Acknowledge feelings. Ask directly about suicidal/homicidal intent. Stay with the patient. Reduce environmental stimuli",
      "CHILDREN: Use age-appropriate language (Piaget stages), use play, involve parents, allow expression through drawings and play, explain procedures in simple concrete terms, never use scary metaphors",
      "CULTURALLY AND LINGUISTICALLY DIVERSE patients: Use professional interpreters (never family members for clinical information), assess cultural health beliefs and communication preferences, avoid medical jargon, check understanding without asking 'Do you understand?'",
      "NCLEX tip: When communicating with any special population — acknowledge feelings first, use simple language, verify understanding and never rush",
    ],
  },
  {
    title: "Assertive Communication and Conflict Resolution",
    icon: "💪",
    color: "blue",
    content: [
      "ASSERTIVE communication: Express needs, feelings and opinions clearly, directly and respectfully while respecting others' rights — the gold standard for professional nursing communication",
      "PASSIVE communication: Avoids expressing needs, allows others to violate boundaries, leads to resentment. Example: Nurse accepts an unsafe patient assignment without speaking up",
      "AGGRESSIVE communication: Expresses needs by violating others' rights, uses blame, criticism, raised voice. Damages relationships and teamwork",
      "PASSIVE-AGGRESSIVE communication: Indirect expression of hostility — eye-rolling, sarcasm, deliberate inefficiency, withholding. Toxic to team environments",
      "I-STATEMENTS: Assertive communication tool — 'I feel [emotion] when [behaviour] because [impact], and I would like [specific change].' Example: 'I feel concerned when handover is rushed because I may miss critical information. I would like 15 minutes for each patient.'",
      "DESC SCRIPT: Describe the situation, Express feelings, Specify desired change, state Consequences. Used for assertive conflict resolution",
      "SBAR: Situation, Background, Assessment, Recommendation — structured clinical communication tool for handover, escalation and team communication",
      "Chain of command: If a safety concern is not addressed by the immediate supervisor — escalate to the next level. Document all escalation attempts",
      "Incivility in nursing: Horizontal violence (nurse-to-nurse aggression) harms patient safety and staff wellbeing. Nurses have a responsibility to address and report incivility",
    ],
  },
  {
    title: "Patient Education — Principles and Strategies",
    icon: "📚",
    color: "green",
    content: [
      "Patient education is a core nursing responsibility and a legal obligation — documented informed consent and discharge education are legally required",
      "HEALTH LITERACY: The degree to which individuals can obtain, process and understand health information. Low health literacy affects 50%+ of adults — assume low literacy until assessed",
      "TEACH-BACK METHOD: Ask patient to explain the information back in their own words. 'I want to make sure I explained this clearly — can you tell me in your own words how to take this medication?' Most effective method for verifying understanding",
      "READINESS TO LEARN: Assess physical comfort, emotional readiness, motivation and prior knowledge before teaching. Do not teach during acute pain, extreme anxiety or crisis",
      "LEARNING STYLES: Visual (diagrams, videos), auditory (verbal explanation), kinesthetic (demonstrations, practice). Use multiple modalities",
      "LITERACY-APPROPRIATE materials: Use plain language (6th grade reading level), short sentences, active voice, bullet points, pictures/diagrams",
      "TIMING: Best done when patient is comfortable, alert and engaged. Avoid right before discharge if complex information — teach throughout hospitalisation",
      "BARRIERS to learning: Pain, anxiety, low literacy, language barrier, cognitive impairment, cultural beliefs, denial of illness, hearing/vision impairment",
      "DOCUMENTATION: Document what was taught, patient's response, evidence of understanding (teach-back), who was present and plan for follow-up",
      "MOTIVATIONAL factors: Patient's own identified goals, immediate relevance to daily life, perceived severity and susceptibility (Health Belief Model)",
    ],
  },
  {
    title: "Documentation and Handover Communication",
    icon: "📋",
    color: "orange",
    content: [
      "Documentation is a LEGAL DOCUMENT — if it was not documented, it was not done. Accurate, timely, objective documentation is a professional and legal obligation",
      "Principles of good documentation: Timely (as soon as possible after event), accurate, complete, objective (describe behaviours — not interpretations), legible, signed",
      "OBJECTIVE vs SUBJECTIVE: Document what you observe and measure, not what you interpret. Wrong: 'Patient was confused and agitated.' Right: 'Patient unable to state date, year or location. Attempted to climb out of bed three times during assessment'",
      "DIRECT QUOTES: When documenting patient statements, use direct quotes in quotation marks — especially for safety-relevant statements. 'I want to kill myself' not 'patient expressed suicidal ideation'",
      "SBAR for handover: Situation (what is happening now), Background (relevant history), Assessment (what you think is going on), Recommendation (what you need the receiver to do)",
      "ISBAR: Identity → Situation → Background → Assessment → Recommendation — adds patient identity verification at the start",
      "Bedside handover: Involves the patient — improves safety, patient engagement and communication accuracy",
      "Critical communication: Verbal orders must be written down, read back and confirmed. Critical test results must be communicated within specific timeframes (check facility policy)",
      "Never alter documentation: Any correction must be a single line through the error, date, time and initials. Electronic records — follow facility amendment procedures. NEVER obliterate or delete",
    ],
  },
  {
    title: "Communication in End-of-Life Care",
    icon: "🕊️",
    color: "purple",
    content: [
      "End-of-life communication requires presence, honesty, sensitivity and respect for cultural and individual values",
      "BREAKING BAD NEWS — SPIKES framework: Setting (private, seated), Perception (assess what patient knows), Invitation (ask what they want to know), Knowledge (provide information), Emotions (respond to emotional reaction), Summary/Strategy (summarise and plan)",
      "Nurse's role when physician delivers bad news: Be present, provide emotional support, allow silence, answer questions honestly, arrange follow-up",
      "PROGNOSTIC COMMUNICATION: Patients and families have the right to accurate prognostic information. Avoid false hope but acknowledge uncertainty. 'I wish I could give you certainty. What I can tell you is...'",
      "DISCUSSION ABOUT DYING: Use clear language — 'dying' not 'passing away' or 'going to a better place.' Euphemisms create confusion and prevent genuine conversations",
      "SPIRITUAL CARE: Assess spiritual needs and resources. Do not impose beliefs. Connect patient with chaplain or spiritual leader of their choice",
      "FAMILY COMMUNICATION: Involve family as patient wishes. When patient cannot speak for themselves — involve designated decision-maker. Family meetings with multidisciplinary team are best practice",
      "CULTURAL CONSIDERATIONS: Some cultures prefer family to receive prognostic information rather than the patient. Respect these wishes where legally and ethically appropriate. Assess preferences early",
      "GRIEF: Nurses experience grief too — acknowledge this, seek peer support, participate in debriefing after patient deaths. Compassion fatigue is real and requires proactive management",
    ],
  },
  {
    title: "Group Therapy Communication",
    icon: "👥",
    color: "blue",
    content: [
      "Group therapy is a core therapeutic modality in psychiatric nursing — the nurse may be a co-facilitator",
      "CURATIVE FACTORS (Yalom): Instillation of hope, universality (you are not alone), imparting information, altruism, corrective recapitulation of family group, development of socialising techniques, imitative behaviour, interpersonal learning, group cohesiveness, catharsis, existential factors",
      "Types of groups: Psychoeducational (information), support groups, process groups (explore interpersonal dynamics), activity groups, community meetings",
      "NURSE'S ROLE in group: Establish ground rules (confidentiality, respect, participation), facilitate not direct, draw out quiet members, manage dominant members, address unsafe disclosures appropriately",
      "CONFIDENTIALITY in group: Participants agree not to disclose others' personal information outside the group. LIMITS: safety concerns override group confidentiality (as with individual therapy)",
      "GROUP DYNAMICS: Scapegoating (one member blamed for group problems), monopolising (one member dominates), subgrouping (cliques). Nurse facilitator addresses these therapeutically",
      "STAGES of group development (Tuckman): Forming → Storming → Norming → Performing → Adjourning",
      "NCLEX tip: In group therapy scenarios — the nurse acknowledges group members' contributions, redirects safely to the group when individual safety disclosures are made, and maintains therapeutic boundaries for all members simultaneously",
    ],
  },
];

const mnemonics = [
  {
    title: "Therapeutic Communication — PEARLS",
    acronym: "PEARLS",
    breakdown: ["Paraphrase/Reflect", "Explore feelings", "Ask open questions", "Remain non-judgmental", "Listen actively", "Silence (use it)"],
    memory: "PEARLS of therapeutic communication — use these techniques to build trust and open communication with every patient!",
    color: "green",
  },
  {
    title: "Non-Therapeutic Blockers — DAGMAS",
    acronym: "DAGMAS",
    breakdown: ["Defending", "Advice giving", "Generalising", "Minimising", "Agreeing/Disagreeing", "Subject changing"],
    memory: "DAGMAS blocks therapeutic communication — avoid all six or you will shut down the patient's expression!",
    color: "red",
  },
  {
    title: "Peplau's Phases",
    acronym: "OWT",
    breakdown: ["Orientation (meet, establish rapport)", "Working (active therapeutic work)", "Termination (review, discharge, closure)"],
    memory: "OWT — Orientation, Working, Termination. The therapeutic relationship builds through all three phases in ORDER!",
    color: "purple",
  },
  {
    title: "SBAR Communication",
    acronym: "SBAR",
    breakdown: ["Situation (what is happening)", "Background (relevant history)", "Assessment (what you think)", "Recommendation (what you need)"],
    memory: "SBAR — the universal language of clinical handover. Use it every time you communicate a clinical concern to a physician or colleague!",
    color: "blue",
  },
];

const alerts = [
  { text: "FALSE REASSURANCE is the most common non-therapeutic response on NCLEX — 'Everything will be fine' is ALWAYS wrong when a patient expresses a genuine concern!", severity: "high" },
  { text: "WHY questions are non-therapeutic — 'Why didn't you take your medication?' implies blame and puts the patient on the defensive. Use open-ended 'what' or 'tell me' instead!", severity: "high" },
  { text: "CHANGING THE SUBJECT when a patient expresses something emotionally difficult = therapeutic avoidance. Always explore the feeling before moving on!", severity: "high" },
  { text: "ADVICE GIVING without being asked is non-therapeutic — 'You should...' takes away patient autonomy. Explore options WITH the patient instead!", severity: "high" },
  { text: "NEVER use family members as interpreters for clinical information — always use a professional medical interpreter. Family members omit, interpret or modify information!", severity: "high" },
  { text: "TEACH-BACK is the gold standard for verifying patient understanding — 'Do you understand?' is NOT adequate. Ask the patient to explain it back!", severity: "medium" },
  { text: "SILENCE is therapeutic — resist the urge to fill silences. Silence gives the patient space to think, feel and continue. Allow at least 10-15 seconds before responding!", severity: "medium" },
  { text: "TERMINATION PHASE triggers abandonment feelings especially in patients with attachment difficulties (BPD). Plan termination from the beginning of the relationship!", severity: "medium" },
  { text: "COUNTERTRANSFERENCE must be managed through supervision — acting on emotional reactions to patients is a boundary violation that harms the therapeutic relationship!", severity: "medium" },
  { text: "DEFENDING the institution or physician ('The doctor is very experienced') when a patient expresses a concern shuts down communication and prioritises the institution over the patient!", severity: "medium" },
  { text: "MINIMISING ('Others have it worse', 'At least you have...') invalidates the patient's experience. Never compare a patient's suffering to anyone else's!", severity: "low" },
  { text: "THERAPEUTIC FIBBING in dementia care (e.g., 'Your husband is coming') may be acceptable if it reduces suffering — but must never be used to exploit or deceive!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A patient tells the nurse 'I've just been told I have cancer. I don't know what to do.' Which response by the nurse is MOST therapeutic?",
    options: [
      "'Try not to worry — many people survive cancer with treatment today.'",
      "'Have you considered getting a second opinion?'",
      "'That must have been devastating to hear. Tell me what's going through your mind right now.'",
      "'The oncology team here is excellent — you're in good hands.'",
    ],
    correct: 2,
    explanation: "Option C is therapeutic because it: acknowledges the emotional impact of the news (empathy), invites the patient to express their feelings and thoughts (open-ended), and demonstrates the nurse is present and engaged. The nurse meets the patient where they are emotionally BEFORE offering any information, advice or reassurance. Option A is false reassurance — dismisses the patient's fear and is factually uncertain. Option B gives unsolicited advice — the patient did not ask about second opinions. Option D defends the institution — shuts down the patient's expression of fear by redirecting to institutional competence.",
    wrongExplanations: [
      "WRONG: 'Try not to worry' is classic false reassurance — it dismisses the patient's legitimate fear and is therapeutically ineffective. Worry is entirely appropriate when one has just received a cancer diagnosis.",
      "WRONG: Suggesting a second opinion is unsolicited advice-giving — the patient did not ask for suggestions. This shifts the conversation away from the patient's emotional experience to an action item.",
      "",
      "WRONG: Defending the hospital and oncology team closes down the patient's emotional expression. When someone says 'I don't know what to do,' they need to be heard — not redirected to institutional credentials.",
    ],
  },
  {
    level: "Knowledge",
    question: "A nurse is caring for a patient who says 'I feel like I'm falling apart. My husband left, I lost my job and now I'm in hospital.' Which response BEST demonstrates the therapeutic technique of REFLECTING?",
    options: [
      "'You've had so many losses at once — it sounds like you're feeling completely overwhelmed.'",
      "'Have you talked to a counsellor about all of this?'",
      "'Things will get better. You just need some time.'",
      "'Tell me which of these is most upsetting to you.'",
    ],
    correct: 0,
    explanation: "REFLECTING mirrors the emotional content of what the patient expressed back to them, demonstrating understanding and inviting elaboration. Option A reflects both the content (multiple losses) and the emotion (feeling overwhelmed/falling apart) — this is therapeutic reflecting. It validates the patient's experience without minimising, advising or redirecting. Option B changes the subject to advice. Option C offers false reassurance ('things will get better'). Option D is a focusing technique (not reflecting) — it is therapeutic but doesn't best demonstrate reflecting specifically.",
    wrongExplanations: [
      "",
      "WRONG: Suggesting a counsellor is advice-giving — the patient expressed distress, not a request for referral suggestions. This redirects away from the patient's emotional expression.",
      "WRONG: 'Things will get better' is false reassurance — it dismisses the patient's current legitimate pain with an uncertain promise about the future.",
      "WRONG: Asking which loss is most upsetting is a focusing technique — therapeutic, but it does not demonstrate REFLECTING, which mirrors the emotional content back to the patient.",
    ],
  },
  {
    level: "Application",
    question: "A nurse asks a patient 'How have you been feeling since starting the new medication?' The patient responds 'Fine.' The nurse says 'That's great!' and moves on to the next assessment question. What is the PRIMARY communication error the nurse made?",
    options: [
      "Using a closed question — should have asked an open-ended question",
      "Using approval ('That's great!') which closes further exploration and makes the patient dependent on the nurse's evaluation",
      "Moving too quickly — should have allowed more silence",
      "Both A and B — the nurse used a closed question and approval",
    ],
    correct: 3,
    explanation: "The nurse made TWO communication errors: First, 'How have you been feeling?' is actually a somewhat open question but 'Fine' is a non-informative answer — the nurse should have followed up with a broad opening or clarifying question ('Tell me more about fine — what does that look like for you?'). Second and more critically, responding with 'That's great!' is APPROVAL — a non-therapeutic technique that closes down further exploration, imposes the nurse's evaluation on the patient's self-report, and may discourage the patient from sharing anything less than positive in future. A patient experiencing side effects or worsening symptoms may suppress this information to maintain the nurse's approval response.",
    wrongExplanations: [
      "WRONG: While follow-up was needed, the closed vs open question distinction is secondary here. The more significant error is the approving response that closed down exploration.",
      "WRONG: The approval error is the primary therapeutic communication issue but the lack of follow-up to a non-informative answer ('Fine') is also an error. Both A and B together is the most complete answer.",
      "WRONG: Silence was not the issue here — the patient gave a minimal response and the nurse needed to explore it further, not wait silently.",
      "",
    ],
  },
  {
    level: "Application",
    question: "A nurse is conducting discharge teaching for a patient with newly diagnosed heart failure. She explains the low-sodium diet, daily weighing, fluid restriction and medication regimen. At the end she asks 'Do you have any questions? Do you understand everything?' The patient says 'Yes, I think so.' What is the MOST significant problem with this teaching session?",
    options: [
      "Too much information was given at once without assessing readiness to learn first",
      "The nurse did not use teach-back — asking 'Do you understand?' does not verify actual comprehension",
      "The session should have included a family member",
      "Both A and B are significant problems with this teaching approach",
    ],
    correct: 3,
    explanation: "Both A and B are significant problems: First, READINESS TO LEARN: The nurse did not assess whether the patient was physically comfortable, emotionally ready, cognitively able or motivated to receive this volume of complex information. Heart failure patients are often acutely unwell, fatigued and overwhelmed at discharge. Second, TEACH-BACK: Asking 'Do you understand?' is the least reliable method of verifying comprehension — patients almost always say 'yes' regardless of actual understanding (social desirability, not wanting to disappoint, not knowing what they don't know). The gold standard is teach-back: 'I want to make sure I explained this well — can you show me how you would use the scale?' or 'What would you do if your weight went up 2kg overnight?'",
    wrongExplanations: [
      "WRONG: While A is a real problem, B is equally significant. Doing teach-back is the most evidence-based intervention for safe discharge education. Both are problems.",
      "WRONG: B is a real problem but A is equally significant. Delivering complex discharge education to an unprepared patient without assessing readiness is also a patient safety issue.",
      "WRONG: Family involvement is best practice but is not identified as a mandatory requirement in this scenario. The teach-back and readiness assessment issues are primary.",
      "",
    ],
  },
  {
    level: "Application",
    question: "A patient with schizophrenia says to the nurse 'The nurses on this unit are all plotting against me. You report everything I say to the government. I know you're one of them.' The nurse knows this is a persecutory delusion. Which response is MOST therapeutic?",
    options: [
      "'I understand why you would think that, but I can assure you we are not reporting you to anyone.'",
      "'That must be a terrifying way to feel — like there's no one you can trust here. I want to help if I can.'",
      "'That's not true. We're nurses — our job is to help you, not report you.'",
      "'Let me tell you about our confidentiality policy so you know your information is safe.'",
    ],
    correct: 1,
    explanation: "Option B is therapeutic because it: acknowledges the FEELING behind the delusion (terror, isolation, inability to trust) without confirming or denying the delusional content, expresses genuine presence and willingness to help, and respects the patient's emotional experience. Option A begins therapeutically but ends with denial ('I can assure you...') — arguing against a delusion does not change it and damages trust. Option C directly contradicts the delusion ('That's not true') — this is arguing against a fixed belief which is ineffective and damages rapport. Option D provides information — this may be helpful later but does not first address the emotional experience, which is the most important immediate therapeutic response.",
    wrongExplanations: [
      "WRONG: Assuring the patient that no reporting is happening is attempting to logically disprove a delusion. Delusions are fixed by definition — logical argument does not change them and risks a defensive, escalating response.",
      "",
      "WRONG: Directly contradicting a delusion ('That's not true') increases distress and closes therapeutic communication. The patient experiences the denial as evidence that the nurse is indeed hiding something.",
      "WRONG: Providing factual information about confidentiality policy addresses the cognitive content of the delusion but misses the emotional experience — fear, isolation and mistrust. Acknowledge the feeling first.",
    ],
  },
  {
    level: "Advanced",
    question: "A student nurse is observed telling a patient who is crying about a terminal diagnosis: 'I know exactly how you feel — my grandmother died of cancer last year.' The supervising nurse intervenes. What is the primary therapeutic communication error and what should the supervising nurse teach?",
    options: [
      "The student used self-disclosure inappropriately — sharing personal experiences shifts the focus from patient to nurse and may minimise the patient's unique experience",
      "The student was being empathetic — this type of connection is therapeutic and should be encouraged",
      "The student used false reassurance — saying 'I know how you feel' is falsely reassuring",
      "The student should have referred the patient to a counsellor instead of engaging",
    ],
    correct: 0,
    explanation: "INAPPROPRIATE SELF-DISCLOSURE is the primary error. 'I know exactly how you feel' followed by a personal story: shifts the focus from the patient to the nurse's experience, implies that the nurse DOES know how the patient feels (impossible — each person's grief is unique), may minimise the patient's experience by comparison, and ends the patient's expression of grief to become an audience for the nurse's story. THERAPEUTIC self-disclosure is very limited: only when it genuinely serves the patient's therapeutic goals, brief and purposeful, and returns focus to the patient immediately. The supervising nurse should teach: true empathy acknowledges the patient's unique experience without claiming to share it. 'I can only imagine how difficult this is for you' is empathetic. 'I know exactly how you feel' is not.",
    wrongExplanations: [
      "",
      "WRONG: While the student's intention was empathetic, the execution was counter-therapeutic. True empathy acknowledges the patient's unique experience — claiming to know exactly how someone feels denies the uniqueness of their experience.",
      "WRONG: While 'I know exactly how you feel' does contain an unverifiable claim, the PRIMARY therapeutic communication error is inappropriate self-disclosure — shifting focus from patient to nurse.",
      "WRONG: Referring to a counsellor is not the appropriate immediate response to a patient in acute emotional distress. The nurse should be present and therapeutically responsive in the moment.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is conducting a community health education session with a group of non-English-speaking patients about managing type 2 diabetes. One patient's adult daughter offers to interpret for her mother. The nurse accepts this arrangement. What is the MOST significant concern with this approach?",
    options: [
      "The daughter may not be fluent enough in medical terminology",
      "Using family members as interpreters violates HIPAA privacy regulations in all circumstances",
      "Family interpreters routinely omit, modify, summarise or add information — the daughter may filter information based on her own understanding, cultural beliefs or protective instincts, compromising informed consent and patient autonomy",
      "The session should be rescheduled until a professional interpreter is available",
    ],
    correct: 2,
    explanation: "The MOST SIGNIFICANT concern is the RELIABILITY AND ACCURACY of family interpretation. Research consistently shows that family interpreters: omit medically important information (especially sensitive topics), modify information based on their own understanding or cultural beliefs, may deliberately withhold 'bad news' to protect the patient, may add their own medical opinions, may lack medical vocabulary precision, and create ethical conflicts when patient-family values differ. This directly compromises: informed consent (patient must receive accurate information to consent), patient autonomy (patient's understanding of their own condition), and clinical accuracy (diabetes management requires precise dietary and medication instructions). Professional medical interpreters are trained in accuracy, medical terminology, impartiality and interpreting ethics. They are required by law in many jurisdictions for clinical encounters.",
    wrongExplanations: [
      "WRONG: While fluency is a concern, the more fundamental problem is the ethical and accuracy issues with family interpretation — filtering, omission and modification — not just vocabulary.",
      "WRONG: HIPAA regulations are nuanced regarding family members — patients can consent to family presence. The core issue here is not HIPAA but accuracy, reliability and patient autonomy in clinical communication.",
      "",
      "WRONG: While rescheduling may ultimately be needed, this option doesn't explain WHY the current arrangement is problematic. Understanding the clinical reasoning is what NCLEX tests — the answer must identify the specific concern.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse has been assigned to care for a patient with borderline personality disorder who was admitted following a serious self-harm episode. During the shift, the patient says 'You're the only nurse who actually cares about me. The others are all useless. Can you stay extra after your shift to talk?' The nurse feels genuinely moved by the patient's pain and is considering staying. What should the nurse do?",
    options: [
      "Stay after shift — the therapeutic relationship is the most powerful intervention for BPD and this patient needs the connection",
      "Acknowledge the patient's feelings, maintain clear professional boundaries, decline the request, communicate the interaction to the team and explore the patient's need therapeutically within the shift",
      "Agree to stay but document it as overtime — the patient's safety takes priority over boundary rules",
      "Transfer care to another nurse — the therapeutic relationship has become too intense",
    ],
    correct: 1,
    explanation: "This scenario involves multiple complex dynamics: SPLITTING (idealising this nurse, devaluing others), BOUNDARY TESTING (requesting extra-professional time), and COUNTERTRANSFERENCE (the nurse feels 'genuinely moved' — a signal to reflect, not act). The therapeutic response: acknowledge the patient's feelings warmly ('It sounds like you're feeling really alone right now and need connection — that makes sense given what you've been through'), maintain clear professional boundaries (cannot stay after shift — this is an extra-professional relationship that would harm the therapeutic frame), communicate the interaction to the team (essential for managing splitting across staff), and explore what the patient needs therapeutically within available time. Staying after shift (Option A) violates therapeutic boundaries, reinforces splitting and sets a precedent that cannot be sustained. The nurse's emotional response to the patient is countertransference — valuable clinical information to take to supervision, not a reason to cross boundaries.",
    wrongExplanations: [
      "WRONG: Staying after shift violates therapeutic boundaries regardless of good intentions. The therapeutic relationship requires structure and limits — a nurse who stays extra for one patient cannot do so consistently, and when the boundary eventually reasserts, it feels like abandonment to a BPD patient.",
      "",
      "WRONG: Documenting overtime does not resolve the boundary violation. The issue is not time off the clock — it is the extra-professional nature of the relationship being requested.",
      "WRONG: Transferring care abandons the patient and may be experienced as punishment or abandonment — potentially increasing self-harm risk. The nurse should maintain the therapeutic relationship within appropriate limits.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is handover with an outgoing nurse who reports: 'Bed 4 is a frequent flyer — always complaining, very demanding, exaggerates symptoms to get attention. Just ignore the call light unless it's urgent.' The incoming nurse accepts the patient assignment. During the shift, the patient rings the call light repeatedly and when the nurse responds 20 minutes after the first call, the patient is found in acute respiratory distress with SpO2 82%. What is the PRIMARY systems/communication failure that contributed to this outcome?",
    options: [
      "The outgoing nurse gave an unprofessional handover that led to confirmation bias and premature clinical closure",
      "The incoming nurse should have assessed the patient immediately upon receiving the assignment regardless of the handover content",
      "The facility's call light response policy was inadequate",
      "Both A and B represent primary contributing failures — biased handover AND failure to independently assess",
    ],
    correct: 3,
    explanation: "Both A and B are primary contributing failures in this scenario: BIASED HANDOVER (Option A): The outgoing nurse's characterisation ('frequent flyer,' 'exaggerates,' 'attention-seeking,' 'just ignore') is: unprofessional, potentially harmful, and creates CONFIRMATION BIAS — the incoming nurse unconsciously interpreted the repeated call lights through the lens of 'attention-seeking' rather than clinical deterioration. Labelling patients as 'difficult' or 'attention-seeking' is one of the most dangerous communication failures in healthcare — it has directly contributed to patient deaths. INDEPENDENT ASSESSMENT (Option B): The incoming nurse has an independent professional obligation to assess each patient at the beginning of every shift regardless of handover content. Clinical status changes. A previous 'frequent flyer' label does NOT remove the duty to assess. Both failures combined created the conditions for a preventable adverse event.",
    wrongExplanations: [
      "WRONG: While the biased handover is a primary failure, the incoming nurse's independent professional duty to assess is equally a contributing failure. Both A and B together is the most complete and accurate answer.",
      "WRONG: While true, this alone understates the problem. The biased handover created the confirmation bias that led to delayed response. Both failures are primary contributors.",
      "WRONG: While call light response policy may be a contributing factor, the scenario specifically tests communication failures — biased handover and lack of independent clinical assessment are the primary issues.",
      "",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse working in a general medical ward receives a patient with advanced dementia who becomes distressed and agitated every afternoon, calling out 'Help me! Help me!' repeatedly. The patient cannot explain why they are distressed. Family members have been told 'This is normal for dementia patients in the afternoon — it's sundowning.' The nurse questions this explanation. What is the MOST evidence-based nursing approach?",
    options: [
      "Accept the sundowning explanation — it is the most common cause of afternoon agitation in dementia patients",
      "Systematically assess for unmet needs and reversible causes before attributing behaviour to sundowning — pain, urinary retention, constipation, position discomfort, hunger, fear, environmental factors",
      "Administer a PRN sedative to reduce the patient's distress and protect other patients",
      "Move the patient to a quieter room and reduce environmental stimulation — sundowning is worsened by sensory overload",
    ],
    correct: 1,
    explanation: "BEHAVIOURAL EXPRESSION IN DEMENTIA: Patients with advanced dementia cannot verbally communicate pain, discomfort or distress — they communicate through behaviour. 'Help me! Help me!' is communication. The MOST evidence-based approach is a SYSTEMATIC ASSESSMENT of UNMET NEEDS and REVERSIBLE CAUSES before attributing behaviour to dementia or sundowning. The PAINAD scale (Pain Assessment in Advanced Dementia) should be used. Assess: pain (full body assessment, recent procedures), urinary retention or constipation (common in dementia), position discomfort (skin breakdown, pressure), hunger or thirst, fear or anxiety (environmental triggers), medication side effects, infection (UTI is extremely common and causes acute behavioural change). 'Sundowning' as an explanation too often becomes a label that prevents investigation of treatable causes. Sedation (Option C) without first identifying the cause is potentially harmful and masks underlying pathology.",
    wrongExplanations: [
      "WRONG: Accepting sundowning as the default explanation without systematic assessment risks missing treatable causes of distress. Sundowning is a diagnosis of exclusion — not a first explanation.",
      "",
      "WRONG: Administering sedation to a distressed patient without first identifying the cause is potentially harmful, masks underlying pathology and does not address the patient's unmet need. It may also be over-restraint.",
      "WRONG: Environmental modification is ONE component of dementia care — but it does not supersede systematic assessment for unmet needs and reversible causes. It may be appropriate as an ADDITIONAL measure after treatable causes are excluded.",
    ],
  },
];

const clinicalPearls = [
  "The single most reliable way to identify a non-therapeutic response on NCLEX is this: Does the nurse's response close down the patient's expression or open it up? Closing = non-therapeutic. Opening = therapeutic. False reassurance, advice-giving, defending and changing the subject all close. Reflecting, open questions, silence and validation all open.",
  "Silence is the most underused therapeutic technique. The average nurse waits fewer than 4 seconds before filling a pause. In therapeutic communication, 15-20 seconds of silence communicates 'I am here, I can tolerate your pain, take all the time you need.' That message alone is healing.",
  "The teach-back method prevents re-admissions. Studies show that patients who can accurately teach back their discharge instructions have significantly lower 30-day re-admission rates. 'Do you understand?' is a closed question that generates 'yes' regardless of comprehension. 'Show me how you would take this medication' reveals the truth.",
  "Handover bias kills patients. When a nurse tells you a patient is 'difficult,' 'attention-seeking' or a 'frequent flyer,' your clinical obligation is to walk into that room with fresh eyes and assess independently. The patient who was labelled difficult yesterday may be in early sepsis today.",
  "Behaviour is communication in patients who cannot speak for themselves — infants, dementia patients, patients with severe intellectual disability, unconscious patients. When a patient who cannot verbalise distress is labelled 'agitated' and sedated, ask what they are trying to tell you first.",
  "In the termination phase of the therapeutic relationship, especially with patients who have abandonment histories, the ending must be processed as carefully as the beginning. Announce the ending early, acknowledge the work done together, normalise the feelings of loss and create a bridge to the next care relationship.",
  "Countertransference is clinical information, not a flaw. When a patient makes you feel unusually protective, angry, sad or responsible, that feeling is data about the patient's interpersonal world. Take it to supervision — do not act on it with the patient.",
];

export default function TherapeuticCommunicationPage() {
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
            <h1 className="font-black text-base text-gray-900">💬 Therapeutic Communication</h1>
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
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
              <p className="text-blue-700 text-sm leading-relaxed font-medium">
                💬 Therapeutic communication is the MOST tested psychosocial skill on NCLEX — it appears in every clinical area. Master therapeutic vs non-therapeutic techniques and you will gain marks across the entire exam!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most common NCLEX traps on Therapeutic Communication — study these carefully!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Therapeutic Communication!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review non-therapeutic blockers and teach-back method." :
                        "Keep studying! Focus on identifying therapeutic vs non-therapeutic responses and Peplau's phases."}
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