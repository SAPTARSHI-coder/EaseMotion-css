# Animated Form Error Shake

A login form where invalid fields shake horizontally and highlight in red
on submit, with the specific error message shown beneath each field.

**Level:** Intermediate

## Usage

On submit, each field is validated via the native Constraint Validation API
(`input.checkValidity()`). Invalid fields get a re-triggerable shake
animation, a red border, and a filled error message; valid fields clear
their error state.

## Accessibility

- Each error message is in a `role="alert"` element, so it's announced by
  screen readers as soon as it's populated after a failed submit.
- Invalid inputs get `aria-invalid="true"` (removed once corrected), giving
  assistive tech a persistent, non-visual signal of the error state beyond
  just the red border and message.
- Real `<label for>` elements are used for every input.
- `prefers-reduced-motion` removes the shake animation entirely; the red
  border, `aria-invalid`, and error message still communicate the error
  state without relying on the shake for meaning.

## Notes

- The shake animation is restarted via the standard reflow-reset technique
  (`void field.offsetWidth`) so repeated failed submits each get their own
  shake, not just the first one.
- Error state is never conveyed by color/shake alone — the text error
  message and `aria-invalid` are the actual accessible signal; the shake is
  purely an additional, non-essential visual emphasis layered on top.
- Uses native HTML validation attributes (`required`, `minlength`, `type="email"`)
  plus `novalidate` on the form so custom JS/CSS handles the actual error
  presentation instead of the browser's default validation UI.