# Sibling-Aware Theme Propagation

## What does this do?
A theme picker where selecting a radio option dynamically recolors an entire card grid — borders, backgrounds, badges, progress bars, and buttons — all derived from a single `--live-accent` custom property via `color-mix()`. The reactive link is made entirely with `:has()`, with zero JavaScript.

## How to use it
```html
<div class="theme-picker">
  <div class="theme-options-row">
    <label class="theme-option">
      <input type="radio" name="theme" value="ocean" checked>
      <span class="theme-swatch theme-swatch--ocean"></span> Ocean
    </label>
    <label class="theme-option">
      <input type="radio" name="theme" value="sunset">
      <span class="theme-swatch theme-swatch--sunset"></span> Sunset
    </label>
  </div>

  <!-- Must be inside .theme-picker so :has() can target it -->
  <div class="theme-target-grid">
    <div class="theme-target-card">
      <span class="theme-badge">Active</span>
      <h3>Revenue</h3>
      <div class="theme-metric">$48,210</div>
      <button class="theme-btn">View Details</button>
    </div>
  </div>
</div>
```

## How it works
```css
/* :has() detects which radio is checked and sets --live-accent
   on the whole .theme-picker — custom properties inherit, so
   this cascades into .theme-target-grid and every card */
.theme-picker:has(input[value="ocean"]:checked)  { --live-accent: #0ea5e9; }
.theme-picker:has(input[value="sunset"]:checked) { --live-accent: #f97316; }

/* Every visual color is derived from --live-accent via color-mix() */
.theme-target-card {
  border: 1px solid color-mix(in srgb, var(--live-accent) 28%, transparent);
  background: color-mix(in srgb, var(--live-accent) 6%, var(--ease-color-surface));
}

.theme-badge {
  background: color-mix(in srgb, var(--live-accent) 18%, transparent);
  color: color-mix(in srgb, var(--live-accent) 75%, white);
}

.theme-bar-fill {
  background: linear-gradient(90deg, var(--live-accent), color-mix(in srgb, var(--live-accent) 50%, white));
}

.theme-btn {
  background: var(--live-accent);
  color: color-mix(in srgb, var(--live-accent) 15%, black);
}
```

1. **`:has()` detects selection** — `.theme-picker:has(input[value="ocean"]:checked)` matches the picker whenever the Ocean radio is checked, no event listener needed
2. **Custom property cascades** — `--live-accent` is set on `.theme-picker` and inherits down into every descendant
3. **`color-mix()` derives shades** — borders, backgrounds, badges, bars, and buttons each compute their color from `--live-accent` at different mix ratios; changing one variable updates all of them simultaneously

## Themes included
- Ocean (`#0ea5e9`), Sunset (`#f97316`), Forest (`#22c55e`), Grape (`#a855f7`) — add more by adding a radio option + matching `:has()` rule

## Browser support
`:has()` ships in Chrome/Edge 105+, Firefox 121+, Safari 15.4+. `color-mix()` ships in Chrome/Edge 111+, Firefox 113+, Safari 16.2+. Both are broadly supported as of 2026.

## Why it fits EaseMotion CSS
`:has()` and `color-mix()` individually exist elsewhere in EaseMotion, but combining them for *cross-element reactive theming* — where selecting one element changes the computed colors of unrelated sibling elements based on a shared accent variable — is a genuinely advanced pattern with no existing example. It demonstrates CSS approaching "reactive state" territory traditionally requiring JS or CSS-in-JS theme providers. `prefers-reduced-motion` removes the color/background transitions, applying the new theme instantly instead of fading.
