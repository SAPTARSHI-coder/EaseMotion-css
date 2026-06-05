# Custom Checkboxes & Radio Buttons

A pure CSS implementation of custom-styled checkboxes and radio buttons that replaces ugly browser defaults with modern, accessible, and theme-aware components.

## Features

- **Zero JavaScript**: Pure CSS styling using the sibling selector technique.
- **Accessible**: Supports keyboard navigation (`Tab`, `Space`, `Enter`) and screen readers.
- **Dark Mode Ready**: Automatically adapts to system preference via CSS variables.
- **Animations**: Smooth pop-in effect for checkmarks and dots.
- **Responsive**: Scales correctly on all device sizes.
- **Indeterminate Support**: Includes styles for the third "mixed" state.

## Usage

### Checkboxes

```html
<label class="ease-check-row">
  <input type="checkbox" class="ease-check-input" checked />
  <span class="ease-check-box">
    <svg class="ease-check-icon checkmark" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </span>
  <span>Label Text</span>
</label>
```

### Radio buttons

```html
<label class="ease-check-row" data-type="radio">
  <input type="radio" name="group-name" class="ease-check-input" checked />
  <span class="ease-check-box">
    <span class="ease-check-icon dot"></span>
  </span>
  <span>Option One</span>
</label>
```

### Disabled state

Add `disabled` to the input and `aria-disabled="true"` to the label:

```html
<label class="ease-check-row" aria-disabled="true">
  <input type="checkbox" class="ease-check-input" disabled />
  <!-- ... box and icon ... -->
  <span>Disabled Label</span>
</label>
```

### Customization

Modify these CSS variables in your project to match your brand:

```css
:root {
  --ease-check-primary: #your-brand-color;
  --ease-check-size: 20px;
  --ease-check-radius: 6px; /* Use 50% for round checkboxes */
}
```

## Browser Support

- Works in all modern browsers (Chrome, Firefox, Safari, Edge).
- Uses standard CSS features (Variables, Flexbox, SVG).
- Gracefully degrades in older browsers (inputs remain functional, styling may revert to default).

## Why This Matters

Forms are the backbone of web applications. Providing a high-quality, dependency-free styling solution for basic inputs removes a major pain point for developers using EaseMotion, ensuring forms look as good as the rest of the UI without writing custom CSS for every project.
