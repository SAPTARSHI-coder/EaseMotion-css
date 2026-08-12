# 🌙 Cyberpunk Neon Border Button — Glowing Ripple Hover Effect
### Dark Mode Variant

Resolves: #57956

## Description
A glassmorphic, dark-mode button component with a soft neon-tinted border
and a glowing radial ripple that expands from the pointer position on
hover/focus. Three accent variants (violet, teal, pink) sit on a frosted
translucent surface (`backdrop-filter: blur`) against a deep gradient
background, for a moody cyberpunk-at-night look. Pure CSS animation with a
tiny JS helper for pointer tracking — no external dependencies.

## Features
- Frosted glass surface (`backdrop-filter: blur`) with a soft neon border
  that only lights up on interaction.
- Ripple effect expanding from the pointer's hover position via CSS custom
  properties (`--cnbd-x`, `--cnbd-y`).
- Three accent colors: violet, teal, pink — easy to extend with more.
- Keyboard-accessible: `:focus-visible` reproduces the hover glow/ripple
  (centered origin) plus a colored outline for clear focus visibility.
- Disabled state clearly dimmed with no glow/ripple.
- Responsive — buttons stack on narrow viewports.

## Files
- `demo.html` — standalone demo with four button states.
- `style.css` — all button styling, ripple animation, and accessibility
  media queries.
- `README.md` — this file.

## Usage
1. Include `style.css` in your page.
2. Add the button markup:
   ```html
   <button class="cnbd-btn cnbd-btn--violet">
     <span class="cnbd-btn__label">Connect</span>
     <span class="cnbd-ripple" aria-hidden="true"></span>
   </button>
   ```
3. Copy the pointer-tracking script from `demo.html` and attach it to your
   `.cnbd-btn` elements so the ripple follows the pointer.

## Customization
| CSS Custom Property   | Purpose                                  |
|-------------------------|-------------------------------------------|
| `--cnbd-color`           | Accent color (set per variant class)       |
| `--cnbd-x`, `--cnbd-y`   | Ripple origin, updated on `pointermove`    |
| `--cnbd-radius`          | Corner radius                              |
| `--cnbd-blur`            | Glass blur strength                        |

Add new accent colors with:
```css
.cnbd-btn--amber { --cnbd-color: #fbbf24; }
```

## Accessibility
- `:focus-visible` reproduces the hover ripple/glow and adds a colored
  outline so keyboard focus is always visible.
- `prefers-reduced-motion: reduce` disables all transitions/transforms.
- `forced-colors: active` (Windows High Contrast Mode) replaces the glass
  effect with a solid `CanvasText`/`Highlight`-based treatment so the
  button remains legible.
- Disabled buttons use opacity + border/color changes, not color alone.

## Testing
Opened `demo.html` in a browser and verified hover ripple tracking, keyboard
focus (Tab), disabled state, `prefers-reduced-motion` emulation, and
forced-colors emulation via browser dev tools.