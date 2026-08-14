# ease-button-border-draw

A button whose border **draws itself around the perimeter on hover/focus**, using a `conic-gradient` swept via an animatable custom property (`@property`) rather than a simple opacity fade — giving the effect of a stroke being drawn in real time.

## Features

- 🎯 Border "draws" around the full perimeter using an animated conic-gradient sweep
- 🖱️ Interactive triggers: hover and keyboard focus (`:focus-visible`)
- 🎨 Fully customizable via CSS custom properties
- 🌗 Light/dark mode support via `[data-theme]`
- 📱 Responsive font/padding sizing on smaller screens
- ♿ Accessible: visible focus-visible outline, keyboard-triggerable
- 🧠 Respects `prefers-reduced-motion`
- 🔧 Graceful fallback for browsers without `@property` support

## Usage

```html
<button class="ease-border-draw-btn" type="button">
  Hover Me
</button>
```

That's it — no wrapper elements or extra markup needed. The drawing effect is achieved entirely with a `::before` pseudo-element and a masked conic-gradient.

## How it works

1. A `::before` pseudo-element sits behind the button using `mask-composite: exclude` to only show a ring (the border), not the full box.
2. The ring's color is painted using a `conic-gradient` whose sweep angle is controlled by a custom property `--ease-border-draw-sweep`.
3. Because `--ease-border-draw-sweep` is registered via `@property` with `syntax: "<angle>"`, it can be smoothly transitioned — meaning the gradient sweep animates from 0deg to 360deg on hover, visually "drawing" the border around the button.

## CSS Variables

| Variable                          | Default    | Description                          |
|-------------------------------------|------------|----------------------------------------|
| `--ease-border-draw-color`          | `#6366f1`  | Border draw color                     |
| `--ease-border-draw-bg`             | `#ffffff`  | Button background color               |
| `--ease-border-draw-text`           | `#1e1b4b`  | Button text color                     |
| `--ease-border-draw-radius`         | `0.6rem`   | Button corner radius                  |
| `--ease-border-draw-thickness`      | `3px`      | Border thickness                      |
| `--ease-border-draw-duration`       | `0.8s`     | Duration of the draw animation         |
| `--ease-border-draw-easing`         | `ease`     | Animation easing function              |
| `--ease-border-draw-font-size`      | `1rem`     | Button text size                       |
| `--ease-border-draw-padding`        | `0.85rem 2rem` | Button padding                    |

## Accessibility

- Border-draw effect also triggers on `:focus-visible`, so keyboard users get the same feedback as mouse users.
- A clear focus outline is shown in addition to the drawn border.
- Under `prefers-reduced-motion: reduce`, the border appears instantly instead of animating.

## Browser Support

The animated sweep relies on `@property` (Chrome, Edge, Safari 16.4+, Firefox 128+). Older browsers fall back to a simple opacity-based border reveal via the `@supports` block, so the component degrades gracefully rather than breaking.