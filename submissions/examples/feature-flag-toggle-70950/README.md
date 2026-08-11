# CSS Feature Flag Toggle

Interactive SaaS feature flag switch card with smooth sliding toggle animations, status badge indicators, and pure CSS state triggers.

## 1. What does this do?
Renders an admin feature flag control switch featuring smooth sliding thumb transitions, check/cross icon state toggles (`ENABLED` &rarr; `DISABLED`), and environment status badges without JavaScript.

## 2. How is it used?
Wrap the toggle inside a `<label class="flag-switch">` containing a hidden checkbox input:

```html
<label class="flag-switch">
  <input type="checkbox" class="flag-checkbox" checked>
  <span class="switch-track">
    <span class="switch-thumb">
      <svg class="thumb-icon check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </span>
  </span>
  <span class="switch-status-text">
    <span class="txt-enabled">ENABLED</span>
    <span class="txt-disabled">DISABLED</span>
  </span>
</label>
```

## 3. Why is it useful?
Admin dashboards, SaaS settings, and developer control panels need responsive feature flag switches. This pure CSS pattern provides zero-JS state toggling, accessible focus rings, and springy spring-thumb physics.
