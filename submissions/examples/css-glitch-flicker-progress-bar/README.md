# CSS Glitch-Flicker Progress Bar for Fintech Dashboard Layouts

A lightweight, pure HTML5 and CSS3 **Glitch-Flicker Progress Bar** component designed for modern cyberpunk-inspired fintech dashboards, crypto asset trackers, and high-frequency financial monitoring interfaces. Features subtle `@keyframes` glitch-flicker animations, glassmorphism cards, glowing color gradients, and full accessibility support.

---

## 🌟 Overview

The **Glitch-Flicker Progress Bar** brings dynamic energy to quantitative metric displays through controlled, non-intrusive CSS opacity and position jitter keyframes (`@keyframes glitchFlicker`). Built without JavaScript, it maintains smooth 60fps performance while giving financial dashboards a distinct futuristic, tech-forward aesthetic.

---

## ✨ Features

- **Subtle Glitch-Flicker Effect**: Pure CSS keyframe opacity jitter and horizontal displacement overlay.
- **Fintech Glassmorphism Design**: Sleek dark mode cards with backdrop blur (`backdrop-filter: blur(16px)`), subtle borders, and elevation shadows.
- **Gradient Fill Presets**: Color-coded CSS linear gradients for Emerald (Revenue), Cyan (Digital Assets), Amber (Reserve Vault), and Magenta (Risk Capacity).
- **Display Thickness Variants**: Includes Small (`.progress-sm`), Medium (`.progress-md`), and Hero (`.progress-lg`) size options.
- **Pure HTML5 & CSS3**: Zero JavaScript or external framework dependencies.
- **Accessibility Ready**: Built with ARIA roles (`role="progressbar"`), `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `:focus-visible` keyboard ring states.
- **Motion Sensitivity**: Completely disables glitch animations under `@media (prefers-reduced-motion: reduce)` for users sensitive to motion.

---

## 📁 Folder Structure

```
submissions/examples/css-glitch-flicker-progress-bar/
├── demo.html     # Interactive showcase page displaying dashboard cards and display variants
├── style.css     # Complete CSS design system, CSS custom properties, and keyframes
└── README.md     # Full component documentation and integration guide
```

---

## 💡 Usage

### Basic Single Glitch Progress Bar Example

```html
<div class="progress-container" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" aria-label="Revenue Progress: 82%">
  <div class="progress-track glitch-track">
    <div class="progress-fill fill-emerald glitch-fill" style="--progress-width: 82%;">
      <div class="glitch-overlay" aria-hidden="true"></div>
    </div>
  </div>
</div>
```

---

## 🎨 CSS Custom Properties (Variables)

Customize global component parameters defined in `:root`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--glitch-speed` | `2.5s` | Animation loop duration for the subtle glitch flicker |
| `--progress-height-sm` | `8px` | Compact progress bar height |
| `--progress-height-md` | `12px` | Standard progress bar height |
| `--progress-height-lg` | `18px` | Hero progress bar height |
| `--gradient-emerald` | `linear-gradient(...)` | Emerald fill gradient token |
| `--gradient-cyan` | `linear-gradient(...)` | Cyan fill gradient token |
| `--gradient-amber` | `linear-gradient(...)` | Amber gold fill gradient token |
| `--gradient-magenta` | `linear-gradient(...)` | Magenta fill gradient token |

---

## ♿ Accessibility (a11y)

- **ARIA Semantics**: Includes `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and descriptive `aria-label` tags.
- **Hidden Decorative Overlays**: The `.glitch-overlay` element includes `aria-hidden="true"` so screen readers ignore visual animation effects.
- **Keyboard Navigation**: Dashboard cards feature `tabindex="0"` and custom high-contrast `:focus-visible` ring outlines.
- **Reduced Motion**: Automatically removes glitch keyframe animations under `@media (prefers-reduced-motion: reduce)`.

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
