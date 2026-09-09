# Neumorphic Progress Bar (Pastel Styling)

A tactile, soft-depth CSS progress bar component featuring inset neumorphic tracks, vibrant pastel color gradients, animated shimmer effects, and multi-step progress indicators.

---

## 1. What does this do?
The **Neumorphic Pastel Progress Bar** renders tactile progress indicators (linear bars and multi-step steppers) using soft neumorphic shadows, pastel color schemes, and CSS shimmer keyframes.

## 2. How is it used?
Wrap the progress fill inside an inset neumorphic track container:

```html
<div class="neumorph-track" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="Task Progress">
  <div class="neumorph-fill fill-75 pastel-rose">
    <span class="glow-knob"></span>
  </div>
</div>
```

## 3. Why is it useful?
- **Tactile UI Aesthetic**: Combines soft inset neumorphic shadows (`inset 4px 4px 8px ...`) with vibrant pastel gradients (`#f472b6` to `#fb7185`).
- **Zero JavaScript Dependencies**: Entirely driven by pure HTML5 and CSS3 animations.
- **Accessibility & ARIA First**: Includes standard `role="progressbar"` markup with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`.
- **Motion Safety**: Automatically halts shimmer and pulse animations when `prefers-reduced-motion: reduce` is detected.

---

## Features

- **Soft Inset Neumorphism**: Sunken track effects with dual light/dark drop-shadows.
- **Pastel Color Gradients**: Pre-configured pastel themes (Rose, Mint, Lavender).
- **CSS Shimmer Effect**: Infinite smooth gradient shimmer overlay.
- **Multi-Step Stepper**: Neumorphic step indicator for checkout and wizard flows.
- **Responsive Layout**: Adapts gracefully across desktop, tablet, and mobile displays.

---

## Folder Structure

```
submissions/examples/neumorphic-progress-bar-pastel/
├── demo.html    # Standalone HTML preview
├── style.css    # Pure CSS styles and custom properties
└── README.md    # Documentation and usage guide
```

---

## CSS Custom Properties

| Custom Property | Default Value | Description |
|---|---|---|
| `--neu-bg` | `#eef2f7` | Neumorphic background surface |
| `--neu-shadow-dark` | `#d1d9e6` | Dark shadow offset color |
| `--neu-shadow-light` | `#ffffff` | Light highlight shadow color |
| `--pastel-rose-start` | `#f472b6` | Rose gradient start color |
| `--pastel-rose-end` | `#fb7185` | Rose gradient end color |
| `--pastel-mint-start` | `#34d399` | Mint gradient start color |
| `--pastel-mint-end` | `#38bdf8` | Mint gradient end color |
| `--pastel-lavender-start` | `#a78bfa` | Lavender gradient start color |
| `--pastel-lavender-end` | `#c084fc` | Lavender gradient end color |

---

## Accessibility & Reduced Motion

- **ARIA Semantics**: Implements `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`.
- **Reduced Motion**: Automatically disables CSS keyframe animations when `prefers-reduced-motion: reduce` is enabled in system settings.

---

## Browser Compatibility

- Compatible with all modern evergreen browsers (Chrome, Firefox, Safari, Edge).
