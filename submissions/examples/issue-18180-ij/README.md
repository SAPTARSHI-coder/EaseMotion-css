# ease-border-dash-ij

## What does this do?
Creates a dashed border that travels around the element perimeter. Uses four `repeating-linear-gradient` layers (one per edge) with a `mask-composite: exclude` technique to render dashes only on the border area. The `background-position` is animated so dashes move clockwise around the box.

## How is it used?
Add the class to any block-level element:

```html
<div class="ease-border-dash-ij">Content</div>
```

Customize via CSS custom properties:

```css
.my-element {
  --bdc: #f472b6;   /* dash color */
  --bdw: 3px;       /* border width */
  --dl: 14px;       /* dash length */
  --dg: 8px;        /* gap between dashes */
  --speed: 3s;      /* animation duration */
}
```

## Why is it useful?
Unlike a static `border: dashed`, this animation adds visual interest and draws attention without JavaScript. The technique works with any background and respects `prefers-reduced-motion`.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Files
- `demo.html` — Demo page with two card examples
- `style.css` — Animation class and page styles
- `README.md` — This file
