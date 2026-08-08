# 3D Perspective Tilt Marketing Tabs

A pure CSS animated tabs component designed for modern marketing landing
pages.

The component combines a smooth 3D perspective tilt interaction with
marketing-focused feature sections such as Launch, Scale, Collaborate, and
Grow.

## Features

* Pure HTML and CSS
* No JavaScript
* 3D perspective tilt interaction
* Smooth hover and active states
* Animated content panels
* Responsive landing-page layout
* Keyboard focus support
* Reduced-motion support
* Customizable animation parameters
* Self-contained demo

## Demo

Open `demo.html` directly in a browser.

No server, build tool, CDN, or external framework is required.

## Usage

The component uses native radio inputs and labels to control the tabs:

```html
<div class="tabs">

  <input
    type="radio"
    name="feature-tab"
    id="launch-tab"
    checked
  >

  <label for="launch-tab" class="tab">
    Launch
  </label>

  <input
    type="radio"
    name="feature-tab"
    id="scale-tab"
  >

  <label for="scale-tab" class="tab">
    Scale
  </label>

</div>
```

Include the provided `style.css` to apply the animation and layout.

## Customization

Animation behavior can be customized using CSS custom properties:

```css
:root {
  --tabs-perspective: 1000px;
  --tabs-tilt: 10deg;
  --tabs-scale: 1.04;
  --tabs-duration: 450ms;
  --tabs-easing: cubic-bezier(0.22, 1, 0.36, 1);
}
```

### Available Variables

| Variable             | Description                             |
| -------------------- | --------------------------------------- |
| `--tabs-perspective` | Controls the depth of the 3D effect     |
| `--tabs-tilt`        | Controls the amount of perspective tilt |
| `--tabs-scale`       | Controls the hover scale                |
| `--tabs-duration`    | Controls animation duration             |
| `--tabs-easing`      | Controls the animation easing           |

## Accessibility

The component provides visible keyboard focus states using
`:focus-visible`.

Native radio controls are used for tab state management, so JavaScript is
not required.

The animation also respects the user's `prefers-reduced-motion` preference.

## Responsive Behavior

The layout adapts to smaller screens by changing the tab grid from four
columns to two columns and finally to a single-column layout.

The hero content, feature panels, and decorative visuals also scale for
mobile screens.

## Why This Fits EaseMotion CSS

This component follows the animation-first philosophy of EaseMotion CSS.

It provides a reusable marketing interaction using only HTML and CSS,
without JavaScript or external animation libraries.

Perspective, tilt, scale, duration, and easing are exposed through standard
CSS custom properties, allowing developers to customize the motion without
changing the core animation.

## Files

```text
3d-perspective-tilt-marketing-tabs-sr/
├── demo.html
├── style.css
└── README.md
```

## Issue

Created for:

#50348 — Add CSS 3D Perspective Tilt Tabs for Marketing Landing Page Layouts
