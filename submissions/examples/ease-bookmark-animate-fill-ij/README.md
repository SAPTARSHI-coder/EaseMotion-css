# Bookmark Animate Fill

A pure CSS bookmark component with an animated fill transition. Click the bookmark icon to toggle between outlined and filled states with a smooth scale pop animation and color transition.

## Features

- **Smooth Fill Transition:** Uses CSS transitions on SVG `fill` and `stroke` properties for a seamless color change.
- **Pop Animation:** A subtle scale bounce (`bookmarkPop` keyframe) provides tactile feedback on toggle.
- **Live Count:** JavaScript updates the bookmarked item count on each toggle.
- **Customizable:** Exposes CSS custom properties for duration, colors, and icon size.
- **Inter Font:** Clean typography using the Inter typeface from Google Fonts.

## CSS Custom Properties

| Property                    | Default  | Description                     |
| --------------------------- | -------- | ------------------------------- |
| `--bookmark-duration`       | `0.35s`  | Transition duration for fill    |
| `--bookmark-color`          | `#6b7280`| Outline/inactive color          |
| `--bookmark-active-color`   | `#ef4444`| Filled/active color             |
| `--bookmark-size`           | `24px`   | Width and height of the icon    |

## Usage

Include the HTML structure and link `style.css`.

```html
<link rel="stylesheet" href="style.css">
```

Customize the look via `:root` in your CSS:

```css
:root {
    --bookmark-duration: 0.5s;
    --bookmark-color: #3b82f6;
    --bookmark-active-color: #1d4ed8;
    --bookmark-size: 28px;
}
```

Resolves Issue: #IJ
