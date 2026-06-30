# 🪜 CSS Step Motion

A collection of beautiful, pure CSS animated step indicators and wizards for multi-step processes.

## 🚀 Features

### Step Styles (6 types)

1. **Classic Numbered** - Traditional numbered circles with connecting lines
2. **Checkmark Steps** - Completed steps show checkmarks
3. **Icon Steps** - Emoji/icon-based steps with rotation animation
4. **Progress Bar Steps** - Horizontal progress bar with dots
5. **Vertical Steps** - Top-to-bottom timeline layout
6. **Neon Steps** - Cyberpunk neon glow effect

### Animation Features

- Pulse effect on active step
- Bounce animation for checkmarks
- Rotation for icon steps
- Shimmer effect on progress bars
- Neon glow pulsing
- Smooth color transitions

## 📂 Files

- `demo.html` - Main HTML structure
- `style.css` - All step animations
- `readme.md` - Documentation

## 🛠️ How to Use

### Basic Horizontal Steps

```html
<div class="stepper classic">
  <div class="step completed">
    <div class="step-circle">1</div>
    <div class="step-label">Step 1</div>
  </div>
  <div class="step-line completed"></div>
  <div class="step active">
    <div class="step-circle">2</div>
    <div class="step-label">Step 2</div>
  </div>
  <div class="step-line"></div>
  <div class="step">
    <div class="step-circle">3</div>
    <div class="step-label">Step 3</div>
  </div>
</div>
```
