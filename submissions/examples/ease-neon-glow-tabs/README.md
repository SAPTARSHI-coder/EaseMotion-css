# Ease Neon Glow Tabs

## Description
A pure CSS pill-tab interface styled for marketing landing pages — active tabs light up with a continuously hue-shifting neon glow (pink → cyan → violet), and switching tabs fades/scales the panel content in. Ideal for pricing plan showcases. Driven entirely by radio inputs — zero JavaScript.

## Features
- Neon glow ring that fades in behind the active tab, with a continuous animated hue-shift
- Fade + scale panel transition on tab switch
- Pricing-card style panel content (badge, gradient price text, feature checklist)
- Fully keyboard accessible (native radio inputs, `role="tablist"`/`"tab"`/`"tabpanel"`)
- Responsive (tab pills wrap on narrow screens)
- Fully customizable via CSS custom properties
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-tabs-neon-glow" role="tablist" aria-label="Pricing plans">
  <input type="radio" name="glow-tab" id="gtab1" class="tab-input" checked />
  <input type="radio" name="glow-tab" id="gtab2" class="tab-input" />

  <div class="tab-list">
    <label for="gtab1" class="tab-label" role="tab">Starter</label>
    <label for="gtab2" class="tab-label" role="tab">Growth</label>
  </div>

  <div class="tab-panels">
    <div class="tab-panel panel-1" role="tabpanel">
      <div class="panel-inner">...</div>
    </div>
    <div class="tab-panel panel-2" role="tabpanel">
      <div class="panel-inner">...</div>
    </div>
  </div>
</div>
```
Each `.tab-panel` needs a unique class (`panel-1`, `panel-2`, ...) matched to its radio's `id` in the CSS rule `#gtabN:checked ~ .tab-panels .panel-N`.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--tabs-duration` | `0.5s` | Panel transition duration |
| `--tabs-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Timing function |
| `--neon-a` | `#ff2ea6` | Neon gradient color 1 (pink) |
| `--neon-b` | `#00e5ff` | Neon gradient color 2 (cyan) |
| `--neon-c` | `#7c3aed` | Neon gradient color 3 (violet) |
| `--tabs-radius` | `20px` | Outer container corner rounding |

## Files
- `demo.html` — live working example (3-tier pricing tab example)
- `style.css` — component styles and all animations
- `README.md` — this file