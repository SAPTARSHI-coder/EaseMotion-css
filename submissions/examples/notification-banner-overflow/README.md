# Notification Banner Overflow Fix

## Description

This submission fixes an issue where notification banners containing long messages and action buttons overflow or become misaligned on smaller screens. The layout now wraps content properly while keeping the action button accessible.

## Features

- Prevents notification content overflow
- Responsive button layout
- Proper text wrapping
- Pure CSS implementation
- Mobile-friendly design

## Usage

```html
<div class="notification-banner">
  <div class="notification-text">
    Your notification message goes here.
  </div>

  <button class="notification-btn">
    Dismiss
  </button>
</div>
```

## Benefits

- Improves readability on mobile devices
- Prevents button overflow
- Maintains consistent spacing
- Easy to integrate into existing notification/banner components
```