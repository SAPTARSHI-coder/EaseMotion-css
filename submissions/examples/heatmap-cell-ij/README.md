# Heatmap Cell

1. What does this do? A contribution-style heatmap grid where each cell fades in with a staggered delay. Color intensity is driven by the `--cell-color` CSS variable (using alpha channels). Cells scale up on hover for interactive feedback.

2. How is it used? Add a `.heatmap-grid` container with `.hm-cell` children. Set each cell's color via `--cell-color` (e.g., `style="--cell-color: #22c55e60;"`) and stagger delay via `--cell-delay`. The CSS animation reads both variables to create the cascading entrance.

3. Why is it useful? Heatmaps are widely used for GitHub-style contribution charts, activity tracking, and density visualizations. The staggered fade-in gives a polished entrance effect, and the CSS variable approach makes intensity mapping straightforward.
