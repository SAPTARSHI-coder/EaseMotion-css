# CSS Music Player Card

A pure CSS interactive music player component featuring a rotating vinyl album art, animated audio visualizer, and custom range slider styling, driven entirely by CSS state toggles without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI.
- **Component Architecture (Documented in Code)**: 
  - **The Checkbox Hack (State Toggle)**: We use a hidden `<input type="checkbox" id="play-toggle">` at the top of the card. The central Play/Pause button is actually a `<label for="play-toggle">`. When the user clicks the play button, it checks the hidden box.
  - **Cascading State Changes**: Using the `~` general sibling selector, the checked state of the input controls the entire UI:
    - `.play-state-input:checked ~ .player-controls` swaps the Play icon for a Pause icon.
    - `.play-state-input:checked ~ .album-art-container` sets `animation-play-state: running` on the vinyl record to make it spin.
    - `.play-state-input:checked ~ .visualizer` fades in the equalizer bars and starts their bounce animation.
  - **Custom Range Slider**: Features deep custom styling for `<input type="range">`, overriding native browser UI (including specific `-moz` and `-webkit` pseudo-elements) to match the custom theme colors.
- Fully accessible with `prefers-reduced-motion` support that disables the spinning record and bouncing equalizer for motion-sensitive users. Screen readers are instructed to ignore the hidden state checkbox via `aria-hidden="true"`, interacting directly with the styled `<label>` button.

## Usage
Open `demo.html` in your browser. Click the Play/Pause button in the center to toggle the component state and watch the vinyl record and visualizer react instantly.

## Files
- `demo.html`: The HTML structure containing the hidden state checkbox, SVG icons, and custom range slider.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `:checked ~` state linkage techniques.
