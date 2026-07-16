## What

A contact form demonstrating the `:user-invalid` and `:user-valid` CSS pseudo-classes, which apply validation styling only after the user has interacted with a form field — avoiding the immediate "red flash" that `:invalid` causes on page load for required fields.

## How

Apply `:user-invalid` for red borders and error messages after the user has changed or blurred the field, and `:user-valid` for green borders on valid input. The base `:invalid`/`:valid` selectors intentionally have no visual styles. A `@supports selector(:user-invalid)` guard provides the feature, with a fallback to standard `:invalid`/`:valid` styling on older browsers. Error messages animate in via opacity and transform transitions.

## Why

Showing validation errors before the user has touched a field is a poor UX pattern — it looks broken on load and distracts from the task. `:user-invalid` and `:user-valid` solve this natively, letting the browser track interaction state without custom JavaScript to manage "touched" vs "untouched" field tracking.
