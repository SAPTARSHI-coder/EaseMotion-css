# Streak Counter

A small, dependency-free weekly habit tracker for the EaseMotion CSS gallery.

## Features

- Seven-day interactive streak tracker.
- Flame badge updates with the number of completed days.
- Weekly progress indicator.
- Accessible button controls with `aria-pressed` state.
- Keyboard-friendly focus styles.
- Responsive layout for small screens.
- Respects `prefers-reduced-motion`.
- No frameworks, libraries, fonts, or build step required.

## Files

- `demo.html` — component markup and minimal vanilla JavaScript for interaction.
- `style.css` — hand-crafted component styling and animations.

## Usage

Copy both files into the same directory and open `demo.html` in a browser.

Click any day to toggle its completed state. The streak badge and progress bar update automatically.

## Customization

The component intentionally keeps the styling local to the component. Adjust the values in `style.css` to change the card, spacing, typography, or animation.

The initial completed state is controlled by the `is-complete` class and `aria-pressed` value on each day button in `demo.html`.

## Accessibility

The tracker uses native `<button>` elements, visible keyboard focus, `aria-pressed` for toggle state, and an accessible label for the flame badge. Decorative flame content is hidden from assistive technology.

## License

Use according to the licensing terms of the parent EaseMotion CSS repository.
