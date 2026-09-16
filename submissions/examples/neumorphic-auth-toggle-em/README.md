# Neumorphic Biometric Auth Toggle Switch

> A tactile, soft-shadow toggle switch component for biometric authentication and security settings — built with **pure CSS**, no JavaScript required.

## Preview

| Light Theme | Dark Theme |
|---|---|
| Soft raised knob with dual shadow depth | Inverted neumorphic shadows on dark surface |

## Features

- **Pure CSS** — zero JavaScript, uses `input[type="checkbox"]` + sibling selector (`+ .switch-label`)
- **Neumorphic design** — multi-layered `box-shadow` for realistic raised/inset depth
- **Smooth transitions** — knob slide, glow pulse, and press squish animations
- **Dark & Light themes** — driven entirely by CSS custom properties
- **Accessible** — `role="switch"`, `aria-checked`, `aria-labelledby`, `:focus-visible` ring
- **Keyboard navigable** — full Tab + Space/Enter interaction via native checkbox
- **Reduced motion** — respects `prefers-reduced-motion` media query
- **Responsive** — adapts layout for mobile viewports

## Files

```
submissions/examples/neumorphic-auth-toggle-em/
├── demo.html    — Demo page with 6 toggle variants (3 light + 3 dark)
├── style.css    — All styles, design tokens, and responsive rules
└── README.md    — This file
```

## Design Tokens (CSS Custom Properties)

| Token | Light | Dark | Purpose |
|---|---|---|---|
| `--nm-bg` | `#e0e5ec` | `#2b2d3a` | Panel background |
| `--nm-shadow-dark` | `#a3b1c6` | `#1e1f2b` | Dark shadow direction |
| `--nm-shadow-light` | `#ffffff` | `#383a4a` | Light shadow direction |
| `--nm-accent` | `#6c63ff` | `#7c74ff` | Active toggle color |
| `--nm-accent-glow` | `rgba(108,99,255,.45)` | `rgba(124,116,255,.5)` | Glow halo on active |
| `--nm-knob` | `#f0f2f5` | `#3d3f50` | Knob fill |
| `--nm-focus` | `rgba(108,99,255,.55)` | `rgba(124,116,255,.6)` | Focus-visible ring |

You can override any token on a parent element to create custom color variants.

## Usage

```html
<div class="switch">
  <input
    type="checkbox"
    id="my-toggle"
    class="switch__input"
    role="switch"
    aria-checked="false"
    aria-labelledby="my-label"
  />
  <label for="my-toggle" class="switch__label">
    <span class="switch__knob"></span>
  </label>
</div>
```

For dark theme, wrap the component inside an element with `class="panel--dark"`.

## Acceptance Criteria ✅

- [x] Toggle state switches smoothly using pure CSS transitions without JS
- [x] Box shadows adapt correctly for pressed and active states
- [x] Focus ring is visible for keyboard navigation (`:focus-visible`)
- [x] Includes accessible label and ARIA attributes
- [x] Supports dark and light background container themes
- [x] Respects `prefers-reduced-motion`

## Browser Support

- Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- Requires `:focus-visible` (supported in all modern browsers)

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) project.
