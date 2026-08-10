# Elastic Slide Feature Grid

A simple product catalog feature grid created using pure HTML and CSS.

The component uses an elastic slide animation when the user
hovers over or focuses on a feature card.

## Features

- Pure HTML and CSS
- No JavaScript
- No external libraries
- Elastic slide animation
- Hover interaction
- Keyboard focus support
- Responsive design
- Desktop, tablet and mobile support
- Reduced motion support

## Files

elastic-slide-feature-grid/
├── demo.html
├── style.css
└── README.md

## Usage

Add the CSS file to the HTML page:

<link rel="stylesheet" href="style.css">

Create a feature card using:

<div class="feature-card" tabindex="0">

    <span class="number">01</span>

    <div class="content">

        <p class="category">PERFORMANCE</p>

        <h2>Fast Processing</h2>

        <p class="description">
            Product feature description.
        </p>

        <a href="#">
            Learn More →
        </a>

    </div>

</div>

## Animation

The feature content starts slightly below its normal position:

.content {
    transform: translateY(35px);
}

When the user hovers over the card:

.feature-card:hover .content {
    transform: translateY(0);
}

The animation uses a cubic-bezier easing function to create
an elastic sliding effect.

## Responsive Design

Desktop:
Three cards are displayed in each row.

Tablet:
Two cards are displayed in each row.

Mobile:
One card is displayed in each row.

On mobile devices, the content remains visible because
hover interactions are not reliable on touch screens.

## Accessibility

Feature cards use tabindex="0" to support keyboard navigation.

The component also supports:

@media (prefers-reduced-motion: reduce)

When reduced motion is enabled, animations are disabled
and the content remains visible.

## Customization

You can customize:

- Card size
- Card spacing
- Border radius
- Animation speed
- Slide distance
- Colors
- Font sizes
- Easing behavior

## Performance

The animation uses CSS transform and opacity.

No JavaScript or external animation library is required.

## License

Part of the EaseMotion CSS project.