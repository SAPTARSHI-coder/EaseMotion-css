# ease-scroll-sticky-toc-sap

A sticky table-of-contents sidebar that highlights the currently-visible section as the article scrolls.

## Notes
- `position: sticky` keeps the TOC pinned within its column without JS positioning.
- Active link tracking uses `IntersectionObserver` matching section IDs to link `data-target` values.
- Respects `prefers-reduced-motion`: active-state color/border transitions removed.