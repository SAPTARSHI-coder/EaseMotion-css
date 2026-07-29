# Border Draw Feature Card

## What does this do?

This submission creates a responsive finance-dashboard-inspired feature card with an animated border that draws around the card on hover or keyboard focus.

## How is it used?

```html
<article class="feature-card-jp ease-border-draw-jp" tabindex="0">
  <span class="draw-line-jp draw-top-jp" aria-hidden="true"></span>
  <span class="draw-line-jp draw-right-jp" aria-hidden="true"></span>
  <span class="draw-line-jp draw-bottom-jp" aria-hidden="true"></span>
  <span class="draw-line-jp draw-left-jp" aria-hidden="true"></span>

  <h2>Track performance at a glance.</h2>
  <p>Compare movement, allocation, and target progress.</p>
</article>
```

Customize the motion and visual tokens through CSS variables:

```css
:root {
  --ease-border-duration-jp: 680ms;
  --ease-border-curve-jp: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-border-width-jp: 2px;
  --ease-card-radius-jp: 1.5rem;
  --ease-accent-jp: #5c8cff;
  --ease-accent-secondary-jp: #47e6b1;
}
```

The border is built from four absolutely positioned spans. Each side animates in sequence through `transform: scaleX()` or `scaleY()`.

Open `demo.html` directly in a browser. No server, JavaScript, CDN, or external framework is required.

## Why is it useful?

Feature cards are common in finance dashboards, SaaS pages, product showcases, analytics interfaces, and landing pages.

This example fits EaseMotion CSS because it:

- uses a clear border-draw animation to communicate interaction;
- exposes reusable motion variables and keyframes;
- supports both hover and keyboard focus;
- includes semantic headings and readable content;
- adapts from three columns to one column;
- respects `prefers-reduced-motion`;
- requires zero JavaScript and zero external dependencies.
