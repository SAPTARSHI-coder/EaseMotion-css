# Flex Wrap Flow Dashboard

## Overview

This submission demonstrates a responsive **Flex Wrap Flow Dashboard** using pure HTML and CSS. It showcases how flex items automatically wrap into new rows while maintaining consistent spacing through row and column gaps.

## Features

- Responsive flex-wrap layout
- Automatic wrapping of dashboard cards
- Row and column gap spacing
- Clean dashboard-style UI
- Pure HTML and CSS
- No JavaScript required

## SCSS Equivalent

```scss
@mixin flex-wrap-flow($row-gap: 1rem, $column-gap: 1.5rem) {
  display: flex;
  flex-wrap: wrap;
  row-gap: $row-gap;
  column-gap: $column-gap;
}
```

## Demo

Open `demo.html` in any modern browser to view the responsive dashboard layout.

## Files

- `demo.html`
- `style.css`
- `README.md`

## Notes

All files are contained within the `submissions/` directory in accordance with the repository contribution guidelines.