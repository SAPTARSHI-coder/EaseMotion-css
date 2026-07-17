# Neon Glow Popover

A pure CSS, zero-JavaScript popover with a smooth neon glow open animation, built for creative portfolio layouts.

## Why `<details>`/`<summary>`?

Native disclosure elements give keyboard accessibility (Enter/Space to toggle, Escape-friendly, screen-reader announced state) for free, with no ARIA wiring or JS event listeners needed.

## Usage

```html
<details class="neon-popover neon-popover--cyan">
  <summary>View Project</summary>
  <div class="popover-content">
    <h3>Title</h3>
    <p>Body content goes here.</p>
  </div>
</details>
```

## Customization

All visuals are driven by CSS custom properties, settable per instance:

| Property | Default | Description |
|---|---|---|
| `--glow-color` | `#0ff` | Core neon accent color |
| `--glow-intensity` | `1` | Multiplier for glow blur/spread |
| `--animation-duration` | `0.35s` | Open transition speed |
| `--animation-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing curve (default gives a slight overshoot "pop") |
| `--popover-scale` | `0.85` | Starting scale before the pop-in |
| `--border-radius` | `12px` | Corner rounding on trigger and panel |

```html
<details class="neon-popover" style="--glow-color:#ffae00; --animation-duration:0.5s;">
  ...
</details>
```

Three ready-made color variants are included: `.neon-popover--cyan`, `.neon-popover--magenta`, `.neon-popover--violet`.

## Accessibility

- Fully keyboard operable via native `<details>` behavior — no `tabindex` or ARIA hacks required.
- `:focus-visible` gets its own glow + outline state so keyboard users get clear feedback.
- Respects `prefers-reduced-motion` by disabling the pop-in animation and transitions.

## Known limitation

Because closing a `<details>` element removes its content synchronously, there's no closing animation (only the open transition is animatable with pure CSS + native `<details>`). This is a documented tradeoff of the JS-free approach.

## Browser support

Works in all modern evergreen browsers (Chrome, Firefox, Safari, Edge). `color-mix()` used for the inner glow gracefully degrades to a solid inset shadow color in older engines.
# CSS Neon Glow Popover

A pure CSS Neon Glow Popover designed for Interactive Interface layouts.

## Features

- Pure HTML & CSS
- Neon Glow Animation
- Interactive Interface Design
- Responsive Layout
- Keyboard Accessible
- CSS Custom Properties
- No JavaScript

## Technologies

- HTML5
- CSS3

## Folder Structure

```
neon-glow-popover/
├── demo.html
├── style.css
└── README.md
```

## Usage

Open `demo.html` in any modern browser.

