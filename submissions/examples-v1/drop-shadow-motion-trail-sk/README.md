# filter: drop-shadow() Stacked Motion Trail

Stacks multiple `filter: drop-shadow()` layers with directional offsets that animate in sync with the element's motion — the shadow always trails behind the direction of travel, simulating a velocity-aware light trail without canvas, WebGL, or JavaScript.

## Variants

| Variant              | Motion                  | Trail technique                                              |
| -------------------- | ----------------------- | ------------------------------------------------------------ |
| Horizontal bounce    | `translateX` left↔right | Shadow offsets flip direction at each end                    |
| Vertical oscillation | `translateY` up↔down    | Vertical offsets point opposite to travel direction          |
| Orbital trail        | `offset-path: circle()` | Second `@keyframes` rotates shadow offset in sync with orbit |

## Core technique

Three shadow layers create depth: near (high opacity, small blur), mid, and outer glow (low opacity, large blur):

```css
@keyframes ease-trail-bounce {
  0% {
    transform: translateX(-120px);
    filter: drop-shadow(12px 0 6px rgba(249, 115, 22, 0.7)) /* near trail */
      drop-shadow(22px 0 10px rgba(249, 115, 22, 0.4)) /* mid trail */
      drop-shadow(34px 0 16px rgba(249, 115, 22, 0.2)); /* outer glow */
  }
  50% {
    transform: translateX(120px);
    filter: drop-shadow(-12px 0 6px rgba(236, 72, 153, 0.7))
      drop-shadow(-22px 0 10px rgba(236, 72, 153, 0.4))
      drop-shadow(-34px 0 16px rgba(236, 72, 153, 0.2));
  }
}
```

At `0%` (moving rightward), the offset is positive X (shadow trails to the right = behind the leftward direction). At `50%` (moving leftward), the offset flips.

## `drop-shadow()` vs `box-shadow`

`filter: drop-shadow()` traces the element's actual alpha channel — it follows the shape precisely, including transparent areas. `box-shadow` always follows the rectangular border box. For irregular shapes (circles, custom clip-paths), `drop-shadow()` produces correct contouring.

## Orbital trail

The orbital variant runs two synchronized `@keyframes` on the same element:

```css
.orbit-trail-dot {
  animation:
    ease-orbit-distance 3s linear infinite,
    /* moves the dot along the path */ ease-trail-orbit 3s linear infinite; /* rotates the shadow offset */
}
```

## Accessibility

`prefers-reduced-motion: reduce` stops all animations and clears the filter, leaving the element visible without motion.

```css
@media (prefers-reduced-motion: reduce) {
  .ease-trail-orb,
  .ease-trail-square,
  .orbit-trail-dot {
    animation: none;
    filter: none;
  }
}
```
