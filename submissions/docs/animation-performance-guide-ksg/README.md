# Animation Performance Best Practices Guide

## 1. What does this do?
A standalone, self-contained documentation guide that teaches developers how to write
efficient CSS animations by showing side-by-side comparisons of performant vs
non-performant techniques, covering compositor-only properties, `will-change`, GPU
promotion, and reduced-motion accessibility.

## 2. How is it used?
Open `demo.html` directly in a browser — no server needed. It demonstrates the
following patterns visually and with annotated code:

```html
<!-- ✅ Compositor-only: animates on the GPU, no layout recalc -->
<div class="perf-good-slide">Slide in</div>

<!-- ❌ Layout-triggering: forces the browser to recalculate geometry -->
<div class="perf-bad-slide">Slide in (bad)</div>

<!-- ✅ Opacity fade — compositor-only -->
<div class="perf-fade">Fade in</div>

<!-- ✅ will-change hint for upcoming transform animation -->
<div class="perf-will-change-card">Hover me</div>

<!-- ✅ Reduced motion: respects user system preference -->
<div class="perf-accessible">Accessible animation</div>
```

The `style.css` file contains all the raw CSS patterns described in the guide.

## 3. Why is it useful?
EaseMotion CSS is built on the principle that if you can describe UI behaviour in plain
English, you should be able to write it as a class. That same clarity extends to
**performance**: animations should be smooth and deliberate, not accidental performance
killers. This guide:

- Explains *why* `transform` and `opacity` are the two compositor-only properties that
  animate entirely on the GPU without triggering layout or paint.
- Shows concrete before/after comparisons (e.g. `left` vs `translateX`,
  `width` vs `scaleX`) so developers understand the principle, not just the rule.
- Demonstrates `will-change` usage and its correct scoping — a commonly
  misunderstood optimisation.
- Reinforces EaseMotion's built-in `prefers-reduced-motion` pattern so contributors
  know how to replicate it in their own submissions.

This fits EaseMotion CSS's philosophy of zero-dependency, human-readable CSS that
also respects browser rendering reality and user accessibility preferences.
