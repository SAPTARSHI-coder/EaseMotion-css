# CSS Morph-Glow Tabs for Minimalist Tech Layouts

A pure HTML5 and CSS3 showcase component implementing dynamic morphing glow tab navigation controls designed for developer portals, cloud telemetry, and minimalist dashboards.

---

## 1. Overview

The **CSS Morph-Glow Tabs** provides a sleek, accessible tabbed interface featuring animated morphing glow selection indicators and smooth panel transitions. Operating completely without JavaScript, it utilizes CSS radio button input state controls paired with CSS custom properties to deliver fluid visual feedback adhering to **EaseMotion CSS** standards.

---

## 2. Features

- **Pure HTML5 & CSS3**: Zero JavaScript or external framework dependencies.
- **Morph-Glow Active Indicator**: Glowing backdrop blur cards (`box-shadow`, `inset` lighting) with active morphing scale transitions.
- **Glassmorphism Panels**: Dark mode glassmorphism panels with animated entrance blur keyframes.
- **Accessibility Ready**: `role="tablist"`, `role="tab"`, `role="tabpanel"` markup, keyboard focus visible indicators, and `prefers-reduced-motion` support.
- **Fully Responsive**: Scrollable touch-friendly tab headers and flexible grid content layout.

---

## 3. Folder Structure

```text
submissions/examples/css-morph-glow-tabs-64437/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Complete CSS stylesheet
└── README.md    # Documentation and usage guide
```

---

## 4. Usage

To integrate the **CSS Morph-Glow Tabs** into your web application:

1. Link `style.css` in your HTML document's `<head>`.
2. Insert radio inputs with matching `name` attributes above your tab headers (`.tab-headers-nav`) and tab panels (`.tab-panels`).
3. Associate each `<label>` with its corresponding radio `<input>` `id`.

---

## 5. HTML Example

```html
<div class="morph-glow-tabs-wrapper">
  <!-- Radio Button Tab Controllers -->
  <input type="radio" name="tech-tabs" id="tab-radio-1" class="tab-radio" checked aria-hidden="true">
  <input type="radio" name="tech-tabs" id="tab-radio-2" class="tab-radio" aria-hidden="true">

  <!-- Navigation Tab Headers -->
  <nav class="tab-headers-nav" role="tablist" aria-label="System Dashboard Options">
    <label for="tab-radio-1" class="tab-label label-1" role="tab" aria-selected="true" aria-controls="tab-panel-1" tabindex="0">
      <span>Overview</span>
    </label>
    <label for="tab-radio-2" class="tab-label label-2" role="tab" aria-selected="false" aria-controls="tab-panel-2" tabindex="0">
      <span>Analytics</span>
    </label>
  </nav>

  <!-- Tab Panels -->
  <div class="tab-panels">
    <section id="tab-panel-1" class="tab-panel panel-1" role="tabpanel">
      <h2>Cluster Performance Overview</h2>
    </section>
    <section id="tab-panel-2" class="tab-panel panel-2" role="tabpanel">
      <h2>Network Telemetry & Traffic Flow</h2>
    </section>
  </div>
</div>
```

---

## 6. CSS Custom Properties

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#07090e` | Overall background color |
| `--bg-panel` | `rgba(17, 24, 39, 0.85)` | Glass panel background |
| `--glow-cyan` | `#00f0ff` | Primary glowing cyan accent color |
| `--glow-cyan-shadow` | `rgba(0, 240, 255, 0.35)` | Glowing box-shadow color for active cyan tab |
| `--glow-purple` | `#a855f7` | Secondary glowing purple accent color |
| `--glow-emerald` | `#10b981` | Tertiary glowing emerald status color |
| `--transition-smooth` | `0.35s cubic-bezier(0.34, 1.56, 0.64, 1)` | Elastic cubic-bezier curve for active morph transition |

---

## 7. Customization

Customize tab glow colors or transition curves by overriding variables in your stylesheet:

```css
.morph-glow-tabs-wrapper {
  --glow-cyan: #ff0055;
  --glow-cyan-shadow: rgba(255, 0, 85, 0.4);
}
```

---

## 8. Accessibility

- **Keyboard Focus**: Focus visible outlines (`:focus-visible`) are provided on all interactive tab labels.
- **ARIA Attributes**: Built with `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
- **Reduced Motion**: Disables scale transformations and keyframe animations under `@media (prefers-reduced-motion: reduce)`.

---

## 9. Responsive Behaviour

- **Desktop**: Tab navigation displays inline with flexible spacing across panels.
- **Mobile/Tablet**: Tab navigation becomes horizontally scrollable with touch momentum, ensuring clean access without cluttering viewports.

---

## 10. Browser Compatibility

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest)
- Microsoft Edge (latest)
