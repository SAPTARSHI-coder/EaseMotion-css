# Button Press Ripple Effect (`ease-button-press-ripple`)

A zero-JavaScript Material Design-style button component that handles state interactions purely via native CSS.

## What It Does
- Triggers a growing ripple mask using the `::after` pseudo-element.
- **Strict Separation**: The animation executes solely during the `:active` (press) state. Hover transitions alter background colors and layer elevations independently without firing the ripple.

## How to Use It
1. Apply the primary class alongside a visual variant:
   ```html
   <button class="ease-button-press-ripple variant-primary">PRIMARY</button>

## Variants
- **Primary**: Solid colored backdrop with a high-contrast white ripple wave.
- **Success**: Transparent button with a green outline and matching thematic internal ripple.
- **Danger**: Borderless text variant highlighting subtle container expansion dynamics.

## Structure
```text
submissions/examples/ease-button-press-ripple-dr/
├── demo.html
├── style.css
└── README.md

