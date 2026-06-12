# Sidebar Anchor Navigation Offset Fix

This folder contains a native CSS implementation resolving document header overlap caused by sticky or fixed navigation elements during internal link snapping.

## Fix Strategy

- Implements the `scroll-margin-top` property across target section targets.
- Guarantees viewport jumping mechanics halt cleanly before colliding with top layout shells without adding JavaScript scroll trackers.
