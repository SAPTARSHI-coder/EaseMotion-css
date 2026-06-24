# EaseMotion Toast Notification System v2

An advanced, highly customizable Toast Notification System for EaseMotion CSS. This component provides non-intrusive, real-time feedback messages that appear temporarily on the screen to inform users about actions, system updates, or alerts.

## Overview

The Toast Notification System v2 is a complete overhaul of standard toast components. It features smooth slide and fade animations, a stacking system for multiple notifications, an auto-dismiss timer with a visual progress bar, and comprehensive responsive support. It requires a small amount of vanilla JavaScript for dynamic creation.

## Features

- **Advanced Animations**: Smooth cubic-bezier slide-in, slide-out, and progress bar animations.
- **Auto-Dismiss with Progress Bar**: Visual indicator of time remaining before the toast disappears.
- **Hover to Pause**: Hovering over the toast pauses the dismiss timer to allow reading.
- **Stacking Support**: Multiple toasts stack cleanly with a flexbox-based gap system.
- **Positioning Engine**: Easily place toasts in any corner or the top center of the screen.
- **Interactive Actions**: Supports buttons inside the toast for actions (e.g., "Update Now", "Undo").
- **Dark Mode & Glassmorphism**: Optional modifiers for a translucent glass effect or dark mode styling.

## Variants

1. **Success**: Green icon and progress bar, used for successful actions.
2. **Error**: Red icon and progress bar, used for failed actions or critical errors.
3. **Warning**: Yellow/Orange icon and progress bar, used for cautious information.
4. **Info**: Blue icon and progress bar, used for general system information.
5. **Loading**: Persistent toast with a spinning icon. Does not auto-dismiss.
6. **Action**: Persistent toast containing action buttons. Does not auto-dismiss.

## Positioning System

You can position the notification container using the following classes on the `.ease-toast-container`:
- `top-right` (Default)
- `top-left`
- `bottom-right`
- `bottom-left`
- `center` (Stacks in the top center of the viewport)

## Usage Example

### HTML Structure

Add the empty container to your body:

```html
<div id="toast-container" class="ease-toast-container top-right"></div>
```

### Dynamic Creation (JavaScript)

You must append the toast elements dynamically. Refer to `demo.html` for a full implementation of the JS logic.

```html
<div class="ease-toast ease-toast-success">
  <div class="ease-toast-content">
    <div class="ease-toast-icon">...svg...</div>
    <div class="ease-toast-text">
      <span class="ease-toast-title">Success</span>
      <span class="ease-toast-desc">Action completed successfully.</span>
    </div>
    <button class="ease-toast-close">...svg...</button>
  </div>
  <div class="ease-toast-progress-bar">
    <div class="ease-toast-progress" style="animation-duration: 5000ms;"></div>
  </div>
</div>
```

## Customization

You can fully customize the styling by overriding the CSS variables in `:root`:

```css
:root {
  --toast-bg: #ffffff;
  --toast-text: #1f2937;
  --toast-radius: 12px;
  --toast-success: #10b981;
  /* Add more overrides here */
}
```
