# Spiral Countdown Timer

A high-performance circular countdown timer component featuring a smooth spiral transition, built with pure SVG paths, hardware-accelerated CSS `offset-path` (motion path), and a premium glassmorphism styling card interface.

---

## 🔍 Q&A Overview

### 1. What does this do?

This component displays a countdown timer inside a premium glassmorphic card where the passage of time is animated as a glowing dot gliding along an Archimedean spiral path that retracts towards the center as time ticks away.

### 2. How is it used?

You include the main `.ease-spiral-timer` layout, customize variables as desired, and initialize the tick handler using minimal JS:

```html
<div class="ease-spiral-timer" id="spiral-timer">
  <!-- SVG Spiral Track -->
  <div class="timer-svg-container">
    <svg class="timer-svg" viewBox="0 0 300 340">
      <!-- Tracks -->
      <path
        class="timer-spiral-bg"
        d="M 150, 50 A 120,120 0 0,1 150, 290 A 112.5,112.5 0 0,1 150, 65 A 105,105 0 0,1 150, 275 A 97.5,97.5 0 0,1 150, 80 A 90,90 0 0,1 150, 260 A 82.5,82.5 0 0,1 150, 95 A 75,75 0 0,1 150, 245 A 67.5,67.5 0 0,1 150, 110"
      />
      <path class="timer-spiral-fg" id="timer-path" d="..." />
      <!-- Center Plate -->
      <circle cx="150" cy="170" r="52" class="timer-center-glass" />
    </svg>
  </div>
  <!-- Indicators -->
  <div class="timer-dot" id="timer-dot"></div>
  <!-- Central Digits -->
  <div class="timer-content">
    <div class="timer-digits">01:00</div>
    <span class="timer-label">Remaining</span>
  </div>
</div>
```

### 3. Why is it useful?

It provides a visually arresting, lightweight, and modern option for promotional flash sales, coming soon pages, productivity focus states, or live event timers. By utilizing native CSS properties like `offset-path` and `stroke-dashoffset`, it remains extremely optimized with stable GPU performance.

---

## 🎨 Design & Customization

The component fits into EaseMotion CSS design system and is controlled using standard design tokens:

```css
.ease-spiral-timer {
  --timer-size: 320px;
  --timer-color-primary: #6c63ff;
  --timer-color-secondary: #8b5cf6;
  --timer-glass-bg: rgba(255, 255, 255, 0.45);
  --timer-glass-blur: 16px;
}
```

### Key Customization Options

- **`--timer-size`**: Control the overall dimensions. All circles and paths scale relative to this bounding box.
- **`--timer-color-primary`** & **`--timer-color-secondary`**: Set colors for the active spiral gradient path.
- **`--timer-glass-blur`** & **`--timer-glass-bg`**: Fine-tune the transparency and backdrop blur intensity.

---

## ♿ Accessibility & Motion Guarding

- **Keyboard Support**: Space bar triggers Play/Pause; Escape key triggers Reset.
- **Prefers Reduced Motion**: When user accessibility settings request reduced motion, all animations (including the rotating knob and digit transitions) pause or degrade gracefully to instant updates.
- **Aria Tags**: Utilizes `aria-live="polite"` and `aria-label` for proper screen reader announcement support.
