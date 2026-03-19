"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Coping and Defence Mechanisms",
    icon: "🌿",
    color: "blue",
    content: [
      "Coping mechanisms are conscious or unconscious strategies used to manage stress, anxiety and threatening situations",
      "ADAPTIVE coping: Healthy, constructive strategies that reduce distress without causing harm — problem-solving, seeking support, exercise, mindfulness",
      "MALADAPTIVE coping: Strategies that provide short-term relief but cause long-term harm — substance use, avoidance, self-harm, aggression",
      "DEFENCE MECHANISMS: Unconscious psychological processes that protect the ego from anxiety, guilt or unacceptable thoughts — described by Freud, elaborated by Anna Freud",
      "KEY DISTINCTION: Defence mechanisms are UNCONSCIOUS — the person is not aware they are using them. Coping strategies can be CONSCIOUS or unconscious",
      "Defence mechanisms are not inherently pathological — they serve protective functions and exist on a spectrum from mature to immature",
      "NCLEX tests: Identifying defence mechanisms in patient statements, distinguishing adaptive from maladaptive coping, nursing response to defence mechanisms and Kübler-Ross grief stages",
      "The nurse's role: Assess coping effectiveness, support adaptive strategies, gently address maladaptive strategies, never shame a patient for their coping mechanisms",
    ],
  },
  {
    title: "Defence Mechanisms — Immature (Primitive)",
    icon: "🔴",
    color: "red",
    content: [
      "Immature defence mechanisms are less adaptive — commonly seen in personality disorders, psychosis and under extreme stress. Associated with significant distress and impaired functioning",
      "DENIAL: Refusing to acknowledge a painful reality. 'I don't have cancer — the test must be wrong.' Most primitive defence. Can be adaptive short-term (shock) but maladaptive long-term",
      "REGRESSION: Returning to an earlier developmental stage under stress. An adult becoming helpless and dependent when ill. A toilet-trained child who starts wetting the bed during hospitalisation",
      "PROJECTION: Attributing one's own unacceptable thoughts/feelings to another. 'I'm not angry at my doctor — the doctor is angry at me.' 'Everyone here hates me' (when patient is actually hostile)",
      "SPLITTING: Seeing people/things as all good or all bad with no middle ground. Classic in Borderline PD. 'You are the only good nurse — all the others are terrible.' (then reverses)",
      "INTROJECTION: Taking on the values, attitudes or characteristics of another — including an aggressor. 'Identification with the aggressor.' Abuse survivors sometimes adopt abuser's attitudes",
      "UNDOING: Performing an act to symbolically negate a previous unacceptable act or thought. Repeatedly washing hands. Performing rituals after aggressive thoughts (common in OCD)",
      "ACTING OUT: Expressing unconscious emotional conflicts through behaviour rather than words. Throwing things when frustrated. Self-harm as expression of unbearable emotion",
      "SOMATISATION: Converting psychological distress into physical symptoms without organic cause. Headaches before a stressful event, paralysis with no neurological basis",
    ],
  },
  {
    title: "Defence Mechanisms — Neurotic (Intermediate)",
    icon: "🟡",
    color: "orange",
    content: [
      "Neurotic defence mechanisms are more common in the general population — provide better adaptation than immature defences but may still cause distress",
      "REPRESSION: Unconsciously pushing unacceptable thoughts, feelings or memories out of conscious awareness. The foundational defence mechanism. Trauma memories that cannot be consciously recalled",
      "SUPPRESSION: CONSCIOUS effort to push thoughts out of awareness ('I'll think about that later'). The only CONSCIOUS defence mechanism. More adaptive than repression",
      "DISPLACEMENT: Redirecting feelings from the original threatening target to a safer substitute. Angry at the boss, comes home and yells at the family. Kicking the cat",
      "REACTION FORMATION: Acting in the OPPOSITE way to how one actually feels. Expressing excessive affection toward someone you secretly resent. Being overly polite to someone you dislike",
      "RATIONALISATION: Creating logical-sounding explanations for behaviours driven by unacceptable motives. 'I drink because my job is stressful.' 'I didn't get the job because they were biased'",
      "INTELLECTUALISATION: Using abstract thinking or intellectual analysis to distance from the emotional content of a situation. A patient who responds to a terminal diagnosis by discussing statistics and treatment trials without any emotional expression",
      "ISOLATION OF AFFECT: Separating the emotional content from a memory or thought — recalling traumatic events without any emotion. 'Yes, I was abused. It happened. It doesn't bother me.'",
      "COMPENSATION: Overachieving in one area to make up for real or perceived deficits in another. A student with learning difficulties who becomes an exceptional athlete",
    ],
  },
  {
    title: "Defence Mechanisms — Mature (Adaptive)",
    icon: "🟢",
    color: "green",
    content: [
      "Mature defence mechanisms are the most adaptive — associated with psychological health, resilience and effective functioning",
      "SUBLIMATION: Channelling unacceptable impulses into socially acceptable activities. A person with aggressive impulses becomes a surgeon or contact sport athlete. The most mature defence",
      "ALTRUISM: Meeting one's own psychological needs by helping others. A person who experienced abuse becomes a child protection advocate. Genuinely benefits others",
      "HUMOUR: Using comedy to acknowledge and cope with distress without avoidance. 'Dark humour' in healthcare workers. A cancer patient who makes jokes about their diagnosis",
      "SUPPRESSION: Conscious decision to defer thinking about a problem to a more appropriate time. 'I'll worry about that after this shift.'",
      "ANTICIPATION: Realistic planning for future discomfort and emotional responses. Pre-operative patient who researches recovery, plans for help at home, prepares emotionally",
      "AFFILIATION: Coping by seeking support from others. Joining support groups, reaching out to friends, asking for help. Healthy and effective",
      "IDENTIFICATION: Modelling behaviour on a respected person, mentor or role model. A nursing student who models their practice on an excellent preceptor",
      "NCLEX tip: When asked what defence mechanism is being used — identify the KEY FEATURE of each. Sublimation = acceptable outlet. Denial = refusing to acknowledge. Projection = attributing to others. Rationalisation = justifying with reasons",
    ],
  },
  {
    title: "High-Yield Defence Mechanisms for NCLEX",
    icon: "⭐",
    color: "purple",
    content: [
      "DENIAL: Patient with newly diagnosed diabetes says 'The tests must be wrong — I feel perfectly fine.' Nursing response: Do NOT forcefully confront denial — explore feelings, provide information gently, time the confrontation",
      "RATIONALISATION: 'I drink because my wife left me' or 'I missed my medication because the pharmacy is too far away.' Nursing response: Acknowledge feelings, gently explore the pattern without shaming",
      "PROJECTION: Patient says 'All the nurses on this ward are judging me' — when the patient is actually feeling shame and self-judgment. Nursing response: Acknowledge the feeling without reinforcing the projection",
      "DISPLACEMENT: Patient is angry at their diagnosis and takes it out on the nurse ('This food is disgusting, you people don't care about anything!'). Nursing response: Do NOT take it personally — acknowledge the anger and redirect to underlying feelings",
      "REGRESSION: Adult patient becomes demanding, tearful, dependent during illness. Nursing response: Do NOT shame regression — meet dependency needs while gradually supporting independence as health returns",
      "SUBLIMATION: Patient with anger issues takes up boxing. A grieving parent starts a charity in their child's name. Nursing response: Reinforce and support — this is healthy adaptation",
      "REACTION FORMATION: A nurse who is terrified of death becomes excessively upbeat and cheerful around dying patients. The feeling (fear) is transformed into the opposite (forced cheerfulness)",
      "INTELLECTUALISATION: Patient newly diagnosed with cancer starts quoting survival statistics and discussing immunotherapy trials without emotional expression. Nursing response: Acknowledge the intellectual response, gently invite emotional expression when patient is ready",
    ],
  },
  {
    title: "Grief, Loss and Bereavement",
    icon: "🕊️",
    color: "blue",
    content: [
      "Grief is the emotional response to loss — universal, normal and necessary. It can become a crisis when coping resources are overwhelmed",
      "TYPES of loss: Death of loved one, loss of health/function, loss of relationship, loss of role, loss of identity, loss of home, loss of body part/function, loss of pregnancy",
      "KÜBLER-ROSS STAGES (DABDA): Denial, Anger, Bargaining, Depression, Acceptance",
      "CRITICAL POINTS about Kübler-Ross: NOT linear or sequential, NOT universal (not everyone experiences all stages), NOT time-limited, people move BACK and FORTH between stages. The model describes common EXPERIENCES — not prescriptions",
      "DENIAL: 'This can't be happening.' Protective buffer. Do NOT forcefully confront denial — allow it to dissolve at the patient's pace",
      "ANGER: 'Why me? This is so unfair.' May be directed at God, healthcare staff, family, self. Do NOT take it personally. Acknowledge: 'It makes sense to feel angry about this.'",
      "BARGAINING: 'If I get better I will...' 'What if we try this treatment...' 'If I had only...' Guilt and 'what ifs' — normalise without reinforcing guilt",
      "DEPRESSION: Profound sadness, withdrawal, crying, hopelessness. Distinguish from clinical depression requiring treatment. Be present, avoid forced cheerfulness or 'silver lining' statements",
      "ACCEPTANCE: Coming to terms with the reality. NOT happiness or being 'over it' — peaceful acknowledgement. Not everyone reaches acceptance",
      "NURSING: Meet the patient where they are. Never tell a patient what stage they 'should' be in. Silence and presence are often more therapeutic than words",
    ],
  },
  {
    title: "Complicated Grief and Disenfranchised Grief",
    icon: "💔",
    color: "purple",
    content: [
      "COMPLICATED GRIEF (Prolonged Grief Disorder — PGD): Persistent, intense grief lasting >12 months (DSM-5 criterion: >1 year in adults, >6 months in children) with significant functional impairment",
      "PGD features: Intense longing for the deceased, difficulty accepting the death, inability to engage with life, emotional numbness, bitterness or anger, feeling that life is meaningless without the deceased",
      "Risk factors for complicated grief: Sudden/traumatic death, loss of a child, violent death (homicide, suicide), lack of social support, prior mental health history, dependent relationship with deceased, multiple concurrent losses",
      "COMPLICATED GRIEF requires specialist treatment — evidence-based therapy is Complicated Grief Treatment (CGT), a specific adaptation of cognitive-behavioural therapy",
      "DISENFRANCHISED GRIEF: Grief that is not acknowledged, validated or socially supported — the loss is not recognised as significant by others",
      "Examples of disenfranchised grief: Pet loss ('it was just a dog'), miscarriage ('at least it was early'), suicide loss (stigma prevents open mourning), loss of ex-partner ('you weren't even together anymore'), loss of someone with dementia ('at least they're at peace'), grief of the estranged",
      "NURSING RESPONSE to disenfranchised grief: ACKNOWLEDGE and VALIDATE the loss. 'The loss of your pet was a real loss. Your grief is completely understandable.' Do not minimise or compare losses",
      "ANTICIPATORY GRIEF: Grieving in advance of an expected death — terminal diagnosis, watching someone decline. Normal, common and can include acceptance before the actual death. Family members may reach acceptance before the patient",
    ],
  },
  {
    title: "Loss of Body Image and Functional Loss",
    icon: "💪",
    color: "orange",
    content: [
      "Changes to body image and physical function create significant psychological distress — nurses must assess and address these losses",
      "BODY IMAGE: The mental picture a person has of their own body — includes perceptions, emotions and thoughts. Disruption occurs with: amputation, mastectomy, colostomy, burns, significant weight changes, alopecia from chemotherapy, facial disfigurement",
      "NURSING ASSESSMENT: Ask directly about how the patient feels about body changes. 'How are you feeling about the changes to your body?' Do not assume resilience or distress",
      "GRIEF RESPONSE to body changes follows Kübler-Ross pattern — denial, anger, bargaining, depression, acceptance are all normal responses to body image loss",
      "MASTECTOMY: Assess patient's concerns about femininity, sexuality and relationships. Provide information about reconstruction options without pushing. Connect with breast care nurse and support groups (Breast Cancer Network Australia)",
      "COLOSTOMY/ILEOSTOMY: Body image, sexuality, intimacy, smell concerns are significant. Refer to stomal therapy nurse. Normalise concerns. Information about intimacy with ostomy",
      "AMPUTATION: Phantom limb pain/sensation — the sensation of the amputated limb being present. Acknowledge as real (it is neurologically real). Refer to physiotherapy, prosthetics, peer support",
      "BURNS/DISFIGUREMENT: Significant body image disruption, grief, social reintegration challenges. Multidisciplinary team — psychology, social work, burns support groups",
      "REHABILITATION FOCUS: Moving from 'what I've lost' to 'what I can still do' — gradual, patient-led, never forced",
    ],
  },
  {
    title: "Stress and the Stress Response",
    icon: "⚡",
    color: "red",
    content: [
      "STRESS: A state of threatened homeostasis requiring physiological and psychological adaptation",
      "GENERAL ADAPTATION SYNDROME (Selye): Three stages of physiological stress response:",
      "ALARM STAGE: Fight-or-flight response — sympathetic nervous system activation, adrenaline and cortisol release, increased HR/BP/RR, dilated pupils, muscle tension, blood diverted to large muscles",
      "RESISTANCE STAGE: Body adapts to the ongoing stressor — maintains elevated cortisol, compensatory mechanisms activated. Person appears to cope",
      "EXHAUSTION STAGE: Adaptive reserves depleted — illness, burnout, immune suppression, psychological breakdown. Chronic disease risk increases",
      "ALLOSTATIC LOAD: Cumulative wear and tear on the body from chronic stress exposure — associated with accelerated ageing, cardiovascular disease, immune suppression and mental illness",
      "PSYCHOLOGICAL STRESS MODELS: Lazarus and Folkman — stress occurs when demands EXCEED perceived resources. Two-stage cognitive appraisal: Primary (is this a threat?) Secondary (can I cope?)",
      "STRESS AND ILLNESS: Chronic stress impairs immune function, worsens cardiovascular disease, increases inflammation, disrupts sleep and accelerates mental health deterioration",
      "NURSE'S ROLE: Assess stressors, assess coping resources, identify maladaptive coping, teach stress management techniques (deep breathing, progressive muscle relaxation, mindfulness, exercise, social support, time management)",
    ],
  },
  {
    title: "Nursing Assessment of Coping",
    icon: "🩺",
    color: "green",
    content: [
      "COPING ASSESSMENT: Evaluate both the STRATEGY used and its EFFECTIVENESS in managing distress without causing harm",
      "Assess: What does the patient do when stressed? How effective is it? Does it cause harm? Is it sustainable? Does it address the stressor or just the emotion?",
      "PROBLEM-FOCUSED COPING: Addresses the stressor directly — planning, problem-solving, information seeking. Most effective when the stressor is controllable",
      "EMOTION-FOCUSED COPING: Manages the emotional response to an uncontrollable stressor — acceptance, reframing, seeking emotional support, mindfulness. Most effective when the stressor is uncontrollable",
      "AVOIDANCE COPING: Avoiding thinking about or dealing with the stressor — effective short-term, harmful long-term. Substance use, distraction, denial",
      "RESILIENCE factors: Social support, sense of purpose/meaning, self-efficacy, prior successful coping, spirituality/religion, physical health, problem-solving skills",
      "PROTECTIVE FACTORS to reinforce: Identify and strengthen existing social supports, recognise and build on prior successful coping, connect with spiritual or community resources, facilitate access to information and control",
      "NURSING INTERVENTIONS: Teach and practise deep breathing, progressive muscle relaxation, guided imagery, cognitive reframing, problem-solving skills, assertiveness, time management, exercise prescription",
      "WHEN TO REFER: Coping is significantly maladaptive (substance use, self-harm), patient is not coping despite support, symptoms of clinical depression or anxiety disorder, complicated grief, trauma response",
    ],
  },
  {
    title: "Cultural Considerations in Grief and Coping",
    icon: "🌍",
    color: "purple",
    content: [
      "Grief and coping expressions are PROFOUNDLY CULTURALLY INFLUENCED — there is no universal 'right way' to grieve",
      "Cultural variations in: Mourning rituals, acceptable expression of emotion (vocal vs silent), role of community, spiritual beliefs about death and afterlife, acceptable burial practices, time expected for mourning, who makes decisions about the deceased",
      "WESTERN biomedical model: Individual grief, emotional expression is healthy, moving through stages, returning to function. NOT universal",
      "Some cultures: Grief is communal, loud expression of emotion is expected and healthy, long mourning periods are respectful, spiritual practices are essential to grief resolution",
      "ABORIGINAL AND TORRES STRAIT ISLANDER mourning practices: Significant cultural protocols around death including sorry business, name restrictions for the deceased, cultural law requirements. Requires cultural consultation and sensitivity",
      "ANTICIPATORY CARE PLANNING: Cultural preferences for end-of-life care, who receives information, who makes decisions, what happens to the body, spiritual care — must be assessed early in serious illness",
      "NURSING PRINCIPLE: Ask the patient and family what their cultural practices and needs are — do not assume based on cultural background. 'What is important to you and your family at this time?'",
      "SPIRITUAL CARE: Assess spiritual needs and resources. Do not impose beliefs. Facilitate access to spiritual support of the patient's choice. Spiritual distress is a real nursing diagnosis",
      "INTERPRETER: Use professional interpreters for all serious conversations — family members must not interpret for clinical end-of-life discussions due to conflict of interest and emotional involvement",
    ],
  },
];

const mnemonics = [
  {
    title: "Kübler-Ross Stages of Grief",
    acronym: "DABDA",
    breakdown: ["Denial", "Anger", "Bargaining", "Depression", "Acceptance"],
    memory: "DABDA — Don't Assume Brains Do Anything in order! Stages are NOT linear, NOT universal, NOT time-limited. Meet the patient where they are!",
    color: "blue",
  },
  {
    title: "Mature Defence Mechanisms",
    acronym: "SHASA",
    breakdown: ["Sublimation", "Humour", "Altruism", "Suppression (conscious)", "Anticipation"],
    memory: "SHASA — the most mature defences. Sublimation is the MOST mature — channelling impulses into socially valuable activities!",
    color: "green",
  },
  {
    title: "Selye's General Adaptation Syndrome",
    acronym: "ARE",
    breakdown: ["Alarm (fight or flight)", "Resistance (adaptation)", "Exhaustion (depletion)"],
    memory: "ARE you stressed? Alarm fires, Resistance follows, Exhaustion is the end — chronic stress depletes ALL adaptive reserves!",
    color: "red",
  },
  {
    title: "Key Defence Mechanism Identifiers",
    acronym: "DRIPS",
    breakdown: ["Denial (refuses reality)", "Rationalisation (makes excuses)", "Intellectualisation (uses facts to avoid feelings)", "Projection (blames others for own feelings)", "Sublimation (channels into acceptable activity)"],
    memory: "DRIPS — the 5 most NCLEX-tested defence mechanisms. Know the KEY IDENTIFIER for each one cold!",
    color: "purple",
  },
];

const alerts = [
  { text: "Kübler-Ross stages are NOT linear — NEVER tell a patient what stage they 'should' be in or imply they are grieving 'incorrectly'!", severity: "high" },
  { text: "Defence mechanisms are UNCONSCIOUS — the patient is NOT aware they are using them. Never say 'You are using denial' — this is confrontational and non-therapeutic!", severity: "high" },
  { text: "DENIAL in acute grief/shock is PROTECTIVE and adaptive short-term — do NOT aggressively confront denial in newly bereaved patients!", severity: "high" },
  { text: "COMPLICATED GRIEF lasting >12 months with functional impairment requires SPECIALIST TREATMENT — it is not 'just taking longer to grieve'!", severity: "high" },
  { text: "DISPLACEMENT: When a patient takes anger out on nursing staff — do NOT take it personally. Acknowledge the anger and redirect to underlying feelings!", severity: "medium" },
  { text: "REGRESSION during illness is NORMAL and EXPECTED — do not shame adult patients who become dependent or childlike when severely ill!", severity: "medium" },
  { text: "DISENFRANCHISED GRIEF (pet loss, miscarriage, suicide loss) is REAL and deserves acknowledgement — NEVER minimise any loss!", severity: "medium" },
  { text: "SUPPRESSION is the ONLY CONSCIOUS defence mechanism — all others are unconscious. This distinction appears directly on NCLEX!", severity: "medium" },
  { text: "SUBLIMATION is the MOST MATURE defence mechanism — channelling unacceptable impulses into socially valuable activities. Reinforce and support this!", severity: "medium" },
  { text: "Cultural grief expressions vary enormously — loud wailing, communal mourning and long grief periods are culturally normal in many cultures. Never pathologise cultural grief expressions!", severity: "medium" },
  { text: "PHANTOM LIMB PAIN is neurologically real — never tell a patient their sensations 'can't be real' because the limb is gone. Acknowledge and treat!", severity: "low" },
  { text: "ANTICIPATORY GRIEF in families of terminally ill patients may mean they reach acceptance before the patient — this does not mean they love the patient less!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A patient who was just told she needs a mastectomy says to the nurse 'I don't believe it — the pathology must be wrong. I feel completely fine. I'm going to get my results re-checked at another hospital.' Which defence mechanism is this patient using?",
    options: [
      "Rationalisation — she is creating a logical explanation for her feelings",
      "Projection — she is attributing her fear to an external source",
      "Denial — she is refusing to acknowledge the painful reality of her diagnosis",
      "Intellectualisation — she is using factual thinking to distance from emotion",
    ],
    correct: 2,
    explanation: "DENIAL is the refusal to acknowledge a painful or threatening reality. This patient is refusing to accept her diagnosis ('the pathology must be wrong'), insisting she is fine and planning to seek a contradictory result elsewhere — all classic features of denial. Denial is the most primitive defence mechanism and is common in the initial response to serious diagnoses. Short-term denial is ADAPTIVE (it provides a buffer while the psyche adjusts) but long-term denial is MALADAPTIVE (delays necessary treatment). The nurse should respond with empathy, allow the denial to dissolve at the patient's pace, provide gentle accurate information and keep the door open.",
    wrongExplanations: [
      "WRONG: Rationalisation involves creating logical-sounding EXCUSES for behaviour driven by unacceptable motives ('I drink because my job is stressful'). This patient is not justifying behaviour — she is refusing to accept a reality.",
      "WRONG: Projection involves attributing one's OWN feelings to another person ('The doctor is angry at me' when the patient is actually angry). This patient is not attributing feelings to others.",
      "",
      "WRONG: Intellectualisation involves responding to distressing information with abstract analysis and facts WITHOUT emotional engagement — discussing statistics and treatment trials without showing emotion. This patient is not doing that — she is refusing the diagnosis entirely.",
    ],
  },
  {
    level: "Knowledge",
    question: "A nurse is caring for a patient with terminal lung cancer. The patient has been discussing his diagnosis calmly, quoting five-year survival statistics and asking about the pharmacokinetics of his chemotherapy without any visible emotional response. His wife reports he has not cried once and 'seems fine.' Which defence mechanism is most likely operating?",
    options: [
      "Suppression — he is consciously choosing not to think about it",
      "Denial — he is refusing to accept the diagnosis",
      "Intellectualisation — he is using abstract intellectual analysis to distance from the emotional content",
      "Sublimation — he is channelling his fear into productive research",
    ],
    correct: 2,
    explanation: "INTELLECTUALISATION involves using abstract, intellectual analysis to distance oneself from the emotional impact of a distressing situation. The person engages cognitively — discussing facts, statistics and technical information — while the emotional experience is kept at arm's length. Key identifiers: calm discussion of technical/factual aspects of a distressing situation WITHOUT emotional expression. This is distinct from suppression (conscious choice to defer emotions — the person knows they are doing it), denial (refusing to accept the reality — this patient clearly accepts the diagnosis), and sublimation (channelling impulses into activities). The nursing response: acknowledge and respect the intellectual coping while gently creating space for emotional expression when the patient is ready.",
    wrongExplanations: [
      "WRONG: Suppression is the CONSCIOUS decision to defer thinking about something ('I'll deal with that later'). This patient shows no sign of consciously choosing to suppress — he engages extensively with the topic intellectually.",
      "WRONG: Denial involves refusing to accept the reality. This patient is clearly engaging with and accepting his diagnosis — he is discussing treatment statistics, not denying the cancer exists.",
      "",
      "WRONG: Sublimation channels unacceptable impulses into socially valuable activities. Researching his own condition is intellectualisation — the content is still the cancer, not a redirected impulse.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a 58-year-old man who had a below-knee amputation following peripheral vascular disease. Three days post-operatively, he reports 'My foot is still there — I can feel it throbbing and it hurts.' He appears distressed by the pain. His wife says 'He's imaging it — the foot is gone.' What is the nurse's MOST appropriate response?",
    options: [
      "Agree with the wife — gently explain to the patient that the sensation cannot be real because the foot is gone",
      "Acknowledge the phantom limb pain as neurologically real, validate his experience, document and report to the physician for pain management",
      "Reassure the patient that phantom sensations resolve within a few days and no treatment is needed",
      "Refer to psychiatry — the patient appears to be in denial about his amputation",
    ],
    correct: 1,
    explanation: "PHANTOM LIMB PAIN is a well-documented neurological phenomenon — the brain continues to receive and process signals from nerve pathways that previously served the amputated limb. It is NEUROLOGICALLY REAL, not imagined or a sign of psychological disturbance. The sensations — including pain, tingling, cramping — are genuine experiences and can be severe. The correct nursing response: acknowledge and validate the experience ('What you are feeling is real and has a neurological explanation'), document the pain assessment, report to the physician for pain management (options include: mirror therapy, gabapentin, pregabalin, tricyclic antidepressants, ketamine, TENS, mirror box therapy). Dismissing phantom limb pain as 'imagined' causes unnecessary suffering and damages the therapeutic relationship.",
    wrongExplanations: [
      "WRONG: Agreeing with the wife and telling the patient his pain is not real is invalidating, factually incorrect and damages the therapeutic relationship. Phantom limb pain is neurologically real.",
      "",
      "WRONG: Phantom limb pain does NOT always resolve quickly — it can persist for months to years and requires active pain management. Reassuring without action is inadequate.",
      "WRONG: Phantom limb pain is not a psychiatric condition and does not indicate denial. Referring to psychiatry for a well-described neurological phenomenon is incorrect and stigmatising.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is conducting a grief support visit with a 70-year-old man whose wife of 45 years died 6 weeks ago. He states 'I keep getting angry at the stupidest things — I yelled at my son yesterday over nothing and then I felt terrible. I don't know what's wrong with me.' What is the nurse's MOST therapeutic response?",
    options: [
      "'You should speak to your son and apologise — anger can damage important relationships when you need them most.'",
      "'Anger is a completely normal part of grief — what you're experiencing is expected. Your anger may be the grief finding an outlet. How are you managing overall?'",
      "'It sounds like you may be developing depression — I'd like to refer you for a mental health assessment.'",
      "'Try not to let the anger come out — focus on the positive memories of your wife instead.'",
    ],
    correct: 1,
    explanation: "ANGER is a recognised normal stage of grief (Kübler-Ross) and anger in grief frequently becomes DISPLACED — redirected onto convenient or safer targets (son, strangers, minor irritants) when the real target (the loss) is not accessible. The therapeutic response: NORMALISE the anger ('completely normal'), VALIDATE ('what you're experiencing is expected'), provide psychoeducation ('the anger may be the grief finding an outlet') and ASSESS overall coping ('how are you managing?'). Option A gives unsolicited advice and adds guilt. Option C pathologises normal grief — 6 weeks of anger post-loss is NOT abnormal depression requiring psychiatric referral. Option D suppresses normal emotion with an impossible instruction and dismisses the patient's experience.",
    wrongExplanations: [
      "WRONG: Giving unsolicited advice ('apologise to your son') adds guilt to an already distressed patient and misses the therapeutic opportunity to normalise and explore the grief experience.",
      "",
      "WRONG: Anger at 6 weeks post-bereavement is NORMAL grief — not a depression requiring psychiatric referral. Pathologising normal grief is harmful and undermines the patient's trust in their own emotional process.",
      "WRONG: 'Try not to let the anger come out' suppresses a normal emotional expression and gives impossible advice. 'Focus on positive memories' dismisses the patient's current experience and is false reframing.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is providing post-operative care for a 42-year-old woman who had a sigmoid colostomy for colorectal cancer. During stoma care teaching, the patient refuses to look at the stoma, says 'I can't do this — I'm disgusting' and turns her face away. This is the third teaching session where she has refused to engage. What is the nurse's MOST appropriate approach?",
    options: [
      "Complete the stoma care without involving the patient — physical healing is the priority",
      "Acknowledge her distress directly, explore her feelings about the stoma change, do not force participation but create small achievable steps toward engagement at her pace",
      "Tell her she must learn stoma care before discharge — set a firm deadline for engagement",
      "Document that patient is non-compliant and refer to social work",
    ],
    correct: 1,
    explanation: "This patient is experiencing a significant BODY IMAGE DISRUPTION — a stoma represents a profound change to body function, body image, sexuality and self-concept. 'I'm disgusting' reflects shame and distorted body image. Avoidance behaviour is a normal grief response to body image loss. The therapeutic approach: ACKNOWLEDGE the emotional experience directly ('I can see this is really difficult — how are you feeling about all of this?'), EXPLORE her specific concerns (smell? sexuality? social acceptance?), create SMALL ACHIEVABLE STEPS ('Would you be willing to just hold the cloth today while I do the rest?'), avoid FORCING participation which increases shame and resistance, involve STOMAL THERAPY NURSE, connect with peer support (ostomates). Labelling her as 'non-compliant' (Option D) is stigmatising and inaccurate — this is grief and fear, not defiance.",
    wrongExplanations: [
      "WRONG: Completing care without involving the patient removes her autonomy and misses the critical psychological intervention needed. Physical healing without psychological adaptation leads to ongoing non-compliance after discharge.",
      "",
      "WRONG: Setting a firm deadline ('must engage before discharge') increases anxiety and shame, creates a power struggle and is likely to worsen resistance. This approach treats grief as defiance.",
      "WRONG: 'Non-compliant' is an inaccurate and stigmatising label for a patient experiencing grief over body image change. Referral to social work without first addressing the emotional experience misses the nursing therapeutic opportunity.",
    ],
  },
  {
    level: "Advanced",
    question: "A hospice nurse is caring for a 55-year-old man with end-stage pancreatic cancer. His wife has been crying daily and tells the nurse 'I already feel like he's gone — I've been mourning him for months. I feel terrible for feeling this way while he's still alive.' Meanwhile, the patient says 'My wife seems fine with all this — she barely cries anymore. I think she's stopped caring.' What is the MOST clinically accurate assessment and the MOST therapeutic nursing approach?",
    options: [
      "The wife is showing abnormal emotional detachment — refer for psychological assessment",
      "The patient's perception is accurate — the wife's reduced crying indicates emotional withdrawal from the relationship",
      "The wife is experiencing anticipatory grief and may have reached acceptance before the patient — educate both parties about this normal phenomenon to reduce interpersonal misunderstanding",
      "Advise the wife to express more emotion in front of her husband so he feels cared for",
    ],
    correct: 2,
    explanation: "This is a CLASSIC presentation of ANTICIPATORY GRIEF and the phenomenon of DESYNCHRONOUS GRIEVING. The wife has been grieving the anticipated loss for months — she has moved through significant grief work and has likely reached a degree of acceptance BEFORE the patient has. This is normal and common in families of terminally ill patients. The clinical risk: the patient MISINTERPRETS the wife's acceptance as not caring, which creates interpersonal pain in the final months of life. The therapeutic approach: EDUCATE both parties about anticipatory grief ('Your wife has been grieving too — just further along in the process'), FACILITATE family communication ('What does each of you need from the other right now?'), NORMALISE the desynchrony, arrange a family meeting if needed. Advising the wife to 'express more emotion' (Option D) is telling her to perform emotions she has already processed — inauthentic and potentially retraumatising.",
    wrongExplanations: [
      "WRONG: Anticipatory grief with earlier acceptance is NORMAL — it does not indicate abnormal emotional detachment. Referring for psychological assessment pathologises a healthy adaptive grief process.",
      "WRONG: Reduced crying does NOT indicate reduced caring — it most commonly indicates that grief work has been done and some degree of acceptance reached. This is one of the most important things families need to understand.",
      "",
      "WRONG: Telling the wife to perform emotions she has already processed is inauthentic, potentially retraumatising and unhelpful. The therapeutic goal is understanding and authentic connection — not performance.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a 35-year-old woman admitted after a miscarriage at 10 weeks gestation. It was her third miscarriage. She is quiet, tearful and says 'I know it wasn't a real baby yet — people keep telling me it's so early. But it feels like I lost my whole future.' Her mother, who is visiting, says 'She just needs to move on — at least she can try again.' What is the nurse's MOST comprehensive response to this situation?",
    options: [
      "Agree with the mother — miscarriage at 10 weeks is an early loss and she can try again",
      "Validate the patient's grief as real and significant, recognise this as disenfranchised grief compounded by recurrent loss, gently address the mother's minimising without confrontation and provide specific grief support resources",
      "Suggest the patient speak to a counsellor — three miscarriages indicates a pattern requiring psychological support",
      "Reassure the patient that many women have multiple miscarriages and go on to have successful pregnancies",
    ],
    correct: 1,
    explanation: "This scenario involves DISENFRANCHISED GRIEF — grief not recognised as significant by the social environment ('it wasn't a real baby yet', 'at least she can try again'). Miscarriage grief is frequently disenfranchised despite being a profound loss. COMPOUNDING FACTORS: This is her THIRD miscarriage — cumulative grief, hope and loss cycles, potentially altered relationship with future pregnancies, and the complex grief of losing a future. NURSING RESPONSE: VALIDATE directly ('What you lost was real and significant. Your grief makes complete sense'), ACKNOWLEDGE the disenfranchised nature without criticising the mother directly ('People sometimes don't realise how real this loss is'), PROVIDE resources (miscarriage support groups, perinatal grief counsellors, SANDS Australia), CREATE a memory if the patient wishes (certificate, name, acknowledgement). The mother's comment requires gentle redirection — but confronting her directly in front of the patient adds conflict to an already distressing situation.",
    wrongExplanations: [
      "WRONG: Agreeing with the mother reinforces disenfranchised grief and invalidates the patient's profound loss. Gestational age does not determine the significance of a pregnancy loss to the person experiencing it.",
      "",
      "WRONG: While counselling referral may be appropriate, framing three miscarriages as a 'pattern requiring psychological support' adds clinical pathologising to an already disenfranchised grief. Validate first — then offer resources.",
      "WRONG: 'Many women go on to have successful pregnancies' is false reassurance that minimises the current loss and the statistical reality for recurrent miscarriage. This may also be factually uncertain for this patient.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse notices that a colleague who works in the ICU has become increasingly cynical over the past 6 months. The colleague makes dark jokes about patients, appears emotionally detached during family meetings, has called in sick multiple times and recently said 'I don't care anymore — they're all going to die anyway.' The nurse is concerned. What is the MOST accurate clinical assessment and the MOST appropriate response?",
    options: [
      "The colleague is experiencing burnout and compassion fatigue — approach with compassion, express concern directly and encourage them to seek support through the employee assistance programme or occupational health",
      "The colleague's dark humour is a normal coping mechanism for ICU nurses — this is standard adaptive coping in high-stress environments",
      "Report the colleague to management immediately — patient safety may be compromised by their attitude",
      "Avoid the topic — mental health is private and raising it could embarrass the colleague or damage the relationship",
    ],
    correct: 0,
    explanation: "This colleague is showing classic signs of COMPASSION FATIGUE and/or BURNOUT: Cynicism ('don't care anymore'), emotional detachment (flat during family meetings), dark humour escalating to nihilism ('they're all going to die'), absenteeism (sick days), loss of meaning and purpose. COMPASSION FATIGUE: Secondary traumatic stress from chronic exposure to patients' trauma and suffering — the emotional cost of caring. BURNOUT: Chronic work-related stress causing emotional exhaustion, depersonalisation and reduced personal accomplishment. APPROPRIATE RESPONSE: Approach the colleague with COMPASSION (not management threat), express concern directly and privately ('I've noticed you seem really worn down lately — are you okay?'), encourage utilisation of EAP (Employee Assistance Programme) or occupational health, be available as a peer support. Option C (immediate management report) is not the first step for burnout/compassion fatigue — it is appropriate for active patient harm or impaired practice, not emotional exhaustion. The cynicism and dark humour, while concerning, do not yet indicate active patient harm.",
    wrongExplanations: [
      "",
      "WRONG: Dark humour as OCCASIONAL coping is normal — but escalating nihilism ('they're all going to die anyway'), emotional detachment during family meetings and absenteeism represent a significant deterioration beyond normal ICU humour. This requires intervention.",
      "WRONG: Immediate management reporting before attempting peer support is premature for burnout/compassion fatigue. A direct compassionate conversation is the appropriate first step — reserve management reporting for situations involving active patient harm.",
      "WRONG: Avoiding the topic while a colleague deteriorates is not supportive — it is abandonment. Mental health concerns between colleagues are appropriately addressed with compassion and offer of support, not silence.",
    ],
  },
  {
    level: "Advanced",
    question: "A 48-year-old Aboriginal woman is admitted following a stroke. Her family — including approximately 15 relatives — have gathered at the hospital and are taking turns at the bedside at all times, including overnight. The ward charge nurse is concerned about visitor numbers and infection control. The patient, when able to communicate, says 'My family being here is the most important thing — if they're not with me I might not get better.' The nursing team is divided on how to handle the visitor situation. What is the MOST culturally competent and clinically appropriate approach?",
    options: [
      "Enforce standard visitor policy — two visitors at a time. Cultural preferences cannot override infection control and patient safety",
      "Allow unlimited visitors — cultural preferences must always be accommodated regardless of clinical context",
      "Facilitate a sensitive discussion with the patient and family, acknowledge the cultural significance of collective family presence, explore a flexible arrangement that addresses both the cultural need and legitimate clinical concerns, and involve a Aboriginal Health Liaison Officer",
      "Transfer the patient to a single room and allow family to stay — this solves both the cultural and clinical issues",
    ],
    correct: 2,
    explanation: "This scenario tests CULTURAL COMPETENCE in the context of Aboriginal and Torres Strait Islander health. Collective family presence during serious illness is a culturally significant practice — it provides spiritual, emotional and healing support that is as clinically relevant as any medical intervention. The patient has explicitly stated its importance to her recovery. CULTURALLY SAFE APPROACH: Acknowledge the cultural significance openly, involve an ABORIGINAL HEALTH LIAISON OFFICER (AHLO) who can bridge cultural and clinical perspectives, explore flexible arrangements (rotating family presence, quiet hours, designated waiting space), assess whether infection control concerns are genuine risks or a default application of rules to an unfamiliar situation. Rigid policy enforcement (Option A) without cultural accommodation risks: patient distress, therapeutic relationship damage, family conflict, and reduced treatment engagement — all of which negatively affect outcomes. SINGLE ROOM transfer (Option D) may be part of the solution but requires the facilitated discussion first.",
    wrongExplanations: [
      "WRONG: Rigidly enforcing standard visitor policy without cultural accommodation risks patient distress, damages the therapeutic relationship and ignores culturally significant healing practices that affect patient outcomes. Clinical safety concerns are valid but must be addressed through dialogue, not unilateral enforcement.",
      "WRONG: Unlimited accommodation without any clinical consideration ignores legitimate infection control and patient rest needs. Cultural competence involves balancing cultural needs with clinical requirements — not unlimited deference in all circumstances.",
      "",
      "WRONG: Single room transfer may address some concerns but bypasses the essential cultural consultation and relationship-building. The AHLO involvement and family discussion should precede decisions, not follow a unilateral transfer.",
    ],
  },
  {
    level: "Advanced",
    question: "A community nurse visits a 72-year-old man whose wife died by suicide 4 months ago. He has been socially isolated since her death, has stopped attending his weekly bowls club and says 'I can't talk about her — people just say she's in a better place or change the subject. I feel completely alone with this.' He scores 16 on the PHQ-9. What is the MOST accurate clinical formulation and comprehensive nursing response?",
    options: [
      "This is normal grief — 4 months is too early to assess for complicated grief or depression",
      "Screen for suicide risk given his wife's method of death, assess for complicated grief and major depressive disorder, address the specific disenfranchised nature of suicide bereavement, and connect with specialist suicide loss support",
      "Refer to a grief counsellor — generalised grief support is appropriate for all types of bereavement",
      "Encourage him to return to the bowls club — social reconnection is the most important intervention",
    ],
    correct: 1,
    explanation: "This case involves SUICIDE BEREAVEMENT — a specific type of loss with unique clinical features. People bereaved by suicide are at SIGNIFICANTLY ELEVATED risk of suicide themselves (up to 3-5 times higher than the general population). CLINICAL FORMULATION: He has DISENFRANCHISED GRIEF (suicide loss is frequently stigmatised — people change the subject, offer platitudes, cannot acknowledge the manner of death), social isolation (stopped bowls club — loss of protective factor), PHQ-9 16 (moderately severe depression), and a specific, elevated suicide risk given the bereavement type. COMPREHENSIVE RESPONSE: SUICIDE RISK ASSESSMENT immediately (ask directly about suicidal thoughts, given his wife's death and his current depression), assess for complicated grief (4 months + functional deterioration + isolation), connect with SPECIFIC suicide bereavement support (SurvivorsOfSuicide.com, Griefline, Lifeline), validate the disenfranchised nature of his grief, arrange follow-up within days (not weeks), involve GP regarding PHQ-9 16. General grief counselling (Option C) is inadequate for suicide bereavement — specialised support is needed.",
    wrongExplanations: [
      "WRONG: PHQ-9 of 16 (moderately severe), social isolation and social withdrawal at 4 months post-bereavement requires active clinical assessment — not watchful waiting. Additionally, suicide bereavement specifically elevates suicide risk regardless of time elapsed.",
      "",
      "WRONG: General grief counselling is INSUFFICIENT for suicide bereavement. Suicide loss has specific features (stigma, trauma, complicated emotions of anger/guilt/shame/confusion about the manner of death) that require specialist support.",
      "WRONG: Encouraging social reconnection is appropriate as ONE component — but it does not address the immediate priorities: suicide risk assessment, depression management and specialised bereavement support. Starting with 'go back to bowls' minimises the clinical complexity.",
    ],
  },
];

const clinicalPearls = [
  "The most important thing to know about defence mechanisms for NCLEX: they are UNCONSCIOUS. The patient cannot see themselves using them. Never say 'You are using denial' — this confronts a process the patient is not aware of. Instead, acknowledge the underlying feeling and gently introduce reality over time.",
  "Denial is adaptive in the short term — the newly diagnosed patient who says 'the test must be wrong' is being protected by their psyche while it adjusts to a shattering reality. Forceful confrontation of early denial rarely works and always damages trust. Plant seeds, provide information, and let denial dissolve at its own pace.",
  "Suicide bereavement is the highest-risk bereavement type — survivors carry elevated suicide risk themselves, profound disenfranchised grief (society struggles to acknowledge suicide death), complex guilt ('why didn't I stop it?') and often traumatic imagery. Generalised grief support is not enough. Specialist resources exist and should be offered.",
  "The anger in grief is almost always displaced anger — the real object of anger (the loss, the illness, the unfairness of death) is not accessible, so the emotion finds a more available target. When a patient is inexplicably furious at you, at the food, at the parking — look underneath for grief. And do not take it personally.",
  "Complicated grief is a clinical diagnosis, not just sadness that lasts longer. The specific features — persistent intense longing, inability to accept the death, feeling that life is meaningless, bitterness — distinguish it from major depression and require specific treatment (Complicated Grief Treatment, not standard antidepressants or CBT).",
  "Compassion fatigue is an occupational hazard of caring. It is not weakness, not poor character, not unprofessionalism — it is the accumulated cost of sustained empathy in the presence of suffering. A nurse who stops feeling is not safe for patients. Supervision, peer support and deliberate self-care are clinical skills, not luxuries.",
  "When nothing you say feels right in the presence of grief — silence and presence are enough. Sitting with someone in their pain, without fixing, without reframing, without the need to make it better, is one of the most profound therapeutic interventions in nursing. The goal is not to remove grief — it is to make the patient feel less alone in it.",
];

export default function CopingMechanismsPage() {
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
            <h1 className="font-black text-base text-gray-900">🌿 Coping Mechanisms</h1>
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
            <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
              <p className="text-green-700 text-sm leading-relaxed font-medium">
                🌿 Coping mechanisms and grief appear throughout NCLEX. Master defence mechanisms, Kübler-Ross stages and adaptive vs maladaptive coping!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most common NCLEX traps on Coping Mechanisms — study these carefully!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Coping Mechanisms!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review defence mechanism types and grief stages." :
                        "Keep studying! Focus on identifying defence mechanisms, Kübler-Ross stages and adaptive coping."}
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
