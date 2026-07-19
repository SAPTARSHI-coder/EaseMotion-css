# Progressive Enhancement Fallback for Scroll-Driven Progress Bars

## What does this do?

This feature enhances EaseMotion's fixed scroll-driven progress bar by adding a robust, lightweight fallback for viewports that do not support native CSS scroll animations (e.g. Safari on iOS and older desktop browsers).

By default, the progress bar uses pure CSS scroll timeline animations when supported. In unsupported viewports, a passive, performance-optimized JavaScript event listener automatically computes scroll offsets and updates a CSS custom property (`--scroll-percentage`), allowing the progress bar to render smoothly across 100% of browsers.

## How is it used?

Add the progress bar element to your page structure:

```html
<!-- The progress bar component -->
<div class="ease-scroll-progress ease-scroll-progress-root"></div>
```

Include the lightweight fallback script before the closing `</body>` tag:

```html
<!-- Passive fallback script (runs only if native scroll timelines are unsupported) -->
<script src="scroll-progress-fallback.js"></script>
```

### Variations and Classes

You can customize the styling of the progress bar by adding modifier classes:

| Class / Attribute                   | Type           | Description                                                               |
| ----------------------------------- | -------------- | ------------------------------------------------------------------------- |
| `.ease-scroll-progress`             | Base Class     | Standard scroll progress bar styled with default primary theme            |
| `.ease-scroll-progress-root`        | Scope Class    | Explicitly binds the scroll timeline to the document root (page scroll)   |
| `.ease-scroll-progress-success`     | Theme Modifier | Success gradient theme (green palette)                                    |
| `.ease-scroll-progress-danger`      | Theme Modifier | Danger gradient theme (red palette)                                       |
| `.ease-scroll-progress-warning`     | Theme Modifier | Warning gradient theme (amber palette)                                    |
| `.ease-scroll-progress--thin`       | Size Modifier  | Reduces height to `2px`                                                   |
| `.ease-scroll-progress--thick`      | Size Modifier  | Increases height to `8px`                                                 |
| `style="--ease-scroll-color: #..."` | Style Override | Sets a custom theme color for the progress bar background and shadow glow |

## Why is it useful?

1. **Seamless Graceful Degradation:** Native CSS scroll timelines (`animation-timeline: scroll()`) are highly performant but lack universal support. This progressive enhancement ensures that EaseMotion's premium components look functional on older browsers without breaking.
2. **GPU Accelerated Fallback:** The fallback uses `transform: scaleX()` rather than modifying `width` or `left`. Because scaling runs on the GPU composite layer, animations remain extremely smooth, preventing main-thread layout recalculation jank.
3. **WCAG 2.1 Accessibility Compliant:** If a user specifies a reduced motion preference (`prefers-reduced-motion: reduce`), the JavaScript event listeners disable themselves and the CSS displays a static full-width indicator, fully respecting user accessibility choices.
4. **Passive Listeners:** The fallback uses passive scroll and resize listeners (`{ passive: true }`) so that page scrolling is never delayed by layout calculations.

## Tech Stack

- HTML
- CSS (custom properties, keyframe animations, `@supports` queries)
- JavaScript (lightweight passive scroll/resize tracker)

## Preview

Open `demo.html` directly in your browser to interact with the progressive enhancement modes, change color themes, adjust thickness, and simulate the JavaScript fallback.
