# Accessibility Dashboard Showcase

A completely responsive, accessibility-first dashboard designed to visualize automated accessibility testing results (similar to axe-core) using pure HTML5 and CSS3.

## Project Overview

Maintaining high accessibility standards is crucial for inclusive design. This showcase demonstrates a dashboard UI to track WCAG compliance, component-level testing results, and overall accessibility health across a project.

## Folder Structure

```text
submissions/examples/accessibility-dashboard-showcase/
├── demo.html
├── style.css
└── README.md
```

## Accessibility Features Included in Design

- **High Contrast Palette:** WCAG AA/AAA compliant contrast ratios for text and backgrounds.
- **Keyboard Navigation Focus States:** Robust `:focus-visible` styling with thick high-contrast outlines for users navigating via keyboard.
- **Semantic HTML:** Proper use of landmark roles (`<header>`, `<main>`, `<section>`, `<footer>`) and accessible headings.
- **Screen Reader Support:** Use of `.sr-only` classes and `aria-labelledby` attributes to ensure screen readers can contextualize dashboard elements.

## Dashboard Sections

- **Overview Cards:** High-level metrics showing accessibility score, total components, and check summaries.
- **Test Results Table:** Detailed component breakdown with WCAG levels (AA/AAA), status badges, violations, and actionable recommendations.
- **Accessibility Categories:** Visual representation of specific accessibility pillars (e.g., Color Contrast, ARIA Attributes, Focus Indicators).
- **Compliance Progress:** Clear progress bars indicating compliance percentages across WCAG tiers and device accessibility.
- **Checklist & Tips:** Daily best practices and a core checklist for quick validation.

## Design Highlights

- **Modern Glassmorphism:** Layered frosted glass panels utilizing `backdrop-filter: blur()`.
- **Soft Glow Backgrounds:** Animated drifting background gradients providing depth without distraction.
- **Clean Typography:** `Inter` font stack for maximum legibility.
- **Smooth Animations:** Subtle hover lifts and transitions.

## Responsive Design

The layout utilizes CSS Grid and Flexbox to gracefully degrade from a robust multi-column desktop layout to a streamlined single-column mobile view.

## How to Run

1. Open your terminal and navigate to the folder:
   ```bash
   cd submissions/examples/accessibility-dashboard-showcase/
   ```
2. Open `demo.html` in your preferred web browser. No local server or build tools are required.
