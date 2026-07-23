# Fix: `.ease-input:focus` Overrides `:focus-visible` Strategy

## Issue

Issue #10869's file-input patch added a bare `.ease-input:focus` rule in `components/forms.css` (line 354–357) with hardcoded `#6c63ff` that overrides the intentional `:focus-visible`-only ring defined at lines 80–85. This causes focus rings to appear on mouse click (not just keyboard), violating the framework's accessibility contract. The hardcoded hex also bypasses the `--ease-color-primary` design token.

## Root Cause

The file-input contribution at Issue #10869 added a generic `.ease-input:focus` rule that was supposed to be scoped to `[type="file"]` but instead applies globally to all inputs, overriding the `:focus-visible` strategy established by the forms component.

## Fix

Remove the bare `.ease-input:focus` block entirely — the existing `.ease-input:focus-visible` rule already correctly handles keyboard focus. This restores the framework's accessibility contract where focus rings only appear on keyboard navigation.

## Files Changed

- `components/forms.css` — Remove redundant `.ease-input:focus` block (lines 354–357)

## Demo

Open `demo.html` to verify that focus rings appear only on keyboard Tab navigation, not on mouse click.
