# Scroll-Driven Parallax Header

A pure CSS hero section demonstrating the **CSS Scroll-Driven Animations API** with multiple visual layers moving at different speeds according to the user's scroll position.

## ✨ Features

- Native CSS `animation-timeline: scroll()`
- Multiple parallax layers
- Staggered Y-axis movement
- Animated hero typography
- Scroll progress indicator
- Responsive layout
- Dark-mode compatible
- Light-mode compatible
- No JavaScript scroll listeners
- No external animation libraries
- Reduced-motion support
- Keyboard-accessible navigation
- Graceful fallback for browsers without scroll timelines

## 🌊 How It Works

The decorative layers are connected to the document scroll timeline:

```css
animation-timeline: scroll(root block);