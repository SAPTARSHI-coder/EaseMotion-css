# Shake Effect (Horizontal & Vertical)

Compact, reusable CSS utilities to make an element shake once along the X or Y axis.

Usage

- `fn-shake--horizontal` — single horizontal shake
- `fn-shake--vertical` — single vertical shake
- `fn-shake--strong` — increase shake distance

Example

```html
<button class="fn-shake--horizontal">Invalid</button>
```

Run demo

```powershell
python -m http.server 8000 --bind 127.0.0.1 --directory "submission/examples/shake-effect"
# open http://127.0.0.1:8000/demo.html
```

Accessibility: animations are disabled when `prefers-reduced-motion: reduce` is set.
