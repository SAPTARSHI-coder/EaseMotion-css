# EaseMotion Progress Indicator Component

A modern, highly customizable Progress Indicator Component for EaseMotion CSS. This component provides visual feedback for ongoing processes such as loading, file uploads, multi-step flows, and task completion.

## Overview

The Progress Indicator Component is designed to be lightweight and accessible. It uses clean CSS classes for styling and smooth transitions for fill animations. It is designed to look great out-of-the-box with a modern SaaS-style dashboard aesthetic.

## Features

- **Smooth Animations**: Includes smooth width transitions, animated gradients, and striped motion effects.
- **Indeterminate State**: Features a loading animation for processes with an unknown duration.
- **Responsive Design**: Automatically adapts to smaller screens, optimizing labels and layouts.
- **Reusable CSS Classes**: Built with a modular CSS architecture using variables for easy theming.
- **No Dependencies**: Uses 100% vanilla CSS and HTML.

## Variants

1. **Linear Progress Bar**: Classic progress bar with a smooth fill transition.
2. **Striped Progress Bar**: Progress bar with a static striped pattern.
3. **Animated Gradient Progress Bar**: Progress bar with a moving striped or gradient pattern.
4. **Indeterminate Loading Bar**: Continuous back-and-forth animation for unknown progress.
5. **Circular Progress Indicator**: SVG-based circular progress with text inside.
6. **Step-based Progress Tracker**: Multi-step flow indicator (e.g., checkout process).
7. **File Upload Progress Bar**: Combined UI with an icon, file name, size, and progress bar.

## Usage Example

### HTML Structure (Linear Progress)

```html
<div class="ease-progress-container">
  <div class="ease-progress-header">
    <span>Downloading update...</span>
    <span>45%</span>
  </div>
  <div class="ease-progress-track">
    <div class="ease-progress-fill" style="width: 45%;"></div>
  </div>
</div>
```

### HTML Structure (Indeterminate)

```html
<div class="ease-progress-container ease-progress-indeterminate">
  <div class="ease-progress-header">
    <span>Connecting...</span>
  </div>
  <div class="ease-progress-track">
    <div class="ease-progress-fill"></div>
  </div>
</div>
```

## Customization

You can easily customize the progress indicators by overriding the CSS variables defined in `:root`:

```css
:root {
  --ease-prog-bg: #e5e7eb;
  --ease-prog-fill: #3b82f6;
  --ease-prog-radius: 9999px;
  /* Add more overrides here */
}
```
