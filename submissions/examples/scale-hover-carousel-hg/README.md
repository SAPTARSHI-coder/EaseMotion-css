# Scale-Hover Product Carousel

A lightweight, responsive product catalog carousel built with **pure HTML and CSS** for EaseMotion CSS.

## Features

- Pure HTML and CSS
- Responsive product cards
- Horizontal scrolling carousel
- CSS scroll snapping
- Smooth hover scale and lift interaction
- Keyboard-visible focus states
- `prefers-reduced-motion` support
- No JavaScript
- No external dependencies
- CSS-only product illustrations

## Structure

```text
scale-hover-carousel/
├── demo.html
├── style.css
└── README.md
```

## Usage

Keep `demo.html` and `style.css` in the same directory and open `demo.html` in a browser.

The component can be integrated into another page by copying the carousel markup and the related CSS rules.

## CSS Custom Properties

The main visual values can be customized through:

```css
:root {
  --carousel-bg: #f5f7fb;
  --surface: #ffffff;
  --text: #111827;
  --muted: #667085;
  --border: #e4e7ec;
  --accent: #4f46e5;
  --card-radius: 20px;
  --transition-duration: 280ms;
  --transition-easing: cubic-bezier(0.22, 1, 0.36, 1);
}
```

### Card width

```css
.product-card {
  flex-basis: 320px;
}
```

### Hover interaction

The default interaction uses a subtle lift and scale:

```css
.product-card:hover .product-link {
  transform: translateY(-6px) scale(1.025);
}
```

### Transition duration

```css
:root {
  --transition-duration: 280ms;
}
```

## Responsive Behavior

Cards are displayed in a horizontal scrolling flex container. On smaller screens, the card width becomes viewport-relative so that users can naturally discover additional cards by scrolling.

The carousel uses CSS Scroll Snap:

```css
.carousel {
  scroll-snap-type: x mandatory;
}

.product-card {
  scroll-snap-align: start;
}
```

## Accessibility

The example includes:

- Semantic HTML structure
- Product cards implemented as links
- Keyboard-visible `:focus-visible` styling
- Descriptive labels for product links
- Decorative illustrations marked with `aria-hidden="true"`
- Reduced-motion support through `prefers-reduced-motion`

When reduced motion is requested, hover transforms and smooth scrolling are disabled.

## Performance

The component uses CSS transforms for the hover interaction and requires no JavaScript, animation library, external images, or third-party dependency.

## Browser Support

The component uses modern CSS features including:

- CSS custom properties
- Flexbox
- CSS gradients
- Scroll Snap
- `:focus-visible`
- `prefers-reduced-motion`

## License

Follow the license and contribution guidelines of the EaseMotion CSS repository.
