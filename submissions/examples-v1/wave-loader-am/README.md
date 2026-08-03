# Wave Loader (Corporate Design Pattern)

## 1. What does this do?

This component provides a clean, corporate-inspired wave loader showing a synchronized state transitions engine (Ready, Loading, Success) purely using CSS keyframes, animation delays, and progress-tracking variables.

## 2. How is it used?

Construct the wave loader grid using container divs and layout classes to style the bars, using radio button state bindings to control the transitions:

```html
<!-- State Controller -->
<input
  type="radio"
  id="state-loading"
  name="sync-state"
  class="state-control"
/>

<!-- Wave Loader Component Container -->
<div class="wave-loader">
  <span class="wave-bar" style="--delay: 0.1s; --color: #2563eb;"></span>
  <span class="wave-bar" style="--delay: 0.2s; --color: #3b82f6;"></span>
  <span class="wave-bar" style="--delay: 0.3s; --color: #60a5fa;"></span>
  <span class="wave-bar" style="--delay: 0.4s; --color: #93c5fd;"></span>
  <span class="wave-bar" style="--delay: 0.5s; --color: #60a5fa;"></span>
  <span class="wave-bar" style="--delay: 0.6s; --color: #3b82f6;"></span>
  <span class="wave-bar" style="--delay: 0.7s; --color: #2563eb;"></span>
</div>
```

## 3. Why is it useful?

It demonstrates how to build complex multi-state interactive modules (staggered delay wave effects, timed layout toggles, progress bar filling, and numeric percentage rendering) using pure, lightweight CSS styles without requiring any client-side JavaScript.
