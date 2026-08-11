# ease-tooltip-fade

Small fade/scale-in tooltip utility that works on any element with a `data-tooltip` attribute — no extra markup needed.

## Usage

```html
<button data-tooltip="This is a tooltip">Hover me</button>
```

## Notes

- Zero extra DOM elements — tooltip is generated via `::after` and `content: attr(...)`.
- Positioned above the element by default; flip to `top: 125%` for below.

## Browser support

All modern browsers.