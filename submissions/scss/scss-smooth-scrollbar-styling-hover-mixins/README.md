# Smooth Scrollbar Styling & Hover Mixins

A lightweight, reusable SCSS mixin for EaseMotion CSS that adds clean,
customizable scrollbar styling with a smooth hover interaction —
cross-browser support included (WebKit + Firefox).

## File

```
_smooth-scrollbar-styling-hover-mixins.scss
```

## Mixin: `ease-smooth-scrollbar`

### Parameters

| Parameter            | Type    | Default     | Description                                  |
|-----------------------|---------|-------------|-----------------------------------------------|
| `$width`              | Number  | `8px`       | Thickness of the scrollbar                    |
| `$track-color`        | Color   | `#f1f1f1`   | Background color of the scrollbar track       |
| `$thumb-color`        | Color   | `#c1c1c1`   | Default color of the scrollbar thumb          |
| `$thumb-hover-color`  | Color   | `#888888`   | Thumb color when the container is hovered     |
| `$radius`             | Number  | `4px`       | Border radius for track and thumb             |
| `$smooth-scroll`      | Boolean | `true`      | Enables native `scroll-behavior: smooth`      |

### How it works

- Uses `::-webkit-scrollbar` pseudo-elements for Chrome, Edge, Safari, and Opera
- Uses standard `scrollbar-width` / `scrollbar-color` for Firefox
- On container `:hover`, the thumb color brightens for visual feedback
- On thumb `:active` (drag), the color darkens slightly using `color.adjust()`
  (modern Sass color module — no deprecated `darken()`)

## Usage

### 1. Import the partial

```scss
@use "smooth-scrollbar-styling-hover-mixins" as *;
```

### 2. Basic usage (uses all defaults)

```scss
.ease-scroll-panel {
  @include ease-smooth-scrollbar();
}
```

### 3. Custom themed usage

```scss
.ease-sidebar {
  @include ease-smooth-scrollbar(
    $width: 10px,
    $track-color: #1e1e1e,
    $thumb-color: #e63946,
    $thumb-hover-color: #ff6b6b,
    $radius: 8px
  );
}
```

### 4. Ready-made utility classes

The partial also ships two ready-to-use classes so you don't need to
write any SCSS at all:

```html
<div class="ease-scrollbar">...</div>
<div class="ease-scrollbar-dark">...</div>
```

## Compiled CSS Output (verified with Dart Sass)

```css
.ease-scrollbar {
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 #f1f1f1;
}
.ease-scrollbar::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.ease-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}
.ease-scrollbar::-webkit-scrollbar-thumb {
  background-color: #c1c1c1;
  border-radius: 4px;
  transition: background-color 0.25s ease, width 0.25s ease;
}
.ease-scrollbar:hover::-webkit-scrollbar-thumb {
  background-color: #888888;
}
.ease-scrollbar::-webkit-scrollbar-thumb:active {
  background-color: rgb(110.5, 110.5, 110.5);
}
```

> Compiled with Dart Sass (`sass` CLI) — zero deprecation warnings.

## Browser Support

| Browser          | Support                          |
|-------------------|-----------------------------------|
| Chrome / Edge      | ✅ Full (`::-webkit-scrollbar`)   |
| Safari             | ✅ Full (`::-webkit-scrollbar`)   |
| Firefox            | ✅ Partial (`scrollbar-width`/`scrollbar-color`, no hover state) |

Firefox does not currently support styled hover states on scrollbar
thumbs via CSS, so the hover effect is WebKit-only. The base color
styling still applies in Firefox via `scrollbar-color`.

## Why this fits EaseMotion CSS

- Zero dependencies, pure SCSS
- Fully configurable via mixin parameters
- Ships with ready-to-use utility classes for instant use
- Cross-browser, with documented limitations
- Follows modern Sass standards (`@use`, `sass:color` module — no
  deprecated global functions)