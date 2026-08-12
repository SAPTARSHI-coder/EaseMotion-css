# Elastic-Slide Card Grid for E-Commerce Checkout

A responsive e-commerce checkout showcase featuring a lightweight CSS-only Elastic-Slide interaction for product cards.

The cards smoothly slide and slightly scale when hovered or focused, while additional product details enter from the side.

## Features

* Pure HTML and CSS
* No JavaScript
* No external frameworks
* Elastic slide interaction
* Subtle card scaling
* Sliding product details
* Animated card accent
* Responsive product grid
* CSS custom properties
* Keyboard focus support
* `prefers-reduced-motion` support
* Desktop, tablet and mobile layouts

## Folder Structure

```text
elastic-slide-card-grid-ecommerce-checkout/
├── demo.html
├── style.css
└── README.md
```

## Usage

Place this example inside:

```text
submissions/examples/elastic-slide-card-grid-ecommerce-checkout/
```

Open `demo.html` in a modern browser.

No installation or build process is required.

## Elastic-Slide Effect

The primary interaction uses a spring-like cubic-bezier easing function:

```css
.product-card {
  transition:
    transform 650ms cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 350ms ease,
    border-color 350ms ease;
}

.product-card:hover {
  transform:
    translate3d(18px, -8px, 0)
    scale(1.015);
}
```

The cubic-bezier curve creates an elastic-style movement without JavaScript.

## Sliding Details

Additional product information enters from the side:

```css
.slide-details {
  transform:
    translateX(110%)
    scale(0.9);

  opacity: 0;
}

.product-card:hover .slide-details {
  transform:
    translateX(0)
    scale(1);

  opacity: 1;
}
```

## CSS Custom Properties

The animation can be customized using:

```css
:root {
  --card-radius: 22px;
  --slide-distance: 18px;
  --slide-duration: 650ms;
  --slide-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Slide Distance

```css
--slide-distance: 18px;
```

Controls how far the card moves horizontally.

### Animation Duration

```css
--slide-duration: 650ms;
```

Controls the speed of the elastic interaction.

### Animation Easing

```css
--slide-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
```

Controls the spring-like movement curve.

### Card Radius

```css
--card-radius: 22px;
```

Controls the rounded corners of each product card.

## Accessibility

The cards support keyboard focus through `:focus-within`.

Users who prefer reduced motion receive a simplified interaction through:

```css
@media (prefers-reduced-motion: reduce) {
  .product-card:hover,
  .product-card:focus-within {
    transform: none;
  }
}
```

This prevents large movement and reduces transition effects.

## Responsive Design

### Desktop

Products are displayed in a two-column grid.

### Tablet

The grid changes to a single-column layout while retaining the interaction.

### Mobile

Cards use a compact layout and the horizontal movement is reduced to prevent overflow.

## Customization

Additional cards can be added using:

```html
<article class="product-card">
  <div class="card-accent"></div>

  <div class="product-icon">◇</div>

  <span class="product-category">Category</span>

  <h2>Product Name</h2>

  <p>Product description.</p>

  <div class="product-meta">
    <strong>$99</strong>
    <span>Qty 1</span>
  </div>

  <div class="slide-details">
    <span>Feature one</span>
    <span>Feature two</span>
    <span>Feature three</span>
  </div>
</article>
```

## Browser Support

The example uses modern CSS features including:

* CSS Grid
* CSS Flexbox
* CSS custom properties
* CSS transforms
* CSS transitions
* Media queries
* `prefers-reduced-motion`

A modern browser is recommended.

## Testing Checklist

* [x] Desktop layout
* [x] Tablet layout
* [x] Mobile layout
* [x] Elastic card slide
* [x] Sliding product details
* [x] Hover interaction
* [x] Keyboard focus interaction
* [x] Reduced-motion support
* [x] No JavaScript
* [x] No external dependencies

## License

This example is contributed to EaseMotion CSS under the repository's applicable license.
