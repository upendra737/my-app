"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "What is Infection Control?",
    icon: "🦠",
    color: "blue",
    content: [
      "Infection control is the set of practices designed to prevent the spread of infectious diseases in healthcare settings",
      "Healthcare-Associated Infections (HAIs) affect 1 in 10 hospitalised patients — they are largely PREVENTABLE",
      "The nurse is the FIRST LINE of defence against infection spread in any healthcare setting",
      "Infection control applies to ALL patients at ALL times — not just those with known infections",
      "The chain of infection must be BROKEN at any link to prevent transmission",
      "NCLEX heavily tests isolation precautions, PPE use and hand hygiene — master these completely",
    ],
  },
  {
    title: "The Chain of Infection — 6 Links",
    icon: "🔗",
    color: "purple",
    content: [
      "1. INFECTIOUS AGENT — the pathogen (bacteria, virus, fungus, parasite). Nursing intervention: antimicrobials, disinfection",
      "2. RESERVOIR — where the pathogen lives and multiplies (humans, animals, environment, equipment). Intervention: clean environment, proper disposal",
      "3. PORTAL OF EXIT — how pathogen leaves reservoir (respiratory secretions, blood, faeces, urine). Intervention: cover coughs, wound care, safe handling",
      "4. MODE OF TRANSMISSION — how pathogen travels (contact, droplet, airborne, vehicle, vector). Intervention: isolation precautions, PPE",
      "5. PORTAL OF ENTRY — how pathogen enters new host (mucous membranes, breaks in skin, respiratory tract). Intervention: intact skin care, sterile technique",
      "6. SUSCEPTIBLE HOST — person who can get infected (immunocompromised, elderly, newborns). Intervention: immunisation, nutrition, adequate rest",
      "Breaking ANY link in the chain prevents infection — hand hygiene breaks multiple links simultaneously!",
    ],
  },
  {
    title: "Standard Precautions — ALL Patients ALWAYS",
    icon: "🧤",
    color: "green",
    content: [
      "Standard precautions apply to EVERY patient EVERY time — regardless of diagnosis or apparent health",
      "Treat ALL blood, body fluids, secretions, excretions (except sweat), non-intact skin and mucous membranes as potentially infectious",
      "HAND HYGIENE — the single most effective infection control measure. Before and after EVERY patient contact",
      "GLOVES — when touching blood, body fluids, secretions, excretions, non-intact skin, mucous membranes or contaminated items",
      "GOWN — when clothing/skin may be exposed to blood, body fluids, secretions or excretions",
      "MASK/EYE PROTECTION — when splashing or spraying of blood or body fluids is likely",
      "SAFE SHARPS HANDLING — never recap needles two-handed, use safety devices, dispose in sharps container immediately",
      "RESPIRATORY HYGIENE/COUGH ETIQUETTE — teach patients to cover coughs, use tissues, perform hand hygiene",
      "Safe injection practices — one needle, one syringe, one patient, one time — always",
    ],
  },
  {
    title: "Transmission-Based Precautions — Contact",
    icon: "👐",
    color: "orange",
    content: [
      "Used for patients with known or suspected infections spread by DIRECT or INDIRECT contact",
      "PPE required: GLOVES and GOWN upon entering the room — before touching patient or environment",
      "PRIVATE ROOM preferred — if unavailable, cohort with patient with same infection",
      "DEDICATED EQUIPMENT — stethoscope, BP cuff, thermometer stay in the room — do NOT share",
      "Limit patient transport — when transport necessary, cover wounds and ensure patient performs hand hygiene",
      "Remove PPE and perform hand hygiene BEFORE leaving the room",
      "Common organisms requiring Contact Precautions:",
      "• MRSA (Methicillin-Resistant Staphylococcus aureus)",
      "• VRE (Vancomycin-Resistant Enterococcus)",
      "• C. difficile (Clostridioides difficile) — NOTE: use soap and water, NOT alcohol gel for C. diff!",
      "• Wound infections, skin infestations (scabies, lice)",
      "• RSV (Respiratory Syncytial Virus) in children",
    ],
  },
  {
    title: "Transmission-Based Precautions — Droplet",
    icon: "💧",
    color: "blue",
    content: [
      "Used for pathogens transmitted by LARGE droplets (>5 microns) that travel up to 1 metre from source",
      "PPE required: SURGICAL MASK when within 1 metre of patient — gloves and gown as per standard precautions",
      "PRIVATE ROOM preferred — door may remain OPEN",
      "Patient transport: patient wears surgical mask during transport",
      "Spatial separation of at least 1 metre from other patients if private room unavailable",
      "Common organisms requiring Droplet Precautions:",
      "• Influenza (seasonal flu)",
      "• COVID-19 (also requires airborne precautions for aerosol-generating procedures)",
      "• Meningococcal meningitis",
      "• Mumps, Rubella (German measles)",
      "• Pertussis (whooping cough)",
      "• Adenovirus, rhinovirus",
      "• Streptococcal pharyngitis (strep throat) in children",
    ],
  },
  {
    title: "Transmission-Based Precautions — Airborne",
    icon: "💨",
    color: "red",
    content: [
      "Used for pathogens transmitted by SMALL droplet nuclei (<5 microns) that remain suspended in air for long distances",
      "PPE required: N95 RESPIRATOR (fit-tested) or higher — must be fitted and seal-checked before entry",
      "NEGATIVE PRESSURE ROOM required — air flows IN but not out, 6-12 air exchanges per hour",
      "Door must remain CLOSED at all times — a closed door is not optional!",
      "Only IMMUNE staff should care for patients with varicella or measles if possible",
      "Patient transport: patient wears surgical mask (NOT N95) during transport — N95 is for the NURSE",
      "Common organisms requiring Airborne Precautions:",
      "• TB (Tuberculosis) — classic airborne pathogen",
      "• Measles (Rubeola) — highly contagious airborne virus",
      "• Varicella (Chickenpox) and disseminated Herpes Zoster (shingles)",
      "• SARS-CoV-2 (aerosol-generating procedures)",
      "Memory trick: MTV — Measles, TB, Varicella",
    ],
  },
  {
    title: "PPE — Donning and Doffing Order",
    icon: "🥼",
    color: "purple",
    content: [
      "DONNING ORDER (Putting ON): Gown → Mask/Respirator → Goggles/Face Shield → Gloves",
      "Memory for donning: 'Good Nurses Always Glove' — Gown, N95/mask, Apron/goggles, Gloves",
      "DOFFING ORDER (Taking OFF): Gloves → Goggles/Face Shield → Gown → Mask/Respirator",
      "Memory for doffing: 'Gloves Go, Glasses Go, Gown Goes, Goodbye Mask'",
      "CRITICAL: Gloves come OFF first when doffing — they are the most contaminated item",
      "CRITICAL: Mask/Respirator comes OFF LAST when doffing — protects your face until the end",
      "Perform HAND HYGIENE after removing EACH piece of PPE",
      "Never touch your face during PPE removal",
      "Dispose of all PPE in appropriate waste containers before leaving the room",
      "If PPE is torn or compromised during patient care — change it immediately",
    ],
  },
  {
    title: "Hand Hygiene — The Most Important Skill",
    icon: "🙌",
    color: "green",
    content: [
      "Hand hygiene is the SINGLE MOST EFFECTIVE measure to prevent healthcare-associated infections",
      "WHO 5 Moments for Hand Hygiene:",
      "1. BEFORE touching a patient",
      "2. BEFORE a clean or aseptic procedure",
      "3. AFTER body fluid exposure risk",
      "4. AFTER touching a patient",
      "5. AFTER touching patient surroundings",
      "ALCOHOL-BASED HAND RUB (ABHR): Preferred for most situations — faster, more effective, less skin damage",
      "SOAP AND WATER required when: hands are visibly soiled, after contact with C. difficile, after using the bathroom",
      "Correct technique: Rub all surfaces including between fingers, thumbs, backs of hands for minimum 20-30 seconds",
      "Artificial nails and nail extensions are PROHIBITED in clinical areas — they harbour pathogens",
      "Rings should be removed or kept minimal — jewellery harbours bacteria under stones and settings",
    ],
  },
  {
    title: "Sterile vs Clean Technique",
    icon: "✨",
    color: "blue",
    content: [
      "STERILE TECHNIQUE: Eliminates ALL microorganisms including spores. Used for invasive procedures, surgical wounds, urinary catheterisation, IV insertion",
      "CLEAN TECHNIQUE: Reduces number of microorganisms but does not eliminate all. Used for wound care in community settings, some dressing changes",
      "Sterile field principles: Never turn your back on a sterile field, never reach across it, keep sterile items above waist level",
      "A sterile field is contaminated if: wet, torn, below waist, out of sight, or opened more than 1 hour ago",
      "When in doubt about sterility — consider it contaminated and start again",
      "Surgical asepsis (sterile) vs Medical asepsis (clean) — know the difference for NCLEX",
      "ANTT (Aseptic Non-Touch Technique) — the modern evidence-based approach protecting key sites and key parts",
    ],
  },
  {
    title: "Isolation Precaution Special Scenarios",
    icon: "🏥",
    color: "orange",
    content: [
      "NEUTROPENIC PRECAUTIONS (Protective/Reverse Isolation): Protects immunocompromised patients FROM infections — not the opposite",
      "Used for: patients receiving chemotherapy, bone marrow transplant patients, severe neutropenia (ANC <500)",
      "Reverse isolation: Healthcare workers protect the patient by wearing PPE — fresh flowers, fresh fruit, tap water may be restricted",
      "MULTI-DRUG RESISTANT ORGANISMS (MDROs): Require contact precautions — MRSA, VRE, ESBL, CRE",
      "C. DIFFICILE special note: Alcohol hand gel is INEFFECTIVE — must use soap and water. Spores are resistant to alcohol",
      "EBOLA and other haemorrhagic fevers: Require full PPE including face shield, double gloves, fluid-resistant gown — follow facility protocol",
      "HIV/AIDS: Standard precautions are sufficient for routine care — no additional isolation required for HIV alone",
      "Immunocompromised patients: May need BOTH contact precautions (for MDROs) AND protective precautions simultaneously",
    ],
  },
  {
    title: "Healthcare-Associated Infections (HAIs)",
    icon: "📊",
    color: "red",
    content: [
      "CAUTI (Catheter-Associated UTI): Most common HAI. Prevention: Insert only when necessary, maintain closed system, daily meatal care, remove ASAP",
      "CLABSI (Central Line-Associated Bloodstream Infection): Prevention: Maximum sterile barrier during insertion, chlorhexidine skin prep, daily line necessity review",
      "VAP (Ventilator-Associated Pneumonia): Prevention: HOB elevation 30-45°, oral care every 2-4 hours, daily sedation vacation, hand hygiene",
      "SSI (Surgical Site Infection): Prevention: Pre-op skin preparation, appropriate antibiotic prophylaxis, normothermia, glucose control",
      "MRSA: Spread by direct contact. Prevention: contact precautions, hand hygiene, decolonisation protocols",
      "C. difficile: Spore-forming, spread by contact. Prevention: contact precautions, soap and water hand hygiene, appropriate antibiotic stewardship",
      "Bundle approach: Combining multiple evidence-based interventions achieves greater HAI reduction than single interventions",
    ],
  },
];

const mnemonics = [
  {
    title: "Airborne Precautions — MTV",
    acronym: "MTV",
    breakdown: ["Measles", "TB", "Varicella"],
    memory: "Watch MTV on a closed-door negative pressure TV — Measles, TB, Varicella all need airborne precautions!",
    color: "red",
  },
  {
    title: "PPE Donning Order",
    acronym: "GNAG",
    breakdown: ["Gown", "N95/Mask", "Apron/Goggles", "Gloves"],
    memory: "Good Nurses Always Glove — put gown on first, gloves on last!",
    color: "blue",
  },
  {
    title: "PPE Doffing Order",
    acronym: "GGGM",
    breakdown: ["Gloves off", "Goggles off", "Gown off", "Mask last"],
    memory: "Gloves Go, Glasses Go, Gown Goes, Goodbye Mask — most contaminated comes off FIRST!",
    color: "purple",
  },
  {
    title: "WHO 5 Moments",
    acronym: "BBAAS",
    breakdown: ["Before patient", "Before procedure", "After body fluid", "After patient", "After surroundings"],
    memory: "Be Before, After After, Surroundings — hand hygiene at ALL 5 moments without exception!",
    color: "green",
  },
];

const alerts = [
  { text: "C. DIFFICILE — alcohol hand gel does NOT work! Must use soap and water — alcohol cannot kill C. diff spores!", severity: "high" },
  { text: "Airborne precautions require a NEGATIVE PRESSURE ROOM with the door CLOSED at all times — this is non-negotiable!", severity: "high" },
  { text: "N95 respirator is for the NURSE — the patient in airborne precautions wears a regular SURGICAL MASK during transport!", severity: "high" },
  { text: "GLOVES come OFF FIRST when doffing PPE — they are the most contaminated. MASK comes off LAST!", severity: "high" },
  { text: "Neutropenic/Protective precautions protect the PATIENT from us — this is the OPPOSITE of standard isolation!", severity: "high" },
  { text: "Standard precautions apply to ALL patients ALL the time — not just those with known infections!", severity: "medium" },
  { text: "Dedicated equipment must stay IN the room for contact precautions — never use shared stethoscopes or BP cuffs!", severity: "medium" },
  { text: "A sterile field is CONTAMINATED if it becomes wet, torn, goes below waist level or is left unattended!", severity: "medium" },
  { text: "HIV alone does NOT require additional isolation precautions beyond standard precautions!", severity: "medium" },
  { text: "Droplet precautions: door can remain OPEN. Airborne precautions: door must remain CLOSED — know the difference!", severity: "medium" },
  { text: "Artificial nails and nail extensions are PROHIBITED in clinical areas — they harbour dangerous pathogens!", severity: "low" },
  { text: "When in doubt about sterility of any item or field — consider it contaminated and start fresh!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A nurse is preparing to care for a patient with confirmed tuberculosis (TB). Which type of isolation precautions are required?",
    options: [
      "Standard precautions only",
      "Contact precautions with gown and gloves",
      "Droplet precautions with surgical mask",
      "Airborne precautions with N95 respirator and negative pressure room",
    ],
    correct: 3,
    explanation: "Tuberculosis is transmitted by small airborne droplet nuclei (<5 microns) that remain suspended in the air for extended periods and distances. This requires AIRBORNE PRECAUTIONS: a fit-tested N95 respirator or higher for the nurse, placement in a negative pressure room with the door kept closed at all times, and 6-12 air exchanges per hour. TB is the classic organism for airborne precautions — remember MTV: Measles, TB, Varicella.",
    wrongExplanations: [
      "WRONG: Standard precautions alone are completely inadequate for TB — airborne transmission requires specific engineering controls and respiratory protection.",
      "WRONG: Contact precautions address direct contact transmission — TB is spread through the airborne route, not touch.",
      "WRONG: Droplet precautions use a surgical mask for particles >5 microns that travel short distances — TB droplet nuclei are <5 microns and travel much further, requiring N95 protection.",
      "",
    ],
  },
  {
    level: "Knowledge",
    question: "A nurse is removing personal protective equipment after caring for a patient on contact precautions. In which ORDER should the PPE be removed?",
    options: [
      "Mask → Gown → Gloves → Goggles",
      "Gown → Gloves → Mask → Goggles",
      "Gloves → Goggles → Gown → Mask",
      "Goggles → Gown → Mask → Gloves",
    ],
    correct: 2,
    explanation: "The correct doffing order is: GLOVES first → GOGGLES/face shield → GOWN → MASK last. Gloves are removed first because they are the most heavily contaminated item and removing them first protects everything that follows. The mask is removed LAST because it protects the nurse's face and respiratory tract throughout the doffing process. Hand hygiene should be performed after removing each item. Memory trick: 'Gloves Go, Glasses Go, Gown Goes, Goodbye Mask.'",
    wrongExplanations: [
      "WRONG: Removing the mask first exposes the nurse's face and respiratory tract to contamination while removing other soiled items — the mask must come off LAST.",
      "WRONG: Removing gown before gloves means your contaminated gloved hands will touch your clothing and face during gown removal.",
      "",
      "WRONG: Removing goggles before gloves means contaminated gloved hands touch your face — gloves must come off first.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a patient with Clostridioides difficile (C. difficile) infection. After providing personal care, what is the MOST appropriate hand hygiene action?",
    options: [
      "Use alcohol-based hand rub — it is the most effective and convenient method",
      "Wash hands thoroughly with soap and water for at least 20 seconds",
      "Use alcohol-based hand rub followed by gloves for the next patient contact",
      "Either soap and water or alcohol-based hand rub is equally effective for C. difficile",
    ],
    correct: 1,
    explanation: "C. difficile produces SPORES that are RESISTANT to alcohol-based hand rubs. Soap and water is MANDATORY after contact with C. difficile patients because the mechanical friction of handwashing physically removes spores from the skin — alcohol cannot kill or remove them. This is one of the most frequently tested infection control facts on NCLEX. Contact precautions are also required, and dedicated equipment must remain in the room. Bleach-based disinfectants are used for environmental cleaning.",
    wrongExplanations: [
      "WRONG: Alcohol-based hand rub is INEFFECTIVE against C. difficile spores — it cannot kill or remove them. Soap and water is MANDATORY.",
      "",
      "WRONG: Using alcohol rub followed by gloves still leaves C. diff spores on the hands — the hands must be washed with soap and water first.",
      "WRONG: They are NOT equally effective. Alcohol rub CANNOT kill C. difficile spores — soap and water is the ONLY acceptable option.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is assigned to care for four patients. Which patient requires a NEGATIVE PRESSURE ROOM?",
    options: [
      "A patient with MRSA wound infection",
      "A patient with influenza",
      "A patient with active pulmonary tuberculosis",
      "A patient with C. difficile colitis",
    ],
    correct: 2,
    explanation: "Active pulmonary tuberculosis requires AIRBORNE PRECAUTIONS including placement in a NEGATIVE PRESSURE ROOM (also called an Airborne Infection Isolation Room — AIIR). Negative pressure means air flows INTO the room from the hallway but cannot flow out — preventing airborne droplet nuclei from escaping into the corridor. The door must remain closed at all times. The nurse wears an N95 respirator. MRSA and C. difficile require contact precautions — no negative pressure needed. Influenza requires droplet precautions — private room preferred but does not require negative pressure.",
    wrongExplanations: [
      "WRONG: MRSA requires CONTACT precautions — gown and gloves. A private room is preferred but negative pressure is not required.",
      "WRONG: Influenza requires DROPLET precautions — surgical mask within 1 metre. A private room is preferred but negative pressure is not required.",
      "",
      "WRONG: C. difficile requires CONTACT precautions — gown, gloves and soap/water hand hygiene. No negative pressure room needed.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is preparing to insert a urinary catheter. The nurse opens the sterile catheter kit and accidentally touches the sterile drape with an ungloved hand. What should the nurse do?",
    options: [
      "Continue with the procedure — the drape is away from the actual catheter",
      "Use alcohol hand rub and then proceed with sterile gloves",
      "Consider the sterile field contaminated and obtain a new catheter kit",
      "Wipe the area touched with a sterile gauze and proceed carefully",
    ],
    correct: 2,
    explanation: "When ANY part of a sterile field is contaminated — the ENTIRE field must be considered contaminated and a new sterile kit must be obtained. This is a fundamental principle of sterile technique: when in doubt, throw it out. An ungloved hand is not sterile — touching any part of the sterile field with an ungloved hand immediately contaminates the entire setup. Urinary catheterisation uses sterile technique because introducing bacteria into the bladder can cause CAUTI (catheter-associated urinary tract infection). There is no acceptable way to 'fix' a contaminated sterile field.",
    wrongExplanations: [
      "WRONG: Contamination of ANY part of the sterile field contaminates the WHOLE field. Location of the contamination does not matter.",
      "WRONG: Alcohol hand rub does not restore sterility to a contaminated field. The field must be discarded and a new kit obtained.",
      "",
      "WRONG: Wiping with sterile gauze does not remove contamination — it spreads it. The entire kit must be replaced.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for an 8-year-old child admitted with suspected measles. The child is placed in an airborne precaution room. A nursing student who has never had measles or the MMR vaccine asks to enter the room to observe. A new graduate nurse who received MMR vaccination at age 2 asks to care for the patient. The charge nurse who had measles as a child needs to enter briefly. Which staff members should the nurse in charge allow to enter the room?",
    options: [
      "All three can enter with appropriate PPE including N95 respirator",
      "Only the nursing student can enter — the others risk reinfection",
      "Only the charge nurse (natural immunity) and the vaccinated new graduate nurse should enter",
      "No staff member should enter without full hazmat-level PPE",
    ],
    correct: 2,
    explanation: "For MEASLES (an airborne pathogen): IMMUNE individuals should care for the patient. The CHARGE NURSE who had natural measles infection has lifelong immunity — safe to enter. The NEW GRADUATE who received MMR vaccination is considered immune — safe to enter with N95 respirator. The NURSING STUDENT who has NEVER had measles and is UNVACCINATED is NOT immune and should NOT enter the room — the risk of measles infection in a non-immune person is extremely high (measles has a secondary attack rate of 90% in non-immune contacts). If no immune staff are available, non-immune staff must wear N95 and minimise time in the room as a last resort.",
    wrongExplanations: [
      "WRONG: While PPE reduces risk, non-immune staff (the unvaccinated student) should NOT enter a measles room if immune alternatives exist. PPE is not 100% protective against airborne pathogens.",
      "WRONG: The nursing student is the LEAST protected — they are the only one who should NOT enter. The others have immunity.",
      "",
      "WRONG: Standard airborne PPE (N95 + eye protection) is appropriate — full hazmat PPE is not indicated for measles.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse manager reviews the unit's HAI data and notes a significant increase in CAUTI rates over the past month. Upon investigation, the manager finds that urinary catheters are routinely left in place because 'it is easier for nursing staff at night.' Which intervention should the manager implement FIRST to address this issue?",
    options: [
      "Install CCTV cameras in patient rooms to monitor catheter care compliance",
      "Implement a nurse-driven catheter removal protocol based on clinical criteria",
      "Report all nursing staff involved to the nursing board for misconduct",
      "Purchase more expensive silver-coated catheters to reduce infection rates",
    ],
    correct: 1,
    explanation: "The HIGHEST evidence-based intervention for CAUTI prevention is removing urinary catheters as soon as they are no longer clinically indicated. A NURSE-DRIVEN CATHETER REMOVAL PROTOCOL allows nurses to independently assess catheter necessity against evidence-based criteria (urinary retention, critical illness monitoring, perioperative use, urological procedures) and remove catheters without waiting for a physician order. This directly addresses the identified problem (catheters left in for convenience rather than clinical necessity) through a systemic, evidence-based approach. CCTV (Option A) is invasive and does not address the root cause. Reporting to the nursing board (Option C) is punitive without first addressing the systemic issue. Silver-coated catheters (Option D) reduce infection rates but do not address unnecessary catheter retention — which is the primary driver of CAUTI.",
    wrongExplanations: [
      "WRONG: CCTV is invasive, not evidence-based and does not address why catheters are being left in unnecessarily.",
      "",
      "WRONG: Reporting to the nursing board before implementing a systemic fix is punitive and premature. The investigation suggests a cultural/systemic issue, not individual misconduct.",
      "WRONG: Specialised catheters reduce infection risk per catheter-day but do NOT address the core problem of leaving catheters in unnecessarily.",
    ],
  },
  {
    level: "Advanced",
    question: "During a shift, a nurse notices that a colleague consistently fails to perform hand hygiene between patient contacts. The colleague is senior to the nurse and has been working on the unit for 15 years. What is the MOST appropriate action by the nurse?",
    options: [
      "Ignore the behaviour — it is not the nurse's place to correct a senior colleague",
      "Report the colleague directly to the nursing board without speaking to them first",
      "Politely address the behaviour directly with the colleague in a non-confrontational manner and escalate to the nurse manager if it continues",
      "Perform hand hygiene yourself and document that the colleague failed to do so in the patient's chart",
    ],
    correct: 2,
    explanation: "Every nurse has a PROFESSIONAL and ETHICAL obligation to patient safety — seniority does not exempt anyone from infection control standards. The MOST appropriate first action is to address the behaviour DIRECTLY and PROFESSIONALLY with the colleague — 'Hey, I noticed you might have skipped hand hygiene before Room 4 — just wanted to check in.' If the behaviour continues despite direct feedback, escalate to the nurse manager. This approach respects professional relationships while fulfilling patient safety obligations. Ignoring the behaviour (Option A) is a patient safety violation — hand hygiene non-compliance contributes directly to HAIs and patient harm. Reporting directly to the nursing board (Option B) bypasses the internal escalation process — nursing board is for serious, persistent misconduct not first-time issues. Documenting in the patient chart (Option D) is inappropriate — patient charts are clinical documents not staff performance records.",
    wrongExplanations: [
      "WRONG: Seniority NEVER overrides patient safety. Every nurse has a professional obligation to speak up about infection control non-compliance regardless of the other person's experience.",
      "WRONG: The nursing board is for serious, persistent or criminal misconduct — not for first-time hand hygiene non-compliance. Internal escalation must occur first.",
      "",
      "WRONG: Patient charts are CLINICAL documents for patient care information — staff performance issues are documented in incident reports or through HR processes, not the patient chart.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a 72-year-old patient receiving chemotherapy for acute leukaemia. The patient's absolute neutrophil count (ANC) is 350 cells/mm³. A student nurse enters the room carrying a bouquet of fresh flowers from the patient's family. What should the nurse do?",
    options: [
      "Allow the flowers — they will improve the patient's emotional wellbeing and morale",
      "Ask the student to remove the flowers from the room and explain why they are not permitted",
      "Place the flowers in a sealed container to prevent pollen spread",
      "Check with the physician before making any decision about the flowers",
    ],
    correct: 1,
    explanation: "This patient has SEVERE NEUTROPENIA (ANC 350 — normal is 1500-8000) and is on NEUTROPENIC PRECAUTIONS (protective/reverse isolation). Fresh flowers, fresh fruits, tap water and live plants are PROHIBITED in neutropenic patient rooms because they harbour moulds, fungi and bacteria (particularly Pseudomonas and Aspergillus) that could cause life-threatening infections in a patient with virtually no immune defence. The nurse must remove the flowers and educate the student and family. While emotional wellbeing is important (Option A), patient safety from potentially fatal infection takes absolute priority. Sealing in a container (Option C) does not prevent fungal spore release. Waiting to check with the physician (Option D) wastes time — this is a nursing knowledge decision requiring immediate action.",
    wrongExplanations: [
      "WRONG: Emotional wellbeing is important but fresh flowers harbour fungal spores that can cause fatal aspergillosis in neutropenic patients. Patient safety is the priority.",
      "",
      "WRONG: Sealing flowers in a container does not prevent spore release — the flowers must leave the room entirely.",
      "WRONG: This is a nursing knowledge decision — nurses should know neutropenic precautions without needing physician guidance for every environmental decision.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse working in the emergency department receives a patient from a rural area with fever, rash, and a reported tick bite 5 days ago. The physician suspects Rocky Mountain Spotted Fever. A second patient arrives with high fever, severe headache, neck stiffness and photophobia — meningococcal meningitis is suspected. A third patient presents with night sweats, weight loss, chronic cough and haemoptysis — active TB is suspected. The ED has one negative pressure room available. How should the nurse manage these isolation needs?",
    options: [
      "Place all three patients in the negative pressure room together",
      "Place the TB patient in the negative pressure room, apply droplet precautions for meningococcal meningitis and standard precautions for Rocky Mountain Spotted Fever",
      "Place the meningococcal patient in the negative pressure room as meningitis is most dangerous",
      "Place the TB and meningococcal patients together in the negative pressure room",
    ],
    correct: 1,
    explanation: "RESOURCE ALLOCATION with correct precaution matching: TB patient gets the NEGATIVE PRESSURE ROOM — TB requires airborne precautions and is the only one of these three requiring a negative pressure environment. MENINGOCOCCAL MENINGITIS requires DROPLET PRECAUTIONS — surgical mask within 1 metre, private room preferred but NOT required to be negative pressure — door may remain open. ROCKY MOUNTAIN SPOTTED FEVER (RMSF) is transmitted by tick bites (vector-borne) — it does NOT spread person-to-person. Standard precautions are sufficient. The key skill here is matching each organism to its correct transmission route and corresponding precautions, then allocating the limited negative pressure resource appropriately.",
    wrongExplanations: [
      "WRONG: Placing all three together in a negative pressure room could cause cross-infection between patients — and RMSF and meningococcal patients do not need negative pressure isolation.",
      "",
      "WRONG: Meningococcal meningitis requires droplet precautions — a regular private room with the door open is sufficient. The negative pressure room must be reserved for the TB patient.",
      "WRONG: Cohorting TB and meningococcal patients together risks cross-infection. They require different precaution levels and should be separated.",
    ],
  },
];

const clinicalPearls = [
  "Hand hygiene compliance rates in hospitals average only 40-60% globally — yet hand hygiene alone can prevent up to 50% of all HAIs. The most important habit you can build as a nurse is making hand hygiene completely automatic.",
  "C. difficile spores can survive on environmental surfaces for UP TO 5 MONTHS — thorough environmental cleaning with bleach-based products is as important as hand hygiene for C. diff control.",
  "The N95 respirator must be FIT-TESTED for each individual nurse — an incorrectly fitted N95 provides little protection. If your N95 does not seal properly, it is not protecting you.",
  "Neutropenic patients can develop life-threatening infections from organisms that are harmless to healthy people — Aspergillus from soil and plants, Pseudomonas from tap water, Candida from normal flora. Think about EVERYTHING that enters their environment.",
  "The door of a negative pressure room must ALWAYS be kept closed — even briefly leaving it open for 30 seconds can allow airborne pathogens to escape into the hallway and reach other patients.",
  "In a real clinical emergency — if full PPE is not immediately available, prioritise RESPIRATORY PROTECTION (mask/N95) first as respiratory transmission poses the greatest risk of healthcare worker infection.",
  "Standard precautions were designed assuming EVERY patient could have an undiagnosed transmissible infection — this is why gloves, gowns and masks are used based on the TASK being performed, not the patient's diagnosis.",
];

export default function InfectionControlPage() {
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
          <button
            onClick={() => router.back()}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors font-bold"
          >
            ←
          </button>
          <div className="flex-1">
            <h1 className="font-black text-base text-gray-900">🦠 Infection Control</h1>
            <p className="text-xs text-gray-500">Safe & Effective Care • High Yield ⭐⭐⭐</p>
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
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as typeof activeTab)}
                className={`px-3 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-all ${activeTab === t.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
              >
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
                🦠 Infection control questions appear throughout ALL sections of NCLEX. Master isolation precautions, PPE order and hand hygiene — these are guaranteed exam topics!
              </p>
            </div>
            <div className="space-y-3">
              {notes.map((note, i) => (
                <div key={i} className={`border rounded-2xl overflow-hidden shadow-sm ${colorMap[note.color]}`}>
                  <div
                    className="flex items-center gap-3 p-4 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => setExpandedNote(expandedNote === i ? null : i)}
                  >
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
            <button
              onClick={() => setActiveTab("quiz")}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-base transition-colors"
            >
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
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg">
                        {letter}
                      </div>
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most common NCLEX traps on Infection Control — students consistently lose marks on these!</p>
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
                    <button
                      key={f}
                      onClick={() => { setFilter(f); resetQuiz(); }}
                      className={`px-4 py-2 rounded-xl font-bold text-sm border transition-all ${filter === f ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-200 hover:border-blue-400"}`}
                    >
                      {f} {f !== "All" && `(${quizQuestions.filter(q => q.level === f).length})`}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizComplete ? (
              <div className="text-center py-8">
                <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-6 shadow-sm">
                  <span className="text-6xl block mb-4">
                    {score / filteredQuestions.length >= 0.8 ? "🎉" : score / filteredQuestions.length >= 0.6 ? "👍" : "📚"}
                  </span>
                  <h3 className="text-4xl font-black mb-1">{score}<span className="text-2xl text-gray-400">/{filteredQuestions.length}</span></h3>
                  <p className="text-2xl font-bold text-gray-600 mb-2">{Math.round((score / filteredQuestions.length) * 100)}%</p>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden mb-4">
                    <div
                      className={`h-full rounded-full transition-all ${score / filteredQuestions.length >= 0.8 ? "bg-green-500" : score / filteredQuestions.length >= 0.6 ? "bg-blue-500" : "bg-orange-500"}`}
                      style={{ width: `${(score / filteredQuestions.length) * 100}%` }}
                    />
                  </div>
                  <p className="text-gray-600 text-sm">
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Infection Control!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review isolation precautions and PPE order." :
                        "Keep studying! Focus on MTV for airborne, C. diff soap and water, and PPE doffing order."}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button onClick={resetQuiz} className="flex-1 bg-blue-600 text-white py-3 rounded-2xl font-bold hover:bg-blue-700 transition-colors">
                    Try Again 🔄
                  </button>
                  <button onClick={() => setActiveTab("notes")} className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-2xl font-bold hover:bg-gray-200 transition-colors">
                    Review Notes 📝
                  </button>
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
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all"
                    style={{ width: `${(currentQuestion / filteredQuestions.length) * 100}%` }}
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-4 shadow-sm">
                  <p className="font-semibold text-gray-800 leading-relaxed whitespace-pre-line">
                    {filteredQuestions[currentQuestion].question}
                  </p>
                </div>
                <div className="space-y-3 mb-4">
                  {filteredQuestions[currentQuestion].options.map((option, i) => (
                    <div
                      key={i}
                      onClick={() => handleAnswer(i)}
                      className={`p-4 rounded-2xl border-2 transition-all font-medium cursor-pointer ${selectedAnswer === null
                        ? "bg-white border-gray-200 hover:border-blue-400 hover:bg-blue-50 active:scale-[0.99]"
                        : i === filteredQuestions[currentQuestion].correct
                          ? "bg-green-50 border-green-400 text-green-800"
                          : selectedAnswer === i
                            ? "bg-red-50 border-red-400 text-red-800"
                            : "bg-gray-50 border-gray-200 text-gray-400 opacity-60"
                        }`}
                    >
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
                  <button
                    onClick={nextQuestion}
                    className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-base hover:bg-blue-700 transition-colors"
                  >
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
                  <div className="w-8 h-8 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-yellow-600 text-sm">
                    {i + 1}
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed">{pearl}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setActiveTab("quiz")}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-base transition-colors"
            >
              Test Your Knowledge → Start Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}