# CSS Foucault Pendulum Tabs

A mathematically precise, physically simulated segmented control built entirely without JavaScript. This component demonstrates how to leverage distant CSS `transform-origin` coordinates combined with custom `cubic-bezier` easing to flawlessly emulate the real-world physics of a swinging pendulum.

## 📋 Mandatory Questions

### 1. What does this do?

This component acts as a standard segmented control or tab navigation system. However, instead of the active indicator sliding linearly across the X-axis, the indicator behaves like a heavy physical pendulum bob hanging from a 400px string. As users click different tabs, the pendulum literally swings through a radial arc—slightly lifting at the edges and accelerating through the center—before overshooting its target and organically settling into place. The component supports Dark Mode by transforming the pendulum into a glowing neon node.

### 2. How is it used?

The state management relies on the standard CSS "Radio Button Hack," utilizing invisible `<input type="radio">` elements connected to the tab `<label>` elements.

**The Physics Engine:**
The swinging arc is achieved natively by anchoring the `transform-origin` of the indicator drastically outside of its own bounding box (400px above it). 

```css
.pendulum-indicator {
  /* Anchor the rotation hinge 400px straight up into the ceiling */
  transform-origin: 50% -400px;
  
  /* The bouncy, heavy physical easing */
  transition: transform 0.8s cubic-bezier(0.5, 1.8, 0.5, 0.8);
}
```

To move the indicator to the outer tabs, we calculate the exact trigonometric angle required to cover the horizontal distance along the 400px radius arc (roughly `17.5deg`), and apply it via `transform: rotate()`.

```css
/* Swing left */
#tab-1:checked ~ .tabs-header .pendulum-indicator { transform: rotate(-17.5deg); }

/* Hang dead center */
#tab-2:checked ~ .tabs-header .pendulum-indicator { transform: rotate(0deg); }

/* Swing right */
#tab-3:checked ~ .tabs-header .pendulum-indicator { transform: rotate(17.5deg); }
```

### 3. Why is it useful?

Simulating organic, arc-based movement traditionally requires heavy JavaScript animation libraries like GSAP or Framer Motion to continuously calculate `Math.sin` and `Math.cos` coordinates on every frame. 

By pushing the `transform-origin` far off-screen and strictly using CSS `rotate()`, the browser's GPU compositor handles the complex radial math natively. This guarantees absolutely flawless 60fps physics simulations with zero JavaScript overhead, protecting mobile battery life. Furthermore, the component adheres strictly to accessibility standards by hooking into `@media (prefers-reduced-motion: reduce)` to instantly snap the indicator into place without swinging for users with motion sensitivities.
