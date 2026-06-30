# Animated Project Status Dashboard Widget

An interactive, premium dashboard widget displaying project health, completion progress, task statistics, team avatar stacks, and upcoming deadlines. Implemented with smooth entrance animations, ambient accent glows, progress fills, and overlapping hover expansions. Built entirely with pure HTML and CSS.

## Key Features

- **Card Hover Elevation**: Raises the widget (`translateY(-8px)`) and adds a soft matched radial box-shadow glow corresponding to the status color (`track`, `risk`, or `done`).
- **Accent Highlighting**: Features a top indicator bar that expands on hover, alongside a glossy diagonal sweep reflection traveling across the glassmorphism card.
- **Pulsing Status Signals**: Status badges (`On Track`, `At Risk`, `Completed`) emit a continuous pulsing radar ring to convey real-time system alerts.
- **CSS Load-In Progress Fills**: Fills the progress bar (`.progress-fill`) smoothly on page load from `0%` to the target percentage style using GPU-optimized keyframe animations.
- **Task Breakdown Hover**: Individual task columns scale up and expand slightly (`translateY(-4px) scale(1.05)`) on hover, highlighting completion metrics.
- **Warning States**: Emphasizes pending (Amber) and overdue (Crimson) tasks with border transitions and glows on metric hovers.
- **Overlapping Avatar Stack**: Displays assignee initial bubbles that fan out slightly on card hover. Individual avatars translate up on mouseover.
- **Responsive Layout**: Designed with a flexible grid that flows columns on desktop and collapses into clean vertical widgets on mobile.

## File Structure

```text
submissions/examples/animated-project-status-dashboard-widget/
├── demo.html
├── style.css
└── README.md
```

## HTML Structure

```html
<div class="project-widget status-track">
  <!-- Widget Header -->
  <div class="project-header">
    <h3>Website Redesign</h3>
    <span class="status-badge on-track">On Track</span>
  </div>

  <!-- Description -->
  <p class="project-desc">
    Revamp the corporate landing page with modern visual aesthetics.
  </p>

  <!-- Progress Bar -->
  <div class="progress-section">
    <div class="progress-bar">
      <div class="progress-fill" style="--percent: 78%;"></div>
    </div>
  </div>

  <!-- Progress Stats -->
  <div class="project-stats">
    <span>78% Complete</span>
  </div>

  <!-- Task Breakdown -->
  <div class="task-breakdown">
    <div class="stat-col">
      <strong>24</strong>
      <span>Completed</span>
    </div>
    <div class="stat-col pending">
      <strong>6</strong>
      <span>Pending</span>
    </div>
    <div class="stat-col overdue">
      <strong>2</strong>
      <span>Overdue</span>
    </div>
  </div>

  <!-- Widget Footer -->
  <div class="widget-footer">
    <div class="team-section">
      <span class="footer-label">Team</span>
      <div class="team-avatars">
        <img
          class="avatar"
          alt="Sarah Chen"
          src="data:image/svg+xml;utf8,..."
        />
        <img
          class="avatar"
          alt="Alex Rivera"
          src="data:image/svg+xml;utf8,..."
        />
      </div>
    </div>
    <div class="project-deadline">
      <span>June 20</span>
    </div>
  </div>
</div>
```

## CSS Customizations

Customize colors, borders, and animations via variables defined inside `style.css`:

```css
:root {
  /* Cards */
  --w-widget-bg: rgba(30, 41, 59, 0.4);
  --w-widget-hover-bg: rgba(30, 41, 59, 0.7);

  /* Status Colors */
  --w-color-track: #10b981;
  --w-color-risk: #f59e0b;
  --w-color-done: #8b5cf6;
  --w-color-alert: #ef4444;

  /* Radii */
  --w-radius: 18px;
}
```

### Theme & Badge States

Set the correct combination of container class modifiers and badge classes:

- **On Track**: Add `status-track` to the widget, and use `status-badge on-track` inside the header.
- **At Risk**: Add `status-risk` to the widget, and use `status-badge at-risk` inside the header.
- **Completed**: Add `status-done` to the widget, and use `status-badge completed` inside the header.

Change the progress fill target dynamically by setting the style property:

```html
<div class="progress-fill" style="--percent: 85%;"></div>
```

## How to View

1. Navigate to `submissions/examples/animated-project-status-dashboard-widget/`.
2. Open `demo.html` in any web browser to preview micro-interactions and grids.
3. Shrink the browser window to see the dashboard widget columns reflow for mobile devices.

## Contribution Standards

- Submit code within the target folder only; do not modify parent directories.
- Selectors will be refactored by the repository maintainer to follow the GSSoC `ease-*` naming prefix conventions upon integration.
