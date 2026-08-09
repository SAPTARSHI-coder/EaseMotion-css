# CSS Spring Physics Animation

A set of utility classes and variables that leverage modern CSS features to achieve true mathematical spring physics (bouncy, fluid motion) without relying on large JavaScript physics libraries.

## Features
- Pure CSS and HTML (Zero JavaScript required for math calculations, requestAnimationFrame loops, or state management).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`) with built-in dark and light mode definitions.
- **Modern `linear()` Easing Function**: 
- Historically, CSS `transition` and `animation` could only do simple overshoots using `cubic-bezier`. True spring physics with decaying oscillations were impossible.
- This component utilizes the modern CSS `linear()` function, which allows defining multi-point curves that accurately map to complex mathematical spring physics formulas (calculating mass, stiffness, and damping).
- **Two Pre-configured Spring Profiles**:
- `--ease-spring-bouncy`: A fast, snappy spring (mass: 1, stiffness: 400, damping: 20). Excellent for hover states and button presses.
- `--ease-spring-wobbly`: A slower, highly elastic spring (mass: 1, stiffness: 200, damping: 10). Great for UI toggles and entrance animations.
- **Animation Replay Trick (Checkbox Hack)**: Demonstrates how to force a CSS `@keyframes` animation to replay infinitely upon clicking a button, achieved by defining two visually identical keyframes and toggling between them using a hidden checkbox state.
- Fully accessible with `prefers-reduced-motion` support. The aggressive bouncy physics are overridden with standard, quick `ease-in-out` transitions for motion-sensitive users.

## Usage
Open `demo.html` in your browser. You will see three distinct examples of the spring physics in action:
1. **Spring Scale (Hover)**: Hover over the button to see it scale up and bounce into place using the `bouncy` profile.
2. **Spring Entrance (Click)**: Click the button to trigger a `translateY` entrance animation on the box below, utilizing the `wobbly` profile.
3. **Spring Toggle**: Click the UI switch to see the thumb glide across the track with a highly playful, fluid spring finish.

## Files
- `demo.html`: The HTML structure for the three demo scenarios, including the Checkbox Hack necessary for replaying animations on click.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the `linear()` mathematical curves.
