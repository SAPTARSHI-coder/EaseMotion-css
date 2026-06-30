# Calorie Counter

An interactive daily calorie and macronutrient tracker with food search, meal logging, animated progress rings, and persistent localStorage state.

## Features

- **Daily calorie goal** — progress bar shows consumed vs goal, turns red when over
- **Macro rings** — animated SVG progress rings for protein, carbs, and fat
- **Food database** — 20 common foods with calorie and macro data
- **Food search** — live search with clickable results
- **Serving size** — configurable serving quantity per entry
- **Meal grouping** — log food to Breakfast, Lunch, Dinner, or Snacks
- **Meal log** — grouped by meal with per-meal and per-item calorie counts
- **Delete entries** — remove any logged item
- **Customisable goals** — adjust daily targets for calories and all macros
- **Persistent state** — log and goals saved to localStorage

## Styling

All visual properties use `--ease-*` design tokens:

| Token                  | Purpose                                          |
| ---------------------- | ------------------------------------------------ |
| `--ease-color-primary` | Goal panel gradient, protein ring, food calories |
| `--ease-color-warning` | Carbs ring                                       |
| `--ease-color-danger`  | Fat ring, over-limit bar                         |
| `--ease-radius-lg`     | Card border radius                               |
| `--ease-space-*`       | All spacing and gaps                             |

## Usage

```html
<link rel="stylesheet" href="easemotion.css" />
<link rel="stylesheet" href="calorie-counter/style.css" />

<div class="ease-cal">
  <!-- See demo.html for full markup and JS -->
</div>
```

Closes #11330
