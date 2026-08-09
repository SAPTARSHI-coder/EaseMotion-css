# Multi-Step Interactive Progress Stepper

A premium, highly-interactive, and accessibility-optimized Multi-Step Progress Stepper wizard component.

---

### 1. What does this component do?

This component provides a premium, responsive multi-step wizard helper for forms (e.g. registration, checkout, configuration flows). It uses CSS custom transitions, micro-interactions, and SVG paths to animate connector progress bars, active step glow rings, completed step states, and checkmark drawing sequences.

---

### 2. How is it used?

Structure your HTML as follows:

```html
<nav aria-label="Progress steps" class="em-stepper-track-container">
  <!-- Visual connector tracking line -->
  <div class="em-stepper-connector-line" aria-hidden="true">
    <div class="em-stepper-connector-fill" style="--stepper-progress: 33.33%;"></div>
  </div>

  <ul class="em-stepper-steps">
    <!-- Active Step (Step 1) -->
    <li class="em-step-item is-active">
      <button type="button" class="em-step-node" aria-current="step" aria-label="Step 1: Account Details">
        <span class="em-step-number">1</span>
        <svg class="em-checkmark-svg" viewBox="0 0 24 24" aria-hidden="true">
          <path class="em-checkmark-path" d="M20 6L9 17l-5-5" />
        </svg>
      </button>
      <div class="em-step-label">
        <span class="em-step-title">Account</span>
        <span class="em-step-desc">Login details</span>
      </div>
    </li>

    <!-- Completed Step (Step 2) -->
    <li class="em-step-item is-completed">
      <button type="button" class="em-step-node" aria-label="Step 2: Personal Details">
        <span class="em-step-number">2</span>
        <svg class="em-checkmark-svg" viewBox="0 0 24 24" aria-hidden="true">
          <path class="em-checkmark-path" d="M20 6L9 17l-5-5" />
        </svg>
      </button>
      ...
    </li>
  </ul>
</nav>
```

---

### 3. Why is it useful?

It replaces simple or static form steps with a dynamic, immersive experience. Key benefits include:
- **Expressive Micro-interactions:** Nodes scale up, pulsate, and highlight when active. Connectors fill smoothly with sub-pixel CSS translations.
- **Validation Integration:** Integrates native HTML5 form constraints, ensuring error feedback triggers before users step forward.
- **Zero Dependencies:** Formulated completely with native CSS Custom Properties, semantic elements, and vanilla JavaScript.

---

### 4. Why it fits EaseMotion CSS

EaseMotion CSS focuses on expressive and readable CSS layout and motion helpers. This component fits perfectly by:
- Leveraging `--ease-*` variables for timings, spring curves, colors, and shadows.
- Exposing simple CSS custom property bindings (`--stepper-progress`) to unify horizontal (desktop) and vertical (mobile) layouts under a single variable.
- Providing high-contrast, premium, lightweight styling that runs smoothly on standard modern devices.

---

### 5. Features

- **Double Progress Tracking:** Includes both a numeric percentage text indicator + visual linear progress track and node connector highlights.
- **Interactive Back-navigation:** Allows users to click on completed step circles directly or via keyboard to review/edit their entries.
- **Responsive Adaptability:** Auto-stacks vertically on small screen viewports (mobile) so progress reads downwards, converting width transitions into height fills.
- **Success Celebrations:** Fades and pops a large celebratory checkmark with custom keyframes when form entries are fully completed.
- **Review Summary:** Compiles and outputs a sleek table of entered registration metrics on the confirmation slide.

---

### 6. Accessibility considerations

- **Keyboard navigation:** Uses native `<button>` tags for step items, allowing keyboard focus (`Tab`) and execution (`Enter` or `Space`). 
- **ARIA Standards:** Explicitly exposes `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` boundaries. Employs `aria-current="step"`, `aria-live="polite"`, and `role="tabpanel"` structures.
- **Contrast Ratios:** Utilizes WCAG AAA-compliant dark backgrounds and high-contrast primary text indicators.
- **Motion Safe:** Full `@media (prefers-reduced-motion: reduce)` support instantly drops all keyframe slides, rotations, checkmark draws, and scales to protect users with motion sensitivities.
