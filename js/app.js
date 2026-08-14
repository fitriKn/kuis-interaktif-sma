/**
 * ==========================================================================
 * KUIS INTERAKTIF - Modern Classroom Game Show Engine
 * Pure Vanilla JavaScript Application (100% Offline Compatible)
 * ==========================================================================
 */

// --- GLOBAL STATE & CONFIGURATION ---
const DEFAULT_STUDENTS = [
  { id: "std-1", name: "Andi", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false },
  { id: "std-2", name: "Budi", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false },
  { id: "std-3", name: "Citra", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false },
  { id: "std-4", name: "Dinda", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false },
  { id: "std-5", name: "Eka", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false },
  { id: "std-6", name: "Fajar", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false },
  { id: "std-7", name: "Gina", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false },
  { id: "std-8", name: "Hana", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false },
  { id: "std-9", name: "Indra", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false },
  { id: "std-10", name: "Joko", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false }
];

const DEFAULT_QUESTIONS = [
  {
    id: "q-1",
    question: "Apakah fungsi utama dari Central Processing Unit (CPU) pada komputer?",
    options: { A: "Menyimpan data secara permanen", B: "Memproses data dan mengeksekusi instruksi", C: "Mencetak dokumen ke media kertas", D: "Menampilkan gambar pada layar monitor" },
    answer: "B",
    category: "Informatika",
    points: 10,
    used: false
  },
  {
    id: "q-2",
    question: "Manakah di bawah ini yang merupakan perangkat keras penyimpanan sementara (volatile memory)?",
    options: { A: "Harddisk Drive (HDD)", B: "Flashdisk USB", C: "Random Access Memory (RAM)", D: "Solid State Drive (SSD)" },
    answer: "C",
    category: "Informatika",
    points: 10,
    used: false
  },
  {
    id: "q-3",
    question: "Manakah di bawah ini yang tergolong ke dalam jenis Sistem Operasi (Operating System)?",
    options: { A: "Microsoft Word", B: "Linux Ubuntu", C: "Google Chrome", D: "Adobe Photoshop" },
    answer: "B",
    category: "Informatika",
    points: 10,
    used: false
  },
  {
    id: "q-4",
    question: "Urutan langkah-langkah logis dan sistematis untuk menyelesaikan suatu masalah komputer disebut...",
    options: { A: "Algoritma", B: "Variabel", C: "Pengulangan (Looping)", D: "Pengondisian (If-Else)" },
    answer: "A",
    category: "Informatika",
    points: 10,
    used: false
  },
  {
    id: "q-5",
    question: "Bahasa standar yang digunakan untuk membuat struktur dan konten halaman web adalah...",
    options: { A: "Python", B: "Java", C: "HTML", D: "C++" },
    answer: "C",
    category: "Informatika",
    points: 10,
    used: false
  },
  {
    id: "q-6",
    question: "Topologi jaringan komputer yang semua perangkanya terhubung ke satu kabel pusat dinamakan...",
    options: { A: "Topologi Star", B: "Topologi Bus", C: "Topologi Ring", D: "Topologi Mesh" },
    answer: "B",
    category: "Informatika",
    points: 10,
    used: false
  },
  {
    id: "q-7",
    question: "Format penulisan Alamat IP Versi 4 (IPv4) terdiri dari berapa oktet desimal?",
    options: { A: "2 Oktet", B: "4 Oktet", C: "6 Oktet", D: "8 Oktet" },
    answer: "B",
    category: "Informatika",
    points: 10,
    used: false
  },
  {
    id: "q-8",
    question: "Tindakan kejahatan pencurian informasi sensitif (seperti password) melalui situs web palsu dinamakan...",
    options: { A: "Phishing", B: "Hacking", C: "Formatting", D: "Debugging" },
    answer: "A",
    category: "Informatika",
    points: 10,
    used: false
  },
  {
    id: "q-9",
    question: "Perangkat keras yang bertugas mengarahkan paket data antar jaringan komputer (LAN ke Internet) adalah...",
    options: { A: "Printer", B: "Router", C: "Monitor", D: "Scanner" },
    answer: "B",
    category: "Informatika",
    points: 10,
    used: false
  },
  {
    id: "q-10",
    question: "Kombinasi tombol keyboard standar yang digunakan untuk menyalin (copy) objek/teks adalah...",
    options: { A: "Ctrl + X", B: "Ctrl + V", C: "Ctrl + C", D: "Ctrl + Z" },
    answer: "C",
    category: "Informatika",
    points: 10,
    used: false
  }
];

const DEFAULT_SETTINGS = {
  timer: 30, // seconds (15, 30, 45, 60, 0 = no timer)
  sound: true,
  volume: 80,
  repeatStudent: false,
  repeatQuestion: false,
  defaultPoints: 10
};

// --- APP STATE ---
let appData = {
  students: [],
  questions: [],
  settings: { ...DEFAULT_SETTINGS }
};

let gameState = {
  activeStudent: null,
  activeQuestion: null,
  round: 1,
  timerInterval: null,
  timeLeft: 30,
  isAnswerRevealed: false
};

// --- AUDIO SYNTHESIZER (WEB AUDIO API) ---
class SoundEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  playTone(freq, type = 'sine', duration = 0.1, gainValue = 0.1) {
    if (!appData.settings.sound) return;
    this.init();
    if (!this.ctx) return;
    
    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      
      const masterVol = (appData.settings.volume || 80) / 100;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      gain.gain.setValueAtTime(gainValue * masterVol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio play error", e);
    }
  }

  spinTick() {
    this.playTone(300 + Math.random() * 200, 'square', 0.05, 0.05);
  }

  winnerChime() {
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.3, 0.15);
      }, idx * 120);
    });
  }

  timerTick(isWarning = false) {
    if (isWarning) {
      this.playTone(880, 'sawtooth', 0.1, 0.15); // High Warning A5
    } else {
      this.playTone(440, 'sine', 0.08, 0.08); // Normal Tick A4
    }
  }

  correctSound() {
    const chord = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    chord.forEach((freq, i) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.4, 0.15);
      }, i * 90);
    });
  }

  wrongSound() {
    this.playTone(220, 'sawtooth', 0.3, 0.2); // Low A3
    setTimeout(() => {
      this.playTone(185, 'sawtooth', 0.4, 0.2); // F#3
    }, 150);
  }

  timerEndSound() {
    this.playTone(150, 'sawtooth', 0.6, 0.3);
  }
}

const audio = new SoundEngine();

// --- CANVAS CONFETTI SYSTEM ---
class ConfettiEngine {
  constructor() {
    this.canvas = document.getElementById('confetti-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.animating = false;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  burst(count = 80) {
    if (!this.canvas || !this.ctx) return;
    this.resize();
    const colors = ['#6366f1', '#a855f7', '#f59e0b', '#10b981', '#06b6d4', '#ec4899'];
    
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: this.canvas.width / 2,
        y: this.canvas.height / 3,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.7) * 18,
        size: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 10,
        opacity: 1
      });
    }

    if (!this.animating) {
      this.animating = true;
      this.loop();
    }
  }

  loop() {
    if (!this.particles.length) {
      this.animating = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      return;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.4; // gravity
      p.rotation += p.rSpeed;
      p.opacity -= 0.012;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = Math.max(0, p.opacity);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      this.ctx.restore();

      if (p.opacity <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
      }
    }

    requestAnimationFrame(() => this.loop());
  }
}

const confetti = new ConfettiEngine();

// --- DATA INITIALIZATION & STORAGE ---
function initData() {
  const local = localStorage.getItem('kuis_interaktif_data');
  if (local) {
    try {
      const parsed = JSON.parse(local);
      appData.students = parsed.students || [...DEFAULT_STUDENTS];
      appData.questions = parsed.questions || [...DEFAULT_QUESTIONS];
      appData.settings = { ...DEFAULT_SETTINGS, ...(parsed.settings || {}) };
    } catch (e) {
      console.error("Corrupted localStorage data, resetting defaults", e);
      resetToDefaultData();
    }
  } else {
    resetToDefaultData();
  }
}

function saveData() {
  localStorage.setItem('kuis_interaktif_data', JSON.stringify(appData));
}

function resetToDefaultData() {
  appData.students = JSON.parse(JSON.stringify(DEFAULT_STUDENTS));
  appData.questions = JSON.parse(JSON.stringify(DEFAULT_QUESTIONS));
  appData.settings = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
  saveData();
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '✅' : type === 'error' ? '⚠️' : 'ℹ️'}</span> ${message}`;
  
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- NAVIGATION & VIEWS SWITCHER ---
function switchView(viewId) {
  document.querySelectorAll('.view-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

  const targetView = document.getElementById(viewId);
  const targetNav = document.querySelector(`.nav-btn[data-view="${viewId}"]`);

  if (targetView) targetView.classList.add('active');
  if (targetNav) targetNav.classList.add('active');

  // Trigger renders when entering views
  if (viewId === 'view-home') renderHomeStats();
  if (viewId === 'view-students') renderStudentsView();
  if (viewId === 'view-questions') renderQuestionsView();
  if (viewId === 'view-leaderboard') renderLeaderboardView();
  if (viewId === 'view-settings') renderSettingsView();
}

function renderHomeStats() {
  document.getElementById('stat-total-students').textContent = appData.students.length;
  document.getElementById('stat-total-questions').textContent = appData.questions.length;
  
  const playedCount = appData.students.filter(s => s.hasPlayed).length;
  document.getElementById('stat-played-students').textContent = `${playedCount}/${appData.students.length}`;
}

// --- GAME MODE LOGIC ---
function startGame() {
  if (appData.students.length === 0) {
    showToast("Belum ada siswa! Tambahkan siswa terlebih dahulu di menu Kelola Siswa.", "error");
    switchView('view-students');
    return;
  }

  if (appData.questions.length === 0) {
    showToast("Bank soal masih kosong! Tambahkan soal di menu Bank Soal.", "error");
    switchView('view-questions');
    return;
  }

  switchView('view-game');
  resetGameStage();
}

function resetGameStage() {
  stopTimer();
  gameState.activeStudent = null;
  gameState.activeQuestion = null;
  gameState.isAnswerRevealed = false;

  document.getElementById('game-header-score').textContent = appData.students.reduce((acc, s) => acc + s.score, 0);
  document.getElementById('game-header-round').textContent = gameState.round;
  
  const playedCount = appData.students.filter(s => s.hasPlayed).length;
  document.getElementById('game-header-played').textContent = `${playedCount}/${appData.students.length}`;

  showSubStage('stage-spin');
  
  const spinBtn = document.getElementById('btn-spin-name');
  spinBtn.disabled = false;
  spinBtn.innerHTML = `🎡 SPIN NAMA`;
  document.getElementById('slot-name-display').textContent = '???';
  document.getElementById('slot-name-display').classList.remove('winner');
}

function showSubStage(stageId) {
  document.querySelectorAll('.game-substage').forEach(el => el.style.display = 'none');
  const target = document.getElementById(stageId);
  if (target) target.style.display = 'flex';
}

// STAGE 1: SPIN NAME
function spinName() {
  const spinBtn = document.getElementById('btn-spin-name');
  const nameDisplay = document.getElementById('slot-name-display');

  // Available students filter
  let candidates = appData.settings.repeatStudent 
    ? [...appData.students] 
    : appData.students.filter(s => !s.hasPlayed);

  if (candidates.length === 0) {
    showAllPlayedModal();
    return;
  }

  spinBtn.disabled = true;
  nameDisplay.classList.remove('winner');

  let duration = 2500; // 2.5 seconds spin
  let startTime = Date.now();

  function roll() {
    const elapsed = Date.now() - startTime;
    const randomIndex = Math.floor(Math.random() * candidates.length);
    nameDisplay.textContent = candidates[randomIndex].name;
    audio.spinTick();

    if (elapsed < duration) {
      setTimeout(roll, 50 + (elapsed / duration) * 150); // Easing deceleration
    } else {
      // Winner Chosen
      const winner = candidates[Math.floor(Math.random() * candidates.length)];
      gameState.activeStudent = winner;
      nameDisplay.textContent = winner.name;
      nameDisplay.classList.add('winner');
      audio.winnerChime();
      confetti.burst(60);

      // Update student played status
      winner.hasPlayed = true;
      saveData();

      setTimeout(() => {
        transitionToQuestionStage();
      }, 1800);
    }
  }

  roll();
}

function showAllPlayedModal() {
  openModal('modal-all-played');
}

function restartRound() {
  appData.students.forEach(s => s.hasPlayed = false);
  gameState.round++;
  saveData();
  closeModal('modal-all-played');
  resetGameStage();
  showToast(`Putaran Baru (Ronde ${gameState.round}) Dimulai!`, "success");
}

// STAGE 2: TRANSITION TO QUESTION
function transitionToQuestionStage() {
  showSubStage('stage-transition');
  document.getElementById('transition-student-name').textContent = gameState.activeStudent.name;

  setTimeout(() => {
    pickAndShowQuestion();
  }, 1800);
}

// STAGE 3: QUESTION DISPLAY & TIMER
function pickAndShowQuestion() {
  let candidates = appData.settings.repeatQuestion 
    ? [...appData.questions] 
    : appData.questions.filter(q => !q.used);

  if (candidates.length === 0) {
    // If all questions used, auto reset used status for continuous play
    appData.questions.forEach(q => q.used = false);
    candidates = [...appData.questions];
    showToast("Semua soal telah terpakai! Bank soal direset untuk putaran baru.", "info");
  }

  const selectedQuestion = candidates[Math.floor(Math.random() * candidates.length)];
  gameState.activeQuestion = selectedQuestion;
  gameState.isAnswerRevealed = false;

  // Render Question
  document.getElementById('question-category-tag').textContent = selectedQuestion.category || 'Umum';
  document.getElementById('question-points-tag').textContent = `+${selectedQuestion.points || appData.settings.defaultPoints} POIN`;
  document.getElementById('question-active-player').textContent = `NAMA PESERTA: ${gameState.activeStudent.name}`;
  document.getElementById('question-text-display').textContent = selectedQuestion.question;

  const optionsContainer = document.getElementById('options-grid');
  optionsContainer.innerHTML = '';

  const opts = selectedQuestion.options || {};
  const hasOptions = opts.A || opts.B || opts.C || opts.D;

  if (hasOptions) {
    ['A', 'B', 'C', 'D'].forEach(key => {
      if (opts[key]) {
        const optCard = document.createElement('div');
        optCard.className = `option-card`;
        optCard.dataset.optionKey = key;
        optCard.innerHTML = `
          <div class="option-badge">${key}</div>
          <div class="option-text">${opts[key]}</div>
        `;
        optionsContainer.appendChild(optCard);
      }
    });
  } else {
    optionsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; color: var(--accent-gold); font-size: 1.2rem; font-weight: 700; padding: 1rem;">
        💬 Pertanyaan Lisan / Essay (Jawab langsung di depan kelas)
      </div>
    `;
  }

  showSubStage('stage-question');
  startTimer();
}

// TIMER SYSTEM
function startTimer() {
  stopTimer();
  const timerSetting = parseInt(appData.settings.timer, 10);
  
  if (timerSetting <= 0) {
    document.getElementById('game-timer-container').style.display = 'none';
    return;
  }

  document.getElementById('game-timer-container').style.display = 'flex';
  gameState.timeLeft = timerSetting;
  updateTimerUI();

  gameState.timerInterval = setInterval(() => {
    gameState.timeLeft--;
    updateTimerUI();

    if (gameState.timeLeft <= 5 && gameState.timeLeft > 0) {
      audio.timerTick(true);
    } else if (gameState.timeLeft > 5) {
      audio.timerTick(false);
    }

    if (gameState.timeLeft <= 0) {
      stopTimer();
      audio.timerEndSound();
      showToast("⏰ WAKTU HABIS!", "error");
    }
  }, 1000);
}

function stopTimer() {
  if (gameState.timerInterval) {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = null;
  }
}

function updateTimerUI() {
  const display = document.getElementById('timer-display');
  const container = document.getElementById('game-timer-container');
  
  const mins = Math.floor(gameState.timeLeft / 60);
  const secs = gameState.timeLeft % 60;
  display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  if (gameState.timeLeft <= 5) {
    container.classList.add('warning');
  } else {
    container.classList.remove('warning');
  }
}

// TEACHER GRADING
function markAnswer(isCorrect) {
  stopTimer();

  const student = gameState.activeStudent;
  const question = gameState.activeQuestion;
  const points = question.points || appData.settings.defaultPoints;

  student.turns += 1;
  question.used = true;

  if (isCorrect) {
    student.score += points;
    student.correct += 1;
    audio.correctSound();
    confetti.burst(100);
    showResultOverlay(true, `+${points} POIN`);
  } else {
    student.wrong += 1;
    audio.wrongSound();
    showResultOverlay(false, `Belum tepat`);
  }

  saveData();
}

function revealAnswer() {
  if (!gameState.activeQuestion) return;
  const correctKey = gameState.activeQuestion.answer;
  if (!correctKey) {
    showToast("Tidak ada kunci jawaban pilihan ganda untuk soal ini.", "info");
    return;
  }

  document.querySelectorAll('.option-card').forEach(card => {
    if (card.dataset.optionKey === correctKey) {
      card.classList.add('correct-answer');
    }
  });

  gameState.isAnswerRevealed = true;
  audio.winnerChime();
}

function showResultOverlay(isCorrect, badgeText) {
  const resultIcon = document.getElementById('result-icon');
  const resultTitle = document.getElementById('result-title');
  const resultTag = document.getElementById('result-score-tag');

  if (isCorrect) {
    resultIcon.textContent = '🎉';
    resultTitle.textContent = 'JAWABAN BENAR!';
    resultTitle.className = 'result-title correct';
    resultTag.textContent = badgeText;
  } else {
    resultIcon.textContent = '💡';
    resultTitle.textContent = 'BELUM TEPAT';
    resultTitle.className = 'result-title wrong';
    resultTag.textContent = 'Tetap Semangat!';
  }

  showSubStage('stage-result');
}

function nextTurn() {
  resetGameStage();
}

// --- VIEW 3: KELOLA SISWA ---
function renderStudentsView() {
  const grid = document.getElementById('students-grid');
  const search = document.getElementById('search-student-input').value.toLowerCase();
  grid.innerHTML = '';

  const filtered = appData.students.filter(s => s.name.toLowerCase().includes(search));

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">👥</div>
        <div class="empty-title">Belum ada data siswa</div>
        <p>Klik tombol "+ Tambah Siswa" untuk menambah daftar peserta kuis.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(student => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div>
        <div class="student-card-header">
          <div class="student-name">${student.name}</div>
          <span class="student-status-badge ${student.hasPlayed ? 'played' : 'ready'}">
            ${student.hasPlayed ? 'Sudah Main' : 'Siap'}
          </span>
        </div>
        <div class="student-stats">
          <span>🏆 Poin: <strong>${student.score}</strong></span>
          <span>✅ Benar: <strong>${student.correct}</strong></span>
          <span>❌ Salah: <strong>${student.wrong}</strong></span>
        </div>
      </div>
      <div class="card-item-actions">
        <button class="icon-btn" onclick="editStudentModal('${student.id}')" title="Edit Nama">✏️</button>
        <button class="icon-btn delete" onclick="deleteStudent('${student.id}')" title="Hapus Siswa">🗑️</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function saveStudentForm() {
  const idInput = document.getElementById('student-id-input').value;
  const nameInput = document.getElementById('student-name-input').value.trim();

  if (!nameInput) {
    showToast("Nama siswa tidak boleh kosong!", "error");
    return;
  }

  // Duplicate check
  const duplicate = appData.students.find(s => s.name.toLowerCase() === nameInput.toLowerCase() && s.id !== idInput);
  if (duplicate) {
    showToast("Nama siswa tersebut sudah ada!", "error");
    return;
  }

  if (idInput) {
    const student = appData.students.find(s => s.id === idInput);
    if (student) student.name = nameInput;
  } else {
    appData.students.push({
      id: 'std-' + Date.now(),
      name: nameInput,
      score: 0,
      correct: 0,
      wrong: 0,
      turns: 0,
      hasPlayed: false
    });
  }

  saveData();
  closeModal('modal-student');
  renderStudentsView();
  showToast("Data siswa berhasil disimpan!", "success");
}

function deleteStudent(id) {
  if (confirm("Apakah Anda yakin ingin menghapus siswa ini?")) {
    appData.students = appData.students.filter(s => s.id !== id);
    saveData();
    renderStudentsView();
    showToast("Siswa dihapus", "info");
  }
}

function editStudentModal(id) {
  const student = appData.students.find(s => s.id === id);
  if (!student) return;
  
  document.getElementById('modal-student-title').textContent = 'Edit Siswa';
  document.getElementById('student-id-input').value = student.id;
  document.getElementById('student-name-input').value = student.name;
  openModal('modal-student');
}

function resetAllTurns() {
  if (confirm("Reset giliran seluruh siswa untuk memulai dari awal?")) {
    appData.students.forEach(s => s.hasPlayed = false);
    saveData();
    renderStudentsView();
    showToast("Status giliran seluruh siswa telah direset!", "success");
  }
}

// --- VIEW 4: BANK SOAL ---
function renderQuestionsView() {
  const grid = document.getElementById('questions-grid');
  const search = document.getElementById('search-question-input').value.toLowerCase();
  const categoryFilter = document.getElementById('filter-category-select').value;
  grid.innerHTML = '';

  // Update Category Select Options dynamically
  const categories = [...new Set(appData.questions.map(q => q.category || 'Umum'))];
  const catSelect = document.getElementById('filter-category-select');
  catSelect.innerHTML = `<option value="">Semua Kategori</option>`;
  categories.forEach(c => {
    catSelect.innerHTML += `<option value="${c}" ${categoryFilter === c ? 'selected' : ''}>${c}</option>`;
  });

  const filtered = appData.questions.filter(q => {
    const matchSearch = q.question.toLowerCase().includes(search);
    const matchCat = !categoryFilter || q.category === categoryFilter;
    return matchSearch && matchCat;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📚</div>
        <div class="empty-title">Tidak ada soal ditemukan</div>
        <p>Klik tombol "+ Tambah Soal" untuk memasukkan pertanyaan kuis baru.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(q => {
    const card = document.createElement('div');
    card.className = 'question-item-card';
    card.innerHTML = `
      <div>
        <div class="student-card-header">
          <span class="category-tag">${q.category || 'Umum'}</span>
          <span class="points-tag">+${q.points || 10} POIN</span>
        </div>
        <div class="question-item-text">${q.question}</div>
      </div>
      <div class="question-options-preview">
        <div class="question-option-preview ${q.answer === 'A' ? 'correct' : ''}">A. ${q.options?.A || '-'}</div>
        <div class="question-option-preview ${q.answer === 'B' ? 'correct' : ''}">B. ${q.options?.B || '-'}</div>
        <div class="question-option-preview ${q.answer === 'C' ? 'correct' : ''}">C. ${q.options?.C || '-'}</div>
        <div class="question-option-preview ${q.answer === 'D' ? 'correct' : ''}">D. ${q.options?.D || '-'}</div>
      </div>
      <div class="card-item-actions">
        <button class="icon-btn" onclick="editQuestionModal('${q.id}')" title="Edit Soal">✏️</button>
        <button class="icon-btn delete" onclick="deleteQuestion('${q.id}')" title="Hapus Soal">🗑️</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function saveQuestionForm() {
  const id = document.getElementById('question-id-input').value;
  const text = document.getElementById('q-text-input').value.trim();
  const optA = document.getElementById('q-opt-a').value.trim();
  const optB = document.getElementById('q-opt-b').value.trim();
  const optC = document.getElementById('q-opt-c').value.trim();
  const optD = document.getElementById('q-opt-d').value.trim();
  const ans = document.getElementById('q-answer-select').value;
  const category = document.getElementById('q-category-input').value.trim() || 'Umum';
  const points = parseInt(document.getElementById('q-points-input').value, 10) || 10;

  if (!text) {
    showToast("Pertanyaan soal tidak boleh kosong!", "error");
    return;
  }

  const payload = {
    id: id || 'q-' + Date.now(),
    question: text,
    options: { A: optA, B: optB, C: optC, D: optD },
    answer: ans,
    category: category,
    points: points,
    used: false
  };

  if (id) {
    const idx = appData.questions.findIndex(q => q.id === id);
    if (idx !== -1) appData.questions[idx] = payload;
  } else {
    appData.questions.push(payload);
  }

  saveData();
  closeModal('modal-question');
  renderQuestionsView();
  showToast("Soal berhasil disimpan!", "success");
}

function editQuestionModal(id) {
  const q = appData.questions.find(item => item.id === id);
  if (!q) return;

  document.getElementById('modal-question-title').textContent = 'Edit Soal';
  document.getElementById('question-id-input').value = q.id;
  document.getElementById('q-text-input').value = q.question;
  document.getElementById('q-opt-a').value = q.options?.A || '';
  document.getElementById('q-opt-b').value = q.options?.B || '';
  document.getElementById('q-opt-c').value = q.options?.C || '';
  document.getElementById('q-opt-d').value = q.options?.D || '';
  document.getElementById('q-answer-select').value = q.answer || 'A';
  document.getElementById('q-category-input').value = q.category || 'Informatika';
  document.getElementById('q-points-input').value = q.points || 10;

  openModal('modal-question');
}

function deleteQuestion(id) {
  if (confirm("Apakah Anda yakin ingin menghapus soal ini?")) {
    appData.questions = appData.questions.filter(q => q.id !== id);
    saveData();
    renderQuestionsView();
    showToast("Soal berhasil dihapus", "info");
  }
}

function resetQuestionsUsedStatus() {
  if (confirm("Reset status terpakai seluruh soal?")) {
    appData.questions.forEach(q => q.used = false);
    saveData();
    renderQuestionsView();
    showToast("Status soal terpakai berhasil direset!", "success");
  }
}

// --- VIEW 5: PAPAN SKOR / LEADERBOARD ---
function renderLeaderboardView() {
  const sorted = [...appData.students].sort((a, b) => b.score - a.score || b.correct - a.correct);
  
  // Podium 1, 2, 3
  const p1 = sorted[0];
  const p2 = sorted[1];
  const p3 = sorted[2];

  document.getElementById('podium-1-name').textContent = p1 ? p1.name : '-';
  document.getElementById('podium-1-score').textContent = p1 ? `${p1.score} Poin` : '0 Poin';

  document.getElementById('podium-2-name').textContent = p2 ? p2.name : '-';
  document.getElementById('podium-2-score').textContent = p2 ? `${p2.score} Poin` : '0 Poin';

  document.getElementById('podium-3-name').textContent = p3 ? p3.name : '-';
  document.getElementById('podium-3-score').textContent = p3 ? `${p3.score} Poin` : '0 Poin';

  // Table rendering
  const tbody = document.getElementById('leaderboard-tbody');
  tbody.innerHTML = '';

  sorted.forEach((student, idx) => {
    const tr = document.createElement('tr');
    let rankBadge = `${idx + 1}`;
    if (idx === 0) rankBadge = '🥇';
    else if (idx === 1) rankBadge = '🥈';
    else if (idx === 2) rankBadge = '🥉';

    const accuracy = student.turns > 0 ? Math.round((student.correct / student.turns) * 100) : 0;

    tr.innerHTML = `
      <td><span class="rank-badge">${rankBadge}</span></td>
      <td><strong>${student.name}</strong></td>
      <td><strong style="color: var(--accent-gold);">${student.score}</strong></td>
      <td>${student.correct}</td>
      <td>${student.wrong}</td>
      <td>${student.turns}</td>
      <td>${accuracy}%</td>
    `;
    tbody.appendChild(tr);
  });
}

// --- VIEW 6: SETTINGS & DATA EXPORT/IMPORT ---
function renderSettingsView() {
  document.getElementById('setting-timer-select').value = appData.settings.timer;
  document.getElementById('setting-sound-toggle').checked = appData.settings.sound;
  document.getElementById('setting-volume-range').value = appData.settings.volume;
  document.getElementById('setting-repeat-student').checked = appData.settings.repeatStudent;
  document.getElementById('setting-repeat-question').checked = appData.settings.repeatQuestion;
}

function updateSettingsFromUI() {
  appData.settings.timer = parseInt(document.getElementById('setting-timer-select').value, 10);
  appData.settings.sound = document.getElementById('setting-sound-toggle').checked;
  appData.settings.volume = parseInt(document.getElementById('setting-volume-range').value, 10);
  appData.settings.repeatStudent = document.getElementById('setting-repeat-student').checked;
  appData.settings.repeatQuestion = document.getElementById('setting-repeat-question').checked;
  
  saveData();
  showToast("Pengaturan disimpan", "success");
}

function exportJSON() {
  const jsonStr = JSON.stringify(appData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `kuis-interaktif-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Data berhasil diekspor ke file JSON!", "success");
}

function importJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported.students && imported.questions) {
        appData = imported;
        saveData();
        showToast("Data berhasil diimpor!", "success");
        renderHomeStats();
        switchView('view-home');
      } else {
        showToast("Format file JSON tidak sesuai skema aplikasi!", "error");
      }
    } catch (err) {
      showToast("Gagal membaca file JSON!", "error");
    }
  };
  reader.readAsText(file);
}

function resetAllDataConfirm() {
  if (confirm("PERINGATAN: Seluruh data siswa, soal, dan skor akan dihapus dan dikembalikan ke data default. Lanjutkan?")) {
    resetToDefaultData();
    showToast("Seluruh data telah direset ke default!", "success");
    switchView('view-home');
  }
}

// FULLSCREEN CONTROL
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      showToast("Gagal masuk mode fullscreen", "error");
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// MODAL HELPERS
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('active');
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('active');
}

// --- APP INIT & EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
  initData();
  renderHomeStats();

  // Navigation Links
  document.querySelectorAll('.nav-btn, .nav-brand').forEach(el => {
    el.addEventListener('click', (e) => {
      const view = el.dataset.view || 'view-home';
      switchView(view);
    });
  });

  // Buttons Init
  document.getElementById('btn-start-quiz').addEventListener('click', startGame);
  document.getElementById('btn-spin-name').addEventListener('click', spinName);
  document.getElementById('btn-correct-answer').addEventListener('click', () => markAnswer(true));
  document.getElementById('btn-wrong-answer').addEventListener('click', () => markAnswer(false));
  document.getElementById('btn-reveal-key').addEventListener('click', revealAnswer);
  document.getElementById('btn-next-player').addEventListener('click', nextTurn);
  document.getElementById('btn-fullscreen-toggle').addEventListener('click', toggleFullscreen);

  // Settings Controls
  document.getElementById('setting-timer-select').addEventListener('change', updateSettingsFromUI);
  document.getElementById('setting-sound-toggle').addEventListener('change', updateSettingsFromUI);
  document.getElementById('setting-volume-range').addEventListener('input', updateSettingsFromUI);
  document.getElementById('setting-repeat-student').addEventListener('change', updateSettingsFromUI);
  document.getElementById('setting-repeat-question').addEventListener('change', updateSettingsFromUI);

  // Student Form & Search
  document.getElementById('search-student-input').addEventListener('input', renderStudentsView);
  document.getElementById('btn-open-add-student').addEventListener('click', () => {
    document.getElementById('modal-student-title').textContent = 'Tambah Siswa Baru';
    document.getElementById('student-id-input').value = '';
    document.getElementById('student-name-input').value = '';
    openModal('modal-student');
  });

  // Question Form & Search
  document.getElementById('search-question-input').addEventListener('input', renderQuestionsView);
  document.getElementById('filter-category-select').addEventListener('change', renderQuestionsView);
  document.getElementById('btn-open-add-question').addEventListener('click', () => {
    document.getElementById('modal-question-title').textContent = 'Tambah Soal Baru';
    document.getElementById('question-id-input').value = '';
    document.getElementById('q-text-input').value = '';
    document.getElementById('q-opt-a').value = '';
    document.getElementById('q-opt-b').value = '';
    document.getElementById('q-opt-c').value = '';
    document.getElementById('q-opt-d').value = '';
    document.getElementById('q-answer-select').value = 'A';
    document.getElementById('q-category-input').value = 'Informatika';
    document.getElementById('q-points-input').value = 10;
    openModal('modal-question');
  });

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'F11') {
      e.preventDefault();
      toggleFullscreen();
    }
  });

  // Track Fullscreen Mode State for CSS Scaling
  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      document.body.classList.add('infocus-active');
    } else {
      document.body.classList.remove('infocus-active');
    }
  });
});
