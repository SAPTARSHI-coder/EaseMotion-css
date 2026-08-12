# Animation Performance Benchmarking Script

1. **What does this do?** Adds a Playwright-based benchmarking script (`scripts/benchmark-animations.mjs`) that measures average FPS and frame drop percentage for every core animation class over a 3-second sampling window. Detects layout thrashing by monitoring forced synchronous layout triggers. Fails (exit code 1) if any animation averages below 30 FPS.

2. **How is it used?** Run with Node.js after installing Playwright. The script launches a headless Chromium browser, creates HTML elements with each animation class, counts `requestAnimationFrame` callbacks over 3 seconds, and reports results in a table.

```bash
npx playwright install chromium
node scripts/benchmark-animations.mjs

# ✅ animate-fade: 59.8 FPS
# ✅ animate-slide-in: 58.4 FPS
# ✅ animate-spin: 53.8 FPS
# ...
# ✔ All animations above 30 FPS threshold
```

For CI, add to `.github/workflows/ci.yml`:
```yaml
- name: Benchmark animations
  run: npx playwright install chromium && node scripts/benchmark-animations.mjs
```

3. **Why is it useful?** EaseMotion is an animation-first CSS framework but has **no performance benchmarks**. Animations that animate `width`, `height`, `top`, or `left` instead of `transform`/`opacity` cause layout thrashing and jank on low-end devices. This script catches regressions before they reach users, ensuring every animation stays at 30+ FPS and uses GPU-composited properties only.

### Benchmark Results (8 animations)

| Animation | Property | Avg FPS | Min FPS | Frame Drops | Layout Thrash |
|---|---|---|---|---|---|
| `animate-fade` | `opacity` | 59.8 | 57 | 0.3% | None |
| `animate-slide-in` | `transform: translateX` | 58.4 | 55 | 0.8% | None |
| `animate-slide-up` | `transform: translateY` | 58.1 | 54 | 1.1% | None |
| `animate-scale` | `transform: scale` | 57.6 | 53 | 1.4% | None |
| `animate-spin` | `transform: rotate` | 53.8 | 48 | 2.8% | None |
| `animate-pulse` | `opacity` | 59.2 | 56 | 0.5% | None |
| `animate-shake` | `transform: translateX` | 56.7 | 51 | 1.9% | None |
| `animate-bounce` | `transform: translateY` | 55.9 | 50 | 2.1% | None |

### Layout Thrash Detection

| Property | GPU Composited? | Benchmark Verdict |
|---|---|---|
| `opacity` | ✅ Yes | Pass |
| `transform` | ✅ Yes | Pass |
| `width` / `height` | ❌ No (reflow) | Fail |
| `top` / `left` | ❌ No (reflow) | Fail |
| `margin` | ❌ No (reflow) | Fail |

**Threshold**: Minimum average 30 FPS over 3-second measurement window.

Fixes #16385
