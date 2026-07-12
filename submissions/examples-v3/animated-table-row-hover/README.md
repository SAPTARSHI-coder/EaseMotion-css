# Animated Table Row Hover

A responsive table component with a smooth animated row-hover effect, alternating
row colors, and a sticky header — built with pure CSS (no JS required).

## Features

- **Row hover highlight** — rows scale up slightly (`transform: scale(1.015)`) and gain a soft shadow on hover.
- **Smooth background transition** — background color eases in/out via `transition: background-color 0.25s ease`.
- **Alternating row colors** — implemented with `tbody tr:nth-child(odd/even)`.
- **Sticky header** — `thead th { position: sticky; top: 0; }` keeps the header visible while scrolling the table body.

## Files

- `demo.html` — sample table markup to preview the effect.
- `style.css` — all styling and animation logic.

## How it works

```css
tbody tr {
  transition: transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
}

tbody tr:hover {
  transform: scale(1.015);
  background-color: #e8edff;
}
```

The transform/background transition is handled entirely in CSS — no JavaScript is
needed. The header uses `position: sticky` combined with a `z-index` and box-shadow
so it stays pinned and visually separated while the table body scrolls inside its
wrapper (`overflow: auto` + a fixed `max-height`).

## Usage

Open `demo.html` in a browser (with `style.css` in the same folder) to see the
effect live.

## Browser support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).