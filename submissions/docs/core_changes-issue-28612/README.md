# ease-dock — macOS-Inspired Dock/Launchpad Navigation

## What does this do?

Creates a macOS-style dock navigation bar with CSS flexbox. Icons scale up on hover with a smooth magnetic zoom effect. Fully responsive with optional active indicator.

## How is it used?

```html
<nav class="ease-dock">
  <a class="ease-dock-item active">
    <span class="ease-dock-icon">🔍</span>
    <span class="ease-dock-label">Finder</span>
  </a>
  <a class="ease-dock-item">
    <span class="ease-dock-icon">📁</span>
  </a>
</nav>
```

### Variants

| Class                | Description                    |
| -------------------- | ------------------------------ |
| `.ease-dock`         | Container (centered, flex row) |
| `.ease-dock-item`    | Individual dock icon           |
| `.ease-dock-icon`    | Icon wrapper                   |
| `.ease-dock-label`   | Label below icon               |
| `.ease-dock-magnify` | Enables hover scale-up         |
| `.ease-dock-divider` | Vertical separator             |

## Custom Properties

| Property            | Default   | Description        |
| ------------------- | --------- | ------------------ |
| `--ease-dock-scale` | `1.5`     | Hover scale factor |
| `--ease-dock-gap`   | `0.25rem` | Gap between items  |
| `--ease-dock-size`  | `48px`    | Icon size          |
