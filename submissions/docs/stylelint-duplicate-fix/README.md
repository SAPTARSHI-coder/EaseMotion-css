# Stylelint Duplicate Rules Fix

**Fixes:** #2771
**File Modified:** `.stylelintrc.json`

---

## Problem

The `.stylelintrc.json` file contained duplicate keys in the `rules` object:
- `color-function-alias-notation` declared twice (both null)
- `no-duplicate-selectors` declared twice (null, then true)
- `declaration-block-no-duplicate-properties` declared twice (null, then true)

Duplicate JSON keys cause unpredictable behavior depending on the parser.

## Fix

Removed all duplicate entries, keeping only the intended final values:
- `no-duplicate-selectors: true`
- `declaration-block-no-duplicate-properties: true`
- `color-function-alias-notation: null` (one instance only)

## Result

Clean, unambiguous stylelint configuration with no duplicate keys.