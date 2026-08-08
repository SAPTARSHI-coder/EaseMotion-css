# Scale-Hover Pricing Table

A responsive pricing table created using pure HTML and CSS.

The component uses a smooth scale-hover effect that slightly
enlarges a pricing card when the user hovers over it.

## Features

- Pure HTML and CSS
- No JavaScript
- No external libraries
- Smooth scale-hover animation
- Box-shadow interaction
- Featured pricing plan
- Responsive design
- Desktop, tablet and mobile support
- CSS custom properties
- prefers-reduced-motion support

## Files

scale-hover-pricing-table/
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

## Scale-Hover Effect

The main animation is created using CSS transforms:

.pricing-card:hover {
    transform: scale(1.05);
}

The card also receives a shadow and slightly larger
border radius during the interaction.

## CSS Custom Properties

The component provides the following custom properties:

--page-background
--card-background
--text-color
--muted-color
--border-color
--accent-color
--card-radius
--hover-scale

Example:

:root {
    --card-background: #ffffff;
    --accent-color: #222222;
    --hover-scale: 1.05;
}

The values can be changed to customize the component.

## Responsive Design

Desktop:
Three pricing cards are displayed in one row.

Tablet:
Two cards are displayed in the first row and the final
card is centered.

Mobile:
All pricing cards are displayed in one column.

The hover scale is reduced on smaller screens to prevent
layout overflow.

## Accessibility

The component supports:

@media (prefers-reduced-motion: reduce)

When reduced motion is enabled, the scale animation is
disabled.

## Performance

The animation uses the CSS transform property, which provides
a lightweight and performant hover interaction.

No JavaScript or external animation libraries are required.

## License

Part of the EaseMotion CSS project.