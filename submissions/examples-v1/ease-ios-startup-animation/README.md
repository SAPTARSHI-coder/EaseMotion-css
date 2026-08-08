# 📱 iOS Startup Animation · Pure CSS

A **pure CSS recreation** of the Apple iOS boot screen featuring the iconic Apple logo, loading bar, status messages, and sleek iOS aesthetic — no JavaScript required!

---

## 🎯 **Overview**

This component recreates the iOS boot experience using only HTML and CSS. It features a CSS-built Apple logo, a sleek progress bar with shimmer effect, cycling status messages, and a clean dark aesthetic — all powered by CSS keyframes and animations.

### ✨ Features
- ✅ **Apple Logo** — Pure CSS Apple logo with leaf and bite
- ✅ **Smooth Progress Bar** — Progress bar with shimmer effect (0% → 100%)
- ✅ **Status Messages** — Cycling iOS startup messages
- ✅ **OS Info** — iOS 17.2.1 branding
- ✅ **Footer Elements** — Animated line and dots
- ✅ **Pure CSS** — No JavaScript, no images, no external dependencies
- ✅ **Fully Responsive** — Adapts to all screen sizes
- ✅ **Dark Theme** — Sleek iOS aesthetic
- ✅ **Light Theme Support** — Adapts to system preference

---

## 📁 **File Structure**
ios-startup-animation/
├── index.html # Main structure
├── style.css # All styles & animations
└── README.md # Documentation


---

## 🚀 **How It Works**

### **1. Apple Logo (Pure CSS)**
The Apple logo is built using pure CSS with positioned elements:
```css
.apple-body {
  /* Main body shape */
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  background: linear-gradient(135deg, #ffffff, #cccccc);
}

.apple-leaf {
  /* Leaf on top */
  border-radius: 50% 50% 0 50%;
  transform: rotate(-30deg);
}

.apple-bite {
  /* Bite on right side */
  border-radius: 0 50% 50% 0;
  box-shadow: -10px 0 0 0 #000;
}


