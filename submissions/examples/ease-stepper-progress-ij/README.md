# Stepper Progress

Multi-step progress indicator with animated step transitions and connector lines.

## Features

- Numbered steps with active, complete, and inactive states
- Connector lines that fill with width animation between steps
- Current step pulses with a glow effect
- Next/Back navigation controls with disabled state handling

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--sp-duration` | `0.4s` | Transition speed |
| `--sp-active-color` | `#6366f1` | Current step color |
| `--sp-inactive-color` | `#334155` | Inactive step color |
| `--sp-complete-color` | `#22c55e` | Completed step color |
| `--sp-radius` | `50%` | Step circle border radius |
| `--sp-size` | `44px` | Step circle diameter |