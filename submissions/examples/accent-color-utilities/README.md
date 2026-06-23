# Accent Color Utilities

Introduces a suite of native form element control tinting utility tokens under issue #15165.

## Functional Mechanics

- **The Problem:** Custom styling interactive elements like checkboxes, radio buttons, range sliders, and progress tracks traditionally requires writing massive blocks of complex, non-semantic wrapper markup alongside risky browser vendor overrides (`-webkit-appearance: none`). This introduces accessibility regressions and high maintenance overhead.
- **The Solution:** Preserves semantic fidelity while applying theme values. The `.ease-accent-*` utility series relies entirely on the modern, native `accent-color` property. This lets developers re-tint internal browser interface indicators directly on native structural nodes without stripping out standard keyboard navigation loops or accessibility focus outlines.

## Usage Layout Structure
```html
<input type="checkbox" class="ease-accent-primary" checked />
<input type="radio" class="ease-accent-success" checked />
<input type="range" class="ease-accent-warning" />
```

Closes #15165
