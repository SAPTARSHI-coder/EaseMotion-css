# CSS Animation Chaining Utilities

A set of premium animation chaining utility classes that coordinate multiple sequential CSS transitions (Fade, Bounce, Pulse, Slide, Rotate, Scale) on a single element.

## Questions for Contributing Guide

### 1. What does this do?
This submission implements CSS animation chaining utilities (`ease-chain-fade-bounce-pulse`, `ease-chain-slide-rotate-scale`, and `ease-chain-zoom-fade-bounce`) to execute sequence chains (Segment 1 ➔ Segment 2 ➔ Segment 3) in a specific order using native CSS properties.

### 2. How is it used?
Apply the class directly to any HTML element. The component expects timing customization variables declared on the element or in your stylesheet.

```html
<div class="ease-chain-fade-bounce-pulse">
  Sequentially Fades, Bounces, and then Pulses!
</div>
```

```css
:root {
  /* Timing configuration */
  --ease-chain-duration: 0.8s; /* duration of each segment */
  --ease-chain-gap: 0.2s;      /* gap delay between segments */
  --ease-chain-repeat: 1;      /* repeat count: 1, 2, or infinite */
}
```

### 3. Why is it useful?
In premium web design, multi-stage entry animations are normally driven by heavy JavaScript libraries (like GSAP or Framer Motion). This utility allows developers to achieve highly orchestrated multi-step sequences using pure, hardware-accelerated CSS with full customization and accessibility control.

---

## Available Variants

| Class Name | Animation Steps | Property Targets |
|------------|-----------------|------------------|
| `.ease-chain-fade-bounce-pulse` | Fade ➔ Bounce ➔ Pulse | `opacity`, `translate`, `scale` |
| `.ease-chain-slide-rotate-scale` | Slide ➔ Rotate ➔ Scale | `translate`/`opacity`, `rotate`, `scale` |
| `.ease-chain-zoom-fade-bounce` | Zoom ➔ Fade Cycle ➔ Bounce | `scale`/`opacity`, `opacity`, `translate` |

---

## How Sequential Timing Works

To prevent animation segments from overlapping, we calculate delays based on the index position of each step:
- **Step 1 (Index 0)**: Starts immediately with `delay = 0s`.
- **Step 2 (Index 1)**: Delays until Step 1 is finished plus the gap:
  `delay = calc(var(--ease-chain-duration) + var(--ease-chain-gap))`
- **Step 3 (Index 2)**: Delays until Step 2 is finished:
  `delay = calc(2 * var(--ease-chain-duration) + 2 * var(--ease-chain-gap))`

By utilizing CSS `calc()` combined with modern independent properties (`translate`, `rotate`, `scale`, and `opacity`), the browser computes the exact animation delays dynamically. Since separate CSS properties are targeted, there is no cascading property conflict between segments.

---

## Customization Guide

Override variables on your class container to modify speeds:

```css
.my-custom-card {
  --ease-chain-duration: 0.5s;
  --ease-chain-gap: 0.1s;
  --ease-chain-repeat: infinite;
}
```

---

## Accessibility Support

- **Vestibular Motion Safety**: When `prefers-reduced-motion: reduce` is detected, all animations are immediately bypassed, rendering elements static and fully visible to prevent motion-induced discomfort.
  ```css
  @media (prefers-reduced-motion: reduce) {
    .ease-chain-fade-bounce-pulse,
    .ease-chain-slide-rotate-scale,
    .ease-chain-zoom-fade-bounce {
      animation: none !important;
      translate: none !important;
      rotate: none !important;
      scale: none !important;
      opacity: 1 !important;
    }
  }
  ```
