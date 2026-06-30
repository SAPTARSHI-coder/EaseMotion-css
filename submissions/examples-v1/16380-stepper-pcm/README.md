# Step Progress / Multi-Step Form Navigation

## What does this submission do?

Adds a fully-featured **Step Progress** (stepper) component for multi-step forms, checkout flows, onboarding wizards, and setup processes. Includes both **horizontal** and **vertical** layouts with visual connectors between steps and 5 distinct step states.

## How was it implemented?

- **CSS** (`style.css`): Defines the `.stepper` component with CSS custom properties for theming (`--step-size`, `--color-primary`, `--color-completed`, etc.). Supports two layout modes: `.stepper-horizontal` (flex row, connectors as horizontal bars) and `.stepper-vertical` (flex column, connectors as vertical lines with step body content on the right). Step states are styled via modifier classes: `.step-active` (highlighted with pulse glow), `.step-completed` (green with checkmark), `.step-error` (red with error ring), and `.step-disabled` (dimmed, no pointer events). Connectors use `.connector-completed` (solid colored) and `.connector-dashed` (dashed for pending steps). Includes `stepPopIn`, `connectorGrow`, and `pulseGlow` keyframe animations for smooth transitions.
- **HTML/JS** (`demo.html`): Renders 4 demonstration sections: (1) interactive horizontal stepper with Next/Previous navigation and progress bar, (2) interactive vertical stepper, (3) static showcase of all 5 step states (Completed, Active, Pending, Error, Disabled), (4) connector variant comparison (solid, completed, default, dashed), and (5) realistic checkout flow demo (Cart → Shipping → Payment → Confirmation → Complete). The `Stepper` JS class manages step state — completed (previous), active (current), pending (future) — and updates connectors, progress bar percentage, and description text accordingly. A layout toggle switches between horizontal and vertical views.

## Why these choices?

- **Horizontal + Vertical layouts** cover the two most common stepper use cases: horizontal for wizard-style forms with limited steps, vertical for detailed checkout flows with descriptions.
- **5 step states** (pending, active, completed, error, disabled) match the issue specification exactly and cover every real-world stepper interaction.
- **CSS custom properties** make the component themeable without modifying core styles — users can override `--color-primary` etc. to match their brand.
- **Animated transitions** (pop-in for active step, connector growth, pulse glow) provide visual feedback without being distracting, respecting `prefers-reduced-motion` through the CSS `transition` properties.
- **Progress bar** gives an at-a-glance completion indicator alongside the stepper.

## Files

| File        | Purpose                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------- |
| `demo.html` | Interactive stepper demo with horizontal/vertical layouts, nav controls, checkout example |
| `style.css` | Stepper styles: layouts, states, connectors, animations                                   |
| `README.md` | This documentation                                                                        |
