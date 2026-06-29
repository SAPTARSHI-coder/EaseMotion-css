# Stepper Component — Issue #30306

A CSS-only stepper/progress indicator for multi-step workflows.

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-stepper` | Horizontal stepper container (`<ol>`) |
| `.ease-stepper-vertical` | Vertical layout modifier |
| `.ease-step` | Individual step item |
| `.ease-step-indicator` | Circular step number/icon |
| `.ease-step-number` | Step number inside indicator |
| `.ease-step-indicator-icon` | Checkmark icon (shown on complete) |
| `.ease-step-label` | Step description |
| `.ease-step-connector` | Line connecting steps |
| `.is-active` | Current active step |
| `.is-complete` | Completed step |
| `.ease-stepper-clickable` | Enables hover scale on steps |
| `.ease-stepper-sm` | Small size |
| `.eastepper-lg` | Large size (note: `.ease-stepper-lg`) |

## CSS Variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `--ease-step-size` | 2.5rem | Indicator diameter |
| `--ease-step-color` | gray-300 | Inactive color |
| `--ease-step-active-color` | blue-500 | Active indicator |
| `--ease-step-complete-color` | green-500 | Complete indicator |
| `--ease-step-connector-thickness` | 2px | Connector line width |
