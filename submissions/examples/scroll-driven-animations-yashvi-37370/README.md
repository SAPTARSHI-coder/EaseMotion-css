# Native CSS Scroll-Driven Animations (SDA)

A performance-first, zero-dependency implementation of scroll-linked animations using native CSS timeline APIs with dynamic progressive enhancement fallbacks.

---

## Questions

1. **What does this do?**  
   It implements native CSS scroll-driven animations (viewport entry reveals, top scroll-progress bars) using the CSS `animation-timeline: view()` and `scroll()` specs, falling back to a CSS transition powered by an IntersectionObserver for unsupported browsers.

2. **How is it used?**  
   Apply `.scroll-progress-bar` for progress tracking, or `.scroll-reveal-card` for viewport-linked entrance animations on elements. Customize scroll thresholds using custom properties:
   ```html
   <div class="scroll-reveal-card" style="--scroll-range: entry 15% cover 45%;">
     <!-- Content -->
   </div>
   ```

3. **Why is it useful?**  
   It delivers high-performance scroll effects directly on the browser's compositor thread, bypassing standard JavaScript scrolling overhead, layout recalculations, and lag. It maintains the EaseMotion CSS philosophy of clean, accessible styling by supporting accessibility properties like `prefers-reduced-motion`.

---

## Features

- **Pure CSS Scroll Tracking:** Computes animations based on active container scroll metrics.
- **Progressive Enhancement:** Automatic browser capabilities queries using `@supports (animation-timeline: view())`.
- **IntersectionObserver Fallback:** Automatically falls back to a clean transition class for unsupported browsers.
- **Customizable Ranges:** Easily modify start/end animation thresholds via `--scroll-range`.
- **Reduced Motion Support:** Respects system accessibility configuration.

---

## CSS Variables

```css
--scroll-range: entry 10% cover 40%;
--scroll-effect-duration: 0.6s;
--scroll-effect-ease: cubic-bezier(0.25, 1, 0.5, 1);
```

---

## Accessibility

- Automatically turns off high-motion animations if the user has `prefers-reduced-motion: reduce` enabled on their system.
- Fallback script relies on basic CSS opacity/translate adjustments which are friendly to layout rendering passes.

---

Issue: #37370

EaseMotion CSS
