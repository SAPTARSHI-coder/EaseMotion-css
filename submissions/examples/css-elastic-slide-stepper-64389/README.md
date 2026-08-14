# CSS Elastic-Slide Stepper for Glassmorphism UI Layouts

A pure HTML5 and CSS3 showcase component implementing elastic spring step transitions and glassmorphic workflow panels for modern web applications.

---

## 1. Overview

The **CSS Elastic-Slide Stepper** delivers a multi-step navigation interface featuring glassmorphism card containers (`backdrop-filter: blur(16px)`), active step elastic spring scaling (`cubic-bezier(0.68, -0.55, 0.265, 1.55)`), and smooth panel entrance keyframes (`@keyframes elastic-panel-slide`). Built operating completely without JavaScript dependencies, it uses standard HTML radio controls paired with CSS custom properties adhering to **EaseMotion CSS** standards.

---

## 2. Features

- **Pure HTML5 & CSS3**: 100% dependency-free HTML and CSS.
- **Elastic Spring Motion**: Active step tabs scale with an organic spring bounce effect.
- **Glassmorphism Panels**: Dark mode glassmorphic step cards with glowing metric highlights.
- **Radio-Driven Controls**: Pure CSS tab switching linked via sibling combinators.
- **Accessibility Ready**: ARIA tablist/tabpanel semantics, `:focus-visible` focus rings, and `prefers-reduced-motion` support.
- **Fully Responsive**: Fluid grid layout supporting multi-column desktop displays and mobile viewports.

---

## 3. Folder Structure

```text
submissions/examples/css-elastic-slide-stepper-64389/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Complete CSS stylesheet
└── README.md    # Documentation and usage guide
```

---

## 4. Usage

To integrate the **CSS Elastic-Slide Stepper** into your project:

1. Include `style.css` in your HTML `<head>`.
2. Add radio input controllers (`<input type="radio" name="elastic-step">`).
3. Connect `<label>` step tabs to radio `id` attributes and match with corresponding `<section>` panels.

---

## 5. HTML Example

```html
<div class="elastic-stepper-wrapper">
  <!-- Radio Controllers -->
  <input type="radio" name="elastic-step" id="elastic-step-1" class="stepper-radio" checked aria-hidden="true">
  <input type="radio" name="elastic-step" id="elastic-step-2" class="stepper-radio" aria-hidden="true">

  <!-- Stepper Navigation -->
  <nav class="stepper-nav" role="tablist">
    <label for="elastic-step-1" class="step-item step-1" role="tab" tabindex="0">
      <span class="step-number">01</span>
      <span class="step-title">Workspace</span>
    </label>
    <label for="elastic-step-2" class="step-item step-2" role="tab" tabindex="0">
      <span class="step-number">02</span>
      <span class="step-title">Integration</span>
    </label>
  </nav>

  <!-- Panels -->
  <div class="stepper-panels">
    <section class="stepper-panel panel-1" role="tabpanel">
      <h2>Step 1: Workspace</h2>
    </section>
    <section class="stepper-panel panel-2" role="tabpanel">
      <h2>Step 2: Integration</h2>
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
| `--transition-elastic` | `0.55s cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Elastic spring transition curve |

---

## 7. Customization

Customize elastic timing or step accents by overriding CSS custom properties:

```css
.elastic-stepper-wrapper {
  --accent-cyan: #ff0055;
  --transition-elastic: 0.4s ease-out;
}
```

---

## 8. Accessibility

- **ARIA Roles**: Includes `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
- **Keyboard Navigation**: Interactive step labels feature clear focus visible indicators (`:focus-visible`).
- **Reduced Motion**: Disables elastic spring motion and keyframe animations under `@media (prefers-reduced-motion: reduce)`.

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
