# Animated Project Milestone Tracker

## What does this do?

This component is an animated project milestone tracker dashboard that visualizes project completion status, step-by-step roadmap timeline checkpoints (showing completed, in-progress, and pending deliverables), assignee status blocks, and critical project deadlines using pure HTML and CSS.

## How is it used?

The component structure is self-contained. Below is an example structure of the dashboard elements and styling classes:

```html
<div class="apmt-card">
  <header class="apmt-header">
    <h1 class="apmt-title">Acme Enterprise SaaS Launch</h1>
    <div class="apmt-status-badge">
      <span class="apmt-pulse-dot" aria-hidden="true"></span>
      <span>Project On Track</span>
    </div>
  </header>

  <!-- Overall Progress Bar -->
  <section class="apmt-progress-section">
    <div class="apmt-progress-header">
      <strong>Project Completion Progress</strong>
      <span class="apmt-progress-pct">72%</span>
    </div>
    <div class="apmt-progress-track">
      <div
        class="apmt-progress-fill"
        style="--apmt-pct: 72;"
        aria-label="Project Progress: 72%"
      ></div>
    </div>
  </section>

  <div class="apmt-grid">
    <!-- Roadmap timeline -->
    <section class="apmt-left-col">
      <div class="apmt-timeline">
        <div class="apmt-timeline-item apmt-timeline-item--completed">
          <div class="apmt-timeline-marker"></div>
          <div class="apmt-timeline-content">
            <h3>Product Planning & Requirements</h3>
            <span class="apmt-tag-success">Completed</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
```

## Why is it useful?

It provides a performance-focused, zero-JavaScript dashboard module designed for roadmap tools, project trackers, and team workspaces. By utilizing pure CSS variables, keyframe animations for progress indicators and active markers, clean hover scaling transitions, and media queries (handling responsiveness and accessibility overrides), it demonstrates accessible, high-performance visual states that align perfectly with the EaseMotion CSS philosophy.

## Tech Stack

- HTML5 (Semantic widgets, tabindex accessibility flags)
- CSS3 (Custom keyframe animations, CSS Grid/Flexbox, desaturated and glowing state badges, media query overrides for responsiveness and reduced-motion states)

## Preview

Open [demo.html](file:///c:/Users/LENOVO/Desktop/GSSoC/Ease%20Motion/EaseMotion-css-gssoc/submissions/examples/animated-project-milestone-tracker/demo.html) directly in your browser to see the effect.

## Contribution Notes

- Class naming uses the `apmt-` prefix to prevent collision.
- Maintainers will standardize classes to the `ease-*` convention before merge.
