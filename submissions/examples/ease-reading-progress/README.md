# CSS Reading Progress Bar (Scroll-Driven)

A modern, highly performant reading progress bar that perfectly syncs with the user's scroll position without using a single line of JavaScript. Built for **EaseMotion CSS**.

## 🚀 Features

- **Zero JavaScript:** Completely eliminates the need for expensive `window.addEventListener('scroll')` functions.
- **Compositor Thread Performance:** Because it uses the native `animation-timeline` API, the browser calculates the progress off the main thread, preventing layout thrashing and guaranteeing buttery-smooth 60fps animations.
- **Minimal CSS:** Achieved using just a few lines of modern CSS.
- **Graceful Degradation:** Includes a `@supports not (animation-timeline: scroll())` fallback to quietly hide the bar on older browsers rather than showing a broken layout.
- **Accessibility:** Honors `@media (prefers-reduced-motion: reduce)` by disabling the tracker for users who are sensitive to persistent screen movement.

## 🛠️ Usage

### 1. HTML Structure

Simply place the progress bar `div` at the top of your `<body>`.

```html
<body>
    <div class="ease-reading-progress" aria-hidden="true"></div>
    
    <!-- Your page content goes here -->
    <main>...</main>
</body>