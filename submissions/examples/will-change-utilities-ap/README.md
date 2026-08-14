# EaseMotion CSS — Will Change Utilities

This directory implements core utility classes for controlling the CSS `will-change` property in EaseMotion CSS.

---

## What is Will Change?

The `will-change` property hints to the browser's rendering engine about how an element is expected to change.

By applying this property, the browser can set up graphic rendering pipeline optimizations (like promoting an element to its own GPU layer, pre-compiling WebGL/CSS shaders, or avoiding subtree cache invalidations) _before_ the transition actually begins. This is critical for eliminating dropped frames, stutters, and visual lag during heavy animations or scrolls.

> [!CAUTION]
> **Use sparingly!** `will-change` is a high-performance feature, but it is extremely CPU and GPU memory-intensive. Setting layer promotions on too many elements will cause the browser to exceed its graphic memory thresholds, resulting in severe lag, glitches, or complete browser crashes.

---

## Utility Classes Reference

EaseMotion CSS provides standard will-change configuration keys:

| Utility Class                    | CSS Equivalent                                | Description                                                                                 |
| :------------------------------- | :-------------------------------------------- | :------------------------------------------------------------------------------------------ |
| `.will-change-auto`              | `will-change: auto !important;`               | Default: browser applies standard rendering optimization paths.                             |
| `.will-change-scroll`            | `will-change: scroll-position !important;`    | Hints that the scroll position of the element will change.                                  |
| `.will-change-contents`          | `will-change: contents !important;`           | Hints that the content structure inside the element will change.                            |
| `.will-change-transform`         | `will-change: transform !important;`          | Promotes element to its own GPU composite layer (common for scaling, moving, or rotations). |
| `.will-change-opacity`           | `will-change: opacity !important;`            | Promotes element to its own alpha blending layer (common for fades).                        |
| `.will-change-filter`            | `will-change: filter !important;`             | Pre-compiles complex graphic filter shaders (common for blurs or contrast sweeps).          |
| `.will-change-transform-opacity` | `will-change: transform, opacity !important;` | Multi-hint optimization for compound scaling/fade transitions.                              |

---

## Core Guidelines & Best Practices

1. **Do not apply globally in CSS style sheets**: Applying `will-change` to all elements (e.g. `* { will-change: transform; }`) is a massive anti-pattern. Keep it constrained to specific components that undergo continuous animations.
2. **Apply in JavaScript dynamically**: The best way to use `will-change` is to turn it on _just before_ an animation starts (e.g. on `mouseenter` or `focus`), and turn it off (`will-change: auto`) immediately after the animation completes (on `transitionend`).
3. **Use on persistent animations**: If an element animates continuously (like a loop spinner, marquee track, or planetary orbit orb), applying a persistent `.will-change-transform` is highly recommended.

---

## Usage Examples

### 1. Persistent Orbit Spinner (Transform)

For elements that animate continuously, keep transform optimizations active:

```html
<div class="loading-spinner anim-loop-rotate will-change-transform">
  Loading...
</div>
```

### 2. JavaScript-based Dynamic Promotion

Apply the utility class on user hover to prepare the browser, and remove it on hover exit:

```javascript
const element = document.querySelector(".zoom-card");

element.addEventListener("mouseenter", () => {
  element.classList.add("will-change-transform");
});

element.addEventListener("mouseleave", () => {
  element.classList.remove("will-change-transform");
});
```

---

## Accessibility (WCAG 2.1) & Performance Benefits

- **Prevent Motion Sickness (Success Criterion 2.3.3)**: Jittery, dropping, or stuttering animations can trigger vestibular disorders, motion sickness, or seizures in sensitive users. Ensuring high, stable framerates (60fps to 120fps) using layer promotions significantly improves layout accessibility.
- **Maintain Low CPU Usage**: Smooth GPU composite overlays consume less power on mobile devices compared to continuous CPU style recalculations.

---

## Browser Compatibility Notes

- **Full support**: `will-change` is fully supported by all modern mobile and desktop browsers (Chrome, Firefox, Safari, Edge).

---

## Verification & Testing

Verify that your styles load correctly by launching `demo.html` in your web browser. Ensure the sandbox config panels trigger animations dynamically. Run standard project tests to confirm compliance:

```bash
npm test
```
