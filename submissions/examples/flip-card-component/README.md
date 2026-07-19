# 3D Flip Card Component

A pure CSS card that flips in 3D on hover (desktop) or tap (mobile, via a toggled class) to reveal a hidden back face.

## Usage
Wrap your front and back content inside `.flip-card > .flip-card-inner > .flip-card-front / .flip-card-back`.

For mobile/touch support, toggle the `is-flipped` class on the `.flip-card` element via a click handler (see demo.html).

## Browser support
Works in Chrome, Firefox, Edge, Safari — uses `perspective`, `transform-style: preserve-3d`, and `backface-visibility`.

## Notes
No JavaScript required for desktop hover. A small inline script toggles a class for touch devices.