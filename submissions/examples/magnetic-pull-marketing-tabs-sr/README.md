# CSS Magnetic Pull Marketing Tabs

A pure CSS animated tabs component designed for modern marketing landing
pages.

The component creates a smooth magnetic-style pull interaction when users
hover over feature tabs, making the landing page navigation feel more
interactive and tactile.

## Features

* Pure HTML and CSS
* No JavaScript
* Magnetic pull hover effect
* Smooth active tab transitions
* Animated content panels
* Responsive layout
* Keyboard focus support
* Reduced-motion support
* CSS custom properties for animation control
* Self-contained demo

## Demo

Open `demo.html` directly in a browser.

No server, build tool, CDN, or external framework is required.

## Usage

The tabs use native radio inputs and labels:

```html
<div class="tabs">

  <input
    type="radio"
    name="feature"
    id="create"
    checked
  >

  <label for="create" class="tab">
    Create
  </label>

  <input
    type="radio"
    name="feature"
    id="launch"
  >

  <label for="launch" class="tab">
    Launch
  </label>

</div>
```

Include `style.css` to apply the magnetic animation and responsive layout.

## Customization

The magnetic interaction can be customized using CSS custom properties:

```css
:root {
  --magnetic-x: 7px;
  --magnetic-y: -6px;
  --magnetic-scale: 1.04;
  --magnetic-duration: 400ms;
  --magnetic-easing: cubic-bezier(0.22, 1, 0.36, 1);
}
```

### Available Variables

| Variable              | Description              |
| --------------------- | ------------------------ |
| `--magnetic-x`        | Horizontal pull distance |
| `--magnetic-y`        | Vertical pull distance   |
| `--magnetic-scale`    | Hover scale              |
| `--magnetic-duration` | Animation duration       |
| `--magnetic-easing`   | Animation easing         |

## Accessibility

Native radio inputs are used to control the tab states, avoiding JavaScript
while maintaining keyboard interaction.

Visible focus styling is provided using `:focus-visible`.

The component also respects the user's `prefers-reduced-motion` setting.

## Responsive Behavior

The four feature tabs become two columns on medium screens and a single
column on smaller screens.

The hero content and feature panels also adapt to mobile viewport sizes.

## Why This Fits EaseMotion CSS

This component follows the animation-first philosophy of EaseMotion CSS by
creating a tactile interaction using only HTML and CSS.

It does not require JavaScript or external animation libraries.

The animation timing, easing, pull distance, and scale are exposed as
standard CSS custom properties, allowing developers to customize the effect
easily.

## Technical Note

Because this is intentionally a zero-JavaScript component, the magnetic
effect uses CSS transforms and hover states rather than tracking the exact
mouse coordinates.

This keeps the component lightweight and suitable for the CSS-only
philosophy of EaseMotion CSS.

## Files

```text
magnetic-pull-marketing-tabs-sr/
├── demo.html
├── style.css
└── README.md
```

## Issue

Created for:

#50333 — Add CSS Magnetic Pull Tabs for Marketing Landing Page Layouts
