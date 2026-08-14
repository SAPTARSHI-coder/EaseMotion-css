# ease-checkbox-check

Checkbox tick that draws itself in on check, using SVG stroke-dashoffset animation.

## Usage

```html
<label class="ease-checkbox">
  <input type="checkbox">
  <svg viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="4" class="box"/>
    <path d="M6 12l4 4 8-8" class="tick"/>
  </svg>
</label>
```

## Notes

- The `stroke-dasharray`/`stroke-dashoffset` value (20) is tuned to the tick path's length — if you change the path, recalculate the length.
- Fully accessible: the real `<input type="checkbox">` drives state via the sibling selector.

## Browser support

All modern browsers (SVG + CSS transitions).