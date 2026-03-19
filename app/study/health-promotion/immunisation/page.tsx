"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Immunisation",
    icon: "💉",
    color: "blue",
    content: [
      "Immunisation is one of the most effective public health interventions in history — responsible for eradicating smallpox and near-elimination of polio, measles and many other diseases",
      "ACTIVE immunity: Body produces its own antibodies in response to a vaccine or natural infection — longer lasting, may take weeks to develop",
      "PASSIVE immunity: Antibodies transferred from another source — breast milk (IgA), maternal transfer across placenta (IgG), immunoglobulin injections. Immediate but temporary (weeks to months)",
      "HERD IMMUNITY: When sufficient proportion of population is immune — protects those who cannot be vaccinated (newborns, immunocompromised, those with contraindications). Threshold varies by disease — measles requires 95% coverage",
      "NCLEX heavily tests: Childhood immunisation schedule, contraindications (especially live vaccines), vaccine-preventable diseases, cold chain requirements and nursing responsibilities",
      "The nurse's role: Administer vaccines safely, provide education, screen for contraindications, manage adverse reactions, maintain cold chain, document accurately",
      "VACCINE HESITANCY: A major public health challenge. Nursing approach: empathetic, non-judgmental, evidence-based discussion. Acknowledge concerns, provide accurate information, build trust",
    ],
  },
  {
    title: "Live vs Inactivated (Killed) Vaccines — Critical Distinction",
    icon: "🔬",
    color: "red",
    content: [
      "LIVE ATTENUATED vaccines contain weakened (attenuated) live organisms — they replicate in the host and produce strong, long-lasting immunity often with fewer doses",
      "Live vaccine examples: MMR (measles, mumps, rubella), MMRV (MMR + varicella), Varicella (chickenpox), Rotavirus (oral), Yellow fever, Oral typhoid, Nasal flu vaccine (LAIV), BCG (tuberculosis)",
      "Memory trick for live vaccines: My Mother's Really Very Raucous, You Obnoxious Boy — MMR, Varicella, Rotavirus, Yellow fever, Oral typhoid, BCG",
      "INACTIVATED/KILLED vaccines: Contain dead organisms or components. Cannot cause disease. Generally require more doses and boosters. Safer for immunocompromised",
      "Inactivated vaccine examples: Influenza (injected), IPV (injected polio), Hepatitis A, Hepatitis B, DTaP (diphtheria, tetanus, pertussis), Meningococcal, Pneumococcal, HPV, Rabies, COVID-19 (mRNA and viral vector)",
      "TOXOID vaccines: Use inactivated toxins (diphtheria toxoid, tetanus toxoid) — safe in pregnancy and immunocompromised",
      "SUBUNIT/RECOMBINANT vaccines: Contain specific protein components — Hepatitis B, HPV, pertussis component in DTaP, shingles (Shingrix)",
      "CRITICAL RULE: Live vaccines are CONTRAINDICATED in immunocompromised patients and pregnant women — they can cause disease",
    ],
  },
  {
    title: "Contraindications to Vaccination — Must Know",
    icon: "🚫",
    color: "red",
    content: [
      "TRUE CONTRAINDICATIONS (vaccination must not occur):",
      "Severe allergic reaction (anaphylaxis) to a previous dose of the same vaccine or vaccine component",
      "Known severe allergy to a vaccine component (e.g., egg allergy — relevant to some flu vaccines and yellow fever)",
      "Live vaccines in PREGNANCY — risk of foetal infection (MMR, varicella, LAIV, yellow fever, oral typhoid)",
      "Live vaccines in SEVERE IMMUNOCOMPROMISE — HIV with CD4 <200, active leukaemia/lymphoma, high-dose immunosuppressants, organ transplant recipients on immunosuppression",
      "Encephalopathy within 7 days of previous pertussis vaccine (DTP contraindicated — DTaP may still be given)",
      "PRECAUTIONS (vaccination may be deferred but not absolutely contraindicated):",
      "Moderate-severe acute illness with fever — defer until recovered (mild illness is NOT a contraindication)",
      "Recent blood product or immunoglobulin administration — may interfere with live vaccine effectiveness (defer MMR/varicella 3-11 months depending on product)",
      "Thrombocytopenia or bleeding disorder — precaution for IM injections",
      "COMMON MISCONCEPTIONS — these are NOT contraindications: Mild illness/low-grade fever, current antibiotic use, previous disease (can still vaccinate), prematurity, stable chronic illness, family history of adverse reactions",
    ],
  },
  {
    title: "Childhood Immunisation Schedule — Birth to 6 Years",
    icon: "👶",
    color: "green",
    content: [
      "BIRTH: Hepatitis B (HepB) #1",
      "1-2 MONTHS: Hepatitis B #2",
      "2 MONTHS: DTaP #1, IPV #1, Hib #1, PCV13 (pneumococcal) #1, Rotavirus #1",
      "4 MONTHS: DTaP #2, IPV #2, Hib #2, PCV13 #2, Rotavirus #2",
      "6 MONTHS: DTaP #3, Hib #3, PCV13 #3, Rotavirus #3 (if using 3-dose series), HepB #3",
      "6 MONTHS+: Annual influenza vaccine (starts at 6 months, two doses first year)",
      "12-15 MONTHS: MMR #1, Varicella #1, Hib #4, PCV13 #4, Hepatitis A #1",
      "15-18 MONTHS: DTaP #4",
      "18-24 MONTHS: Hepatitis A #2",
      "4-6 YEARS: DTaP #5, IPV #4, MMR #2, Varicella #2",
      "NCLEX tip: Know WHICH vaccines are given at BIRTH (HepB), at 2 months (biggest cluster), at 12-15 months (MMR first dose) and at 4-6 years (school entry boosters)",
    ],
  },
  {
    title: "Childhood Immunisation Schedule — 7-18 Years",
    icon: "🧒",
    color: "green",
    content: [
      "9-12 YEARS: HPV vaccine series begins (2 doses if starting before 15th birthday — given 6-12 months apart)",
      "HPV vaccine: If starting at 15 or older — 3 doses required (0, 1-2, 6 months)",
      "11-12 YEARS (ADOLESCENT PLATFORM): Tdap (tetanus, diphtheria, pertussis booster), Meningococcal (MenACWY) #1, HPV",
      "16 YEARS: Meningococcal booster (MenACWY) #2. Consider MenB (serogroup B meningococcal) — shared decision-making",
      "Annual influenza: Every year for ALL individuals 6 months and older",
      "Catch-up vaccinations: Any missed vaccines should be caught up — refer to catch-up schedule",
      "Special populations: Asplenic patients (including sickle cell disease) need extra doses of meningococcal and pneumococcal vaccines",
      "NCLEX tip: HPV is ROUTINELY recommended at age 11-12 — not at first sexual activity. Catch-up is available to 26 years. Shared decision-making 27-45",
    ],
  },
  {
    title: "Adult Immunisation Schedule",
    icon: "👨",
    color: "blue",
    content: [
      "INFLUENZA: Annually for ALL adults. High-dose formulation for adults 65+. Live nasal spray (LAIV) only for healthy non-pregnant adults 2-49",
      "COVID-19: Updated formulations recommended annually for all adults — follow current CDC/ATAGI guidance",
      "Td/Tdap: Tdap once (if not received as adolescent), then Td booster every 10 years. Tdap in EVERY pregnancy (27-36 weeks)",
      "PNEUMOCOCCAL: PCV15 or PCV20 for ALL adults 65+. Adults 19-64 with certain conditions (asplenia, immunocompromise, chronic conditions)",
      "SHINGLES (Zoster): Shingrix (recombinant, 2-dose series) recommended for ALL immunocompetent adults 50+. Given even if prior Zostavax or prior shingles",
      "HEPATITIS B: 3-dose series recommended for all unvaccinated adults. Priority for: healthcare workers, immunocompromised, dialysis, diabetes, MSM, PWID",
      "HEPATITIS A: 2-dose series for: travellers to endemic areas, chronic liver disease, MSM, PWID, homeless persons",
      "MMR: 1-2 doses for adults born after 1957 who lack evidence of immunity. 2 doses for healthcare workers, college students, international travellers",
      "VARICELLA: 2-dose series for adults without evidence of immunity. Contraindicated in pregnancy — vaccinate postpartum if non-immune",
      "MENINGOCOCCAL: For adults at increased risk — asplenia, complement deficiency, HIV, college freshmen in dorms, travel to endemic areas",
    ],
  },
  {
    title: "Vaccines in Pregnancy",
    icon: "🤰",
    color: "purple",
    content: [
      "SAFE in pregnancy (recommended): Tdap (every pregnancy 27-36 weeks), Influenza (injected — any trimester), COVID-19 (recommended), Hepatitis B (if indicated)",
      "CONTRAINDICATED in pregnancy (live vaccines): MMR, Varicella (MMRV), LAIV (live nasal flu), Yellow fever (only if travel risk outweighs risk), Oral typhoid",
      "TDAP in pregnancy: Given every pregnancy (27-36 weeks) regardless of prior Tdap history — maternal antibodies protect newborn before they can be vaccinated. This is critically important for protecting against whooping cough (pertussis)",
      "Influenza in pregnancy: Injected flu vaccine (NOT LAIV) recommended in any trimester — flu in pregnancy carries serious risks including preterm birth, ICU admission",
      "MMR and Varicella: Should be given POSTPARTUM if the mother is non-immune — do not give in pregnancy. Advise to avoid pregnancy for 1 month after MMR",
      "Hepatitis B: If mother is HBsAg positive — newborn receives HBIG + first HepB dose within 12 hours of birth",
      "NCLEX tip: Tdap in EVERY pregnancy 27-36 weeks is a priority exam fact — many nurses and patients are unaware of this recommendation",
    ],
  },
  {
    title: "Special Population Vaccination",
    icon: "🏥",
    color: "orange",
    content: [
      "IMMUNOCOMPROMISED patients: Live vaccines generally CONTRAINDICATED. Inactivated vaccines safe but may have reduced effectiveness. Annual flu (injected), pneumococcal, hepatitis B recommended",
      "HIV POSITIVE: CD4 >200 — most vaccines safe including varicella and MMR. CD4 <200 — live vaccines contraindicated. Annual flu, pneumococcal very important",
      "ASPLENIC patients (splenectomy or functional asplenia — sickle cell disease): HIGH RISK for encapsulated organisms. MANDATORY vaccines: PCV13 + PPSV23 (pneumococcal), Hib, MenACWY + MenB. Ideally vaccinate 2 weeks BEFORE splenectomy",
      "SOLID ORGAN TRANSPLANT: Vaccinate BEFORE transplant when possible (immunosuppression reduces response). No live vaccines after transplant",
      "HAEMATOPOIETIC STEM CELL TRANSPLANT (HSCT): Re-vaccinate ALL patients post-transplant — immunity is lost. Wait 6-12 months post-transplant",
      "HEALTHCARE WORKERS: Annual influenza, Hepatitis B series (verify immunity), MMR, Varicella, Tdap, consider meningococcal",
      "PRETERM INFANTS: Vaccinate according to CHRONOLOGICAL age (not corrected age) at same doses as term infants — exception is HepB which may be delayed if very low birth weight <2000g",
      "OLDER ADULTS 65+: High-dose flu, PCV20 or PCV15+PPSV23 (pneumococcal), Shingrix (shingles), Td booster",
    ],
  },
  {
    title: "Vaccine Administration — Nursing Practice",
    icon: "💉",
    color: "blue",
    content: [
      "Routes of administration: IM (most vaccines — deltoid in adults, vastus lateralis in infants), SC (MMR, varicella, some others), ID (BCG, some flu), Oral (rotavirus, oral typhoid), Intranasal (LAIV)",
      "INJECTION SITES: Infants — vastus lateralis (outer thigh) preferred for IM. Adults and older children — deltoid muscle",
      "NEEDLE SELECTION: 22-25 gauge, 1-1.5 inch for adult IM in deltoid. Infants: 1 inch needle in thigh",
      "MULTIPLE VACCINES: Can be given same day at different sites. Separate injectable sites by at least 1 inch. Document which vaccine at which site",
      "LIVE VACCINES: Give either same day or at least 28 days apart — if two live vaccines are not given simultaneously, separate by 4 weeks minimum",
      "ASPIRATION: CDC no longer recommends aspiration for routine IM vaccine injections",
      "VIS (Vaccine Information Statement): REQUIRED by federal law (USA) to be given to patient/parent before every dose of each vaccine covered under the National Childhood Vaccine Injury Act",
      "DOCUMENTATION: Date, vaccine name, lot number, manufacturer, expiry date, site and route, administrator's name and credentials",
      "COLD CHAIN: Vaccines must be maintained at appropriate temperatures during storage and transport. Vaccines exposed to freezing or high temperatures must NOT be used",
      "ANAPHYLAXIS preparedness: Epinephrine must be available IMMEDIATELY at all vaccination sites. Observe patients for 15-30 minutes after vaccination",
    ],
  },
  {
    title: "Adverse Reactions to Vaccines",
    icon: "⚠️",
    color: "orange",
    content: [
      "LOCAL reactions (most common, minor): Redness, swelling, soreness at injection site — expected, reassure patient, apply cool compress",
      "SYSTEMIC reactions (common, minor): Low-grade fever, malaise, headache — expected, treat symptomatically, reassure",
      "FEBRILE SEIZURES: Can occur with MMR vaccine 7-12 days after vaccination. Generally benign and self-limiting. Risk is lower with MMRV than with MMR + varicella given separately for seizure history",
      "SYNCOPE (vasovagal): Relatively common — observe patients 15 minutes post-vaccination. Seat or lie patients during vaccination. Have patients sit for 15 minutes after",
      "ANAPHYLAXIS: Rare but life-threatening — occurs within 15-30 minutes. Signs: urticaria, angioedema, bronchospasm, hypotension. Treatment: Epinephrine IM immediately, call emergency services",
      "VARICELLA VACCINE: Mild varicella-like rash in ~3-5% of recipients — usually mild, but vaccinated person can (rarely) transmit varicella to immunocompromised contacts",
      "INTUSSUSCEPTION: Historical association with older rotavirus vaccine. Current Rotarix and RotaTeq vaccines — very low risk. Monitor for signs (inconsolable crying, bloody stool, abdominal mass)",
      "VACCINE INJURY REPORTING: All significant adverse events should be reported to VAERS (Vaccine Adverse Event Reporting System) in the USA",
      "NCLEX tip: Know anaphylaxis treatment (epinephrine IM immediately) and the need to observe patients after vaccination",
    ],
  },
  {
    title: "Vaccine-Preventable Diseases — Key Facts",
    icon: "🦠",
    color: "purple",
    content: [
      "MEASLES: Highly contagious airborne virus. KOPLIK SPOTS (white spots on buccal mucosa) — pathognomonic. Rash starts on face, spreads downward. Requires airborne + contact precautions",
      "PERTUSSIS (whooping cough): Severe coughing spasms followed by inspiratory 'whoop.' Most dangerous in infants under 6 months. Droplet precautions. Treatment: azithromycin",
      "VARICELLA (chickenpox): Pruritic vesicular rash in various stages simultaneously. Airborne + contact precautions. Treat with acyclovir in high-risk patients",
      "MUMPS: Parotid gland swelling. Droplet precautions. Complications: orchitis (males), meningitis, encephalitis",
      "RUBELLA (German measles): Mild in children, TERATOGENIC in pregnancy (congenital rubella syndrome — heart defects, cataracts, deafness). Droplet precautions",
      "DIPHTHERIA: Pseudomembrane in throat (grey, adherent). Can cause airway obstruction. Treat with antitoxin + antibiotics. Droplet precautions",
      "TETANUS: Lockjaw, muscle spasms. Spores in soil, enters via wounds. NOT person-to-person — standard precautions. Tetanus-prone wounds: deep, dirty, >6 hours old",
      "HEPATITIS B: Blood-borne, sexual transmission, mother-to-child. Universal precautions. Chronic infection leads to cirrhosis and hepatocellular carcinoma",
      "MENINGOCOCCAL DISEASE: Petechial/purpuric rash, neck stiffness, photophobia, severe headache. Droplet precautions. Can progress to DIC and death within hours",
    ],
  },
];

const mnemonics = [
  {
    title: "Live Vaccines — Cannot Give to Immunocompromised/Pregnant",
    acronym: "MMRVROBY",
    breakdown: ["MMR", "MMRV", "Rotavirus", "Varicella", "Yellow fever", "Oral typhoid", "BCG", "LAIV (nasal flu)"],
    memory: "My Mother Really Very Rarely Offers Boys Lunch — live vaccines cannot be given in pregnancy or immunocompromise!",
    color: "red",
  },
  {
    title: "Vaccines Safe in Pregnancy",
    acronym: "ITCH",
    breakdown: ["Influenza (injected)", "Tdap (every pregnancy)", "COVID-19", "Hepatitis B (if indicated)"],
    memory: "ITCH in pregnancy — Influenza, Tdap, COVID, Hepatitis B are all SAFE. Live vaccines are NOT!",
    color: "green",
  },
  {
    title: "Asplenic Patient Vaccines — MUST Have",
    acronym: "PHM",
    breakdown: ["Pneumococcal (PCV + PPSV23)", "HIb (Haemophilus influenzae b)", "Meningococcal (MenACWY + MenB)"],
    memory: "PHM — Pneumo, Hib, Mening — asplenic patients cannot fight encapsulated organisms without these vaccines!",
    color: "orange",
  },
  {
    title: "Vaccine Documentation Requirements",
    acronym: "DELNSA",
    breakdown: ["Date given", "Exact vaccine name", "Lot number", "Name of manufacturer", "Site and route", "Administrator credentials"],
    memory: "DELNSA — every vaccine dose requires ALL six documentation elements. Missing any is incomplete and legally problematic!",
    color: "blue",
  },
];

const alerts = [
  { text: "Live vaccines (MMR, varicella, LAIV) are CONTRAINDICATED in pregnancy and severe immunocompromise — this is the most tested vaccine fact on NCLEX!", severity: "high" },
  { text: "Mild illness and low-grade fever are NOT contraindications to vaccination — do not postpone vaccines for minor illness!", severity: "high" },
  { text: "Tdap is recommended in EVERY pregnancy at 27-36 weeks — even if the mother had Tdap previously or recently!", severity: "high" },
  { text: "Two live vaccines must be given SAME DAY or at least 28 DAYS APART — never 1-27 days apart!", severity: "high" },
  { text: "ANAPHYLAXIS: Epinephrine IM is the FIRST treatment — NOT antihistamine, NOT corticosteroid. Epi first, always!", severity: "high" },
  { text: "Asplenic patients MUST receive pneumococcal, Hib and meningococcal vaccines — they cannot fight encapsulated organisms without a spleen!", severity: "high" },
  { text: "HPV vaccine is routinely recommended at age 11-12 — NOT at first sexual activity. This is a prevention vaccine given BEFORE exposure!", severity: "medium" },
  { text: "Shingrix (shingles vaccine) is recommended for ALL adults 50+ — even if they had shingles before or received the old Zostavax vaccine!", severity: "medium" },
  { text: "HepB-positive mother: Newborn needs HBIG + HepB vaccine within 12 HOURS of birth — not within 24 hours!", severity: "medium" },
  { text: "Preterm infants are vaccinated by CHRONOLOGICAL age — not corrected gestational age. Exception: HepB if birth weight <2000g!", severity: "medium" },
  { text: "Varicella vaccine recipient with rash: May (rarely) transmit varicella to immunocompromised contacts — take precautions!", severity: "low" },
  { text: "VIS (Vaccine Information Statement) is legally required to be given BEFORE every covered vaccine dose — not optional!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A nurse is preparing to administer MMR vaccine to a 15-month-old child. The parent asks why their child needs this vaccine and whether it is safe. Which statement by the nurse is MOST accurate?",
    options: [
      "MMR is an inactivated vaccine — it contains dead virus particles that cannot cause disease",
      "MMR is a live attenuated vaccine — it contains weakened viruses that produce strong immunity but cannot cause measles, mumps or rubella in healthy children",
      "MMR should be delayed if the child had a cold last week — illness is a contraindication",
      "MMR contains mercury as a preservative — parents should be aware of this risk",
    ],
    correct: 1,
    explanation: "MMR is a LIVE ATTENUATED vaccine — it contains weakened (not dead) viruses for measles, mumps and rubella. In immunocompetent children, the weakened viruses replicate enough to produce strong, long-lasting immunity but do not cause the actual diseases. This is why MMR provides excellent lifelong protection often after just two doses. MMR does NOT contain mercury (thimerosal was never used in MMR). A mild cold is NOT a contraindication to vaccination — mild illness does not prevent vaccination.",
    wrongExplanations: [
      "WRONG: MMR is NOT inactivated — it is a LIVE ATTENUATED vaccine. Inactivated vaccines (like IPV and hepatitis A) contain killed organisms. The distinction matters because live vaccines are contraindicated in immunocompromise and pregnancy.",
      "",
      "WRONG: A cold (mild illness) is NOT a contraindication to vaccination. Only moderate-severe acute illness with significant fever warrants deferral. Vaccinating with mild illness is safe and important.",
      "WRONG: MMR has NEVER contained thimerosal (mercury preservative) — this is a common vaccine myth. Thimerosal is used in some multi-dose flu vaccine vials but NOT in MMR.",
    ],
  },
  {
    level: "Knowledge",
    question: "A 28-year-old pregnant woman at 30 weeks gestation asks the nurse which vaccines she should receive. Which response is MOST appropriate?",
    options: [
      "No vaccines are safe during pregnancy — all should be deferred until after delivery",
      "MMR and varicella vaccines are recommended to protect the baby before birth",
      "Tdap and injected influenza vaccine are recommended during this pregnancy",
      "Only influenza vaccine is recommended — Tdap should wait until after delivery",
    ],
    correct: 2,
    explanation: "Two vaccines are specifically recommended during pregnancy: TDAP (27-36 weeks gestation — every pregnancy) and INJECTED INFLUENZA vaccine (any trimester). Tdap in pregnancy boosts maternal pertussis antibodies that cross the placenta and protect the newborn before they can be vaccinated at 2 months. Injected flu (NOT the nasal live vaccine LAIV) is safe and important as flu in pregnancy carries serious risks. MMR and Varicella are LIVE vaccines — CONTRAINDICATED in pregnancy due to risk of foetal infection.",
    wrongExplanations: [
      "WRONG: Multiple vaccines are safe and recommended in pregnancy. Tdap and injected flu are specifically indicated. Inactivated vaccines are generally safe in pregnancy.",
      "WRONG: MMR and Varicella are LIVE vaccines — they are CONTRAINDICATED in pregnancy. These should be given postpartum if the mother is non-immune.",
      "",
      "WRONG: BOTH Tdap and injected flu are recommended in pregnancy. Tdap in particular is given every pregnancy (27-36 weeks) to protect the newborn from pertussis.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is preparing MMR vaccine and varicella vaccine for a 12-month-old child. The nurse accidentally prepares both vaccines but only one syringe is available. The parent asks if the vaccines can be given the following week. What is the MOST appropriate nursing action?",
    options: [
      "Give one vaccine today and schedule the other for next week",
      "Give both vaccines today at separate sites — they can be administered simultaneously",
      "Schedule both vaccines for next week — it is safer to give them on separate days",
      "Give the vaccines 14 days apart — this is the required interval for live vaccines",
    ],
    correct: 1,
    explanation: "Two LIVE vaccines (MMR and varicella) must be given EITHER on the SAME DAY or at least 28 DAYS APART — never 1-27 days apart. If given within 1-27 days of each other, immune interference can reduce effectiveness. The correct action is to give BOTH vaccines today at SEPARATE INJECTION SITES (different limbs). There is no safety concern giving both simultaneously — this is standard practice and recommended by the CDC schedule (MMRV is the combined version). The MMRV combination vaccine or separate MMR + varicella are both acceptable at 12-15 months.",
    wrongExplanations: [
      "WRONG: Giving one today and the other 'next week' means they would be given 7 days apart — this is within the prohibited 1-27 day interval for live vaccines and would reduce the effectiveness of the second vaccine.",
      "",
      "WRONG: There is no safety reason to give live vaccines on separate days — simultaneous administration at separate sites is safe, effective and the recommended approach.",
      "WRONG: 14 days is NOT the required interval — live vaccines need at least 28 DAYS if not given simultaneously. Giving at 14 days apart is prohibited.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is conducting a pre-vaccination assessment for a 4-year-old child who is scheduled for DTaP, IPV and MMR vaccines. The parent mentions the child has been taking oral antibiotics for an ear infection for the past 3 days and has a temperature of 37.8°C. The child appears well. Should the vaccines be administered today?",
    options: [
      "Defer all vaccines — the child has an active infection and is on antibiotics",
      "Defer all vaccines — any fever is a contraindication to vaccination",
      "Administer all vaccines as scheduled — mild illness and antibiotic use are not contraindications",
      "Administer only DTaP and IPV today, defer MMR because live vaccines cannot be given during infection",
    ],
    correct: 2,
    explanation: "MILD ILLNESS (ear infection), LOW-GRADE FEVER (37.8°C) and ANTIBIOTIC USE are NOT contraindications to vaccination. These are among the most commonly misunderstood 'false contraindications' in vaccine practice. Vaccines should be given as scheduled. The only illness-related reason to defer vaccination is MODERATE-SEVERE acute illness with significant fever (generally ≥38.5°C). The rationale: vaccinating during mild illness does not reduce vaccine effectiveness or increase adverse events. Deferring vaccines for minor illness leads to missed opportunities and leaves children unprotected longer. Antibiotic use has no effect on vaccine immunogenicity for any of these vaccines.",
    wrongExplanations: [
      "WRONG: Active infection and antibiotic use are NOT contraindications. Children on antibiotics for minor infections are vaccinated routinely. Vaccines are not antibiotics and do not interact with antibiotic therapy.",
      "WRONG: 37.8°C is a LOW-GRADE fever — this is NOT a contraindication. Only moderate-severe acute illness warrants deferral. Low-grade fever from minor illness does not affect vaccine safety or efficacy.",
      "",
      "WRONG: Mild illness — even with low-grade fever — is not a reason to defer MMR or any other live vaccine. Live vaccines are only contraindicated in immunocompromise and pregnancy, not in mild illness.",
    ],
  },
  {
    level: "Application",
    question: "A 25-year-old woman presents to a health clinic and is found to have no documented varicella immunity (no history of chickenpox, no prior vaccination, varicella IgG negative). She is not pregnant and uses oral contraceptives. What is the nurse's MOST appropriate recommendation?",
    options: [
      "Give varicella vaccine today and advise avoiding pregnancy for at least 1 month",
      "Defer varicella vaccine — it is only needed for children",
      "Give varicella vaccine today — no special instructions needed as she is on contraceptives",
      "Test for natural immunity again — lab testing is unreliable, she probably has immunity",
    ],
    correct: 0,
    explanation: "A non-immune adult woman who is not pregnant should receive varicella vaccine (2-dose series, 4-8 weeks apart). She should be advised to AVOID PREGNANCY FOR 1 MONTH after each dose — a standard recommendation for live vaccines in women of childbearing age (MMR requires the same). Her use of oral contraceptives is sufficient for this purpose but the advice must be given explicitly. Varicella is NOT only for children — susceptible adults are at higher risk for severe disease (varicella pneumonia, encephalitis). A negative varicella IgG is reliable — no need to retest.",
    wrongExplanations: [
      "",
      "WRONG: Varicella vaccine is recommended for ALL non-immune individuals regardless of age — adults have a higher risk of severe varicella complications than children.",
      "WRONG: The advice to avoid pregnancy for 1 month MUST be given explicitly — it cannot be assumed that contraceptive use means the patient understands the specific recommendation. Document that counselling was provided.",
      "WRONG: Varicella IgG testing is reliable. A negative result in a person with no history of disease or vaccination confirms susceptibility. Retesting is a waste of resources and delays vaccination.",
    ],
  },
  {
    level: "Advanced",
    question: "A 45-year-old man is scheduled for elective splenectomy in 3 weeks for idiopathic thrombocytopenic purpura. He has no known immunisation history. Which vaccines should be administered BEFORE the surgery and why?",
    options: [
      "No vaccines are needed before surgery — vaccinate after recovery when the patient is stronger",
      "Influenza vaccine only — other vaccines can wait until the post-operative period",
      "Pneumococcal (PCV + PPSV23), Haemophilus influenzae type b (Hib) and meningococcal (MenACWY + MenB) vaccines — ideally at least 2 weeks before splenectomy",
      "MMR and varicella only — live vaccines must be given before the immunosuppression of surgery",
    ],
    correct: 2,
    explanation: "Asplenic patients (or those about to undergo splenectomy) face LIFELONG HIGH RISK of overwhelming post-splenectomy infection (OPSI) from encapsulated organisms: Streptococcus pneumoniae (most common), Neisseria meningitidis and Haemophilus influenzae type b. The spleen is responsible for producing antibodies against these organisms and filtering them from blood. Without a spleen, these infections can cause death within hours. ALL THREE vaccines must be given: Pneumococcal (PCV15 or PCV20 + PPSV23), Hib and Meningococcal (MenACWY and MenB). Vaccination BEFORE surgery is strongly preferred — the immune response is better in immunocompetent patients. Waiting until post-surgery leaves the patient unprotected during the highest-risk early period and the surgical stress impairs immune response.",
    wrongExplanations: [
      "WRONG: Waiting until after surgery is the opposite of best practice. Pre-splenectomy vaccination produces a better immune response and provides protection in the critical early post-operative period when OPSI risk is highest.",
      "WRONG: Influenza alone is completely inadequate. The life-threatening risk for asplenic patients is from encapsulated bacteria (pneumococcus, meningococcus, Hib) — not influenza.",
      "",
      "WRONG: MMR and varicella are not specifically indicated for asplenia. The critical vaccines for asplenic patients are pneumococcal, Hib and meningococcal — targeting the specific organisms that cause lethal OPSI.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse administers influenza vaccine to a 35-year-old patient. Five minutes later, the patient develops generalised urticaria, throat tightness, stridor and hypotension (BP 84/50). The clinic has epinephrine auto-injectors available. What is the nurse's CORRECT sequence of actions?",
    options: [
      "Administer diphenhydramine (Benadryl) 50mg IM → Call emergency services → Administer epinephrine if no improvement",
      "Administer epinephrine 0.5mg IM (anterolateral thigh) → Call emergency services → Position supine with legs elevated → Establish IV access → Prepare second epinephrine dose",
      "Call emergency services first → Then administer epinephrine → Position patient upright to ease breathing",
      "Administer corticosteroid IV → Call emergency services → Administer epinephrine only if anaphylaxis is confirmed by physician",
    ],
    correct: 1,
    explanation: "This patient is having ANAPHYLAXIS — the classic triad of urticaria, upper airway obstruction (stridor, throat tightness) and haemodynamic collapse (BP 84/50). EPINEPHRINE IM (0.3-0.5mg of 1:1000 solution) into the ANTEROLATERAL THIGH is the FIRST and most critical treatment — administered IMMEDIATELY. Epinephrine reverses all major features of anaphylaxis simultaneously. Then: call emergency services (000/911), position supine with legs elevated (unless breathing worsens), establish IV access, prepare second epinephrine dose (may be needed in 5-15 minutes), administer oxygen. Diphenhydramine (Option A) does NOT treat life-threatening anaphylaxis — it is adjunct therapy only and is often given AFTER epinephrine. Corticosteroids (Option D) are also adjunct — they take hours to work and do NOT treat acute anaphylaxis. Calling emergency services before giving epinephrine (Option C) delays the most critical intervention.",
    wrongExplanations: [
      "WRONG: Diphenhydramine is an ADJUNCT therapy for anaphylaxis — it does NOT treat airway obstruction or hypotension. Giving antihistamine before epinephrine in anaphylaxis is dangerous and potentially fatal.",
      "",
      "WRONG: Calling emergency services before administering epinephrine delays the most critical life-saving intervention. Give epinephrine FIRST — then call for help.",
      "WRONG: Corticosteroids take hours to work and are ADJUNCT therapy. They do NOT treat acute anaphylaxis. Waiting for physician confirmation before giving epinephrine in active anaphylaxis is dangerous — epinephrine must be given immediately.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is reviewing vaccination records for a 19-year-old college student who is moving into university dormitories. His vaccination history shows: complete childhood series, MMR x2, varicella x2, Tdap at age 11, HPV series complete. He has no history of meningococcal disease and no known immunodeficiency. Which vaccine is the MOST important to recommend before he moves into dormitories?",
    options: [
      "MMR booster — college students are at higher risk for measles outbreaks",
      "Influenza vaccine — respiratory infections spread rapidly in dormitories",
      "Meningococcal vaccine (MenACWY booster or MenB) — college freshmen in residential settings have significantly higher meningococcal disease risk",
      "Hepatitis A vaccine — shared food facilities increase hepatitis A transmission risk",
    ],
    correct: 2,
    explanation: "MENINGOCOCCAL DISEASE risk is significantly elevated among college freshmen living in dormitories — this is an established epidemiological association. Reasons include: close living quarters, shared facilities, increased social mixing, sleep deprivation and stress (immune suppression), and increased alcohol use (mucosal barrier disruption). If his MenACWY was given before age 16, a booster is recommended. MenB vaccination is also recommended through shared decision-making for this age group — serogroup B causes a significant proportion of meningococcal disease in college students and is not covered by MenACWY. Meningococcal disease can progress to death within 24-48 hours — prevention is critical. The ACIP specifically lists 'college freshmen living in dormitories' as a high-risk group for meningococcal vaccination.",
    wrongExplanations: [
      "WRONG: MMR x2 is a complete series providing lifelong protection in most individuals. There is no routine recommendation for a third MMR dose for college students without evidence of waning immunity.",
      "WRONG: Annual influenza is important for all adults — but it is a routine annual recommendation, not specifically tied to dormitory living. Meningococcal disease has a specific, established and dramatically elevated risk in this residential setting.",
      "WRONG: Hepatitis A is transmitted primarily fecal-orally and is associated with travel to endemic areas, MSM, homelessness and chronic liver disease — not specifically with dormitory dining halls.",
    ],
  },
  {
    level: "Advanced",
    question: "A community health nurse is investigating a measles outbreak in a partially vaccinated community. Among the cases are 8 children who have 2 documented MMR doses and 12 unvaccinated children. A parent of one of the vaccinated children demands to know why their child got measles despite being vaccinated. What is the nurse's BEST explanation?",
    options: [
      "The MMR vaccine is ineffective — only natural immunity provides reliable protection against measles",
      "The child's vaccines were likely given incorrectly or the cold chain was broken — otherwise 2 doses would provide complete protection",
      "No vaccine is 100% effective — MMR provides 97% protection after 2 doses. In a large enough outbreak with high exposure, some vaccinated individuals (primary or secondary vaccine failure) may still contract measles. Vaccination remains critical for herd immunity",
      "The child needs a third MMR dose — 2 doses are no longer sufficient given current measles strains",
    ],
    correct: 2,
    explanation: "This question tests understanding of VACCINE EFFECTIVENESS vs VACCINE EFFICACY and OUTBREAK DYNAMICS. MMR provides approximately 97% protection after 2 doses — this means 3% of vaccinated people have vaccine failure (either primary failure = never developed adequate immunity, or secondary failure = immunity waned). In an OUTBREAK with intense exposure, even small numbers of vaccine failures can result in cases among vaccinated individuals. This is NOT evidence that the vaccine is ineffective — the 12 unvaccinated children represent the majority of cases proportionally. The nurse should explain: vaccine failure is not vaccine ineffectiveness, the outbreak would be much larger without vaccination, 97% protection is among the highest for any vaccine, and herd immunity is critical to protect those few who cannot respond to vaccination.",
    wrongExplanations: [
      "WRONG: MMR is highly effective — 97% protection after 2 doses. Natural immunity does provide stronger immunity but carries the risks of actual measles disease (pneumonia, encephalitis, death). Natural immunity is not a recommended strategy.",
      "WRONG: While cold chain issues can reduce effectiveness, they are not the most accurate explanation here. Some vaccine failures occur even with perfect administration — 97% means 3% may not respond adequately.",
      "",
      "WRONG: There is no evidence that current measles strains have escaped MMR immunity. A third dose is not currently recommended for the general population. This would mislead the parent.",
    ],
  },
  {
    level: "Advanced",
    question: "A 68-year-old woman with well-controlled rheumatoid arthritis on methotrexate and prednisone 10mg daily presents for a health review. Her vaccination history shows she received Zostavax (old shingles vaccine) at age 60. She asks about the new shingles vaccine she heard about. Her physician also asks about her pneumococcal vaccination status — she has never received pneumococcal vaccine. Which vaccination plan is MOST appropriate?",
    options: [
      "No vaccinations needed — she is on immunosuppressive therapy and all vaccines are contraindicated",
      "Shingrix 2-dose series now and PCV15 + PPSV23 — she qualifies for both. Shingrix can be given despite immunosuppressive therapy as it is a recombinant (non-live) vaccine",
      "Defer all vaccines until she is off methotrexate and prednisone",
      "Give live Zostavax booster — it provides better protection than the newer recombinant vaccine",
    ],
    correct: 1,
    explanation: "SHINGRIX (recombinant zoster vaccine) is recommended for all immunocompetent adults 50+ AND for immunocompromised adults on low-level immunosuppression. Key points: Shingrix is a RECOMBINANT (non-live) vaccine — it does NOT contain live virus and is safe with immunosuppressive therapy at the doses described (methotrexate for RA, low-dose prednisone 10mg). Shingrix is recommended even if the patient previously received Zostavax — it provides significantly better and more durable protection (>90% vs ~51%). For PNEUMOCOCCAL vaccination: adults 65+ (or those with certain conditions including RA on immunosuppressives) should receive PCV15 followed by PPSV23 (or PCV20 alone). Immunosuppressive therapy is NOT an absolute contraindication to all vaccines — inactivated/recombinant vaccines are safe. Only LIVE vaccines are contraindicated in severe immunosuppression.",
    wrongExplanations: [
      "WRONG: Immunosuppressive therapy does NOT contraindicate ALL vaccines — only live vaccines are contraindicated in significant immunosuppression. Inactivated and recombinant vaccines are safe and important for immunosuppressed patients.",
      "",
      "WRONG: Deferring all vaccines leaves an immunosuppressed patient unprotected against vaccine-preventable diseases at a time when her immune system is already compromised — the opposite of good practice.",
      "WRONG: Zostavax is a LIVE vaccine — it is contraindicated in patients on immunosuppressive therapy. Shingrix (non-live recombinant) is the correct choice and provides far superior protection.",
    ],
  },
];

const clinicalPearls = [
  "The most dangerous vaccine misconception in clinical practice is that mild illness, fever or antibiotic use are contraindications. They are not. Every missed vaccination opportunity is a missed protection opportunity — children with minor illnesses should be vaccinated.",
  "Epinephrine IM is the only first-line treatment for anaphylaxis. Antihistamines and corticosteroids are adjunct therapies that take too long to work. A nurse who gives diphenhydramine instead of epinephrine first in anaphylaxis is making a life-threatening error.",
  "Tdap in every pregnancy is one of the most important and most overlooked vaccine recommendations. The newborn cannot be vaccinated for 2 months — maternal antibodies from Tdap in pregnancy are their only protection against pertussis in the most vulnerable early weeks.",
  "The 28-day rule for live vaccines: Two live vaccines given 1-27 days apart = immune interference and reduced effectiveness of the second vaccine. Same day or 28+ days apart are the only safe options.",
  "Patients on low-dose immunosuppressants (like methotrexate for RA) can safely receive inactivated and recombinant vaccines — Shingrix, flu, pneumococcal and hepatitis B are all appropriate and important for this group.",
  "Cold chain failure is a silent vaccine problem — vaccines that have been temperature-compromised look identical to properly stored vaccines. Always check storage temperatures before using vaccines and never use vaccines of unknown temperature history.",
  "Vaccine hesitancy requires empathy first — acknowledge the parent's concern, thank them for asking, then provide evidence. Lectures and dismissal increase resistance. Motivational interviewing techniques significantly improve vaccine acceptance rates.",
];

export default function ImmunisationPage() {
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
            <h1 className="font-black text-base text-gray-900">💉 Immunisation</h1>
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
                💉 Immunisation is heavily tested on NCLEX. Master live vs inactivated vaccines, contraindications, the schedule and anaphylaxis management!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most common NCLEX traps on Immunisation — study these carefully!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Immunisation!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review live vaccine contraindications and schedule." :
                        "Keep studying! Focus on live vaccines, contraindications and anaphylaxis management."}
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