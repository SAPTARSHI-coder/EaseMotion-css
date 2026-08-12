/**
 * Keyboard Shortcuts Cheat Sheet Overlay — script.js
 * EaseMotion CSS Submission
 * Folder: submissions/examples/keyboard-shortcuts-overlay-nk/
 *
 * Responsibilities:
 *  - Global '?' key trigger to open/close shortcuts modal
 *  - Modal open/close state management & ARIA attributes
 *  - Live fuzzy search filtering across all categories
 *  - Category tab filtering (All, Navigation, Editing, etc.)
 *  - Focus trap inside modal while open
 *  - Theme switching (Light/Dark)
 */

'use strict';

/* ── DOM References ─────────────────────────────────────────────── */
const modal         = document.getElementById('shortcuts-modal');
const backdrop      = document.getElementById('shortcuts-backdrop');
const searchInput   = document.getElementById('shortcut-search');
const closeBtn      = document.getElementById('modal-close');
const openBtn       = document.getElementById('btn-open-shortcuts');
const countLabel    = document.getElementById('modal-count');
const emptyState    = document.getElementById('empty-state');
const themeBtn      = document.getElementById('btn-theme');
const tabs          = document.querySelectorAll('.modal-tab');
const groups        = document.querySelectorAll('.shortcut-group');
const rows          = document.querySelectorAll('.shortcut-row');
const htmlEl        = document.documentElement;

/* ── State ──────────────────────────────────────────────────────── */
let isOpen          = false;
let activeCategory  = 'all';
let previousFocus   = null;

/* ── Open Modal ─────────────────────────────────────────────────── */
function openModal() {
  if (isOpen) return;
  isOpen = true;
  previousFocus = document.activeElement;

  modal.removeAttribute('hidden');
  // Trigger reflow for CSS animation
  void modal.offsetWidth;

  modal.classList.add('is-open');
  backdrop.classList.add('is-open');
  backdrop.setAttribute('aria-hidden', 'false');

  // Focus search input
  setTimeout(() => searchInput.focus(), 50);

  document.addEventListener('keydown', handleGlobalKeydown);
}

/* ── Close Modal ────────────────────────────────────────────────── */
function closeModal() {
  if (!isOpen) return;
  isOpen = false;

  modal.classList.remove('is-open');
  backdrop.classList.remove('is-open');
  backdrop.setAttribute('aria-hidden', 'true');

  setTimeout(() => {
    modal.setAttribute('hidden', '');
    if (previousFocus && typeof previousFocus.focus === 'function') {
      previousFocus.focus();
    }
  }, 250);

  document.removeEventListener('keydown', handleGlobalKeydown);
}

/* ── Toggle Modal ───────────────────────────────────────────────── */
function toggleModal() {
  isOpen ? closeModal() : openModal();
}

/* ── Filter Logic ───────────────────────────────────────────────── */
function filterShortcuts() {
  const query = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  groups.forEach(group => {
    const groupCategory = group.dataset.category;
    const matchesCategory = activeCategory === 'all' || groupCategory === activeCategory;

    let visibleInGroup = 0;
    const groupRows = group.querySelectorAll('.shortcut-row');

    groupRows.forEach(row => {
      const desc = row.querySelector('.shortcut-desc').textContent.toLowerCase();
      const keys = row.querySelector('.shortcut-keys').textContent.toLowerCase();
      const extraDesc = (row.dataset.desc || '').toLowerCase();

      const matchesSearch = !query || desc.includes(query) || keys.includes(query) || extraDesc.includes(query);

      if (matchesCategory && matchesSearch) {
        row.style.display = 'flex';
        visibleInGroup++;
        visibleCount++;
      } else {
        row.style.display = 'none';
      }
    });

    group.style.display = visibleInGroup > 0 ? 'flex' : 'none';
  });

  // Toggle empty state
  emptyState.hidden = visibleCount > 0;
  countLabel.textContent = `${visibleCount} shortcut${visibleCount === 1 ? '' : 's'}`;
}

/* ── Category Tabs Handler ──────────────────────────────────────── */
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => {
      t.classList.remove('modal-tab--active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('modal-tab--active');
    tab.setAttribute('aria-selected', 'true');

    activeCategory = tab.dataset.category;
    filterShortcuts();
  });
});

/* ── Search Input Listener ──────────────────────────────────────── */
searchInput.addEventListener('input', filterShortcuts);

/* ── Focus Trap inside Modal ────────────────────────────────────── */
const FOCUSABLE_ELEMENTS = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function handleGlobalKeydown(e) {
  if (!isOpen) return;

  // ESC to close
  if (e.key === 'Escape') {
    e.preventDefault();
    closeModal();
    return;
  }

  // Focus trap Tab handling
  if (e.key === 'Tab') {
    const focusables = Array.from(modal.querySelectorAll(FOCUSABLE_ELEMENTS));
    if (focusables.length === 0) return;

    const first = focusables[0];
    const last  = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}

/* ── Global Key Listener for '?' ────────────────────────────────── */
document.addEventListener('keydown', (e) => {
  // Ignore if user is typing in an editable field
  const tag = document.activeElement.tagName;
  const isEditable = tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement.isContentEditable;

  if (isEditable && e.key !== 'Escape') return;

  // Pressing '?' (Shift + /) toggles modal
  if (e.key === '?' || (e.shiftKey && e.key === '/')) {
    e.preventDefault();
    toggleModal();
  }
});

/* ── Button Click Listeners ─────────────────────────────────────── */
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

/* ── Theme Switcher ─────────────────────────────────────────────── */
function applyTheme(theme) {
  htmlEl.dataset.theme = theme;
  try { localStorage.setItem('shortcuts-theme', theme); } catch {}
}

themeBtn.addEventListener('click', () => {
  const next = htmlEl.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});

// Restore saved theme or match system preference
(function initTheme() {
  try {
    const saved = localStorage.getItem('shortcuts-theme');
    if (saved === 'light' || saved === 'dark') { applyTheme(saved); return; }
  } catch {}
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light');
  }
})();

/* ── Initial Count ──────────────────────────────────────────────── */
filterShortcuts();
