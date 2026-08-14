# Responsive FAQ Accordion

A clean, responsive FAQ accordion using native HTML `<details>` and `<summary>` elements.

## Features
- Zero JavaScript — pure HTML + CSS
- Native `<details>` / `<summary>` accordion
- Smooth expand animation via CSS `@keyframes`
- `clamp()` responsive title sizing
- Open state highlighted with accent border + glow
- `prefers-reduced-motion` support

## Structure

```html
<details class="faq-item">
  <summary class="faq-question">Your question here?</summary>
  <div class="faq-answer">
    <p>Your answer here.</p>
  </div>
</details>
```
