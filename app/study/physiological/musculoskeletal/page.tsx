"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Overview of Musculoskeletal Nursing",
    icon: "🦴",
    color: "blue",
    content: [
      "The musculoskeletal system provides structure, support, movement and protection — comprising bones (206 in adults), joints, muscles, tendons, ligaments and cartilage",
      "MUSCULOSKELETAL ASSESSMENT: Look (posture, deformity, swelling, bruising, muscle wasting, asymmetry), Feel (temperature, tenderness, crepitus, pulses), Move (active range of motion first, then passive — note any limitation, pain, crepitus)",
      "NEUROVASCULAR ASSESSMENT (5 P's of acute limb ischaemia/compartment syndrome): Pain (out of proportion), Pallor, Pulselessness, Paraesthesia (numbness/tingling — nerve ischaemia), Paralysis (late — muscle ischaemia). Also check: Pressure (capillary refill <2 seconds), Poikilothermia (coolness)",
      "CAPILLARY REFILL TIME: Normal <2 seconds. Press nail bed for 5 seconds, release — colour should return within 2 seconds. Prolonged = poor perfusion",
      "BONE HEALING PHASES: Haematoma formation (immediate), Fibrocartilaginous callus (days to weeks), Bony callus (weeks to months), Bone remodelling (months to years). Complete healing: simple fractures 6-8 weeks. Femur/pelvis: 3-6 months",
      "FACTORS AFFECTING BONE HEALING: Age (elderly slower), nutritional status (protein, calcium, vitamin D, vitamin C), blood supply to fracture site, immobilisation, infection, smoking (delays healing significantly), corticosteroids, NSAIDs (controversial — may impair early healing), diabetes",
      "NCLEX heavily tests: Compartment syndrome recognition and emergency fasciotomy, fat embolism syndrome, fracture management and complications, osteoporosis, cast and traction nursing, joint replacement complications and rheumatological conditions",
    ],
  },
  {
    title: "Fractures — Classification and Assessment",
    icon: "🦴",
    color: "red",
    content: [
      "FRACTURE: Break in the continuity of bone. Can be complete (bone completely broken) or incomplete (e.g., greenstick — children, stress fracture)",
      "FRACTURE CLASSIFICATION by pattern: Transverse (across bone), Oblique (diagonal), Spiral (twisting force — consider non-accidental injury in children), Comminuted (multiple fragments), Segmental (two fracture lines isolating a segment), Impacted (fragments driven together), Avulsion (fragment pulled off by tendon/ligament)",
      "OPEN (COMPOUND) FRACTURE: Bone communicates with external environment through a wound. Gustilo-Anderson classification (I, II, IIIA, IIIB, IIIC). HIGH INFECTION RISK — urgent wound care, IV antibiotics (first-generation cephalosporin), tetanus prophylaxis, urgent surgical debridement within 6 hours (previously — modern evidence suggests within 24 hours for clean wounds)",
      "CLOSED FRACTURE: Intact skin. Less infection risk but internal haemorrhage still possible",
      "HIGH-RISK FRACTURES for haemorrhage: Femur fracture (can lose 1-1.5L blood into thigh), Pelvis fracture (can lose 3-4L blood — haemodynamic shock), Open fractures (external blood loss), Multiple fractures (cumulative blood loss)",
      "PATHOLOGICAL FRACTURE: Fracture through abnormal bone (tumour, osteoporosis, Paget's disease, infection). Often occurs with minimal or no trauma — consider when fracture mechanism disproportionate to injury",
      "STRESS FRACTURE: Repeated microtrauma to bone — common in metatarsals (march fracture), tibia, femoral neck. Common in distance runners, military recruits. MRI or bone scan for diagnosis (plain X-ray often negative initially)",
      "ASSESSMENT: Deformity, Swelling, Bruising, Crepitus (do NOT elicit deliberately — painful and can cause further damage), Neurovascular status (5 P's), Skin integrity, Mechanism of injury",
      "IMAGING: Plain X-ray (minimum two views at right angles — AP and lateral). CT (complex fractures, spine, pelvis). MRI (stress fractures, soft tissue, spinal cord). Bone scan (stress fractures, metabolic bone disease)",
    ],
  },
  {
    title: "Compartment Syndrome — Emergency Recognition",
    icon: "🚨",
    color: "red",
    content: [
      "COMPARTMENT SYNDROME: Increased pressure within a closed muscle compartment exceeding perfusion pressure → ischaemia of muscles and nerves → irreversible damage if not treated within 6 hours",
      "CAUSES: Fractures (tibia is most common — 40% of compartment syndrome), crush injuries, reperfusion after arterial occlusion, burns, tight casts/dressings, prolonged limb compression (position of patient during surgery, alcohol/drug-induced coma), intravenous infiltration, animal bites",
      "CLASSIC SIGNS — the 6 P's: PAIN (the most important early sign — DISPROPORTIONATE to the injury, CONSTANT not episodic, WORSENED by PASSIVE STRETCH of muscles in the affected compartment — THIS IS THE KEY SIGN), Pressure (tense woody-hard compartment on palpation), Paraesthesia (numbness, tingling — early nerve involvement), Pallor, Pulselessness (LATE sign — arterial pulses may be preserved until very late), Paralysis (LATE sign — muscle ischaemia progresses to necrosis)",
      "PASSIVE STRETCH TEST: Most sensitive early clinical test. Passively stretch the muscles of the affected compartment — if this reproduces or worsens pain = POSITIVE = compartment syndrome until proven otherwise",
      "COMPARTMENT PRESSURE MEASUREMENT: Normal: <10 mmHg. Fasciotomy threshold: >30 mmHg OR within 30 mmHg of diastolic BP (ΔP <30). In practice: clinical diagnosis should drive decision — do not wait for formal pressure measurement if clinical signs are compelling",
      "FASCIOTOMY: EMERGENCY SURGICAL DECOMPRESSION — the ONLY definitive treatment. Incisions through skin and fascia to release all compartments. Must be performed within 6 hours (preferably earlier) to prevent irreversible muscle necrosis and nerve damage",
      "CONSEQUENCES of missed/delayed compartment syndrome: Volkmann's ischaemic contracture (forearm), foot drop (anterior compartment of leg), rhabdomyolysis (AKI from myoglobin), nerve damage (permanent sensory/motor deficit), infection (ischaemic tissue), amputation",
      "CAST MANAGEMENT to prevent compartment syndrome: Bivalve (split) a cast if swelling occurs and neurovascular signs develop. NEVER ignore a patient who reports increasing pain in a cast — reassess neurovascular status immediately",
      "NURSING ACTIONS: Assess neurovascular status every 1-2 hours in at-risk patients (fresh fracture, tight cast, crush injury), elevate limb to heart level ONLY (NOT above — this reduces perfusion pressure further), REMOVE all circumferential dressings and bivalve cast, notify surgeon IMMEDIATELY, prepare for emergency fasciotomy",
    ],
  },
  {
    title: "Fat Embolism Syndrome (FES)",
    icon: "⚡",
    color: "red",
    content: [
      "FAT EMBOLISM SYNDROME (FES): Fat droplets enter the circulation following long bone fractures or orthopaedic procedures → lodge in pulmonary and cerebral microcirculation → inflammatory cascade → organ dysfunction",
      "TIMING: Onset 24-72 hours post-fracture (rarely >3 days). Classic 'lucid interval' — patient initially appears well after fracture, then deteriorates",
      "CAUSES: Long bone fractures (femur most common — up to 10% risk of FES), pelvis fractures, bilateral tibia fractures, intramedullary nailing procedures, joint replacement, liposuction, bone marrow harvest",
      "GURD CRITERIA for FES diagnosis — MAJOR criteria (need ≥1): Respiratory insufficiency (PaO2 <60 mmHg, FiO2 >0.4), Cerebral involvement (confusion, drowsiness, stupor unrelated to head injury), PETECHIAL RASH (axillae, conjunctivae, chest, neck — pathognomonic when present — appears in 50-60% of FES)",
      "MINOR criteria: Tachycardia (>110), Pyrexia (>38.5°C), Retinal changes (fat emboli on fundoscopy), Jaundice, Renal changes (oliguria, lipuria), Thrombocytopenia, High ESR, Fat in sputum/urine",
      "PETECHIAL RASH: The classic diagnostic clue — tiny non-blanching petechiae over the upper torso, axillae, subconjunctivae. Caused by fat emboli in dermal capillaries. Transient (24-72 hours). Check axillae in suspected FES — often where petechiae are most visible",
      "INVESTIGATIONS: ABG (hypoxaemia), CXR (bilateral infiltrates — 'snowstorm' — similar to ARDS, may be normal initially), CT chest, CT head (cerebral FES), FBC (thrombocytopenia, anaemia), U&E (renal involvement), lipase (elevated from fat breakdown), urinalysis (lipuria — fat droplets in urine)",
      "MANAGEMENT: SUPPORTIVE — no specific treatment. Supplemental oxygen (high-flow), intubation/ventilation if respiratory failure. IV fluids, haemodynamic support. Lung-protective ventilation if ARDS develops. Corticosteroids (controversial — may reduce inflammation)",
      "PREVENTION: EARLY FRACTURE FIXATION (within 24-48 hours of femur fracture in stable patients) significantly reduces FES incidence. Intramedullary nailing technique modifications reduce fat embolism during surgery",
    ],
  },
  {
    title: "Fracture Complications — DVT, Avascular Necrosis and Non-Union",
    icon: "⚠️",
    color: "orange",
    content: [
      "DEEP VEIN THROMBOSIS (DVT): MOST COMMON complication of lower limb fractures and orthopaedic surgery. Virchow's triad: stasis (immobility), hypercoagulability (trauma response), endothelial damage. DVT prophylaxis is MANDATORY for all orthopaedic fracture patients",
      "VTE PROPHYLAXIS: Low molecular weight heparin (enoxaparin) — standard for most fractures and joint replacement. Duration: hip replacement/fracture — 35 days, knee replacement — 14 days. Mechanical — graduated compression stockings (TED stockings), intermittent pneumatic compression (IPC) devices. Aspirin (lower risk cases, after initial LMWH period). Early mobilisation",
      "CONTRAINDICATIONS to LMWH: Active bleeding, severe thrombocytopenia, recent intracranial surgery. Use mechanical prophylaxis alone in these cases",
      "AVASCULAR NECROSIS (AVN/Osteonecrosis): Disruption of blood supply to bone → bone ischaemia → cell death → bone collapse. MOST COMMON SITES: Femoral head (most common site overall — following femoral neck fracture or hip dislocation), Scaphoid (following scaphoid fracture — blood supply enters distally), Talus, Humeral head, Lunate (Kienböck's disease)",
      "FEMORAL NECK FRACTURE and AVN: High risk because femoral head blood supply (medial femoral circumflex artery) can be disrupted by the fracture. Intracapsular femoral neck fractures (Garden III and IV) have high AVN risk — often treated with hemiarthroplasty/total hip replacement rather than fixation",
      "SCAPHOID FRACTURE: Often missed on plain X-ray. Suspect in any patient with anatomical snuffbox tenderness after wrist injury, even if X-ray negative. Risk of AVN increases with delayed diagnosis and treatment. MRI if X-ray negative but clinical suspicion high. Cast immobilisation or surgical fixation",
      "NON-UNION: Failure of fracture to heal within expected time. Causes: poor blood supply, infection, excessive mobility at fracture site, bone loss, systemic factors (osteoporosis, diabetes, smoking, poor nutrition, NSAIDs long-term). Treatment: bone grafting, electrical bone stimulation, optimise nutrition and address systemic factors",
      "MALUNION: Fracture heals in abnormal position — deformity, shortening, angulation. May require corrective osteotomy",
      "REFLEX SYMPATHETIC DYSTROPHY (Complex Regional Pain Syndrome/CRPS): Disproportionate pain, allodynia (pain from non-painful stimuli), autonomic changes (colour, temperature, sweating), oedema, osteoporosis. Poorly understood. Treatment: physiotherapy, pain management, sympathetic nerve blocks",
    ],
  },
  {
    title: "Osteoporosis",
    icon: "🦴",
    color: "purple",
    content: [
      "OSTEOPOROSIS: Reduced bone mineral density (BMD) and microarchitectural deterioration → increased fracture risk. Bone density T-score: Normal ≥-1.0. Osteopenia -1.0 to -2.5. OSTEOPOROSIS ≤-2.5. Severe/established osteoporosis = T-score ≤-2.5 + fragility fracture",
      "FRAGILITY FRACTURE: Fracture from low-energy trauma (fall from standing height or less) — virtually diagnostic of osteoporosis. Most common sites: VERTEBRAL (most common overall — often painless), HIP (most morbid — 30% 1-year mortality), WRIST (Colles' fracture — most common in younger postmenopausal women), RIB, PELVIS",
      "RISK FACTORS for osteoporosis: Age (bone mass peaks at 30, declines thereafter), Female sex (oestrogen protects bone — menopause accelerates loss), POSTMENOPAUSE (most important modifiable factor addressed by HRT), Smoking, Alcohol, Low BMI, Immobility, Family history, Corticosteroid use (most common drug cause — >5mg prednisolone/day for >3 months), Malabsorption (coeliac, IBD), Rheumatoid arthritis, Hypogonadism, Secondary causes (hyperthyroidism, hyperparathyroidism, multiple myeloma)",
      "DEXA SCAN (Dual Energy X-ray Absorptiometry): Gold standard for BMD measurement. Sites: lumbar spine (L1-L4) and hip (femoral neck). Results as T-score (compared to young healthy adult) and Z-score (compared to age-matched peers). Z-score <-2.0 = below expected for age → investigate secondary causes",
      "FRAX SCORE: WHO tool — calculates 10-year probability of major osteoporotic fracture and hip fracture using clinical risk factors ± DEXA. Used to guide treatment decisions",
      "TREATMENT: CALCIUM (1000-1200 mg/day from diet or supplements — calcium carbonate with food, calcium citrate without food), VITAMIN D (800-1000 IU/day — maintains calcium absorption), BISPHOSPHONATES (first-line pharmacological — alendronate, risedronate, zoledronic acid — inhibit osteoclasts, reduce fracture risk by 30-50%), DENOSUMAB (monoclonal antibody against RANK-L — injectable 6-monthly — effective in severe osteoporosis), TERIPARATIDE (PTH analogue — anabolic — builds new bone — for severe cases), HORMONE REPLACEMENT THERAPY (HRT — postmenopausal women — effective but consider risks)",
      "BISPHOSPHONATE SIDE EFFECTS: Oesophageal irritation (take with full glass of water, remain upright 30-60 min), atypical femoral fracture (subtrochanteric — with long-term use >5 years), osteonecrosis of the jaw (rare — higher risk with IV bisphosphonates + dental procedures), hypocalcaemia",
      "NURSING: Fall prevention programme (most important intervention — lighting, non-slip mats, rails, footwear, vision correction, medication review — sedatives/antihypertensives), hip protectors, patient education (diet, weight-bearing exercise, smoking cessation, alcohol moderation), medication adherence (bisphosphonates — weekly or monthly dosing improves compliance)",
    ],
  },
  {
    title: "Hip Fracture — Assessment and Management",
    icon: "🦴",
    color: "red",
    content: [
      "HIP FRACTURE: Fracture of the proximal femur — one of the most serious injuries in elderly patients. MORTALITY: 30-day mortality 5-10%, 1-year mortality 20-30%. Major cause of morbidity and loss of independence in older adults",
      "CLASSIFICATION: INTRACAPSULAR (femoral neck — Garden classification I-IV — high AVN risk for Garden III-IV) vs EXTRACAPSULAR (intertrochanteric, subtrochanteric — lower AVN risk, higher blood loss)",
      "CLINICAL PRESENTATION: Fall (usually), shortened and EXTERNALLY ROTATED lower limb (classic — due to pull of iliopsoas muscle in displaced fractures), inability to weight-bear, groin pain, thigh pain, hip tenderness. Undisplaced fractures — may still be able to weight-bear with minimal pain (easily missed — maintain suspicion after fall in elderly)",
      "IMAGING: Plain X-ray hip and pelvis (AP + lateral). If X-ray NEGATIVE but strong clinical suspicion → MRI (most sensitive — detects occult fractures within hours) or CT (alternative)",
      "SURGICAL MANAGEMENT: Aim for surgery within 36-48 hours (Best Practice Tariff in UK). Surgery ideally within 24 hours improves outcomes. INTRACAPSULAR: Undisplaced (Garden I-II) → dynamic hip screw or cancellous screws. Displaced (Garden III-IV) → HEMIARTHROPLASTY (cemented — elderly, lower functional demand) or TOTAL HIP REPLACEMENT (younger, higher function). EXTRACAPSULAR (intertrochanteric) → Dynamic Hip Screw (DHS) or Intramedullary nail (Gamma nail)",
      "PRE-OPERATIVE MANAGEMENT: IV fluids (nil by mouth for surgery), analgesia (femoral nerve block — excellent pain control before surgery), DVT prophylaxis, pressure injury prevention, catheter (urinary retention, fluid balance), bloods (FBC, U&E, crossmatch), ECG, optimise medical comorbidities",
      "POST-OPERATIVE MANAGEMENT: Early mobilisation (physiotherapy day 1 post-op — 'hip fracture bundle'), weight-bearing as per surgeon (most patients can weight-bear from day 1), DVT prophylaxis (LMWH 35 days), pressure injury prevention, delirium prevention and management (hip fracture = high delirium risk), nutritional support, osteoporosis treatment (often first recognised at hip fracture presentation — start bisphosphonate + calcium + vitamin D)",
      "HIP FRACTURE COMPLICATIONS: Delirium (30-50% of elderly hip fracture patients), pressure injuries, pneumonia, DVT/PE, urinary tract infection, anaemia (surgical blood loss), wound infection, prosthetic joint dislocation, AVN (intracapsular), peri-prosthetic fracture",
    ],
  },
  {
    title: "Total Joint Replacement — Hip and Knee",
    icon: "🔧",
    color: "purple",
    content: [
      "TOTAL HIP REPLACEMENT (THR/THA): Replacement of femoral head and acetabulum with prosthetic components. Indications: severe OA (most common), RA, AVN, failed previous surgery, hip fracture",
      "HIP REPLACEMENT PRECAUTIONS (posterior approach — most common): Avoid HIP FLEXION >90° (crossing legs, bending forward to pick objects from floor, sitting in low chairs), ADDUCTION (crossing midline), INTERNAL ROTATION. These movements risk PROSTHETIC HIP DISLOCATION. Duration of precautions: traditionally 6-12 weeks, though evidence for modern implants is evolving (some surgeons lift restrictions earlier). ANTERIOR APPROACH: Different restriction profile — avoid hip extension and external rotation instead",
      "SIGNS OF HIP PROSTHESIS DISLOCATION: Sudden severe hip pain, affected leg appears SHORTENED and EXTERNALLY ROTATED (posterior dislocation — most common) or internally rotated (anterior dislocation), inability to move the hip, palpable void or prominence. EMERGENCY: Do NOT attempt to reduce on ward — requires sedation/anaesthesia and imaging. Keep patient nil by mouth, notify surgeon urgently",
      "TOTAL KNEE REPLACEMENT (TKR/TKA): Replacement of femoral condyles, tibial plateau and (usually) patella surface. Indications: severe OA (most common), RA, post-traumatic arthritis",
      "KNEE REPLACEMENT POST-OPERATIVE NURSING: Continuous passive motion (CPM) machine — historical use (evidence now limited — early physiotherapy preferred), elevation of limb (reduces swelling), wound management, drain (vacuum drain — monitor output), DVT prophylaxis, pain management (multimodal — oral analgesia, nerve blocks, ice, elevation), physiotherapy from day 1 (active flexion/extension exercises)",
      "VTE PROPHYLAXIS post-joint replacement: LMWH (enoxaparin) — 35 days hip replacement, 14 days knee replacement. Aspirin-based protocols in some centres (controversial). Mechanical IPC devices in addition to pharmacological",
      "PERIPROSTHETIC JOINT INFECTION (PJI): Most serious complication. Early (<3 months) — surgical contamination, staph aureus. Late (>3 months) — haematogenous seeding. Signs: pain, swelling, warmth, wound discharge, fever (may be absent in chronic infection). Diagnosis: blood cultures, joint aspiration (WBC, Gram stain, culture), ESR, CRP. Treatment: surgical debridement/revision ± prolonged antibiotics. Dental procedures require antibiotic prophylaxis in some guidelines (controversial — individualised)",
      "CEMENT vs UNCEMENTED: Cemented — immediate stability, smaller fixation zone, good for elderly osteoporotic bone. Uncemented — bone ongrowth, longer-term fixation, requires good bone quality. Most modern hip replacements use hybrid (cemented femoral stem, uncemented acetabular cup)",
    ],
  },
  {
    title: "Cast and Traction Nursing",
    icon: "🏥",
    color: "blue",
    content: [
      "CAST TYPES: Plaster of Paris (POP) — cheaper, heavier, cannot get wet, takes 24-72 hours to set fully. Fibreglass — lighter, stronger, sets faster, can be water-resistant. Splints (backslab/half-cast) — used acutely to allow swelling before full circumferential cast",
      "CAST APPLICATION PRINCIPLES: Apply padding (webril, wool) evenly under cast, smooth cast, mould to anatomy, avoid wrinkles (pressure injury risk), ensure adequate circulation before casting, window/windowing technique for wound access",
      "CAST ASSESSMENT — frequent neurovascular checks: Colour, Capillary refill (<2 seconds), Sensation, Movement (ability to move fingers/toes), Pulses, Pain/pressure complaints",
      "CAST PROBLEMS AND ACTIONS: TIGHT CAST (pain, paresthesia, swelling) → BIVALVE (split cast on both sides) or COMPLETE REMOVAL. LOOSE CAST → request recast from surgeon. WET CAST → plaster: replace (loses strength and moulds), fibreglass: dry with hair dryer on cool",
      "CAST PATIENT EDUCATION: Keep limb elevated above heart level for first 24-48 hours (reduces swelling), wiggle fingers/toes to promote circulation, DO NOT INSERT OBJECTS under cast (coat hanger, pencils — pressure injuries), do not get plaster cast wet, report: increasing pain, numbness, tingling, swelling beyond cast, colour changes, foul odour (wound complication), cast damage",
      "SKIN CARE with cast: Apply lotion to skin at cast edges (prevents drying and cracking — do not apply directly under cast). Check skin at cast edges for pressure areas. Cast saw removal — reassure patient: oscillating blade does not rotate, vibrates, does not cut skin with correct technique",
      "TRACTION TYPES: SKIN TRACTION (adhesive/non-adhesive strapping to skin — maximum 5-7kg): Buck's traction (longitudinal), Hamilton-Russell traction. Limited weight, risk of skin breakdown. SKELETAL TRACTION (pin through bone — Steinmann pin, Kirschner wire — greater weight possible): Balanced skeletal traction for femur fractures (90-90 traction), skull tongs (cervical spine)",
      "TRACTION NURSING CARE: Maintain correct weights and direction (never remove weights unless ordered), keep weights hanging freely (never rest on floor or bed), foot of bed elevated (counter-traction), check pin sites daily (redness, discharge, osteomyelitis risk — pin site care protocol), prevent complications (pressure injuries, DVT, constipation, urinary retention, pneumonia from immobility), correct positioning to maintain traction effectiveness",
    ],
  },
  {
    title: "Rheumatoid Arthritis (RA)",
    icon: "🔴",
    color: "orange",
    content: [
      "RHEUMATOID ARTHRITIS: Chronic systemic AUTOIMMUNE disease causing synovial inflammation → joint destruction. Affects 1% of population, female predominance (3:1), peak onset 40-60 years",
      "PATHOPHYSIOLOGY: Autoantibodies (RF, anti-CCP) + T-cell activation → synovial inflammation (pannus formation) → cartilage and bone destruction. TNF-alpha and IL-6 are key inflammatory cytokines (hence TNF inhibitors are highly effective)",
      "CLINICAL FEATURES: SYMMETRICAL POLYARTHRITIS (both hands/wrists involved — distinguishes from OA which is asymmetric), MORNING STIFFNESS lasting >1 hour (decreases with activity — inflammatory pattern — vs OA stiffness <30 min), small joints of hands and feet (MCPs, PIPs, MTPs), wrists, also knees, shoulders, cervical spine (ATLANTOAXIAL SUBLUXATION — C1-C2 instability from RA — important pre-operatively)",
      "JOINT DEFORMITIES in RA: Ulnar deviation (fingers deviate toward little finger), Swan-neck deformity (PIP hyperextension, DIP flexion), Boutonnière deformity (PIP flexion, DIP hyperextension), Z-thumb deformity, Hallux valgus (bunion)",
      "EXTRA-ARTICULAR MANIFESTATIONS: Rheumatoid nodules (subcutaneous, extensor surfaces — pathognomonic), Anaemia of chronic disease, Interstitial lung disease (ILD — significant cause of morbidity), Pleural effusion, Vasculitis, Dry eyes/mouth (secondary Sjögren's), Cardiac (pericarditis, myocarditis, increased cardiovascular risk), Episcleritis/scleritis, Splenomegaly + neutropenia (Felty's syndrome)",
      "INVESTIGATIONS: RF (rheumatoid factor — positive in 70-80% — not specific, present in other conditions), anti-CCP (anti-cyclic citrullinated peptide — more SPECIFIC — 95% specificity), raised CRP/ESR, FBC (normocytic anaemia, thrombocytosis), X-ray (periarticular osteoporosis, joint space narrowing, erosions), hand X-ray (gold standard for disease progression monitoring), ultrasound/MRI (detects synovitis and erosions earlier than X-ray)",
      "TREATMENT PYRAMID: NSAIDs (symptom control early) → DMARDs (Disease-Modifying Anti-Rheumatic Drugs — change disease course): METHOTREXATE (first-line DMARD — weekly dose, folic acid supplementation mandatory — reduces side effects, monitor FBC and LFTs), sulfasalazine, hydroxychloroquine, leflunomide. BIOLOGICS (if inadequate DMARD response): TNF inhibitors (adalimumab, etanercept, infliximab — increased infection risk including TB reactivation — screen for latent TB before starting), IL-6 inhibitors (tocilizumab), JAK inhibitors (tofacitinib, baricitinib). CORTICOSTEROIDS: Short-term bridges or intra-articular injections",
      "METHOTREXATE MONITORING: FBC and LFTs every 2-3 months (myelosuppression, hepatotoxicity risk). Folic acid 5mg once weekly (separate day from MTX). Contraindicated in pregnancy (teratogenic — highly effective contraception mandatory for women of childbearing age AND for their male partners). Avoid alcohol (worsens hepatotoxicity)",
    ],
  },
  {
    title: "Osteoarthritis (OA)",
    icon: "🦴",
    color: "blue",
    content: [
      "OSTEOARTHRITIS: Progressive degradation of articular cartilage with secondary bone changes. Most common joint disease. NOT primarily an inflammatory disease — but inflammation is present",
      "RISK FACTORS: Age (most important), Obesity (weight-bearing joint loading), Previous joint injury, Repetitive occupational stress, Female sex (knee OA), Family history, Congenital joint abnormalities",
      "CLINICAL FEATURES: Pain worsening with activity, relieved by rest (opposite to RA), MORNING STIFFNESS <30 MINUTES (differs from RA >1 hour), BONY ENLARGEMENT (Heberden's nodes at DIP, Bouchard's nodes at PIP — distinguishes OA from RA which spares DIPs), decreased range of motion, crepitus, asymmetric involvement",
      "MOST COMMONLY AFFECTED JOINTS: Knee (most common large joint), Hip, Lumbar spine, Cervical spine, Hands (DIP, PIP, first CMC — base of thumb), Feet (first MTP)",
      "X-RAY FEATURES — LOSS mnemonic: Loss of joint space, Osteophytes (bone spurs — lipping), Subchondral Sclerosis (dense bone beneath cartilage), Subchondral cysts (geodes). NOTE: X-ray severity does NOT correlate well with symptom severity",
      "MANAGEMENT PYRAMID: Non-pharmacological first (weight loss — most effective for knee OA, exercise — strengthening and aerobic both beneficial, physiotherapy, occupational therapy, walking aids, footwear modification, heat/cold therapy, TENS). Pharmacological (paracetamol, topical NSAIDs — first-line for knee OA, oral NSAIDs — short-term, duloxetine for central sensitisation, intra-articular corticosteroids — short-term relief, intra-articular hyaluronic acid — limited evidence). Surgical (total joint replacement — for severe OA not responding to conservative management)",
      "INTRA-ARTICULAR CORTICOSTEROID INJECTION: Temporary pain relief (4-12 weeks). Repeat injections increase cartilage damage risk. Maximum 3-4 injections per year per joint. May delay need for surgery",
      "OA vs RA DIFFERENTIATION: OA — morning stiffness <30 min, asymmetric, affects DIPs, weight-bearing joints, X-ray LOSS features, no systemic features. RA — morning stiffness >1 hour, symmetric, spares DIPs, systemic features, erosive X-ray changes, RF/anti-CCP positive",
    ],
  },
  {
    title: "Gout and Crystal Arthropathies",
    icon: "🔴",
    color: "red",
    content: [
      "GOUT: Deposition of monosodium urate (MSU) crystals in joints from hyperuricaemia → intense acute inflammatory arthritis. Most common inflammatory arthritis in adults",
      "RISK FACTORS: Male sex (oestrogen is uricosuric), obesity, purine-rich diet (red meat, organ meat, shellfish, anchovies), alcohol (especially beer — purine content + impairs urate excretion), diuretics (thiazide and loop — reduce urate excretion), aspirin (low-dose inhibits urate excretion), cyclosporin, renal failure, hypertension, CHF",
      "PATHOPHYSIOLOGY: Hyperuricaemia → MSU crystal deposition in joints and soft tissues → crystal phagocytosis by neutrophils → IL-1β and other cytokines released → acute inflammation",
      "ACUTE GOUT CLINICAL FEATURES: PODAGRA (first metatarsophalangeal joint — classic presentation — affected in 90% of cases at some point), extremely painful (often described as most severe pain experienced), swollen, erythematous, warm joint, low-grade fever. ONSET: Classically sudden — often wakes patient from sleep. TRIGGERS: Dehydration, alcohol, dietary excess, illness, surgery, diuretics, starting allopurinol (paradoxically — flushes crystals)",
      "INVESTIGATIONS: Serum uric acid (may be NORMAL or LOW during acute attack — not diagnostic acutely), joint aspiration (definitive — NEGATIVELY BIREFRINGENT needle-shaped crystals under polarised light microscopy), X-ray (punched-out erosions with overhanging edge — 'rat-bite' erosions — LATE chronic gout sign), CRP/ESR (elevated during attack), WCC elevated",
      "ACUTE GOUT TREATMENT: NSAIDs (naproxen, indomethacin — first-line if no contraindications — take EARLY, full dose), COLCHICINE (0.5mg 2-3 times daily — very effective, well tolerated at low dose — GI side effects with higher doses, contraindicated in severe renal/hepatic disease), CORTICOSTEROIDS (oral prednisolone or intra-articular — for contraindications to NSAIDs/colchicine), rest, elevation, ice",
      "URATE-LOWERING THERAPY (ULT): START after acute attack resolves (NOT during acute attack — can prolong/worsen the attack by mobilising urate). ALLOPURINOL (xanthine oxidase inhibitor — first-line) — start low (50-100mg), titrate to target uric acid <0.36 mmol/L (<6 mg/dL). Always co-prescribe anti-inflammatory prophylaxis (colchicine or NSAID) for first 3-6 months of allopurinol (prevents mobilisation flares). FEBUXOSTAT (alternative XO inhibitor). PROBENECID (uricosuric)",
      "ALLOPURINOL HYPERSENSITIVITY: Severe cutaneous adverse reactions (SCAR) — Steven-Johnson syndrome, DRESS syndrome. Higher risk in HLA-B*5801 carriers (Han Chinese, Thai, Korean — screen before prescribing). Start low, titrate slowly",
      "CHRONIC TOPHACEOUS GOUT: Tophi (deposits of MSU crystals) — firm nodular deposits in soft tissues, joints, olecranon bursae, Achilles tendon, pinnae of ears. Indicate inadequate urate control. Resolve with effective ULT",
      "PSEUDOGOUT (CPPD — Calcium Pyrophosphate Deposition Disease): Similar presentation to gout but affects different joints (knee most common, also wrist — rarely first MTP). Crystals are POSITIVELY BIREFRINGENT rhomboid-shaped calcium pyrophosphate dihydrate crystals. Chondrocalcinosis on X-ray (calcification of cartilage — menisci, triangular fibrocartilage of wrist)",
    ],
  },
  {
    title: "Spinal Conditions — Back Pain and Cord Compression",
    icon: "🔵",
    color: "purple",
    content: [
      "BACK PAIN: Extremely common — affects 80% of adults at some point. 90% of acute back pain resolves within 6 weeks with conservative management",
      "RED FLAGS in back pain (require urgent investigation — possible serious pathology): AGE >50 or <20 (uncommon mechanical cause), BILATERAL LEG SYMPTOMS (cauda equina syndrome), BLADDER/BOWEL DYSFUNCTION (cauda equina syndrome — EMERGENCY), SADDLE ANAESTHESIA (numbness of perineum, genitalia, inner thighs — cauda equina), PROGRESSIVE NEUROLOGICAL DEFICIT, FEVER and WEIGHT LOSS (malignancy, infection, TB), NIGHT PAIN (unrelenting pain not relieved by rest — malignancy, infection), HISTORY OF MALIGNANCY, IMMUNOSUPPRESSION or IV DRUG USE (infection — discitis, epidural abscess), STEROID USE (osteoporotic vertebral fracture), MORNING STIFFNESS >1 HOUR in YOUNG MAN (ankylosing spondylitis — inflammatory back pain)",
      "CAUDA EQUINA SYNDROME (CES): Compression of the cauda equina nerve roots — SURGICAL EMERGENCY. CAUSES: Large central disc herniation (most common), tumour, epidural haematoma/abscess, trauma. SYMPTOMS: Bilateral leg pain/weakness, URINARY RETENTION (most sensitive symptom — loss of urge to void, inability to void), faecal incontinence, SADDLE ANAESTHESIA (numbness in perineum, scrotum/labia, inner thighs), sexual dysfunction. MANAGEMENT: URGENT MRI SPINE (within hours), EMERGENCY SURGICAL DECOMPRESSION — outcomes dramatically better if surgery within 24-48 hours of symptom onset",
      "DISC HERNIATION: Nucleus pulposus protrudes through annulus fibrosus → compresses nerve root → radiculopathy. L4/5 and L5/S1 most common (sciatica — radiates down the leg in dermatomal distribution). Most resolve with 6-12 weeks conservative treatment (NSAIDs, physiotherapy, activity modification)",
      "EPIDURAL ABSCESS: Infection of epidural space — EMERGENCY. Causes: haematogenous spread (IV drug use, skin infections), iatrogenic (epidural catheter, spinal injection), direct spread (discitis, vertebral osteomyelitis). Staphylococcus aureus most common. Symptoms: fever, back pain, epidural tenderness, progressive neurological deficit. MRI spine URGENTLY. Treatment: IV antibiotics + surgical drainage. Delay = permanent paralysis",
      "ANKYLOSING SPONDYLITIS (AS): Seronegative spondyloarthropathy. Young men (20-40 years), HLA-B27 associated (90% of AS patients). Inflammatory back pain: gradual onset, bilateral SI joint pain, morning stiffness >1 hour, improves with exercise (opposite to mechanical), worsens with rest. BAMBOO SPINE on X-ray (late finding — bridging syndesmophytes). Uveitis is most common extraarticular feature. Treatment: NSAIDs, TNF inhibitors, IL-17 inhibitors (secukinumab)",
    ],
  },
];

const mnemonics = [
  {
    title: "Compartment Syndrome — 6 P's",
    acronym: "6PS",
    breakdown: ["Pain (disproportionate + passive stretch worsens)", "Pressure (tense, woody compartment)", "Paraesthesia (numbness — early nerve sign)", "Pallor", "Pulselessness (LATE)", "Paralysis (LATE)"],
    memory: "6 P's — Pain and Paraesthesia are EARLY signs. Pulselessness and Paralysis are LATE (already have ischaemia). PASSIVE STRETCH TEST — if worsens pain = compartment syndrome. FASCIOTOMY within 6 hours!",
    color: "red",
  },
  {
    title: "Osteoarthritis X-Ray — LOSS",
    acronym: "LOSS",
    breakdown: ["Loss of joint space", "Osteophytes (bone spurs)", "Subchondral Sclerosis", "Subchondral cysts (geodes)"],
    memory: "LOSS — the four OA X-ray features. Remember: X-ray severity does NOT correlate with symptom severity in OA. OA morning stiffness <30 min (vs RA >1 hour)!",
    color: "blue",
  },
  {
    title: "Cauda Equina Syndrome — RED FLAG",
    acronym: "BUSS",
    breakdown: ["Bladder dysfunction (urinary retention — most sensitive)", "Urinary incontinence (overflow)", "Saddle anaesthesia (perineum, inner thighs)", "Sexual dysfunction + bilateral leg symptoms"],
    memory: "BUSS — Bladder (retention), Urinary incontinence, Saddle anaesthesia, Sexual dysfunction = CAUDA EQUINA SYNDROME = SURGICAL EMERGENCY. Urgent MRI spine + emergency decompression within 24-48 hours!",
    color: "red",
  },
  {
    title: "Gout vs Pseudogout Crystals",
    acronym: "GNPPR",
    breakdown: ["Gout = Negatively birefringent Needle-shaped crystals (yellow when parallel to compensator)", "Pseudogout = Positively birefringent Rhomboid-shaped crystals (blue when parallel)", "Polarised light microscopy used for both", "Remember: Gout = first MTP (podagra), Pseudogout = Knee (most common)"],
    memory: "GNPPR — Gout Negative Needle, Pseudogout Positive Rhomboid. Under polarised light: Gout crystals are yellow (needle-shaped), Pseudogout crystals are blue (rhomboid). Different joints, different crystals!",
    color: "orange",
  },
];

const alerts = [
  { text: "COMPARTMENT SYNDROME: Pain out of proportion + passive stretch worsens pain = FASCIOTOMY EMERGENCY within 6 hours. NEVER elevate limb above heart level — this reduces perfusion pressure and worsens ischaemia!", severity: "high" },
  { text: "HIP REPLACEMENT DISLOCATION: Shortened + externally rotated leg after THR = DISLOCATION. Do NOT attempt to reduce on the ward. Keep nil by mouth, notify surgeon IMMEDIATELY, no movement of affected hip!", severity: "high" },
  { text: "CAUDA EQUINA SYNDROME: Urinary retention + saddle anaesthesia + bilateral leg symptoms = SURGICAL EMERGENCY. Urgent MRI spine within HOURS. Every hour of delay risks permanent bladder/bowel/sexual dysfunction!", severity: "high" },
  { text: "FAT EMBOLISM SYNDROME: Petechial rash over upper torso/axillae + confusion + hypoxia 24-72 hours after long bone fracture = FES. Check axillae — petechiae often most visible there!", severity: "high" },
  { text: "OPEN FRACTURE: IV antibiotics (first-generation cephalosporin) + tetanus prophylaxis IMMEDIATELY. Wound irrigation, sterile dressing, urgent surgical debridement. Do NOT probe or explore fracture wound on the ward!", severity: "high" },
  { text: "EPIDURAL ABSCESS: Fever + back pain + progressive neurological deficit = URGENT MRI spine. IV antibiotics + surgical drainage. Delay = PERMANENT PARALYSIS!", severity: "high" },
  { text: "BISPHOSPHONATES: Take with FULL glass of water, REMAIN UPRIGHT 30-60 minutes after taking — prevents oesophageal ulceration. Calcium and iron supplements must be separated by 2 hours!", severity: "medium" },
  { text: "METHOTREXATE (RA): NEVER give more than ONCE WEEKLY — daily dosing causes fatal bone marrow suppression. Always prescribe folic acid on a DIFFERENT day to reduce toxicity. Monitor FBC and LFTs every 2-3 months!", severity: "high" },
  { text: "GOUT: Do NOT start allopurinol during acute gout attack — it worsens/prolongs the attack by mobilising urate. Treat acute attack first, start allopurinol 4-6 WEEKS after attack resolves with anti-inflammatory prophylaxis!", severity: "medium" },
  { text: "SCAPHOID FRACTURE: Anatomical snuffbox tenderness after wrist injury with NEGATIVE X-ray — order MRI. Untreated scaphoid fracture → avascular necrosis → chronic wrist disability!", severity: "medium" },
  { text: "HIP PRECAUTIONS after posterior THR: NO hip flexion >90°, NO adduction past midline, NO internal rotation — these movements dislocate the prosthesis. Educate patient before discharge!", severity: "medium" },
  { text: "TRACTION: NEVER remove traction weights unless ordered by surgeon. Keep weights hanging freely — resting on the floor negates traction completely. Check pin sites daily for infection!", severity: "low" },
];

const quizQuestions = [
  {
    level: "Knowledge",
    question: "A patient is in a full arm plaster cast following a distal radius fracture. Two hours after cast application, the patient reports severe pain in the forearm that is worse when the nurse gently extends the patient's fingers. The hand appears swollen with sluggish capillary refill of 4 seconds. What is the nurse's MOST urgent action?",
    options: [
      "Elevate the limb above heart level and apply ice — this will reduce the swelling",
      "Administer the prescribed PRN opioid analgesia — pain is expected after fracture",
      "Notify the physician IMMEDIATELY and prepare to bivalve (split) the cast — this presentation indicates compartment syndrome. Pain worsened by passive stretch is the KEY sign. Elevation above heart level is CONTRAINDICATED",
      "Reassess in 1 hour — early post-fracture swelling and pain is expected",
    ],
    correct: 2,
    explanation: "COMPARTMENT SYNDROME — classic early presentation. KEY FINDINGS: Pain out of proportion to injury, pain WORSENED by PASSIVE STRETCH (extending fingers passively stretches the flexor muscles of the forearm — if compartment pressure is elevated, this movement causes severe pain — this is the MOST SENSITIVE early clinical sign), sluggish capillary refill (4 seconds — normal <2 seconds), swollen hand (increasing pressure in compartment). IMMEDIATE ACTIONS: NOTIFY PHYSICIAN IMMEDIATELY, BIVALVE THE CAST (cut on both sides and spread to release circumferential pressure — this is emergency treatment for suspected compartment syndrome in a cast). DO NOT elevate above heart level — this reduces the arteriovenous pressure gradient and worsens perfusion to the ischaemic compartment. Standard fracture elevation (to heart level) is appropriate, but above heart level is harmful in compartment syndrome. Pain management alone is not adequate — fasciotomy may be needed if bivalving is insufficient. The window for fasciotomy to prevent permanent damage is 6 hours.",
    wrongExplanations: [
      "WRONG: Elevating ABOVE heart level is specifically CONTRAINDICATED in compartment syndrome — it reduces perfusion pressure (the arteriovenous gradient) and worsens ischaemia. Elevating to heart level is acceptable but above heart level worsens the condition.",
      "WRONG: Administering opioids for what appears to be compartment syndrome masks the cardinal symptom (pain) that is being used to monitor progression. Pain management alone while compartment syndrome progresses leads to irreversible Volkmann's contracture.",
      "",
      "WRONG: Waiting 1 hour when there are clear signs of compartment syndrome (passive stretch pain, impaired capillary refill, swelling) is dangerous. Compartment syndrome progresses rapidly — within 6 hours of ischaemia onset, irreversible muscle and nerve damage occurs.",
    ],
  },
  {
    level: "Knowledge",
    question: "A 78-year-old woman underwent right total hip replacement via the posterior approach 2 days ago. During repositioning, she suddenly screams in pain and the nurse observes her right leg appears shortened and externally rotated compared to the left. What is the nurse's MOST appropriate immediate response?",
    options: [
      "Attempt to gently rotate the leg back to neutral position — early reduction improves outcomes",
      "Administer IV morphine and reassess position in 30 minutes",
      "Stop all movement of the affected leg immediately, keep patient nil by mouth, notify the surgeon urgently — this presentation indicates prosthetic hip DISLOCATION",
      "Apply traction to the leg to maintain alignment while calling the surgeon",
    ],
    correct: 2,
    explanation: "PROSTHETIC HIP DISLOCATION — clinical diagnosis confirmed. EVIDENCE: Sudden severe pain, shortened leg, external rotation (POSTERIOR dislocation — femoral head has displaced posteriorly through the posterior capsule which was incised during posterior approach surgery). IMMEDIATE ACTIONS: STOP ALL MOVEMENT of the hip — further movement can damage neurovascular structures and make reduction more difficult. KEEP NIL BY MOUTH — reduction requires sedation/anaesthesia (closed or open reduction in theatre). NOTIFY SURGEON URGENTLY — needs imaging (X-ray to confirm and classify) and urgent reduction. The nurse must NEVER attempt manual reduction on the ward — this requires appropriate relaxation, imaging guidance and potentially surgical revision. Morphine is appropriate for pain but NOT before surgeon notification and nil by mouth status. Applying traction independently could worsen the dislocation and neurovascular injury.",
    wrongExplanations: [
      "WRONG: Attempting to manually rotate or reduce a dislocated prosthetic hip on the ward is absolutely contraindicated. It can worsen neurovascular damage, displace the prosthesis further and cause fracture. Reduction requires sedation, muscle relaxation and imaging guidance.",
      "WRONG: Administering morphine without notifying the surgeon and establishing nil-by-mouth status is inappropriate — reduction requires fasting. Pain management is appropriate after these priorities are established.",
      "",
      "WRONG: Independently applying traction to a dislocated prosthetic hip is not a nursing intervention and could cause further harm. The surgeon must be notified urgently.",
    ],
  },
  {
    level: "Application",
    question: "A 32-year-old male cyclist is admitted following a high-speed road traffic accident with a closed femur fracture and tibial plateau fracture. He is haemodynamically stable. Approximately 36 hours post-admission, he develops acute confusion, SpO2 drops to 88% on 4L nasal cannula, and the nurse notes tiny petechiae in the axillae and across his upper chest. Temperature is 38.6°C. Which diagnosis is MOST consistent with this clinical picture and what is the nurse's priority?",
    options: [
      "Deep vein thrombosis — apply compression stockings and start therapeutic anticoagulation",
      "Pulmonary embolism — prepare for CT pulmonary angiography urgently",
      "Fat embolism syndrome — apply high-flow oxygen via non-rebreather mask, notify physician urgently and prepare for possible intubation. The petechial rash in the axillae is PATHOGNOMONIC when combined with hypoxia and confusion after long bone fractures",
      "Chest infection — obtain sputum culture and start empirical antibiotics",
    ],
    correct: 2,
    explanation: "FAT EMBOLISM SYNDROME — diagnostic triad present. GURD CRITERIA MET: RESPIRATORY (SpO2 88%, hypoxaemia — major criterion), CEREBRAL (acute confusion unrelated to head injury — major criterion), PETECHIAL RASH (axillae and upper chest — pathognomonic when present — seen in 50-60% of FES cases, transient, check axillae carefully). TIMING: 36 hours post-long bone fractures (femur — highest risk) = CLASSIC FES timing (24-72 hours). MANAGEMENT: High-flow oxygen (NRB mask — target SpO2 ≥94%), notify physician urgently, prepare for possible intubation and mechanical ventilation (ARDS protocol), IV fluids for haemodynamic support, monitor closely. Treatment is SUPPORTIVE — no specific antidote. The petechial rash in the axillae is the KEY finding that distinguishes FES from PE (no petechiae in PE) and infection (no petechiae in chest infection). The combination of this rash + hypoxia + confusion after long bone fractures is essentially diagnostic.",
    wrongExplanations: [
      "WRONG: DVT does not cause confusion, petechiae or acute hypoxia. DVT presents with unilateral limb swelling, warmth and pain. Anticoagulation for assumed DVT without diagnosis would not address the acute respiratory and neurological deterioration.",
      "WRONG: PE is an important differential for post-fracture hypoxia — but PE does NOT cause petechiae. The petechial rash in the axillae combined with confusion and the characteristic 24-72 hour post-long bone fracture timing specifically indicates FES, not PE.",
      "",
      "WRONG: A chest infection could cause fever and hypoxia — but does NOT explain the petechiae in the axillae and upper chest. The petechiae are the diagnostic clue that elevates this beyond a respiratory infection.",
    ],
  },
  {
    level: "Application",
    question: "A 65-year-old woman with rheumatoid arthritis on weekly methotrexate 20mg and daily folic acid presents to the clinic. She reports accidentally taking methotrexate every day for the past week (7 consecutive doses instead of once weekly). She now has severe mouth ulcers, is bruising easily and her temperature is 38.9°C. FBC shows WBC 1.2 × 10⁹/L, neutrophils 0.4 × 10⁹/L, platelets 38 × 10⁹/L. What is the nurse's MOST urgent concern and action?",
    options: [
      "Contact the rheumatology team — this is a routine medication error requiring medication reconciliation",
      "This patient has METHOTREXATE TOXICITY from daily dosing — severe bone marrow suppression (pancytopenia), mucositis and fever. This is a medical emergency. Notify physician IMMEDIATELY for urgent admission, IV folinic acid (leucovorin rescue), protective isolation (neutropenia <0.5 × 10⁹/L approaching threshold), haematology input, FBC monitoring",
      "Administer folic acid 5mg and reassess — increased folic acid will counteract the methotrexate toxicity",
      "Reassure the patient — methotrexate toxicity from one extra week of dosing is mild and will resolve",
    ],
    correct: 1,
    explanation: "METHOTREXATE TOXICITY — potentially fatal emergency. Daily methotrexate dosing (instead of weekly) causes SEVERE BONE MARROW SUPPRESSION because: Methotrexate inhibits dihydrofolate reductase → inhibits DNA synthesis → most rapidly dividing cells (bone marrow, gut epithelium) affected. Daily dosing provides no recovery interval. CLINICAL FEATURES: Pancytopenia (WBC 1.2, neutrophils 0.4, platelets 38 — severely suppressed), severe mucositis (mouth ulcers), fever (infection in neutropenic patient). EMERGENCY ACTIONS: Urgent physician notification and admission, IV LEUCOVORIN (folinic acid) rescue (NOT oral folic acid — leucovorin bypasses the blocked dihydrofolate reductase and rescues folate-dependent pathways). Protective isolation (neutrophils 0.4 — approaching critical neutropenia <0.5 threshold). IV broad-spectrum antibiotics (febrile neutropenia protocol — fever + neutropenia = treat as infection until proven otherwise). G-CSF (granulocyte colony-stimulating factor) to stimulate marrow recovery. Monitor FBC daily. This is a life-threatening situation — patients have died from inadvertent daily methotrexate dosing.",
    wrongExplanations: [
      "WRONG: This is NOT a routine medication error requiring clinic-level management. Pancytopenia (neutrophils 0.4, platelets 38) with fever and mucositis from methotrexate toxicity is a medical EMERGENCY requiring urgent admission and IV leucovorin rescue.",
      "",
      "WRONG: Oral folic acid does NOT bypass the blocked dihydrofolate reductase — folic acid requires conversion by the same enzyme that methotrexate is blocking. LEUCOVORIN (folinic acid — already reduced) is the correct antidote. Oral folic acid at this stage is insufficient.",
      "WRONG: Seven days of daily methotrexate (7× the intended weekly dose exposure) has caused severe bone marrow suppression with clear laboratory evidence. This is NOT mild and will NOT self-resolve — it requires active treatment including leucovorin rescue.",
    ],
  },
  {
    level: "Application",
    question: "A 55-year-old obese man presents with a sudden onset of excruciating pain in his right first metatarsophalangeal joint (big toe) that woke him from sleep last night. The joint is red, hot, swollen and he cannot bear any weight on it. He is on hydrochlorothiazide for hypertension. His serum urate is 0.38 mmol/L (borderline elevated). The physician diagnoses acute gout. Which statement about management is MOST accurate?",
    options: [
      "Start allopurinol immediately to reduce uric acid levels and prevent further attacks",
      "Treat the acute attack with NSAIDs or colchicine. Do NOT start allopurinol or urate-lowering therapy during the acute attack — this can prolong and worsen it by mobilising urate crystals. Hydrochlorothiazide should be reviewed as it reduces urate excretion",
      "The normal-borderline urate level excludes gout — alternative diagnosis should be sought",
      "Prescribe oral prednisolone for 5 days — corticosteroids are the first-line treatment for acute gout",
    ],
    correct: 1,
    explanation: "ACUTE GOUT MANAGEMENT — critical sequencing principle. TREAT THE ACUTE ATTACK FIRST: NSAIDs (naproxen or indomethacin — start immediately at full dose) OR COLCHICINE (0.5mg two or three times daily — well-tolerated at low dose, excellent efficacy) OR CORTICOSTEROIDS (if NSAIDs/colchicine contraindicated — renal impairment, drug interactions). Do NOT start ALLOPURINOL during acute gout — it can paradoxically worsen or prolong the attack by mobilising urate crystals from tissue deposits into the joint. Start urate-lowering therapy 4-6 weeks AFTER attack resolves with anti-inflammatory prophylaxis cover. THIAZIDE DIURETIC: HCTZ reduces renal urate excretion → worsens hyperuricaemia. Review and consider switching antihypertensive if gout is recurrent. URIC ACID LEVEL: Serum urate can be NORMAL or EVEN LOW during an acute attack (mobilised into joint — serum level reflects current status poorly). Normal serum urate does NOT exclude gout. Diagnosis is confirmed by joint aspiration (negatively birefringent needle crystals) or clinical criteria. CORTICOSTEROIDS are not first-line but are appropriate when NSAIDs/colchicine are contraindicated.",
    wrongExplanations: [
      "WRONG: Starting allopurinol during an acute gout attack WORSENS or PROLONGS the attack — it mobilises urate crystals from tissue deposits into joints as serum levels rapidly drop. Allopurinol is started 4-6 weeks after the acute attack resolves, with anti-inflammatory prophylaxis.",
      "",
      "WRONG: Serum urate can be NORMAL or LOW during an acute gout attack — urate is being mobilised from serum into the joint. Normal urate does NOT exclude gout. Classic presentation (podagra, sudden onset nocturnal, extreme pain, warmth, erythema) is diagnostic even with borderline urate.",
      "WRONG: Corticosteroids are a valid treatment for acute gout but are NOT first-line when NSAIDs or colchicine are available and tolerated. They are reserved for patients who cannot take NSAIDs (peptic ulcer, renal failure, anticoagulation) or colchicine (severe renal/hepatic disease, drug interactions).",
    ],
  },
  {
    level: "Advanced",
    question: "A 48-year-old man is admitted following a motorcycle accident with a closed midshaft femur fracture. He is haemodynamically stable after resuscitation. His past medical history includes type 2 diabetes, and he smokes 20 cigarettes per day. The orthopaedic team plan intramedullary nailing under general anaesthesia tomorrow. Pre-operatively, what factors in this patient most significantly affect FRACTURE HEALING and what are the nursing implications?",
    options: [
      "His age is the most significant factor — nothing specific can be done pre-operatively",
      "Diabetes (impairs bone healing via multiple mechanisms including impaired angiogenesis, reduced osteoblast function, microangiopathy and increased infection risk) and smoking (impairs vascularity, reduces oxygen delivery, impairs osteoblast and osteoclast function) are the two most important modifiable factors. Nursing: optimise blood glucose pre- and post-operatively, smoking cessation advice, nutritional assessment, ensure vitamin D and calcium status",
      "The fracture type (closed vs open) is the most important factor — closed fractures always heal well regardless of patient factors",
      "Intramedullary nailing technique is the only factor that matters for healing — patient factors are less important",
    ],
    correct: 1,
    explanation: "FACTORS IMPACTING FRACTURE HEALING — key modifiable factors: DIABETES: Impairs fracture healing via multiple mechanisms: (1) Impaired angiogenesis (reduced VEGF — less new blood vessel formation at fracture site), (2) Reduced osteoblast differentiation and function (impaired bone formation), (3) Increased osteoclast activity (bone resorption), (4) Microangiopathy (reduces blood supply to fracture site), (5) Peripheral neuropathy (reduced neurotrophic support), (6) DRAMATICALLY increased infection risk (surgical site infection, osteomyelitis — 2-3× higher risk). Target glucose perioperatively: 6-10 mmol/L (HbA1c and recent glucose control matters — poorly controlled DM = worse healing). SMOKING: (1) Nicotine causes vasoconstriction → reduced blood supply to fracture site, (2) Carbon monoxide reduces tissue oxygen delivery, (3) Impairs osteoblast function and collagen synthesis, (4) Increases infection risk, (5) Shown to increase non-union risk by 2-3×. NURSING IMPLICATIONS: Glucose monitoring and optimisation (insulin sliding scale if indicated), smoking cessation counselling (even temporary cessation improves outcomes), nutritional assessment (protein, vitamin D, calcium, vitamin C — all essential for bone healing), pressure injury prevention (immobility), DVT prophylaxis, careful wound monitoring post-op.",
    wrongExplanations: [
      "WRONG: While age affects healing, it is not the most significant actionable factor in this scenario. Diabetes and smoking are the most clinically significant AND modifiable factors — both have strong evidence for impaired healing and increased complications. The nurse can actively address both.",
      "",
      "WRONG: Fracture type matters (open fractures have infection risk) but patient factors significantly affect healing of ANY fracture. Closed femur fractures in a diabetic smoker have significantly higher non-union and infection rates than in a healthy non-smoker.",
      "WRONG: Surgical technique is important but patient factors are equally (or more) important for long-term outcomes. The best surgical technique does not overcome the effects of uncontrolled diabetes or heavy smoking on bone healing.",
    ],
  },
  {
    level: "Advanced",
    question: "A 68-year-old woman with postmenopausal osteoporosis (T-score -3.1 at lumbar spine) has been on weekly alendronate 70mg for 6 years. She now presents with a 3-week history of new right thigh pain following a minor trip. X-ray shows a transverse fracture of the subtrochanteric femur with cortical thickening on the lateral aspect. She has no history of trauma. What is the diagnosis and how does this change her management?",
    options: [
      "This is an osteoporotic femur fracture — continue alendronate and repair with intramedullary nail",
      "This is an ATYPICAL FEMORAL FRACTURE (AFF) — a recognised complication of long-term bisphosphonate therapy. ALENDRONATE SHOULD BE STOPPED immediately. Surgical repair with intramedullary nail is appropriate but the long-term bisphosphonate strategy must be reviewed — switch to anabolic therapy (teriparatide — PTH analogue — builds new bone) or consider a bisphosphonate drug holiday after 5 years",
      "This is a pathological fracture from bone metastasis — urgent oncology review and whole body bone scan required",
      "Six years of alendronate is insufficient to cause this complication — continue the medication and investigate for other causes",
    ],
    correct: 1,
    explanation: "ATYPICAL FEMORAL FRACTURE (AFF) — classic presentation. DIAGNOSTIC FEATURES: Transverse (not spiral or oblique) subtrochanteric fracture, lateral cortical thickening/stress reaction (prodromal 'beaking'), minimal or no trauma, in a patient on long-term bisphosphonate therapy (>3-5 years). AFF MECHANISM: Bisphosphonates suppress bone turnover by inhibiting osteoclasts → over time, impairs the normal bone remodelling cycle that detects and repairs microfractures → microfractures accumulate in cortical bone → atypical stress fracture pattern. MANAGEMENT: STOP ALENDRONATE immediately (any bisphosphonate). SURGICAL FIXATION: Intramedullary nail (appropriate for this fracture pattern). SWITCH PHARMACOLOGICAL THERAPY: Teriparatide (PTH analogue — anabolic, stimulates bone formation — evidence suggests it promotes healing of AFF AND addresses underlying osteoporosis). Consider checking contralateral femur (AFF can be bilateral — may show lateral cortical changes/beaking on X-ray even without fracture yet). INFORM PATIENT: Explain the association, reassure that bisphosphonates are beneficial for most patients but reassess individual risk-benefit after 5 years (bisphosphonate drug holiday may be appropriate for lower-risk patients after 3-5 years of treatment).",
    wrongExplanations: [
      "WRONG: Continuing alendronate when an AFF has occurred perpetuates the mechanism causing the fracture. Alendronate should be stopped and the pharmacological strategy reassessed. Intramedullary nailing is appropriate for repair.",
      "",
      "WRONG: While pathological fracture from metastasis must be excluded, the classic features (transverse pattern, lateral cortical thickening, subtrochanteric location, long-term bisphosphonate use, minimal trauma) are pathognomonic of AFF. Oncological investigation is secondary to treating the AFF.",
      "WRONG: Long-term bisphosphonate therapy (>3-5 years) IS associated with AFF risk. Six years of therapy is within the established risk window. AFF risk is rare but real — the absolute risk is small but increases with duration of therapy.",
    ],
  },
  {
    level: "Advanced",
    question: "A nurse is reviewing a 24-year-old woman admitted following a fall from a horse. She has a T12 vertebral fracture with spinal cord injury — her lower limbs are completely flaccid with no reflexes, no sensation below T12 and she cannot void urine. It has been 6 hours since injury. Her BP is 88/52 and HR is 54. She is in no apparent pain despite the injury severity. Which combination of assessments is MOST critical at this stage?",
    options: [
      "The haemodynamic instability is likely from haemorrhage — urgent blood transfusion and fluid resuscitation to target SBP >110",
      "This patient has NEUROGENIC SHOCK (hypotension + BRADYCARDIA + warm, dry skin — from loss of sympathetic tone below injury level) rather than haemorrhagic shock (which causes tachycardia). Also has spinal shock (flaccid paralysis, areflexia) — this may improve. AND has urinary retention (requires urinary catheterisation immediately to prevent bladder overdistension). Target MAP ≥85 mmHg for 7 days using vasopressors (noradrenaline preferred) + careful IV fluid. Haemorrhage must also be excluded",
      "Start IV methylprednisolone immediately — high-dose steroids within 8 hours of injury improve neurological outcomes",
      "The absent reflexes confirm complete spinal cord injury — initiate palliative care discussion",
    ],
    correct: 1,
    explanation: "COMPLEX SCI PRESENTATION requiring multi-layered understanding: NEUROGENIC SHOCK: This patient's haemodynamics are classic neurogenic shock — HYPOTENSION + BRADYCARDIA + warm dry skin (vasodilated below injury level from loss of sympathetic outflow). HAEMORRHAGIC shock causes TACHYCARDIA (compensatory). The bradycardia in this patient distinguishes neurogenic from haemorrhagic shock. MANAGEMENT: Vasopressors (noradrenaline — alpha + beta → vasoconstriction + mild positive chronotropy), IV fluids (carefully — avoid fluid overload in already vasodilated patient). Target MAP ≥85 mmHg for 7 days (optimise spinal cord perfusion during vulnerable period). SPINAL SHOCK: Immediate complete flaccid paralysis + areflexia below injury level. THIS IS NOT PERMANENT — spinal shock resolves over hours to weeks. The BULBOCAVERNOSUS REFLEX returning marks the END of spinal shock. Only after spinal shock resolves can the true extent of cord injury be assessed. URINARY RETENTION: Bladder is atonic during spinal shock — URINARY CATHETERISATION IS URGENT (prevents bladder overdistension which can cause autonomic dysreflexia later). METHYLPREDNISOLONE: High-dose steroids for SCI are NO LONGER RECOMMENDED by major guidelines (AANS/CNS) — evidence of harm (infection, GI bleeding) outweighs uncertain neurological benefit. ABSENT REFLEXES during spinal shock do NOT confirm permanent complete injury — assessment after spinal shock resolution is required.",
    wrongExplanations: [
      "WRONG: The bradycardia (HR 54) clearly indicates neurogenic shock, NOT haemorrhagic shock. Haemorrhagic shock causes tachycardia. Aggressive fluid resuscitation without vasopressors is insufficient for neurogenic shock and may cause pulmonary oedema. Both causes of hypotension must be considered but neurogenic shock is clearly the primary diagnosis here.",
      "",
      "WRONG: High-dose methylprednisolone for acute SCI is NO LONGER recommended by major neurosurgical guidelines — the evidence shows unclear neurological benefit with clear harm (increased infection, GI bleeding, sepsis). This treatment should NOT be given.",
      "WRONG: Absent reflexes during the spinal shock phase DO NOT confirm permanent complete injury. Spinal shock causes temporary flaccid areflexia regardless of the true extent of cord damage. Assessment after spinal shock resolves (return of bulbocavernosus reflex) determines true injury level and completeness. Initiating palliative care discussion at 6 hours based on spinal shock findings is premature and inappropriate.",
    ],
  },
  {
    level: "Advanced",
    question: "A 72-year-old man with known ankylosing spondylitis (AS) is brought to the emergency department after a minor fall in the bathroom. He reports neck pain and is ambulating. GCS is 15. Cervical spine X-ray is reported as 'normal with degenerative changes consistent with AS.' The emergency physician says 'X-ray normal — discharge home with analgesia.' The nurse is concerned. What is the MOST appropriate nursing response?",
    options: [
      "Accept the physician's assessment — the X-ray is normal and the patient is neurologically intact",
      "Express concern to the physician — patients with ankylosing spondylitis are at EXTREMELY HIGH risk of cervical fracture after even MINOR trauma because the bamboo spine is rigid and brittle. Plain X-ray is often INADEQUATE for detecting AS-related cervical fractures — CT cervical spine is mandatory. Neurologically intact status can change rapidly with an unstable fracture",
      "Apply a soft cervical collar and discharge — this provides adequate stabilisation if there is a fracture",
      "Perform a neurological assessment — if normal, the X-ray is sufficient to exclude cervical fracture",
    ],
    correct: 1,
    explanation: "ANKYLOSING SPONDYLITIS + CERVICAL TRAUMA = HIGH-RISK scenario that requires CT not plain X-ray. MECHANISM: AS causes fusion of vertebral bodies (bamboo spine) and ankylosis of facet joints → the spine becomes a RIGID LEVER rather than a flexible structure. Minor trauma that would cause no injury to a normal spine can cause a TRANSVERSE FRACTURE through the fused bone (similar to a chalk stick breaking). These fractures: Are HIGHLY UNSTABLE (both columns fractured — transverse through the entire rigid segment), Occur with minimal trauma, Are often INVISIBLE on plain X-ray (the bony density changes and fracture line are poorly seen against the dense fused bone), Can present with MINIMAL pain initially (chronic pain from AS masks acute fracture pain), Can cause DELAYED neurological deterioration (cord compression may develop hours to days after the initial injury if fracture is unstable and managed inadequately). CT CERVICAL SPINE is MANDATORY in any AS patient with neck pain after trauma — even minor trauma, even with normal X-ray, even if neurologically intact. MRI should also be considered for soft tissue and cord assessment. The nurse's clinical concern here is appropriate and must be expressed to the physician.",
    wrongExplanations: [
      "WRONG: Accepting a normal plain X-ray as sufficient to exclude cervical fracture in an AS patient with neck pain after trauma is dangerous. Plain X-ray has documented poor sensitivity for AS-related cervical fractures. The risk-benefit of CT is strongly in favour of scanning.",
      "",
      "WRONG: A soft cervical collar provides INADEQUATE stabilisation for an unstable cervical fracture in AS. If there is an unstable cervical fracture, movement can cause cord compression. Rigid cervical immobilisation and urgent CT are required — not discharge with a soft collar.",
      "WRONG: A normal neurological examination at one time point does NOT guarantee that a cervical fracture is absent or stable. AS-related cervical fractures can cause delayed neurological deterioration hours to days later if the fracture is unstable. Normal neurology is reassuring but does not negate the need for CT.",
    ],
  },
];

const clinicalPearls = [
  "Compartment syndrome kills limbs and careers. The clinical sign that saves the limb is passive stretch — gently extending the fingers or dorsiflexing the foot in a patient with a forearm or leg fracture respectively. If this causes disproportionate pain, the compartment is compromised. The window for fasciotomy is 6 hours. Pulselessness is a late sign — do not wait for it. A patient who reports increasing pain in a cast deserves a neurovascular check within minutes, not hours.",
  "Hip replacement dislocation announces itself with a shortened externally rotated leg and a scream. The instinct to help by gently repositioning the leg is wrong — it causes further damage. The correct response is complete immobility, nil by mouth and urgent surgical notification. Nothing else. Reduction requires sedation, muscle relaxation and imaging — not nursing intervention at the bedside.",
  "Fat embolism syndrome hides behind the petechiae. When a young patient deteriorates 24-72 hours after a femur fracture with confusion and hypoxia, check the axillae. Petechiae in the axillae and upper chest wall are the specific finding that confirms FES — they are present in 50-60% of cases and are transient, so they may be missed if not specifically sought. They do not occur in PE or pneumonia.",
  "Methotrexate is taken once weekly — the single most important dispensing and administration fact about this drug. Patients who take it daily develop fatal bone marrow suppression. The packaging is specifically designed to prevent daily dosing. When a patient presents with pancytopenia, mouth ulcers and fever while on methotrexate, the first question is always: how often are they taking it? Leucovorin rescue and urgent admission are the treatment.",
  "The ankylosing spondylitis cervical spine after minor trauma is a trap that has paralysed patients who were sent home from the emergency department with normal plain X-rays. The bamboo spine fractures transversely and these fractures are invisible on plain X-ray but clearly visible on CT. Always request CT in any AS patient with neck pain after any trauma — even a fall from standing. Normal neurology at presentation does not exclude an unstable fracture.",
  "Allopurinol during an acute gout attack makes gout worse — not better. Starting urate-lowering therapy when there is an acute attack mobilises urate crystals from tissue deposits into the joint, prolonging and worsening the attack. The sequence is: treat the acute attack completely (NSAIDs or colchicine), wait 4-6 weeks, then start allopurinol with prophylactic anti-inflammatory cover for the first 3-6 months. This sequencing is consistently tested and consistently violated.",
  "The atypical femoral fracture is bisphosphonate therapy's late complication — presenting as a transverse subtrochanteric fracture with lateral cortical thickening after 5+ years of therapy. When this pattern appears, stop the bisphosphonate, fix the fracture with an intramedullary nail and switch to teriparatide (which both treats osteoporosis anabolically and promotes AFF healing). The contralateral femur should also be imaged — AFFs can be bilateral.",
];

export default function MusculoskeletalPage() {
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
            <h1 className="font-black text-base text-gray-900">🦴 Musculoskeletal</h1>
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
                🦴 Musculoskeletal nursing covers compartment syndrome, fractures, joint replacement, osteoporosis, gout, RA and spinal conditions — all tested on NCLEX!
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
              <p className="text-amber-700 text-sm font-medium">⚠️ These are the most critical musculoskeletal safety points — these save limbs, lives and appear on NCLEX!</p>
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
                    {score / filteredQuestions.length >= 0.8 ? "Excellent! You have mastered Musculoskeletal Nursing!" :
                      score / filteredQuestions.length >= 0.6 ? "Good work! Review compartment syndrome, FES, hip precautions and gout management." :
                        "Keep studying! Focus on compartment syndrome signs, fat embolism, hip dislocation, osteoporosis and methotrexate safety."}
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
