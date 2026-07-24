# Rotate Button

## What does this do?

This submission creates a responsive glassmorphism button that rotates its icon and accent ring on hover or keyboard focus using only CSS.

## How is it used?

```html
<button class="rotate-button-jp ease-rotate-button-jp" type="button">
  <span class="button-glow-jp" aria-hidden="true"></span>

  <span class="button-icon-jp" aria-hidden="true">
    <!-- Optional SVG icon -->
  </span>

  <span class="button-text-jp">Refresh data</span>
</button>
```

Customize the component through CSS variables:

```css
:root {
  --ease-rotate-duration-jp: 620ms;
  --ease-rotate-curve-jp: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-button-radius-jp: 1rem;
  --ease-button-accent-jp: #7c68ff;
  --ease-button-accent-2-jp: #45dfc3;
}
```

Hovering or keyboard-focusing the button rotates its icon and orbit ring while expanding a soft glassmorphism glow.

Open `demo.html` directly in a browser. No server, JavaScript, CDN, or external framework is required.

## Why is it useful?

Rotate buttons are useful for refresh, sync, retry, regenerate, reload, and update actions in dashboards, forms, toolbars, and applications.

This example fits EaseMotion CSS because it:

- uses rotation to reinforce the meaning of refresh-style actions;
- exposes reusable motion and color variables;
- supports hover and keyboard focus;
- uses native button elements;
- includes visible focus feedback;
- adapts to smaller screens;
- respects `prefers-reduced-motion`;
- requires zero JavaScript and zero external dependencies.
