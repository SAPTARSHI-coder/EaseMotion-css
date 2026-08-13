# CSS Leaderboard Table

A pure CSS ranked leaderboard table utilizing advanced CSS pseudo-selectors to automatically apply Gold, Silver, and Bronze medal styling to the top rows, built without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript logic required to calculate or style the top ranks).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), providing a sleek dark mode variant with glowing medal badges.
- **Component Architecture (Documented in Code)**: 
  - **Auto-Medal Styling**: We do not manually apply `.is-gold`, `.is-silver`, or `.is-bronze` classes to the HTML rows. Instead, we use the `tbody tr:nth-child(n)` selector in CSS.
  - When the browser renders the table, CSS automatically detects the 1st, 2nd, and 3rd `<tr>` elements inside the `<tbody>` and dynamically overrides their `.rank-badge` variables with the appropriate gold, silver, or bronze theme colors, scale transforms, and box-shadow glows.
  - The Gold row (`:nth-child(1)`) receives additional layout flair, including a subtle row background tint, colored score text, and an avatar border ring.
- Fully accessible semantic `<table>` structure utilizing `<thead>`, `<tbody>`, `<th>`, and `<td>` elements with proper `scope` attributes for screen readers.

## Usage
Open `demo.html` in your browser. Notice how the top 3 rows are automatically styled as Gold, Silver, and Bronze without any specific HTML classes on those rows.

## Files
- `demo.html`: The HTML structure containing the semantic table and dummy player data.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `:nth-child` auto-medal logic.
