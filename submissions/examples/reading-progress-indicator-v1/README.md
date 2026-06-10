# Reading Progress Indicator Component

## What does this do?
The Reading Progress Indicator displays a thin, elegant, high-contrast bar at the top of the viewport that fills horizontally as the user scrolls, giving immediate visual feedback on reading progress.

---

## How is it used?
Attach the progress bar element directly at the root of the document, and configure its parameters via standard CSS variables:

### HTML Structure
```html
<!-- Positioned at the very top of the body -->
<div class="reading-progress-bar"></div>
```

### CSS Customization
```css
:root {
  --reading-bar-height: 4px;                  /* Thickness of the indicator */
  --reading-bar-color-start: #6c63ff;         /* Gradient start accent */
  --reading-bar-color-end: #f43f5e;           /* Gradient end accent */
  --reading-bar-glow: rgba(108, 99, 255, 0.4);/* Shadow glow color */
}
```

---

## Why is it useful?
It aligns perfectly with EaseMotion CSS's philosophy by using browser-native capabilities to handle motion efficiently:

* **Human-Readable:** It uses straightforward, well-documented custom properties and standards-compliant syntax.
* **Animation-First:** The animation is bound directly to the viewport scroll timeline using native CSS `@supports (animation-timeline: scroll())` rules, eliminating layout reflows and jank.
* **Composable:** Developers can drop it into any page layout, customize variables on the fly, and change position (top or bottom) effortlessly.
* **Practical:** It degrades gracefully. On browsers without native scroll-timeline support, it falls back to a lightweight vanilla JavaScript event listener, ensuring seamless functionality across Safari, Firefox, and mobile engines.

---

## Included Files

* **[demo.html](file:///d:/github/EaseMotion-css/submissions/examples/reading-progress-indicator/demo.html):** A complete long-form article demonstration that includes an interactive theme customizer to view the progress bar in various styles, heights, and positions.
* **[style.css](file:///d:/github/EaseMotion-css/submissions/examples/reading-progress-indicator/style.css):** The complete responsive layout, typography, modern CSS scroll-driven animation rules, and fallback transition styles.
* **[README.md](file:///d:/github/EaseMotion-css/submissions/examples/reading-progress-indicator/README.md):** Documentation detailing implementation, usage, and accessibility guidelines.

---

## Usage Notes

This component is highly suitable for:
* **Developer Documentation & Knowledge Bases:** Keeps readers motivated through technical guides.
* **Blogs & Editorial Platforms:** Provides a subtle visual metric for long-form essays.
* **Online Tutorials & Classrooms:** Measures learning pacing inside interactive content.

---

## Accessibility Considerations

* **Reduced Motion:** If a user prefers reduced motion, the indicator is completely disabled using a `@media (prefers-reduced-motion: reduce)` media query.
* **Contrast Ratios:** Uses vivid, distinguishable color gradients that stand out clearly against both dark and light background interfaces.
* **Elegant Height:** Keep height between `2px` and `4px` to remain informative without distracting the reader or covering valuable content.
