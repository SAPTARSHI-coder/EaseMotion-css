# Kinetic Typography Scrolling Marquee

A continuously scrolling text banner (like a news ticker) implemented entirely in CSS.

## Files
- `demo.html`: The HTML structure containing the duplicated scrolling tracks.
- `style.css`: The CSS that sets up the flex container and handles the seamless `translateX` loop.
- `README.md`: This file.

## Features
- **Pure CSS:** No JavaScript required to calculate the width or reset the scroll.
- **Infinite Loop:** Uses a duplicated text container and an `@keyframes` animation from `0%` to `-50%` to create a seamless, infinite loop.
- **Performance:** Animates the `transform` property for smooth, hardware-accelerated rendering.
- **Hover Pause:** Automatically pauses the animation when the user hovers over the text.

## Usage
Wrap your duplicated text inside a `.marquee-track` container, which sits inside the main `.kinetic-marquee` wrapper with `overflow: hidden`.
