# Notification Permission Prompt Mock

Related issue: #51873

## What does this do?

A browser-style notification permission dialog mock with three motion states: spring entrance when shown, horizontal slide-out on Block/dismiss, and a success pulse when Allow is clicked. Demo controls drive the UI only — the page never calls the real `Notification` API or triggers OS permission prompts.

## How is it used?

Open `demo.html` in a browser.

1. Click **Show prompt** to animate the mock dialog into the stage.
2. Click **Allow** to play the success pulse, or **Block** to slide the dialog out.
3. Click **Reset** to return to the idle state.

All motion is CSS-driven with minimal inline JavaScript for state toggling.

## Why is it useful?

Permission prompts are sensitive UX moments. This mock lets designers and contributors prototype entrance, dismissal, and confirmation motion in isolation — without spamming real notification requests during reviews, recordings, or GSSoC demos.

## Accessibility

- The dialog uses `role="dialog"`, `aria-modal`, and labelled title text.
- Status updates use `aria-live="polite"`.
- Animations are removed under `prefers-reduced-motion: reduce` for instant state changes.

## Files

```
submissions/examples/feature-notification-permission-prompt-mock-sum/
├── demo.html
├── style.css
└── README.md
```
