# Skeleton Shimmer Loader

## Overview
This submission adds a modern, pure-CSS **Skeleton Shimmer Loader** to the EaseMotion CSS ecosystem. It provides a smooth, hardware-accelerated loading state that improves perceived performance and user experience while data is being fetched.

## Features
- ⚡ **Hardware Accelerated**: Uses `background-position` translation for a smooth 60fps shimmer effect without triggering layout repaints.
- 🌓 **Light & Dark Mode Ready**: Built-in CSS variables automatically adapt to dark mode containers via the `.dark-mode` class.
- 🧩 **Composable**: Works seamlessly with EaseMotion utility classes (e.g., `ease-flex`, `ease-gap-4`) for rapid layout prototyping.
- ♿ **Accessible**: Respects `prefers-reduced-motion` by disabling the animation and falling back to a static base color for users with vestibular motion disorders.

## Usage

### 1. Include EaseMotion CSS (if not already included)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css" />
