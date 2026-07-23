# Pure CSS Zoom-In Popover (popover-zoom-in)

A production-grade, accessible **Pure CSS Animated Popover** component featuring a fluid **Zoom-In entrance transition** and a **Modern SaaS visual style** for the **EaseMotion CSS** animation library.

> **Zero JavaScript Dependency**: Built purely using HTML5 `<details>` & `<summary>`, GPU-accelerated CSS keyframe animation (`scale`, `translateY`, `opacity`), CSS custom properties, and accessible semantic markup.

---

## Features

- **Zero JS Dependency**: Toggle interaction, keyboard navigation, and open/close states are managed purely via HTML5 `<details>` & `<summary>`.
- **Zoom-In Motion Mechanics**: GPU-friendly scale-up entrance (`0.92 -> 1`) combined with a subtle vertical displacement (`-8px -> 0px`) and opacity fade (`0 -> 1`) using a custom cubic-bezier curve (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Modern SaaS Aesthetic**: Polished white card elevation, soft borders, multi-layered depth shadows, role badges, and clean system typography.
- **Fully Themeable via CSS Variables**: Every animation timing, transform scale, displacement distance, shadow, and color parameter is exposed as a CSS custom property in `:root`.
- **Accessible & Screen-Reader Ready**: Native keyboard navigation (`Tab`, `Space`, `Enter`), `:focus-visible` ring indicators, semantic HTML5 structure, and full `@media (prefers-reduced-motion)` support.
- **Responsive & Mobile Friendly**: Adapts smoothly across desktop, tablet, and mobile screens without horizontal scrolling or viewport clipping.

---

## Folder Structure

```
submissions/examples/popover-zoom-in/
├── demo.html        # Self-contained HTML markup & accessible SaaS popover card
├── index.html       # Entrypoint alias
├── style.css        # Modular CSS with variables, zoom motion & SaaS styling
├── README.md        # User guide, CSS custom variable tables, accessibility parameters
└── preview.png      # Real screenshot reference
```

---

## CSS Custom Variables

All motion and visual parameters are exposed in `:root` for customization:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-duration` | `350ms` | Transition duration for opening and closing |
| `--popover-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Smooth ease-out cubic bezier curve |
| `--popover-scale-start` | `0.92` | Initial scale factor during the zoom entrance |
| `--popover-translate-start` | `-8px` | Initial vertical displacement during entrance |
| `--popover-width` | `320px` | Popover card width |
| `--popover-radius` | `16px` | Border radius for popover card |
| `--popover-bg` | `#ffffff` | Popover card background color |
| `--popover-border` | `#e2e8f0` | Popover card border color |
| `--popover-shadow` | `0 20px 40px -10px rgba(...)` | Multi-layered depth box shadow |
| `--color-brand-primary` | `#4f46e5` | Primary brand accent color |

---

## How It Works

### Pure CSS Interaction Mechanism (`<details>/<summary>`)
An HTML5 `<details class="popover-details">` wraps the summary trigger and popover card dialog.
- Pressing `Space` or `Enter` or clicking on `<summary>` toggles the `open` state natively in browsers without any JavaScript.
- When the `<details>` element receives the `open` attribute, the `.popover-card` triggers the `@keyframes easeZoomIn` animation:

```css
@keyframes easeZoomIn {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-8px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}
```

---

## Accessibility Features

- **Keyboard Navigation**: Native HTML `<summary>` element responds to `Tab` focus and `Space`/`Enter` key presses.
- **Visible Focus Styles**: Focus rings are rendered via `:focus-visible` with high-contrast outlines.
- **Semantic HTML**: Uses semantic `<details>`, `<summary>`, `<nav>`, `<header>`, `<main>`, and `<button>` elements.
- **Reduced Motion**: Respects `@media (prefers-reduced-motion: reduce)` by disabling `scale` and `translateY` transforms while maintaining a clean opacity fade.

---

## Browser Support

- **Chrome/Edge**: 79+
- **Safari**: 13+
- **Firefox**: 98+
- **Opera**: 66+

---

## License

Part of the **EaseMotion CSS** open-source animation library. Licensed under MIT.
