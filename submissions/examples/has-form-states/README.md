# :has() Form States — Parent-Aware Validation

## What

A form that uses the CSS `:has()` pseudo-class combined with `:user-invalid` to create parent-aware validation states. Three field groups (Name, Address, Preferences) each show group-level error messages and visual highlighting when any child field is invalid — without any JavaScript validation logic.

## How

Each `<fieldset>` has the selector `.form-group:has(:user-invalid)` which triggers a red border and box-shadow on the group when any contained field is in a `:user-invalid` state (the `:user-invalid` pseudo-class activates after the user has interacted with a field). The `.group-error` element inside transitions from hidden to visible using opacity and transform. Individual fields also show `:user-invalid` and `:user-valid` styling. A shake animation plays on invalid fields. The `prefers-reduced-motion` query disables all transitions and animations.

## Why

The `:has()` selector is a game-changer for form UX — it lets CSS read the state of child elements and adjust parent styling accordingly, something previously only possible with JavaScript. Combined with `:user-invalid`, forms can provide immediate, group-level feedback that is entirely CSS-driven, reducing JS complexity and improving accessibility out of the box.
