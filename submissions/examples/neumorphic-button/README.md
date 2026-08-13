# Soft UI / Neumorphism Button

This submission provides a CSS utility class to create a Soft UI (Neumorphism) button with a realistic press animation.

## Features

- **Extruded Look**: Uses a dual `box-shadow` technique. One shadow is light (simulating a top-left light source) and the other is dark (simulating the shadow cast on the bottom-right).
- **Physical Press Animation**: On the `:active` state, the outer `box-shadow` properties are instantly replaced with `inset` shadows, creating the optical illusion that the button is being physically pressed into the page.
- **Accessibility**: Includes `:focus-visible` outlines for keyboard navigation and respects `prefers-reduced-motion: reduce`.

## Usage

1. Include `style.css` in your project.
2. Apply the `.em-btn-soft` class to your `<button>` element.
3. **Important**: For the Neumorphism effect to work properly, the `background-color` of the button's parent container *must* match the `background-color` of the button itself (default is `#e0e5ec`). You can override this globally by redefining the `--em-neumorphic-bg` CSS variable.
