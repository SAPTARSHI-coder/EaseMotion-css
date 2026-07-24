# Interactive Rotate-Click Modal

**EaseMotion CSS UI Component Showcase** · `submissions/examples/css-rotate-click-modal-interactive-um/`

A pure CSS animated Modal utilizing a smooth Rotate-Click interaction transition, styled to complement playful, Interactive Interface aesthetics.

---

## 1. What does this do?

This component provides a fully functional, zero-JavaScript modal window designed for high-engagement "Interactive" UI layouts (common in gamified apps, rewards sections, or modern playful marketing sites). The modal uses a 3D perspective rotation (hinge-style `rotateX`) for its entrance animation. Interactive elements like the trigger and modal buttons feature bouncy "Rotate-Click" active states where they physically depress and rotate slightly to provide satisfying, arcade-like tactile feedback.

## 2. How is it used?

Include the provided `style.css` and use the HTML structure from `demo.html`.

### Customizing via CSS Variables
The modal exposes CSS custom properties attached to the `:root` pseudo-class for easy tuning of the playful colors, bouncy easing curves, and rotation angles:

```css
:root {
  --ease-rot-primary-um: #805ad5; /* Playful Purple */
  --ease-rot-secondary-um: #ed64a6; /* Vibrant Pink */
  --ease-rot-timing-um: 0.5s;
  --ease-rot-easing-um: cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy Easing */
  /* ... see style.css for full list */
}
```

## 3. Why is it useful?

Gamified and highly interactive interfaces require interactions that feel immediately responsive and physically satisfying. Achieving reliable 3D rotation and scale transforms across hover and active states without JavaScript can be tricky. This component packages a robust, zero-JS boilerplate (using the CSS checkbox hack for state) combined with hardware-accelerated transforms to guarantee smooth, bouncy 60fps animations that degrade gracefully for users who prefer reduced motion.
