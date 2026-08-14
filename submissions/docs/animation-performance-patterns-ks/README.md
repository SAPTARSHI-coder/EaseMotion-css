# Animation Performance Patterns — Documentation Guide

## 1. What does this do?

Provides live, side-by-side benchmarks comparing composited vs non-composited CSS animation properties. Each benchmark shows the same visual effect implemented two ways: the GPU-composited way (60fps everywhere) and the layout/paint-triggering way (jank on low-end devices).

## 2. How is it used?

Open `demo.html` in a browser. Each benchmark shows a live, animated comparison:

| Benchmark | Left (Composited ✅) | Right (Non-Composited ❌) |
|---|---|---|
| Growth animation | `transform: scaleX()` | `width` animation |
| Fade transitions | `opacity` only | `opacity` + `visibility` |
| `will-change` usage | Scoped to `:hover` | Permanent on base class |
| Shadow on hover | `filter: drop-shadow()` | `box-shadow` |

### DevTools Verification

Open Chrome DevTools while viewing the demo:

1. **Rendering tab** → Enable **Paint Flashing** — the right side of each benchmark flashes green (repaint events). The left side does not.
2. **Performance tab** → Record, then hover the elements — composited animations show continuous GPU frames. Paint-triggering ones show layout/paint spikes.
3. **CPU throttling** → Set to 6x slowdown. Composited-only animations stay butter-smooth; layout-triggering ones visibly stutter.

### Property Reference

The CSS Property Performance Reference table in the demo categorizes every commonly animated property into three tiers:

- **Composited Only** — `transform`, `opacity`, `filter`, `backdrop-filter`
- **Paint Only** — `color`, `background-color`, `box-shadow`, `border-color`
- **Layout + Paint** — `width`, `height`, `top`, `left`, `margin`, `padding`

### Framework-Specific Mapping

The demo includes a table mapping specific EaseMotion CSS classes to their performance characteristics, with recommended alternatives where applicable.

## 3. Why is it useful?

Existing EaseMotion docs mention performance but provide no live, visual benchmarks. Developers reading "use transform instead of width" in text don't internalize it. This demo provides:

- **Live animated comparisons** — seeing is believing
- **DevTools verification instructions** — learn to audit their own work
- **Framework-specific fixes** — maps real EaseMotion classes to improvements
- **Actionable checklist** — 7 concrete rules to apply immediately
- **Reduced-motion support** — the demo itself respects `prefers-reduced-motion`

The page explicitly maps EaseMotion framework classes like `.ease-typewriter-loop`, `.ease-reveal`, and `.ease-password-strength-bar` to their performance characteristics — directly useful to contributors and maintainers.
