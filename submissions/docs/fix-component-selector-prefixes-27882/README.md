# Fix: Non-`ease-*` Component Selector Prefix Consistency

## Issue

Issue #27882 identifies several public component selectors that do not follow the EaseMotion CSS `ease-*` naming convention.

The affected selectors are:

- `components/breadcrumb.css` → `.bg-dark`
- `components/skeleton.css` → `.skeleton-card-header`

These generic selectors may collide with application styles and introduce inconsistencies in the public component API.

---

## Root Cause

EaseMotion CSS consistently uses the `ease-*` prefix for public component selectors. However, a small number of legacy selectors still expose generic class names that can conflict with application-specific CSS.

---

## Proposed Fix

Introduce `ease-*` prefixed aliases while preserving the existing selectors as deprecated aliases for backward compatibility.

### Proposed Selector Mapping

| Current Selector | Proposed Selector |
|------------------|-------------------|
| `.bg-dark` | `.ease-bg-dark` |
| `.skeleton-card-header` | `.ease-skeleton-card-header` |

The existing selectors should remain available as deprecated aliases until the next major release to avoid breaking existing implementations.

---

## Files to Update

- `components/breadcrumb.css`
- `components/skeleton.css`

---

## Benefits

- Aligns all public component selectors with the `ease-*` naming convention.
- Reduces the risk of CSS selector collisions.
- Improves framework consistency and discoverability.
- Preserves backward compatibility through deprecated aliases.

---

## Demo

Open `demo.html` to view the proposed selector aliases and example usage.

---

## Related Issue

Closes #27882