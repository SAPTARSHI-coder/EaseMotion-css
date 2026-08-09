# Accordion Component

## What does this do?

A CSS-only accordion component using native `<details>` and `<summary>` elements with smooth animated expand/collapse, three visual variants, and built-in accessibility.

## How is it used?

```html
<!-- Single-open group (uses name attribute for exclusivity) -->
<div class="accordion-group accordion-group--single">
  <details class="accordion" name="faq">
    <summary class="accordion__trigger">
      <span class="accordion__title">What is EaseMotion CSS?</span>
      <span class="accordion__icon" aria-hidden="true"></span>
    </summary>
    <div class="accordion__content">
      <div class="accordion__content-inner">
        <p>Your content here.</p>
      </div>
    </div>
  </details>
</div>

<!-- Bordered variant -->
<details class="accordion accordion--bordered">...</details>

<!-- Elevated variant -->
<details class="accordion accordion--elevated">...</details>
```

## Why is it useful?

This aligns with EaseMotion CSS's philosophy of human-readable, zero-dependency components. It uses semantic HTML for built-in keyboard navigation and screen reader support — no JavaScript required. The grid-based animation respects `prefers-reduced-motion`, and dark mode is supported across all three visual variants. CSS-only accordions are explicitly listed on the v1.2 roadmap as a planned feature.
