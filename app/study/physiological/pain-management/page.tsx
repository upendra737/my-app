"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Pain — Definition and Types",
    icon: "🩹",
    color: "blue",
    content: [
      "PAIN: 'An unpleasant sensory and emotional experience associated with, or resembling that associated with, actual or potential tissue damage' (IASP revised definition 2020). Pain is ALWAYS subjective — the patient's self-report is the gold standard",
      "ACUTE PAIN: Short duration, identifiable cause, warning signal of tissue damage. Physiological responses: tachycardia, hypertension, diaphoresis, pallor. Resolves as tissue heals",
      "CHRONIC PAIN: Pain persisting >3 months beyond expected healing time OR associated with chronic disease. May have no identifiable cause. Associated with: depression, anxiety, sleep disturbance, reduced quality of life. Physiological adaptations occur — vital signs often NORMAL despite significant pain",
      "NOCICEPTIVE PAIN: Normal function of pain system — tissue damage activates nociceptors. SOMATIC (well-localised, sharp/throbbing — skin, muscle, bone) vs VISCERAL (poorly localised, crampy/pressure — internal organs)",
      "NEUROPATHIC PAIN: Injury or disease of the somatosensory nervous system. Burning, shooting, electric, tingling, allodynia (pain from non-painful stimuli), hyperalgesia (exaggerated pain response). Examples: diabetic neuropathy, post-herpetic neuralgia, phantom limb pain, complex regional pain syndrome",
      "MIXED PAIN: Both nociceptive and neuropathic components — common in cancer pain, low back pain, RA",
      "BREAKTHROUGH PAIN: Transient exacerbation of pain in a patient with otherwise stable baseline pain. Episodic (predictable — activity-related) vs Spontaneous (unpredictable). Requires fast-acting rescue analgesia",
      "NOCEBO EFFECT: The harmful or negative effect of an expectation — the patient who expects pain will experience more pain. Important in pre-operative education — realistic expectation-setting reduces perceived pain",
    ],
  },
  {
    title: "Pain Assessment — Tools and Principles",
    icon: "📊",
    color: "green",
    content: [
      "PAIN ASSESSMENT PRINCIPLE: Pain is what the patient says it is. Do NOT challenge or minimise the patient's pain report based on vital signs, behaviour or your clinical judgement",
      "NUMERIC RATING SCALE (NRS): 0-10. 0 = no pain, 10 = worst imaginable pain. Most common tool for adults who can communicate. 1-3 mild, 4-6 moderate, 7-10 severe",
      "VISUAL ANALOGUE SCALE (VAS): 100mm horizontal line from 'no pain' to 'worst possible pain.' Patient marks their pain. More sensitive than NRS for research purposes",
      "VERBAL RATING SCALE (VRS): None, Mild, Moderate, Severe. Useful for elderly or those with difficulty with numbers",
      "FACES PAIN SCALE — REVISED (FPS-R): Six faces from neutral to extreme pain expression. Validated for children ≥4 years AND adults with cognitive impairment. Also used for those with language barriers",
      "NEONATAL/INFANT PAIN SCALE (NIPS): For neonates and infants — assesses facial expression, cry, breathing patterns, arms, legs, state of arousal",
      "CPOT (Critical Care Pain Observation Tool): For ventilated or unconscious ICU patients — assesses facial expression, body movements, muscle tension, ventilator compliance/vocalisation",
      "PAINAD (Pain Assessment in Advanced Dementia): For patients with advanced dementia — 5 items: breathing, vocalisation, facial expression, body language, consolability. Score 0-10",
      "OPQRSTU ASSESSMENT: Onset, Provocation/Palliation, Quality, Radiation/Region, Severity (score), Timing, Understanding/impact (impact on function, sleep, mood)",
      "REASSESSMENT: MANDATORY after every pain intervention — should reassess within 30-60 minutes of oral medication and 15-30 minutes after IV administration. Document: pain score before and after, intervention used, response",
    ],
  },
  {
    title: "WHO Analgesic Ladder",
    icon: "📈",
    color: "blue",
    content: [
      "WHO ANALGESIC LADDER (1986, updated): Three-step framework for cancer pain — now widely applied to all chronic and acute pain. Key principle: 'by the clock, by the mouth, by the ladder'",
      "STEP 1 — MILD PAIN (NRS 1-3): Non-opioid analgesics: PARACETAMOL (acetaminophen) ± NSAID ± adjuvant",
      "STEP 2 — MODERATE PAIN (NRS 4-6): Weak opioid (codeine, tramadol, low-dose oxycodone) ± non-opioid ± adjuvant",
      "STEP 3 — SEVERE PAIN (NRS 7-10): Strong opioid (morphine, oxycodone, hydromorphone, fentanyl, methadone) ± non-opioid ± adjuvant",
      "BY THE CLOCK: Scheduled (around the clock) dosing rather than PRN for persistent pain — maintains stable plasma levels, prevents pain peaks and valleys. PRN (as needed) rescue doses for breakthrough pain",
      "BY THE MOUTH: Oral route preferred whenever possible — convenient, non-invasive, cost-effective, maintains patient independence",
      "BY THE LADDER: Progress through steps according to pain intensity — do not skip steps unless pain is severe (can start at Step 3 for severe pain)",
      "ADJUVANT ANALGESICS: Drugs with primary indications other than pain that have analgesic properties in specific conditions. ANTIDEPRESSANTS (amitriptyline, duloxetine — neuropathic pain), ANTICONVULSANTS (gabapentin, pregabalin — neuropathic pain, fibromyalgia), CORTICOSTEROIDS (bone pain, nerve compression), BISPHOSPHONATES (bone metastasis pain), KETAMINE (opioid-sparing, neuropathic), MUSCLE RELAXANTS (muscle spasm), TOPICAL AGENTS (lidocaine patches, capsaicin, diclofenac gel)",
      "LIMITATIONS of WHO ladder: Not designed for acute pain or procedural pain. May be too slow for rapidly escalating pain. Does not address interventional approaches",
    ],
  },
  {
    title: "Paracetamol and NSAIDs",
    icon: "💊",
    color: "orange",
    content: [
      "PARACETAMOL (Acetaminophen): First-line analgesic for mild-moderate pain. Central analgesic mechanism (not fully understood — possibly endocannabinoid system, serotonin pathways). Anti-pyretic. No anti-inflammatory effect. No GI ulceration. No platelet inhibition",
      "PARACETAMOL DOSING: 325-1000mg every 4-6 hours. MAXIMUM 4g/day in healthy adults. REDUCE to 2g/day in: liver disease, chronic alcohol use (>2 standard drinks/day), malnutrition (depleted glutathione), elderly frail patients. PAEDIATRIC DOSING: 10-15 mg/kg every 4-6 hours",
      "PARACETAMOL HEPATOTOXICITY: Mechanism — toxic metabolite NAPQI produced by CYP2E1 — normally detoxified by glutathione. In overdose or depleted glutathione states → NAPQI accumulates → hepatocyte necrosis. Antidote: N-ACETYLCYSTEINE (replenishes glutathione). Treatment best within 8-10 hours but beneficial up to 24-36 hours",
      "NSAIDs — MECHANISM: Inhibit COX-1 and COX-2 enzymes → reduced prostaglandin synthesis → analgesia, anti-inflammatory, antipyretic effects. COX-1 inhibition → reduced prostaglandins protecting gastric mucosa and platelet function. COX-2 inhibition → reduced inflammation and pain. Selective COX-2 inhibitors (celecoxib) — reduced GI side effects, similar cardiovascular risk to non-selective",
      "NSAIDs — SIDE EFFECTS: GI (peptic ulcer, GI bleeding — most common serious — prescribe PPI with NSAIDs for at-risk patients), RENAL (reduced prostaglandin-dependent renal blood flow → AKI — especially in dehydration, CKD, heart failure, elderly), CARDIOVASCULAR (increased MI and stroke risk — especially selective COX-2 inhibitors), PLATELET INHIBITION (aspirin irreversible, others reversible), BRONCHOSPASM (aspirin-exacerbated respiratory disease — 10% of asthmatics)",
      "NSAIDs — CONTRAINDICATIONS: Active peptic ulcer disease, severe CKD/AKI, heart failure, pregnancy (third trimester — premature closure of ductus arteriosus), aspirin-sensitive asthma, anticoagulant therapy (increased bleeding risk). Use with EXTREME CAUTION: elderly, dehydration, post-cardiac surgery (increased MI risk)",
      "TOPICAL NSAIDs (diclofenac gel, ketoprofen): Effective for localised musculoskeletal pain. Much lower systemic absorption → fewer systemic side effects. First-line for knee OA in many guidelines",
      "KETOROLAC (Toradol): Potent parenteral NSAID — maximum 5 days use only (GI/renal toxicity with longer use). Useful in post-operative pain as opioid-sparing agent",
    ],
  },
  {
    title: "Opioid Analgesics — Pharmacology",
    icon: "💉",
    color: "red",
    content: [
      "OPIOIDS: Bind to mu (μ), kappa (κ) and delta (δ) opioid receptors in CNS and periphery → analgesia, sedation, euphoria (mu receptors). Endogenous opioids: endorphins, enkephalins, dynorphins",
      "OPIOID POTENCY EQUIVALENCES (morphine = reference standard, oral route): Morphine 30mg oral = Oxycodone 20mg oral = Hydromorphone 6mg oral = Codeine 200mg oral. IV morphine = approximately 3× more potent than oral morphine (first-pass metabolism). Always use equianalgesic tables when switching opioids or routes",
      "MORPHINE: Reference standard opioid. Active metabolite morphine-6-glucuronide (M6G) — more potent than morphine — ACCUMULATES IN RENAL FAILURE causing prolonged effect and toxicity. IV, IM, SC, oral (immediate and modified release), epidural, intrathecal",
      "OXYCODONE: Oral bioavailability ~60-87% (higher than morphine ~30%). OxyContin = extended release (do NOT crush or chew — releases full dose immediately — overdose). Percocet/Endone = oxycodone + paracetamol",
      "HYDROMORPHONE (Dilaudid): 5-7× more potent than morphine. Useful in renal failure (metabolites less active than M6G). IV, SC, oral",
      "FENTANYL: 100× more potent than morphine. Lipid-soluble → crosses blood-brain barrier rapidly. Transdermal patch (Durogesic — every 72 hours for chronic pain — takes 12-24 hours to reach effect, 12-24 hours to clear after removal). IV for acute/procedural pain. Buccal/intranasal for breakthrough cancer pain. NEVER use patch for acute pain — unpredictable absorption",
      "METHADONE: Long half-life (24-36 hours — individual variation 8-80 hours) → complex dosing. Active in neuropathic pain (NMDA receptor antagonism). Used in opioid dependence treatment. Complex drug interactions (CYP3A4, CYP2D6). QT prolongation risk. Specialist prescribing only",
      "TRAMADOL: Weak mu agonist + serotonin/noradrenaline reuptake inhibition. Moderate pain. RISK: Serotonin syndrome (with SSRIs, MAOIs, other serotonergic drugs). Seizure risk. Ceiling effect. Avoid in elderly. CYP2D6 polymorphism affects metabolism",
      "CODEINE: Prodrug → converted to morphine by CYP2D6. Ultra-rapid metabolisers (1-2% of population, higher in Ethiopians, Arabs — up to 29%) → dangerously high morphine conversion → respiratory depression. Avoid in children <12, post-tonsillectomy/adenoidectomy (deaths reported). Poor metabolisers get no effect",
    ],
  },
  {
    title: "Opioid Side Effects and Management",
    icon: "⚠️",
    color: "red",
    content: [
      "RESPIRATORY DEPRESSION: Most serious side effect — most common cause of opioid-related death. Signs: RR <8-10/min, shallow breathing, SpO2 dropping, pinpoint miosis, decreasing consciousness. Risk factors: opioid-naive patients, high doses, rapid titration, sleep, concurrent CNS depressants (benzodiazepines, alcohol), CKD (accumulation), sleep apnoea",
      "RESPIRATORY DEPRESSION TREATMENT: STIMULATE patient (sternal rub, call name), SUPPLEMENTAL OXYGEN, NALOXONE (Narcan) — 0.4mg diluted in 10mL normal saline → give 0.5-1mL (0.02-0.04mg) IV every 2-3 minutes until RR adequate. TITRATE carefully — give too much → precipitates withdrawal (agitation, tachycardia, hypertension, acute pain) AND reversal is shorter-acting than opioid → may need repeat doses or infusion",
      "CONSTIPATION: UNIVERSAL — tolerance does NOT develop (unlike most other opioid side effects). Must ALWAYS prescribe a bowel regimen with opioids: STIMULANT LAXATIVE (senna, bisacodyl) ± stool softener (docusate). High fluid and fibre intake. METHYLNALTREXONE (Relistor) — peripherally-acting mu opioid receptor antagonist — treats opioid-induced constipation without affecting analgesia (does not cross blood-brain barrier)",
      "NAUSEA AND VOMITING: Common on initiation — usually resolves within 1-2 weeks. Mechanism: opioids stimulate chemoreceptor trigger zone (CTZ) AND slow GI motility. Treatment: antiemetics (metoclopramide, ondansetron, haloperidol low-dose, prochlorperazine). Rotating opioids may help",
      "SEDATION: Common, especially on initiation. Usually improves with time. Excessive sedation is a warning sign of impending respiratory depression — assess RR and oxygen saturation. Stimulants (methylphenidate, modafinil) used in palliative care for opioid-induced sedation",
      "URINARY RETENTION: Opioids increase urethral sphincter tone and reduce detrusor contraction. Common post-operatively. Assess bladder, encourage voiding, may require catheterisation",
      "PRURITUS: Common with intrathecal/epidural opioids. Mechanism: mu receptor activation in spinal cord → histamine release. NOT a true allergic reaction. Treatment: antihistamines, low-dose naloxone, ondansetron, propofol (in epidural patients)",
      "HYPERALGESIA (Opioid-Induced Hyperalgesia — OIH): Paradoxical increase in pain sensitivity with opioid use. Distinct from tolerance. Patient reports INCREASED, DIFFUSE pain despite increasing opioids. Treatment: reduce/rotate opioid, add NMDA antagonist (ketamine, methadone)",
      "TOLERANCE: Reduced effect with repeated dosing — requires dose escalation for same effect. Develops to: analgesia, sedation, nausea, euphoria. Does NOT develop to constipation or miosis",
    ],
  },
  {
    title: "Patient-Controlled Analgesia (PCA)",
    icon: "🔧",
    color: "purple",
    content: [
      "PCA (Patient-Controlled Analgesia): Patient self-administers pre-programmed bolus doses of opioid IV (or SC/epidural) using a pump with a lockout interval — maintains patient control and titrates to individual need",
      "PCA ADVANTAGES: Superior pain control compared to PRN nurse-administered analgesia, reduced peaks and troughs in opioid levels, empowers patient control, reduces delays in pain treatment, lower total opioid consumption in many studies",
      "STANDARD PCA PARAMETERS: BOLUS DOSE (demand dose — patient initiates), LOCKOUT INTERVAL (minimum time between doses — prevents stacking, typically 5-10 minutes), 4-HOUR LIMIT (maximum dose per 4 hours — safety limit), BACKGROUND INFUSION (continuous basal rate — controversial for opioid-naive patients — increases respiratory depression risk without improving analgesia in most patients)",
      "COMMON PCA REGIMENS: Morphine 1-2mg bolus, 5-10 min lockout, NO background for opioid-naive. Fentanyl 25-50 mcg bolus, 5-10 min lockout. Hydromorphone 0.2-0.4mg bolus",
      "PCA NURSING RESPONSIBILITIES: Assess pain score and sedation score (PASERO OPIOID-INDUCED SEDATION SCALE — POSS: S=sleep easy to rouse, 1=awake and alert, 2=slightly drowsy, 3=frequently drowsy, 4=somnolent — STOP PCA at level 3-4), Monitor RR and SpO2, assess button and device function, ensure ONLY the patient presses the button (PCA by proxy — family members pressing button = dangerous — educate family), document: attempts vs deliveries ratio (high attempts relative to deliveries = inadequate analgesia — increase dose), maintain line patency",
      "PCA BY PROXY: Family members pressing the PCA button on behalf of the patient bypasses the safety mechanism — the patient who is too sedated to press the button SHOULD NOT receive more opioid. This is a patient safety issue requiring family education",
      "EPIDURAL ANALGESIA: Opioid ± local anaesthetic (bupivacaine) via epidural catheter. Excellent analgesia (especially for thoracic and abdominal surgery). Nurse-managed PCEA (patient-controlled epidural analgesia). Complications: hypotension (sympathetic block), urinary retention, pruritus, motor block (assess lower limb movement), headache (dural puncture — postural), haematoma/abscess (rare — neurological emergency), catheter migration",
      "PATIENT SAFETY with PCA: Ensure PCA pump is clearly labelled, anti-reflux valve in IV line to prevent retrograde drug accumulation, dedicated IV line preferred, bedside monitoring (SpO2, RR), naloxone at bedside, call bell within reach",
    ],
  },
  {
    title: "Regional Anaesthesia and Nerve Blocks",
    icon: "💉",
    color: "blue",
    content: [
      "REGIONAL ANAESTHESIA: Local anaesthetic injected near nerves to block pain transmission from a specific region — provides analgesia without systemic opioid effects",
      "PERIPHERAL NERVE BLOCKS: Injection of local anaesthetic near specific peripheral nerves. Examples: femoral nerve block (hip fracture — excellent pre-operative analgesia), ADDUCTOR CANAL BLOCK (knee replacement — motor-sparing), BRACHIAL PLEXUS BLOCK (upper limb surgery), FASCIA ILIACA BLOCK (hip fracture, femur surgery), PECS block (breast surgery), SERRATUS ANTERIOR BLOCK (rib fractures), INTERSCALENE BLOCK (shoulder surgery — risk: phrenic nerve block → respiratory compromise)",
      "CONTINUOUS NERVE BLOCK: Catheter placed near nerve → continuous infusion of local anaesthetic → prolonged post-operative analgesia. Significantly reduces opioid requirements",
      "SPINAL ANAESTHESIA (intrathecal): Single injection into subarachnoid space (CSF). Rapid onset, high reliability, profound anaesthesia. Used for lower limb, hip, pelvis, lower abdominal surgery. Complications: HYPOTENSION (most common — sympathetic block → vasodilation), POST-DURAL PUNCTURE HEADACHE (PDPH — postural headache, worse upright, better lying — from CSF leak — treat with bed rest, caffeine, epidural blood patch for severe cases), urinary retention, high spinal block (rare — respiratory arrest if spreads to cervical level), total spinal",
      "LOCAL ANAESTHETIC SYSTEMIC TOXICITY (LAST): Life-threatening complication from inadvertent IV injection or rapid absorption of local anaesthetic. Manifestations: NEUROLOGICAL (perioral tingling, tinnitus, metallic taste, seizures, LOC) then CARDIOVASCULAR (arrythmias — bupivacaine particularly cardiotoxic, cardiac arrest). TREATMENT: STOP injection, Airway management + oxygen, Seizure control (benzodiazepine), INTRALIPID 20% (IV lipid emulsion therapy — binds local anaesthetic from plasma and tissues — acts as lipid sink). Resuscitation may be prolonged — maintain CPR",
      "LOCAL ANAESTHETIC AGENTS: LIDOCAINE — rapid onset (2-5 min), moderate duration (1-2h), addition of adrenaline extends to 3-4h. BUPIVACAINE — slower onset (10-20 min), longer duration (4-8h), most cardiotoxic. ROPIVACAINE — similar to bupivacaine but less cardiotoxic, slightly less potent. LEVOBUPIVACAINE — less cardiotoxic than racemic bupivacaine",
      "MAXIMUM SAFE DOSES of local anaesthetics: Lidocaine: 3 mg/kg plain, 7 mg/kg with adrenaline. Bupivacaine: 2 mg/kg. Ropivacaine: 3 mg/kg. NEVER use adrenaline-containing local anaesthetic in: fingers, toes, ears, nose, penis (end-arterial areas — ischaemia risk)",
    ],
  },
  {
    title: "Non-Pharmacological Pain Management",
    icon: "🌿",
    color: "green",
    content: [
      "NON-PHARMACOLOGICAL APPROACHES should be integrated with pharmacological treatment — not used as alternatives. Evidence base varies from strong (physical therapies) to moderate (psychological) to limited (complementary)",
      "PHYSICAL APPROACHES:",
      "ICE/COLD THERAPY: Acute injury — vasoconstriction, reduces inflammation and oedema, analgesic (nerve conduction slowing). Apply for 15-20 minutes, wrap in cloth, not directly on skin. Avoid in: impaired sensation, peripheral vascular disease, Raynaud's",
      "HEAT THERAPY: Chronic pain, muscle spasm — vasodilation, increases flexibility, relaxes muscle. Avoid in: acute injury (first 48-72 hours — increases oedema), impaired sensation, bleeding risk. Moist heat superior to dry",
      "TRANSCUTANEOUS ELECTRICAL NERVE STIMULATION (TENS): Electrical stimulation via skin electrodes — activates A-beta fibres → gate control theory → blocks pain signals. Useful for chronic musculoskeletal pain, neuropathic pain, labour pain. Non-invasive, patient-controlled, minimal side effects",
      "MASSAGE: Muscle tension reduction, endorphin release, reduces anxiety. Contraindicated over: wound sites, thrombosed veins (DVT risk — dislodge clot), malignant tumours, infected tissue, acute inflammation",
      "POSITIONING AND IMMOBILISATION: Elevation (reduces oedema), splinting (reduces movement-related pain), optimal positioning (alignment reduces musculoskeletal strain)",
      "PSYCHOLOGICAL APPROACHES:",
      "COGNITIVE BEHAVIOURAL THERAPY (CBT): Evidence-based for chronic pain — addresses pain catastrophising, avoidance behaviours, negative cognitions. Reduces pain disability and improves function",
      "MINDFULNESS-BASED STRESS REDUCTION (MBSR): Reduces pain severity and improves coping in chronic pain",
      "RELAXATION TECHNIQUES: Deep breathing, progressive muscle relaxation, guided imagery — activates parasympathetic nervous system, reduces muscle tension and anxiety, decreases pain perception",
      "DISTRACTION: Music, television, conversation, virtual reality (increasingly used for procedural pain, burn care) — shifts attention away from pain",
      "PATIENT EDUCATION: Understanding pain mechanisms, realistic expectations, self-management skills — reduces fear-avoidance and improves outcomes",
    ],
  },
  {
    title: "Multimodal Analgesia",
    icon: "🔄",
    color: "purple",
    content: [
      "MULTIMODAL ANALGESIA: Using multiple analgesic agents with different mechanisms simultaneously → additive or synergistic effects → superior analgesia with LOWER DOSES of each individual agent → fewer side effects. The cornerstone of modern acute pain management",
      "RATIONALE: Pain transmission involves multiple pathways and receptors. Using multiple medications targeting different points in the pain pathway is more effective than escalating a single agent",
      "TYPICAL POST-OPERATIVE MULTIMODAL REGIMEN: Regular paracetamol (1g QID) + regular NSAID (if not contraindicated) + nerve block or local anaesthetic infiltration + opioid PRN (rescue doses only)",
      "ENHANCED RECOVERY AFTER SURGERY (ERAS): Evidence-based perioperative pathway that incorporates multimodal analgesia as a core element. Goals: reduce opioid use, early mobilisation, early oral intake, reduce hospital stay, reduce complications",
      "OPIOID-SPARING STRATEGIES: Reduce opioid consumption and side effects. Strategies: paracetamol, NSAIDs, COX-2 inhibitors, gabapentinoids (gabapentin, pregabalin), ketamine, dexmedetomidine, clonidine, nerve blocks, wound infiltration, intraoperative magnesium",
      "GABAPENTINOIDS (gabapentin, pregabalin): Alpha-2-delta calcium channel modulators. Evidence-based for neuropathic pain, fibromyalgia, post-operative pain (opioid-sparing). Side effects: SEDATION (most common and clinically important — risk of additive sedation with opioids), dizziness, ataxia, peripheral oedema. Start low in elderly and CKD. Risk of misuse/dependence (pregabalin especially — Schedule 3 in Australia)",
      "KETAMINE (sub-anaesthetic doses): NMDA receptor antagonist — blocks central sensitisation. Opioid-sparing, treats opioid-induced hyperalgesia, useful for opioid-tolerant patients. Low-dose infusion (0.1-0.3 mg/kg/hour) post-operatively. Side effects: dissociation, hallucinations (less at sub-anaesthetic doses), nausea. Contraindications: uncontrolled hypertension, raised ICP, psychosis",
      "DEXMEDETOMIDINE: Alpha-2 agonist — sedation, opioid-sparing analgesic, anxiolytic. Used in ICU sedation and as adjunct. Side effects: bradycardia, hypotension. Does not cause respiratory depression (advantage over opioids)",
    ],
  },
  {
    title: "Opioid Safety — Monitoring and Naloxone",
    icon: "🚨",
    color: "red",
    content: [
      "OPIOID-RELATED ADVERSE DRUG EVENTS (ORADEs): Leading cause of preventable inpatient deaths — mostly from respiratory depression. The majority are preventable with appropriate monitoring",
      "PASERO OPIOID-INDUCED SEDATION SCALE (POSS): S = Sleep, easy to arouse (acceptable). 1 = Awake and alert. 2 = Slightly drowsy, easy to arouse (acceptable). 3 = Frequently drowsy, arousable, drifts off to sleep during conversation (UNACCEPTABLE — reduce or stop opioid). 4 = Somnolent, minimal response to stimulation (UNACCEPTABLE — stop opioid, consider naloxone)",
      "MINIMUM MONITORING FREQUENCY for patients on opioids: Every 1-2 hours for first 12-24 hours after new opioid or dose increase (or more frequently as ordered), then every 4 hours if stable. CONTINUOUS SpO2 monitoring for high-risk patients (history of sleep apnoea, obesity, concurrent CNS depressants, dose >90 MME/day)",
      "HIGH-RISK OPIOID PATIENTS: Sleep apnoea (risk of respiratory depression increased 2-4×), elderly (reduced metabolism, clearance), opioid-naive patients (no tolerance), renal/hepatic failure (drug accumulation), concurrent benzodiazepines or alcohol (synergistic CNS depression), thoracic or upper abdominal surgery (reduced respiratory reserve)",
      "NALOXONE (Narcan) FOR RESPIRATORY DEPRESSION: Opioid receptor antagonist — reverses all opioid effects. Onset: IV 1-2 minutes, IM/SC 5-10 minutes. Duration: 30-90 minutes (SHORTER than most opioids — may need repeat dosing or infusion). DOSING for opioid-induced respiratory depression (NOT overdose): 0.04-0.1mg IV every 2-3 minutes (titrate to restore adequate breathing without precipitating acute withdrawal and severe pain). For opioid OVERDOSE (non-hospital): intranasal Narcan 4mg device",
      "TAKEHOME NALOXONE: Patients on chronic high-dose opioids should be prescribed take-home naloxone (nasal spray or auto-injector) — for use by family/caregivers in emergency. Education essential",
      "MORPHINE MILLIGRAM EQUIVALENTS (MME): Standardised measurement of opioid dose. MME >90/day associated with significantly higher risk of opioid overdose. MME >100/day = HIGH RISK threshold in many guidelines",
      "OPIOID PRESCRIPTION SAFEGUARDS: Check prescription drug monitoring programme (PDMP) before prescribing, start low dose and titrate, short supply for acute pain, patient education (safe storage, disposal), discuss risks of concurrent benzodiazepines and alcohol",
    ],
  },
  {
    title: "Chronic Pain Management and Special Populations",
    icon: "🔄",
    color: "orange",
    content: [
      "CHRONIC PAIN MANAGEMENT: Requires multidisciplinary approach — medicine, nursing, physiotherapy, psychology, occupational therapy, social work. Goal: FUNCTION and QUALITY OF LIFE, not necessarily zero pain",
      "BIOPSYCHOSOCIAL MODEL: Pain is influenced by biological (tissue damage, inflammation), psychological (catastrophising, anxiety, depression, beliefs about pain) and social factors (work, relationships, litigation). All dimensions must be addressed",
      "PAIN CATASTROPHISING: Tendency to magnify, ruminate about and feel helpless about pain → strongly predicts worse pain outcomes, disability, opioid use. Addressed by CBT, acceptance and commitment therapy (ACT)",
      "OPIOID THERAPY FOR CHRONIC NON-CANCER PAIN: Controversial — benefits limited for long-term use, risks include: addiction, hyperalgesia, hormonal effects, immunosuppression, falls risk. Reserve for severe pain after other treatments exhausted. Require opioid treatment agreements, urine drug screening, regular review",
      "NEUROPATHIC PAIN TREATMENT: FIRST-LINE: Gabapentin/pregabalin (calcium channel modulators), TCAs (amitriptyline, nortriptyline — also help sleep), SNRIs (duloxetine — first-line for diabetic neuropathy, fibromyalgia). SECOND-LINE: Tramadol, opioids. TOPICAL: Lidocaine 5% patches (post-herpetic neuralgia), capsaicin (high-dose 8% patch — TRPV1 desensitisation), diclofenac gel",
      "PAIN IN ELDERLY: Higher pain prevalence, under-treated. Altered pharmacokinetics — reduce doses, longer intervals. Avoid: NSAIDs (renal, GI, cardiovascular risk — Beers Criteria), long-acting opioids (fall risk), muscle relaxants (fall risk, sedation). Prefer: paracetamol (first-line), short-acting opioids with careful titration, topical NSAIDs",
      "PAIN IN PREGNANCY: Paracetamol — safest (though some evidence of concern — use minimum effective dose). NSAIDs — AVOID especially third trimester (premature ductus arteriosus closure). Opioids — short-term use with caution (neonatal withdrawal if prolonged use). Regional anaesthesia — preferred for labour pain. Avoid: aspirin (Reye's risk in neonate), codeine (ultra-rapid metabolism risk to neonate)",
      "PAIN IN COGNITIVELY IMPAIRED PATIENTS: Use observational tools (PAINAD, Abbey Pain Scale). Treat suspected pain empirically in patients who cannot self-report but show behavioural indicators. Avoid assuming pain is absent because it is not verbally reported. Ensure carers are educated to recognise pain behaviours",
      "CULTURAL CONSIDERATIONS: Pain expression varies significantly by culture — some cultures stoic (under-report), others expressive (may appear to over-report). Do NOT allow cultural bias to influence pain assessment or treatment. Interpret through the patient's own cultural lens with cultural humility",
    ],
  },
  {
    title: "Palliative and Cancer Pain Management",
    icon: "🕊️",
    color: "purple",
    content: [
      "CANCER PAIN: Affects 50-70% of cancer patients. Multifactorial: tumour infiltration (bone, nerve, viscera — most painful), treatment-related (chemotherapy neuropathy, post-surgical, radiotherapy), TOTAL PAIN concept (Cicely Saunders — physical + psychological + social + spiritual components of suffering)",
      "PRINCIPLES of cancer pain management: Comprehensive assessment (aetiology, mechanism, severity), multimodal approach, regular scheduled dosing (not PRN alone for constant pain), breakthrough dosing, oral route preferred, anticipate and prevent side effects, reassess regularly, address psychosocial components",
      "STRONG OPIOID INITIATION for cancer pain: Start with immediate-release morphine 5-10mg every 4 hours (reduce in elderly, renal failure, opioid-naive). Calculate 24-hour total, convert to modified-release opioid (e.g., MST — morphine sulphate modified release twice daily). Breakthrough dose = 1/6 of total 24-hour opioid dose, given as immediate-release every 1-4 hours as needed",
      "OPIOID ROTATION (switching): When inadequate analgesia despite escalation, intolerable side effects, or to utilise a different route. Use equianalgesic tables. Reduce calculated equianalgesic dose by 25-50% (incomplete cross-tolerance). Methadone rotation requires specialist involvement",
      "BONE PAIN MANAGEMENT: NSAIDs (prostaglandin-mediated), bisphosphonates (pamidronate, zoledronic acid — osteoclast inhibitors, reduce skeletal-related events, analgesic effect), DENOSUMAB (RANK-L inhibitor), RADIOTHERAPY (highly effective for localised bone pain — single fraction often sufficient), RADIOISOTOPES (strontium-89, samarium-153 — for widespread bone metastases)",
      "NEUROPATHIC CANCER PAIN: Antidepressants, anticonvulsants (as above), KETAMINE (opioid-sparing, NMDA receptor antagonism), CORTICOSTEROIDS (dexamethasone — reduces peri-neural oedema, short-term use), NERVE BLOCKS (coeliac plexus block for pancreatic pain, intrathecal drug delivery for refractory pain)",
      "SUBCUTANEOUS INFUSION (syringe driver): When oral route unavailable (dysphagia, vomiting, unconscious). Continuous 24-hour infusion of opioid ± anti-emetic ± midazolam via subcutaneous butterfly needle. Nurse responsibilities: site assessment (24-48 hourly — redness, swelling, leakage), drug compatibility checking (not all drugs compatible in syringe), rate calculation, documentation",
      "PALLIATIVE SEDATION (terminal sedation): Intentional reduction of consciousness to relieve refractory suffering at the end of life. Ethically distinct from euthanasia (intent is relief of suffering, not to hasten death). Midazolam most commonly used. Requires: assessment of refractory symptoms, informed consent, MDT agreement, family education",
    ],
  },
];

const mnemonics = [
  {
    title: "Pain Assessment — OPQRSTU",
    acronym: "OPQRSTU",
    breakdown: ["Onset (when, how sudden)", "Provocation/Palliation (what makes it better/worse)", "Quality (character — burning, stabbing, aching)", "Region/Radiation (where, does it spread)", "Severity (0-10 NRS)", "Timing (constant vs intermittent, duration)", "Understanding/impact (effect on function, sleep, mood)"],
    memory: "OPQRSTU — the complete pain history. Ask ALL components for every pain complaint. Quality distinguishes nociceptive (aching, throbbing) from neuropathic (burning, shooting, electric)!",
    color: "green",
  },
  {
    title: "WHO Analgesic Ladder — Steps",
    acronym: "WHO",
    breakdown: ["W — Weak opioids (Step 2: codeine, tramadol) for moderate pain", "H — Heavy/strong opioids (Step 3: morphine, oxycodone) for severe pain", "O — Others (Step 1: paracetamol, NSAIDs for mild pain) + adjuvants at every step"],
    memory: "WHO ladder: Step 1 (mild) = non-opioids, Step 2 (moderate) = weak opioids, Step 3 (severe) = strong opioids. 'By the clock, by the mouth, by the ladder.' Adjuvants can be added at ANY step!",
    color: "blue",
  },
  {
    title: "PASERO Sedation Scale — Opioid Safety",
    acronym: "POSS",
    breakdown: ["S = Sleep, easy to arouse (acceptable)", "1 = Awake and alert (acceptable)", "2 = Slightly drowsy, easy to arouse (acceptable — monitor)", "3 = Frequently drowsy, arousable (UNACCEPTABLE — reduce/stop opioid)", "4 = Somnolent, minimal response (UNACCEPTABLE — stop + naloxone)"],
    memory: "POSS — S, 1, 2 = acceptable. 3, 4 = STOP. A POSS score of 3 is the warning — act before respiratory depression (POSS 4) occurs. Sedation always precedes respiratory depression!",
    color: "red",
  },
  {
    title: "Opioid Side Effects — CROWN",
    acronym: "CROWN",
    breakdown: ["Constipation (universal — always add bowel regimen)", "Respiratory depression (most dangerous)", "Opioid-induced hyperalgesia (paradoxical pain increase)", "Wavy nausea (nausea and vomiting — especially on initiation)", "Neurological (sedation, confusion, urinary retention, pruritus)"],
    memory: "CROWN — Constipation is UNIVERSAL (tolerance never develops — ALWAYS prescribe laxative). Respiratory depression is MOST DANGEROUS. Tolerance develops to all effects EXCEPT constipation!",
    color: "red",
  },
];

const alerts = [
  { text: "RESPIRATORY DEPRESSION: RR <8-10/min + decreasing LOC + miosis = OPIOID TOXICITY. Give naloxone 0.04mg IV every 2-3 minutes TITRATED — too much naloxone precipitates acute withdrawal, severe pain and cardiovascular crisis!", severity: "high" },
  { text: "PCA BY PROXY: Family members pressing the PCA button bypasses the safety mechanism — the sedated patient who cannot press the button SHOULD NOT receive more opioid. Educate all family members firmly — this has caused patient deaths!", severity: "high" },
  { text: "PARACETAMOL MAXIMUM DOSE: 4g/day in healthy adults. REDUCE to 2g/day in liver disease, chronic alcohol use and malnutrition. Paracetamol is in many combination products — CHECK all medications for hidden paracetamol content!", severity: "high" },
  { text: "LOCAL ANAESTHETIC SYSTEMIC TOXICITY (LAST): Perioral tingling, tinnitus, metallic taste → seizures → cardiac arrest. INTRALIPID 20% IV is the specific treatment — must be immediately available whenever performing nerve blocks!", severity: "high" },
  { text: "CONSTIPATION: Tolerance does NOT develop to opioid-induced constipation unlike all other opioid side effects. ALWAYS prescribe a stimulant laxative when starting opioids — never assume constipation will resolve!", severity: "high" },
  { text: "NSAIDS in RENAL FAILURE, HEART FAILURE or DEHYDRATION are DANGEROUS — reduce prostaglandin-dependent renal blood flow → AKI. Also avoid in third trimester pregnancy (premature ductus arteriosus closure)!", severity: "high" },
  { text: "CODEINE in ULTRA-RAPID METABOLISERS: Converts to dangerous levels of morphine — respiratory depression and deaths reported in children post-tonsillectomy. Avoid codeine in children <12 and breastfeeding mothers!", severity: "high" },
  { text: "FENTANYL PATCH: Takes 12-24 hours to reach analgesic effect and 12-24 hours to clear after removal. NEVER use for acute pain — unsafe absorption kinetics. Check patch is secured and not accidentally applied to warm skin (increases absorption)!", severity: "medium" },
  { text: "GABAPENTINOIDS + OPIOIDS: Additive sedation and respiratory depression risk — the combination has caused deaths. Use lowest effective gabapentinoid dose and monitor closely when co-prescribing with opioids!", severity: "medium" },
  { text: "METHOTREXATE WEEKLY DOSING: Cannot be overstated — some patients have taken it daily thinking it was a daily medication. ALWAYS confirm frequency with the patient at every encounter. Daily methotrexate = fatal bone marrow suppression!", severity: "high" },
  { text: "NALOXONE DURATION SHORTER than most opioids: 30-90 minutes vs morphine 4-6 hours. Patient may re-sedate after naloxone wears off — MONITOR for minimum 2 hours after naloxone administration, prepare for repeat doses!", severity: "medium" },
  { text: "EPIDURAL HAEMATOMA: Back pain + progressive neurological deterioration (leg weakness, bladder dysfunction) after epidural = EMERGENCY. Urgent MRI spine + neurosurgical consultation. Minutes to permanent paralysis!", severity: "high" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A patient with a self-reported pain score of 8/10 following abdominal surgery has a respiratory rate of 18 breaths/min, blood pressure of 128/78 and heart rate of 82 beats/min, and appears comfortable and relaxed. A nursing student observes 'I don't think they're really in pain — their vitals are normal and they look comfortable.' What is the nurse's MOST appropriate response?",
    options: [
      "Agree with the student — normal vital signs and calm appearance are reliable indicators that pain is not severe",
      "Explain that vital signs are unreliable indicators of pain severity — patients with chronic pain or post-operative pain often have physiological adaptation with normal vital signs despite severe pain. The patient's self-report of 8/10 IS the assessment and must be believed and treated",
      "Reassess with the patient in 1 hour — the discrepancy between behaviour and pain score requires monitoring before treating",
      "Reduce the analgesic dose — an 8/10 with normal vitals suggests the patient may be over-reporting pain",
    ],
    correct: 1,
    explanation: "PAIN ASSESSMENT PRINCIPLE: Pain is ALWAYS subjective. The patient's self-report IS the gold standard — not vital signs, not behavioural observation, not clinical intuition. PHYSIOLOGICAL ADAPTATION: In chronic pain and in patients with ongoing post-surgical pain (day 2+), the acute sympathetic response (tachycardia, hypertension, diaphoresis) that accompanies initial acute pain ADAPTS. Patients have normal vital signs and may appear comfortable despite significant ongoing pain. This is well-documented in the literature and is a core pain assessment principle. To question or disbelieve a patient's pain report based on vital signs or appearance is a violation of basic pain management principles and a common source of under-treatment. The nursing student needs to understand: pain behaviour varies enormously by culture, personality, pain history and context. Normal vitals + relaxed appearance + pain score 8/10 = patient reporting 8/10. Treat the report.",
    wrongExplanations: [
      "WRONG: Normal vital signs are NOT reliable indicators of pain severity. This is one of the most important pain assessment principles. Physiological adaptation to chronic/ongoing pain normalises vital signs. Agreeing with the student perpetuates dangerous misconceptions.",
      "",
      "WRONG: Waiting 1 hour before treating a pain score of 8/10 is inadequate. Moderate-severe pain (7-10) requires timely assessment and intervention. There is no 'monitoring' required — treat the pain as reported.",
      "WRONG: Reducing analgesic dose based on vital signs and appearance rather than the patient's own report is pain under-treatment. This approach has historical roots in harmful biases about who deserves pain medication — it is not clinically justified.",
    ],
  },
  {
    level: "Knowledge",
    question: "A nurse is preparing to administer opioid analgesia to a post-operative patient via PCA. Before activating the pump, the nurse explains to the family that only the patient should press the PCA button. The patient's husband asks 'Can't I press it for her when she's sleeping or too tired to press it herself?' What is the nurse's MOST accurate explanation?",
    options: [
      "Yes, family members can press the button — you know your wife best and can judge when she needs more pain medication",
      "PCA by proxy is dangerous — the sedated or sleeping patient cannot press the button BECAUSE they do not need more medication at that moment. A sleeping patient has adequate analgesia. If family members press the button when the patient cannot, they bypass the critical safety mechanism and risk fatal respiratory depression",
      "You can press it once but no more than twice in 30 minutes — there are safety limits built into the pump",
      "Only press it if her pain score is above 7 — at that level the medication is needed",
    ],
    correct: 1,
    explanation: "PCA BY PROXY is a significant patient safety issue that has caused patient deaths. The SAFETY MECHANISM of PCA relies entirely on the principle that a patient who is too sedated to press the button SHOULD NOT receive more opioid. Sedation precedes respiratory depression in opioid toxicity. THE PRINCIPLE: If the patient is asleep or too tired to self-administer, this means the current opioid level is providing adequate comfort — they are not in pain severe enough to wake them. If a family member presses the button for a sleeping patient, they deliver opioid to a patient who is already at a level where their consciousness is reduced → risk of opioid accumulation → respiratory depression → death. CORRECT EDUCATION: Emphasise that the patient pressing the button herself is the SAFETY MECHANISM, explain that sleeping means pain is controlled, advise family to call the nurse if they are concerned about the patient's pain rather than pressing the button, document the education provided.",
    wrongExplanations: [
      "WRONG: Family members should NEVER press the PCA button for the patient. PCA by proxy removes the fundamental safety mechanism of the device. Deaths have occurred from this practice.",
      "",
      "WRONG: There are NO safe conditions under which family members should press the PCA button. The lockout interval prevents pump-level overdose but does not protect against the accumulation of opioid in a sedated patient who is not pressing the button themselves.",
      "WRONG: A specific pain score threshold for family pressing the button is not an acceptable parameter. Any condition where the family is pressing the button instead of the patient is PCA by proxy — dangerous regardless of pain score.",
    ],
  },
  {
    level: "Application",
    question: "A nurse is monitoring a patient on a morphine PCA on day 1 post-laparotomy. The nurse's assessment shows: pain score 6/10, RR 10/min, SpO2 91% on room air, PASERO sedation score of 3 (frequently drowsy, drifts off to sleep mid-conversation), and the patient is difficult to keep awake. The pump records show 12 deliveries in the last hour. What is the nurse's MOST appropriate immediate action?",
    options: [
      "The pain score of 6/10 indicates the PCA is providing inadequate analgesia — increase the bolus dose",
      "Stop the PCA immediately, apply supplemental oxygen, stimulate the patient, assess response and prepare naloxone — this patient has PASERO score 3 with respiratory compromise (RR 10, SpO2 91%) indicating opioid over-sedation. Notify physician urgently",
      "Reassess in 30 minutes — the patient may simply be tired from surgery",
      "Apply nasal cannula oxygen and continue the PCA with increased monitoring",
    ],
    correct: 1,
    explanation: "OPIOID OVER-SEDATION — POSS 3 with respiratory compromise. CRITICAL ASSESSMENT: PASERO score 3 (frequently drowsy, drifts off during conversation) = UNACCEPTABLE — stop opioid. RR 10/min (borderline — normal 12-20). SpO2 91% (HYPOXAEMIA — concerning). 12 PCA deliveries in 1 hour (high utilisation — significant opioid load). Pain score 6/10 (but SEDATION precedes respiratory depression — treating pain by continuing opioid when POSS=3 will cause respiratory arrest). IMMEDIATE ACTIONS: STOP PCA. Apply supplemental oxygen (NRB or nasal cannula to target SpO2 ≥94%). Stimulate the patient (call name, sternal rub). Prepare NALOXONE (0.04mg IV ready — draw up, may need to administer if RR continues to fall or SpO2 drops further). Position patient upright (improves respiratory mechanics). Notify physician URGENTLY. The 6/10 pain score seems to conflict with the intervention — but the principle is clear: when sedation POSS ≥3, opioid must be stopped regardless of pain score. Safety first.",
    wrongExplanations: [
      "WRONG: Increasing the PCA bolus dose with PASERO score 3 and RR 10 will cause respiratory arrest. The pain score of 6/10 is misleading here — the sedation score is the safety parameter. PASERO 3 = stop opioid.",
      "",
      "WRONG: Reassessing in 30 minutes when SpO2 is 91%, RR is 10 and PASERO is 3 is dangerous. Opioid-induced respiratory depression is a progressive process — waiting 30 minutes risks respiratory arrest.",
      "WRONG: Applying oxygen without stopping the PCA leaves the source of the problem (continued opioid delivery) unaddressed. Oxygen treats the symptom (hypoxaemia) but does not stop the opioid accumulation causing it. Both interventions are needed but stopping the PCA is the priority.",
    ],
  },
  {
    level: "Application",
    question: "A 68-year-old woman with osteoarthritis and stage 3 CKD (eGFR 32) has been prescribed oral diclofenac 50mg three times daily for knee pain by her GP. She presents to the clinic with a creatinine rising from her baseline of 140 to 218 μmol/L over 2 weeks and mild ankle oedema. She reports her knee pain is much better on the diclofenac. What is the nurse's priority assessment and most appropriate action?",
    options: [
      "The pain control is good — continue diclofenac at the same dose and monitor renal function monthly",
      "Diclofenac (NSAID) is almost certainly causing the AKI (creatinine 140→218, 56% rise) through prostaglandin-dependent renal vasoconstriction — notify physician urgently. Diclofenac must be STOPPED. Alternative analgesia for knee OA in CKD: paracetamol (first-line, safe in CKD at standard doses), topical diclofenac gel (minimal systemic absorption), intra-articular corticosteroid injection, physiotherapy",
      "Reduce the diclofenac dose to once daily — lower doses are safe in CKD",
      "Switch to ibuprofen — it is a less potent NSAID and safer in CKD",
    ],
    correct: 1,
    explanation: "NSAID-INDUCED AKI in CKD — classic presentation. MECHANISM: Prostaglandins (PGE2, PGI2) are essential for maintaining renal blood flow in states of reduced perfusion (CKD, heart failure, dehydration, elderly). NSAIDs inhibit COX → reduced prostaglandins → afferent arteriole vasoconstriction → reduced GFR → AKI. Pre-existing CKD dramatically increases this risk. The 56% creatinine rise (140→218) in 2 weeks on diclofenac is almost certainly NSAID-related AKI. STOP diclofenac immediately. ALTERNATIVE ANALGESIA for knee OA in CKD: PARACETAMOL (first-line — safe in CKD, maximum 4g/day — reduce if also hepatic disease), TOPICAL DICLOFENAC GEL (minimal systemic absorption — much safer, may provide localised benefit), INTRA-ARTICULAR CORTICOSTEROID INJECTION (short-term relief, avoids systemic side effects), PHYSIOTHERAPY and weight loss. ALL systemic NSAIDs (including ibuprofen) are contraindicated in CKD with active renal deterioration — switching to ibuprofen does not solve the problem. Lower doses of oral NSAIDs still carry significant renal risk in CKD.",
    wrongExplanations: [
      "WRONG: Continuing diclofenac despite a 56% creatinine rise is dangerous — ongoing NSAID use in NSAID-induced AKI will cause progressive renal failure and potentially ESKD. Pain control does not justify ongoing renal damage.",
      "",
      "WRONG: Lower doses of oral NSAIDs still inhibit prostaglandins sufficiently to cause renal vasoconstriction and AKI in CKD. There is NO safe oral NSAID dose in established CKD with ongoing renal deterioration.",
      "WRONG: Ibuprofen is also an NSAID — it has the same mechanism of renal prostaglandin inhibition as diclofenac. Switching to ibuprofen does not protect the kidneys.",
    ],
  },
  {
    level: "Application",
    question: "A patient with metastatic breast cancer to the spine is admitted for pain control. She is currently on oral morphine immediate-release 10mg every 4 hours (total 60mg/day) but reports inadequate pain control (7/10) with 4 breakthrough doses of 10mg morphine in the last 24 hours (total additional 40mg). She is comfortable with oral medications. The palliative care team asks the nurse to calculate the new 24-hour morphine requirement and the new breakthrough dose. What are the correct calculations?",
    options: [
      "New 24-hour dose = 60mg regular + 40mg breakthrough = 100mg total. New breakthrough dose = 100/6 ≈ 17mg (round to 15-20mg). Convert to modified-release morphine 50mg twice daily with 15-20mg immediate-release for breakthrough",
      "The breakthrough doses should not be added to the regular dose — breakthroughs are separate and the regular dose stays at 60mg",
      "Increase regular morphine by 25% only — do not add the breakthrough doses",
      "The breakthrough doses indicate opioid tolerance — switch to a different opioid rather than increasing the dose",
    ],
    correct: 0,
    explanation: "OPIOID DOSE TITRATION for cancer pain — standard calculation. TOTAL 24-HOUR OPIOID CONSUMPTION: Regular dose (60mg) + Breakthrough doses used (4 × 10mg = 40mg) = TOTAL 100mg. This is the new 24-hour dose requirement. BREAKTHROUGH DOSE CALCULATION: 1/6 of total 24-hour dose = 100/6 = 16.7mg → round to 15-20mg immediate-release morphine as needed every 1-4 hours. CONVERTING TO MODIFIED RELEASE: 100mg/day total → morphine sulphate modified release (MST or MR morphine) 50mg twice daily (morning and evening), with 15-20mg immediate-release morphine for breakthrough. PRINCIPLE: If the patient is using >3 breakthrough doses per 24 hours regularly, this indicates the regular dose is insufficient — add the breakthrough doses used to the regular dose to calculate the new total. New breakthrough dose is always 1/6 of the new total 24-hour dose. This is standard palliative care prescribing.",
    wrongExplanations: [
      "",
      "WRONG: Breakthrough doses used indicate uncontrolled pain — they reflect additional medication requirements that should be incorporated into the regular dose. Leaving the regular dose unchanged while breakthrough requirements are high is inadequate pain management.",
      "WRONG: The 25% escalation rule is sometimes used but is less precise than calculating from actual opioid consumption. The standard practice in palliative care is to add the breakthrough doses to the regular dose for the most accurate titration.",
      "WRONG: Using multiple breakthrough doses reflects inadequate baseline dosing — not opioid tolerance requiring rotation. Opioid rotation is used for different indications: intolerable side effects, opioid-induced hyperalgesia, or when dose escalation is limited by side effects despite inadequate analgesia.",
    ],
  },
  {
    level: "Advanced",
    question: "A 72-year-old man with chronic obstructive pulmonary disease (COPD — FEV1 45% predicted) and chronic low back pain (facet joint arthropathy and lumbar canal stenosis) is prescribed gabapentin 300mg three times daily by his pain specialist, in addition to his current oxycodone modified-release 20mg twice daily. He presents 3 weeks later with his wife who reports he has been 'very sleepy, hard to wake, not himself.' Assessment shows RR 9/min, SpO2 88% on room air, PASERO sedation score 3. He is difficult to rouse. Which factor most significantly contributed to this clinical deterioration?",
    options: [
      "COPD exacerbation — the hypoxaemia is from worsening lung disease and requires bronchodilators and steroids",
      "The COMBINATION of oxycodone (opioid — respiratory depression) + gabapentin (additive respiratory depression and sedation) in a patient with COPD (reduced respiratory reserve) represents a HIGH-RISK triad that has caused opioid-related respiratory compromise. Gabapentinoids significantly increase the risk of respiratory depression when combined with opioids, especially in patients with underlying respiratory disease",
      "Oxycodone tolerance has reversed — the patient now needs dose reduction as a matter of course",
      "The gabapentin dose is subtherapeutic — higher doses should be trialled before attributing side effects to the combination",
    ],
    correct: 1,
    explanation: "OPIOID + GABAPENTINOID + COPD = HIGH-RISK COMBINATION. MECHANISM: Oxycodone (mu opioid receptor agonist) → respiratory depression (reduces respiratory rate and hypercapnic ventilatory response). Gabapentin (alpha-2-delta calcium channel modulator) → additive CNS depression and respiratory depression — multiple studies and pharmacovigilance data show gabapentinoids significantly increase opioid-related respiratory deaths, particularly in patients with underlying pulmonary disease. COPD → reduced respiratory reserve (FEV1 45% — compromised baseline). The COMBINATION creates a perfect storm: opioid suppression + gabapentinoid additive effect + impaired baseline respiratory function. MANAGEMENT: STOP OPIOID AND GABAPENTINOID (both contributing). Supplemental oxygen, stimulate patient, prepare naloxone. Titrate naloxone 0.04mg IV (careful — restoring respiratory drive in COPD may be complex). Monitor continuously. The FDA issued a safety communication in 2019 warning of the serious risks of combining opioids with gabapentinoids. NCLEX is increasingly testing this interaction as it is a major modern pharmacovigilance concern.",
    wrongExplanations: [
      "WRONG: COPD exacerbation would present with wheeze, increased dyspnoea, purulent sputum, fever — not the sudden onset sedation (PASERO 3), low RR (9) pattern that is characteristic of opioid/gabapentinoid CNS depression. COPD exacerbation does not cause PASERO 3.",
      "",
      "WRONG: Opioid tolerance does not reverse — tolerance causes REDUCED effect requiring HIGHER doses, not sedation. This patient is showing signs of opioid accumulation/toxicity, not tolerance reversal.",
      "WRONG: The patient is showing TOXICITY from the combination — increasing the gabapentin dose would be dangerous and potentially fatal. Clinical deterioration on a newly added gabapentinoid + opioid = stop/reduce both, not escalate.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is providing pain management education to a newly diagnosed patient with diabetic peripheral neuropathy. The patient describes burning, shooting pain in both feet that is worse at night, and an 'electric shock' sensation with any light touch to the feet. He is currently on metformin and has tried paracetamol and ibuprofen with minimal effect. Which initial pharmacological approach is MOST evidence-based for this specific type of pain?",
    options: [
      "Increase ibuprofen to maximum dose — NSAIDs are effective for most types of pain including neuropathic",
      "Start oral morphine modified-release — opioids are first-line for severe neuropathic pain",
      "Duloxetine (SNRI) or pregabalin/gabapentin — these are evidence-based FIRST-LINE treatments for diabetic peripheral neuropathy. NSAIDs and paracetamol have no specific efficacy for neuropathic pain mechanisms (sodium channel dysfunction, central sensitisation)",
      "Topical capsaicin cream 0.025% applied to both feet twice daily — this is the most appropriate initial treatment",
    ],
    correct: 2,
    explanation: "NEUROPATHIC PAIN from DIABETIC PERIPHERAL NEUROPATHY — specific treatment required. MECHANISM: Diabetic neuropathy causes: peripheral sensitisation (abnormal sodium channel activity in damaged nerves — burning, shooting pain), central sensitisation (central amplification), allodynia (A-beta fibre activation perceived as pain). WHY NSAIDs AND PARACETAMOL DON'T WORK: These analgesics work via prostaglandin inhibition and central analgesic mechanisms that do NOT address the aberrant nerve signalling of neuropathic pain. FIRST-LINE EVIDENCE-BASED TREATMENTS for DPN: DULOXETINE (SNRI — NNT ~5, TGA/FDA approved for DPN — also treats comorbid depression) or PREGABALIN/GABAPENTIN (alpha-2-delta calcium channel modulators — reduce abnormal neuronal firing — well-established for DPN). SNRIs or gabapentinoids should be the FIRST prescription for DPN. OPIOIDS: NOT first-line for neuropathic pain — reserve for cases where first-line agents fail. High-dose TOPICAL CAPSAICIN 8% (not 0.025%) is a second-line option for localised neuropathy but requires clinic application. Low-dose 0.025% cream has very limited evidence.",
    wrongExplanations: [
      "WRONG: NSAIDs at maximum dose have no specific mechanism of action for neuropathic pain (sodium channel dysfunction, central sensitisation). This patient has already tried NSAIDs with minimal effect — increasing the dose increases side effects without improving neuropathic analgesia.",
      "WRONG: Opioids are NOT first-line for diabetic neuropathy. Guidelines consistently place SNRIs (duloxetine) and gabapentinoids as first-line. Opioids carry addiction, dependence and side effect risks that outweigh their modest efficacy in neuropathic pain, especially as first-line treatment.",
      "",
      "WRONG: Low-dose capsaicin cream 0.025% has very limited evidence for DPN. High-dose capsaicin 8% patch (Qutenza) is a second-line option applied by healthcare professionals in clinic settings — not for self-application at home. First-line treatment is duloxetine or gabapentin/pregabalin.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is caring for an 82-year-old woman with advanced dementia in a residential aged care facility. She cannot verbally report pain but has been observed grimacing, moaning, resisting care and holding her right hip when repositioned. Her PAINAD score is 8/10. She has a known hip fracture from 3 months ago that was managed non-operatively. The nurse suspects she is in significant pain. The attending physician says 'She's demented — she doesn't know what's hurting her, just give some paracetamol.' What is the nurse's MOST appropriate response?",
    options: [
      "Accept the physician's assessment — the physician has prescribing authority and the nurse should follow the order",
      "Express concern directly: A PAINAD score of 8 indicates significant pain. Dementia does not reduce the neurological capacity to experience pain — it reduces the ability to REPORT it. This patient requires systematic pain assessment, adequate analgesic therapy beyond paracetamol alone for what appears to be ongoing fracture pain, and MDT review. Advocate for appropriate analgesia",
      "Administer the paracetamol and reassess — paracetamol is likely sufficient for this patient",
      "Increase the PAINAD monitoring frequency — more frequent observation will provide better data before escalating treatment",
    ],
    correct: 1,
    explanation: "PAIN IN ADVANCED DEMENTIA — a critical nursing advocacy situation. CORE PRINCIPLE: Dementia does NOT reduce the CAPACITY TO EXPERIENCE PAIN — it reduces the ability to SELF-REPORT pain. The pain pathways (peripheral nociceptors, spinal cord, thalamus, cortex) are intact in dementia — the verbal communication and recall systems are impaired. Patients with advanced dementia actually have ELEVATED pain behaviour responses to noxious stimuli. PAINAD SCORE 8/10 with observable pain behaviours (grimacing, moaning, hip guarding) in the context of a KNOWN HIP FRACTURE represents significant undertreated pain. The physician's dismissal ('she doesn't know what's hurting her') reflects a dangerous misconception that must be challenged professionally. NURSING ADVOCACY: Express concern with specific clinical evidence (PAINAD 8, specific behaviours, known hip fracture), request adequate analgesia review (at this level of PAINAD, paracetamol alone is unlikely to be sufficient — may need regular analgesics, review of whether surgical intervention is appropriate, review of physiotherapy input), request MDT review, document the concerns and the physician response. Accepting under-treatment of pain in dementia patients is a form of elder neglect.",
    wrongExplanations: [
      "WRONG: Following a physician's inadequate order without advocating for the patient represents abandonment of professional nursing responsibility. Nursing practice standards require nurses to be advocates for patients who cannot advocate for themselves — especially vulnerable populations like those with dementia.",
      "WRONG: A PAINAD score of 8 and observable pain behaviours in the context of a hip fracture represent pain that is unlikely to be adequately managed by paracetamol alone. Accepting this without advocating for escalation leaves the patient in distress.",
      "WRONG: More frequent monitoring without escalating treatment allows ongoing pain to continue. The existing data (PAINAD 8, behavioural indicators, known fracture) is sufficient to act. The nursing role is to treat the pain, not to collect more data while the patient suffers.",
    ],
  },
  {
    level: "Advanced",
    question: "A 45-year-old woman is in recovery following a femoral nerve block and spinal anaesthetic for right knee replacement. She is 3 hours post-operatively and reports that her right leg 'feels like dead wood' with no ability to flex the knee or dorsiflex the foot. She also reports that she is unable to void despite a strong urge to urinate. Her blood pressure is 92/58 (baseline 130/82). Which combination of concerns requires the most urgent immediate nursing assessment and action?",
    options: [
      "The hypotension is the most urgent concern — administer a IV fluid bolus immediately",
      "The urinary retention requires immediate catheterisation — insert a urinary catheter and monitor output",
      "SYSTEMATIC URGENT ASSESSMENT REQUIRED: (1) Hypotension (92/58 from baseline 130/82 — could be sympathetic block from spinal, haemorrhage, or cardiac cause — treat with IV fluids, positional change), (2) Motor and sensory block duration — femoral nerve block causes expected temporary motor block but bilateral profound motor block or block extending above expected level = HIGH SPINAL requiring emergency management, (3) Urinary retention — expected with spinal anaesthetic, catheterise if bladder distended and unable to void — but rule out cauda equina signs first. Notify anaesthetist urgently about hypotension and assess for high spinal block",
      "This is all expected post-spinal/nerve block — reassure the patient and monitor vital signs every 15 minutes",
    ],
    correct: 2,
    explanation: "COMPLEX POST-REGIONAL ANAESTHESIA ASSESSMENT: Multiple concurrent concerns requiring systematic prioritisation. HYPOTENSION (92/58 from 130/82 = 30% fall in SBP): CAUSES to exclude — sympathetic block from spinal (expected, treat with IV fluids ± vasopressors), haemorrhage (from surgical site — assess wound, drain, tachycardia), cardiac (MI — ECG), anaphylaxis (assess for skin changes, bronchospasm). MOTOR BLOCK: Femoral nerve block → expected unilateral quadriceps weakness (inability to flex knee) — this is normal. BILATERAL lower limb motor block or block extending higher than expected for spinal level = HIGH SPINAL BLOCK (potentially life-threatening — can cause respiratory arrest if phrenic nerves blocked). Assess: can patient feel and move toes bilaterally? Respiratory assessment? HIGH SPINAL = emergency — intubation may be needed. URINARY RETENTION: Expected post-spinal — bladder sensation and detrusor function blocked. Bladder scan, catheterise if urge present and cannot void — BUT if bilateral sensory/motor block extends unexpectedly high, exclude cauda equina-level involvement before attributing to routine spinal effect. ALL THREE issues require urgent anaesthetist notification. Treatment: IV fluid bolus, leg elevation (improves venous return), vasopressors if needed, catheterisation, ECG.",
    wrongExplanations: [
      "WRONG: IV fluid bolus for hypotension is appropriate but is only ONE component of a multi-system urgent assessment. The motor block and urinary retention also need immediate evaluation — particularly to exclude HIGH SPINAL BLOCK which can cause respiratory arrest.",
      "WRONG: Catheterisation for urinary retention is part of management but should follow assessment of the neurological picture — is this routine post-spinal retention or is there evidence of higher block level? The hypotension is also urgent and must be addressed simultaneously.",
      "",
      "WRONG: While some of these findings are expected after spinal anaesthetic, hypotension of 30% below baseline with motor block is NOT within 'expected normal limits.' BP 92/58 from 130/82 requires immediate assessment and action.",
    ],
  },
];

const clinicalPearls = [
  "The most important principle in pain management is also the most frequently violated: pain is what the patient says it is. Normal vital signs do not mean the patient is not in pain — they mean the patient's body has adapted to ongoing pain. A post-operative patient with a heart rate of 72 and pain score 8/10 is in as much pain as a patient with a heart rate of 120 and pain score 8/10. Treat the number the patient gives you, not the number on the monitor.",
  "PCA by proxy kills patients. The safety mechanism of patient-controlled analgesia is that a sedated patient cannot press the button — and a sedated patient should not receive more opioid. When a family member presses the button for a sleeping patient, they deliver opioid to someone whose level of consciousness suggests they are already at or near the ceiling of safe dosing. Educate the family every time, document it every time, and never accept 'but I was just trying to help' as an acceptable explanation.",
  "The opioid-gabapentinoid combination in a patient with COPD or sleep apnoea is one of the highest-risk polypharmacy situations in clinical practice. Gabapentinoids were once considered safe and non-addictive adjuvants. We now know they cause additive respiratory depression with opioids and have caused deaths — particularly in patients with underlying respiratory compromise. Monitor this combination with continuous SpO2 monitoring, use the lowest effective doses, and educate patients and families.",
  "Constipation is the opioid side effect that never goes away. Tolerance develops to nausea, sedation, euphoria, miosis. Tolerance does NOT develop to opioid-induced constipation — ever. Every patient starting opioids needs a stimulant laxative prescribed simultaneously. Not offered. Not discussed. Prescribed and started. A patient who has been on opioids for 3 months and has not had their constipation actively managed is a patient whose team has failed them.",
  "Naloxone is shorter-acting than most opioids. Morphine's analgesia lasts 4-6 hours. Naloxone's reversal lasts 30-90 minutes. A patient who is successfully reversed at 2am and watched for 20 minutes before the nurse returns to other duties will re-sedate when the naloxone wears off. After any naloxone administration, monitor continuously for minimum 2 hours and anticipate the need for repeat doses.",
  "Pain in patients with advanced dementia is one of the most consistently under-treated conditions in healthcare. The neurological capacity to experience pain is not impaired by dementia — the ability to report it verbally is. A PAINAD score of 8 in a patient with a known hip fracture is 8/10 pain. It requires the same urgency of response as an 8/10 from a patient who can speak. The nurse who advocates for adequate analgesia for a non-verbal dementia patient is practising the highest form of patient advocacy.",
  "The WHO analgesic ladder says 'by the clock, by the mouth, by the ladder.' The most commonly missed part is 'by the clock.' For persistent pain, scheduled regular analgesia maintains stable therapeutic drug levels and prevents the pain peak-and-valley cycle. A patient whose morphine is PRN four-hourly will always be behind the pain — waiting for pain to reach 7/10 before asking for medication, waiting for the nurse, waiting for the medication to take effect. Around-the-clock dosing with PRN breakthrough doses provides vastly superior pain control.",
];

export default function PainManagementPage() {
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
            <h1 className="font-black text-base text-gray-900">🩹 Pain Management</h1>
            <p className="text-xs text-gray-500">Physiological Integrity • Important ⭐⭐</p>
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
                🩹 Pain management is tested throughout NCLEX. Master pain assessment, WHO analgesic ladder, opioid safety, PCA management and multimodal analgesia!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most critical pain management safety points — these save lives and appear on NCLEX!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Pain Management!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review PCA safety, opioid side effects and neuropathic pain treatment." :
                        "Keep studying! Focus on pain assessment principles, opioid safety, PCA by proxy and naloxone use."}
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
