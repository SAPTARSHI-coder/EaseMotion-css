# Expandable Search Input

This submission implements an animated search input that expands from icon-only to full-width input on focus (Issue **#14186**).

## Features

- Collapsed: 44px circle showing only the search icon
- Focus: expands to 280px with spring easing, input text fades in
- Uses `:focus-within` on wrapper — CSS-only, no JavaScript
- Border highlights with primary color on focus
- Keyboard accessible via Tab
- `prefers-reduced-motion` disables transitions
- Responsive: max-width adjusts on small screens

## Classes

| Class | Description |
|-------|-------------|
| `.search-wrapper` | Inline-flex container that expands on `:focus-within` |
| `.search-icon` | Absolutely positioned icon |
| `.search-input` | Text input with opacity transition |

## Usage

```html
<div class="search-wrapper">
  <span class="search-icon">&#128269;</span>
  <input type="text" class="search-input" placeholder="Search..." />
</div>
```

## Files

- `demo.html` — Interactive demo with behavior docs and usage examples
- `style.css` — Wrapper width transition, input opacity transition, focus styles
- `README.md` — This documentation
