# 🐧 Linux Startup Animation · Pure CSS

A **pure CSS recreation** of the classic Linux boot screen with Tux penguin, terminal-style loading bar, systemd service messages, and interactive terminal cursor — no JavaScript required!

---

## 🎯 **Overview**

This component recreates the nostalgic Linux boot experience using only HTML and CSS. It features an ASCII-style Tux penguin logo, a terminal-style progress bar, systemd service startup messages, a blinking cursor, and a dark terminal aesthetic — all powered by CSS keyframes and animations.

### ✨ Features
- ✅ **Tux Penguin Logo** — ASCII-art style Linux mascot with pulse animation
- ✅ **Terminal Loading Bar** — Progress bar with shimmer effect (0% → 100%)
- ✅ **Systemd Messages** — 10 service startup messages appearing sequentially
- ✅ **Terminal Cursor** — Blinking cursor with Ubuntu prompt
- ✅ **Version Info** — Ubuntu 22.04.3 LTS with kernel version
- ✅ **Interactive Elements** — "Press Esc to skip" with kbd styling
- ✅ **Pure CSS** — No JavaScript, no images, no external dependencies
- ✅ **Fully Responsive** — Adapts to all screen sizes
- ✅ **Dark Theme** — Classic Linux terminal aesthetic

---

## 📁 **File Structure**
linux-startup-animation/
├── index.html # Main structure
├── style.css # All styles & animations
└── README.md # Documentation

---

## 🚀 **How It Works**

### **1. Tux Penguin Logo**
The Tux logo is built using pure CSS with positioned elements:
```css
.tux-head { /* Head shape */ }
.tux-head::before { /* Eyes */ }
.tux-head::after { /* Beak */ }
.tux-body { /* Body */ }
.tux-arm-left, .tux-arm-right { /* Arms */ }
.tux-feet { /* Feet */ }