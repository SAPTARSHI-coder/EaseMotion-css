# Confetti Bottom Sheet

## What does this do?

This submission creates a responsive, accessible, pure-CSS bottom sheet with neumorphism styling and a celebratory confetti animation.

## How is it used?

```html
<label class="open-sheet-button-jp" for="sheet-toggle-jp">
  Launch celebration
</label>

<input
  class="sheet-toggle-jp"
  type="checkbox"
  id="sheet-toggle-jp"
  aria-hidden="true"
/>

<label
  class="sheet-backdrop-jp"
  for="sheet-toggle-jp"
  aria-label="Close celebration sheet"
></label>

<section class="bottom-sheet-jp ease-confetti-bottom-sheet-jp">
  <div class="confetti-layer-jp" aria-hidden="true">
    <i class="confetti-jp confetti-1-jp"></i>
  </div>

  <h2>Excellent work!</h2>

  <label class="primary-action-jp" for="sheet-toggle-jp">
    Continue
  </label>
</section>
```

Customize the component through CSS variables:

```css
:root {
  --ease-sheet-duration-jp: 680ms;
  --ease-confetti-duration-jp: 1.9s;
  --ease-sheet-curve-jp: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-sheet-bg-jp: #e8edf6;
  --ease-sheet-accent-jp: #7667ef;
  --ease-sheet-success-jp: #37bd93;
  --ease-sheet-radius-jp: 2rem;
}
```

A native checkbox stores the open state. Labels connected to that checkbox open and close the sheet without JavaScript. Confetti pieces animate only when the sheet is open.

Open `demo.html` directly in a browser. No server, JavaScript, CDN, or external framework is required.

## Why is it useful?

Bottom sheets are useful for achievements, confirmations, onboarding steps, mobile actions, rewards, and success messages.

This example fits EaseMotion CSS because it:

- combines a reusable entrance animation with a single confetti effect;
- uses native HTML state instead of JavaScript;
- includes visible labels and keyboard-accessible actions;
- provides a responsive mobile-friendly layout;
- exposes reusable motion and theme variables;
- respects `prefers-reduced-motion`;
- requires zero external dependencies.
