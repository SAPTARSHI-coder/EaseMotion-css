# Bounce-Pulse Pricing Table

A responsive pricing table created using pure HTML and CSS.

The component uses a bounce-pulse interaction when the user
hovers over a pricing card.

## Features

- Pure HTML and CSS
- No JavaScript
- No external libraries
- Bounce animation
- Pulse ring effect
- Smooth hover interaction
- Featured pricing plan
- Responsive design
- Desktop, tablet and mobile support
- prefers-reduced-motion support
- CSS custom properties

## Files

bounce-pulse-pricing-table/
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

## Bounce Effect

The card uses a CSS keyframe animation:

@keyframes bouncePulse {

    0% {
        transform: translateY(0) scale(1);
    }

    30% {
        transform: translateY(-12px) scale(1.02);
    }

    55% {
        transform: translateY(4px) scale(0.99);
    }

    75% {
        transform: translateY(-5px) scale(1.01);
    }

    100% {
        transform: translateY(0) scale(1);
    }

}

The animation is triggered when the user hovers over
a pricing card.

## Pulse Effect

A pseudo-element creates the expanding pulse ring:

.pricing-card::before {
    content: "";
    position: absolute;
    border-radius: 50%;
}

The ring expands using the pulseRing keyframe animation.

## CSS Custom Properties

The component provides:

--page-background
--card-background
--text-color
--muted-color
--border-color
--accent-color
--radius

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

When reduced motion is enabled, bounce and pulse animations
are disabled.

## Performance

The component uses CSS transforms, pseudo-elements and
keyframe animations.

No JavaScript or external animation library is required.

## License

Part of the EaseMotion CSS project.