/* ═══════════════════════════════════════════════
   MRPACECONE ACADEMY — APP LOGIC
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

// ─── QUESTION BANK ─────────────────────────────
const QUESTIONS = {
  Physics: [
    {
      q: "A body starts from rest and moves with uniform acceleration of 5 m/s². What is its velocity after 4 seconds?",
      opts: ["10 m/s", "20 m/s", "40 m/s", "15 m/s"],
      ans: 1,
      diff: "medium",
      explanation: "Using v = u + at = 0 + 5×4 = 20 m/s. Newton's first equation of motion.",
      source: "TU Physics Curriculum 2025, Chapter 2: Kinematics"
    },
    {
      q: "Which of the following is the SI unit of electric charge?",
      opts: ["Ampere", "Volt", "Coulomb", "Farad"],
      ans: 2,
      diff: "easy",
      explanation: "The SI unit of electric charge is the Coulomb (C), named after Charles-Augustin de Coulomb.",
      source: "IOM Physics Reference, Electrostatics"
    },
    {
      q: "The work done by a force F over displacement d at angle θ is:",
      opts: ["F × d", "F × d × sinθ", "F × d × cosθ", "F × d × tanθ"],
      ans: 2,
      diff: "medium",
      explanation: "Work = F·d·cosθ. Only the component of force in the direction of displacement does work.",
      source: "TU IOE Syllabus, Work Energy Theorem"
    },
    {
      q: "What is the speed of light in vacuum?",
      opts: ["2×10⁸ m/s", "3×10⁸ m/s", "4×10⁸ m/s", "1.5×10⁸ m/s"],
      ans: 1,
      diff: "easy",
      explanation: "The speed of light in vacuum, c = 3×10⁸ m/s (approximately 3×10⁸ m/s or 299,792,458 m/s).",
      source: "Physics, Class XII, TU Curriculum"
    },
    {
      q: "A projectile is launched at 45° for maximum range. What is the time of flight if initial velocity is 20 m/s? (g = 10 m/s²)",
      opts: ["1.41 s", "2.83 s", "4 s", "2 s"],
      ans: 1,
      diff: "hard",
      explanation: "T = 2u sinθ/g = 2×20×sin45°/10 = 2×20×0.707/10 ≈ 2.83 s.",
      source: "TU IOE Entrance Preparation Guide"
    },
  ],
  Chemistry: [
    {
      q: "What is the atomic number of Carbon?",
      opts: ["4", "6", "8", "12"],
      ans: 1,
      diff: "easy",
      explanation: "Carbon has 6 protons in its nucleus, giving it atomic number 6.",
      source: "TU Chemistry Syllabus, Periodic Table"
    },
    {
      q: "Which of the following is an example of an exothermic reaction?",
      opts: ["Photosynthesis", "Melting of ice", "Combustion of methane", "Electrolysis of water"],
      ans: 2,
      diff: "medium",
      explanation: "Combustion of methane (CH₄ + 2O₂ → CO₂ + 2H₂O) releases heat energy, making it exothermic.",
      source: "IOM Chemistry, Thermochemistry Chapter"
    },
    {
      q: "pH of a neutral solution at 25°C is:",
      opts: ["0", "7", "14", "1"],
      ans: 1,
      diff: "easy",
      explanation: "Pure water at 25°C is neutral with [H⁺] = [OH⁻] = 10⁻⁷ M, giving pH = 7.",
      source: "TU Chemistry, Acids Bases and Salts"
    },
  ],
  Biology: [
    {
      q: "The powerhouse of the cell is:",
      opts: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
      ans: 2,
      diff: "easy",
      explanation: "Mitochondria produce ATP through cellular respiration, earning the name 'powerhouse of the cell'.",
      source: "TU/IOM Biology, Cell Organelles Chapter"
    },
    {
      q: "Which blood group is known as the universal donor?",
      opts: ["AB", "B", "A", "O"],
      ans: 3,
      diff: "easy",
      explanation: "Blood group O (O negative) is the universal donor as it has no A or B antigens and can be given to any blood group.",
      source: "IOM Medical Entrance Biology, Blood Groups"
    },
    {
      q: "DNA replication is:",
      opts: ["Conservative", "Semi-conservative", "Dispersive", "None of the above"],
      ans: 1,
      diff: "medium",
      explanation: "DNA replication is semi-conservative — each new DNA molecule contains one original strand and one newly synthesized strand. Proven by Meselson-Stahl experiment (1958).",
      source: "IOM MBBS Entrance Syllabus, Molecular Biology"
    },
    {
      q: "The process of photosynthesis occurs in which organelle?",
      opts: ["Mitochondria", "Ribosome", "Chloroplast", "Vacuole"],
      ans: 2,
      diff: "easy",
      explanation: "Photosynthesis occurs in chloroplasts, specifically in the thylakoid membrane (light reactions) and stroma (Calvin cycle).",
      source: "TU Biology Curriculum, Plant Physiology"
    },
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
  photosynthesis: {
    text: `**Photosynthesis** is the process by which green plants, algae, and some bacteria convert light energy (usually from the sun) into chemical energy stored in glucose.

**Overall equation:**
6CO₂ + 6H₂O + Light energy → C₆H₁₂O₆ + 6O₂

**Two stages:**
1. **Light-dependent reactions** (in thylakoid membrane) — Water is split (photolysis), ATP and NADPH are produced, O₂ is released.
2. **Calvin Cycle / Light-independent reactions** (in stroma) — CO₂ is fixed into glucose using ATP and NADPH.

**Key for MBBS entrance:** Know the location (chloroplast), the pigment (chlorophyll), and both stages in detail.`,
    source: "TU/IOM Biology Curriculum 2025 — Plant Physiology Unit"
  },
  newton: {
    text: `**Newton's Second Law of Motion** states that the acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.

**Formula:** **F = ma**
- F = Net force (in Newtons)
- m = Mass (in kg)
- a = Acceleration (in m/s²)

**Example:** A 10 kg box is pushed with 50 N force.
a = F/m = 50/10 = **5 m/s²**

**Entrance tip:** This is one of the most frequently tested concepts in all entrance exams including MBBS, BE, and BSc entrances.`,
    source: "TU Physics Curriculum — Laws of Motion Chapter"
  },
  cell: {
    text: `**Cell Division** occurs in two main types:

**1. Mitosis** (for growth & repair)
- Prophase → Metaphase → Anaphase → Telophase → Cytokinesis
- Result: 2 identical diploid daughter cells
- Occurs in: somatic (body) cells

**2. Meiosis** (for sexual reproduction)
- Meiosis I (reductive) + Meiosis II (equational)
- Result: 4 haploid daughter cells (gametes)
- Crossing over in Prophase I → genetic variation

**Key for MBBS:** Know the differences between mitosis and meiosis, chromosomal number changes, and significance.`,
    source: "IOM Biology Syllabus — Cell Biology Unit, TU Class XII"
  },
  osmosis: {
    text: `**Osmosis** is the movement of water molecules through a selectively permeable membrane from a region of higher water concentration (lower solute concentration) to a region of lower water concentration (higher solute concentration).

**Example:** If you place a red blood cell in:
- **Hypotonic solution** (less solute than cell): Water enters → cell swells → may burst (hemolysis)
- **Hypertonic solution** (more solute than cell): Water leaves → cell shrinks (crenation)
- **Isotonic solution** (same solute): No net movement → normal shape

**Osmotic pressure** is the pressure needed to prevent osmosis.

**Entrance relevance:** Very important for MBBS, Nursing, and BPH entrances — appears in almost every paper.`,
    source: "IOM Biology, Cell Physiology; TU Zoology Curriculum"
  }
};

// ─── APP STATE ─────────────────────────────────
let state = {
  currentSection: 'dashboard',
  faculty: '',
  program: '',
  questionIndex: 0,
  questionAnswers: {},
  mockActive: false,
  mockQIndex: 0,
  mockAnswers: {},
  mockTimerInterval: null,
  mockTimeLeft: 10785, // 2h59m45s
  chatHistory: [],
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
  }, 50);
}

function backToLanding() {
  document.getElementById('app-page').classList.add('hidden');
  document.getElementById('landing-page').classList.remove('hidden');
}

function showSection(id) {
  // Hide all
  document.querySelectorAll('.section-content').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.sb-link').forEach(l => l.classList.remove('active'));

  // Show target
  const target = document.getElementById('sec-' + id);
  if (target) {
    target.classList.add('active');
    state.currentSection = id;
  }

  // Highlight sidebar link
  const link = document.querySelector('[data-section="' + id + '"]');
  if (link) link.classList.add('active');

  // Update topbar title
  const titles = {
    dashboard: 'Dashboard', progress: 'My Progress', planner: 'Study Planner',
    syllabus: 'Syllabus', materials: 'Study Materials', videos: 'Video Lessons',
    questions: 'Question Bank', previous: 'Previous Year Questions',
    'mock-tests': 'Mock Tests', 'ai-tutor': 'AI Tutor', analytics: 'Progress Analytics',
    achievements: 'Achievements', news: 'News & Notices', forum: 'Discussion Forum',
    admin: 'Admin Panel'
  };
  document.getElementById('page-title').textContent = titles[id] || id;

  // Lazy load
  if (id === 'questions') loadQuestions();

  // Close sidebar on mobile
  if (window.innerWidth <= 768) closeSidebar();
}

// ─── SIDEBAR ───────────────────────────────────
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
}

// ─── PROGRAMS ─────────────────────────────────
function updatePrograms() {
  const faculty = document.getElementById('faculty-select').value;
  const progSelect = document.getElementById('program-select');
  progSelect.innerHTML = '<option value="">Choose Program</option>';
  if (faculty && PROGRAMS[faculty]) {
    PROGRAMS[faculty].forEach(p => {
      const opt = document.createElement('option');
      opt.value = p;
      opt.textContent = p;
      progSelect.appendChild(opt);
    });
    state.faculty = faculty;
    // Update subject list in dashboard
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
    </div>
  `).join('');
}

// ─── QUESTION BANK ─────────────────────────────
function loadQuestions() {
  const subject = document.getElementById('q-subject').value || 'Physics';
  const questions = QUESTIONS[subject] || QUESTIONS.Physics;
  const container = document.getElementById('question-container');
  if (!container) return;

  container.innerHTML = questions.map((q, i) => `
    <div class="question-card" id="qcard-${i}">
      <div class="q-header">
        <span class="q-num">Q${i + 1} · ${subject}</span>
        <span class="q-difficulty ${q.diff}">${q.diff.charAt(0).toUpperCase() + q.diff.slice(1)}</span>
      </div>
      <div class="q-text">${q.q}</div>
      <div class="q-options">
        ${q.opts.map((opt, j) => `
          <div class="q-opt" id="opt-${i}-${j}" onclick="selectAnswer(${i}, ${j})">${String.fromCharCode(65+j)}. ${opt}</div>
        `).join('')}
      </div>
      <div class="q-actions">
        <button class="btn-ghost small" onclick="revealAnswer(${i})">Show Answer</button>
        <button class="btn-primary small" onclick="toggleExplanation(${i})">Explanation</button>
      </div>
      <div class="q-explanation" id="exp-${i}">
        <strong>Answer: ${String.fromCharCode(65 + q.ans)}. ${q.opts[q.ans]}</strong><br/><br/>
        ${q.explanation}
      </div>
      <div class="q-source">📚 Source: ${q.source}</div>
    </div>
  `).join('');
}

function selectAnswer(qi, optIdx) {
  const questions = QUESTIONS[document.getElementById('q-subject').value || 'Physics'];
  state.questionAnswers[qi] = optIdx;

  // Clear previous selections
  for (let j = 0; j < 4; j++) {
    const el = document.getElementById(`opt-${qi}-${j}`);
    if (el) el.classList.remove('selected');
  }
  const sel = document.getElementById(`opt-${qi}-${optIdx}`);
  if (sel) sel.classList.add('selected');
}

function revealAnswer(qi) {
  const subject = document.getElementById('q-subject').value || 'Physics';
  const questions = QUESTIONS[subject] || QUESTIONS.Physics;
  const q = questions[qi];
  if (!q) return;

  for (let j = 0; j < q.opts.length; j++) {
    const el = document.getElementById(`opt-${qi}-${j}`);
    if (!el) continue;
    if (j === q.ans) {
      el.classList.add('correct');
    } else if (state.questionAnswers[qi] === j && j !== q.ans) {
      el.classList.add('wrong');
    }
  }

  // Show explanation
  const exp = document.getElementById(`exp-${qi}`);
  if (exp) exp.style.display = 'block';
}

function toggleExplanation(qi) {
  const exp = document.getElementById(`exp-${qi}`);
  if (exp) {
    exp.style.display = exp.style.display === 'block' ? 'none' : 'block';
  }
}

// ─── MOCK TESTS ────────────────────────────────
function startMockTest() {
  document.getElementById('mock-list').classList.add('hidden');
  const ui = document.getElementById('mock-test-ui');
  ui.classList.remove('hidden');

  state.mockActive = true;
  state.mockQIndex = 0;
  state.mockAnswers = {};
  state.mockTimeLeft = 10785;

  renderMockQuestion();
  startMockTimer();
}

function renderMockQuestion() {
  const q = MOCK_QUESTIONS[state.mockQIndex];
  if (!q) return;

  document.getElementById('q-current').textContent = state.mockQIndex + 1;
  document.getElementById('q-total').textContent = MOCK_QUESTIONS.length;
  document.getElementById('test-q-text').textContent = q.q;

  const optsDiv = document.getElementById('test-options');
  optsDiv.innerHTML = q.opts.map((opt, i) => `
    <div class="test-opt ${state.mockAnswers[state.mockQIndex] === i ? 'selected' : ''}"
         onclick="selectMockOpt(this, ${i})">
      ${String.fromCharCode(65+i)}. ${opt}
    </div>
  `).join('');
}

function selectOpt(el) {
  document.querySelectorAll('.test-opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
}

function selectMockOpt(el, idx) {
  state.mockAnswers[state.mockQIndex] = idx;
  document.querySelectorAll('.test-opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
}

function nextQ() {
  if (state.mockQIndex < MOCK_QUESTIONS.length - 1) {
    state.mockQIndex++;
    renderMockQuestion();
  }
}

function prevQ() {
  if (state.mockQIndex > 0) {
    state.mockQIndex--;
    renderMockQuestion();
  }
}

function startMockTimer() {
  if (state.mockTimerInterval) clearInterval(state.mockTimerInterval);
  state.mockTimerInterval = setInterval(() => {
    state.mockTimeLeft--;
    if (state.mockTimeLeft <= 0) {
      clearInterval(state.mockTimerInterval);
      submitTest();
      return;
    }
    const h = Math.floor(state.mockTimeLeft / 3600);
    const m = Math.floor((state.mockTimeLeft % 3600) / 60);
    const s = state.mockTimeLeft % 60;
    document.getElementById('mock-timer').textContent =
      `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }, 1000);
}

function submitTest() {
  if (state.mockTimerInterval) clearInterval(state.mockTimerInterval);

  // Calculate score
  let correct = 0;
  MOCK_QUESTIONS.forEach((q, i) => {
    if (state.mockAnswers[i] === q.ans) correct++;
  });

  const score = Math.round((correct / MOCK_QUESTIONS.length) * 100);

  document.getElementById('mock-test-ui').innerHTML = `
    <div style="text-align:center;padding:3rem 2rem;background:white;border:1px solid var(--border);border-radius:var(--radius);">
      <div style="font-size:4rem;margin-bottom:1rem;">🎉</div>
      <h2 style="font-family:var(--font-display);font-size:2rem;margin-bottom:0.5rem;">Test Submitted!</h2>
      <div style="font-size:4rem;font-weight:700;color:var(--brand);font-family:var(--font-display);margin-bottom:0.5rem;">${score}%</div>
      <p style="color:var(--text-muted);margin-bottom:1.5rem;">You answered <strong>${correct}</strong> out of <strong>${MOCK_QUESTIONS.length}</strong> questions correctly.</p>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
        <button class="btn-primary" onclick="resetMockTest()">Take Another Test</button>
        <button class="btn-ghost" onclick="showSection('analytics')">View Analytics</button>
      </div>
    </div>
  `;
  state.mockActive = false;
}

function resetMockTest() {
  document.getElementById('mock-list').classList.remove('hidden');
  document.getElementById('mock-test-ui').classList.add('hidden');
  document.getElementById('mock-test-ui').innerHTML = ''; // Reset for next render
  // Rebuild mock test UI
  const ui = document.getElementById('mock-test-ui');
  ui.innerHTML = `
    <div class="test-header">
      <div class="test-title">MBBS Full Mock Test 2025</div>
      <div class="test-timer" id="mock-timer">2:59:45</div>
      <div class="test-progress">Q <span id="q-current">1</span> of <span id="q-total">200</span></div>
    </div>
    <div class="test-body">
      <div class="test-question" id="test-q-text">Loading...</div>
      <div class="test-options" id="test-options"></div>
      <div class="test-actions">
        <button class="btn-ghost" onclick="prevQ()">← Previous</button>
        <button class="btn-primary" onclick="nextQ()">Next →</button>
      </div>
    </div>
    <div class="test-footer">
      <button class="btn-danger" onclick="submitTest()">Submit Test</button>
    </div>
  `;
  ui.classList.add('hidden');
}

// ─── AI TUTOR ──────────────────────────────────
function sendChat() {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';
  addChatMsg(msg, 'user');
  setTimeout(() => respondToChat(msg), 600);
}

function askQuestion(q) {
  addChatMsg(q, 'user');
  setTimeout(() => respondToChat(q), 600);
}

function addChatMsg(text, role) {
  const messages = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `chat-msg ${role}`;

  const avatarContent = role === 'user' ? 'S' : '🤖';
  div.innerHTML = `
    <div class="chat-avatar">${avatarContent}</div>
    <div class="chat-bubble">
      ${text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>')}
    </div>
  `;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function respondToChat(msg) {
  const lower = msg.toLowerCase();
  let response;
  let source;

  if (lower.includes('photosynthesis')) {
    response = AI_RESPONSES.photosynthesis.text;
    source = AI_RESPONSES.photosynthesis.source;
  } else if (lower.includes('newton') || lower.includes('second law') || lower.includes('f=ma')) {
    response = AI_RESPONSES.newton.text;
    source = AI_RESPONSES.newton.source;
  } else if (lower.includes('cell division') || lower.includes('mitosis') || lower.includes('meiosis')) {
    response = AI_RESPONSES.cell.text;
    source = AI_RESPONSES.cell.source;
  } else if (lower.includes('osmosis') || lower.includes('osmotic')) {
    response = AI_RESPONSES.osmosis.text;
    source = AI_RESPONSES.osmosis.source;
  } else if (lower.includes('hello') || lower.includes('namaste') || lower.includes('hi')) {
    response = "Namaste! 🙏 I'm ready to help you with your entrance exam preparation. Ask me about Physics, Chemistry, Biology, Mathematics, or any topic in your syllabus!";
    source = "Mrpacecone Academy AI Tutor";
  } else if (lower.includes('dna') || lower.includes('replication')) {
    response = "**DNA (Deoxyribonucleic Acid)** is the hereditary material in all living organisms.\n\n**Structure:** Double helix with sugar-phosphate backbone and nitrogenous bases (A-T and G-C base pairing — Chargaff's rule).\n\n**DNA Replication:** Semi-conservative (Meselson-Stahl). Involves: Helicase (unwinds), Primase (adds primer), DNA Polymerase III (synthesizes new strand 5'→3'), DNA Ligase (joins Okazaki fragments).\n\n**Key for MBBS:** Know the enzymes, the semi-conservative model, and steps in detail.";
    source = "IOM Biology Curriculum — Molecular Biology";
  } else {
    response = `Great question! I'm searching through verified academic sources for information about "${msg}".\n\nFor the most accurate and up-to-date answer, I recommend:\n\n1. 📘 **Official syllabus** for your program\n2. 🔬 **TU/IOM reference textbooks**\n3. 📋 **Previous entrance papers** on this topic\n\nTry asking specifically: "Explain photosynthesis for MBBS", "Newton's laws", "Cell division", or "DNA replication" for detailed verified answers.\n\n*More topics are being added to my knowledge base continuously.*`;
    source = "Mrpacecone Academy — Verified Academic Sources";
  }

  const messages = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.innerHTML = `
    <div class="chat-avatar">🤖</div>
    <div class="chat-bubble">
      ${response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>')}
      <div class="source-tag">📚 ${source}</div>
    </div>
  `;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

// ─── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Load default questions
  loadQuestions();

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Subject select change
  const subjectSel = document.getElementById('q-subject');
  if (subjectSel) {
    subjectSel.addEventListener('change', loadQuestions);
  }
});
