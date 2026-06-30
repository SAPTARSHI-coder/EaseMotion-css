# CSS-Only Parallax Scroll

A modern, high-performance, CSS-only parallax scrolling animation. The background moves slower than the foreground content on scroll, using native CSS `animation-timeline: scroll()` instead of heavy JS scroll listeners.

## EaseMotion CSS Classes Showcased

This feature submits a self-contained prototype demonstrating native scroll-driven parallax effects.

### Classes:

- `.ease-parallax-container`: Establishing scrollport parent properties.
- `.ease-parallax-bg`: Applies a vertical Translate3d offset tied directly to the viewport scroll height.
- Modern CSS features used:
  - `animation-timeline: scroll(root block)`
  - `animation-range: start end`

### Usage in HTML:

```html
<div class="ease-parallax-container">
  <div class="ease-parallax-bg"></div>
  <div class="parallax-content">
    <!-- Floating foreground cards -->
  </div>
</div>
```

---

Created as a contribution to EaseMotion CSS. Open `demo.html` in any browser to view the interactive prototype!
