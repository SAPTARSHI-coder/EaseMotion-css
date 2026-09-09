# Animated Weather Dashboard

A beautiful, modern **Weather Dashboard** built with **EaseMotion CSS**. Features floating clouds, an animated glowing sun, hourly/daily forecasts, and weather statistics — all with smooth staggered entrance animations.

## ✨ Features

- **☀️ Animated Sun**: Pulsing sun core with 8 glowing rays using `ease-pulse` and custom keyframes
- **☁️ Floating Clouds**: Three clouds drift across the sky continuously using CSS animations
- **🎬 Staggered Entrance**: Each section (header, current weather, stats, forecasts) slides up sequentially
- **📊 Weather Stats Grid**: 4 stat cards (humidity, wind, UV, visibility) with hover lift effects
- **⏰ Hourly Forecast**: Horizontally scrollable cards with active state highlighting
- **📅 5-Day Forecast**: Animated temperature bars that fill on load
- **🖱️ Interactive Hover**: All cards lift using `ease-hover-lift`, buttons scale with `ease-hover-grow`
- **📱 Fully Responsive**: Adapts from desktop grid to mobile stack layout

## 🧩 EaseMotion Classes Used

| Class | Purpose |
|-------|---------|
| `ease-fade-in` | Fades in the main page wrapper and footer |
| `ease-slide-up` | Slides sections up on entrance |
| `ease-delay-100` to `ease-delay-600` | Creates cascading staggered sequence |
| `ease-card` | Base card structure for stats |
| `ease-hover-lift` | Lift effect on all cards and rows |
| `ease-hover-grow` | Scale effect on refresh button |
| `ease-pulse` | **Looping pulse** on the sun core |
| `ease-center` | Centers the refresh button icon |
| `ease-grid` + `ease-grid-cols-4` | Responsive stats grid layout |
| `ease-gap-4` | Spacing between stat cards |

## 🚀 How to Use

1. Open `demo.html` in any modern browser
2. Watch the dashboard sections slide in with a staggered effect
3. Observe the **pulsing sun** and **floating clouds**
4. Scroll the hourly forecast horizontally
5. Watch the 5-day temperature bars animate on load
6. Hover over any card to see the lift effect
7. Resize to mobile to see the responsive layout

## 🎨 Design Highlights

- **Sky Gradient Background**: Beautiful blue gradient simulating a clear sky
- **Glassmorphism Cards**: Frosted glass effect on all weather cards
- **Custom Keyframes**: Cloud floating, sun ray glowing, temperature bar filling
- **Emoji Weather Icons**: Universal, lightweight weather representation
- **Active State**: Current hour highlighted in the hourly forecast

## 🛠️ Technologies Used

- HTML5
- Custom CSS (Keyframes, Gradients, Glassmorphism, CSS Grid)
- EaseMotion CSS (via CDN)