# Magnetic Physics Button

A premium button that physically "pulls" toward the user's cursor as it
enters a magnetic field radius around it — a spring-like tactile effect
with no physics engine (no GSAP, no Framer Motion) required.

## How it works

- On `pointermove`, we compute the **geometric distance** between the
  cursor and the button's exact center: `Math.sqrt(dx*dx + dy*dy)`.
- If the cursor is within the button's `data-radius`, its
  `transform: translate()` is set proportionally to the offset, scaled
  by `data-strength` (0–1) — closer to center moves less, further out
  (but still inside the radius) pulls more.
- The "physics" feel isn't a JS spring simulation — it comes from a
  **CSS `cubic-bezier` overshoot easing**
  (`cubic-bezier(0.34, 1.56, 0.64, 1)`) on the `transform` transition,
  which settles like a real spring after each pointer move.
- While actively pulled (`.is-pulled`), the transition tightens to
  `0.15s` so the button tracks the cursor responsively; on pointer leave
  it eases back to center with the bouncier curve.

## Usage

```html
<button class="magnetic-button" data-radius="90" data-strength="0.4">
  <span class="magnetic-button-label">Get Started</span>
</button>
```

| Data attribute   | Default | Description                                        |
|-------------------|---------|----------------------------------------------------|
| `data-radius`     | `90`    | px radius of the magnetic field around the button   |
| `data-strength`   | `0.4`   | 0–1, how far the button travels relative to cursor offset |

The tiny inline script in `demo.html` wires this up for any element with
the `.magnetic-button` class — just add the class and data attributes.

## Why it fits EaseMotion CSS

The animation itself is 100% native CSS transition/easing — JS here only
supplies the cursor-distance math (which can't be done in pure CSS
without a pointer listener), keeping the actual motion declarative,
GPU-accelerated (`transform`-only), and dependency-free.

## Accessibility

- Uses a semantic `<button>`.
- `:focus-visible` gets a clear outline independent of the magnetic
  effect, so keyboard users get a visible focus state.
- `prefers-reduced-motion: reduce` disables the pull transform entirely
  while keeping the button fully clickable.

## Browser support

Uses `PointerEvent` (all modern evergreen browsers) and standard CSS
transitions — no experimental APIs.