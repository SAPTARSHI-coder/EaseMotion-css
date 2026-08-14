# EaseMotion CSS Snowman

## What does this do?
This component is a fully animated, pure CSS illustration of a snowman complete with a carrot nose, top hat, scarf, coal buttons, and waving stick arms.

## How is it used?
- **3D Spherical Shading**: `radial-gradient` is utilized on `.ease-base`, `.ease-body`, and `.ease-head` to create realistic spherical lighting effects for the snowballs.
- **Layering & Stacking**: The layout heavily relies on `position: absolute` and explicit `z-index` stacking to properly layer elements such as the scarf, coal buttons, top hat, and facial features.
- **Natural Animation**: `transform-origin` is set precisely at the joints of the stick arms (`right center` for the left arm and `left center` for the right arm) so they wave naturally via CSS keyframe animations.

## Why is it useful?
Creating complex illustrations natively in CSS rather than importing static `.png` or `.svg` files allows for native, high-performance DOM animations without additional HTTP requests, keeping the overall payload extremely lightweight and customizable.
