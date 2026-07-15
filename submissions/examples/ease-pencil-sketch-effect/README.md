# `<ease-pencil-sketch-effect>` Web Component

A dependency-free, self-contained HTML5 custom web component (`<ease-pencil-sketch-effect>`) that converts an image into a live, high-fidelity pencil or charcoal sketch directly in the browser using the HTML5 Canvas 2D API.

> Submission track: `submissions/examples/ease-pencil-sketch-effect/`  
> Contributor suffix: `-ag`

---

## Features

- **Encapsulated Design**: Uses Shadow DOM to enclose core layout and interactions, ensuring styles never leak or collide.
- **Client-Side Image Processing**: Utilizes separable Box Blur approximations, luminance scaling, and color dodge mathematical blends in vanilla JS.
- **Performance Optimized**: Downscales high-resolution source images offscreen to cap rendering times (~40ms), keeping main layout threads completely fluid.
- **Before/After Split Comparison Slider**: An interactive, satisfying slider overlay allowing users to compare details side-by-side.
- **Drafting-Table Studio Aesthetic**: The surrounding control panel uses custom font pairings and a technical color palette (vellum paper backgrounds, brass compass handle accents, steel-blue grid borders).
- **Graceful CORS and Error Handling**: Displays warning banners when canvas pixel extraction is blocked by security headers.
- **Full Keyboard Accessibility**: ARIA-compliant focus ring indicators, slider roles, and arrow-key adjustments.
- **Reduced Motion Support**: Disables slide transitions and spinner animations if user preferences are set.

---

## Installation & Basic Usage

1. Load the script as a module:
```html
<script type="module" src="ease-pencil-sketch-effect.js"></script>
```

2. Declare the element in your HTML:
```html
<!-- Method A: Via attributes -->
<ease-pencil-sketch-effect src="blueprint.png" intensity="1.2" mode="pencil"></ease-pencil-sketch-effect>

<!-- Method B: Via Light-DOM image slot -->
<ease-pencil-sketch-effect intensity="1.5" mode="charcoal">
  <img src="architect.jpg" alt="Source Architecture" />
</ease-pencil-sketch-effect>
```

---

## Component Attributes

| Attribute | Type | Description | Default |
|---|---|---|---|
| `src` | `string` | Path or URL to the source image to process. | `""` |
| `intensity` | `number` | Controls graphite contrast/gamma curves. Range `0.5` (light) to `3.0` (deep contrast). | `1.2` |
| `mode` | `string` | Drawing medium style: `"pencil"` (clean graphite lines) or `"charcoal"` (grainy texture, darker shading). | `"pencil"` |

---

## Custom Events Dispatched

| Event Name | Detail Payload | Trigger Phase |
|---|---|---|
| `ease-sketch-ready` | `{ width: number, height: number }` | Fired when the offscreen canvas filter finishes computing the image and updates the viewport aspect ratio. |

### Event Listener Example:
```javascript
const sketchEl = document.querySelector('ease-pencil-sketch-effect');
sketchEl.addEventListener('ease-sketch-ready', (e) => {
  console.log(`Original dimensions resolved: ${e.detail.width}x${e.detail.height}`);
});
```

---

## Accessibility & Keyboard Controls

The split slider handle is operable by keyboard when focused (Tab focus ring displays a brass outline):
- `ArrowLeft`: Shifts split position left by 2% (showing more of the original image).
- `ArrowRight`: Shifts split position right by 2% (showing more of the sketch image).
- `Home`: Jumps split position directly to 0% (showing only the sketch image).
- `End`: Jumps split position directly to 100% (showing only the original image).

---

## CORS Security Taint Notice

Web browsers restrict canvas pixel extraction (`getImageData`) for images hosted on different domains. If an external URL is used:
- Ensure the remote server returns CORS headers: `Access-Control-Allow-Origin: *`.
- The element automatically requests credentials (`crossOrigin = "anonymous"`).
- If CORS headers are absent, processing fails and the element overlays a warning: *"CORS security restriction blocked canvas pixel extraction. Ensure image has Access-Control-Allow-Origin Headers."*
