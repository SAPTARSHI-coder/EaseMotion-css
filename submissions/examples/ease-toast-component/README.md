# Ease Toast Notification Component

A modern, responsive, and highly customizable **Toast Notification Component** built for **EaseMotion CSS**. This component displays lightweight alert cards, status badges, actions, and auto-dismiss loading bars in multiple fixed placements on the screen.

---

## Features

- **Pure CSS Layout**: Fully styled layout blocks, progress meters, hover actions, and entry animations.
- **10 Design Variants**: Success, Error, Warning, Info, Primary, Secondary, Gradient, Minimal, Outline, and Dark themes.
- **Fixed Placements**: Align alerts to `top-right`, `top-left`, `bottom-right`, `bottom-left`, `top-center`, or `bottom-center`.
- **Dismiss Timer Integration**: Shrinking inline progress indicators that pause their countdown when hovered.
- **Flexible Content**: Support for icons, titles, bodies, custom action triggers, and close buttons.

---

## Installation & Setup

1. Copy `style.css` into your project directory.
2. Link it in your HTML:
```html
<link rel="stylesheet" href="path/to/ease-toast-component/style.css">
```

---

## HTML Structural Guide

A standard toast notification card is composed of the following selectors:

```html
<!-- Fixed Placement Wrapper -->
<div class="ease-toast-container top-right">
  
  <!-- Toast Card (Slide-In entry class applied) -->
  <div class="ease-toast success anim-slide-right">
    
    <!-- Icon Placeholder -->
    <div class="ease-toast-icon">
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    </div>
    
    <!-- Text Content -->
    <div class="ease-toast-content">
      <div class="ease-toast-title">File Saved</div>
      <div class="ease-toast-message">Your work is synced to cloud storage.</div>
    </div>
    
    <!-- Optional Action Button -->
    <button class="ease-toast-action">Undo</button>
    
    <!-- Close Cross Button -->
    <button class="ease-toast-close">
      <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
    
    <!-- Optional Progress Timer -->
    <div class="ease-toast-progress"></div>
    
  </div>
</div>
```

---

## Reference & Modifier Classes

### Position Placements (applied to `.ease-toast-container`)
- `.top-right`: Top right corner.
- `.top-left`: Top left corner.
- `.bottom-right`: Bottom right corner.
- `.bottom-left`: Bottom left corner.
- `.top-center`: Top centered, slides down.
- `.bottom-center`: Bottom centered, slides up.

### Themes & Variants (applied to `.ease-toast`)
- `.success`: Green theme.
- `.error`: Red theme.
- `.warning`: Yellow theme.
- `.info`: Light blue theme.
- `.primary`: Indigo brand theme.
- `.secondary`: Slate gray theme.
- `.gradient`: Rainbow sunset purple gradient.
- `.minimal`: Minimal left-accent bar border.
- `.outline`: Strong colored outline with semi-transparent background.
- `.dark`: Midnight black card.

### Transition Animations
- `.anim-slide-right`: Entry slide from right.
- `.anim-slide-left`: Entry slide from left.
- `.anim-slide-bottom`: Entry slide from bottom.
- `.anim-slide-top`: Entry slide from top.
- `.anim-fade`: Fading opacity scale zoom.
- `.exit`: Triggers dismissal exit shrink animation.

---

## Customization

Default color settings can be customized at the root or within specific containers:

```css
:root {
  --toast-border-radius: 8px; /* Curve degree */
  --toast-duration: 4s; /* Timer animation duration */
  --toast-bg-success: #10b981;
  --toast-bg-error: #ef4444;
}
```
