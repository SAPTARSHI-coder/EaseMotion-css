# Notification Toast Component

## Overview

A reusable notification toast component built with pure HTML and CSS.

The component demonstrates three common notification states:

- Success
- Warning
- Error

## Features

- Pure HTML and CSS
- Responsive layout
- Success, warning, and error variants
- Smooth EaseMotion-style entrance animation
- Accessible color-coded feedback
- Reduced-motion support
- No JavaScript required

## Usage

### Success Toast

```html
<div class="toast toast-success">
  <div class="toast-icon">✓</div>
  <div class="toast-content">
    <h3>Success</h3>
    <p>Your changes have been saved.</p>
  </div>
</div>
```

### Warning Toast

```html
<div class="toast toast-warning">
  <div class="toast-icon">!</div>
  <div class="toast-content">
    <h3>Warning</h3>
    <p>Your storage space is running low.</p>
  </div>
</div>
```

### Error Toast

```html
<div class="toast toast-error">
  <div class="toast-icon">✕</div>
  <div class="toast-content">
    <h3>Error</h3>
    <p>Something went wrong.</p>
  </div>
</div>
```

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Accessibility

A reduced-motion fallback is included using:

```css
@media (prefers-reduced-motion: reduce)
```

This disables animations for users who prefer reduced motion.

## Why it fits EaseMotion CSS

This component combines subtle motion, clear visual feedback, responsive design, and reusable styling while remaining lightweight and JavaScript-free.