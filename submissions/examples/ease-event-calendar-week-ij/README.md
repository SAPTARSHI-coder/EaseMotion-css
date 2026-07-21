# Event Calendar Week

Interactive weekly calendar with day-selection and animated event reveal.

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--calendar-bg` | `#1a1a2e` | Card background |
| `--day-hover-bg` | `rgba(233,69,96,0.15)` | Day cell hover tint |
| `--selected-color` | `#e94560` | Active day / event accent |
| `--select-duration` | `0.3s` | Selection and event reveal transition |

## Interaction

- Click a day cell to select it
- Events for the selected day slide into view with a height transition
- An empty-state message appears when a day has no events

## Preview

A dark card showing 7 day cells in a grid. Selecting a day highlights it and reveals matching events below.
