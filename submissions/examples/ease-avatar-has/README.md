# Interactive Avatar Group (`ease-avatar-has`)

### 1. What does this do?
An animated user avatar list with overlap overrides, pop translations on hover, and pulsing status rings.

### 2. How is it used?
Structure HTML with `.avatar-group` containing `.avatar-item` divs:
```html
<div class="avatar-group">
  <div class="avatar-item">
    <div class="avatar-img-wrapper">
      <div class="avatar-placeholder">H</div>
    </div>
    <div class="status-indicator online"></div>
  </div>
</div>
```

### 3. Why is it useful?
Creates clean, interactive social UI headers that feel modern, using smooth transform overrides and status indicator animations.