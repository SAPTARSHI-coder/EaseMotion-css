# Shimmer-Sweep Pricing Table

A responsive pricing table created using pure HTML and CSS.

The component provides a smooth diagonal shimmer-sweep effect
when the user hovers over a pricing card.

## Features

- Pure HTML and CSS
- No JavaScript
- No external libraries
- Diagonal shimmer-sweep animation
- Smooth card hover effect
- Featured pricing plan
- Responsive design
- Desktop, tablet and mobile support
- CSS custom properties
- prefers-reduced-motion support

## Files

shimmer-sweep-pricing-table/
├── demo.html
├── style.css
└── README.md

## Usage

Add the stylesheet:

<link rel="stylesheet" href="style.css">

Create a pricing card:

<article class="pricing-card">

    <div class="card-header">
        <span class="plan-number">01</span>
        <span class="plan-type">STARTER</span>
    </div>

    <div class="card-body">

        <h2>Basic</h2>

        <p class="price">
            $9
            <span class="period">/month</span>
        </p>

        <p class="description">
            Essential features for individuals.
        </p>

        <ul class="features">
            <li>5 Projects</li>
            <li>10 GB Storage</li>
            <li>Email Support</li>
        </ul>

        <a href="#" class="button">
            Choose Plan
        </a>

    </div>

</article>

## Shimmer-Sweep Effect

The shimmer is created using a CSS pseudo-element:

.pricing-card::before {
    content: "";
    position: absolute;
    left: -150%;
    width: 70%;
    height: 100%;
}

A linear gradient creates the bright sweep:

background: linear-gradient(
    110deg,
    transparent 0%,
    transparent 35%,
    var(--shimmer-color) 50%,
    transparent 65%,
    transparent 100%
);

When the card is hovered, the shimmer moves across
the entire card:

.pricing-card:hover::before {
    animation: shimmerSweep 0.8s ease-out;
}

## CSS Custom Properties

Available custom properties:

--page-background
--card-background
--text-color
--muted-color
--border-color
--accent-color
--shimmer-color
--card-radius

Example:

:root {
    --card-background: #ffffff;
    --accent-color: #222222;
    --shimmer-color: rgba(255, 255, 255, 0.75);
}

These values can be changed to customize the component.

## Responsive Design

Desktop:
Three pricing cards are displayed in one row.

Tablet:
Two cards are displayed in the first row and the final
card is centered.

Mobile:
All pricing cards are displayed in one column.

## Accessibility

The component supports:

@media (prefers-reduced-motion: reduce)

When reduced motion is enabled, the shimmer animation
is disabled.

## Performance

The component uses CSS pseudo-elements, gradients and
keyframe animations.

No JavaScript or external animation libraries are required.

## License

Part of the EaseMotion CSS project.