````markdown
# CSS Fade-In Carousel for Fintech Dashboard

A responsive fintech dashboard carousel created using pure HTML and
CSS. Financial cards smoothly fade between different portfolio
highlights without JavaScript.

## Features

- Pure HTML and CSS
- No JavaScript
- Automatic fade-in/fade-out carousel
- Smooth CSS keyframe animation
- Responsive desktop, tablet and mobile layouts
- CSS custom properties
- Fintech dashboard styling
- Accessible reduced-motion support
- Lightweight implementation

## Files

```text
fade-in-carousel/
├── demo.html
├── style.css
└── README.md
````

## How It Works

Each carousel card is positioned on top of the others:

```css
.fade-card {
    position: absolute;
    inset: 0;
}
```

The cards use a shared keyframe animation:

```css
@keyframes fadeCarousel {
    0% {
        opacity: 0;
        transform: translateY(12px) scale(0.98);
    }

    6% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }

    27% {
        opacity: 1;
    }

    33% {
        opacity: 0;
    }
}
```

Different animation delays create the carousel sequence:

```css
.card-one {
    animation-delay: 0s;
}

.card-two {
    animation-delay: 4s;
}

.card-three {
    animation-delay: 8s;
}
```

The complete animation cycle lasts 12 seconds.

## CSS Custom Properties

The component provides reusable variables:

```css
:root {
    --bg: #070b14;
    --surface: #101827;
    --primary: #7c5cff;
    --primary-light: #a896ff;
    --text: #f5f7ff;
    --muted: #8995ad;
    --success: #35d49a;
    --border: rgba(255, 255, 255, 0.1);
}
```

These variables can be changed to customize the component.

## Responsive Design

The component supports:

* Desktop
* Tablet
* Mobile

The layout automatically changes the statistics section and
card dimensions for smaller screens.

## Accessibility

Users who prefer reduced motion are supported with:

```css
@media (prefers-reduced-motion: reduce) {
    .fade-card {
        animation: none;
    }
}
```

For these users, the first card remains visible instead of
continuously animating.

## Technologies

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* CSS Keyframes
* CSS Transforms
* CSS Media Queries

## Usage

Open `demo.html` in a modern browser.

No external libraries or JavaScript are required.

## Contribution

This component is designed for the EaseMotion CSS examples
collection and follows the requested pure HTML/CSS approach.

```
```
