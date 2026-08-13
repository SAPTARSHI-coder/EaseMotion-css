# Pure CSS Interactive Radial Wheel Menu (`.ease-radial-menu`)

A zero-JavaScript, accessible radial menu component that expands sub-menu options outward in a 360-degree circular or arc layout upon click, hover, or focus.

## Features

- **Pure CSS Radial Positioning**: Calculates angles and fan-out transforms using `--angle` variables and counter-rotation math:
  `transform: rotate(var(--angle)) translate(var(--radial-distance)) rotate(calc(-1 * var(--angle)))`
- **Upright Text & Icons**: Counter-rotates items automatically so icons and labels remain perfectly upright regardless of their angle around the hub.
- **Elastic Entrance Easing**: Micro-animation spring curve using `cubic-bezier(0.68, -0.55, 0.265, 1.55)` with staggered item transition delays.
- **Dual Trigger Support**: Supports persistent click toggling via the CSS checkbox hack (`.ease-radial-toggle:checked`) as well as hover and focus-within (`:hover`, `:focus-within`).
- **Layout Presets**: Pre-configured helper classes for 4-item, 6-item, 8-item circular menus and semi-circle top arc configurations.
- **Theme & Glassmorphism Variants**: Includes `.ease-radial-sm`, `.ease-radial-lg`, `.ease-radial-dark`, and `.ease-radial-glass`.

## Usage

### 1. Basic 8-Item Click-Toggle Radial Menu

```html
<div class="ease-radial-menu ease-radial-lg">
  <input type="checkbox" class="ease-radial-toggle" id="radial-menu-1">
  <label for="radial-menu-1" class="ease-radial-trigger" aria-label="Toggle menu">
    <span class="ease-radial-icon">+</span>
  </label>
  <ul class="ease-radial-list">
    <li class="ease-radial-item ease-radial-8-item"><a href="#home">🏠</a></li>
    <li class="ease-radial-item ease-radial-8-item"><a href="#user">👤</a></li>
    <li class="ease-radial-item ease-radial-8-item"><a href="#gear">⚙️</a></li>
    <li class="ease-radial-item ease-radial-8-item"><a href="#chat">💬</a></li>
    <li class="ease-radial-item ease-radial-8-item"><a href="#star">⭐</a></li>
    <li class="ease-radial-item ease-radial-8-item"><a href="#find">🔍</a></li>
    <li class="ease-radial-item ease-radial-8-item"><a href="#bell">🔔</a></li>
    <li class="ease-radial-item ease-radial-8-item"><a href="#link">🔗</a></li>
  </ul>
</div>
```

### 2. Custom Angle & Distance via Inline Variables

```html
<div class="ease-radial-menu" style="--radial-distance: 120px;">
  <button class="ease-radial-trigger">Menu</button>
  <ul class="ease-radial-list">
    <li class="ease-radial-item" style="--angle: -45deg; --item-index: 0;">Option 1</li>
    <li class="ease-radial-item" style="--angle: 0deg;   --item-index: 1;">Option 2</li>
    <li class="ease-radial-item" style="--angle: 45deg;  --item-index: 2;">Option 3</li>
  </ul>
</div>
```

## CSS Custom Properties

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--radial-distance` | `100px` | Distance items translate outward from the central hub |
| `--radial-size` | `52px` | Diameter of the central trigger button |
| `--radial-item-size` | `44px` | Diameter of each radial sub-menu item |
| `--radial-duration` | `0.35s` | Animation transition duration |
| `--radial-easing` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Elastic spring bezier curve |
| `--angle` | `0deg` | Polar angle orientation for individual items |
