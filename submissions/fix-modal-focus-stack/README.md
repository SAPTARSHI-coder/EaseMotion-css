# Fix: Modal Focus Stack

Replaces the single `previousFocusedElement` variable in `core/modal.js` with an array-based stack so focus is correctly restored through nested modal states.

## Usage

Open `demo.html`. Click "Open modal 1", then inside it click "Open modal 2 (nested)", then close both. Toggle between "Stack (fix)" and "Single variable (bug)" modes to compare.

## Why

When two modals are open simultaneously (e.g., rapid hash changes), the single `previousFocusedElement` gets overwritten by the inner modal's focus. When both close, focus is lost entirely instead of returning to the original trigger. A stack preserves the full focus history so each close restores the correct target.
