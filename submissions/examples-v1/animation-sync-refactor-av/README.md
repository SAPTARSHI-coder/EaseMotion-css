# Global Animation Sync Architecture

## What does this do?

Proposes a complete structural refactor to eliminate hardcoded animation timings (e.g., `0.3s`, `250ms`, `ease-in-out`) from all interactive component files. Instead, all transitions will be strictly bound to the global CSS timing variables defined in `core/variables.css`.

## How is it used?

Maintainers and contributors must rip out all hardcoded `transition` values currently hardcoded across the `components/` directory.

Instead of writing this anti-pattern:

```css
.ease-tooltip {
  transition: all 0.3s ease;
}
```

Components must strictly consume the framework's global design tokens:

```css
.ease-tooltip {
  transition:
    opacity var(--ease-speed-fast) var(--ease-ease),
    transform var(--ease-speed-fast) var(--ease-ease);
}
```

To automatically enforce this architectural standard, we strongly propose adding the `stylelint-declaration-strict-value` plugin to the CI pipeline to explicitly ban hardcoded `s` or `ms` values inside the `transition` and `animation` properties, effectively requiring a `var()` fallback.

## Why is it useful?

Currently, components like `ease-marquee.css`, `tooltips.css`, and `tabs.css` blindly hardcode their own transition speeds. If a developer utilizing the EaseMotion framework wants to build a "snappier" or "softer" UI by adjusting the global `--ease-speed-medium` token inside `variables.css`, half of the components will completely ignore the change because they are hardcoded to `0.3s`. This creates a deeply unsynced, visually disjointed UI experience for the end-user. Forcing all components to consume the global timing tokens guarantees that animations are perfectly synchronized across the entire framework from a single source of truth.
