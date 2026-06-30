# Keyboard Shortcut Keypress Feedback

This submission addresses issue **#13004** by introducing a dynamic, highly aesthetic keyboard-shortcut display system demonstrating different key states: **idle**, **pressed**, **completed**, and **unavailable**.

## Features

- **Single-key & Multi-key support**: Gracefully renders individual keys or modifier combinations (e.g. `Ctrl` + `Alt` + `P`).
- **Interactive Feedback**: Listen to actual keypresses or click combinations directly to see dynamic visual states.
- **Pressed Transition**: Keys use 3D-depth compression (`transform` translation + variable shadow collapse) on press.
- **Accessible State Coding (No-Color-Alone)**:
  - **Completed (Success)**: Displays a checkmark icon beside the key shortcut.
  - **Unavailable (Disabled)**: Displays a prohibited/blocked icon with a diagonal line pattern overlay.
- **Zoom & Clipping Prevention**: Built with fluid flex layout parameters and auto-scaling `min-width` so text never clips.
- **Focus Indicators**: Clear focus outline states for keyboard accessibility.
- **Reduced Motion Support**: Overrides all transition values and animations when `prefers-reduced-motion` is active.
