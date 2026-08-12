# ease-flip-counter-clock-sap

A live digital clock styled like a mechanical flip-counter/split-flap display, updating every second with a flip animation on changed digits.

## Usage
1. Include `style.css`.
2. Add markup: 3 `.flip-unit` groups (hours/minutes/seconds), each with a `.flip-digits` container.
3. Include the JS from `demo.html`, which reads the system clock every second and re-renders only changed digit groups.

## Customization
- `flip-card` width/height and font size for display scale.
- `flip-top-sap` animation duration/easing for flip speed.
- Labels/units — easily adapted into a countdown timer by feeding a decreasing time value instead of `new Date()`.

## Notes
- Only re-renders (and thus only re-animates) a digit group when its value actually changes compared to the previous tick, avoiding unnecessary flips on unchanged digits.
- The `::after` horizontal line on each flip face simulates the physical split-flap card's center crease.
- Respects `prefers-reduced-motion`: the flip animation is disabled, so digits update instantly without the rotateX flip motion; the clock itself continues functioning normally.