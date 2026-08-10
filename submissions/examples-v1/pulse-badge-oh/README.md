# Component: Pulse Badge

This submission implements the Pulse Badge for GSSoC issue **#41987**.

## Description

Animated pulse badges for SaaS dashboard with multiple variants and color options.

## Features

- **4 Color Variants**: Success, Danger, Warning, Info
- **4 Animation Variants**: Default, Dot, Ring, Glow, Scale
- **User Status**: Avatar with status dot
- **Size Options**: Default and small
- **Pure CSS Animation**: No JavaScript required

## Usage

```html
<!-- Default Pulse -->
<span class="pulse-badge success">Online</span>

<!-- Dot Pulse -->
<span class="pulse-badge dot-pulse success">Active</span>

<!-- Ring Pulse -->
<span class="pulse-badge ring-pulse warning">Pending</span>

<!-- Glow Pulse -->
<span class="pulse-badge glow-pulse info">Beta</span>

<!-- Scale Pulse -->
<span class="pulse-badge scale-pulse danger">Urgent</span>
```

## Color Variants

| Class | Color |
|-------|-------|
| `.success` | Green (#22c55e) |
| `.danger` | Red (#ef4444) |
| `.warning` | Yellow (#eab308) |
| `.info` | Cyan (#06b6d4) |

## Animation Variants

| Class | Animation |
|-------|-----------|
| Default | Opacity + scale pulse |
| `.dot-pulse` | Dot indicator pulse |
| `.ring-pulse` | Expanding ring effect |
| `.glow-pulse` | Glow shadow pulse |
| `.scale-pulse` | Scale bounce pulse |

## User Status Example

```html
<div class="user-avatar">
  <img src="avatar.jpg" alt="User">
  <span class="pulse-badge dot-only success"></span>
</div>
```

## Animations

```css
@keyframes badgePulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.02); }
}

@keyframes dotPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

@keyframes ringPulse {
  0% { box-shadow: 0 0 0 0 currentColor; }
  70% { box-shadow: 0 0 0 6px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}

@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 5px currentColor; }
  50% { box-shadow: 0 0 20px currentColor; }
}
```

## Acceptance Criteria

- ✅ Multiple color variants
- ✅ Multiple animation variants
- ✅ Pure CSS animations
- ✅ Avatar status dot
- ✅ Size options
- ✅ README.md included
