# CSS Spring Physics Marketing Landing Page Tabs

A pure CSS animated tabs component designed for modern marketing landing
pages.

It combines spring-inspired tab transitions with animated content panels
and a responsive landing-page presentation.

## Features

* Pure HTML and CSS
* No JavaScript
* Spring-inspired tab interactions
* Animated content switching
* Responsive marketing landing-page layout
* Keyboard focus support
* Reduced-motion support
* CSS custom properties for animation control
* No external dependencies
* Self-contained demo

## Demo

Open `demo.html` directly in a browser.

No server or build tool is required.

## Usage

The tabs use native radio inputs and labels:

```html
<div class="tabs">

  <input
    type="radio"
    name="feature"
    id="strategy"
    checked
  >

  <label for="strategy" class="tab">
    <span>01</span>
    <strong>Strategy</strong>
    <small>Define your direction</small>
  </label>

  <input
    type="radio"
    name="feature"
    id="design"
  >

  <label for="design" class="tab">
    <span>02</span>
    <strong>Design</strong>
    <small>Shape your experience</small>
  </label>

</div>
```

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

## Customization

Spring behavior is controlled using CSS custom properties:

```css
:root {
  --spring-duration: 600ms;

  --spring-easing:
    cubic-bezier(
      0.175,
      0.885,
      0.32,
      1.275
    );

  --spring-scale: 1.035;

  --spring-lift: -7px;

  --panel-duration: 550ms;
}
```

### CSS Variables

| Variable            | Purpose                               |
| ------------------- | ------------------------------------- |
| `--spring-duration` | Controls interaction duration         |
| `--spring-easing`   | Controls the spring-like easing curve |
| `--spring-scale`    | Controls hover scale                  |
| `--spring-lift`     | Controls vertical movement            |
| `--panel-duration`  | Controls content-panel animation      |

## Accessibility

The component uses native radio inputs for tab selection.

Visible `:focus-visible` styling is provided for keyboard navigation.

The component also respects:

```css
@media (prefers-reduced-motion: reduce)
```

to reduce animation for users who prefer reduced motion.

## Responsive Behavior

The layout adapts to different screen sizes.

* Desktop uses a two-column hero layout.
* Tablet switches the hero to a single-column layout.
* Mobile stacks the tabs vertically.
* Content panels adapt to smaller screens.

## Animation Details

The spring effect uses a custom cubic-bezier curve:

```css
cubic-bezier(
  0.175,
  0.885,
  0.32,
  1.275
)
```

Content panels use multi-stage keyframes to produce an
overshoot-and-settle effect.

The implementation uses only CSS transitions, transforms, and keyframes.

## Why It Fits EaseMotion CSS

This component demonstrates a reusable animation pattern using standard CSS
features without JavaScript or external animation libraries.

The spring timing, easing, scale, and movement are exposed as CSS custom
properties so developers can easily adapt the animation to their own
interfaces.

The design is particularly suited to marketing landing pages, SaaS
websites, portfolios, product launches, and feature sections.

## Files

```text
spring-physics-marketing-tabs/
├── demo.html
├── style.css
└── README.md
```

## Issue

This submission addresses:

**#50316 — Add CSS Spring Physics Tabs for Marketing Landing Page Layouts**
