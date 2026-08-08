# Credit Card 3D Flip & Holographic Shimmer Preview

A dependency-free payment card preview component built with HTML, CSS, and a small JavaScript controller.

## Features

- Smooth 180-degree horizontal 3D flip when the CVV field receives focus.
- Real-time card number, cardholder name, expiration date, and CVV mirroring.
- Automatic card number grouping and lightweight card-brand detection.
- Metallic holographic sheen animation on mouse hover or touch interaction.
- Correct `backface-visibility` handling for both card faces.
- Responsive layout for desktop and mobile screens.
- Keyboard-accessible manual flip control.
- Reduced-motion support through `prefers-reduced-motion`.
- No libraries, build tools, or external assets required.

## Behavior

- Focusing `#cardCvv` adds the `is-flipped` class to `#creditCard`.
- Blurring the CVV field returns the card to its front face.
- The manual flip button supports keyboard and touch users.
- Pointer interaction adds `is-touching` briefly so the holographic sheen also works on touch screens.
- The form submit handler intentionally prevents submission because this is a visual example, not a payment processor.

## Accessibility notes

- Inputs use explicit labels and relevant autocomplete/input mode attributes.
- The card preview uses descriptive labels for front and back faces.
- The flip button exposes its state through `aria-pressed`.
- Status text uses `role="status"`.
- Motion is minimized for users who enable reduced-motion preferences.

