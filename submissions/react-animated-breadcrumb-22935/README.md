# React Animated Breadcrumb Component (#22935)

This submission fulfills Issue **#22935** by delivering a fully interactive, animated breadcrumb component supporting deep navigation, collapse/expand, and multiple EaseMotion transitions.

## Animation Inventory

| Feature | EaseMotion / CSS Technique | Details |
|---------|---------------------------|---------|
| Initial trail stagger | `.ease-slide-up .ease-duration-fast` at `index × 80ms` | All crumbs cascade in left-to-right |
| New crumb entrance | `.ease-slide-up .ease-duration-fast` at `0ms` | Newly appended crumb bounces in immediately |
| Separator dividers | `.ease-fade-in .ease-duration-fast` at `index × 80ms + 40ms` | Separators fade in offset from their crumb |
| Active crumb | CSS gradient `background-clip: text` + `drop-shadow` glow | Current page crumb has a gradient text highlight |
| Ancestor crumb hover | `.ease-hover-glow` | Ancestor crumbs glow on hover |
| Child links stagger | `.ease-slide-up .ease-duration-fast` at `100ms + ci × 80ms` | Page child links cascade in after panel enters |
| Page panel swap | `.ease-fade-in .ease-slide-up .ease-duration-normal` via `panelKey` | Content panel cross-fades on navigation |

## Architecture Highlights

### `revealKey` Stagger Replay
The `<BreadcrumbTrail>` receives a `revealKey` prop. Every navigation bumps this key, which React uses to completely remount the `<nav>` element. This guarantees that the full stagger animation replays from scratch whenever the trail changes, whether the user navigates forward or backward.

### Collapse / Expand with `…` Button
When the path exceeds 4 crumbs, the middle items are replaced with a `…` `<CollapseBtn>`. Clicking it expands all crumbs and shows a `‹ less` toggle. Collapsed state is local to `<BreadcrumbTrail>` — each expansion also benefits from the existing `revealKey` mount strategy to replay the stagger.

### Deep Site Tree Navigation
A 14-node tree (Home → Docs → React → Hooks → `useScrollReveal`) powers the demo. Users can navigate 5+ levels deep, triggering the collapse behaviour, then click ancestor crumbs or the "Reset" button to navigate back.

### Accessibility
The `<nav aria-label="Breadcrumb">` wraps the trail. The active (last) crumb has `disabled` set so it is not focusable or clickable, matching WAI-ARIA breadcrumb best practice.

## How to View
Double-click `demo.html` — React 18 + Babel via CDN, **no build step required**.

**Tip:** Navigate to Home → Docs → React → Hooks → useScrollReveal to see the collapse behaviour trigger, then click `…` to expand all 5 crumbs.
