# Flash Banner Example

## Description
This example demonstrates a **Flash Banner**, which uses a slow, continuous pulsing (flashing) opacity animation. It is commonly used as a loading or processing indicator, letting the user know that the system is currently working on a background task and they should wait.

## Usage
Open `demo.html` in your browser to see the animation.

## How It Works
- The `.ease-flash-banner-ag` class applies a CSS `@keyframes` animation (`flashLoading-ag`) that runs infinitely.
- The keyframes slowly transition the opacity of the entire banner between `1` and `0.5`, creating a gentle breathing or flashing effect.
- A spinning loading icon is also included to reinforce the "processing" state.

## Accessibility
- The banner uses `role="alert"` and `aria-busy="true"` to explicitly inform screen readers that this area contains an important status update and that the system is currently busy.
- The `prefers-reduced-motion: reduce` media query in `style.css` disables both the opacity pulse and the icon spin animations, ensuring a static display for users sensitive to continuous motion.
