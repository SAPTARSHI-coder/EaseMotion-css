# Shape Outside Wrapping

## What does it do?
A pure-CSS demo showing text wrapping around CSS shapes using `shape-outside`, `shape-margin`, and `clip-path` — no JavaScript required.

## Features
- **Circle** — text wraps around a circular gradient element
- **Ellipse** — text wraps around an elliptical shape
- **Polygon** — custom polygon shape with diagonal wrapping
- **Inset (Rounded)** — rounded rectangle wrapping with `inset()`
- **shape-margin** — spacing between shape and text
- **clip-path** — matching the visible element to the shape boundary

## Usage
```css
.circle {
  float: left;
  shape-outside: circle(50%);
  shape-margin: 1rem;
  clip-path: circle(50%);
}

.polygon {
  float: left;
  shape-outside: polygon(0 0, 100% 0, 100% 100%, 0 60%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 60%);
}
```

## Classes
- `.shape-circle` — circular wrapping (float + circle)
- `.shape-ellipse` — elliptical wrapping
- `.shape-polygon` — custom polygon wrapping
- `.shape-inset` — rounded rectangle wrapping

## Browser Support
- `shape-outside` — Chrome 37+, Firefox 62+, Safari 10.1+
- `shape-margin` — Chrome 37+, Firefox 62+, Safari 10.1+
- `clip-path` (basic shapes) — Chrome 55+, Firefox 54+, Safari 6.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
