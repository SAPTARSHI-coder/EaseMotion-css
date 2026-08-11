# Animated Number Counter

A CSS animated number counter using @property integer animation — pure CSS.

## Features
- Animated counting effect via CSS @property integer animation
- Custom properties: `--ease-counter-from`, `--ease-counter-to`, `--ease-counter-duration`
- Style variants: default (indigo), primary (cyan), gradient (multi-color)
- Comma-formatted display ready (input values can include commas)

## Expected Classes
- `.ease-number-counter` — container
- `.ease-counter-value` — animated number display
- `.ease-counter-label` — descriptive label
- `.variant-primary` / `.variant-gradient` — alternate styles

## Usage
```html
<div class="ease-number-counter" style="--ease-counter-to: 5000;">
  <span class="ease-counter-value">5000</span>
  <span class="ease-counter-label">Downloads</span>
</div>
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript
