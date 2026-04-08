export interface Question {
  id: number;
  type: 'multiple-choice' | 'true-false';
  question: string;
  options?: string[];
  correctAnswer: string | boolean;
  explanation: string;
}

export const questions: Question[] = [
  // Multiple Choice Questions (20)
  {
    id: 1,
    type: 'multiple-choice',
    question: "What is the biological definition of Platelet-Rich Plasma (PRP)?",
    options: ["A synthetic growth factor serum", "An autologous concentration of platelets in a small volume of plasma", "A mixture of vitamins and minerals", "A type of stem cell therapy"],
    correctAnswer: "An autologous concentration of platelets in a small volume of plasma",
    explanation: "PRP is defined as an autologous (derived from the patient's own body) volume of plasma that has a platelet concentration above baseline levels. It leverages the body's innate regenerative capacity."
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: "What is the primary physiological function of platelets within the context of PRP therapy?",
    options: ["Oxygen transport", "Immune defense against bacteria", "Release of alpha-granules containing growth factors", "Regulation of blood glucose"],
    correctAnswer: "Release of alpha-granules containing growth factors",
    explanation: "Platelets contain alpha-granules that, upon activation, release essential growth factors (like PDGF, TGF-β, and IGF) which initiate the tissue repair cascade and cellular proliferation."
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "What is the specific role of Vascular Endothelial Growth Factor (VEGF) in tissue regeneration?",
    options: ["Decreasing inflammation", "Stimulating angiogenesis (new blood vessel formation)", "Reducing melanin production", "Paralyzing facial muscles"],
    correctAnswer: "Stimulating angiogenesis (new blood vessel formation)",
    explanation: "VEGF is a potent signaling protein that promotes angiogenesis. This process increases blood supply to the treated area, ensuring better oxygenation and nutrient delivery for healing."
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: "Which of these is a significant non-aesthetic therapeutic application of PRP?",
    options: ["Treatment of chronic migraines", "Orthopedic repair of tendons and ligaments", "Weight loss management", "Management of Type 1 Diabetes"],
    correctAnswer: "Orthopedic repair of tendons and ligaments",
    explanation: "Beyond aesthetics, PRP is extensively used in sports medicine and orthopedics to accelerate the healing of musculoskeletal injuries by concentrating growth factors at the site of injury."
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "PRP is classified as what type of treatment based on its source?",
    options: ["Allogeneic", "Xenogeneic", "Autologous", "Synthetic"],
    correctAnswer: "Autologous",
    explanation: "PRP is an autologous treatment, meaning the donor and the recipient are the same individual. This eliminates the risk of immune rejection or transmission of infectious diseases."
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: "After centrifugation, which component typically forms the bottom layer due to its higher density?",
    options: ["Platelets", "Leukocytes (WBCs)", "Erythrocytes (RBCs)", "Plasma"],
    correctAnswer: "Erythrocytes (RBCs)",
    explanation: "Erythrocytes (Red Blood Cells) are the densest component of whole blood. During centrifugation, centrifugal force drives them to the bottom of the tube."
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: "Which of the following is considered an absolute contraindication for PRP treatment?",
    options: ["Mild hypertension", "Pregnancy and lactation", "Vitamin C deficiency", "Localized acne"],
    correctAnswer: "Pregnancy and lactation",
    explanation: "Pregnancy and lactation are absolute contraindications. While PRP is autologous, the physiological changes during these periods and the lack of clinical safety studies justify excluding these patients."
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: "For a standard skin rejuvenation protocol, what is the recommended number of initial sessions?",
    options: ["1 session per year", "3 to 4 sessions spaced 3-4 weeks apart", "10 sessions daily", "Weekly sessions indefinitely"],
    correctAnswer: "3 to 4 sessions spaced 3-4 weeks apart",
    explanation: "A standard induction phase typically consists of 3-4 sessions. This allows the biological remodeling process to build upon each session for cumulative results."
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: "What is a common, expected immediate post-procedural reaction?",
    options: ["Permanent scarring", "Immediate disappearance of all wrinkles", "Transient erythema and mild edema", "Severe allergic shock"],
    correctAnswer: "Transient erythema and mild edema",
    explanation: "Erythema (redness) and edema (swelling) are transient and expected inflammatory responses to the micro-injections and the biological activity of the PRP."
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: "What is an essential post-treatment care instruction for a patient after facial PRP?",
    options: ["Intense sun exposure to activate the plasma", "Rigorous sun protection and hydration", "Immediate application of heavy makeup", "Exfoliating the skin with acid peels"],
    correctAnswer: "Rigorous sun protection and hydration",
    explanation: "Sun protection is crucial to prevent post-inflammatory hyperpigmentation (PIH), as the skin is temporarily more sensitive following the procedure."
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: "What is the primary objective of the centrifugation process in PRP preparation?",
    options: ["To heat the blood to body temperature", "To separate blood components based on their different densities", "To kill any bacteria in the sample", "To mix the blood with oxygen"],
    correctAnswer: "To separate blood components based on their different densities",
    explanation: "Centrifugation uses centrifugal force to sediment blood components at different rates according to their density, allowing for the isolation of the platelet-rich fraction."
  },
  {
    id: 12,
    type: 'multiple-choice',
    question: "Which type of vacuum tube is most commonly used for PRP collection?",
    options: ["Red cap (No additive)", "Blue cap (Sodium Citrate)", "Grey cap (Sodium Fluoride)", "Purple cap (EDTA)"],
    correctAnswer: "Blue cap (Sodium Citrate)",
    explanation: "Sodium Citrate acts as a reversible anticoagulant by chelating calcium. It is preferred for PRP because it preserves platelet integrity and morphology better than other additives."
  },
  {
    id: 13,
    type: 'multiple-choice',
    question: "What is the 'Buffy Coat' in a centrifuged blood sample?",
    options: ["The layer of pure red blood cells", "The thin layer containing leukocytes and platelets", "The topmost layer of clear plasma", "The clot at the bottom"],
    correctAnswer: "The thin layer containing leukocytes and platelets",
    explanation: "The Buffy Coat is the intermediate layer between the plasma and the erythrocytes. It contains the highest concentration of platelets and white blood cells (leukocytes)."
  },
  {
    id: 14,
    type: 'multiple-choice',
    question: "If a blood sample coagulates inside the tube before centrifugation, what is the status of the sample?",
    options: ["Ideal for high-quality PRP", "Can be used after vigorous shaking", "Inutile (Invalid for PRP preparation)", "It becomes a stem cell concentrate"],
    correctAnswer: "Inutile (Invalid for PRP preparation)",
    explanation: "Coagulation traps platelets within a fibrin mesh, making it impossible to separate and concentrate them into plasma. The sample must be discarded."
  },
  {
    id: 15,
    type: 'multiple-choice',
    question: "Which fraction of the centrifuged sample is utilized for PRP treatment?",
    options: ["The bottom red sediment", "The top translucent/yellowish plasma layer (enriched)", "The air at the top of the tube", "The glass of the tube"],
    correctAnswer: "The top translucent/yellowish plasma layer (enriched)",
    explanation: "The plasma layer (specifically the portion just above the buffy coat) contains the concentrated platelets and is the therapeutic fraction used for injection."
  },
  {
    id: 16,
    type: 'multiple-choice',
    question: "What is the primary difference between PRP and PPP (Platelet-Poor Plasma)?",
    options: ["PPP has more red blood cells", "PRP has a significantly higher platelet concentration", "PPP is synthetic", "There is no difference"],
    correctAnswer: "PRP has a significantly higher platelet concentration",
    explanation: "PRP (Platelet-Rich) is the fraction with concentrated platelets, while PPP (Platelet-Poor) is the remaining plasma with very few platelets, often discarded or used as a secondary treatment."
  },
  {
    id: 17,
    type: 'multiple-choice',
    question: "Which factor negatively impacts the quality of PRP by releasing unwanted intracellular contents?",
    options: ["Oxygenation", "Hemolysis (rupture of red blood cells)", "Refrigeration", "Sterilization"],
    correctAnswer: "Hemolysis (rupture of red blood cells)",
    explanation: "Hemolysis occurs when red blood cells rupture, releasing hemoglobin and other contents that can cause increased inflammation and oxidative stress, compromising the PRP quality."
  },
  {
    id: 18,
    type: 'multiple-choice',
    question: "Which biosecurity principle is fundamental during PRP preparation?",
    options: ["Reusing needles after washing", "Maintaining a strictly sterile and single-use environment", "Performing the procedure in a public area", "Mixing samples from different patients"],
    correctAnswer: "Maintaining a strictly sterile and single-use environment",
    explanation: "Strict asepsis and the use of sterile, single-use materials are mandatory to prevent iatrogenic infections and ensure patient safety."
  },
  {
    id: 19,
    type: 'multiple-choice',
    question: "What is a potential complication of including excessive Erythrocytes (RBCs) in the PRP injection?",
    options: ["Enhanced healing", "Increased pro-inflammatory response and pain", "Better skin color", "No effect"],
    correctAnswer: "Increased pro-inflammatory response and pain",
    explanation: "Excessive red blood cells in PRP can trigger an unwanted inflammatory response, leading to increased pain, swelling, and potentially suboptimal regenerative results."
  },
  {
    id: 20,
    type: 'multiple-choice',
    question: "What signal indicates an error in the centrifugation or collection process?",
    options: ["Golden yellow plasma", "Visible red clumps or a pinkish tint in the plasma (hemolysis)", "Clear separation of layers", "Transparent liquid"],
    correctAnswer: "Visible red clumps or a pinkish tint in the plasma (hemolysis)",
    explanation: "A pinkish tint (hemolysis) or red clumps indicate that erythrocytes have mixed with the plasma or ruptured, signaling an technical error that affects sample purity."
  },

  // True/False Questions (20)
  {
    id: 21,
    type: 'true-false',
    question: "PRP is a synthetic pharmacological product developed in a laboratory.",
    correctAnswer: false,
    explanation: "False. PRP is an autologous biological product, meaning it is derived from the patient's own blood and is not a synthetic drug."
  },
  {
    id: 22,
    type: 'true-false',
    question: "After centrifugation, the denser red blood cells settle at the bottom while the plasma stays at the top.",
    correctAnswer: true,
    explanation: "True. Centrifugation separates components based on density; erythrocytes (RBCs) are the heaviest and sediment at the base."
  },
  {
    id: 23,
    type: 'true-false',
    question: "PRP growth factors stimulate fibroblasts to produce collagen and elastin.",
    correctAnswer: true,
    explanation: "True. One of the main mechanisms of PRP is the activation of fibroblasts, the cells responsible for synthesizing the extracellular matrix and collagen."
  },
  {
    id: 24,
    type: 'true-false',
    question: "PRP is primarily used as a treatment for significant localized fat reduction (lipolysis).",
    correctAnswer: false,
    explanation: "False. PRP is a regenerative treatment for tissue repair and collagen induction; it does not have lipolytic properties for fat reduction."
  },
  {
    id: 25,
    type: 'true-false',
    question: "PRP can be used to stimulate dormant hair follicles in certain types of alopecia.",
    correctAnswer: true,
    explanation: "True. Growth factors in PRP promote hair follicle survival and stimulate the anagen (growth) phase of the hair cycle."
  },
  {
    id: 26,
    type: 'true-false',
    question: "Active pregnancy and lactation are considered contraindications for PRP therapy.",
    correctAnswer: true,
    explanation: "True. Due to hormonal shifts and a lack of safety data in these populations, PRP is generally avoided during pregnancy and breastfeeding."
  },
  {
    id: 27,
    type: 'true-false',
    question: "A single PRP session provides immediate and permanent removal of deep wrinkles.",
    correctAnswer: false,
    explanation: "False. PRP results are progressive and biological; they require multiple sessions and time for collagen remodeling to occur."
  },
  {
    id: 28,
    type: 'true-false',
    question: "Because PRP is autologous, the risk of allergic rejection is virtually non-existent.",
    correctAnswer: true,
    explanation: "True. Since the material comes from the patient's own body, the immune system recognizes it as 'self,' eliminating the risk of rejection."
  },
  {
    id: 29,
    type: 'true-false',
    question: "PRP should only be used as a standalone treatment and never combined with other techniques like microneedling.",
    correctAnswer: false,
    explanation: "False. PRP is often combined with microneedling (induction therapy) or lasers to enhance results through synergistic effects."
  },
  {
    id: 30,
    type: 'true-false',
    question: "Direct sun exposure immediately after a PRP session is recommended to enhance the effect.",
    correctAnswer: false,
    explanation: "False. Patients must avoid sun exposure to prevent inflammation and post-inflammatory hyperpigmentation (PIH) in the treated areas."
  },
  {
    id: 31,
    type: 'true-false',
    question: "Hemolysis in the plasma sample can lead to increased inflammation after injection.",
    correctAnswer: true,
    explanation: "True. Hemolysis releases pro-inflammatory mediators from red blood cells that can increase pain and irritation at the injection site."
  },
  {
    id: 32,
    type: 'true-false',
    question: "The principle of centrifugation is based on the different densities of blood cells.",
    correctAnswer: true,
    explanation: "True. Density gradients allow for the orderly separation of RBCs, WBCs, and platelets when subjected to centrifugal force."
  },
  {
    id: 33,
    type: 'true-false',
    question: "Platelets are smaller and less dense than red blood cells.",
    correctAnswer: true,
    explanation: "True. This difference in size and density is what allows them to remain in the upper plasma layer during controlled centrifugation."
  },
  {
    id: 34,
    type: 'true-false',
    question: "Gentle lymphatic drainage can be a beneficial post-treatment recommendation in some protocols.",
    correctAnswer: true,
    explanation: "True. Gentle drainage can help resolve post-procedural edema (swelling) more quickly by assisting the lymphatic system."
  },
  {
    id: 35,
    type: 'true-false',
    question: "The presence of a high concentration of red blood cells in PRP is a sign of superior quality.",
    correctAnswer: false,
    explanation: "False. High-quality PRP should have a very low concentration of RBCs; excessive RBCs are considered a contaminant that increases inflammation."
  },
  {
    id: 36,
    type: 'true-false',
    question: "Platelet-Poor Plasma (PPP) contains the same concentration of growth factors as Platelet-Rich Plasma (PRP).",
    correctAnswer: false,
    explanation: "False. By definition, PPP has a much lower concentration of platelets and, consequently, fewer growth factors than PRP."
  },
  {
    id: 37,
    type: 'true-false',
    question: "All materials used in the blood draw and centrifugation must be sterile and for single use.",
    correctAnswer: true,
    explanation: "True. This is a critical biosecurity standard to ensure the procedure is safe and free from contamination."
  },
  {
    id: 38,
    type: 'true-false',
    question: "A coagulated blood sample is ideal for obtaining the highest concentration of liquid PRP.",
    correctAnswer: false,
    explanation: "False. Once blood coagulates, the platelets are trapped in the clot and cannot be extracted into the plasma for injection."
  },
  {
    id: 39,
    type: 'true-false',
    question: "Proper identification of the patient's tubes is a mandatory practice to avoid cross-contamination errors.",
    correctAnswer: true,
    explanation: "True. Labeling is essential in any clinical procedure involving biological samples to prevent administrative or medical errors."
  },
  {
    id: 40,
    type: 'true-false',
    question: "Centrifugation protocols (time and RPM) should be modified randomly by the operator during each session.",
    correctAnswer: false,
    explanation: "False. Protocols should be standardized and based on the specific equipment and kit used to ensure consistent platelet concentration and quality."
  }
];