# EaseMotion CSS – 3D Card Hover (Cursor Tracking)

## Overview

A premium, **glass‑morphed** 3D card that **tilts** in real‑time based on the cursor position. The effect combines subtle depth, a luminous glow, and smooth motion to create a **wow‑worthy** interactive element that feels modern and tactile.

![Card preview (dark mode)](https://raw.githubusercontent.com/SAPTARSHI-coder/EaseMotion-css/main/submissions/examples/ease-hover-3d-card-track/demo-screenshot.png)

## Features

- **Dynamic 3D tilt** – up to ±15° on both axes, following the mouse.
- **Glassmorphism** background with blur and soft glow.
- **Responsive** – scales gracefully from mobile to desktop.
- **Dark‑mode aware** – automatically adapts to the user's OS theme.
- **CSS‑only styling** – no external dependencies; just pure HTML, CSS and a tiny JavaScript helper.
- **Customizable** – colors, tilt intensity, and transition speed are exposed as CSS variables.

## Demo

Open `demo.html` in a browser and move your cursor over the card. The card will tilt smoothly, and a subtle accent glow will appear on hover.

```bash
# From the project root
open submissions/examples/ease-hover-3d-card-track/demo.html
```

## Usage

Copy the `demo.html` and `style.css` files into your own project, or import the CSS directly:

```html
<link rel="stylesheet" href="path/to/style.css" />
```

The JavaScript is embedded in the HTML demo and can be extracted into a separate file if preferred.

## Customisation via CSS Variables

```css
:root {
  --bg-color: #0e0e0e;          /* Page background */
  --card-bg: rgba(255,255,255,.12); /* Card background */
  --accent: #ff6b6b;           /* Text accent colour */
  --glow: rgba(255,107,107,.3);   /* Hover glow */
  --max-tilt: 15deg;            /* Maximum tilt angle */
  --transition-speed: 0.4s;    /* Animation speed */
}
```

Adjust these variables to match your design system.

---

### License

MIT – feel free to use, remix, and share.
