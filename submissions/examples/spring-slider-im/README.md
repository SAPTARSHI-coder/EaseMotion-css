# Physics-Based Spring Slider (CSS @property)

## What does this do?
A range slider whose thumb and fill settle into position with realistic spring physics — overshoot and gentle settle, like a real spring — driven by CSS `@property` custom property interpolation rather than a JS animation loop. A native `<input type="range">` handles drag/keyboard interaction and accessibility; a tiny JS snippet syncs its value to a `--spring-offset` custom property, and the CSS transition engine does the rest.

## How to use it
```html
<div class="spring-slider">
  <input type="range" class="spring-slider-input" min="0" max="100" value="50">
  <div class="spring-slider-track">
    <div class="spring-slider-fill"></div>
    <div class="spring-slider-thumb"></div>
  </div>
</div>
```

```js
const input = document.querySelector('.spring-slider-input');
const thumb = document.querySelector('.spring-slider-thumb');
const fill  = document.querySelector('.spring-slider-fill');

input.addEventListener('input', () => {
  thumb.style.setProperty('--spring-offset', input.value);
  fill.style.setProperty('--spring-offset', input.value);
});
```

## How it works
```css
@property --spring-offset {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}

.spring-slider-thumb {
  transition: --spring-offset 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  left: calc(var(--spring-offset) * 1%);
}
```

`@property` registers `--spring-offset` as an animatable `<number>`, so the browser's transition engine can interpolate it the same way it interpolates `opacity` or `transform`. A `cubic-bezier` curve with a control point above 1.0 (e.g. `0.34, 1.56, 0.64, 1`) makes the interpolated value briefly overshoot its target before settling — the spring "boing" — entirely in CSS, with zero `requestAnimationFrame`.

## Variants
- `.spring-slider` — default spring (moderate overshoot)
- `.spring-slider--bouncy` — pronounced overshoot, longer settle (`cubic-bezier(0.18, 2.2, 0.32, 1)`, 0.8s)
- `.spring-slider--stiff` — minimal overshoot, quick settle (`cubic-bezier(0.34, 1.1, 0.64, 1)`, 0.35s)
- `.spring-slider--green/pink` — color variants via `--spring-color`

## Browser support & fallback
`@property` is supported in all major browsers (Chrome/Edge 85+, Firefox 128+, Safari 16.4+). Where unsupported, `--spring-offset` still works as a plain custom property — the slider functions normally, just without the spring-engine-level interpolation guarantee; the declared `transition` on `left`/`width` provides a standard eased fallback.

## Why it fits EaseMotion CSS
Spring physics are usually JS-only (Framer Motion, react-spring). `@property` lets the browser natively animate custom properties with overshoot easing — a genuinely advanced, modern CSS technique with no existing examples in the framework. The native `<input type="range">` underneath means full keyboard and screen-reader accessibility out of the box, and `prefers-reduced-motion` shortens transitions to near-instant.
