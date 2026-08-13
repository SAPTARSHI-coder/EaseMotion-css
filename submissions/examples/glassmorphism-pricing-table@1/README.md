# Glassmorphism Pricing Table

A stunning, modern **glassmorphism pricing table** built with **EaseMotion CSS**. Features three pricing tiers with staggered entrance animations, floating background blobs, and interactive hover effects.

## ✨ Features

- **🎭 Glassmorphism Design**: Frosted glass cards using `backdrop-filter` with semi-transparent backgrounds
- **🎬 Staggered Animations**: Each card enters sequentially using `ease-slide-up` with `ease-delay-400`, `ease-delay-500`, and `ease-delay-600`
- **🖱️ Interactive Hover**: Cards lift smoothly using `ease-hover-lift` and buttons scale with `ease-hover-grow`
- **🔥 Featured Plan Highlight**: The "Pro" plan stands out with a glowing border and "Most Popular" badge
- **📱 Fully Responsive**: Grid layout adapts from 3 columns → 1 column on mobile
- **🌈 Animated Background**: Floating gradient blobs add depth and visual interest

## 🧩 EaseMotion Classes Used

| Class | Purpose |
|-------|---------|
| `ease-center` | Centers the main wrapper |
| `ease-fade-in` | Fades in header and footer |
| `ease-slide-up` | Slides cards up on entrance |
| `ease-delay-100` to `ease-delay-600` | Creates staggered animation sequence |
| `ease-card` | Base card component |
| `ease-grid` + `ease-grid-cols-3` | Responsive 3-column layout |
| `ease-gap-6` | Spacing between cards |
| `ease-hover-lift` | Lift effect on featured card |
| `ease-hover-grow` | Scale effect on buttons |
| `ease-btn` + `ease-btn-primary` / `ease-btn-outline` | Styled action buttons |

## 🚀 How to Use

1. Open `demo.html` in any modern browser
2. Watch the cards animate in with a staggered effect
3. Hover over the "Pro" card to see the lift animation
4. Hover over buttons to see the grow effect
5. Resize the browser to see the responsive behavior

## 🛠️ Technologies Used

- HTML5
- Custom CSS (Glassmorphism + Keyframes)
- EaseMotion CSS (via CDN)

## 📸 Preview

The demo shows three pricing tiers:
- **Basic** ($9/mo) - Outline button
- **Pro** ($29/mo) - Featured card with primary button 🔥
- **Enterprise** ($99/mo) - Outline button