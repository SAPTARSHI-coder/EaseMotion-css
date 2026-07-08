# Form Warning State — Design Token

## What does this do?
Proposes adding a `--ease-color-warning-alpha` design token to
`core/variables.css` and using it in `components/forms.css` for the
`.ease-input-warning` state, so the warning color can be themed
without inline rgba overrides.

## How is it used?
End users get the change automatically once the maintainer copies the
two-line addition into `core/variables.css` and the corresponding
property in `components/forms.css`. Existing custom properties for
`primary`, `success`, and `danger` already follow this pattern.

## Why is it useful?
`components/forms.css` uses an inline `rgba(245, 158, 11, 0.15)`
value for the warning input state box-shadow, even though the
framework defines alpha tokens for primary, success, and danger.
This change brings the warning state in line with the others and
makes the warning color themable from a single source of truth.

## Tech Stack
- CSS (no frameworks, no JavaScript)
- Pure design-token change

## Preview
Open `demo.html` in this folder to see the proposed warning state
applied to a form input. The input shows the warning border color
and the new token-driven box-shadow ring.

## Contribution Notes
- Two-line change in `core/variables.css`
- One-line change in `components/forms.css` to swap inline rgba for
  the new variable
- Backward compatible: the rgba value is kept as a fallback
- See also #5511 (the upstream alpha-token addition)
