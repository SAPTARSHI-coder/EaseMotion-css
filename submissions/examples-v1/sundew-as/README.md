# Sundew

A pure CSS and HTML sundew, the carnivorous bog plant whose red paddles bristle with dew tipped tentacles, luring a gnat closer.

## What it shows

- Each tentacle parks its own angle in a custom property so a shared curl keyframe can bend them inward
- Sticky dew drops drawn as glistening radial gradients on every tentacle via ::after, pulsing on their own cycle
- A gnat with pseudo element wings drifting down a curved flight path toward the trap
- Two rosettes scaled by a single custom property for depth
- No images, no JavaScript, no external dependencies

## Usage

Open `demo.html` in any modern browser.

## Accessibility

All motion stops under `prefers-reduced-motion: reduce`.
