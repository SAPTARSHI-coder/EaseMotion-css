# Floating/Levitating CSS Animation Utilities

This submission adds reusable utility classes to give elements an organic, floating/levitating animation effect. 

## Bug / Feature Description
Floating animations are heavily used on modern landing pages for hero images, 3D illustrations, or decorative background shapes to make the page feel alive. While simple `translateY` keyframes work, pairing the float with a dynamic pseudo-element shadow drastically increases realism.

## Fix / Implementation Details
- **`.ease-animate-float`**: The base utility, applying an infinite `ease-in-out` translateY animation.
- **Speed Modifiers**: Added `.ease-animate-float-fast` (3s) and `.ease-animate-float-slow` (10s).
- **`.ease-animate-float-shadow`**: This utility is applied to a wrapper div. It creates a radial-gradient shadow underneath the object using an `::after` pseudo-element. As the main object translates *up* (levitates), the shadow seamlessly scales *down* and fades out, mimicking real light physics.

## How to Test
1. Open `demo.html` in your browser.
2. Observe the Standard Float (Blue Box) and Fast Float (Green Circle) utilities.
3. Pay special attention to the Dynamic Shadow (Purple Rocket). Watch how the dark elliptical shadow on the "floor" beneath it shrinks and fades as the rocket moves higher into the air.
