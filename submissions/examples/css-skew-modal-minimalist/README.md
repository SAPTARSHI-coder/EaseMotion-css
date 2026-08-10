# Skew-Active Modal — Minimalist Tech

A CSS-only modal that enters with a horizontal skew. The dialog frame starts tilted at `skewX(-8deg)` offset to the left, then un-skews and slides into position when opened via a checkbox toggle.

## Behavior

When the trigger is clicked, the backdrop fades in and the modal frame transitions from `skewX(-8deg) translateX(-40px) scaleY(0.96) opacity: 0` to its resting state. The cubic-bezier timing gives a smooth deceleration as the card settles into place. Clicking the backdrop or any close button reverses the animation.

The skew gives the entrance a directional quality — the card appears to come from the left edge while straightening out, which feels more intentional than a basic fade or scale.

## Customization

- Swap `--csm-accent` to change the button and highlight color
- Adjust `skewX()` and `translateX()` values for a more aggressive or subtle effect
- The easing curve can be changed to `ease-out` for a less springy feel

## Notes

- Pure HTML + CSS, no JavaScript
- `prefers-reduced-motion` disables all transitions
- Semantic `role="dialog"` and `aria-modal="true"` on the dialog element
- Backdrop is clickable to dismiss
