# Loading Shimmer Table

Table skeleton with shimmer animation that transitions to real data on toggle.

## Features

- Shimmer skeleton rows with a sweep gradient animation
- Staggered animation delay across rows
- Columns of varying widths for natural appearance
- Toggle button to reveal real data with fade-in transition
- No external dependencies

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--lst-duration` | 0.4s | Data fade-in duration |
| `--lst-shimmer-base` | #1e293b | Shimmer bar base color |
| `--lst-shimmer-highlight` | #334155 | Shimmer sweep highlight color |
| `--lst-header-bg` | #0f172a | Table header background |
| `--lst-cell-color` | #e2e8f0 | Data cell text color |
| `--lst-radius` | 8px | Border radius |

## Usage

Include `style.css` and `demo.html`. The skeleton rows use `.lst-shimmer-row` with `.lst-shimmer-cell` children. Real data rows use `.lst-data-row`. Toggling `.lst-hidden`/`.lst-visible` on the data container controls the reveal.
