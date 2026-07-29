# Component: ease-shadow-pop-profile-card

This submission implements the `ease-shadow-pop-profile-card` component for GSSOC issue **#41528**.

## Description

An animated profile card with shadow pop effect for glassmorphism design. Features hover animations with dynamic shadow scaling and glowing ring effects.

## Usage

```html
<div class="ease-shadow-pop-card">
  <div class="card-avatar">
    <img src="avatar.jpg" alt="User avatar">
    <div class="avatar-ring"></div>
  </div>
  <div class="card-content">
    <h2 class="card-name">User Name</h2>
    <p class="card-role">Role / Title</p>
    <div class="card-stats">
      <div class="stat">
        <span class="stat-value">1.2k</span>
        <span class="stat-label">Followers</span>
      </div>
    </div>
    <button class="card-btn">Action</button>
  </div>
</div>
```

### Color Variants

```html
<div class="ease-shadow-pop-card ease-shadow-primary">...</div>
<div class="ease-shadow-pop-card ease-shadow-success">...</div>
```

### Size Variants

```html
<div class="ease-shadow-pop-card ease-shadow-sm">...</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--card-bg` | `rgba(255, 255, 255, 0.05)` | Card background |
| `--card-radius` | `16px` | Border radius |
| `--color-primary` | `#3b82f6` | Primary accent color |
| `--shadow-duration` | `0.3s` | Animation duration |

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ Shadow pop hover animation
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ Responsive design
- ✅ `prefers-reduced-motion` support
- ✅ Glassmorphism style
