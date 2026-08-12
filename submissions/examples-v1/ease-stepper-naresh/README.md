# Stepper / Step Indicator Component

## 1. What does this do?

This component introduces a pure CSS, accessibly structured, and fully responsive stepper/step indicator component (`.ease-stepper`) for multi-step forms, onboarding wizards, and checkout flows. It supports both horizontal (default) and vertical layouts, and features custom transition animations for completed checkmarks (scale-in), connector line fills, and active step markers (subtle scaling pulse rings).

---

## 2. How is it used?

Structure the stepper using step containers and connector line elements:

```html
<div class="ease-stepper" role="navigation" aria-label="Checkout Progress">
  <!-- Step 1: Completed -->
  <div class="ease-stepper__step ease-stepper__step--completed">
    <div class="ease-stepper__circle" aria-label="Step 1: Contact Info">
      <span class="ease-stepper__icon" aria-hidden="true">✓</span>
    </div>
    <div class="ease-stepper__label">Contact Info</div>
  </div>

  <!-- Connector Line: Completed -->
  <div class="ease-stepper__connector ease-stepper__connector--completed" aria-hidden="true"></div>

  <!-- Step 2: Active -->
  <div class="ease-stepper__step ease-stepper__step--active" aria-current="step">
    <div class="ease-stepper__circle" aria-label="Step 2: Payment">
      <span class="ease-stepper__number">2</span>
    </div>
    <div class="ease-stepper__label">Payment</div>
  </div>

  <!-- Connector Line: Upcoming -->
  <div class="ease-stepper__connector" aria-hidden="true"></div>

  <!-- Step 3: Upcoming -->
  <div class="ease-stepper__step ease-stepper__step--upcoming">
    <div class="ease-stepper__circle" aria-label="Step 3: Confirm">
      <span class="ease-stepper__number">3</span>
    </div>
    <div class="ease-stepper__label">Confirm</div>
  </div>
</div>
```

### Layout Modifiers

- `.ease-stepper`: Horizontal layout (default).
- `.ease-stepper--vertical`: Stacked vertical layout.

### CSS Custom Properties

Customize the stepper look and feel using local CSS variables:

| Variable | Default Value | Description |
|---|---|---|
| `--ease-step-color-completed` | `#6366f1` | Color for completed steps & connector lines |
| `--ease-step-color-active` | `#6366f1` | Color for active step text, borders & pulse rings |
| `--ease-step-color-upcoming` | `#d1d5db` | Color for upcoming steps & empty connectors |
| `--ease-step-size` | `2rem` | Circle diameter |
| `--ease-step-connector-duration` | `0.4s` | Duration of connector line fill animation |

---

## 3. Accessibility Best Practices

- Use `role="navigation"` and a descriptive `aria-label` on the wrapper.
- Mark the current active step with `aria-current="step"`.
- Set descriptive `aria-label`s on each circle (e.g. `aria-label="Step 1: Contact Info"`).
- Mark connectors with `aria-hidden="true"`.
- Automatically respects users' `prefers-reduced-motion` settings.
