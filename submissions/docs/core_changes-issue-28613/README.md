# ease-speed-dial — Floating Action Button Speed Dial

## What does this do?

A floating action button (FAB) that expands into a radial or vertical list of secondary actions. Uses CSS transitions with minimal JS for toggle.

## How is it used?

```html
<div class="ease-speed-dial">
  <button class="ease-speed-dial-fab">+</button>
  <div class="ease-speed-dial-actions">
    <button class="ease-speed-dial-action">📷</button>
    <button class="ease-speed-dial-action">📎</button>
    <button class="ease-speed-dial-action">📄</button>
  </div>
</div>
```

### Variants

| Class | Description |
|---|---|
| `.ease-speed-dial` | Container |
| `.ease-speed-dial-fab` | Main toggle button |
| `.ease-speed-dial-actions` | Action items container |
| `.ease-speed-dial-action` | Individual action |
| `.ease-speed-dial-up` | Actions above FAB (default) |
| `.ease-speed-dial-down` | Actions below FAB |
| `.ease-speed-dial-left` | Actions to the left |
| `.ease-speed-dial-right` | Actions to the right |
