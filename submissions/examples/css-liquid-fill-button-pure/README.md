# CSS Liquid Fill Button

A pure CSS button component that fills with a dynamic liquid wave animation upon hovering, built entirely without JavaScript using pseudo-element trickery.

## Features
- Pure CSS and HTML (Zero JavaScript or complex SVG manipulation).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--liquid-color-1`, `--btn-border`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **Liquid Wave Illusion (Documented in Code)**: 
- This component creates the "liquid" wave effect utilizing a clever CSS trick. 
- Three massive pseudo-elements (`::before`, `::after` on the button, and `::before` on the inner span) are created.
- They are given a slight `border-radius: 40%`, transforming them from squares into "squircles".
- A continuous `@keyframes` animation spins them 360 degrees. Because of their squircle shape, the spinning edges look exactly like rolling, rising waves.
- On hover, we simply animate the `top` property to slide these spinning shapes up into the button's `overflow: hidden` bounding box.
- Fully accessible with `prefers-reduced-motion` support. The spinning animations are completely disabled for motion-sensitive users, acting as a clean fade-up fill instead.

## Usage
Open `demo.html` in your browser. Hover over the button to see the liquid waves dynamically roll and fill up the button.

## Files
- `demo.html`: The HTML structure.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the spinning squircle technique.
