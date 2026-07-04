# 🥷 Math Ninja

Train your math skills as a ninja! Solve equations by striking the correct answer. Build combos, level up, and beat the clock in this fast-paced educational game.

## 🎮 How to Play

- **Read the equation** displayed at the top
- **Click the correct answer** from 4 options
- **Build combos** by answering correctly in a row
- **Level up** every 10 correct answers
- **Beat the clock** before time runs out!

## ✨ Features

- **⚡ Scaling Difficulty** - Problems get harder as you level up
- **🔥 Combo System** - Chain correct answers for bonus points
- **⏱️ Time Pressure** - Race against the clock
- **🥷 Ninja Theme** - Immersive visual design with animations
- **🎯 3 Difficulty Levels** - Easy, Medium, Hard
- **🎵 Sound Effects** - Audio feedback for actions
- **⌨️ Keyboard Support** - Press 1-4 for quick answers
- **📊 Detailed Stats** - Track your performance

## 🎯 Difficulty Levels

| Level | Timer | Max Numbers |
|-------|-------|-------------|
| 😊 Easy | 35s | 1-12 |
| 🤔 Medium | 25s | 1-20 |
| 😈 Hard | 15s | 1-30+ |

## 🔢 Operations

| Level | Operations | Example |
|-------|------------|---------|
| 1-2 | +, - | 12 + 8 = ? |
| 3-4 | +, -, × | 6 × 7 = ? |
| 5+ | +, -, ×, ÷ | 24 ÷ 6 = ? |

## 🏆 Scoring

| Action | Points |
|--------|--------|
| Correct Answer | 10 × (1 + combo/3) |
| Combo Bonus | +5 per 5 combo |
| Level Up | Bonus points |

## 🎮 Controls

| Action | Desktop | Mobile |
|--------|---------|--------|
| Select Answer | Click button / 1-4 | Tap button |
| Start Game | Click "Start Training" | Tap button |
| Restart | Click "Train Again" | Tap button |
| Toggle Sound | Click "Sound" | Tap "Sound" |

## 💡 Tips & Strategies

1. **Build Combos** - Chain correct answers for massive bonus points
2. **Watch the Timer** - Time pressure increases with difficulty
3. **Level Up Fast** - Every 10 correct answers increases difficulty
4. **Use Keyboard** - Press 1-4 for faster response
5. **Stay Calm** - Panic leads to mistakes, focus on accuracy

## 🛠️ Technical Details

### Physics & Animation
- Particle effects for correct/wrong answers
- Shuriken throw animations
- Combo pop-up notifications
- Smooth UI transitions

### Equation Generation
```javascript
// Difficulty scaling
maxNum = 10 + level * 2
operations = ['+', '-', '×', '÷'] // based on level

// Generate wrong answers
while wrongAnswers < 3:
    offset = random(1, 10)
    wrong = correctAnswer ± offset
    if wrong > 0: add to set