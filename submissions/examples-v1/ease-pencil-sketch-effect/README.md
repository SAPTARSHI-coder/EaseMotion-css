# Ease Pencil Sketch Effect (`<ease-pencil-sketch-effect>`)

A dependency-free, self-contained, and highly accessible web component that converts any image into a live, interactive pencil-sketch effect in the browser. It leverages the HTML5 Canvas 2D API for hardware-accelerated processing (grayscale conversion, edge detection, and composite blending) without requiring external image libraries or a build step.

## Features

- **Shadow DOM Isolation**: Completely self-contained styles and structure.
- **Double Image Input**: Supports loading via a `src` attribute or parsing a slotted light-DOM `<img>` child.
- **Side-by-Side Comparison Slider**: Highly responsive split-pane screen showing original on the left and sketch on the right.
- **Dual Drawing Mediums**: 
  - `pencil` (Default): Sharp, fine lines capturing pencil draft layouts.
  - `charcoal`: Broad, soft shading over a custom procedural paper grain pattern.
- **High Performance / Lazy Rendering**: Non-blocking image loading and processing using `requestAnimationFrame`, with automatic safety scaling cap (1600px) for ultra-large photos.
- **Full Keyboard Accessibility**: Fully focusable slider, operable using arrow keys, with a distinct visual focus-ring.
- **Reduced Motion Support**: Transition durations and animations are disabled or slowed down according to the user's `prefers-reduced-motion` settings.
- **Robust Error Catching**: Built-in visual fallbacks for broken source URLs and SecurityError exceptions resulting from CORS-tainted canvas contexts.

---

## Installation

Simply copy `ease-pencil-sketch-effect.js` and `style.css` to your submission folder and include the module in your HTML.

```html
<script type="module" src="./ease-pencil-sketch-effect.js"></script>
```

---

## Usage

### Method 1: Using the `src` Attribute
```html
<ease-pencil-sketch-effect 
  src="portrait.jpg" 
  intensity="60" 
  mode="charcoal">
</ease-pencil-sketch-effect>
```

### Method 2: Slotted Light-DOM Image
```html
<ease-pencil-sketch-effect intensity="45">
  <img src="landscape.jpg" alt="A quiet forest" />
</ease-pencil-sketch-effect>
```

---

## API Reference

### Attributes

| Attribute | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `src` | String | `""` | Source URL of the target image to process. |
| `intensity` | Number | `50` | Controls sketch darkness and outline density (Range: `0` to `100`). |
| `mode` | String | `"pencil"` | Drawing style variant: `"pencil"` (clean lines) or `"charcoal"` (dark grain). |

### JavaScript Properties
Reflects observed attributes in real-time. Can be modified programmatically:

```javascript
const el = document.querySelector('ease-pencil-sketch-effect');

// Setters
el.src = 'new-image.jpg';
el.intensity = 80;
el.mode = 'charcoal';

// Getters
console.log(el.intensity); // 80
console.log(el.mode);      // 'charcoal'
```

### Custom Events

| Event Name | Detail Payload | Trigger Timing |
| :--- | :--- | :--- |
| `ease-sketch-ready` | `{ width: Number, height: Number }` | Dispatched after canvas processing finishes and the loading screen hides. |

Example event listener:
```javascript
document.querySelector('ease-pencil-sketch-effect').addEventListener('ease-sketch-ready', (e) => {
  const { width, height } = e.detail;
  console.log(`Pencil sketch rendered successfully! Dimensions: ${width}x${height}px`);
});
```

---

## Accessibility Notes

- **Aria Attributes**: The interactive slider is mapped to a native range input with a clear `aria-label="Image comparison split slider"` for assistive screen readers.
- **Keyboard Navigation**:
  - Focus is accessible using `Tab`.
  - The split position can be moved incrementally using `ArrowLeft` / `ArrowRight` (or `ArrowDown` / `ArrowUp`).
- **Focus Indicators**: Focused states apply an amber outline ring (`#F59E0B`) to the custom brass handle.
- **Motion Reduction**: Rotational speed of the loading compass and resizing transitions respect the system's `prefers-reduced-motion` settings.

---

## Technical Details: The Canvas Sketch Algorithm

The pencil-sketch effect is achieved by combining three canvas passes:
1. **Grayscale Base**: The source image is rendered with a `grayscale(100%)` canvas filter.
2. **Inverted Blur**: A second offscreen canvas renders the grayscale image with an `invert(100%) blur(Npx)` filter. The blur radius is scaled dynamically relative to the image size and the `intensity` attribute.
3. **Color Dodge Blending**: The inverted blurred pass is drawn directly on top of the grayscale base using the `color-dodge` composite mode (`ctx.globalCompositeOperation = 'color-dodge'`). This division-like math exposes local contrast differentials, producing a clean pencil sketch layout.
4. **Medium Alterations**:
   - `pencil` mode applies light contrast to make lines resemble graphite lead.
   - `charcoal` mode applies higher contrast, increased blur radii, and fills the canvas with a custom tileable procedurally generated random noise texture using `multiply` blending to simulate charcoal paper tooth.

### CORS Requirements
Because Canvas-based filters require checking pixels using `getImageData` to verify taint flags:
- Images loaded from external domains **must** support CORS.
- The component explicitly sets `image.crossOrigin = 'anonymous'` during the download phase.
- If the target server does not send `Access-Control-Allow-Origin: *` headers, a `SecurityError` is caught, drawing ceases, and a **System Interrupted** warning card explains the CORS restrictions.
