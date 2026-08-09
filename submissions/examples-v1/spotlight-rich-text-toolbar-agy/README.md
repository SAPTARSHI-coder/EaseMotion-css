# Cyberpunk Spotlight Rich Text Toolbar Component

A rich text editor formatting toolbar themed around cyberpunk design patterns, featuring mouse-tracking neon spotlight hover transitions.

---

## 💡 Quick Overview

### 1. What does this do?

This component provides a text-formatting toolbar where buttons reveal a glowing, cursor-following neon spotlight gradient background on mouse hover, and active states highlight with a solid glowing border using pure CSS.

### 2. How is it used?

Incorporate the state checkboxes and editor container structure in your layout markup:

```html
<!-- 1. Pure CSS Formatting Checkboxes -->
<input type="checkbox" id="format-bold" class="toolbar-state-checkbox" />
<input type="checkbox" id="format-italic" class="toolbar-state-checkbox" />

<!-- 2. Editor Container Frame -->
<div class="cyber-editor-wrap">
  <!-- Toolbar Header -->
  <div class="cyber-toolbar" id="toolbar-container">
    <label for="format-bold" class="toolbar-btn btn-bold" tabindex="0">B</label>
    <label for="format-italic" class="toolbar-btn btn-italic" tabindex="0"
      >I</label
    >
  </div>

  <!-- Content Textarea Workspace -->
  <div class="editor-workspace">
    <textarea class="editor-textarea">Content editing area...</textarea>
  </div>
</div>
```

Then hook up the cursor spotlight coordinator in your script block:

```javascript
const buttons = document.querySelectorAll(".toolbar-btn");
buttons.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    btn.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  });
});
```

### 3. Why is it useful?

Markdown and rich text toolbars are standard building blocks inside note apps and dev consoles. This component applies high-contrast cyan/magenta styling and interactive spotlights to enhance focus target visuals. It handles format selections and active highlight switches entirely in pure CSS, preventing script locks or page reflows.

---

## 🎨 Theme & Customization Guide

Override these variables in your root element to adjust styling colors and glowing properties:

```css
:root {
  /* Void Terminal Palette colors */
  --cyber-bg: #050508; /* Page base canvas void color */
  --cyber-surface: #0e0e13; /* Editor container background */
  --cyber-border: #1a1a24; /* Button boundary separator line */

  /* Neon Glow highlights */
  --cyber-cyan: #00f0ff; /* Neon Cyan active accent */
  --cyber-magenta: #ff0055; /* Neon Magenta alternate accent */
  --cyber-yellow: #f0e600; /* Highlight telemetry color */
}
```

---

## ♿ Accessibility Specifications

1. **Focus Controls**: Highlight focus rings style themselves in glowing neon outlines for keyboard tab navigation.
2. **Keyboard Traversal**: Monospace buttons have keyboard listeners mapping Space and Enter keys directly into formatting checkbox click inputs.
3. **Motion settings**: Bypasses heavy glitch distortion keyframes when `@media (prefers-reduced-motion: reduce)` matches, keeping editing states stable.
