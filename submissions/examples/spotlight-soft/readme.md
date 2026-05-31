# ease-spotlight-soft

A CSS-only spotlight / torch effect that follows cursor position. Drop a single class onto any full-bleed section to get a smooth, cinematic flashlight experience with zero dependencies.

---

## Preview

Dark overlay covers the scene. As the cursor moves, a warm radial gradient cuts through the darkness — revealing content beneath like a real handheld torch. The falloff uses layered mask gradients to create soft, realistic light attenuation rather than a hard-edged circle.

---

## Usage

```html
<link rel="stylesheet" href="path/to/style.css" />

<section class="ease-spotlight-soft" id="my-scene">
  <!-- your content here -->
</section>
```

Add the cursor tracker (≈15 lines, no library required):

```js
const scene = document.getElementById('my-scene');

scene.addEventListener('mousemove', (e) => {
  const rect = scene.getBoundingClientRect();
  scene.style.setProperty('--x', `${e.clientX - rect.left}px`);
  scene.style.setProperty('--y', `${e.clientY - rect.top}px`);
});

// Touch support
scene.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const t = e.touches[0];
  const rect = scene.getBoundingClientRect();
  scene.style.setProperty('--x', `${t.clientX - rect.left}px`);
  scene.style.setProperty('--y', `${t.clientY - rect.top}px`);
}, { passive: false });
```

That's it. No canvas, no WebGL, no JS animation libraries.

---

## Features

- **Pure CSS effect** — `::before` / `::after` pseudo-elements with `mask-image` and `radial-gradient`
- **Warm torch bloom** — secondary glow layer tinted with `--spotlight-color` simulates real light emission
- **Smooth tracking** — `transition-duration: 0.06s linear` keeps motion tight without lag
- **Layered falloff** — four-stop mask gradient produces a natural penumbra, not a sharp disc
- **Grain texture** — inline SVG noise adds cinematic depth at zero network cost
- **Touch-ready** — `touchmove` handler ships in the demo; easy to copy
- **Reduced motion** — respects `prefers-reduced-motion` by disabling transitions
- **Responsive** — spotlight size shrinks on mobile via a `@media` override

---

## Customisation

Override any variable on `.ease-spotlight-soft` or inline on the element:

| Variable              | Default    | Description                              |
|-----------------------|------------|------------------------------------------|
| `--spotlight-size`    | `380px`    | Radius of the transparent reveal zone   |
| `--spotlight-opacity` | `0.92`     | Darkness of the overlay at full cover    |
| `--spotlight-blur`    | `48px`     | Softness of the warm bloom layer         |
| `--spotlight-color`   | `#fff8e7`  | Tint of the torch glow                   |

```css
/* Wider, cooler spotlight */
.my-hero {
  --spotlight-size:  520px;
  --spotlight-color: #dce8ff;
  --spotlight-blur:  64px;
}

/* Tight, dramatic */
.my-hero {
  --spotlight-size:    200px;
  --spotlight-opacity: 0.97;
  --spotlight-blur:    24px;
}
```

---

## How It Works

Two pseudo-elements stack on top of the content:

1. **`::before` — the darkness mask**
   A solid overlay the colour of the page background. Its `mask-image` property cuts a transparent circle at `(--x, --y)` with a multi-stop radial gradient. The stops are tuned so the centre is fully clear, the midground has a gentle fog, and the edges are opaque — exactly how a real flashlight falls off.

2. **`::after` — the warm bloom**
   A smaller `radial-gradient` in `--spotlight-color` with heavy `blur()`. This sits above the mask layer and mimics the backscatter/halo you see around a real torch in dusty air.

Both layers read `--x` and `--y` which the minimal JS snippet updates on `mousemove`. The transition on both pseudo-elements (`0.06s linear`) adds just enough damping to feel smooth on fast swipes without visible lag.

---

## File Structure

```
submissions/examples/spotlight-soft/
├── demo.html   ← self-contained showcase
├── style.css   ← utility class + demo chrome
└── README.md
```

The utility itself is the `.ease-spotlight-soft` block and its two pseudo-elements (~35 lines). Everything else in `style.css` is layout and typography for the demo page.

---

## Browser Support

Works in all browsers that support CSS `mask-image` with `radial-gradient` — Chrome 49+, Firefox 53+, Safari 15.4+, Edge 79+. For older targets, the overlay simply renders as a solid dark layer (graceful degradation — content is still readable).

---

## Contributing

Part of [EaseMotion CSS](https://github.com/your-org/easemotion-css) · GSSoC contribution  
One utility per PR · Do not modify `core/` or `components/`