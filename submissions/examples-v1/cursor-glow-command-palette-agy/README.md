# Glassmorphism Command Palette with Cursor Glow Spotlight

A glassmorphic command palette dialog featuring frosted glass layers and an interactive mouse-following radial glow spotlight.

---

## 💡 Quick Overview

### 1. What does this do?

This component provides a modal search drawer (the Command Palette) overlaying a dashboard view that pops open via keyboard shortcuts (`Ctrl+K` / `Cmd+K`) or labels, displaying grouped action choices highlighted with a mouse-following radial gradient glow.

### 2. How is it used?

Incorporate the state-controlling checkbox and modal layouts in your layout:

```html
<!-- 1. Pure CSS State Checkbox -->
<input
  type="checkbox"
  id="command-palette-toggle"
  class="palette-state-checkbox"
/>

<!-- 2. Overlay Wrapper Layer -->
<div class="palette-overlay">
  <!-- Outer wrapper receiving coordinate properties -->
  <div class="palette-panel-wrap" id="palette-card-wrapper">
    <!-- Background glow spotlight -->
    <div class="palette-glow-aura"></div>

    <!-- Inner Glassmorphic Modal Card -->
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
        <div class="palette-group-title">Navigation</div>
        <a href="#" class="palette-item" data-action="nav-dashboard">
          <span class="palette-item-text">Go to Dashboard</span>
          <kbd>⌥D</kbd>
        </a>
      </div>
    </div>
  </div>
</div>
```

Then hook up the cursor spotlight coordinator in your script block:

```javascript
const wrapper = document.getElementById("palette-card-wrapper");
wrapper.addEventListener("mousemove", (e) => {
  const rect = wrapper.getBoundingClientRect();
  wrapper.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  wrapper.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
});
```

### 3. Why is it useful?

Command palettes serve as a primary shortcut hub for power users, developers, and administrators. This component implements frosted-glass layers that adapt to underlying backgrounds without cluttering layout focus, while the interactive border spotlight provides subtle tactile feedback that guides focus to selections. It fits EaseMotion's philosophy by combining premium motion design with accessibility and zero layout shifts.

---

## 🎨 Theme & Customization Guide

Adjust variables inside your CSS or target wrapper classes to customize sizing and color gradients:

```css
:root {
  /* Surface and Background Colors */
  --cosmic-bg: #030712; /* Backdrop canvas color */
  --cosmic-surface: rgba(17, 24, 39, 0.6); /* Translucent frosted card fill */
  --cosmic-border: rgba(255, 255, 255, 0.08); /* Frosted thin border edge */

  /* Spotlight Neon Colors */
  --cosmic-glow-primary: #6366f1; /* Violet spotlight color */
  --cosmic-glow-secondary: #06b6d4; /* Cyan highlight highlight */
  --cosmic-hotkey-bg: rgba(
    255,
    255,
    255,
    0.06
  ); /* Keyboard shortcut button tags */
}
```

---

## ♿ Accessibility Specifications

1. **Focus Controls**: The modal search field receives direct focus automatically upon toggle triggers. Labels have `tabindex="0"` for keyboard tab access.
2. **Keyboard Traversal**: Includes navigation support mapping `ArrowUp` and `ArrowDown` to cycle active options, and `Enter` to confirm choice selection.
3. **Screen Readers**: Includes standard ARIA tags (`role="dialog"`, `aria-modal="true"`, `aria-label`) to ensure full compliance.
4. **Motion Fallbacks**: Fully respects user motion choices, disabling slide keyframes instantly when `@media (prefers-reduced-motion: reduce)` is matching.
