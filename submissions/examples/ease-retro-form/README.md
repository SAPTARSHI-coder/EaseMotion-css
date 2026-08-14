# CSS Retro Form (`ease-retro-form`)

## 1. What does this do?
A responsive, accessible form styled with a tactile, 8-bit retro arcade aesthetic.

## 2. How is it used?
Hard, un-blurred CSS `box-shadow` values (e.g., `8px 8px 0px 0px #000`) paired with thick `4px solid #000` borders create a chunky, pixel-art physical depth. The button press physics are simulated by translating the element by the exact shadow offset distance (`transform: translate(6px, 6px)`) while reducing the shadow to zero (`box-shadow: 0px 0px 0px 0px #000000`).

## 3. Why is it useful?
Generating retro aesthetics natively in CSS avoids the need to load heavy pixel-art image borders or custom `.ttf` web fonts, keeping the component ultra-lightweight and perfectly scalable across device resolutions.
