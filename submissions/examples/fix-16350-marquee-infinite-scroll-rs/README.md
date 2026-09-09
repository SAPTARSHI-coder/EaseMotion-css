# Marquee / Infinite Scroll Text Animation

This submission adds CSS utility classes to create modern, seamless marquee scrolling effects, commonly used for partner logos, ticker tapes, and feature highlights.

## Bug / Feature Description
The old HTML `<marquee>` tag is deprecated and inaccessible. Modern marquees require careful CSS animations that loop duplicate sets of content smoothly to create the illusion of an endless scrolling ribbon.

## Fix / Implementation Details
- Added `.ease-marquee-container` as the overflow hidden wrapper, complete with an optional `mask-image` linear gradient to fade out the edges.
- Added `.ease-marquee-content` which holds the items and runs the `transform: translateX()` animation.
- To create the seamless loop, developers must place **two identical `.ease-marquee-content` divs** next to each other inside the container. The animation translates the container exactly `-100%` plus the gap.
- Added a reverse scrolling modifier: `.ease-marquee-content-reverse`.
- Added a hover-to-pause modifier: `.ease-marquee-hover-pause`.
- Added speed modifiers: `.ease-marquee-fast`, `.ease-marquee-slow`.

## How to Test
1. Open `demo.html` in your browser.
2. Observe the top marquee scrolling infinitely left.
3. Observe the bottom marquee scrolling infinitely right at a faster speed.
4. Hover your mouse over either of the scrolling bands to see them pause on hover.
