# Rotate-Fade Hero Section

A responsive hero section created using pure HTML and CSS.

The component combines a rotate-fade entrance animation with
subtle rotating decorative orbits and floating information cards.

## Features

- Pure HTML and CSS
- No JavaScript
- No external libraries
- Rotate-fade entrance animation
- Rotating decorative elements
- Floating information cards
- Smooth button hover effects
- Responsive desktop, tablet and mobile layouts
- CSS custom properties
- prefers-reduced-motion support

## Files

rotate-fade-hero-section/
├── demo.html
├── style.css
└── README.md

## Usage

Include the stylesheet:

<link rel="stylesheet" href="style.css">

Create the hero:

<section class="hero">

    <div class="hero-orbit hero-orbit-one"></div>
    <div class="hero-orbit hero-orbit-two"></div>

    <div class="hero-content">

        <p class="eyebrow">EASEMOTION CSS</p>

        <h1>
            Products That
            <span>Move With You</span>
        </h1>

        <p class="hero-description">
            Discover a carefully selected collection of products
            combining modern design and practical features.
        </p>

        <div class="hero-actions">
            <a href="#" class="hero-button primary-button">
                Explore Products
            </a>
        </div>

    </div>

</section>

## Rotate-Fade Effect

The main hero content enters using a combination of:

- opacity
- rotation
- vertical translation
- scale

Example:

@keyframes rotateFadeIn {

    0% {
        opacity: 0;
        transform: rotate(-8deg) translateY(35px) scale(0.95);
    }

    100% {
        opacity: 1;
        transform: rotate(0deg) translateY(0) scale(1);
    }

}

The animation is applied to the hero content:

.hero-content {
    animation: rotateFadeIn 1.2s ease-out both;
}

## Decorative Animation

Two circular orbit elements rotate continuously around
the hero content.

They use CSS transforms and keyframes without JavaScript.

## CSS Custom Properties

Available custom properties:

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

These properties can be customized to match different
design systems.

## Responsive Design

Desktop:
The hero uses large typography with decorative orbit elements
and floating information cards.

Tablet:
Typography, orbit sizes and spacing are reduced.

Mobile:
The buttons become vertically stacked and decorative elements
are reduced to fit smaller screens.

## Accessibility

The component supports:

@media (prefers-reduced-motion: reduce)

When reduced motion is enabled, entrance, orbit and floating
animations are disabled.

## Performance

The component uses CSS animations and transforms.

No JavaScript or external animation libraries are required.

## License

Part of the EaseMotion CSS project.