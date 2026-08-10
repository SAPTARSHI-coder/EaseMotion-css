# Metric Card Flip

A CSS-only analytics card that flips from a headline metric to a compact breakdown on hover or keyboard focus. It is useful for dashboards, KPI reports, billing summaries, and admin panels.

## Files

- `demo.html` contains the metric card markup.
- `style.css` contains the responsive layout, flip transform, and supporting animations.

## Animation details

- `card-settle` introduces the card on load.
- `metric-glow` highlights the positive change badge.
- The hover/focus transform rotates the card face with a 3D perspective effect.
- `bar-fill` animates the breakdown bars on the reverse side.

## Usage

Hover the metric card or focus it with the keyboard to reveal the detailed KPI breakdown.
