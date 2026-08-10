# CSS Spring Physics Cyberpunk Neon Tabs

A pure CSS animated tabs component featuring a spring-like interaction
transition and a cyberpunk neon visual style.

The component uses CSS transitions, keyframes, transforms, and custom
properties to create responsive spring-style motion without JavaScript.

## Features

* Pure HTML and CSS
* No JavaScript
* Spring-like tab transitions
* Cyberpunk neon visual style
* Animated content panels
* Responsive layout
* Keyboard focus support
* `prefers-reduced-motion` support
* CSS custom properties for animation customization
* Self-contained browser demo

## Demo

Open `demo.html` directly in a browser.

No server, build tool, framework, or external dependency is required.

## Usage

The tabs use native radio inputs and labels:

```html
<div class="tabs">

  <input
    type="radio"
    name="system"
    id="neural"
    checked
  >

  <label
    for="neural"
    class="tab"
  >
    Neural
  </label>

  <input
    type="radio"
    name="system"
    id="quantum"
  >

  <label
    for="quantum"
    class="tab"
  >
    Quantum
  </label>

</div>
```

Include `style.css` to apply the spring animation and cyberpunk styling.

## Customization

The spring behavior can be customized with CSS custom properties:

```css
:root {
  --spring-duration: 650ms;

  --spring-easing:
    cubic-bezier(
      0.175,
      0.885,
      0.32,
      1.275
    );

  --spring-scale: 1.025;

  --spring-y: -6px;

  --glow-size: 20px;
}
```

### Available Variables

| Variable            | Description                                |
| ------------------- | ------------------------------------------ |
| `--spring-duration` | Duration of the spring transition          |
| `--spring-easing`   | Easing curve used for spring-like movement |
| `--spring-scale`    | Scale applied during tab hover             |
| `--spring-y`        | Vertical movement during hover             |
| `--glow-size`       | Size of the neon glow                      |

## Accessibility

The component uses native radio inputs and labels for tab selection.

Keyboard focus is visually indicated using `:focus-visible`.

The component also respects the user's `prefers-reduced-motion` setting.

## Responsive Behavior

The four tabs are displayed in four columns on large screens, two columns
on medium screens, and one column on smaller screens.

The content panels and neon visual also adapt to smaller viewports.

## Animation Approach

The spring effect is created using CSS timing functions and keyframes.

The main interaction uses:

```css
cubic-bezier(
  0.175,
  0.885,
  0.32,
  1.275
)
```

The panel transition additionally uses multiple keyframe stages to create
an overshoot-and-settle effect similar to spring physics.

No JavaScript or animation library is required.

## Why This Fits EaseMotion CSS

The component demonstrates how complex-looking spring motion can be
created using standard CSS alone.

Animation timing, easing, scale, movement, and glow intensity are exposed
through CSS custom properties so developers can easily adapt the effect.

The component is also responsive, keyboard-friendly, and supports reduced
motion preferences.

## Files

```text
spring-physics-cyberpunk-tabs-sr/
├── demo.html
├── style.css
└── README.md
```

## Issue

Created for:

#50324 — Add CSS Spring Physics Tabs for Cyberpunk Neon Layouts
