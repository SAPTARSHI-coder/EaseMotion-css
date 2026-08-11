# Biometric Scanner HUD Authorization Card

A high-tech Biometric Scanner verification card interface featuring animated CSS laser lines, conic gradient radar sweeps, and SVG fingerprint paths.

## 1. What does this do?
This component renders an interactive biometric identity authentication card with a continuous CSS laser scan bar, rotating radar beam overlay, and status pulse indicators.

## 2. How is it used?
Embed `.bio-card` structure inside your authentication or profile management interface:

```html
<div class="bio-card">
  <div class="scanner-container">
    <div class="scan-laser"></div>
    <div class="radar-sweep"></div>
  </div>
</div>
```

## 3. Why is it useful?
- **Sci-Fi UI Aesthetics**: Perfect for cybersecurity web apps, admin access modals, and web3 gaming dashboards.
- **Pure CSS Keyframe Animation**: Smooth laser movement offloaded strictly to GPU layers.
- **Accessibility Friendly**: Includes `prefers-reduced-motion: reduce` overrides to freeze laser line and radar animations for sensitive users.
