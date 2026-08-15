# EaseMotion: Fade Tooltip with Caret

A directional tooltip that fades + slides into view with a pointer caret; triggered by hover or keyboard focus on a sibling target.

## How is it used?
Place a `.tooltip` immediately after its target and link them with `aria-describedby`:
```html
<button class="tip-target" aria-describedby="t1">Top</button>
<span class="tooltip top" id="t1" role="tooltip">Saves to your workspace</span>
```
Directions: `.top`, `.right`, `.bottom`.

## Why is it useful?
Pure-CSS reveal via sibling combinator keeps it dependency-free, keyboard-focusable, and screen-reader friendly (`role=tooltip`). The caret is a rotated border so it inherits the tooltip background automatically.

## Tailoring Variable Hooks

| Variable | Baseline | Purpose |
| :--- | :--- | :--- |
| `--dur` | `.22s` | Fade + slide duration |
| `--tip-bg` | `#1e293b` | Tooltip + caret background |


---
_Self-contained, dependency-free HTML + CSS. Open `demo.html` directly in a browser._
