# Wiggle Dropdown Example

## Description
This example demonstrates a dropdown menu with a playful **Wiggle Exit** animation. When the user dismisses the dropdown, instead of just fading or sliding away, the menu shakes slightly (wiggles) while scaling down and fading out. This draws the eye and adds a quirky, fun personality to the UI.

## Usage
Open `demo.html` in your browser to see the animation in action.

## How It Works
1. **HTML/CSS Structure**: The layout uses a standard absolute positioned dropdown menu.
2. **Keyframe Animation**: The `@keyframes wiggleOut-ag` animation in `style.css` combines `scale`, `rotate`, and `opacity`. It rapidly alternates rotation (`-3deg` and `3deg`) while gradually reducing scale to `0.8` and opacity to `0`.
3. **JavaScript Coordination**: 
   - When the dropdown is closed, JS adds the `.ease-wiggle-out-ag` class to trigger the animation.
   - It listens for the `animationend` event on the menu element.
   - Once the animation finishes, it sets `display: none` and removes the animation class so the component is clean and ready for the next interaction.

## Accessibility
- Uses standard `aria-haspopup`, `aria-expanded`, and `role="menu"` attributes.
- The `prefers-reduced-motion: reduce` media query replaces the jarring wiggle effect with a near-instant fade out. A 0.01s transition is kept to ensure the JavaScript `animationend` (or transition end) fires correctly to hide the element.
