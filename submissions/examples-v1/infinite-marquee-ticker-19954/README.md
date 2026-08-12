# Infinite Marquee / Ticker Animation

This submission resolves issue #19954 by providing a highly performant, 100% CSS infinite marquee/ticker component.

## Overview
Traditional HTML `<marquee>` tags are deprecated, and many modern implementations rely heavily on JavaScript to clone nodes and calculate widths. This implementation (`ease-marquee-loop`) uses modern CSS flexbox and hardware-accelerated CSS transforms (`translate3d`) to create a perfectly seamless, infinite scrolling loop of content.

## Features
- **Seamless Looping:** Content is laid out using a flex container with two identical inner wrappers. The animation translates the container from `0` to `-50%`, creating an undetectable loop.
- **Hardware Acceleration:** Uses `translate3d(..., 0, 0)` to force the browser to use the GPU, ensuring smooth 60fps scrolling even on mobile devices.
- **Pause on Hover:** Includes a built-in state where hovering over the marquee pauses the animation (`animation-play-state: paused`).
- **Responsive & Flexible:** The CSS is structure-agnostic, meaning you can put text, images, or complex cards inside the marquee and it will perfectly flow horizontally.

## Files
- `demo.html`: Contains three different examples of the marquee (Text, Logos, and Cards) to demonstrate versatility.
- `style.css`: Contains the core `.marquee` utility classes and the `@keyframes` logic.
