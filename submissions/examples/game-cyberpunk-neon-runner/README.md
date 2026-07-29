# 🏃‍♂️ Cyberpunk Neon Runner

Race through a neon-lit cyberpunk city! Jump, slide, wall-run, and collect data chips while avoiding deadly obstacles in this futuristic runner.

## 🎮 How to Play

- **Jump** over obstacles and lasers
- **Slide** under low obstacles
- **Wall-run** on the sides to change gravity
- **Collect 💾 data chips** for bonus points
- **Survive** as speed increases over time

## ✨ Features

- **🌃 Neon Cyberpunk Aesthetic** - Glowing neon obstacles, particle trails
- **⚡ Changing Gravity** - Wall-run sections flip gravity
- **🏃‍♂️ Dynamic Speed** - Game gets faster over time
- **💾 Data Chip Collection** - Collect chips for bonus points
- **🎨 Particle Effects** - Neon trails and explosion effects
- **🎮 Multiple Controls** - Keyboard, mouse, and touch support
- **📊 Real-time Stats** - Score, speed, gravity, chips

## 🎮 Controls

| Action | Desktop | Mobile |
|--------|---------|--------|
| Jump | Space / ↑ / Click | Tap / Swipe Up |
| Slide | ↓ | Swipe Down |
| Wall-run | Touch walls | Touch walls |
| Toggle Gravity | G key | - |
| Start/Restart | Space / Click | Tap |

## 🎯 Game Objects

| Object | Effect | Visual |
|--------|--------|--------|
| 🟦 Laser | Instant death | Red neon beam |
| 🟥 Box | Instant death | Red glowing cube |
| 🟧 Spike | Instant death | Orange triangle |
| 💾 Data Chip | +100 points | Glowing diamond |
| 🔵 Wall Zone | Wall-run enabled | Neon border |

## 🏆 Scoring

| Action | Points |
|--------|--------|
| Distance | Continuous |
| Data Chip | +100 |
| Survival Bonus | Increasing |

## ⚡ Gravity System

| State | Gravity | Visual |
|-------|---------|--------|
| Normal | ↓ 1.0x | Down arrow |
| Wall-run (Left) | ↙ 0.8x | Side arrows |
| Wall-run (Right) | ↗ 0.8x | Side arrows |

## 🛠️ Technical Details

### Player Physics
```javascript
// Gravity changes with wall-running
if (wallRunning) {
    gravityStrength = 0.8;
    vy = direction * 2;
} else {
    gravityStrength = 1.0;
    vy += gravity * 0.5;
}

// Jump
jumpForce = -10 * gravityDirection;
vy = jumpForce;