# ease-frosted-modal-sap

A confirmation modal with a frosted-glass backdrop that blurs in on open, and a scale/slide-in dialog box — closes on button click, backdrop click, or cancel.

## Usage
1. Include `style.css`.
2. Add markup: overlay + `.modal-box` with title, message, and action buttons.
3. Attach open/close handlers from `demo.html`.

## Customization
- `backdrop-filter: blur(8px)` on the overlay: background blur intensity.
- `modal-box` background opacity/blur for the dialog's own glass effect.
- Button colors for primary/secondary actions.

## Notes
- Backdrop `backdrop-filter` is animated alongside `opacity`, so the blur itself eases in rather than snapping instantly — this needs both properties to be listed in the `transition` shorthand.
- Backdrop-click-to-close checks `e.target === modal` so clicks inside the dialog box don't propagate into a close.
- Respects `prefers-reduced-motion`: modal box scale/slide transform is removed, leaving a fast opacity fade only; backdrop blur transition duration is also shortened.