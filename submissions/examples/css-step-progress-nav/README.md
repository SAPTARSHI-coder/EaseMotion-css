# CSS Step Progress Navigation

A pure CSS multi-step progress navigation component that visually displays completed, active, and upcoming steps using connected indicators.

## Features

- Pure CSS implementation
- Completed, active, and pending states
- Connecting progress lines
- Responsive layout
- Light and dark mode support
- Accessible navigation structure
- Reduced motion support
- Easily customizable with CSS variables

## Usage

### HTML

```html
<nav class="step-nav" aria-label="Checkout Progress">
  <div class="step completed">
    <div class="step-circle">✓</div>
    <span class="step-label">Cart</span>
  </div>

  <div class="step active">
    <div class="step-circle">2</div>
    <span class="step-label">Shipping</span>
  </div>

  <div class="step">
    <div class="step-circle">3</div>
    <span class="step-label">Payment</span>
  </div>
</nav>
```

## Customization

```css
:root {
  --completed-color: #10b981;
  --active-color: #4f46e5;
  --inactive-color: #cbd5e1;
}
```

## Accessibility

- Uses semantic navigation container
- Supports `aria-label`
- Supports `aria-current="step"`
- Reduced motion compatibility

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## File Structure

```text
css-step-progress-nav/
├── demo.html
├── style.css
└── README.md
```