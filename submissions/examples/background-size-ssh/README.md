# Background-Size Showcase (`background-size-ssh`)

A visual demonstration of the CSS `background-size` property — covering `auto`, `cover`, `contain`, custom percentages, stretch, and an animated hover-zoom effect — all built with pure HTML + CSS and zero external assets.

---

## 1. What does this do?

It provides a six-card visual showcase that demonstrates every common value of the CSS `background-size` property, so developers can instantly see how each value affects background image rendering.

---

## 2. How is it used?

Each card is a self-contained example. To use any variant in your own project, simply apply the matching modifier class to a container with a `background-image`:

```html
<!-- Cover: fills container, may crop -->
<div class="bg-card bg-card--cover">
  <div class="bg-card__visual"></div>
</div>

<!-- Contain: fits entirely, may leave space -->
<div class="bg-card bg-card--contain">
  <div class="bg-card__visual"></div>
</div>

<!-- Custom size -->
<div class="bg-card bg-card--custom">
  <div class="bg-card__visual"></div>
</div>

<!-- Stretch: forces 100% 100% -->
<div class="bg-card bg-card--stretch">
  <div class="bg-card__visual"></div>
</div>

<!-- Hover zoom: animates background-size on hover -->
<div class="bg-card bg-card--hover-zoom">
  <div class="bg-card__visual"></div>
</div>
```

The corresponding CSS rules apply the proper `background-size` value to each variant. Just open `demo.html` in any modern browser — no server, no build step.

---

## 3. Why is it useful?

This submission fits EaseMotion CSS's philosophy because it:

- **Pure CSS, no JavaScript** — every behavior, including the hover zoom, is driven by CSS only.
- **Animation-first** — the `hover-zoom` variant uses a smooth `transition: background-size 0.6s ease` for that signature EaseMotion feel.
- **Self-contained** — uses inline SVG data URIs for all visuals, so the demo works offline and never relies on a CDN or external image.
- **Educational** — gives developers a side-by-side comparison of `background-size` values, which is often confusing for newcomers.
- **Accessible** — respects `prefers-reduced-motion` so users who prefer less motion get no animation.
- **Responsive** — adapts gracefully from desktop grids to single-column on mobile.

It can serve as both a learning resource in the EaseMotion docs and a foundation for utility classes like `ease-bg-cover`, `ease-bg-contain`, and `ease-bg-zoom`.

---

## Browser Support

Works on all modern browsers that support CSS transitions and SVG backgrounds:

- ✅ Chrome / Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

---

## Author

Submitted by **@soumyasekharshee265-ux** as part of issue [#20016](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20016).