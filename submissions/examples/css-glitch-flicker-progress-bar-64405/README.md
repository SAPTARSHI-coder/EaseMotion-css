# CSS Glitch-Flicker Progress Bar for Glassmorphism UI Layouts

A pure HTML5 and CSS3 showcase component implementing animated glitch-flicker progress indicator sweeps for glassmorphic dashboards and high-tech UI consoles.

---

## 1. Overview

The **CSS Glitch-Flicker Progress Bar** delivers a clean, responsive progress bar component featuring glassmorphism card backgrounds (`backdrop-filter: blur(16px)`), glowing gradient fill indicators, and cyber glitch keyframe sweeps (`@keyframes glitch-flicker-sweep`). Built operating completely without JavaScript dependencies, it adheres to **EaseMotion CSS** standards.

---

## 2. Features

- **Pure HTML5 & CSS3**: 100% dependency-free HTML and CSS.
- **Glitch-Flicker Animation Sweeps**: Cyberpunk glitch effects with drop-shadow color shifts (`#ff0055` & `#00f0ff`).
- **Glassmorphism Design**: Dark mode glassmorphism card containers with glowing linear progress fills.
- **Accessibility Ready**: Standard `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax` attributes, and `prefers-reduced-motion` support.
- **Fully Responsive**: Fluid grid layout supporting multi-column desktop displays and mobile viewports.

---

## 3. Folder Structure

```text
submissions/examples/css-glitch-flicker-progress-bar-64405/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Complete CSS stylesheet
└── README.md    # Documentation and usage guide
```

---

## 4. Usage

To integrate the **CSS Glitch-Flicker Progress Bar** into your application:

1. Include `style.css` in your HTML document's `<head>`.
2. Add a `.progress-bar-track` element containing `role="progressbar"` attributes.
3. Place a `.progress-bar-fill` element inside with desired width utility (`.fill-88`, `.fill-64`, etc.).

---

## 5. HTML Example

```html
<div class="glass-card">
  <div class="card-header">
    <h2 class="card-title">Cyber Neural Sync</h2>
    <span class="progress-percentage font-mono text-cyan">88%</span>
  </div>
  <div class="progress-track-wrapper">
    <div class="progress-bar-track" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100" aria-label="Cyber Neural Sync Progress">
      <div class="progress-bar-fill fill-88 glitch-cyan">
        <span class="glitch-glow-overlay" aria-hidden="true"></span>
      </div>
    </div>
  </div>
</div>
```

---

## 6. CSS Custom Properties

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#07090e` | Overall background color |
| `--bg-glass` | `rgba(17, 24, 39, 0.75)` | Glassmorphic card background |
| `--accent-cyan` | `#00f0ff` | Glowing cyan progress accent |
| `--accent-emerald` | `#10b981` | Status green progress accent |
| `--accent-purple` | `#a855f7` | Secondary purple status accent |
| `--accent-pink` | `#ff0055` | Glitch shadow accent color |

---

## 7. Customization

Customize glitch timing or fill gradients by overriding CSS custom properties:

```css
.progress-bar-fill.glitch-cyan {
  --accent-cyan: #ff0055;
  animation-duration: 1.5s;
}
```

---

## 8. Accessibility

- **ARIA Semantics**: Standard `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`.
- **Keyboard Navigation**: Interactive elements feature clear focus states.
- **Reduced Motion**: Disables glitch flicker sweeps and shimmer overlays under `@media (prefers-reduced-motion: reduce)`.

---

## 9. Responsive Behaviour

- **Desktop**: Multi-column glassmorphism grid layout.
- **Mobile/Tablet**: Fluid single-column card layout.

---

## 10. Browser Compatibility

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest)
- Microsoft Edge (latest)
