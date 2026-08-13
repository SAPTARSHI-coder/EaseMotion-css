# CSS Expandable Row Table

A responsive data table component that features smoothly animated expandable detail rows, built entirely using modern CSS features and zero JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or height animations).
- **Clean Tech Aesthetic**: Utilizes `Inter` for UI text and `JetBrains Mono` for tabular financial data. Features clear status badges and subtle hover states.
- **Pure CSS State Management (The `:has()` Hack)**: 
- Expanding table rows without JavaScript has historically been very difficult because standard CSS sibling selectors (`~`) cannot easily jump across `<tr>` boundaries from an `<input>` nested deeply inside a `<td>`.
- This component utilizes the modern CSS `:has()` pseudo-class on the parent `<tbody>`.
- It checks if a specific row's hidden checkbox is checked (e.g., `tbody:has(#row-1:checked)`) and then targets the immediately following detail row (`tr:nth-child(2)`) to trigger the expansion.
- The entire main row's `<td>` labels are clickable, maximizing the hit area for the user.
- **Smooth Height Animation (CSS Grid Trick)**: 
- Animating `height: auto` in CSS is notoriously difficult.
- This component uses a modern CSS Grid trick on the `.detail-content-wrapper` inside the detail row.
- The wrapper transitions its `grid-template-rows` from `0fr` (collapsed) to `1fr` (expanded). Because the inner `.detail-content` has `overflow: hidden`, the browser smoothly interpolates the exact pixel height needed to reveal the hidden content.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the grid height transition and the chevron rotation animations are completely disabled, resulting in an instant snap open/closed.

## Usage
Open `demo.html` in your browser. You will see an Orders data table. Click anywhere on a main row (or directly on the chevron arrow) to smoothly expand the hidden detail row underneath, revealing shipping addresses and order actions. Click again to collapse it.

## Files
- `demo.html`: The HTML structure for the table, detailing the `<tr>` pairing (one for main data, one for details) and the hidden `<input type="checkbox">` elements.
- `style.css`: The styling, status badge design tokens, the `:has()` pseudo-class logic for cross-row state targeting, and the CSS Grid `0fr` to `1fr` height animation trick.
