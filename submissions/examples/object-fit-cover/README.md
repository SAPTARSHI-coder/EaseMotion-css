# object-fit-cover

## What

An interactive demo that displays the same source image under all five `object-fit` values (`cover`, `contain`, `fill`, `scale-down`, `none`) and lets the user adjust `object-position` with a clickable focal-point picker. Each variant is labelled with its behavior so the visual difference is immediately clear.

## How

A single image is loaded once and duplicated into five cards. Each card applies one `object-fit` value on the `<img>` element inside a fixed-ratio container (`aspect-ratio: 16 / 9`). Below the gallery, an interactive demo lets the user click on a preview area to reposition `object-position`; the coordinates update in real-time and a live CSS rule is shown. The picker uses a `clip-path` crosshair and a hidden input for accessibility.

## Why

`object-fit` and `object-position` are essential for handling user-submitted images, thumbnails, hero banners, and any scenario where the source media dimensions don't match the layout slot. Seeing all five values side by side with the exact same source makes the trade-offs (cropping, distortion, letterboxing) immediately visible and helps developers choose the right value for their use case.
