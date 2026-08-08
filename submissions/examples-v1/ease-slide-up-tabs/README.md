# Ease Slide-Up Tabs

## Description
A pure CSS tabbed interface styled for dashboard/analytics layouts. Switching tabs slides the new panel up into view with a smooth fade, and each panel's mini bar chart animates in with staggered bars. Driven entirely by radio inputs — zero JavaScript.

## Features
- Slide-up + fade panel transition on tab switch
- Staggered animated mini bar chart per panel
- Active tab has a highlighted pill background with glow shadow
- Fully keyboard accessible (native radio inputs, `role="tablist"`/`"tab"`/`"tabpanel"`)
- Responsive (stat grid collapses to single column on small screens)
- Fully customizable via CSS custom properties
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-tabs" role="tablist" aria-label="Dashboard tabs">
  <input type="radio" name="dash-tab" id="tab1" class="tab-input" checked />
  <input type="radio" name="dash-tab" id="tab2" class="tab-input" />

  <div class="tab-list">
    <label for="tab1" class="tab-label" role="tab">Overview</label>
    <label for="tab2" class="tab-label" role="tab">Traffic</label>
  </div>

  <div class="tab-panels">
    <div class="tab-panel panel-1" role="tabpanel">...</div>
    <div class="tab-panel panel-2" role="tabpanel">...</div>
  </div>
</div>
```
Each `.tab-panel` needs a unique class (`panel-1`, `panel-2`, ...) matched to its radio's `id` in the CSS rule `#tabN:checked ~ .tab-panels .panel-N`.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--tabs-duration` | `0.45s` | Panel slide-up transition duration |
| `--tabs-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Timing function |
| `--tabs-accent` | `#38bdf8` | Active tab / chart accent color |
| `--tabs-bg` | `#0f1420` | Outer container background |
| `--tabs-panel-bg` | `#161c2c` | Panel content background |

## Files
- `demo.html` — live working example with 3 dashboard tabs
- `style.css` — component styles and all animations
- `README.md` — this file