# CSS Animated Number Input

A highly polished, custom number input stepper that hides native browser spinners in favor of beautifully animated increment and decrement controls.

## Features
- **CSS Animations**: Built with pure CSS micro-interactions. The wrapper uses `:focus-within` to project a seamless glow when the input is focused. The stepper buttons scale down playfully on `:active`, and the internal SVG arrows dynamically animate along the Y-axis when pressed.
- **Native Input Masking**: Uses specific vendor prefixes (`::-webkit-inner-spin-button` and `-moz-appearance: textfield`) to reliably hide default browser spinners.
- **Minimal Inline JS**: Contains a single line of inline JavaScript (`stepUp()` / `stepDown()`) purely to hook the custom buttons into the native `<input type="number">` API, ensuring perfect semantic data flow without requiring a heavy component framework.
- **Accessible**: Functions entirely via standard keyboard navigation. The input itself remains fully focusable, and the stepper buttons include `aria-label`s for screen readers. Respects user preferences by gracefully disabling the transform scaling and translation animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure into your application's forms or e-commerce cart.

```html
<div class="number-input-wrapper">
  <button class="stepper-btn down" aria-label="Decrease" onclick="this.nextElementSibling.stepDown()">
    <svg>...</svg>
  </button>
  
  <input type="number" class="number-input" value="1" min="0" max="99">
  
  <button class="stepper-btn up" aria-label="Increase" onclick="this.previousElementSibling.stepUp()">
    <svg>...</svg>
  </button>
</div>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--input-bg`: Background color of the input wrapper (default: `#ffffff`)
- `--accent-color`: Base brand color for borders and focus rings (default: `#6366f1`)
- `--btn-bg-hover`: Background color for hovered buttons (default: `#f1f5f9`)

## Browser Support
Works beautifully in all modern browsers (Chrome, Firefox, Safari, Edge). The `:focus-within` pseudo-class is fully supported across all engines.
