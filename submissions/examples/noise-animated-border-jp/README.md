# CSS Noise-Animated Border

A modern **CSS Noise-Animated Border** showcase built entirely with **HTML5** and **CSS3**. The component creates an organic, continuously moving border effect using CSS gradients, pseudo-elements, and keyframe animations without requiring JavaScript.

## ✨ Features

* Pure HTML5 and CSS3
* Organic noise-inspired animated border
* Smooth continuous CSS animation
* Gradient border glow
* Subtle floating highlight effect
* Hover elevation effect
* Keyboard-accessible CTA
* Visible focus styles
* Fully responsive
* `prefers-reduced-motion` support
* No JavaScript or external libraries

## 📂 Folder Structure

```text
noise-animated-border/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

1. Open `demo.html` in a modern web browser.
2. The border animation starts automatically.
3. Hover over the card to see the elevation and glow effect.
4. Use the keyboard to navigate to the **Explore Effect** button.
5. Customize the colors and animation timing through the CSS variables.

## 🎨 CSS Custom Properties

The component uses CSS Custom Properties for easy customization.

| Variable          | Description                     |
| ----------------- | ------------------------------- |
| `--bg`            | Page background color           |
| `--surface`       | Main card background            |
| `--surface-light` | Card highlight background       |
| `--primary`       | Primary border and accent color |
| `--secondary`     | Secondary gradient color        |
| `--text`          | Primary text color              |
| `--muted`         | Secondary text color            |
| `--radius`        | Card border radius              |
| `--transition`    | Hover transition timing         |
| `--card-width`    | Maximum card width              |

### Example

```css
:root {
    --primary: #38bdf8;
    --secondary: #8b5cf6;
    --radius: 24px;
    --transition: 0.35s ease;
}
```

## ⚙️ How It Works

The animated border is created without JavaScript.

### 1. Pseudo-element

The `.noise-card::before` pseudo-element creates the animated gradient border.

```css
.noise-card::before {
    content: "";
    position: absolute;
    inset: -45%;
    background: conic-gradient(
        from 0deg,
        var(--primary),
        var(--secondary),
        #22d3ee,
        #6366f1,
        var(--primary)
    );
}
```

### 2. Keyframe Animation

The gradient continuously rotates and changes scale to create an organic movement.

```css
@keyframes noiseRotate {
    0% {
        transform: rotate(0deg) scale(1);
    }

    50% {
        transform: rotate(180deg) scale(1.1);
    }

    100% {
        transform: rotate(360deg) scale(1);
    }
}
```

### 3. Inner Surface

A second pseudo-element creates the inner card surface and keeps the animated gradient visible only around the border.

## 🖱️ Hover Interaction

When the user hovers over the card:

* The card moves slightly upward.
* A soft glow appears around the border.
* The component receives a subtle depth effect.

This provides visual feedback while keeping the animation lightweight.

## ♿ Accessibility

The component includes accessibility considerations:

* Semantic HTML structure
* Proper heading hierarchy
* Keyboard-accessible link
* Visible `:focus-visible` state
* Responsive layout
* `prefers-reduced-motion` support

Users who prefer reduced motion will have the continuous animations disabled.

## 📱 Responsive Design

The component works across:

* Desktop
* Laptop
* Tablet
* Mobile

The card width, typography, spacing, and padding automatically adapt to smaller screens.

## 🌐 Browser Support

The example is designed for modern browsers supporting:

* CSS Custom Properties
* CSS Gradients
* CSS Pseudo-elements
* CSS Keyframe Animations
* `prefers-reduced-motion`

Supported browsers include:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

## 📄 License

This example follows the same license as the EaseMotion CSS project.
