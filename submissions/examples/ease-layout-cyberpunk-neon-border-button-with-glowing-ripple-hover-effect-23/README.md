# ⚡ Cyberpunk Neon Border Button — Glowing Ripple Hover Effect
### High-Contrast Accessibility Edition

Resolves: #57962

## Description
A neon-outlined button component with a glowing radial ripple that expands
from the pointer position on hover/focus, in a cyberpunk-inspired palette
(cyan, magenta, yellow). Built with pure CSS animation/transitions plus a
tiny JS helper that tracks pointer position for the ripple's origin — no
external dependencies.

Despite the vibrant aesthetic, this edition is built accessibility-first:
strong focus indicators, `prefers-reduced-motion` support, and a dedicated
`forced-colors` (Windows High Contrast Mode) treatment so the component
stays usable and visible for all users.

## Features
- Glowing neon border in three color variants (cyan / magenta / yellow).
- Ripple effect that expands from the pointer's hover position, tracked via
  CSS custom properties (`--cnb-x`, `--cnb-y`) set in a tiny JS snippet.
- Keyboard-accessible: `:focus-visible` triggers the same ripple/glow as
  hover, with the ripple centered for keyboard users.
- Highly visible focus ring (`outline`) independent of the glow effect, so
  focus is never lost even with reduced motion or forced colors.
- Disabled state clearly distinguished (dimmed, no glow/ripple).
- Fully responsive — buttons stack on narrow viewports.

## Files
- `demo.html` — standalone demo with four button states.
- `style.css` — all button styling, ripple animation, and accessibility
  media queries.
- `README.md` — this file.

## Usage
1. Include `style.css` in your page.
2. Add the button markup:
   ```html
   <button class="cnb-btn cnb-btn--cyan">
     <span class="cnb-btn__label">Launch</span>
     <span class="cnb-ripple" aria-hidden="true"></span>
   </button>
   ```
3. Copy the small pointer-tracking script from `demo.html` and attach it to
   your `.cnb-btn` elements so the ripple follows the pointer.

## Customization
| CSS Custom Property | Purpose                                   |
|----------------------|--------------------------------------------|
| `--cnb-color`         | Base neon color (set per variant class)     |
| `--cnb-x`, `--cnb-y`  | Ripple origin, updated on `pointermove`     |
| `--cnb-radius`        | Corner radius                               |
| `--cnb-border-width`  | Border thickness                            |

Add new color variants by defining a class like:
```css
.cnb-btn--green { --cnb-color: #39ff14; }
```

## Accessibility
- `:focus-visible` reproduces the hover glow/ripple for keyboard users, plus
  a separate high-contrast `outline` so focus is always visible regardless
  of the glow.
- `prefers-reduced-motion: reduce` disables all transitions/transforms.
- `forced-colors: active` (Windows High Contrast Mode) swaps the neon glow
  for a solid `CanvasText`/`Highlight`-based treatment so the button remains
  legible and its states distinguishable.
- Disabled buttons use `opacity` + border/color changes, not color alone,
  to signal state.

## Testing
Opened `demo.html` in a browser and verified hover, keyboard focus (Tab),
disabled state, `prefers-reduced-motion` emulation, and forced-colors
emulation via browser dev tools.