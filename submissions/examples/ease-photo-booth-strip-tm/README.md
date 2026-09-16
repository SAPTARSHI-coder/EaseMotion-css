# Photo Booth Strip

Closes #74804

A vertical photo booth strip with 4 frames, each with a different gradient backdrop and a frame number overlay. Date caption at the bottom.

## Technique

Each frame is an `aspect-ratio: 1` square with a unique gradient. The frame number is pulled from a `data-num` attribute via `::after content: attr()`. Emoji icons in the center give it a photo-booth feel.
