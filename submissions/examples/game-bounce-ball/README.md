# 🏀 Bounce Ball

Keep the ball bouncing within a shrinking circle! Move the paddle to bounce the ball upward, collect power-ups, and survive as the circle gets smaller.

## 🎮 How to Play

- **Move your mouse** or finger to control the paddle
- **Bounce the ball** to keep it inside the circle
- **Collect power-ups** for special abilities
- **Survive** as the circle shrinks over time
- **Score points** with each bounce

## ✨ Features

- **🏀 Dynamic Gameplay** - Ball physics with shrinking circle
- **⚡ 3 Power-ups** - Multi-Ball, Slow Motion, Shield
- **🎨 Visual Effects** - Particle trails, glow effects
- **📈 Progressive Difficulty** - Level up with bounces
- **🎯 Multiple Balls** - Multi-ball power-up creates extra balls
- **🛡️ Shield Protection** - Saves you from losing a ball
- **🐢 Slow Motion** - Slows down time for easier control

## 🎯 Power-ups

| Power-up | Effect | Icon | Duration |
|----------|--------|------|----------|
| Multi-Ball | Spawn 2 extra balls | ⚡ | 5 seconds |
| Slow Motion | Slows game speed by 50% | 🐢 | 5 seconds |
| Shield | Protects from one loss | 🛡️ | Until used |

## 🏆 Scoring

| Action | Points |
|--------|--------|
| Bounce on circle wall | 10 × Level |
| Bounce on paddle | 15 × Level |
| Survival bonus | 0.1 × Level per frame |
| Level up | Bonus effects |

## 🎮 Controls

| Action | Desktop | Mobile |
|--------|---------|--------|
| Move paddle | Mouse move | Touch drag |
| Start/Restart | Space / Click | Tap |
| Keyboard | ← → arrows | - |

## 💡 Tips & Strategies

1. **Stay Centered** - Keep the paddle under the ball
2. **Watch the Circle** - It shrinks faster at higher levels
3. **Collect Power-ups** - They can save you in tough situations
4. **Use Shield Wisely** - It only protects once
5. **Practice Timing** - The ball speeds up over time

## 🛠️ Technical Details

### Physics System
```javascript
// Ball movement with gravity
ball.x += ball.vx * speedMultiplier;
ball.y += ball.vy * speedMultiplier;
ball.vy += gravity;

// Circle collision
if (dist + ball.radius > circleRadius) {
    // Reflect ball
    const dot = ball.vx * nx + ball.vy * ny;
    ball.vx -= 2 * dot * nx;
    ball.vy -= 2 * dot * ny;
}

// Paddle collision
if (ball hits paddle) {
    const hitPos = (ball.x - paddle.x) / (paddle.width / 2);
    const angle = hitPos * Math.PI / 3;
    ball.vx = Math.sin(angle) * speed;
    ball.vy = -Math.cos(angle) * speed;
}