# Loading Button Spinner Centering Fix

## What does this do?
This contribution corrects a layout bug where the loading spinner inside button components (`.ease-btn-loading::after`) was rendered off-center. It resolves a conflict between the CSS `translate: -50% -50%` property and the `transform: translate(-50%, -50%)` keyframe rule by removing redundant translations from the animation keyframes.

## How is it used?
Apply the loading class to buttons when executing background operations:

```html
<link rel="stylesheet" href="style.css">

<!-- Standard Button -->
<button class="btn-hn">Submit</button>

<!-- Loading Button (displays centered rotating spinner) -->
<button class="btn-hn btn-loading-hn">Submit</button>
```

The loader automatically shifts to the center and inherits the button text color (hidden during load).

## Why is it useful?
It updates the visual alignment of the loading element. Prior to this fix, using loading buttons looked unpolished because the loader spinner drifted down and to the right during its rotation cycle due to double-translation offset errors.
