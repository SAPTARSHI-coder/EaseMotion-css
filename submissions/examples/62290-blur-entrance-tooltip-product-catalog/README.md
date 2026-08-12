# CSS Blur-Entrance Tooltip for Product Catalog Layouts

A modern **Blur-Entrance Tooltip** component built using pure HTML5 and CSS3 for product catalog layouts. The component provides interactive product information tooltips with smooth blur-based entrance animations, multiple positioning options, and accessibility support.

## Features

* Pure HTML5 & CSS3
* Blur-Entrance tooltip animation
* No JavaScript required
* Product catalog showcase cards
* Multiple tooltip positions:

  * Top
  * Bottom
  * Left
  * Right
* Smooth CSS transitions and keyframe animations
* Glassmorphism product cards
* Responsive layout for desktop, tablet, and mobile
* CSS Custom Properties for easy customization
* Keyboard accessible with `focus-within`
* Supports `prefers-reduced-motion`

## Folder Structure

```text
62290-blur-entrance-tooltip-product-catalog/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in any modern browser.
2. Hover over the **Hover Me** button to display the tooltip.
3. Use keyboard navigation to focus the button and view the tooltip.
4. Customize colors, spacing, shadows, and animation timing through the CSS variables inside `:root`.

## CSS Custom Properties

```css
:root{
  --bg:#eef4ff;
  --surface:rgba(255,255,255,.9);
  --primary:#2563eb;
  --secondary:#06b6d4;
  --text:#111827;
  --muted:#64748b;
  --shadow:0 18px 42px rgba(37,99,235,.18);
  --radius:24px;
}
```

## Accessibility

* Fully responsive design
* Keyboard-friendly tooltip interaction
* Uses semantic HTML structure
* Supports reduced motion preferences
* No JavaScript dependency

## Browser Support

* Chrome
* Firefox
* Edge
* Safari

## License

This example follows EaseMotion CSS contribution guidelines and is intended for educational and showcase purposes.
