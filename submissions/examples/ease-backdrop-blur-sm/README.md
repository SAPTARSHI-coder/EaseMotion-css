# ease-backdrop-blur-sm

A utility class that applies a small backdrop blur effect for modern glassmorphism designs.

## Usage

```html
<div class="ease-backdrop-blur-sm">
    Glass Content
</div>
```

## CSS

```css
.ease-backdrop-blur-sm {
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
}
```

## Features

* Small blur radius (4px)
* Glassmorphism effect
* Lightweight utility
* Modern UI appearance
* Works well with semi-transparent backgrounds

## Requirements

For best results use:

```css
background: rgba(255,255,255,0.2);
```

because backdrop blur is only visible when the background is partially transparent.

## Example Use Cases

* Glass cards
* Navigation bars
* Modals
* Overlays
* Frosted glass UI elements
