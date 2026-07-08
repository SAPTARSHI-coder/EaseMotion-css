# Bug Fix #2086: Modal Z-Index Variable Typo

## What does this do?
Fixes a variable name typo in components/modals.css.
Changed from var(--ease-z-index-modal, 1000) to var(--ease-z-modal, 1000)
to match the design token defined in core/variables.css.

## How is it used?
No HTML changes needed. The modal component now correctly respects
the --ease-z-modal custom property defined in variables.css.

```css
/* Before */
z-index: var(--ease-z-index-modal, 1000);

/* After */
z-index: var(--ease-z-modal, 1000);
```

## Why is this useful?
Fixes z-index stacking context bugs. Previously the fallback 1000 was
always used and any custom --ease-z-modal value was silently ignored.

## Tech Stack
- Pure CSS variable reference fix

Issue: #2086
Labels: type:bug, level:beginner, GSSoC-26
