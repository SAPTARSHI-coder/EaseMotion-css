# CSS Timeline Table

A complex scheduling timeline grid built entirely with CSS Grid. Events are positioned seamlessly across the timeline axis using `grid-column` spanning, avoiding the need for absolute positioning calculations via JavaScript.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Grid Definition**: The `.timeline-row` is defined as a 9-column CSS Grid: `grid-template-columns: 120px repeat(8, 1fr)`. Column 1 is reserved for the Resource Label (e.g., "Studio A"). Columns 2-9 represent the 8 hours of the schedule (9:00 AM to 4:00 PM).
  - **CSS Variable Positioning**: To place an event block on the schedule without writing hundreds of unique CSS classes, we pass the data to CSS via inline custom properties: `<div class="event" style="--start: 2; --span: 3;">`.
  - **The Magic Rule**: The `.event` class uses a single CSS rule: `grid-column: var(--start) / span var(--span);`. This tells the browser exactly where to start drawing the block and how many hour columns it should span. For example, `--start: 2; --span: 2` will begin the event at 9:00 AM (Column 2) and span 2 hours, ending exactly at 11:00 AM.
  - **Z-Index Layering**: Background dashed `.grid-line` elements are placed in the same grid row as the `.event` blocks. By utilizing `z-index`, the events effortlessly float above the background grid.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the timeline surface, grid lines, and text colors.
- Fully accessible semantic structure. The container uses `role="region"` and `aria-label` to provide context. The timeline itself handles horizontal scrolling natively (`overflow-x: auto`), remaining completely usable on mobile screens without breaking the grid proportions. The resource labels and time headers use `position: sticky` so they remain visible while scrolling.

## Usage
Open `demo.html` in your browser. Resize the window to test the horizontal scrolling behavior.

## Files
- `demo.html`: The HTML structure defining the 9-column grid layout and passing position data via inline `--start` and `--span` variables.
- `style.css`: The styling, the CSS Grid definitions, and the variable-driven `grid-column` spanning logic.
