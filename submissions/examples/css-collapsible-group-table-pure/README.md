# CSS Collapsible Group Table

A pure CSS implementation of a table with collapsible row groups, achieved using the hidden checkbox hack and sibling selectors. Zero JavaScript required.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **Table Structure**: Standard HTML `<details>` elements cannot be used directly inside `<tbody>` tags without breaking the strict HTML table specification. To maintain a true, accessible table structure, this component utilizes multiple `<tbody>` tags within a single `<table>`. One `<tbody>` acts as the category header, and the adjacent `<tbody>` contains the data rows for that category.
  - **The Checkbox Hack**: To handle the toggle state without JS, we use hidden `<input type="checkbox">` elements.
  - **The Sibling Selector Logic**: Because standard CSS cannot traverse "up" the DOM tree (e.g., from a checkbox inside a cell up to the row group), the checkboxes *must* be placed before the `<table>` in the DOM as siblings. We then use the general sibling combinator (`~`) to link the checkbox state to the visibility of specific `<tbody>` elements (e.g., `#group1:not(:checked) ~ .data-table .group1-content { display: none; }`).
  - **Label Binding**: Inside the category header `<tbody>`, we place `<label>` elements linked to the hidden checkboxes via the `for` attribute. Clicking the row toggles the hidden checkbox sibling outside the table, which in turn hides/shows the adjacent content `<tbody>`.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a deep slate dark mode aesthetic for the table layout and custom status badges.
- Fully accessible semantic structure. The table uses proper `<thead>`, `<th>`, `<tbody>`, and `<tr>` nesting, ensuring screen readers can correctly parse the tabular data grid. The hidden checkboxes use `aria-hidden="true"` as the state is visually represented by the collapsible row layout.

## Usage
Open `demo.html` in your browser. Click on the category header rows (e.g., "UI Components", "Animations") to collapse and expand the associated data rows beneath them.

## Files
- `demo.html`: The HTML structure defining the sibling checkboxes, the multiple `<tbody>` tags, and the `label` triggers.
- `style.css`: The styling, custom badge colors, and the critical `~` descendant selector logic that drives the state changes.
