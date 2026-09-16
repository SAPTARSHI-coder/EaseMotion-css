# Morphing Hamburger Icon

A CSS-only interactive hamburger menu icon that smoothly morphs into an "X" (close) icon when clicked, utilizing CSS transforms and the checkbox hack.

## What it does

It creates a fully responsive, 60fps micro-animation for a hamburger menu toggle without relying on JavaScript. When toggled, the middle line disappears while the top and bottom lines rotate 45 and -45 degrees respectively to form a close icon.

## How to use it

Wrap a hidden checkbox input inside a label, and include a span for the hamburger lines:

```html
<label class="ease-hamburger">
  <input type="checkbox" id="hamburger-toggle">
  <span class="hamburger-lines"></span>
</label>
```

Apply the provided CSS from `style.css` which styles the pseudo-elements (`::before` and `::after`) and manages the `:checked` state to animate the transition.

## Why it fits EaseMotion CSS

EaseMotion CSS focuses on delivering rich, animation-first aesthetics with standard and human-readable HTML/CSS. This implementation provides a fluid, pure CSS micro-animation that improves user experience without heavy JS dependencies, perfectly aligning with the library's design philosophy.
