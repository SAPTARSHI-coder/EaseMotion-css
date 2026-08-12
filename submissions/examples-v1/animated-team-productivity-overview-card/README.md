# Animated Team Productivity Overview Card

## What does this do?

This component is an animated team productivity dashboard card that visualizes sprint productivity scores (points achieved) using a custom animating SVG circular progress gauge, overlapping user profiles that expand on hover, horizontal efficiency percentage metrics, quick stats cards, and active project listings using pure HTML and CSS.

## How is it used?

The component structure is self-contained. Below is an example structure of the dashboard elements and styling classes:

```html
<div class="atp-card">
  <header class="atp-header">
    <h1 class="atp-title">Engineering Team Alpha</h1>
    <div class="atp-avatar-group">
      <div class="atp-avatar" style="--atp-av-idx: 0;">JD</div>
      <div class="atp-avatar" style="--atp-av-idx: 1;">JS</div>
      <div class="atp-avatar" style="--atp-av-idx: 2;">AK</div>
      <div class="atp-avatar atp-avatar--more" style="--atp-av-idx: 3;">+3</div>
    </div>
  </header>

  <div class="atp-grid">
    <!-- Main Left Column -->
    <section class="atp-left-col">
      <div class="atp-panel atp-ring-panel">
        <svg class="atp-progress-ring" width="140" height="140">
          <circle
            class="atp-progress-ring-bg"
            stroke="rgba(255,255,255,0.06)"
            stroke-width="10"
            fill="transparent"
            r="58"
            cx="70"
            cy="70"
          />
          <circle
            class="atp-progress-ring-fill"
            stroke="url(#atp-ring-grad)"
            stroke-width="10"
            fill="transparent"
            r="58"
            cx="70"
            cy="70"
            style="--atp-ring-pct: 94;"
          />
        </svg>
      </div>
    </section>
  </div>
</div>
```

## Why is it useful?

It provides a professional, zero-JavaScript dashboard module designed for team settings pages, workflow tracking platforms, and corporate metrics consoles. By using pure CSS variables, keyframe animations for circular and linear progress gauges, custom avatar overlap translations (expanding avatar stacks on hover), and media query overrides (for responsiveness and accessibility), it showcases accessible dashboard interactions that align with the EaseMotion CSS framework rules.

## Tech Stack

- HTML5 (Semantic elements, tabindex accessibility hooks)
- CSS3 (Custom keyframe animations, SVG circular offset calculations, CSS Grid/Flexbox layouts, media query overrides for responsiveness and reduced-motion states)

## Preview

Open [demo.html](file:///c:/Users/LENOVO/Desktop/GSSoC/Ease%20Motion/EaseMotion-css-gssoc/submissions/examples/animated-team-productivity-overview-card/demo.html) directly in your browser to see the effect.

## Contribution Notes

- Class naming uses the `atp-` prefix to prevent collision.
- Maintainers will standardize classes to the `ease-*` convention before merge.
