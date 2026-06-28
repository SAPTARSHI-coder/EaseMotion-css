# Fix: Stylelint Font Quote Violation in Vite Example

## Issue

Running the workspace linter command `npm run lint` fails with a font-family name quote violation in `examples/react-vite/src/App.css`.

## Root Cause

On line 20 of `examples/react-vite/src/App.css`, the `font-family` property includes quotes around the single-word font name `"Inter"`. Under standard Stylelint rule checks (`font-family-name-quotes`), single-word font family names that do not require escaping must not be wrapped in quotes.

## Fix

Remove single quotes around `'Inter'` in the `font-family` property inside `examples/react-vite/src/App.css` (line 20).

## Files Changed

- `examples/react-vite/src/App.css` — Remove quotes from font-family declaration

## Demo

Open `demo.html` to verify that the Vite dashboard fonts render correctly with `font-family: Inter` without quotes.
