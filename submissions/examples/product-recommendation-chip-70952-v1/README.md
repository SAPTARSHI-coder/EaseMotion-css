# CSS Product Recommendation Chip

Interactive, accessible "Frequently bought together" product recommendation pill chips built with pure HTML & CSS.

## 1. What does this do?
Provides a pill-style product recommendation chip component featuring interactive checkbox toggle states, custom badges, springy scale interactions, and accessibility support without any JavaScript.

## 2. How is it used?
Wrap the chip inside a `<label class="recommendation-chip">` containing a hidden checkbox input and a `.chip-content` container:

```html
<label class="recommendation-chip">
  <input type="checkbox" class="chip-input" checked aria-label="Add Hard Shell Case for $24.99">
  <span class="chip-content">
    <span class="chip-checkbox-visual" aria-hidden="true">
      <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </span>
    <span class="chip-text">
      <span class="chip-name">Hard Shell Case</span>
      <span class="chip-price">+$24.99</span>
    </span>
    <span class="chip-badge">-15%</span>
  </span>
</label>
```

## 3. Why is it useful?
E-commerce websites frequently show add-on recommendations ("Frequently Bought Together"). This pure CSS solution eliminates heavy JavaScript dependencies, delivers high 60fps performance, and provides accessible keyboard and screen reader support out of the box.
