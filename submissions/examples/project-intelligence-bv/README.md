# Project Intelligence Workspace

## What does this do?

The Project Intelligence Workspace is a next-generation team orchestration and sprint planning console. It features portfolio selectors, active sprint Kanban columns, task details inspectors, workload balancing charts that alert on resource bottlenecks, milestones timelines, team collaboration chats, and project burn-down trackers.

## How is it used?

Open `demo.html` directly in any modern browser:

- **Switch Modules**: Use the sidebar links to pivot views between Project Overview, Kanban Task board, and Workload Balancer.
- **Vary Portfolios**: Click cards in the Project Portfolio panel to instantly load Project Alpha or Beta's respective sprint data, team allocations, and chats.
- **Kanban Tasks**: Click Kanban cards to load task specifications. Change the task status in the dropdown to dynamically move the card between columns, logs details, and adjust the assignee's workload metrics.
- **Workload Balancer**: Check the workload status gauges. If an engineer is assigned too many tasks, the warning indicator turns red. Resolving tasks reduces their load, resetting the indicator to a safe green status.
- **Tweak Targets**: Shift the Target Velocity slider to dynamically adjust target limits, deficits, and burn-down progress bar fills.
- **Run Forecasts**: Click "Refresh Forecast" to sweep the laser down the productivity chart and re-allocate bar heights.

## Why is it useful?

Managing developer velocities, balancing workload caps to avoid team burnout, and presenting milestones projections to executives requires consolidated, real-time dashboard environments.

This workspace solves project management workflows by:

1. Displaying task details and workload indicators side-by-side using responsive layout columns.
2. Integrating a responsive workload balancer that triggers warning beacons and alerts dynamically.
3. Incorporating interactive viewpoint controls to pivot information maps from developer kanban boards to executive velocity charts.

## Tech Stack

- HTML5
- CSS3 (chart bar height scales, laser sweeps, pulsing beacons, progress bar fills, layout grids)
- JavaScript (portfolio database selector, kanban status updates, workload balancer calculations, chat poster logs)

## Preview

Open [demo.html](file:///submissions/examples/project-intelligence-bv/demo.html) directly in your browser.
