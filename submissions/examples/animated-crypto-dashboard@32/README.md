# Animated Crypto Finance Dashboard

A sleek **Crypto Dashboard** built with **EaseMotion CSS**. Features portfolio balance with animated sparkline, crypto price cards with mini charts, donut chart for distribution, transaction history, and live market watchlist.

## ✨ Features

- **💰 Portfolio Balance**: Large balance display with animated SVG sparkline chart
- **📈 Price Cards**: 4 crypto cards (BTC, ETH, SOL, ADA) with mini sparklines and change indicators
- **🍩 Donut Chart**: SVG-based portfolio distribution chart with animated fill
- **📋 Transaction History**: Buy/sell/transfer transactions with color-coded icons
- **📊 Market Watchlist**: Live-style ranking with price and change data
- **🟢 Live Indicator**: Pulsing "Live" badge using `ease-pulse`
- **🎬 Staggered Entrance**: All sections slide up sequentially
- **📱 Fully Responsive**: Multi-column to single column adaptation

## 🧩 EaseMotion Classes Used

| Class | Purpose |
|-------|---------|
| `ease-fade-in` | Fades in the main page and footer |
| `ease-slide-up` | Slides sections up on entrance |
| `ease-delay-100` to `ease-delay-700` | Creates cascading staggered sequence |
| `ease-card` | Base card structure |
| `ease-hover-lift` | Lift effect on all cards |
| `ease-hover-grow` | Scale effect on buttons and avatars |
| `ease-pulse` | **Looping pulse** on notification dot and live indicator |
| `ease-center` | Centers notification button icon |
| `ease-grid` + `ease-grid-cols-*` | Responsive grid layouts |
| `ease-gap-4` | Spacing between grid items |

## 🚀 How to Use

1. Open `demo.html` in any modern browser
2. Watch all dashboard sections slide in with staggered animations
3. Observe the **sparkline chart drawing** animation on load
4. See the **donut chart segments fill** progressively
5. Hover over cards to see lift effects
6. Notice the **pulsing live indicator** and notification dot
7. Resize to mobile to see the responsive layout

## 🎨 Design Highlights

- **Dark Theme with Neon Accents**: Modern crypto aesthetic with glowing colors
- **SVG Charts**: Hand-crafted sparklines and donut chart with CSS animations
- **Monospace Numbers**: JetBrains Mono for financial data display
- **Grid Background**: Subtle grid overlay for tech aesthetic
- **Color-Coded Assets**: Unique colors for BTC, ETH, SOL, ADA

## 🛠️ Technologies Used

- HTML5
- Custom CSS (SVG animations, Keyframes, CSS Grid, Custom Properties)
- EaseMotion CSS (via CDN)