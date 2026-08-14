/**
 * Glassmorphic Command Palette · EaseMotion Submission
 * File: script.js
 *
 * Features:
 *  – Open/close with Cmd+K / Ctrl+K keyboard shortcut
 *  – Open/close via trigger button
 *  – Close on Escape or backdrop click
 *  – Arrow key navigation through results
 *  – Enter to select
 *  – Live fuzzy filter across all result items
 *  – Query highlight matching text in labels
 *  – Focus trap inside the modal
 *  – aria-activedescendant managed for screen readers
 */

(function () {
  'use strict';

  /* ── Element references ── */
  const overlay    = document.getElementById('cpOverlay');
  const panel      = document.getElementById('cpPanel');
  const inputEl    = document.getElementById('cpInput');
  const openBtn    = document.getElementById('openPalette');
  const closeBtn   = document.getElementById('cpCloseBtn');
  const emptyEl    = document.getElementById('cpEmpty');
  const emptyQuery = document.getElementById('cpEmptyQuery');
  const results    = document.getElementById('cpResults');

  /* ── State ── */
  let isOpen         = false;
  let focusedIndex   = -1;
  let allItems       = [];
  let visibleItems   = [];
  let previousFocus  = null;

  /* ──────────────────────────────────────────────
     OPEN / CLOSE
  ────────────────────────────────────────────── */

  function openPalette() {
    if (isOpen) return;

    previousFocus = document.activeElement;
    isOpen = true;

    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('is-open');

    // Small delay to allow CSS transition to register
    requestAnimationFrame(function () {
      inputEl.value = '';
      resetFilter();
      inputEl.focus({ preventScroll: true });
    });
  }

  function closePalette() {
    if (!isOpen) return;

    isOpen = false;
    overlay.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('is-open');

    clearFocused();
    inputEl.value = '';

    // Restore focus to the element that opened the palette
    if (previousFocus && typeof previousFocus.focus === 'function') {
      previousFocus.focus({ preventScroll: true });
      previousFocus = null;
    }
  }

  /* ──────────────────────────────────────────────
     KEYBOARD NAVIGATION
  ────────────────────────────────────────────── */

  function setFocused(index) {
    clearFocused();

    if (visibleItems.length === 0) return;

    // Clamp index
    if (index < 0) index = visibleItems.length - 1;
    if (index >= visibleItems.length) index = 0;

    focusedIndex = index;
    const item = visibleItems[index];
    item.classList.add('is-selected');
    item.setAttribute('aria-selected', 'true');

    // Manage aria-activedescendant
    inputEl.setAttribute('aria-activedescendant', item.id);

    // Scroll item into view
    item.scrollIntoView({ block: 'nearest' });
  }

  function clearFocused() {
    visibleItems.forEach(function (item) {
      item.classList.remove('is-selected');
      item.setAttribute('aria-selected', 'false');
    });
    focusedIndex = -1;
    inputEl.setAttribute('aria-activedescendant', '');
  }

  function selectFocused() {
    if (focusedIndex < 0 || focusedIndex >= visibleItems.length) return;
    executeCommand(visibleItems[focusedIndex]);
  }

  /* ──────────────────────────────────────────────
     COMMAND EXECUTION
  ────────────────────────────────────────────── */

  function executeCommand(item) {
    var cmd = item.getAttribute('data-cmd');

    // Action map — extend as needed
    var actions = {
      'home':        function () { window.location.hash = ''; },
      'settings':    function () { alert('⚙️ Settings panel would open here.'); },
      'analytics':   function () { alert('📊 Analytics dashboard would open here.'); },
      'new-project': function () { alert('✨ New project wizard would open here.'); },
      'new-team':    function () { alert('👥 Team invitation modal would open here.'); },
      'export':      function () { alert('📥 Export options would open here.'); },
      'theme-dark':  function () {
        document.documentElement.setAttribute('data-theme', 'dark');
        alert('🌙 Dark mode activated!');
      },
      'theme-light': function () {
        document.documentElement.setAttribute('data-theme', 'light');
        alert('☀️ Light mode activated!');
      }
    };

    if (actions[cmd]) {
      actions[cmd]();
    }

    closePalette();
  }

  /* ──────────────────────────────────────────────
     LIVE SEARCH / FILTER
  ────────────────────────────────────────────── */

  /**
   * Escape special regex characters in a query string.
   */
  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /**
   * Highlight matched substring inside a text node.
   * Returns a DocumentFragment with <mark> tags injected.
   */
  function highlightMatch(text, query) {
    if (!query) return document.createTextNode(text);

    var fragment = document.createDocumentFragment();
    var regex    = new RegExp('(' + escapeRegex(query) + ')', 'gi');
    var parts    = text.split(regex);

    parts.forEach(function (part) {
      if (regex.test(part)) {
        var mark = document.createElement('mark');
        mark.textContent = part;
        fragment.appendChild(mark);
        regex.lastIndex = 0; // reset stateful regex
      } else {
        fragment.appendChild(document.createTextNode(part));
      }
    });

    return fragment;
  }

  function filterItems(query) {
    var q = query.trim().toLowerCase();

    allItems = Array.prototype.slice.call(
      results.querySelectorAll('.cp__item')
    );

    var matchCount = 0;

    allItems.forEach(function (item) {
      var labelEl = item.querySelector('.cp__item-label');
      var descEl  = item.querySelector('.cp__item-desc');
      var label   = labelEl ? labelEl.textContent : '';
      var desc    = descEl  ? descEl.textContent  : '';

      var matches = !q || label.toLowerCase().includes(q) || desc.toLowerCase().includes(q);

      if (matches) {
        item.hidden = false;
        matchCount++;

        // Rebuild highlighted label
        if (q && labelEl) {
          labelEl.textContent = '';
          labelEl.appendChild(highlightMatch(label, q));
        } else if (labelEl) {
          labelEl.textContent = label; // restore plain text
        }
      } else {
        item.hidden = true;
        // Restore plain text for hidden items
        if (labelEl) labelEl.textContent = label;
      }
    });

    // Show / hide group headers when all items in a group are hidden
    var groups = results.querySelectorAll('.cp__group');
    groups.forEach(function (group) {
      var visibles = group.querySelectorAll('.cp__item:not([hidden])');
      group.hidden = visibles.length === 0;
    });

    // Update visible items list for keyboard nav
    visibleItems = allItems.filter(function (item) { return !item.hidden; });

    // Empty state
    var showEmpty = matchCount === 0 && q.length > 0;
    emptyEl.hidden = !showEmpty;
    if (showEmpty) {
      emptyQuery.textContent = '"' + query.trim() + '"';
    }

    clearFocused();
  }

  function resetFilter() {
    filterItems('');
    visibleItems = allItems.filter(function (item) { return !item.hidden; });
    clearFocused();
  }

  /* ──────────────────────────────────────────────
     FOCUS TRAP
  ────────────────────────────────────────────── */

  function getFocusableElements() {
    return Array.prototype.slice.call(
      panel.querySelectorAll(
        'input:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
  }

  function trapFocus(e) {
    if (!isOpen) return;

    var focusable = getFocusableElements();
    var first     = focusable[0];
    var last      = focusable[focusable.length - 1];

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

  /* ──────────────────────────────────────────────
     EVENT LISTENERS
  ────────────────────────────────────────────── */

  // Open button
  openBtn.addEventListener('click', openPalette);

  // Close button (Esc KBD badge)
  closeBtn.addEventListener('click', closePalette);

  // Backdrop click to close
  overlay.addEventListener('mousedown', function (e) {
    if (e.target === overlay) closePalette();
  });

  // Keyboard shortcut: Cmd+K / Ctrl+K (global)
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      isOpen ? closePalette() : openPalette();
    }
  });

  // Escape to close (when palette is open)
  overlay.addEventListener('keydown', function (e) {
    switch (e.key) {
      case 'Escape':
        e.stopPropagation();
        closePalette();
        break;

      case 'ArrowDown':
        e.preventDefault();
        setFocused(focusedIndex + 1);
        break;

      case 'ArrowUp':
        e.preventDefault();
        setFocused(focusedIndex - 1);
        break;

      case 'Enter':
        e.preventDefault();
        selectFocused();
        break;

      case 'Tab':
        trapFocus(e);
        break;
    }
  });

  // Live search
  inputEl.addEventListener('input', function () {
    filterItems(inputEl.value);
  });

  // Hovering items updates focus index
  results.addEventListener('mousemove', function (e) {
    var item = e.target.closest('.cp__item');
    if (!item || item.hidden) return;

    var idx = visibleItems.indexOf(item);
    if (idx !== -1 && idx !== focusedIndex) {
      setFocused(idx);
    }
  });

  // Click item
  results.addEventListener('click', function (e) {
    var item = e.target.closest('.cp__item');
    if (!item || item.hidden) return;
    executeCommand(item);
  });

  /* ──────────────────────────────────────────────
     INIT
  ────────────────────────────────────────────── */

  // Build initial allItems / visibleItems list
  allItems     = Array.prototype.slice.call(results.querySelectorAll('.cp__item'));
  visibleItems = allItems.slice();

  console.log('⌘ Glassmorphic Command Palette initialized. Press Cmd+K or Ctrl+K to open.');

})();
