# Animated Subscription Management Dashboard

## What does this do?

This component is an animated SaaS subscription and billing dashboard that displays active plan statistics, usage metrics (API volume, team licenses, cloud storage), invoice logs, and a simulated payment method card, implemented entirely using HTML and CSS.

## How is it used?

The component structure is self-contained and modular. Below is an example structure of the dashboard elements and styling classes:

```html
<div class="asmd-card">
  <header class="asmd-header">
    <h1 class="asmd-title">Workspace Billing & Subscriptions</h1>
    <div class="asmd-status-badge">
      <span class="asmd-pulse-dot" aria-hidden="true"></span>
      <span>Account Active</span>
    </div>
  </header>

  <div class="asmd-grid">
    <!-- Main Info Column -->
    <section class="asmd-left-col">
      <div class="asmd-panel asmd-current-plan-card">
        <h2 class="asmd-plan-title">Pro Team Suite</h2>
        <div class="asmd-plan-price"><strong>$49</strong>/mo</div>
        <button class="asmd-btn-primary" type="button">
          <span>Upgrade to Enterprise</span>
          <span class="asmd-glare-effect"></span>
        </button>
      </div>
    </section>
  </div>
</div>
```

## Why is it useful?

It provides a professional, production-ready subscription interface for SaaS applications and account settings pages with zero dependencies. By utilizing pure CSS variables, keyframe animations for loading bar progressions, interactive hover effects (glares, glows, 3D card tilt simulations), and media queries (for responsiveness and accessibility overrides), it showcases high-performance, accessible visual design that perfectly follows the EaseMotion CSS philosophy.

## Tech Stack

- HTML5 (Semantic elements, tabindex accessibility hooks)
- CSS3 (Custom keyframes, CSS Grid/Flexbox layouts, glassmorphism, media query overrides for responsiveness and reduced-motion states)

## Preview

Open [demo.html](file:///c:/Users/LENOVO/Desktop/GSSoC/Ease%20Motion/EaseMotion-css-gssoc/submissions/examples/animated-subscription-management-dashboard/demo.html) directly in your browser to see the effect.

## Contribution Notes

- Naming uses the `asmd-` prefix to isolate styles.
- Maintainers will rename classes to the `ease-*` standard during framework integration.
