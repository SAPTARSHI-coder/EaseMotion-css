# JavaScript Count-Up Fallback (-pr)

This submission addresses the browser compatibility issue with the CSS `@property` count-up animation by providing a robust JavaScript fallback.

## What does this do?

It uses `requestAnimationFrame` to smoothly animate numbers from 0 to a target value, mimicking the CSS `ease-count-up` utility but working perfectly on older browsers (Safari <16.4, Firefox <117) that do not support the `@property` CSS feature.

## How is it used?

```html
<div class="js-count-up" data-target="2026" data-duration="2000">0</div>
<script src="ease-count.js"></script>
```

## Why is it useful?

It provides crucial backward compatibility for a core animation feature, and it respects accessibility guidelines by skipping the animation entirely if `prefers-reduced-motion` is enabled!
