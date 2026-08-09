````markdown
# CSS Bounce-Pulse Progress Bar

A responsive gaming-hub progress bar with a smooth bounce and
pulse animation.

The component is created entirely with HTML and CSS without
JavaScript or external frameworks.

## Features

- Pure HTML and CSS
- No JavaScript
- Bounce animation
- Pulsing progress indicator
- Animated highlight wave
- Glowing progress track
- Responsive desktop, tablet and mobile layouts
- CSS custom properties
- `prefers-reduced-motion` support
- Gaming dashboard design

## Files

```text
bounce-pulse-progress-bar/
├── demo.html
├── style.css
└── README.md
````

## Usage

Open `demo.html` in any modern browser.

No installation or dependencies are required.

## HTML Structure

```html
<div class="bounce-progress">

    <div class="progress-track">

        <div class="progress-fill">

            <div class="pulse-wave"></div>

            <div class="progress-dot">
                <span></span>
            </div>

        </div>

    </div>

</div>
```

## Change Progress

Modify the width of `.progress-fill`:

```css
.progress-fill {
    width: 72%;
}
```

For example:

```css
.progress-fill {
    width: 50%;
}
```

creates a 50% progress state.

## CSS Custom Properties

The component provides customizable theme variables:

```css
:root {
    --bg: #07080f;
    --card: #111321;
    --primary: #7c5cff;
    --secondary: #ff4fc8;
    --accent: #4ce7ff;
    --text: #f7f7ff;
    --muted: #85879b;
}
```

These values can be changed to match different gaming layouts.

## Animation

The bounce effect uses CSS keyframes:

```css
@keyframes bounceFill {
    0% {
        transform: scaleY(0.9);
    }

    45% {
        transform: scaleY(1.12);
    }

    70% {
        transform: scaleY(0.96);
    }

    100% {
        transform: scaleY(1.05);
    }
}
```

The progress indicator also uses a separate pulse animation.

## Responsive Design

The component adapts to:

* Desktop
* Tablet
* Mobile

CSS media queries change the layout of the statistics and
secondary progress cards on smaller screens.

## Accessibility

Reduced-motion users are supported using:

```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

## Technologies

* HTML5
* CSS3
* Flexbox
* CSS Grid
* CSS Custom Properties
* CSS Keyframes
* CSS Transforms
* CSS Media Queries
* CSS Gradients
* CSS Box Shadows

## Contribution

Created as a pure CSS/HTML showcase for the EaseMotion CSS
gaming-hub component collection.

```
```
