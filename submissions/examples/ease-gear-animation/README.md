# ⚙️ Gear Animation · Pure CSS

A **pure CSS gear animation component** with multiple interlocking gears spinning in opposite directions — no JavaScript required!

---

## 🎯 **Overview**

This component creates a realistic mechanical gear system using only HTML and CSS. Three gears of different sizes spin continuously with smooth animations, demonstrating the power of CSS keyframes and transforms.

### ✨ Features
- ✅ **3 Interlocking Gears** — Large, medium, and small sizes
- ✅ **Opposite Directions** — Main gear spins clockwise, others counter-clockwise
- ✅ **Pure CSS** — No images, no JavaScript, no external dependencies
- ✅ **Interactive Controls** — Pause, speed toggle, and reset
- ✅ **Fully Responsive** — Adapts to all screen sizes
- ✅ **Smooth Animations** — 60fps performance with CSS hardware acceleration

---

## 📁 **File Structure**
|── index.html # Main structure
├── style.css # All styles & animations
└── README.md # Documentation


---

## 🚀 **How It Works**

### **Gear Construction**
Each gear is built using:
- **Teeth**: `<span>` elements positioned with CSS `transform: rotate()` and `translateY()`
- **Body**: Circular container with `border-radius: 50%`
- **Center**: Inner circle with a hole (using radial gradient and border)

### **Animation Logic**
```css
/* Main gear — clockwise */
@keyframes spinClockwise {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Small gears — counter-clockwise */
@keyframes spinCounterClockwise {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}