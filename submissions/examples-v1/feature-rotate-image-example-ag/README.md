# Rotate Image Exit Animation Example

## Description
This example demonstrates a **rotate exit animation** for image elements. When dismissed, the image rotates 90 degrees while shrinking and fading out, creating an elegant "spinning away" departure effect. This pattern is useful for photo galleries, dismissible cards, or media viewers.

## Usage
Open `demo.html` in a browser. Click **Dismiss Image** to trigger the rotate exit animation. Click **Reset** to bring the image back.

## How It Works
- The `ease-rotate-image-exit-ag` keyframes animate:
  - `rotate(0deg) → rotate(90deg)` — the image spins.
  - `scale(1) → scale(0.6)` — the image shrinks.
  - `opacity: 1 → 0` — the image fades out.
- On `animationend`, the image's `visibility` is set to `hidden` to remove it from interactive flow.
- The **Reset** button removes the `exiting-ag` class and restores visibility.

## Accessibility Considerations
- **Reduced Motion**: The `@media (prefers-reduced-motion: reduce)` query disables the rotation animation entirely. The image simply fades out with a quick opacity transition.
- Buttons include descriptive `aria-label` attributes.
- Semantic HTML is used throughout (`<h1>`, `<p>`, `<button>`).
- Focus-visible outlines are provided on buttons for keyboard navigation.
