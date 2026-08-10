# Compact Toolbar Search Box

## What does this do?

Provides a compact toolbar-style search component that combines a search field, filter chip, and action button into a single cohesive interface.

## How is it used?

```html
<form class="csb-tool" role="search">
  <span class="csb-tool-chip">All</span>

  <input
    type="search"
    placeholder="Search..."
  />

  <button
    type="button"
    class="csb-tool-action"
    aria-label="Filters"
  >
    ...
  </button>
</form>
```

## Why is it useful?

This component offers a modern search experience commonly used in dashboards, documentation portals, analytics interfaces, SaaS applications, and admin panels. It keeps search controls compact while allowing room for filters, categories, and quick actions. The structure is reusable, accessible, and aligns with EaseMotion CSS's philosophy of creating readable and composable UI patterns.
