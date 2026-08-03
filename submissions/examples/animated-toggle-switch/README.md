# Animated Toggle Switch

## What does this do?
Turns a plain checkbox into an animated iOS/Material-style toggle switch
with a sliding thumb and background color transition — pure CSS, no JS.

## How is it used?
Wrap a hidden <input type="checkbox"> and a .switch-track (containing
.switch-thumb) inside a <label class="switch">. Toggling the checkbox
drives the animation via the :checked selector.

## Why is it useful?
- Extremely common real-world pattern (settings, dark mode, preferences)
- Fully accessible — real checkbox underneath, keyboard/focus works natively
- Zero JavaScript, zero dependencies
- Fits EaseMotion's composable, human-readable naming philosophy