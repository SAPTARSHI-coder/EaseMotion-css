# Ease Blob Animation

An implementation of the `ease-blob` organic morphing shape.

## Overview
This project uses pure CSS to create an organic, morphing blob animation. It utilizes the 8-value `border-radius` property to create complex, non-uniform curves that shift seamlessly over time.

## Acceptance Criteria Met
* **8-value border-radius:** Uses the exact starting ratio `60% 40% 30% 70% / 60% 30% 70% 40%`.
* **Organic Keyframes:** Includes 3+ distinct 8-value shapes within the `@keyframes` rule to create the morphing effect.
* **Infinite Seamless Loop:** The animation repeats infinitely, with the 0% and 100% keyframes perfectly matched to ensure there are no jagged jumps.
* **Speed Variable:** The animation duration is hooked up to the `--ease-blob-speed` CSS custom property (currently set to `6s`).

## Files
* `demo.html`: Contains the layout and the base `div` for the blob.
* `style.css`: Contains the CSS variables, visual styling, and keyframe animation logic.