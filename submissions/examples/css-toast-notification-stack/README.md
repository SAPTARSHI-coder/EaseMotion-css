# CSS Progressive Toast Notification Stack

A lightweight, accessible, and responsive Toast Notification Stacking component built using pure HTML5 and CSS3. Prevents notification overlap through dynamic vertical flex stacking and clean spacing margins.

## Overview

The Progressive Toast Notification Stack solves the issue of concurrent toast notifications stacking on top of each other at identical coordinates. Using a container with `display: flex; flex-direction: column-reverse; gap: 0.85rem;`, active toast notifications automatically stack vertically with progressive margins, ensuring all messages remain readable.

## Features

- **Pure HTML5 & CSS3**: Zero JavaScript dependencies required.
- **Coordinate Overlap Fix**: Dynamic vertical flex layout prevents overlap.
- **ARIA Live Announcements**: Container uses `aria-live="polite"` and `role="status"` for assistive technology.
- **WCAG AA Compliance**: Variant color themes pass accessibility contrast guidelines.
- **Prefers-Reduced-Motion Support**: Disables translation physics for motion-sensitive users.
- **Responsive Mobile Layout**: Fixed toast positioning adapting seamlessly to small mobile screens.

## Folder Structure

```
css-toast-notification-stack/
├── demo.html    # HTML structure with interactive trigger checkboxes
├── style.css    # Modern CSS layout, variables, flex-stacking & transitions
└── README.md    # Component documentation
```

## Usage

Include `style.css` in your document:

```html
<link rel="stylesheet" href="style.css">
```

## HTML Example

```html
<section class="toast-container" aria-live="polite" aria-atomic="true" role="status">
  <!-- Toast Card -->
  <div class="toast toast-success">
    <div class="toast-icon" aria-hidden="true">&#10003;</div>
    <div class="toast-content">
      <h2 class="toast-title">Settings Saved</h2>
      <p class="toast-message">Your profile changes were synchronized successfully.</p>
    </div>
    <span class="toast-close" aria-label="Dismiss notification">&times;</span>
  </div>
</section>
```

## CSS Variables

Customizable design tokens defined in `:root`:

```css
:root {
  --bg-main: #0f172a;
  --bg-card: #1e293b;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border-subtle: #334155;
  --focus-ring: #38bdf8;

  /* Toast Variants */
  --toast-success-bg: #064e3b;
  --toast-success-border: #10b981;

  --toast-warning-bg: #78350f;
  --toast-warning-border: #f59e0b;

  --toast-info-bg: #1e3a8a;
  --toast-info-border: #3b82f6;

  --toast-width: 360px;
  --radius-md: 12px;
}
```

## Customization

You can adjust toast width or container placement easily via CSS custom properties:

```css
.toast-container {
  --toast-width: 400px;
  bottom: 2rem;
  right: 2rem;
}
```

## Accessibility

- **ARIA Live Region**: `aria-live="polite"` announces incoming toasts without interrupting screen readers.
- **Keyboard Controls**: Focus indicators for interactive controls and close buttons.
- **Contrast**: High contrast background-to-text color contrast ratio (>4.5:1).

## Responsive Behaviour

- **Desktop (600px+)**: Fixed bottom-right overlay container with 360px width.
- **Mobile (<480px)**: Container spans full width (`left: 1rem; right: 1rem;`) at bottom of mobile viewports.

## Browser Compatibility

- Chrome / Edge 105+ (Supports `:has()` selector)
- Firefox 121+
- Safari 15.4+
- iOS Safari / Android Chrome
