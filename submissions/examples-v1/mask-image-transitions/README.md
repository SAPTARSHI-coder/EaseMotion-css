## What

A CSS mask-image gallery demonstrating three creative transition effects — linear wipe, radial reveal, and alpha-channel fade — using gradient masks over stacked image pairs. Hovering a card triggers the mask to animate, transitioning between two images.

## How

Each `.mask-container` layers two images absolutely. The top image has `mask-image` set to a CSS gradient (linear, radial, or alpha-channel) with a `mask-size` of 200% and an initial `mask-position` that hides the top layer. On hover/focus-within, `mask-position` animates to 0, gradually revealing the top image over the bottom. The `mask-image` property accepts standard CSS gradients, making the effect purely declarative.

## Why

`mask-image` enables hardware-accelerated, smooth transitions between visual states without canvas or JS libraries. By varying the gradient shape (linear for directional wipes, radial for circular reveals, alpha-channel for diagonal dissolves), each card achieves a distinct feel while reusing the same transition pattern.
