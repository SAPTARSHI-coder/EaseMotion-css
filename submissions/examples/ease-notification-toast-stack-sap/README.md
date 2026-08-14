# ease-notification-toast-stack-sap

A stacking toast notification system — new toasts slide in from the right, auto-dismiss after a delay by sliding back out, and stack cleanly via flexbox.

## Usage
1. Include `style.css`.
2. Add markup: an empty `.toast-stack-sap` container.
3. Call `showToast(type, message)` from `demo.html` — `type` is `success`/`error`/`info`.

## Customization
- Auto-dismiss delay (`3000ms`).
- Toast colors per type (left border accent).
- Stack position (`top`/`right`) and gap.

## Notes
- Stacking is handled entirely by flexbox `gap` on the container — new toasts appended to the DOM automatically push existing ones down/up with no manual position calculation.
- Removal waits for `animationend` on the `.leaving` class before removing the DOM node, so the slide-out animation always completes before the element disappears.
- Respects `prefers-reduced-motion`: both entrance and exit animations are disabled; toasts appear/disappear via instant opacity changes, and removal still correctly waits for the (near-instant) state change.