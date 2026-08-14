# Float-Drift Badge for SaaS Showcase Layouts (#59605)

A modern, high-performance **Float-Drift Badge** component designed for SaaS product landing pages, feature announcements, hero sections, and interactive metric showcases. Built using **pure HTML and CSS** with keyframe animations, glassmorphism visual effects, and full accessibility support.

---

## Overview

The Float-Drift Badge component provides a smooth, elegant vertical drifting animation that elevates modern SaaS showcase cards and hero sections. It delivers dynamic visual depth without relying on any JavaScript libraries, relying entirely on CSS custom properties and keyframe physics.

---

## Features

- **Pure HTML & CSS**: Zero JavaScript dependencies, lightweight and fast execution.
- **Smooth Keyframe Animation**: Natural, floating vertical drift effect using pure CSS `@keyframes`.
- **Glassmorphism Visuals**: Semi-transparent dark background with subtle background blur (`backdrop-filter`) and ambient glow shadows.
- **Multiple Badge Variants**:
  - **Pill Announcement Badge**: For release notes and CTA banners.
  - **Metric Stat Badges**: Compact card badges for highlighting key SaaS performance indicators (+142% Speedup, 99.99% Uptime, AI Active).
- **Interactive Micro-Interactions**: Hover pause effects, scale transformations, and glowing border highlights.
- **Fully Responsive**: Fluid layout adapted for desktop, tablet, and mobile devices.
- **Accessible (a11y)**: Focus indicators (`:focus-visible`), semantic HTML elements, and complete `@media (prefers-reduced-motion: reduce)` support.

---

## Usage

Include the CSS file in your HTML document and apply the `.float-drift-badge` class to any badge element.

```html
<!-- Example 1: Announcement Pill Badge -->
<a href="#release" class="float-drift-badge badge-pill">
  <span class="badge-tag">NEW</span>
  <span class="badge-text">v3.0 Release Live</span>
</a>

<!-- Example 2: Metric Showcase Card Badge -->
<div class="float-drift-badge badge-card" role="status">
  <div class="badge-content">
    <span class="badge-label">Uptime</span>
    <span class="badge-val">99.99%</span>
  </div>
</div>
```

---

## CSS Variables

The component relies on CSS Custom Properties defined in `:root` for styling and animation tuning:

```css
:root {
  /* Color Tokens */
  --bg-dark: #0b0f19;
  --bg-glass-badge: rgba(15, 23, 42, 0.82);
  --border-color: rgba(255, 255, 255, 0.1);
  --border-color-hover: rgba(99, 102, 241, 0.5);

  --primary: #6366f1;
  --primary-light: #818cf8;
  --secondary: #8b5cf6;
  --accent-emerald: #10b981;
  --accent-purple: #a855f7;

  --text-main: #f8fafc;
  --text-muted: #94a3b8;

  /* Animation Tuning */
  --float-duration: 4.5s;
  --float-distance: -14px;
  --float-timing: ease-in-out;

  /* Elevation Shadows */
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.6);
  --glow-primary: 0 0 25px rgba(99, 102, 241, 0.35);
}
```

---

## Accessibility

- **Motion Preference**: Automatically respects `@media (prefers-reduced-motion: reduce)` by stopping keyframe animations and transitions for users sensitive to motion.
- **Keyboard Navigation**: Interactive badges and links feature visible focus outlines (`:focus-visible`).
- **Screen Reader Support**: Decorative visual indicators use `aria-hidden="true"` and badge containers use semantic roles such as `role="status"` or `aria-label`.

---

## Responsive Behavior

- **Desktop (≥ 992px)**: Badges float absolutely positioned relative to the showcase mockup card, creating depth and dimension.
- **Tablet (768px - 991px)**: Badges adjust positioning and scale dynamically to avoid obscuring card content.
- **Mobile (< 768px)**: Badges stack into a clean flex column layout, preserving readability while maintaining subtle floating motion.

---

## Browser Compatibility

- **Chrome / Edge**: Full support (including `backdrop-filter` and `:focus-visible`).
- **Firefox**: Full support.
- **Safari**: Full support (with `-webkit-backdrop-filter` fallback).
