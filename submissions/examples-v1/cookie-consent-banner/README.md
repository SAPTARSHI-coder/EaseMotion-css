# Cookie Consent Banner

A fixed bottom cookie consent banner that slides up on page load if no prior consent is stored. The user can Accept or Decline, and the choice is saved in localStorage so the banner does not reappear. The banner slides down on dismissal.

## EaseMotion CSS classes used

- `ease-flex` — page-level centering
- `ease-center` — vertical and horizontal centering

## How to run

Open `demo.html` in a browser. Click Accept or Decline to dismiss the banner. Reload the page — the banner remembers your choice.

## Accessibility notes

Both buttons are interactive `<button>` elements. The banner uses a dark background with light text for readability. Reduced motion disables the slide transition.
