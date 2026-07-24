# FAB Pulse Animation

A continuous, subtle scaling pulse effect placed behind a Floating Action Button (FAB) or critical notification element.

**What does this do?**
Adds a pulsating ripple effect behind an element by utilizing a `::before` pseudo-element and CSS `@keyframes`.

**How is it used?**
Simply add the `.ease-fab-pulse` class to your FAB or button:

```html
<button class="ease-fab ease-fab-pulse">
  +
</button>
```
*Note: The base element must have a background color and border-radius set, as the pulse inherits these properties to create a seamless ripple.*

**Why is it useful?**
- Draws user attention organically.
- Pure CSS with no JavaScript intervals needed.
- Gracefully disables animation for users who prefer reduced motion.
