# CSS Animation Performance Optimisation Guide

Welcome to the **CSS Animation Performance Optimisation Guide**! This comprehensive tutorial explains how to design, test, and profile CSS animations to achieve a locked 60 FPS (frames per second) by utilizing GPU-safe properties and avoiding layout recalculation bottlenecks.

---

## 📋 Table of Contents

1. [The 16.7ms Frame Budget](#1-the-167ms-frame-budget)
2. [The Browser Rendering Pipeline](#2-the-browser-rendering-pipeline)
3. [Main Thread vs. Compositor Thread](#3-main-thread-vs-compositor-thread)
4. [GPU-Safe vs. Reflow-Heavy CSS Properties](#4-gpu-safe-vs-reflow-heavy-css-properties)
5. [Layer Promotion with `will-change`](#5-layer-promotion-with-will-change)
6. [Step-by-Step Chrome DevTools Profiling](#6-step-by-step-chrome-devtools-profiling)

---

## 1. The 16.7ms Frame Budget

To render smooth motion, browsers target a refresh rate of **60 Hz** (60 updates per second). Mathematically, this gives the browser a frame budget of **16.67 milliseconds** per frame:

\[\text{Frame Budget} = \frac{1000\text{ ms}}{60\text{ frames}} \approx 16.67\text{ ms/frame}\]

If style computations, layout reflows, page repaints, and compositing take longer than 16.67ms, the browser drops the frame, resulting in visual stutter (jank).

---

## 2. The Browser Rendering Pipeline

When rendering pixels onto the screen, the browser executes a 5-step pipeline:

```text
[Parse HTML/CSS] ➔ [Style Recalculation] ➔ [Layout (Reflow)] ➔ [Paint (Repaint)] ➔ [Composite]
```

1. **JavaScript / CSS Style**: Style changes are triggered (e.g., transitions, class additions).
2. **Layout (Reflow)**: The browser calculates the geometry, width, height, and viewport position for every element on the page.
3. **Paint (Repaint)**: The browser fills in pixels, colors, text, borders, images, and shadows onto distinct layers.
4. **Composite**: The browser merges these layers together and draws them onto the screen.

To optimize performance, **bypass the Layout and Paint stages** entirely during animations.

---

## 3. Main Thread vs. Compositor Thread

- **Main Thread**: Runs JavaScript, computes CSS styles, executes Layout, and handles Paint. If your animations trigger layout changes, they block this thread, causing page interactions to feel sluggish.
- **Compositor Thread**: Operates independently from the main thread. It delegates layers directly to the GPU compositor. If an animation uses properties that can be composited directly, it runs smoothly on the GPU even if the main thread is busy with heavy JavaScript execution.

---

## 4. GPU-Safe vs. Reflow-Heavy CSS Properties

The following table outlines how different properties impact the browser rendering pipeline:

| Property           | Triggers Layout? | Triggers Paint? | Compositor Safe? | Recommendation                                                 |
| :----------------- | :--------------: | :-------------: | :--------------: | :------------------------------------------------------------- |
| `transform`        |      ❌ No       |      ❌ No      | **🟢 Yes (GPU)** | **Safe**: Use for scale, positioning, rotation                 |
| `opacity`          |      ❌ No       |      ❌ No      | **🟢 Yes (GPU)** | **Safe**: Use for fade transitions                             |
| `background-color` |      ❌ No       |   **⚠️ Yes**    |      ❌ No       | Avoid animating continuously                                   |
| `box-shadow`       |      ❌ No       |   **⚠️ Yes**    |      ❌ No       | **Expensive**: Animating shadows causes high CPU repaint loads |
| `top` / `left`     |    **🚨 Yes**    |   **⚠️ Yes**    |      ❌ No       | **Avoid**: Triggers reflows across the entire page layout      |
| `width` / `height` |    **🚨 Yes**    |   **⚠️ Yes**    |      ❌ No       | **Avoid**: Forces elements to recalculate their geometries     |

---

## 5. Layer Promotion with `will-change`

The `will-change` property tells the browser which properties are expected to change in the future, allowing the browser to promote the element to its own compositor layer ahead of time.

### Syntax

```css
.optimized-card {
  will-change: transform, opacity;
}
```

### Best Practices for `will-change`

- **Do Not Apply Globally**: Promoting too many elements to their own GPU layers leads to **layer exhaustion**, consuming device memory and degrading performance.
- **Add and Remove Dynamically**: If an element animates on hover, apply the hint when the user hovers over a parent element, or add/remove the class via JavaScript.

---

## 6. Step-by-Step Chrome DevTools Profiling

To profile animations and identify performance bottlenecks:

1. **Open DevTools**: Press `F12` in Chrome.
2. **Access the Rendering Drawer**:
   - Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on macOS) to open the Command Menu.
   - Type "Rendering" and select **Show Rendering**.
3. **Turn on Paint Flashing**:
   - Check the **Paint flashing** option.
   - Scroll your page or run the sandbox stress test. Repainted areas will flash green. Safe GPU animations will not flash, proving they bypass the Paint stage.
4. **Record a Performance Profile**:
   - Go to the **Performance** panel.
   - Click the **Record** button, interact with the animations for a few seconds, and click **Stop**.
   - Inspect the flame charts for long frame tasks (highlighted with red flags) and "Recalculate Style" or "Layout" blocks.
