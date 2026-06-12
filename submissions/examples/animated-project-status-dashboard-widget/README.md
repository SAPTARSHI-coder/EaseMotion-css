# Animated Project Status Dashboard Widget

An interactive, premium project status dashboard widget with smooth load progress animations, pulsing status badges, task statistics highlights, and assignee team stacks. Designed for modern SaaS platforms, project managers, and admin panels.

## What does this do?
This component provides a compact project status display featuring:
- **Card Hover Elevation**: Elevates the card (`translateY(-8px)`) and expands its shadow on hover.
- **Dynamic Status Glows**: Casts a soft ambient color glow around the card matching the project status (`On Track`, `At Risk`, or `Completed`).
- **CSS Load Progress Animation**: Animates the progress bar fill from `0%` to its target width on page load with pure CSS keyframes.
- **Pulsing Status Badges**: Emits a continuous, pulsing radar signal behind the badge.
- **Micro-interaction Hover Scaling**: Lifts and scales statistics metrics (`scale(1.05)`) when hovered.
- **Visual Alert States**: Highlights overdue tasks with warnings (e.g., Crimson/Amber glows).
- **Overlapping Avatar Stack**: Displays assignee profiles that expand slightly on widget hover.
- **Glossy Sheen Reflection**: Sweeps a soft gloss sheet across the card face on hover.

## How is it used?
Integrate the widget template into your dashboard layout:

```html
<!-- Example of On Track Project Widget -->
<div class="project-widget status-track">
  <div class="widget-header">
    <h3>Website Redesign</h3>
    <span class="status-badge">On Track</span>
  </div>

  <div class="progress-section">
    <div class="progress-bar">
      <div class="progress-fill"></div>
    </div>

    <span class="progress-text">78%</span>
  </div>

  <div class="stats">
    <div class="stat">
      <strong>24</strong>
      <span>Completed</span>
    </div>

    <div class="stat">
      <strong>8</strong>
      <span>Pending</span>
    </div>

    <div class="stat">
      <strong>2</strong>
      <span>Overdue</span>
    </div>
  </div>
</div>
```

### Accents & Themes
Modify the theme by changing the class modifiers on the `.project-widget` container:
- **On Track**: Add `status-track` to the widget (Green accent, `--percent` resolves to `78%` by default or customized).
- **At Risk**: Add `status-risk` to the widget (Amber accent, `--percent` resolves to `45%`).
- **Completed**: Add `status-done` to the widget (Indigo accent, `--percent` resolves to `100%`).

To custom-define the progress bar percentage dynamically, set the `--percent` CSS variable on the progress bar element:
```html
<div class="progress-fill" style="--percent: 60%;"></div>
```

## Why is it useful?
Status indicators are central components in analytical UI design. This widget:
1. **Drives engagement**: Replaces static, dull charts with dynamic, fluid indicators.
2. **Encourages immediate action**: Highlights warning and overdue statistics to call for user action.
3. **Ensures high compatibility**: Uses pure HTML and CSS, rendering without JavaScript dependencies.

## Tech Stack
- HTML5
- CSS3 (Vanilla Custom Properties, Keyframe Animations, Grid, Flexbox)
- Inline SVGs (No external image network requests required)

## Preview
To see the widgets in action:
1. Open the [demo.html](file:///c:/Users/LENOVO/Desktop/GSSoC/Ease%20Motion/EaseMotion-css-gssoc/submissions/examples/animated-project-status-dashboard-widget/demo.html) directly in any modern web browser.
2. Hover over widgets, stat blocks, and assignee avatars to trigger micro-interactions.

## Contribution Notes
- Class names correspond to GSSoC contribution requirements.
- The project maintainer will refactor selectors to the `ease-*` prefix during repository integration.
