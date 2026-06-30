# Animated Command Palette Component

A fully animated, accessible **Command Palette** component for EaseMotion CSS — built for developer tools, dashboards, admin panels, documentation sites, and productivity apps.

---

## ✨ Features

- **Smooth open/close animation** — fade + scale with a spring overshoot on open, snappy collapse on close
- **Search & filter** — real-time filtering across command labels and tags; empty state when no results match
- **Keyboard navigation** — `↑` / `↓` to move, `↵` to select, `Esc` to close, `⌘K` / `Ctrl+K` global shortcut
- **Active command highlighting** — highlighted row with accent border and glow
- **Keyboard shortcut badges** — monospaced `<kbd>`-style badges per command
- **Command groups** — labeled sections with dividers; groups hide when all items are filtered out
- **Responsive mobile layout** — slides up from the bottom on narrow screens; shortcut badges hidden on mobile
- **CSS variable customization** — full palette theming via `:root` variables
- **Reduced motion support** — all animations disabled for users who prefer it
- **Accessible markup** — `role="dialog"`, `aria-modal`, `role="option"`, `aria-live` empty state

---

## 🚀 Usage

### 1. Link the stylesheet

```html
<link rel="stylesheet" href="style.css" />
```

### 2. Add the overlay + palette HTML

```html
<!-- Trigger -->
<button class="ease-cp-trigger" id="cpTrigger">
  Search commands…
  <span class="ease-cp-trigger-shortcut">
    <span class="ease-cp-kbd">⌘</span>
    <span class="ease-cp-kbd">K</span>
  </span>
</button>

<!-- Palette Overlay -->
<div class="ease-cp-overlay" id="cpOverlay" role="dialog" aria-modal="true">
  <div class="ease-command-palette">
    <!-- Search Bar -->
    <div class="ease-cp-search">
      <!-- search icon SVG -->
      <input class="ease-cp-input" type="text" placeholder="Type a command…" />
      <span class="ease-cp-close-hint">esc</span>
    </div>

    <!-- Results List -->
    <div class="ease-cp-results" role="listbox">
      <div class="ease-cp-group-label">Navigation</div>

      <div
        class="ease-cp-item"
        role="option"
        data-label="Go to Dashboard"
        data-tags="home main"
      >
        <div class="ease-cp-item-icon">🏠</div>
        <div class="ease-cp-item-text">
          <div class="ease-cp-item-title">Go to Dashboard</div>
          <div class="ease-cp-item-subtitle">Open the main overview</div>
        </div>
        <div class="ease-cp-shortcuts">
          <span class="ease-cp-kbd">⌘</span>
          <span class="ease-cp-kbd">D</span>
        </div>
      </div>

      <div class="ease-cp-empty" id="cpEmpty">
        <div class="ease-cp-empty-icon">🔍</div>
        No commands match "<span id="cpEmptyQuery"></span>"
      </div>
    </div>

    <!-- Footer -->
    <div class="ease-cp-footer">
      <span class="ease-cp-footer-hint">
        <span class="ease-cp-kbd">↑</span
        ><span class="ease-cp-kbd">↓</span> Navigate
      </span>
      <span class="ease-cp-footer-hint">
        <span class="ease-cp-kbd">↵</span> Select
      </span>
    </div>
  </div>
</div>
```

### 3. Open / close via JS

```js
document.getElementById("cpTrigger").addEventListener("click", () => {
  document.getElementById("cpOverlay").classList.add("is-open");
});
```

---

## 🎨 CSS Variable Customization

Override any variable in your own stylesheet:

```css
:root {
  --cp-bg: #1a1b26; /* overlay background */
  --cp-surface: #1f2335; /* palette card */
  --cp-accent: #7aa2f7; /* highlight color */
  --cp-text-primary: #c0caf5; /* main text */
  --cp-radius: 14px; /* palette corner radius */
  --cp-item-radius: 8px; /* command item corner radius */
}
```

Full list of variables is in `style.css` under the `:root` block.

---

## 📁 File Structure

```
submissions/examples/animated-command-palette-gn/
├── demo.html    ← live demo with all features
├── style.css    ← component styles + CSS variables
└── README.md    ← this file
```

---

## ♿ Accessibility

| Feature        | Implementation                                                 |
| -------------- | -------------------------------------------------------------- |
| Dialog role    | `role="dialog" aria-modal="true"` on overlay                   |
| List role      | `role="listbox"` on results, `role="option"` on items          |
| Live region    | `aria-live="polite"` on empty state                            |
| Keyboard trap  | Focus stays inside palette while open                          |
| Reduced motion | All transitions disabled via `@media (prefers-reduced-motion)` |

---

## 🙏 Credits

Submitted as part of **GSSoC 2026** contribution to [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).
Closes issue [#2605](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/2605).
