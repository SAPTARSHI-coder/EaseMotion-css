# 📄 Paper Toss

A classic Paper Toss arcade game built with HTML, CSS, and JavaScript. Toss paper balls into a trash can while battling wind physics and increasing distance!

## 🎮 How to Play

1. Click **"Start Game"** to begin
2. **Aim** by clicking and dragging on the paper ball
3. **Set power** by dragging back (further = more power)
4. **Release** to toss the paper
5. **Watch the wind** — it affects your trajectory!
6. **Score points** for each successful toss
7. **Level up** as you progress!

## 🖱️ Controls

| Action | Input |
|--------|-------|
| Aim/Shoot | Click and drag on paper |
| Shoot | Release mouse/touch |
| Auto-Aim | Click "Aim" button |
| Start Game | Click Start or press `Space` |
| Reset Game | Press `R` |

## ✨ Features

- 📄 **Realistic Physics** – Gravity, trajectory, and wind effects
- 💨 **Wind System** – Dynamic wind affects paper trajectory
- 📈 **Progressive Difficulty** – Distance increases with each level
- 🎯 **Scoring System** – Points for each successful toss
- 🔥 **Streak System** – Bonus points for consecutive successes
- 🏆 **Best Score** – Saved in browser local storage
- 🎨 **Visual Feedback** – Trail effects, particles, and power meter
- 📱 **Responsive Design** – Works on desktop and mobile
- 🖱️ **Touch Support** – Play on mobile devices

## 🎯 Scoring

| Action | Points |
|--------|--------|
| Successful Toss | 10 + (Level × 2) |
| Streak Bonus | +5 per 5 streak |
| Level Up | Distance increases |

## 📊 Difficulty Progression

| Level | Distance | Wind Max |
|-------|----------|----------|
| 1 | 200px | 0.8 |
| 2 | 215px | 0.9 |
| 3 | 230px | 1.0 |
| 4+ | +15px per level | +0.05 per level |

## 🛠️ Technologies Used

- HTML5 Canvas
- CSS3 (Gradients, responsive design)
- Vanilla JavaScript (Physics engine)

