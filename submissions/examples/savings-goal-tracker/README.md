# Savings Goal Tracker

An interactive savings goal tracker that displays progress toward multiple savings goals with animated progress bars, projected completion dates, and contribution tracking.

## Features

- **Multiple goals** — add and manage unlimited savings goals
- **Animated progress bars** — colour-coded per goal with smooth transitions
- **Projected completion date** — calculated from monthly contribution amount
- **Contribution input** — add funds to any goal instantly
- **Summary dashboard** — total saved, total target, and combined monthly budget
- **Persistent storage** — goals saved to localStorage, survive page refresh
- **Completion state** — goals turn green with a badge when fully funded
- **Delete goals** — remove any goal with one click
- **Custom colours** — pick a colour for each goal's progress bar
- **Pre-loaded examples** — three sample goals on first load

## Styling

All visual properties use `--ease-*` design tokens:

| Token | Purpose |
|-------|---------|
| `--ease-color-primary` | Default progress bar, summary values |
| `--ease-color-success` | Completed goal state, contribute button |
| `--ease-color-danger` | Delete button hover |
| `--ease-radius-lg` | Card border radius |
| `--ease-space-*` | All spacing and gaps |
| `--ease-text-*` | Typography scale |

## Usage

```html
<link rel="stylesheet" href="easemotion.css" />
<link rel="stylesheet" href="savings-goal-tracker/style.css" />

<div class="ease-savings">
  <!-- See demo.html for full markup and JS -->
</div>
```

Closes #11327
