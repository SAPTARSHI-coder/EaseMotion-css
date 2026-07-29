# Underline Draw Font Switcher

## What does this do?

This submission creates a responsive, accessible CSS-only font switcher with an animated underline that updates an analytics dashboard preview.

## How is it used?

```html
<input
  class="font-radio-jp"
  type="radio"
  name="font-style"
  id="font-system"
  checked
/>

<input
  class="font-radio-jp"
  type="radio"
  name="font-style"
  id="font-serif"
/>

<div class="font-switcher-jp">
  <label for="font-system">System</label>
  <label for="font-serif">Serif</label>
</div>

<section class="analytics-card-jp">
  <h2>Growth dashboard</h2>
</section>
```

Customize the component through CSS variables:

```css
:root {
  --ease-underline-duration-jp: 420ms;
  --ease-underline-curve-jp: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-font-accent-jp: #7867ff;
  --ease-font-accent-2-jp: #47ddbd;
  --ease-switch-radius-jp: 1rem;
}
```

Native radio inputs control the selected font. The active label draws an underline from left to right, and the dashboard preview updates through sibling selectors.

Open `demo.html` directly in a browser. No server, JavaScript, CDN, or external framework is required.

## Why is it useful?

Font switchers are useful for typography tools, analytics previews, theme editors, design systems, reading interfaces, and accessibility settings.

This example fits EaseMotion CSS because it:

- uses underline motion to clearly communicate the selected font;
- keeps native radio controls for keyboard interaction;
- provides readable labels and visible selected states;
- exposes reusable timing and color variables;
- updates a realistic analytics preview;
- adapts to smaller screens;
- respects `prefers-reduced-motion`;
- requires zero JavaScript and zero external dependencies.
