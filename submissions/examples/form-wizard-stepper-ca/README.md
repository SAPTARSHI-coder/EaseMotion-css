# 🧙‍♂️ Accessible Multi-Step Form Wizard with Animated Progress Stepper

> An accessible, responsive registration form wizard component featuring WAI-ARIA step announcements (`aria-current="step"`), direction-aware panel slide transitions, inline form validation, and screen reader focus management.

---

## 📖 Overview

Multi-step form wizards (checkout flows, user registration, onboarding surveys) require step indicators, clear validation feedback, and smooth panel transitions. 

This component demonstrates an accessible multi-step form wizard built with pure HTML5, CSS custom properties, and zero-dependency Vanilla JS. It ensures screen reader users never lose context when advancing or stepping back, while delivering smooth ease-spring animations for visual users.

---

## 🎯 How is it used?

### 1. HTML Stepper Structure (`demo.html`)

```html
<nav class="stepper-container" aria-label="Registration Wizard Progress">
  <ol class="stepper-list">
    <li class="step-item active">
      <button type="button" class="step-button" aria-current="step" aria-controls="step-panel-1">
        <span class="step-badge">1</span>
        <span class="step-title">Account Details</span>
      </button>
    </li>
    <li class="step-item">
      <button type="button" class="step-button" aria-controls="step-panel-2">
        <span class="step-badge">2</span>
        <span class="step-title">Plan Selection</span>
      </button>
    </li>
  </ol>
</nav>

<fieldset id="step-panel-1" class="wizard-panel active" aria-labelledby="legend-step-1">
  <legend id="legend-step-1" class="panel-legend" tabindex="-1">Account Information</legend>
  <!-- Form fields -->
</fieldset>
```

### 2. CSS Token Architecture (`style.css`)

```css
:root {
  --em-clr-primary:      #6366f1;
  --em-clr-primary-glow: rgba(99 102 241 / 0.35);
  --em-clr-green:        #10b981;
  --em-clr-error:        #ef4444;
  --em-ease-spring:      cubic-bezier(0.34, 1.56, 0.64, 1);
  --em-ease-out:         cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## ✨ Key Highlights

| Feature | Implementation |
|---------|----------------|
| **WAI-ARIA Stepper** | Stepper list items use `aria-current="step"` on active item and completed checkmark SVG icons on finished steps |
| **Direction-Aware Sliding** | Panels slide left on Next (`.slide-in-right` / `.slide-out-left`) and slide right on Prev (`.slide-in-left` / `.slide-out-right`) |
| **Screen Reader Focus Shift** | Automatically moves focus to the new panel `<legend tabindex="-1">` upon step transition |
| **Live ARIA Step Announcer** | Visually hidden live region (`aria-live="polite"`) announces "Step 1 of 3: Account Details" |
| **Field Validation** | Validates required fields before advancing; highlights errors (`aria-invalid="true"`) and auto-focuses first invalid input |
| **Mobile Compact View** | Transforms stepper labels into compact badge numbers on screens under 640px |
| **RTL Support** | Uses CSS Logical Properties (`margin-inline`, `padding-block`, `inset-inline`) for right-to-left layout alignment |

---

## ⌨️ Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` / `Shift+Tab` | Navigate between form inputs, radio cards, and buttons |
| `Space` / `Enter` | Toggle billing frequency switch, radio cards, and advance steps |
| `Left Arrow` / `Right Arrow` | Change active radio tier inside the plan selection group |

---

## ♿ Accessibility Notes

- **ARIA Landmarks & Roles**: `<nav aria-label="...">`, `<ol>`, `<fieldset>`, `<legend>`, `role="radiogroup"`, `role="switch"`.
- **Error Alerts**: Error messages use `role="alert"` and `aria-live="assertive"` so invalid submissions are read immediately.
- **Focus Indicators**: Dual-color high contrast outlines on `:focus-visible`.
- **Reduced Motion**: Wrapped with `@media (prefers-reduced-motion: reduce)` to disable sliding animations when requested by user OS settings.
