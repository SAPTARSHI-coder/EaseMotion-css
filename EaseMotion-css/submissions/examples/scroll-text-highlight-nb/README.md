# Scroll-Driven Text Highlight Fill (`scroll-text-highlight-nb`)

A premium, performance-optimized, storytelling text animation built entirely with modern native CSS Scroll-Driven Animations.

---

## 1. What does this do?

As the user scrolls down the page, a large text block progressively highlights/fills with white color word-by-word and line-by-line, transitioning from a dimmed state.

---

## 2. How is it used?

Apply the `.scroll-text-highlight-nb` class to your paragraph text element:

```html
<p class="scroll-text-highlight-nb">
  Your storytelling paragraph goes here. As you scroll, this text will light up
  line-by-line.
</p>
```

---

## 3. Why is it useful?

- **Zero-Dependency Performance**: The effect runs entirely on the browser's GPU compositing thread using native CSS `animation-timeline: view()` and `background-clip: text`—requiring no heavy scroll-listening JS libraries (such as GSAP ScrollTrigger or Framer Motion).
- **Accessibility First**: Includes automatic support for the `prefers-reduced-motion` media query, disabling the transition for users with motion sensitivity.
- **Safe Graceful Fallback**: In browsers that do not support CSS Scroll-Driven Animations, the text automatically defaults to fully illuminated white, preserving perfect legibility.
- **Design Alignment**: Ideal for landing pages, feature blocks, and agency portfolios that require premium, immersive scroll interactions.
