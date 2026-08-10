# 🔢 Badge Counter – Number Animates Up/Down

> A dynamic badge counter where the number animates up or down with a smooth flipping effect, providing satisfying visual feedback on value changes.

---

## 📖 Description

The **Badge Counter** component creates a dynamic badge counter where the number animates up or down with a smooth flipping effect. The badge features a circular design with a number that flips with a 3D rotation when incremented or decremented. The badge changes color based on the value (blue → green → pink → red), and pulses on each change for satisfying feedback.

The component includes increment, decrement, and reset buttons, with keyboard shortcuts (arrow keys, +/-, R, 0) for accessibility. The number animation uses CSS keyframes with `rotateX` for a realistic flipping effect, and `cubic-bezier` easing for natural motion.

Perfect for shopping carts, notification badges, score counters, and any application where you need a visually engaging counter. The Badge Counter transforms a simple number display into a delightful, interactive experience.

---

## 🎯 Perfect For

- ✅ **Shopping carts** (item count)
- ✅ **Notification badges** (unread count)
- ✅ **Score counters** (game scores)
- ✅ **Quantity selectors** (product quantity)
- ✅ **Likes/favorites** (count display)
- ✅ **Dashboard metrics** (live counters)
- ✅ **Form inputs** (quantity fields)
- ✅ **Inventory management** (stock counts)
- ✅ **Polling/voting** (vote counts)
- ✅ **Booking systems** (seat selection)

---

## ✨ Key Highlights

| Feature | Description |
|---------|-------------|
| **Flip Animation** | Number flips up/down with 3D rotation |
| **Color Changes** | Badge color changes based on value |
| **Pulse Feedback** | Badge pulses on every change |
| **Keyboard Shortcuts** | Arrow keys, +/-, R, 0 |
| **Increment/Decrement** | Easy value adjustment |
| **Reset Button** | Reset to zero |
| **Accessible** | `:focus-visible` support |
| **Responsive** | Adapts to all screen sizes |
| **Performance Optimized** | CSS animations for smooth 60fps |

---

## 🚀 Quick Start

1. Place `index.html` and `style.css` in the same folder
2. Open `index.html` in your browser
3. Click buttons to see the number animate

```bash
/badge-counter/
├── index.html      # HTML structure + embedded JS
├── style.css       # All styles + animations
└── README.md       # Documentation (this file)