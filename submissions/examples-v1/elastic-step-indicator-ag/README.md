# Elastic Step Indicator

An interactive, responsive, and accessible multi-step progress indicator designed with a clean clinical medical dashboard aesthetic, featuring pure CSS state transitions and elastic overshoot animations.

---

## 📋 Standard Framework Questions

### 1. What does this do?
This component visually tracks progression through a multi-step user workflow with elastic, overshoot animations on the active step capsule expansion, progress fill, and transition states.

### 2. How is it used?
Implement the stepper layout inside an `.ease-stepper-container` with hidden radio inputs for state mapping, linking label nodes to the checkboxes for keyboard and click compatibility:

```html
<div class="ease-stepper-container">
  <!-- Hidden Radio Inputs -->
  <input type="radio" id="step-1" name="workflow" class="ease-step-radio ease-sr-only" checked>
  <input type="radio" id="step-2" name="workflow" class="ease-step-radio ease-sr-only">

  <!-- Stepper Component -->
  <div class="ease-stepper">
    <div class="ease-stepper-track">
      <div class="ease-stepper-progress"></div>
    </div>

    <ul class="ease-stepper-list">
      <li class="ease-step-item" data-step="1">
        <label for="step-1" class="ease-step-trigger">
          <span class="ease-step-icon">
            <span class="ease-step-number">1</span>
            <span class="ease-step-check">✓</span>
          </span>
          <span class="ease-step-label">Verification</span>
        </label>
      </li>
      <li class="ease-step-item" data-step="2">
        <label for="step-2" class="ease-step-trigger">
          <span class="ease-step-icon">
            <span class="ease-step-number">2</span>
            <span class="ease-step-check">✓</span>
          </span>
          <span class="ease-step-label">Symptoms</span>
        </label>
      </li>
    </ul>
  </div>
</div>
```

### 3. Why is it useful?
It fits EaseMotion's philosophy by demonstrating that complex, spring-like interactive micro-animations (like pill expansion and checkmark popping) can be accomplished cleanly without heavy JavaScript runtimes, relying strictly on standard, highly-performant CSS engines and layout transitions.

---

## 🎨 Design & Features

- **Clinical Aesthetics**: Tailored colors and subtle micro-shadows ideal for telemedicine, diagnostic pipelines, or hospital administrative workflows.
- **Elastic Transitions**: Leverages custom overshoot `cubic-bezier(0.34, 1.56, 0.64, 1)` curves to simulate spring physics when steps change.
- **Pure CSS**: Completely operational without JS. Fully interactive using label click mappings.
- **Theme Support**: Seamlessly adjusts to light and dark theme modes using native user system preferences and `color-scheme` properties.

---

## 🛠️ Customization Guidance

You can customize colors, tracks, and spring curves by overriding the component CSS custom properties:

| Variable | Description | Default |
| :--- | :--- | :--- |
| `--ease-step-primary` | Accent color for active steps | `#0ea5e9` |
| `--ease-step-success` | Success color for completed steps | `#10b981` |
| `--ease-step-bg` | Background of the step nodes | `#ffffff` |
| `--ease-elastic-curve` | Overshoot physics timing function | `cubic-bezier(0.34, 1.56, 0.64, 1)` |

---

## ♿ Accessibility (a11y)
- **Keyboard Navigation**: Stepper inputs are focusable (`:focus-visible`) and display high-contrast clinical outlines for keyboard-only users. Clicking `Space` triggers active selection.
- **Screen Reader Support**: Uses an `.ease-sr-only` class to hide state management inputs while keeping semantic headings and inputs readable in tab orders.
- **Reduced Motion**: Disables spring bounce and transitions instantly when `prefers-reduced-motion: reduce` is detected.
