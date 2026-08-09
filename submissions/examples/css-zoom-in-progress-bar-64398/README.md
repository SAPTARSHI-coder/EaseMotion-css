# CSS Zoom-In Progress Bar for Glassmorphism UI Layouts

A pure HTML5 and CSS3 showcase component implementing animated scale zoom-in progress fill reveals for glassmorphic dashboards and cloud UI consoles.

---

## 1. Overview

The **CSS Zoom-In Progress Bar** provides a responsive progress indicator featuring glassmorphism card containers (`backdrop-filter: blur(16px)`), glowing gradient fill indicators, and scale zoom-in entrance reveals (`@keyframes progress-zoom-entrance`). Built operating completely without JavaScript dependencies, it adheres to **EaseMotion CSS** standards.

---

## 2. Features

- **Pure HTML5 & CSS3**: 100% dependency-free HTML and CSS.
- **Scale Zoom-In Fill Reveals**: Smooth scale-up entrance keyframe transforms on progress bar fills.
- **Glassmorphism UI**: Dark mode glassmorphism card containers with glowing linear progress meters.
- **Accessibility Ready**: Built with standard `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax` attributes, and `prefers-reduced-motion` support.
- **Fully Responsive**: Fluid grid layout supporting multi-column desktop displays and mobile viewports.

---

## 3. Folder Structure

```text
submissions/examples/css-zoom-in-progress-bar-64398/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Complete CSS stylesheet
└── README.md    # Documentation and usage guide
```

---

## 4. Usage

To integrate the **CSS Zoom-In Progress Bar** into your application:

1. Include `style.css` in your HTML document's `<head>`.
2. Add a `.progress-bar-track` element containing `role="progressbar"` attributes.
3. Place a `.progress-bar-fill` element inside with desired width utility (`.fill-82`, `.fill-58`, etc.).

---

## 5. HTML Example

```html
<div class="glass-card">
  <div class="card-header">
    <h2 class="card-title">GPU Memory Compression</h2>
    <span class="progress-percentage font-mono text-cyan">82%</span>
  </div>
  <div class="progress-track-wrapper">
    <div class="progress-bar-track" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" aria-label="GPU Memory Compression Progress">
      <div class="progress-bar-fill fill-82 zoom-cyan">
        <span class="zoom-pulse-overlay" aria-hidden="true"></span>
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
| `--transition-zoom` | `0.6s cubic-bezier(0.34, 1.56, 0.64, 1)` | Zoom-in entrance curve |

---

## 7. Customization

Customize zoom timing or fill gradients by overriding CSS custom properties:

```css
.progress-bar-fill.zoom-cyan {
  --accent-cyan: #ff0055;
  --transition-zoom: 0.45s ease-out;
}
```

---

## 8. Accessibility

- **ARIA Semantics**: Standard `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`.
- **Keyboard Focus**: Interactive elements feature clear focus states.
- **Reduced Motion**: Disables scale zoom entrance keyframes and pulse overlays under `@media (prefers-reduced-motion: reduce)`.

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
