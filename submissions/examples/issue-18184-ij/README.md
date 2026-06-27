# ease-rotate-in

The element rotates into view from **-90deg** while scaling up and fading in.

## Usage

Add `animation: rotateIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards` to your element and include the `@keyframes rotateIn` definition.

| property | start | end |
|----------|-------|-----|
| rotate   | -90deg | 0deg |
| scale    | 0.8    | 1    |
| opacity  | 0      | 1    |

The `cubic-bezier(0.34, 1.56, 0.64, 1)` timing gives a slight overshoot for a snappy feel.

## Files

- `demo.html` – demo page (dark theme, Outfit font)
- `style.css` – keyframes and demo styles with `prefers-reduced-motion` fallback
