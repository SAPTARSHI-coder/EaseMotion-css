# Password Strength Indicator Component (`ease-password-strength`)

A pure HTML + Vanilla CSS password strength indicator component featuring an animated GPU-accelerated progress bar (`transform: scaleX(...)`), 4 visual strength levels (Weak, Fair, Good, Strong), text-based accessible status indicators, radio-based CSS state controls, and light/dark theme adaptation.

## Important Implementation Note

This component demonstrates password-strength visual states using CSS-only controls. It does not perform actual password entropy or security analysis because the issue requires a JavaScript-free implementation.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Animated Progress Indicator**: Smooth GPU-accelerated progress bar (`transform: scaleX()`, `transform-origin: left`, `transition: transform 450ms cubic-bezier(0.2, 0.75, 0.25, 1)`).
- **Accessible Beyond Color**: Combines color transitions (Red `#ef4444`, Orange `#f59e0b`, Lime `#84cc16`, Green `#22c55e`) with explicit text status labels ("Weak Security", "Fair Security", "Good Security", "Strong Security").
- **Pure CSS State Engine**: State switching driven by radio controls (`<input type="radio" name="strength-level">`) mapped to keyboard-navigable button labels (`<label for="...">`).
- **100% Accessible**: Full keyboard navigation support (`Tab`, `Shift+Tab`, Arrow Keys, `Space`, `Enter`) with distinct `:focus-visible` indicators.
- **Responsive & Mobile Ready**: Layout wraps cleanly into grid layouts on smaller mobile viewports (320px–1440px+).
- **Theme Adaptability & Motion Controls**: Supports light/dark theme adaptation (`@media (prefers-color-scheme)`) and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<form class="password-demo">
  <input
    type="radio"
    id="strength-weak"
    name="strength-level"
    class="strength-radio"
    checked
  />
  <input
    type="radio"
    id="strength-strong"
    name="strength-level"
    class="strength-radio"
  />

  <div class="password-field">
    <label for="password-input">Password</label>
    <input id="password-input" type="password" autocomplete="new-password" />
  </div>

  <div class="strength-meter-wrapper">
    <div class="strength-bar-track">
      <div class="strength-bar-fill"></div>
    </div>
  </div>
</form>
```

### Customization Variables

```css
:root {
  --password-bg: #f8fafc;
  --password-surface: #ffffff;
  --password-focus: #2563eb;
  --strength-weak: #ef4444;
  --strength-strong: #22c55e;
  --strength-duration: 450ms;
}
```
