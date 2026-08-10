/**
 * Accessible Filterable Multi-Select Tag Input Pill Box
 * EaseMotion-css Component Script
 *
 * Features:
 *  - Tag creation: Enter / comma (or Space for email mode)
 *  - Backspace: removes last pill when input is empty
 *  - Duplicate detection: shake animation + ARIA announcement
 *  - Email validation mode
 *  - Autocomplete dropdown with keyboard (↑ ↓ Enter Esc)
 *  - Arrow keys navigate between pills
 *  - ARIA combobox pattern + live region announcements
 */

(function () {
  'use strict';

  const announcer = document.getElementById('sr-announcer');

  // ─── Color palette cycling ────────────────────────────────────────────────
  const COLORS = ['indigo', 'violet', 'cyan', 'emerald', 'amber', 'rose'];
  let colorIndex = 0;
  function nextColor() {
    const c = COLORS[colorIndex % COLORS.length];
    colorIndex++;
    return c;
  }

  // ─── Announce to screen reader ────────────────────────────────────────────
  function announce(msg) {
    if (!announcer) return;
    announcer.textContent = '';
    // Double rAF forces a DOM mutation cycle so SR re-reads the live region
    requestAnimationFrame(() => requestAnimationFrame(() => {
      announcer.textContent = msg;
    }));
  }

  // ─── Email validation ─────────────────────────────────────────────────────
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ─── Initialize all .tag-input-root instances ────────────────────────────
  document.querySelectorAll('.tag-input-root').forEach(root => {
    initTagInput(root);
  });

  // ═══════════════════════════════════════════════════════════════════════════
  function initTagInput(root) {
    const input         = root.querySelector('.tag-input');
    const pillList      = root.querySelector('.tag-pill-list');
    const dropdown      = root.querySelector('.dropdown-list');

    const suggestions   = (root.dataset.suggestions || '').split(',').map(s => s.trim()).filter(Boolean);
    const maxTags       = parseInt(root.dataset.max, 10) || Infinity;
    const colorMode     = root.dataset.colorMode || 'single'; // 'single' | 'multi'
    const delimiter     = root.dataset.delimiter || 'comma';  // 'comma' | 'space'
    const validateEmail = root.dataset.validate === 'email';

    let tags = [];                 // current tag values
    let dropdownFocusIndex = -1;   // which dropdown item is keyboard-focused

    // Click on root focuses input
    root.addEventListener('click', (e) => {
      if (!e.target.closest('.tag-pill') && !e.target.closest('.dropdown-list')) {
        input.focus();
      }
    });

    // ── Input key events ──────────────────────────────────────────────────
    input.addEventListener('keydown', (e) => {
      const raw = input.value.trim();

      // Commit tag on Enter
      if (e.key === 'Enter') {
        e.preventDefault();
        if (dropdownFocusIndex >= 0) {
          const items = visibleDropdownItems();
          if (items[dropdownFocusIndex]) {
            commitTag(items[dropdownFocusIndex].dataset.value);
          }
        } else if (raw) {
          commitTag(raw);
        }
        return;
      }

      // Comma or Space (mode-dependent) commits tag
      if (
        (delimiter === 'comma' && e.key === ',') ||
        (delimiter === 'space' && e.key === ' ')
      ) {
        e.preventDefault();
        if (raw) commitTag(raw);
        return;
      }

      // Backspace on empty input → focus / remove last pill
      if (e.key === 'Backspace' && input.value === '') {
        e.preventDefault();
        const pills = Array.from(pillList.querySelectorAll('.tag-pill'));
        if (pills.length > 0) {
          const last = pills[pills.length - 1];
          const lastVal = last.dataset.value;
          last.focus();
          removeTag(lastVal);
        }
        return;
      }

      // Escape — close dropdown
      if (e.key === 'Escape') {
        closeDropdown();
        return;
      }

      // Arrow Down — move into dropdown
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        moveFocus(1);
        return;
      }

      // Arrow Up — move up in dropdown
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        moveFocus(-1);
        return;
      }

      // Arrow Left — move focus to last pill
      if (e.key === 'ArrowLeft' && input.selectionStart === 0) {
        const pills = Array.from(pillList.querySelectorAll('.tag-pill'));
        if (pills.length > 0) pills[pills.length - 1].focus();
        return;
      }
    });

    // ── Input typing → filter suggestions ────────────────────────────────
    input.addEventListener('input', () => {
      dropdownFocusIndex = -1;
      renderDropdown(input.value.trim());
    });

    // ── Focus → show suggestions if query or show all ─────────────────────
    input.addEventListener('focus', () => {
      renderDropdown(input.value.trim());
    });

    // ── Blur → close dropdown with small delay (allows click on item) ─────
    input.addEventListener('blur', () => {
      setTimeout(closeDropdown, 160);
    });

    // ── Pill keyboard navigation ──────────────────────────────────────────
    pillList.addEventListener('keydown', (e) => {
      const focused = document.activeElement;
      if (!focused || !focused.classList.contains('tag-pill')) return;

      const pills = Array.from(pillList.querySelectorAll('.tag-pill'));
      const idx   = pills.indexOf(focused);

      if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault();
        removeTag(focused.dataset.value);
        // Focus next pill or the input
        const next = pills[idx + 1] || pills[idx - 1];
        if (next) next.focus();
        else input.focus();
      }

      if (e.key === 'ArrowLeft'  && idx > 0)             pills[idx - 1].focus();
      if (e.key === 'ArrowRight' && idx < pills.length - 1) pills[idx + 1].focus();
      if (e.key === 'ArrowRight' && idx === pills.length - 1) input.focus();
    });

    // ── Commit tag ────────────────────────────────────────────────────────
    function commitTag(raw) {
      const value = raw.replace(/,$/, '').trim();
      if (!value) return;

      // Max tag guard
      if (tags.length >= maxTags) {
        shakeLast();
        announce(`Maximum ${maxTags} tags allowed.`);
        closeDropdown();
        return;
      }

      // Email validation
      if (validateEmail && !EMAIL_RE.test(value)) {
        shakeInput();
        root.classList.add('has-error');
        setTimeout(() => root.classList.remove('has-error'), 1000);
        announce(`"${value}" is not a valid email address.`);
        return;
      }

      // Duplicate check
      if (tags.some(t => t.toLowerCase() === value.toLowerCase())) {
        highlightDuplicate(value);
        announce(`Tag "${value}" is already added.`);
        input.value = '';
        closeDropdown();
        return;
      }

      // Add tag
      tags.push(value);
      input.value = '';
      renderPill(value);
      closeDropdown();
      announce(`Tag "${value}" added.`);
    }

    // ── Render a new pill ─────────────────────────────────────────────────
    function renderPill(value) {
      const color = colorMode === 'multi' ? nextColor() : 'indigo';

      const pill = document.createElement('div');
      pill.className = 'tag-pill';
      pill.setAttribute('role', 'option');
      pill.setAttribute('aria-selected', 'true');
      pill.setAttribute('tabindex', '0');
      pill.setAttribute('data-value', value);
      pill.setAttribute('data-color', color);
      pill.title = value;

      const label = document.createElement('span');
      label.className = 'pill-label';
      label.textContent = value;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'pill-remove-btn';
      btn.setAttribute('aria-label', `Remove tag: ${value}`);
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        removeTag(value);
        input.focus();
      });

      pill.appendChild(label);
      pill.appendChild(btn);
      pillList.appendChild(pill);
    }

    // ── Remove a tag ──────────────────────────────────────────────────────
    function removeTag(value) {
      const idx = tags.findIndex(t => t.toLowerCase() === value.toLowerCase());
      if (idx === -1) return;
      tags.splice(idx, 1);

      const pill = pillList.querySelector(`.tag-pill[data-value="${CSS.escape(value)}"]`);
      if (pill) {
        pill.classList.add('is-removing');
        pill.addEventListener('animationend', () => pill.remove(), { once: true });
      }

      announce(`Tag "${value}" removed.`);
    }

    // ── Shake the input field (invalid email) ─────────────────────────────
    function shakeInput() {
      input.classList.remove('is-duplicate');
      void input.offsetWidth;
      input.classList.add('is-duplicate');
      input.addEventListener('animationend', () => input.classList.remove('is-duplicate'), { once: true });
    }

    // ── Highlight existing duplicate pill ─────────────────────────────────
    function highlightDuplicate(value) {
      const pill = pillList.querySelector(`.tag-pill[data-value="${CSS.escape(value)}"]`);
      if (!pill) return;
      pill.classList.remove('is-duplicate');
      void pill.offsetWidth;
      pill.classList.add('is-duplicate');
      pill.addEventListener('animationend', () => pill.classList.remove('is-duplicate'), { once: true });
    }

    // ── Shake the last pill (max reached) ────────────────────────────────
    function shakeLast() {
      const pills = pillList.querySelectorAll('.tag-pill');
      const last  = pills[pills.length - 1];
      if (!last) return;
      last.classList.remove('is-duplicate');
      void last.offsetWidth;
      last.classList.add('is-duplicate');
      last.addEventListener('animationend', () => last.classList.remove('is-duplicate'), { once: true });
    }

    // ── Dropdown rendering ────────────────────────────────────────────────
    function renderDropdown(query) {
      const q = query.toLowerCase();
      const filtered = suggestions.filter(s => {
        const matchesQuery = !q || s.toLowerCase().includes(q);
        const notAdded     = !tags.some(t => t.toLowerCase() === s.toLowerCase());
        return matchesQuery && notAdded;
      }).slice(0, 12);

      if (filtered.length === 0) { closeDropdown(); return; }

      dropdown.innerHTML = '';

      filtered.forEach((suggestion, i) => {
        const li = document.createElement('li');
        li.className = 'dropdown-item';
        li.setAttribute('role', 'option');
        li.setAttribute('data-value', suggestion);
        li.setAttribute('aria-selected', 'false');
        li.id = `${input.id}-option-${i}`;

        // Already selected
        if (tags.some(t => t.toLowerCase() === suggestion.toLowerCase())) {
          li.classList.add('is-selected');
          li.setAttribute('aria-disabled', 'true');
        }

        // Highlight matching substring
        if (q) {
          const lower = suggestion.toLowerCase();
          const start = lower.indexOf(q);
          if (start >= 0) {
            const end = start + q.length;
            li.innerHTML =
              escapeHtml(suggestion.slice(0, start)) +
              `<mark>${escapeHtml(suggestion.slice(start, end))}</mark>` +
              escapeHtml(suggestion.slice(end));
          } else {
            li.textContent = suggestion;
          }
        } else {
          li.textContent = suggestion;
        }

        li.addEventListener('mousedown', (e) => {
          e.preventDefault(); // keep input focus
          if (!li.classList.contains('is-selected')) {
            commitTag(suggestion);
          }
        });

        dropdown.appendChild(li);
      });

      dropdown.removeAttribute('hidden');
      input.setAttribute('aria-expanded', 'true');
      dropdownFocusIndex = -1;
    }

    // ── Move keyboard focus inside dropdown ───────────────────────────────
    function moveFocus(dir) {
      const items = visibleDropdownItems();
      if (items.length === 0) return;
      dropdownFocusIndex = Math.max(0, Math.min(items.length - 1, dropdownFocusIndex + dir));
      items.forEach((item, i) => item.classList.toggle('is-focused', i === dropdownFocusIndex));
      items[dropdownFocusIndex]?.scrollIntoView({ block: 'nearest' });
      input.setAttribute('aria-activedescendant', items[dropdownFocusIndex]?.id || '');
    }

    function visibleDropdownItems() {
      return Array.from(dropdown.querySelectorAll('.dropdown-item:not(.is-selected)'));
    }

    function closeDropdown() {
      dropdown.setAttribute('hidden', '');
      dropdown.innerHTML = '';
      input.setAttribute('aria-expanded', 'false');
      input.removeAttribute('aria-activedescendant');
      dropdownFocusIndex = -1;
    }
  }

  // ─── HTML escape utility ─────────────────────────────────────────────────
  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

})();
