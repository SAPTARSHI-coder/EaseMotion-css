# Label Float Input

Input field with a label that floats above when the input is focused or has content. Uses CSS `:focus` and `:not(:placeholder-shown)` selectors — no JavaScript required.

## Features

- Pure CSS floating label (no JS needed)
- Label floats on focus and when input has content
- Customizable transition duration, focus color, label color, and border color via CSS custom properties
- Smooth transform and font-size transition

## Usage

Wrap an `input` and `label` inside a `.lfi-field` container. The input must have `placeholder=" "` (space) for the `:not(:placeholder-shown)` selector to work when the user types.
