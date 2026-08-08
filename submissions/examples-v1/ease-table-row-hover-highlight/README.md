# ease-table-row-hover-highlight

## What does it do?
Table rows get a smooth background color transition on hover, with an optional subtle scale effect — pure CSS, no JavaScript.

## Features
- Smooth `background-color` transition on row hover
- Optional subtle `scale(1.005)` for depth
- Common data table UX pattern

## Usage
```css
tr {
  transition: background-color 0.25s ease;
}

tr:hover {
  background-color: rgba(167, 139, 250, 0.1);
}

/* With scale */
tr {
  transition: background-color 0.25s ease, transform 0.25s ease;
}

tr:hover {
  background-color: rgba(167, 139, 250, 0.1);
  transform: scale(1.005);
}
```

## Browser Support
- `transition` — Chrome 26+, Firefox 16+, Safari 6.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
