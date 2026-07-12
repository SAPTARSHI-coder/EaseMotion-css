# Retro Terminal Glow Pulse Card

## What does this do?

This component provides a pure CSS animated card featuring a smooth **Glow Pulse** interaction styled to complement **Retro Terminal interface aesthetics**. Built with only HTML and CSS, it delivers responsive layouts, keyboard accessibility, and GPU-accelerated animations while exposing customizable CSS variables for timing, easing, and scaling all with zero JavaScript overhead.

---

## How is it used?

Integrate the following HTML structure into your project:

```html
<div class="monitor-console" tabindex="0" role="article" aria-label="System Statistics Display">

    <div class="crt-scanlines"></div>
    <div class="crt-vignette"></div>

   
    <div class="console-viewport">
      
      <div class="console-header">
        <div class="header-left">
          <div>Node: QCDCAL</div>
          <div>Statistic: CURRENT</div>
        </div>
        <div class="header-center">
          <span class="system-badge">SYSTEM STATISTICS</span>
        </div>
        <div class="header-right">
          <div>10-JUL-2026 23:57:27</div>
        </div>
      </div>
```

### Exposed Configuration Parameters

Customize the animation and interaction using standard CSS custom properties:

- `--pulse-duration` – Controls the duration of the glow pulse animation (default: `2000ms`).
- `--pulse-easing` – Defines the animation timing function (default: `ease-in-out`).
- `--card-scale` – Sets the scale applied during hover or focus interactions (default: `1.01`).
- `--transition-speed` – Controls the transition speed for interactive states (default: `150ms`).

---

## Why is it useful?

It extends the EaseMotion component library with a reusable Retro Terminal card that showcases complex visual effects using pure CSS. The component combines accessibility, responsiveness, and hardware-accelerated animations to create an engaging user experience with zero JavaScript animation overhead.