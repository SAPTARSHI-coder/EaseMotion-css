# Shooting Star Animation (`ease-shooting-star`)

### 1. What does this do?
This utility creates a subtle, premium light streak (a "shooting star") that sweeps diagonally across an element at regular intervals.

### 2. How is it used?
Add the `ease-shooting-star` class to any container (button, card, etc.) that should have the effect.

```html
<button class="ease-shooting-star">
  Interactive Button
</button>

<div class="ease-card ease-shooting-star">
  Featured Content
</div>
```

### 3. Why is it useful?
It adds a "premium" feel to UI elements without being distracting. It's particularly effective for:
- Drawing subtle attention to Call-to-Action (CTA) buttons.
- Highlighting "Pro" or "Featured" pricing tiers and cards.
- Adding a sense of "life" and polish to an otherwise static interface.

---
**Implementation Details:**
- Follows specification from Issue #11910.
- Uses a high-performance CSS animation on a pseudo-element.
- Features a 45-degree diagonal sweep.
- Completes movement in 0.6s with a 3s loop cycle for a subtle re-occurrence.
