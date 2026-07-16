# SCSS Utility: Smooth Scrollbar Styling & Hover Mixins

## What is this?
A reusable SCSS mixin for styling custom scrollbars — track, thumb, hover state, and corner — with smooth color transitions. Cross-browser: uses `::-webkit-scrollbar` for Chrome/Edge/Safari and `scrollbar-width`/`scrollbar-color` for Firefox.

## Files
- `_smooth-scrollbar-styling-hover-mixins.scss` — the mixin partial
- `demo.html` — live demo using the compiled CSS output
- `demo-compiled.css` — the plain CSS result of compiling the SCSS below, so the demo works with zero build step
- `README.md` — this file

## Mixin: `smooth-scrollbar`

### Parameters
| Parameter | Type | Default | Description |
|---|---|---|---|
| `$track-color` | Color | *required* | Background color of the scrollbar track |
| `$thumb-color` | Color | *required* | Color of the draggable thumb |
| `$thumb-hover-color` | Color | `darken($thumb-color, 12%)` | Thumb color on hover |
| `$width` | Number | `8px` | Scrollbar width (and height, for horizontal scroll) |
| `$radius` | Number | `999px` | Thumb/track border-radius |
| `$transition-duration` | Number | `0.25s` | Speed of the hover color transition |

### Usage
```scss
@import 'smooth-scrollbar-styling-hover-mixins';

.sidebar {
  @include smooth-scrollbar(#1a1a2e, #6366f1);
}

.code-block {
  @include smooth-scrollbar(
    $track-color: #0f172a,
    $thumb-color: #38bdf8,
    $width: 6px,
    $radius: 4px
  );
}
```

### Shorthand: `smooth-scrollbar-dark`
Drop-in variant using EaseMotion's default dark theme colors, no parameters needed:
```scss
.panel {
  @include smooth-scrollbar-dark;
}
```

## Compilation Result
Given:
```scss
.box-default {
  @include smooth-scrollbar-dark;
}
```
Compiles to:
```css
.box-default {
  scrollbar-width: thin;
  scrollbar-color: #38bdf8 #14141c;
}
.box-default::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.box-default::-webkit-scrollbar-track {
  background: #14141c;
  border-radius: 999px;
}
.box-default::-webkit-scrollbar-thumb {
  background: #38bdf8;
  border-radius: 999px;
  transition: background-color 0.25s ease;
}
.box-default::-webkit-scrollbar-thumb:hover {
  background: #0ea5e9;
}
.box-default::-webkit-scrollbar-corner {
  background: #14141c;
}
```

See `demo-compiled.css` for the full output used in the live demo.