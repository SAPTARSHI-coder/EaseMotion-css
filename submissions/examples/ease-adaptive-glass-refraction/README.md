# Adaptive Dynamic Glass Refraction (`color-mix()` & OKLCH)

Category: **Advanced CSS Styling & Modern Color Engine**  
Use Case: SaaS dashboards, web3/crypto cards, modern glassmorphic landing pages, interactive UI themes.

---

## 1. What does this do?

The **Adaptive Dynamic Glass Refraction** submission introduces native CSS color interpolation and optics calculations to glassmorphic UI elements. Using CSS Modern Color Functions (`color-mix(in oklch, ...)` and relative color syntax `rgb(from var(...) r g b / alpha)`), glass borders, surface tints, specular reflections, and ambient light aura halos calculate their harmonious contrast and color values automatically from container theme variables (`--brand-color`, `--accent-color`).

### Classes Introduced:

- **`ease-glass-frosted-adaptive`**: Frosted glass container with backdrop blur, specular top-left edge highlight, dynamic OKLCH tinted background, and harmonious calculated box shadows.
- **`ease-ambient-aura-glow`**: Pulsing dynamic radial background aura halo powered by OKLCH color mixing and keyframe breathing animations.

---

## 2. How is it used?

Include `style.css` in your project and apply the classes to any container:

```html
<!-- Basic Adaptive Glass Container -->
<div class="ease-glass-frosted-adaptive">
  <h3>Glassmorphic Card</h3>
  <p>Surface tint and borders adjust to --brand-color automatically.</p>
</div>

<!-- Glass Container with Pulsing OKLCH Ambient Aura -->
<div class="ease-glass-frosted-adaptive ease-ambient-aura-glow">
  <h3>Aura Pulse Card</h3>
  <p>Pulsing dynamic halo tinting behind frosted glass backdrop.</p>
</div>
```

### Customizing CSS Tokens:

Customize colors and refraction properties on `:root` or per-container element:

```css
:root {
  --brand-color: #3b82f6; /* Primary brand accent */
  --accent-color: #8b5cf6; /* Secondary aura glow tint */
  --glass-blur: 16px; /* Backdrop filter blur */
  --glass-tint-opacity: 12%; /* Surface OKLCH color mix ratio */
  --glass-radius: 20px; /* Border radius */
  --aura-blur: 40px; /* Halo light dispersion */
  --aura-pulse-duration: 4s; /* Breathing animation frequency */
}
```

---

## 3. Why is it useful?

1. **Zero JavaScript Color Logic**: Eliminates complex JavaScript libraries previously required to compute lighter/darker border tints, complementary specular edges, or box-shadow opacity levels.
2. **Perceptually Uniform Color Interpolation**: OKLCH color space ensures smooth lightness and chroma transitions without muddy gray or oversaturated color artifacts when mixing tints with white/black glass baselines.
3. **Theme & Dark/Light Mode Adaptability**: Automatically recalibrates borders, box-shadows, and specular highlights when placed inside dark (`.theme-dark`) or light (`.theme-light`) containers.
4. **Interactive Specular Light Source**: Integrates cursor proximity tracking (`--glow-x`, `--glow-y`) for dynamic directional light refractions.

---

## 4. Architectural Details & CSS Engine

### OKLCH Color Mixing Engine

```css
/* Calculates subtle glass surface background tint in OKLCH space */
background: color-mix(
  in oklch,
  var(--brand-color) 12%,
  rgba(255, 255, 255, 0.06)
);

/* Calculates border highlight with 35% brand tint and specular edge */
border: 1px solid
  color-mix(in oklch, var(--brand-color) 35%, rgba(255, 255, 255, 0.4));
```

### Relative Color Syntax Specular Edge

```css
/* Extracts r g b channels from --brand-color to apply precise alpha channel specular gradients */
background: radial-gradient(
  800px circle at var(--glow-x) var(--glow-y),
  rgb(from var(--brand-color) r g b / 0.35),
  transparent 50%
);
```

---

## 5. Utility Modifiers

| Class                          | Description                                                     |
| ------------------------------ | --------------------------------------------------------------- |
| `.ease-glass-frosted-adaptive` | Base frosted glass container with adaptive OKLCH surface/border |
| `.ease-ambient-aura-glow`      | Adds dynamic pulsing background aura halo                       |
| `.ease-aura-subtle`            | Reduced opacity aura glow for subtle card elevation             |
| `.ease-aura-vibrant`           | High-intensity aura glow for hero banners / primary CTAs        |
| `.ease-glass-sharp`            | Modifies glass container radius to `4px`                        |
| `.ease-glass-pill`             | Modifies glass container radius to pill shape (`9999px`)        |
| `.ease-aura-static`            | Disables pulsing keyframe animation on aura halo                |

---

## 6. Accessibility & Compatibility

- **Reduced Motion**: Respects `@media (prefers-reduced-motion: reduce)` by disabling aura pulsing keyframes and transition transforms.
- **Legacy Fallbacks**: Provides solid `rgba()` fallback background, border, and box-shadow styling for older browsers without `color-mix()` or OKLCH support.
- **High Contrast**: Clean borders ensure proper visibility and clear element boundaries in high contrast modes.

---

## 7. File Manifest

- `demo.html` — Interactive self-contained showcase with real-time color pickers, theme presets, and live OKLCH inspector.
- `style.css` — Core CSS containing `.ease-glass-frosted-adaptive`, `.ease-ambient-aura-glow`, keyframes, and utilities.
- `README.md` — Complete documentation and implementation guide.
