# CSS Glitch-Flicker Stepper for Glassmorphism UI Layouts

A pure HTML5 and CSS3 showcase component implementing animated cyber glitch-flicker step indicators and glassmorphic workflow panels for developer consoles.

---

## 1. Overview

The **CSS Glitch-Flicker Stepper** provides a responsive multi-step navigation interface featuring glassmorphism card styling (`backdrop-filter: blur(16px)`), active step glitch flicker sweeps (`@keyframes glitch-step-flicker`), and smooth panel entrance keyframes (`@keyframes panel-glitch-reveal`). Built operating completely without JavaScript dependencies, it uses standard HTML radio controls paired with CSS custom properties adhering to **EaseMotion CSS** standards.

---

## 2. Features

- **Pure HTML5 & CSS3**: 100% dependency-free HTML and CSS.
- **Cyber Glitch-Flicker Motion**: Active step indicators feature animated glitch sweeps with drop-shadow color shifts (`#ff0055` & `#00f0ff`).
- **Glassmorphism Panels**: Dark mode glassmorphic step cards with accent status indicators.
- **Radio-Driven Navigation**: Pure CSS step tab switching linked via sibling combinator matching.
- **Accessibility Ready**: ARIA tablist/tabpanel roles, `:focus-visible` focus rings, and `prefers-reduced-motion` support.
- **Fully Responsive**: Fluid grid layout supporting multi-column desktop navigation and mobile viewports.

---

## 3. Folder Structure

```text
submissions/examples/css-glitch-flicker-stepper-64390/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Complete CSS stylesheet
└── README.md    # Documentation and usage guide
```

---

## 4. Usage

To integrate the **CSS Glitch-Flicker Stepper** into your project:

1. Include `style.css` in your HTML `<head>`.
2. Add radio input controllers (`<input type="radio" name="stepper-step">`).
3. Connect `<label>` step tabs to radio `id` attributes and match with corresponding `<section>` panels.

---

## 5. HTML Example

```html
<div class="glitch-stepper-wrapper">
  <!-- Radio Controllers -->
  <input type="radio" name="stepper-step" id="step-radio-1" class="stepper-radio" checked aria-hidden="true">
  <input type="radio" name="stepper-step" id="step-radio-2" class="stepper-radio" aria-hidden="true">

  <!-- Stepper Navigation -->
  <nav class="stepper-nav" role="tablist">
    <label for="step-radio-1" class="step-item step-1" role="tab" tabindex="0">
      <span class="step-number">01</span>
      <span class="step-title">Provisioning</span>
    </label>
    <label for="step-radio-2" class="step-item step-2" role="tab" tabindex="0">
      <span class="step-number">02</span>
      <span class="step-title">Topology</span>
    </label>
  </nav>

  <!-- Panels -->
  <div class="stepper-panels">
    <section class="stepper-panel panel-1" role="tabpanel">
      <h2>Step 1: Provisioning</h2>
    </section>
    <section class="stepper-panel panel-2" role="tabpanel">
      <h2>Step 2: Topology</h2>
    </section>
  </div>
</div>
```

---

## 6. CSS Custom Properties

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#07090e` | Overall background color |
| `--bg-glass` | `rgba(17, 24, 39, 0.75)` | Glassmorphic card background |
| `--accent-cyan` | `#00f0ff` | Glowing cyan step accent |
| `--accent-emerald` | `#10b981` | Status green step accent |
| `--accent-purple` | `#a855f7` | Secondary purple status accent |
| `--accent-pink` | `#ff0055` | Glitch shadow color shift |
| `--transition-glitch` | `0.35s cubic-bezier(0.16, 1, 0.3, 1)` | Panel reveal transition curve |

---

## 7. Customization

Customize glitch timing or step accents by overriding CSS custom properties:

```css
.glitch-stepper-wrapper {
  --accent-cyan: #ff0055;
  --transition-glitch: 0.25s ease-out;
}
```

---

## 8. Accessibility

- **ARIA Roles**: Includes `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
- **Keyboard Navigation**: Interactive step labels feature clear focus visible indicators (`:focus-visible`).
- **Reduced Motion**: Disables glitch flicker sweeps and keyframe animations under `@media (prefers-reduced-motion: reduce)`.

---

## 9. Responsive Behaviour

- **Desktop**: 4-column step navigation bar with side-by-side metric panels.
- **Mobile/Tablet**: 2-column step navigation grid with stacked metric cards.

---

## 10. Browser Compatibility

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest)
- Microsoft Edge (latest)
