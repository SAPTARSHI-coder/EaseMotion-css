# Fountain Pen Ink

A fountain pen descends onto a page, traces a line as it levels out, and lets a drop of ink fall at the end.

## How is it used?

The pen drops in with a combined `translateY` and `rotate` keyframe, the line grows from its left edge with `scaleX`, and the ink drop falls with a small delay:

```css
.ink-line {
  transform-origin: 0 50%;
  transform: scaleX(0);
}
.ink-line.draw {
  animation: line-in 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
```

The click handler re-triggers all three animations by removing the classes, forcing a reflow, then re-adding them — a standard restart pattern.

## Why is it useful?

Coordinating three animations (an element arrival, a draw, and a droplet) off one button shows how to choreograph motion across unrelated elements with matching durations. The `scaleX` line-draw and `clip-path` nib are both reusable, and the restart pattern applies to any "play again" interaction.
