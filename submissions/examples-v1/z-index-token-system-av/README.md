# Z-Index Specificity Token Architecture

## What does this do?
Proposes a vital structural refactor to completely eliminate catastrophic layout overlap bugs (z-index specificity wars) by ripping out all arbitrary, hardcoded `z-index` integers and replacing them with a strict, centralized global CSS variable token system.

## How is it used?
Maintainers and core contributors must first inject a strict z-index numeric scale directly into `core/variables.css`:
```css
/* ✅ GOOD: Centralized Global Z-Index Scale */
:root {
  --ease-z-index-dropdown: 1000;
  --ease-z-index-sticky: 1020;
  --ease-z-index-modal-backdrop: 1040;
  --ease-z-index-modal: 1050;
  --ease-z-index-tooltip: 1070;
  --ease-z-index-toast: 1080;
}
```

Next, they must systemically audit all core component files—specifically targeting `components/modals.css`, `components/tooltips.css`, `components/navbar.css`, and `components/sidebar.css`. 

Currently, contributors are just wildly guessing random high numbers when a layout breaks:
```css
/* ❌ BAD: Complete chaos and specificity wars */
.ease-modal { z-index: 9999; }
.ease-tooltip { z-index: 99999; }
```

These integers must be completely stripped out and replaced with the exact variables defined in the core token system:
```css
/* ✅ GOOD: Strict, predictable 3D global layering */
.ease-modal { z-index: var(--ease-z-index-modal); }
.ease-tooltip { z-index: var(--ease-z-index-tooltip); }
```

## Why is it useful?
Currently, the `components/` directory is an absolute Wild West of arbitrary z-index integers. If an enterprise developer uses EaseMotion to build a sticky `navbar`, and then opens a `modal`, the navbar might accidentally slice directly through the modal because a previous open-source contributor hardcoded the navbar to `z-index: 9999` and the modal to `z-index: 1000`. When a tooltip is opened *inside* the modal, it might render completely *behind* the modal. 

This creates catastrophic, impossible-to-fix overlapping layout bugs for downstream users. By strictly enforcing a centralized `var(--ease-z-index-*)` token system, we guarantee that all 15+ interactive components stack perfectly predictably in 3D space. This completely eliminates specificity wars and ensures the framework is physically robust enough to handle complex, deeply nested enterprise application layouts.
