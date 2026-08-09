# CSS Blur-Entrance Tabs for Minimalist Tech Layouts

A pure HTML5 and CSS3 showcase component implementing frosted glassmorphism blur-reveal tab navigation for developer tools, cloud telemetry, and minimalist dashboards.

---

## 1. Overview

The **CSS Blur-Entrance Tabs** component presents an elegant tabbed interface where active panels emerge with a smooth Gaussian blur entrance keyframe (`@keyframes panel-blur-entrance`). Built using pure HTML5 radio input controls and performance-optimized CSS custom properties, it delivers seamless interactive state toggling adhering to **EaseMotion CSS** standards without JavaScript.

---

## 2. Features

- **Pure HTML5 & CSS3**: 100% dependency-free HTML and CSS.
- **Gaussian Blur Entrance**: Smooth frosted blur-to-focus panel reveal transition.
- **Glassmorphism Design**: Frosted glass tab headers and panel backdrop blurs.
- **Accessibility Ready**: Built with `role="tablist"`, `role="tab"`, and `role="tabpanel"` markup, keyboard focus visible indicators, and `prefers-reduced-motion` support.
- **Fully Responsive**: Touch-friendly horizontal tab bar with responsive panel grids.

---

## 3. Folder Structure

```text
submissions/examples/css-blur-entrance-tabs-64431/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Complete CSS stylesheet
└── README.md    # Documentation and usage guide
```

---

## 4. Usage

To integrate the **CSS Blur-Entrance Tabs** into your project:

1. Include `style.css` in your HTML document's `<head>`.
2. Add radio input controllers (`<input type="radio" name="blur-tabs">`) linked to `<label>` tab headers.
3. Place tab content sections inside `.tab-panels`.

---

## 5. HTML Example

```html
<div class="blur-tabs-wrapper">
  <!-- Radio Controllers -->
  <input type="radio" name="blur-tabs" id="blur-radio-1" class="tab-radio" checked aria-hidden="true">
  <input type="radio" name="blur-tabs" id="blur-radio-2" class="tab-radio" aria-hidden="true">

  <!-- Tab Headers -->
  <nav class="tab-headers-nav" role="tablist" aria-label="System Diagnostics Tabs">
    <label for="blur-radio-1" class="tab-label label-1" role="tab" aria-selected="true" aria-controls="blur-panel-1" tabindex="0">
      <span>Diagnostics</span>
    </label>
    <label for="blur-radio-2" class="tab-label label-2" role="tab" aria-selected="false" aria-controls="blur-panel-2" tabindex="0">
      <span>Network Routing</span>
    </label>
  </nav>

  <!-- Tab Panels -->
  <div class="tab-panels">
    <section id="blur-panel-1" class="tab-panel panel-1" role="tabpanel">
      <h2>System Health & Diagnostic Telemetry</h2>
    </section>
    <section id="blur-panel-2" class="tab-panel panel-2" role="tabpanel">
      <h2>Global Edge Route Optimizer</h2>
    </section>
  </div>
</div>
```

---

## 6. CSS Custom Properties

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#07090e` | Overall page background color |
| `--bg-panel` | `rgba(17, 24, 39, 0.85)` | Glass panel background |
| `--accent-cyan` | `#00f0ff` | Glowing cyan active accent |
| `--accent-emerald` | `#10b981` | Status green accent |
| `--accent-purple` | `#a855f7` | Secondary purple status accent |
| `--transition-blur` | `0.4s cubic-bezier(0.16, 1, 0.3, 1)` | Transition curve for Gaussian blur reveal |

---

## 7. Customization

Customize theme colors or blur timing by overriding CSS custom properties:

```css
.blur-tabs-wrapper {
  --accent-cyan: #ff0055;
  --transition-blur: 0.3s ease-out;
}
```

---

## 8. Accessibility

- **Keyboard Focus**: Focus visible rings (`:focus-visible`) provide clear focus states on tab navigation.
- **ARIA Attributes**: Built with `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
- **Reduced Motion**: Disables Gaussian blur entrance keyframes and transform scaling under `@media (prefers-reduced-motion: reduce)`.

---

## 9. Responsive Behaviour

- **Desktop**: Horizontal tab navigation bar with spacious grid panel layouts.
- **Mobile/Tablet**: Scrollable touch-friendly tab bar with responsive single-column panel content.

---

## 10. Browser Compatibility

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest)
- Microsoft Edge (latest)
