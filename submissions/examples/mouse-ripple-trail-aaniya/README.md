# Ease Ripple Trail

## What does this do?
A glowing purple droplet ripple trail that smoothly follows the user's cursor across the page, without blocking clicks, text selection, or any other page interaction.

## How is it used?
```html
<div class="ease-ripple-container" id="rippleContainer"></div>
```
Include the container once near the top of `<body>`, then include `style.css` and the pointer-tracking script from `demo.html`. Each `.ease-ripple-dot` span is created dynamically on `pointermove` and removed automatically after its fade animation ends (`animationend` listener), so there's no DOM node buildup during long sessions.

## Why is it useful?
It's a lightweight, purely decorative motion layer that reinforces EaseMotion CSS's fluid, motion-first design philosophy on the landing page. Mouse movement is throttled (~40ms) to avoid flooding the DOM or straining the browser's main thread, and the layer uses `pointer-events: none` so it never interferes with real page interaction — buttons, links, and text selection all keep working normally underneath it.
