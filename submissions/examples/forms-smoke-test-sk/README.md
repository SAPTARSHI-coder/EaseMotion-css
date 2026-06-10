# Forms Smoke Test Coverage

Fixes #4619

## Problem

`components/forms.css` existed with full form component styles (`.ease-field`, `.ease-input`, `.ease-textarea`, `.ease-select`, etc.) but was completely absent from `tests/smoke.test.js`. Any regression in form classes would silently pass CI.

## Fix

- Added `forms.css` to the CSS bundle loaded in `beforeAll()` in `smoke.test.js`
- Added a dedicated `should have form classes defined` test asserting `.ease-field`, `.ease-field-label`, `.ease-input`, `.ease-textarea`, and `.ease-select` are present

## Demo

Open `demo.html` to see form components rendered using the framework styles.
