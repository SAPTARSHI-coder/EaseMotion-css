# Z-Index Architecture Patch (-pr)

This submission resolves a critical layering vulnerability in the core framework by introducing a centralized Z-Index Token Scale.

## What does this do?
It provides a structured set of CSS variables (`--ease-z-dropdown`, `--ease-z-modal`, `--ease-z-toast`, etc.) to control component stacking order globally. It then patches the existing `ease-modal-overlay` class to use this new scale instead of a hardcoded value.

## How is it used?
Developers apply the tokens to their custom components to guarantee they layer perfectly with the framework:
```css
.my-toast {
  z-index: var(--ease-z-toast);
}
```

## Why is it useful?
In `components/modals.css`, the backdrop has a hardcoded `z-index: 1000;`. Without a centralized scale, developers building tooltips, dropdowns, or toast notifications will eventually run into overlapping collisions where modals obscure critical alerts. This submission provides the exact design tokens needed for the maintainer to bulletproof the framework's architecture!
