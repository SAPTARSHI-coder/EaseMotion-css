# Ease 3D Flip Tabs

## Description
A pure CSS tabbed interface with a genuine 3D flip transition (`rotateY`, not a fade or slide) between panels, styled for a fintech dashboard aesthetic — clean whites, teal accent, and financial data layouts (balance, transactions, portfolio). Driven entirely by radio inputs — zero JavaScript.

## Features
- Real 3D flip transition using `rotateY()` + `perspective` + `backface-visibility`
- Active tab pill highlight with teal accent and shadow
- Financial data presentation patterns: balance summary, transaction list, portfolio breakdown
- Fully keyboard accessible (native radio inputs, `role="tablist"`/`"tab"`/`"tabpanel"`)
- Responsive (panel value text scales down on small screens)
- Fully customizable via CSS custom properties
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-tabs-flip" role="tablist" aria-label="Account dashboard">
  <input type="radio" name="fin-tab" id="ftab1" class="tab-input" checked />
  <input type="radio" name="fin-tab" id="ftab2" class="tab-input" />

  <div class="tab-list">
    <label for="ftab1" class="tab-label" role="tab">Balance</label>
    <label for="ftab2" class="tab-label" role="tab">Transactions</label>
  </div>

  <div class="tab-panels">
    <div class="tab-panel panel-1" role="tabpanel">...</div>
    <div class="tab-panel panel-2" role="tabpanel">...</div>
  </div>
</div>
```
Each `.tab-panel` needs a unique class (`panel-1`, `panel-2`, ...) matched to its radio's `id` in the CSS rule `#ftabN:checked ~ .tab-panels .panel-N`.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--flip-duration` | `0.7s` | 3D flip transition duration |
| `--flip-easing` | `cubic-bezier(0.65, 0, 0.35, 1)` | Flip timing function |
| `--accent` | `#0d9488` | Active tab / accent color |
| `--panel-bg` | `#ffffff` | Panel background |
| `--radius` | `16px` | Panel corner rounding |

## Files
- `demo.html` — live working example (Balance, Transactions, Investments tabs)
- `style.css` — component styles and 3D flip transition
- `README.md` — this file