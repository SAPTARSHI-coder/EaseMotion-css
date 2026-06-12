# Toggle/Switch Component

A production-ready, CSS-only toggle switch component for the EaseMotion CSS framework. No JavaScript required—built entirely with HTML and CSS using semantic form elements.

## Overview

This component provides a modern toggle switch interface for switching between two states (on/off, enabled/disabled). It uses the checkbox + label pattern for maximum accessibility and works with keyboard navigation, screen readers, and form validation.

## Features

✅ **CSS-Only** – No JavaScript or dependencies  
✅ **Smooth Animations** – Transform-based with Material Design easing  
✅ **Color Variants** – Primary, Success, Danger, Warning, Purple, Dark  
✅ **Size Options** – Small, Medium, Large  
✅ **Icon Toggles** – Animated icon switching with fade effects  
✅ **Full Accessibility** – Keyboard navigation, focus indicators, screen readers  
✅ **Dark Mode** – Automatic system preference detection  
✅ **Reduced Motion** – Respects `prefers-reduced-motion`  
✅ **High Contrast** – Supports high contrast mode  
✅ **Responsive** – Mobile-friendly with proper touch targets

## Installation

Simply include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css" />
```

## Basic Usage

```html
<input type="checkbox" id="my-toggle" class="ease-toggle" />
<label for="my-toggle" class="ease-toggle-label">Toggle Label</label>
```

### Pre-Checked

```html
<input type="checkbox" id="toggle-on" class="ease-toggle" checked />
<label for="toggle-on" class="ease-toggle-label">Feature Enabled</label>
```

### Disabled

```html
<input type="checkbox" id="toggle-disabled" class="ease-toggle" disabled />
<label for="toggle-disabled" class="ease-toggle-label">Disabled</label>
```

## Color Variants

Add color classes to change the checked color:

```html
<!-- Primary (Blue) -->
<input
  type="checkbox"
  id="toggle-primary"
  class="ease-toggle ease-toggle--primary"
  checked
/>
<label for="toggle-primary" class="ease-toggle-label">Primary</label>

<!-- Success (Green) -->
<input
  type="checkbox"
  id="toggle-success"
  class="ease-toggle ease-toggle--success"
  checked
/>
<label for="toggle-success" class="ease-toggle-label">Success</label>

<!-- Danger (Red) -->
<input
  type="checkbox"
  id="toggle-danger"
  class="ease-toggle ease-toggle--danger"
  checked
/>
<label for="toggle-danger" class="ease-toggle-label">Danger</label>

<!-- Warning (Orange) -->
<input
  type="checkbox"
  id="toggle-warning"
  class="ease-toggle ease-toggle--warning"
  checked
/>
<label for="toggle-warning" class="ease-toggle-label">Warning</label>

<!-- Purple -->
<input
  type="checkbox"
  id="toggle-purple"
  class="ease-toggle ease-toggle--purple"
  checked
/>
<label for="toggle-purple" class="ease-toggle-label">Purple</label>

<!-- Dark -->
<input
  type="checkbox"
  id="toggle-dark"
  class="ease-toggle ease-toggle--dark"
  checked
/>
<label for="toggle-dark" class="ease-toggle-label">Dark</label>
```

## Size Variants

```html
<!-- Small -->
<input
  type="checkbox"
  id="toggle-sm"
  class="ease-toggle ease-toggle--sm"
  checked
/>
<label for="toggle-sm" class="ease-toggle-label">Small</label>

<!-- Medium (default) -->
<input
  type="checkbox"
  id="toggle-md"
  class="ease-toggle ease-toggle--md"
  checked
/>
<label for="toggle-md" class="ease-toggle-label">Medium</label>

<!-- Large -->
<input
  type="checkbox"
  id="toggle-lg"
  class="ease-toggle ease-toggle--lg"
  checked
/>
<label for="toggle-lg" class="ease-toggle-label">Large</label>
```

## Theme Toggle (Animated Icons)

Create toggles with animated icon switching:

```html
<!-- Light/Dark Mode -->
<input
  type="checkbox"
  id="theme-toggle"
  class="ease-toggle ease-toggle--lg ease-toggle--dark"
/>
<label for="theme-toggle" class="ease-toggle-label ease-toggle-label--icon">
  <span class="icon icon--sun">☀️</span>
  <span class="icon icon--moon">🌙</span>
</label>

<!-- Yes/No -->
<input
  type="checkbox"
  id="yes-no"
  class="ease-toggle ease-toggle--lg ease-toggle--success"
/>
<label for="yes-no" class="ease-toggle-label ease-toggle-label--icon">
  <span class="icon icon--off">✖</span>
  <span class="icon icon--on">✔</span>
</label>
```

## Accessibility Considerations

### Keyboard Navigation

- **Tab** – Focus on the toggle
- **Space/Enter** – Toggle on/off
- Clear focus ring visible for keyboard users

### Screen Readers

- Proper `<label for="id">` association
- Standard HTML checkbox for native support
- Semantic meaning via `checked` attribute

### Motion & Animation

- Respects `prefers-reduced-motion` setting
- Smooth 300ms transitions
- No jarring or flashing effects

### Visual Design

- Colors meet WCAG AA contrast standards
- Disabled state visually distinct
- Not reliant on color alone (shape and animation convey state)
- Dark mode support included

### Implementation

```html
<!-- Always use proper label association -->
<input type="checkbox" id="feature" class="ease-toggle" />
<label for="feature" class="ease-toggle-label">Feature Name</label>

<!-- Icon toggle with aria-label -->
<input type="checkbox" id="theme" class="ease-toggle" aria-label="Dark Mode" />
<label for="theme" class="ease-toggle-label ease-toggle-label--icon"
  >☀️/🌙</label
>
```

## Browser Support

- ✅ Chrome/Edge (latest 2)
- ✅ Firefox (latest 2)
- ✅ Safari (latest 2)
- ✅ Opera (latest 2)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile, Firefox Mobile)
- ⚠️ IE 11 (basic functionality, no animations)

## Customization via CSS Variables

All sizing, colors, and timing can be customized through CSS variables:

```css
:root {
  /* Sizing */
  --toggle-height-md: 28px;
  --toggle-width-md: 56px;
  --toggle-thumb-size-md: 24px;

  /* Colors */
  --toggle-bg-off: #e0e0e0;
  --toggle-bg-on-primary: #3498db;

  /* Animation */
  --toggle-transition-duration: 300ms;
  --toggle-transition-timing: cubic-bezier(0.4, 0, 0.2, 1);

  /* Focus */
  --toggle-focus-color: rgba(52, 152, 219, 0.6);
}
```

### Create Custom Variant

```css
.ease-toggle.ease-toggle--custom:checked + .ease-toggle-label::before {
  background-color: #your-color;
  box-shadow:
    inset 0 1px 3px rgba(0, 0, 0, 0.15),
    0 0 12px rgba(0, 0, 0, 0.2);
}
```

## Use in Forms

The component integrates seamlessly with HTML forms:

```html
<form id="settings">
  <fieldset>
    <legend>Preferences</legend>

    <input
      type="checkbox"
      id="notif"
      class="ease-toggle ease-toggle--primary"
      checked
    />
    <label for="notif" class="ease-toggle-label">Notifications</label>

    <input
      type="checkbox"
      id="emails"
      class="ease-toggle ease-toggle--success"
    />
    <label for="emails" class="ease-toggle-label">Email Updates</label>

    <button type="submit">Save</button>
  </fieldset>
</form>
```

## Real-World Examples

Settings panel, feature flags, theme switchers, and any binary state selection benefit from this component.
