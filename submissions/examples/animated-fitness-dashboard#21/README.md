# Animated Fitness Tracker Dashboard

A comprehensive **Fitness Tracker Dashboard** built with **EaseMotion CSS**. Features animated activity rings, pulsing heart rate with ECG line, weekly bar charts, hydration tracker with rising water animation, and workout history.

## ✨ Features

- **⭕ Activity Rings**: Three nested circular progress rings (Move, Exercise, Stand) with animated fill using SVG stroke-dashoffset
- **❤️ Heart Rate Monitor**: Pulsing heart icon using `ease-pulse` with animated ECG line drawing
- **📊 Weekly Bar Chart**: Animated bars that grow on load with hover tooltips
- **💧 Hydration Tracker**: Water glass with rising fill animation and floating bubbles
- **🏃 Workout History**: List of recent workouts with hover lift effects
- **📈 Quick Stats**: Steps, calories, distance, and active time with trend indicators
- **🎬 Staggered Entrance**: All sections slide up sequentially
- **📱 Fully Responsive**: Adapts from 3-column grid to single column on mobile

## 🧩 EaseMotion Classes Used

| Class | Purpose |
|-------|---------|
| `ease-fade-in` | Fades in the main page and footer |
| `ease-slide-up` | Slides sections up on entrance |
| `ease-delay-100` to `ease-delay-800` | Creates cascading staggered sequence |
| `ease-card` | Base card structure |
| `ease-hover-lift` | Lift effect on all cards and list items |
| `ease-hover-grow` | Scale effect on buttons and avatar |
| `ease-pulse` | **Looping pulse** on the heart icon |
| `ease-center` | Centers streak badge and avatar |
| `ease-grid` + `ease-grid-cols-*` | Responsive grid layouts |
| `ease-gap-4` | Spacing between grid items |
| `ease-btn` + `ease-btn-primary` | Styled add water button |

## 🚀 How to Use

1. Open `demo.html` in any modern browser
2. Watch all dashboard sections slide in with staggered animations
3. Observe the **activity rings fill** and **bars grow** on load
4. Watch the **ECG line draw** continuously and the **heart pulse**
5. See the **water rise** in the hydration glass with floating bubbles
6. Hover over bars to see tooltips, hover over cards for lift effects
7. Resize to mobile to see the responsive layout

## 🎨 Design Highlights

- **Dark Theme**: Modern dark UI with gradient mesh background
- **SVG Activity Rings**: Apple Watch-style nested rings with animated stroke
- **ECG Animation**: Continuous line drawing using stroke-dasharray
- **Water Bubbles**: Rising bubble animation in hydration tracker
- **Glassmorphism**: Frosted glass effect on all cards

## 🛠️ Technologies Used

- HTML5
- Custom CSS (SVG animations, Keyframes, CSS Grid, Custom Properties)
- EaseMotion CSS (via CDN)