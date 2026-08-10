# ease-form-validation-sap

A form with live inline validation — fields animate to green/red with a shake on error and a sliding message as the user types or submits.

## Usage
1. Include `style.css`.
2. Add markup: each `.field` wraps a `label`, `input`, and `.field-msg` element.
3. Attach per-field validation functions and the `submit` handler from `demo.html`.

## Customization
- Validation rules inside `validateEmail()`/`validatePassword()` — swap regex/logic per field.
- `.field.valid`/`.field.invalid` colors and the shake keyframe.
- `field-msg` text per state.

## Notes
- Validation state toggles two classes (`valid`/`invalid`) on the `.field` wrapper; CSS handles all border color, message reveal, and shake animation from those classes alone.
- `novalidate` on the `<form>` disables native browser validation bubbles so the custom inline messages are the only feedback shown.
- Shake animation runs once per invalid state change (re-triggers each time the class is toggled off/on).
- Respects `prefers-reduced-motion`: shake animation and message-reveal transition are disabled; color change still communicates validity instantly.