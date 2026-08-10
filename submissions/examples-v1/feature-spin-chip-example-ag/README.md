# CSS Spin Chip Example

A responsive, lightweight, and accessible **Spin Chip** component showcase built using pure HTML and CSS, conforming to the GSSoC convention guidelines with the required `-ag` class suffixes.

## Features

- **Pure HTML & CSS:** Zero JavaScript configuration.
- **Multiple Spin Modes:**
  - *Counter-Spin:* Entire pill rotates 360° while the text counter-rotates to stay upright and readable.
  - *Icon-Spin:* The chip container is stationary while its SVG icon spins.
  - *Glow-Spin:* Conic glowing neon gradient spins behind the container boundary.
- **Customization Properties:** Configured entirely with local component-scoped CSS custom variables.
- **Accessibility & Motion Guards:** Includes `:focus-visible` focus ring styles and disables animations under `@media (prefers-reduced-motion: reduce)`.

## CSS Variables

Exposes parameters for custom spacing, radii, colors, and timings:

```css
:root {
  --chip-bg: #1e293b;         /* Pill background fill color */
  --chip-color: #f8fafc;      /* Text label color */
  --chip-radius: 9999px;      /* Pill corner radius */
  --chip-padding: 0.5rem;     /* Padding boundaries */
  --spin-duration: 750ms;     /* Time duration for the 360° spin */
  --spin-easing: cubic-...;   /* Rotation animation easing function */
  --shadow: rgba(...);        /* Active/glow shadows mapping */
}
```

## Folder Structure

```text
feature-spin-chip-example-ag/
├── demo.html
├── style.css
└── README.md
```

## Accessibility Notes

- **Interactive Elements:** Utilizes semantic `<button>` elements ensuring native keyboard clickability and screen reader identification.
- **Motion Safety:** Instantly disables active spins and gradients when `@media (prefers-reduced-motion: reduce)` matches.

## Usage Instructions

Open `demo.html` in your browser. Tab to each chip to trigger the `:focus-visible` spin states, or hover with the mouse cursor. Override variables under the local styling rules to match your branding.

Created for **EaseMotion CSS – GSSoC 2026**.
