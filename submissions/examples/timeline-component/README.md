# Animated Timeline Component

## Overview

Animated Timeline Component is a responsive, motion-first CSS component for showcasing milestones in a clean vertical or horizontal layout. The component uses only CSS, supports hover animation feedback, and is designed to work with EaseMotion’s animation-first philosophy.

## Features

- Vertical and horizontal timeline layouts
- Animated milestone dots with hover feedback
- Smooth connecting line for clear visual flow
- Responsive collapse behavior for mobile screens
- CSS variables for color, spacing, and sizing
- Accessible HTML semantics with `role="list"` and keyboard-friendly focus
- Zero JavaScript required

## Classes

- `.ease-timeline` — Timeline container that renders the connecting line and spacing.
- `.ease-timeline-item` — Individual milestone card with hover/focus animation.
- `.ease-timeline-dot` — Milestone dot indicator with animated visual state.
- `.ease-timeline-horizontal` — Modifier for horizontal timeline layout.

## Customization

Override CSS variables to fit your design system:

- `--ease-timeline-bg`
- `--ease-timeline-border`
- `--ease-timeline-line`
- `--ease-timeline-accent`
- `--ease-timeline-dot`
- `--ease-timeline-dot-shadow`
- `--ease-timeline-text`
- `--ease-timeline-muted`
- `--ease-timeline-radius`
- `--ease-timeline-gap`
- `--ease-timeline-item-padding`
- `--ease-timeline-dot-size`
- `--ease-timeline-line-width`
- `--ease-timeline-transition`

Example:

```css
.ease-timeline {
  --ease-timeline-accent: #10b981;
  --ease-timeline-dot: #f97316;
  --ease-timeline-line: #d9d9d9;
}
```

## Usage

### Vertical timeline

```html
<div class="ease-timeline" role="list" aria-label="Project timeline">
  <article class="ease-timeline-item" role="listitem">
    <span class="ease-timeline-dot" aria-hidden="true"></span>
    <time datetime="2026-01-10">Jan 10, 2026</time>
    <h3>Project kickoff</h3>
    <p>Launch planning and establish motion direction.</p>
  </article>
  <!-- more items -->
</div>
```

### Horizontal timeline

```html
<div class="ease-timeline ease-timeline-horizontal" role="list" aria-label="Milestone timeline">
  <article class="ease-timeline-item" role="listitem">
    <span class="ease-timeline-dot" aria-hidden="true"></span>
    <time datetime="2026-01-10">Kickoff</time>
    <h3>Research</h3>
    <p>Gather stakeholder goals and build motion concepts.</p>
  </article>
  <!-- more items -->
</div>
```

## Notes

- The component gracefully adapts to smaller screens by collapsing the horizontal layout into a vertical timeline.
- Focus styles ensure keyboard navigation still reveals the same motion-first interface without additional JavaScript.
- Use native HTML `article`, `time`, and `role` attributes for semantic timeline content.
