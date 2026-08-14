# CSS Pure CSS Lighthouse

A pure CSS lighthouse animation with a rotating light beam, created using only HTML and CSS.

## Features

- Pure HTML and CSS
- No JavaScript
- Rotating lighthouse light beam
- Glowing lamp effect
- Animated night scene
- Decorative stars and ambient glow
- Responsive layout
- Accessible lighthouse description
- `prefers-reduced-motion` support

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then add the lighthouse markup:

```html
<div
    class="lighthouse"
    role="img"
    aria-label="Animated lighthouse with a rotating light beam"
>
    <div class="sky-glow" aria-hidden="true"></div>

    <div class="stars" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>

    <div class="beam" aria-hidden="true"></div>

    <div class="lighthouse-tower">
        <div class="light-room">
            <div class="lamp"></div>
        </div>

        <div class="balcony"></div>

        <div class="tower-body">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div class="tower-door"></div>
    </div>

    <div class="ground" aria-hidden="true"></div>
</div>
```

## Customization

Change the beam rotation speed:

```css
:root {
    --rotation-speed: 7s;
}
```

Change the beam color:

```css
:root {
    --beam: #ffe79a;
    --beam-glow: rgba(255, 231, 154, 0.55);
}
```

Change the lighthouse colors:

```css
:root {
    --tower: #e8edf5;
    --tower-dark: #aebbd0;
}
```

## How It Works

The lighthouse beam uses CSS `clip-path` to create the triangular light shape.

The beam rotates using a CSS keyframe animation:

```css
@keyframes lighthouse-rotate {
    0% {
        transform: rotate(-42deg);
    }

    100% {
        transform: rotate(42deg);
    }
}
```

No JavaScript or external libraries are required.

## Accessibility

The lighthouse scene uses a descriptive `aria-label` to describe the animated component.

Decorative elements such as the stars, beam, and ground use `aria-hidden="true"` so they are ignored by assistive technologies.

The animation also respects reduced-motion preferences.

## Reduced Motion

Users who prefer reduced motion will see the lighthouse beam in a static position instead of continuous rotation:

```css
@media (prefers-reduced-motion: reduce) {
    .beam {
        animation: none;
        transform: rotate(20deg);
    }
}
```

## Demo

Open `demo.html` directly in a browser to view the lighthouse animation.

No server or JavaScript is required.

## Browser Testing

- Microsoft Edge

## Why It Fits EaseMotion CSS

This example demonstrates how CSS transforms, keyframes, gradients, shadows, and `clip-path` can be combined to create a reusable animated scene without JavaScript.

The rotating beam provides a lightweight motion effect suitable for landing pages, dashboards, loading states, and atmospheric UI designs.

## Files

- `demo.html` — Lighthouse demonstration
- `style.css` — Styling and animation
- `README.md` — Documentation

## License

This example is part of the EaseMotion CSS project.