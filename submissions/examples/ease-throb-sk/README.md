# Throb Animation (`ease-throb`)

### 1. What does this do?
The `ease-throb` utility creates a slow, rhythmic "throbbing" effect by simultaneously scaling the element (up to 1.12x) and expanding a soft outer glow (box-shadow).

### 2. How is it used?
Apply the `ease-throb` class to any element that needs heavy emphasis, such as primary call-to-action buttons or featured cards.

```html
<button class="ease-throb">
  Limited Time Offer
</button>

<div class="ease-card ease-throb">
  Featured Plan
</div>
```

### 3. Why is it useful?
It provides a level of emphasis higher than `ease-pulse` but more sophisticated than simple blinking. The combination of scale and shadow expansion makes the element feel "alive" and urgent, making it ideal for:
- "Flash sale" banners.
- Primary CTA buttons in hero sections.
- Highlighting critical notifications.
- Featured product tiers in pricing tables.

---
**Implementation Details:**
- Follows specification from Issue #11907.
- Cycle duration: 2s (Infinite loop).
- Transform: `scale(1)` to `scale(1.12)`.
- Shadow: Expands a semi-transparent glow using the framework's primary color.
