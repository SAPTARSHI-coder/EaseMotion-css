# CSS Scale-Hover Tabs for Minimalist Tech Layouts

A pure HTML5 and CSS3 showcase component implementing interactive scale-hover tab navigation controls for developer sandboxes, container runtimes, and tech dashboards.

---

## 1. Overview

The **CSS Scale-Hover Tabs** delivers a clean, responsive tabbed interface featuring smooth scale-hover transforms (`scale(1.05)`) and zoom-entrance panel reveals (`@keyframes panel-scale-entrance`). Operating completely without JavaScript, it uses HTML radio input controls paired with CSS custom properties to deliver fluid state feedback adhering to **EaseMotion CSS** standards.

---

## 2. Features

- **Pure HTML5 & CSS3**: 100% dependency-free HTML and CSS.
- **Interactive Scale-Hover Motion**: Smooth scale-up transforms on tab header hover and active state selection.
- **Glassmorphism Panels**: Dark mode glassmorphism panels with animated scale-in entrance transitions.
- **Accessibility Ready**: Built with `role="tablist"`, `role="tab"`, and `role="tabpanel"` markup, keyboard focus visible indicators, and `prefers-reduced-motion` support.
- **Fully Responsive**: Scrollable touch-friendly tab navigation bar and fluid responsive panel grids.

---

## 3. Folder Structure

```text
submissions/examples/css-scale-hover-tabs-64429/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Complete CSS stylesheet
└── README.md    # Documentation and usage guide
```

---

## 4. Usage

To integrate the **CSS Scale-Hover Tabs** into your web application:

1. Link `style.css` in your HTML `<head>`.
2. Add radio input controllers (`<input type="radio" name="scale-tabs">`) associated with `<label>` tab headers.
3. Place your tab content sections inside `.tab-panels`.

---

## 5. HTML Example

```html
<div class="scale-tabs-wrapper">
  <!-- Radio Controllers -->
  <input type="radio" name="scale-tabs" id="scale-radio-1" class="tab-radio" checked aria-hidden="true">
  <input type="radio" name="scale-tabs" id="scale-radio-2" class="tab-radio" aria-hidden="true">

  <!-- Tab Headers -->
  <nav class="tab-headers-nav" role="tablist" aria-label="Developer Sandbox Options">
    <label for="scale-radio-1" class="tab-label label-1" role="tab" aria-selected="true" aria-controls="scale-panel-1" tabindex="0">
      <span>Dev Sandbox</span>
    </label>
    <label for="scale-radio-2" class="tab-label label-2" role="tab" aria-selected="false" aria-controls="scale-panel-2" tabindex="0">
      <span>Container Runtime</span>
    </label>
  </nav>

  <!-- Tab Panels -->
  <div class="tab-panels">
    <section id="scale-panel-1" class="tab-panel panel-1" role="tabpanel">
      <h2>Developer Sandbox Workspace</h2>
    </section>
    <section id="scale-panel-2" class="tab-panel panel-2" role="tabpanel">
      <h2>Container Engine Metrics</h2>
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
| `--accent-cyan` | `#00f0ff` | Glowing cyan active accent |
| `--accent-emerald` | `#10b981` | Status green accent |
| `--accent-purple` | `#a855f7` | Secondary purple status accent |
| `--transition-scale` | `0.3s cubic-bezier(0.16, 1, 0.3, 1)` | Transition curve for scale-hover interaction |

---

## 7. Customization

Customize theme accents or scale transition timing by overriding CSS custom properties:

```css
.scale-tabs-wrapper {
  --accent-cyan: #ff0055;
  --transition-scale: 0.25s ease-out;
}
```

---

## 8. Accessibility

- **Keyboard Focus**: Focus visible rings (`:focus-visible`) provide clear focus states on tab triggers.
- **ARIA Attributes**: Built with `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
- **Reduced Motion**: Disables scale transforms and keyframe scaling under `@media (prefers-reduced-motion: reduce)`.

---

## 9. Responsive Behaviour

- **Desktop**: Horizontal tab navigation bar with multi-column panel content layouts.
- **Mobile/Tablet**: Scrollable touch-friendly tab bar with responsive single-column layout.

---

## 10. Browser Compatibility

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest)
- Microsoft Edge (latest)
