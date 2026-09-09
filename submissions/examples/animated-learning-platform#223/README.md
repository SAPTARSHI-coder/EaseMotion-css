# Animated Education/Learning Platform

A comprehensive **Learning Platform Dashboard** built with **EaseMotion CSS**. Features course progress cards, learning path visualization, achievement badges, XP system, leaderboard rankings, and subject categories.

## ✨ Features

- **📚 Course Cards**: Progress bars, instructor info, video thumbnails with play overlay
- **🗺️ Learning Path**: Step-by-step progression with completed/active/locked states
- **🏆 Achievements**: Grid of unlocked and locked achievement badges
- **⚡ XP System**: Experience points display and streak counter
- **🏅 Leaderboard**: Weekly rankings with position indicators
- **📂 Subject Categories**: Grid of course categories with icons
- **📊 Weekly Goal**: Progress bar showing learning hours completed
- **🎬 Staggered Entrance**: All sections slide up sequentially
- **📱 Fully Responsive**: Multi-column to single column adaptation

## 🧩 EaseMotion Classes Used

| Class | Purpose |
|-------|---------|
| `ease-fade-in` | Fades in the main page and footer |
| `ease-slide-up` | Slides sections up on entrance |
| `ease-delay-100` to `ease-delay-800` | Creates cascading staggered sequence |
| `ease-card` | Base card structure |
| `ease-hover-lift` | Lift effect on all cards and items |
| `ease-hover-grow` | Scale effect on buttons and badges |
| `ease-center` | Centers play overlay button |
| `ease-grid` + `ease-grid-cols-*` | Responsive grid layouts |
| `ease-gap-4` | Spacing between grid items |
| `ease-pulse` | **Looping pulse** on current learning path step |

## 🚀 How to Use

1. Open `demo.html` in any modern browser
2. Watch all dashboard sections slide in with staggered animations
3. Observe the **progress bars filling** on load
4. Hover over course cards to see play overlay appear
5. Notice the **pulsing current step** in learning path
6. Hover over achievements and leaderboard items for effects
7. Resize to mobile to see the responsive layout

## 🎨 Design Highlights

- **Purple Education Theme**: Modern learning platform aesthetic
- **Gamification Elements**: XP, streaks, achievements, leaderboard
- **Progress Visualization**: Multiple progress bars and completion states
- **Play Overlay**: Video play button appears on course card hover
- **Color-Coded States**: Completed (green), Active (purple), Locked (gray)

## 🛠️ Technologies Used

- HTML5
- Custom CSS (Keyframes, CSS Grid, Custom Properties)
- EaseMotion CSS (via CDN)