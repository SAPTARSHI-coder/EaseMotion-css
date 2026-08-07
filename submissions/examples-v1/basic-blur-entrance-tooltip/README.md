# Ease Blur-Entrance Tooltip

## Description
A pure CSS tooltip that transitions in using a "blur-entrance" effect — the tooltip animates from blurred/scaled-down/transparent to sharp/full-scale/opaque, rather than a plain fade or slide. Zero JavaScript.

## Features
- Blur-to-sharp entrance using `filter: blur()`
- Combined scale + vertical offset + opacity for a layered entrance feel
- Triggers on both `:hover` and keyboard `:focus` (via `:focus-within` and `:focus-visible`) for full keyboard accessibility
- Fully customizable via CSS custom properties — no need to edit the core rules
- Respects `prefers-reduced-motion` (disables blur/scale, keeps a simple opacity fade)

## Usage
```html
<span class="ease-tooltip">
  <button class="tooltip-trigger">Hover me</button>
  <span class="tooltip-bubble" role="tooltip">Tooltip text here</span>
</span>
```

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--tooltip-duration` | `0.3s` | Animation duration |
| `--tooltip-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Timing function |
| `--tooltip-blur` | `6px` | Starting blur amount |
| `--tooltip-scale-start` | `0.92` | Starting scale before entrance |
| `--tooltip-offset` | `10px` | Distance between trigger and tooltip |
| `--tooltip-bg` | `#1a1a2e` | Tooltip background color |
| `--tooltip-fg` | `#f5f7fa` | Tooltip text color |
| `--tooltip-accent` | `#38bdf8` | Trigger button accent color |

Example override:
```html
<span class="ease-tooltip" style="--tooltip-duration: 0.6s; --tooltip-blur: 12px;">
  ...
</span>
```

## Accessibility
The tooltip is exposed via `role="tooltip"` and triggers on keyboard focus (`:focus-within`/`:focus-visible`), not just mouse hover, so keyboard-only users can access the same information.

## Files
- `demo.html` — live working example with three timing/style variants
- `style.css` — component styles
- `README.md` — this file