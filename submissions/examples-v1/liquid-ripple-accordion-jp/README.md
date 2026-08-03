# Liquid Ripple Accordion for Holographic Light Layouts

## What does this do?

This submission creates a pure-CSS accordion with fluid ripple expansion, holographic light gradients, keyboard-accessible native controls, and customizable motion parameters.

## How is it used?

Use native `details` and `summary` elements for interaction:

```html
<details class="accordion-item-jp">
  <summary class="accordion-trigger-jp">
    <span class="index-jp">01</span>
    <span class="title-jp">Prismatic Motion</span>
    <span class="icon-jp" aria-hidden="true">+</span>
  </summary>

  <div class="accordion-panel-jp">
    <div class="accordion-content-jp">
      <p>Accordion content goes here.</p>
    </div>
  </div>
</details>
```

Motion and visual intensity can be tuned with CSS custom properties:

```css
:root {
  --ripple-duration-jp: 720ms;
  --ripple-ease-jp: cubic-bezier(0.22, 1, 0.36, 1);
  --ripple-scale-jp: 1.18;
  --ripple-blur-jp: 28px;
  --ripple-opacity-jp: 0.72;
}
```

Open `demo.html` directly in a browser. No JavaScript, server, CDN, or external framework is required.

## Why is it useful?

Accordions are common in FAQs, settings panels, product details, documentation, and compact mobile interfaces. This version adds a more expressive holographic light treatment while keeping the interaction native, lightweight, and accessible.

This example fits EaseMotion CSS because it:

- uses motion as part of state communication;
- creates liquid ripple expansion with CSS-only pseudo-elements;
- exposes timing, easing, scale, blur, and opacity through CSS custom properties;
- uses native keyboard-accessible `details` and `summary` controls;
- includes visible focus states;
- adapts to smaller screens;
- respects `prefers-reduced-motion`;
- requires zero JavaScript and zero external dependencies.
