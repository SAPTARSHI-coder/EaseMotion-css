# CSS Shimmer-Sweep Progress Bar for Fintech Dashboard Layouts

An elegant, pure HTML5 and CSS3 **Shimmer-Sweep Progress Bar** component tailored for modern banking, wealth management, and SaaS financial dashboard interfaces. Features glassmorphism card layouts, customizable CSS variable gradient fills, smooth loading animations, and an animated light shimmer sweeping across filled progress tracks.

---

## 🌟 Overview

The **Shimmer-Sweep Progress Bar** visually highlights quantitative progress metrics—such as revenue targets, investment yields, savings goals, and asset allocation breakdowns—using vibrant color gradients and continuous animated light refraction sweeps. Built without external dependencies or JavaScript, it delivers high visual performance and full accessibility out of the box.

---

## ✨ Features

- **Continuous Shimmer Sweep Effect**: Smooth `@keyframes` light reflection traveling dynamically across the active progress fill.
- **Fintech Glassmorphism Design**: Sleek dark mode cards styled with backdrop blur (`backdrop-filter: blur(16px)`), subtle glowing borders, and elevation shadows.
- **Multiple Preset Gradients**: Pre-configured CSS linear gradients for Emerald (Revenue), Indigo (Investments), Amber (Savings), Violet (Crypto/Digital Assets), and Blue (Goals).
- **Segmented Multi-Track Bar**: Support for multi-category asset allocation bars with individual shimmer animations.
- **Flexible Display Sizes**: Includes Small (`.progress-sm`), Medium (`.progress-md`), and Large (`.progress-lg`) component thickness modifiers.
- **Pure HTML5 & CSS3**: No JavaScript or framework dependencies required.
- **Accessibility Ready**: Built with standard ARIA roles (`role="progressbar"`), `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `:focus-visible` keyboard states.
- **Motion Sensitive**: Fully respects `prefers-reduced-motion: reduce` by disabling shimmer animations for users who prefer minimal movement.

---

## 📁 Folder Structure

```
submissions/examples/css-shimmer-sweep-progress-bar/
├── demo.html     # Interactive showcase page displaying dashboard cards and variants
├── style.css     # Complete CSS design system, CSS variables, and keyframe animations
└── README.md     # Comprehensive component documentation and usage guide
```

---

## 🚀 Installation

1. Copy `style.css` (or copy the CSS rules under Section 6 & 7) into your project's stylesheet directory.
2. Link `style.css` in your HTML `<head>`:

```html
<link rel="stylesheet" href="path/to/style.css">
```

---

## 💡 Usage

### Basic Single Progress Bar Example

```html
<div class="progress-container" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" aria-label="Revenue Progress: 78%">
  <div class="progress-track">
    <div class="progress-fill fill-emerald" style="--progress-width: 78%;">
      <div class="shimmer-sweep" aria-hidden="true"></div>
    </div>
  </div>
</div>
```

---

## 🎨 CSS Custom Properties (Variables)

Customize global component parameters easily by adjusting variables defined in `:root`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--shimmer-duration` | `2.2s` | Time taken for a single shimmer sweep animation cycle |
| `--shimmer-color` | `linear-gradient(...)` | Gradient definition of the light sweep reflection |
| `--progress-height-sm` | `8px` | Compact progress bar height |
| `--progress-height-md` | `12px` | Standard progress bar height |
| `--progress-height-lg` | `18px` | Hero progress bar height |
| `--gradient-emerald` | `linear-gradient(...)` | Emerald fill gradient token |
| `--gradient-indigo` | `linear-gradient(...)` | Indigo fill gradient token |
| `--gradient-amber` | `linear-gradient(...)` | Amber fill gradient token |
| `--gradient-violet` | `linear-gradient(...)` | Violet fill gradient token |
| `--gradient-blue` | `linear-gradient(...)` | Blue fill gradient token |

---

## 🛠️ Customization Guide

### Changing Progress Fill Percentage dynamically

Set inline CSS custom property `--progress-width` directly on `.progress-fill`:

```html
<!-- Set fill width to 60% -->
<div class="progress-fill fill-indigo" style="--progress-width: 60%;">
  <div class="shimmer-sweep" aria-hidden="true"></div>
</div>
```

### Custom Brand Gradient Fill

Add your custom gradient class in CSS:

```css
.fill-brand {
  background: linear-gradient(90deg, #ff416c 0%, #ff4b2b 100%);
}
```

Then apply `.fill-brand` to `.progress-fill`.

### Size Variants

Add modifier classes `.progress-sm`, `.progress-md`, or `.progress-lg` to `.progress-container`:

```html
<!-- Compact Bar -->
<div class="progress-container progress-sm" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" aria-label="Compact Bar">
  ...
</div>
```

---

## ♿ Accessibility (a11y)

- **ARIA Attributes**: `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and descriptive `aria-label` tags ensure screen readers correctly interpret values.
- **Hidden Decorative Shimmer**: The `.shimmer-sweep` element includes `aria-hidden="true"` so screen readers bypass non-semantic visual effects.
- **Keyboard Navigation**: Dashboard cards include `tabindex="0"` with clear high-contrast `:focus-visible` ring outlines for keyboard users.
- **Reduced Motion**: Automatically disables continuous shimmer sweeps and transitions under `@media (prefers-reduced-motion: reduce)`.

---

## 📱 Responsive Behavior

- Built with CSS Grid (`repeat(auto-fit, minmax(340px, 1fr))`) and Flexbox layouts.
- Automatically stacks cards vertically on mobile screens (< 640px).
- Uses `clamp()` for flexible typography scaling.

---

## 🌐 Browser Compatibility

| Browser | Supported Version |
| :--- | :--- |
| **Chrome / Edge** | 88+ |
| **Firefox** | 85+ |
| **Safari** | 14+ |
| **iOS Safari** | 14+ |
| **Android Chrome**| 88+ |
