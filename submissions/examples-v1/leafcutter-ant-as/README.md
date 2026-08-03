# Leafcutter Ant

A pure CSS and HTML column of leafcutter ants marching a cut leaf fragment each back to the nest hole.

## What it shows

- A trail of ants crossing the scene on one shared march keyframe, each parking its scale in a custom property so the march cannot wipe it, and staggered by delay so they file past in a line
- Six segmented body parts per ant plus legs and antennae, each leg parking its own angle so a shared step keyframe can drive the gait
- Leaf fragments held overhead, veined with a repeating linear gradient and bobbing with each step
- A nest mound with a dark entrance hole, and the cut plant they came from
- No images, no JavaScript, no external dependencies

## Usage

Open `demo.html` in any modern browser.

## Accessibility

All motion stops under `prefers-reduced-motion: reduce`.
