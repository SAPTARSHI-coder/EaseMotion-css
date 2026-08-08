# Bundle Size Monitor Showcase

A complete, responsive, DevOps-inspired dashboard built with pure HTML5 and CSS3 to visualize CSS bundle size metrics, budget limits, and GitHub Actions workflow reports.

## Project Overview

Maintaining performance requires strict adherence to bundle size budgets. This dashboard provides a visual demonstration of how automated bundle checks can be displayed in a dashboard format for CI/CD pipelines.

## Folder Structure

```text
submissions/examples/bundle-size-monitor-showcase/
├── demo.html
├── style.css
└── README.md
```

## Features

- **Current Metrics:** Visualizes Raw CSS Size, Gzip Size, Brotli Size, and Load Times.
- **Budget Limits:** Displays progress bars representing the current bundle size against defined maximum limits.
- **Pull Request Comparison:** Highlights the diff between the `main` branch and the current PR branch, showing positive or negative trends.
- **Workflow Status:** Demonstrates a GitHub Actions-inspired card detailing build steps and CI success.
- **Bundle History:** A timeline illustrating past bundle changes across previous pull requests.
- **Performance Summary:** A circular score chart with key performance indicators (FCP, TTI, Unused CSS).

## Design Highlights

- **Glassmorphism:** Leverages CSS `backdrop-filter: blur(16px)` combined with semi-transparent panel backgrounds.
- **Professional DevOps Color Palette:** Uses dark-themed syntax and statuses standard to DevOps tools (Success/Green, Warning/Yellow, Fail/Red).
- **Responsive Layouts:** Employs CSS Grid and Flexbox to guarantee adaptability across desktop, tablet, and mobile displays.
- **Smooth Hover Animations:** Subtle lift and glow effects on metric cards to enhance user interaction.

## Accessibility

- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<article>`) for screen readers.
- High color contrast conforming to WCAG standards for text and status indicators.
- Hover states include visual outlines and border adjustments for users relying on high-visibility markers.

## How to Run

1. Open a terminal and navigate to the project directory:
   ```bash
   cd submissions/examples/bundle-size-monitor-showcase/
   ```
2. Open `demo.html` in any modern web browser. No local server or build tools are required as it uses pure HTML and CSS.
