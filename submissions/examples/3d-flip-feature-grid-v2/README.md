# 3D Flip Feature Grid

A simple product catalog feature grid created using pure HTML and CSS.

The component uses a 3D card flip animation to reveal additional
product information when the user hovers over or focuses on a card.

## Features

- Pure HTML and CSS
- No JavaScript
- No external libraries
- CSS 3D flip animation
- Hover interaction
- Keyboard focus support
- Responsive design
- Desktop, tablet and mobile support
- Reduced motion support

## Files

3d-flip-feature-grid/
├── demo.html
├── style.css
└── README.md

## Usage

Add the CSS file to the HTML page:

<link rel="stylesheet" href="style.css">

Create a flip card using:

<article class="flip-card" tabindex="0">

    <div class="flip-card-inner">

        <div class="flip-card-front">
            <p>Product Name</p>
        </div>

        <div class="flip-card-back">
            <p>Product Description</p>
        </div>

    </div>

</article>

## Animation

The card uses CSS perspective and 3D transforms.

The card starts in its normal position:

.flip-card-inner {
    transform-style: preserve-3d;
}

When the user hovers over the card:

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

The front and back faces use:

backface-visibility: hidden;

The back face is rotated 180 degrees so it becomes visible
when the card flips.

## Responsive Design

Desktop:
Three cards are displayed in each row.

Tablet:
Two cards are displayed in each row.

Mobile:
One card is displayed in each row.

## Accessibility

Each card uses tabindex="0" to support keyboard focus.

The card can be flipped using keyboard focus as well as mouse hover.

The component also supports:

@media (prefers-reduced-motion: reduce)

When reduced motion is enabled, the transition is removed.

## Customization

You can customize:

- Card size
- Card spacing
- Flip speed
- Border radius
- Colors
- Perspective value
- Typography

## Performance

The animation uses CSS transform and perspective.

No JavaScript or external animation library is required.

## License

Part of the EaseMotion CSS project.