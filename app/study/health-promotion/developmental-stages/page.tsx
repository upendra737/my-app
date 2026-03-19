"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Developmental Stages",
    icon: "🌱",
    color: "blue",
    content: [
      "Developmental theory provides a framework for understanding expected physical, cognitive, psychosocial and moral growth across the lifespan",
      "NCLEX tests developmental stages in the context of nursing assessment — knowing what is NORMAL vs ABNORMAL for each age group",
      "Key theorists: ERIKSON (psychosocial), PIAGET (cognitive), KOHLBERG (moral), FREUD (psychosexual), HAVIGHURST (developmental tasks)",
      "Understanding development guides patient teaching, age-appropriate communication and identifying developmental delays",
      "Nurses must use developmentally appropriate communication — explain procedures using age-appropriate language and techniques",
      "Regression is common during illness or hospitalisation — children and adults may revert to earlier developmental behaviours under stress",
      "Development proceeds in a predictable sequence — cephalocaudal (head to toe), proximodistal (centre to periphery), simple to complex",
    ],
  },
  {
    title: "Erikson's Psychosocial Development — 8 Stages",
    icon: "🧠",
    color: "purple",
    content: [
      "Stage 1 — TRUST vs MISTRUST (Birth-18 months): Task = develop trust through consistent, responsive caregiving. Virtue = HOPE. Nursing: consistent care, meet needs promptly",
      "Stage 2 — AUTONOMY vs SHAME/DOUBT (18 months-3 years): Task = develop independence and self-control. Virtue = WILL. Nursing: offer choices, allow self-care attempts",
      "Stage 3 — INITIATIVE vs GUILT (3-6 years): Task = explore and initiate activities. Virtue = PURPOSE. Nursing: allow play, answer 'why' questions, involve in care",
      "Stage 4 — INDUSTRY vs INFERIORITY (6-12 years): Task = master skills, achieve competence. Virtue = COMPETENCE. Nursing: praise achievements, involve in procedures",
      "Stage 5 — IDENTITY vs ROLE CONFUSION (12-18 years): Task = develop sense of self and identity. Virtue = FIDELITY. Nursing: respect privacy, include in decisions, peer interaction",
      "Stage 6 — INTIMACY vs ISOLATION (Young adult 18-40): Task = form intimate relationships. Virtue = LOVE. Nursing: support relationships, acknowledge isolation concerns",
      "Stage 7 — GENERATIVITY vs STAGNATION (Middle adult 40-65): Task = contribute to next generation, productivity. Virtue = CARE. Nursing: acknowledge contributions, involve in meaningful activities",
      "Stage 8 — EGO INTEGRITY vs DESPAIR (Older adult 65+): Task = find meaning and acceptance in life lived. Virtue = WISDOM. Nursing: life review, acknowledge accomplishments, dignity in dying",
      "NCLEX tip: Match the stage to the correct age group AND identify the correct crisis/task — both are tested",
    ],
  },
  {
    title: "Piaget's Cognitive Development — 4 Stages",
    icon: "🔬",
    color: "blue",
    content: [
      "Stage 1 — SENSORIMOTOR (Birth-2 years): Learns through senses and motor activity. Key milestone: OBJECT PERMANENCE (understanding objects exist when out of sight, develops around 8-9 months)",
      "Stage 2 — PREOPERATIONAL (2-7 years): Uses language and symbols but thinking is egocentric and magical. Key features: EGOCENTRISM (cannot see others' perspectives), ANIMISM (giving life to objects), CENTRATION (focusing on one aspect only)",
      "Stage 3 — CONCRETE OPERATIONAL (7-11 years): Logical thinking about concrete objects. Key milestone: CONSERVATION (understanding that quantity remains the same despite changes in appearance). Can classify and seriate objects",
      "Stage 4 — FORMAL OPERATIONAL (12+ years): Abstract and hypothetical thinking. Can reason logically, consider multiple possibilities, think scientifically",
      "Nursing application: Preoperational children interpret words LITERALLY — avoid saying 'we will take your blood' (terrifying) or 'put you to sleep' (associated with death of pets)",
      "Preoperational children believe illness is PUNISHMENT — reassure them illness is NOT their fault",
      "Concrete operational children benefit from hands-on demonstrations — show them equipment before procedures",
      "Formal operational adolescents can understand diagnosis, prognosis and participate fully in treatment decisions",
    ],
  },
  {
    title: "Growth & Development — Infant (Birth-12 months)",
    icon: "👶",
    color: "green",
    content: [
      "Physical: Birth weight DOUBLES by 6 months, TRIPLES by 12 months. Length increases 50% by 12 months",
      "Head circumference equals chest circumference at approximately 12 months",
      "Anterior fontanel (soft spot) closes at 12-18 months. Posterior fontanel closes at 6-8 weeks",
      "Motor milestones: Holds head up (2 months), rolls over (4-5 months), sits without support (6-8 months), crawls (8-10 months), walks with support (9-12 months), first steps (12 months)",
      "Fine motor: Palmar grasp (3-4 months), pincer grasp (9-10 months)",
      "Language: Cooing (2 months), babbling (6 months), mama/dada with meaning (10-12 months)",
      "Social: Social smile (2 months), stranger anxiety begins (6-8 months), separation anxiety peaks (12-18 months)",
      "Erikson stage: Trust vs Mistrust — consistent responsive caregiving builds foundation for all future relationships",
      "Safety priority: Airway — risk of aspiration, suffocation. Never leave alone on elevated surfaces. No honey under 12 months (botulism)",
    ],
  },
  {
    title: "Growth & Development — Toddler (1-3 years)",
    icon: "🚶",
    color: "orange",
    content: [
      "Physical: Growth slows compared to infancy. Potbelly appearance normal. All 20 deciduous (baby) teeth by age 2.5",
      "Motor: Walks well (15 months), runs (18 months), kicks ball (18 months), walks up stairs (2 years), jumps (2.5 years)",
      "Language: 10-15 words by 15 months, 2-word phrases by 24 months, 3-word sentences by 36 months. Vocabulary of 900+ words by age 3",
      "Erikson: Autonomy vs Shame/Doubt — independence is the central task. 'No!' and negativism are NORMAL and healthy",
      "Piaget: Preoperational — magical thinking, egocentric, parallel play (play alongside but not WITH other children)",
      "Temper tantrums: Normal, peak at 2-3 years — ignore if safe, provide consistent limits, avoid power struggles",
      "Toilet training readiness: Usually 18-24 months — child must be able to sense urge, communicate, and have motor control",
      "Hospitalisation fears: Loss of control and autonomy are primary fears. Offer choices when possible",
      "Safety priority: Drowning, falls, poisoning (childproof all medications), choking (round foods are highest risk)",
    ],
  },
  {
    title: "Growth & Development — Preschool (3-6 years)",
    icon: "🎨",
    color: "green",
    content: [
      "Physical: Growth continues at steady pace. Average weight gain 2kg/year. Loses baby appearance, becomes more slender",
      "Motor: Hops on one foot (4 years), skips (5 years), ties shoelaces (6 years). Drawings become recognisable",
      "Language: 2000+ word vocabulary by age 5. Can tell stories, ask complex questions, understand rules",
      "Erikson: Initiative vs Guilt — explores, initiates activities, develops conscience. Guilt arises when actions conflict with developing conscience",
      "Piaget: Preoperational — egocentric, animism (toys are alive), magical thinking, believes illness is punishment",
      "Play: Associative play (play with others, loosely organised). Dramatic play and imagination develop",
      "Sexual development: Normal curiosity about bodies, masturbation is normal, gender identity established",
      "Fears: Mutilation, loss of body integrity, the dark, animals, 'monsters.' Explain all procedures carefully",
      "Hospitalisation: Use dolls and puppets to explain procedures. Allow medical play. Reassure that procedures are NOT punishment",
      "Safety priority: Motor vehicle accidents (car seat), drowning, burns, falls",
    ],
  },
  {
    title: "Growth & Development — School Age (6-12 years)",
    icon: "📚",
    color: "blue",
    content: [
      "Physical: Slow steady growth. Lose deciduous teeth, permanent teeth emerge. Girls begin puberty 8-13 years, boys 9-14 years",
      "Motor: Refinement of skills — sports, musical instruments, complex crafts. Full coordination achieved",
      "Erikson: Industry vs Inferiority — mastery and achievement are central. School performance, peer comparison, skills are critical. Praise and encouragement essential",
      "Piaget: Concrete Operational — logical thinking about concrete objects. Understands conservation, classification, seriation. Cannot yet think abstractly",
      "Social: Peer relationships become increasingly important. Same-sex peer groups. Team sports and group activities",
      "Cognitive: Reading, writing, mathematical skills. Can understand cause and effect. Understand rules and fairness",
      "Hospitalisation fears: Loss of control, bodily injury/mutilation, separation from peers. Explain procedures honestly using correct terms",
      "Nursing: Explain procedures simply and honestly. Allow participation in care. Respect privacy (significant concern at this age)",
      "Safety priority: Motor vehicle accidents (seatbelt), sports injuries, bicycle accidents (helmet), drowning",
    ],
  },
  {
    title: "Growth & Development — Adolescent (12-18 years)",
    icon: "🧑",
    color: "purple",
    content: [
      "Physical: PUBERTY — rapid growth spurt, sexual maturation. Girls: breast development (Tanner stages), menarche (average age 12.5). Boys: testicular enlargement, voice changes, muscle development",
      "Tanner Stages: Stage 1=prepubescent, Stage 5=adult — used to document pubertal progression",
      "Erikson: Identity vs Role Confusion — central task is developing a stable sense of self. Peer identity, rebellion against authority, body image concerns",
      "Piaget: Formal Operational — abstract thinking, hypothetical reasoning, can consider future consequences",
      "Social: Peer group is primary social unit. Conformity to peers is powerful. Risk-taking behaviour increases",
      "Risk behaviours: Substance use, sexual activity, reckless driving, eating disorders — screen for all",
      "Confidentiality: Adolescents have independent rights in many jurisdictions for STI treatment, contraception, mental health, substance abuse",
      "Hospitalisation: Greatest fear = loss of control and separation from peers. Allow peer visitation. Maintain privacy and confidentiality",
      "Nursing: Establish private communication (without parents if appropriate), non-judgmental approach, respect autonomy",
      "Safety: Motor vehicle accidents (leading cause of adolescent death), substance use, suicide (second leading cause)",
    ],
  },
  {
    title: "Growth & Development — Young Adult (18-40 years)",
    icon: "👨",
    color: "blue",
    content: [
      "Physical: Peak physical condition in early 20s. Gradual changes begin in late 20s-30s. Reproductive peak",
      "Erikson: Intimacy vs Isolation — forming close, committed relationships is the central task. Failure = isolation and loneliness",
      "Health priorities: Establish healthy lifestyle habits, preventive care, reproductive health, mental health",
      "Screening: Pap smear (21+), breast self-exam, testicular self-exam, blood pressure, STI screening, mental health screening",
      "Major health risks: Accidents (leading cause of death), substance use, sexually transmitted infections, mental health disorders",
      "Pregnancy planning and reproductive health become central concerns",
      "Nursing: Health promotion education, stress management, lifestyle counselling, reproductive health",
    ],
  },
  {
    title: "Growth & Development — Middle Adult (40-65 years)",
    icon: "👨‍💼",
    color: "orange",
    content: [
      "Physical: Gradual decline in physical capacity. MENOPAUSE (women, average age 51) — hot flashes, vaginal dryness, bone density loss. Men experience andropause (gradual testosterone decline)",
      "Vision: Presbyopia (difficulty reading close-up) begins around age 40-45",
      "Hearing: Presbycusis (high-frequency hearing loss) begins to develop",
      "Erikson: Generativity vs Stagnation — contributing to the next generation, leaving a legacy. Parenting, mentoring, community involvement",
      "Major health risks: Cardiovascular disease (leading cause of death), cancer, type 2 diabetes, obesity, hypertension",
      "Screening intensifies: Colonoscopy (45-50+), mammogram (40-50+ depending on guidelines), PSA (50+), bone density (65+ women, earlier if risk factors), lipid panel, glucose",
      "'Sandwich generation' — caring for both children and aging parents simultaneously — significant stress",
      "Nursing: Chronic disease prevention and management, health screening counselling, stress management, menopause education",
    ],
  },
  {
    title: "Growth & Development — Older Adult (65+ years)",
    icon: "👴",
    color: "red",
    content: [
      "Erikson: Ego Integrity vs Despair — reviewing life with acceptance and meaning vs regret and bitterness",
      "Physical changes: All organ systems show decline but at varying rates. Changes are GRADUAL and NORMAL — not all elderly are frail",
      "CARDIOVASCULAR: Decreased cardiac output, increased peripheral resistance, orthostatic hypotension risk",
      "RESPIRATORY: Decreased lung capacity, reduced cough reflex, increased infection risk",
      "MUSCULOSKELETAL: Bone density decreases (osteoporosis risk), muscle mass decreases (sarcopenia), joints stiffen",
      "NEUROLOGICAL: Slowed reaction time, decreased short-term memory, sleep pattern changes (less deep sleep). Confusion is NOT normal — always investigate",
      "RENAL: Decreased GFR — drug dosing must be adjusted. Medications accumulate more readily",
      "SENSORY: Presbyopia, presbycusis, decreased taste/smell/touch sensitivity",
      "IMMUNE: Decreased immune response — higher infection risk, atypical presentations of illness",
      "SKIN: Thinner, less elastic, decreased subcutaneous fat — pressure injury risk increases dramatically",
      "ATYPICAL presentations: Elderly may present with confusion, falls or functional decline as the ONLY sign of MI, infection, or other serious illness",
    ],
  },
  {
    title: "Nursing Implications Across the Lifespan",
    icon: "🩺",
    color: "green",
    content: [
      "Infants/Toddlers: Include parents in all care, maintain routine, minimise separation, use therapeutic play",
      "Preschool: Use simple concrete language, allow medical play, never describe procedures as 'taking' anything",
      "School age: Explain procedures honestly using correct terminology, allow participation, respect privacy",
      "Adolescents: Ensure private communication, maintain confidentiality, involve in decisions, peer support",
      "Young/Middle adults: Focus on health promotion, preventive screening, lifestyle modification",
      "Older adults: Allow extra time, speak clearly and slowly, check for hearing/vision aids, assess for polypharmacy, screen for depression and cognitive decline",
      "ALL ages: Assess developmental stage, not just chronological age — illness causes regression",
      "Pain assessment tools by age: Neonates = NIPS/CRIES, Infants = FLACC, Toddlers/Preschool = FACES scale, School age+ = numeric scale (0-10)",
    ],
  },
];

const mnemonics = [
  {
    title: "Erikson's Stages — Order",
    acronym: "TATIIIGE",
    breakdown: ["Trust", "Autonomy", "Initiative", "Industry", "Identity", "Intimacy", "Generativity", "Ego Integrity"],
    memory: "Tiny Ants Try Incredibly Interesting Games Every day — Trust, Autonomy, Initiative, Industry, Identity, Intimacy, Generativity, Ego Integrity!",
    color: "purple",
  },
  {
    title: "Piaget's Stages — Order",
    acronym: "SPCF",
    breakdown: ["Sensorimotor (0-2)", "Preoperational (2-7)", "Concrete Operational (7-11)", "Formal Operational (12+)"],
    memory: "Smart People Can Fly — Sensorimotor, Preoperational, Concrete, Formal!",
    color: "blue",
  },
  {
    title: "Preoperational Child Language Traps",
    acronym: "SAFE",
    breakdown: ["No 'Sleep' (death of pets)", "No 'Take your blood'", "No 'Fix' or 'Cut'", "Explain illness is NOT punishment"],
    memory: "SAFE language with preschoolers — they interpret EVERYTHING literally and magically!",
    color: "orange",
  },
  {
    title: "Older Adult Atypical Presentations",
    acronym: "CHEF",
    breakdown: ["Confusion (new onset)", "Hypotension/falls", "Eating poorly/anorexia", "Fatigue/functional decline"],
    memory: "A CHEF who suddenly cannot cook — new onset CHEF signs in elderly = investigate for serious illness!",
    color: "red",
  },
];

const alerts = [
  { text: "New onset confusion in an elderly patient is NEVER just 'dementia' or 'sundowning' — always investigate for MI, UTI, hypoxia, medication toxicity or stroke!", severity: "high" },
  { text: "Preoperational children (2-7 years) interpret words LITERALLY — NEVER say 'put to sleep', 'take your blood' or 'cut' without careful explanation!", severity: "high" },
  { text: "Adolescents have INDEPENDENT consent rights for STI, contraception, substance abuse and mental health treatment in most jurisdictions!", severity: "high" },
  { text: "Separation anxiety peaks at 12-18 months — this is NORMAL development. Parents staying during procedures reduces distress significantly!", severity: "medium" },
  { text: "Preschool children believe illness is PUNISHMENT — always reassure them that being sick is NOT their fault!", severity: "medium" },
  { text: "Anterior fontanel closes at 12-18 months. A BULGING fontanel = increased ICP. A SUNKEN fontanel = dehydration!", severity: "medium" },
  { text: "Object permanence develops at 8-9 months — before this, 'out of sight = out of existence' for infants!", severity: "medium" },
  { text: "School-age children (6-12) fear BODILY MUTILATION and loss of control — explain exactly what will and will NOT happen to their body!", severity: "medium" },
  { text: "Regression during hospitalisation is NORMAL and EXPECTED at all ages — do not treat it as pathological!", severity: "medium" },
  { text: "Older adults have decreased renal function — ALL medications need dose adjustment and careful monitoring for toxicity!", severity: "medium" },
  { text: "Temper tantrums in toddlers (2-3 years) are NORMAL — ignore if safe, maintain consistent limits. Do not reward tantrum behaviour!", severity: "low" },
  { text: "Pain assessment tools must match developmental level — FLACC for infants, FACES for preschool, numeric for school age and older!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "According to Erikson's theory of psychosocial development, what is the PRIMARY developmental task of a toddler aged 18 months to 3 years?",
    options: [
      "Trust vs Mistrust — developing trust through consistent caregiving",
      "Initiative vs Guilt — exploring and initiating activities",
      "Autonomy vs Shame and Doubt — developing independence and self-control",
      "Industry vs Inferiority — mastering skills and achieving competence",
    ],
    correct: 2,
    explanation: "The toddler stage (18 months to 3 years) corresponds to Erikson's AUTONOMY vs SHAME AND DOUBT. The central task is developing independence and self-control. This is why toddlers say 'No!' frequently and insist on doing things themselves — this is healthy and normal development, not defiance. Nursing implication: offer choices, allow self-care attempts, avoid shaming the child. Trust vs Mistrust is the infant stage. Initiative vs Guilt is preschool. Industry vs Inferiority is school age.",
    wrongExplanations: [
      "WRONG: Trust vs Mistrust is the INFANT stage (birth to 18 months). The task is developing basic trust through consistent, responsive caregiving.",
      "WRONG: Initiative vs Guilt is the PRESCHOOL stage (3-6 years). Children explore and initiate activities, developing a sense of purpose.",
      "",
      "WRONG: Industry vs Inferiority is the SCHOOL AGE stage (6-12 years). Children master academic and social skills and compare themselves to peers.",
    ],
  },
  {
    level: "Knowledge",
    question: "A nurse is assessing a 9-month-old infant during a well-baby visit. Which developmental milestone would the nurse expect to observe?",
    options: [
      "Walking independently without support",
      "Using a pincer grasp to pick up small objects",
      "Saying 2-3 word sentences",
      "Playing cooperatively with other children",
    ],
    correct: 1,
    explanation: "The PINCER GRASP (using thumb and index finger to pick up small objects) develops between 9-10 months — this is an expected milestone at 9 months. Walking independently typically develops at 12-15 months. Two to three word sentences develop at 24-36 months. Cooperative play develops in the preschool years (3-5 years). Developmental milestones follow a predictable sequence — knowing expected milestones by age is essential for NCLEX.",
    wrongExplanations: [
      "WRONG: Independent walking develops at approximately 12-15 months. At 9 months, infants may pull to stand and cruise along furniture.",
      "",
      "WRONG: Two to three word sentences develop at 24-36 months. At 9-12 months, infants begin to say 'mama' and 'dada' with meaning.",
      "WRONG: Cooperative play (playing WITH other children) develops in the preschool years. Infants engage in solitary play and parallel play develops in toddlerhood.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is preparing a 4-year-old child for a blood draw. The child asks 'Will you take all my blood?' How should the nurse respond?",
    options: [
      "Say 'Don't worry, it won't hurt much' to minimise the child's anxiety",
      "Explain that only a small amount will be taken, the body makes more blood and show the child the small tube used for collection",
      "Tell the child 'We need to take your blood to help the doctor fix you'",
      "Ask the parents to explain the procedure — children respond better to parental explanations",
    ],
    correct: 1,
    explanation: "A 4-year-old is in Piaget's PREOPERATIONAL stage — they think LITERALLY and MAGICALLY. 'Take your blood' is terrifying because they may genuinely fear all their blood will be removed. The correct response addresses their specific fear directly with concrete, honest reassurance: only a small amount is needed, the body makes more blood, and showing them the small collection tube provides concrete evidence. False reassurance ('it won't hurt much') is dishonest and damages trust. Using the word 'take' reinforces the fear. Asking parents to explain abdicates nursing responsibility for age-appropriate therapeutic communication.",
    wrongExplanations: [
      "WRONG: 'It won't hurt much' is false reassurance and dishonest — blood draws do hurt. Building therapeutic trust requires honesty. False reassurance destroys the child's trust when the procedure is painful.",
      "",
      "WRONG: 'Take your blood to fix you' uses the frightening word 'take,' implies something is wrong with them (their blood needs fixing) and is not specific about the quantity. This worsens preschool magical thinking fears.",
      "WRONG: Nurses must provide age-appropriate therapeutic communication directly. Delegating explanation to parents is appropriate as SUPPORT — not as a replacement for nursing communication.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for an 8-year-old who is hospitalised for appendicitis. The child seems withdrawn and refuses to participate in care. What is the nurse's BEST approach?",
    options: [
      "Tell the child that they must cooperate — their health depends on it",
      "Ask the parents to stay out of the room so the child bonds with the nurse",
      "Explain procedures honestly using correct anatomical terms, allow choices where possible and encourage the child to ask questions",
      "Use play therapy only — school-age children cannot understand medical explanations",
    ],
    correct: 2,
    explanation: "An 8-year-old is in Erikson's INDUSTRY vs INFERIORITY stage and Piaget's CONCRETE OPERATIONAL stage. School-age children: fear loss of control and bodily mutilation, benefit from honest explanations using correct terms, can understand cause-and-effect reasoning, want to participate and feel competent, and respond well to having choices (even small ones). Withdrawing and refusing are signs of fear and loss of control — not defiance. Threatening cooperation (Option A) increases fear. Excluding parents (Option B) is wrong — parents are a comfort at this age. School-age children DO understand medical explanations — age-appropriate ones using concrete language.",
    wrongExplanations: [
      "WRONG: Threatening a frightened child with consequences damages trust and increases anxiety — it does not improve cooperation. Fear of bodily harm is the primary concern at this developmental stage.",
      "WRONG: School-age children still want and benefit from parental presence — excluding parents increases separation anxiety. Parents should be involved in care.",
      "",
      "WRONG: School-age children are in the concrete operational stage and DO understand medical explanations. Play therapy is appropriate for younger children — school-age children can and should receive honest, direct medical explanations.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is assessing a 75-year-old patient admitted for elective hip replacement. The patient becomes acutely confused on post-operative day 1 — they are disoriented and calling out for deceased relatives. Their family states 'He gets like this at night — it's just sundowning, it's normal for him.' What is the nurse's MOST appropriate response?",
    options: [
      "Document 'sundowning' and notify the family this is expected post-operatively",
      "Reassure the family, dim the lights and reorient the patient gently",
      "Conduct a full assessment — new onset acute confusion requires investigation for reversible causes",
      "Administer a PRN benzodiazepine to reduce agitation and promote sleep",
    ],
    correct: 2,
    explanation: "NEW ONSET acute confusion in an elderly patient is NEVER automatically attributed to sundowning or dementia — it must be investigated for reversible causes. Post-operative acute confusion (delirium) has multiple potential causes: hypoxia, urinary retention, pain, medication effects (especially opioids, anticholinergics), electrolyte imbalance, infection (UTI, wound), dehydration, cardiac event or neurological event. Each cause is treatable and potentially life-threatening if missed. The nurse must assess: oxygen saturation, vital signs, urine output/urinary retention, pain level, medication review, blood glucose, full neurological assessment. Simply attributing confusion to sundowning without assessment is negligent.",
    wrongExplanations: [
      "WRONG: Documenting 'sundowning' without investigation assumes a diagnosis and misses potentially life-threatening treatable causes of acute delirium.",
      "WRONG: Reorientation and environmental measures are appropriate interventions AFTER ruling out reversible causes — they are not the priority before assessment.",
      "",
      "WRONG: Benzodiazepines are CONTRAINDICATED in elderly delirium — they worsen confusion, increase fall risk and can cause respiratory depression. Assessment and treating the underlying cause is the priority.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is working in a paediatric ward. A 15-year-old patient presents requesting treatment for a sexually transmitted infection and explicitly asks that her parents not be notified. Her parents are present in the waiting area and approach the nurse demanding to know why their daughter is being seen. What is the MOST appropriate nursing action?",
    options: [
      "Inform the parents of the diagnosis — parents have the right to all medical information about minor children",
      "Tell the parents their daughter is being seen but cannot share any clinical details without the patient's consent",
      "Ask the physician to speak with the parents — this decision is above nursing scope",
      "Ask the patient to give consent for parent notification — most teenagers agree when asked directly",
    ],
    correct: 1,
    explanation: "In most jurisdictions, minors have the legal right to independent consent for STI treatment WITHOUT parental notification — this right exists specifically to encourage adolescents to seek treatment. The nurse must: protect the patient's confidentiality completely (cannot confirm or deny diagnosis), inform parents that their daughter is being assessed but that specific clinical information cannot be shared without the patient's consent. This is both legally correct and ethically appropriate. Disclosing the diagnosis (Option A) violates the patient's confidentiality rights and legal protections. Deferring to the physician (Option C) is inappropriate — this is a nursing confidentiality obligation. Pressuring the patient to consent to disclosure (Option D) undermines her autonomy.",
    wrongExplanations: [
      "WRONG: In most jurisdictions, minors have specific legal rights to confidential STI treatment. Disclosing to parents without consent violates both legal rights and HIPAA/privacy obligations.",
      "",
      "WRONG: This is a nursing confidentiality decision — not a physician decision. Nurses are independently obligated to protect patient confidentiality.",
      "WRONG: Pressuring the patient to consent to disclosure undermines her autonomy and trust. The nurse should respect her stated wishes — not manoeuvre around them.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is working in a community health centre conducting developmental screenings. A 30-month-old child is assessed. The parents report the child has 15 words, has not yet combined words, and mostly plays alone without interest in other children. The parents say 'He's just shy — his older brother was a late talker too.' What is the nurse's MOST appropriate action?",
    options: [
      "Reassure the parents — language development varies widely and late talking runs in families",
      "Document the findings and screen again at the 36-month visit",
      "Express concern about possible developmental delay, refer for formal developmental evaluation and provide early intervention resources",
      "Advise the parents to read more to the child and reduce screen time — this will correct the delay",
    ],
    correct: 2,
    explanation: "A 30-month-old should have a vocabulary of approximately 50+ words AND be combining words into 2-word phrases. This child has only 15 words and no word combinations — this is significantly below expected milestones and suggests possible LANGUAGE DELAY or developmental disorder (including autism spectrum disorder). The social concern (plays alone without interest in peers) adds to the clinical picture. Expected milestones: 24 months = 50 words + 2-word phrases, 36 months = 3-word sentences. Family history of late talking does not normalise a significant delay — it may indicate genetic factors that also need assessment. Early intervention (before age 3) provides the greatest benefit for developmental delays. Waiting until 36 months delays potentially critical early intervention.",
    wrongExplanations: [
      "WRONG: Family history of late talking does not normalise a significant developmental delay. This child's language is below expected milestones and requires professional evaluation — not reassurance.",
      "WRONG: Waiting until 36 months delays critical early intervention. Children with developmental delays benefit most from intervention started BEFORE age 3 — waiting 6 more months is not appropriate.",
      "",
      "WRONG: Reading and reducing screen time are healthy practices — but they do not address an established developmental delay that requires formal evaluation and possibly speech therapy, occupational therapy or developmental paediatrics.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a 70-year-old patient receiving gentamicin for a serious infection. The patient reports the medication 'doesn't seem to be working' and asks for a higher dose. The nurse reviews the patient's renal function and finds GFR of 38 mL/min (normal >60). What is the PRIORITY nursing concern?",
    options: [
      "Advocate for a higher dose — the patient is not responding to treatment",
      "Recognise that decreased renal function in older adults increases the risk of gentamicin toxicity — notify the physician and request a pharmacist review",
      "Reassure the patient that gentamicin takes time to work — continue the current dose",
      "Switch the patient to oral antibiotics — IV antibiotics are too risky in elderly patients",
      ],
    correct: 1,
    explanation: "Older adults have DECREASED RENAL FUNCTION (GFR 38 = moderately reduced) — this significantly affects drug clearance. Gentamicin is an AMINOGLYCOSIDE antibiotic that is: renally excreted, has a narrow therapeutic index and is NEPHROTOXIC and OTOTOXIC. In a patient with GFR 38, gentamicin accumulates to toxic levels — the patient is at HIGH RISK for kidney damage (worsening renal failure) and hearing loss/vestibular damage. The priority is: notify the physician of the renal function findings, request a pharmacist review for dose adjustment or alternative antibiotic, monitor gentamicin levels (peaks and troughs), assess hearing and renal function regularly. Increasing the dose (Option A) would be dangerous. The patient's perception that it's 'not working' may reflect inadequate clinical response due to incorrect dosing for renal function — not the need for MORE drug.",
    wrongExplanations: [
      "WRONG: Increasing the dose in a patient with reduced renal function and a nephrotoxic/ototoxic drug would be dangerous — it risks severe kidney damage and permanent hearing loss.",
      "",
      "WRONG: The clinical concern is not that the drug 'takes time' — it is that the current dose may be toxic given the patient's renal function. Reassurance without action is inappropriate.",
      "WRONG: Switching antibiotics is a physician/pharmacist decision based on culture results and clinical status — nurses cannot independently switch medications. The priority is notifying the physician of the renal function findings.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is conducting a health promotion assessment for a 45-year-old woman. She is postmenopausal (last period 14 months ago), has a family history of breast cancer in her mother, smokes half a pack per day and has not had a healthcare visit in 5 years. She states she 'feels fine' and only came in for a routine check-up. Which screening or intervention should the nurse PRIORITISE discussing first?",
    options: [
      "Colonoscopy — colorectal cancer screening is the most important at age 45",
      "Smoking cessation — it is the single highest-impact health intervention for this patient",
      "Mammogram and bone density scan — postmenopausal woman with breast cancer family history",
      "Pap smear — she has not had one in 5 years",
    ],
    correct: 1,
    explanation: "SMOKING CESSATION is the single highest-impact health intervention for this patient. Smoking causes or worsens: cardiovascular disease (leading cause of death in women), lung cancer, COPD, stroke, multiple other cancers, and accelerates osteoporosis (already a risk with menopause). In a woman who smokes, mammogram and bone density are important — but cessation reduces risk across ALL disease categories simultaneously. Smoking cessation counselling should be offered at EVERY healthcare encounter for every smoking patient — the 5As: Ask, Advise, Assess, Assist, Arrange. Colorectal screening at 45 and mammogram are both indicated — but smoking cessation has the broadest impact on her overall mortality risk.",
    wrongExplanations: [
      "WRONG: Colonoscopy is indicated at 45 — but it screens for ONE cancer. Smoking cessation reduces risk for cardiovascular disease, multiple cancers and many other conditions simultaneously — broader impact.",
      "",
      "WRONG: Mammogram and bone density are important and should be discussed — but smoking cessation addresses the broadest range of her health risks. These screenings should also be arranged.",
      "WRONG: Pap smear frequency depends on previous results — for a woman 45+, every 3 years (cytology alone) or every 5 years (co-test) if previously normal. This is important but not the highest-impact intervention.",
    ],
  },
  {
    level: "Advanced",
    question: "A school nurse is evaluating a 7-year-old who was referred by a teacher for 'behavioural problems.' The teacher reports the child has difficulty sitting still, frequently interrupts, struggles to wait his turn and is falling behind academically despite appearing intelligent. The child's mother says 'He's just a boy being a boy — he's fine at home.' The nurse assesses the child and observes the described behaviours. What is the MOST appropriate nursing action?",
    options: [
      "Reassure the teacher and parent — active behaviour in boys is developmentally normal",
      "Diagnose ADHD and recommend medication to the parents",
      "Document observations, discuss concerns with parents using specific behavioural examples, recommend formal psychoeducational evaluation and provide resources",
      "Advise the teacher to change classroom strategies — the child does not have a medical problem",
    ],
    correct: 2,
    explanation: "The nurse's role is not to DIAGNOSE but to ASSESS, DOCUMENT, COMMUNICATE and REFER. The observed pattern — inattention, hyperactivity, impulsivity across multiple settings (school, noted by multiple observers), academic impact — warrants formal evaluation. The correct action: document specific objective observations, communicate concerns to parents using concrete behavioural examples without labelling, recommend formal psychoeducational evaluation by a multidisciplinary team (psychologist, developmental paediatrician), provide resources and support the family. Reassuring without investigation (Option A) delays diagnosis and intervention for a potentially significant learning/developmental concern. Diagnosing and recommending medication (Option B) is completely outside nursing scope. Advising the teacher alone (Option D) fails to address the child's medical evaluation needs.",
    wrongExplanations: [
      "WRONG: While active behaviour can be normal, the pattern described — inattention, impulsivity, academic impact across settings — goes beyond typical developmental variation and warrants formal evaluation.",
      "WRONG: Nurses CANNOT diagnose ADHD or recommend medication — this is completely outside nursing scope of practice. Diagnosis requires formal psychoeducational evaluation by appropriate professionals.",
      "",
      "WRONG: Advising only the teacher fails the child — this child needs formal evaluation to determine whether there is an underlying condition requiring support. Classroom strategies alone are not sufficient if there is an undiagnosed condition.",
    ],
  },
];

const clinicalPearls = [
  "The most important thing to know about Erikson for NCLEX: match the STAGE to the correct AGE GROUP and identify the correct CRISIS. Both are tested. A question about a toddler refusing to do things themselves is testing Autonomy vs Shame — recognise it.",
  "Preschoolers believe illness is punishment for bad behaviour. Every time you care for a preschool child — reassure them that being sick is not their fault. This reduces guilt and anxiety significantly.",
  "The most dangerous developmental error nurses make is attributing new onset confusion in elderly patients to 'dementia' or 'sundowning.' Acute delirium has a REVERSIBLE cause — find it and treat it.",
  "Language milestones are the most reliable early indicators of developmental delay — and the most commonly missed. At 24 months: 50 words and word combinations. At 36 months: 3-word sentences. Know these cold.",
  "Adolescents are the most likely age group to avoid healthcare due to confidentiality concerns — especially for sexual health, mental health and substance use. Assuring confidentiality within legal limits is the most important thing you can do for adolescent health.",
  "Older adults on multiple medications are at extremely high risk for drug toxicity — especially renal-dependent drugs (aminoglycosides, digoxin, metformin, NSAIDs). Always check renal function before accepting that a drug dose is 'standard.'",
  "Regression during hospitalisation is universal and expected — a toilet-trained toddler who starts wetting again, a school-age child who wants to be held 'like a baby,' an adult who becomes demanding and dependent. Meet them where they are, do not shame them.",
];

export default function DevelopmentalStagesPage() {
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
            <h1 className="font-black text-base text-gray-900">👶 Developmental Stages</h1>
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
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-6">
              <p className="text-purple-700 text-sm leading-relaxed font-medium">
                👶 Developmental stages appear throughout NCLEX — in paediatric, psychiatric and adult care questions. Master Erikson, Piaget and age-specific milestones!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most common NCLEX traps on Developmental Stages — study these carefully!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Developmental Stages!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review Erikson stages and age-specific milestones." :
                        "Keep studying! Focus on Erikson, Piaget and developmental milestones by age group."}
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