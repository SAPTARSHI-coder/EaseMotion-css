# Container Query Responsive Animations

## Overview

Container Queries are a modern CSS feature that allows developers to style elements based on the dimensions of their parent container rather than the overall browser viewport (which is what Media Queries target). By establishing a containment context on a parent element, child elements can query that parent's width, height, inline-size, or block-size, allowing the components to adapt their layouts, typography, and even animations dynamically.

## Motivation

Traditional viewport-based media queries fail in modern modular architectures. A reusable card component should look and behave perfectly whether it is placed in a narrow sidebar, a medium grid column, or a full-width hero layout. Component-based responsiveness enables true encapsulation:
* **True Reusability:** The component contains its own responsive rules and behaves correctly wherever it is embedded.
* **Granular Control:** Animations and styles scale fluidly based on the actual available layout space rather than the screen size of the device.
* **Design System Alignment:** Comports perfectly with modern component-driven development models (e.g., React, Vue, Web Components) and modular CSS libraries like EaseMotion CSS.

## Features

* **Small Container Animation:** Optimized for spaces $\le$ 300px width. Employs subtle scaling and short translation offsets to keep the animation clean and readable in tight bounds.
* **Medium Container Animation:** Optimized for spaces between 301px and 600px width. Features moderate movement and standard scaling.
* **Large Container Animation:** Optimized for spaces $\ge$ 601px width. Features expanded horizontal layout, wider scaling factors, and stronger translation distance.
* **Pure CSS Implementation:** Built with zero JavaScript or external dependencies, ensuring optimal rendering speed and lightweight execution.

## How It Works

This demo leverages modern CSS Container Queries to inject custom animation parameters based on the parent's width:

1. **Defining the Containment Context:**
   The parent container is registered as a container query context using `container-type`:
   ```css
   .container {
     container-type: inline-size;
   }
   ```
   This instructs the browser to track the inline-size (width in horizontal writing modes) of this element.

2. **Scoping Container Queries:**
   We apply `@container` rules to query the containment context:
   ```css
   @container (max-width: 300px) { ... }
   @container (min-width: 301px) and (max-width: 600px) { ... }
   @container (min-width: 601px) { ... }
   ```

3. **Dynamic Parameter Overrides & Keyframe Animations:**
   Instead of defining multiple duplicate `@keyframes`, we use CSS custom properties (variables) inside a single, high-performance animation. The container queries simply redefine the values of these variables:
   ```css
   @keyframes responsive-pulse {
     0% {
       transform: translate3d(0, 0, 0) scale(var(--scale-start, 0.9));
     }
     100% {
       transform: translate3d(var(--translate-x, 15px), var(--translate-y, -8px), 0) scale(var(--scale-end, 1.1));
     }
   }
   ```
   By overriding `--translate-x`, `--translate-y`, `--scale-start`, and `--scale-end` inside the `@container` blocks, the element adapts its motion parameters on the fly.

## Demo Structure

The demo page features three instances of the same animated core component:
* **Small Container:** Sized to 280px to trigger the small container query.
* **Medium Container:** Sized to 520px to trigger the medium container query.
* **Large Container:** Sized to 850px to trigger the large container query.

Opening `demo.html` in your browser will display all three containers side-by-side or stacked, proving that the exact same HTML component adapts its styling and animation path dynamically.

## Browser Support

CSS Container Queries are fully supported across all modern evergreen browsers:
* Google Chrome 105+
* Microsoft Edge 105+
* Mozilla Firefox 110+
* Apple Safari 16+

For older browsers, they will degrade gracefully to the base component styling without the query-based enhancements.

## Future Enhancements

* **Container Query Units:** Introduce `cqw` (container query width) and `cqh` (container query height) units for fluid font sizes and margins inside the card.
* **Scroll-Driven Container Animations:** Combine container queries with CSS Scroll-Driven Animations to drive component state transitions based on container-relative scroll progress.
