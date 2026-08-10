# Morph-Glow Pricing Table

A responsive pricing table created using pure HTML and CSS.

The component uses a smooth morphing glow effect when users
hover over a pricing card.

## Features

- Pure HTML and CSS
- No JavaScript
- No external libraries
- Morphing glow effect
- Smooth hover animation
- Featured pricing plan
- Responsive design
- Desktop, tablet and mobile support
- prefers-reduced-motion support
- CSS custom properties

## Files

morph-glow-pricing-table/
├── demo.html
├── style.css
└── README.md

## Usage

Add the stylesheet to your HTML:

<link rel="stylesheet" href="style.css">

Create a pricing card:

<article class="pricing-card">

    <div class="card-top">
        <span class="plan-number">01</span>
        <span class="plan-label">STARTER</span>
    </div>

    <div class="card-content">

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

        <a class="button" href="#">
            Choose Plan
        </a>

    </div>

</article>

## CSS Custom Properties

The component provides the following variables:

--page-bg
--card-bg
--text
--muted
--border
--accent
--glow
--radius

Example:

:root {
    --page-bg: #f3f3f3;
    --card-bg: #ffffff;
    --text: #222222;
    --radius: 20px;
}

These values can be changed to customize the component.

## Morph-Glow Effect

Each card contains a CSS pseudo-element that creates
the glow effect:

.pricing-card::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    filter: blur(5px);
}

On hover, the pseudo-element grows and changes its shape:

.pricing-card:hover::before {
    width: 330px;
    height: 330px;
    border-radius: 42%;
}

The card itself also moves upward and changes its border radius.

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

When reduced motion is enabled, transitions are disabled
and hover movement is removed.

## Performance

The animation uses CSS transitions and pseudo-elements.

No JavaScript or external animation libraries are required.

## License

Part of the EaseMotion CSS project.