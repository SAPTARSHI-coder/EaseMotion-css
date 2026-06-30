# Command Palette Shortcut Chip

Issue: #6192

Built for EaseMotion CSS — a lightweight CSS framework focused on reusable animations, interactive effects, and human-readable class naming.

## Overview

A reusable keyboard shortcut chip component inspired by command palettes and modern productivity tools. It combines keycap styling, hover animations, and glassmorphism effects into a compact UI element.

## Features

- Command palette inspired design
- Keyboard shortcut visualization
- Keycap styling using `<kbd>`
- Hover lift animation
- Glassmorphism appearance
- Premium variant
- Responsive layout
- Pure HTML and CSS
- No JavaScript required

## Usage

```html
<div class="shortcut-chip">
  <span class="label">Search</span>

  <div class="keys">
    <kbd>⌘</kbd>
    <kbd>K</kbd>
  </div>
</div>
```

## Main Classes

```css
.shortcut-chip
.keys
.label
.premium
```

## Why It Fits EaseMotion CSS

- Adds a unique UI primitive
- Does not overlap existing button/card patterns
- Reusable across dashboards and docs
- Human-readable class names
- Lightweight implementation

## Files

- demo.html
- style.css
- README.md
