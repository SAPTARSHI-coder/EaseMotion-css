# CSS Scroll-Driven Lens Focus Text Reveal

A premium, modern scroll-driven typographic interaction that simulates a "lens focus" effect. As the user scrolls, a large headline transitions from a scaled-down, translucent, and heavily blurred state (`filter: blur(15px)`) to a sharp, fully focused, opaque, and slightly compressed state (`letter-spacing` compression) inside a central camera-like lens scope.

## What does this do?

It binds CSS animation keyframes directly to the viewport's scroll progress using the CSS Scroll-Driven Animations API. It creates a smooth lens focusing interaction entirely on the GPU thread, requiring **zero JavaScript**.

## How is it used?

The effect is achieved by defining a scroll timeline and binding the text container elements to the scroll progress:

```css
/* Enable animation-timeline tracking the root scrollbar */
@supports (animation-timeline: scroll()) {
  .lens-title {
    animation: focus-reveal linear both;
    animation-timeline: scroll(root);
  }
}
```

Add the classes and structure to your HTML markup:

```html
<div class="scroll-track">
  <div class="sticky-viewport">
    <div class="lens-scope"></div>
    <div class="lens-text-container">
      <h1 class="lens-title">Refraction</h1>
      <p class="lens-subtitle">Lens Focus Text Reveal</p>
    </div>
  </div>
</div>
```

## Why is it useful?

- **Highly Performant:** Running animations directly via CSS scroll-timelines offloads calculation to the browser's compositor thread, achieving 60fps/120fps scrolling free of main-thread JS stutters.
- **Pure CSS:** No scroll event listeners, resize listeners, or library overhead.
- **Graceful Fallbacks:** Automatically falls back to a clean, readable, static state for browsers that do not support scroll timelines.
- **Accessibility Friendly:** Supports `@media (prefers-reduced-motion: reduce)` by disabling scaling, blurring, and scroll animation, displaying the static focused state directly.

## Tech Stack

- HTML5
- CSS3 (Scroll-Driven Animations API, `@supports`, CSS Variables, CSS `@keyframes`)

## Preview

Open `demo.html` directly in a browser supporting scroll-driven animations (e.g. Chrome 115+, Edge 115+, Safari 17+) to see the live interaction.
