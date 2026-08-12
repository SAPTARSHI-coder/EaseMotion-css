# Menu Burger Cross

A morphing hamburger menu icon that transitions into a close (X) icon on click. The top and bottom lines rotate to form the X while the middle line fades out.

## Features

- Smooth rotation + translation animation for the X shape
- Middle line fades out on active state
- Customizable via CSS custom properties
- Multiple themed examples (colors, sizes, line thicknesses)

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="hamburger" onclick="this.classList.toggle('active')">
  <span></span>
  <span></span>
  <span></span>
</div>
```

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--mbc-duration` | `0.3s` | Animation duration |
| `--mbc-line-color` | `#333` | Line color (inactive) |
| `--mbc-active-color` | `#e74c3c` | Line color (active) |
| `--mbc-line-thickness` | `3px` | Width of each line |
| `--mbc-gap` | `8px` | Space between lines |
