# Ease Slide-Right Tabs

## Description
A pure CSS tabbed interface with a vertical tab list styled for a cyberpunk/neon aesthetic — monospace type, glowing accent bar, and neon-tagged panel content. Switching tabs slides the new panel in horizontally from the right with a fade. Driven entirely by radio inputs — zero JavaScript.

## Features
- Slide-right + fade panel transition on tab switch
- Vertical tab list with an animated glowing accent bar on the active tab
- Staggered tag entrance animation inside each panel
- Fully keyboard accessible (native radio inputs, `role="tablist"`/`"tab"`/`"tabpanel"`)
- Responsive — collapses to a horizontal top tab bar on small screens
- Fully customizable via CSS custom properties
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-tabs-neon" role="tablist" aria-label="System panels">
  <input type="radio" name="neon-tab" id="ntab1" class="tab-input" checked />
  <input type="radio" name="neon-tab" id="ntab2" class="tab-input" />

  <div class="tab-list">
    <label for="ntab1" class="tab-label" role="tab">&gt; SYSTEM</label>
    <label for="ntab2" class="tab-label" role="tab">&gt; NETWORK</label>
  </div>

  <div class="tab-panels">
    <div class="tab-panel panel-1" role="tabpanel">...</div>
    <div class="tab-panel panel-2" role="tabpanel">...</div>
  </div>
</div>
```
Each `.tab-panel` needs a unique class (`panel-1`, `panel-2`, ...) matched to its radio's `id` in the CSS rule `#ntabN:checked ~ .tab-panels .panel-N`.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--tabs-duration` | `0.5s` | Panel slide-right transition duration |
| `--tabs-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Timing function |
| `--neon-primary` | `#00f0ff` | Active tab / title accent (cyan) |
| `--neon-secondary` | `#ff00c8` | Tag border/text color (magenta) |
| `--neon-tertiary` | `#a3ff00` | Focus outline color (lime) |

## Files
- `demo.html` — live working example with 3 system panels
- `style.css` — component styles and all animations
- `README.md` — this file