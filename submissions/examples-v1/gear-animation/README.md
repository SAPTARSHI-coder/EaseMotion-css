# Gear Animation · Pure CSS

A **pure CSS gear animation component** with three interlocking gears spinning in opposite directions — no JavaScript required.

---

## Overview

This component creates a mechanical gear system using only HTML and CSS. Three gears of different sizes spin continuously with smooth keyframe animations, demonstrating CSS transforms and `animation-play-state` for interactive controls.

### Features

- **3 interlocking gears** — large, medium, and small sizes
- **Opposite directions** — main gear spins clockwise, others counter-clockwise
- **Pure CSS** — no images, no JavaScript, no framework dependencies
- **Interactive controls** — pause, speed toggle (Normal → Fast → Slow), and reset
- **Fully responsive** — adapts to mobile (375px), tablet (768px), desktop (1024px), and large screens (1440px)
- **Dark theme** — matches the EaseMotion CSS component library palette

---

## File Structure

```
submissions/examples/gear-animation/
├── demo.html     # HTML structure with gear system and controls
├── style.css     # All styles and animations
└── README.md     # This file
```

> **Note:** The repository validator requires `demo.html` as the entry file. Open `demo.html` directly in any modern browser to view the animation.

---

## Quick Start

1. Navigate to this folder:
   ```
   submissions/examples/gear-animation/
   ```
2. Open `demo.html` in your browser (double-click or drag into a tab).
3. Use the control buttons to pause, change speed, or reset.

No build step, no server, and no npm install needed.

---

## How It Works

### Gear Construction

Each gear is built from three layers:

| Layer | Element | Technique |
|---|---|---|
| Teeth | `<span>` elements | Positioned with `transform: rotate()` + `translateY()` |
| Body | `.gear-teeth::before` | Circular disc behind the teeth |
| Center hole | `.gear-hole` | Nested circle with `border-radius: 50%` |

### Animation Logic

```css
/* Large gear — clockwise */
@keyframes spin-clockwise {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to   { transform: translate(-50%, -50%) rotate(360deg); }
}

/* Medium & small gears — counter-clockwise */
@keyframes spin-counter {
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
}
```

### Pure CSS Controls

All interactive controls work without JavaScript:

| Control | Technique |
|---|---|
| **Pause / Resume** | Hidden `<input type="checkbox">` toggles `animation-play-state: paused` |
| **Speed Toggle** | Hidden `<input type="radio">` group cycles Normal → Fast → Slow via cycling `<label>` elements |
| **Reset** | Native `<button type="reset">` inside a `<form>` restores all inputs to defaults |

---

## Customization

### Colors

| Token | Value | Usage |
|---|---|---|
| Gear body | `#4a5a6a` | Primary gear color |
| Background | `#0b0d10` | Page and center hole |
| Card surface | `#14171c` | Wrapper panel |

Change these in `style.css` to match your project theme.

### Speed

Default animation durations:

| Gear | Normal | Fast | Slow |
|---|---|---|---|
| Large | 8s | 2s | 16s |
| Medium | 6s | 2s | 16s |
| Small | 4s | 2s | 16s |

Edit the `animation` property on `.gear-large`, `.gear-medium`, and `.gear-small`, plus the `#gear-speed-fast` and `#gear-speed-slow` selectors.

### Adding More Gears

1. Copy a `.gear` block in `demo.html`.
2. Add tooth `<span>` elements (8, 12, or 16 teeth work best).
3. Position with `top`, `right`, `left`, or `bottom` in CSS.
4. Assign `spin-clockwise` or `spin-counter` animation based on mesh direction.

---

## Browser Support

Works in all modern browsers that support CSS animations and transforms:

- Chrome 43+
- Firefox 16+
- Safari 9+
- Edge 12+

Respects `prefers-reduced-motion: reduce` by disabling spin animations.

---

## License

Part of the [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css) contribution collection.
