/**
 * EaseMotion CSS — Interactive File Version History Diff Viewer Card
 * File: script.js
 * Folder: submissions/examples/version-history-diff-viewer-sk/
 *
 * Vanilla JS (zero dependencies) controlling:
 *  - Revision selection & diff content rendering
 *  - Unified / Split view mode toggling
 *  - Restore confirmation dialog
 *  - Light/Dark theme toggle
 *  - Mobile version dropdown sync
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ── 1. DIFF DATA STORE ────────────────────────────────────────────
  // Each revision has an array of diff line objects:
  //   type: 'ctx' | 'add' | 'del'
  //   oldNum: line number in base file (null for additions)
  //   newNum: line number in head file (null for deletions)
  //   code: the code string

  const DIFF_DATA = {
    v4: {
      base: 'v3',
      head: 'v4',
      hunk: '@@ -12,8 +12,19 @@ :root — Easing Curve Tokens',
      lines: [
        { type: 'ctx', oldNum: 12, newNum: 12, code: '  /* Easing Curve Tokens */' },
        { type: 'ctx', oldNum: 13, newNum: 13, code: '  --em-ease-normal: cubic-bezier(0.16, 1, 0.3, 1);' },
        { type: 'del', oldNum: 14, newNum: null, code: '  --em-ease-in:     cubic-bezier(0.4, 0, 1, 1);' },
        { type: 'del', oldNum: 15, newNum: null, code: '  --em-ease-out:    cubic-bezier(0, 0, 0.2, 1);' },
        { type: 'add', oldNum: null, newNum: 14, code: '  --em-ease-in:     cubic-bezier(0.55, 0, 1, 0.45);' },
        { type: 'add', oldNum: null, newNum: 15, code: '  --em-ease-out:    cubic-bezier(0, 0.55, 0.45, 1);' },
        { type: 'add', oldNum: null, newNum: 16, code: '  --em-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);' },
        { type: 'add', oldNum: null, newNum: 17, code: '  --em-ease-bounce: cubic-bezier(0.68, -0.6, 0.32, 1.6);' },
        { type: 'ctx', oldNum: 16, newNum: 18, code: '' },
        { type: 'ctx', oldNum: 17, newNum: 19, code: '  /* Duration Tokens */' },
        { type: 'ctx', oldNum: 18, newNum: 20, code: '  --em-dur-fast:   150ms;' },
        { type: 'add', oldNum: null, newNum: 21, code: '  --em-dur-normal: 280ms;' },
        { type: 'add', oldNum: null, newNum: 22, code: '  --em-dur-slow:   450ms;' },
        { type: 'add', oldNum: null, newNum: 23, code: '  --em-dur-xslow:  700ms;' },
        { type: 'del', oldNum: 19, newNum: null, code: '  --em-dur-normal: 250ms;' },
        { type: 'ctx', oldNum: 20, newNum: 24, code: '}' },
      ]
    },
    v3: {
      base: 'v2',
      head: 'v3',
      hunk: '@@ -8,14 +8,9 @@ :root — Timing Refactor',
      lines: [
        { type: 'ctx', oldNum:  8, newNum:  8, code: '  /* Timing Refactor */' },
        { type: 'del', oldNum:  9, newNum: null, code: '  --em-transition-short:  100ms ease;' },
        { type: 'del', oldNum: 10, newNum: null, code: '  --em-transition-medium: 200ms ease;' },
        { type: 'del', oldNum: 11, newNum: null, code: '  --em-transition-long:   400ms ease;' },
        { type: 'del', oldNum: 12, newNum: null, code: '  --em-transition-xlong:  600ms linear;' },
        { type: 'add', oldNum: null, newNum:  9, code: '  --em-dur-fast:   150ms;' },
        { type: 'add', oldNum: null, newNum: 10, code: '  --em-dur-normal: 250ms;' },
        { type: 'add', oldNum: null, newNum: 11, code: '  --em-dur-slow:   400ms;' },
        { type: 'ctx', oldNum: 13, newNum: 12, code: '' },
        { type: 'del', oldNum: 14, newNum: null, code: '  --em-ease-standard: ease-in-out;' },
        { type: 'del', oldNum: 15, newNum: null, code: '  --em-ease-decel:    ease-out;' },
        { type: 'del', oldNum: 16, newNum: null, code: '  --em-ease-accel:    ease-in;' },
        { type: 'add', oldNum: null, newNum: 13, code: '  --em-ease-normal: cubic-bezier(0.16, 1, 0.3, 1);' },
        { type: 'ctx', oldNum: 17, newNum: 14, code: '}' },
      ]
    },
    v2: {
      base: 'v1',
      head: 'v2',
      hunk: '@@ -1,0 +30,22 @@ :root — RTL Logical Properties',
      lines: [
        { type: 'ctx', oldNum: 30, newNum: 30, code: '  /* Logical Layout Tokens (RTL support) */' },
        { type: 'add', oldNum: null, newNum: 31, code: '  --em-space-inline-sm: 0.5rem;' },
        { type: 'add', oldNum: null, newNum: 32, code: '  --em-space-inline-md: 1rem;' },
        { type: 'add', oldNum: null, newNum: 33, code: '  --em-space-inline-lg: 2rem;' },
        { type: 'add', oldNum: null, newNum: 34, code: '' },
        { type: 'add', oldNum: null, newNum: 35, code: '  --em-space-block-sm: 0.5rem;' },
        { type: 'add', oldNum: null, newNum: 36, code: '  --em-space-block-md: 1rem;' },
        { type: 'add', oldNum: null, newNum: 37, code: '  --em-space-block-lg: 2rem;' },
        { type: 'add', oldNum: null, newNum: 38, code: '' },
        { type: 'add', oldNum: null, newNum: 39, code: '  --em-border-start: var(--border-mid);' },
        { type: 'add', oldNum: null, newNum: 40, code: '  --em-border-end:   var(--border-subtle);' },
        { type: 'ctx', oldNum: 31, newNum: 41, code: '}' },
      ]
    },
    v1: {
      base: null,
      head: 'v1',
      hunk: '@@ -0,0 +1,38 @@ Initial commit: base tokens',
      lines: [
        { type: 'add', oldNum: null, newNum:  1, code: '/* animation-tokens.css — EaseMotion CSS */' },
        { type: 'add', oldNum: null, newNum:  2, code: ':root {' },
        { type: 'add', oldNum: null, newNum:  3, code: '  /* Color Surface Tokens */' },
        { type: 'add', oldNum: null, newNum:  4, code: '  --em-bg-app:     #0d0f18;' },
        { type: 'add', oldNum: null, newNum:  5, code: '  --em-bg-surface: #1a1e32;' },
        { type: 'add', oldNum: null, newNum:  6, code: '' },
        { type: 'add', oldNum: null, newNum:  7, code: '  /* Border Tokens */' },
        { type: 'add', oldNum: null, newNum:  8, code: '  --em-border-subtle: rgba(255 255 255 / 0.06);' },
        { type: 'add', oldNum: null, newNum:  9, code: '  --em-border-mid:    rgba(255 255 255 / 0.13);' },
        { type: 'add', oldNum: null, newNum: 10, code: '' },
        { type: 'add', oldNum: null, newNum: 11, code: '  /* Timing Tokens */' },
        { type: 'add', oldNum: null, newNum: 12, code: '  --em-transition-short:  100ms ease;' },
        { type: 'add', oldNum: null, newNum: 13, code: '  --em-transition-medium: 200ms ease;' },
        { type: 'add', oldNum: null, newNum: 14, code: '  --em-transition-long:   400ms ease;' },
        { type: 'add', oldNum: null, newNum: 15, code: '  --em-ease-standard: ease-in-out;' },
        { type: 'add', oldNum: null, newNum: 16, code: '}' },
      ]
    }
  };

  // ── 2. STATE & ELEMENT REFS ──────────────────────────────────────
  let activeRevision = 'v4';
  let viewMode = 'unified'; // 'unified' | 'split'

  const htmlRoot = document.documentElement;
  const revisionItems = document.querySelectorAll('.revision-item');
  const mobileSelect = document.getElementById('mobile-version-select');
  const unifiedBtn = document.getElementById('unified-btn');
  const splitBtn = document.getElementById('split-btn');
  const themeBtn = document.getElementById('theme-toggle-btn');
  const restoreBtn = document.getElementById('restore-btn');
  const restoreBackdrop = document.getElementById('restore-backdrop');
  const restoreDialog = document.getElementById('restore-dialog');
  const restoreCancelBtn = document.getElementById('restore-cancel-btn');
  const restoreConfirmBtn = document.getElementById('restore-confirm-btn');
  const toastRegion = document.getElementById('toast-region');
  const diffBaseLabel = document.getElementById('diff-base-label');
  const diffHeadLabel = document.getElementById('diff-head-label');
  const diffHunkHeader = document.querySelector('.diff-hunk-header');
  const unifiedLines = document.getElementById('unified-lines');
  const splitLeftLines = document.getElementById('split-left-lines');
  const splitRightLines = document.getElementById('split-right-lines');
  const unifiedView = document.getElementById('unified-view');
  const splitView = document.getElementById('split-view');

  // ── 3. RENDER DIFF LINES ─────────────────────────────────────────

  function buildUnifiedLine(line) {
    const row = document.createElement('div');
    row.className = `diff-line diff-line--${line.type}`;
    row.setAttribute('role', 'row');

    const oldNum = document.createElement('span');
    oldNum.className = 'diff-line__num';
    oldNum.setAttribute('role', 'cell');
    oldNum.textContent = line.oldNum !== null ? line.oldNum : '';
    oldNum.setAttribute('aria-label', line.oldNum !== null ? `Old line ${line.oldNum}` : '');

    const newNum = document.createElement('span');
    newNum.className = 'diff-line__num';
    newNum.setAttribute('role', 'cell');
    newNum.textContent = line.newNum !== null ? line.newNum : '';
    newNum.setAttribute('aria-label', line.newNum !== null ? `New line ${line.newNum}` : '');

    const code = document.createElement('span');
    code.className = 'diff-line__code';
    code.setAttribute('role', 'cell');

    const marker = document.createElement('span');
    marker.className = 'diff-line__marker';
    marker.setAttribute('aria-hidden', 'true');
    marker.textContent = line.type === 'add' ? '+' : line.type === 'del' ? '−' : ' ';

    code.appendChild(marker);
    code.appendChild(document.createTextNode(line.code));

    row.appendChild(oldNum);
    row.appendChild(newNum);
    row.appendChild(code);

    return row;
  }

  function buildSplitLine(line, side) {
    const row = document.createElement('div');
    row.className = `diff-line diff-line--${line.type}`;
    row.setAttribute('role', 'row');

    const num = document.createElement('span');
    num.className = 'diff-line__num';
    num.setAttribute('role', 'cell');
    num.textContent = side === 'left' ? (line.oldNum || '') : (line.newNum || '');

    const code = document.createElement('span');
    code.className = 'diff-line__code';
    code.setAttribute('role', 'cell');

    const marker = document.createElement('span');
    marker.className = 'diff-line__marker';
    marker.setAttribute('aria-hidden', 'true');
    marker.textContent = line.type === 'add' ? '+' : line.type === 'del' ? '−' : ' ';

    code.appendChild(marker);
    code.appendChild(document.createTextNode(line.code));

    row.appendChild(num);
    row.appendChild(code);

    return row;
  }

  function renderDiff(revisionId) {
    const data = DIFF_DATA[revisionId];
    if (!data) return;

    // Update compare labels
    if (diffBaseLabel) {
      diffBaseLabel.innerHTML = data.base
        ? `<span class="diff-label__dot diff-label__dot--red" aria-hidden="true"></span>Base: ${data.base}`
        : `<span class="diff-label__dot diff-label__dot--red" aria-hidden="true"></span>Base: (new file)`;
    }
    if (diffHeadLabel) {
      diffHeadLabel.innerHTML = `<span class="diff-label__dot diff-label__dot--green" aria-hidden="true"></span>Head: ${data.head}`;
    }
    if (diffHunkHeader) {
      diffHunkHeader.innerHTML = `${escapeHTML(data.hunk.split('@@')[0])}@@${escapeHTML(data.hunk.split('@@')[1])}<span class="hunk-context">${escapeHTML((data.hunk.split('@@')[2] || '').trim())}</span>`;
    }

    // Build unified view
    if (unifiedLines) {
      unifiedLines.innerHTML = '';
      data.lines.forEach(line => {
        unifiedLines.appendChild(buildUnifiedLine(line));
      });
    }

    // Build split view — left: del + ctx, right: add + ctx
    if (splitLeftLines) {
      splitLeftLines.innerHTML = '';
      data.lines
        .filter(l => l.type === 'ctx' || l.type === 'del')
        .forEach(line => splitLeftLines.appendChild(buildSplitLine(line, 'left')));
    }
    if (splitRightLines) {
      splitRightLines.innerHTML = '';
      data.lines
        .filter(l => l.type === 'ctx' || l.type === 'add')
        .forEach(line => splitRightLines.appendChild(buildSplitLine(line, 'right')));
    }
  }

  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  // ── 4. REVISION SELECTION ────────────────────────────────────────

  function selectRevision(revisionId) {
    if (revisionId === activeRevision) return;
    activeRevision = revisionId;

    // Update sidebar active state & ARIA
    revisionItems.forEach(item => {
      const isActive = item.dataset.revision === revisionId;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });

    // Sync mobile dropdown
    if (mobileSelect) mobileSelect.value = revisionId;

    renderDiff(revisionId);
    showToast(`Showing diff for revision ${revisionId.toUpperCase()}`);
  }

  // Sidebar click
  revisionItems.forEach(item => {
    item.addEventListener('click', () => selectRevision(item.dataset.revision));
    item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectRevision(item.dataset.revision);
      }
    });
  });

  // Mobile dropdown change
  mobileSelect?.addEventListener('change', e => selectRevision(e.target.value));

  // ── 5. VIEW MODE TOGGLE ──────────────────────────────────────────

  function setViewMode(mode) {
    viewMode = mode;

    if (mode === 'unified') {
      unifiedView?.removeAttribute('hidden');
      splitView?.setAttribute('hidden', 'true');
      unifiedBtn?.classList.add('active');
      unifiedBtn?.setAttribute('aria-pressed', 'true');
      splitBtn?.classList.remove('active');
      splitBtn?.setAttribute('aria-pressed', 'false');
    } else {
      unifiedView?.setAttribute('hidden', 'true');
      splitView?.removeAttribute('hidden');
      splitBtn?.classList.add('active');
      splitBtn?.setAttribute('aria-pressed', 'true');
      unifiedBtn?.classList.remove('active');
      unifiedBtn?.setAttribute('aria-pressed', 'false');
    }
  }

  unifiedBtn?.addEventListener('click', () => setViewMode('unified'));
  splitBtn?.addEventListener('click', () => setViewMode('split'));

  // ── 6. THEME TOGGLE ──────────────────────────────────────────────

  themeBtn?.addEventListener('click', () => {
    const isDark = htmlRoot.getAttribute('data-theme') === 'dark';
    htmlRoot.setAttribute('data-theme', isDark ? 'light' : 'dark');
    showToast(`Switched to ${isDark ? 'Light' : 'Dark'} theme`);
  });

  // ── 7. RESTORE DIALOG ────────────────────────────────────────────

  function openRestoreDialog() {
    restoreBackdrop?.removeAttribute('hidden');
    restoreBackdrop?.setAttribute('aria-hidden', 'false');
    restoreDialog?.removeAttribute('hidden');
    // Trigger CSS transition
    requestAnimationFrame(() => restoreDialog?.classList.add('dialog-open'));
    restoreCancelBtn?.focus();
  }

  function closeRestoreDialog() {
    restoreDialog?.classList.remove('dialog-open');
    setTimeout(() => {
      restoreDialog?.setAttribute('hidden', 'true');
      restoreBackdrop?.setAttribute('hidden', 'true');
      restoreBackdrop?.setAttribute('aria-hidden', 'true');
      restoreBtn?.focus();
    }, 280);
  }

  restoreBtn?.addEventListener('click', openRestoreDialog);
  restoreCancelBtn?.addEventListener('click', closeRestoreDialog);
  restoreBackdrop?.addEventListener('click', closeRestoreDialog);

  restoreConfirmBtn?.addEventListener('click', () => {
    closeRestoreDialog();
    showToast(`✓ Version ${activeRevision.toUpperCase()} restored successfully!`, 'success');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !restoreDialog?.hasAttribute('hidden')) {
      closeRestoreDialog();
    }
  });

  // ── 8. TOAST NOTIFICATION ────────────────────────────────────────

  function showToast(message, type = 'info') {
    if (!toastRegion) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    if (type === 'success') toast.style.borderColor = 'rgba(16,185,129,0.5)';
    toastRegion.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(6px)';
      toast.style.transition = 'opacity 200ms, transform 200ms';
      toast.addEventListener('transitionend', () => toast.remove());
    }, 3000);
  }

  // ── 9. INITIAL RENDER ────────────────────────────────────────────
  renderDiff(activeRevision);
});
