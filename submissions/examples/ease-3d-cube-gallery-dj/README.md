# Interactive 3D Cube Gallery (`ease-3d-cube-gallery-dj`)

A fully interactive six-sided 3D cube gallery powered entirely by CSS radio-button state management. Users click navigation labels to smoothly rotate the cube and reveal different faces — no JavaScript required.

## Features

- **Pure CSS** — zero JavaScript, zero dependencies
- **Radio-button state machine** — `input:checked ~ sibling` selectors drive all cube rotations
- **All 6 faces** — Front, Back, Left, Right, Top, Bottom
- **Smooth `0.8s ease-in-out` transitions** on the cube `transform`
- **Hardware-accelerated** — only `transform` and `opacity` animate (compositor layer)
- **Arbitrary content** — each face accepts images, cards, text, buttons, anything
- **CSS custom properties** for easy theming
- **Active nav indicator** — highlighted pill shows the current face
- **Keyboard accessible** — radio inputs receive focus; labels trigger state
- **Responsive** — cube scales with `min()` on mobile
- **Accessible** — `prefers-reduced-motion` disables animation, preserves interactivity

## Demo

Open [`demo.html`](./demo.html) directly in any browser — no server needed.

## Cube Anatomy

```
         ┌──────────┐
         │   Top    │  rotateX(90deg)
    ┌────┼──────────┼────┬──────────┐
    │Left│  Front   │Right│  Back   │
    │    │ (default)│    │(180deg) │
    └────┼──────────┼────┴──────────┘
         │  Bottom  │  rotateX(-90deg)
         └──────────┘
```

| Face   | CSS Transform Applied to Cube         |
|--------|---------------------------------------|
| Front  | `rotateY(0deg)` (default)            |
| Back   | `rotateY(180deg)`                    |
| Right  | `rotateY(-90deg)`                    |
| Left   | `rotateY(90deg)`                     |
| Top    | `rotateX(-90deg)`                    |
| Bottom | `rotateX(90deg)`                     |

## Usage

### Step 1 — Link the stylesheet

```html
<link rel="stylesheet" href="style.css">
```

### Step 2 — Add the component HTML

> ⚠️ **Important:** Each `input[id]` must match its `label[for]`. All inputs in one cube must share the same `name` attribute. If you use multiple cubes on one page, give each set a unique `name`.

```html
<div class="ease-3d-cube-gallery-dj">

  <!-- Radio state inputs -->
  <input type="radio" name="cube" id="cube-front"  checked>
  <input type="radio" name="cube" id="cube-back">
  <input type="radio" name="cube" id="cube-right">
  <input type="radio" name="cube" id="cube-left">
  <input type="radio" name="cube" id="cube-top">
  <input type="radio" name="cube" id="cube-bottom">

  <!-- 3D scene -->
  <div class="cube-scene">
    <div class="cube">
      <div class="cube-face cube-front">Front content</div>
      <div class="cube-face cube-back">Back content</div>
      <div class="cube-face cube-right">Right content</div>
      <div class="cube-face cube-left">Left content</div>
      <div class="cube-face cube-top">Top content</div>
      <div class="cube-face cube-bottom">Bottom content</div>
    </div>
  </div>

  <!-- Navigation -->
  <div class="cube-nav">
    <label for="cube-front">Front</label>
    <label for="cube-back">Back</label>
    <label for="cube-right">Right</label>
    <label for="cube-left">Left</label>
    <label for="cube-top">Top</label>
    <label for="cube-bottom">Bottom</label>
  </div>

</div>
```

## Face Content Examples

### Image Gallery

```html
<div class="cube-face cube-front">
  <img src="photo1.jpg" alt="Mountain landscape">
</div>
<div class="cube-face cube-back">
  <img src="photo2.jpg" alt="Ocean at sunset">
</div>
```

Images automatically fill the face using `object-fit: cover`.

### Card Content

```html
<div class="cube-face cube-right">
  <div style="padding: 1.5rem; text-align: center;">
    <h2>Our Mission</h2>
    <p>Building beautiful, accessible UI with pure CSS.</p>
    <a href="#" class="btn">Learn More</a>
  </div>
</div>
```

### Custom Background per Face

```html
<div class="cube-face cube-front"
     style="background: linear-gradient(135deg, #6c63ff, #3a3480);">
  Front
</div>
```

## CSS Variable Customization

Override any variable on the component wrapper:

```css
.ease-3d-cube-gallery-dj {
  --cube-size:         300px;   /* cube width and height */
  --cube-duration:     0.8s;    /* rotation animation speed */
  --cube-perspective:  900px;   /* depth of the 3D scene */
  --cube-face-bg:      rgba(255, 255, 255, 0.08);  /* default face background */
  --cube-border-color: rgba(255, 255, 255, 0.18);  /* face border */
  --cube-nav-active:   #6c63ff; /* active nav pill color */
}
```

### Smaller Cube with Different Accent

```css
.my-cube {
  --cube-size:       200px;
  --cube-duration:   0.5s;
  --cube-nav-active: #ff6584;
}
```

```html
<div class="ease-3d-cube-gallery-dj my-cube">
  ...
</div>
```

### Responsive Sizing

The default `--cube-size` is `300px`. On screens smaller than `480px` the utility automatically reduces it to `min(260px, 78vw)`. You can override this further:

```css
.ease-3d-cube-gallery-dj {
  --cube-size: min(300px, 80vw);
}
```

## Multiple Cubes on One Page

Give each cube a unique `name` attribute on the radio inputs and unique IDs with a unique prefix. Use the second cube's labels to match the second set of IDs:

```html
<!-- Cube A -->
<div class="ease-3d-cube-gallery-dj">
  <input type="radio" name="cube-a" id="cube-a-front" checked>
  ...
  <label for="cube-a-front">Front</label>
</div>

<!-- Cube B -->
<div class="ease-3d-cube-gallery-dj">
  <input type="radio" name="cube-b" id="cube-b-front" checked>
  ...
  <label for="cube-b-front">Front</label>
</div>
```

## How It Works

### 3D Scene Setup

```css
.cube-scene {
  perspective: var(--cube-perspective);  /* creates the 3D viewport */
}

.cube {
  transform-style: preserve-3d;          /* children live in 3D space */
  transform: translateZ(calc(var(--cube-half) * -1));  /* re-centres pivot */
  transition: transform var(--cube-duration) ease-in-out;
}
```

The `translateZ(-half)` offsets the cube so rotations happen around its visual centre rather than the front face.

### Radio State Machine

```css
/* When "right" is checked, rotate the cube to show right face */
#cube-right:checked ~ .cube-scene .cube {
  transform: translateZ(calc(var(--cube-half) * -1)) rotateY(-90deg);
}
```

The `~` (general sibling combinator) selects `.cube-scene` only when the matching radio is checked — pure CSS state management.

### Active Nav Indicator

```css
#cube-right:checked ~ .cube-nav label[for="cube-right"] {
  background: var(--cube-nav-active);
  color: #ffffff;
}
```

## Accessibility

### Keyboard Navigation

The hidden radio inputs remain focusable. Users can:
- `Tab` into the navigation area (focus lands on the radio input)
- Use `Arrow keys` to cycle between faces
- Labels respond to `Enter` / `Space` via the associated radio

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .ease-3d-cube-gallery-dj .cube {
    transition: none;  /* instant face switch, no rotation animation */
  }
}
```

All six faces remain fully accessible; only the animation is disabled.

## Why It Fits EaseMotion CSS

- Single, namespaced utility class (`.ease-3d-cube-gallery-dj`)
- Zero JavaScript — pure CSS state management
- Hardware-accelerated with `transform-style: preserve-3d` and `backface-visibility: hidden`
- CSS custom properties for theming
- Accessibility support built-in
- Fully self-contained in `style.css`
- Responsive out of the box

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 104+ | ✅ Full |
| Firefox 110+ | ✅ Full |
| Edge 104+ | ✅ Full |
| Safari 15.4+ | ✅ Full |

> Requires `transform-style: preserve-3d` and CSS general sibling combinator `~` — supported in all modern browsers.
