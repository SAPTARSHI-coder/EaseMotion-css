# Range Slider

A custom-styled brightness slider whose fill track, glowing orb, and preview panel all respond live to the thumb position.

## How is it used?

Reset the native range's chrome and style the fill from a custom property:

```html
<input type="range" id="brightness" class="range" min="0" max="100" value="70">
```

```css
.range {
  -webkit-appearance: none;
  appearance: none;
  background: linear-gradient(90deg, #8b5cf6 var(--fill, 70%), #334155 var(--fill, 70%));
}
.range::-webkit-slider-thumb { /* custom thumb */ }
```

```js
slider.style.setProperty('--fill', pct + '%');
```

The `input` event sets `--fill` for the track and, in the demo, recomputes the orb's HSL gradient, glow, and panel tint.

## Why is it useful?

Native range inputs are notoriously plain, and a styled slider instantly lifts a settings panel. This component shows the cross-browser recipe — `appearance: none`, `::-webkit-slider-thumb` and `::-moz-range-thumb` — plus a live data binding that demonstrates how animation and state can feed off the same property, keeping the example both simple and expressive.
