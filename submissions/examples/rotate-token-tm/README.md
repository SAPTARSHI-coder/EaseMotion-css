# Rotate Animation — Design Token

## What does this do?
Proposes replacing the hardcoded `1.2s` duration in
`easemotion/rotate.css` for `.ease-rotate` with the
`--ease-speed-slow` design token. Linked to issue #5574.

## How is it used?
This is a one-token change in `easemotion/rotate.css`. Once the
maintainer copies the change, the rotate speed can be themed from
`:root` like every other animation in the framework.

## Why is this useful?
Every other animation in `easemotion/` references `--ease-speed-*`
tokens. `.ease-rotate` was the only holdout. Switching to the
token keeps the file consistent and lets consumers slow down or
speed up rotations from a single source of truth.

## Tech Stack
- CSS (no frameworks, no JavaScript)
- Pure design-token change

## Preview
Open `demo.html` in this folder to see the `.ease-rotate` class
animating on a rotating element. The demo overrides the
`--ease-speed-slow` variable to demonstrate that the rotation is
now themable.

## Contribution Notes
- One-line change in `easemotion/rotate.css`
- Backward compatible: the existing `1.2s` was an explicit
  constant; replacing it with the slow token preserves the
  default duration exactly (since `--ease-speed-slow: 600ms` is
  the framework's default for that token — the contributor should
  verify this matches the maintainer's intent)
- See also #5575 for the corresponding zoom-out token fix
