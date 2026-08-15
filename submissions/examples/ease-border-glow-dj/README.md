# Animated Spinning Gradient Border (`ease-border-glow-dj`)

A reusable CSS component that produces a premium animated gradient border effect. A rotating `conic-gradient` behind a solid inner content layer creates the illusion of a glowing, continuously spinning border — entirely with CSS, zero JavaScript.

## Features

- **Pure CSS** — zero JavaScript, zero dependencies
- **`conic-gradient` border** — smooth, premium neon appearance
- **Pseudo-element architecture** — `::before` (crisp gradient) + `::after` (blurred glow layer)
- **Infinite rotation** with `linear` timing — no stuttering
- **Arbitrary content** — cards, pricing, images, buttons, forms, anything
- **CSS custom properties** for colors, speed, thickness, radius, and glow
- **Modifier classes** — `.glow-thick`, `.glow-fast`, `.glow-slow`, `.glow-none`, `.glow-light`
- **Responsive** — scales correctly on all screen sizes
- **`prefers-reduced-motion`** support — stops animation, preserves static appearance
- **Hardware-accelerated** — only `transform: rotate()` animates, no layout reflow

## Demo

Open [`demo.html`](./demo.html) directly in any browser — no server required.

## How It Works

### Architecture

```
.ease-border-glow-dj            ← position: relative; overflow: hidden
 ├── ::before                   ← conic-gradient, spinning, inset: -50%
 ├── ::after                    ← same conic-gradient, blurred (glow effect)
 └── .glow-inner-content        ← z-index: 1; margin = border thickness; bg = solid color
```

The `::before` and `::after` pseudo-elements are sized at `inset: -50%` (making them 200% width and height), so when they rotate the conic-gradient always covers the card corners. The `.glow-inner-content` sits on top with a `margin` equal to the border thickness, masking the center of the gradient and leaving only the rim visible.

### Key CSS Technique

```css
.ease-border-glow-dj::before {
  content: "";
  position: absolute;
  inset: -50%;                       /* oversized to cover rotating corners */
  background: conic-gradient(
    var(--glow-color-1),
    var(--glow-color-2),
    var(--glow-color-3),
    var(--glow-color-4),
    var(--glow-color-1)              /* repeat first = seamless loop */
  );
  animation: ease-border-glow-dj-spin var(--glow-speed) linear infinite;
}

.ease-border-glow-dj .glow-inner-content {
  position: relative;
  z-index: 1;
  margin: var(--glow-border-size);   /* creates the visible border gap */
  background: var(--glow-bg);
}
```

## Usage

### Step 1 — Link the stylesheet

```html
<link rel="stylesheet" href="style.css">
```

### Step 2 — Add the component

```html
<div class="ease-border-glow-dj">
  <div class="glow-inner-content">
    <h3>Premium Feature</h3>
    <p>This card has a spinning gradient border.</p>
  </div>
</div>
```

> ⚠️ **Important:** `.glow-inner-content` must be a direct child of `.ease-border-glow-dj`. The `z-index`, `margin`, and `background` on `.glow-inner-content` are what create the border effect.

## CSS Variable Customization

Override any variable on the component element:

| Variable | Default | Description |
|----------|---------|-------------|
| `--glow-border-size` | `3px` | Border thickness |
| `--glow-radius` | `16px` | Card corner radius |
| `--glow-speed` | `6s` | Full rotation duration |
| `--glow-color-1` | `#ff0080` | Gradient stop 1 |
| `--glow-color-2` | `#7928ca` | Gradient stop 2 |
| `--glow-color-3` | `#2afadf` | Gradient stop 3 |
| `--glow-color-4` | `#00d4ff` | Gradient stop 4 |
| `--glow-bg` | `#0f0f17` | Inner card background |
| `--glow-blur` | `18px` | Glow blur radius |
| `--glow-opacity` | `0.7` | Glow layer opacity |

### Example: Custom Colors and Speed

```html
<div class="ease-border-glow-dj"
     style="--glow-color-1:#ff6b35; --glow-color-2:#ffd700; --glow-color-3:#ff0080; --glow-color-4:#ff6b35; --glow-speed:4s;">
  <div class="glow-inner-content">
    Fire theme card
  </div>
</div>
```

### Example: Custom CSS Class

```css
.my-card {
  --glow-color-1: #00d4ff;
  --glow-color-2: #2afadf;
  --glow-color-3: #a8ff78;
  --glow-color-4: #00d4ff;
  --glow-speed: 8s;
  --glow-border-size: 4px;
  --glow-radius: 24px;
  --glow-bg: #111827;
}
```

## Modifier Classes

Apply these alongside `.ease-border-glow-dj`:

| Class | Effect |
|-------|--------|
| `.glow-thick` | Border size → `6px` |
| `.glow-fast` | Speed → `2s` |
| `.glow-slow` | Speed → `12s` |
| `.glow-none` | Disables glow blur layer (crisp border only) |
| `.glow-light` | Sets inner background to `#ffffff` for light themes |

```html
<div class="ease-border-glow-dj glow-thick glow-slow">
  <div class="glow-inner-content">...</div>
</div>
```

## Examples

### Dark Theme Feature Card

```html
<div class="ease-border-glow-dj">
  <div class="glow-inner-content">
    <h3>Feature Title</h3>
    <p>Description of the feature.</p>
    <button>Learn More</button>
  </div>
</div>
```

### Light Theme Card

```html
<!-- Method 1: modifier class -->
<div class="ease-border-glow-dj glow-light">
  <div class="glow-inner-content">...</div>
</div>

<!-- Method 2: CSS variable -->
<div class="ease-border-glow-dj" style="--glow-bg: #ffffff;">
  <div class="glow-inner-content">...</div>
</div>
```

### Pricing Card

```html
<div class="ease-border-glow-dj glow-thick" style="--glow-speed:5s;">
  <div class="glow-inner-content" style="text-align:center;">
    <p>Pro Plan</p>
    <div class="price">$29<span>/mo</span></div>
    <ul>
      <li>Unlimited projects</li>
      <li>Priority support</li>
    </ul>
    <button>Get Started</button>
  </div>
</div>
```

### Image Card

```html
<div class="ease-border-glow-dj" style="--glow-border-size:4px;">
  <div class="glow-inner-content" style="padding:0;">
    <img src="photo.jpg" alt="Photo" style="width:100%;border-radius:inherit;display:block;">
  </div>
</div>
```

### CTA Banner (full width)

```html
<div class="ease-border-glow-dj glow-slow"
     style="--glow-radius:20px; width:min(100%,680px);">
  <div class="glow-inner-content" style="text-align:center;">
    <h2>Ready to Ship?</h2>
    <button>Start Free</button>
  </div>
</div>
```

## Accessibility

When the user has `prefers-reduced-motion: reduce` enabled:

- Both `::before` and `::after` pseudo-elements stop rotating (`animation: none`)
- The `conic-gradient` remains visible as a static, attractive border
- All content is fully readable and accessible

```css
@media (prefers-reduced-motion: reduce) {
  .ease-border-glow-dj::before,
  .ease-border-glow-dj::after {
    animation: none;
  }
}
```

## Why It Fits EaseMotion CSS

- Single utility class (`.ease-border-glow-dj`) with a companion content class (`.glow-inner-content`)
- All keyframe names are namespaced (`ease-border-glow-dj-spin`) to prevent collisions
- No JavaScript — pure CSS pseudo-element + conic-gradient technique
- Hardware-accelerated with `transform: rotate()` (compositor layer only)
- CSS custom properties for full theming
- Accessibility support built-in
- Fully self-contained in `style.css`

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 69+ | ✅ Full (`conic-gradient` since Chrome 69) |
| Firefox 83+ | ✅ Full |
| Edge 79+ | ✅ Full |
| Safari 12.1+ | ✅ Full |

> Requires `conic-gradient` support. Available in all modern browsers since 2021.
