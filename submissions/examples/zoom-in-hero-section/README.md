# Zoom-In Hero Section

A responsive product catalog hero section featuring a smooth
CSS zoom-in entrance animation.

The component is built entirely with HTML and CSS without
JavaScript or external libraries.

## Features

- Pure HTML and CSS
- No JavaScript
- No external libraries
- Smooth zoom-in entrance animation
- Animated decorative circles
- Floating product cards
- Button hover effects
- Responsive design
- CSS custom properties
- Reduced-motion accessibility support

## Files

zoom-in-hero-section/
├── demo.html
├── style.css
└── README.md

## Usage

Include the stylesheet:

<link rel="stylesheet" href="style.css">

Add the hero structure:

<section class="hero">

    <div class="zoom-circle zoom-circle-one"></div>
    <div class="zoom-circle zoom-circle-two"></div>

    <div class="hero-content">

        <p class="eyebrow">EASEMOTION CSS</p>

        <h1>
            Explore What's
            <span>Next</span>
        </h1>

        <p class="hero-description">
            Discover a modern collection of products designed
            to bring style, functionality and performance.
        </p>

        <div class="hero-actions">

            <a href="#" class="hero-button primary-button">
                Explore Products
            </a>

            <a href="#" class="hero-button secondary-button">
                View Collection
            </a>

        </div>

    </div>

</section>

## Zoom-In Animation

The main hero content uses a CSS keyframe animation.

The content starts smaller and gradually increases to its
normal size.

@keyframes zoomIn {

    0% {
        opacity: 0;
        transform: scale(0.65);
    }

    60% {
        opacity: 1;
        transform: scale(1.04);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }

}

The animation is applied using:

.hero-content {
    animation: zoomIn 1.2s ease-out both;
}

## Decorative Circles

Two circular elements create a subtle zooming background effect.

They use CSS transforms and keyframes without JavaScript.

## CSS Custom Properties

Available variables:

--hero-background
--hero-text
--hero-muted
--accent-color
--border-color
--card-background

Example:

:root {
    --hero-background: #111111;
    --hero-text: #ffffff;
    --hero-muted: #b5b5b5;
}

These variables can be changed to customize the component.

## Responsive Design

Desktop:
Large typography, decorative circles and floating product cards
are displayed around the hero content.

Tablet:
Spacing and decorative element sizes are reduced.

Mobile:
Buttons become vertically stacked and decorative elements
are resized for smaller screens.

## Accessibility

The component supports:

@media (prefers-reduced-motion: reduce)

When reduced motion is enabled, the zoom and floating animations
are disabled.

## Performance

The component uses CSS transforms and keyframe animations.

No JavaScript or external animation library is required.

## License

Part of the EaseMotion CSS project.