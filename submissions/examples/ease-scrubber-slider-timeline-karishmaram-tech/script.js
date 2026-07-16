// Configuration presets
const DURATION = 10; // total animation time limit in seconds

const EASING_PRESETS = {
  linear: {
    func: (t) => t,
    curve: 'M 0 100 L 100 0'
  },
  easeIn: {
    func: (t) => t * t,
    curve: 'M 0 100 Q 50 100 100 0'
  },
  easeOut: {
    func: (t) => t * (2 - t),
    curve: 'M 0 100 Q 50 0 100 0'
  },
  easeInOut: {
    func: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    curve: 'M 0 100 C 30 100 70 0 100 0'
  }
};

// Application State tracking vars
let isPlaying = false;
let currentTime = 0;
let selectedEase = 'easeInOut';
let animationFrameId = null;
let lastTimestamp = null;

// DOM Element hooks
const playPauseBtn = document.getElementById('play-pause-btn');
const resetBtn = document.getElementById('reset-btn');
const currentTimeTxt = document.getElementById('current-time-txt');
const durationTxt = document.getElementById('duration-txt');
const curvePath = document.getElementById('curve-path');
const tracerDot = document.getElementById('tracer-dot');
const progressPercentage = document.getElementById('progress-percentage');
const progressBar = document.getElementById('progress-bar');
const timelineScrubber = document.getElementById('timeline-scrubber');
const playbackProgressOverlay = document.getElementById('playback-progress-overlay');
const easedMarker = document.getElementById('eased-marker');
const playheadHandle = document.getElementById('playhead-handle');
const easeButtons = document.querySelectorAll('.ease-btn');
const tickContainer = document.getElementById('tick-container');

// Render procedural ticks dynamically inside the track
function generateTrackTicks() {
  tickContainer.innerHTML = '';
  for (let i = 0; i <= 20; i++) {
    const tick = document.createElement('div');
    tick.classList.add('tick', i % 5 === 0 ? 'long' : 'short');
    tickContainer.appendChild(tick);
  }
}

// Convert absolute numbers to standard duration timestamps (MM:SS.CC)
function formatTime(time) {
  const mins = Math.floor(time / 60);
  const secs = Math.floor(time % 60);
  const ms = Math.floor((time % 1) * 100);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
}

// Global drawing update calculations interface
function updateUI() {
  const rawProgress = currentTime / DURATION;
  const easedProgress = EASING_PRESETS[selectedEase].func(rawProgress);

  // Update readouts
  currentTimeTxt.textContent = formatTime(currentTime);
  progressPercentage.textContent = `${(easedProgress * 100).toFixed(1)}%`;

  // Scale tracking indicator metrics and graphs
  progressBar.style.width = `${easedProgress * 100}%`;
  
  // Position control markers along the timeline
  const percentPos = rawProgress * 100;
  playheadHandle.style.left = `${percentPos}%`;
  playbackProgressOverlay.style.width = `${percentPos}%`;
  easedMarker.style.left = `${easedProgress * 100}%`;

  // Animate indicator circle point coordinate tracing on the visual plot
  tracerDot.setAttribute('cx', rawProgress * 100);
  tracerDot.setAttribute('cy', 100 - (easedProgress * 100));
}

// Execution and frame loop transitions
function animate(timestamp) {
  if (lastTimestamp === null) lastTimestamp = timestamp;
  const elapsed = (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;

  currentTime += elapsed;

  if (currentTime >= DURATION) {
    currentTime = DURATION;
    isPlaying = false;
    updatePlayPauseState();
  }

  updateUI();

  if (isPlaying) {
    animationFrameId = requestAnimationFrame(animate);
  }
}

function updatePlayPauseState() {
  const icon = playPauseBtn.querySelector('i');
  if (isPlaying) {
    icon.setAttribute('data-lucide', 'pause');
    playPauseBtn.classList.remove('btn-primary');
    playPauseBtn.classList.add('btn-secondary');
  } else {
    icon.setAttribute('data-lucide', 'play');
    playPauseBtn.classList.add('btn-primary');
    playPauseBtn.classList.remove('btn-secondary');
    lastTimestamp = null;
  }
  lucide.createIcons(); // Re-render target icon changes
}

// User interactions: timeline scrubbing calculation
function handleScrub(e) {
  const rect = timelineScrubber.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  
  currentTime = percent * DURATION;
  updateUI();
}

// Attach Event Listeners
playPauseBtn.addEventListener('click', () => {
  if (currentTime >= DURATION) currentTime = 0;
  isPlaying = !isPlaying;
  updatePlayPauseState();
  if (isPlaying) {
    animationFrameId = requestAnimationFrame(animate);
  } else {
    cancelAnimationFrame(animationFrameId);
  }
});

resetBtn.addEventListener('click', () => {
  isPlaying = false;
  currentTime = 0;
  cancelAnimationFrame(animationFrameId);
  updatePlayPauseState();
  updateUI();
});

// Setup curve change triggers
easeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.ease-btn.active').classList.remove('active');
    btn.classList.add('active');
    selectedEase = btn.getAttribute('data-ease');
    
    // Smoothly transition curve details in UI SVG elements
    curvePath.setAttribute('d', EASING_PRESETS[selectedEase].curve);
    updateUI();
  });
});

// Track Scrub/Drag Events
let isDragging = false;

timelineScrubber.addEventListener('mousedown', (e) => {
  isDragging = true;
  handleScrub(e);
});

window.addEventListener('mousemove', (e) => {
  if (isDragging) handleScrub(e);
});

window.addEventListener('mouseup', () => {
  isDragging = false;
});

// Touch Devices Support
timelineScrubber.addEventListener('touchstart', (e) => {
  isDragging = true;
  handleScrub(e);
});

window.addEventListener('touchmove', (e) => {
  if (isDragging) handleScrub(e);
});

window.addEventListener('touchend', () => {
  isDragging = false;
});

// Run Initializer configurations
generateTrackTicks();
updateUI();
