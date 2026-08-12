# 🕐 Analog Clock

A beautiful, real-time analog clock with Roman numerals and smooth second-hand movement.

## 🚀 Features

- **Real-time Display**: Shows current time with smooth second-hand movement
- **Analog Face**: Classic clock design with numbers 1-12
- **Digital Display**: Shows time in HH:MM:SS format
- **Pause/Resume**: Pause and resume the clock
- **Reset**: Jump back to current time
- **Smooth Animations**: Second hand moves smoothly (60fps)

## ⚙️ How It Works

### JavaScript Logic

The clock uses `requestAnimationFrame()` for smooth 60fps animation:

```javascript
function drawClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Calculate angles for each hand
    const hourAngle = ((hours % 12) / 12) * 2π - π/2 + (minutes/60) * (2π/12);
    const minuteAngle = (minutes/60) * 2π - π/2 + (seconds/60) * (2π/60);
    const secondAngle = (seconds/60) * 2π - π/2;
    
    // Draw hands using canvas
    drawHand(cx, cy, hourAngle, length, width, color);
    drawHand(cx, cy, minuteAngle, length, width, color);
    drawHand(cx, cy, secondAngle, length, width, color);
}