# feat(examples): Add pure CSS advanced component batch24 v8

Submission for [issue #88502](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/88502) — pure CSS advanced components batch 24, version 8.

## Overview

A collection of **five production-quality, pure CSS UI components** demonstrating advanced animation and interaction techniques. No JavaScript is required for any component.

## Components

### 1. Animated Feature Cards (3D Flip)
Hover-triggered 3D card flip that reveals a detailed back face. Built with `backface-visibility` and CSS `perspective`. Degrades to a fade animation when `prefers-reduced-motion` is active.

**Classes:** `.feature-card`, `.card-front`, `.card-back`

### 2. Staggered Entrance List
List items slide in from the left with incremental `animation-delay` values, creating a natural stagger effect using a single `@keyframes ease-slide-in-left` rule.

**Classes:** `.stagger-list`, `.stagger-item`

### 3. Animated Progress Stepper
A horizontal step tracker with three states — done (green ✓), active (indigo pulse ring), and pending — connected by a progress bar. The active step uses a `@keyframes ease-step-pulse` ring animation.

**Classes:** `.stepper`, `.step`, `.step--done`, `.step--active`

### 4. Animated Status Badges
Pulsing dot indicators (online / busy / away / offline) using a `@keyframes ease-badge-ping` ping animation on a `::after` pseudo-element — zero extra markup needed.

**Classes:** `.status-badge`, `.status-badge--online`, `--busy`, `--away`, `--offline`

### 5. Skeleton Shimmer Loader
A shimmer placeholder for loading states using an animated `linear-gradient` sweep via `@keyframes ease-shimmer`. Includes avatar circle and multi-width text skeleton lines.

**Classes:** `.skeleton`, `.skeleton-card`, `.skeleton-avatar`, `.skeleton-body`, `.skeleton-line`

## Accessibility

- All animations respect `@media (prefers-reduced-motion: reduce)`.
- Focus-visible states supported on interactive elements.
- Colour contrast meets WCAG AA for all text.

## Usage

```html
<!-- Link the stylesheet -->
<link rel="stylesheet" href="style.css">

<!-- Feature Card -->
<div class="feature-card">
  <div class="card-front">
    <span class="card-icon">🚀</span>
    <h3 class="card-title">Performance</h3>
  </div>
  <div class="card-back">
    <h3 class="card-back-title">Blazing Fast</h3>
    <p>Zero-dependency CSS animations at 60 fps.</p>
  </div>
</div>

<!-- Status Badge -->
<div class="status-badge status-badge--online">
  <span class="badge-dot"></span>
  <span class="badge-label">Online</span>
</div>
```

## Customisation

Override CSS custom properties on `:root` (or any parent element) to theme all components:

```css
:root {
  --em-primary: #7c3aed;   /* purple primary */
  --em-accent:  #f97316;   /* orange accent  */
  --em-radius:  1rem;      /* rounder edges  */
  --em-duration: 0.5s;     /* slower motion  */
}
```

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Interactive demo of all five components |
| `style.css` | All component styles (CSS custom properties + keyframes) |
| `README.md` | Documentation (this file) |

---

Submitted by [@Vrindakr3300](https://github.com/Vrindakr3300)  
Issue: [#88502](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/88502)
