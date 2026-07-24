# CSS Liquid Ripple Accordion for Sci-Fi Console Layouts

## What does this do?

This submission creates a pure-CSS accordion with liquid ripple transitions and a responsive sci-fi console visual treatment.

## How is it used?

Use native `details` and `summary` elements:

```html
<details class="console-item-jp">
  <summary class="console-trigger-jp">
    <span class="sector-jp">SEC-01</span>

    <span class="trigger-copy-jp">
      <strong>Navigation Matrix</strong>
      <small>Route prediction and telemetry</small>
    </span>

    <span class="chevron-jp" aria-hidden="true">›</span>
  </summary>

  <div class="console-panel-jp">
    <div class="console-content-jp">
      <p>Console accordion content.</p>
    </div>
  </div>
</details>
```

The motion can be customized with CSS custom properties:

```css
:root {
  --console-duration-jp: 680ms;
  --console-ease-jp: cubic-bezier(0.2, 0.8, 0.2, 1);
  --ripple-scale-jp: 1.32;
  --glow-strength-jp: 0.62;
  --scan-duration-jp: 3.6s;
}
```

Open `demo.html` directly in a browser. No JavaScript, server, CDN, or external framework is required.

## Why is it useful?

Sci-fi dashboards, status panels, game interfaces, monitoring tools, and futuristic landing pages often need dense information that can expand without overwhelming the initial layout.

This example fits EaseMotion CSS because it:

- uses motion to communicate panel state;
- creates a liquid ripple effect with CSS pseudo-elements;
- exposes timing, easing, ripple scale, glow strength, and scan speed through custom properties;
- uses native keyboard-accessible `details` and `summary` controls;
- includes visible focus styling;
- responds cleanly to narrow screens;
- respects `prefers-reduced-motion`;
- requires zero JavaScript and zero external dependencies.
