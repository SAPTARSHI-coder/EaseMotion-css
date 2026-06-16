# Animated Employee Attendance Dashboard

## What does this do?

This component is an animated HR workforce and employee attendance dashboard that visualizes daily clock-in/out statuses, weekly presence schedules, shift work hours, leave balances (PTO, sick leave, personal time), and an animated circular SVG attendance progress ring using pure HTML and CSS.

## How is it used?

The component structure is self-contained and modular. Below is an example structure of the dashboard elements and styling classes:

```html
<div class="eead-card">
  <header class="eead-header">
    <h1 class="eead-title">Workforce Attendance Portal</h1>
    <div class="eead-status-badge">
      <span class="eead-pulse-dot" aria-hidden="true"></span>
      <span>Workspace Connected</span>
    </div>
  </header>

  <div class="eead-grid">
    <!-- Main Info Column -->
    <section class="eead-left-col">
      <div class="eead-panel eead-profile-card">
        <div class="eead-avatar-wrapper">
          <div class="eead-avatar">SJ</div>
          <div class="eead-avatar-badge"></div>
        </div>
        <div class="eead-progress-gauge">
          <svg class="eead-progress-ring" width="140" height="140">
            <circle
              class="eead-progress-ring-bg"
              stroke="rgba(255,255,255,0.06)"
              stroke-width="10"
              fill="transparent"
              r="58"
              cx="70"
              cy="70"
            />
            <circle
              class="eead-progress-ring-fill"
              stroke="url(#eead-ring-grad)"
              stroke-width="10"
              fill="transparent"
              r="58"
              cx="70"
              cy="70"
              style="--eead-ring-pct: 96;"
            />
          </svg>
        </div>
      </div>
    </section>
  </div>
</div>
```

## Why is it useful?

It provides a professional, production-ready attendance visualization interface for HR management portals, workforce scheduling tools, and corporate dashboards with zero JavaScript dependencies. By using pure CSS variables, keyframe animations for progress gauges, responsive grid reflowing, and custom `:focus-visible` outlines, it delivers smooth visual design and accessibility matching the EaseMotion CSS guidelines.

## Tech Stack

- HTML5 (Semantic HR structure, tabindex accessibility hooks)
- CSS3 (Custom keyframe animations, SVG circular offset dasharrays, CSS Grid/Flexbox layouts, media query overrides for responsiveness and reduced-motion states)

## Preview

Open [demo.html](file:///c:/Users/LENOVO/Desktop/GSSoC/Ease%20Motion/EaseMotion-css-gssoc/submissions/examples/animated-employee-attendance-dashboard/demo.html) directly in your browser to see the effect.

## Contribution Notes

- Class naming uses the `eead-` prefix to prevent collision.
- Maintainers will standardize classes to the `ease-*` convention before merge.
