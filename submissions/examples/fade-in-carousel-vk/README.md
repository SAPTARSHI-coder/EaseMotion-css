# Fade-In Carousel Example

A pure CSS Fade-In Carousel designed for dashboard analytics layouts. The component smoothly transitions between slides using fade animations without requiring JavaScript. It is responsive, keyboard accessible, and customizable through CSS custom properties.

---

## Features

- Pure CSS implementation
- Smooth fade-in carousel animation
- Dashboard-inspired card design
- Responsive layout
- Keyboard accessibility with `:focus-visible`
- Customizable using CSS variables
- Supports `prefers-reduced-motion`

---

## Files

```text
fade-in-carousel-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Customization

Modify the following CSS custom properties in `:root`:

```css
--carousel-duration
--carousel-easing
--carousel-scale
--carousel-width
--carousel-height
--carousel-radius
--carousel-bg
--carousel-text
--carousel-accent
```

---

## Accessibility

- Semantic HTML structure
- Visible keyboard focus indicator
- Motion reduction support using `prefers-reduced-motion`
- Responsive across different screen sizes

---

## Browser Support

Works in all modern browsers that support:

- CSS Custom Properties
- CSS Animations
- Media Queries
- `prefers-reduced-motion`