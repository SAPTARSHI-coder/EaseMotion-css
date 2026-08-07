# Cyberpunk Fluid Liquid Fill Water Button with Smooth Overflow Wave Effect (#298)

A high-performance, pure CSS Cyberpunk-themed button component featuring realistic fluid liquid fill physics, rotating overflow wave keyframes, glassmorphic styling, and full accessibility support.

---

## 🌟 Overview

The **Fluid Liquid Fill Water Button** brings futuristic Cyberpunk aesthetics to standard HTML buttons. By utilizing CSS custom properties, rotating irregular wave keyframes, glassmorphism backdrop filters, and neon glow accents, this component produces an interactive liquid rising effect whenever the user hovers or focuses on the element.

No JavaScript or external dependencies are required—making it lightweight, accessible, and fast.

---

## ✨ Features

- **Fluid Liquid Physics**: Multi-layered rotating wave keyframe animations simulating fluid motion.
- **Overflow Wave Effect**: Liquid crest rises smoothly to fill the glassmorphic button frame.
- **Cyberpunk Color Palette**: Neon Cyan (`#00f3ff`), Neon Magenta (`#ff007f`), and Deep Space Dark canvas.
- **Glassmorphism**: Translucent backdrop blur and glowing neon borders.
- **Zero JavaScript**: Built purely with HTML5 and CSS3.
- **Size Hierarchy**: Includes Primary, Secondary, Purple Accent, Large, Standard, Small, and Disabled variants.
- **Keyboard Accessible**: Clear `:focus-visible` neon outline for seamless accessibility compliance.
- **Motion Accessible**: Respects `prefers-reduced-motion: reduce` user settings.

---

## 📁 Folder Structure

```text
submissions/examples/ease-anim-fluid-liquid-fill-water-button-with-smooth-overflow-wave-effect-298/
├── demo.html    # Showcase page with button variants and live interactions
├── style.css    # Modular CSS design system, variables, and liquid keyframes
└── README.md    # Documentation and usage guide
```

---

## 🚀 Installation & Usage

1. Copy `style.css` into your project directory or reference it in your HTML `<head>`:

```html
<link rel="stylesheet" href="style.css">
```

2. Add the semantic button markup to your page:

```html
<!-- Primary Cyan Water Button -->
<button type="button" class="liquid-btn liquid-btn-primary">
  <span class="btn-text">Initialize System</span>
  <span class="liquid-container" aria-hidden="true">
    <span class="wave wave-1"></span>
    <span class="wave wave-2"></span>
    <span class="wave wave-3"></span>
    <span class="glow-rim"></span>
  </span>
</button>
```

3. For secondary magenta or purple accent themes:

```html
<!-- Secondary Magenta Wave Button -->
<button type="button" class="liquid-btn liquid-btn-secondary">
  <span class="btn-text">Execute Overdrive</span>
  <span class="liquid-container" aria-hidden="true">
    <span class="wave wave-1"></span>
    <span class="wave wave-2"></span>
    <span class="wave wave-3"></span>
    <span class="glow-rim"></span>
  </span>
</button>
```

---

## 🎨 CSS Variables & Customization

The component relies on CSS custom properties for instant customization:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--cyber-bg-dark` | `#070811` | Primary background color |
| `--neon-cyan` | `#00f3ff` | Primary neon cyan accent |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.45)` | Neon cyan box-shadow glow |
| `--neon-magenta` | `#ff007f` | Secondary neon magenta accent |
| `--neon-purple` | `#9d00ff` | Accent plasma purple color |
| `--transition-liquid` | `0.65s cubic-bezier(0.4, 0, 0.2, 1)` | Wave rise animation curve |
| `--radius-btn` | `12px` | Button corner border-radius |

---

## ♿ Accessibility

- **Keyboard Focus**: `:focus-visible` applies a high-contrast double ring outline and glow.
- **Screen Readers**: Interactive text remains top-layered while liquid decorative containers carry `aria-hidden="true"`.
- **Disabled State**: Setting the `disabled` attribute or `aria-disabled="true"` halts wave animation and updates pointer interaction.
- **Reduced Motion**: Disables continuous keyframe rotation under `@media (prefers-reduced-motion: reduce)`.

---

## 🌐 Browser Support

- Chrome / Edge (79+)
- Firefox (75+)
- Safari (13.1+)
- Opera (66+)
