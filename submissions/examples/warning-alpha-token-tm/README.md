# Warning Alpha Design Token

## What does this do?
Proposes adding `--ease-color-warning-alpha` to the alpha-token
block in `core/variables.css`, matching the pattern used for
`--ease-color-primary-alpha`, `--ease-color-success-alpha`, and
`--ease-color-danger-alpha`.

## How is it used?
This is a one-line design-token addition. Once the maintainer
copies the line into `core/variables.css`, the warning color
becomes themable through a single source of truth and can be
referenced via `var(--ease-color-warning-alpha, rgba(245, 158, 11, 0.15))`
in any component.

## Why is it useful?
`components/forms.css` currently inlines `rgba(245, 158, 11, 0.15)`
for the warning input state. Adding the missing token brings the
warning color in line with the primary, success, and danger
colors and lets consumers override the warning alpha from
`:root` or any other cascade layer.

## Tech Stack
- CSS (no frameworks, no JavaScript)
- Pure design-token change

## Preview
Open `demo.html` in this folder to see the proposed token in
action on a styled box. The token is overridden locally to
demonstrate that it is overridable from the cascade.

## Contribution Notes
- One-line change in `core/variables.css`
- No consumer change required in this PR (see #5512 for the
  forms.css follow-up)
- Backward compatible: the existing rgba() value is preserved
  as a fallback
