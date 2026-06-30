# EaseMotion - Combined Animation Utilities

## Overview

This demo introduces **composable animation utilities** that allow developers to combine multiple effects without writing custom CSS.

Instead of manually merging keyframes, developers can use predefined utility classes.

---

## ✨ Supported Combinations

### 1. Fade + Slide

- `.fade-slide-up`
- `.fade-slide-down`

### 2. Fade + Zoom

- `.fade-zoom-in`

### 3. Fade + Rotate

- `.fade-rotate-in`

---

## 🚀 Why This Approach?

### Before (Problem)

Developers had to write custom CSS like:

```css
.my-card {
  animation:
    fade 0.5s,
    slide-up 0.5s;
}
```
