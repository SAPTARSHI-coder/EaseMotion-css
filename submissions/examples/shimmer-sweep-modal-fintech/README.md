````markdown
# CSS Shimmer-Sweep Modal for Fintech Dashboard

A responsive fintech dashboard showcase featuring a CSS-only
Shimmer-Sweep Modal.

The modal uses a moving diagonal light effect to create a polished
financial-dashboard interaction without JavaScript.

## Features

- Pure HTML and CSS
- CSS-only modal interaction
- Shimmer-sweep animation
- Smooth modal entrance
- Responsive desktop, tablet, and mobile layouts
- CSS custom properties
- Accessible dialog structure
- Form labels and focus states
- `prefers-reduced-motion` support
- No JavaScript
- No external frameworks

## Files

```text
shimmer-sweep-modal-fintech/
├── demo.html
├── style.css
└── README.md
````

## How It Works

The modal uses the CSS `:target` pseudo-class.

The trigger links to the modal:

```html
<a href="#transfer-modal">
    Transfer Money
</a>
```

The modal has the matching ID:

```html
<div id="transfer-modal">
```

When the link is clicked, the modal becomes visible.

## Shimmer-Sweep Animation

The shimmer is created using a pseudo-light layer:

```css
.shimmer-sweep {
    position: absolute;
    left: -70%;

    width: 45%;
    height: 180%;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.025),
            rgba(255, 255, 255, 0.30),
            rgba(255, 255, 255, 0.025),
            transparent
        );

    transform: rotate(18deg);
}
```

The highlight moves across the modal using CSS keyframes:

```css
@keyframes shimmerSweep {

    0% {
        left: -70%;
        opacity: 0;
    }

    15% {
        opacity: 1;
    }

    70% {
        opacity: 0.8;
    }

    100% {
        left: 125%;
        opacity: 0;
    }
}
```

## CSS Custom Properties

Main theme values can be customized through:

```css
:root {
    --background: #080d18;
    --primary: #7c5cff;
    --primary-light: #a08cff;
    --text: #f5f7ff;
    --muted: #8e9ab2;
    --success: #35d49a;
    --danger: #ff6b81;
}
```

## Responsive Design

The layout adapts to:

* Desktop
* Tablet
* Mobile

Responsive rules adjust dashboard columns, modal padding,
transaction layout, and card sizing.

## Accessibility

The modal includes:

```html
role="dialog"
aria-modal="true"
aria-labelledby="modal-title"
```

All form controls have associated labels.

The close control has an accessible label.

## Reduced Motion

The component supports:

```css
@media (prefers-reduced-motion: reduce)
```

The shimmer animation is disabled when the user prefers reduced motion.

## Technologies

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Transitions
* CSS Keyframes
* CSS `:target`
* CSS Custom Properties
* Media Queries

No JavaScript is required.

## Usage

Copy the `demo.html` and `style.css` files into your project.

Customize the CSS variables to match your application's design system.

## License

This example is contributed to EaseMotion CSS according to the repository
contribution guidelines.

```
```
