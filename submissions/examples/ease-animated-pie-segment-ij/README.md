# Animated Pie Segment

A CSS-only animated pie chart where each segment grows into view on load using `conic-gradient` and registered custom properties (`@property`). Built with the Inter font family and a dark theme.

## Features

- Segments animate from 0° to their full angle using `@keyframes`
- Hover scale transition on the pie chart
- Legend for segment labels
- Replay button to re-trigger the animation
- Responsive sizing via `clamp()` and `min()`
- Customizable timing and colors through `:root` variables

## Usage

Open `demo.html` in a modern browser that supports `@property` (Chrome 85+, Firefox 128+, Safari 15.4+).

## Customization

Edit `:root` in `style.css`:

```css
:root {
  --pie-duration: 2s;
  --c1: #ff6b6b;
  --c2: #4ecdc4;
  --c3: #45b7d1;
  --c4: #f9ca24;
}
```

- `--pie-duration` – animation speed
- `--c1` through `--c4` – segment colors

## Files

| File        | Purpose            |
|-------------|--------------------|
| `demo.html` | Entry page         |
| `style.css` | Styles & animation |
