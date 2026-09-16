# Ease Magnetic Button

A lightweight magnetic-style CTA button animation created with pure CSS.

## Features

- Smooth spring-like hover movement
- Subtle button scaling
- Click ripple effect
- Customizable CSS variables
- Responsive design
- No JavaScript
- No external libraries
- Reduced-motion support

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then use the button:

```html
<button class="magnetic-button" type="button">
    <span class="button-text">Explore Now</span>
    <span class="ripple"></span>
</button>
```

## Customization

The animation can be customized using CSS custom properties:

```css
:root {
    --magnetic-distance: 12px;
    --button-scale: 1.05;
    --spring-duration: 0.55s;
    --spring-easing: cubic-bezier(0.22, 1.45, 0.36, 1);
    --button-radius: 14px;
}
```

### `--magnetic-distance`

Controls how far the button moves horizontally when hovered.

### `--button-scale`

Controls the scale applied during hover.

### `--spring-duration`

Controls the duration of the spring-like transition.

### `--spring-easing`

Controls the easing curve used by the animation.

### `--button-radius`

Controls the button corner radius.

## Accessibility

The component uses a native HTML button and supports keyboard interaction through normal browser button behavior.

The animation also respects:

```css
@media (prefers-reduced-motion: reduce)
```

so users who prefer reduced motion are not forced to see the animation.

## Demo

Open `demo.html` directly in a browser. No server or build step is required.

## Why it fits EaseMotion CSS

The component demonstrates an animation-first interaction using readable CSS, reusable custom properties, and no JavaScript dependency.

## Browser Support

Works in modern browsers supporting CSS transitions, transforms, custom properties, and keyframe animations.