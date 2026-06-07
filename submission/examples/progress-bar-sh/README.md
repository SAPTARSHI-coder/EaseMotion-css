# Animated Progress Bar Component (`-sh`)

A self-contained, lightweight, animation-first progress bar component built for EaseMotion CSS. It allows developers to quickly display smooth loading tracks and animated striped progress indicators using pure CSS.

## ✨ Features
- **Animation-First:** Automatically triggers a fluid fill animation on page load using custom `cubic-bezier` timing curves.
- **Token Driven:** Uses a CSS custom property (`--progress-value-sh`) to set the progress percentage dynamically via inline styles.
- **Zero Namespace Collisions:** Built entirely with a strict `-sh` suffix identifier to follow the repository's merge guidelines perfectly.
- **Responsive & Modern:** Built using flexible structural containers that adapt to any parent element layout width.

## 📦 Components Included
1. **Standard Progress Bar:** A smooth gradient filler animating from 0% to the designated target width.
2. **Animated Striped Progress Bar:** An active loading track featuring shifting diagonal stripes driven by background-position keyframes.

## 🚀 Usage Guide

### 1. Standard Progress Bar
To render a basic progress indicator, declare the target progress using the `--progress-value-sh` variable inline:

```html
<div class="ease-progress-wrapper-sh" style="--progress-value-sh: 75%;">
  <div class="ease-progress-bar-sh"></div>
</div>
2. Animated Striped Variant
To display an active, moving loading state, add the utility modifier class .ease-progress-striped-sh:

HTML
<div class="ease-progress-wrapper-sh" style="--progress-value-sh: 45%;">
  <div class="ease-progress-bar-sh ease-progress-striped-sh"></div>
</div>
Submitted as a valid feature implementation for GSSoC 2026.


---