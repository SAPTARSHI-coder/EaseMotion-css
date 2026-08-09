# Custom List Markers

## What does it do?
A pure-CSS demo showing how to style list markers using the `::marker` pseudo-element and `list-style-type` string values. No JavaScript required.

## Features
- **Color & Size Variants** — change marker color, font-weight, and font-size
- **Custom Symbol Markers** — replace default bullets with unicode symbols using `list-style-type: "\2605"`
- **Numbered List Styling** — style ordered list counters with `::marker`
- **Hover Feedback** — background highlight on list items while retaining marker styling
- **Details Disclosure Markers** — style the `::marker` on `<summary>` elements inside `<details>`
- **Reduced Motion** — respects `prefers-reduced-motion`

## Usage
```html
<ul>
  <li class="marker-star">Star marker</li>
</ul>
```

```css
.marker-star {
  list-style-type: "\2605";
}
.marker-star::marker {
  color: #f59e0b;
  font-size: 1.2em;
}
```

## CSS Variables
None — all styles are defined directly via classes.

## Classes
- `.marker-colors`, `.marker-red`, `.marker-blue`, `.marker-green`, `.marker-gold`, `.marker-large` — color/size variants
- `.marker-symbols`, `.marker-star`, `.marker-heart`, `.marker-arrow`, `.marker-check`, `.marker-fire` — custom symbol markers
- `.marker-numbered` — ordered list with styled numbers
- `.marker-hover` — list with hover background effects
- `.custom-details` — disclosure widget with styled summary marker

## Browser Support
- `::marker` — Chrome 86+, Firefox 68+, Safari 11.1+
- `list-style-type` string values — Chrome 86+, Firefox 39+, Safari 11.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
