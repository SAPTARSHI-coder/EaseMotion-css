/**
 * EaseMotion CSS: Code Snippet Sandbox with Copy Ripple & Language Switcher
 * Handles: Tab switching, sliding indicator, copy ripple, theme & toggle controls
 */

document.addEventListener('DOMContentLoaded', () => {
  // ── Core elements ──────────────────────────────────────────────────────
  const codeCard      = document.getElementById('code-card');
  const tabBtns       = document.querySelectorAll('.tab-btn');
  const codeBlocks    = document.querySelectorAll('.code-block');
  const tabIndicator  = document.getElementById('tab-indicator');
  const filenameBadge = document.getElementById('filename-badge');
  const lineNumbers   = document.getElementById('line-numbers');
  const copyBtn       = document.getElementById('btn-copy');
  const copyLabel     = document.getElementById('copy-label');
  const codeToast     = document.getElementById('code-toast');

  // Controls
  const themeSelect       = document.getElementById('theme-select');
  const toggleLinenums    = document.getElementById('toggle-linenums');
  const toggleHighlights  = document.getElementById('toggle-highlights');

  // ── State ───────────────────────────────────────────────────────────────
  let activeTab    = tabBtns[0];
  let toastTimer   = null;
  let copyTimer    = null;

  // ── Utility: update sliding tab indicator position & size ──────────────
  function updateIndicator(btn) {
    const tabs     = btn.closest('.language-tabs');
    const tabsRect = tabs.getBoundingClientRect();
    const btnRect  = btn.getBoundingClientRect();
    tabIndicator.style.left  = `${btnRect.left - tabsRect.left}px`;
    tabIndicator.style.width = `${btnRect.width}px`;
  }

  // ── Tab switching ────────────────────────────────────────────────────────
  function switchTab(btn) {
    if (btn === activeTab) return;

    const targetId = btn.getAttribute('aria-controls');
    const filename = btn.getAttribute('data-filename') || '';

    // Deactivate previous
    activeTab.classList.remove('active');
    activeTab.setAttribute('aria-selected', 'false');
    codeBlocks.forEach(b => b.classList.remove('active'));

    // Activate new
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    const targetBlock = document.getElementById(targetId);
    if (targetBlock) targetBlock.classList.add('active');

    // Update filename badge
    if (filenameBadge) filenameBadge.textContent = filename;

    // Update line number count for the newly active block
    updateLineNumbers(targetBlock);

    // Slide indicator
    updateIndicator(btn);
    activeTab = btn;
  }

  // ── Build line numbers based on active code block ───────────────────────
  function updateLineNumbers(block) {
    if (!lineNumbers || !block) return;
    const lineCount = block.querySelectorAll('.line').length;
    lineNumbers.innerHTML = Array.from({ length: lineCount }, (_, i) =>
      `<span>${i + 1}</span>`
    ).join('');
  }

  // ── Copy to clipboard with ripple feedback ───────────────────────────────
  function triggerCopy() {
    const activeBlock = document.querySelector('.code-block.active');
    if (!activeBlock) return;

    // Extract plain text (strip HTML tags)
    const plainText = activeBlock.textContent || activeBlock.innerText;

    // Ripple animation
    copyBtn.classList.remove('ripple-active');
    void copyBtn.offsetWidth; // force reflow
    copyBtn.classList.add('ripple-active');

    // Clipboard write with Promise fallback
    const writeClipboard = navigator.clipboard
      ? navigator.clipboard.writeText(plainText)
      : Promise.resolve(); // graceful degradation if no clipboard API

    writeClipboard
      .then(() => {
        copyBtn.classList.add('copied');
        if (copyLabel) copyLabel.textContent = 'Copied!';
        showToast();

        clearTimeout(copyTimer);
        copyTimer = setTimeout(() => {
          copyBtn.classList.remove('copied', 'ripple-active');
          if (copyLabel) copyLabel.textContent = 'Copy';
        }, 2200);
      })
      .catch(() => {
        // Fallback: still show visual feedback even if clipboard fails
        copyBtn.classList.add('copied');
        if (copyLabel) copyLabel.textContent = 'Copied!';
        clearTimeout(copyTimer);
        copyTimer = setTimeout(() => {
          copyBtn.classList.remove('copied', 'ripple-active');
          if (copyLabel) copyLabel.textContent = 'Copy';
        }, 2200);
      });
  }

  // ── Toast banner ─────────────────────────────────────────────────────────
  function showToast() {
    if (!codeToast) return;
    codeToast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => codeToast.classList.remove('show'), 2400);
  }

  // ── Theme Switcher ────────────────────────────────────────────────────────
  function applyTheme(theme) {
    const current = codeCard.getAttribute('data-theme');
    if (current) codeCard.classList.remove(current);
    codeCard.classList.add(theme);
    codeCard.setAttribute('data-theme', theme);
  }

  // ── Line Numbers Toggle ───────────────────────────────────────────────────
  function applyLineNumbers(visible) {
    if (!lineNumbers) return;
    lineNumbers.classList.toggle('hidden', !visible);
  }

  // ── Highlight Lines Toggle ────────────────────────────────────────────────
  function applyHighlights(visible) {
    document.querySelectorAll('.highlight-line').forEach(line => {
      line.classList.toggle('hidden', !visible);
    });
  }

  // ── Keyboard navigation for tabs ──────────────────────────────────────────
  tabBtns.forEach(btn => {
    btn.addEventListener('keydown', (e) => {
      const tabs = [...tabBtns];
      const idx  = tabs.indexOf(btn);
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        tabs[(idx + 1) % tabs.length].focus();
        switchTab(tabs[(idx + 1) % tabs.length]);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        tabs[(idx - 1 + tabs.length) % tabs.length].focus();
        switchTab(tabs[(idx - 1 + tabs.length) % tabs.length]);
      }
    });
  });

  // ── Event Listeners ───────────────────────────────────────────────────────

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn));
  });

  if (copyBtn) copyBtn.addEventListener('click', triggerCopy);

  if (themeSelect) {
    themeSelect.addEventListener('change', (e) => applyTheme(e.target.value));
  }

  if (toggleLinenums) {
    toggleLinenums.addEventListener('change', (e) => applyLineNumbers(e.target.checked));
  }

  if (toggleHighlights) {
    toggleHighlights.addEventListener('change', (e) => applyHighlights(e.target.checked));
  }

  // ── Initial setup ─────────────────────────────────────────────────────────
  // Position indicator after first render tick to get accurate coordinates
  requestAnimationFrame(() => {
    updateIndicator(activeTab);
    updateLineNumbers(document.querySelector('.code-block.active'));
  });
});
