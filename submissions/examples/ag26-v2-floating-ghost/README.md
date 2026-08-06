# Floating Ghost Animation

A spooky and cute floating ghost character created purely with CSS shapes and animations.

## Preview
Open `demo.html` in your browser. You will see a ghost that floats up and down seamlessly while its shadow beneath it shrinks and grows to match the distance.

## Implementation
- The ghost body uses `border-radius` to form a dome.
- The ghost's wavy tail is created using a repeating `radial-gradient` for a scalloped edge.
- Both the ghost and its shadow are synchronized with two `@keyframes` animations (`float` and `shadowScale`) that use identical durations and easing functions to look realistic.
