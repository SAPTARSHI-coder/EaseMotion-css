# Zoom Chip

A reusable, pill-shaped chip component with a smooth zoom interaction built for **EaseMotion CSS**.

## Features

- 🎯 Pure CSS (no JavaScript required)
- ✨ Smooth zoom animation on hover
- 👆 Active press interaction
- ♿ Keyboard accessible with `:focus-visible`
- 📱 Fully responsive
- 🎨 Uses EaseMotion CSS variables and utilities

## Files

```
zoom-chip-amna/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the component stylesheet after EaseMotion CSS:

```html
<link rel="stylesheet" href="../../../easemotion.css">
<link rel="stylesheet" href="style.css">
```

Basic example:

```html
<button class="ease-zoom-chip">
  React
</button>
```

Primary variant:

```html
<button class="ease-zoom-chip ease-zoom-chip-primary">
  Featured
</button>
```

Success variant:

```html
<button class="ease-zoom-chip ease-zoom-chip-success">
  Success
</button>
```

Danger variant:

```html
<button class="ease-zoom-chip ease-zoom-chip-danger">
  Trending
</button>
```

## Accessibility

- Keyboard focus support using `:focus-visible`
- High-contrast text
- Responsive layout
- Semantic `<button>` elements

## Responsive

The chips wrap automatically on smaller screens, and the layout remains usable across desktop, tablet, and mobile devices.

## Author

Created as a GSSoC'26 contribution for EaseMotion CSS.