# Submission: Animated Stat Cards

## 1. What does this do?

A full-width stat card component that displays a large number and a label,
with a count-up animation when the card enters the viewport, a shimmer sweep
on completion, and a staggered entrance for multiple cards.

---

## 2. How is it used?

Add the `stat-card` class to a container. Put a `stat-number` span with
`data-target` (the final number) and `data-suffix` (optional, e.g. `+` or `kB`),
a `stat-bar` div, and a `stat-label` span inside.

```html
<!-- Basic stat card -->
<div class="stat-card" data-count="42" data-suffix="+">
  <div class="stat-bg-glow"></div>
  <div class="stat-track">
    <span class="stat-number" data-target="42" data-suffix="+">0+</span>
    <div class="stat-bar"></div>
  </div>
  <span class="stat-label">UTILITIES</span>
</div>

<!-- Accent color variant -->
<div class="stat-card stat-card--accent" data-count="20" data-suffix="+">
  <div class="stat-bg-glow"></div>
  <div class="stat-track">
    <span class="stat-number" data-target="20" data-suffix="+">0+</span>
    <div class="stat-bar"></div>
  </div>
  <span class="stat-label">ANIMATIONS</span>
</div>

<!-- Zero value variant -->
<div class="stat-card stat-card--zero" data-count="0">
  <div class="stat-bg-glow"></div>
  <div class="stat-track">
    <span class="stat-number" data-target="0">0</span>
    <div class="stat-bar stat-bar--zero"></div>
  </div>
  <span class="stat-label">DEPENDENCIES</span>
</div>
```

Include the JS snippet from `demo.html` once per page — it activates
IntersectionObserver-based count-up on all `.stat-card` elements.

---

## 3. Why is it useful?

EaseMotion CSS is animation-first — motion is a first-class citizen,
not an afterthought. Stat cards are one of the most common patterns on
landing pages and docs sites, but they are almost always static. This
submission adds:

- Count-up animation driven by IntersectionObserver (fires on scroll)
- Staggered entrance with `translateY` fade-in per card
- Shimmer sweep on the number when counting completes
- Animated progress bar that fills alongside the count
- Ambient glow blob that scales in behind the number
- Color variants: default (purple), accent (cyan), zero (violet), warm (orange)
- Zero-dependency — pure CSS + vanilla JS, no libraries

Proposed class names (maintainer decides final naming):

- `ease-stat-card` — card container
- `ease-stat-card--accent` — cyan color variant
- `ease-stat-card--zero` — violet color variant
- `ease-stat-card--warm` — orange color variant
- `ease-stat-number` — animated number element
- `ease-stat-label` — label below the number
- `ease-stat-bar` — progress bar
- `ease-stat-bg-glow` — ambient glow layer
