# CSS Pulse-Active Accordion (Responsive Dashboard)

A data-dense accordion designed for Responsive Dashboard layouts. Features inline metric cards inside each accordion section, responsive CSS Grid breakpoints, and a subtle status-indicator pulse on active panels that mimics a live data heartbeat.

## Features
- **Heartbeat Pulse:** The open item pulses with a thin left-border heartbeat animation — like a live data feed indicator.
- **Inline Metric Grid:** Content sections use CSS Grid to display KPI cards that reflow from 3-column on desktop to 1-column on mobile.
- **Responsive Breakpoints:** Full layout adapts at 768px and 480px with adjusted padding, font sizes, and grid columns.
- **Status Dot Indicators:** Headers include colored status dots (green/amber/red) to convey system health at a glance.
- **Pure CSS:** No JS needed. Built on `<details>`/`<summary>`.

## Usage
Wrap items in `.dash-accordion`. Each `<details>` gets `.dash-item`, each `<summary>` gets `.dash-header`. Use `.dash-metric-grid` inside content for KPI layouts.

## Files
- `demo.html`: A dashboard monitoring view with live-style metric cards.
- `style.css`: Heartbeat pulse, responsive grid, status dots, and mobile breakpoints.
