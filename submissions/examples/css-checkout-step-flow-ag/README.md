# CSS Checkout Step Flow

A pure CSS responsive checkout step flow component indicating current, completed, and upcoming steps.

## Usage

```html
<ul class="step-flow" aria-label="Checkout steps">
  <li class="step completed">
    <div class="step-icon">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
    </div>
    <span class="step-label">Cart</span>
  </li>
  <li class="step active" aria-current="step">
    <div class="step-icon">2</div>
    <span class="step-label">Shipping</span>
  </li>
</ul>
```

## Why is this useful for EaseMotion CSS

This component expands the library's collection of ready-to-use CSS animations and UI patterns, helping front-end developers implement a checkout step flow without relying on JavaScript libraries. It includes accessible keyboard navigation and semantic structure.
