# Zoom-Out Animation — Design Token

## What does this do?
Proposes replacing the hardcoded `0.6s ease-out` duration in
`easemotion/zoom.css` for `.ease-zoom-out` with the framework's
`--ease-speed-medium` and `--ease-ease-out` design tokens. Linked
to issue #5575.

## How is it used?
This is a one-line change in `easemotion/zoom.css`. Once the
maintainer copies the change, the zoom-out speed can be themed
from `:root` like `.ease-zoom-in` already is.

## Why is this useful?
`.ease-zoom-in` and `.ease-contract-image-entrance` in the same
file already use the framework's design tokens. `.ease-zoom-out`
was the only holdout, with a hardcoded `0.6s ease-out` value.
Switching to the tokens brings it in line with the rest of the
file.

## Tech Stack
- CSS (no frameworks, no JavaScript)
- Pure design-token change

## Preview
Open `demo.html` in this folder to see the `.ease-zoom-out` class
in action with token-based timing. The demo overrides the
`--ease-speed-medium` variable to demonstrate that the duration
is now themable.

## Contribution Notes
- One-line change in `easemotion/zoom.css`
- The `forwards` fill mode is preserved from the original
- See also #5574 for the corresponding rotate token fix
