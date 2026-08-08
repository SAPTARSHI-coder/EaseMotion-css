# CSS Zoom-In Tabs (Minimalist Tech)

A pure CSS interactive tabs component designed for Minimalist Tech Layouts. It features a bold "Zoom-In" transition on the content panels, expanding them outwards from the center into sharp focus.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- **State Management**: The active tab and corresponding panel are managed entirely via the hidden radio button hack (`input[type="radio"]:checked`).
- **The Zoom-In Transition**: 
- By default, `.tab-panel` elements are hidden: `opacity: 0` and scaled down aggressively (`transform: scale(0.85)`).
- When a tab is activated (its associated radio button is `:checked`), the corresponding panel transitions to full opacity and scales up to its native size (`transform: scale(1)`).
- We utilize a custom `cubic-bezier(0.25, 0.46, 0.45, 0.94)` transition curve. This creates a smooth, controlled expansion that feels fast but avoids unnatural bouncing.
- **Tab Indicators**: Each tab label contains a `.tab-indicator` circle. When a tab becomes active, its indicator animates into the accent color, adds a subtle box-shadow glow, and scales up slightly (`scale(1.2)`) to draw the eye.
- Clean, structured aesthetic utilizing the `Inter` font, subtle rounded borders, and heavily stylized mock data layouts (Kanban boards, task lists, and file grids) that demonstrate how the transition behaves with complex internal layouts.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the aggressive zooming/scaling transitions (on both the panels and the tab indicators) are completely disabled. The interactions safely fall back to an immediate opacity cross-fade.

## Usage
Open `demo.html` in your browser. You will see a mock project dashboard. Click between the "Kanban Board", "Task List", and "Shared Files" tabs. Watch as the active tab indicator illuminates, and the new data panel rapidly scales up and fades into view from the center of the container.

## Files
- `demo.html`: The HTML structure for the layout, detailing the critical placement of the hidden `<input type="radio">` elements and the complex mock data components required for the showcase.
- `style.css`: The styling, radio-state logic, and the `scale()` transitions driving the zoom-in mechanics.
