# Typographic Stroke-to-Gradient Reveal

An elegant typographic hover interaction that starts as a clean outlined text stroke and transitions into a vibrant, flowing gradient fill sweeping smoothly from left to right when hovered.

This effect draws inspiration from premium product marketing headlines found on modern, state-of-the-art landing pages.

## Features

- **Pure CSS**: Fully driven by CSS transitions, utilizing no JavaScript dependencies.
- **No JavaScript**: Designed for performance and lightness.
- **Accessible DOM structure**: Semantic markup preserves the actual text content inside the DOM, ensuring screen readers can parse it natively.
- **High-performance animation**: Utilizes hardware-accelerated CSS `clip-path` properties for smooth rendering.
- **Easy customization**: Uses CSS Custom Properties (Variables) to allow seamless tuning.

## Folder Contents

- `demo.html`: The HTML file showcasing the interaction inside a premium dark hero section mockup.
- `style.css`: The CSS stylesheet defining the layouts, ambient styling, and typographic animations.
- `README.md`: Explanatory documentation of the feature.

## Usage

Use the semantic HTML structure below to apply the effect:

```html
<h1 class="em-stroke-reveal-text" data-text="Future of Motion">
  Future of Motion
</h1>
```

## Customization

Developers can customize the animation variables within the `:root` rule in `style.css`:

```css
:root {
  /* Reveal effect parameters */
  --reveal-duration: 0.8s; /* Transition sweep duration */
  --reveal-easing: cubic-bezier(
    0.25,
    1,
    0.5,
    1
  ); /* Elegant cubic bezier curve */
  --stroke-color: rgba(255, 255, 255, 0.25); /* Outline color before hover */
  --stroke-hover-color: rgba(255, 255, 255, 0.6); /* Outline color on hover */
  --stroke-width: 1.5px; /* Text stroke thickness */
  --gradient-reveal: linear-gradient(
    90deg,
    #ff007f 0%,
    #7f00ff 50%,
    #00f0ff 100%
  ); /* Vibrant fill gradient */
}
```

### Typography Scale

To modify the typographic scale, adjust the `font-size` clamp function on the heading selector:

```css
.em-stroke-reveal-text {
  font-size: clamp(2.5rem, 9.5vw, 6.5rem);
}
```

## Browser Support

This feature requires modern web browsers supporting:

- CSS text stroke (`-webkit-text-stroke` or `text-stroke`)
- CSS clip-path inset function (`clip-path: inset()`)
- CSS custom variables
- Text background clipping (`-webkit-background-clip: text` or `background-clip: text`)
