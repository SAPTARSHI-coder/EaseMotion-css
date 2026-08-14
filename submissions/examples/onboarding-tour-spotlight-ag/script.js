/**
 * Onboarding Tour Spotlight — script.js
 * EaseMotion CSS Submission
 * Folder: submissions/examples/onboarding-tour-spotlight-ag/
 *
 * Responsibilities:
 *  - Tour open/close lifecycle
 *  - CSS custom property updates for clip-path spotlight + highlight ring
 *  - Tooltip positioning (auto-flip: below / above / left / right)
 *  - Step navigation (next, prev, dot jump)
 *  - Focus trap inside tooltip while tour is active
 *  - Keyboard: Escape → close, ArrowRight → next, ArrowLeft → prev
 *  - Theme toggle
 *  - Responsive target fallbacks
 */

'use strict';

/* ─────────────────────────────────────────────────────────────────
   TOUR STEPS DEFINITION
   Each step maps to an element ID in the DOM.
───────────────────────────────────────────────────────────────── */
const TOUR_STEPS = [
  {
    targetId:  'kpi-row',
    icon:      '📊',
    title:     'Key Metrics at a Glance',
    desc:      'These cards show your most important KPIs — revenue, users, tickets, and conversion. They update in real time.',
    placement: 'bottom',
  },
  {
    targetId:  'sidebar',
    icon:      '🗂',
    title:     'Navigation Sidebar',
    desc:      'Use the sidebar to jump between Dashboard, Analytics, Projects, your Team, and Settings.',
    placement: 'right',
  },
  {
    targetId:  'topbar',
    icon:      '🔔',
    title:     'Action Toolbar',
    desc:      'Quickly access notifications, toggle the theme, or kick off a new project from the top bar.',
    placement: 'bottom',
  },
  {
    targetId:  'action-bar',
    icon:      '➕',
    title:     'Quick Actions',
    desc:      'Create a new project, import data, or export a CSV report — all from this action bar.',
    placement: 'bottom',
  },
  {
    targetId:  'chart-card',
    icon:      '📈',
    title:     'Revenue Chart',
    desc:      'Visualise revenue trends over 7, 30, or 90 days. Hover data points to inspect individual values.',
    placement: 'top',
  },
];

const PADDING = 10; // px padding around the spotlight target
const TOOLTIP_GAP = 18; // px gap between target and tooltip

/* ─────────────────────────────────────────────────────────────────
   DOM REFERENCES
───────────────────────────────────────────────────────────────── */
const backdrop    = document.getElementById('tour-backdrop');
const highlight   = document.getElementById('tour-highlight');
const tooltip     = document.getElementById('tour-tooltip');
const tooltipIcon = document.getElementById('tooltip-icon');
const tipTitle    = document.getElementById('tooltip-title');
const tipDesc     = document.getElementById('tooltip-desc');
const tipBadge    = document.getElementById('tooltip-step-badge');
const tipArrow    = document.getElementById('tooltip-arrow');
const dotsWrap    = document.getElementById('tour-dots');

const btnNext    = document.getElementById('tour-next');
const btnPrev    = document.getElementById('tour-prev');
const btnClose   = document.getElementById('tour-close');
const btnStart   = document.getElementById('btn-start-tour');
const btnTheme   = document.getElementById('theme-btn');
const htmlEl     = document.documentElement;

/* ─────────────────────────────────────────────────────────────────
   STATE
───────────────────────────────────────────────────────────────── */
let currentStep  = 0;
let isActive     = false;
let prevFocus    = null; // element that had focus before tour opened

/* ─────────────────────────────────────────────────────────────────
   HELPER: GET ELEMENT RECT WITH PADDING
───────────────────────────────────────────────────────────────── */
function getPaddedRect(el) {
  const r = el.getBoundingClientRect();
  return {
    top:    r.top    - PADDING,
    left:   r.left   - PADDING,
    width:  r.width  + PADDING * 2,
    height: r.height + PADDING * 2,
    right:  r.right  + PADDING,
    bottom: r.bottom + PADDING,
    cx:     r.left   + r.width  / 2,
    cy:     r.top    + r.height / 2,
  };
}

/* ─────────────────────────────────────────────────────────────────
   STEP DOTS
───────────────────────────────────────────────────────────────── */
function buildDots() {
  dotsWrap.innerHTML = '';
  TOUR_STEPS.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'tour-dot';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Go to step ${i + 1} of ${TOUR_STEPS.length}`);
    dot.setAttribute('aria-selected', String(i === currentStep));
    dot.addEventListener('click', () => goToStep(i));
    dotsWrap.appendChild(dot);
  });
}

function updateDots() {
  const dots = dotsWrap.querySelectorAll('.tour-dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('is-active', i === currentStep);
    dot.setAttribute('aria-selected', String(i === currentStep));
  });
}

/* ─────────────────────────────────────────────────────────────────
   SPOTLIGHT — update clip-path + highlight ring position
───────────────────────────────────────────────────────────────── */
function positionSpotlight(rect) {
  const root = document.documentElement;

  // Update backdrop clip-path vars (percentage strings for stability)
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const x = Math.max(0, rect.left);
  const y = Math.max(0, rect.top);
  const w = Math.min(rect.width,  vw - x);
  const h = Math.min(rect.height, vh - y);

  root.style.setProperty('--tour-spotlight-x', `${x}px`);
  root.style.setProperty('--tour-spotlight-y', `${y}px`);
  root.style.setProperty('--tour-spotlight-w', `${w}px`);
  root.style.setProperty('--tour-spotlight-h', `${h}px`);

  // Position highlight ring
  highlight.style.top    = `${y}px`;
  highlight.style.left   = `${x}px`;
  highlight.style.width  = `${w}px`;
  highlight.style.height = `${h}px`;
}

/* ─────────────────────────────────────────────────────────────────
   TOOLTIP POSITIONING
   Determines best placement (bottom / top / right / left) and
   positions the tooltip so it doesn't overflow the viewport.
───────────────────────────────────────────────────────────────── */
function positionTooltip(rect, placement) {
  const vw  = window.innerWidth;
  const vh  = window.innerHeight;
  const tw  = tooltip.offsetWidth  || 320;
  const th  = tooltip.offsetHeight || 220;

  // Arrow direction classes
  const arrowClasses = ['arrow--top', 'arrow--bottom', 'arrow--left', 'arrow--right'];
  tipArrow.classList.remove(...arrowClasses);

  let top, left;

  // Auto-flip if preferred placement overflows
  const fits = {
    bottom: rect.bottom + TOOLTIP_GAP + th <= vh,
    top:    rect.top    - TOOLTIP_GAP - th >= 0,
    right:  rect.right  + TOOLTIP_GAP + tw <= vw,
    left:   rect.left   - TOOLTIP_GAP - tw >= 0,
  };

  const resolved =
    fits[placement] ? placement :
    (placement === 'bottom' && fits.top)   ? 'top'   :
    (placement === 'top'    && fits.bottom) ? 'bottom':
    (placement === 'right'  && fits.left)   ? 'left'  :
    (placement === 'left'   && fits.right)  ? 'right' :
    'bottom'; // fallback

  if (resolved === 'bottom') {
    top  = rect.bottom + TOOLTIP_GAP;
    left = rect.cx - tw / 2;
    tipArrow.classList.add('arrow--top');
  } else if (resolved === 'top') {
    top  = rect.top - TOOLTIP_GAP - th;
    left = rect.cx - tw / 2;
    tipArrow.classList.add('arrow--bottom');
  } else if (resolved === 'right') {
    top  = rect.cy - th / 2;
    left = rect.right + TOOLTIP_GAP;
    tipArrow.classList.add('arrow--left');
  } else { // left
    top  = rect.cy - th / 2;
    left = rect.left - TOOLTIP_GAP - tw;
    tipArrow.classList.add('arrow--right');
  }

  // Clamp inside viewport (16px margin)
  const MARGIN = 16;
  left = Math.max(MARGIN, Math.min(left, vw - tw - MARGIN));
  top  = Math.max(MARGIN, Math.min(top,  vh - th - MARGIN));

  tooltip.style.left = `${left}px`;
  tooltip.style.top  = `${top}px`;
}

/* ─────────────────────────────────────────────────────────────────
   RENDER STEP
───────────────────────────────────────────────────────────────── */
function renderStep(index) {
  const step = TOUR_STEPS[index];
  if (!step) return;

  // Update tooltip text
  tooltipIcon.textContent = step.icon;
  tipTitle.textContent    = step.title;
  tipDesc.textContent     = step.desc;
  tipBadge.textContent    = `${index + 1} / ${TOUR_STEPS.length}`;
  tipBadge.setAttribute('aria-label', `Step ${index + 1} of ${TOUR_STEPS.length}`);

  // Prev / Next button states
  btnPrev.disabled = index === 0;
  btnNext.textContent = index === TOUR_STEPS.length - 1 ? 'Finish ✓' : 'Next →';
  btnNext.setAttribute('aria-label', index === TOUR_STEPS.length - 1 ? 'Finish tour' : 'Next step');

  // Update dots
  updateDots();

  // Get target element
  const targetEl = document.getElementById(step.targetId);
  if (!targetEl) return;

  // Scroll target into view (without disrupting the page scroll)
  targetEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });

  // Wait one frame so layout settles after scroll
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const rect = getPaddedRect(targetEl);
      positionSpotlight(rect);
      positionTooltip(rect, step.placement);
    });
  });
}

/* ─────────────────────────────────────────────────────────────────
   FOCUS TRAP
───────────────────────────────────────────────────────────────── */
const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function trapFocus(e) {
  if (!isActive) return;

  const focusable = [...tooltip.querySelectorAll(FOCUSABLE)];
  if (!focusable.length) return;

  const first = focusable[0];
  const last  = focusable[focusable.length - 1];

  if (e.key === 'Tab') {
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
}

/* ─────────────────────────────────────────────────────────────────
   OPEN / CLOSE TOUR
───────────────────────────────────────────────────────────────── */
function openTour() {
  if (isActive) return;
  isActive    = true;
  currentStep = 0;

  prevFocus = document.activeElement;

  backdrop.classList.add('is-active');
  highlight.classList.add('is-active');
  tooltip.classList.add('is-active');

  buildDots();
  renderStep(currentStep);

  // Focus tooltip after transition
  setTimeout(() => tooltip.focus(), 320);

  document.addEventListener('keydown', handleKeydown);
}

function closeTour() {
  if (!isActive) return;
  isActive = false;

  backdrop.classList.remove('is-active');
  highlight.classList.remove('is-active');
  tooltip.classList.remove('is-active');

  document.removeEventListener('keydown', handleKeydown);

  // Return focus to trigger
  if (prevFocus) prevFocus.focus();
}

/* ─────────────────────────────────────────────────────────────────
   STEP NAVIGATION
───────────────────────────────────────────────────────────────── */
function goToStep(index) {
  currentStep = index;
  renderStep(currentStep);
}

function nextStep() {
  if (currentStep >= TOUR_STEPS.length - 1) {
    closeTour();
    return;
  }
  goToStep(currentStep + 1);
}

function prevStep() {
  if (currentStep <= 0) return;
  goToStep(currentStep - 1);
}

/* ─────────────────────────────────────────────────────────────────
   KEYBOARD HANDLER
───────────────────────────────────────────────────────────────── */
function handleKeydown(e) {
  switch (e.key) {
    case 'Escape':
      e.preventDefault();
      closeTour();
      break;
    case 'ArrowRight':
      e.preventDefault();
      nextStep();
      break;
    case 'ArrowLeft':
      e.preventDefault();
      prevStep();
      break;
    default:
      trapFocus(e);
  }
}

/* ─────────────────────────────────────────────────────────────────
   EVENT LISTENERS
───────────────────────────────────────────────────────────────── */
btnStart.addEventListener('click', openTour);
btnNext.addEventListener('click',  nextStep);
btnPrev.addEventListener('click',  prevStep);
btnClose.addEventListener('click', closeTour);

// Click outside tooltip (on backdrop) — do not close; keep tour active.
// Only Escape or Finish closes the tour, by design (guided flow).

/* ─────────────────────────────────────────────────────────────────
   REPOSITION ON RESIZE
───────────────────────────────────────────────────────────────── */
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (isActive) renderStep(currentStep);
  }, 80);
});

/* ─────────────────────────────────────────────────────────────────
   THEME TOGGLE
───────────────────────────────────────────────────────────────── */
function applyTheme(theme) {
  htmlEl.dataset.theme = theme;
  try { localStorage.setItem('spotlight-theme', theme); } catch {}
}

btnTheme.addEventListener('click', () => {
  applyTheme(htmlEl.dataset.theme === 'dark' ? 'light' : 'dark');
});

// Restore saved / OS theme
(function initTheme() {
  try {
    const saved = localStorage.getItem('spotlight-theme');
    if (saved === 'light' || saved === 'dark') { applyTheme(saved); return; }
  } catch {}
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light');
  }
})();
