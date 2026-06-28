# Animated Progress Bar Component

A modern, highly performant, horizontal progress bar component built entirely with **pure HTML and CSS**. It supports sequential page-load fills, translating striped patterns, dual-tone gradient fills, capsule pill shapes, custom heights, and responsive stats cards layouts.

---

## 1. What does this do?
The **Animated Progress Bar** visualizes loading states, task completion margins, or system quotas on web dashboards:
- **Smooth Page-Load Fill**: When the page renders, the progress bar fills from 0% to the target value (set via a local CSS custom property).
- **Moving Striped Overlays**: Diagonal striped textures slide across the progress bar infinitely to indicate active processing.
- **Gradient Accents**: Progress bars can fade across dual-tone color spectrums (e.g. turquoise to indigo) with soft glowing shadows.
- **Flexible Heights**: Available in Small (6px), Medium (12px), and Large (22px) size classes. The Large size supports inner text labels.
- **Accessibility Friendly**: Includes fallback rules that stop the load fill animation and moving stripes for users with `prefers-reduced-motion: reduce` enabled.

---

## 2. How is it used?

### File Registration
Register the stylesheet in the head of your document:
```html
<link rel="stylesheet" href="style.css">
```

### HTML Layout Template
Each progress bar consists of an outer track `.ease-progress` and an inner fill bar `.ease-progress-bar`. The value is passed as a percentage inside a inline CSS custom property `--progress-value`:
```html
<!-- Default Progress Bar (Medium, Primary Indigo, 75% filled) -->
<div class="ease-progress-wrapper">
  <div class="ease-progress-header">
    <span class="ease-progress-title">Project Build Status</span>
    <span class="ease-progress-value-label">75%</span>
  </div>
  <div class="ease-progress ease-progress-primary" style="--progress-value: 75%;">
    <div class="ease-progress-bar"></div>
  </div>
</div>
```

### Sizing and Theme Classes
Modify the track with height and color classes:
```html
<!-- Small Success Progress Bar -->
<div class="ease-progress ease-progress-sm ease-progress-success" style="--progress-value: 60%;"> ... </div>

<!-- Large Warning Progress Bar with Inner Text Label -->
<div class="ease-progress ease-progress-lg ease-progress-warning" style="--progress-value: 85%;">
  <div class="ease-progress-bar">
    <span class="ease-progress-inner-label">85% Complete</span>
  </div>
</div>
```

### Visual Modifiers (Stripes, Gradients, and Pills)
Add style behaviors using simple classes:
```html
<!-- Capsule Pill Border Radius with Gradient Fills & Animating Stripes -->
<div class="ease-progress ease-progress-primary ease-progress-gradient ease-progress-striped ease-progress-pill" style="--progress-value: 90%;">
  <div class="ease-progress-bar"></div>
</div>
```

### CSS Custom Variables Overrides
Override global defaults locally inside custom containers:
```css
.my-custom-panel {
  --progress-height: 16px;
  --progress-color: #ec4899;          /* Pink accent */
  --progress-track-bg: rgba(0,0,0,0.4); /* Custom background */
  --progress-glow: rgba(236,72,153,0.3);
}
```

---

## 3. Why is it useful?
- **Zero JavaScript Dependencies**: Coordination of loaders can normally bloat script executions. This component does not require a single line of JS, saving CPU cycles.
- **Hardware Accelerated**: CSS width transforms and diagonal background translates use highly optimized rendering threads for smooth 60fps animations.
- **Dashboard Modular Grid**: Standardized styles fit easily into complex SaaS metric cards, sidebar items, dashboard header modules, or upload modals.
- **Sizing Versatility**: Small height options are perfect for low-contrast page loaders (like scroll progress indicators), while large options serve as bold callouts for storage limits.
