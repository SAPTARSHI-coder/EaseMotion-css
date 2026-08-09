# 🪟 Windows Startup Animation · Pure CSS

A **pure CSS recreation** of the classic Windows startup/boot screen with spinning dots, progress bar, and status messages — no JavaScript required!

---

## 🎯 **Overview**

This component recreates the nostalgic Windows boot experience using only HTML and CSS. It features a animated Windows logo, spinning loading dots, a progress bar, cycling status messages, and a clean dark theme — all powered by CSS keyframes and animations.

### ✨ Features
- ✅ **Windows Logo** — Animated 4-panel Windows icon with glow effect
- ✅ **Spinning Dots** — 5 dots with staggered bounce animation
- ✅ **Progress Bar** — Smooth loading animation with shimmer effect
- ✅ **Status Messages** — Cycling startup messages (6 different states)
- ✅ **Version Info** — Windows 11 Pro details
- ✅ **Footer Animations** — Dots and "Press any key" blink effect
- ✅ **Pure CSS** — No JavaScript, no images, no external dependencies
- ✅ **Fully Responsive** — Adapts to all screen sizes
- ✅ **Dark Theme** — Classic Windows boot aesthetic

---

## 📁 **File Structure**
windows-startup-animation/
├── index.html # Main structure
├── style.css # All styles & animations
└── README.md # Documentation

---

## 🚀 **How It Works**

### **1. Windows Logo**
The logo uses a 2x2 grid with 4 colored panels:
```css
.logo-window {
  display: grid;
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
  gap: 6px;
}