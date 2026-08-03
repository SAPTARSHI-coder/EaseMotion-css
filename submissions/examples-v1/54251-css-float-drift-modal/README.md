# CSS Float-Drift Modal for Accessible Web Layouts

## What does this do?

A pure CSS modal component with float-drift animations. Modals drift in with a bouncy spring-based easing curve, floating up from below with scale and opacity transitions. Built for accessible web layouts with full `prefers-reduced-motion` support.

## How is it used?

1. Include `style.css` in your HTML file.
2. Use the following HTML structure:

```html
<input type="checkbox" id="modal-1" class="fd-toggle">
<label for="modal-1" class="fd-trigger-label violet">Open Modal</label>

<div class="fd-overlay" aria-modal="true" role="dialog" aria-label="Modal 1">
  <div class="fd-modal">
    <div class="fd-modal-icon violet" aria-hidden="true">&#9670;</div>
    <h2>Modal Title</h2>
    <p>Modal description goes here.</p>
    <div class="fd-modal-actions">
      <label for="modal-1" class="fd-modal-btn secondary">Cancel</label>
      <label for="modal-1" class="fd-modal-btn primary">Confirm</label>
    </div>
    <label for="modal-1" class="fd-close-label" aria-label="Close modal">&#10005;</label>
  </div>
</div>
```

### Available icon color classes

- `.fd-modal-icon.violet` — Violet accent
- `.fd-modal-icon.sky` — Sky accent
- `.fd-modal-icon.rose` — Rose accent
- `.fd-modal-icon.lime` — Lime accent

### CSS Custom Properties

```css
:root {
  --bg-primary: #0a0a11;
  --bg-surface: #121220;
  --bg-panel: #1a1a2c;
  --text-primary: #ededf4;
  --text-secondary: #7a7a8c;
  --border-color: #26263c;
  --accent-violet: #7c3aed;
  --accent-sky: #0ea5e9;
  --accent-rose: #e11d48;
  --accent-lime: #84cc16;
  --modal-bg: #16162a;
  --modal-border: #2a2a44;
  --overlay-bg: rgba(0, 0, 0, 0.6);
}
```

Override any of these variables to customize the theme.

## Features

- **Float-Drift Animation**: Modals float up with bouncy cubic-bezier elastic easing
- **Scale + Translate + Opacity**: Combined transforms for smooth entrance
- **Overlay Fade**: Background overlay fades in with transition
- **Pure CSS**: Checkbox hack for toggle — zero JavaScript
- **Four Modal Types**: Confirm, info, warning, success with unique colors
- **Close Button**: X button and cancel/confirm actions to dismiss
- **Responsive Design**: Adapts across desktop, tablet, and mobile
- **Accessibility**: `role="dialog"`, `aria-modal`, `aria-label`, full `prefers-reduced-motion` support
- **Semantic HTML**: Proper ARIA attributes and roles

## Tech Stack

- HTML5
- CSS3 (Transitions, CSS Custom Properties, Checkbox Hack)
- No JavaScript required
