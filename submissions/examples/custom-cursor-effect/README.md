# Custom Cursor Effect

## Overview

The Custom Cursor Effect is a modern interactive cursor animation that replaces the default browser cursor with a smooth animated cursor follower. It enhances user interaction by providing visual feedback through scaling, glowing, and hover effects.

This component is ideal for portfolios, landing pages, creative websites, and interactive web applications.

---

## Features

* Smooth cursor follower animation
* Hover scaling effect
* Glow effect
* Multiple color variants
* Multiple size variants
* Lightweight and customizable
* Responsive design
* Easy integration

---

## Folder Structure

```text
custom-cursor-effect/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

### HTML

```html
<div class="cursor"></div>
```

### CSS

```html
<link rel="stylesheet" href="style.css">
```

### JavaScript

The cursor follows the mouse position and reacts to hover events on interactive elements.

---

## Variants

### Size Variants

* Small Cursor
* Medium Cursor
* Large Cursor

### Color Variants

* Primary
* Success
* Danger
* Warning

---

## Interactive Effects

### Cursor Follow

The cursor smoothly follows the pointer movement.

### Hover Scale

When hovering over buttons or links, the cursor expands to highlight interactive elements.

### Glow Animation

The cursor emits a soft glow effect for enhanced visibility and modern aesthetics.

---

## Customization

Modify the following CSS variables:

```css
--cursor-size
--cursor-color
--cursor-glow
--cursor-speed
--cursor-scale
```

---

## Browser Support

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari

---

## Accessibility

The component respects reduced-motion preferences and degrades gracefully when animations are disabled.

---

## Author

Created for EaseMotion CSS under GSSoC 2026.
