# Valid & Invalid Feedback

## What does this do?
Demonstrates the `:valid` and `:invalid` pseudo-classes for real-time form validation feedback with styled success and error states.

## How is it used?
Add to form inputs with validation attributes like `required`, `pattern`, `minlength`, or `type`:

    <input type="email" class="val-input" required>
    <span class="val-feedback"></span>

## Why is it useful?
Inline validation feedback helps users correct mistakes immediately rather than after form submission. Clear visual cues (green success, red error) improve form completion rates and accessibility.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
