# Empty State Component

## What does this do?
Provides a reusable, CSS-only layout component for displaying "nothing here yet" situations — no search results, no files, no notifications, no projects, and similar empty-content states — with an optional icon, title, description, and one or two action buttons.

## How is it used?

The minimum markup is just `.empty-state` wrapping a title and description:

```html
<div class="empty-state" role="status">
  <div class="empty-state-icon">🔍</div>
  <h3 class="empty-state-title">No results found</h3>
  <p class="empty-state-description">
    Try adjusting your search terms or clearing your filters.
  </p>
</div>
```

Add action buttons with the `.empty-state-actions` wrapper:

```html
<div class="empty-state" role="status">
  <div class="empty-state-icon">📂</div>
  <h3 class="empty-state-title">No files uploaded</h3>
  <p class="empty-state-description">
    Drag and drop files here, or click Upload to browse.
  </p>
  <div class="empty-state-actions">
    <button class="empty-state-btn-primary" type="button">Upload files</button>
    <button class="empty-state-btn-secondary" type="button">Learn more</button>
  </div>
</div>
```

### Modifier classes

| Class | Effect |
|---|---|
| `.empty-state-sm` | Compact padding — for sidebars and panels |
| `.empty-state-full` | `min-height: 60vh` + larger type — for full route-level views |
| `.empty-state-dashed` | Dashed border that highlights on hover — for drop/upload zones |
| `.empty-state-dark` | Rebinds CSS variables for dark-background containers |
| `.empty-state-icon-lg` | Increases the icon circle to 88 px |

### CSS custom properties

Override any of these on the root element or a parent container:

```css
.empty-state {
  --es-icon-size:   64px;    /* icon circle diameter */
  --es-duration:    320ms;   /* transition / animation speed */
  --es-accent:      #6366f1; /* primary accent colour */
}
```

## Why is it useful?
Every application eventually needs to communicate emptiness — an unfilled inbox, a project list with no entries, a search with zero matches. Without a shared component, teams solve this problem differently every time, producing inconsistent layouts and wasted effort. This submission gives EaseMotion CSS a single, composable empty-state primitive that follows the same CSS-first, progressive-enhancement philosophy as the rest of the framework: developers add a class, not a dependency. The modifier system (size, border style, dark surface) handles the most common real-world variants without requiring JavaScript or additional markup.

## Tech Stack
- HTML
- CSS only (no JavaScript, no external frameworks)

## Preview
Open `demo.html` directly in any modern browser. Five demos are included:

| Demo | Variant shown |
|---|---|
| 1 — No Search Results | Default `.empty-state` with primary + secondary action |
| 2 — Compact (side-by-side) | `.empty-state-sm` for panels and sidebars |
| 3 — File Drop Zone | `.empty-state-dashed` with hover highlight |
| 4 — Dark Surface | `.empty-state-dark` for dark-bg containers |
| 5 — Full-Page Inbox | `.empty-state-full` for route-level empty views |

## Accessibility
- Root element uses `role="status"` and `aria-live="polite"` so screen readers announce dynamic changes when content appears or disappears.
- Drop-zone demo uses `role="region"` with a descriptive `aria-label`.
- All buttons are native `<button>` elements — keyboard focusable and operable by default.
- Both button classes have `:focus-visible` outlines for keyboard navigation.
- Color contrast for text and icons meets WCAG AA ratios.
- A `@media (prefers-reduced-motion: reduce)` block disables all animations and transitions.

## Contribution Notes
- Class naming was chosen by the contributor; the maintainer will rename to `ease-*` convention before merging.
- Only files inside `submissions/examples/empty-state-ksg/` have been created — no core or component files were modified.
