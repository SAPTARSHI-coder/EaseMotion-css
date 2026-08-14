/**
 * AI Thought Accordion — script.js
 * EaseMotion CSS Submission
 * Folder: submissions/examples/ai-thought-accordion-em/
 *
 * Responsibilities:
 *  - Thought accordion open/close (Space, Enter, click)
 *  - Simulated thinking state with streaming step reveal
 *  - Token counter animation
 *  - Dark/Light theme toggle
 *  - ARIA attribute management
 */

'use strict';

/* ── DOM references ─────────────────────────────────────────────── */
const thoughtBlock   = document.getElementById('thought-block');
const thoughtToggle  = document.getElementById('thought-toggle');
const thoughtPanel   = document.getElementById('thought-content');
const thoughtLabel   = document.getElementById('thought-label');
const thoughtCount   = document.getElementById('thought-token-count');
const thoughtCursor  = document.getElementById('thought-cursor');
const thoughtStream  = document.getElementById('thought-stream');
const thoughtSteps   = thoughtStream ? [...thoughtStream.querySelectorAll('.thought-step')] : [];

const btnThink  = document.getElementById('btn-think');
const btnStop   = document.getElementById('btn-stop');
const btnReset  = document.getElementById('btn-reset');

const themeToggle = document.getElementById('theme-toggle');
const htmlEl      = document.documentElement;

/* ── State ──────────────────────────────────────────────────────── */
let isExpanded      = false;
let isThinking      = false;
let thinkTimers     = [];
let tokenInterval   = null;
let currentTokens   = 0;

/* ── Utility ─────────────────────────────────────────────────────── */
function setExpanded(expanded) {
  isExpanded = expanded;
  thoughtToggle.setAttribute('aria-expanded', String(expanded));
  thoughtPanel.setAttribute('aria-hidden',    String(!expanded));
}

function setState(state) {
  thoughtBlock.dataset.state = state; // 'idle' | 'thinking' | 'done'
}

function clearTimers() {
  thinkTimers.forEach(clearTimeout);
  thinkTimers = [];
  if (tokenInterval) { clearInterval(tokenInterval); tokenInterval = null; }
}

function resetSteps() {
  thoughtSteps.forEach(step => step.classList.remove('is-visible'));
}

/* ── Accordion toggle ─────────────────────────────────────────────── */
function toggleAccordion() {
  setExpanded(!isExpanded);
}

thoughtToggle.addEventListener('click', toggleAccordion);

thoughtToggle.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    e.preventDefault();
    toggleAccordion();
  }
});

/* ── Token counter ────────────────────────────────────────────────── */
function startTokenCounter(targetTokens = 320, durationMs = 3500) {
  currentTokens = 0;
  const startTime = performance.now();

  tokenInterval = setInterval(() => {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / durationMs, 1);
    currentTokens = Math.floor(progress * targetTokens);
    thoughtCount.textContent = `${currentTokens} tokens`;

    if (progress >= 1) {
      clearInterval(tokenInterval);
      tokenInterval = null;
      thoughtCount.textContent = `${targetTokens} tokens`;
    }
  }, 50);
}

/* ── Simulate thinking ─────────────────────────────────────────────── */
function simulateThinking() {
  if (isThinking) return;
  isThinking = true;

  // Update UI immediately
  setState('thinking');
  setExpanded(true);
  thoughtLabel.textContent = 'Thinking…';
  thoughtCount.textContent = 'thinking';
  resetSteps();

  btnThink.disabled = true;
  btnStop.disabled  = false;

  // Start token count
  startTokenCounter(312, 4000);

  // Reveal steps with staggered delays
  const delays = [200, 900, 1700, 2500, 3300];

  thoughtSteps.forEach((step, i) => {
    const t = setTimeout(() => {
      step.classList.add('is-visible');
    }, delays[i] ?? delays[delays.length - 1] + i * 700);
    thinkTimers.push(t);
  });

  // Finish thinking after all steps have been revealed
  const finishDelay = (delays[thoughtSteps.length - 1] ?? 3300) + 1000;
  const finishTimer = setTimeout(() => {
    finishThinking();
  }, finishDelay);
  thinkTimers.push(finishTimer);
}

function finishThinking() {
  isThinking = false;
  clearInterval(tokenInterval);
  tokenInterval = null;

  setState('done');
  thoughtLabel.textContent = 'Thought process';
  thoughtCount.textContent = `${currentTokens || 312} tokens`;

  btnThink.disabled = false;
  btnStop.disabled  = true;
}

function stopThinking() {
  if (!isThinking) return;
  clearTimers();
  isThinking = false;
  finishThinking();
}

function resetAll() {
  clearTimers();
  isThinking = false;

  setState('idle');
  setExpanded(false);
  thoughtLabel.textContent = 'Thought process';
  thoughtCount.textContent = '0 tokens';
  currentTokens = 0;

  resetSteps();

  btnThink.disabled = false;
  btnStop.disabled  = true;
}

/* ── Button events ──────────────────────────────────────────────── */
btnThink.addEventListener('click', simulateThinking);
btnStop.addEventListener('click',  stopThinking);
btnReset.addEventListener('click', resetAll);

/* ── Theme toggle ───────────────────────────────────────────────── */
function applyTheme(theme) {
  htmlEl.dataset.theme = theme;
  try { localStorage.setItem('ai-accordion-theme', theme); } catch {}
}

function toggleTheme() {
  const next = htmlEl.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
}

themeToggle.addEventListener('click', toggleTheme);

// Restore saved theme
(function initTheme() {
  try {
    const saved = localStorage.getItem('ai-accordion-theme');
    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved);
      return;
    }
  } catch {}
  // Respect OS preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light');
  }
})();

/* ── Keyboard: Escape to collapse when open ──────────────────────── */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isExpanded) {
    setExpanded(false);
    thoughtToggle.focus();
  }
});

/* ── Initialise ──────────────────────────────────────────────────── */
setExpanded(false);
setState('idle');
btnStop.disabled = true;
