# Float Drift Feature Grid

A simple product catalog feature grid created using pure HTML and CSS.

The component uses a lightweight floating animation to create a subtle
drifting effect on feature icons.

## Features

- Pure HTML and CSS
- No JavaScript
- No external libraries
- CSS keyframe animation
- Floating drift effect
- Hover interaction
- Keyboard focus support
- Responsive layout
- Desktop, tablet and mobile support
- Reduced motion support

## Files

float-drift-feature-grid/
├── demo.html
├── style.css
└── README.md

## Usage

Add the CSS file to your HTML page:

<link rel="stylesheet" href="style.css">

Create feature cards using:

<div class="feature-card">

    <span class="number">01</span>

    <div class="icon">
        +
    </div>

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

The floating effect is created using CSS keyframes:

@keyframes float {

    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-12px);
    }

    100% {
        transform: translateY(0);
    }

}

The animation is applied to the feature icon:

.icon {
    animation: float 4s ease-in-out infinite;
}

Different animation delays are applied to different cards
to create a natural drifting effect.

## Responsive Design

Desktop:
Three feature cards are displayed in each row.

Tablet:
Two feature cards are displayed in each row.

Mobile:
One feature card is displayed in each row.

## Accessibility

Feature cards support keyboard focus.

The component also supports:

@media (prefers-reduced-motion: reduce)

When reduced motion is enabled, the floating animation is disabled.

## Customization

You can customize:

- Card size
- Card spacing
- Colors
- Border radius
- Animation speed
- Floating distance
- Animation delay
- Typography

## Performance

The animation uses CSS transform and keyframes.

No JavaScript or external animation library is required.

## License

Part of the EaseMotion CSS project.