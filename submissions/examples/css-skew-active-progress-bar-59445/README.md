# CSS Skew-Active Progress Bar for Fintech Dashboard Layouts

A futuristic, pure HTML5 and CSS3 **Skew-Active Progress Bar** component designed for next-generation fintech dashboards, high-frequency trading platforms, and SaaS financial analytics. Features dynamic angled skew transforms, active animated gradient stripe sweeps, glassmorphism cards, and complete accessibility support.

---

## 🌟 Overview

The **Skew-Active Progress Bar** redefines traditional rectangular progress indicators by applying a sharp hardware-accelerated CSS `transform: skewX(-15deg)` slant paired with a continuous active gradient stripe animation (`@keyframes activeStripeMove`). Ideal for high-tech banking and investment dashboards seeking a sleek, energetic visual identity.

---

## ✨ Features

- **Angled Skew Geometry**: CSS hardware-accelerated slant transform (`transform: skewX(-15deg)`).
- **Active Stripe Animation**: Continuous `@keyframes` moving diagonal stripe overlay conveying live active progress data processing.
- **Interactive Skew Shift**: Dynamic angle tilt shift on hover (`--skew-angle-hover: -18deg`) with card elevation and fill glow reflections.
- **Fintech Glassmorphism Cards**: Sleek dark mode container cards with backdrop blur (`backdrop-filter: blur(16px)`), subtle borders, and elevation depth.
- **Multiple Color Gradients**: Preset CSS linear gradients for Emerald (Revenue), Indigo (Investments), Amber (Savings), Rose (Budget), Violet (VC Funds), and Cyan (Multi-segment).
- **Multiple Skew Angle Modifiers**: Moderate (`.skew-angle-sm`), Standard (`.skew-angle-md`), and Sharp (`.skew-angle-lg`) angle variants.
- **Pure HTML5 & CSS3**: Zero JavaScript or external library dependencies.
- **Accessibility & Motion Ready**: Built with ARIA roles (`role="progressbar"`), `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, keyboard `:focus-visible` states, and full `prefers-reduced-motion: reduce` fallback support.

---

## 📁 Folder Structure

```
submissions/examples/css-skew-active-progress-bar-59445/
├── demo.html     # Interactive showcase page featuring dashboard cards and skew variants
├── style.css     # Complete CSS design system, CSS variables, and keyframe animations
└── README.md     # Full component documentation and usage guide
```

---

## 🚀 Installation

1. Copy `style.css` into your project's CSS assets directory.
2. Link `style.css` in your HTML document `<head>`:

```html
<link rel="stylesheet" href="path/to/style.css">
```

---

## 💡 Usage

### Basic Single Skew Progress Bar Example

```html
<div class="progress-container" role="progressbar" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100" aria-label="Monthly Revenue Progress: 76%">
  <div class="progress-track skew-track">
    <div class="progress-fill fill-emerald" style="--progress-width: 76%;">
      <div class="active-stripe-sweep" aria-hidden="true"></div>
    </div>
  </div>
</div>
```

---

## 🎨 CSS Custom Properties (Variables)

Customize global component tokens defined in `:root`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--skew-angle` | `-15deg` | Default slant skew angle for tracks |
| `--skew-angle-hover` | `-18deg` | Increased slant angle applied on card hover |
| `--stripe-speed` | `1.8s` | Speed of the active stripe sweep animation cycle |
| `--track-height` | `14px` | Default progress bar height |
| `--gradient-emerald` | `linear-gradient(...)` | Emerald fill token |
| `--gradient-indigo` | `linear-gradient(...)` | Indigo fill token |
| `--gradient-amber` | `linear-gradient(...)` | Amber gold fill token |
| `--gradient-rose` | `linear-gradient(...)` | Rose coral fill token |
| `--gradient-violet` | `linear-gradient(...)` | Violet purple fill token |

---

## 🛠️ Customization Guide

### Setting Fill Percentage dynamically

Set the percentage inline using the `--progress-width` CSS variable:

```html
<!-- Set progress fill to 85% -->
<div class="progress-fill fill-indigo" style="--progress-width: 85%;">
  <div class="active-stripe-sweep" aria-hidden="true"></div>
</div>
```

### Custom Skew Angle Modifiers

Wrap the progress bar inside a skew modifier class:

```html
<!-- Sharp Skew Angle (-20deg) -->
<div class="progress-container skew-angle-lg progress-thick" role="progressbar" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100" aria-label="Sharp Skew Bar">
  <div class="progress-track skew-track">
    <div class="progress-fill fill-violet" style="--progress-width: 94%;">
      <div class="active-stripe-sweep" aria-hidden="true"></div>
    </div>
  </div>
</div>
```

---

## ♿ Accessibility (a11y)

- **ARIA Semantics**: Includes `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and descriptive `aria-label` tags.
- **Decorative Elements**: The `.active-stripe-sweep` element includes `aria-hidden="true"` so screen readers ignore visual animation overlays.
- **Keyboard Focus**: Dashboard cards feature `tabindex="0"` and outline rings styled with `:focus-visible`.
- **Reduced Motion**: Automatically removes skew transforms and halts active stripe movement under `@media (prefers-reduced-motion: reduce)`.

---

## 📱 Responsive Behavior

- Grid layout powered by CSS Grid `repeat(auto-fit, minmax(340px, 1fr))`.
- Stacks vertically on mobile screens (< 640px).
- Uses `clamp()` for responsive header typography scaling.

---

## 🌐 Browser Compatibility

| Browser | Supported Version |
| :--- | :--- |
| **Chrome / Edge** | 88+ |
| **Firefox** | 85+ |
| **Safari** | 14+ |
| **iOS Safari** | 14+ |
| **Android Chrome**| 88+ |
