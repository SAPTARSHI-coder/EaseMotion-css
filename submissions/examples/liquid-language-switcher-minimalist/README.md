# Liquid Language Switcher (Minimalist UI)

A high-fidelity, pure HTML + CSS language switcher featuring a smooth liquid "gooey" transition effect, built with Minimalist UI guidelines in mind. The component is completely JavaScript-free, using native HTML radio buttons for state tracking and an SVG color matrix filter to create fluid, organic motion.

## Features

- **Pure CSS Gooey Transition**: Uses a combined standard SVG blur and alpha-threshold matrix filter (`feGaussianBlur` + `feColorMatrix`) to make the active indicator bubble stretch and melt organically.
- **Node-Clinging Effect**: Static anchor nodes inside each language quadrant attract and stretch the indicator blob as it pulls away and snaps to the new target.
- **Double-Layer Structure**: Background gooey components are separated from the text labels layer, ensuring labels remain crisp, sharp, and perfectly readable.
- **Customizable**: Exposes semantic CSS variables for customization of colors, durations, radii, and fonts.
- **Accessibility Friendly**: Fully keyboard navigable using native keyboard inputs, with focus indicators styled using `:focus-visible`.
- **Reduced Motion Support**: Suppresses gooey blurring and scales to clean opacity transitions when `prefers-reduced-motion: reduce` is active.

---

## Folder Structure

```text
submissions/examples/liquid-language-switcher-minimalist/
├── demo.html    # Interactive showcase demonstrating language-reactive page content
├── style.css    # Layout rules, gooey matrix configurations, focus states, and keyframes
└── README.md    # Documentation & API guidelines
```

---

## Customization API

Easily adjust dimensions, timing, and theme colors by editing these custom properties in your stylesheet:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-switcher-width` | `360px` | Outer width of the switcher. |
| `--ease-switcher-height` | `50px` | Outer height of the switcher. |
| `--ease-switcher-duration` | `0.45s` | Slide transition duration. |
| `--ease-switcher-easing` | `cubic-bezier(0.76, 0, 0.24, 1)` | Switcher slide easing curve (high speed drag curve). |
| `--ease-switcher-bg` | `#e2e8f0` | Switcher track background color (Slate 200). |
| `--ease-switcher-accent` | `#0f172a` | Active selection pill color (Slate 900). |
| `--ease-switcher-radius` | `99px` | Corner radius of track and indicator. |
| `--ease-switcher-shadow` | `0 10px 30px -5px ...` | Switcher card drop shadow. |
| `--ease-switcher-font-size` | `0.9rem` | Language code label font size. |
| `--ease-switcher-padding` | `4px` | Inner margins between track edge and active pill. |

---

## Technical Details

### Separation of Layers
Applying a gooey filter blurs the target element. To prevent the text labels from blurring, they sit in a foreground overlay layer with transparent backgrounds:

```html
<!-- Background layer with filter -->
<div class="ease-switcher-bg-layer">
  <div class="ease-switcher-anchor" style="left: 12.5%;"></div>
  ...
  <div class="ease-switcher-indicator"></div>
</div>

<!-- Foreground text layer (sharp, untouched by filter) -->
<div class="ease-switcher-fg-layer">
  <label for="lang-en" class="ease-switcher-label">EN</label>
  ...
</div>
```

### The SVG Liquid Filter
The gooey effect requires standard standard SVG filter primitives declared in the DOM:

```html
<svg>
  <defs>
    <filter id="ease-gooey-filter">
      <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
    </filter>
  </defs>
</svg>
```
The stdDeviation of `6` balances blur length, and the color matrix scales alpha density to create sharp liquid shapes.
