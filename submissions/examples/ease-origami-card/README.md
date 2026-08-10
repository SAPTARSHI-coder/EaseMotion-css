# CSS Origami Fold Card (`ease-origami-card`)

A pure CSS 3D paper trifold card component that unfolds smoothly upon interaction without JavaScript.

## 1. What does this do?
The **EaseOrigami Card** is a 3D paper trifold card component that smoothly unfolds top and bottom panels when clicked (or toggled via checkbox state), creating a physical paper-folding origami animation effect.

## 2. How is it used?
- The outer container `.ease-origami-wrapper` specifies `perspective: 1500px` to establish a 3D rendering context.
- The `.ease-origami-card` container uses `transform-style: preserve-3d` to preserve 3D geometric positioning for child elements.
- The top (`.ease-flap-top`) and bottom (`.ease-flap-bottom`) panels act as physical paper hinges using explicit `transform-origin` coordinates (`bottom` for top flap, `top` for bottom flap) combined with `rotateX(-179.9deg)` and `rotateX(179.9deg)`.
- Toggling the hidden checkbox state (`:checked ~ .ease-origami-card`) transitions `rotateX` to `0deg`, creating a realistic unfold motion.

## 3. Why is it useful?
- **Zero JavaScript Overhead**: Delivers a full interactive 3D state transition using the CSS checkbox hack without requiring external JavaScript or physics engines.
- **Hardware-Accelerated Performance**: All 3D rotations, perspective shifts, and shadow gradient transitions execute directly on the GPU for 60fps performance.
- **Accessibility & Motion Compliance**: Includes full `@media (prefers-reduced-motion: reduce)` support for users with motion sensitivities.
