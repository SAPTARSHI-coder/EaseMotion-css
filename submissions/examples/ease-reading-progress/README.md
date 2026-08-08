# Ease Reading Progress

## 1. What does this do?
The `ease-reading-progress` component creates a native reading progress bar fixed at the top of the browser window. It automatically tracks the document's scroll position in real time using pure CSS Scroll-Driven Animations (`scroll(root block)`), scaling the progress bar dynamically from 0% to 100% as the user scrolls through the page.

## 2. How is it used?

Include the CSS class in your HTML template:
```html
<div class="ease-reading-progress"></div>
```

Integrate the keyframes and animation timeline in your stylesheet:
```css
@keyframes ease-scale-progress {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

.ease-reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  transform-origin: 0 50%;
  z-index: 1000;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
  animation: ease-scale-progress auto linear forwards;
  animation-timeline: scroll(root block);
}
```

## 3. Why is it useful?
This approach permanently eliminates the need for expensive JavaScript `scroll` event listeners or `requestAnimationFrame` loops that continuously calculate `window.scrollY` and apply style changes to DOM nodes. By delegating scroll-timeline tracking directly to the browser's native CSS animation engine on the compositor thread, it eliminates main-thread layout thrashing, avoids jank, and provides silky-smooth 60+ FPS performance.
