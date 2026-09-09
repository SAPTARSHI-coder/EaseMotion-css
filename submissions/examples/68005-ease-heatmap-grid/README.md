# Animated Heatmap Grid Component (`ease-heatmap-grid`)

A pure HTML + Vanilla CSS animated activity/contribution heatmap grid component featuring a 7-row by 18-column matrix, 5 distinct activity intensity levels (Level 0–4), cell hover scale & glow elevation (`transform: scale(1.4)`), CSS-only tooltips (`data-tooltip`), staggered entrance keyframe animations (`@keyframes heatmap-cell-entrance`), pure CSS intensity filter controls, and full accessibility support.

## Features

- **Pure HTML + CSS**: 100% interactive heatmap visualization without JavaScript, external fonts, image assets, or build scripts. Works offline.
- **5 Intensity Levels**:
  - **Level 0 (None)**: `#ebedf0` (Light) / `#161b22` (Dark).
  - **Level 1 (Low)**: `#9be9a8` (Light) / `#0e4429` (Dark).
  - **Level 2 (Medium)**: `#40c463` (Light) / `#006d32` (Dark).
  - **Level 3 (High)**: `#30a14e` (Light) / `#26a641` (Dark).
  - **Level 4 (Peak)**: `#216e39` (Light) / `#39d353` (Dark) with peak pulse glow animation (`@keyframes heatmap-peak-pulse`).
- **Interactive CSS Hover & Tooltip Effects**: Individual cells elevate on hover/focus (`transform: scale(1.4)`) and render CSS tooltips (`data-tooltip="48 contributions on Jan 25"`) positioned dynamically above each cell.
- **Staggered Entrance Animation**: Cells animate smoothly into view upon load using CSS custom properties (`--cell-delay: 0.02s..1.12s`).
- **Pure CSS Intensity Filter Engine**: Filter state controls driven by radio inputs (`<input type="radio" name="heatmap-filter">`) allowing users to isolate All Levels, High Activity (L3–L4), or Peak Activity (L4).
- **100% Accessible**: Built using semantic `<section>`, `<figure>`, `<figcaption>`, and `<div class="heatmap-cell" tabindex="0" aria-label="...">`. Keyboard navigation supported (`Tab`, Arrow Keys, `Space`, `Enter`) with distinct `:focus-visible` indicators.
- **Theme Adaptability & Motion Controls**: Supports light/dark theme adaptation (`@media (prefers-color-scheme)`) and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<div class="heatmap-grid" role="region" aria-label="Contribution grid">
  <div
    class="heatmap-cell level-4"
    tabindex="0"
    data-tooltip="52 contributions on Jan 17 (Peak)"
    aria-label="52 contributions on Jan 17 (Peak)"
    style="--cell-delay: 0.34s"
  ></div>
</div>
```

### Customization Variables

```css
:root {
  --heatmap-bg: #f8fafc;
  --heatmap-level-0: #ebedf0;
  --heatmap-level-4: #216e39;
  --heatmap-focus: #0284c7;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/68005-ease-heatmap-grid/demo.html) directly in any modern web browser to interact with the heatmap grid component offline.
