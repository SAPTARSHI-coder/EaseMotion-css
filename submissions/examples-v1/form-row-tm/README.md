# Form Row Layout Utility

## What does this do?
Adds an `.ease-form-row` utility that lays out multiple
`.ease-field` elements side by side on wide viewports and stacks
them on mobile.

## How is it used?
Wrap multiple fields in `.ease-form-row`:

    <div class="ease-form-row">
      <div class="ease-field">
        <label class="ease-field-label" for="first">First name</label>
        <input class="ease-input" id="first" type="text">
      </div>
      <div class="ease-field">
        <label class="ease-field-label" for="last">Last name</label>
        <input class="ease-input" id="last" type="text">
      </div>
    </div>

## Why is it useful?
The existing form component only supports vertical layouts
(`.ease-field` is `flex-direction: column`). Designers often need
to put two fields on a single line (first name + last name, city +
state, etc.) without writing custom CSS. `.ease-form-row` fills
that gap with a single utility that handles the responsive
collapse automatically.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser and resize the viewport to see
the fields stack on mobile and sit side by side on desktop.

## Contribution Notes
- Pure CSS addition
- Mobile breakpoint follows the framework's `--ease-bp-sm`
