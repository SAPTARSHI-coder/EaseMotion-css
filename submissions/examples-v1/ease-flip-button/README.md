# 🔄 Flip Button – 3D Flip Reveal

> A dynamic button that flips like a card to reveal alternative text and icon on the back, creating a satisfying 3D transformation.

---

## 📖 Description

The **Flip Button** is an engaging UI component that simulates a 3D card flip on hover or click. The button rotates 180 degrees around its vertical axis, revealing alternative content (text and icon) on the back face. This creates a satisfying, tactile interaction that's perfect for actions with multiple states or confirmation flows.

The flip effect uses CSS 3D transforms with `perspective` and `transform-style: preserve-3d` to create a realistic, three-dimensional rotation. The front and back faces are styled differently, with the back face hidden until the flip is triggered. A smooth `cubic-bezier` easing makes the flip feel natural and polished.

---

## 🎯 Perfect For

- ✅ **Confirmation flows** (Send → Sent!, Submit → Submitted!)
- ✅ **State toggles** (Play → Pause, Like → Liked)
- ✅ **Multi-action buttons** (Show more → Show less)
- ✅ **Call-to-action buttons** with dual states
- ✅ **Interactive forms** and submission feedback
- ✅ **Gaming interfaces** (card flips, reveal mechanics)
- ✅ **Educational content** (question → answer, hint → reveal)
- ✅ **E-commerce** (Add to cart → Added!)
- ✅ **Brand moments** with playful interactions
- ✅ **Settings toggles** with visual feedback

---

## ✨ Key Highlights

| Feature | Description |
|---------|-------------|
| **3D Flip Effect** | Realistic card-style rotation on hover or click |
| **Dual Faces** | Front and back with different content |
| **Smooth Animation** | `cubic-bezier` easing for natural feel |
| **Hover Trigger** | Flips on hover for immediate feedback |
| **Click Toggle** | Flips and stays flipped on click |
| **Keyboard Support** | Accessible via Enter/Space keys |
| **Double-click Reset** | Reset to front on double-click |
| **Icon Support** | Font Awesome integration |
| **Focus States** | `:focus-visible` for accessibility |
| **Responsive** | Adapts to all screen sizes |
| **Pure CSS Core** | Works with CSS (JS for enhancements) |
| **Performance Optimized** | GPU-accelerated transforms |

---

## 🚀 Quick Start

1. Place `index.html` and `style.css` in the same folder
2. Open `index.html` in your browser
3. Hover over the button to watch it flip and reveal the back

```bash
/flip-button/
├── index.html      # HTML structure + embedded JS
├── style.css       # All styles + animations
└── README.md       # Documentation (this file)