# ease-accordion-icon-rotate

An accordion component where the arrow icon rotates 180 degrees on expand.

## Features

- Arrow icon rotates 180 degrees via `transform: rotate()` transition
- Content expands with a max-height transition
- Single item open at a time (accordion behavior)
- JavaScript toggles `.air-open` class
- Customizable via CSS custom properties

## Usage

Click a header to expand or collapse its content. Only one item stays open at a time.

Customize via `:root` variables:

```css
--air-transition-duration: 0.3s;
--air-header-bg: #f0f0f0;
--air-content-bg: #ffffff;
```