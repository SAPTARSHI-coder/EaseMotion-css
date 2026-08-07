# Magnetic Hover Cards

## What does this do?
This contribution introduces a "Magnetic Hover Card" effect built completely with CSS. By utilizing a 3x3 invisible grid of hover cells and the modern CSS `:has()` pseudo-class, the card intelligently tracks the user's mouse position. It tilts slightly towards the cursor (`rotateX` and `rotateY`) and positions an ambient glow behind the content to simulate a magnetic tracking effect.

## How is it used?
Copy the `.magnetic-card-container` block into your markup. Ensure you include the `.hover-grid` elements before the `.card-content`. This structure is necessary for pure CSS mouse tracking. You can duplicate this container multiple times within a flex or grid layout for pricing tiers or feature highlights.

## Why is it useful?
Historically, this kind of 3D mouse tracking required continuous JavaScript event listeners (`mousemove`) attached to elements, which can cause layout thrashing or performance dips on low-end devices. By leveraging the `:has()` selector and a 9-cell grid, we achieve an approximate, high-performance tracking effect that feels premium while relying entirely on the browser's native CSS engine.
