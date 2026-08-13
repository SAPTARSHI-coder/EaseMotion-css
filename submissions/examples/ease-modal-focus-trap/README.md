# Modal Focus Trap (CSS :target)

Demonstrates a pure CSS modal using the `:target` pseudo-class and verifies focus trapping behavior for screen reader and keyboard users.

## What this covers
- CSS `:target` modal open/close via URL hash changes
- Focus trap verification — Tab cycling through modal controls
- Table of expected keyboard behaviors and CSS support level
- Note on limitations (Escape close requires JS in practice)

## How to use
Open `demo.html` and click "Open Modal". Tab through the modal's buttons. Click the close button or the overlay backdrop to dismiss. The modal's `:target` state is toggled by the URL hash.
