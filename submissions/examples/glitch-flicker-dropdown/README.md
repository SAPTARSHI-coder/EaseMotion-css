# Glitch-Flicker Dropdown

A responsive product catalog dropdown featuring a subtle
glitch-flicker animation created entirely with HTML and CSS.

The component uses a hidden checkbox for the open/close
interaction, so no JavaScript is required.

## Features

- Pure HTML and CSS
- No JavaScript
- No external libraries
- Click-to-open dropdown
- Glitch-flicker hover effect
- Staggered item entrance animation
- Smooth dropdown expansion
- Responsive desktop, tablet and mobile layouts
- CSS custom properties
- Keyboard focus support
- prefers-reduced-motion support

## Files

glitch-flicker-dropdown/
├── demo.html
├── style.css
└── README.md

## Usage

Include the stylesheet:

<link rel="stylesheet" href="style.css">

Create the dropdown:

<div class="dropdown">

    <input
        type="checkbox"
        id="catalog-toggle"
        class="dropdown-toggle"
    >

    <label for="catalog-toggle" class="dropdown-button">
        <span>Select Category</span>
        <span class="arrow">+</span>
    </label>

    <div class="dropdown-menu">

        <a href="#" class="dropdown-item">
            <span>01</span>
            Electronics
        </a>

        <a href="#" class="dropdown-item">
            <span>02</span>
            Fashion
        </a>

    </div>

</div>

## Glitch-Flicker Effect

The dropdown items use pseudo-elements to create short
horizontal glitch lines when an item is hovered.

.dropdown-item::before,
.dropdown-item::after {
    content: "";
    position: absolute;
}

The lines are animated using CSS keyframes:

@keyframes glitchLine {

    0% {
        transform: translateX(-100%);
    }

    50% {
        transform: translateX(-10%);
    }

    100% {
        transform: translateX(100%);
    }

}

## Dropdown Animation

The menu starts hidden:

.dropdown-menu {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px) scale(0.98);
}

When the checkbox is checked, CSS displays the menu:

.dropdown-toggle:checked ~ .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
}

## Staggered Items

Each dropdown item receives a small animation delay.

.dropdown-item:nth-child(1) {
    animation-delay: 0.04s;
}

.dropdown-item:nth-child(2) {
    animation-delay: 0.09s;
}

This produces a sequential flicker/reveal effect.

## CSS Custom Properties

Available variables:

--background
--text
--muted
--border
--surface
--hover-surface

Example:

:root {
    --background: #111111;
    --text: #ffffff;
    --muted: #aaaaaa;
    --border: rgba(255, 255, 255, 0.25);
}

These values can be customized for different designs.

## Responsive Design

Desktop:
The dropdown uses a centered catalog layout with a wide
interactive menu.

Tablet:
Spacing and typography are reduced.

Mobile:
The dropdown and menu adapt to smaller screen widths while
remaining easy to interact with.

## Accessibility

The component includes visible keyboard focus styles.

It also supports:

@media (prefers-reduced-motion: reduce)

When reduced motion is enabled, the glitch and reveal
animations are disabled.

## Performance

The component uses CSS transitions and keyframe animations.

No JavaScript or external animation libraries are required.

## License

Part of the EaseMotion CSS project.