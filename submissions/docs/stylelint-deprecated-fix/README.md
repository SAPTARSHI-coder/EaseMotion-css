# Deprecated Stylelint Rules Fix

**Fixes:** #2773
**File Modified:** `.stylelintrc.json`

---

## Problem

The `.stylelintrc.json` file contained 7 stylistic rules that were
deprecated in Stylelint v15 and completely removed in Stylelint v16.
These rules cause configuration errors or warnings in modern Stylelint.

## Deprecated Rules Removed

- `declaration-empty-line-before`
- `at-rule-empty-line-before`
- `rule-empty-line-before`
- `comment-empty-line-before`
- `custom-property-empty-line-before`
- `font-family-name-quotes`
- `comment-whitespace-inside`

## Fix

All 7 deprecated stylistic rules have been removed. Formatting
concerns like empty lines and quotes are now handled by Prettier,
not Stylelint, as per modern best practices.

## Result

Clean stylelint configuration compatible with Stylelint v16+.