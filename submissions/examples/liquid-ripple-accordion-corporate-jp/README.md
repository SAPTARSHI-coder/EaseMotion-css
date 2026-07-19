# CSS Liquid Ripple Accordion for Modern Corporate Layouts

## What does this do?

This submission creates a pure-CSS accordion with smooth liquid-ripple transitions, polished corporate styling, responsive behavior, and native keyboard accessibility.

## How is it used?

```html
<details class="corporate-item-jp">
  <summary class="corporate-trigger-jp">
    <span class="icon-box-jp" aria-hidden="true">01</span>
    <span class="trigger-copy-jp">
      <strong>Strategy & Transformation</strong>
      <small>Align teams, systems, and operating models.</small>
    </span>
    <span class="toggle-jp" aria-hidden="true">+</span>
  </summary>

  <div class="corporate-panel-jp">
    <div class="corporate-content-jp">
      <p>Corporate accordion content.</p>
    </div>
  </div>
</details>
```

Customize the motion through CSS custom properties:

```css
:root {
  --corporate-duration-jp: 680ms;
  --corporate-ease-jp: cubic-bezier(0.22, 1, 0.36, 1);
  --ripple-scale-jp: 1.22;
  --ripple-opacity-jp: 0.18;
  --panel-radius-jp: 1.25rem;
}
```

Open `demo.html` directly in a browser. No JavaScript, server, CDN, or external framework is required.

## Why is it useful?

Corporate websites, enterprise dashboards, service pages, documentation, and FAQ sections often need dense information presented clearly without overwhelming the page.

This example fits EaseMotion CSS because it uses motion to communicate state, exposes customizable motion variables, uses native keyboard-accessible controls, includes responsive and reduced-motion behavior, and requires zero JavaScript.
