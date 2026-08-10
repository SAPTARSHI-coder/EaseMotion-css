# 📄 Folding Card – Folds Like Paper in 3D

> A realistic, tactile card that folds like paper in 3D space on hover, creating a satisfying, physical folding effect with front and back faces.

---

## 📖 Description

The **Folding Card** is a tactile UI component that simulates a piece of paper folding in 3D space on hover. The card rotates 180 degrees around its horizontal axis, revealing a hidden back face with a satisfying paper-like folding effect. The component features a clean front face with content and a back face with a surprise reveal, all connected by a subtle fold line.

The effect uses CSS 3D transforms with `perspective` and `transform-style: preserve-3d` to create a realistic, three-dimensional folding motion. A smooth `cubic-bezier` easing with a spring-like overshoot makes the fold feel natural and satisfying. The fold line adds a subtle detail that reinforces the paper metaphor.

Perfect for interactive storytelling, surprise reveals, onboarding flows, and any application where you want to create a sense of discovery and physicality. The Folding Card transforms a simple card into a tactile, memorable experience.

---

## 🎯 Perfect For

- ✅ **Interactive storytelling** and narrative experiences
- ✅ **Surprise reveals** (hidden messages, bonus content)
- ✅ **Onboarding flows** with progressive disclosure
- ✅ **Educational content** (flashcards, study aids)
- ✅ **Product showcases** with before/after states
- ✅ **Creative portfolios** and design showcases
- ✅ **Greeting cards** and digital stationery
- ✅ **Game interfaces** (reveal mechanics, achievements)
- ✅ **Invitations** (reveal details, RSVP)

---

## ✨ Key Highlights

| Feature | Description |
|---------|-------------|
| **3D Fold Effect** | Card rotates 180° on horizontal axis like paper |
| **Two Faces** | Front and back with different content |
| **Fold Line** | Subtle line appears at the fold point |
| **Smooth Animation** | `cubic-bezier` easing for natural feel |
| **Hover Trigger** | Folds on hover, unfolds on leave |
| **Click Toggle** | Click to fold/unfold (mobile friendly) |
| **Accessible** | `:focus-visible` and keyboard support |
| **Responsive** | Adapts to all screen sizes |
| **Performance Optimized** | GPU-accelerated transforms |

---

## 🚀 Quick Start

1. Place `index.html` and `style.css` in the same folder
2. Open `index.html` in your browser
3. Hover over the card to watch it fold

```bash
/folding-card/
├── index.html      # HTML structure + embedded JS
├── style.css       # All styles + animations
└── README.md       # Documentation (this file)