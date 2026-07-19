# Zoom Checkbox Component

## What does this do?

A React checkbox that zooms / pops when checked.

## How is it used?

```jsx
import ZoomCheckbox from './ZoomCheckbox';

<ZoomCheckbox>Hello</ZoomCheckbox>
```

## Why is it useful?

Zoom feedback makes selections feel tactile and clear — a small, reusable interactive pattern for forms.

## Accessibility

- Native `<input type="checkbox">` with associated `<label>`
- Visible `:focus-visible` ring on the custom box
- Under `prefers-reduced-motion: reduce`, zoom animation is disabled

## Files

```
submissions/react/feature-zoom-checkbox-component-sum/
├── ZoomCheckbox.jsx
├── style.css
└── README.md
```

Related issue: #50753
