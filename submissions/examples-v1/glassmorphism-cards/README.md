# Glassmorphism Cards Submission

## Overview
This submission adds a modern, accessible, and animation-first **Glassmorphism Card** component to the EaseMotion CSS ecosystem. It leverages native CSS `backdrop-filter`, smooth cubic-bezier transitions, and a subtle gradient glow effect on hover, fully aligning with EaseMotion's "human-readable" and "zero-dependency" philosophy.

## Features
- 🧊 **True Glassmorphism**: Uses `backdrop-filter: blur()` with semi-transparent backgrounds and borders.
- ✨ **Smooth Hover Transitions**: Lifts and scales subtly using EaseMotion's standard speed and easing tokens.
- 🌈 **Optional Gradient Glow**: Add the `.ease-hover-glow` class to enable a sleek, animated border glow on hover.
- ♿ **Accessible**: Respects `prefers-reduced-motion` natively through CSS media queries, aligning with EaseMotion's core accessibility standards.

## Usage

### 1. Include EaseMotion CSS (if not already included)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css" />