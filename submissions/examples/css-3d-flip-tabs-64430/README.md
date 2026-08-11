# CSS 3D-Flip Tabs for Minimalist Tech Layouts

A pure HTML5 and CSS3 showcase component implementing 3D perspective flip tab navigation controls for high-tech developer portals, cloud analytics, and infrastructure dashboards.

---

## 1. Overview

The **CSS 3D-Flip Tabs** delivers a modern, interactive tabbed interface featuring 3D perspective tilt tab controls (`perspective: 1000px`) and animated 3D card rotation panel reveals (`@keyframes panel-3d-flip-entrance`). Operating completely without JavaScript, it utilizes standard HTML radio inputs paired with CSS custom properties to deliver fluid state feedback adhering to **EaseMotion CSS** standards.

---

## 2. Features

- **Pure HTML5 & CSS3**: 100% dependency-free HTML and CSS.
- **3D Perspective Flip Motion**: Realistic 3D perspective tilt (`rotateX`, `rotateY`, `translateZ`) upon tab selection.
- **Glassmorphism Panels**: Dark mode glassmorphism panels with 3D rotation entrance keyframe reveals.
- **Accessibility Ready**: `role="tablist"`, `role="tab"`, and `role="tabpanel"` markup, keyboard focus visible indicators, and `prefers-reduced-motion` support.
- **Fully Responsive**: Scrollable touch-friendly tab navigation bar and responsive grid layout.

---

## 3. Folder Structure

```text
submissions/examples/css-3d-flip-tabs-64430/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Complete CSS stylesheet
└── README.md    # Documentation and usage guide
```

---

## 4. Usage

To integrate the **CSS 3D-Flip Tabs** into your application:

1. Include `style.css` in your HTML document's `<head>`.
2. Add radio input controllers (`<input type="radio" name="flip-tabs">`) associated with `<label>` tab headers.
3. Place tab panel sections inside `.tab-panels-3d`.

---

## 5. HTML Example

```html
<div class="flip-tabs-wrapper">
  <!-- Radio Controllers -->
  <input type="radio" name="flip-tabs" id="flip-radio-1" class="tab-radio" checked aria-hidden="true">
  <input type="radio" name="flip-tabs" id="flip-radio-2" class="tab-radio" aria-hidden="true">

  <!-- Tab Headers -->
  <nav class="tab-headers-nav" role="tablist" aria-label="3D Console Options">
    <label for="flip-radio-1" class="tab-label label-1" role="tab" aria-selected="true" aria-controls="flip-panel-1" tabindex="0">
      <span>Cluster Topo</span>
    </label>
    <label for="flip-radio-2" class="tab-label label-2" role="tab" aria-selected="false" aria-controls="flip-panel-2" tabindex="0">
      <span>Packet Inspector</span>
    </label>
  </nav>

  <!-- Tab Panels -->
  <div class="tab-panels-3d">
    <section id="flip-panel-1" class="tab-panel panel-1" role="tabpanel">
      <h2>Multi-Region Mesh Architecture</h2>
    </section>
    <section id="flip-panel-2" class="tab-panel panel-2" role="tabpanel">
      <h2>Kernel Network Packet Tracing</h2>
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
| `--perspective-depth` | `1000px` | 3D Perspective viewport depth |
| `--transition-3d` | `0.45s cubic-bezier(0.34, 1.56, 0.64, 1)` | Transition curve for 3D flip card reveal |

---

## 7. Customization

Customize 3D perspective depth or active glow shades by overriding CSS custom properties:

```css
.flip-tabs-wrapper {
  --perspective-depth: 800px;
  --accent-cyan: #ff0055;
}
```

---

## 8. Accessibility

- **Keyboard Navigation**: `:focus-visible` outlines provide clear keyboard focus indicators on tab controls.
- **ARIA Attributes**: Built with `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
- **Reduced Motion**: Disables 3D perspective rotations and card flip keyframes under `@media (prefers-reduced-motion: reduce)`.

---

## 9. Responsive Behaviour

- **Desktop**: Horizontal tab navigation bar with spacious grid panel content.
- **Mobile/Tablet**: Touch-friendly scrollable tab bar with responsive single-column layout.

---

## 10. Browser Compatibility

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest)
- Microsoft Edge (latest)
