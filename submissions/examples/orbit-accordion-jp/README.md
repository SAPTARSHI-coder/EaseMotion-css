# Orbit Accordion

## What does this do?

This submission creates a responsive, accessible accordion with neon-inspired orbit markers and animated content reveals using only HTML and CSS.

## How is it used?

```html
<details class="accordion-item-jp ease-orbit-accordion-jp" open>
  <summary>
    <span class="orbit-icon-jp" aria-hidden="true">
      <span class="orbit-ring-jp"></span>
      <span class="orbit-core-jp">01</span>
    </span>

    <span class="summary-copy-jp">
      <strong>What is EaseMotion CSS?</strong>
      <small>A lightweight motion-focused CSS library</small>
    </span>

    <span class="chevron-jp" aria-hidden="true"></span>
  </summary>

  <div class="accordion-content-jp">
    <p>Accordion content goes here.</p>
  </div>
</details>
```

Customize the component through CSS variables:

```css
:root {
  --ease-orbit-duration-jp: 4.8s;
  --ease-accordion-duration-jp: 520ms;
  --ease-orbit-curve-jp: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-neon-primary-jp: #7d68ff;
  --ease-neon-secondary-jp: #38e4c3;
  --ease-accordion-radius-jp: 1.2rem;
}
```

Native `details` and `summary` elements manage the open and closed state without JavaScript. Open or focused items animate the orbit ring and reveal their content.

Open `demo.html` directly in a browser. No server, JavaScript, CDN, or external framework is required.

## Why is it useful?

Accordions are useful for FAQs, product documentation, dashboards, settings pages, and compact content sections.

This example fits EaseMotion CSS because it:

- uses orbit motion to reinforce the active accordion state;
- combines reusable keyframes and timing variables;
- keeps native keyboard-accessible controls;
- includes readable headings and supporting text;
- adapts to smaller screens;
- respects `prefers-reduced-motion`;
- requires zero JavaScript and zero external dependencies.
