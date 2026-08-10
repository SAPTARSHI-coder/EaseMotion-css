# Encrypted Field Input

Encrypted field input with lock/unlock toggle animation. Securely display sensitive values with a smooth icon morph transition between locked and unlocked states.

## Features

- Password field with lock/unlock visual toggle
- Smooth icon color morph animation
- Bulk lock/unlock controls
- Status indicator showing encryption state
- Dark theme card layout

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="efi-field">
  <label for="myKey">Secret Key</label>
  <div class="efi-input-wrap">
    <input type="password" id="myKey" class="efi-input" value="secret-value">
    <button class="efi-toggle" onclick="toggleField('myKey', 'myIcon')">
      <svg class="efi-lock" id="myIcon" viewBox="0 0 24 24" width="20" height="20">...</svg>
    </button>
  </div>
</div>

<script>
  toggleField('myKey', 'myIcon');
</script>
```

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--input-bg` | `#1e1e2e` | Input background color |
| `--lock-color` | `#f59e0b` | Locked state icon color |
| `--unlock-color` | `#10b981` | Unlocked state icon color |
| `--transition-speed` | `0.35s` | Animation transition duration |
