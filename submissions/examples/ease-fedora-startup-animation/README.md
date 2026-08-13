# 🌀 Fedora Startup Animation · Pure CSS

A **pure CSS recreation** of the Fedora Linux boot screen featuring the iconic Infinity logo, loading bar, systemd service messages, and terminal prompt — no JavaScript required!

---

## 🎯 **Overview**

This component recreates the Fedora Linux boot experience using only HTML and CSS. It features a CSS-built Infinity logo (Fedora's iconic symbol), a terminal-style progress bar with shimmer effect, sequential systemd service messages, a terminal prompt with cursor, and a clean dark aesthetic — all powered by CSS keyframes and animations.

### ✨ Features
- ✅ **Infinity Logo** — Pure CSS Fedora logo with glow and pulse effects
- ✅ **Terminal Loading Bar** — Progress bar with shimmer (0% → 100%)
- ✅ **Systemd Messages** — 10 sequential service startup messages
- ✅ **Terminal Prompt** — Fedora-style prompt with blinking cursor
- ✅ **OS Info** — Fedora 39 Workstation Edition details
- ✅ **Boot Footer** — Kernel version and boot time display
- ✅ **Pure CSS** — No JavaScript, no images, no external dependencies
- ✅ **Fully Responsive** — Adapts to all screen sizes
- ✅ **Dark Theme** — Clean terminal aesthetic with Fedora green

---

## 📁 **File Structure**
fedora-startup-animation/
├── index.html # Main structure
├── style.css # All styles & animations
└── README.md # Documentation


---

## 🚀 **How It Works**

### **1. Fedora Infinity Logo**
The Infinity logo is built using pure CSS with positioned elements:
```css
.infinity-left {
  /* Left loop of infinity */
  border: 5px solid #00ff88;
  border-radius: 50%;
  border-right: none;
  border-top: none;
  transform: rotate(-45deg);
}

.infinity-right {
  /* Right loop of infinity */
  border-left: none;
  border-bottom: none;
  transform: rotate(-45deg);
}

.infinity-center {
  /* Center dot */
  background: #00ff88;
  border-radius: 50%;
}
