# Animated Countdown Timer (`ease-countdown-xyz`)

A zero-dependency, CSS-only animated countdown timer component designed for the **EaseMotion CSS** framework. Perfect for sales, events, and limited-time offers with flip animations and urgency effects.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using CSS animations and gradients.
- **Animation-First**: Smooth digit flip animations, pulsing separators, and urgency effects using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and shadow tokens for seamless theming.
- **Multiple Variants**: Sale countdown, event countdown, urgent/low-time, and compact layouts.
- **Digit Flip Animation**: Numbers animate in with smooth flip effect.
- **Pulsing Separators**: Colon separators pulse to indicate active countdown.
- **Urgency Effects**: Red gradient background with pulsing shadow for low-time scenarios.
- **CTA Button**: Call-to-action button with hover lift and shake animation for urgency.
- **Gradient Backgrounds**: Beautiful gradient backgrounds for visual appeal.
- **Glassmorphism Digits**: Frosted glass effect on digit containers.
- **Responsive**: Adapts to different screen sizes with mobile optimizations.
- **Accessible**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Sale Countdown
```html
<div class="ease-countdown-xyz">
  <div class="ease-countdown-xyz-header">
    <h3 class="ease-countdown-xyz-title">Flash Sale Ends In</h3>
    <p class="ease-countdown-xyz-subtitle">Up to 70% off</p>
  </div>
  
  <div class="ease-countdown-xyz-timer">
    <div class="ease-countdown-xyz-unit">
      <div class="ease-countdown-xyz-digit">
        <span class="ease-countdown-xyz-number">0</span>
      </div>
      <div class="ease-countdown-xyz-digit">
        <span class="ease-countdown-xyz-number">2</span>
      </div>
      <span class="ease-countdown-xyz-label">Days</span>
    </div>
    
    <div class="ease-countdown-xyz-separator">:</div>
    
    <!-- More units... -->
  </div>
  
  <button class="ease-countdown-xyz-cta">Shop Now</button>
</div>