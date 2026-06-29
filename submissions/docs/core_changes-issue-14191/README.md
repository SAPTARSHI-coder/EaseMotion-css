# Hover Animations Reduced Motion Fix — Issue #14191

## Proposed changes for `easemotion/hover.css`

- Add `@media (prefers-reduced-motion: reduce)` block wrapping all hover animation classes
- Set `transition: none !important`, `transform: none !important`, and `box-shadow: none !important` to fully suppress motion
- Reset all `:hover` state transforms/styles to ensure no animation plays when reduced motion is enabled
- Affected classes: `.ease-hover-grow`, `.ease-hover-lift`, `.ease-hover-glow`, `.ease-hover-rotate`, `.ease-hover-skew`, `.ease-hover-color`, and any additional hover effect classes in `easemotion/hover.css`

All changes are proposed inside `submissions/core_changes-issue-14191/`. No core files were modified.
