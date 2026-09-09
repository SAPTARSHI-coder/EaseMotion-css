# ease-loading-button-spinner-sap

A submit button that morphs into a loading state — a spinner grows in beside the label and the button disables — then reverts once the async action resolves.

## Usage
1. Copy `style.css` into your project.
2. Copy the `.btn-spinner-sap` markup from `demo.html`.
3. Include the click handler from `demo.html`, replacing the `setTimeout` with your real async call (e.g. `await fetch(...)`), removing `is-loading`/re-enabling the button in a `finally` block.

## Customization
- Change the spinner `width: 16px` size or border thickness.
- Adjust the `0.7s linear` spin speed.
- Swap the gradient background to restyle.

## Accessibility
Set `aria-busy="true"` on the button alongside `is-loading`, and ensure the disabled state prevents duplicate submissions.

## Browser support
All modern browsers.