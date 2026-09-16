# SCSS Subgrid Column Span Helper

A standalone EaseMotion example demonstrating a reusable pattern for
SCSS-based subgrid column alignment.

Issue: #81349

## Overview

The Subgrid Column Span pattern allows a nested component to participate
in the column tracks defined by its parent CSS Grid.

This is useful for:

- Nested dashboards
- Analytics cards
- Multi-column layouts
- Reusable components
- Consistent horizontal alignment

The example uses CSS `subgrid` for the nested layout and includes a
fallback for browsers that do not support subgrid.

---

## Concept

A parent grid defines the primary columns:

```css
.parent {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

A child can span multiple parent columns:

.child {
  grid-column: span 4;
}

The child can then reuse the parent's column tracks:

.child {
  display: grid;
  grid-template-columns: subgrid;
}

This allows nested content to remain aligned with the parent grid.

Subgrid Column Span Pattern
.component {
  grid-column: span 4;


  display: grid;
  grid-template-columns: subgrid;
}

An inner element can consume part of those shared tracks:

.component__content {
  grid-column: span 2;
}

This avoids manually duplicating the parent's column definitions.

Browser Fallback

The example provides a fallback using @supports.

@supports not (grid-template-columns: subgrid) {
  .component {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

The fallback keeps the component functional in environments without
subgrid support.

Responsive Usage

The demo changes its grid structure at smaller viewport widths.

Desktop:

┌──────────┬──────────┬──────────┬──────────┐
│          Featured / Spanning Component     │
├──────────┼──────────┼──────────┼──────────┤
│       Card A       │       Card B          │
├──────────┴─────────┴──────────┴───────────┤
│             Wide Component                 │
└────────────────────────────────────────────┘

Tablet layouts reduce the number of available tracks.

Mobile layouts use a single-column structure.

Customization

The demo uses CSS custom properties for the visual layer:

:root {
  --bg: #0b1020;
  --surface: #141b2d;
  --border: rgba(255, 255, 255, 0.1);
  --text: #f8fafc;
  --accent: #7c9cff;
  --gap: 20px;
}

These values can be overridden by a consuming application without
changing the layout pattern.

Usage
Open demo.html in a modern browser.
Resize the viewport.
Observe the desktop, tablet, and mobile layouts.
Inspect the featured card.
Observe how its nested content follows the parent grid tracks.
Disable subgrid support in browser testing tools to inspect the
fallback layout.
Accessibility

The example uses semantic elements such as:

<main>
<section>
<article>
<h1>
<h2>
<p>

The visual layout does not depend on JavaScript.

The responsive layout also avoids requiring horizontal scrolling for
normal viewport sizes.

Performance

The example is CSS-only.

No JavaScript is required for the subgrid layout, keeping the
implementation lightweight.

Files
81349-subgrid-column-span/
├── demo.html
├── style.css
└── README.md
Issue

This example addresses:

#81349 — feat(scss): Add SCSS Subgrid Column Span helper mixins

The implementation is intentionally contained within
submissions/examples/ and does not modify the repository's existing
core SCSS files.