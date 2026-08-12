# Copy Confirmation Tick

## What does this do?

A copy button that shows an animated tick (checkmark) the instant it is activated, giving the user immediate visual confirmation that the value was "copied".

## How is it used?

Wrap a value in a `.copy-card`, then add a `.copy-tick` control made of a hidden checkbox and a styled `<label>` button. Toggling the checkbox drives the confirmation animation &mdash; no JavaScript required.

```html
<span class="copy-tick">
  <input
    class="copy-tick__input"
    type="checkbox"
    id="copy-x"
    aria-label="Copy the value"
  />
  <label class="copy-tick__button" for="copy-x">
    <svg class="copy-tick__icon" viewBox="0 0 24 24" ...>
      <!-- copy glyph -->
    </svg>
    <svg class="copy-tick__tick" viewBox="0 0 24 24" ...>
      <path class="copy-tick__tick-path" d="M5 12.5l4.5 4.5L19 7"></path>
    </svg>
    <span class="copy-tick__text">
      <span class="copy-tick__text--idle">Copy</span>
      <span class="copy-tick__text--done">Copied!</span>
    </span>
  </label>
</span>
```

- The copy glyph fades out and the tick draws in (SVG `stroke-dashoffset` animation) when `:checked`.
- The label swaps "Copy" &rarr; "Copied!" and the button turns success-green with a soft glow.

## Why does it fit EaseMotion CSS?

It is an animation-first, human-readable UI pattern built with zero JavaScript. The confirmation motion &mdash; an SVG checkmark drawing in, a spring-scale entrance, and a color/glow shift &mdash; is exactly the kind of ready-to-use micro-interaction EaseMotion curates. It is responsive, accessible (keyboard-operable via the native checkbox, with an `aria-label` and a visible focus ring), and self-contained, so it fits the framework's "open it in a browser and it works" philosophy.

## Accessibility &amp; notes

- The real checkbox is visually hidden but remains in the tab order, so `Tab` focuses the button and `Space`/`Enter` toggles it &mdash; the confirmation animation is fully keyboard-operable.
- Each control carries an `aria-label` describing what it copies; the decorative icons are `aria-hidden`.
- The demo simulates the "copied" confirmation state purely in CSS. In production, a single line of JavaScript wires the toggle to the Clipboard API (`navigator.clipboard.writeText(value)`) to perform the actual copy; the CSS animation/confirmation UI shown here is the part EaseMotion standardizes.
