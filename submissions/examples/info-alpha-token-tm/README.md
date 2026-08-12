# Info Alpha Design Token

## What does this do?
Proposes adding `--ease-color-info-alpha` to the alpha-token
block in `core/variables.css`, matching the pattern used for
`--ease-color-primary-alpha`, `--ease-color-success-alpha`,
`--ease-color-danger-alpha`, and `--ease-color-warning-alpha`.
Linked to issue #5577.

## How is it used?
This is a one-line design-token addition. Once the maintainer
copies the line into `core/variables.css`, the info color becomes
themable through a single source of truth.

## Why is this useful?
The framework defines an `--ease-color-info` token at full opacity
but no alpha counterpart. The warning alpha token was added
recently (see #5511), and info is the last color in the palette
missing its alpha sibling. Adding the token completes the set
and unblocks a future `.ease-input-info` state contribution.

## Tech Stack
- CSS (no frameworks, no JavaScript)
- Pure design-token change

## Preview
Open `demo.html` in this folder to see the proposed token in
action. The boxes below use the token to demonstrate that the
info alpha is now themable from `:root`.

## Contribution Notes
- One-line change in `core/variables.css`
- No consumer change required in this PR
- Backward compatible: existing components that hardcoded
  `rgba(59, 130, 246, ...)` continue to work
- See also #5511 (the warning alpha addition) for the prior
  reference change
