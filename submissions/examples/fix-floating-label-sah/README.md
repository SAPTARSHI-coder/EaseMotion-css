# Floating Label Autofill Overlap Fix (`#56072`)

## What does this do?
Prevents floating input labels from colliding with autofilled user credentials by explicitly supporting browser `:-webkit-autofill` and `:not(:placeholder-shown)` pseudo-selectors.

## How is it used?
Wrap inputs (configured with a single space placeholder `" "`) and sibling label elements inside an `ease-floating-field` container:
```html
<div class="ease-floating-field">
  <input type="text" id="user" class="field-input" placeholder=" " />
  <label for="user" class="field-label">Username</label>
</div>
```

## Why is it useful?
Solves issue #56072 by ensuring seamless form UX during password managers and browser credential autofill operations without requiring DOM polling scripts.