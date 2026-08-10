# CSS Lock Unlock Animation

A pure CSS padlock component that visually animates between locked and unlocked states, crafted without any JavaScript dependencies.

## Features

- **Pure CSS**: Fully driven by HTML structure and CSS animations.
- **Accessible Design**: Uses a native visually-hidden `<input type="checkbox">` enabling full keyboard navigation (`Space`, `Enter`, `Tab`).
- **Focus Rings**: Employs `:focus-visible` for clear highlighting.
- **Responsive**: Flexibly scales and fits on small screen sizes (320px/375px) via media queries.
- **Motion Safe**: Implements `@media (prefers-reduced-motion: reduce)` to disable transitions for users sensitive to motion.
- **State Feedback**: Instantly visually communicates status via lock movement and text color shifts.

## Usage

1. Open `demo.html` in your browser.
2. Click the lock icon or text to toggle the animation.
3. Alternatively, focus the lock via keyboard and toggle with `Space` or `Enter`.
