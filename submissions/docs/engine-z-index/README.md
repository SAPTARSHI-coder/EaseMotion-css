# Standardized Z-Index Scale

This submission resolves Issue #59030 by proposing a centralized z-index scale to fix collisions between tooltips and modals.

## Proposed Variables
To be added to `easemotion/engine/variables.css`:

```css
:root {
  --ease-z-base: 0;
  --ease-z-dropdown: 100;
  --ease-z-sticky: 200;
  --ease-z-modal-backdrop: 300;
  --ease-z-modal: 400;
  --ease-z-tooltip: 500;
}
```

## Why this solves the issue
Currently, hardcoded `z-index` values mean tooltips can accidentally render behind modals. By establishing a fixed, framework-wide scale, we guarantee that elements with `--ease-z-tooltip` will always render above `--ease-z-modal`.

## Directory Structure
Due to the contribution freeze on core engine files, this standardization proposal is submitted under `submissions/docs/engine-z-index/`. Maintainers can review the `demo.html` to see the stack in action and integrate the variables into the core engine when the freeze lifts.
