# CSS Counter Utilities

Demonstrates CSS `counter-reset`, `counter-increment`, and `counter()` for automatic numbering without JavaScript. Includes decimal, nested, roman, and alphabetic counter formats.

## Features

- Decimal-leading-zero counter with zero-padded numbers
- Nested counters for hierarchical lists (chapters and sub-items)
- Roman numeral counter using `counter-style: lower-roman`
- Alphabetic counter using `counter-style: lower-alpha`
- Hover effects on list items
- Dark mode and reduced-motion safe

## Design Tokens Used

- `--ease-color-primary` / `--ease-color-secondary` / `--ease-color-info` — counter accent colors
- `--ease-radius-*` — rounded corners
- `--ease-shadow-sm` — card elevation
- `--ease-font-sans` / `--ease-font-mono` — list fonts
- `--ease-space-*` — spacing scale

## Usage

```css
.list {
  counter-reset: my-counter;
}
.item {
  counter-increment: my-counter;
}
.item::before {
  content: counter(my-counter);
}
```
