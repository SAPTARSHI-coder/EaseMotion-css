# Modal Tab Trap Escape Fix

This submission resolves Issue #15684 by providing a patched modal logic script that properly prevents the keyboard tab trap from escaping when a user clicks on non-focusable areas.

## What it does
When an `.ease-modal` is active, clicking on the empty background inside the modal drops the focus to `document.body`. If the user presses `Tab` after that, the default focus handler allows the focus to escape to the underlying page elements. This patched script explicitly checks if the `document.activeElement` is outside the modal, and if so, aggressively wraps focus back to the first element in the modal.

## How to use it
In this demo, the standard modal logic is extended/patched via `modal-patched.js`. Simply use the standard `.ease-modal` markup, and include this script instead of the default `modal.js` if you need rigorous focus trap compliance.

## Why it fits EaseMotion CSS
Accessibility and robust keyboard navigation are critical for a professional CSS framework. This submission serves as a proof of concept for an eventual core update while strictly following the contribution guidelines.
