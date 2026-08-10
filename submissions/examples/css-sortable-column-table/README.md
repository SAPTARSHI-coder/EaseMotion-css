# CSS Sortable Column Table

A responsive, accessible table component with CSS-only sortable column indicators and active sorting states.

## Features

- Pure CSS styling with no JavaScript dependency
- Sort indicators for table columns
- Active column and sort direction states
- Responsive design
- Light and dark mode support
- CSS custom properties for easy theming
- Keyboard-friendly column controls
- Hover and focus animations

## Usage

Add the following structure to your HTML:

```html
<table class="sortable-table">
  <thead>
    <tr>
      <th>
        <button class="sort-button sort-active" type="button" aria-label="Sort by name">
          Name
          <span class="sort-icon" aria-hidden="true">▲</span>
        </button>
      </th>

      <th>
        <button class="sort-button" type="button" aria-label="Sort by role">
          Role
          <span class="sort-icon" aria-hidden="true">↕</span>
        </button>
      </th>

      <th>
        <button class="sort-button" type="button" aria-label="Sort by status">
          Status
          <span class="sort-icon" aria-hidden="true">↕</span>
        </button>
      </th>
    </tr>
  </thead>
</table>