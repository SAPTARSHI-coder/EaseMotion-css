# ease-nav-underline-hover

Nav link underline that slides in from the left on hover.

## Usage

```html
<nav class="ease-nav">
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>
```

## Notes

- Underline color matches the link's `color` via `currentColor` — no separate color variable needed.
- To slide in from the right instead, change `left: 0` to `right: 0` on the `::after`.

## Browser support

All modern browsers.