# Milestone Timeline — Dot Progress Fill

**Component:** milestone-timeline  
**Issue:** [#36817](https://github.com/EaseMotion-css/EaseMotion-css/issues/36817)

A vertical timeline card showing project milestones. Each dot uses a conic-gradient fill driven by the `--fill` custom property (0–1) to indicate completion.

## CSS Variables

| Variable           | Default   | Description                   |
|--------------------|-----------|-------------------------------|
| `--timeline-color` | `#333`    | Connecting line colour        |
| `--dot-color`      | `#2a2a4e` | Unfilled dot background       |
| `--fill-color`     | `#7c3aed` | Progress fill colour          |
| `--fill-duration`  | `0.8s`    | Transition time for fill      |

## Behaviour

- Dots render a circular progress fill using `conic-gradient` and the `--fill` property (0 = empty, 1 = full).
- The **active** milestone’s label adopts the fill colour.
- A vertical line connects all dots.
- Responsive layout within the card.
