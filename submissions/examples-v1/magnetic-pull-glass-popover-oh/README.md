# Component: Magnetic Pull Popover - Glassmorphism UI

This submission implements the **Magnetic Pull Popover** for Issue #46684 - styled for Glassmorphism UI layouts.

## Description

A pure CSS animated popover with smooth magnetic pull interaction, featuring glassmorphism styling with backdrop blur, transparency, and subtle borders.

## Features

- **Magnetic Pull Animation**: Smooth floating attraction effect on hover
- **Glassmorphism Styling**: Modern frosted glass appearance with blur effects
- **Animation Variants**: Strong, soft, and pulse effects
- **Position Variants**: Top, bottom, left, and right positioning
- **Accessibility**: ARIA labels and focus states
- **Responsive**: Works on all screen sizes
- **CSS Custom Properties**: Exposes animation parameters for customization

## Usage

### Basic HTML Structure

```html
<div class="popover-container">
  <button class="trigger-btn">Hover Me</button>
  <div class="glass-popover" role="tooltip">
    <div class="popover-arrow"></div>
    <h4>Title</h4>
    <p>Content goes here...</p>
    <div class="magnet-indicator">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>
</div>
```

### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--magnetic-pull-duration` | `0.6s` | Animation duration |
| `--magnetic-pull-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--magnetic-float-duration` | `2s` | Float loop duration |
| `--magnetic-scale` | `1.02` | Scale factor during float |
| `--magnetic-offset` | `8px` | Vertical offset during float |

### Animation Variants

| Variant | Class | Effect |
|---------|-------|--------|
| Default | none | Standard magnetic pull |
| Strong | `.strong` | More pronounced animation |
| Soft | `.soft` | Gentle subtle movement |
| Pulse | `.pulse` | Glow pulse effect |

### Position Variants

| Variant | Class | Position |
|---------|-------|----------|
| Bottom | none | Below trigger (default) |
| Top | `.position-top` | Above trigger |
| Left | `.position-left` | Left of trigger |
| Right | `.position-right` | Right of trigger |

## Implementation Details

### Magnetic Float Animation

```css
@keyframes magneticFloat {
  0%, 100% { 
    transform: translateX(-50%) translateY(0) scale(1); 
  }
  25% { 
    transform: translateX(-50%) translateY(-4px) scale(1.02); 
  }
  50% { 
    transform: translateX(-50%) translateY(-8px) scale(1); 
  }
  75% { 
    transform: translateX(-50%) translateY(-4px) scale(1.02); 
  }
}
```

### Glassmorphism Styling

```css
.glass-popover {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(59, 130, 246, 0.1);
}
```

## Acceptance Criteria

- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Magnetic pull animation effect
- ✅ Glassmorphism UI styling
- ✅ Multiple animation variants
- ✅ Multiple position options
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with documentation

## Browser Support

- Chrome/Edge 90+
- Firefox 90+
- Safari 14+

Note: `backdrop-filter` requires webkit prefix for older browsers.
