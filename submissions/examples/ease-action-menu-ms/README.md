# Ease Action Menu

Adds a compact contextual action menu for grouping related actions inside cards, tables, dashboards, and content management interfaces.

## How to Use

Place the action menu beside the item that owns the actions:

```html
<details class="action-menu">
  <summary class="action-menu-trigger">Actions</summary>
  <div class="action-menu-panel">
    <button class="action-item" type="button">
      <span class="action-icon">V</span>
      View details
    </button>
    <button class="action-item" type="button">
      <span class="action-icon">E</span>
      Edit record
    </button>
  </div>
</details>
```

## Why It Is Useful

EaseMotion CSS favors readable, dependency-free UI patterns. This menu uses semantic HTML, CSS-only disclosure behavior, icon slots, hover states, and responsive positioning, making it easy to reuse wherever several contextual actions need to stay compact.
