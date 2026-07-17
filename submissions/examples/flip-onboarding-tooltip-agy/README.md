# Flip Onboarding Tooltip Walkthrough Component

An onboarding walkthrough tooltip themed around modern admin panels, featuring a 3D perspective Y-axis spin transition when steps switch.

---

## 💡 Quick Overview

### 1. What does this do?

This component provides an onboarding walkthrough tooltip that shifts position dynamically to target different elements in a dashboard, performing a full 3D flip rotation transition each time the step transitions.

### 2. How is it used?

Incorporate the state radio tags, hotspots labels, and tooltip card wrappers in your markup:

```html
<!-- 1. Pure CSS Step Radios -->
<input
  type="radio"
  name="walkthrough-step"
  id="step-1"
  class="step-state-radio"
  checked
/>
<input
  type="radio"
  name="walkthrough-step"
  id="step-2"
  class="step-state-radio"
/>

<!-- 2. Dashboard Widgets & Hotspots -->
<div class="db-widget">
  <label for="step-1" class="hotspot-pin hotspot-pin-1" tabindex="0"></label>
</div>

<!-- 3. Floating Tooltip -->
<div class="onboarding-tooltip" role="dialog" aria-modal="false">
  <div class="tooltip-card">
    <div class="step-content step-content-1">
      <h2>Step 1 Heading</h2>
      <p>Instructions text content...</p>
      <label for="step-2" class="tooltip-btn btn-primary">Next</label>
    </div>
  </div>
</div>
```

### 3. Why is it useful?

Walkthrough guides are essential to onboard users on new panels. This component coordinates position slides and 3D card flips entirely using sibling selectors and keyframe rules in pure CSS, ensuring maximum performance without scripting overhead.

---

## 🎨 Theme & Customization Guide

Override these variables in your root element to adjust styling colors and transition curves:

```css
:root {
  /* Dashboard surface colors */
  --admin-bg: #090d16; /* Canvas void background */
  --admin-surface: #111827; /* Card background surface */
  --admin-border: #1f2937; /* Card edge borders */

  /* Spotlight colors */
  --admin-accent: #3b82f6; /* Primary brand color */
  --admin-purple: #8b5cf6; /* Secondary purple color */

  /* Timing Configuration */
  --ease-elastic-duration: 0.6s; /* 3D Spin and fly transition duration */
}
```

---

## ♿ Accessibility Specifications

1. **Semantic HTML**: Utilizes explicit `role="dialog"` tags and correct step progress values.
2. **Keyboard Traversal**: Hotspot pins and action controls are tab navigable, featuring custom dashed focus outlines triggered by keyboard events.
3. **Motion settings**: Disables 3D spin keyframes when `@media (prefers-reduced-motion: reduce)` matches, converting transitions to simple fade parameters.
