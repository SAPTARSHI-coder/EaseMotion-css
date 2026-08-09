# SCSS Smooth Scrollbar Styling & Hover Mixins

A lightweight, reusable SCSS mixin designed to style scrollbars with smooth, customizable appearances and interactive hover states.

It fully supports modern WebKit-based browsers (Chrome, Edge, Safari, Opera) via the `::-webkit-scrollbar` pseudo-elements, and provides native fallback support for Firefox using the standard `scrollbar-width` and `scrollbar-color` properties.

## Features
- **Cross-Browser Compatibility**: Supports both WebKit (Chrome/Safari) and Firefox APIs natively.
- **Interactive Hover States**: Thumb color automatically brightens or changes when the user hovers over the scrollable container, providing modern tactile feedback.
- **Active Drag State**: Thumb color darkens slightly while being dragged for immediate interaction feedback.
- **Smooth Scrolling Integration**: Automatically applies `scroll-behavior: smooth` to the container.
- **Highly Configurable**: All sizing and colors are exposed as SCSS parameters.

## Parameters

| Parameter | Type | Default Value | Description |
|-----------|------|---------------|-------------|
| `$width` | Number | `8px` | Thickness of the vertical/horizontal scrollbar |
| `$track-color` | Color | `#f1f1f1` | Background color of the scrollbar track |
| `$thumb-color` | Color | `#c1c1c1` | Color of the scrollbar thumb in its default state |
| `$thumb-hover-color` | Color | `#888888` | Color of the scrollbar thumb when hovered |
| `$radius` | Number | `4px` | Border radius applied to both the track and the thumb |
| `$smooth-scroll` | Boolean | `true` | Injects `scroll-behavior: smooth` into the parent element |

## Usage Examples

### 1. Basic Usage (Defaults)

Simply include the mixin inside any scrollable container to apply the default light theme.

```scss
@use 'smooth-scrollbar-styling-hover-mixins' as *;

.ease-scroll-panel {
  height: 400px;
  overflow-y: auto;
  
  @include ease-smooth-scrollbar();
}
```

### 2. Custom Themed Usage (Dark Mode)

Easily customize the mixin by passing your own theme variables or raw colors.

```scss
@use 'smooth-scrollbar-styling-hover-mixins' as *;

.ease-sidebar-dark {
  overflow-y: scroll;
  
  @include ease-smooth-scrollbar(
    $width: 10px,
    $track-color: #1e1e1e,
    $thumb-color: #4a4a4a,
    $thumb-hover-color: #e63946, // Vibrant hover accent
    $radius: 8px
  );
}
```

## Utility Classes Included
If you prefer not to write custom SCSS, this module compiles two ready-to-use CSS utility classes:
- `.ease-scrollbar`: Standard light theme scrollbar.
- `.ease-scrollbar-dark`: Pre-configured dark theme scrollbar with a vibrant red hover state.

## Why it fits EaseMotion CSS
EaseMotion champions high-fidelity, polished interactions. The default browser scrollbar is often rigid and clashes with modern design aesthetics. By utilizing this mixin, developers can rapidly deploy visually cohesive, interactive scrollbars that respond smoothly to user intent across all major browsers with zero JavaScript.
