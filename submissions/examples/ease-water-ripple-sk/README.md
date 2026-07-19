# Water Ripple Animation (`ease-water-ripple`)

### 1. What does this do?
This utility creates a circular ripple effect that expands from the center of an element when it is clicked or held down (`:active` state).

### 2. How is it used?
Apply the `ease-water-ripple` class to any interactive element. You can customize the ripple color using the `--ease-ripple-color` CSS variable.

```html
<button class="ease-water-ripple">
  Click Me
</button>

<div class="ease-card ease-water-ripple" style="--ease-ripple-color: rgba(0,0,0,0.1);">
  Clickable Card
</div>
```

### 3. Why is it useful?
The water ripple provides immediate, visual tactile feedback for user interactions. Unlike standard button state changes, the expanding ripple feels more organic and modern. It is particularly useful for:
- Confirming clicks on large touch targets.
- Adding "life" to static buttons.
- Creating a cohesive, material-inspired interaction language.

---
**Implementation Details:**
- Follows specification from Issue #11904.
- Uses a CSS pseudo-element (`::after`) and hardware-accelerated `transform: scale()` for performance.
- Clips automatically via `overflow: hidden`.
- Fully customizable via CSS variables.
