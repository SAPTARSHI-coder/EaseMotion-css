# ease-shake-on-error-input-sap

An input field that shakes and turns red with an error message when validation fails on submit, clearing automatically as the user starts retyping.

## Usage
1. Include `style.css`.
2. Add markup: input + `.error-msg` element.
3. Attach the validation/shake trigger from `demo.html`.

## Customization
- `shake-sap` keyframes: shake intensity/direction pattern.
- Error color/message text.
- Validation regex — swap for any field type (password, phone, etc).

## Notes
- `void input.offsetWidth` forces a reflow before re-adding the `.error` class — without this, re-triggering the shake on a second consecutive invalid submit wouldn't replay the animation (CSS won't restart an already-applied animation without a forced reflow in between).
- The error class is removed on every keystroke (`input` event), giving immediate positive feedback as soon as the user starts correcting the field.
- Respects `prefers-reduced-motion`: shake animation is disabled entirely; red border and error message still appear as non-motion feedback.