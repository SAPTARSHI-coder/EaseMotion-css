Glassmorphic Pure CSS Ripple Button
A premium, glassmorphism-styled button component that features a smooth wave/ripple click effect using 100% Pure CSS (Zero JavaScript).

The Pure CSS Ripple Magic
Creating a ripple effect usually requires JavaScript to track the clientX/Y coordinates and trigger animations. This component achieves a beautiful, centered ripple purely through clever CSS state management:
The :active State Snapping: When the button is clicked (:active), the ::after pseudo-element instantly snaps to scale(0) and becomes visible, because its transition is temporarily set to 0s.
The Release Expansion: The moment the user releases the click (leaving the :active state), the CSS reverts to its resting properties (scale(1.5) and opacity: 0) over a 0.6s transition. This creates the illusion of an expanding wave!

Features
Glassmorphism: Utilizes backdrop-filter: blur() and RGBA backgrounds for a frosted glass aesthetic.
Zero JS Overhead: Highly performant, running entirely on the browser's CSS rendering engine.
Self-contained: The ripple is kept within the button boundaries using overflow: hidden.
