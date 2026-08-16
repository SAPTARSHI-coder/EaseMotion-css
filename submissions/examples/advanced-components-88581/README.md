# Pure CSS Advanced Components

## Summary

Six pure-CSS components submitted for issue #88581. The original issue
had no detailed spec ("advanced component iteration 123"), so this
submission covers six commonly-needed primitives that fit the
"advanced component" description, all built with no JS dependency:

1. **Accordion** — native `<details>`/`<summary>`, keyboard accessible by default
2. **Toast notifications** — checkbox-hack dismiss, no JS
3. **Breadcrumbs** — simple list-based trail
4. **Skeleton loader** — shimmer placeholder for text/avatar/block shapes
5. **Pagination** — page links with active/disabled/ellipsis states
6. **Stepper / progress indicator** — multi-step flow with complete/active states

All token-driven via `--ease-*` variables, dark-mode aware, and
`prefers-reduced-motion` respected on every animation.

## Classes

- Accordion: `ease-accordion`, `ease-accordion-item`, `ease-accordion-body`
- Toast: `ease-toast-wrap`, `ease-toast-dismiss`, `ease-toast`,
  `ease-toast-success/danger`, `ease-toast-icon`, `ease-toast-body`,
  `ease-toast-close`
- Breadcrumbs: `ease-breadcrumbs`
- Skeleton: `ease-skeleton`, `ease-skeleton-text/avatar/block`
- Pagination: `ease-pagination`, `ease-page-active/disabled/ellipsis`
- Stepper: `ease-stepper`, `ease-step`, `ease-step-circle`,
  `ease-step-label`, `ease-step-complete/active`

## Files

- `demo.html` — live demo of all six components
- `style.css` — original CSS, all six components

Relates to issue #88581.
