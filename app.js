/* ═══════════════════════════════════════════════
   MRPACECONE ACADEMY — APP LOGIC v2
═══════════════════════════════════════════════ */
'use strict';

// ─── PROGRAM DATA ──────────────────────────────
const PROGRAMS = {
  Medical:     ['MBBS', 'BDS', 'BSc Nursing', 'BPH', 'BMLT', 'B Pharmacy', 'Allied Health Sciences'],
  Law:         ['BALLB', 'LLB'],
  Engineering: ['BE Civil', 'BE Computer', 'BE Electronics', 'BE Mechanical', 'BE Architecture'],
  Science:     ['BSc Physics', 'BSc Chemistry', 'BSc Biology', 'BSc Mathematics', 'BSc CSIT'],
  Management:  ['BBA', 'BBM', 'BIM', 'BHM', 'BTTM'],
  IT:          ['BIT', 'BCA', 'BSc CSIT'],
  Agriculture: ['BSc Agriculture', 'Veterinary Sciences'],
  Education:   ['BEd', 'Education Programs'],
};

const SUBJECTS = {
  Medical:     ['Physics', 'Chemistry', 'Biology', 'Botany', 'Zoology'],
  Law:         ['English', 'General Knowledge', 'Legal Aptitude', 'Logical Reasoning'],
  Engineering: ['Physics', 'Chemistry', 'Mathematics', 'English'],
  Science:     ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
  Management:  ['English', 'Mathematics', 'Economics', 'General Knowledge'],
  IT:          ['Mathematics', 'Computer Science', 'Physics', 'English'],
  Agriculture: ['Biology', 'Chemistry', 'Physics', 'Botany'],
  Education:   ['English', 'Pedagogy', 'General Knowledge', 'Subject Elective'],
};

// ─── FULL SYLLABUS DATA ────────────────────────
const SYLLABUS = {
  MBBS: {
    university: 'Institute of Medicine (IOM) / Medical Education Commission (MEC)',
    totalMarks: 200,
    duration: '3 Hours',
    subjects: [
      {
        name: 'Physics', marks: 20, color: '#3b82f6',
        chapters: [
          { no: 1, title: 'Mechanics', topics: ['Kinematics', 'Newton\'s Laws of Motion', 'Work, Energy & Power', 'Circular Motion', 'Gravitation'] },
          { no: 2, title: 'Heat & Thermodynamics', topics: ['Temperature & Heat', 'Thermal Expansion', 'Gas Laws', 'Laws of Thermodynamics'] },
          { no: 3, title: 'Waves & Optics', topics: ['Simple Harmonic Motion', 'Wave Motion', 'Sound Waves', 'Reflection & Refraction', 'Lenses & Mirrors'] },
          { no: 4, title: 'Electricity & Magnetism', topics: ['Electric Charge & Field', 'Ohm\'s Law', 'Magnetic Field', 'Electromagnetic Induction'] },
          { no: 5, title: 'Modern Physics', topics: ['Photoelectric Effect', 'Atomic Structure', 'Radioactivity', 'Nuclear Reactions'] },
        ]
      },
      {
        name: 'Chemistry', marks: 20, color: '#10b981',
        chapters: [
          { no: 1, title: 'Physical Chemistry', topics: ['Atomic Structure', 'Chemical Bonding', 'States of Matter', 'Chemical Equilibrium', 'Electrochemistry'] },
          { no: 2, title: 'Inorganic Chemistry', topics: ['Periodic Table', 'Hydrogen', 'Metals & Non-metals', 'Transition Elements'] },
          { no: 3, title: 'Organic Chemistry', topics: ['Hydrocarbons', 'Alcohols & Ethers', 'Aldehydes & Ketones', 'Carboxylic Acids', 'Amines'] },
          { no: 4, title: 'Biochemistry', topics: ['Carbohydrates', 'Proteins', 'Lipids', 'Nucleic Acids', 'Vitamins & Enzymes'] },
        ]
      },
      {
        name: 'Biology', marks: 65, color: '#ef4444',
        chapters: [
          { no: 1, title: 'Cell Biology', topics: ['Cell Structure', 'Cell Organelles', 'Cell Division (Mitosis & Meiosis)', 'Cell Transport'] },
          { no: 2, title: 'Genetics', topics: ['Mendelian Genetics', 'DNA Structure & Replication', 'Gene Expression', 'Mutations', 'Hereditary Diseases'] },
          { no: 3, title: 'Human Physiology', topics: ['Digestive System', 'Circulatory System', 'Respiratory System', 'Nervous System', 'Endocrine System', 'Excretory System', 'Reproductive System'] },
          { no: 4, title: 'Microbiology', topics: ['Bacteria', 'Viruses', 'Fungi', 'Parasites', 'Immunity & Vaccines'] },
          { no: 5, title: 'Ecology', topics: ['Ecosystems', 'Food Chains', 'Biodiversity', 'Environmental Issues'] },
        ]
      },
      {
        name: 'Botany', marks: 50, color: '#84cc16',
        chapters: [
          { no: 1, title: 'Plant Morphology', topics: ['Root, Stem & Leaf Structure', 'Flower & Fruit', 'Plant Tissues'] },
          { no: 2, title: 'Plant Physiology', topics: ['Photosynthesis', 'Respiration', 'Transpiration', 'Mineral Nutrition', 'Plant Hormones'] },
          { no: 3, title: 'Plant Taxonomy', topics: ['Classification Systems', 'Algae', 'Bryophytes', 'Pteridophytes', 'Angiosperms & Gymnosperms'] },
          { no: 4, title: 'Plant Genetics', topics: ['Chromosome Structure', 'Reproduction in Plants', 'Polyploidy'] },
        ]
      },
      {
        name: 'Zoology', marks: 45, color: '#f59e0b',
        chapters: [
          { no: 1, title: 'Animal Kingdom', topics: ['Classification', 'Invertebrates', 'Vertebrates'] },
          { no: 2, title: 'Animal Physiology', topics: ['Digestion', 'Circulation', 'Respiration', 'Excretion', 'Nervous Control'] },
          { no: 3, title: 'Developmental Biology', topics: ['Gametogenesis', 'Fertilization', 'Embryo Development'] },
          { no: 4, title: 'Evolution', topics: ['Darwin\'s Theory', 'Natural Selection', 'Human Evolution'] },
        ]
      },
    ]
  },
  BALLB: {
    university: 'Tribhuvan University (TU)',
    totalMarks: 150,
    duration: '2.5 Hours',
    subjects: [
      {
        name: 'English', marks: 50, color: '#3b82f6',
        chapters: [
          { no: 1, title: 'Reading Comprehension', topics: ['Passage Analysis', 'Inference Questions', 'Vocabulary in Context', 'Main Idea & Supporting Details'] },
          { no: 2, title: 'Grammar & Usage', topics: ['Tenses', 'Parts of Speech', 'Subject-Verb Agreement', 'Active & Passive Voice', 'Direct & Indirect Speech'] },
          { no: 3, title: 'Vocabulary', topics: ['Synonyms & Antonyms', 'Idioms & Phrases', 'Word Formation', 'One-word Substitution'] },
          { no: 4, title: 'Writing Skills', topics: ['Essay Writing', 'Paragraph Writing', 'Letter Writing', 'Précis Writing'] },
        ]
      },
      {
        name: 'General Knowledge', marks: 30, color: '#10b981',
        chapters: [
          { no: 1, title: 'Nepal — History & Geography', topics: ['Nepal\'s Political History', 'Constitution 2072', 'Geography of Nepal', 'Major Districts & Provinces'] },
          { no: 2, title: 'Government & Politics', topics: ['Federal System', 'Three Organs of Government', 'Political Parties', 'International Relations'] },
          { no: 3, title: 'World Affairs', topics: ['UN & International Organizations', 'Current Global Events', 'World Geography', 'Famous Personalities'] },
          { no: 4, title: 'Science & Technology', topics: ['Recent Scientific Discoveries', 'IT & Internet', 'Space Exploration', 'Environment'] },
        ]
      },
      {
        name: 'Legal Aptitude', marks: 40, color: '#8b5cf6',
        chapters: [
          { no: 1, title: 'Introduction to Law', topics: ['Definition & Sources of Law', 'Classification of Law', 'Law & Justice', 'Legal System of Nepal'] },
          { no: 2, title: 'Constitutional Law', topics: ['Fundamental Rights', 'Directive Principles', 'Constitutional Bodies', 'Amendment Process'] },
          { no: 3, title: 'Criminal Law Basics', topics: ['Crime & Punishment', 'Types of Offences', 'IPC Concepts', 'Nepal Criminal Code 2074'] },
          { no: 4, title: 'Civil Law Basics', topics: ['Contract Law', 'Property Law', 'Family Law', 'Nepal Civil Code'] },
        ]
      },
      {
        name: 'Logical Reasoning', marks: 30, color: '#f59e0b',
        chapters: [
          { no: 1, title: 'Verbal Reasoning', topics: ['Analogy', 'Classification', 'Series Completion', 'Coding-Decoding', 'Blood Relations'] },
          { no: 2, title: 'Non-Verbal Reasoning', topics: ['Pattern Recognition', 'Figure Series', 'Mirror Images', 'Embedded Figures'] },
          { no: 3, title: 'Logical Deduction', topics: ['Syllogisms', 'Statement & Conclusions', 'Assumptions & Arguments', 'Cause & Effect'] },
          { no: 4, title: 'Mathematical Reasoning', topics: ['Number Series', 'Data Sufficiency', 'Puzzles', 'Seating Arrangement'] },
        ]
      },
    ]
  },
  'BE Computer': {
    university: 'Tribhuvan University — Institute of Engineering (IOE)',
    totalMarks: 100,
    duration: '2 Hours',
    subjects: [
      {
        name: 'Mathematics', marks: 50, color: '#3b82f6',
        chapters: [
          { no: 1, title: 'Algebra', topics: ['Sets & Functions', 'Complex Numbers', 'Sequence & Series', 'Matrices & Determinants', 'Permutation & Combination'] },
          { no: 2, title: 'Trigonometry', topics: ['Trigonometric Functions', 'Inverse Trigonometry', 'Compound Angles', 'Heights & Distances'] },
          { no: 3, title: 'Calculus', topics: ['Limits & Continuity', 'Differentiation', 'Integration', 'Differential Equations', 'Application of Derivatives'] },
          { no: 4, title: 'Coordinate Geometry', topics: ['Straight Lines', 'Circle', 'Parabola', 'Ellipse', 'Hyperbola'] },
          { no: 5, title: 'Statistics & Probability', topics: ['Mean, Median, Mode', 'Standard Deviation', 'Probability Theorems', 'Binomial & Normal Distribution'] },
        ]
      },
      {
        name: 'Physics', marks: 25, color: '#ef4444',
        chapters: [
          { no: 1, title: 'Mechanics', topics: ['Kinematics', 'Newton\'s Laws', 'Work & Energy', 'Rotational Motion'] },
          { no: 2, title: 'Electricity', topics: ['Coulomb\'s Law', 'Circuits', 'Magnetism', 'Electromagnetic Induction'] },
          { no: 3, title: 'Waves & Optics', topics: ['Wave Nature', 'Interference', 'Diffraction', 'Laser & Fiber Optics'] },
          { no: 4, title: 'Modern Physics', topics: ['Photoelectric Effect', 'Atomic Spectra', 'Nuclear Physics'] },
        ]
      },
      {
        name: 'Chemistry', marks: 15, color: '#10b981',
        chapters: [
          { no: 1, title: 'Basic Concepts', topics: ['Atomic Structure', 'Chemical Bonding', 'Mole Concept', 'Redox Reactions'] },
          { no: 2, title: 'Organic Chemistry', topics: ['Hydrocarbons', 'Polymers', 'Industrial Chemistry'] },
        ]
      },
      {
        name: 'English', marks: 10, color: '#8b5cf6',
        chapters: [
          { no: 1, title: 'Communication', topics: ['Reading Comprehension', 'Technical Writing', 'Grammar Essentials', 'Vocabulary'] },
        ]
      },
    ]
  },
  'BSc CSIT': {
    university: 'Tribhuvan University (TU)',
    totalMarks: 100,
    duration: '2 Hours',
    subjects: [
      {
        name: 'Mathematics', marks: 40, color: '#3b82f6',
        chapters: [
          { no: 1, title: 'Algebra & Trigonometry', topics: ['Sets, Relations & Functions', 'Complex Numbers', 'Polynomials', 'Trigonometric Functions'] },
          { no: 2, title: 'Calculus', topics: ['Differential Calculus', 'Integral Calculus', 'Differential Equations'] },
          { no: 3, title: 'Statistics & Probability', topics: ['Descriptive Statistics', 'Probability Theory', 'Distributions'] },
        ]
      },
      {
        name: 'Computer Science', marks: 40, color: '#6366f1',
        chapters: [
          { no: 1, title: 'Computer Fundamentals', topics: ['Computer Organization', 'Input/Output Devices', 'Memory & Storage', 'Operating Systems Basics'] },
          { no: 2, title: 'Programming Concepts', topics: ['Algorithms & Flowcharts', 'C Programming Basics', 'Data Types & Variables', 'Control Structures', 'Arrays & Functions'] },
          { no: 3, title: 'Data Structures', topics: ['Arrays', 'Linked Lists', 'Stacks & Queues', 'Trees & Graphs'] },
          { no: 4, title: 'Database & Networks', topics: ['DBMS Concepts', 'SQL Basics', 'Computer Networks', 'Internet & Protocols'] },
        ]
      },
      {
        name: 'Physics', marks: 10, color: '#ef4444',
        chapters: [
          { no: 1, title: 'Applied Physics', topics: ['Electricity & Electronics', 'Semiconductor Devices', 'Optoelectronics'] },
        ]
      },
      {
        name: 'English', marks: 10, color: '#8b5cf6',
        chapters: [
          { no: 1, title: 'English Skills', topics: ['Technical Reading', 'Grammar', 'Vocabulary', 'Writing'] },
        ]
      },
    ]
  },
  BBA: {
    university: 'Tribhuvan University / Pokhara University',
    totalMarks: 100,
    duration: '2 Hours',
    subjects: [
      {
        name: 'English', marks: 30, color: '#3b82f6',
        chapters: [
          { no: 1, title: 'Reading & Comprehension', topics: ['Passage Reading', 'Main Idea', 'Inference', 'Vocabulary in Context'] },
          { no: 2, title: 'Grammar', topics: ['Tenses', 'Articles', 'Prepositions', 'Conditionals', 'Reported Speech'] },
          { no: 3, title: 'Vocabulary', topics: ['Business Vocabulary', 'Synonyms & Antonyms', 'Idioms'] },
        ]
      },
      {
        name: 'Mathematics', marks: 30, color: '#10b981',
        chapters: [
          { no: 1, title: 'Business Mathematics', topics: ['Percentage & Ratio', 'Profit & Loss', 'Simple & Compound Interest', 'Set Theory'] },
          { no: 2, title: 'Statistics', topics: ['Data Collection', 'Mean, Median, Mode', 'Graphs & Charts', 'Probability Basics'] },
        ]
      },
      {
        name: 'Economics', marks: 20, color: '#f59e0b',
        chapters: [
          { no: 1, title: 'Microeconomics', topics: ['Demand & Supply', 'Market Structure', 'Consumer Behaviour', 'Production Theory'] },
          { no: 2, title: 'Macroeconomics', topics: ['National Income', 'Inflation & Deflation', 'Money & Banking', 'Nepal Economy'] },
        ]
      },
      {
        name: 'General Knowledge', marks: 20, color: '#8b5cf6',
        chapters: [
          { no: 1, title: 'Business & Current Affairs', topics: ['Nepal Business Environment', 'Current Events', 'Business Organizations', 'Trade & Commerce'] },
        ]
      },
    ]
  },
  BIT: {
    university: 'Tribhuvan University (TU)',
    totalMarks: 100,
    duration: '2 Hours',
    subjects: [
      {
        name: 'Mathematics', marks: 40, color: '#3b82f6',
        chapters: [
          { no: 1, title: 'Algebra', topics: ['Functions & Relations', 'Complex Numbers', 'Matrices'] },
          { no: 2, title: 'Calculus', topics: ['Limits', 'Differentiation', 'Integration'] },
          { no: 3, title: 'Discrete Mathematics', topics: ['Logic & Proofs', 'Set Theory', 'Graph Theory', 'Combinatorics'] },
        ]
      },
      {
        name: 'Computer Science', marks: 50, color: '#6366f1',
        chapters: [
          { no: 1, title: 'IT Fundamentals', topics: ['Hardware & Software', 'Operating Systems', 'Networking Basics', 'Internet & Web'] },
          { no: 2, title: 'Programming', topics: ['Programming Paradigms', 'C/C++ Basics', 'OOP Concepts', 'Problem Solving'] },
          { no: 3, title: 'Database', topics: ['ER Diagrams', 'SQL', 'DBMS Concepts'] },
        ]
      },
      {
        name: 'English', marks: 10, color: '#8b5cf6',
        chapters: [
          { no: 1, title: 'Communication Skills', topics: ['Reading', 'Grammar', 'Technical Writing'] },
        ]
      },
    ]
  },
  'BSc Agriculture': {
    university: 'Agriculture & Forestry University (AFU) / TU',
    totalMarks: 100,
    duration: '2 Hours',
    subjects: [
      {
        name: 'Biology', marks: 30, color: '#84cc16',
        chapters: [
          { no: 1, title: 'Plant Biology', topics: ['Plant Cell & Tissues', 'Photosynthesis', 'Plant Reproduction', 'Plant Diseases'] },
          { no: 2, title: 'Animal Biology', topics: ['Animal Kingdom', 'Animal Physiology', 'Genetics & Heredity'] },
        ]
      },
      {
        name: 'Chemistry', marks: 30, color: '#10b981',
        chapters: [
          { no: 1, title: 'Agricultural Chemistry', topics: ['Soil Chemistry', 'Fertilizers', 'Pesticides', 'Biochemistry'] },
          { no: 2, title: 'Organic Chemistry', topics: ['Carbon Compounds', 'Polymers', 'Biomolecules'] },
        ]
      },
      {
        name: 'Physics', marks: 20, color: '#3b82f6',
        chapters: [
          { no: 1, title: 'Applied Physics', topics: ['Mechanics', 'Fluid Mechanics', 'Heat Transfer', 'Irrigation Physics'] },
        ]
      },
      {
        name: 'Mathematics', marks: 20, color: '#f59e0b',
        chapters: [
          { no: 1, title: 'Agricultural Maths', topics: ['Statistics', 'Probability', 'Algebra', 'Measurements'] },
        ]
      },
    ]
  },
  BEd: {
    university: 'Tribhuvan University — Faculty of Education',
    totalMarks: 100,
    duration: '2 Hours',
    subjects: [
      {
        name: 'English', marks: 30, color: '#3b82f6',
        chapters: [
          { no: 1, title: 'Language Skills', topics: ['Reading Comprehension', 'Grammar & Usage', 'Writing Skills', 'Vocabulary'] },
        ]
      },
      {
        name: 'General Knowledge', marks: 20, color: '#10b981',
        chapters: [
          { no: 1, title: 'Nepal & World', topics: ['Nepal History', 'Geography', 'Current Affairs', 'Science & Technology'] },
        ]
      },
      {
        name: 'Pedagogy & Education', marks: 30, color: '#8b5cf6',
        chapters: [
          { no: 1, title: 'Education System', topics: ['History of Education', 'Nepal Education Policy', 'Education Psychology', 'Curriculum Development'] },
          { no: 2, title: 'Teaching Methods', topics: ['Teaching Approaches', 'Classroom Management', 'Assessment & Evaluation', 'Inclusive Education'] },
        ]
      },
      {
        name: 'Subject Elective', marks: 20, color: '#f59e0b',
        chapters: [
          { no: 1, title: 'Your Teaching Subject', topics: ['Subject-specific Content', 'Subject Pedagogy', 'Teaching Aids for Subject'] },
        ]
      },
    ]
  },
};

// Default fallback syllabus for programs not explicitly listed
function getDefaultSyllabus(program, faculty) {
  const subj = SUBJECTS[faculty] || ['Subject 1', 'Subject 2', 'Subject 3'];
  return {
    university: 'Tribhuvan University / Relevant Nepali University',
    totalMarks: 100,
    duration: '2 Hours',
    subjects: subj.map((s, i) => ({
      name: s,
      marks: Math.floor(100 / subj.length),
      color: ['#3b82f6','#10b981','#ef4444','#f59e0b','#8b5cf6'][i % 5],
      chapters: [
        { no: 1, title: `${s} — Fundamentals`, topics: ['Basic Concepts', 'Core Principles', 'Important Definitions', 'Key Formulas'] },
        { no: 2, title: `${s} — Intermediate`, topics: ['Applied Problems', 'Theory & Practice', 'Previous Year Topics'] },
        { no: 3, title: `${s} — Advanced`, topics: ['Complex Problems', 'Exam-focused Topics', 'Revision & Practice'] },
      ]
    }))
  };
}

// ─── QUESTION BANK ─────────────────────────────
const QUESTIONS = {
  Physics: [
    { q: "A body starts from rest and moves with uniform acceleration of 5 m/s². What is its velocity after 4 seconds?", opts: ["10 m/s", "20 m/s", "40 m/s", "15 m/s"], ans: 1, diff: "medium", explanation: "Using v = u + at = 0 + 5×4 = 20 m/s. Newton's first equation of motion.", source: "TU Physics Curriculum 2025, Chapter 2: Kinematics" },
    { q: "Which of the following is the SI unit of electric charge?", opts: ["Ampere", "Volt", "Coulomb", "Farad"], ans: 2, diff: "easy", explanation: "The SI unit of electric charge is the Coulomb (C).", source: "IOM Physics Reference, Electrostatics" },
    { q: "The work done by a force F over displacement d at angle θ is:", opts: ["F × d", "F × d × sinθ", "F × d × cosθ", "F × d × tanθ"], ans: 2, diff: "medium", explanation: "Work = F·d·cosθ. Only the component of force in the direction of displacement does work.", source: "TU IOE Syllabus, Work Energy Theorem" },
    { q: "What is the speed of light in vacuum?", opts: ["2×10⁸ m/s", "3×10⁸ m/s", "4×10⁸ m/s", "1.5×10⁸ m/s"], ans: 1, diff: "easy", explanation: "The speed of light in vacuum c = 3×10⁸ m/s.", source: "Physics, Class XII, TU Curriculum" },
    { q: "Which law states that the pressure of a gas is inversely proportional to its volume at constant temperature?", opts: ["Charles' Law", "Boyle's Law", "Gay-Lussac's Law", "Avogadro's Law"], ans: 1, diff: "easy", explanation: "Boyle's Law: PV = constant at constant temperature. P ∝ 1/V.", source: "TU Physics, Kinetic Theory of Gases" },
  ],
  Chemistry: [
    { q: "What is the atomic number of Carbon?", opts: ["4", "6", "8", "12"], ans: 1, diff: "easy", explanation: "Carbon has 6 protons in its nucleus, giving it atomic number 6.", source: "TU Chemistry Syllabus, Periodic Table" },
    { q: "Which of the following is an example of an exothermic reaction?", opts: ["Photosynthesis", "Melting of ice", "Combustion of methane", "Electrolysis of water"], ans: 2, diff: "medium", explanation: "Combustion of methane releases heat energy, making it exothermic.", source: "IOM Chemistry, Thermochemistry" },
    { q: "pH of a neutral solution at 25°C is:", opts: ["0", "7", "14", "1"], ans: 1, diff: "easy", explanation: "Pure water at 25°C is neutral with pH = 7.", source: "TU Chemistry, Acids Bases and Salts" },
    { q: "Which gas is produced when zinc reacts with dilute sulfuric acid?", opts: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"], ans: 2, diff: "easy", explanation: "Zn + H₂SO₄ → ZnSO₄ + H₂↑. Hydrogen gas is produced.", source: "TU Chemistry, Metals and Acids" },
  ],
  Biology: [
    { q: "The powerhouse of the cell is:", opts: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"], ans: 2, diff: "easy", explanation: "Mitochondria produce ATP through cellular respiration.", source: "TU/IOM Biology, Cell Organelles" },
    { q: "Which blood group is known as the universal donor?", opts: ["AB", "B", "A", "O"], ans: 3, diff: "easy", explanation: "Blood group O negative is the universal donor as it has no A or B antigens.", source: "IOM Medical Entrance Biology, Blood Groups" },
    { q: "DNA replication is:", opts: ["Conservative", "Semi-conservative", "Dispersive", "None of the above"], ans: 1, diff: "medium", explanation: "DNA replication is semi-conservative — proven by Meselson-Stahl experiment (1958).", source: "IOM MBBS Entrance Syllabus, Molecular Biology" },
    { q: "The process of photosynthesis occurs in which organelle?", opts: ["Mitochondria", "Ribosome", "Chloroplast", "Vacuole"], ans: 2, diff: "easy", explanation: "Photosynthesis occurs in chloroplasts — thylakoid (light reactions) and stroma (Calvin cycle).", source: "TU Biology Curriculum, Plant Physiology" },
  ],
  Mathematics: [
    { q: "What is the value of sin 30°?", opts: ["√3/2", "1/2", "1/√2", "1"], ans: 1, diff: "easy", explanation: "sin 30° = 1/2. This is a standard trigonometric value.", source: "TU Mathematics, Trigonometry" },
    { q: "If f(x) = x² + 3x + 2, what is f(2)?", opts: ["8", "10", "12", "6"], ans: 2, diff: "easy", explanation: "f(2) = 4 + 6 + 2 = 12.", source: "TU Mathematics, Functions" },
    { q: "The derivative of sin(x) is:", opts: ["cos(x)", "-cos(x)", "-sin(x)", "tan(x)"], ans: 0, diff: "easy", explanation: "d/dx [sin(x)] = cos(x). Standard differentiation formula.", source: "TU Mathematics, Differential Calculus" },
  ],
  English: [
    { q: "Choose the correct sentence:", opts: ["She go to school every day.", "She goes to school every day.", "She going to school every day.", "She gone to school every day."], ans: 1, diff: "easy", explanation: "With third-person singular subject (She), we add -s to the verb in present simple.", source: "English Grammar, TU Curriculum" },
    { q: "The antonym of 'abundant' is:", opts: ["Plentiful", "Scarce", "Numerous", "Ample"], ans: 1, diff: "easy", explanation: "Abundant means plenty/lots. Its antonym is scarce (very little).", source: "Vocabulary, BALLB Entrance Guide" },
  ],
};

// ─── MOCK TEST QUESTIONS ───────────────────────
const MOCK_QUESTIONS = [
  { q: "The process by which plants make their own food using sunlight is called:", opts: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"], ans: 1 },
  { q: "Which planet is known as the Red Planet?", opts: ["Venus", "Jupiter", "Mars", "Saturn"], ans: 2 },
  { q: "DNA stands for:", opts: ["Deoxyribonucleic Acid", "Dinitric Acid", "Dinucleic Acid", "Deoxyribose Nucleotide Acid"], ans: 0 },
  { q: "The unit of electrical resistance is:", opts: ["Volt", "Ampere", "Ohm", "Watt"], ans: 2 },
  { q: "Photosynthesis produces which gas?", opts: ["CO₂", "N₂", "O₂", "H₂"], ans: 2 },
];

// ─── AI TUTOR RESPONSES ────────────────────────
const AI_RESPONSES = {
  photosynthesis: { text: `**Photosynthesis** is the process by which green plants convert light energy into chemical energy (glucose).\n\n**Overall equation:**\n6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂\n\n**Two stages:**\n1. **Light-dependent reactions** (thylakoid membrane) — Water splits, ATP & NADPH produced, O₂ released.\n2. **Calvin Cycle** (stroma) — CO₂ fixed into glucose using ATP and NADPH.\n\n**Key for MBBS:** Know the location (chloroplast), pigment (chlorophyll), and both stages in detail.`, source: "TU/IOM Biology Curriculum 2025 — Plant Physiology Unit" },
  newton: { text: `**Newton's Second Law of Motion:** F = ma\n\n- F = Net force (Newtons)\n- m = Mass (kg)\n- a = Acceleration (m/s²)\n\n**Example:** A 10 kg box pushed with 50 N force:\na = F/m = 50/10 = **5 m/s²**\n\n**Entrance tip:** Most frequently tested in MBBS, BE, and BSc entrances.`, source: "TU Physics Curriculum — Laws of Motion Chapter" },
  cell: { text: `**Cell Division** — Two main types:\n\n**1. Mitosis** (growth & repair)\n- Prophase → Metaphase → Anaphase → Telophase\n- Result: 2 identical diploid cells\n\n**2. Meiosis** (sexual reproduction)\n- Meiosis I + Meiosis II\n- Result: 4 haploid gametes\n- Crossing over in Prophase I → genetic variation\n\n**Key:** Know differences, chromosome numbers, and significance.`, source: "IOM Biology Syllabus — Cell Biology Unit" },
  osmosis: { text: `**Osmosis** is the movement of water through a selectively permeable membrane from high water concentration to low water concentration.\n\n**Example — Red blood cell in:**\n- **Hypotonic** (less solute): Water enters → cell swells → hemolysis\n- **Hypertonic** (more solute): Water leaves → cell shrinks (crenation)\n- **Isotonic** (same solute): No net movement → normal\n\n**Very important** for MBBS, Nursing, BPH entrances.`, source: "IOM Biology, Cell Physiology; TU Zoology" },
};

// ─── APP STATE ─────────────────────────────────
let state = {
  currentSection: 'dashboard',
  faculty: '',
  program: '',
  questionAnswers: {},
  mockQIndex: 0,
  mockAnswers: {},
  mockTimerInterval: null,
  mockTimeLeft: 10785,
  syllabusExpanded: {},
};

// ─── NAVIGATION ────────────────────────────────
function enterApp() {
  document.getElementById('landing-page').classList.add('hidden');
  document.getElementById('app-page').classList.remove('hidden');
  showSection('dashboard');
}

function enterAppWithProgram(faculty, program) {
  enterApp();
  state.faculty = faculty;
  state.program = program;
  document.getElementById('faculty-select').value = faculty;
  updatePrograms();
  setTimeout(() => {
    document.getElementById('program-select').value = program;
    updateSubjectList(faculty);
  }, 50);
}

function backToLanding() {
  document.getElementById('app-page').classList.add('hidden');
  document.getElementById('landing-page').classList.remove('hidden');
}

function showSection(id) {
  document.querySelectorAll('.section-content').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.sb-link').forEach(l => l.classList.remove('active'));
  const target = document.getElementById('sec-' + id);
  if (target) { target.classList.add('active'); state.currentSection = id; }
  const link = document.querySelector('[data-section="' + id + '"]');
  if (link) link.classList.add('active');
  const titles = { dashboard:'Dashboard', progress:'My Progress', planner:'Study Planner', syllabus:'Syllabus', materials:'Study Materials', videos:'Video Lessons', questions:'Question Bank', previous:'Previous Year Questions', 'mock-tests':'Mock Tests', 'ai-tutor':'AI Tutor', analytics:'Progress Analytics', achievements:'Achievements', news:'News & Notices', forum:'Discussion Forum', admin:'Admin Panel' };
  document.getElementById('page-title').textContent = titles[id] || id;
  if (id === 'questions') loadQuestions();
  if (id === 'syllabus') renderSyllabus();
  if (id === 'planner') renderPlanner();
  if (window.innerWidth <= 768) closeSidebar();
}

// ─── SIDEBAR ───────────────────────────────────
function toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); }
function closeSidebar() { document.getElementById('sidebar').classList.remove('open'); }

// ─── PROGRAMS ─────────────────────────────────
function updatePrograms() {
  const faculty = document.getElementById('faculty-select').value;
  const progSelect = document.getElementById('program-select');
  progSelect.innerHTML = '<option value="">Choose Program</option>';
  if (faculty && PROGRAMS[faculty]) {
    PROGRAMS[faculty].forEach(p => {
      const opt = document.createElement('option');
      opt.value = p; opt.textContent = p;
      progSelect.appendChild(opt);
    });
    state.faculty = faculty;
    updateSubjectList(faculty);
  }
}

function updateSubjectList(faculty) {
  const subjects = SUBJECTS[faculty] || SUBJECTS.Medical;
  const list = document.getElementById('subject-list');
  if (!list) return;
  const pcts = [80, 70, 92, 65, 75, 60, 88];
  list.innerHTML = subjects.map((s, i) => `
    <div class="sp-row">
      <span class="sp-name">${s}</span>
      <div class="sp-bar"><div class="sp-fill" style="width:${pcts[i % pcts.length]}%"></div></div>
      <span class="sp-pct">${pcts[i % pcts.length]}%</span>
    </div>`).join('');
}

// ─── SYLLABUS ──────────────────────────────────
function renderSyllabus() {
  const program = document.getElementById('program-select').value;
  const faculty = document.getElementById('faculty-select').value;
  const container = document.getElementById('sec-syllabus');

  if (!program || !faculty) {
    container.innerHTML = `
      <div class="sec-header"><h2>Syllabus 📖</h2><p>Complete chapter-wise, topic-wise syllabus for your selected program.</p></div>
      <div class="syllabus-empty">
        <div style="font-size:3rem;margin-bottom:1rem;">📋</div>
        <h3>Select Your Program</h3>
        <p>Choose a faculty and program from the sidebar dropdowns to load the official syllabus.</p>
      </div>`;
    return;
  }

  const data = SYLLABUS[program] || getDefaultSyllabus(program, faculty);

  container.innerHTML = `
    <div class="sec-header">
      <h2>Syllabus 📖</h2>
      <p>Official chapter-wise syllabus for <strong>${program}</strong> entrance examination.</p>
    </div>
    <div class="syllabus-meta-banner">
      <div class="smb-item"><span class="smb-label">Program</span><span class="smb-val">${program}</span></div>
      <div class="smb-item"><span class="smb-label">University</span><span class="smb-val">${data.university}</span></div>
      <div class="smb-item"><span class="smb-label">Total Marks</span><span class="smb-val">${data.totalMarks}</span></div>
      <div class="smb-item"><span class="smb-label">Duration</span><span class="smb-val">${data.duration}</span></div>
    </div>
    <div class="syllabus-subjects">
      ${data.subjects.map(subj => `
        <div class="syllabus-subject-card">
          <div class="ssc-header" onclick="toggleSubject('subj-${subj.name.replace(/\s/g,'')}')">
            <div class="ssc-left">
              <div class="ssc-dot" style="background:${subj.color}"></div>
              <div>
                <div class="ssc-name">${subj.name}</div>
                <div class="ssc-meta">${subj.chapters.length} chapters · ${subj.marks} marks</div>
              </div>
            </div>
            <div class="ssc-right">
              <div class="ssc-marks-pill" style="background:${subj.color}20;color:${subj.color}">${subj.marks} Marks</div>
              <span class="ssc-toggle" id="toggle-${subj.name.replace(/\s/g,'')}">▼</span>
            </div>
          </div>
          <div class="ssc-body" id="subj-${subj.name.replace(/\s/g,'')}">
            ${subj.chapters.map(ch => `
              <div class="chapter-row" onclick="toggleChapter('ch-${subj.name.replace(/\s/g,'')}-${ch.no}')">
                <div class="ch-header">
                  <span class="ch-num" style="background:${subj.color}20;color:${subj.color}">Ch ${ch.no}</span>
                  <span class="ch-title">${ch.title}</span>
                  <span class="ch-topics-count">${ch.topics.length} topics</span>
                  <span class="ch-arrow">›</span>
                </div>
                <div class="ch-topics" id="ch-${subj.name.replace(/\s/g,'')}-${ch.no}">
                  ${ch.topics.map(t => `<div class="topic-pill">✦ ${t}</div>`).join('')}
                </div>
              </div>`).join('')}
          </div>
        </div>`).join('')}
    </div>`;
}

function toggleSubject(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const isOpen = el.classList.toggle('open');
  const name = id.replace('subj-', '');
  const tog = document.getElementById('toggle-' + name);
  if (tog) tog.textContent = isOpen ? '▲' : '▼';
}

function toggleChapter(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('open');
}

// ─── STUDY PLANNER ─────────────────────────────
function renderPlanner() {
  const program = document.getElementById('program-select').value || 'your program';
  const faculty = document.getElementById('faculty-select').value || 'Medical';
  const subjects = SUBJECTS[faculty] || ['Physics', 'Chemistry', 'Biology'];
  const container = document.getElementById('sec-planner');

  const today = new Date();
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  // Generate weekly plan
  const weekPlan = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const subj = subjects[i % subjects.length];
    weekPlan.push({ day: days[d.getDay()], date: `${d.getDate()} ${months[d.getMonth()]}`, subject: subj, isToday: i === 0 });
  }

  container.innerHTML = `
    <div class="sec-header">
      <h2>Study Planner 📅</h2>
      <p>Your personalized 7-day study schedule for <strong>${program}</strong> preparation.</p>
    </div>

    <div class="planner-exam-banner">
      <div class="peb-left">
        <div class="peb-label">🎯 Exam Countdown</div>
        <div class="peb-days" id="countdown-days">—</div>
        <div class="peb-hint">Set your exam date below to activate countdown</div>
      </div>
      <div class="peb-right">
        <label style="font-size:12px;color:rgba(255,255,255,0.8);margin-bottom:4px;display:block">Your Exam Date</label>
        <input type="date" id="exam-date" onchange="updateCountdown()" style="padding:0.5rem;border-radius:8px;border:none;font-size:14px;"/>
      </div>
    </div>

    <div class="planner-week">
      <h3 style="margin-bottom:1rem;font-size:1rem;font-weight:700;">This Week's Schedule</h3>
      <div class="week-grid">
        ${weekPlan.map(d => `
          <div class="week-day-card ${d.isToday ? 'today' : ''}">
            <div class="wdc-day">${d.isToday ? '📍 Today' : d.day}</div>
            <div class="wdc-date">${d.date}</div>
            <div class="wdc-subject">${d.subject}</div>
            <div class="wdc-tasks">
              <div class="wdc-task">📖 Read 2 chapters</div>
              <div class="wdc-task">❓ Solve 20 MCQs</div>
              <div class="wdc-task">📝 Review notes</div>
            </div>
          </div>`).join('')}
      </div>
    </div>

    <div class="planner-tips">
      <h3 style="margin-bottom:1rem;font-size:1rem;font-weight:700;">📌 Study Tips for ${program}</h3>
      <div class="tips-grid">
        <div class="tip-card"><div class="tip-icon">⏰</div><div><strong>Study 6–8 hours daily</strong><p>Consistency beats intensity. Study every day without breaks.</p></div></div>
        <div class="tip-card"><div class="tip-icon">🔄</div><div><strong>Revise weekly</strong><p>Review previous week's topics every Sunday to strengthen memory.</p></div></div>
        <div class="tip-card"><div class="tip-icon">📋</div><div><strong>Solve past papers</strong><p>Solve at least 2 previous year papers per week in exam conditions.</p></div></div>
        <div class="tip-card"><div class="tip-icon">😴</div><div><strong>Sleep 7–8 hours</strong><p>Good sleep consolidates memory. Never sacrifice sleep for studying.</p></div></div>
      </div>
    </div>`;

  updateCountdown();
}

function updateCountdown() {
  const examInput = document.getElementById('exam-date');
  const display = document.getElementById('countdown-days');
  if (!examInput || !display) return;
  if (!examInput.value) { display.textContent = '—'; return; }
  const examDate = new Date(examInput.value);
  const today = new Date();
  const diff = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));
  if (diff < 0) { display.textContent = 'Exam passed'; return; }
  display.textContent = diff === 0 ? 'TODAY!' : `${diff} days left`;
}

// ─── QUESTION BANK ─────────────────────────────
function loadQuestions() {
  const subject = document.getElementById('q-subject') ? document.getElementById('q-subject').value || 'Physics' : 'Physics';
  const questions = QUESTIONS[subject] || QUESTIONS.Physics;
  const container = document.getElementById('question-container');
  if (!container) return;
  container.innerHTML = questions.map((q, i) => `
    <div class="question-card" id="qcard-${i}">
      <div class="q-header">
        <span class="q-num">Q${i+1} · ${subject}</span>
        <span class="q-difficulty ${q.diff}">${q.diff.charAt(0).toUpperCase()+q.diff.slice(1)}</span>
      </div>
      <div class="q-text">${q.q}</div>
      <div class="q-options">
        ${q.opts.map((opt,j) => `<div class="q-opt" id="opt-${i}-${j}" onclick="selectAnswer(${i},${j})">${String.fromCharCode(65+j)}. ${opt}</div>`).join('')}
      </div>
      <div class="q-actions">
        <button class="btn-ghost small" onclick="revealAnswer(${i})">Show Answer</button>
        <button class="btn-primary small" onclick="toggleExplanation(${i})">Explanation</button>
      </div>
      <div class="q-explanation" id="exp-${i}">
        <strong>Answer: ${String.fromCharCode(65+q.ans)}. ${q.opts[q.ans]}</strong><br/><br/>${q.explanation}
      </div>
      <div class="q-source">📚 Source: ${q.source}</div>
    </div>`).join('');
}

function selectAnswer(qi, optIdx) {
  state.questionAnswers[qi] = optIdx;
  for (let j = 0; j < 4; j++) { const el = document.getElementById(`opt-${qi}-${j}`); if (el) el.classList.remove('selected'); }
  const sel = document.getElementById(`opt-${qi}-${optIdx}`);
  if (sel) sel.classList.add('selected');
}

function revealAnswer(qi) {
  const subject = document.getElementById('q-subject') ? document.getElementById('q-subject').value || 'Physics' : 'Physics';
  const q = (QUESTIONS[subject] || QUESTIONS.Physics)[qi];
  if (!q) return;
  for (let j = 0; j < q.opts.length; j++) {
    const el = document.getElementById(`opt-${qi}-${j}`);
    if (!el) continue;
    if (j === q.ans) el.classList.add('correct');
    else if (state.questionAnswers[qi] === j) el.classList.add('wrong');
  }
  const exp = document.getElementById(`exp-${qi}`);
  if (exp) exp.style.display = 'block';
}

function toggleExplanation(qi) {
  const exp = document.getElementById(`exp-${qi}`);
  if (exp) exp.style.display = exp.style.display === 'block' ? 'none' : 'block';
}

// ─── MOCK TESTS ────────────────────────────────
function startMockTest() {
  document.getElementById('mock-list').classList.add('hidden');
  document.getElementById('mock-test-ui').classList.remove('hidden');
  state.mockQIndex = 0; state.mockAnswers = {}; state.mockTimeLeft = 10785;
  renderMockQuestion(); startMockTimer();
}

function renderMockQuestion() {
  const q = MOCK_QUESTIONS[state.mockQIndex];
  if (!q) return;
  document.getElementById('q-current').textContent = state.mockQIndex + 1;
  document.getElementById('q-total').textContent = MOCK_QUESTIONS.length;
  document.getElementById('test-q-text').textContent = q.q;
  document.getElementById('test-options').innerHTML = q.opts.map((opt,i) =>
    `<div class="test-opt ${state.mockAnswers[state.mockQIndex]===i?'selected':''}" onclick="selectMockOpt(this,${i})">${String.fromCharCode(65+i)}. ${opt}</div>`
  ).join('');
}

function selectOpt(el) { document.querySelectorAll('.test-opt').forEach(o=>o.classList.remove('selected')); el.classList.add('selected'); }
function selectMockOpt(el,idx) { state.mockAnswers[state.mockQIndex]=idx; document.querySelectorAll('.test-opt').forEach(o=>o.classList.remove('selected')); el.classList.add('selected'); }
function nextQ() { if(state.mockQIndex<MOCK_QUESTIONS.length-1){state.mockQIndex++;renderMockQuestion();} }
function prevQ() { if(state.mockQIndex>0){state.mockQIndex--;renderMockQuestion();} }

function startMockTimer() {
  if(state.mockTimerInterval) clearInterval(state.mockTimerInterval);
  state.mockTimerInterval = setInterval(()=>{
    state.mockTimeLeft--;
    if(state.mockTimeLeft<=0){clearInterval(state.mockTimerInterval);submitTest();return;}
    const h=Math.floor(state.mockTimeLeft/3600),m=Math.floor((state.mockTimeLeft%3600)/60),s=state.mockTimeLeft%60;
    const el=document.getElementById('mock-timer');
    if(el) el.textContent=`${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  },1000);
}

function submitTest() {
  if(state.mockTimerInterval) clearInterval(state.mockTimerInterval);
  let correct=0;
  MOCK_QUESTIONS.forEach((q,i)=>{if(state.mockAnswers[i]===q.ans)correct++;});
  const score=Math.round((correct/MOCK_QUESTIONS.length)*100);
  document.getElementById('mock-test-ui').innerHTML=`
    <div style="text-align:center;padding:3rem 2rem;background:white;border:1px solid var(--border);border-radius:var(--radius);">
      <div style="font-size:4rem;margin-bottom:1rem;">🎉</div>
      <h2 style="font-family:var(--font-display);font-size:2rem;margin-bottom:0.5rem;">Test Submitted!</h2>
      <div style="font-size:4rem;font-weight:700;color:var(--brand);font-family:var(--font-display);margin-bottom:0.5rem;">${score}%</div>
      <p style="color:var(--text-muted);margin-bottom:1.5rem;">You answered <strong>${correct}</strong> out of <strong>${MOCK_QUESTIONS.length}</strong> correctly.</p>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
        <button class="btn-primary" onclick="location.reload()">Take Another Test</button>
        <button class="btn-ghost" onclick="showSection('analytics')">View Analytics</button>
      </div>
    </div>`;
}

// ─── AI TUTOR ──────────────────────────────────
function sendChat() {
  const input=document.getElementById('chat-input');
  const msg=input.value.trim();
  if(!msg) return;
  input.value='';
  addChatMsg(msg,'user');
  setTimeout(()=>respondToChat(msg),600);
}

function askQuestion(q) { addChatMsg(q,'user'); setTimeout(()=>respondToChat(q),600); }

function addChatMsg(text,role) {
  const messages=document.getElementById('chat-messages');
  const div=document.createElement('div');
  div.className=`chat-msg ${role}`;
  div.innerHTML=`<div class="chat-avatar">${role==='user'?'S':'🤖'}</div><div class="chat-bubble">${text.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br/>')}</div>`;
  messages.appendChild(div);
  messages.scrollTop=messages.scrollHeight;
}

function respondToChat(msg) {
  const lower=msg.toLowerCase();
  let response,source;
  if(lower.includes('photosynthesis')){response=AI_RESPONSES.photosynthesis.text;source=AI_RESPONSES.photosynthesis.source;}
  else if(lower.includes('newton')||lower.includes('second law')||lower.includes('f=ma')){response=AI_RESPONSES.newton.text;source=AI_RESPONSES.newton.source;}
  else if(lower.includes('cell division')||lower.includes('mitosis')||lower.includes('meiosis')){response=AI_RESPONSES.cell.text;source=AI_RESPONSES.cell.source;}
  else if(lower.includes('osmosis')){response=AI_RESPONSES.osmosis.text;source=AI_RESPONSES.osmosis.source;}
  else if(lower.includes('hello')||lower.includes('namaste')||lower.includes('hi')){response="Namaste! 🙏 I'm ready to help. Ask me about Physics, Chemistry, Biology, Mathematics, or any topic in your syllabus!";source="Mrpacecone Academy AI Tutor";}
  else {response=`Great question! For "${msg}", I recommend:\n\n1. 📘 Check the **Syllabus** section for your program\n2. 📋 Browse **Previous Year Questions** on this topic\n3. ❓ Practice in the **Question Bank**\n\nTry asking: "Explain photosynthesis", "Newton's laws", "Cell division", or "Osmosis" for detailed answers.`;source="Mrpacecone Academy — Verified Sources";}
  const messages=document.getElementById('chat-messages');
  const div=document.createElement('div');
  div.className='chat-msg bot';
  div.innerHTML=`<div class="chat-avatar">🤖</div><div class="chat-bubble">${response.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br/')}<div class="source-tag">📚 ${source}</div></div>`;
  messages.appendChild(div);
  messages.scrollTop=messages.scrollHeight;
}

// ─── PROGRAM SELECT CHANGE ─────────────────────
document.addEventListener('DOMContentLoaded', ()=>{
  loadQuestions();
  document.getElementById('program-select').addEventListener('change', function(){
    state.program = this.value;
    if(state.currentSection==='syllabus') renderSyllabus();
    if(state.currentSection==='planner') renderPlanner();
  });
  document.getElementById('faculty-select').addEventListener('change', function(){
    updatePrograms();
  });
  const qs=document.getElementById('q-subject');
  if(qs) qs.addEventListener('change',loadQuestions);
});
