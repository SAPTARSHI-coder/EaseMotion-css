# Responsive Retro Toggle

A responsive, accessible toggle switch with a classic retro arcade-inspired visual style built using pure HTML and CSS.

## What does this do?

This component provides a reusable ON/OFF toggle with:

- Retro arcade-inspired styling
- Responsive layout
- Native checkbox functionality
- Keyboard accessibility
- Visible focus state
- CSS-only state transitions
- Reduced-motion support
- No JavaScript or external dependencies

## How is it used?

Include the stylesheet and use a native checkbox with the toggle structure:

```html
<link rel="stylesheet" href="style.css">

<label class="retro-toggle">
    <input
        class="retro-toggle__input"
        type="checkbox"
    >

    <span class="retro-toggle__track">
        <span class="retro-toggle__thumb"></span>

        <span class="retro-toggle__text retro-toggle__text--off">
            OFF
        </span>

        <span class="retro-toggle__text retro-toggle__text--on">
            ON
        </span>
    </span>

    <span class="retro-toggle__label">
        Retro Mode
    </span>
</label>