# Sleep Tracker

An interactive nightly sleep tracker with weekly bar chart, quality ratings, insights, and persistent localStorage state.

## Features

- **Last night hero panel** — duration, bedtime/wake time, quality stars on dark indigo background
- **Weekly bar chart** — 7-day history with colour coding: green = goal met, red = under 6h, amber = today
- **Goal line** — dashed line at 8h goal for visual reference
- **Quality star rating** — 1-5 stars with hover animation
- **Insights panel** — total nights logged, goal achievement %, average quality
- **Sleep log form** — date, bedtime, wake time, quality, optional notes
- **History table** — all entries sorted by date with delete button
- **Pre-loaded sample data** — 6 sample nights on first run
- **Persistent storage** — entries saved to localStorage

## Styling

All visual properties use `--ease-*` design tokens plus a custom indigo palette for the sleep theme:

| Token | Purpose |
|-------|---------|
| `--ease-color-success` | Goal-met bars (≥8h) |
| `--ease-color-danger` | Under-sleep bars (<6h) |
| `--ease-color-warning` | Today bar |
| `--ease-radius-lg` | Card border radius |
| `--ease-space-*` | All spacing and gaps |

## Usage

```html
<link rel="stylesheet" href="easemotion.css" />
<link rel="stylesheet" href="sleep-tracker/style.css" />

<div class="ease-sleep">
  <!-- See demo.html for full markup and JS -->
</div>
```

Closes #11331
