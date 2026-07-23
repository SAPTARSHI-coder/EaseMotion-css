# Salary Calculator

An interactive salary calculator that breaks down annual gross salary into monthly, bi-weekly, and weekly amounts with US federal tax bracket calculation, state tax, FICA estimation, and a visual take-home pay breakdown.

## Features

- **Salary breakdown** — Annual, monthly, bi-weekly, and weekly gross and net amounts
- **US federal tax brackets** — 2024 brackets for Single, Married Filing Jointly, and Head of Household
- **Standard deduction** applied before federal tax calculation
- **State tax** — Selectable rates from 0% to 13.3% (California)
- **FICA** — Social Security + Medicare employee share (7.65%)
- **Visual tax bar** — Colour-coded breakdown of take-home vs each tax type
- **Effective tax rate** displayed in legend
- **Live updates** — Recalculates instantly on every input change

## Styling

All visual properties use `--ease-*` design tokens:

| Token used | Purpose |
|------------|---------|
| `--ease-color-primary` | Federal tax segment, input focus |
| `--ease-color-success` | Take-home pay segment |
| `--ease-color-warning` | State tax segment |
| `--ease-color-danger` | FICA segment |
| `--ease-radius-lg` | Card and input border radius |
| `--ease-space-*` | All spacing and gaps |
| `--ease-text-*` | Typography scale |

## Usage

```html
<link rel="stylesheet" href="easemotion.css" />
<link rel="stylesheet" href="salary-calculator/style.css" />

<div class="ease-salary-calc">
  <!-- See demo.html for full markup -->
</div>
```

## Disclaimer

Tax calculations are estimates based on 2024 US federal brackets and simplified state tax rates. Not financial advice — consult a tax professional for accurate figures.

Closes #11325
