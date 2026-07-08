# Origami Paper Plane Submit Button Micro-Interaction

This feature introduces a premium submission button micro-interaction, resolving Issue #11758. When activated, the button container folds itself into an origami paper plane, performs a 3D loop-the-loop across the screen, and returns as a checkmark confirmation button.

## What does this do?

It provides styling and animations for interactive buttons to create a playful submission workflow:

- **Origami Folding**: The button container folds into a sharp triangular paper plane shape using a CSS `clip-path` transition.
- **3D Flight Path**: The paper plane takes off, loops around the screen, flies out of view, and returns to the center.
- **Verification Morph**: Upon return, the button morphs back into a circular green confirmation badge displaying a checkmark.

## How is it used?

Structure of the submission button component:

```html
<input type="checkbox" id="submit-toggle" class="submit-checkbox" />
<label for="submit-toggle" class="submit-button">
  <span class="btn-text">Send Message</span>
  <span class="btn-plane"></span>
  <span class="btn-check">✓</span>
</label>
```

Toggling the checkbox initiates the animation sequence.

## Implementation Details

- **Clip-Path Coordinates**:
  - Button state: `polygon(0 0, 100% 0, 100% 100%, 0 100%)` (Rectangle)
  - Plane state: `polygon(50% 0%, 100% 100%, 50% 80%, 0% 100%)` (Origami Triangle)
- **Flight Path Keyframes**: Uses `translate3d`, `rotate`, and `scale` to create a 3D circular loop-the-loop animation.
- **Accessibility**: Replaces the flying animation with an immediate snap to the checkmark state under `prefers-reduced-motion: reduce`.
