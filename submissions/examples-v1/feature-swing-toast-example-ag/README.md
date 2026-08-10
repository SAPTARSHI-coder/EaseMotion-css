# Swing Toast Entrance Animation Example

## Description
This example demonstrates a **swing entrance animation** applied to a toast notification. The toast hinges from its top edge, swinging forward into view with a natural, damped 3D oscillation before settling. This creates a highly physical and engaging notification appearance.

## Usage
Open `demo.html` in a browser. Click **Show Toast** to trigger the appearance of a new toast notification. The toast will swing down from the top edge and automatically disappear after 5 seconds, or it can be manually closed.

## How It Works
- The `ease-swing-toast-entrance-ag` keyframes animate the `rotateX` property alongside `opacity`.
- The animation starts at `rotateX(-90deg)` (folded flat/invisible) and swings past 0 to `30deg`, then `-15deg`, `5deg`, and finally `0deg`.
- `transform-origin: top center` is applied to the toast so the element hinges from its top edge rather than its center, creating a realistic swinging sign effect.

## Accessibility Considerations
- **ARIA Live Regions**: The toast container uses `aria-live="polite"` and `aria-atomic="true"` so screen readers will announce incoming toasts automatically without disrupting the user.
- **Reduced Motion**: The `@media (prefers-reduced-motion: reduce)` query replaces the 3D swing animation with a simple opacity fade and subtle vertical translation. This removes rotational motion which can cause discomfort for users with vestibular disorders.
- The close button includes an `aria-label="Close toast"` for screen reader clarity.
