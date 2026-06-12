# ease-contract-shadow-emphasis

Pulsing shadow contract animation — scales element down while shadow shrinks, creating a "breathing" emphasis effect.

## Usage

```html
<div class="ease-contract-shadow-emphasis">Pulse on load</div>
```

## Variants

| Class                           | Description             |
| ------------------------------- | ----------------------- |
| `ease-contract-shadow-emphasis` | Plays once on mount     |
| `ease-contract-shadow-loop`     | Infinite looping pulse  |
| `ease-contract-shadow-fast`     | Faster cycle            |
| `ease-contract-shadow-slow`     | Slower cycle            |
| `ease-contract-shadow-glow`     | Primary glow pulse loop |

## Notes

- Combines `transform: scale()` and `box-shadow` animation
- Works on cards, buttons, badges — any box element
- Respects `prefers-reduced-motion`

## Submission

- **Author:** SAPTARSHI-coder
- **Issue:** TBD
- **Files:** `style.css`, `demo.html`
