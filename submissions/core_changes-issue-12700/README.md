# Toggle Switch Component

CSS-only checkbox-based toggle switch for boolean settings, feature flags, and preference toggles.

## Classes

| Class | Purpose |
|-------|---------|
| `ease-toggle` | Base toggle switch (label wrapping input + track + knob) |
| `ease-toggle-primary` | Primary color when checked |
| `ease-toggle-success` | Success color when checked |
| `ease-toggle-danger` | Danger color when checked |
| `ease-toggle-sm` | Small size |
| `ease-toggle-lg` | Large size |
| `ease-toggle-disabled` | Disabled state with reduced opacity |
| `ease-toggle-track` | The track/rail background |
| `ease-toggle-knob` | The sliding knob/circle |

## HTML Structure

```html
<label class="ease-toggle">
  <input type="checkbox">
  <span class="ease-toggle-track">
    <span class="ease-toggle-knob"></span>
  </span>
  Label text
</label>
```

## Usage

```html
<!-- Basic -->
<label class="ease-toggle">
  <input type="checkbox">
  <span class="ease-toggle-track"><span class="ease-toggle-knob"></span></span>
  Toggle me
</label>

<!-- Color variant -->
<label class="ease-toggle ease-toggle-success">
  <input type="checkbox" checked>
  <span class="ease-toggle-track"><span class="ease-toggle-knob"></span></span>
  Success
</label>

<!-- Size variant -->
<label class="ease-toggle ease-toggle-sm">
  <input type="checkbox" checked>
  <span class="ease-toggle-track"><span class="ease-toggle-knob"></span></span>
  Small
</label>

<!-- Disabled -->
<label class="ease-toggle ease-toggle-disabled">
  <input type="checkbox" disabled>
  <span class="ease-toggle-track"><span class="ease-toggle-knob"></span></span>
  Disabled
</label>
```

## Affected Files

| File | Change |
|------|--------|
| `components/toggle.css` | New component stylesheet |

Fixes #12700
