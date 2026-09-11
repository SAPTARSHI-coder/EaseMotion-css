# Animated Crypto Dashboard

A sleek **Cryptocurrency Portfolio Dashboard** built with **EaseMotion CSS**. Features animated portfolio sparkline, price cards with trend indicators, asset allocation donut chart, transaction history, and market overview.

## ✨ Features

- **📊 Portfolio Balance**: Large balance display with animated sparkline chart drawing effect
- **💰 Asset Cards**: 4 crypto cards (BTC, ETH, SOL, ADA) with price, sparklines, and holdings
- **📈 Trend Indicators**: Green/red percentage badges for price changes
- **🍩 Asset Allocation**: Animated SVG donut chart showing portfolio distribution
- **📜 Transaction History**: Recent transactions with type icons (send, receive, swap, buy)
- **🌍 Market Overview**: Market cap, volume, BTC dominance, and Fear & Greed index
- **📰 Latest News**: Crypto news feed with timestamps
- **🎬 Staggered Entrance**: All sections slide up sequentially
- **📱 Fully Responsive**: Adapts from 4-column to 1-column layout

## 🧩 EaseMotion Classes Used

| Class | Purpose |
|-------|---------|
| `ease-fade-in` | Fades in the main page and footer |
| `ease-slide-up` | Slides sections up on entrance |
| `ease-delay-100` to `ease-delay-700` | Creates cascading staggered sequence |
| `ease-card` | Base card structure |
| `ease-hover-lift` | Lift effect on all cards |
| `ease-hover-grow` | Scale effect on buttons and avatars |
| `ease-center` | Centers refresh button icon |
| `ease-grid` + `ease-grid-cols-*` | Responsive grid layouts |
| `ease-gap-4` | Spacing between grid items |
| `ease-pulse` | **Looping pulse** on market status indicator |

## 🚀 How to Use

1. Open `demo.html` in any modern browser
2. Watch all dashboard sections slide in with staggered animations
3. Observe the **portfolio sparkline draw** animation on load
4. Watch the **donut chart segments** animate into place
5. See the **price sparklines** draw themselves
6. Hover over cards to see lift effects and glow borders
7. Resize to mobile to see the responsive layout

## 🎨 Design Highlights

- **Dark Theme**: Modern crypto dashboard aesthetic with glowing accents
- **SVG Sparklines**: Animated line drawing using stroke-dasharray/dashoffset
- **Donut Chart**: Multi-segment SVG circle with rotation transforms
- **Monospace Numbers**: JetBrains Mono font for financial data
- **Glassmorphism**: Frosted glass effect on all cards
- **Glow Effects**: Background orbs with blur for depth

## 🛠️ Technologies Used

- HTML5
- Custom CSS (SVG animations, Keyframes, CSS Grid, Custom Properties)
- EaseMotion CSS (via CDN)