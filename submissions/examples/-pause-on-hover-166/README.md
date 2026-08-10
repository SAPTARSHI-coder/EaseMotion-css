````md
# Infinite Seamless Logo Carousel Slider

A vibrant gradient-themed infinite logo carousel with smooth continuous scrolling and pause-on-hover interaction.

## ✨ Features

- Infinite seamless horizontal scrolling
- Pause animation when hovering
- Vibrant multi-color gradients
- Glassmorphism cards
- Neon glow effects
- Smooth hover animations
- Responsive design
- Gradient fade edges
- Reduced-motion accessibility support
- No JavaScript
- No external dependencies

## 📁 Files

```text
ease-anim-infinite-seamless-logo-carousel-slider-with-pause-on-hover-166/
├── demo.html
├── style.css
└── README.md
````

## 🚀 Usage

Navigate to the component directory:

```bash
cd submissions/examples/ease-anim-infinite-seamless-logo-carousel-slider-with-pause-on-hover-166
```

Open `demo.html` in a modern web browser.

No installation, build tools, or external libraries are required.

## 🎨 Customization

The component uses CSS variables for easy customization.

```css
:root {
  --pink: #ff2bd6;
  --purple: #8b5cf6;
  --blue: #38bdf8;
  --orange: #ff8a3d;
  --green: #32e6a1;

  --speed: 25s;
}
```

### Change animation speed

```css
--speed: 15s;
```

Lower values make the carousel move faster.

## 🖱️ Interaction

Hover over the carousel to pause the animation.

Move the cursor away from the carousel to resume the animation.

Individual cards also have a hover effect with:

* Gradient glow
* Lift animation
* Scale transformation
* Glassmorphism highlight

## ♿ Accessibility

The component respects the user's reduced-motion preference.

When `prefers-reduced-motion: reduce` is enabled, the continuous carousel animation and decorative pulse animation are disabled.

```css
@media (prefers-reduced-motion: reduce) {
  .carousel-track {
    animation: none;
  }
}
```

## 📱 Responsive Design

The component adapts its card dimensions, spacing, typography, and edge gradients for tablet and mobile screens.

## 📜 License

This component is intended for use within the EaseMotion CSS project and follows the repository's licensing terms.

```
```
