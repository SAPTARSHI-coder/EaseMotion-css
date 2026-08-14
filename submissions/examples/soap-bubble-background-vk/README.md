# CSS Soap Bubble Background

A lightweight animated background featuring translucent, iridescent soap bubbles floating across the page using pure HTML and CSS.

## Features

- Pure HTML and CSS
- No JavaScript
- Iridescent soap bubble effect
- Smooth floating animation
- Multiple bubbles with different sizes and speeds
- Responsive design
- Supports prefers-reduced-motion
- Lightweight and easy to customize

## Usage

Link the stylesheet in your HTML:

<link rel="stylesheet" href="style.css">

Add the bubble background:

<div class="bubble-background" aria-hidden="true">
    <span class="bubble bubble--1"></span>
    <span class="bubble bubble--2"></span>
    <span class="bubble bubble--3"></span>
    <span class="bubble bubble--4"></span>
    <span class="bubble bubble--5"></span>
    <span class="bubble bubble--6"></span>
    <span class="bubble bubble--7"></span>
    <span class="bubble bubble--8"></span>
</div>

## Customization

Change the background color:

:root {
    --background: #08111f;
}

Change the default bubble size:

:root {
    --bubble-size: 110px;
}

Change the floating animation speed:

:root {
    --bubble-duration: 14s;
}

A smaller duration makes the bubbles move faster.

## Accessibility

The decorative bubble layer uses aria-hidden="true" so it does not interfere with screen readers.

The animation also supports prefers-reduced-motion. When reduced motion is enabled, the floating and shimmer animations are disabled.

## Responsive Design

The bubbles automatically adapt to different screen sizes and include responsive adjustments for smaller devices.

## Browser Tested

- Microsoft Edge

## Why It Fits EaseMotion CSS

This example demonstrates a lightweight CSS-only background animation that creates an engaging visual effect without JavaScript or external libraries.

The combination of floating motion, iridescent gradients, highlights, and subtle shimmer makes it suitable for modern landing pages and UI backgrounds.

## License

This example is part of the EaseMotion CSS project.