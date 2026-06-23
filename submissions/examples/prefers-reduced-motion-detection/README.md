# prefers-reduced-motion Detection

## What does this do?

Provides a **tiered reduced-motion system** that automatically detects `prefers-reduced-motion`, replaces high-vestibular-risk animations with safe opacity fades, and exposes a `data-reduce-motion` attribute for JavaScript-driven in-page toggles — all without breaking useful feedback animations like loading spinners.

## How is it used?

**Zero-config (CSS only):** Users who have "Reduce Motion" enabled in their OS settings automatically get safe fallback animations — no extra classes needed.

```html
<!-- Works exactly like normal — reduced-motion kicks in automatically -->
<div class="ease-slide-up">Content slides up (or fades in, if motion is reduced)</div>
<div class="ease-bounce">Bouncing element (frozen if motion is reduced)</div>
```

**JavaScript toggle (in-page control):** Add a toggle button so users can control motion without changing OS settings.

```html
<button onclick="document.documentElement.dataset.reduceMotion =
  document.documentElement.dataset.reduceMotion === 'true' ? 'false' : 'true'">
  Toggle Motion
</button>
```

**JavaScript detection:**

```js
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Listen for real-time changes
window.matchMedia('(prefers-reduced-motion: reduce)')
  .addEventListener('change', (e) => {
    console.log('Reduced motion:', e.matches);
  });
```

## Why is it useful?

EaseMotion CSS includes a basic `prefers-reduced-motion` block that overrides speed tokens, but this submission extends it with a **three-tier progressive approach**:

| Tier | Mechanism | What it does |
|------|-----------|-------------|
| **1** | CSS custom property override | Sets `--ease-speed-*` to `0.01ms`, stops animation iterations |
| **2** | Targeted class fallbacks | Replaces slide/flip/bounce with safe opacity fades; freezes looping animations; preserves loading indicators |
| **3** | `data-reduce-motion` attribute | Enables JavaScript-driven toggles for in-page accessibility controls without requiring OS changes |

This ensures **WCAG 2.1 SC 2.3.3** (Motion from Interaction) compliance and protects users with vestibular disorders, epilepsy, or general motion sensitivity — while still preserving meaningful UI feedback through safe opacity transitions.
