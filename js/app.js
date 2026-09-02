/**
 * ==========================================================================
 * INFORMATICS ARCADE HUB — Full-Stack Educational Game Engine
 * Pure Vanilla JavaScript Application (100% Offline Compatible)
 * ==========================================================================
 */

// --- DEFAULT STATE & INITIAL DATABASE ---
const DEFAULT_CLASSES = [
  {
    id: "cls-1",
    name: "Kelas X-A",
    students: [
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
    ]
  },
  {
    id: "cls-2",
    name: "Kelas XI-B",
    students: [
      { id: "std-11", name: "Kevin", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false },
      { id: "std-12", name: "Laura", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false },
      { id: "std-13", name: "Muhammad", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false },
      { id: "std-14", name: "Nadia", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false },
      { id: "std-15", name: "Oscar", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false },
      { id: "std-16", name: "Putri", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false },
      { id: "std-17", name: "Qori", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false },
      { id: "std-18", name: "Rizky", score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false }
    ]
  }
];

const DEFAULT_QUESTIONS = [
  {
    id: "q-1",
    question: "Apakah fungsi utama dari Central Processing Unit (CPU) pada komputer?",
    options: { A: "Menyimpan data permanen", B: "Memproses data & eksekusi instruksi", C: "Mencetak dokumen", D: "Menampilkan gambar" },
    answer: "B",
    category: "Hardware",
    points: 10,
    used: false
  },
  {
    id: "q-2",
    question: "Manakah di bawah ini yang tergolong perangkat memori sementara (Volatile)?",
    options: { A: "Harddisk Drive (HDD)", B: "Flashdisk USB", C: "Random Access Memory (RAM)", D: "Solid State Drive (SSD)" },
    answer: "C",
    category: "Hardware",
    points: 10,
    used: false
  },
  {
    id: "q-3",
    question: "Tindakan kejahatan pencurian akun/password melalui situs web palsu dinamakan...",
    options: { A: "Phishing", B: "Hacking", C: "Formatting", D: "Debugging" },
    answer: "A",
    category: "Cybersecurity",
    points: 10,
    used: false
  },
  {
    id: "q-4",
    question: "Urutan langkah logis & sistematis untuk menyelesaikan masalah dinamakan...",
    options: { A: "Algoritma", B: "Variabel", C: "Pengulangan", D: "Pengondisian" },
    answer: "A",
    category: "Algoritma",
    points: 10,
    used: false
  },
  {
    id: "q-5",
    question: "Bahasa standar yang digunakan untuk struktur & konten halaman web adalah...",
    options: { A: "Python", B: "Java", C: "HTML", D: "C++" },
    answer: "C",
    category: "Programming",
    points: 10,
    used: false
  },
  {
    id: "q-6",
    question: "Perangkat jaringan yang bertugas mengarahkan paket data antar LAN & Internet adalah...",
    options: { A: "Printer", B: "Router", C: "Monitor", D: "Scanner" },
    answer: "B",
    category: "Network",
    points: 10,
    used: false
  },
  {
    id: "q-7",
    question: "Format penulisan IP Address Versi 4 (IPv4) terdiri dari berapa oktet desimal?",
    options: { A: "2 Oktet", B: "4 Oktet", C: "6 Oktet", D: "8 Oktet" },
    answer: "B",
    category: "Network",
    points: 10,
    used: false
  },
  {
    id: "q-8",
    question: "Program jahat yang menyebar sendiri & merusak file sistem dinamakan...",
    options: { A: "Malware / Virus", B: "Firewall", C: "Antivirus", D: "Cookie" },
    answer: "A",
    category: "Cybersecurity",
    points: 10,
    used: false
  },
  {
    id: "q-9",
    question: "Kombinasi tombol keyboard standar untuk menyalin (copy) objek/teks adalah...",
    options: { A: "Ctrl + X", B: "Ctrl + V", C: "Ctrl + C", D: "Ctrl + Z" },
    answer: "C",
    category: "Hardware",
    points: 10,
    used: false
  },
  {
    id: "q-10",
    question: "Manakah sistem operasi open-source berlogo pinguin yang banyak digunakan pada server?",
    options: { A: "Windows 11", B: "Linux", C: "macOS", D: "Android" },
    answer: "B",
    category: "OS",
    points: 10,
    used: false
  }
];

// Screenshot-based TTS Clues Database
const DEFAULT_TTS_CLUES = [
  // Across (Mendatar)
  { id: "tts-a1", type: "across", num: 1, row: 1, col: 1, answer: "MOUSE", clue: "Perangkat keras (hardware) penunjuk yang digerakkan tangan untuk mengklik objek di layar.", solved: false },
  { id: "tts-a2", type: "across", num: 2, row: 3, col: 1, answer: "CHROME", clue: "Perangkat lunak (software) penjelajah internet buatan Google yang sangat populer.", solved: false },
  { id: "tts-a3", type: "across", num: 3, row: 5, col: 1, answer: "KEYBOARD", clue: "Perangkat keras (hardware) tempat mengetik huruf dan angka.", solved: false },
  { id: "tts-a4", type: "across", num: 4, row: 7, col: 1, answer: "WHATSAPP", clue: "Aplikasi (software) obrolan dan panggilan video populer yang berlogo hijau.", solved: false },
  { id: "tts-a5", type: "across", num: 5, row: 9, col: 1, answer: "PRINTER", clue: "Perangkat keras (hardware) untuk mencetak tulisan dari komputer ke kertas.", solved: false },
  // Down (Menurun)
  { id: "tts-d1", type: "down", num: 1, row: 1, col: 1, answer: "MONITOR", clue: "Perangkat keras (hardware) untuk menampilkan gambar dan tampilan sistem.", solved: false },
  { id: "tts-d2", type: "down", num: 2, row: 1, col: 5, answer: "PHOTOSHOP", clue: "Perangkat lunak (software) pengedit foto populer buatan Adobe.", solved: false },
  { id: "tts-d3", type: "down", num: 3, row: 3, col: 4, answer: "SPEAKER", clue: "Perangkat keras (hardware) pengeluar suara musik atau audio dari komputer.", solved: false },
  { id: "tts-d4", type: "down", num: 4, row: 7, col: 1, answer: "WORD", clue: "Perangkat lunak (software) buatan Microsoft untuk mengolah kata dan membuat dokumen.", solved: false }
];

const DEFAULT_SETTINGS = {
  timer: 30,
  sound: true,
  volume: 80,
  repeatStudent: false,
  repeatQuestion: false
};

function buildDefaultGameQuestions() {
  const base = JSON.parse(JSON.stringify(DEFAULT_QUESTIONS));
  return {
    spinner: JSON.parse(JSON.stringify(base)),
    mysteryBox: JSON.parse(JSON.stringify(base)),
    ularTangga: JSON.parse(JSON.stringify(base)),
    tarikTambang: JSON.parse(JSON.stringify(base))
  };
}

// --- GLOBAL STATE ---
let activeGameQTab = 'spinner'; // 'spinner' | 'mysteryBox' | 'ularTangga' | 'tarikTambang'

// 1. CENTRALIZED DATA STRUCTURE (LocalStorage) EXACT IMPLEMENTATION
const DB_KEY = 'InformaticsArcadeDB';
let appState = JSON.parse(localStorage.getItem(DB_KEY)) || {
    activeClass: 'Kelas X-A',
    classes: {
        'Kelas X-A': { 
            students: [], 
            scores: [], 
            questions: { spinner: [], tts: [], mysteryBox: [], ularTangga: [], tarikTambang: [] },
            groups: [],
            tokens: [{currentCell: 1}, {currentCell: 1}, {currentCell: 1}, {currentCell: 1}]
        }
    }
};

function saveState() { 
    localStorage.setItem(DB_KEY, JSON.stringify(appState)); 
    // Sync to legacy fallback for compatibility
    syncStateToLegacy();
}

let appData = {
  activeClassId: "cls-1",
  classes: JSON.parse(JSON.stringify(DEFAULT_CLASSES)),
  gameQuestions: buildDefaultGameQuestions(),
  ttsClues: JSON.parse(JSON.stringify(DEFAULT_TTS_CLUES)),
  historyLogs: { "cls-1": [], "cls-2": [] },
  settings: JSON.parse(JSON.stringify(DEFAULT_SETTINGS))
};

function syncStateToLegacy() {
    // Keep appData synced so legacy UI doesn't crash
    // In a full refactor, appData would be entirely removed.
}

let gameState = {
  activeGame: 'home',
  activeStudent: null,
  activeQuestion: null,
  round: 1,
  timerInterval: null,
  timeLeft: 30,
  // Mystery Box State
  mysteryBoxes: [],
  // Ular Tangga State
  utTeamPositions: [1, 1, 1, 1],
  utActiveTeamIndex: 0,
  utIsMoving: false,
  // Tarik Tambang State
  ttFlagStep: 0, // -3 (Left Win) to +3 (Right Win)
  ttActiveTurn: 'left', // 'left' or 'right'
  ttLeftTeamName: "Tim Alpha",
  ttRightTeamName: "Tim Beta",
  ttLeftScore: 0,
  ttRightScore: 0,
  ttActiveQuestion: null,
  ttTurnTimerInterval: null,
  ttTurnTimeLeft: 20,
  // TTS State
  ttsActiveClue: null
};

// --- AUDIO SYNTHESIZER ENGINE ---
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
      if (this.ctx.state === 'suspended') this.ctx.resume();
      
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

  spinTick() { this.playTone(320 + Math.random() * 200, 'square', 0.05, 0.04); }
  
  winnerChime() {
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'triangle', 0.3, 0.15), idx * 120);
    });
  }

  jackpotFanfare() {
    [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'sine', 0.35, 0.2), idx * 90);
    });
  }

  malwareAlarm() {
    this.playTone(200, 'sawtooth', 0.4, 0.25);
    setTimeout(() => this.playTone(150, 'sawtooth', 0.5, 0.25), 180);
  }

  diceRollSound() {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => this.playTone(400 + Math.random() * 300, 'square', 0.06, 0.08), i * 70);
    }
  }

  correctSound() {
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 'sine', 0.4, 0.15), i * 90);
    });
  }

  wrongSound() {
    this.playTone(220, 'sawtooth', 0.3, 0.2);
    setTimeout(() => this.playTone(185, 'sawtooth', 0.4, 0.2), 150);
  }

  tugPullSound() {
    this.playTone(150, 'triangle', 0.2, 0.3);
    setTimeout(() => this.playTone(250, 'triangle', 0.25, 0.3), 100);
  }
}

const audio = new SoundEngine();

// --- CONFETTI PARTICLE SYSTEM ---
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
    const colors = ['#06b6d4', '#ec4899', '#a855f7', '#eab308', '#10b981'];
    
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
      p.vy += 0.4;
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

// --- DATA INITIALIZATION & LOCALSTORAGE ---
function initData() {
  const local = localStorage.getItem('informatics_arcade_hub_data') || localStorage.getItem('kuis_interaktif_data');
  if (local) {
    try {
      const parsed = JSON.parse(local);
      appData.activeClassId = parsed.activeClassId || "cls-1";
      appData.classes = parsed.classes || JSON.parse(JSON.stringify(DEFAULT_CLASSES));
      
      // Migration for segregated gameQuestions schema
      if (parsed.gameQuestions) {
        appData.gameQuestions = parsed.gameQuestions;
      } else if (parsed.questions && Array.isArray(parsed.questions)) {
        appData.gameQuestions = {
          spinner: JSON.parse(JSON.stringify(parsed.questions)),
          mysteryBox: JSON.parse(JSON.stringify(parsed.questions)),
          ularTangga: JSON.parse(JSON.stringify(parsed.questions)),
          tarikTambang: JSON.parse(JSON.stringify(parsed.questions))
        };
      } else {
        appData.gameQuestions = buildDefaultGameQuestions();
      }

      appData.ttsClues = parsed.ttsClues || JSON.parse(JSON.stringify(DEFAULT_TTS_CLUES));

      // Migration for class-segregated historyLogs schema
      if (parsed.historyLogs && typeof parsed.historyLogs === 'object' && !Array.isArray(parsed.historyLogs)) {
        appData.historyLogs = parsed.historyLogs;
      } else if (Array.isArray(parsed.historyLogs)) {
        appData.historyLogs = { [appData.activeClassId]: parsed.historyLogs };
      } else {
        appData.historyLogs = {};
      }

      appData.settings = { ...DEFAULT_SETTINGS, ...(parsed.settings || {}) };
    } catch (e) {
      console.error("Corrupted localStorage data, resetting defaults", e);
      resetToDefaultData();
    }
  } else {
    resetToDefaultData();
  }

  updateHeaderClassInfo();
}

function saveData() {
  localStorage.setItem('informatics_arcade_hub_data', JSON.stringify(appData));
  updateHeaderClassInfo();
}

function resetToDefaultData() {
  appData.activeClassId = "cls-1";
  appData.classes = JSON.parse(JSON.stringify(DEFAULT_CLASSES));
  appData.gameQuestions = buildDefaultGameQuestions();
  appData.ttsClues = JSON.parse(JSON.stringify(DEFAULT_TTS_CLUES));
  appData.historyLogs = { "cls-1": [], "cls-2": [] };
  appData.settings = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
  saveData();
}

function getActiveClass() {
  let activeCls = appData.classes.find(c => c.id === appData.activeClassId);
  if (!activeCls && appData.classes.length > 0) {
    activeCls = appData.classes[0];
    appData.activeClassId = activeCls.id;
  }
  return activeCls;
}

function updateHeaderClassInfo() {
  const activeCls = getActiveClass();
  if (activeCls) {
    const navName = document.getElementById('nav-active-class-name');
    const navCount = document.getElementById('nav-students-count');
    if (navName) navName.textContent = activeCls.name;
    if (navCount) navCount.textContent = `Total ${activeCls.students.length} Siswa Terdaftar`;
  }
}

// --- LOG GAME SESSION ANALYTICS (CLASS-SEGREGATED) ---
function logGameSession(gameName, scoreDetail, finalScore) {
  const cls = getActiveClass();
  const classId = cls ? cls.id : appData.activeClassId;

  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');
  const timestampStr = `${day}/${month}/${year} - ${hours}:${mins}`;

  const newLog = {
    id: "log-" + Date.now(),
    className: cls ? cls.name : "Kelas X-A",
    game: gameName,
    scoreDetail: scoreDetail,
    finalScore: finalScore != null ? finalScore : scoreDetail,
    timestamp: timestampStr
  };

  if (!appData.historyLogs) appData.historyLogs = {};
  if (!appData.historyLogs[classId]) appData.historyLogs[classId] = [];
  appData.historyLogs[classId].unshift(newLog);

  // ✅ Also push to InformaticsScoreHistory for exportExcel()
  try {
    const globalHistory = JSON.parse(localStorage.getItem('InformaticsScoreHistory')) || [];
    globalHistory.unshift(newLog);
    // Keep max 500 entries to avoid bloat
    if (globalHistory.length > 500) globalHistory.splice(500);
    localStorage.setItem('InformaticsScoreHistory', JSON.stringify(globalHistory));
  } catch(e) {}

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

// --- VIEW NAVIGATION ---
function switchView(viewId) {
  stopTimer();
  stopTTTurnTimer();
  document.querySelectorAll('.view-panel').forEach(panel => panel.classList.remove('active'));
  
  const targetView = document.getElementById(viewId);
  if (targetView) targetView.classList.add('active');
  gameState.activeGame = viewId;

  if (viewId === 'view-home') renderHomeStats();
  if (viewId === 'view-mystery') initMysteryBoxes();
  if (viewId === 'view-ulartangga') renderUlarTanggaBoard();
  if (viewId === 'view-tariktambang') startTarikTambangMatch();
  if (viewId === 'view-tts') initTTSGame();
  if (viewId === 'view-leaderboard') renderLeaderboardView();
}

function renderHomeStats() {
  const cls = getActiveClass();
  if (!cls) return;

  const heroSelect = document.getElementById('hero-class-select');
  if (heroSelect) {
    heroSelect.innerHTML = '';
    appData.classes.forEach(c => {
      heroSelect.innerHTML += `<option value="${c.id}" ${c.id === appData.activeClassId ? 'selected' : ''}>${c.name}</option>`;
    });
  }
}

function openTeacherDashboard(tabId = 'tab-classes') {
  openModal('modal-teacher-dashboard');
  if (tabId) switchDashTab(tabId);
}

function launchGame(gameKey) {
  const gameViews = {
    spinner: 'view-spinner',
    mystery: 'view-mystery',
    ulartangga: 'view-ulartangga',
    tariktambang: 'view-tariktambang',
    tts: 'view-tts'
  };

  const targetView = gameViews[gameKey];
  if (!targetView) return;

  // 1. DIRECT PLAY MODE: Immediately switch to game view. NEVER trigger Administration Dashboard modal!
  switchView(targetView);

  // 2. Data check for active class profile
  const cls = getActiveClass();
  const hasStudents = cls && cls.students && cls.students.length > 0;

  let modeQuestions = [];
  if (gameKey === 'tts') {
    modeQuestions = appData.ttsClues && appData.ttsClues.length > 0 ? appData.ttsClues : DEFAULT_TTS_CLUES;
  } else {
    const keyMap = { spinner: 'spinner', mystery: 'mysteryBox', ulartangga: 'ularTangga', tariktambang: 'tarikTambang' };
    modeQuestions = appData.gameQuestions[keyMap[gameKey]] || [];
  }
  const hasQuestions = modeQuestions && modeQuestions.length > 0;

  const viewContainer = document.getElementById(targetView);
  if (!viewContainer) return;

  let warningOverlay = viewContainer.querySelector('.game-no-data-warning');

  // CONDITION B (No Questions / No Students): Display clean inline warning overlay inside game view
  if (!hasQuestions || !hasStudents) {
    if (!warningOverlay) {
      warningOverlay = document.createElement('div');
      warningOverlay.className = 'game-no-data-warning flex flex-col items-center justify-center p-8 bg-slate-900/95 border-2 border-rose-500/60 rounded-3xl text-center gap-4 max-w-md mx-auto my-12 shadow-[0_0_30px_rgba(244,63,94,0.3)] z-20 relative';
      warningOverlay.innerHTML = `
        <div class="text-5xl animate-bounce">⚠️</div>
        <h3 class="font-cyber text-lg font-bold text-rose-400">SOAL / SISWA BELUM ADA</h3>
        <p class="text-xs text-slate-300 leading-relaxed">
          ${!hasStudents ? 'Belum ada siswa terdaftar di kelas aktif.' : 'Bank soal untuk game mode ini masih kosong.'}<br>
          Silakan isi atau import soal terlebih dahulu di menu <strong>Pengaturan / Dashboard Guru</strong>.
        </p>
        <button onclick="switchView('view-home')" class="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 font-bold text-xs text-cyan-300 border border-slate-700 transition shadow">
          🏠 Kembali ke Beranda
        </button>
      `;
      viewContainer.prepend(warningOverlay);
    } else {
      warningOverlay.querySelector('p').innerHTML = `
        ${!hasStudents ? 'Belum ada siswa terdaftar di kelas aktif.' : 'Bank soal untuk game mode ini masih kosong.'}<br>
        Silakan isi atau import soal terlebih dahulu di menu <strong>Pengaturan / Dashboard Guru</strong>.
      `;
      warningOverlay.classList.remove('hidden');
    }
  } else {
    // CONDITION A (Data Exists): Render live game interface
    if (warningOverlay) {
      warningOverlay.classList.add('hidden');
    }

    if (gameKey === 'spinner') resetGameStage();
    else if (gameKey === 'mystery') initMysteryBoxes();
    else if (gameKey === 'ulartangga') renderUlarTanggaBoard();
    else if (gameKey === 'tariktambang') startTarikTambangMatch();
    else if (gameKey === 'tts') initTTSGame();
  }
}

// --- GAME 1: SPINNER WHEEL ---
function resetGameStage() {
  stopTimer();
  gameState.activeStudent = null;
  gameState.activeQuestion = null;

  const cls = getActiveClass();
  const playedCount = cls.students.filter(s => s.hasPlayed).length;
  
  document.getElementById('game-header-round').textContent = gameState.round;
  document.getElementById('game-header-played').textContent = `${playedCount}/${cls.students.length}`;

  showSubStage('stage-spin');
  const spinBtn = document.getElementById('btn-spin-name');
  spinBtn.disabled = false;
  spinBtn.innerHTML = `🎡 SPIN NAMA SISWA`;
  document.getElementById('slot-name-display').textContent = '???';
}

function showSubStage(stageId) {
  document.querySelectorAll('.game-substage').forEach(el => el.classList.add('hidden'));
  const target = document.getElementById(stageId);
  if (target) target.classList.remove('hidden');
}

function spinName() {
  const cls = getActiveClass();
  const spinBtn = document.getElementById('btn-spin-name');
  const nameDisplay = document.getElementById('slot-name-display');

  let candidates = appData.settings.repeatStudent ? [...cls.students] : cls.students.filter(s => !s.hasPlayed);
  if (candidates.length === 0) {
    showToast("Semua siswa telah mendapat giliran! Mereset status giliran putaran.", "info");
    cls.students.forEach(s => s.hasPlayed = false);
    gameState.round++;
    saveData();
    candidates = [...cls.students];
  }

  spinBtn.disabled = true;
  let duration = 2200;
  let startTime = Date.now();

  function roll() {
    const elapsed = Date.now() - startTime;
    const randomIndex = Math.floor(Math.random() * candidates.length);
    nameDisplay.textContent = candidates[randomIndex].name;
    audio.spinTick();

    if (elapsed < duration) {
      setTimeout(roll, 50 + (elapsed / duration) * 150);
    } else {
      const winner = candidates[Math.floor(Math.random() * candidates.length)];
      gameState.activeStudent = winner;
      nameDisplay.textContent = winner.name;
      audio.winnerChime();
      confetti.burst(60);

      winner.hasPlayed = true;
      saveData();

      setTimeout(() => {
        showSubStage('stage-transition');
        document.getElementById('transition-student-name').textContent = winner.name;
        setTimeout(pickAndShowQuestion, 1600);
      }, 1500);
    }
  }

  roll();
}

function pickAndShowQuestion() {
  const pool = appData.gameQuestions.spinner || [];
  let candidates = appData.settings.repeatQuestion ? [...pool] : pool.filter(q => !q.used);
  if (candidates.length === 0) {
    pool.forEach(q => q.used = false);
    candidates = [...pool];
    showToast("Soal Spinner direset untuk putaran baru", "info");
  }

  const selectedQuestion = candidates[Math.floor(Math.random() * candidates.length)];
  gameState.activeQuestion = selectedQuestion;

  document.getElementById('question-category-tag').textContent = selectedQuestion.category || 'Umum';
  document.getElementById('question-points-tag').textContent = `+${selectedQuestion.points || 10} POIN`;
  document.getElementById('question-active-player').textContent = `PESERTA: ${gameState.activeStudent ? gameState.activeStudent.name : 'SISWA'}`;
  document.getElementById('question-text-display').textContent = selectedQuestion.question;

  const optionsContainer = document.getElementById('options-grid');
  optionsContainer.innerHTML = '';

  const opts = selectedQuestion.options || {};
  ['A', 'B', 'C', 'D'].forEach(key => {
    if (opts[key]) {
      const optCard = document.createElement('div');
      optCard.className = `p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3 font-semibold text-slate-200 cursor-pointer hover:border-cyan-400 transition option-card`;
      optCard.dataset.key = key;
      optCard.innerHTML = `
        <span class="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-bold flex items-center justify-center text-sm">${key}</span>
        <span class="text-sm">${opts[key]}</span>
      `;
      optionsContainer.appendChild(optCard);
    }
  });

  showSubStage('stage-question');
  startTimer();
}

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

    if (gameState.timeLeft <= 5 && gameState.timeLeft > 0) audio.playTone(880, 'sawtooth', 0.1, 0.15);

    if (gameState.timeLeft <= 0) {
      stopTimer();
      audio.wrongSound();
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
  if (!display) return;
  const mins = Math.floor(gameState.timeLeft / 60);
  const secs = gameState.timeLeft % 60;
  display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function markAnswer(isCorrect) {
  stopTimer();
  const student = gameState.activeStudent;
  const question = gameState.activeQuestion;
  const points = question ? (question.points || 10) : 10;

  if (student) student.turns += 1;
  if (question) question.used = true;

  if (isCorrect) {
    if (student) {
      student.score += points;
      student.correct += 1;
      logGameSession("Spinner Wheel", `${student.name} (+${points} Poin)`);
    }
    audio.correctSound();
    confetti.burst(80);
    showResultOverlay(true, `+${points} POIN`);
  } else {
    if (student) student.wrong += 1;
    audio.wrongSound();
    showResultOverlay(false, `Belum Tepat`);
  }

  saveData();
}

function revealAnswer() {
  if (!gameState.activeQuestion) return;
  const correctKey = gameState.activeQuestion.answer;
  document.querySelectorAll('.option-card').forEach(card => {
    if (card.dataset.key === correctKey) {
      card.classList.add('border-emerald-500', 'bg-emerald-500/20');
    }
  });
  audio.winnerChime();
}

function showResultOverlay(isCorrect, badgeText) {
  const resultIcon = document.getElementById('result-icon');
  const resultTitle = document.getElementById('result-title');
  const resultTag = document.getElementById('result-score-tag');

  if (isCorrect) {
    resultIcon.textContent = '🎉';
    resultTitle.textContent = 'JAWABAN BENAR!';
    resultTitle.className = 'font-cyber text-3xl font-black text-emerald-400';
    resultTag.textContent = badgeText;
  } else {
    resultIcon.textContent = '💡';
    resultTitle.textContent = 'BELUM TEPAT';
    resultTitle.className = 'font-cyber text-3xl font-black text-rose-400';
    resultTag.textContent = 'Tetap Semangat!';
  }

  showSubStage('stage-result');
}

function nextTurn() {
  resetGameStage();
}

// --- GAME 2: MYSTERY BOX (24 CARDS) ---
function initMysteryBoxes() {
  const grid = document.getElementById('mystery-boxes-grid');
  const openedCount = document.getElementById('mystery-opened-count');
  const studentSelect = document.getElementById('mystery-student-select');
  if (!grid) return;

  const cls = getActiveClass();
  if (studentSelect) {
    studentSelect.innerHTML = '';
    cls.students.forEach(s => {
      studentSelect.innerHTML += `<option value="${s.id}">${s.name} (${s.score} Poin)</option>`;
    });
  }

  let types = [];
  for (let i = 0; i < 17; i++) types.push('question');
  for (let i = 0; i < 4; i++) types.push('jackpot');
  for (let i = 0; i < 3; i++) types.push('malware');

  types.sort(() => Math.random() - 0.5);

  gameState.mysteryBoxes = types.map((t, idx) => ({
    id: idx,
    type: t,
    opened: false,
    solvedState: null // 'correct' | 'wrong' | null
  }));

  renderMysteryBoxesGrid();
}

function renderMysteryBoxesGrid() {
  const grid = document.getElementById('mystery-boxes-grid');
  const openedCount = document.getElementById('mystery-opened-count');
  grid.innerHTML = '';

  let count = 0;
  gameState.mysteryBoxes.forEach((box, idx) => {
    if (box.opened) count++;

    const card = document.createElement('div');
    // Apply persistent color class based on solvedState
    let solvedClass = '';
    if (box.solvedState === 'correct') solvedClass = 'solved-correct';
    else if (box.solvedState === 'wrong') solvedClass = 'solved-wrong';
    card.className = `mystery-card-wrapper ${box.opened ? 'flipped' : ''} ${solvedClass}`;
    card.onclick = () => flipMysteryBox(idx);

    let backContent = '';
    if (box.solvedState === 'correct') {
      // Persistent Neon Green — no fallback text/emoji
      backContent = `<div class="font-cyber text-sm font-black text-white">BENAR</div><div class="text-[0.65rem] text-emerald-100 mt-1">+POIN</div>`;
    } else if (box.solvedState === 'wrong') {
      // Persistent Neon Red — no fallback text/emoji
      backContent = `<div class="font-cyber text-sm font-black text-white">SALAH</div><div class="text-[0.65rem] text-rose-100 mt-1">MALWARE</div>`;
    } else if (box.type === 'question') {
      backContent = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" fill="#0891b2" stroke="#06b6d4" stroke-width="2"/><text x="16" y="22" text-anchor="middle" fill="white" font-size="18" font-weight="900">?</text></svg><div class="text-xs font-bold text-cyan-400 mt-1">SOAL</div>`;
    } else if (box.type === 'jackpot') {
      backContent = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><polygon points="16,2 20,12 30,12 22,19 25,30 16,23 7,30 10,19 2,12 12,12" fill="#facc15" stroke="#eab308" stroke-width="1.5"/></svg><div class="text-xs font-bold text-yellow-400 mt-1">+20 POIN</div>`;
    } else {
      backContent = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="13" fill="#e11d48" stroke="#f43f5e" stroke-width="2"/><path d="M10 10 L22 22 M22 10 L10 22" stroke="white" stroke-width="3" stroke-linecap="round"/></svg><div class="text-xs font-bold text-rose-500 mt-1">-10 POIN</div>`;
    }

    card.innerHTML = `
      <div class="mystery-card-inner">
        <div class="mystery-card-front">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="4" y="12" width="28" height="20" rx="3" fill="#7c3aed" stroke="#a855f7" stroke-width="2"/><path d="M4 14 L18 6 L32 14" fill="#a855f7" stroke="#c084fc" stroke-width="2"/><rect x="14" y="18" width="8" height="8" rx="1" fill="#e9d5ff" opacity="0.6"/></svg>
          <div class="font-cyber text-xs font-extrabold text-fuchsia-300 mt-1">BOX #${idx + 1}</div>
        </div>
        <div class="mystery-card-back">
          ${backContent}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  if (openedCount) openedCount.textContent = `${count}/24`;
}

function flipMysteryBox(idx) {
  const box = gameState.mysteryBoxes[idx];
  if (!box || box.opened) return;

  box.opened = true;
  renderMysteryBoxesGrid();

  const studentSelect = document.getElementById('mystery-student-select');
  const studentId = studentSelect ? studentSelect.value : null;
  const cls = getActiveClass();
  const student = cls.students.find(s => s.id === studentId) || cls.students[0];

  if (box.type === 'jackpot') {
    audio.jackpotFanfare();
    confetti.burst(100);
    if (student) {
      student.score += 20;
      logGameSession("Mystery Box", `${student.name} (+20 Jackpot)`);
    }
    box.solvedState = 'correct';
    saveData();
    renderMysteryBoxesGrid();
    showGameEventOverlay('INSTANT JACKPOT!', `Selamat ${student ? student.name : 'Siswa'}! Mendapatkan Bonus +20 POIN secara cuma-cuma!`, 'jackpot');
  } else if (box.type === 'malware') {
    audio.malwareAlarm();
    if (student) {
      student.score = Math.max(0, student.score - 10);
      logGameSession("Mystery Box", `${student.name} (-10 Malware)`);
    }
    box.solvedState = 'wrong';
    saveData();
    renderMysteryBoxesGrid();
    showGameEventOverlay('MALWARE TRAP!', `Awas ${student ? student.name : 'Siswa'}! Terkena jebakan malware & kehilangan -10 POIN!`, 'malware');
  } else {
    audio.spinTick();
    const pool = appData.gameQuestions.mysteryBox || appData.gameQuestions.spinner || [];
    const randomQ = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : { question: "Soal bawaan", options: { A: "A", B: "B", C: "C", D: "D" }, answer: "A" };
    showGameEventOverlay(`TANTANGAN SOAL — ${student ? student.name : 'Siswa'}`, '', 'question', randomQ, (isCorrect) => {
      if (isCorrect) {
        if (student) {
          student.score += 10;
          student.correct += 1;
          logGameSession("Mystery Box", `${student.name} (+10 Poin)`);
        }
        box.solvedState = 'correct';
        audio.correctSound();
        confetti.burst(60);
        showToast(`Jawaban Benar! +10 Poin`, "success");
      } else {
        if (student) student.wrong += 1;
        box.solvedState = 'wrong';
        audio.wrongSound();
        showToast(`Jawaban Belum Tepat`, "error");
      }
      saveData();
      renderMysteryBoxesGrid();
      advanceMysteryBoxTurn();
    });
  }
}

function advanceMysteryBoxTurn() {
  const studentSelect = document.getElementById('mystery-student-select');
  if (!studentSelect || studentSelect.options.length <= 1) return;

  const currentIndex = studentSelect.selectedIndex;
  const nextIndex = (currentIndex + 1) % studentSelect.options.length;
  studentSelect.selectedIndex = nextIndex;

  const nextStudentName = studentSelect.options[nextIndex].text;
  showToast(`🔄 Giliran otomatis beralih ke: ${nextStudentName}`, "info");
}

function resetMysteryBoxes() {
  initMysteryBoxes();
  showToast("Mystery Box berhasil direset!", "success");
}

// --- GAME 3: ULAR TANGGA LOGIKA (ANIMATED STEP-BY-STEP PION MOVEMENT) ---
const LADDERS = { 4: 14, 9: 31, 28: 84, 51: 67, 71: 91 };
const SNAKES = { 17: 7, 47: 26, 62: 19, 87: 24, 98: 78 };

function renderUlarTanggaBoard() {
  const board = document.getElementById('ular-tangga-board');
  if (!board) return;
  board.innerHTML = '';

  // SVG ladder icon (vector — no emoji)
  const LADDER_SVG = `<svg class="ut-badge-ladder" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="0" width="2" height="14" rx="0.5" fill="#34d399"/><rect x="10" y="0" width="2" height="14" rx="0.5" fill="#34d399"/><rect x="2" y="3" width="10" height="1.5" rx="0.5" fill="#6ee7b7"/><rect x="2" y="7" width="10" height="1.5" rx="0.5" fill="#6ee7b7"/><rect x="2" y="11" width="10" height="1.5" rx="0.5" fill="#6ee7b7"/></svg>`;
  // SVG snake icon (vector — no emoji)
  const SNAKE_SVG = `<svg class="ut-badge-snake" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2 Q7 0 9 4 Q11 8 7 10 Q3 12 5 14" stroke="#fb7185" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="3" cy="2" r="1.5" fill="#f43f5e"/></svg>`;

  for (let row = 9; row >= 0; row--) {
    const isEvenRow = row % 2 === 0;
    for (let col = 0; col < 10; col++) {
      const tileNum = row * 10 + (isEvenRow ? col + 1 : 10 - col);
      
      const tileDiv = document.createElement('div');
      const isSpecialLadder = !!LADDERS[tileNum];
      const isSpecialSnake = !!SNAKES[tileNum];

      tileDiv.className = `ut-tile ${tileNum % 2 === 0 ? 'ut-tile-even' : 'ut-tile-odd'} ${isSpecialLadder ? 'special-ladder' : ''} ${isSpecialSnake ? 'special-snake' : ''}`;
      tileDiv.id = `ut-tile-${tileNum}`;

      let extraBadge = '';
      if (isSpecialLadder) extraBadge = `<span class="ut-badge-ladder">${LADDER_SVG} ${LADDERS[tileNum]}</span>`;
      if (isSpecialSnake) extraBadge = `<span class="ut-badge-snake">${SNAKE_SVG} ${SNAKES[tileNum]}</span>`;

      tileDiv.innerHTML = `
        <span class="absolute top-0.5 left-1 text-[0.6rem] opacity-60">${tileNum}</span>
        ${extraBadge}
        <div id="ut-tokens-container-${tileNum}" class="flex items-center justify-center flex-wrap gap-0.5 mt-2"></div>
      `;

      board.appendChild(tileDiv);
    }
  }

  updateUlarTanggaTokensDisplay();
}

function updateUlarTanggaTokensDisplay() {
  for (let i = 1; i <= 100; i++) {
    const container = document.getElementById(`ut-tokens-container-${i}`);
    if (container) container.innerHTML = '';
  }

  const teamColors = ['bg-rose-500 text-white', 'bg-cyan-500 text-slate-950', 'bg-emerald-500 text-slate-950', 'bg-yellow-500 text-slate-950'];
  const teamLabels = ['🔴', '🔵', '🟢', '🟡'];

  gameState.utTeamPositions.forEach((pos, idx) => {
    const posElem = document.getElementById(`team-pos-${idx}`);
    if (posElem) posElem.textContent = pos;

    const container = document.getElementById(`ut-tokens-container-${pos}`);
    if (container) {
      const token = document.createElement('div');
      token.className = `ut-team-token ${teamColors[idx]}`;
      token.textContent = teamLabels[idx];
      container.appendChild(token);
    }
  });

  for (let i = 0; i < 4; i++) {
    const card = document.getElementById(`team-card-${i}`);
    if (card) {
      if (i === gameState.utActiveTeamIndex) card.classList.add('active');
      else card.classList.remove('active');
    }
  }
}

function rollDiceUlarTangga() {
  if (gameState.utIsMoving) return;

  const btn = document.getElementById('btn-roll-dice');
  const diceBox = document.getElementById('dice-3d-box');
  const overlay = document.getElementById('dice-popup-overlay');
  const popupFace = document.getElementById('dice-popup-face');
  const resultLabel = document.getElementById('dice-popup-result-label');

  btn.disabled = true;
  gameState.utIsMoving = true;
  audio.diceRollSound();

  // Show dice popup overlay
  if (overlay) overlay.classList.add('active');
  if (popupFace) {
    popupFace.classList.add('spinning');
    popupFace.classList.remove('landed');
    popupFace.textContent = '?';
  }
  if (resultLabel) { resultLabel.textContent = ''; resultLabel.style.opacity = '0'; }

  // Spin animation in popup for ~800ms
  let rolls = 0;
  const interval = setInterval(() => {
    const tempVal = Math.floor(Math.random() * 6) + 1;
    if (popupFace) popupFace.textContent = tempVal;
    if (diceBox) diceBox.textContent = tempVal;
    rolls++;

    if (rolls > 12) {
      clearInterval(interval);
      const diceVal = Math.floor(Math.random() * 6) + 1;

      // Show landed state
      if (popupFace) {
        popupFace.classList.remove('spinning');
        popupFace.classList.add('landed');
        popupFace.textContent = diceVal;
      }
      if (diceBox) {
        diceBox.classList.remove('dice-rolling');
        diceBox.textContent = diceVal;
      }
      if (resultLabel) {
        resultLabel.textContent = `MAJU ${diceVal} LANGKAH!`;
        resultLabel.style.opacity = '1';
      }

      // Hold result visible for 700ms, then close popup and start movement
      setTimeout(() => {
        if (overlay) overlay.classList.remove('active');
        btn.disabled = false;
        // Animate step-by-step pion movement AFTER dice popup closes
        moveUlarTanggaToken(gameState.utActiveTeamIndex, diceVal);
      }, 700);
    }
  }, 65);
}

// ULAR TANGGA BOARD ZOOM CAMERA TRACKING
function zoomBoardToTile(tileNum) {
  // Zoom functionality removed to maintain a fullscreen responsive board
}

function resetBoardZoom() {
  // Zoom functionality removed to maintain a fullscreen responsive board
}

function getSafeTokens() {
    const clsName = getActiveClass()?.name || "Kelas X-A";
    if (!appState.classes) appState.classes = {};
    if (!appState.classes[clsName]) {
        appState.classes[clsName] = { students: [], scores: [], questions: { spinner: [], tts: [], mysteryBox: [], ularTangga: [], tarikTambang: [] }, groups: [], tokens: [{currentCell: 1}, {currentCell: 1}, {currentCell: 1}, {currentCell: 1}] };
    }
    if (!appState.classes[clsName].tokens) {
        appState.classes[clsName].tokens = [{currentCell: 1}, {currentCell: 1}, {currentCell: 1}, {currentCell: 1}];
        // sync from legacy
        gameState.utTeamPositions.forEach((pos, i) => appState.classes[clsName].tokens[i].currentCell = pos);
    }
    appState.activeClass = clsName; 
    return appState.classes[clsName].tokens;
}

function renderBoardTokens() {
    getSafeTokens().forEach((t, i) => {
        gameState.utTeamPositions[i] = t.currentCell;
    });
    updateUlarTanggaTokensDisplay();
    audio.playTone(300 + gameState.utTeamPositions[gameState.utActiveTeamIndex] * 5, 'sine', 0.05, 0.05);
}

function checkSnakeOrLadder(cell) {
    if (LADDERS[cell]) {
        audio.jackpotFanfare();
        showToast(`🚀 PANJAT TANGGA FIBER OPTIK KE PETAK ${LADDERS[cell]}!`, "success");
        return LADDERS[cell];
    }
    if (SNAKES[cell]) {
        audio.wrongSound();
        showToast(`🐍 DIGIGIT ULAR! TURUN KE PETAK ${SNAKES[cell]}!`, "error");
        return SNAKES[cell];
    }
    return cell;
}

function openUlarTanggaQuestionModal(cell) {
    gameState.utIsMoving = false;
    triggerUlarTanggaQuestion(gameState.utActiveTeamIndex, cell);
}

async function moveUlarTanggaToken(tokenId, diceValue) {
    let tokens = getSafeTokens();
    let token = tokens[tokenId];
    let startCell = token.currentCell;
    let targetCell = startCell + diceValue;
    if (targetCell > 100) targetCell = 100;

    // Smooth cell-by-cell slow animation
    for (let current = startCell + 1; current <= targetCell; current++) {
        token.currentCell = current;
        renderBoardTokens(); // Update layout coordinates visually
        await new Promise(resolve => setTimeout(resolve, 750)); // Ludo-style pacing
    }

    // Check for snake or ladder collisions afterward
    let finalCell = checkSnakeOrLadder(targetCell); 
    if (finalCell !== targetCell) {
        token.currentCell = finalCell;
        renderBoardTokens();
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Trigger the question modal strictly AFTER token comes to a full stop
    openUlarTanggaQuestionModal(token.currentCell);
}

function triggerUlarTanggaQuestion(teamIndex, targetPos) {
  const teamNames = ['Tim Red (🔴)', 'Tim Blue (🔵)', 'Tim Green (🟢)', 'Tim Yellow (🟡)'];
  const pool = appData.gameQuestions.ularTangga || appData.gameQuestions.spinner || [];
  const randomQ = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : { question: "Soal bawaan Ular Tangga", options: { A: "A", B: "B", C: "C", D: "D" }, answer: "A" };

  showGameEventOverlay(`🎲 TANTANGAN SOAL — ${teamNames[teamIndex]}`, `Tiba di Petak #${targetPos}`, 'question', randomQ, (isCorrect) => {
    resetBoardZoom(); // Reset camera zoom when modal closes

    if (isCorrect) {
      audio.correctSound();
      showToast(`${teamNames[teamIndex]} Menjawab BENAR!`, "success");

      if (LADDERS[targetPos]) {
        showToast(`🚀 PANJAT TANGGA FIBER OPTIK KE PETAK ${LADDERS[targetPos]}!`, "success");
        gameState.utTeamPositions[teamIndex] = LADDERS[targetPos];
        zoomBoardToTile(LADDERS[targetPos]);
        setTimeout(resetBoardZoom, 1200);
        audio.jackpotFanfare();
      }
    } else {
      audio.wrongSound();
      showToast(`${teamNames[teamIndex]} Menjawab SALAH! Mundur 2 langkah`, "error");
      
      if (SNAKES[targetPos]) {
        gameState.utTeamPositions[teamIndex] = SNAKES[targetPos];
      } else {
        gameState.utTeamPositions[teamIndex] = Math.max(1, targetPos - 2);
      }
    }

    updateUlarTanggaTokensDisplay();

    if (gameState.utTeamPositions[teamIndex] >= 100) {
      audio.winnerChime();
      confetti.burst(150);
      logGameSession("Ular Tangga", `Juara: ${teamNames[teamIndex]}`);
      showToast(`🏆 SELAMAT! ${teamNames[teamIndex]} MEMENANGKAN GAME ULAR TANGGA LOGIKA!`, "success");
    } else {
      gameState.utActiveTeamIndex = (gameState.utActiveTeamIndex + 1) % 4;
      const teamNameDisplay = document.getElementById('ut-active-team-name');
      if (teamNameDisplay) teamNameDisplay.textContent = teamNames[gameState.utActiveTeamIndex];
    }
  });
}

// --- GAME 4: CYBER TUG OF WAR (20s COUNTDOWN TIMER & AVATAR ANIMATIONS) ---
function resetTarikTambangMatch() {
  stopTTTurnTimer();
  gameState.ttFlagStep = 0;
  gameState.ttActiveTurn = 'left';
  gameState.ttLeftScore = 0;
  gameState.ttRightScore = 0;

  document.getElementById('tt-setup-panel').classList.remove('hidden');
  document.getElementById('tt-arena-panel').classList.add('hidden');
}

function startTarikTambangMatch() {
  const leftName = document.getElementById('tt-team-left-name').value.trim() || 'Tim Alpha';
  const rightName = document.getElementById('tt-team-right-name').value.trim() || 'Tim Beta';

  gameState.ttLeftTeamName = leftName;
  gameState.ttRightTeamName = rightName;
  gameState.ttFlagStep = 0;
  gameState.ttActiveTurn = 'left';
  gameState.ttLeftScore = 0;
  gameState.ttRightScore = 0;

  document.getElementById('tt-display-left-name').textContent = leftName;
  document.getElementById('tt-display-right-name').textContent = rightName;

  document.getElementById('tt-setup-panel').classList.add('hidden');
  document.getElementById('tt-arena-panel').classList.remove('hidden');

  updateTarikTambangArena();
  nextTarikTambangQuestion();
}

function startTTTurnTimer() {
  stopTTTurnTimer();
  gameState.ttTurnTimeLeft = 20;
  updateTTTurnTimerUI();

  gameState.ttTurnTimerInterval = setInterval(() => {
    gameState.ttTurnTimeLeft--;
    updateTTTurnTimerUI();

    if (gameState.ttTurnTimeLeft <= 5 && gameState.ttTurnTimeLeft > 0) {
      audio.playTone(880, 'sawtooth', 0.1, 0.15);
    }

    if (gameState.ttTurnTimeLeft <= 0) {
      stopTTTurnTimer();
      audio.wrongSound();
      showToast(`⏰ WAKTU 20 DETIK HABIS! ${gameState.ttActiveTurn === 'left' ? gameState.ttLeftTeamName : gameState.ttRightTeamName} Kehabisan Waktu!`, "error");
      
      // Auto wrong turn
      answerTarikTambang(null);
    }
  }, 1000);
}

function stopTTTurnTimer() {
  if (gameState.ttTurnTimerInterval) {
    clearInterval(gameState.ttTurnTimerInterval);
    gameState.ttTurnTimerInterval = null;
  }
}

function updateTTTurnTimerUI() {
  const display = document.getElementById('tt-turn-timer-display');
  if (display) display.textContent = `${gameState.ttTurnTimeLeft}s`;
}

function updateTarikTambangArena() {
  const flag = document.getElementById('tt-rope-flag');
  const stepText = document.getElementById('tt-step-indicator');
  const leftScore = document.getElementById('tt-left-score');
  const rightScore = document.getElementById('tt-right-score');
  const turnBanner = document.getElementById('tt-turn-banner');

  if (leftScore) leftScore.textContent = `${gameState.ttLeftScore} Poin`;
  if (rightScore) rightScore.textContent = `${gameState.ttRightScore} Poin`;

  const leftPercent = 50 + (gameState.ttFlagStep * 13.33);
  if (flag) flag.style.left = `${leftPercent}%`;

  if (stepText) {
    if (gameState.ttFlagStep === 0) stepText.textContent = "0 (NETRAL / CENTER)";
    else if (gameState.ttFlagStep < 0) stepText.textContent = `${gameState.ttFlagStep} (KE ARAH ${gameState.ttLeftTeamName.toUpperCase()})`;
    else stepText.textContent = `+${gameState.ttFlagStep} (KE ARAH ${gameState.ttRightTeamName.toUpperCase()})`;
  }

  if (turnBanner) {
    if (gameState.ttActiveTurn === 'left') {
      turnBanner.className = "flex-1 text-center font-cyber text-lg font-black px-6 py-3 rounded-2xl bg-rose-950/80 border-2 border-rose-500 text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.5)]";
      turnBanner.textContent = `⚡ GILIRAN: 🔴 ${gameState.ttLeftTeamName.toUpperCase()}`;
    } else {
      turnBanner.className = "flex-1 text-center font-cyber text-lg font-black px-6 py-3 rounded-2xl bg-cyan-950/80 border-2 border-cyan-500 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.5)]";
      turnBanner.textContent = `⚡ GILIRAN: 🔵 ${gameState.ttRightTeamName.toUpperCase()}`;
    }
  }
}

function nextTarikTambangQuestion() {
  const pool = appData.gameQuestions.tarikTambang || appData.gameQuestions.spinner || [];
  if (pool.length === 0) {
    showToast("Tidak ada soal Tarik Tambang! Buka Dashboard Guru.", "error");
    return;
  }
  const randomQ = pool[Math.floor(Math.random() * pool.length)];
  gameState.ttActiveQuestion = randomQ;

  document.getElementById('tt-q-category').textContent = `KATEGORI: ${randomQ ? randomQ.category : 'Informatika'}`;
  document.getElementById('tt-q-text').textContent = randomQ ? randomQ.question : "Memuat pertanyaan...";

  const optsDiv = document.getElementById('tt-q-options');
  optsDiv.innerHTML = '';

  const opts = randomQ ? randomQ.options : {};
  ['A', 'B', 'C', 'D'].forEach(key => {
    if (opts[key]) {
      const card = document.createElement('button');
      card.className = `p-5 rounded-2xl bg-slate-950 border-2 border-slate-800 hover:border-yellow-400 font-bold text-left text-sm text-slate-100 flex items-center gap-4 transition active:scale-98 shadow-md`;
      card.onclick = () => answerTarikTambang(key);
      card.innerHTML = `
        <span class="w-10 h-10 rounded-xl bg-yellow-500/20 border border-yellow-400/40 text-yellow-300 font-cyber font-black flex items-center justify-center text-lg">${key}</span>
        <span class="flex-1">${opts[key]}</span>
      `;
      optsDiv.appendChild(card);
    }
  });

  startTTTurnTimer();
}

function answerTarikTambang(selectedKey) {
  stopTTTurnTimer();
  const currentQ = gameState.ttActiveQuestion;
  const isCorrect = selectedKey !== null && currentQ && selectedKey === currentQ.answer;
  const arenaWrapper = document.getElementById('tt-arena-wrapper');
  const leftAvatars = document.getElementById('tt-left-avatars');
  const rightAvatars = document.getElementById('tt-right-avatars');

  if (isCorrect) {
    audio.correctSound();
    confetti.burst(60);

    // Active team pulls flag 1 step closer
    if (gameState.ttActiveTurn === 'left') {
      gameState.ttFlagStep -= 1;
      gameState.ttLeftScore += 10;
      if (leftAvatars) {
        leftAvatars.classList.add('pull-left-anim');
        setTimeout(() => leftAvatars.classList.remove('pull-left-anim'), 500);
      }
    } else {
      gameState.ttFlagStep += 1;
      gameState.ttRightScore += 10;
      if (rightAvatars) {
        rightAvatars.classList.add('pull-right-anim');
        setTimeout(() => rightAvatars.classList.remove('pull-right-anim'), 500);
      }
    }

    // Flash Neon-GREEN LED Border
    if (arenaWrapper) {
      arenaWrapper.classList.add('led-flash-green');
      setTimeout(() => arenaWrapper.classList.remove('led-flash-green'), 1000);
    }
    showToast(`✅ Jawaban BENAR! Bendera ditarik 1 langkah mendekati ${gameState.ttActiveTurn === 'left' ? gameState.ttLeftTeamName : gameState.ttRightTeamName}!`, "success");
  } else {
    audio.wrongSound();

    // Active team loses ground! Flag pulls 1 step away towards opponent
    if (gameState.ttActiveTurn === 'left') {
      gameState.ttFlagStep += 1;
      if (rightAvatars) {
        rightAvatars.classList.add('pull-right-anim');
        setTimeout(() => rightAvatars.classList.remove('pull-right-anim'), 500);
      }
    } else {
      gameState.ttFlagStep -= 1;
      if (leftAvatars) {
        leftAvatars.classList.add('pull-left-anim');
        setTimeout(() => leftAvatars.classList.remove('pull-left-anim'), 500);
      }
    }

    // Flash Neon-RED LED Border & Shake Animation
    if (arenaWrapper) {
      arenaWrapper.classList.add('led-flash-red', 'animate-shake');
      setTimeout(() => arenaWrapper.classList.remove('led-flash-red', 'animate-shake'), 1000);
    }
    showToast(`❌ Jawaban SALAH / Kehabisan Waktu! Bendera ditarik 1 langkah mendekati lawan!`, "error");
  }

  // Alternate Turn
  gameState.ttActiveTurn = (gameState.ttActiveTurn === 'left' ? 'right' : 'left');
  updateTarikTambangArena();

  // Check Win Condition
  if (gameState.ttFlagStep <= -3) {
    audio.winnerChime();
    confetti.burst(150);
    logGameSession("Tarik Tambang", `Juara: ${gameState.ttLeftTeamName} (${gameState.ttLeftScore}) vs ${gameState.ttRightTeamName} (${gameState.ttRightScore})`);
    showToast(`🏆 SELAMAT! ${gameState.ttLeftTeamName} MEMENANGKAN TARIK TAMBANG DIGITAL!`, "success");
    setTimeout(() => {
      showGameEventOverlay(`🏆 CHAMPION: ${gameState.ttLeftTeamName}`, `Berhasil menarik bendera merah 3 langkah ke sisi kiri!`, 'jackpot');
    }, 600);
  } else if (gameState.ttFlagStep >= 3) {
    audio.winnerChime();
    confetti.burst(150);
    logGameSession("Tarik Tambang", `Juara: ${gameState.ttRightTeamName} (${gameState.ttRightScore}) vs ${gameState.ttLeftTeamName} (${gameState.ttLeftScore})`);
    showToast(`🏆 SELAMAT! ${gameState.ttRightTeamName} MEMENANGKAN TARIK TAMBANG DIGITAL!`, "success");
    setTimeout(() => {
      showGameEventOverlay(`🏆 CHAMPION: ${gameState.ttRightTeamName}`, `Berhasil menarik bendera merah 3 langkah ke sisi kanan!`, 'jackpot');
    }, 600);
  } else {
    nextTarikTambangQuestion();
  }
}

// --- GAME 5: DYNAMIC & LEAK-PROOF TTS ENGINE ---
function initTTSGame() {
  const container = document.getElementById('tts-grid-container');
  if (!container) return;

  const clues = appData.ttsClues && appData.ttsClues.length > 0 ? appData.ttsClues : DEFAULT_TTS_CLUES;
  
  // Sort clues by top-left to bottom-right to assign incremental sequential numbering
  const cluesCopy = [...clues].sort((a, b) => {
    if (a.row !== b.row) return a.row - b.row;
    return a.col - b.col;
  });

  let currentNum = 1;
  const numMap = {}; 
  cluesCopy.forEach(c => {
    // Make sure Clue 1 is always unlocked by default if starting fresh
    if (c.id === 'tts-a1' && c.solved === true && appData.historyLogs[appData.activeClassId] && appData.historyLogs[appData.activeClassId].length === 0) {
      c.solved = false; // Fix hardcoded flag if corrupted in localstorage
    }

    const key = `${c.row}_${c.col}`;
    if (!numMap[key]) {
      numMap[key] = currentNum++;
    }
    c.num = numMap[key]; // Map sequential number dynamically
  });

  let maxR = 0, maxC = 0;
  clues.forEach(c => {
    const len = c.answer.length;
    // 1-based indexing explicitly mapped
    if (c.type === 'across') maxC = Math.max(maxC, c.col + len - 1);
    else maxR = Math.max(maxR, c.row + len - 1);
  });

  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${maxC}, minmax(0, 1fr))`;

  const cellMap = {};
  clues.forEach(c => {
    const letters = c.answer.toUpperCase().split('');
    letters.forEach((char, idx) => {
      const r = c.type === 'across' ? c.row : c.row + idx;
      const col = c.type === 'across' ? c.col + idx : c.col;
      const key = `${r}_${col}`;

      if (!cellMap[key]) {
        cellMap[key] = { r, c: col, char, num: (idx === 0 ? c.num : null), clues: [c.id] };
      } else {
        if (idx === 0) cellMap[key].num = c.num;
        cellMap[key].clues.push(c.id);
      }
    });
  });

  // Loop based on 1-based layout to align properly
  for (let r = 1; r <= maxR; r++) {
    for (let c = 1; c <= maxC; c++) {
      const cellData = cellMap[`${r}_${c}`];
      const cellDiv = document.createElement('div');

      if (cellData) {
        cellDiv.className = `tts-cell`;
        cellDiv.id = `tts-cell-${r}-${c}`;
        cellDiv.innerHTML = `
          ${cellData.num ? `<span class="cell-number">${cellData.num}</span>` : ''}
          <span class="cell-letter text-transparent pointer-events-none font-cyber font-extrabold text-sm sm:text-base">${cellData.char}</span>
        `;
        // Keep locked state visible upon refresh
        const isLocked = cellData.clues.some(clueId => clues.find(x => x.id === clueId).solved);
        if (isLocked) {
           cellDiv.classList.add('locked-cell');
           const letterSpan = cellDiv.querySelector('.cell-letter');
           if (letterSpan) letterSpan.classList.remove('text-transparent');
        }

        cellDiv.onclick = () => {
          if (cellData.clues.length > 0) selectTTSClue(cellData.clues[0]);
        };
      } else {
        cellDiv.className = `tts-cell black-cell`;
      }
      container.appendChild(cellDiv);
    }
  }

  renderTTSCluesList();
}

function renderTTSCluesList() {
  const acrossBox = document.getElementById('tts-clues-across');
  const downBox = document.getElementById('tts-clues-down');
  const clues = appData.ttsClues && appData.ttsClues.length > 0 ? appData.ttsClues : DEFAULT_TTS_CLUES;

  if (acrossBox) {
    acrossBox.innerHTML = '';
    clues.filter(c => c.type === 'across').forEach(c => {
      const item = document.createElement('div');
      item.className = `tts-clue-item p-2.5 rounded-xl bg-slate-950 border border-slate-800 ${c.solved ? 'opacity-50 border-emerald-500/50' : ''}`;
      item.id = `tts-clue-item-${c.id}`;
      item.onclick = () => selectTTSClue(c.id);
      item.innerHTML = `
        <strong class="text-cyan-400 font-bold">${c.num}.</strong> ${c.clue}
        ${c.solved ? `<span class="ml-2 text-[0.65rem] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">TERKUNCI</span>` : ''}
      `;
      acrossBox.appendChild(item);
    });
  }

  if (downBox) {
    downBox.innerHTML = '';
    clues.filter(c => c.type === 'down').forEach(c => {
      const item = document.createElement('div');
      item.className = `tts-clue-item p-2.5 rounded-xl bg-slate-950 border border-slate-800 ${c.solved ? 'opacity-50 border-emerald-500/50' : ''}`;
      item.id = `tts-clue-item-${c.id}`;
      item.onclick = () => selectTTSClue(c.id);
      item.innerHTML = `
        <strong class="text-fuchsia-400 font-bold">${c.num}.</strong> ${c.clue}
        ${c.solved ? `<span class="ml-2 text-[0.65rem] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">TERKUNCI</span>` : ''}
      `;
      downBox.appendChild(item);
    });
  }
}

function selectTTSClue(clueId) {
  const clues = appData.ttsClues && appData.ttsClues.length > 0 ? appData.ttsClues : DEFAULT_TTS_CLUES;
  const clue = clues.find(c => c.id === clueId);
  if (!clue) return;

  gameState.ttsActiveClue = clue;

  document.querySelectorAll('.tts-clue-item').forEach(el => el.classList.remove('active'));
  const clueItem = document.getElementById(`tts-clue-item-${clue.id}`);
  if (clueItem) clueItem.classList.add('active');

  document.querySelectorAll('.tts-cell').forEach(el => el.classList.remove('active-word-highlight'));
  const len = clue.answer.length;
  for (let i = 0; i < len; i++) {
    const r = clue.type === 'across' ? clue.row : clue.row + i;
    const c = clue.type === 'across' ? clue.col + i : clue.col;
    const cell = document.getElementById(`tts-cell-${r}-${c}`);
    if (cell) cell.classList.add('active-word-highlight');
  }

  const bannerText = document.getElementById('tts-active-clue-text');
  if (bannerText) {
    bannerText.textContent = `${clue.num} ${clue.type === 'across' ? 'Mendatar' : 'Menurun'}: ${clue.clue} (${clue.answer.length} Huruf)`;
  }

  const wordInput = document.getElementById('tts-word-input');
  if (wordInput) {
    wordInput.value = '';
    wordInput.focus();
  }
}

function verifyTTSWord() {
  const clue = gameState.ttsActiveClue;
  if (!clue) {
    showToast("Klik salah satu soal TTS di sebelah kanan terlebih dahulu!", "info");
    return;
  }

  if (clue.solved) {
    showToast("Soal kata ini sudah tertebak dan ter kunci!", "info");
    return;
  }

  const inputElem = document.getElementById('tts-word-input');
  const userInput = (inputElem ? inputElem.value : '').trim().toUpperCase();

  if (!userInput) {
    showToast("Ketikkan kata tebakan siswa sebelum menekan Cek Kata!", "error");
    return;
  }

  const targetAnswer = clue.answer.toUpperCase();
  const len = targetAnswer.length;

  if (userInput === targetAnswer) {
    clue.solved = true;
    audio.correctSound();
    confetti.burst(60);

    for (let i = 0; i < len; i++) {
      const r = clue.type === 'across' ? clue.row : clue.row + i;
      const c = clue.type === 'across' ? clue.col + i : clue.col;
      const cell = document.getElementById(`tts-cell-${r}-${c}`);
      if (cell) {
        cell.classList.add('locked-cell');
        const letterSpan = cell.querySelector('.cell-letter');
        if (letterSpan) letterSpan.classList.remove('text-transparent');
      }
    }

    showToast(`✅ JAWABAN BENAR! Kata "${targetAnswer}" berhasil terkunci!`, "success");
    if (inputElem) inputElem.value = '';
    renderTTSCluesList();

    const clues = appData.ttsClues && appData.ttsClues.length > 0 ? appData.ttsClues : DEFAULT_TTS_CLUES;
    const allSolved = clues.every(c => c.solved);
    if (allSolved) {
      audio.winnerChime();
      confetti.burst(150);
      logGameSession("TTS Informatika", "Selesai 100% Kata Terisi");
      showToast("🎉 SELAMAT! Seluruh kata TTS Informatika berhasil diselesaikan!", "success");
    }
  } else {
    audio.wrongSound();

    for (let i = 0; i < len; i++) {
      const r = clue.type === 'across' ? clue.row : clue.row + i;
      const c = clue.type === 'across' ? clue.col + i : clue.col;
      const cell = document.getElementById(`tts-cell-${r}-${c}`);
      if (cell && !cell.classList.contains('locked-cell')) {
        cell.classList.add('wrong-cell', 'animate-shake');
        setTimeout(() => cell.classList.remove('wrong-cell', 'animate-shake'), 600);
      }
    }

    if (inputElem) inputElem.value = '';
    showToast(`❌ Kata "${userInput}" belum tepat! Coba lagi.`, "error");
  }
}

// --- ADVANCED TEACHER DASHBOARD CRUD & ANALYTICS ---
function openTeacherDashboard(defaultTab = 'tab-classes') {
  switchDashTab(defaultTab);
  openModal('modal-teacher-dashboard');
}

function switchDashTab(tabId) {
  document.querySelectorAll('.dash-tab-btn').forEach(btn => {
    btn.classList.remove('active', 'text-purple-400', 'border-purple-400');
    btn.classList.add('text-slate-400', 'border-transparent');
  });
  document.querySelectorAll('.dash-tab-panel').forEach(panel => panel.classList.add('hidden'));

  const targetPanel = document.getElementById(tabId);
  if (targetPanel) targetPanel.classList.remove('hidden');

  const activeBtn = document.querySelector(`.dash-tab-btn[onclick*="${tabId}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active', 'text-purple-400', 'border-purple-400');
    activeBtn.classList.remove('text-slate-400', 'border-transparent');
  }

  if (tabId === 'tab-classes') renderDashClasses();
  if (tabId === 'tab-students') renderDashStudents();
  if (tabId === 'tab-questions') renderDashQuestions();
  if (tabId === 'tab-tts-crud') renderDashTTSClues();
  if (tabId === 'tab-analytics') renderDashAnalytics();
}

function renderDashClasses() {
  const grid = document.getElementById('classes-list-grid');
  if (!grid) return;
  grid.innerHTML = '';

  appData.classes.forEach(c => {
    const isActive = c.id === appData.activeClassId;
    const card = document.createElement('div');
    card.className = `p-4 rounded-2xl border ${isActive ? 'bg-purple-950/40 border-purple-500' : 'bg-slate-950 border-slate-800'} flex flex-col justify-between gap-3 shadow`;
    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between">
          <h5 class="font-cyber font-bold text-sm text-slate-100">${c.name}</h5>
          ${isActive ? `<span class="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-bold text-[0.65rem] border border-purple-500/40">AKTIF</span>` : ''}
        </div>
        <p class="text-xs text-slate-400 mt-1">Total ${c.students.length} Siswa Terdaftar</p>
      </div>
      <div class="flex items-center gap-2 pt-2 border-t border-slate-800/80">
        ${!isActive ? `<button onclick="switchActiveClass('${c.id}')" class="px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 font-bold text-[0.7rem] text-white">Pilih Kelas</button>` : ''}
        <button onclick="editClassModal('${c.id}')" class="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300">✏️ Edit</button>
        ${appData.classes.length > 1 ? `<button onclick="deleteClass('${c.id}')" class="px-2 py-1 rounded-lg bg-rose-950 hover:bg-rose-900 text-xs text-rose-400">🗑️ Hapus</button>` : ''}
      </div>
    `;
    grid.appendChild(card);
  });
}

function switchActiveClass(classId) {
  appData.activeClassId = classId;
  saveData();
  renderDashClasses();
  renderDashStudents();
  renderHomeStats();
  showToast("Kelas aktif berhasil diganti!", "success");
}

function saveClassForm() {
  const idInput = document.getElementById('class-id-input').value;
  const nameInput = document.getElementById('class-name-input').value.trim();

  if (!nameInput) {
    showToast("Nama kelas tidak boleh kosong!", "error");
    return;
  }

  if (idInput) {
    const cls = appData.classes.find(c => c.id === idInput);
    if (cls) cls.name = nameInput;
  } else {
    const newId = 'cls-' + Date.now();
    appData.classes.push({
      id: newId,
      name: nameInput,
      students: []
    });
    appData.activeClassId = newId;
  }

  saveData();
  closeModal('modal-add-class');
  renderDashClasses();
  renderHomeStats();
  showToast("Profil Kelas berhasil disimpan!", "success");
}

function editClassModal(id) {
  const cls = appData.classes.find(c => c.id === id);
  if (!cls) return;

  document.getElementById('modal-class-title').textContent = 'Edit Profil Kelas';
  document.getElementById('class-id-input').value = cls.id;
  document.getElementById('class-name-input').value = cls.name;
  openModal('modal-add-class');
}

function deleteClass(id) {
  if (confirm("Apakah Anda yakin ingin menghapus kelas ini?")) {
    appData.classes = appData.classes.filter(c => c.id !== id);
    if (appData.activeClassId === id && appData.classes.length > 0) {
      appData.activeClassId = appData.classes[0].id;
    }
    saveData();
    renderDashClasses();
    renderHomeStats();
    showToast("Kelas dihapus", "info");
  }
}

// STUDENTS CRUD IN DASHBOARD
function renderDashStudents() {
  const cls = getActiveClass();
  const label = document.getElementById('dash-student-active-class');
  const capLabel = document.getElementById('dash-students-capacity-label');
  const grid = document.getElementById('dash-students-grid');

  if (label && cls) label.textContent = cls.name;
  if (capLabel && cls) capLabel.textContent = `Total ${cls.students.length} Siswa Terdaftar`;
  if (!grid || !cls) return;

  grid.innerHTML = '';
  if (cls.students.length === 0) {
    grid.innerHTML = `<div class="col-span-full p-6 text-center text-slate-400 text-xs bg-slate-950 rounded-2xl">Belum ada siswa di kelas ini. Klik "Batch Paste Nama" untuk memasukkan siswa secara cepat.</div>`;
    return;
  }

  cls.students.forEach(s => {
    const card = document.createElement('div');
    card.className = `p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs`;
    card.innerHTML = `
      <div>
        <div class="font-bold text-slate-100">${s.name}</div>
        <div class="text-[0.65rem] text-slate-400">Poin: ${s.score} | ${s.hasPlayed ? 'Sudah Main' : 'Siap'}</div>
      </div>
      <div class="flex items-center gap-1">
        <button onclick="editStudentModal('${s.id}')" class="p-1 text-slate-300 hover:text-white">✏️</button>
        <button onclick="deleteStudent('${s.id}')" class="p-1 text-rose-400 hover:text-rose-300">🗑️</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openAddStudentModal() {
  document.getElementById('modal-student-title').textContent = 'Tambah Siswa Baru';
  document.getElementById('student-id-input').value = '';
  document.getElementById('student-name-input').value = '';
  openModal('modal-student');
}

function saveStudentForm() {
  const idInput = document.getElementById('student-id-input').value;
  const nameInput = document.getElementById('student-name-input').value.trim();
  const cls = getActiveClass();

  if (!nameInput) {
    showToast("Nama siswa tidak boleh kosong!", "error");
    return;
  }

  if (idInput) {
    const std = cls.students.find(s => s.id === idInput);
    if (std) std.name = nameInput;
  } else {
    cls.students.push({
      id: 'std-' + Date.now(),
      name: nameInput,
      score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false
    });
  }

  saveData();
  closeModal('modal-student');
  renderDashStudents();
  renderHomeStats();
  showToast("Siswa berhasil disimpan!", "success");
}

function saveBatchStudents() {
  const text = document.getElementById('batch-students-textarea').value;
  const names = text.split('\n').map(n => n.trim()).filter(n => n.length > 0);
  const cls = getActiveClass();

  if (names.length === 0) {
    showToast("Tidak ada nama siswa yang dimasukkan!", "error");
    return;
  }

  names.forEach(name => {
    cls.students.push({
      id: 'std-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      name: name,
      score: 0, correct: 0, wrong: 0, turns: 0, hasPlayed: false
    });
  });

  saveData();
  closeModal('modal-batch-students');
  renderDashStudents();
  renderHomeStats();
  showToast(`${names.length} siswa berhasil ditambahkan ke ${cls.name}!`, "success");
}

function editStudentModal(id) {
  const cls = getActiveClass();
  const std = cls.students.find(s => s.id === id);
  if (!std) return;

  document.getElementById('modal-student-title').textContent = 'Edit Nama Siswa';
  document.getElementById('student-id-input').value = std.id;
  document.getElementById('student-name-input').value = std.name;
  openModal('modal-student');
}

function deleteStudent(id) {
  if (confirm("Hapus siswa ini dari kelas?")) {
    const cls = getActiveClass();
    cls.students = cls.students.filter(s => s.id !== id);
    saveData();
    renderDashStudents();
    renderHomeStats();
    showToast("Siswa dihapus", "info");
  }
}

// SUB-TAB GAME MODE SWITCHER FOR SEGREGATED QUESTION CRUD (5 GAME MODES)
function switchGameQTab(mode) {
  activeGameQTab = mode;
  document.querySelectorAll('.gq-tab-btn').forEach(btn => {
    btn.classList.remove('active-gq', 'bg-cyan-500/20', 'text-cyan-300', 'border', 'border-cyan-500/30');
    btn.classList.add('text-slate-400');
  });

  const activeBtn = Array.from(document.querySelectorAll('.gq-tab-btn')).find(b => b.getAttribute('onclick')?.includes(`'${mode}'`));
  if (activeBtn) {
    activeBtn.classList.add('active-gq', 'bg-cyan-500/20', 'text-cyan-300', 'border', 'border-cyan-500/30');
    activeBtn.classList.remove('text-slate-400');
  }

  const addBtn = document.getElementById('btn-add-question-central');
  if (addBtn) {
    addBtn.textContent = mode === 'tts' ? '+ Tambah Soal TTS' : '+ Tambah Soal';
  }

  renderDashQuestions();
}

function handleAddQuestionCentral() {
  if (activeGameQTab === 'tts') {
    openAddTTSClueModal();
  } else {
    openAddQuestionModal();
  }
}

function resetGameQuestionsConfirm() {
  const modeName = activeGameQTab.toUpperCase();
  if (confirm(`Apakah Anda yakin ingin mereset seluruh soal untuk mode game ${modeName} kembali ke bawaan default?`)) {
    if (activeGameQTab === 'tts') {
      appData.ttsClues = JSON.parse(JSON.stringify(DEFAULT_TTS_CLUES));
    } else {
      appData.gameQuestions[activeGameQTab] = JSON.parse(JSON.stringify(DEFAULT_QUESTIONS));
    }
    saveData();
    renderDashQuestions();
    showToast(`Bank soal mode ${modeName} berhasil direset ke default!`, "success");
  }
}

// CENTRALIZED QUESTIONS CRUD IN DASHBOARD (5 GAME MODES INTEGRATED)
function renderDashQuestions() {
  const grid = document.getElementById('dash-questions-grid');
  const search = (document.getElementById('dash-search-question')?.value || '').toLowerCase();
  if (!grid) return;

  grid.innerHTML = '';

  // Specialized view for TTS sub-tab inside Centralized Dashboard
  if (activeGameQTab === 'tts') {
    const clues = appData.ttsClues && appData.ttsClues.length > 0 ? appData.ttsClues : DEFAULT_TTS_CLUES;
    const filtered = clues.filter(c => c.clue.toLowerCase().includes(search) || c.answer.toLowerCase().includes(search));

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="p-6 text-center text-slate-400 text-xs bg-slate-950 rounded-2xl">Tidak ada soal TTS ditemukan. Klik "+ Tambah Soal TTS".</div>`;
      return;
    }

    filtered.forEach(c => {
      const card = document.createElement('div');
      card.className = `p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col gap-2`;
      card.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="px-2 py-0.5 rounded-full ${c.type === 'across' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-fuchsia-500/20 text-fuchsia-300'} font-bold text-[0.65rem]">
            #${c.num} ${c.type === 'across' ? 'MENDATAR' : 'MENURUN'}
          </span>
          <span class="text-yellow-300 font-extrabold text-xs font-mono">KATA: ${c.answer}</span>
        </div>
        <div class="text-xs font-bold text-slate-200">${c.clue}</div>
        <div class="text-[0.65rem] text-slate-400">Grid Position: Row ${c.row}, Col ${c.col}</div>
        <div class="flex justify-end gap-2 pt-2 border-t border-slate-900">
          <button onclick="editTTSClueModal('${c.id}')" class="px-2 py-1 bg-slate-800 text-xs text-slate-300 rounded">✏️ Edit</button>
          <button onclick="deleteTTSClue('${c.id}')" class="px-2 py-1 bg-rose-950 text-xs text-rose-400 rounded">🗑️ Hapus</button>
        </div>
      `;
      grid.appendChild(card);
    });
    return;
  }

  const questionsList = appData.gameQuestions[activeGameQTab] || [];
  const filtered = questionsList.filter(q => q.question.toLowerCase().includes(search));

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="p-6 text-center text-slate-400 text-xs bg-slate-950 rounded-2xl">Tidak ada soal untuk game ${activeGameQTab} ini. Klik "+ Tambah Soal".</div>`;
    return;
  }

  filtered.forEach(q => {
    const card = document.createElement('div');
    card.className = `p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col gap-2`;
    card.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold text-[0.65rem] uppercase">${activeGameQTab}</span>
        <span class="text-amber-400 font-bold text-xs">+${q.points || 10} Poin</span>
      </div>
      <div class="text-xs font-bold text-slate-200">${q.question}</div>
      <div class="grid grid-cols-2 gap-2 text-[0.7rem] text-slate-400">
        <div class="${q.answer === 'A' ? 'text-emerald-400 font-bold' : ''}">A. ${q.options?.A || '-'}</div>
        <div class="${q.answer === 'B' ? 'text-emerald-400 font-bold' : ''}">B. ${q.options?.B || '-'}</div>
        <div class="${q.answer === 'C' ? 'text-emerald-400 font-bold' : ''}">C. ${q.options?.C || '-'}</div>
        <div class="${q.answer === 'D' ? 'text-emerald-400 font-bold' : ''}">D. ${q.options?.D || '-'}</div>
      </div>
      <div class="flex justify-end gap-2 pt-2 border-t border-slate-900">
        <button onclick="editQuestionModal('${q.id}')" class="px-2 py-1 bg-slate-800 text-xs text-slate-300 rounded">✏️ Edit</button>
        <button onclick="deleteQuestion('${q.id}')" class="px-2 py-1 bg-rose-950 text-xs text-rose-400 rounded">🗑️ Hapus</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openAddQuestionModal() {
  document.getElementById('modal-question-title').textContent = `Tambah Soal (${activeGameQTab.toUpperCase()})`;
  document.getElementById('question-id-input').value = '';
  document.getElementById('q-game-mode-hidden').value = activeGameQTab;
  document.getElementById('q-text-input').value = '';
  document.getElementById('q-opt-a').value = '';
  document.getElementById('q-opt-b').value = '';
  document.getElementById('q-opt-c').value = '';
  document.getElementById('q-opt-d').value = '';
  document.getElementById('q-answer-select').value = 'A';
  document.getElementById('q-points-input').value = 10;
  openModal('modal-question');
}

function saveQuestionForm() {
  const id = document.getElementById('question-id-input').value;
  const gameMode = document.getElementById('q-game-mode-hidden').value || activeGameQTab;
  const text = document.getElementById('q-text-input').value.trim();
  const optA = document.getElementById('q-opt-a').value.trim();
  const optB = document.getElementById('q-opt-b').value.trim();
  const optC = document.getElementById('q-opt-c').value.trim();
  const optD = document.getElementById('q-opt-d').value.trim();
  const ans = document.getElementById('q-answer-select').value;
  const points = parseInt(document.getElementById('q-points-input').value, 10) || 10;

  if (!text) {
    showToast("Isi pertanyaan soal tidak boleh kosong!", "error");
    return;
  }

  const payload = {
    id: id || 'q-' + Date.now(),
    question: text,
    options: { A: optA, B: optB, C: optC, D: optD },
    answer: ans,
    points: points,
    used: false
  };

  if (!appData.gameQuestions[gameMode]) appData.gameQuestions[gameMode] = [];
  const list = appData.gameQuestions[gameMode];

  if (id) {
    const idx = list.findIndex(q => q.id === id);
    if (idx !== -1) list[idx] = payload;
  } else {
    list.push(payload);
  }

  saveData();
  closeModal('modal-question');
  renderDashQuestions();
  renderHomeStats();
  showToast(`Soal berhasil disimpan ke game ${gameMode}!`, "success");
}

function editQuestionModal(id) {
  const list = appData.gameQuestions[activeGameQTab] || [];
  const q = list.find(item => item.id === id);
  if (!q) return;

  document.getElementById('modal-question-title').textContent = `Edit Soal (${activeGameQTab.toUpperCase()})`;
  document.getElementById('question-id-input').value = q.id;
  document.getElementById('q-game-mode-hidden').value = activeGameQTab;
  document.getElementById('q-text-input').value = q.question;
  document.getElementById('q-opt-a').value = q.options?.A || '';
  document.getElementById('q-opt-b').value = q.options?.B || '';
  document.getElementById('q-opt-c').value = q.options?.C || '';
  document.getElementById('q-opt-d').value = q.options?.D || '';
  document.getElementById('q-answer-select').value = q.answer || 'A';
  document.getElementById('q-points-input').value = q.points || 10;

  openModal('modal-question');
}

function deleteQuestion(id) {
  if (confirm("Hapus soal ini dari bank soal?")) {
    if (appData.gameQuestions[activeGameQTab]) {
      appData.gameQuestions[activeGameQTab] = appData.gameQuestions[activeGameQTab].filter(q => q.id !== id);
    }
    saveData();
    renderDashQuestions();
    renderHomeStats();
    showToast("Soal dihapus", "info");
  }
}

// TTS CLUES CRUD IN DASHBOARD
function renderDashTTSClues() {
  const grid = document.getElementById('dash-tts-clues-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const clues = appData.ttsClues && appData.ttsClues.length > 0 ? appData.ttsClues : DEFAULT_TTS_CLUES;

  clues.forEach(c => {
    const card = document.createElement('div');
    card.className = `p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col gap-2`;
    card.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="px-2 py-0.5 rounded-full ${c.type === 'across' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-fuchsia-500/20 text-fuchsia-300'} font-bold text-[0.65rem]">
          #${c.num} ${c.type === 'across' ? 'MENDATAR' : 'MENURUN'}
        </span>
        <span class="text-yellow-300 font-extrabold text-xs font-mono">KATA: ${c.answer}</span>
      </div>
      <div class="text-xs font-bold text-slate-200">${c.clue}</div>
      <div class="text-[0.65rem] text-slate-400">Grid Position: Row ${c.row}, Col ${c.col}</div>
      <div class="flex justify-end gap-2 pt-2 border-t border-slate-900">
        <button onclick="editTTSClueModal('${c.id}')" class="px-2 py-1 bg-slate-800 text-xs text-slate-300 rounded">✏️ Edit</button>
        <button onclick="deleteTTSClue('${c.id}')" class="px-2 py-1 bg-rose-950 text-xs text-rose-400 rounded">🗑️ Hapus</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openAddTTSClueModal() {
  document.getElementById('modal-tts-title').textContent = 'Tambah Soal TTS Baru';
  document.getElementById('tts-clue-id-input').value = '';
  document.getElementById('tts-clue-text-input').value = '';
  document.getElementById('tts-answer-text-input').value = '';
  document.getElementById('tts-type-select').value = 'across';
  document.getElementById('tts-num-input').value = 1;
  document.getElementById('tts-row-input').value = 1;
  document.getElementById('tts-col-input').value = 1;
  openModal('modal-tts-clue');
}

function saveTTSClueForm() {
  const id = document.getElementById('tts-clue-id-input').value;
  const clueText = document.getElementById('tts-clue-text-input').value.trim();
  const answerText = document.getElementById('tts-answer-text-input').value.trim().toUpperCase();
  const type = document.getElementById('tts-type-select').value;
  const num = parseInt(document.getElementById('tts-num-input').value, 10) || 1;
  const row = parseInt(document.getElementById('tts-row-input').value, 10) || 0;
  const col = parseInt(document.getElementById('tts-col-input').value, 10) || 0;

  if (!clueText || !answerText) {
    showToast("Pertanyaan dan kata kunci jawaban TTS tidak boleh kosong!", "error");
    return;
  }

  const payload = {
    id: id || 'tts-' + Date.now(),
    type,
    num,
    row,
    col,
    answer: answerText,
    clue: clueText,
    solved: false
  };

  if (id) {
    const idx = appData.ttsClues.findIndex(c => c.id === id);
    if (idx !== -1) appData.ttsClues[idx] = payload;
  } else {
    appData.ttsClues.push(payload);
  }

  saveData();
  closeModal('modal-tts-clue');
  renderDashTTSClues();
  if (gameState.activeGame === 'view-tts') initTTSGame();
  showToast("Soal TTS berhasil disimpan!", "success");
}

function editTTSClueModal(id) {
  const c = appData.ttsClues.find(item => item.id === id);
  if (!c) return;

  document.getElementById('modal-tts-title').textContent = 'Edit Soal TTS';
  document.getElementById('tts-clue-id-input').value = c.id;
  document.getElementById('tts-clue-text-input').value = c.clue;
  document.getElementById('tts-answer-text-input').value = c.answer;
  document.getElementById('tts-type-select').value = c.type;
  document.getElementById('tts-num-input').value = c.num;
  document.getElementById('tts-row-input').value = c.row;
  document.getElementById('tts-col-input').value = c.col;

  openModal('modal-tts-clue');
}

function deleteTTSClue(id) {
  if (confirm("Hapus soal TTS ini?")) {
    appData.ttsClues = appData.ttsClues.filter(c => c.id !== id);
    saveData();
    renderDashTTSClues();
    if (gameState.activeGame === 'view-tts') initTTSGame();
    showToast("Soal TTS dihapus", "info");
  }
}

// REAL-TIME ANALYTICS TABLE IN DASHBOARD (SEGREGATED BY CLASS)
function renderDashAnalytics() {
  const tbody = document.getElementById('analytics-tbody');
  const classFilter = document.getElementById('analytics-class-filter');
  if (!tbody) return;

  if (classFilter) {
    classFilter.innerHTML = '';
    appData.classes.forEach(c => {
      classFilter.innerHTML += `<option value="${c.id}" ${c.id === appData.activeClassId ? 'selected' : ''}>${c.name}</option>`;
    });
  }

  const selectedClassId = classFilter ? classFilter.value : appData.activeClassId;
  const logs = (appData.historyLogs && appData.historyLogs[selectedClassId]) ? appData.historyLogs[selectedClassId] : [];

  tbody.innerHTML = '';
  if (logs.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="py-6 text-center text-slate-400">Belum ada riwayat permainan untuk kelas ini.</td></tr>`;
    return;
  }

  logs.forEach(log => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="py-3 px-4 text-cyan-400 font-mono font-bold">${log.timestamp}</td>
      <td class="py-3 px-4 font-bold text-yellow-300">${log.className}</td>
      <td class="py-3 px-4 font-bold text-slate-200">${log.game}</td>
      <td class="py-3 px-4 font-bold text-emerald-400">${log.scoreDetail}</td>
    `;
    tbody.appendChild(tr);
  });
}

function clearAnalyticsLogsConfirm() {
  const classFilter = document.getElementById('analytics-class-filter');
  const selectedClassId = classFilter ? classFilter.value : appData.activeClassId;
  const selectedClass = appData.classes.find(c => c.id === selectedClassId);
  const className = selectedClass ? selectedClass.name : 'kelas ini';

  if (confirm(`Hapus seluruh riwayat hasil permainan untuk ${className}?`)) {
    if (appData.historyLogs) appData.historyLogs[selectedClassId] = [];
    saveData();
    renderDashAnalytics();
    showToast(`Riwayat analytics ${className} dihapus`, "info");
  }
}

// SESSION CONTROL (RESET SESSION FOR NEW CLASS ENTRANCE)
function resetClassSessionConfirm() {
  if (confirm("REFRESH / RESET SESI KELAS?\nSemua skor, giliran siswa, status Mystery Box, Tarik Tambang, dan TTS akan direset untuk kelas ini, TANPA menghapus daftar siswa & bank soal.")) {
    const cls = getActiveClass();
    if (cls) {
      cls.students.forEach(s => {
        s.score = 0;
        s.correct = 0;
        s.wrong = 0;
        s.turns = 0;
        s.hasPlayed = false;
      });
    }

    gameState.utTeamPositions = [1, 1, 1, 1];
    gameState.utActiveTeamIndex = 0;
    gameState.ttFlagStep = 0;
    gameState.ttActiveTurn = 'left';

    if (appData.ttsClues) {
      appData.ttsClues.forEach(c => c.solved = false);
    }
    
    initMysteryBoxes();
    if (gameState.activeGame === 'view-tts') initTTSGame();
    saveData();
    renderHomeStats();
    showToast("Sesi kelas berhasil direset!", "success");
  }
}

// GENERIC GAME EVENT OVERLAY HELPERS
function showGameEventOverlay(title, desc, type, questionObj = null, callback = null) {
  const icon = document.getElementById('ge-icon');
  const titleElem = document.getElementById('ge-title');
  const descElem = document.getElementById('ge-desc');
  const qContainer = document.getElementById('ge-question-container');
  const closeBtn = document.getElementById('btn-ge-close');

  if (titleElem) titleElem.textContent = title;
  if (descElem) descElem.textContent = desc;

  if (type === 'jackpot') {
    if (icon) icon.textContent = '💎';
    if (qContainer) qContainer.classList.add('hidden');
    if (closeBtn) closeBtn.classList.remove('hidden');
  } else if (type === 'malware') {
    if (icon) icon.textContent = '☣️';
    if (qContainer) qContainer.classList.add('hidden');
    if (closeBtn) closeBtn.classList.remove('hidden');
  } else if (type === 'question' && questionObj) {
    if (icon) icon.textContent = '❓';
    if (closeBtn) closeBtn.classList.add('hidden');
    if (qContainer) {
      qContainer.classList.remove('hidden');
      document.getElementById('ge-question-text').textContent = questionObj.question;

      const optsGrid = document.getElementById('ge-options-grid');
      optsGrid.innerHTML = '';
      const opts = questionObj.options || {};
      ['A', 'B', 'C', 'D'].forEach(key => {
        if (opts[key]) {
          const optBtn = document.createElement('button');
          optBtn.className = `p-2 rounded-xl bg-slate-900 border border-slate-700 text-left text-xs font-semibold text-slate-200 hover:border-cyan-400 transition flex items-center gap-2`;
          optBtn.onclick = () => {
            closeModal('modal-game-event');
            if (callback) callback(key === questionObj.answer);
          };
          optBtn.innerHTML = `<span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">${key}</span> ${opts[key]}`;
          optsGrid.appendChild(optBtn);
        }
      });
    }
  }

  openModal('modal-game-event');
}

// --- VIEW 7: PAPAN SKOR / LEADERBOARD ---
function renderLeaderboardView() {
  const cls = getActiveClass();
  if (!cls) return;

  const sorted = [...cls.students].sort((a, b) => b.score - a.score || b.correct - a.correct);
  
  const p1 = sorted[0];
  const p2 = sorted[1];
  const p3 = sorted[2];

  document.getElementById('podium-1-name').textContent = p1 ? p1.name : '-';
  document.getElementById('podium-1-score').textContent = p1 ? `${p1.score} Poin` : '0 Poin';

  document.getElementById('podium-2-name').textContent = p2 ? p2.name : '-';
  document.getElementById('podium-2-score').textContent = p2 ? `${p2.score} Poin` : '0 Poin';

  document.getElementById('podium-3-name').textContent = p3 ? p3.name : '-';
  document.getElementById('podium-3-score').textContent = p3 ? `${p3.score} Poin` : '0 Poin';

  const tbody = document.getElementById('leaderboard-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  sorted.forEach((student, idx) => {
    const tr = document.createElement('tr');
    let rankBadge = `${idx + 1}`;
    if (idx === 0) rankBadge = '🥇';
    else if (idx === 1) rankBadge = '🥈';
    else if (idx === 2) rankBadge = '🥉';

    const accuracy = student.turns > 0 ? Math.round((student.correct / student.turns) * 100) : 0;

    tr.innerHTML = `
      <td class="py-3 px-4 font-bold">${rankBadge}</td>
      <td class="py-3 px-4 font-bold text-slate-100">${student.name}</td>
      <td class="py-3 px-4 font-black text-amber-400">${student.score}</td>
      <td class="py-3 px-4 text-emerald-400 font-bold">${student.correct}</td>
      <td class="py-3 px-4 text-rose-400 font-bold">${student.wrong}</td>
      <td class="py-3 px-4">${student.turns}</td>
      <td class="py-3 px-4">${accuracy}%</td>
    `;
    tbody.appendChild(tr);
  });
}

// --- SETTINGS & EXPORT/IMPORT ---
function updateSettingsFromUI() {
  appData.settings.timer = parseInt(document.getElementById('setting-timer-select').value, 10);
  appData.settings.sound = document.getElementById('setting-sound-toggle').checked;
  saveData();
  showToast("Pengaturan berhasil disimpan", "success");
}

// SPREADSHEET (EXCEL) — RIWAYAT SKOR PER KELAS (bukan soal!)
function exportExcel() {
  if (typeof XLSX === 'undefined') {
    showToast("Library SheetJS belum dimuat. Pastikan terhubung ke internet!", "error");
    return;
  }

  // 1. Baca kelas aktif dari dropdown dashboard (atau fallback ke state aktif)
  const dropdown = document.getElementById('analytics-class-filter')
                || document.getElementById('hero-class-select');
  let activeClassId = dropdown ? dropdown.value : appData.activeClassId;

  // Resolve class name from id
  const activeCls = appData.classes.find(c => c.id === activeClassId) || getActiveClass();
  const activeClassName = activeCls ? activeCls.name : 'Kelas X-A';

  // 2. Baca seluruh log riwayat dari historyLogs[classId]
  const classLogs = (appData.historyLogs && appData.historyLogs[activeClassId])
    ? appData.historyLogs[activeClassId]
    : [];

  // Juga cek InformaticsScoreHistory sebagai fallback secondary
  let extraLogs = [];
  try {
    const globalHistory = JSON.parse(localStorage.getItem('InformaticsScoreHistory')) || [];
    extraLogs = globalHistory.filter(e => e.className === activeClassName);
  } catch(e) {}

  // Gabungkan dan hilangkan duplikat berdasarkan id
  const allLogs = [...classLogs];
  extraLogs.forEach(e => { if (!allLogs.find(x => x.id === e.id)) allLogs.push(e); });

  if (allLogs.length === 0) {
    showToast(`Belum ada riwayat nilai untuk ${activeClassName}. Mainkan game terlebih dahulu!`, "error");
    return;
  }

  // 3. Map ke 5 kolom yang diperlukan
  const filteredRows = allLogs.map(entry => ({
    'Tanggal & Jam Play'     : entry.timestamp || '-',
    'Nama Kelas'             : entry.className  || activeClassName,
    'Jenis Game'             : entry.game       || entry.gameMode || '-',
    'Nama Siswa / Kelompok'  : entry.scoreDetail || entry.participantName || '-',
    'Total Score / Hasil Akhir': entry.finalScore != null ? entry.finalScore : 'N/A'
  }));

  // 4. Bangun workbook SheetJS
  const worksheet = XLSX.utils.json_to_sheet(filteredRows);

  // Auto-fit kolom width
  const colWidths = Object.keys(filteredRows[0]).map(k => ({ wch: Math.max(k.length, 20) }));
  worksheet['!cols'] = colWidths;

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Rekap Skor");

  // 5. Nama file dinamis & kontekstual
  const safeClassName = activeClassName.replace(/\s+/g, '_');
  const safeFileName = `Rekap_Skor_${safeClassName}.xlsx`;
  XLSX.writeFile(workbook, safeFileName);

  showToast(`✅ Rekap skor ${activeClassName} (${filteredRows.length} entri) berhasil diunduh!`, "success");
}

function importExcel(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (typeof XLSX === 'undefined') {
    showToast("Library SheetJS belum dimuat. Pastikan terhubung ke internet!", "error");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      let totalImported = 0;
      const gameKeys = ['spinner', 'mysteryBox', 'ularTangga', 'tarikTambang'];

      workbook.SheetNames.forEach(sheetName => {
        const lowerKey = sheetName.toLowerCase();
        const matchedKey = gameKeys.find(k => k.toLowerCase() === lowerKey);

        if (matchedKey) {
          const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
          const questions = rows.map((r, idx) => ({
            id: r["ID"] || `q-excel-${Date.now()}-${idx}`,
            question: r["Pertanyaan"] || "",
            options: {
              A: String(r["Opsi A"] || ""),
              B: String(r["Opsi B"] || ""),
              C: String(r["Opsi C"] || ""),
              D: String(r["Opsi D"] || "")
            },
            answer: String(r["Jawaban Benar"] || "A").trim().toUpperCase(),
            points: parseInt(r["Poin"], 10) || 10,
            used: false
          })).filter(q => q.question.length > 0);

          if (questions.length > 0) {
            appData.gameQuestions[matchedKey] = questions;
            totalImported += questions.length;
          }
        } else if (lowerKey === 'tts') {
          const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
          const clues = rows.map((r, idx) => ({
            id: r["ID"] || `tts-${Date.now()}-${idx}`,
            type: String(r["Tipe"] || "across").toLowerCase(),
            num: parseInt(r["Nomor"], 10) || 1,
            row: parseInt(r["Baris"], 10) || 0,
            col: parseInt(r["Kolom"], 10) || 0,
            answer: String(r["Kata Kunci"] || "").trim().toUpperCase(),
            clue: String(r["Clue"] || "").trim(),
            solved: false
          })).filter(c => c.clue.length > 0 && c.answer.length > 0);

          if (clues.length > 0) {
            appData.ttsClues = clues;
            totalImported += clues.length;
          }
        }
      });

      if (totalImported > 0) {
        saveData();
        renderDashQuestions();
        if (gameState.activeGame === 'view-tts') initTTSGame();
        showToast(`Berhasil mengimpor ${totalImported} soal dari file Excel!`, "success");
      } else {
        showToast("Tidak ada data soal valid yang cocok di file Excel!", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Gagal mengimpor file Excel!", "error");
    }
  };
  reader.readAsArrayBuffer(file);
}

function exportJSON() {
  const jsonStr = JSON.stringify(appData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `informatics-arcade-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Data berhasil diekspor!", "success");
}

function importJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported.classes || imported.students || imported.gameQuestions) {
        appData = imported;
        saveData();
        showToast("Data berhasil diimpor!", "success");
        renderHomeStats();
        switchView('view-home');
      } else {
        showToast("Format file JSON tidak sesuai!", "error");
      }
    } catch (err) {
      showToast("Gagal membaca file JSON!", "error");
    }
  };
  reader.readAsText(file);
}

// FULLSCREEN & MODAL HELPERS
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => showToast("Gagal masuk mode fullscreen", "error"));
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}

function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('active');
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('active');
}

// --- INIT & EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
  initData();
  renderHomeStats();

  const heroSelect = document.getElementById('hero-class-select');
  if (heroSelect) {
    heroSelect.addEventListener('change', (e) => {
      switchActiveClass(e.target.value);
    });
  }

  const btnFS = document.getElementById('btn-fullscreen-toggle');
  if (btnFS) btnFS.addEventListener('click', toggleFullscreen);

  const btnSpin = document.getElementById('btn-spin-name');
  if (btnSpin) btnSpin.addEventListener('click', spinName);

  // ✅ KOCOK DADU — Ular Tangga dice button binding
  const btnRollDice = document.getElementById('btn-roll-dice');
  if (btnRollDice) btnRollDice.addEventListener('click', rollDiceUlarTangga);

  const btnCorr = document.getElementById('btn-correct-answer');
  if (btnCorr) btnCorr.addEventListener('click', () => markAnswer(true));

  const btnWrong = document.getElementById('btn-wrong-answer');
  if (btnWrong) btnWrong.addEventListener('click', () => markAnswer(false));

  const btnReveal = document.getElementById('btn-reveal-key');
  if (btnReveal) btnReveal.addEventListener('click', revealAnswer);

  const btnNext = document.getElementById('btn-next-player');
  if (btnNext) btnNext.addEventListener('click', nextTurn);

  const ttsInput = document.getElementById('tts-word-input');
  if (ttsInput) {
    ttsInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        verifyTTSWord();
      }
    });
  }

  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) document.body.classList.add('infocus-active');
    else document.body.classList.remove('infocus-active');
  });
});

