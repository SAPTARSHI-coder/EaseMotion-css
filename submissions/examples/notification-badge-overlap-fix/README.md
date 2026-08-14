# Notification Badge Overlap Fix

## Description

This example fixes the issue where notification badges overlap the notification icon when displaying larger values such as **99+** or **100**.

## Features

- Supports multi-digit badge values
- Uses `min-width` instead of a fixed width
- Horizontally centers badge text with Flexbox
- Responsive layout
- Pure HTML & CSS

## Usage

```html
<button class="notification-btn">
    🔔
    <span class="badge">99+</span>
</button>
```

## Fix Applied

- Replaced fixed badge width with `min-width`
- Added horizontal padding for variable-length values
- Centered text using Flexbox
- Positioned the badge to avoid overlapping the notification icon

## Files

- demo.html
- style.css
- README.md