# Ease Toggle Switch

A zero-JavaScript toggle switch component for EaseMotion CSS.

## Features

- Pure CSS implementation
- Uses the `:checked` pseudo-class
- Smooth sliding animation
- Accessible focus state
- Supports `prefers-reduced-motion`
- Reusable for settings and forms

## Usage

```html
<label class="ease-toggle">
  <input type="checkbox" class="ease-toggle-input">
  <span class="ease-toggle-slider"></span>
  Enable Notifications
</label>
```

## CSS Variables

```css
--ease-color-primary: #6c63ff;
--ease-toggle-speed: 0.3s;
```

## Accessibility

- Uses native checkbox inputs
- Keyboard accessible
- Includes focus-visible styling
- Supports reduced-motion preferences