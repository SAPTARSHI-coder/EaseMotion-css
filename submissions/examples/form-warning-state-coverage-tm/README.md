# Form Warning State Coverage Demo

## What does this do?
Self-contained demo of the `.ease-input-warning` and
`.ease-field-warning` classes defined in `components/forms.css`.
Linked to issue #5505 which proposed smoke-test coverage for
the warning form state.

## How is it used?
Apply `.ease-input-warning` directly to an input to render the
warning border and box-shadow. Apply `.ease-field-warning` to the
parent `.ease-field` to color the label:

    <div class="ease-field ease-field-warning">
      <label class="ease-field-label" for="email">Email</label>
      <input class="ease-input ease-input-warning" id="email" type="email" value="user@example">
      <small>Please enter a valid email address.</small>
    </div>

## Why is this useful?
The warning form state was missing from the smoke test in
`tests/smoke.test.js`, even though the framework defines
`.ease-input-warning`, `.ease-field-warning`, and the
`.ease-field-warning .ease-field-label` descendant rule. The
proposed coverage would catch silent regressions if the warning
state is ever refactored away.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the warning
state on a form field with its label color and ring applied.

## Contribution Notes
- Linked to upstream issue #5505
- The proposed smoke test additions in #5505 are out of scope
  for this submission since `tests/` is a framework file that
  contributors cannot modify through PR
- Maintainers are encouraged to add the corresponding
  `expect(css).toContain(...)` assertions in
  `tests/smoke.test.js` directly
- See also #5511 and #5512 which propose the underlying
  `--ease-color-warning-alpha` design token
