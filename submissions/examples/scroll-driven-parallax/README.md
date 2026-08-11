# Scroll-Driven Parallax Depth Animation

This directory contains a standalone, advanced CSS-only example showcasing how to build a **multi-layered parallax depth scene** and **interactive scroll-reveal components** using modern CSS Scroll-Driven Animations.

---

## 🌟 What This Demo Demonstrates

1. **Multi-Layered Parallax Scenery**:
   A 3D scenic hero section featuring a starry sky background, far peaks, midground peaks, atmospheric fog, and a foreground ridge. Each layer is animated at a different speed ratio relative to the page's scroll position, establishing an illusion of physical depth.
2. **Scroll Progress Tracking**:
   A top-anchored progress bar that stretches across the viewport as you scroll, representing the scroll position of the entire document.
3. **Scroll-linked View Reveal (Bento Grid)**:
   A set of information cards that dynamically scale, rotate, and fade in as they intersect with the user's viewport using `view()` timelines.
4. **Interactive 3D Exploded Layer Preview**:
   A hover-triggered visual explainer showing how the 2D layered graphics split apart along the virtual Z-axis in 3D perspective.
5. **No JavaScript, Core-composited Performance**:
   All animations run directly on the browser's compositor thread, bypassing JavaScript event overhead, layout thrashing, and repaints.
6. **Graceful Fallbacks & Accessibility (prefers-reduced-motion)**:
   A design that falls back to clean, static typography and grids for browsers without scroll timeline support or for users with active reduced-motion settings.

---

## 📐 How the Parallax Depth Effect Works

When a user scrolls down by $S$ pixels, the browser normally moves all elements on the page up relative to the viewport at a **1:1 speed ratio** (i.e., translating by $-S$ pixels).

To create depth, we apply keyframed transformations that translate the elements in the direction of scroll (positive `translateY`) or opposite to the scroll (negative `translateY`) over the scrollable range:

- **Background (Moon & Sky)**: Moves **down** (+45% of scroll height). It scrolls $45\%$ slower than normal, creating the impression of being infinitely far away.
- **Far Mountains**: Moves **down** (+25% of scroll height). Scrolls $25\%$ slower.
- **Middleground Mountains**: Moves **down** (+15% of scroll height). Scrolls $15\%$ slower.
- **Foreground Ridge**: Moves **up** (-5% of scroll height). Scrolls $5\%$ faster, making it feel very close and tactile.
- **Hero Content**: Moves **up** (-160px) and fades out quickly to clear the space before the content sections appear.

---

## ⚙️ CSS Scroll-Driven Animation Mechanics

### 1. `animation-timeline`

The `animation-timeline` property links the progress of standard CSS `@keyframes` animations to a scrollable container instead of a time clock.

- `scroll()`: Links progress to the nearest scrollable container (usually the viewport/root document). Used for the scroll progress bar and hero layers.
- `view()`: Links progress to the visibility of a specific element within the scrollport (when it enters and exits the viewport). Used to trigger the Bento Grid cards as they reveal on scroll.

### 2. `animation-range`

The `animation-range` property determines at what scroll offset the animation starts (0% progress) and ends (100% progress).

- **Hero Parallax Range**:
  ```css
  animation-range: 0px 100vh;
  ```
  This restricts the parallax scroll animation to run only during the first `100vh` (the height of the hero banner). Once scrolled past `100vh`, the layers lock in their final states, preventing overlapping with sections below.
- **Bento Card Reveal Range**:
  ```css
  animation-range: entry 15% cover 45%;
  ```
  This maps the reveal animation from when the card enters $15\%$ into the bottom of the viewport until it covers $45\%$ of the scrollport height.

---

## ♿ Accessibility & Reduced Motion

For users experiencing vestibular disorders or motion sickness, parallax effects can cause discomfort. We handle this dynamically by querying user system preferences:

```css
@media (prefers-reduced-motion: reduce) {
  .scroll-progress {
    animation: none !important;
    animation-timeline: none !important;
    transform: none !important;
  }
  .parallax-layer {
    animation: none !important;
    animation-timeline: none !important;
    transform: none !important;
  }
  .bento-card {
    animation: none !important;
    animation-timeline: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
  /* Stablize the 3D Exploded scene to a flat accessible stack */
  .exploded-scene {
    perspective: none;
    transform-style: flat;
    display: flex;
    flex-direction: column;
  }
}
```

In reduced-motion mode, all scroll-driven translations, perspective transformations, and opacity reveals are disabled. Elements default to a highly legible, premium static presentation.

---

## 🌐 Browser Compatibility & Fallbacks

- **Supported Browsers**: Google Chrome, Microsoft Edge, Opera (versions 115+), and other Chromium-based browsers support `animation-timeline` and `animation-range` natively.
- **Unsupported Browsers (Safari / Firefox)**: Safari and Firefox do not currently support these properties by default (Firefox support is available behind the `layout.css.scroll-driven-animations.enabled` flag).
- **Fallback Strategy**:
  We use the `@supports (animation-timeline: scroll())` query in CSS to encapsulate scroll-linked behaviors. Unsupported browsers display the page statically with standard readable columns and static layers. A top banner also informs the user of their browser support state in a clean, non-intrusive way.
