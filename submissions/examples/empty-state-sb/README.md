# Empty State Component

## What does this do?

Adds a self-contained empty state demo for zero results, blank dashboards, and filtered lists with an icon, heading, description, and action buttons.

## How is it used?

```html
<div class="empty-state">
  <div class="empty-icon" aria-hidden="true">✦</div>
  <h2>No projects yet</h2>
  <p>Create your first workspace to start tracking work.</p>
  <div class="empty-actions">
    <a class="primary-action" href="#create">Create project</a>
    <a class="secondary-action" href="#templates">Browse templates</a>
  </div>
</div>
```

## Why is it useful?

Empty states prevent blank screens from feeling broken and help users recover quickly with clear guidance and a next action.
