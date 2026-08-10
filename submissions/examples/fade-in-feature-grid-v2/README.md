# Fade-In Feature Grid

A simple product catalog feature grid created using pure HTML and CSS.

The component uses a smooth fade-in animation with a small vertical
movement when the feature cards appear.

## Features

- Pure HTML and CSS
- No JavaScript
- No external libraries
- CSS keyframe animation
- Fade-in effect
- Staggered card animation
- Hover interaction
- Responsive design
- Desktop, tablet and mobile support
- Reduced motion support

## Files

fade-in-feature-grid/
├── demo.html
├── style.css
└── README.md

## Usage

Add the CSS file to the HTML page:

<link rel="stylesheet" href="style.css">

Create a feature card using:

<article class="feature-card">

    <span class="number">01</span>

    <div class="card-content">

        <p class="category">PERFORMANCE</p>

        <h2>Fast Processing</h2>

        <p class="description">
            Product feature description.
        </p>

        <a href="#">
            Learn More →
        </a>

    </div>

</article>

## Animation

The cards initially start with zero opacity:

.feature-card {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeIn 0.8s ease forwards;
}

The fade-in animation changes the card to full visibility:

@keyframes fadeIn {

    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}

## Staggered Animation

Each card has a different animation delay.

This creates a smooth sequence where the cards appear one after another.

## Responsive Design

Desktop:
Three cards are displayed in each row.

Tablet:
Two cards are displayed in each row.

Mobile:
One card is displayed in each row.

## Accessibility

The component supports reduced motion using:

@media (prefers-reduced-motion: reduce)

When reduced motion is enabled, the animation is disabled and
the cards remain visible.

## Customization

You can customize:

- Animation speed
- Animation delay
- Movement distance
- Card size
- Card spacing
- Border radius
- Colors
- Font sizes

## Performance

The animation uses CSS opacity and transform.

No JavaScript or external animation library is required.

## License

Part of the EaseMotion CSS project.