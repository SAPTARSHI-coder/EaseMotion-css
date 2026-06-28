# Z-Index Scale Audit & Fix

## What's the bug?
A grep-based audit of all `z-index` values across `core/` and `components/` found three real conflicts and two missing tokens:

### Bugs found

**1. `components/tooltips.css` uses `var(--ease-z-toast, 9999)`**
There is no `--ease-z-tooltip` token in `core/variables.css`, so the tooltip component borrows the toast layer. Tooltips should sit above modals but below toast notifications — not at the same level as toasts.

**2. `components/scroll-progress.css` uses `var(--ease-z-toast, 9999)`**
A scroll progress bar sitting at the same z-index as toast notifications (9999) is wrong — if any toast appears while scrolling, they compete for the same stacking layer. Scroll-progress should be at sticky/header level (~300).

**3. `components/sidebar.css` hardcodes `z-index: 100`**
Should use `var(--ease-z-overlay)` for consistency. When the overlay token changes, the sidebar won't track it.

### Missing tokens
No `--ease-z-dropdown` or `--ease-z-tooltip` token exists. Contributors building dropdowns or custom tooltips have no token to reference, leading to ad-hoc hardcoded values that will eventually conflict.

## The fix

### Proposed complete scale for `core/variables.css`
```css
:root {
  --ease-z-base:      0;    /* default stacking context         */
  --ease-z-raised:    10;   /* cards hover, floating elements   */
  --ease-z-dropdown:  200;  /* dropdowns, autocomplete, select  */
  --ease-z-sticky:    300;  /* sticky headers, scroll-progress  */
  --ease-z-overlay:   400;  /* modal backdrop, sidebar overlay  */
  --ease-z-modal:     500;  /* modal/dialog content             */
  --ease-z-tooltip:   600;  /* tooltips — above modals          */
  --ease-z-toast:     700;  /* toast/snackbar — always topmost  */
}
```

### Component fixes
```css
/* tooltips.css */
--ease-tooltip-z-index: var(--ease-z-tooltip, 600);

/* scroll-progress.css */
--ease-scroll-progress-z-index: var(--ease-z-sticky, 300);

/* sidebar.css */
z-index: var(--ease-z-overlay, 400);
```

## Why this matters
As more components are added to EaseMotion CSS, ad-hoc z-index values will cause visual conflicts — a tooltip hidden behind a modal, or a toast competing with the scroll-progress bar. Establishing a named scale now prevents this from compounding.
