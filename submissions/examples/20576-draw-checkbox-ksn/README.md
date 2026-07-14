# SVG Checkbox Path-Drawing Micro-interaction

### 1. What does this do?

This is a CSS-only checkbox component where the SVG checkmark path is dynamically drawn from start to end when checked, and erased in reverse when unchecked.

### 2. How is it used?

Wrap the elements in a `.draw-checkbox` label and add the structured custom box and SVG checkmark:

```html
<label class="draw-checkbox">
  <input type="checkbox" class="draw-checkbox-input" />
  <div class="draw-checkbox-box">
    <svg
      class="draw-checkbox-checkmark"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
    >
      <path
        d="M20 6L9 17L4 12"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
  <span class="draw-checkbox-label">Subscribe to newsletter</span>
</label>
```

### 3. Why is it useful?

It fits the animation-first and accessibility-centered philosophy of EaseMotion CSS by creating a clean, satisfying input micro-interaction with native keyboard support and a prefers-reduced-motion fallback, using zero JavaScript.
