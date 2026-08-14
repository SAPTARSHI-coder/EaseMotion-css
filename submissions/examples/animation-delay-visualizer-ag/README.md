# CSS Animation Delay Visualizer

## What does this do?
An interactive visualizer that demonstrates how the CSS `animation-delay` property staggers animations of multiple elements to create sequenced motion.

## How is it used?
Apply staggered `animation-delay` styles to sequential HTML elements using raw CSS or inline custom properties:

```html
<div class="animation-container">
  <div class="animated-element" style="animation-delay: 0s;">Element 1</div>
  <div class="animated-element" style="animation-delay: 0.5s;">Element 2</div>
  <div class="animated-element" style="animated-element" style="animation-delay: 1.0s;">Element 3</div>
  <div class="animated-element" style="animation-delay: 1.5s;">Element 4</div>
</div>
```

```css
.animated-element {
  animation: slide-right 2s ease infinite;
}
```

## Why is it useful?
Understanding and visualizing `animation-delay` is critical to crafting professional, organic, and polished user interfaces. By staggering elements (such as list entries, menu headers, or card grids), developers avoid visual overload and draw the user's attention progressively. 

This demo supports the **EaseMotion CSS** philosophy of simple, accessible, high-performance web animations by teaching developers the basics of CSS-based timeline coordination.

## Tech Stack
- HTML5
- CSS3 (Vanilla CSS, Custom Variables, prefers-reduced-motion media query)
- JavaScript (Minimal Vanilla JS for interactive controls and timeline replay)

## Preview
Open [demo.html](demo.html) directly in any modern browser to interact with the visualizer.
