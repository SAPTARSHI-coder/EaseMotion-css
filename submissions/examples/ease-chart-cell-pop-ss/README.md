# Chart Cell Pop Component

## Abstract
The Chart Cell Pop component provides an animated heatmap cell pop visualization designed for analytics dashboards and data visualization tools. Built with pure CSS animation keyframes and custom CSS variables, it produces spring-like scaling entrance effects with staggered sequence timing and intensity-based radiant visual feedback.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a chart heatmap cell pop component (`.ease-chart-cell-grid`) featuring intensity-based coloring, radiant glow effects, and staggered entrance timing via inline delay variables (`--delay: N`).

### 2. How is it used?
Embed the `.ease-chart-cell-grid` structure into analytics dashboards, contribution graphs, or data visualization widgets. Use the provided JavaScript trigger to restart the sequence animation on demand.

### 3. Why is it useful?
Enhances data visualization storytelling by revealing complex heatmap metrics with delightful spring physics and luminosity cues entirely in CSS.

## Intensity & Pop Architecture
The component uses cubic-bezier timing (`cubic-bezier(0.34, 1.56, 0.64, 1)`) for organic spring physics during cell entrance. High-intensity heatmap cells feature dynamic box-shadow radiant glow rings while maintaining accessibility via WCAG-compliant contrast ratios and `forced-colors` high-contrast media queries.

## Custom CSS Properties

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--chart-bg` | `#030712` | Dark background stage color |
| `--chart-surface` | `#0f172a` | Container card surface background |
| `--chart-border` | `rgba(56, 189, 248, 0.2)` | Border color for chart container |
| `--chart-text` | `#f8fafc` | Primary typography color |
| `--chart-muted` | `#94a3b8` | Subtitle and descriptive muted text color |
| `--cell-intensity-1` | `#1e3a8a` | Level 1 heatmap cell fill color |
| `--cell-intensity-2` | `#2563eb` | Level 2 heatmap cell fill color |
| `--cell-intensity-3` | `#38bdf8` | Level 3 heatmap cell fill color with subtle glow |
| `--cell-intensity-4` | `#7dd3fc` | Level 4 heatmap cell fill color with radiant glow |
| `--cell-glow` | `rgba(56, 189, 248, 0.5)` | Radial glow box-shadow color for high-intensity cells |
