# Blur-Entrance Dropdown

A lightweight, responsive product catalog dropdown featuring
a smooth blur-entrance animation using only HTML and CSS.

No JavaScript or external libraries are required.

## Features

- Pure HTML and CSS
- No JavaScript
- No external dependencies
- Blur-entrance item animation
- Staggered dropdown items
- Smooth open and close transition
- Hover interaction
- Responsive design
- CSS custom properties
- Keyboard focus support
- prefers-reduced-motion support
- Suitable for product catalog layouts

## Folder Structure

blur-entrance-dropdown/
├── demo.html
├── style.css
└── README.md

## Usage

Add the stylesheet to your HTML:

<link rel="stylesheet" href="style.css">

Create the dropdown structure:

<div class="dropdown">

    <input
        type="checkbox"
        id="catalog-dropdown"
        class="dropdown-toggle"
    >

    <label
        for="catalog-dropdown"
        class="dropdown-button"
    >
        <span>Select Category</span>
        <span class="arrow">+</span>
    </label>

    <div class="dropdown-menu">

        <a href="#" class="dropdown-item">
            <span class="number">01</span>
            <span>Electronics</span>
        </a>

        <a href="#" class="dropdown-item">
            <span class="number">02</span>
            <span>Fashion</span>
        </a>

    </div>

</div>

## Animation

The dropdown items initially use:

opacity: 0;
filter: blur(10px);
transform: translateY(14px);

When the dropdown is opened, the items animate into
their normal state.

The main animation is:

@keyframes blurEntrance

The animation changes:

- opacity
- blur
- vertical position

This creates the blur-entrance effect.

## Staggered Animation

Each item has a different animation delay.

Example:

.dropdown-item:nth-child(1) {
    animation-delay: 0.05s;
}

.dropdown-item:nth-child(2) {
    animation-delay: 0.10s;
}

This makes the items appear sequentially instead of
appearing at exactly the same time.

## CSS Custom Properties

The component provides the following custom properties:

--background
--surface
--surface-hover
--text
--muted
--border
--border-hover

Example:

:root {
    --background: #111111;
    --surface: #191919;
    --surface-hover: #242424;
    --text: #ffffff;
    --muted: #a5a5a5;
    --border: rgba(255, 255, 255, 0.22);
    --border-hover: rgba(255, 255, 255, 0.55);
}

These properties can be changed to match different
website themes.

## Responsive Behavior

The component adapts to:

- Desktop
- Tablet
- Mobile

The typography, spacing and dropdown item dimensions
are adjusted for smaller screens.

## Accessibility

Keyboard focus styles are included using:

:focus-visible

The component also supports:

@media (prefers-reduced-motion: reduce)

When reduced motion is requested, the blur animation
is disabled.

## Performance

The component uses only CSS transitions and keyframe
animations.

There are no JavaScript frameworks, animation libraries
or external dependencies.

## License

Part of the EaseMotion CSS project.