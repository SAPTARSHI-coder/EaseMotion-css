# ease-glow-border-input-sap

An input that gains a soft blue outer glow and ring on focus, layering a wide soft-blur shadow with a tight focus ring.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="glow-input-sap"><input type="text" placeholder="..."></div>
```

## Customization
- Glow color/spread in the second `box-shadow` value.
- Ring width/opacity in the first `box-shadow` value.
- Border color on focus.

## Notes
- Two stacked `box-shadow` values are used together: a tight, low-blur ring (accessibility-style focus indicator) plus a wide, high-blur glow (the visual "glow" effect) — this combination reads as more polished than either alone.
- Respects `prefers-reduced-motion`: transition duration is shortened and simplified to border-color only; the box-shadow glow still appears on focus but without an eased blur transition, since box-shadow blur transitions can be a subtle sensory equivalent of motion.