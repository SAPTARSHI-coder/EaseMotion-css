# Smooth Scrollbar Styling & Hover Mixins

A lightweight, reusable set of SCSS mixins for EaseMotion CSS that add
clean, customizable scrollbar styling with a smooth hover interaction —
cross-browser support included (WebKit + Firefox).

## File

_smooth-scrollbar-styling-hover-mixins.scss

## Mixin: custom-scrollbar

### Parameters

| Parameter            | Type    | Default     | Description                                  |
|-----------------------|---------|-------------|-----------------------------------------------|
| $width              | Number  | 8px       | Thickness of the scrollbar                    |
| $track-color        | Color   | #f1f1f1   | Background color of the scrollbar track       |
| $thumb-color        | Color   | #c1c1c1   | Default color of the scrollbar thumb          |
| $thumb-hover-color  | Color   | #888888   | Thumb color on hover                          |
| $radius             | Number  | 4px       | Border radius of the thumb                    |
| $smooth-scroll      | Boolean | true      | Enables native scroll-behavior: smooth      |

### How it works

- Uses ::-webkit-scrollbar pseudo-elements for Chrome, Edge, Safari, and Opera
- Uses standard scrollbar-width / scrollbar-color for Firefox
- On thumb :hover, the color shifts to $thumb-hover-color

## Mixin: hover-glow

### Parameters

| Parameter | Type   | Default   | Description        |
|-----------|--------|-----------|---------------------|
| $color  | Color  | #4a90e2 | Glow color          |
| $blur   | Number | 12px    | Glow blur radius    |

Adds a soft box-shadow glow on :hover — useful for cards, panels, and buttons.

## Usage

### 1. Import the partial

@use "smooth-scrollbar-styling-hover-mixins" as *;

### 2. Basic usage (uses all defaults)

.ease-scroll-panel {
  @include custom-scrollbar();
}

.glow-card {
  @include hover-glow();
}

### 3. Custom themed usage

.ease-sidebar {
  @include custom-scrollbar(
    $width: 10px,
    $track-color: #1e1e1e,
    $thumb-color: #e63946,
    $thumb-hover-color: #ff6b6b,
    $radius: 8px
  );
}

.premium-card {
  @include hover-glow($color: #ffb347, $blur: 20px);
}

## Compiled CSS Output (verified with Dart Sass)

.ease-scroll-panel {
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 #f1f1f1;
}
.ease-scroll-panel::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.ease-scroll-panel::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.ease-scroll-panel::-webkit-scrollbar-thumb {
  background-color: #c1c1c1;
  border-radius: 4px;
  transition: background-color 0.25s ease;
}
.ease-scroll-panel::-webkit-scrollbar-thumb:hover {
  background-color: #888888;
}
.glow-card {
  transition: box-shadow 0.25s ease;
}
.glow-card:hover {
  box-shadow: 0 0 12px #4a90e2;
}

## Browser Support

| Browser       | Support                                                       |
|----------------|-----------------------------------------------------------------|
| Chrome / Edge  | Full (::-webkit-scrollbar)                                 |
| Safari         | Full (::-webkit-scrollbar)                                 |
| Firefox        | Partial (scrollbar-width / scrollbar-color, no hover state on thumb) |

Firefox does not currently support styled hover states on scrollbar
thumbs via CSS, so the scrollbar hover effect is WebKit-only. Base
color styling still applies in Firefox via scrollbar-color. The
hover-glow mixin works identically across all browsers.

## Why this fits EaseMotion CSS

- Zero dependencies, pure SCSS
- Fully configurable via mixin parameters
- Cross-browser, with documented limitations
- Follows modern Sass standards (@use module system)