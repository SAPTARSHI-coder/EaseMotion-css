# CSS-Only Parallax Depth Card

A stunning, highly-interactive 3D card component built purely with CSS. When hovered, the card physically tilts on the X and Y axes, revealing multiple distinct layers of depth.

## Features
- Pure CSS implementation (No JavaScript needed for the parallax effect)
- Uses `transform-style: preserve-3d` to create true spatial depth between elements
- Elements are pushed back (`translateZ(-50px)`) and pulled forward (`translateZ(90px)`) to create a dramatic parallax illusion during rotation
- Includes floating, animated abstract orbs that intersect the card's Z-space
- Fully responsive and easy to integrate

## Usage
Simply drop the HTML and CSS into your project. To customize the card, replace the background image URL in the `.card-bg` CSS rule. Remember that `transform-style: preserve-3d` does not work well with `overflow: hidden`, so any background elements that should stay within the card's borders must have their own `border-radius` applied manually.
