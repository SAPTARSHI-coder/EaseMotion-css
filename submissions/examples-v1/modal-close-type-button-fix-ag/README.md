# Modal Close type=button Fix (Issue #14071)

## What does this do?
Demonstrates the correct close button pattern inside modal forms using `type="button"` to prevent accidental form submission.

## How is it used?
```html
<!-- CORRECT: type="button" prevents form submission -->
<button type="button" class="ease-modal-close">×</button>

<!-- WRONG: no type defaults to "submit" — submits the parent form -->
<button class="ease-modal-close">×</button>
```

## Why is it useful?
All `<button>` elements without an explicit `type` attribute default to `type="submit"` per the HTML spec. Inside form modals this causes the form to submit when the user clicks the close button. Adding `type="button"` is the correct, simple fix.
