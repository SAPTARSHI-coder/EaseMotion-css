# Product Catalog Modal with Shimmer Pulse (React)

A premium, reusable React modal component featuring a smooth **Shimmer Pulse** animation, designed specifically for product catalog layouts. The component includes a complete sample product layout with image placeholder, product details, specifications, ratings, and call-to-action buttons.

## Features

- **Shimmer Pulse Animation**: Smooth, premium loading animation track at the modal header
- **Product Catalog Layout**: Complete sample layout with product image, details, specs, and CTAs
- **Accessibility**: Full ARIA support (`role="dialog"`, `aria-modal`, `aria-labelledby`)
- **Keyboard Support**: Escape key closes modal, full keyboard navigation
- **Body Scroll Lock**: Prevents background scroll when modal is open
- **Overlay Click to Close**: Click outside the modal to dismiss
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Dark Mode Support**: Automatic dark mode detection with CSS variables
- **Dependency-Free**: Pure React and CSS, no external libraries required
- **Customizable**: Easy prop-based configuration and CSS variable theming

---

## Folder Structure

```
product-catalog-modal-shimmer-pulse/
├── ProductCatalogModal.jsx
├── style.css
└── README.md
```

---

## Component Exports

### `ProductCatalogModal`

Main modal component for wrapping custom content.

```jsx
import { ProductCatalogModal } from './ProductCatalogModal';
```

### `ProductCatalogSample`

Ready-to-use sample component demonstrating the modal with a complete product layout.

```jsx
import { ProductCatalogSample } from './ProductCatalogModal';
```

---

## Props Reference

### `ProductCatalogModal` Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Controls modal visibility. Returns `null` when `false`. |
| `onClose` | `function` | `undefined` | Callback invoked when modal closes (via overlay click, close button, or Escape key). |
| `title` | `string` | `"Product Details"` | Modal header title text. |
| `children` | `ReactNode` | `undefined` | Modal body content. Can be any React element. |
| `className` | `string` | `""` | Additional CSS class names to apply to modal container. |

---

## Usage

### Basic Usage with Custom Content

```jsx
import { useState } from 'react';
import { ProductCatalogModal } from './ProductCatalogModal';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Open Modal
      </button>

      <ProductCatalogModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Custom Product"
      >
        <p>Your custom content here</p>
      </ProductCatalogModal>
    </>
  );
}
```

### Using the Sample Component

The easiest way to get started is using the included sample component:

```jsx
import { ProductCatalogSample } from './ProductCatalogModal';

function App() {
  return <ProductCatalogSample />;
}
```

This renders a complete product modal with a demo button. Click "View Product Details" to see it in action.

### Custom Product Modal

```jsx
import { useState } from 'react';
import { ProductCatalogModal } from './ProductCatalogModal';

function ProductModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        View Smart Watch
      </button>

      <ProductCatalogModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Apple Watch Series 9"
      >
        <div className="product-catalog-content ease-flex ease-flex-col">
          <div className="product-image-container ease-skeleton-shimmer">
            <div className="product-image-placeholder">📱</div>
          </div>

          <div className="product-details ease-stack">
            <div className="product-header">
              <h3 className="product-name">Apple Watch Series 9</h3>
              <p className="product-price">$399.99</p>
            </div>

            <p className="product-description">
              Advanced health and fitness features with Always-On Retina display.
            </p>
          </div>

          <div className="product-actions ease-flex ease-gap-3">
            <button className="btn-primary ease-flex-1">
              Add to Cart
            </button>
            <button className="btn-secondary ease-flex-1">
              Save for Later
            </button>
          </div>
        </div>
      </ProductCatalogModal>
    </>
  );
}
```

---

## Customization

### Theming with CSS Variables

Override the default colors and animations by setting CSS variables in your stylesheet:

```css
:root {
  --product-modal-duration: 2.5s;                    /* Animation duration */
  --product-modal-bg-overlay: rgba(10, 10, 12, 0.9); /* Overlay background */
  --product-modal-bg: #ffffff;                       /* Modal background */
  --product-modal-text: #111111;                     /* Text color */
  --product-modal-text-muted: #666666;              /* Muted text color */
  --product-modal-border: #e5e7eb;                  /* Border color */
  --product-modal-accent: #3b82f6;                  /* Accent/CTA color */
  --product-modal-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
}
```

### Custom Styling

Add custom classes to the modal container:

```jsx
<ProductCatalogModal
  isOpen={isOpen}
  onClose={onClose}
  title="Title"
  className="my-custom-modal"
>
  Content
</ProductCatalogModal>
```

Then style it:

```css
.my-custom-modal {
  max-width: 600px;
  /* Additional styles */
}
```

### Shimmer Animation Customization

The shimmer pulse animation can be customized by modifying the `--product-modal-duration` CSS variable:

```css
:root {
  --product-modal-duration: 3s; /* Slower animation */
}
```

The gradient colors can be adjusted in the `.product-shimmer-pulse-track` rule in `style.css`.

### Dark Mode

Dark mode is automatically applied based on system preferences (`prefers-color-scheme: dark`). Colors automatically adjust—no additional configuration needed.

To force dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --product-modal-bg-overlay: rgba(0, 0, 0, 0.95);
    --product-modal-bg: #0f172a;
    --product-modal-text: #ffffff;
    --product-modal-text-muted: #cbd5e1;
    --product-modal-border: #334155;
    --product-modal-accent: #60a5fa;
  }
}
```

---

## Accessibility Features

- **ARIA Attributes**: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
- **Keyboard Navigation**: Full keyboard support with Escape key support
- **Focus Management**: Auto-focus on close button, focus-visible styling
- **Screen Reader Text**: Semantic HTML with proper labels (`aria-label`)
- **Motion Preferences**: Respects `prefers-reduced-motion` media query
- **Semantic HTML**: Proper heading hierarchy and semantic structure

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Integration with EaseMotion CSS

This component uses EaseMotion utility classes for layout and responsive design:

- `ease-flex`, `ease-flex-col`: Flexbox utilities
- `ease-justify-between`, `ease-items-center`: Alignment utilities
- `ease-gap-*`: Spacing utilities
- `ease-skeleton-shimmer`: Shimmer skeleton animation
- `ease-sr-only`: Screen reader only text

To use these utilities, ensure EaseMotion CSS is imported in your project.

---

## Performance Notes

- Modal returns `null` when `isOpen` is false (no DOM nodes)
- Body scroll lock is properly cleaned up on unmount
- Event listeners are properly removed to prevent memory leaks
- CSS animations use GPU acceleration (`transform`, `opacity`)
- Respects `prefers-reduced-motion` for accessibility

---

## Examples

### Minimal Example

```jsx
import { ProductCatalogSample } from './ProductCatalogModal';

export default function App() {
  return <ProductCatalogSample />;
}
```

### With State Management

```jsx
import { useState } from 'react';
import { ProductCatalogModal } from './ProductCatalogModal';

const products = [
  { id: 1, name: 'Headphones', price: '$99.99' },
  { id: 2, name: 'Watch', price: '$199.99' },
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {products.map(product => (
        <button key={product.id} onClick={() => setSelected(product)}>
          {product.name}
        </button>
      ))}

      <ProductCatalogModal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.name || ''}
      >
        <p>Price: {selected?.price}</p>
      </ProductCatalogModal>
    </>
  );
}
```

---

## License

Created as a React component submission for the EaseMotion CSS repository under the MIT License.

---

## Contributing

Contributions, bug reports, and feature requests are welcome! Please follow the EaseMotion CSS contribution guidelines.
