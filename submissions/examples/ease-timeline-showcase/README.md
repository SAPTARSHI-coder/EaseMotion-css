# Timeline Component – EaseMotion CSS

A premium, vertical timeline showcase designed to highlight historical events, project milestones, and development roadmaps. Built purely in HTML and CSS, with zero JavaScript or external dependencies.

Located in: `submissions/examples/ease-timeline-showcase/`

---

## Overview

The `ease-timeline` component offers a vertical track displaying detailed milestones. On desktop viewports, items automatically alternate sides to create a balanced, modern visual layout. On mobile devices, the track collapses into a clean, left-aligned stream with the dates positioned above the details card.

---

## Features

- **Alternating Columns:** Employs CSS Grid to alternate card positions between the left and right sides of the central track using `:nth-child` selectors.
- **Mobile Responsive:** Collapses into a left-aligned layout below `768px` using media queries, anchoring the dots on the left margin and formatting the layout for narrow screens.
- **SVG Dot Icons:** Centered flex layouts align inline SVG icons within the track circles.
- **Hover Transitions:** Hovering over any card raises the card (`transform: translateY(-4px)`) and expands and glows the matching track circle.
- **Visual Variations:**
  - **Accent Borders (`.ease-timeline-card-accent`):** Adds a colored left/right bar on the cards pointing towards the track line.
  - **Glassmorphism (`.ease-timeline-card-glass`):** Employs CSS backdrop filters for transparent cards, perfect for dark themes.
  - **Gradient Track (`.ease-timeline-gradient`):** Renders a multi-color vertical line track.

---

## Usage Examples

### Standard Timeline Markup

To set up a timeline, use the following HTML skeleton:

```html
<!-- Main timeline container -->
<div class="ease-timeline ease-timeline-gradient">

  <!-- First item (will align card to the left, date to the right) -->
  <div class="ease-timeline-item">
    <div class="ease-timeline-dot ease-dot-primary">
      <!-- SVG Icon -->
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
    </div>
    <span class="ease-timeline-date">Q1 2026</span>
    <div class="ease-timeline-card ease-timeline-card-accent">
      <h3 class="ease-timeline-title">Project Kickoff</h3>
      <p class="ease-timeline-desc">Initial repository setup and tech stack selection.</p>
    </div>
  </div>

  <!-- Second item (will align card to the right, date to the left) -->
  <div class="ease-timeline-item">
    <div class="ease-timeline-dot ease-dot-info">
      <!-- SVG Icon -->
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      </svg>
    </div>
    <span class="ease-timeline-date">Q2 2026</span>
    <div class="ease-timeline-card ease-timeline-card-accent">
      <h3 class="ease-timeline-title">Design Phase</h3>
      <p class="ease-timeline-desc">Created the core visual tokens and components list.</p>
    </div>
  </div>

</div>
```

---

## Customization

You can customize the timeline parameters locally or globally using CSS custom variables:

### Layout Variables

| CSS Custom Variable | Purpose | Default Value |
| :--- | :--- | :--- |
| `--ease-timeline-line-width` | Controls the thickness of the vertical line | `4px` |
| `--ease-timeline-line-color` | Controls the fallback background color of the line | `#e2e8f0` / `#1e293b` (dark mode) |
| `--ease-timeline-dot-size` | Controls the width and height of the track circles | `42px` |
| `--ease-timeline-dot-border` | Overrides the border color of the track circles | `var(--ease-color-primary)` |
| `--ease-timeline-gap` | Space between subsequent timeline items | `3rem` |

### Customizing Colors

To change the timeline dot colors, you can use one of the pre-built helper classes:
- `.ease-dot-primary`
- `.ease-dot-success`
- `.ease-dot-warning`
- `.ease-dot-danger`
- `.ease-dot-info`

To override the theme locally in your own CSS:

```css
.my-custom-timeline {
  --ease-timeline-dot-border: #10b981; /* Green theme */
  --ease-timeline-line-color: #cbd5e1;
}
```
