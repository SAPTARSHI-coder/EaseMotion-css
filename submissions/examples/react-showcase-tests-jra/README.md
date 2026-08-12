# Animation Showcase & Visual Test Playground

### What does this do?
This submission provides a self-contained, interactive visual reference for every EaseMotion CSS animation class — enabling contributors and maintainers to preview, compare, and manually verify animations in one unified playground page.

---

### How is it used?

Apply animation classes directly on any HTML element:

```html
<!-- Entrance animation -->
<div class="anim-fade-in">Hello, EaseMotion!</div>

<!-- Slide with stagger delay -->
<div class="anim-slide-up delay-100">Item 1</div>
<div class="anim-slide-up delay-200">Item 2</div>
<div class="anim-slide-up delay-300">Item 3</div>

<!-- Continuous animations -->
<div class="anim-pulse">Live indicator</div>
<div class="anim-spin">Loading…</div>
```

The demo includes:
- **Live Playground** — pick any animation + speed and click Play
- **Visual Grid** — all 13 animations in a click-to-replay reference grid
- **Stagger Demo** — entrance sequence with `.delay-*` utilities
- **Modal Component** — animated dialog (Escape / backdrop / button close)
- **Accessibility Notice** — `prefers-reduced-motion` compliance

---

### Why is it useful?

EaseMotion CSS issue [#35169](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/35169) identified the need for systematic visual testing of animation components. This playground addresses that by:

1. **Reducing manual QA effort** — every class can be previewed and replayed in one place without writing any code
2. **Serving as a regression reference** — contributors and reviewers can spot visual regressions by comparing the live output against expected behaviour
3. **Demonstrating real-world usage** — stagger sequences, modals, and speed control mirror common EaseMotion CSS integration patterns
4. **Matching the framework's philosophy** — zero external dependencies, human-readable class names, and graceful `prefers-reduced-motion` support built in

> All animations, layout, and interactivity are **100% self-contained** — no CDN links, no build step, no server required. Open `demo.html` in any browser.
