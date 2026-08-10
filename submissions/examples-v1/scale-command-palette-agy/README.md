# Scale Command Palette Component (Nature Theme)

A centered modal command palette overlay that expands with a springy scale-up entrance transition, themed around natural forest and garden design patterns.

---

## 💡 Quick Overview

### 1. What does this do?

This component provides a centered search command palette modal dialog triggered via keyboard shortcuts (`Ctrl+K` / `Cmd+K`) that pops into view using a springy scale-up bounce animation (`scale(0.85)` to `scale(1)`).

### 2. How is it used?

Incorporate the state-controlling checkbox and modal layouts in your layout markup:

```html
<!-- 1. Pure CSS State Checkbox -->
<input
  type="checkbox"
  id="palette-state-toggle"
  class="palette-state-checkbox"
/>

<!-- 2. Overlay Wrapper Layer -->
<div class="palette-overlay">
  <!-- Outer wrapper receiving scale transition rules -->
  <div class="palette-panel-wrap">
    <!-- Inner Card Container -->
    <div class="palette-card">
      <!-- Input Panel -->
      <div class="palette-search-wrapper">
        <input
          type="text"
          class="palette-input"
          placeholder="Search actions..."
        />
      </div>

      <!-- Action Items list -->
      <div class="palette-content">
        <div class="palette-group-title">Telemetry View</div>
        <a href="#" class="palette-item" data-action="view-soil">
          <span class="palette-item-text">Check Soil Moisture Stats</span>
          <kbd>⌥S</kbd>
        </a>
      </div>
    </div>
  </div>
</div>
```

### 3. Why is it useful?

Command palettes centralize dashboard shortcuts for quick operations. This component incorporates natural earth tones and forest greens to soften dashboard screens, while the spring scale entrance animation guides reader attention directly onto the search input fields without layout reflows or scripts.

---

## 🎨 Theme & Customization Guide

Override these variables in your root element to adjust styling colors and transition speeds:

```css
:root {
  /* Biophilic light theme colors */
  --nature-canvas: #fbf9f4; /* Backdrop background */
  --nature-surface: #ffffff; /* Search panel body color */
  --nature-border: #e6e2da; /* Card separator lines */
  --nature-primary: #1e3f20; /* Primary forest green branding accent */
  --nature-accent: #2e6f40; /* Secondary leaf green accent color */

  /* Timing Configuration */
  --ease-elastic-duration: 0.55s; /* Duration of the spring scale pop */
  --ease-spring-curve: cubic-bezier(
    0.34,
    1.56,
    0.64,
    1
  ); /* Custom elastic bezier curve */
}
```

---

## ♿ Accessibility Specifications

1. **Focus Controls**: Focuses the main search input field automatically when opened. Trigger labels have `tabindex="0"` for accessibility.
2. **Keyboard Traversal**: Includes full keyboard listeners mapping `ArrowUp`/`ArrowDown` to traverse items and `Enter` to submit. Pressing `Escape` closes the panel instantly.
3. **Motion settings**: Respects user browser preferences, completely disabling keyframe animations when `@media (prefers-reduced-motion: reduce)` matches.
