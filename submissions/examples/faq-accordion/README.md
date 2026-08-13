# Collapsible FAQ Accordion with Icon Rotation

A FAQ accordion built on native `<details>`/`<summary>` elements, with a smoothly rotating chevron icon and an animated answer reveal. Pure HTML and CSS — no JavaScript required.

## Features

- 📖 Built on native `<details>`/`<summary>` — accessible and keyboard-operable by default, no ARIA wiring needed
- 🔄 Chevron icon rotates 180° when an item is expanded
- ✨ Answer content fades and slides in on open
- 📱 Responsive — padding and font size scale down on small screens
- ♿ Respects `prefers-reduced-motion`
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

```html
<details class="faq-item">
  <summary class="faq-question">
    What is EaseMotion CSS?
    <span class="faq-icon">⌄</span>
  </summary>
  <div class="faq-answer">
    <p>Your answer content here.</p>
  </div>
</details>
```

Add the `open` attribute to any `<details>` to have it expanded by default. Multiple accordion items can be open at once since each `<details>` is independent (this is standard `<details>` behavior, not an accordion-exclusive one at a time — see note below if you want exclusive opening).

## Why it fits EaseMotion CSS

The rotation and reveal animation use only CSS `transition`/`@keyframes` tied to the native `[open]` attribute selector — no JavaScript, no custom disclosure logic. Class names stay simple and readable (`faq-item`, `faq-question`, `faq-icon`).

## Files

- `demo.html` — four example FAQ items, first one expanded
- `style.css` — all styles and animations
- `README.md` — this file

## Notes

To make only one item open at a time (exclusive accordion behavior), either use the `name` attribute on `<details>` (supported in modern browsers, e.g. `<details name="faq">`) to group them natively, or add a small JS listener that closes siblings on open.