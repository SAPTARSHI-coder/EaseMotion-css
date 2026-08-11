# Feature: .ease-gradient-shift animated background utility

**Fixes issue:** #5053

## Problem
EaseMotion had no background animation utilities. Animated gradient
backgrounds are commonly used for hero sections, buttons, and banners,
but contributors had to write custom CSS each time.

## Feature Added
New `.ease-gradient-shift` utility class:
- Smoothly shifting linear gradient background using
  `@keyframes em-gradient-shift` and `background-position` animation
- Colors customizable via `--gradient-start` and `--gradient-end`
  CSS variables, with sensible default fallbacks (#667eea -> #764ba2)
- Animation duration customizable via `--ease-duration` (default 4s),
  following the static-fallback pattern from #5044
- Respects `prefers-reduced-motion: reduce` - freezes on a static
  gradient frame instead of animating

## Usage

```html
<div class="ease-gradient-shift">Hero content</div>

<div class="ease-gradient-shift" style="--gradient-start:#11998e; --gradient-end:#38ef7d;">
  Custom colors
</div>
```

## Files
- `style.css` - the new utility class
- `demo.html` - visual test (hero, custom colors, button usage)

## Testing
1. Open demo.html - verify gradient smoothly shifts on all 3 examples
2. Verify custom-colors example uses green gradient via CSS variables
3. Enable prefers-reduced-motion - verify animation stops, gradient
   remains visible as a static frame

## Acceptance Criteria Met
- [x] .gradient-shift (.ease-gradient-shift) class added
- [x] Customizable via --gradient-start and --gradient-end CSS variables
- [x] Smoothly shifting animation using background-position keyframes
- [x] Reduced-motion support added

## Proposed integration
Add `.ease-gradient-shift` and `@keyframes em-gradient-shift` to a new
or existing component file (e.g. `components/backgrounds.css`).
