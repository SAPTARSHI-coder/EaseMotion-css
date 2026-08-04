# Component: Floating Orbit Popover

This submission implements the Floating Orbit Popover for issue **#46755**.

## Description

CSS popover with floating/orbiting animation effect on hover.

## Features

- **Float Animation**: Gentle up/down floating motion
- **Orbit Dot**: Pulsing indicator dot
- **Style Variants**: Soft, sharp, glow styles
- **Scale Pop-in**: Bouncy scale animation
- **Hover Trigger**: Shows on button hover

## Usage

```html
<div class="popover-container">
  <button class="trigger-btn">Hover Me</button>
  <div class="orbit-popover">
    <h4>Title</h4>
    <p>Content goes here</p>
    <div class="orbit-dot"></div>
  </div>
</div>
```

## Style Variants

| Variant | Class | Description |
|---------|-------|-------------|
| Default | none | Standard dark style |
| Soft | `.soft` | Neumorphic shadows |
| Sharp | `.sharp` | Sharp corners |
| Glow | `.glow` | Glowing border |

## Animation

```css
@keyframes float {
  0%, 100% { transform: translateX(-50%) scale(1) translateY(0); }
  50% { transform: translateX(-50%) scale(1) translateY(-8px); }
}

.orbit-dot {
  animation: orbitPulse 2s ease-in-out infinite;
}
```

## Acceptance Criteria

- ✅ Floating animation
- ✅ Orbit dot indicator
- ✅ Style variants
- ✅ Bouncy scale effect
- ✅ README.md included
