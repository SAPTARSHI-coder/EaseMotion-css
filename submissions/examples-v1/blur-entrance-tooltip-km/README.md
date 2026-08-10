# Blur-Entrance Tooltip

1. **What does this do?**  
Adds a responsive pure CSS tooltip with a smooth blur-to-sharp entrance transition.

2. **How is it used?**  
Place an `.action-button` and `.blur-tooltip` inside a `.tooltip-wrap`.

```html
<div class="tooltip-wrap">
  <button class="action-button" aria-describedby="tooltip-example">
    Information
  </button>

  <span
    class="blur-tooltip"
    id="tooltip-example"
    role="tooltip"
  >
    Helpful information about this action.
  </span>
</div>
```

Timing, easing, blur amount, scale, and movement distance can be customized through CSS custom properties.

3. **Why is it useful?**  
It provides a reusable zero-JavaScript tooltip interaction that fits EaseMotion CSS's philosophy of lightweight, customizable motion while supporting keyboard focus, responsive layouts, and reduced-motion preferences.