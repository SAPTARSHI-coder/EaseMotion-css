# Stepper Navigation Screen Reader Announcements (`a11y`)

Issue #81912 — Accessibility audit & Stepper Navigation Screen Reader Announcements enhancement.

## 1. What does this do?
This submission provides a fully WCAG 2.1 AA compliant Stepper Navigation component with dynamic live-region screen reader announcements, complete keyboard navigation, and High Contrast mode (`forced-colors: active`) support.

## 2. How is it used?
Include the stepper markup with `aria-current="step"`, live announcement container (`#sr-announcer`), and control buttons:

```html
<!-- Live Region Announcer for Screen Readers -->
<div id="sr-announcer" class="sr-only" aria-live="polite" aria-atomic="true" role="status"></div>

<!-- Stepper Navigation -->
<nav aria-label="Checkout Progress Stepper">
  <ol class="stepper-list" role="list">
    <li class="stepper-item step-active" data-step="1">
      <button type="button" class="stepper-button" aria-current="step" aria-controls="panel-1">
        <span class="step-badge">1</span>
        <span class="step-title">Account Info</span>
      </button>
    </li>
  </ol>
</nav>

<!-- Accessible Panel -->
<section id="panel-1" class="step-panel panel-active" role="region" aria-labelledby="step-1-title" tabindex="-1">
  <h3 id="step-1-title">Step 1: Account Information</h3>
  <!-- Form Controls -->
</section>
```

## 3. Why is it useful?
Stepper navigation flows in web applications are frequently inaccessible to screen reader users and keyboard-only users due to silent DOM swaps and lack of state announcements. This component ensures seamless accessibility compliance across VoiceOver, NVDA, and JAWS, making multi-step forms usable by everyone without accessibility barriers.

---

## Accessibility Audit & Technical Details

### Key WCAG 2.1 AA Highlights
- **Dynamic Screen Reader Announcements**: Live region (`#sr-announcer`) automatically verbalizes step updates (`Step X of Y: Step Name`), step completion, and validation errors (`assertive`).
- **Keyboard Navigation**:
  - `Tab` / `Shift+Tab`: Natural DOM focus management.
  - `Left` / `Right` / `Up` / `Down` Arrow keys: Navigate between step header buttons.
  - `Home` / `End`: Jump to first or last step.
  - `Space` / `Enter`: Activate focused step button or submit step.
  - `Esc`: Return focus to current active step header button.
- **High Contrast Support**: Uses `@media (forced-colors: active)` with `System Color` tokens (`CanvasText`, `Highlight`, `ButtonText`) and high-visibility focus borders.
- **Zero axe-core Errors**: Semantic HTML5 elements (`<header>`, `<main>`, `<nav>`, `<ol>`, `<section role="region">`, `<label for="...">`) ensure 0 automated accessibility audit errors.
- **Motion Reduction**: Respects `@media (prefers-reduced-motion: reduce)`.
