# EaseMotion CSS — Pure CSS Scroll-Driven Animations (`ease-scroll-driven-animations-ik`)

Zero-JS, GPU-accelerated scroll reveal utilities powered by modern native CSS Scroll-Driven Animations (`animation-timeline: view()`) with progressive enhancement.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides pure CSS utility classes (`ease-scroll-fade`, `ease-scroll-slide`, `ease-scroll-zoom`) that automatically trigger smooth viewport entrance animations driven directly by the user's scroll progress — requiring zero JavaScript or IntersectionObserver listeners.

---

## 2. How is it used?

Apply the scroll utility class directly to any HTML section or card element:

```html
<!-- Slide/fade in on scroll -->
<section class="card ease-scroll-fade">
  <h2>Scroll Reveal Card</h2>
</section>

<!-- Scale zoom on scroll -->
<section class="card ease-scroll-zoom">
  <h2>Zoom Reveal Card</h2>
</section>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS prioritizes animation-first, zero-dependency performance. By leveraging `@supports (animation-timeline: view())`, this feature delivers 60fps GPU compositor animations without main-thread JS execution while respecting `prefers-reduced-motion` accessibility preferences.
