# Bento Grid Layout

A modern, asymmetric grid layout inspired by Apple, Linear, and Vercel. Built entirely with pure CSS Grid — no JavaScript required. Perfect for feature showcases, dashboards, portfolios, and landing pages.

## ✨ Features

- 🎨 **Asymmetric Layout**: Cards of different sizes (large, wide, tall, standard) create visual interest
- ⚡ **Pure CSS Grid**: No JavaScript, no external libraries
- 🌈 **Animated Glow Effect**: Subtle gradient glow slides across cards on hover
- 📊 **Built-in Components**: Stats, mini-charts, and avatar groups included
- 🎯 **Hover Micro-interactions**: Smooth lift, icon rotation, and bar animations
- 📱 **Fully Responsive**: 4-column → 2-column → 1-column breakpoints
- ♿ **Accessible**: Respects `prefers-reduced-motion` and includes focus states
- 🎭 **Multiple Color Variants**: 6 gradient themes for icons

## 📂 File Structurebento-grid-layout/

├── demo.html # HTML structure with 7 bento cards
├── style.css # Grid layout, animations, and responsive styles
└── README.md # Documentation

## 🚀 How It Works

### The CSS Grid Magic

The asymmetric layout is achieved using CSS Grid's `span` property:

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(180px, auto);
  gap: 1.25rem;
}

.bento-card--large {
  grid-column: span 2; /* Takes 2 columns */
  grid-row: span 2; /* Takes 2 rows */
}
```
