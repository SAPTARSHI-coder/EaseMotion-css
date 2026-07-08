# Investment Return Calculator

An interactive compound interest calculator with monthly contributions, inflation adjustment, visual bar chart, and year-by-year breakdown table.

## Features

- **Compound interest** — accurate FV formula with configurable compounding frequency
- **Monthly contributions** — added to principal each period
- **Annual return rate** — slider from 1% to 30%
- **Investment period** — slider from 1 to 40 years
- **Compounding frequency** — monthly, quarterly, semi-annual, or annual
- **Inflation adjustment** — shows real purchasing power of final balance
- **Visual bar chart** — stacked bars showing principal, contributions, and interest per year
- **Year-by-year table** — balance, contributions, interest, and total gain at key milestones
- **ROI percentage** — return on invested capital displayed in results

## Styling

All visual properties use `--ease-*` design tokens:

| Token | Purpose |
|-------|---------|
| `--ease-color-primary` | Interest bars, result card gradient, table highlight |
| `--ease-color-primary-light` | Contribution bars |
| `--ease-color-success` | Gain values in table |
| `--ease-color-neutral-300` | Principal bars |
| `--ease-radius-lg` | Panel and card border radius |
| `--ease-space-*` | All spacing and gaps |

## Usage

```html
<link rel="stylesheet" href="easemotion.css" />
<link rel="stylesheet" href="investment-return-calculator/style.css" />

<div class="ease-invest">
  <!-- See demo.html for full markup and JS -->
</div>
```

Closes #11328
