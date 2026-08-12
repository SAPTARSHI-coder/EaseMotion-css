# CSS Scale-Hover Progress Bar for Fintech Dashboard Layouts

An interactive, pure HTML5 and CSS3 **Scale-Hover Progress Bar** component crafted for modern fintech dashboards, banking analytics, and SaaS performance tracking interfaces. Features fluid spring-like scale expansion on hover, glassmorphism cards, glowing gradient fills, and complete keyboard/a11y support.

---

## 🌟 Overview

The **Scale-Hover Progress Bar** delivers immediate micro-interaction feedback when users hover over or focus on progress cards or metric bars. Utilizing hardware-accelerated CSS `transform: scale()`, the progress track smoothly expands in height and width with enhanced ambient color glows, providing a tactile, premium financial dashboard aesthetic.

---

## ✨ Features

- **Fluid Scale-Hover Physics**: Hardware-accelerated CSS transform scale expansion (`transform: scaleY(1.35) scaleX(1.02)`) driven by cubic-bezier spring curves.
- **Fintech Glassmorphism Design**: Premium dark mode dashboard cards with backdrop blur (`backdrop-filter: blur(16px)`), subtle light borders, and elevation shadows.
- **Vibrant Gradient Fills**: Color-coded gradients for Emerald (Revenue), Blue (Investments), Amber (Savings), Rose (Budget), Purple (Portfolio), and Cyan (Multi-segment).
- **Segmented Multi-Track Variant**: Support for multi-category asset allocation bars with individual scale-hover states.
- **Interactive Scale Modifiers**: Subtle (`.scale-sm-hover`), Standard (`.scale-md-hover`), and Hero (`.scale-lg-hover`) scale intensity presets.
- **Pure HTML5 & CSS3**: 100% JavaScript-free implementation.
- **Accessibility First**: Full support for ARIA attributes (`role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`), keyboard navigation `:focus-visible` rings, and high contrast modes.
- **Reduced Motion**: Disables scale animations under `@media (prefers-reduced-motion: reduce)`.

---

## 📁 Folder Structure

```
submissions/examples/css-scale-hover-progress-bar/
├── demo.html     # Interactive showcase page displaying dashboard cards and scale variants
├── style.css     # Complete CSS design system, CSS custom properties, and scale transitions
└── README.md     # Comprehensive documentation and integration guide
```

---

## 🚀 Installation

1. Copy `style.css` into your project's CSS folder.
2. Link the stylesheet inside your HTML `<head>` tag:

```html
<link rel="stylesheet" href="path/to/style.css">
```

---

## 💡 Usage

### Basic Single Progress Bar Example

```html
<div class="progress-wrapper" role="progressbar" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100" aria-label="Monthly Revenue Progress: 84%">
  <div class="progress-track scale-hover-track">
    <div class="progress-fill fill-emerald" style="--fill-percent: 84%;">
      <div class="fill-glow" aria-hidden="true"></div>
    </div>
  </div>
</div>
```

---

## 🎨 CSS Custom Properties (Variables)

Customize global component tokens defined in `:root`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--scale-factor` | `1.05` | Width expansion factor on hover |
| `--scale-height-factor` | `1.35` | Height expansion factor on hover |
| `--scale-transition` | `transform 0.35s cubic-bezier(...)` | Spring curve timing for scale interactions |
| `--track-height` | `12px` | Default progress bar track thickness |
| `--track-radius` | `9999px` | Corner rounding radius for tracks |
| `--gradient-emerald` | `linear-gradient(...)` | Emerald fill token |
| `--gradient-blue` | `linear-gradient(...)` | Electric blue fill token |
| `--gradient-amber` | `linear-gradient(...)` | Amber gold fill token |
| `--gradient-rose` | `linear-gradient(...)` | Rose coral fill token |
| `--gradient-purple` | `linear-gradient(...)` | Violet purple fill token |

---

## 🛠️ Customization Guide

### Setting Progress Fill Width dynamically

Pass the percentage directly into the `--fill-percent` inline CSS variable:

```html
<!-- Set progress fill to 75% -->
<div class="progress-fill fill-blue" style="--fill-percent: 75%;">
  <div class="fill-glow" aria-hidden="true"></div>
</div>
```

### Custom Scale Intensity Modifiers

Wrap the progress bar inside a modifier class:

```html
<!-- Hero Large Scale Hover -->
<div class="progress-wrapper scale-lg-hover progress-thick" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" aria-label="Hero Scale Bar">
  <div class="progress-track scale-hover-track">
    <div class="progress-fill fill-purple" style="--fill-percent: 90%;"></div>
  </div>
</div>
```

---

## ♿ Accessibility (a11y)

- **ARIA Progressbar Semantics**: Includes `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and descriptive `aria-label` tags.
- **Keyboard Interaction**: All cards feature `tabindex="0"` with custom high-contrast `:focus-visible` outline rings.
- **Reduced Motion**: Automatically disables transforms and scale transitions when users enable `prefers-reduced-motion: reduce`.

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
