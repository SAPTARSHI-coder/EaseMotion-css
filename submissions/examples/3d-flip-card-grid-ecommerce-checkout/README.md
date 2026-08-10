# 3D-Flip Card Grid for E-Commerce Checkout

A responsive, CSS-only 3D-Flip Card Grid designed for e-commerce checkout layouts.

The component uses CSS 3D transforms to reveal additional product information when a user hovers over or focuses on a product card.

## Features

* Pure HTML and CSS
* No JavaScript
* No external frameworks
* CSS 3D card flipping
* Product information on front and back faces
* Hover and keyboard focus interaction
* Responsive two-column desktop layout
* Single-column mobile layout
* CSS custom properties
* Smooth transitions
* Accessible focus interaction
* `prefers-reduced-motion` support

## Folder Structure

```text
3d-flip-card-grid-ecommerce-checkout/
├── demo.html
├── style.css
└── README.md
```

## Usage

Place the example in:

```text
submissions/examples/3d-flip-card-grid-ecommerce-checkout/
```

Open `demo.html` in a modern browser.

No build tools or dependencies are required.

## 3D Flip Effect

The card uses CSS perspective and `rotateY()`:

```css
.flip-card {
  perspective: 1200px;
}

.flip-card-inner {
  transform-style: preserve-3d;
  transition: transform 700ms ease;
}

.flip-card:hover .flip-card-inner,
.flip-card:focus-within .flip-card-inner {
  transform: rotateY(180deg);
}
```

The front and back faces use:

```css
backface-visibility: hidden;
```

The back face is rotated by 180 degrees so that it becomes visible after the parent rotates.

## CSS Custom Properties

The animation can be customized from `:root`:

```css
:root {
  --card-radius: 22px;
  --flip-duration: 700ms;
  --flip-easing: cubic-bezier(0.4, 0.2, 0.2, 1);
}
```

### Card Radius

```css
--card-radius: 22px;
```

Controls the rounded corners of the cards.

### Flip Duration

```css
--flip-duration: 700ms;
```

Controls how quickly the card flips.

### Flip Easing

```css
--flip-easing: cubic-bezier(0.4, 0.2, 0.2, 1);
```

Controls the acceleration curve of the 3D rotation.

## Accessibility

The cards support keyboard interaction through `:focus-within`.

Reduced-motion preferences are also respected:

```css
@media (prefers-reduced-motion: reduce) {
  .flip-card-inner {
    transition: none;
  }
}
```

This prevents users who prefer reduced motion from experiencing the full 3D rotation.

## Responsive Design

### Desktop

Products are displayed in a two-column grid.

### Tablet

The grid adapts to available screen width.

### Mobile

Products are displayed in a single-column layout, and the order summary stacks vertically.

## Customization

Additional products can be added by duplicating the card structure:

```html
<article class="flip-card">
  <div class="flip-card-inner">

    <div class="flip-card-front">
      <div class="product-icon">◇</div>
      <span class="product-category">Category</span>
      <h2>Product Name</h2>
      <p>Product description.</p>
      <strong>$99</strong>
    </div>

    <div class="flip-card-back">
      <span class="product-category">Product details</span>
      <h2>Product Name</h2>

      <ul>
        <li>Feature one</li>
        <li>Feature two</li>
        <li>Feature three</li>
      </ul>

      <div class="back-price">$99</div>
    </div>

  </div>
</article>
```

## Browser Support

The example uses modern CSS features including:

* CSS Grid
* CSS Flexbox
* CSS custom properties
* CSS transforms
* CSS 3D transforms
* CSS perspective
* CSS transitions
* Media queries
* `prefers-reduced-motion`

A modern browser is recommended.

## Testing Checklist

* [x] Desktop layout
* [x] Tablet layout
* [x] Mobile layout
* [x] 3D hover flip
* [x] Keyboard focus interaction
* [x] Responsive order summary
* [x] Reduced-motion support
* [x] No JavaScript
* [x] No external dependencies

## License

This example is contributed to EaseMotion CSS under the repository's applicable license.
