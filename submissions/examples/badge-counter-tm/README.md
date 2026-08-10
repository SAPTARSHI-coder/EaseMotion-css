# Badge — Counter Auto-Formatting

## What does this do?
Adds `.ease-badge-counter` — a badge that auto-formats large
numbers to compact form (e.g. `9999+`, `1.2K`, `15K`) via
`data-count` attribute and CSS `content`.

## How is it used?
Apply the modifier and set the count:

    <span class="ease-badge ease-badge-counter" data-count="12500">12500</span>
    <span class="ease-badge ease-badge-counter" data-count="999">999</span>

## Why is it useful?
Count badges (notification counts, message counts) often overflow
when the count is large. Compact formats (1.2K, 15K, 999+) keep
the badge readable.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` to see various counts formatted.

## Contribution Notes
- Pure CSS using `attr()` and `content`
- Capped at 9999+ (configurable via `--ease-badge-counter-cap`)
