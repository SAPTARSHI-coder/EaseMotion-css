# Timeline Component — EaseMotion CSS

**Issue:** [#22088 — Add timeline component for chronological event display](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/22088)

A vertical timeline component for displaying chronological events, project milestones, or historical data. Uses CSS pseudo-elements for connecting lines and dot markers.

## Structure

```
submissions/core_changes-issue-22088/
├── demo.html       # Live demo page showing all variants
├── style.css       # Component styles
└── README.md       # This file
```

## Variants

| Variant | Class | Description |
|---------|-------|-------------|
| **Default** | `.ease-timeline` | Left-aligned vertical timeline |
| **Right-Aligned** | `.ease-timeline-right` | Right-aligned timeline |
| **Alternating** | `.ease-timeline-alternating` | Left-right alternating (desktop) |
| **Completed** | `.ease-timeline-completed` | Green dot for completed items |
| **Current** | `.ease-timeline-current` | Indigo dot with glow for current items |
| **Upcoming** | `.ease-timeline-upcoming` | Muted dot for upcoming items |
| **Horizontal** | `.ease-timeline-horizontal` | Horizontal scrollable timeline |
| **Animated** | `.ease-timeline-animate` | Staggered fade-in entry animation |

## Usage

```html
<link rel="stylesheet" href="path/to/style.css" />

<ul class="ease-timeline">
  <li class="ease-timeline-item">
    <div class="ease-timeline-content">
      <div class="ease-timeline-date">March 2026</div>
      <div class="ease-timeline-title">Event Title</div>
      <div class="ease-timeline-desc">Event description here.</div>
    </div>
  </li>
</ul>
```

## Features

- Vertical connector line using `::before` pseudo-element
- Dot markers using `::after` pseudo-element
- Status colors: completed (green), current (indigo glow), upcoming (muted)
- Horizontal variant for roadmap/step-by-step displays
- Alternating layout for desktop screens
- Staggered fade-in animation
- `@layer easemotion-components` for proper cascade ordering
- Dark mode, reduced motion, and forced-colors support
