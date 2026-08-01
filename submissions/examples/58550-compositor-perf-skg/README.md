# Compositor-Only Animations Performance Guide (`ease-compositor-perf-skg`)

> Submission for [Issue #58550](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/58550)

---

## What does this do?

A visual documentation showcase and best-practice reference for **CSS animation performance**. It covers:

1. **How the browser rendering pipeline works** — Layout → Paint → Composite, and why hitting only the Composite stage matters for 60 fps.
2. **Live side-by-side demo** — two identical-looking animations: one triggers Layout every frame (`top` / `left` / `width`), the other runs compositor-only (`transform` / `opacity`).
3. **Property reference table** — quick lookup for which CSS properties are safe vs unsafe to animate, with compositor alternatives for each.
4. **Refactor patterns** — four real before/after code pairs showing how to convert paint-heavy keyframes to compositor-only equivalents used in EaseMotion's own `core/animations.css`.
5. **`stylelint-high-performance-animation` integration** — exact config snippets for `.stylelintrc.json` and `package.json` so the CI linter blocks regressions automatically.
6. **`will-change` usage guide** — how to promote GPU layers proactively, and why blanket usage is harmful.

---

## How to use it

Open `demo.html` directly in a browser — no build step required. All code snippets reference the exact patterns EaseMotion already uses in `core/animations.css`.

To run the stylelint rule described in this guide against EaseMotion's CSS:

```bash
# Install the plugin (one-time, maintainer task for core/)
npm install --save-dev stylelint-high-performance-animation

# Then lint
npm run lint:css
```

---

## Why is this useful?

EaseMotion CSS is animation-first — every class it ships triggers an animation. If even one keyframe in a popular utility class animates `top` instead of `transform`, it degrades performance for every user who adds that class. At scale:

- A `top`-based bounce animation causes the browser to **recalculate layout for the entire document** on every frame at 60 fps.
- The equivalent `transform: translateY()` runs **entirely on the GPU** with zero CPU involvement.
- On a mid-range mobile device, the difference is the gap between a smooth 60 fps UI and visible jank.

The `stylelint-high-performance-animation` plugin turns this from a code-review concern into an **automated, zero-overhead CI gate** — no human needs to remember to check.

### The rule (in brief)

```json
"plugin/no-low-performance-animation-properties": [true, { "severity": "error" }]
```

This rejects any `@keyframes` block that includes layout or paint-triggering properties. Allowed:
- `transform` ✅
- `opacity` ✅  
- `filter` ✅ (compositor path, GPU-accelerated)

Rejected:
- `top`, `left`, `bottom`, `right` ❌
- `width`, `height` ❌
- `margin`, `padding` ❌
- `background-color`, `box-shadow`, `border-width` ❌
