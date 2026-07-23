# Component: ease-smooth-scroll-to-top

**Category:** Component — Scroll & Navigation  
**Type:** Pure CSS (with Lightweight JS Fallback)  
**Folder:** `submissions/examples/ease-smooth-scroll-to-top/`

---

## What does this do?
Implements a fixed scroll-to-top button with a circular progress indicator. The button fades in as the user scrolls down, and the outer ring fills dynamically indicating overall page scroll progress. Clicking the button scrolls the viewport back to the top.

---

## How is it used?

Include the top target anchor and button elements inside your HTML document:

```html
<!-- Scroll Target at the very top of body -->
<div id="top"></div>

<!-- Scroll to Top Component -->
<a href="#top" class="ease-scroll-to-top" aria-label="Scroll to top">
  <!-- Progress Ring Canvas -->
  <svg class="ease-scroll-to-top-progress" viewBox="0 0 36 36">
    <circle class="ease-scroll-to-top-progress-bg"></circle>
    <circle class="ease-scroll-to-top-progress-bar"></circle>
  </svg>
  
  <!-- Central Arrow Core -->
  <div class="ease-scroll-to-top-btn">
    <svg class="ease-scroll-to-top-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </div>
</a>
```

Ensure `html { scroll-behavior: smooth; }` is active in your styles to execute smooth scroll transitions natively.

---

## Why is it useful?

1. **Native CSS Scroll Timelines:** On modern browsers, the button fade-in and the circular path ring fill are driven entirely in the browser's compositor thread via `@supports (animation-timeline: scroll())`. This results in zero layout reflows and smooth 60fps renders.
2. **Lightweight Fallback System:** Incorporates a tiny, fallback JavaScript script that only fires if CSS scroll timelines are unsupported (e.g. on older browsers), ensuring complete cross-browser reliability.
3. **Hover Spring Feedbacks:** Hovering over the button triggers a scaling bounce transition on the core circle, and initiates a subtle vertical oscillation bounce on the inner arrow icon.
4. **Accessibility Built-in:** Supports prefers-reduced-motion profiles by freezing loop animations, disabling scale triggers, and rendering progress rings fully filled.

---

## Modifier Classes

| Class Name | Target Element | Description |
|---|---|---|
| `.ease-scroll-to-top` | Container Anchor | Base button container. Sets fixed position coordinates. |
| `.ease-scroll-to-top--visible` | Container Anchor | Helper class to force button display on non-scroll-timeline browsers. |
| `.ease-scroll-to-top-progress` | SVG canvas wrapper | Rotates progress path vector alignment to start loading from top center. |
| `.ease-scroll-to-top-progress-bar` | SVG progress circle | The animating dash path that tracks overall scroll percentage. |
| `.ease-scroll-to-top-btn` | Inner Circle Button | Core click surface. Adjusts background fills, hover triggers, and shadow glows. |

---

## Customization (CSS Variables)

Style variables are declared in `:root` to allow easy custom overrides:

```css
:root {
  --ease-scroll-accent: #6366f1;                 /* Active progress bar stroke color */
  --ease-scroll-accent-hover: #4f46e5;           /* Hover accent button background color */
  --ease-scroll-bg: #1e293b;                     /* Central button background fill */
  --ease-scroll-color: #ffffff;                  /* Arrow stroke color */
  --ease-scroll-size: 52px;                      /* Button height/width boundary bounds */
  --ease-scroll-ring-size: 3.5px;                /* Stroke width thickness on SVG rings */
}
```
