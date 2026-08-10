# Animated Employee Performance Review Card

## What does this do?

This component is an animated HR talent and employee performance evaluation card that displays employee profiles, skill assessments (Technical Architecture, Code Quality, Leadership, Collaboration) with loading progress bars, merit badges (Tech Pioneer, Mentorship, Quality Ace), a circular SVG overall performance rating score (9.4/10), and a manager feedback blockquote using pure HTML and CSS.

## How is it used?

The component structure is self-contained. Below is an example structure of the dashboard elements and styling classes:

```html
<div class="epr-card">
  <header class="epr-header">
    <h1 class="epr-title">Talent Performance Evaluation</h1>
    <div class="epr-status-badge">
      <span class="epr-pulse-dot" aria-hidden="true"></span>
      <span>Review Finalized</span>
    </div>
  </header>

  <div class="epr-grid">
    <!-- Main Left Column -->
    <section class="epr-left-col">
      <div class="epr-panel epr-profile-card">
        <div class="epr-avatar">MV</div>
        <div class="epr-profile-info">
          <h2 class="epr-name">Marcus Vance</h2>
          <p class="epr-role">Senior Frontend Architect</p>
        </div>
      </div>
    </section>
  </div>
</div>
```

## Why is it useful?

It provides a professional, zero-JavaScript dashboard module designed for HR consoles, talent evaluation systems, employee profile trackers, and organizational metrics platforms. By using pure CSS variables, keyframe animations for circular progress ring velocity and skill progressions, hover transforms on merit badges, and media query controls (for responsiveness and accessibility overrides), it delivers accessible, high-performance interactions matching the EaseMotion CSS guidelines.

## Tech Stack

- HTML5 (Semantic HR layout, tabindex accessibility hooks)
- CSS3 (Custom keyframe animations, circular SVG dashboard gauge calculations, CSS Grid/Flexbox layouts, media query overrides for responsiveness and reduced-motion states)

## Preview

Open [demo.html](file:///c:/Users/LENOVO/Desktop/GSSoC/Ease%20Motion/EaseMotion-css-gssoc/submissions/examples/animated-employee-performance-review-card/demo.html) directly in your browser to see the effect.

## Contribution Notes

- Class naming uses the `epr-` prefix to prevent collision.
- Maintainers will standardize classes to the `ease-*` convention before merge.
