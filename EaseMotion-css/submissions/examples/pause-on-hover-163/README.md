````md
# Infinite Seamless Logo Carousel Slider

A modern glassmorphic infinite logo carousel with smooth continuous scrolling and pause-on-hover interaction.

## ✨ Features

- Infinite seamless horizontal scrolling
- Pause animation on hover
- Glassmorphism UI
- Frosted glass cards
- Gradient accents
- Soft neon glow
- Smooth hover interactions
- Responsive design
- Gradient fade edges
- `prefers-reduced-motion` support
- No JavaScript
- No external dependencies

## 📁 Files

```text
ease-layout-infinite-seamless-logo-carousel-slider-with-pause-on-hover-163/
├── demo.html
├── style.css
└── README.md
````

## 🚀 Usage

Navigate to the component directory:

```bash
cd submissions/examples/ease-layout-infinite-seamless-logo-carousel-slider-with-pause-on-hover-163
```

Open `demo.html` in a modern web browser.

No installation or build process is required.

## 🎨 Customization

The component uses CSS variables for easy customization.

```css
:root {
  --cyan: #67e8f9;
  --blue: #60a5fa;
  --violet: #a78bfa;
  --pink: #f0abfc;

  --speed: 26s;
}
```

### Change animation speed

```css
--speed: 15s;
```

A lower value makes the carousel move faster.

## 🖱️ Interaction

Hover over the carousel to pause the continuous animation.

Move the cursor away to resume the animation.

Hovering over individual cards also produces:

* Glass highlight animation
* Card lift effect
* Subtle scaling
* Logo mark transformation
* Soft glow

## ♿ Accessibility

The component respects the user's reduced-motion preference.

When reduced motion is enabled, the continuous carousel animation and decorative pulse animation are disabled.

```css
@media (prefers-reduced-motion: reduce) {
  .carousel-track {
    animation: none;
  }
}
```

## 📱 Responsive Design

The carousel adjusts card dimensions, spacing, typography, and edge gradients for tablet and mobile screen sizes.

## 📜 License

This component is intended for use within the EaseMotion CSS project and follows the repository's licensing terms.

```
```
