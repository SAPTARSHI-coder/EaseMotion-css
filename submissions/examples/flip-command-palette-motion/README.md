# Flip Command Palette

A premium, space-themed command search palette featuring a 3D flip entrance transition, staggered list items, and pure CSS category filter matching.

## 1. What does this do?
This component renders an interactive keyboard-navigable command palette overlay that flips into view in 3D perspective space when toggled, supporting custom categorized navigation menus.

## 2. How is it used?

Place the toggle checkbox at the root of your HTML document, then configure the palette overlay:
```html
<!-- Root inputs bindings -->
<input type="checkbox" id="palette-toggle" class="ctrl-palette-toggle" />
<input type="radio" id="filter-all" name="palette-filter" class="ctrl-filter-all" checked />
<input type="radio" id="filter-nav" name="palette-filter" class="ctrl-filter-nav" />

<!-- Palette Overlay -->
<div class="palette-overlay" role="dialog" aria-modal="true" aria-labelledby="palette-title">
  <label for="palette-toggle" class="palette-backdrop-close"></label>
  
  <div class="palette-card">
    <div class="palette-header">
      <span class="search-icon">🔍</span>
      <input type="text" id="palette-search" placeholder="Type a command..." />
      <label for="palette-toggle" class="btn-close-modal">⨉</label>
    </div>

    <!-- Commands List -->
    <div class="palette-list" role="listbox">
      <!-- Navigation Command Option -->
      <div class="command-item cat-nav" role="option">
        <span class="cmd-icon">🌌</span>
        <div class="cmd-details">
          <span class="cmd-name">Warp Drive: Jump to Kepler-186f</span>
          <span class="cmd-desc">Calculate trajectory coordinates</span>
        </div>
        <span class="cmd-shortcut"><kbd>⌘</kbd> <kbd>J</kbd></span>
      </div>
    </div>
  </div>
</div>
```

To bind a trigger button anywhere in your cockpit to open the modal, use a standard label:
```html
<label for="palette-toggle" class="btn-palette-trigger">
  OPEN COMMAND PALETTE
</label>
```

## 3. Why is it useful?
Command Palettes are core productivity utilities in modern SaaS systems and spaceship dashboards. 

This component fits EaseMotion's philosophy by:
- **JS-Free Interactive Architecture:** Utilizes sibling checkbox states (`#palette-toggle:checked ~ .palette-overlay`) to reveal the modal container and radio indicators to filter items dynamically, making it lightweight.
- **3D Transform Animations:** Leverages CSS 3D transforms (`perspective(800px) rotateX(-90deg)`) alongside customized ease-bounce keyframes to trigger an ultra-premium dashboard flip sequence.
- **Accessible Design:** Features detailed keyboard support (with keyboard shortcut `kbd` indicators), ARIA role tags (`role="dialog"`, `role="listbox"`, `role="option"`), and automatic motion reduction styles.

## 4. Categories & Selection Presets

To define categorizations for filtering search elements inside the list, apply these class presets:

- `.cat-nav`: Matches Navigation Commands.
- `.cat-weapons`: Matches Weapon Munitions Commands.
- `.cat-sys`: Matches Ship Lifesupport/Reactor Commands.

---
*Created as a submission for GSSOC-26  under submissions/examples/flip-command-palette-motion/*
