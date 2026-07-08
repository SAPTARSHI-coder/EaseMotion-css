# Submission: Buttons Demo Page Enhanced

## 1. What does this do?

Enhances the existing Buttons demo page with GSAP ScrollTrigger entrance
animations, 3D perspective tilt on hover, magnetic cursor pull, and a
squish click animation — making the demo page demonstrate EaseMotion CSS's
animation-first philosophy visually.

---

## 2. How is it used?

The demo is self-contained. Open `demo.html` directly in a browser.
GSAP and ScrollTrigger are loaded via CDN — no install, no build step.

All button enhancements are activated via data attributes:

```html
<!-- 3D tilt on hover -->
<button class="em-btn em-btn-primary" data-3d>Primary</button>

<!-- magnetic cursor pull -->
<button class="em-btn em-btn-primary" data-magnetic>Primary</button>

<!-- both combined (recommended) -->
<button class="em-btn em-btn-primary" data-magnetic data-3d>Primary</button>

<!-- squish on click -->
<button class="em-btn em-btn-primary em-squish" data-magnetic data-3d>Squish Me</button>
```

ScrollTrigger activates automatically on any `[data-scroll-section]` wrapper.

---

## 3. Why is it useful?

EaseMotion CSS is animation-first — the Buttons demo page is the first
thing most visitors interact with. This submission makes every interaction
expressive:

- **ScrollTrigger entrance** — each section's tag and buttons animate in
  on scroll with staggered `back.out` easing
- **3D tilt** — `rotateX` / `rotateY` via GSAP gives physical depth to
  every button on hover, with elastic snap-back on leave
- **Magnetic pull** — buttons attract the cursor by 28% of the offset,
  making them feel tactile and alive
- **Squish click** — `scaleX` / `scaleY` sequence on the squish button
  with `elastic.out` spring easing
- **Hero entrance** — title, eyebrow, and description orchestrated into
  a staggered timeline on page load

Libraries used (CDN only, zero install):
- GSAP 3.12.5
- GSAP ScrollTrigger 3.12.5

Proposed class names (maintainer decides final naming):
- `ease-btn-3d`        — enables 3D tilt behavior
- `ease-btn-magnetic`  — enables magnetic cursor pull
- `ease-squish`        — enables squish click animation
- `ease-hover-shimmer` — shimmer sweep on hover
- `ease-hover-glow`    — pulsing glow ring on hover
- `ease-hover-lift`    — lift + shadow on hover