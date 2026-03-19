"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Legal & Ethical Practice in Nursing",
    icon: "⚖️",
    color: "blue",
    content: [
      "Legal and ethical practice forms the foundation of professional nursing — every clinical decision has both legal and ethical dimensions",
      "ETHICS deals with what is RIGHT and WRONG — guided by professional codes, values and moral principles",
      "LAW deals with what is LEGAL and ILLEGAL — governed by legislation, regulations and court decisions",
      "Something can be legal but unethical (e.g. refusing to advocate for a patient) or ethical but illegal (e.g. assisted dying in some jurisdictions)",
      "Nurses are held to the standard of a 'reasonable, prudent nurse' — what would a competent nurse with similar training do in the same situation?",
      "NCLEX heavily tests informed consent, advance directives, patient rights, mandatory reporting and professional boundaries",
      "Ignorance of the law is NOT a defence — nurses are responsible for knowing their professional and legal obligations",
    ],
  },
  {
    title: "Informed Consent — Core Principles",
    icon: "📝",
    color: "green",
    content: [
      "Informed consent is a PROCESS — not just a signature on a form",
      "Three elements required for valid consent: INFORMATION (adequate and understandable), CAPACITY (ability to decide), VOLUNTARINESS (free from coercion)",
      "WHO can obtain informed consent: The PHYSICIAN or HEALTHCARE PROVIDER performing the procedure — NOT the nurse",
      "WHO can witness informed consent: The NURSE — nurses witness the signature, not the consent process itself",
      "WHO can give informed consent: A competent adult (18+), emancipated minor, married minor, minor parent for their child",
      "CAPACITY vs COMPETENCE: Capacity is a clinical determination (can this patient understand and decide?). Competence is a LEGAL determination made by a court",
      "A patient can refuse ANY treatment including life-saving treatment — this is their legal right",
      "Informed consent must be in the patient's PRIMARY LANGUAGE — use a professional interpreter, never a family member for consent translation",
      "Emergency exception: If a patient is unconscious and life-threatening emergency exists — treatment can proceed without consent (implied consent)",
    ],
  },
  {
    title: "Who CAN and CANNOT Give Consent",
    icon: "👤",
    color: "purple",
    content: [
      "CAN give consent: Competent adults (18+), emancipated minors (legally independent from parents), married minors, minor parents (for their own child), mature minors in some jurisdictions",
      "CANNOT give consent: Minors (under 18) for themselves in most situations, unconscious patients, patients deemed legally incompetent by court",
      "SURROGATE DECISION MAKERS (when patient cannot consent): Healthcare proxy/durable power of attorney for healthcare, legal guardian, next of kin (in order: spouse → adult children → parents → siblings)",
      "SUBSTITUTED JUDGMENT standard: Surrogate makes decision based on what the PATIENT would have wanted — not what the surrogate prefers",
      "BEST INTERESTS standard: Used when patient's wishes are unknown — what would a reasonable person in this situation want?",
      "Minors: Parents/guardians give consent — BUT minors can consent independently for: STI treatment, contraception, substance abuse treatment, mental health treatment (varies by jurisdiction)",
      "Mature minor doctrine: Some jurisdictions allow mature, capable adolescents to consent to their own treatment",
    ],
  },
  {
    title: "Advance Directives",
    icon: "📋",
    color: "blue",
    content: [
      "Advance directives are LEGAL DOCUMENTS that express a patient's healthcare wishes if they become unable to make decisions",
      "LIVING WILL: Written document specifying what treatments a patient does or does not want if terminally ill or permanently unconscious",
      "DURABLE POWER OF ATTORNEY FOR HEALTHCARE (DPAHC/Healthcare Proxy): Designates a specific person to make healthcare decisions — most flexible and comprehensive",
      "DNR (Do Not Resuscitate): Specific order — do NOT initiate CPR if the patient stops breathing or cardiac arrest occurs",
      "DNI (Do Not Intubate): Specific order — do NOT insert an endotracheal tube",
      "POLST/MOLST (Physician/Medical Orders for Life-Sustaining Treatment): Medical order form for patients with serious illness — more immediately actionable than a living will",
      "NURSE'S ROLE: Assess for advance directives on admission, document and communicate to healthcare team, advocate for patient's wishes, never pressure patients about advance directives",
      "Advance directives can be REVOKED by a competent patient at ANY time — verbally, in writing or by destroying the document",
      "If no advance directive exists — follow the hierarchy of surrogate decision makers",
    ],
  },
  {
    title: "DNR Orders — Common NCLEX Scenarios",
    icon: "🚫",
    color: "red",
    content: [
      "DNR means: Do NOT start CPR, do NOT use defibrillator, do NOT intubate for resuscitation",
      "DNR does NOT mean: Withhold all treatment, do not treat pain, do not provide comfort care, do not give medications",
      "A DNR patient still receives: IV fluids, medications, wound care, nutrition, oxygen, pain management, all usual nursing care",
      "DNR must be a WRITTEN PHYSICIAN ORDER — a verbal DNR order is NOT valid for nursing to act on",
      "If a patient with DNR develops a reversible condition unrelated to their terminal illness — treat the reversible condition",
      "Family members CANNOT override a patient's valid DNR if the patient was competent when they made the decision",
      "If a patient changes their mind about DNR — they have the RIGHT to revoke it immediately — the nurse must notify the physician and document",
      "During a code situation, if DNR status is UNCLEAR — INITIATE resuscitation and clarify while team is present",
    ],
  },
  {
    title: "Patient Rights",
    icon: "🏳️",
    color: "green",
    content: [
      "RIGHT TO INFORMATION: Patients have the right to know their diagnosis, prognosis, treatment options and risks",
      "RIGHT TO REFUSE TREATMENT: Including life-saving treatment — a competent adult can refuse any intervention",
      "RIGHT TO PRIVACY AND CONFIDENTIALITY: Health information cannot be shared without patient consent",
      "RIGHT TO DIGNITY AND RESPECT: All patients must be treated with dignity regardless of race, religion, gender, sexual orientation or socioeconomic status",
      "RIGHT TO SAFE CARE: Patients have the right to receive care that meets professional standards",
      "RIGHT TO LEAVE: A competent patient can leave hospital Against Medical Advice (AMA) — the nurse documents, informs physician and has patient sign AMA form",
      "RIGHT TO INTERPRETER: Patients have the right to a professional interpreter in their primary language — at no cost",
      "RIGHT TO PAIN MANAGEMENT: Pain assessment and management is a patient right",
      "RIGHT TO PARTICIPATE IN CARE PLANNING: Patients have the right to be involved in decisions about their own care",
    ],
  },
  {
    title: "HIPAA and Confidentiality",
    icon: "🔒",
    color: "purple",
    content: [
      "HIPAA (Health Insurance Portability and Accountability Act): US federal law protecting patient health information privacy",
      "Protected Health Information (PHI): Any information that can identify a patient and relates to their health — name, DOB, address, diagnosis, photos",
      "PHI can be shared WITHOUT patient consent for: Treatment, payment, healthcare operations, public health reporting, court orders, mandated reporting",
      "PHI CANNOT be shared with: Employers (generally), family members without permission, media, social media, friends",
      "MINIMUM NECESSARY standard: Share only the information needed for the specific purpose — not entire medical records",
      "Social media violations: Nurses cannot post patient photos, descriptions or any identifying information — even without naming the patient",
      "Computer access: Only access records of patients you are directly caring for — accessing other patients' records is a HIPAA violation",
      "Breach notification: Patients must be notified of any breach of their PHI",
      "Penalties: HIPAA violations can result in fines from $100 to $50,000 per violation and criminal charges",
    ],
  },
  {
    title: "Negligence and Malpractice",
    icon: "⚠️",
    color: "red",
    content: [
      "NEGLIGENCE: Failure to provide the standard of care that a reasonable person would provide in similar circumstances",
      "MALPRACTICE: Professional negligence — failure of a professional (nurse) to meet the standard of care expected of that profession",
      "Four elements MUST be proven for malpractice: Duty, Breach, Causation, Damages (DBCD)",
      "DUTY: The nurse had a professional obligation to the patient (nurse-patient relationship existed)",
      "BREACH: The nurse failed to meet the standard of care (did something a reasonable nurse would not do, or failed to do something they should have done)",
      "CAUSATION: The breach directly caused the patient's harm",
      "DAMAGES: The patient suffered actual harm (physical, emotional, financial)",
      "Common nursing malpractice examples: Medication errors causing harm, failure to assess and report deterioration, falls due to inadequate safety measures, wrong-site care",
      "BEST DEFENCE against malpractice: Complete, accurate, timely documentation — 'if it was not documented, it was not done'",
    ],
  },
  {
    title: "Mandatory Reporting Obligations",
    icon: "📢",
    color: "orange",
    content: [
      "Nurses are MANDATED REPORTERS — legally required to report certain situations regardless of patient confidentiality",
      "CHILD ABUSE AND NEGLECT: Any reasonable suspicion of abuse must be reported — nurses do not need proof, only reasonable suspicion",
      "ELDER ABUSE AND NEGLECT: Mandatory reporting in most jurisdictions — physical, emotional, financial, sexual abuse or neglect",
      "COMMUNICABLE DISEASES: Reportable diseases must be notified to public health authorities (TB, HIV, hepatitis, STIs, foodborne illness outbreaks)",
      "GUNSHOT AND STAB WOUNDS: Must be reported to law enforcement in most jurisdictions",
      "IMPAIRED DRIVERS: Some jurisdictions require reporting of patients who pose risk to public safety due to medical conditions",
      "DOMESTIC VIOLENCE: Varies by jurisdiction — some require mandatory reporting, others require patient consent",
      "PEER IMPAIRMENT: Nurses must report colleagues who are impaired by substance use or mental illness to protect patient safety",
      "Reporting PROTECTS the nurse legally — failure to report when legally required = professional and legal liability",
    ],
  },
  {
    title: "Ethical Principles in Nursing",
    icon: "🧭",
    color: "blue",
    content: [
      "AUTONOMY: Respect the patient's right to make their own decisions — even if you disagree with the decision",
      "BENEFICENCE: Act in the patient's best interest — do GOOD",
      "NON-MALEFICENCE: Do no harm — avoid actions that cause unnecessary harm",
      "JUSTICE: Fair and equal treatment for all patients — equal access to care regardless of background",
      "FIDELITY: Keep promises and be faithful to professional commitments — follow through on what you say you will do",
      "VERACITY: Tell the truth — honesty with patients and colleagues is a professional obligation",
      "ADVOCACY: Speak up for patients who cannot speak for themselves — this is the nurse's most important ethical role",
      "Ethical dilemmas occur when two or more principles conflict — e.g. autonomy (patient refuses treatment) vs beneficence (treatment would save their life)",
      "When ethical conflict arises: Use ethics committee consultation, document thoroughly, continue providing care",
    ],
  },
  {
    title: "Professional Boundaries and Conduct",
    icon: "🚧",
    color: "purple",
    content: [
      "Professional boundaries define the appropriate therapeutic relationship between nurse and patient",
      "Boundary VIOLATIONS: Sexual contact with patients, accepting gifts of significant value, engaging in personal relationships, sharing personal problems with patients, discussing other patients",
      "Boundary CROSSINGS: Actions that may not be violations but should be carefully considered — accepting a small gift, self-disclosure of limited personal information",
      "The nurse-patient relationship is THERAPEUTIC — it exists for the patient's benefit, not the nurse's",
      "Social media: Do not friend, follow or connect with patients on social media — even after discharge",
      "Gifts: Small token gifts (e.g. chocolates for the ward) are generally acceptable — large personal gifts are not",
      "Financial: Never borrow money from patients, never accept patients in wills, never engage in financial transactions with patients",
      "Impaired practice: A nurse who is impaired by substances or mental illness has an obligation to self-report and seek help",
    ],
  },
  {
    title: "Against Medical Advice (AMA) Discharge",
    icon: "🚪",
    color: "orange",
    content: [
      "A competent adult has the ABSOLUTE RIGHT to leave hospital at any time — even against medical advice",
      "NURSE'S ROLE when patient wants to leave AMA: Notify the physician immediately, document the situation, have patient sign AMA form",
      "If patient REFUSES to sign AMA form: Document that patient was informed of risks but refused to sign — the patient can still leave",
      "Continue to provide information: Explain risks of leaving, provide discharge instructions, prescriptions if available, follow-up appointments",
      "NEVER physically restrain a patient to prevent AMA discharge — this is false imprisonment",
      "If patient is INTOXICATED or clearly lacks capacity: Do NOT let them leave — they lack decision-making capacity — contact security, physician, social work",
      "AMA does NOT void insurance coverage — this is a common patient misconception the nurse should correct",
      "Document EVERYTHING: Time, what was said, patient's stated reasons, risks explained, physician notification, patient's mental status",
    ],
  },
];

const mnemonics = [
  {
    title: "Malpractice Elements — DBCD",
    acronym: "DBCD",
    breakdown: ["Duty", "Breach", "Causation", "Damages"],
    memory: "Don't Be Causing Damage — all four elements must be proven for malpractice!",
    color: "red",
  },
  {
    title: "Core Ethical Principles",
    acronym: "ABNJFV",
    breakdown: ["Autonomy", "Beneficence", "Non-maleficence", "Justice", "Fidelity", "Veracity"],
    memory: "A Beautiful Nurse Just Follows Values — the six ethical pillars of nursing practice!",
    color: "blue",
  },
  {
    title: "Valid Informed Consent Requirements",
    acronym: "ICV",
    breakdown: ["Information", "Capacity", "Voluntariness"],
    memory: "I Can Vote — Information, Capacity, Voluntariness — all three must be present for valid consent!",
    color: "green",
  },
  {
    title: "Advance Directives Types",
    acronym: "LDP",
    breakdown: ["Living Will", "DPAHC/Healthcare Proxy", "POLST/DNR Orders"],
    memory: "Living Decisions Planned — know the difference between each type for NCLEX!",
    color: "purple",
  },
];

const alerts = [
  { text: "The NURSE witnesses consent — the PHYSICIAN obtains it. Never confuse these roles on NCLEX!", severity: "high" },
  { text: "A competent adult can REFUSE any treatment including life-saving treatment — this is their absolute legal right!", severity: "high" },
  { text: "DNR does NOT mean 'do not treat' — DNR patients still receive ALL other care including medications, pain management and wound care!", severity: "high" },
  { text: "A verbal DNR order is NOT valid — it must be a written physician order before nursing can act on it!", severity: "high" },
  { text: "Family members CANNOT override a competent patient's valid advance directive — the patient's wishes come first!", severity: "high" },
  { text: "Mandatory reporting OVERRIDES patient confidentiality — report suspected child or elder abuse even without patient permission!", severity: "high" },
  { text: "If DNR status is unclear during a code — INITIATE resuscitation and clarify simultaneously — never delay CPR for paperwork!", severity: "medium" },
  { text: "AMA patients: NEVER physically restrain them — provide information, have them sign AMA form, document everything and let them go!", severity: "medium" },
  { text: "HIPAA violation: Accessing a patient's records when you are not their nurse — even if they are a family member or celebrity!", severity: "medium" },
  { text: "Informed consent must be in the patient's PRIMARY LANGUAGE — use a professional interpreter, NEVER a family member!", severity: "medium" },
  { text: "Capacity is a CLINICAL decision (nurse/physician) — Competence is a LEGAL decision (court). Know the difference!", severity: "medium" },
  { text: "Social media: NEVER post ANY patient information — even without names — this is a HIPAA violation and grounds for termination!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A patient is scheduled for a laparoscopic cholecystectomy. The nurse's role in the informed consent process is to:",
    options: [
      "Explain the risks, benefits and alternatives of the surgery to the patient",
      "Determine whether the patient has decision-making capacity",
      "Witness the patient's signature on the consent form after the physician has obtained consent",
      "Obtain consent on behalf of the surgeon if they are unavailable",
    ],
    correct: 2,
    explanation: "The nurse's role in informed consent is to WITNESS the patient's signature — confirming the patient signed voluntarily and appeared to understand. The PHYSICIAN (or the healthcare provider performing the procedure) is responsible for explaining risks, benefits and alternatives and ensuring the patient understands. The nurse should not obtain consent on the physician's behalf, and while nurses can assess capacity, the formal capacity determination for consent purposes is the physician's responsibility.",
    wrongExplanations: [
      "WRONG: Explaining risks, benefits and alternatives is the PHYSICIAN'S responsibility — not the nurse's. The nurse witnesses, not obtains consent.",
      "WRONG: While nurses can observe and report concerns about capacity, formally determining capacity for consent purposes is the physician's role.",
      "",
      "WRONG: Nurses cannot obtain informed consent on behalf of a physician — this is outside nursing scope of practice and potentially fraudulent.",
    ],
  },
  {
    level: "Knowledge",
    question: "A nurse is caring for a patient who has a valid Do Not Resuscitate (DNR) order. The patient develops a severe urinary tract infection with sepsis. What is the MOST appropriate nursing action?",
    options: [
      "Provide comfort care only — the DNR means no aggressive treatment",
      "Initiate full sepsis treatment including IV antibiotics and fluid resuscitation",
      "Contact the family to determine whether to treat the infection",
      "Consult the ethics committee before initiating any treatment",
    ],
    correct: 1,
    explanation: "A DNR order means do NOT initiate CPR if the patient experiences cardiac or respiratory arrest — it does NOT mean withhold all other treatments. The patient with a DNR still receives FULL medical and nursing care for treatable conditions like sepsis. IV antibiotics, fluid resuscitation, monitoring and supportive care are all appropriate and should be initiated. The DNR only applies to resuscitation — not to treatment of reversible, treatable conditions.",
    wrongExplanations: [
      "WRONG: DNR does NOT mean comfort care only. It specifically means no CPR/resuscitation. All other treatments including IV antibiotics for sepsis are still appropriate and expected.",
      "",
      "WRONG: The family does not make this decision. The patient's DNR specifies only no resuscitation — treatment of a treatable infection is standard care that does not require family or ethics consultation.",
      "WRONG: An ethics committee consultation is not needed here. The clinical situation is clear — treat the treatable infection, do not resuscitate if cardiac arrest occurs.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is caring for a 17-year-old who presents to the emergency department requesting treatment for a sexually transmitted infection. The patient does not want their parents notified. What is the MOST appropriate nursing action?",
    options: [
      "Refuse to treat the patient until parental consent is obtained",
      "Treat the patient and maintain confidentiality — minors can consent to STI treatment independently",
      "Call the parents immediately — minors cannot consent to any medical treatment",
      "Treat the patient but document that parental notification is required within 24 hours",
    ],
    correct: 1,
    explanation: "In most jurisdictions, MINORS can independently consent to treatment for sexually transmitted infections, contraception, pregnancy, substance abuse and mental health conditions — WITHOUT parental consent or notification. This exception exists to encourage minors to seek care they might otherwise avoid if parental notification were required. The nurse should treat the patient and maintain confidentiality. The nurse should be familiar with their specific jurisdiction's laws regarding minor consent.",
    wrongExplanations: [
      "WRONG: Refusing care for an STI due to the patient's age would deter minors from seeking treatment — creating a greater public health harm. Minors can consent to STI treatment in most jurisdictions.",
      "",
      "WRONG: This is incorrect — specific categories of care (STI, contraception, substance abuse, mental health) allow minor independent consent specifically to protect their healthcare access.",
      "WRONG: There is no standard requirement for 24-hour parental notification for minor STI treatment — this would violate the minor's confidentiality rights in most jurisdictions.",
    ],
  },
  {
    level: "Application",
    question: "A nurse suspects that a 4-year-old patient has been physically abused based on the pattern of bruising and the child's fearful behaviour around the accompanying adult. The parent denies any abuse and the child is too young to give a reliable account. What should the nurse do?",
    options: [
      "Document the findings and wait for the physician to make the decision about reporting",
      "Confront the parent directly about the suspected abuse before reporting",
      "Report the suspected abuse to child protective services based on reasonable suspicion",
      "Discuss the findings with the charge nurse and reach a consensus before reporting",
    ],
    correct: 2,
    explanation: "Nurses are MANDATED REPORTERS — they have a LEGAL OBLIGATION to report SUSPECTED child abuse based on REASONABLE SUSPICION. They do NOT need proof. They do NOT need to confirm the abuse. They do NOT need physician approval or consensus from colleagues. The report goes directly to child protective services. Failing to report is a criminal offence in most jurisdictions. The purpose of reporting is to have trained child protection workers investigate — not for the nurse to investigate.",
    wrongExplanations: [
      "WRONG: The nurse does NOT need to wait for the physician — nurses are independent mandated reporters. Waiting delays investigation and may put the child at further risk.",
      "WRONG: Confronting the parent may endanger the child, alert the abuser and interfere with the investigation. The nurse's role is to report, not investigate.",
      "",
      "WRONG: Reporting is the individual nurse's legal obligation — it does not require consensus, committee approval or charge nurse permission. Every nurse who suspects abuse must report.",
    ],
  },
  {
    level: "Application",
    question: "A competent 58-year-old patient with terminal pancreatic cancer tells the nurse he wants to go home and stop all treatment. His wife is crying and begging the nurse to 'talk some sense into him.' The patient has documented his wishes in a valid advance directive. What is the nurse's MOST appropriate response?",
    options: [
      "Support the patient's decision and advocate for his right to make his own choices",
      "Ask the patient to reconsider for the sake of his family's wellbeing",
      "Suggest the patient is depressed and request a psychiatric evaluation before honouring the decision",
      "Contact the ethics committee to override the patient's decision given family opposition",
    ],
    correct: 0,
    explanation: "The nurse's primary ethical obligation is to ADVOCATE for the patient's AUTONOMY — his right to make his own healthcare decisions. This competent adult with a terminal diagnosis and valid advance directive has made a clear, informed decision to stop treatment. The nurse should support this decision, provide comfort care, coordinate palliative care/hospice referral and offer emotional support to both the patient and family. The family's wishes, while important, cannot override the competent patient's autonomous decision. Depression screening is not indicated when a terminally ill patient makes a rational decision to stop treatment.",
    wrongExplanations: [
      "",
      "WRONG: Asking the patient to reconsider for the family's sake undermines autonomy and is ethically inappropriate — it places family interests above the patient's right to self-determination.",
      "WRONG: A competent terminally ill patient choosing to stop treatment is NOT evidence of depression — this is a rational, autonomous decision. Psychiatric evaluation to delay a valid decision is ethically inappropriate.",
      "WRONG: The ethics committee cannot override a competent patient's autonomous decision — they exist to help resolve genuine ethical dilemmas, not to enforce family preferences over patient wishes.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is working in the ICU. A patient who was involved in a motor vehicle accident is unconscious and requires emergency surgery. No family members are present and no advance directive is found. The surgical team is ready but there is no consent form signed. What should the nurse do?",
    options: [
      "Refuse to prepare the patient for surgery until a family member can be reached and signs consent",
      "Ask another nurse to sign the consent form as a witness to implied consent",
      "Proceed with preparing the patient for surgery — implied consent applies in life-threatening emergencies",
      "Wait 24 hours as required by law before proceeding without consent",
    ],
    correct: 2,
    explanation: "IMPLIED CONSENT applies when a patient is unconscious in a life-threatening emergency — the law assumes a reasonable person would consent to life-saving treatment if they were able to. Emergency surgery proceeds WITHOUT signed consent when: the patient lacks capacity (unconscious), the situation is life-threatening, delay would cause serious harm or death, and no surrogate is immediately available. The healthcare team should continue attempting to reach family and should document all efforts. There is no legal 24-hour waiting period for emergency treatment. The nurse's role is to prepare the patient and support the emergency response.",
    wrongExplanations: [
      "WRONG: Refusing to prepare for emergency surgery while seeking family consent when the patient's life is at risk constitutes abandonment and is both ethically and legally indefensible.",
      "WRONG: Another nurse cannot sign consent for a patient — this would be fraudulent documentation. Implied consent means proceeding WITHOUT a signed form, not forging a signature.",
      "",
      "WRONG: There is NO 24-hour waiting period in emergency law. Implied consent allows IMMEDIATE treatment of life-threatening emergencies.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse overhears a colleague who appears to be intoxicated making medication errors on the unit. The colleague is a 20-year veteran and close friend of the nurse manager. Other staff members are aware but say 'it's not our place to report a senior colleague.' What is the MOST appropriate action?",
    options: [
      "Speak privately to the colleague after the shift about the concern",
      "Report the concern to the nurse manager and document the observation immediately",
      "Ignore the behaviour as the colleague is experienced and probably just tired",
      "Ask patients if they have noticed anything unusual about the nurse's behaviour",
    ],
    correct: 1,
    explanation: "An impaired nurse poses an IMMEDIATE PATIENT SAFETY RISK — this is a mandatory reporting situation. The nurse MUST report to the nurse manager immediately and document objective observations (slurred speech, unsteady gait, specific medication errors observed, smell of alcohol). The report must happen NOW — not after the shift. Seniority and friendship are irrelevant when patient safety is at immediate risk. If the nurse manager is unavailable or does not act, escalate to the supervisor. Most jurisdictions also have peer assistance programs for impaired nurses — but immediate patient safety is the first priority. Waiting to speak privately (Option A) leaves patients at risk during the current shift.",
    wrongExplanations: [
      "WRONG: Speaking privately AFTER the shift leaves patients exposed to an impaired nurse for the remainder of the shift. Immediate reporting is required.",
      "",
      "WRONG: Experience and seniority do NOT protect patients from an impaired nurse. Dismissing the behaviour as 'just tired' when intoxication is suspected is negligent.",
      "WRONG: Asking patients about the colleague's behaviour is inappropriate — it breaches professional confidentiality and places patients in an uncomfortable position.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for a Jehovah's Witness patient who is bleeding post-operatively with a haemoglobin of 54 g/L. The patient is conscious, alert and oriented and states clearly 'I refuse blood transfusion under any circumstances — this is my religious belief and it is documented in my advance directive.' The surgical team believes the patient will die without transfusion. What is the ethically and legally correct course of action?",
    options: [
      "Administer the blood transfusion — preserving life takes precedence over religious beliefs",
      "Seek an emergency court order to override the patient's refusal",
      "Respect the patient's refusal, provide all other supportive care and maximise non-blood alternatives",
      "Ask the family to convince the patient to accept the transfusion",
    ],
    correct: 2,
    explanation: "A COMPETENT ADULT has the ABSOLUTE LEGAL AND ETHICAL RIGHT to refuse any medical treatment — including life-saving blood transfusion — based on religious beliefs. This right is protected by law and upheld in courts internationally. The nurse must: respect the refusal, document it thoroughly, notify the physician, provide maximum supportive care (IV fluids, iron, erythropoietin, cell salvage, volume expanders), ensure palliative/comfort measures if the patient deteriorates, and provide emotional and spiritual support. Administering blood against the patient's wishes is BATTERY — a criminal act. Court orders to override competent adult refusals are rarely granted and legally very difficult to obtain for competent adults.",
    wrongExplanations: [
      "WRONG: Administering blood to a conscious, competent patient who has explicitly refused = BATTERY. This is a criminal act regardless of the intention to save life.",
      "WRONG: Courts very rarely and reluctantly override competent adult treatment refusals based on religious beliefs — and seeking such an order while the patient is conscious and clearly articulating refusal is ethically inappropriate.",
      "",
      "WRONG: Family pressure does not change the patient's autonomous right. Using family to pressure the patient undermines autonomy and is ethically inappropriate.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse discovers that she accidentally administered the wrong dose of metoprolol to a patient — she gave 100mg instead of 50mg. The patient's heart rate is currently 58 bpm and blood pressure is 110/72 — within acceptable limits. A senior colleague says 'The patient is fine — just document the correct dose and nobody needs to know.' What should the nurse do?",
    options: [
      "Follow the colleague's advice — the patient appears unwell so documentation is not urgent",
      "Assess and monitor the patient closely, report the error to the physician, complete an incident report and document the error accurately in the patient chart",
      "Only complete an incident report — do not document in the patient chart to avoid legal risk",
      "Wait to see if the patient develops symptoms before deciding whether to report",
    ],
    correct: 1,
    explanation: "A medication error MUST be handled with complete transparency: ASSESS the patient immediately (bradycardia and hypotension can develop later with beta-blockers), NOTIFY the physician of the error and current patient status, DOCUMENT the error ACCURATELY in the patient's chart (what was ordered, what was given, when, patient's current status and physician notification), and COMPLETE AN INCIDENT REPORT as a quality improvement measure. NEVER falsify documentation — documenting the wrong dose when the wrong dose was given is FRAUD, a criminal offence and grounds for licence revocation. The incident report is separate from the chart. The patient may appear stable now but beta-blocker overdose effects can be delayed — continued monitoring is essential.",
    wrongExplanations: [
      "WRONG: The colleague is advising FRAUD — documenting a false dose is a criminal offence and licence-revocable conduct. Follow them and your career and the patient are both at risk.",
      "",
      "WRONG: The error MUST be documented in the patient chart — accurate documentation is a legal and professional requirement. The incident report is ADDITIONAL to, not instead of, chart documentation.",
      "WRONG: Waiting to see if symptoms develop before reporting delays physician awareness and potentially delays treatment. Report immediately regardless of current stability.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is assigned to care for a celebrity patient who has been admitted under a pseudonym for privacy. The nurse's close friend, who is a journalist, calls and asks the nurse to confirm whether the celebrity is a patient at the hospital. The nurse's colleague, who is not assigned to the patient, accesses the celebrity's records out of curiosity. What are the legal and ethical issues present in this scenario?",
    options: [
      "The nurse can confirm the patient's presence but cannot share clinical details — confirming admission is not a HIPAA violation",
      "Both the nurse confirming the patient's presence to the journalist AND the colleague accessing unassigned records are HIPAA violations",
      "Only the colleague accessing unassigned records is a violation — confirming admission to a journalist is acceptable",
      "Neither action is a violation if no clinical information is shared",
    ],
    correct: 1,
    explanation: "BOTH actions are serious HIPAA violations: Confirming a patient's presence in the hospital to an unauthorised person (the journalist) is a HIPAA violation — even without sharing clinical details. The patient's IDENTITY as a patient is Protected Health Information (PHI). The colleague accessing records of a patient they are NOT caring for is a HIPAA violation regardless of whether they share the information — simply accessing unauthorised records is the violation. Both nurses face potential termination, civil penalties ($100-$50,000+ per violation) and possible criminal charges. The patient has a right to have their identity as a patient kept completely confidential — including from media.",
    wrongExplanations: [
      "WRONG: Confirming a patient's presence IS a HIPAA violation — the identity of a person as a patient is Protected Health Information. 'Directory information' rules have specific requirements and opt-out provisions.",
      "",
      "WRONG: BOTH actions are violations. Confirming admission to a journalist — even without clinical details — violates the patient's PHI (their identity as a patient).",
      "WRONG: Both actions are violations regardless of whether clinical information is shared. Confirming identity as a patient, and accessing unauthorised records, are both HIPAA violations independently.",
    ],
  },
];

const clinicalPearls = [
  "The most powerful phrase in nursing legal protection is complete, accurate, timely documentation. Courts have consistently ruled that if it was not documented, it did not happen — your notes are your legal shield.",
  "When a patient refuses treatment — your job is NOT to change their mind. Your job is to ensure they have complete information, document the refusal thoroughly, notify the physician and respect their autonomy.",
  "An advance directive is only as useful as the team's awareness of it. Always ask about advance directives on admission, document prominently in the chart and communicate to every handover.",
  "The difference between a mandated reporter and a concerned colleague is the legal obligation. As a nurse you MUST report — you cannot choose not to report suspected child or elder abuse based on personal judgement.",
  "DNR orders routinely cause confusion during codes. Make it a habit to know every patient's code status at the START of every shift — not when the emergency is happening.",
  "HIPAA violations on social media are career-ending. Even a vague description of an interesting case, without names, can be identified and reported. The safest rule: never discuss any patient information on any social media platform.",
  "Ethical dilemmas rarely have a perfect answer — they have a most defensible answer. When facing an ethical conflict: identify the principles in tension, consult the ethics committee early, document your reasoning and continue providing care.",
];

export default function LegalEthicsPage() {
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
            <h1 className="font-black text-base text-gray-900">⚖️ Legal & Ethical Practice</h1>
            <p className="text-xs text-gray-500">Safe & Effective Care • Important ⭐⭐</p>
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
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
              <p className="text-blue-700 text-sm leading-relaxed font-medium">
                ⚖️ Legal and ethical questions appear throughout NCLEX. Master informed consent, advance directives, patient rights and mandatory reporting — these are guaranteed exam topics!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most common NCLEX traps on Legal & Ethics — students consistently lose marks on these!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Legal & Ethical Practice!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review informed consent, DNR and mandatory reporting." :
                        "Keep studying! Focus on patient rights, consent and mandatory reporting obligations."}
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