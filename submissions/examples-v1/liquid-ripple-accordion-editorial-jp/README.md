# CSS Liquid Ripple Accordion for Sleek Editorial Layouts

## What does this do?

This submission creates a pure-CSS accordion with subtle liquid-ripple transitions, restrained editorial typography, responsive layout behavior, and native keyboard accessibility.

## How is it used?

Use native `details` and `summary` elements:

```html
<details class="story-item-jp">
  <summary class="story-trigger-jp">
    <span class="story-number-jp">01</span>

    <span class="story-heading-jp">
      <strong>The Shape of Quiet Interfaces</strong>
      <small>Design / Motion / Interaction</small>
    </span>

    <span class="story-mark-jp" aria-hidden="true">↘</span>
  </summary>

  <div class="story-panel-jp">
    <div class="story-content-jp">
      <p>Editorial accordion content.</p>
    </div>
  </div>
</details>
```

The motion system is customizable through CSS custom properties:

```css
:root {
  --editorial-duration-jp: 760ms;
  --editorial-ease-jp: cubic-bezier(0.22, 1, 0.36, 1);
  --ripple-scale-jp: 1.2;
  --ink-opacity-jp: 0.13;
  --rule-color-jp: #cfc8bc;
}
```

Open `demo.html` directly in a browser. No JavaScript, server, CDN, or external framework is required.

## Why is it useful?

Editorial layouts need interactions that feel refined without distracting from reading. This component uses motion sparingly, with soft ink-like ripple fields, typographic hierarchy, and measured transitions.

This example fits EaseMotion CSS because it:

- uses animation to communicate open and closed state;
- exposes timing, easing, ripple scale, and visual intensity through CSS variables;
- uses native keyboard-accessible `details` and `summary` controls;
- provides clear focus-visible states;
- adapts to narrow screens;
- respects `prefers-reduced-motion`;
- requires zero JavaScript and zero external dependencies.
