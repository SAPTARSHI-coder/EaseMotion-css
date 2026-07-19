# Component: Spring QR Code Display

This submission implements the Spring QR Code Display for GSSoC issue **#42009**.

## Description

Animated QR code display with spring bounce and shake effects.

## Features

- **Spring Bounce**: Bouncy entrance animation
- **Spring Shake**: QR frame shake on load
- **Expanding Rings**: Decorative pulse rings
- **Multiple Sizes**: Small, medium, and large variants
- **Pure CSS Animation**: No JavaScript required
- **Landing Page Ready**: Professional appearance

## Usage

```html
<div class="qr-display spring-qr">
  <div class="qr-card">
    <div class="qr-frame spring-frame">
      <div class="qr-pattern">
        <div class="qr-cell"></div>
        <div class="qr-cell filled"></div>
        <!-- More cells -->
      </div>
    </div>
    <div class="qr-info">
      <h3>Scan to Connect</h3>
      <p>Description</p>
    </div>
  </div>
  <div class="spring-decoration">
    <div class="spring-ring ring-1"></div>
    <div class="spring-ring ring-2"></div>
    <div class="spring-ring ring-3"></div>
  </div>
</div>
```

## Animations

| Animation | Element | Timing |
|-----------|---------|--------|
| `springBounce` | QR Card | 0.8s, cubic-bezier |
| `springShake` | QR Frame | 0.6s, 0.5s delay |
| `springRing` | Decorative rings | 2s, infinite, staggered |

### Spring Bounce Keyframes

```css
@keyframes springBounce {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(50px);
  }
  50% {
    transform: scale(1.1) translateY(-10px);
  }
  70% {
    transform: scale(0.95) translateY(5px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
```

## QR Pattern Grid

```css
.qr-pattern {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 3px;
  width: 175px;
  height: 175px;
}

.qr-cell.filled {
  background: #1a1a2e;
}
```

## Size Variants

| Variant | Grid | Size |
|---------|------|------|
| Small | 5x5 | 100px |
| Medium | 7x7 | 175px |
| Large | 7x7 | 200px+ |

## Acceptance Criteria

- ✅ Spring bounce entrance animation
- ✅ QR frame shake effect
- ✅ Expanding ring decorations
- ✅ Multiple size variants
- ✅ Landing page styling
- ✅ README.md included
