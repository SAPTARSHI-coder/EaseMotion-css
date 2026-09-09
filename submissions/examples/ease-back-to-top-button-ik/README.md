# EaseMotion CSS — Floating Back to Top Button (`ease-back-to-top-button-ik`)

Pure CSS floating back-to-top button component (`ease-back-to-top`) featuring spring lift micro-animations (`translateY(-6px)`), smooth scroll behavior (`scroll-behavior: smooth`), and accessible focus outlines.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a floating back-to-top navigation button (`ease-back-to-top`) that smoothly scrolls the window back to the top anchor (`#top`) on click with spring hover lift dynamics (`scale(1.1)`).

---

## 2. How is it used?

Include the floating button anchor link in your HTML layout:

```html
<a href="#top" class="ease-back-to-top" aria-label="Back to top">
  <span class="btt-arrow">↑</span>
</a>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS prioritizes smooth scroll user experience. The Floating Back to Top Button component delivers 60fps GPU compositor lift micro-interactions while maintaining `prefers-reduced-motion` accessibility overrides.
