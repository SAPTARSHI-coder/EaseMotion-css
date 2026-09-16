# CSS Bounce-Pulse Tabs for Minimalist Tech Layouts

A pure HTML5 and CSS3 showcase component implementing elastic bounce scale interactions and pulsing beacon tab navigation for developer dashboards and cloud infrastructure tools.

---

## 1. Overview

The **CSS Bounce-Pulse Tabs** provides a dynamic, responsive tabbed interface featuring elastic bounce state scaling (`cubic-bezier(0.34, 1.56, 0.64, 1)`) and pulsing beacon rings (`@keyframes beacon-pulse-ring`). Operating without any JavaScript dependencies, it uses standard HTML radio inputs paired with CSS custom properties to fit **EaseMotion CSS** animation standards.

---

## 2. Features

- **Pure HTML5 & CSS3**: 100% dependency-free HTML and CSS.
- **Elastic Bounce Scaling**: Smooth elastic scale-up transform when selecting active tab headers.
- **Pulsing Beacon Ring**: Radial expanding pulse ring indicating real-time active system tab state.
- **Glassmorphism Panels**: Dark mode glassmorphism panels with animated spring entrance keyframes.
- **Accessibility Ready**: `role="tablist"`, `role="tab"`, and `role="tabpanel"` attributes, `:focus-visible` focus outlines, and `prefers-reduced-motion` support.
- **Fully Responsive**: Scrollable touch-friendly horizontal tab navigation for mobile and tablet screens.

---

## 3. Folder Structure

```text
submissions/examples/css-bounce-pulse-tabs-64433/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Complete CSS stylesheet
└── README.md    # Documentation and usage guide
```

---

## 4. Usage

To integrate the **CSS Bounce-Pulse Tabs** into your application:

1. Include `style.css` in your HTML `<head>`.
2. Insert `<input type="radio" name="bounce-tabs">` elements above your tab header container (`.tab-headers-nav`).
3. Connect `<label>` controls with radio `id` attributes.

---

## 5. HTML Example

```html
<div class="bounce-tabs-wrapper">
  <!-- Radio Controllers -->
  <input type="radio" name="bounce-tabs" id="bounce-radio-1" class="tab-radio" checked aria-hidden="true">
  <input type="radio" name="bounce-tabs" id="bounce-radio-2" class="tab-radio" aria-hidden="true">

  <!-- Tab Headers -->
  <nav class="tab-headers-nav" role="tablist" aria-label="Cloud Operations Options">
    <label for="bounce-radio-1" class="tab-label label-1" role="tab" aria-selected="true" aria-controls="bounce-panel-1" tabindex="0">
      <span class="pulse-beacon" aria-hidden="true"></span>
      <span>Compute Nodes</span>
    </label>
    <label for="bounce-radio-2" class="tab-label label-2" role="tab" aria-selected="false" aria-controls="bounce-panel-2" tabindex="0">
      <span class="pulse-beacon" aria-hidden="true"></span>
      <span>Load Balancers</span>
    </label>
  </nav>

  <!-- Tab Panels -->
  <div class="tab-panels">
    <section id="bounce-panel-1" class="tab-panel panel-1" role="tabpanel">
      <h2>Kubernetes Worker Node Fleet</h2>
    </section>
    <section id="bounce-panel-2" class="tab-panel panel-2" role="tabpanel">
      <h2>Edge Traffic Distribution</h2>
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
| `--transition-spring` | `0.4s cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring bezier curve for bounce effect |

---

## 7. Customization

Customize theme accents or bounce timing by overriding custom properties:

```css
.bounce-tabs-wrapper {
  --accent-cyan: #ffbb00;
  --transition-spring: 0.3s ease-out;
}
```

---

## 8. Accessibility

- **Keyboard Focus**: `:focus-visible` ring indicators provide clear accessibility focus feedback.
- **ARIA Attributes**: Built with `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
- **Reduced Motion**: Disables beacon pulse rings and scale bounce transitions under `@media (prefers-reduced-motion: reduce)`.

---

## 9. Responsive Behaviour

- **Desktop**: Horizontal tab navigation bar with spacious multi-column panel layouts.
- **Mobile/Tablet**: Scrollable touch-friendly tab bar with responsive single-column layout.

---

## 10. Browser Compatibility

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest)
- Microsoft Edge (latest)
