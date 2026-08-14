# Ripple-Wave Hero Section

A responsive hero section featuring a continuously expanding
ripple-wave animation created entirely with HTML and CSS.

## Features

- Pure HTML and CSS
- No JavaScript
- No external libraries
- Expanding ripple-wave animation
- Multiple staggered ripple waves
- Animated status indicator
- Responsive hero layout
- Desktop, tablet and mobile support
- CSS custom properties
- Hover interactions
- prefers-reduced-motion support

## Files

ripple-wave-hero-section/
├── demo.html
├── style.css
└── README.md

## Usage

Include the stylesheet:

<link rel="stylesheet" href="style.css">

Create the hero section:

<section class="hero">

    <div class="ripple ripple-one"></div>
    <div class="ripple ripple-two"></div>
    <div class="ripple ripple-three"></div>

    <div class="hero-content">

        <p class="eyebrow">EASEMOTION CSS</p>

        <h1>
            Discover Products
            <span>Made to Move</span>
        </h1>

        <p class="hero-description">
            Explore a modern collection of products designed
            with simplicity, quality and performance in mind.
        </p>

        <div class="hero-actions">
            <a href="#" class="hero-button primary-button">
                Explore Products
            </a>
        </div>

    </div>

</section>

## Ripple Effect

The ripple waves are created using CSS pseudo-independent
elements.

Each ripple is a circular element with a border:

.ripple {
    border: 1px solid var(--ripple-color);
    border-radius: 50%;
}

The animation gradually increases the size of the circle
while reducing its opacity.

@keyframes rippleWave {
    0% {
        opacity: 0.8;
    }

    100% {
        opacity: 0;
    }
}

## Staggered Waves

Three ripple elements are used with different animation delays:

.ripple-one {
    animation-delay: 0s;
}

.ripple-two {
    animation-delay: 1.6s;
}

.ripple-three {
    animation-delay: 3.2s;
}

This creates a continuous wave effect.

## CSS Custom Properties

Available custom properties:

--hero-background
--hero-text
--hero-muted
--accent-color
--ripple-color
--button-background
--button-text
--border-color

Example:

:root {
    --hero-background: #111111;
    --hero-text: #ffffff;
    --ripple-color: rgba(255, 255, 255, 0.12);
}

These values can be changed to customize the component.

## Responsive Design

Desktop:
The hero uses a large centered heading with horizontal
actions and decorative elements.

Tablet:
Spacing and typography are reduced for medium screens.

Mobile:
The buttons become vertically stacked and the decorative
ripple size is reduced.

## Accessibility

The component supports:

@media (prefers-reduced-motion: reduce)

When reduced motion is enabled, the ripple and pulse
animations are disabled.

## Performance

The component uses CSS keyframe animations and does not
require JavaScript or external animation libraries.

## License

Part of the EaseMotion CSS project.