# Duplicate Keyframe Fix — Issue #61607

## Bug

`@keyframes ease-kf-fade-in` is defined identically in two places:

- `core/animations.css`
- `easemotion/fade.css`

`easemotion/fade.css` is always loaded **after** `core/animations.css`
(via `easemotion/all.css`), so the second definition silently overrides
the first at parse time but produces the exact same animation. The
duplicate in `fade.css` is dead code — it adds bytes and a maintenance
trap (a future edit to one copy but not the other would cause visual
drift) without changing any rendered behavior today.

## Demo

`demo.html` + `style.css` in this folder reproduce the fade-in effect
using a single keyframe definition (`demo-fade-in`, renamed here only
to avoid colliding with the live `ease-kf-fade-in` name) to show the
fix is behaviorally identical to the current double-defined version.

## Recommended fix (for maintainer to apply in `core/`)

1. In `easemotion/fade.css`, delete the `@keyframes ease-kf-fade-in { ... }`
   block entirely.
2. Leave the definition in `core/animations.css` untouched — it's the
   one actually in effect after cascade/load order.
3. No other selectors need to change, since `fade.css` already just
   references `ease-kf-fade-in` by name in its `animation` shorthand.

## Why this is submitted as a docs showcase, not a direct edit

Per `CONTRIBUTING.md`, PRs touching `core/` or `components/` are closed
automatically. This submission documents and demonstrates the fix so a
maintainer can apply it directly to `core/animations.css` and
`easemotion/fade.css`.
