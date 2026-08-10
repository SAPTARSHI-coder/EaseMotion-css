# CSS Logical Properties Demo

A powerful demonstration of modern CSS Logical Properties (`margin-inline`, `padding-block`, `inset-inline`, etc.) allowing a component to seamlessly support both Left-to-Right (LTR) and Right-to-Left (RTL) languages without writing a single line of directional override CSS.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. The LTR/RTL state toggle is handled purely via standard hidden `<input type="radio">` sibling selectors.
- **Modern Logical Properties**: Replaces physical properties (`margin-left`, `border-right`, `top`, `bottom`) with their logical equivalents (`margin-inline-start`, `border-inline-end`, `inset-block-start`).
- **Automatic Layout Flipping**: By simply changing the CSS `direction` from `ltr` to `rtl`, the browser automatically flips the layout, paddings, margins, absolute badge positioning (`inset`), and flexbox spacing—all perfectly mirrored.
- **Accessible**: Semantic structure with accessible labels for the direction toggles.

## Usage

Drop the CSS into your project. To utilize logical properties, swap out physical directions for inline/block definitions:

```css
/* Old Physical Way */
.card {
  padding-top: 10px;
  margin-left: 20px;
  right: 0;
  border-left: 2px solid blue;
}

/* New Logical Way */
.card {
  padding-block-start: 10px;
  margin-inline-start: 20px;
  inset-inline-end: 0;
  border-inline-start: 2px solid blue;
}
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--card-bg`: Card background (default: `#ffffff`)
- `--accent-color`: Base brand color for avatars and borders (default: `#3b82f6`)

## Browser Support
CSS Logical properties enjoy fantastic support across all modern browsers (Chrome, Firefox, Safari, Edge). They are highly recommended for multi-lingual internationalized applications.
