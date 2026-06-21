# CSS :user-valid / :user-invalid Form Validation

## What

This example demonstrates the CSS `:user-valid` and `:user-invalid` pseudo-classes for interaction-based form validation. Unlike `:valid`/`:invalid` which fire immediately, `:user-valid` and `:user-invalid` only apply after the user has interacted with the field, providing a better UX.

## How

The `:user-valid` and `:user-invalid` pseudo-classes are combined with `:focus`, `:focus-within`, and `::after` content to show dynamic validation feedback. Inputs with `required`, `type="email"`, `minlength`, and `pattern` attributes trigger state changes. Animated indicators (checkmark, error icon, shake) enhance the feedback.

## Why

`:user-valid`/`:user-invalid` solves the problem of showing validation errors too early (before the user has had a chance to type) or too late. They only activate after user interaction, reducing distraction while providing immediate, contextual feedback. This is a modern CSS-only approach to form validation UX.
