# Form — Inline Layout

## What does this do?
Adds `.ease-form-inline` — a form layout where label, input, and
helper text sit on a single horizontal line.

## How is it used?
Apply the modifier to a `.ease-field`:

    <div class="ease-field ease-form-inline">
      <label class="ease-field-label" for="email">Email</label>
      <input class="ease-input" id="email" type="email">
      <small class="hint">We never share your email.</small>
    </div>

## Why is it useful?
The default form field is vertical (label on top, input below).
Inline layouts are common in toolbars, search headers, and
filter rows where vertical space is at a premium.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser.

## Contribution Notes
- Pure CSS addition
- Collapses back to vertical on mobile via the existing bp-sm
  breakpoint
