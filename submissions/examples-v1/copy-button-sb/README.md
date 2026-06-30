# Animated Copy Button

A self-contained copy-to-clipboard button with an animated "Copy" to "Copied!" confirmation state.

## Features

- Label crossfade uses stacked text so the button width does not shift.
- `.ease-copied` toggles the success state and pulse animation.
- Includes an `aria-live` status message for assistive technology.
- Respects reduced-motion preferences.
- Stacks cleanly on narrow screens.

## Usage

Open `demo.html` in a browser and click the button to copy the sample code. The JavaScript toggles `.ease-copied` for two seconds, matching the requested interaction pattern.
