# CSS Follower Count Badge

An animated metric badge featuring a live pulse indicator, commonly used to display real-time audience or active user counts. Built entirely without JavaScript.

## Features
- Pure CSS and HTML implementation.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI where the badge background and border adjust to match dark surface panels.
- **Component Architecture (Documented in Code)**: 
  - **The Pill Layout**: A simple flex container with `border-radius: 30px` creates the pill shape, providing a clean frame for the metric.
  - **The Live Pulse (`.status-ping`)**: The core animation logic relies on a secondary `<span>` positioned absolutely beneath a solid core indicator dot. An infinite `@keyframes` animation (`livePulse`) scales this secondary ring up (`transform: scale(3.5)`) while simultaneously fading it out (`opacity: 0`). The use of a slow `cubic-bezier` creates a calm, rhythmic "heartbeat" effect rather than an urgent flashing.
- Fully accessible semantic structure. The badge utilizes `role="status"` to inform screen readers of its purpose as a live metric, along with an explicit `aria-label` providing the full context ("10,248 active followers"). The purely visual pulse indicator is hidden via `aria-hidden="true"` to prevent screen readers from attempting to parse empty decorative `<span>` tags. Honors the `prefers-reduced-motion` accessibility standard by disabling the pulse animation entirely for motion-sensitive users, reverting to a solid, static indicator dot.

## Usage
Open `demo.html` in your browser to view the pill-shaped layout and the continuous live pulse animation.

## Files
- `demo.html`: The HTML structure demonstrating the layout of the indicator dot and the metric typography.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `@keyframes` pulse logic.
